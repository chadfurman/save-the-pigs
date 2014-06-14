document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-d1006a2c03378524a2bad8f05b286964.css">')
document.write('<div id=\"gist4382530\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-components-js-L1\" rel=\"file-components-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L2\" rel=\"file-components-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L3\" rel=\"file-components-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L4\" rel=\"file-components-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L5\" rel=\"file-components-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L6\" rel=\"file-components-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L7\" rel=\"file-components-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L8\" rel=\"file-components-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L9\" rel=\"file-components-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L10\" rel=\"file-components-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L11\" rel=\"file-components-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L12\" rel=\"file-components-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L13\" rel=\"file-components-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L14\" rel=\"file-components-js-L14\">14<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L15\" rel=\"file-components-js-L15\">15<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L16\" rel=\"file-components-js-L16\">16<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L17\" rel=\"file-components-js-L17\">17<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L18\" rel=\"file-components-js-L18\">18<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L19\" rel=\"file-components-js-L19\">19<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L20\" rel=\"file-components-js-L20\">20<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L21\" rel=\"file-components-js-L21\">21<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L22\" rel=\"file-components-js-L22\">22<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L23\" rel=\"file-components-js-L23\">23<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L24\" rel=\"file-components-js-L24\">24<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L25\" rel=\"file-components-js-L25\">25<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L26\" rel=\"file-components-js-L26\">26<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L27\" rel=\"file-components-js-L27\">27<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L28\" rel=\"file-components-js-L28\">28<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L29\" rel=\"file-components-js-L29\">29<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L30\" rel=\"file-components-js-L30\">30<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L31\" rel=\"file-components-js-L31\">31<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L32\" rel=\"file-components-js-L32\">32<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L33\" rel=\"file-components-js-L33\">33<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L34\" rel=\"file-components-js-L34\">34<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-components-js-LC1\"><span class=\"c1\">// The Grid component allows an element to be located<\/span><\/div><div class=\"line\" id=\"file-components-js-LC2\"><span class=\"c1\">//  on a grid of tiles<\/span><\/div><div class=\"line\" id=\"file-components-js-LC3\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">c<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Grid&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC4\">  <span class=\"nx\">init<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC5\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">attr<\/span><span class=\"p\">({<\/span><\/div><div class=\"line\" id=\"file-components-js-LC6\">      <span class=\"nx\">w<\/span><span class=\"o\">:<\/span> <span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">width<\/span><span class=\"p\">,<\/span><\/div><div class=\"line\" id=\"file-components-js-LC7\">      <span class=\"nx\">h<\/span><span class=\"o\">:<\/span> <span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">height<\/span><\/div><div class=\"line\" id=\"file-components-js-LC8\">    <span class=\"p\">})<\/span><\/div><div class=\"line\" id=\"file-components-js-LC9\">  <span class=\"p\">},<\/span><\/div><div class=\"line\" id=\"file-components-js-LC10\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC11\">  <span class=\"c1\">// Locate this entity at the given position on the grid<\/span><\/div><div class=\"line\" id=\"file-components-js-LC12\">  <span class=\"nx\">at<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">(<\/span><span class=\"nx\">x<\/span><span class=\"p\">,<\/span> <span class=\"nx\">y<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC13\">    <span class=\"k\">if<\/span> <span class=\"p\">(<\/span><span class=\"nx\">x<\/span> <span class=\"o\">===<\/span> <span class=\"kc\">undefined<\/span> <span class=\"o\">&amp;&amp;<\/span> <span class=\"nx\">y<\/span> <span class=\"o\">===<\/span> <span class=\"kc\">undefined<\/span><span class=\"p\">)<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC14\">      <span class=\"k\">return<\/span> <span class=\"p\">{<\/span> <span class=\"nx\">x<\/span><span class=\"o\">:<\/span> <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">x<\/span><span class=\"o\">/<\/span><span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">width<\/span><span class=\"p\">,<\/span> <span class=\"nx\">y<\/span><span class=\"o\">:<\/span> <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">y<\/span><span class=\"o\">/<\/span><span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">height<\/span> <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-components-js-LC15\">    <span class=\"p\">}<\/span> <span class=\"k\">else<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC16\">      <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">attr<\/span><span class=\"p\">({<\/span> <span class=\"nx\">x<\/span><span class=\"o\">:<\/span> <span class=\"nx\">x<\/span> <span class=\"o\">*<\/span> <span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">width<\/span><span class=\"p\">,<\/span> <span class=\"nx\">y<\/span><span class=\"o\">:<\/span> <span class=\"nx\">y<\/span> <span class=\"o\">*<\/span> <span class=\"nx\">Game<\/span><span class=\"p\">.<\/span><span class=\"nx\">map_grid<\/span><span class=\"p\">.<\/span><span class=\"nx\">tile<\/span><span class=\"p\">.<\/span><span class=\"nx\">height<\/span> <span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-components-js-LC17\">      <span class=\"k\">return<\/span> <span class=\"k\">this<\/span><span class=\"p\">;<\/span><\/div><div class=\"line\" id=\"file-components-js-LC18\">    <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-components-js-LC19\">  <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-components-js-LC20\"><span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-components-js-LC21\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC22\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">c<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Tree&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC23\">  <span class=\"nx\">init<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC24\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">requires<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;2D, Canvas, Grid, Color&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC25\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">color<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;rgb(20, 125, 40)&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC26\">  <span class=\"p\">},<\/span><\/div><div class=\"line\" id=\"file-components-js-LC27\"><span class=\"p\">});<\/span><\/div><div class=\"line\" id=\"file-components-js-LC28\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC29\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">c<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Bush&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC30\">  <span class=\"nx\">init<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC31\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">requires<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;2D, Canvas, Grid, Color&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC32\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">color<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;rgb(20, 185, 40)&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC33\">  <span class=\"p\">},<\/span><\/div><div class=\"line\" id=\"file-components-js-LC34\"><span class=\"p\">});<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/darrentorpey/6f1c9327c6df5a332e07/raw/components.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/darrentorpey/6f1c9327c6df5a332e07#file-components-js\">components.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')