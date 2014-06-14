document.write('<link rel="stylesheet" href="https://gist-assets.github.com/assets/embed-d1006a2c03378524a2bad8f05b286964.css">')
document.write('<div id=\"gist4383797\" class=\"gist\">\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-components-js-L1\" rel=\"file-components-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L2\" rel=\"file-components-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L3\" rel=\"file-components-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L4\" rel=\"file-components-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L5\" rel=\"file-components-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L6\" rel=\"file-components-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L7\" rel=\"file-components-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L8\" rel=\"file-components-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L9\" rel=\"file-components-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-components-js-L10\" rel=\"file-components-js-L10\">10<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-components-js-LC1\"><span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-components-js-LC2\">&nbsp;<\/div><div class=\"line\" id=\"file-components-js-LC3\"><span class=\"c1\">// This is the player-controlled character<\/span><\/div><div class=\"line\" id=\"file-components-js-LC4\"><span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">c<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerCharacter&#39;<\/span><span class=\"p\">,<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC5\">  <span class=\"nx\">init<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-components-js-LC6\">    <span class=\"k\">this<\/span><span class=\"p\">.<\/span><span class=\"nx\">requires<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;Actor, Fourway, Color&#39;<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC7\">      <span class=\"p\">.<\/span><span class=\"nx\">fourway<\/span><span class=\"p\">(<\/span><span class=\"mi\">4<\/span><span class=\"p\">)<\/span><\/div><div class=\"line\" id=\"file-components-js-LC8\">      <span class=\"p\">.<\/span><span class=\"nx\">color<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;rgb(20, 75, 40)&#39;<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-components-js-LC9\">  <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-components-js-LC10\"><span class=\"p\">});<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/darrentorpey/ece4aaf170f0af7ff233/raw/components.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/darrentorpey/ece4aaf170f0af7ff233#file-components-js\">components.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n            \n\n\n\n    <div class=\"file-data\">\n      <table cellpadding=\"0\" cellspacing=\"0\" class=\"lines highlight\">\n        <tr>\n          <td class=\"line-numbers\">\n            <span class=\"line-number\" id=\"file-game-js-L1\" rel=\"file-game-js-L1\">1<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L2\" rel=\"file-game-js-L2\">2<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L3\" rel=\"file-game-js-L3\">3<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L4\" rel=\"file-game-js-L4\">4<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L5\" rel=\"file-game-js-L5\">5<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L6\" rel=\"file-game-js-L6\">6<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L7\" rel=\"file-game-js-L7\">7<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L8\" rel=\"file-game-js-L8\">8<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L9\" rel=\"file-game-js-L9\">9<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L10\" rel=\"file-game-js-L10\">10<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L11\" rel=\"file-game-js-L11\">11<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L12\" rel=\"file-game-js-L12\">12<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L13\" rel=\"file-game-js-L13\">13<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L14\" rel=\"file-game-js-L14\">14<\/span>\n            <span class=\"line-number\" id=\"file-game-js-L15\" rel=\"file-game-js-L15\">15<\/span>\n          <\/td>\n          <td class=\"line-data\">\n            <pre class=\"line-pre\"><div class=\"line\" id=\"file-game-js-LC1\"><span class=\"nx\">Game<\/span> <span class=\"o\">=<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-game-js-LC2\">  <span class=\"c1\">// ...<\/span><\/div><div class=\"line\" id=\"file-game-js-LC3\">  <span class=\"c1\">// Initialize and start our game<\/span><\/div><div class=\"line\" id=\"file-game-js-LC4\">  <span class=\"nx\">start<\/span><span class=\"o\">:<\/span> <span class=\"kd\">function<\/span><span class=\"p\">()<\/span> <span class=\"p\">{<\/span><\/div><div class=\"line\" id=\"file-game-js-LC5\">    <span class=\"c1\">// Start crafty and set a background color so that we can see<\/span><\/div><div class=\"line\" id=\"file-game-js-LC6\">    <span class=\"c1\">//  it&#39;s working<\/span><\/div><div class=\"line\" id=\"file-game-js-LC7\">    <span class=\"c1\">//...<\/span><\/div><div class=\"line\" id=\"file-game-js-LC8\">&nbsp;<\/div><div class=\"line\" id=\"file-game-js-LC9\">    <span class=\"c1\">// Player character, placed at 5, 5 on our grid<\/span><\/div><div class=\"line\" id=\"file-game-js-LC10\">    <span class=\"nx\">Crafty<\/span><span class=\"p\">.<\/span><span class=\"nx\">e<\/span><span class=\"p\">(<\/span><span class=\"s1\">&#39;PlayerCharacter&#39;<\/span><span class=\"p\">).<\/span><span class=\"nx\">at<\/span><span class=\"p\">(<\/span><span class=\"mi\">5<\/span><span class=\"p\">,<\/span> <span class=\"mi\">5<\/span><span class=\"p\">);<\/span><\/div><div class=\"line\" id=\"file-game-js-LC11\">&nbsp;<\/div><div class=\"line\" id=\"file-game-js-LC12\">    <span class=\"c1\">// Place a tree at every edge square on our grid of 16x16 tiles<\/span><\/div><div class=\"line\" id=\"file-game-js-LC13\">    <span class=\"c1\">//...<\/span><\/div><div class=\"line\" id=\"file-game-js-LC14\">  <span class=\"p\">}<\/span><\/div><div class=\"line\" id=\"file-game-js-LC15\"><span class=\"p\">}<\/span><\/div><\/pre>\n          <\/td>\n        <\/tr>\n      <\/table>\n    <\/div>\n\n          <\/div>\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/darrentorpey/ece4aaf170f0af7ff233/raw/game.js\" style=\"float:right\">view raw<\/a>\n            <a href=\"https://gist.github.com/darrentorpey/ece4aaf170f0af7ff233#file-game-js\">game.js<\/a>\n            hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n          <\/div>\n        <\/div>\n<\/div>\n')