document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-d1006a2c03378524a2bad8f05b286964.css">')
document.write('<div id=\"gist4462559\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-components-js-L1\" rel=\"file-components-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L2\" rel=\"file-components-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L3\" rel=\"file-components-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L4\" rel=\"file-components-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L5\" rel=\"file-components-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L6\" rel=\"file-components-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L7\" rel=\"file-components-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L8\" rel=\"file-components-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L9\" rel=\"file-components-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L10\" rel=\"file-components-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L11\" rel=\"file-components-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L12\" rel=\"file-components-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L13\" rel=\"file-components-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L14\" rel=\"file-components-js-L14\">14<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L15\" rel=\"file-components-js-L15\">15<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L16\" rel=\"file-components-js-L16\">16<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L17\" rel=\"file-components-js-L17\">17<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L18\" rel=\"file-components-js-L18\">18<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L19\" rel=\"file-components-js-L19\">19<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L20\" rel=\"file-components-js-L20\">20<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L21\" rel=\"file-components-js-L21\">21<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L22\" rel=\"file-components-js-L22\">22<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L23\" rel=\"file-components-js-L23\">23<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L24\" rel=\"file-components-js-L24\">24<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L25\" rel=\"file-components-js-L25\">25<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L26\" rel=\"file-components-js-L26\">26<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L27\" rel=\"file-components-js-L27\">27<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L28\" rel=\"file-components-js-L28\">28<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L29\" rel=\"file-components-js-L29\">29<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L30\" rel=\"file-components-js-L30\">30<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L31\" rel=\"file-components-js-L31\">31<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L32\" rel=\"file-components-js-L32\">32<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L33\" rel=\"file-components-js-L33\">33<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L34\" rel=\"file-components-js-L34\">34<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L35\" rel=\"file-components-js-L35\">35<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L36\" rel=\"file-components-js-L36\">36<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L37\" rel=\"file-components-js-L37\">37<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L38\" rel=\"file-components-js-L38\">38<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L39\" rel=\"file-components-js-L39\">39<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L40\" rel=\"file-components-js-L40\">40<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L41\" rel=\"file-components-js-L41\">41<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-components-js-LC1\"><span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-components-js-LC2\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC3\"><span class=\"c1\">// This is the player-controlled character<\/span><\/div><div class=\"line\" id=\"file-components-js-LC4\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">c<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerCharacter&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC5\">  <span class=\"nx\">init<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC6\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">requires<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Actor, Fourway, Collision, spr_player, SpriteAnimation&#39;<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC7\">      <span class=\"p\">.<\/span><span class=\"nx\">fourway<\/span><span class=\"p\">(<\/span><span class=\"mi\">4<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC8\">      <span class=\"p\">.<\/span><span class=\"nx\">stopOnSolids<\/span><span class=\"p\">()<\/span><\/div><div class=\"line\" id=\"file-components-js-LC9\">      <span class=\"p\">.<\/span><span class=\"nx\">onHit<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Village&#39;<\/span><span class=\"p\">,<\/span> <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">visitVillage<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC10\">      <span class=\"c1\">// These next lines define our four animations<\/span><\/div><div class=\"line\" id=\"file-components-js-LC11\">      <span class=\"c1\">//  each call to .animate specifies:<\/span><\/div><div class=\"line\" id=\"file-components-js-LC12\">      <span class=\"c1\">//  - the name of the animation<\/span><\/div><div class=\"line\" id=\"file-components-js-LC13\">      <span class=\"c1\">//  - the x and y coordinates within the sprite<\/span><\/div><div class=\"line\" id=\"file-components-js-LC14\">      <span class=\"c1\">//     map at which the animation set begins<\/span><\/div><div class=\"line\" id=\"file-components-js-LC15\">      <span class=\"c1\">//  - the number of animation frames *in addition to* the first one<\/span><\/div><div class=\"line\" id=\"file-components-js-LC16\">      <span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingUp&#39;<\/span><span class=\"p\">,<\/span>    <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC17\">      <span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingRight&#39;<\/span><span class=\"p\">,<\/span> <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">1<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC18\">      <span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingDown&#39;<\/span><span class=\"p\">,<\/span>  <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC19\">      <span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingLeft&#39;<\/span><span class=\"p\">,<\/span>  <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">3<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC20\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC21\">    <span class=\"c1\">// Watch for a change of direction and switch animations accordingly<\/span><\/div><div class=\"line\" id=\"file-components-js-LC22\">    <span class=\"kd\">var<\/span> <span class=\"nx\">animation_speed<\/span> <span class=\"o\">=<\/span> <span class=\"mi\">8<\/span><span class=\"p\">;<\/span><\/div><div class=\"line\" id=\"file-components-js-LC23\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">bind<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;NewDirection&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span><span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC24\">      <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">.<\/span><span class=\"nx\">x<\/span> <span class=\"o\">&gt;<\/span> <span class=\"mi\">0<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC25\">        <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingRight&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">animation_speed<\/span><span class=\"p\">,<\/span> <span class=\"o\">-<\/span><span class=\"mi\">1<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC26\">      <span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">.<\/span><span class=\"nx\">x<\/span> <span class=\"o\">&lt;<\/span> <span class=\"mi\">0<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC27\">        <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingLeft&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">animation_speed<\/span><span class=\"p\">,<\/span> <span class=\"o\">-<\/span><span class=\"mi\">1<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC28\">      <span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">.<\/span><span class=\"nx\">y<\/span> <span class=\"o\">&gt;<\/span> <span class=\"mi\">0<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC29\">        <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingDown&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">animation_speed<\/span><span class=\"p\">,<\/span> <span class=\"o\">-<\/span><span class=\"mi\">1<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC30\">      <span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">data<\/span><span class=\"p\">.<\/span><span class=\"nx\">y<\/span> <span class=\"o\">&lt;<\/span> <span class=\"mi\">0<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC31\">        <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">animate<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerMovingUp&#39;<\/span><span class=\"p\">,<\/span> <span class=\"nx\">animation_speed<\/span><span class=\"p\">,<\/span> <span class=\"o\">-<\/span><span class=\"mi\">1<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC32\">      <span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC33\">        <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">stop<\/span><span class=\"p\">();<\/span><\/div><div class=\"line\" id=\"file-components-js-LC34\">      <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-components-js-LC35\">    <span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-components-js-LC36\">  <span class=\"p\">},<\/span><\/div><div class=\"line\" id=\"file-components-js-LC37\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC38\">  <span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-components-js-LC39\"><span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-components-js-LC40\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC41\"><span class=\"c1\">// ...<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/darrentorpey/3d848cc275e5a4ed6c4e/raw/components.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/darrentorpey/3d848cc275e5a4ed6c4e#file-components-js\">components.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-scenes-js-L1\" rel=\"file-scenes-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L2\" rel=\"file-scenes-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L3\" rel=\"file-scenes-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L4\" rel=\"file-scenes-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L5\" rel=\"file-scenes-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L6\" rel=\"file-scenes-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L7\" rel=\"file-scenes-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L8\" rel=\"file-scenes-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L9\" rel=\"file-scenes-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L10\" rel=\"file-scenes-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L11\" rel=\"file-scenes-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L12\" rel=\"file-scenes-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L13\" rel=\"file-scenes-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L14\" rel=\"file-scenes-js-L14\">14<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L15\" rel=\"file-scenes-js-L15\">15<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L16\" rel=\"file-scenes-js-L16\">16<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L17\" rel=\"file-scenes-js-L17\">17<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L18\" rel=\"file-scenes-js-L18\">18<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L19\" rel=\"file-scenes-js-L19\">19<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L20\" rel=\"file-scenes-js-L20\">20<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L21\" rel=\"file-scenes-js-L21\">21<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L22\" rel=\"file-scenes-js-L22\">22<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L23\" rel=\"file-scenes-js-L23\">23<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L24\" rel=\"file-scenes-js-L24\">24<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L25\" rel=\"file-scenes-js-L25\">25<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L26\" rel=\"file-scenes-js-L26\">26<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L27\" rel=\"file-scenes-js-L27\">27<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L28\" rel=\"file-scenes-js-L28\">28<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L29\" rel=\"file-scenes-js-L29\">29<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L30\" rel=\"file-scenes-js-L30\">30<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L31\" rel=\"file-scenes-js-L31\">31<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L32\" rel=\"file-scenes-js-L32\">32<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L33\" rel=\"file-scenes-js-L33\">33<\/span>\n            <span class=\"line-number\" id=\"file-scenes-js-L34\" rel=\"file-scenes-js-L34\">34<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-scenes-js-LC1\"><span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC2\">&nbsp;<\/div><div class=\"line\" id=\"file-scenes-js-LC3\"><span class=\"c1\">// Loading scene<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC4\"><span class=\"c1\">// -------------<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC5\"><span class=\"c1\">// Handles the loading of binary assets such as images and audio files<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC6\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">scene<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Loading&#39;<\/span><span class=\"p\">,<\/span> <span class=\"kd\">function<\/span><span class=\"p\">(){<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC7\">  <span class=\"c1\">// Draw some text for the player to see in case the file<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC8\">  <span class=\"c1\">//  takes a noticeable amount of time to load<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC9\">  <span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC10\">&nbsp;<\/div><div class=\"line\" id=\"file-scenes-js-LC11\">  <span class=\"c1\">// Load our sprite map image<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC12\">  <span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">load<\/span><span class=\"p\">([<\/span><span class=\"s1\">&#39;assets/16x16_forest_1.gif&#39;<\/span><span class=\"p\">,<\/span> <span class=\"s1\">&#39;assets/hunter.png&#39;<\/span><span class=\"p\">],<\/span> <span class=\"kd\">function<\/span><span class=\"p\">(){<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC13\">    <span class=\"c1\">// Once the images are loaded...<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC14\">&nbsp;<\/div><div class=\"line\" id=\"file-scenes-js-LC15\">    <span class=\"c1\">// Define the individual sprites in the image<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC16\">    <span class=\"c1\">// Each one (spr_tree, etc.) becomes a component<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC17\">    <span class=\"c1\">// These components&#39; names are prefixed with &quot;spr_&quot;<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC18\">    <span class=\"c1\">//  to remind us that they simply cause the entity<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC19\">    <span class=\"c1\">//  to be drawn with a certain sprite<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC20\">    <span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">sprite<\/span><span class=\"p\">(<\/span><span class=\"mi\">16<\/span><span class=\"p\">,<\/span> <span class=\"s1\">&#39;assets/16x16_forest_1.gif&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC21\">      <span class=\"nx\">spr_tree<\/span><span class=\"o\">:<\/span>    <span class=\"p\">[<\/span><span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">0<\/span><span class=\"p\">],<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC22\">      <span class=\"nx\">spr_bush<\/span><span class=\"o\">:<\/span>    <span class=\"p\">[<\/span><span class=\"mi\">1<\/span><span class=\"p\">,<\/span> <span class=\"mi\">0<\/span><span class=\"p\">],<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC23\">      <span class=\"nx\">spr_village<\/span><span class=\"o\">:<\/span> <span class=\"p\">[<\/span><span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">1<\/span><span class=\"p\">]<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC24\">    <span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC25\">&nbsp;<\/div><div class=\"line\" id=\"file-scenes-js-LC26\">    <span class=\"c1\">// Define the PC&#39;s sprite to be the first sprite in the third row of the<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC27\">    <span class=\"c1\">//  animation sprite map<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC28\">    <span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">sprite<\/span><span class=\"p\">(<\/span><span class=\"mi\">16<\/span><span class=\"p\">,<\/span> <span class=\"s1\">&#39;assets/hunter.png&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC29\">      <span class=\"nx\">spr_player<\/span><span class=\"o\">:<\/span>  <span class=\"p\">[<\/span><span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">],<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC30\">    <span class=\"p\">},<\/span> <span class=\"mi\">0<\/span><span class=\"p\">,<\/span> <span class=\"mi\">2<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC31\">&nbsp;<\/div><div class=\"line\" id=\"file-scenes-js-LC32\">    <span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC33\">  <span class=\"p\">})<\/span><\/div><div class=\"line\" id=\"file-scenes-js-LC34\"><span class=\"p\">});<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/darrentorpey/3d848cc275e5a4ed6c4e/raw/scenes.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/darrentorpey/3d848cc275e5a4ed6c4e#file-scenes-js\">scenes.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')
