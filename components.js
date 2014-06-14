var PIG_SPEED = 1000;
// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },

  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});

// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});

// A Tree is just an Actor with a certain sprite
Crafty.c('Tree', {
  init: function() {
    this.requires('Actor, Solid, spr_tree');
  },
});

// A Bush is just an Actor with a certain sprite
Crafty.c('Bush', {
  init: function() {
    this.requires('Actor, Solid, spr_bush');
  },
});

// This is the player-controlled character
Crafty.c('PlayerCharacter', {
  init: function() {
    this.requires('Actor, Fourway, Collision, spr_player, SpriteAnimation')
      .fourway(4)
      .stopOnSolids()
      .onHit('Pig', this.savePig)
      // These next lines define our four animations
      //  each call to .animate specifies:
      //  - the name of the animation
      //  - the x and y coordinates within the sprite
      //     map at which the animation set begins
      //  - the number of animation frames *in addition to* the first one
      .animate('PlayerMovingUp',    0, 1, 0)
      .animate('PlayerMovingRight', 0, 1, 0)
      .animate('PlayerMovingDown',  0, 1, 0)
      .animate('PlayerMovingLeft',  0, 1, 0);

    // Watch for a change of direction and switch animations accordingly
    var animation_speed = 8;
    this.bind('NewDirection', function(data) {
      if (data.x > 0) {
        this.animate('PlayerMovingRight', animation_speed, -1);
      } else if (data.x < 0) {
        this.animate('PlayerMovingLeft', animation_speed, -1);
      } else if (data.y > 0) {
        this.animate('PlayerMovingDown', animation_speed, -1);
      } else if (data.y < 0) {
        this.animate('PlayerMovingUp', animation_speed, -1);
      } else {
        this.stop();
      }
    });
  },

  // Registers a stop-movement function to be called when
  //  this entity hits an entity with the "Solid" component
  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },

  // Stops the movement
  stopMovement: function() {
    this._speed = 0;
    if (this._movement) {
      this.x -= this._movement.x;
      this.y -= this._movement.y;
    }
  },

  // Respond to this player saving a pig
  savePig: function(data) {
    pig = data[0].obj;
    pig.save();
  }
});

// A pig is a tile on the grid that the PC must 'save' in order to win the game
Crafty.c('Pig', {
  init: function() {
    this.requires('Actor, Collision, spr_pig').stopOnSolids();
  },

  movePig: function() {
    var direction = parseInt(((Math.random() * 100) % 4));
    switch (direction) {
      case 0: // up
        this.y += Game.map_grid.tile.height;
        break;
      case 1: // right
        this.x += Game.map_grid.tile.width;
        break;
      case 2: // down
        this.y -= Game.map_grid.tile.height;
        break;
      case 3:  // left
        this.x -= Game.map_grid.tile.width;
        break;
    }

    this.delay(this.movePig, PIG_SPEED);
  },

  // Registers a stop-movement function to be called when
  //  this entity hits an entity with the "Solid" component
  stopOnSolids: function() {
    this.onHit('Solid', this.stopMovement);

    return this;
  },

  // Stops the movement
  stopMovement: function(data) {
    console.log(data);
  },

  // Process a saved pig
  save: function() {
    this.destroy();
    Crafty.audio.play('oink');
    Crafty.trigger('PigSaved', this);
  }
});