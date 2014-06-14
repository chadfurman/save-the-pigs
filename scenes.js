// Game scene
// -------------
// Runs the core gameplay loop
Crafty.scene('Game', function() {
  // A 2D array to keep track of all occupied tiles
  this.occupied = new Array(Game.map_grid.width);
  for (var i = 0; i < Game.map_grid.width; i++) {
    this.occupied[i] = new Array(Game.map_grid.height);
    for (var y = 0; y < Game.map_grid.height; y++) {
      this.occupied[i][y] = false;
    }
  }

  // Player character, placed at 5, 5 on our grid
  this.player = Crafty.e('PlayerCharacter').at(5, 5);
  this.occupied[this.player.at().x][this.player.at().y] = true;

  // Place a tree at every edge square on our grid of 16x16 tiles
  for (var x = 0; x < Game.map_grid.width; x++) {
    for (var y = 0; y < Game.map_grid.height; y++) {
      var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

      if (at_edge) {
        // Place a tree entity at the current tile
        Crafty.e('Tree').at(x, y);
        this.occupied[x][y] = true;
      } else if (Math.random() < 0.06 && !this.occupied[x][y]) {
        // Place a bush entity at the current tile
        Crafty.e('Bush').at(x, y);
        this.occupied[x][y] = true;
      }
    }
  }

  // Generate up to five villages on the map in random locations
  var max_pigs = 20;
  for (var x = 0; x < Game.map_grid.width; x++) {
    for (var y = 0; y < Game.map_grid.height; y++) {
      if (Math.random() < 0.05) {
        if (Crafty('Pig').length < max_pigs && !this.occupied[x][y]) {
          Crafty.e('Pig, Delay').at(x, y).delay(function() {
            this.movePig(this);
          }, 100);
        }
      }
    }
  }

  // Show the victory screen once all villages are visisted
  this.show_victory = this.bind('PigSaved', function() {
    if (!Crafty('Pig').length) {
      Crafty.scene('Victory');
    }
  });
}, function() {
  // Remove our event binding from above so that we don't
  //  end up having multiple redundant event watchers after
  //  multiple restarts of the game
  this.unbind('PigSaved', this.show_victory);
});


// Victory scene
// -------------
// Tells the player when they've won and lets them start a new game
Crafty.scene('Victory', function() {
  // Display some text in celebration of the victory
  Crafty.e('2D, DOM, Text')
    .attr({ x: 20, y: 20, w: 300, h: 100 })
    .text('<h1>Victory!</h1><p>Save more pigs offline by going vegan!</p><h3>Press a key to play again...</h3>');

  // Watch for the player to press a key, then restart the game
  //  when a key is pressed
  this.restart_game = this.bind('KeyDown', function() {
    Crafty.scene('Game');
  });
}, function() {
  // Remove our event binding from above so that we don't
  //  end up having multiple redundant event watchers after
  //  multiple restarts of the game
  this.unbind('KeyDown', this.restart_game);
});

// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Loading', function(){
  // Draw some text for the player to see in case the file
  //  takes a noticeable amount of time to load
  Crafty.e('2D, DOM, Text')
    .text('Loading...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);

  // Load our sprite map image
  Crafty.load([
    'stp.png',
    'oink.mp3',
    'oink.wav',
    'oink.ogg'
   ], function(){
    // Once the image is loaded...

    // Define the individual sprites in the image
    // Each one (spr_tree, etc.) becomes a component
    // These components' names are prefixed with "spr_"
    //  to remind us that they simply cause the entity
    //  to be drawn with a certain sprite
    Crafty.sprite(16, 'stp.png', {
      spr_tree:    [1, 1],
      spr_bush:    [0, 0],
      spr_pig: [1, 0],
      spr_player:  [0, 1]
    }, 0, 0, 1);

     // Define our sounds for later use
    Crafty.audio.add({
      oink: ['oink.mp3',
              'oink.ogg',
              'oink.wavs']
    });
    // Now that our sprites are ready to draw, start the game
    Crafty.scene('Game');
  })
});