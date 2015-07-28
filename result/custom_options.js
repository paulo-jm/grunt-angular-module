app.run(['$templateCache', function($templateCache) {

$templateCache.put("node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/console-browserify/test/static/index.html", 
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta http-equiv=\"x-ua-compatible\" content=\"IE=8\" >\n" +
    "    <title>TAPE Example</title>\n" +
    "    <script src=\"/testem.js\"></script>\n" +
    "    <script src=\"test-adapter.js\"></script>\n" +
    "    <script src=\"bundle.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/test/Documents/Attributes.html", 
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "	<title>Attributes test</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "	<!-- Normal attributes -->\n" +
    "	<button id=\"test0\" class=\"value0\" title=\"value1\">class=\"value0\" title=\"value1\"</button>\n" +
    "\n" +
    "	<!-- Attributes with no quotes or value -->\n" +
    "	<button id=\"test1\" class=value2 disabled>class=value2 disabled</button>\n" +
    "\n" +
    "	<!-- Attributes with no space between them. No valid, but accepted by the browser -->\n" +
    "	<button id=\"test2\" class=\"value4\"title=\"value5\">class=\"value4\"title=\"value5\"</button>\n" +
    "</body>\n" +
    "</html>");, 

$templateCache.put("node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/htmlparser2/test/Documents/Basic.html", 
    "<!DOCTYPE html><html><title>The Title</title><body>Hello world</body></html>");, 

$templateCache.put("node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/underscore/index.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta http-equiv=\"content-type\" content=\"text/html;charset=UTF-8\" />\n" +
    "  <meta http-equiv=\"X-UA-Compatible\" content=\"chrome=1\" />\n" +
    "  <meta name=\"viewport\" content=\"width=device-width\" />\n" +
    "  <link rel=\"canonical\" href=\"http://underscorejs.org\" />\n" +
    "  <link rel=\"shortcut icon\" href=\"favicon.ico\" type=\"image/x-icon\" />\n" +
    "  <title>Underscore.js</title>\n" +
    "  <style>\n" +
    "    body {\n" +
    "      font-size: 14px;\n" +
    "      line-height: 22px;\n" +
    "      background: #f4f4f4 url(docs/images/background.png);\n" +
    "      color: #000;\n" +
    "      font-family: Helvetica Neue, Helvetica, Arial;\n" +
    "    }\n" +
    "    .interface {\n" +
    "      font-family: \"Lucida Grande\", \"Lucida Sans Unicode\", Helvetica, Arial, sans-serif !important;\n" +
    "    }\n" +
    "    div#sidebar {\n" +
    "      background: #fff;\n" +
    "      position: fixed;\n" +
    "      top: 0; left: 0; bottom: 0;\n" +
    "      width: 200px;\n" +
    "      overflow-y: auto;\n" +
    "      overflow-x: hidden;\n" +
    "      -webkit-overflow-scrolling: touch;\n" +
    "      padding: 15px 0 30px 30px;\n" +
    "      border-right: 1px solid #bbb;\n" +
    "      box-shadow: 0 0 20px #ccc; -webkit-box-shadow: 0 0 20px #ccc; -moz-box-shadow: 0 0 20px #ccc;\n" +
    "    }\n" +
    "    a.toc_title, a.toc_title:visited {\n" +
    "      display: block;\n" +
    "      color: black;\n" +
    "      font-weight: bold;\n" +
    "      margin-top: 15px;\n" +
    "    }\n" +
    "      a.toc_title:hover {\n" +
    "        text-decoration: underline;\n" +
    "      }\n" +
    "      #sidebar .version {\n" +
    "        font-size: 10px;\n" +
    "        font-weight: normal;\n" +
    "      }\n" +
    "    ul.toc_section {\n" +
    "      font-size: 11px;\n" +
    "      line-height: 14px;\n" +
    "      margin: 5px 0 0 0;\n" +
    "      padding-left: 0px;\n" +
    "      list-style-type: none;\n" +
    "      font-family: Lucida Grande;\n" +
    "    }\n" +
    "      .toc_section li {\n" +
    "        cursor: pointer;\n" +
    "        margin: 0 0 3px 0;\n" +
    "      }\n" +
    "        .toc_section li a {\n" +
    "          text-decoration: none;\n" +
    "          color: black;\n" +
    "        }\n" +
    "          .toc_section li a:hover {\n" +
    "            text-decoration: underline;\n" +
    "          }\n" +
    "    div.container {\n" +
    "      width: 550px;\n" +
    "      margin: 40px 0 50px 260px;\n" +
    "    }\n" +
    "    img#logo {\n" +
    "      width: 396px;\n" +
    "      height: 69px;\n" +
    "    }\n" +
    "    div.warning {\n" +
    "      margin-top: 15px;\n" +
    "      font: bold 11px Arial;\n" +
    "      color: #770000;\n" +
    "    }\n" +
    "    p {\n" +
    "      margin: 20px 0;\n" +
    "      width: 550px;\n" +
    "    }\n" +
    "    a, a:visited {\n" +
    "      color: #444;\n" +
    "    }\n" +
    "    a:active, a:hover {\n" +
    "      color: #000;\n" +
    "    }\n" +
    "    h1, h2, h3, h4, h5, h6 {\n" +
    "      padding-top: 20px;\n" +
    "    }\n" +
    "      h2 {\n" +
    "        font-size: 20px;\n" +
    "      }\n" +
    "    b.header {\n" +
    "      font-size: 16px;\n" +
    "      line-height: 30px;\n" +
    "    }\n" +
    "    span.alias {\n" +
    "      font-size: 14px;\n" +
    "      font-style: italic;\n" +
    "      margin-left: 20px;\n" +
    "    }\n" +
    "    table, tr, td {\n" +
    "      margin: 0; padding: 0;\n" +
    "    }\n" +
    "      td {\n" +
    "        padding: 2px 12px 2px 0;\n" +
    "      }\n" +
    "      table .rule {\n" +
    "        height: 1px;\n" +
    "        background: #ccc;\n" +
    "        margin: 5px 0;\n" +
    "      }\n" +
    "    ul {\n" +
    "      list-style-type: circle;\n" +
    "      padding: 0 0 0 20px;\n" +
    "    }\n" +
    "      li {\n" +
    "        width: 500px;\n" +
    "        margin-bottom: 10px;\n" +
    "      }\n" +
    "      code, pre, tt {\n" +
    "        font-family: Monaco, Consolas, \"Lucida Console\", monospace;\n" +
    "        font-size: 12px;\n" +
    "        line-height: 18px;\n" +
    "        font-style: normal;\n" +
    "      }\n" +
    "        tt {\n" +
    "          padding: 0px 3px;\n" +
    "          background: #fff;\n" +
    "          border: 1px solid #ddd;\n" +
    "          zoom: 1;\n" +
    "        }\n" +
    "        code {\n" +
    "          margin-left: 20px;\n" +
    "        }\n" +
    "        pre {\n" +
    "          font-size: 12px;\n" +
    "          padding: 2px 0 2px 15px;\n" +
    "          border-left: 5px solid #bbb;\n" +
    "          margin: 0px 0 30px;\n" +
    "        }\n" +
    "    @media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 640px),\n" +
    "          only screen and (-o-min-device-pixel-ratio: 3/2) and (max-width: 640px),\n" +
    "          only screen and (min-device-pixel-ratio: 1.5) and (max-width: 640px) {\n" +
    "      img {\n" +
    "        max-width: 100%;\n" +
    "      }\n" +
    "      div#sidebar {\n" +
    "        -webkit-overflow-scrolling: initial;\n" +
    "        position: relative;\n" +
    "        width: 90%;\n" +
    "        height: 120px;\n" +
    "        left: 0;\n" +
    "        top: -7px;\n" +
    "        padding: 10px 0 10px 30px;\n" +
    "        border: 0;\n" +
    "      }\n" +
    "      img#logo {\n" +
    "        width: auto;\n" +
    "        height: auto;\n" +
    "      }\n" +
    "      div.container {\n" +
    "        margin: 0;\n" +
    "        width: 100%;\n" +
    "      }\n" +
    "      p, div.container ul {\n" +
    "        max-width: 98%;\n" +
    "        overflow-x: scroll;\n" +
    "      }\n" +
    "      pre {\n" +
    "        overflow: scroll;\n" +
    "      }\n" +
    "    }\n" +
    "  </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "  <div id=\"sidebar\" class=\"interface\">\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#\">\n" +
    "      Underscore.js <span class=\"version\">(1.4.4)</span>\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>&raquo; <a href=\"http://github.com/documentcloud/underscore\">GitHub Repository</a></li>\n" +
    "      <li>&raquo; <a href=\"docs/underscore.html\">Annotated Source</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#\">\n" +
    "      Introduction\n" +
    "    </a>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#collections\">\n" +
    "      Collections\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#each\">each</a></li>\n" +
    "      <li>- <a href=\"#map\">map</a></li>\n" +
    "      <li>- <a href=\"#reduce\">reduce</a></li>\n" +
    "      <li>- <a href=\"#reduceRight\">reduceRight</a></li>\n" +
    "      <li>- <a href=\"#find\">find</a></li>\n" +
    "      <li>- <a href=\"#filter\">filter</a></li>\n" +
    "      <li>- <a href=\"#where\">where</a></li>\n" +
    "      <li>- <a href=\"#findWhere\">findWhere</a></li>\n" +
    "      <li>- <a href=\"#reject\">reject</a></li>\n" +
    "      <li>- <a href=\"#every\">every</a></li>\n" +
    "      <li>- <a href=\"#some\">some</a></li>\n" +
    "      <li>- <a href=\"#contains\">contains</a></li>\n" +
    "      <li>- <a href=\"#invoke\">invoke</a></li>\n" +
    "      <li>- <a href=\"#pluck\">pluck</a></li>\n" +
    "      <li>- <a href=\"#max\">max</a></li>\n" +
    "      <li>- <a href=\"#min\">min</a></li>\n" +
    "      <li>- <a href=\"#sortBy\">sortBy</a></li>\n" +
    "      <li>- <a href=\"#groupBy\">groupBy</a></li>\n" +
    "      <li>- <a href=\"#countBy\">countBy</a></li>\n" +
    "      <li>- <a href=\"#shuffle\">shuffle</a></li>\n" +
    "      <li>- <a href=\"#toArray\">toArray</a></li>\n" +
    "      <li>- <a href=\"#size\">size</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#arrays\">\n" +
    "      Arrays\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#first\">first</a></li>\n" +
    "      <li>- <a href=\"#initial\">initial</a></li>\n" +
    "      <li>- <a href=\"#last\">last</a></li>\n" +
    "      <li>- <a href=\"#rest\">rest</a></li>\n" +
    "      <li>- <a href=\"#compact\">compact</a></li>\n" +
    "      <li>- <a href=\"#flatten\">flatten</a></li>\n" +
    "      <li>- <a href=\"#without\">without</a></li>\n" +
    "      <li>- <a href=\"#union\">union</a></li>\n" +
    "      <li>- <a href=\"#intersection\">intersection</a></li>\n" +
    "      <li>- <a href=\"#difference\">difference</a></li>\n" +
    "      <li>- <a href=\"#uniq\">uniq</a></li>\n" +
    "      <li>- <a href=\"#zip\">zip</a></li>\n" +
    "      <li>- <a href=\"#object\">object</a></li>\n" +
    "      <li>- <a href=\"#indexOf\">indexOf</a></li>\n" +
    "      <li>- <a href=\"#lastIndexOf\">lastIndexOf</a></li>\n" +
    "      <li>- <a href=\"#sortedIndex\">sortedIndex</a></li>\n" +
    "      <li>- <a href=\"#range\">range</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#functions\">\n" +
    "      Functions\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#bind\">bind</a></li>\n" +
    "      <li>- <a href=\"#bindAll\">bindAll</a></li>\n" +
    "      <li>- <a href=\"#partial\">partial</a></li>\n" +
    "      <li>- <a href=\"#memoize\">memoize</a></li>\n" +
    "      <li>- <a href=\"#delay\">delay</a></li>\n" +
    "      <li>- <a href=\"#defer\">defer</a></li>\n" +
    "      <li>- <a href=\"#throttle\">throttle</a></li>\n" +
    "      <li>- <a href=\"#debounce\">debounce</a></li>\n" +
    "      <li>- <a href=\"#once\">once</a></li>\n" +
    "      <li>- <a href=\"#after\">after</a></li>\n" +
    "      <li>- <a href=\"#wrap\">wrap</a></li>\n" +
    "      <li>- <a href=\"#compose\">compose</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#objects\">\n" +
    "      Objects\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#keys\">keys</a></li>\n" +
    "      <li>- <a href=\"#values\">values</a></li>\n" +
    "      <li>- <a href=\"#pairs\">pairs</a></li>\n" +
    "      <li>- <a href=\"#invert\">invert</a></li>\n" +
    "      <li>- <a href=\"#object-functions\">functions</a></li>\n" +
    "      <li>- <a href=\"#extend\">extend</a></li>\n" +
    "      <li>- <a href=\"#pick\">pick</a></li>\n" +
    "      <li>- <a href=\"#omit\">omit</a></li>\n" +
    "      <li>- <a href=\"#defaults\">defaults</a></li>\n" +
    "      <li>- <a href=\"#clone\">clone</a></li>\n" +
    "      <li>- <a href=\"#tap\">tap</a></li>\n" +
    "      <li>- <a href=\"#has\">has</a></li>\n" +
    "      <li>- <a href=\"#isEqual\">isEqual</a></li>\n" +
    "      <li>- <a href=\"#isEmpty\">isEmpty</a></li>\n" +
    "      <li>- <a href=\"#isElement\">isElement</a></li>\n" +
    "      <li>- <a href=\"#isArray\">isArray</a></li>\n" +
    "      <li>- <a href=\"#isObject\">isObject</a></li>\n" +
    "      <li>- <a href=\"#isArguments\">isArguments</a></li>\n" +
    "      <li>- <a href=\"#isFunction\">isFunction</a></li>\n" +
    "      <li>- <a href=\"#isString\">isString</a></li>\n" +
    "      <li>- <a href=\"#isNumber\">isNumber</a></li>\n" +
    "      <li>- <a href=\"#isFinite\">isFinite</a></li>\n" +
    "      <li>- <a href=\"#isBoolean\">isBoolean</a></li>\n" +
    "      <li>- <a href=\"#isDate\">isDate</a></li>\n" +
    "      <li>- <a href=\"#isRegExp\">isRegExp</a></li>\n" +
    "      <li>- <a href=\"#isNaN\">isNaN</a></li>\n" +
    "      <li>- <a href=\"#isNull\">isNull</a></li>\n" +
    "      <li>- <a href=\"#isUndefined\">isUndefined</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#utility\">\n" +
    "      Utility\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#noConflict\">noConflict</a></li>\n" +
    "      <li>- <a href=\"#identity\">identity</a></li>\n" +
    "      <li>- <a href=\"#times\">times</a></li>\n" +
    "      <li>- <a href=\"#random\">random</a></li>\n" +
    "      <li>- <a href=\"#mixin\">mixin</a></li>\n" +
    "      <li>- <a href=\"#uniqueId\">uniqueId</a></li>\n" +
    "      <li>- <a href=\"#escape\">escape</a></li>\n" +
    "      <li>- <a href=\"#unescape\">unescape</a></li>\n" +
    "      <li>- <a href=\"#result\">result</a></li>\n" +
    "      <li>- <a href=\"#template\">template</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#chaining\">\n" +
    "      Chaining\n" +
    "    </a>\n" +
    "    <ul class=\"toc_section\">\n" +
    "      <li>- <a href=\"#chain\">chain</a></li>\n" +
    "      <li>- <a href=\"#value\">value</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#links\">\n" +
    "      Links\n" +
    "    </a>\n" +
    "\n" +
    "    <a class=\"toc_title\" href=\"#changelog\">\n" +
    "      Change Log\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"container\">\n" +
    "\n" +
    "    <p id=\"introduction\">\n" +
    "      <img id=\"logo\" src=\"docs/images/underscore.png\" alt=\"Underscore.js\" />\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      <a href=\"http://github.com/documentcloud/underscore/\">Underscore</a> is a\n" +
    "      utility-belt library for JavaScript that provides a lot of the\n" +
    "      functional programming support that you would expect in\n" +
    "      <a href=\"http://prototypejs.org/doc/latest/\">Prototype.js</a>\n" +
    "      (or <a href=\"http://www.ruby-doc.org/core/classes/Enumerable.html\">Ruby</a>),\n" +
    "      but without extending any of the built-in JavaScript objects. It's the\n" +
    "      tie to go along with <a href=\"http://docs.jquery.com\">jQuery</a>'s tux,\n" +
    "      and <a href=\"http://backbonejs.org\">Backbone.js</a>'s suspenders.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Underscore provides 80-odd functions that support both the usual\n" +
    "      functional suspects: <b>map</b>, <b>select</b>, <b>invoke</b> &mdash;\n" +
    "      as well as more specialized helpers: function binding, javascript\n" +
    "      templating, deep equality testing, and so on. It delegates to built-in\n" +
    "      functions, if present, so modern browsers will use the\n" +
    "      native implementations of <b>forEach</b>, <b>map</b>, <b>reduce</b>,\n" +
    "      <b>filter</b>, <b>every</b>, <b>some</b> and <b>indexOf</b>.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      A complete <a href=\"test/\">Test &amp; Benchmark Suite</a>\n" +
    "      is included for your perusal.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      You may also read through the <a href=\"docs/underscore.html\">annotated source code</a>.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      The project is\n" +
    "      <a href=\"http://github.com/documentcloud/underscore/\">hosted on GitHub</a>.\n" +
    "      You can report bugs and discuss features on the\n" +
    "      <a href=\"http://github.com/documentcloud/underscore/issues\">issues page</a>,\n" +
    "      on Freenode in the <tt>#documentcloud</tt> channel,\n" +
    "      or send tweets to <a href=\"http://twitter.com/documentcloud\">@documentcloud</a>.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      <i>Underscore is an open-source component of <a href=\"http://documentcloud.org/\">DocumentCloud</a>.</i>\n" +
    "    </p>\n" +
    "\n" +
    "    <h2>Downloads <i style=\"padding-left: 12px; font-size:12px;\">(Right-click, and use \"Save As\")</i></h2>\n" +
    "\n" +
    "    <table>\n" +
    "      <tr>\n" +
    "        <td><a href=\"underscore.js\">Development Version (1.4.4)</a></td>\n" +
    "        <td><i>40kb, Uncompressed with Plentiful Comments</i></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td><a href=\"underscore-min.js\">Production Version (1.4.4)</a></td>\n" +
    "        <td><i>4kb, Minified and Gzipped</i></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td colspan=\"2\"><div class=\"rule\"></div></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td><a href=\"https://raw.github.com/documentcloud/underscore/master/underscore.js\">Edge Version</a></td>\n" +
    "        <td><i>Unreleased, current <tt>master</tt>, use at your own risk</i></td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "\n" +
    "    <div id=\"documentation\">\n" +
    "\n" +
    "      <h2 id=\"collections\">Collection Functions (Arrays or Objects)</h2>\n" +
    "\n" +
    "      <p id=\"each\">\n" +
    "        <b class=\"header\">each</b><code>_.each(list, iterator, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>forEach</b></span>\n" +
    "        <br />\n" +
    "        Iterates over a <b>list</b> of elements, yielding each in turn to an <b>iterator</b>\n" +
    "        function. The <b>iterator</b> is bound to the <b>context</b> object, if one is\n" +
    "        passed. Each invocation of <b>iterator</b> is called with three arguments:\n" +
    "        <tt>(element, index, list)</tt>. If <b>list</b> is a JavaScript object, <b>iterator</b>'s\n" +
    "        arguments will be <tt>(value, key, list)</tt>. Delegates to the native\n" +
    "        <b>forEach</b> function if it exists.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.each([1, 2, 3], alert);\n" +
    "=&gt; alerts each number in turn...\n" +
    "_.each({one : 1, two : 2, three : 3}, alert);\n" +
    "=&gt; alerts each number value in turn...</pre>\n" +
    "\n" +
    "      <p id=\"map\">\n" +
    "        <b class=\"header\">map</b><code>_.map(list, iterator, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>collect</b></span>\n" +
    "        <br />\n" +
    "        Produces a new array of values by mapping each value in <b>list</b>\n" +
    "        through a transformation function (<b>iterator</b>). If the native <b>map</b> method\n" +
    "        exists, it will be used instead. If <b>list</b> is a JavaScript object,\n" +
    "        <b>iterator</b>'s arguments will be <tt>(value, key, list)</tt>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.map([1, 2, 3], function(num){ return num * 3; });\n" +
    "=&gt; [3, 6, 9]\n" +
    "_.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });\n" +
    "=&gt; [3, 6, 9]</pre>\n" +
    "\n" +
    "      <p id=\"reduce\">\n" +
    "        <b class=\"header\">reduce</b><code>_.reduce(list, iterator, memo, [context])</code>\n" +
    "        <span class=\"alias\">Aliases: <b>inject, foldl</b></span>\n" +
    "        <br />\n" +
    "        Also known as <b>inject</b> and <b>foldl</b>, <b>reduce</b> boils down a\n" +
    "        <b>list</b> of values into a single value. <b>Memo</b> is the initial state\n" +
    "        of the reduction, and each successive step of it should be returned by\n" +
    "        <b>iterator</b>. The iterator is passed four arguments: the <tt>memo</tt>,\n" +
    "        then the <tt>value</tt> and <tt>index</tt> (or key) of the iteration,\n" +
    "        and finally a reference to the entire <tt>list</tt>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);\n" +
    "=&gt; 6\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"reduceRight\">\n" +
    "        <b class=\"header\">reduceRight</b><code>_.reduceRight(list, iterator, memo, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>foldr</b></span>\n" +
    "        <br />\n" +
    "        The right-associative version of <b>reduce</b>. Delegates to the\n" +
    "        JavaScript 1.8 version of <b>reduceRight</b>, if it exists. <b>Foldr</b>\n" +
    "        is not as useful in JavaScript as it would be in a language with lazy\n" +
    "        evaluation.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var list = [[0, 1], [2, 3], [4, 5]];\n" +
    "var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);\n" +
    "=&gt; [4, 5, 2, 3, 0, 1]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"find\">\n" +
    "        <b class=\"header\">find</b><code>_.find(list, iterator, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>detect</b></span>\n" +
    "        <br />\n" +
    "        Looks through each value in the <b>list</b>, returning the first one that\n" +
    "        passes a truth test (<b>iterator</b>). The function returns as\n" +
    "        soon as it finds an acceptable element, and doesn't traverse the\n" +
    "        entire list.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });\n" +
    "=&gt; 2\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"filter\">\n" +
    "        <b class=\"header\">filter</b><code>_.filter(list, iterator, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>select</b></span>\n" +
    "        <br />\n" +
    "        Looks through each value in the <b>list</b>, returning an array of all\n" +
    "        the values that pass a truth test (<b>iterator</b>). Delegates to the\n" +
    "        native <b>filter</b> method, if it exists.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });\n" +
    "=&gt; [2, 4, 6]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"where\">\n" +
    "        <b class=\"header\">where</b><code>_.where(list, properties)</code>\n" +
    "        <br />\n" +
    "        Looks through each value in the <b>list</b>, returning an array of all\n" +
    "        the values that contain all of the key-value pairs listed in <b>properties</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.where(listOfPlays, {author: \"Shakespeare\", year: 1611});\n" +
    "=&gt; [{title: \"Cymbeline\", author: \"Shakespeare\", year: 1611},\n" +
    "    {title: \"The Tempest\", author: \"Shakespeare\", year: 1611}]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"findWhere\">\n" +
    "        <b class=\"header\">findWhere</b><code>_.findWhere(list, properties)</code>\n" +
    "        <br />\n" +
    "        Looks through the <b>list</b> and returns the <i>first</i> value that matches\n" +
    "        all of the key-value pairs listed in <b>properties</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.findWhere(publicServicePulitzers, {newsroom: \"The New York Times\"});\n" +
    "=&gt; {year: 1918, newsroom: \"The New York Times\",\n" +
    "  reason: \"For its public service in publishing in full so many official reports,\n" +
    "  documents and speeches by European statesmen relating to the progress and\n" +
    "  conduct of the war.\"}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"reject\">\n" +
    "        <b class=\"header\">reject</b><code>_.reject(list, iterator, [context])</code>\n" +
    "        <br />\n" +
    "        Returns the values in <b>list</b> without the elements that the truth\n" +
    "        test (<b>iterator</b>) passes. The opposite of <b>filter</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });\n" +
    "=&gt; [1, 3, 5]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"every\">\n" +
    "        <b class=\"header\">every</b><code>_.every(list, iterator, [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>all</b></span>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if all of the values in the <b>list</b> pass the <b>iterator</b>\n" +
    "        truth test. Delegates to the native method <b>every</b>, if present.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.every([true, 1, null, 'yes'], _.identity);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"some\">\n" +
    "        <b class=\"header\">some</b><code>_.some(list, [iterator], [context])</code>\n" +
    "        <span class=\"alias\">Alias: <b>any</b></span>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if any of the values in the <b>list</b> pass the\n" +
    "        <b>iterator</b> truth test. Short-circuits and stops traversing the list\n" +
    "        if a true element is found. Delegates to the native method <b>some</b>,\n" +
    "        if present.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.some([null, 0, 'yes', false]);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"contains\">\n" +
    "        <b class=\"header\">contains</b><code>_.contains(list, value)</code>\n" +
    "        <span class=\"alias\">Alias: <b>include</b></span>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if the <b>value</b> is present in the <b>list</b>.\n" +
    "        Uses <b>indexOf</b> internally, if <b>list</b> is an Array.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.contains([1, 2, 3], 3);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"invoke\">\n" +
    "        <b class=\"header\">invoke</b><code>_.invoke(list, methodName, [*arguments])</code>\n" +
    "        <br />\n" +
    "        Calls the method named by <b>methodName</b> on each value in the <b>list</b>.\n" +
    "        Any extra arguments passed to <b>invoke</b> will be forwarded on to the\n" +
    "        method invocation.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');\n" +
    "=&gt; [[1, 5, 7], [1, 2, 3]]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"pluck\">\n" +
    "        <b class=\"header\">pluck</b><code>_.pluck(list, propertyName)</code>\n" +
    "        <br />\n" +
    "        A convenient version of what is perhaps the most common use-case for\n" +
    "        <b>map</b>: extracting a list of property values.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}];\n" +
    "_.pluck(stooges, 'name');\n" +
    "=&gt; [\"moe\", \"larry\", \"curly\"]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"max\">\n" +
    "        <b class=\"header\">max</b><code>_.max(list, [iterator], [context])</code>\n" +
    "        <br />\n" +
    "        Returns the maximum value in <b>list</b>. If <b>iterator</b> is passed,\n" +
    "        it will be used on each value to generate the criterion by which the\n" +
    "        value is ranked.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var stooges = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}];\n" +
    "_.max(stooges, function(stooge){ return stooge.age; });\n" +
    "=&gt; {name : 'curly', age : 60};\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"min\">\n" +
    "        <b class=\"header\">min</b><code>_.min(list, [iterator], [context])</code>\n" +
    "        <br />\n" +
    "        Returns the minimum value in <b>list</b>. If <b>iterator</b> is passed,\n" +
    "        it will be used on each value to generate the criterion by which the\n" +
    "        value is ranked.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var numbers = [10, 5, 100, 2, 1000];\n" +
    "_.min(numbers);\n" +
    "=&gt; 2\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"sortBy\">\n" +
    "        <b class=\"header\">sortBy</b><code>_.sortBy(list, iterator, [context])</code>\n" +
    "        <br />\n" +
    "        Returns a sorted copy of <b>list</b>, ranked in ascending order by the\n" +
    "        results of running each value through <b>iterator</b>. Iterator may\n" +
    "        also be the string name of the property to sort by (eg. <tt>length</tt>).\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });\n" +
    "=&gt; [5, 4, 6, 3, 1, 2]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"groupBy\">\n" +
    "        <b class=\"header\">groupBy</b><code>_.groupBy(list, iterator, [context])</code>\n" +
    "        <br />\n" +
    "        Splits a collection into sets, grouped by the result of running each\n" +
    "        value through <b>iterator</b>. If <b>iterator</b> is a string instead of\n" +
    "        a function, groups by the property named by <b>iterator</b> on each of\n" +
    "        the values.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });\n" +
    "=&gt; {1: [1.3], 2: [2.1, 2.4]}\n" +
    "\n" +
    "_.groupBy(['one', 'two', 'three'], 'length');\n" +
    "=&gt; {3: [\"one\", \"two\"], 5: [\"three\"]}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"countBy\">\n" +
    "        <b class=\"header\">countBy</b><code>_.countBy(list, iterator, [context])</code>\n" +
    "        <br />\n" +
    "        Sorts a list into groups and returns a count for the number of objects\n" +
    "        in each group.\n" +
    "        Similar to <tt>groupBy</tt>, but instead of returning a list of values,\n" +
    "        returns a count for the number of values in that group.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.countBy([1, 2, 3, 4, 5], function(num) {\n" +
    "  return num % 2 == 0 ? 'even' : 'odd';\n" +
    "});\n" +
    "=&gt; {odd: 3, even: 2}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"shuffle\">\n" +
    "        <b class=\"header\">shuffle</b><code>_.shuffle(list)</code>\n" +
    "        <br />\n" +
    "        Returns a shuffled copy of the <b>list</b>, using a version of the\n" +
    "        <a href=\"http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle\">Fisher-Yates shuffle</a>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.shuffle([1, 2, 3, 4, 5, 6]);\n" +
    "=&gt; [4, 1, 6, 3, 5, 2]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"toArray\">\n" +
    "        <b class=\"header\">toArray</b><code>_.toArray(list)</code>\n" +
    "        <br />\n" +
    "        Converts the <b>list</b> (anything that can be iterated over), into a\n" +
    "        real Array. Useful for transmuting the <b>arguments</b> object.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "(function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4);\n" +
    "=&gt; [2, 3, 4]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"size\">\n" +
    "        <b class=\"header\">size</b><code>_.size(list)</code>\n" +
    "        <br />\n" +
    "        Return the number of values in the <b>list</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.size({one : 1, two : 2, three : 3});\n" +
    "=&gt; 3\n" +
    "</pre>\n" +
    "\n" +
    "      <h2 id=\"arrays\">Array Functions</h2>\n" +
    "\n" +
    "      <p>\n" +
    "        <i>\n" +
    "          Note: All array functions will also work on the <b>arguments</b> object.\n" +
    "          However, Underscore functions are not designed to work on \"sparse\" arrays.\n" +
    "        </i>\n" +
    "      </p>\n" +
    "\n" +
    "      <p id=\"first\">\n" +
    "        <b class=\"header\">first</b><code>_.first(array, [n])</code>\n" +
    "        <span class=\"alias\">Alias: <b>head</b>, <b>take</b></span>\n" +
    "        <br />\n" +
    "        Returns the first element of an <b>array</b>. Passing <b>n</b> will\n" +
    "        return the first <b>n</b> elements of the array.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.first([5, 4, 3, 2, 1]);\n" +
    "=&gt; 5\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"initial\">\n" +
    "        <b class=\"header\">initial</b><code>_.initial(array, [n])</code>\n" +
    "        <br />\n" +
    "        Returns everything but the last entry of the array. Especially useful on\n" +
    "        the arguments object. Pass <b>n</b> to exclude the last <b>n</b> elements\n" +
    "        from the result.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.initial([5, 4, 3, 2, 1]);\n" +
    "=&gt; [5, 4, 3, 2]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"last\">\n" +
    "        <b class=\"header\">last</b><code>_.last(array, [n])</code>\n" +
    "        <br />\n" +
    "        Returns the last element of an <b>array</b>. Passing <b>n</b> will return\n" +
    "        the last <b>n</b> elements of the array.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.last([5, 4, 3, 2, 1]);\n" +
    "=&gt; 1\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"rest\">\n" +
    "        <b class=\"header\">rest</b><code>_.rest(array, [index])</code>\n" +
    "        <span class=\"alias\">Alias: <b>tail, drop</b></span>\n" +
    "        <br />\n" +
    "        Returns the <b>rest</b> of the elements in an array. Pass an <b>index</b>\n" +
    "        to return the values of the array from that index onward.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.rest([5, 4, 3, 2, 1]);\n" +
    "=&gt; [4, 3, 2, 1]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"compact\">\n" +
    "        <b class=\"header\">compact</b><code>_.compact(array)</code>\n" +
    "        <br />\n" +
    "        Returns a copy of the <b>array</b> with all falsy values removed.\n" +
    "        In JavaScript, <i>false</i>, <i>null</i>, <i>0</i>, <i>\"\"</i>,\n" +
    "        <i>undefined</i> and <i>NaN</i> are all falsy.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.compact([0, 1, false, 2, '', 3]);\n" +
    "=&gt; [1, 2, 3]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"flatten\">\n" +
    "        <b class=\"header\">flatten</b><code>_.flatten(array, [shallow])</code>\n" +
    "        <br />\n" +
    "        Flattens a nested <b>array</b> (the nesting can be to any depth). If you\n" +
    "        pass <b>shallow</b>, the array will only be flattened a single level.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.flatten([1, [2], [3, [[4]]]]);\n" +
    "=&gt; [1, 2, 3, 4];\n" +
    "\n" +
    "_.flatten([1, [2], [3, [[4]]]], true);\n" +
    "=&gt; [1, 2, 3, [[4]]];\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"without\">\n" +
    "        <b class=\"header\">without</b><code>_.without(array, [*values])</code>\n" +
    "        <br />\n" +
    "        Returns a copy of the <b>array</b> with all instances of the <b>values</b>\n" +
    "        removed.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);\n" +
    "=&gt; [2, 3, 4]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"union\">\n" +
    "        <b class=\"header\">union</b><code>_.union(*arrays)</code>\n" +
    "        <br />\n" +
    "        Computes the union of the passed-in <b>arrays</b>: the list of unique items,\n" +
    "        in order, that are present in one or more of the <b>arrays</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);\n" +
    "=&gt; [1, 2, 3, 101, 10]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"intersection\">\n" +
    "        <b class=\"header\">intersection</b><code>_.intersection(*arrays)</code>\n" +
    "        <br />\n" +
    "        Computes the list of values that are the intersection of all the <b>arrays</b>.\n" +
    "        Each value in the result is present in each of the <b>arrays</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);\n" +
    "=&gt; [1, 2]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"difference\">\n" +
    "        <b class=\"header\">difference</b><code>_.difference(array, *others)</code>\n" +
    "        <br />\n" +
    "        Similar to <b>without</b>, but returns the values from <b>array</b> that\n" +
    "        are not present in the <b>other</b> arrays.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.difference([1, 2, 3, 4, 5], [5, 2, 10]);\n" +
    "=&gt; [1, 3, 4]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"uniq\">\n" +
    "        <b class=\"header\">uniq</b><code>_.uniq(array, [isSorted], [iterator])</code>\n" +
    "        <span class=\"alias\">Alias: <b>unique</b></span>\n" +
    "        <br />\n" +
    "        Produces a duplicate-free version of the <b>array</b>, using <i>===</i> to test\n" +
    "        object equality. If you know in advance that the <b>array</b> is sorted,\n" +
    "        passing <i>true</i> for <b>isSorted</b> will run a much faster algorithm.\n" +
    "        If you want to compute unique items based on a transformation, pass an\n" +
    "        <b>iterator</b> function.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.uniq([1, 2, 1, 3, 1, 4]);\n" +
    "=&gt; [1, 2, 3, 4]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"zip\">\n" +
    "        <b class=\"header\">zip</b><code>_.zip(*arrays)</code>\n" +
    "        <br />\n" +
    "        Merges together the values of each of the <b>arrays</b> with the\n" +
    "        values at the corresponding position. Useful when you have separate\n" +
    "        data sources that are coordinated through matching array indexes.\n" +
    "        If you're working with a matrix of nested arrays, <b>zip.apply</b>\n" +
    "        can transpose the matrix in a similar fashion.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);\n" +
    "=&gt; [[\"moe\", 30, true], [\"larry\", 40, false], [\"curly\", 50, false]]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"object\">\n" +
    "        <b class=\"header\">object</b><code>_.object(list, [values])</code>\n" +
    "        <br />\n" +
    "        Converts arrays into objects. Pass either a single list of\n" +
    "        <tt>[key, value]</tt> pairs, or a list of keys, and a list of values.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.object(['moe', 'larry', 'curly'], [30, 40, 50]);\n" +
    "=&gt; {moe: 30, larry: 40, curly: 50}\n" +
    "\n" +
    "_.object([['moe', 30], ['larry', 40], ['curly', 50]]);\n" +
    "=&gt; {moe: 30, larry: 40, curly: 50}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"indexOf\">\n" +
    "        <b class=\"header\">indexOf</b><code>_.indexOf(array, value, [isSorted])</code>\n" +
    "        <br />\n" +
    "        Returns the index at which <b>value</b> can be found in the <b>array</b>,\n" +
    "        or <i>-1</i> if value is not present in the <b>array</b>. Uses the native\n" +
    "        <b>indexOf</b> function unless it's missing. If you're working with a\n" +
    "        large array, and you know that the array is already sorted, pass <tt>true</tt>\n" +
    "        for <b>isSorted</b> to use a faster binary search ... or, pass a number as\n" +
    "        the third argument in order to look for the first matching value in the\n" +
    "        array after the given index.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.indexOf([1, 2, 3], 2);\n" +
    "=&gt; 1\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"lastIndexOf\">\n" +
    "        <b class=\"header\">lastIndexOf</b><code>_.lastIndexOf(array, value, [fromIndex])</code>\n" +
    "        <br />\n" +
    "        Returns the index of the last occurrence of <b>value</b> in the <b>array</b>,\n" +
    "        or <i>-1</i> if value is not present. Uses the native <b>lastIndexOf</b>\n" +
    "        function if possible. Pass <b>fromIndex</b> to start your search at a\n" +
    "        given index.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);\n" +
    "=&gt; 4\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"sortedIndex\">\n" +
    "        <b class=\"header\">sortedIndex</b><code>_.sortedIndex(list, value, [iterator], [context])</code>\n" +
    "        <br />\n" +
    "        Uses a binary search to determine the index at which the <b>value</b>\n" +
    "        <i>should</i> be inserted into the <b>list</b> in order to maintain the <b>list</b>'s\n" +
    "        sorted order. If an <b>iterator</b> is passed, it will be used to compute\n" +
    "        the sort ranking of each value, including the <b>value</b> you pass.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.sortedIndex([10, 20, 30, 40, 50], 35);\n" +
    "=&gt; 3\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"range\">\n" +
    "        <b class=\"header\">range</b><code>_.range([start], stop, [step])</code>\n" +
    "        <br />\n" +
    "        A function to create flexibly-numbered lists of integers, handy for\n" +
    "        <tt>each</tt> and <tt>map</tt> loops. <b>start</b>, if omitted, defaults\n" +
    "        to <i>0</i>; <b>step</b> defaults to <i>1</i>. Returns a list of integers\n" +
    "        from <b>start</b> to <b>stop</b>, incremented (or decremented) by <b>step</b>,\n" +
    "        exclusive.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.range(10);\n" +
    "=&gt; [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n" +
    "_.range(1, 11);\n" +
    "=&gt; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n" +
    "_.range(0, 30, 5);\n" +
    "=&gt; [0, 5, 10, 15, 20, 25]\n" +
    "_.range(0, -10, -1);\n" +
    "=&gt; [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]\n" +
    "_.range(0);\n" +
    "=&gt; []\n" +
    "</pre>\n" +
    "\n" +
    "      <h2 id=\"functions\">Function (uh, ahem) Functions</h2>\n" +
    "\n" +
    "      <p id=\"bind\">\n" +
    "        <b class=\"header\">bind</b><code>_.bind(function, object, [*arguments])</code>\n" +
    "        <br />\n" +
    "        Bind a <b>function</b> to an <b>object</b>, meaning that whenever\n" +
    "        the function is called, the value of <i>this</i> will be the <b>object</b>.\n" +
    "        Optionally, pass <b>arguments</b> to the <b>function</b> to pre-fill them,\n" +
    "        also known as <b>partial application</b>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var func = function(greeting){ return greeting + ': ' + this.name };\n" +
    "func = _.bind(func, {name : 'moe'}, 'hi');\n" +
    "func();\n" +
    "=&gt; 'hi: moe'\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"bindAll\">\n" +
    "        <b class=\"header\">bindAll</b><code>_.bindAll(object, [*methodNames])</code>\n" +
    "        <br />\n" +
    "        Binds a number of methods on the <b>object</b>, specified by\n" +
    "        <b>methodNames</b>, to be run in the context of that object whenever they\n" +
    "        are invoked. Very handy for binding functions that are going to be used\n" +
    "        as event handlers, which would otherwise be invoked with a fairly useless\n" +
    "        <i>this</i>. If no <b>methodNames</b> are provided, all of the object's\n" +
    "        function properties will be bound to it.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var buttonView = {\n" +
    "  label   : 'underscore',\n" +
    "  onClick : function(){ alert('clicked: ' + this.label); },\n" +
    "  onHover : function(){ console.log('hovering: ' + this.label); }\n" +
    "};\n" +
    "_.bindAll(buttonView);\n" +
    "jQuery('#underscore_button').bind('click', buttonView.onClick);\n" +
    "=&gt; When the button is clicked, this.label will have the correct value...\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"partial\">\n" +
    "        <b class=\"header\">partial</b><code>_.partial(function, [*arguments])</code>\n" +
    "        <br />\n" +
    "        Partially apply a function by filling in any number of its arguments,\n" +
    "        <i>without</i> changing its dynamic <tt>this</tt> value. A close cousin\n" +
    "        of <a href=\"#bind\">bind</a>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var add = function(a, b) { return a + b; };\n" +
    "add5 = _.partial(add, 5);\n" +
    "add5(10);\n" +
    "=&gt; 15\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"memoize\">\n" +
    "        <b class=\"header\">memoize</b><code>_.memoize(function, [hashFunction])</code>\n" +
    "        <br />\n" +
    "        Memoizes a given <b>function</b> by caching the computed result. Useful\n" +
    "        for speeding up slow-running computations. If passed an optional\n" +
    "        <b>hashFunction</b>, it will be used to compute the hash key for storing\n" +
    "        the result, based on the arguments to the original function. The default\n" +
    "        <b>hashFunction</b> just uses the first argument to the memoized function\n" +
    "        as the key.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var fibonacci = _.memoize(function(n) {\n" +
    "  return n &lt; 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);\n" +
    "});\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"delay\">\n" +
    "        <b class=\"header\">delay</b><code>_.delay(function, wait, [*arguments])</code>\n" +
    "        <br />\n" +
    "        Much like <b>setTimeout</b>, invokes <b>function</b> after <b>wait</b>\n" +
    "        milliseconds. If you pass the optional <b>arguments</b>, they will be\n" +
    "        forwarded on to the <b>function</b> when it is invoked.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var log = _.bind(console.log, console);\n" +
    "_.delay(log, 1000, 'logged later');\n" +
    "=&gt; 'logged later' // Appears after one second.\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"defer\">\n" +
    "        <b class=\"header\">defer</b><code>_.defer(function, [*arguments])</code>\n" +
    "        <br />\n" +
    "        Defers invoking the <b>function</b> until the current call stack has cleared,\n" +
    "        similar to using <b>setTimeout</b> with a delay of 0. Useful for performing\n" +
    "        expensive computations or HTML rendering in chunks without blocking the UI thread\n" +
    "        from updating. If you pass the optional <b>arguments</b>, they will be\n" +
    "        forwarded on to the <b>function</b> when it is invoked.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.defer(function(){ alert('deferred'); });\n" +
    "// Returns from the function before the alert runs.\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"throttle\">\n" +
    "        <b class=\"header\">throttle</b><code>_.throttle(function, wait)</code>\n" +
    "        <br />\n" +
    "        Creates and returns a new, throttled version of the passed function,\n" +
    "        that, when invoked repeatedly, will only actually call the original function\n" +
    "        at most once per every <b>wait</b>\n" +
    "        milliseconds. Useful for rate-limiting events that occur faster than you\n" +
    "        can keep up with.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var throttled = _.throttle(updatePosition, 100);\n" +
    "$(window).scroll(throttled);\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"debounce\">\n" +
    "        <b class=\"header\">debounce</b><code>_.debounce(function, wait, [immediate])</code>\n" +
    "        <br />\n" +
    "        Creates and returns a new debounced version of the passed function that\n" +
    "        will postpone its execution until after\n" +
    "        <b>wait</b> milliseconds have elapsed since the last time it\n" +
    "        was invoked. Useful for implementing behavior that should only happen\n" +
    "        <i>after</i> the input has stopped arriving. For example: rendering a\n" +
    "        preview of a Markdown comment, recalculating a layout after the window\n" +
    "        has stopped being resized, and so on.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        Pass <tt>true</tt> for the <b>immediate</b> parameter to cause\n" +
    "        <b>debounce</b> to trigger the function on the leading instead of the\n" +
    "        trailing edge of the <b>wait</b> interval. Useful in circumstances like\n" +
    "        preventing accidental double-clicks on a \"submit\" button from firing a\n" +
    "        second time.\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>\n" +
    "var lazyLayout = _.debounce(calculateLayout, 300);\n" +
    "$(window).resize(lazyLayout);\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"once\">\n" +
    "        <b class=\"header\">once</b><code>_.once(function)</code>\n" +
    "        <br />\n" +
    "        Creates a version of the function that can only be called one time.\n" +
    "        Repeated calls to the modified function will have no effect, returning\n" +
    "        the value from the original call. Useful for initialization functions,\n" +
    "        instead of having to set a boolean flag and then check it later.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var initialize = _.once(createApplication);\n" +
    "initialize();\n" +
    "initialize();\n" +
    "// Application is only created once.\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"after\">\n" +
    "        <b class=\"header\">after</b><code>_.after(count, function)</code>\n" +
    "        <br />\n" +
    "        Creates a version of the function that will only be run after first\n" +
    "        being called <b>count</b> times. Useful for grouping asynchronous responses,\n" +
    "        where you want to be sure that all the async calls have finished, before\n" +
    "        proceeding.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var renderNotes = _.after(notes.length, render);\n" +
    "_.each(notes, function(note) {\n" +
    "  note.asyncSave({success: renderNotes});\n" +
    "});\n" +
    "// renderNotes is run once, after all notes have saved.\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"wrap\">\n" +
    "        <b class=\"header\">wrap</b><code>_.wrap(function, wrapper)</code>\n" +
    "        <br />\n" +
    "        Wraps the first <b>function</b> inside of the <b>wrapper</b> function,\n" +
    "        passing it as the first argument. This allows the <b>wrapper</b> to\n" +
    "        execute code before and after the <b>function</b> runs, adjust the arguments,\n" +
    "        and execute it conditionally.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var hello = function(name) { return \"hello: \" + name; };\n" +
    "hello = _.wrap(hello, function(func) {\n" +
    "  return \"before, \" + func(\"moe\") + \", after\";\n" +
    "});\n" +
    "hello();\n" +
    "=&gt; 'before, hello: moe, after'\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"compose\">\n" +
    "        <b class=\"header\">compose</b><code>_.compose(*functions)</code>\n" +
    "        <br />\n" +
    "        Returns the composition of a list of <b>functions</b>, where each function\n" +
    "        consumes the return value of the function that follows. In math terms,\n" +
    "        composing the functions <i>f()</i>, <i>g()</i>, and <i>h()</i> produces\n" +
    "        <i>f(g(h()))</i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var greet    = function(name){ return \"hi: \" + name; };\n" +
    "var exclaim  = function(statement){ return statement + \"!\"; };\n" +
    "var welcome = _.compose(exclaim, greet);\n" +
    "welcome('moe');\n" +
    "=&gt; 'hi: moe!'\n" +
    "</pre>\n" +
    "\n" +
    "      <h2 id=\"objects\">Object Functions</h2>\n" +
    "\n" +
    "      <p id=\"keys\">\n" +
    "        <b class=\"header\">keys</b><code>_.keys(object)</code>\n" +
    "        <br />\n" +
    "        Retrieve all the names of the <b>object</b>'s properties.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.keys({one : 1, two : 2, three : 3});\n" +
    "=&gt; [\"one\", \"two\", \"three\"]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"values\">\n" +
    "        <b class=\"header\">values</b><code>_.values(object)</code>\n" +
    "        <br />\n" +
    "        Return all of the values of the <b>object</b>'s properties.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.values({one : 1, two : 2, three : 3});\n" +
    "=&gt; [1, 2, 3]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"pairs\">\n" +
    "        <b class=\"header\">pairs</b><code>_.pairs(object)</code>\n" +
    "        <br />\n" +
    "        Convert an object into a list of <tt>[key, value]</tt> pairs.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.pairs({one: 1, two: 2, three: 3});\n" +
    "=&gt; [[\"one\", 1], [\"two\", 2], [\"three\", 3]]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"invert\">\n" +
    "        <b class=\"header\">invert</b><code>_.invert(object)</code>\n" +
    "        <br />\n" +
    "        Returns a copy of the <b>object</b> where the keys have become the values\n" +
    "        and the values the keys. For this to work, all of your object's values\n" +
    "        should be unique and string serializable.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.invert({Moe: \"Moses\", Larry: \"Louis\", Curly: \"Jerome\"});\n" +
    "=&gt; {Moses: \"Moe\", Louis: \"Larry\", Jerome: \"Curly\"};\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"object-functions\">\n" +
    "        <b class=\"header\">functions</b><code>_.functions(object)</code>\n" +
    "        <span class=\"alias\">Alias: <b>methods</b></span>\n" +
    "        <br />\n" +
    "        Returns a sorted list of the names of every method in an object &mdash;\n" +
    "        that is to say, the name of every function property of the object.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.functions(_);\n" +
    "=&gt; [\"all\", \"any\", \"bind\", \"bindAll\", \"clone\", \"compact\", \"compose\" ...\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"extend\">\n" +
    "        <b class=\"header\">extend</b><code>_.extend(destination, *sources)</code>\n" +
    "        <br />\n" +
    "        Copy all of the properties in the <b>source</b> objects over to the\n" +
    "        <b>destination</b> object, and return the <b>destination</b> object.\n" +
    "        It's in-order, so the last source will override properties of the same\n" +
    "        name in previous arguments.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.extend({name : 'moe'}, {age : 50});\n" +
    "=&gt; {name : 'moe', age : 50}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"pick\">\n" +
    "        <b class=\"header\">pick</b><code>_.pick(object, *keys)</code>\n" +
    "        <br />\n" +
    "        Return a copy of the <b>object</b>, filtered to only have values for\n" +
    "        the whitelisted <b>keys</b> (or array of valid keys).\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.pick({name : 'moe', age: 50, userid : 'moe1'}, 'name', 'age');\n" +
    "=&gt; {name : 'moe', age : 50}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"omit\">\n" +
    "        <b class=\"header\">omit</b><code>_.omit(object, *keys)</code>\n" +
    "        <br />\n" +
    "        Return a copy of the <b>object</b>, filtered to omit the blacklisted\n" +
    "        <b>keys</b> (or array of keys).\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.omit({name : 'moe', age : 50, userid : 'moe1'}, 'userid');\n" +
    "=&gt; {name : 'moe', age : 50}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"defaults\">\n" +
    "        <b class=\"header\">defaults</b><code>_.defaults(object, *defaults)</code>\n" +
    "        <br />\n" +
    "        Fill in null and undefined properties in <b>object</b> with values from the\n" +
    "        <b>defaults</b> objects, and return the <b>object</b>. As soon as the\n" +
    "        property is filled, further defaults will have no effect.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var iceCream = {flavor : \"chocolate\"};\n" +
    "_.defaults(iceCream, {flavor : \"vanilla\", sprinkles : \"lots\"});\n" +
    "=&gt; {flavor : \"chocolate\", sprinkles : \"lots\"}\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"clone\">\n" +
    "        <b class=\"header\">clone</b><code>_.clone(object)</code>\n" +
    "        <br />\n" +
    "        Create a shallow-copied clone of the <b>object</b>. Any nested objects\n" +
    "        or arrays will be copied by reference, not duplicated.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.clone({name : 'moe'});\n" +
    "=&gt; {name : 'moe'};\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"tap\">\n" +
    "        <b class=\"header\">tap</b><code>_.tap(object, interceptor)</code>\n" +
    "        <br />\n" +
    "        Invokes <b>interceptor</b> with the <b>object</b>, and then returns <b>object</b>.\n" +
    "        The primary purpose of this method is to \"tap into\" a method chain, in order to perform operations on intermediate results within the chain.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.chain([1,2,3,200])\n" +
    "  .filter(function(num) { return num % 2 == 0; })\n" +
    "  .tap(alert)\n" +
    "  .map(function(num) { return num * num })\n" +
    "  .value();\n" +
    "=&gt; // [2, 200] (alerted)\n" +
    "=&gt; [4, 40000]\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"has\">\n" +
    "        <b class=\"header\">has</b><code>_.has(object, key)</code>\n" +
    "        <br />\n" +
    "        Does the object contain the given key? Identical to\n" +
    "        <tt>object.hasOwnProperty(key)</tt>, but uses a safe reference to the\n" +
    "        <tt>hasOwnProperty</tt> function, in case it's been\n" +
    "        <a href=\"http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/\">overridden accidentally</a>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.has({a: 1, b: 2, c: 3}, \"b\");\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isEqual\">\n" +
    "        <b class=\"header\">isEqual</b><code>_.isEqual(object, other)</code>\n" +
    "        <br />\n" +
    "        Performs an optimized deep comparison between the two objects, to determine\n" +
    "        if they should be considered equal.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var moe   = {name : 'moe', luckyNumbers : [13, 27, 34]};\n" +
    "var clone = {name : 'moe', luckyNumbers : [13, 27, 34]};\n" +
    "moe == clone;\n" +
    "=&gt; false\n" +
    "_.isEqual(moe, clone);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isEmpty\">\n" +
    "        <b class=\"header\">isEmpty</b><code>_.isEmpty(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> contains no values.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isEmpty([1, 2, 3]);\n" +
    "=&gt; false\n" +
    "_.isEmpty({});\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isElement\">\n" +
    "        <b class=\"header\">isElement</b><code>_.isElement(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a DOM element.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isElement(jQuery('body')[0]);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isArray\">\n" +
    "        <b class=\"header\">isArray</b><code>_.isArray(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is an Array.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "(function(){ return _.isArray(arguments); })();\n" +
    "=&gt; false\n" +
    "_.isArray([1,2,3]);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isObject\">\n" +
    "        <b class=\"header\">isObject</b><code>_.isObject(value)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>value</b> is an Object. Note that JavaScript\n" +
    "        arrays and functions are objects, while (normal) strings and numbers are not.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isObject({});\n" +
    "=&gt; true\n" +
    "_.isObject(1);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isArguments\">\n" +
    "        <b class=\"header\">isArguments</b><code>_.isArguments(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is an Arguments object.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "(function(){ return _.isArguments(arguments); })(1, 2, 3);\n" +
    "=&gt; true\n" +
    "_.isArguments([1,2,3]);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isFunction\">\n" +
    "        <b class=\"header\">isFunction</b><code>_.isFunction(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a Function.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isFunction(alert);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isString\">\n" +
    "        <b class=\"header\">isString</b><code>_.isString(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a String.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isString(\"moe\");\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isNumber\">\n" +
    "        <b class=\"header\">isNumber</b><code>_.isNumber(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a Number (including <tt>NaN</tt>).\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isNumber(8.4 * 5);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isFinite\">\n" +
    "        <b class=\"header\">isFinite</b><code>_.isFinite(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a finite Number.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isFinite(-101);\n" +
    "=&gt; true\n" +
    "\n" +
    "_.isFinite(-Infinity);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isBoolean\">\n" +
    "        <b class=\"header\">isBoolean</b><code>_.isBoolean(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is either <i>true</i> or <i>false</i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isBoolean(null);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isDate\">\n" +
    "        <b class=\"header\">isDate</b><code>_.isDate(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a Date.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isDate(new Date());\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isRegExp\">\n" +
    "        <b class=\"header\">isRegExp</b><code>_.isRegExp(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is a RegExp.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isRegExp(/moe/);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isNaN\">\n" +
    "        <b class=\"header\">isNaN</b><code>_.isNaN(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>object</b> is <i>NaN</i>.<br /> Note: this is not\n" +
    "        the same as the native <b>isNaN</b> function, which will also return\n" +
    "        true if the variable is <i>undefined</i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isNaN(NaN);\n" +
    "=&gt; true\n" +
    "isNaN(undefined);\n" +
    "=&gt; true\n" +
    "_.isNaN(undefined);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isNull\">\n" +
    "        <b class=\"header\">isNull</b><code>_.isNull(object)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if the value of <b>object</b> is <i>null</i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isNull(null);\n" +
    "=&gt; true\n" +
    "_.isNull(undefined);\n" +
    "=&gt; false\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"isUndefined\">\n" +
    "        <b class=\"header\">isUndefined</b><code>_.isUndefined(value)</code>\n" +
    "        <br />\n" +
    "        Returns <i>true</i> if <b>value</b> is <i>undefined</i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.isUndefined(window.missingVariable);\n" +
    "=&gt; true\n" +
    "</pre>\n" +
    "\n" +
    "      <h2 id=\"utility\">Utility Functions</h2>\n" +
    "\n" +
    "      <p id=\"noConflict\">\n" +
    "        <b class=\"header\">noConflict</b><code>_.noConflict()</code>\n" +
    "        <br />\n" +
    "        Give control of the \"_\" variable back to its previous owner. Returns\n" +
    "        a reference to the <b>Underscore</b> object.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var underscore = _.noConflict();</pre>\n" +
    "\n" +
    "      <p id=\"identity\">\n" +
    "        <b class=\"header\">identity</b><code>_.identity(value)</code>\n" +
    "        <br />\n" +
    "        Returns the same value that is used as the argument. In math:\n" +
    "        <tt>f(x) = x</tt><br />\n" +
    "        This function looks useless, but is used throughout Underscore as\n" +
    "        a default iterator.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var moe = {name : 'moe'};\n" +
    "moe === _.identity(moe);\n" +
    "=&gt; true</pre>\n" +
    "\n" +
    "      <p id=\"times\">\n" +
    "        <b class=\"header\">times</b><code>_.times(n, iterator, [context])</code>\n" +
    "        <br />\n" +
    "        Invokes the given iterator function <b>n</b> times. Each invocation of\n" +
    "        <b>iterator</b> is called with an <tt>index</tt> argument.\n" +
    "        <br />\n" +
    "        <i>Note: this example uses the <a href=\"#chaining\">chaining syntax</a></i>.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_(3).times(function(n){ genie.grantWishNumber(n); });</pre>\n" +
    "\n" +
    "      <p id=\"random\">\n" +
    "        <b class=\"header\">random</b><code>_.random(min, max)</code>\n" +
    "        <br />\n" +
    "        Returns a random integer between <b>min</b> and <b>max</b>, inclusive.\n" +
    "        If you only pass one argument, it will return a number between <tt>0</tt>\n" +
    "        and that number.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.random(0, 100);\n" +
    "=&gt; 42</pre>\n" +
    "\n" +
    "      <p id=\"mixin\">\n" +
    "        <b class=\"header\">mixin</b><code>_.mixin(object)</code>\n" +
    "        <br />\n" +
    "        Allows you to extend Underscore with your own utility functions. Pass\n" +
    "        a hash of <tt>{name: function}</tt> definitions to have your functions\n" +
    "        added to the Underscore object, as well as the OOP wrapper.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.mixin({\n" +
    "  capitalize : function(string) {\n" +
    "    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();\n" +
    "  }\n" +
    "});\n" +
    "_(\"fabio\").capitalize();\n" +
    "=&gt; \"Fabio\"\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"uniqueId\">\n" +
    "        <b class=\"header\">uniqueId</b><code>_.uniqueId([prefix])</code>\n" +
    "        <br />\n" +
    "        Generate a globally-unique id for client-side models or DOM elements\n" +
    "        that need one. If <b>prefix</b> is passed, the id will be appended to it.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.uniqueId('contact_');\n" +
    "=&gt; 'contact_104'</pre>\n" +
    "\n" +
    "      <p id=\"escape\">\n" +
    "        <b class=\"header\">escape</b><code>_.escape(string)</code>\n" +
    "        <br />\n" +
    "        Escapes a string for insertion into HTML, replacing\n" +
    "        <tt>&amp;</tt>, <tt>&lt;</tt>, <tt>&gt;</tt>, <tt>&quot;</tt>, <tt>&#x27;</tt>, and <tt>&#x2F;</tt> characters.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.escape('Curly, Larry &amp; Moe');\n" +
    "=&gt; \"Curly, Larry &amp;amp; Moe\"</pre>\n" +
    "\n" +
    "      <p id=\"unescape\">\n" +
    "        <b class=\"header\">unescape</b><code>_.unescape(string)</code>\n" +
    "        <br />\n" +
    "        The opposite of <a href=\"#escape\"><b>escape</b></a>, replaces\n" +
    "        <tt>&amp;amp;</tt>, <tt>&amp;lt;</tt>, <tt>&amp;gt;</tt>,\n" +
    "        <tt>&amp;quot;</tt>, <tt>&amp;#x27;</tt>, and <tt>&amp;#x2F;</tt>\n" +
    "        with their unescaped counterparts.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_.unescape('Curly, Larry &amp;amp; Moe');\n" +
    "=&gt; \"Curly, Larry &amp; Moe\"</pre>\n" +
    "\n" +
    "      <p id=\"result\">\n" +
    "        <b class=\"header\">result</b><code>_.result(object, property)</code>\n" +
    "        <br />\n" +
    "        If the value of the named property is a function then invoke it; otherwise, return it.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var object = {cheese: 'crumpets', stuff: function(){ return 'nonsense'; }};\n" +
    "_.result(object, 'cheese');\n" +
    "=&gt; \"crumpets\"\n" +
    "_.result(object, 'stuff');\n" +
    "=&gt; \"nonsense\"</pre>\n" +
    "\n" +
    "      <p id=\"template\">\n" +
    "        <b class=\"header\">template</b><code>_.template(templateString, [data], [settings])</code>\n" +
    "        <br />\n" +
    "        Compiles JavaScript templates into functions that can be evaluated\n" +
    "        for rendering. Useful for rendering complicated bits of HTML from JSON\n" +
    "        data sources. Template functions can both interpolate variables, using\n" +
    "        <tt>&lt;%= &hellip; %&gt;</tt>, as well as execute arbitrary JavaScript code, with\n" +
    "        <tt>&lt;% &hellip; %&gt;</tt>. If you wish to interpolate a value, and have\n" +
    "        it be HTML-escaped, use <tt>&lt;%- &hellip; %&gt;</tt> When you evaluate a template function, pass in a\n" +
    "        <b>data</b> object that has properties corresponding to the template's free\n" +
    "        variables. If you're writing a one-off, you can pass the <b>data</b>\n" +
    "        object as the second parameter to <b>template</b> in order to render\n" +
    "        immediately instead of returning a template function.  The <b>settings</b> argument\n" +
    "        should be a hash containing any <tt>_.templateSettings</tt> that should be overridden.\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>\n" +
    "var compiled = _.template(\"hello: &lt;%= name %&gt;\");\n" +
    "compiled({name : 'moe'});\n" +
    "=&gt; \"hello: moe\"\n" +
    "\n" +
    "var list = \"&lt;% _.each(people, function(name) { %&gt; &lt;li&gt;&lt;%= name %&gt;&lt;/li&gt; &lt;% }); %&gt;\";\n" +
    "_.template(list, {people : ['moe', 'curly', 'larry']});\n" +
    "=&gt; \"&lt;li&gt;moe&lt;/li&gt;&lt;li&gt;curly&lt;/li&gt;&lt;li&gt;larry&lt;/li&gt;\"\n" +
    "\n" +
    "var template = _.template(\"&lt;b&gt;&lt;%- value %&gt;&lt;/b&gt;\");\n" +
    "template({value : '&lt;script&gt;'});\n" +
    "=&gt; \"&lt;b&gt;&amp;lt;script&amp;gt;&lt;/b&gt;\"</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        You can also use <tt>print</tt> from within JavaScript code.  This is\n" +
    "        sometimes more convenient than using <tt>&lt;%= ... %&gt;</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>\n" +
    "var compiled = _.template(\"&lt;% print('Hello ' + epithet); %&gt;\");\n" +
    "compiled({epithet: \"stooge\"});\n" +
    "=&gt; \"Hello stooge.\"</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        If ERB-style delimiters aren't your cup of tea, you can change Underscore's\n" +
    "        template settings to use different symbols to set off interpolated code.\n" +
    "        Define an <b>interpolate</b> regex to match expressions that should be\n" +
    "        interpolated verbatim, an <b>escape</b> regex to match expressions that should\n" +
    "        be inserted after being HTML escaped, and an <b>evaluate</b> regex to match\n" +
    "        expressions that should be evaluated without insertion into the resulting\n" +
    "        string. You may define or omit any combination of the three.\n" +
    "        For example, to perform\n" +
    "        <a href=\"http://github.com/janl/mustache.js#readme\">Mustache.js</a>\n" +
    "        style templating:\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>\n" +
    "_.templateSettings = {\n" +
    "  interpolate : /\\{\\{(.+?)\\}\\}/g\n" +
    "};\n" +
    "\n" +
    "var template = _.template(\"Hello {{ name }}!\");\n" +
    "template({name : \"Mustache\"});\n" +
    "=&gt; \"Hello Mustache!\"</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        By default, <b>template</b> places the values from your data in the local scope\n" +
    "        via the <tt>with</tt> statement.  However, you can specify a single variable name\n" +
    "        with the <b>variable</b> setting. This can significantly improve the speed\n" +
    "        at which a template is able to render.\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>\n" +
    "_.template(\"Using 'with': <%= data.answer %>\", {answer: 'no'}, {variable: 'data'});\n" +
    "=&gt; \"Using 'with': no\"</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        Precompiling your templates can be a big help when debugging errors you can't\n" +
    "        reproduce.  This is because precompiled templates can provide line numbers and\n" +
    "        a stack trace, something that is not possible when compiling templates on the client.\n" +
    "        The <b>source</b> property is available on the compiled template\n" +
    "        function for easy precompilation.\n" +
    "      </p>\n" +
    "\n" +
    "      <pre>&lt;script&gt;\n" +
    "  JST.project = <%= _.template(jstText).source %>;\n" +
    "&lt;/script&gt;</pre>\n" +
    "\n" +
    "\n" +
    "      <h2 id=\"chaining\">Chaining</h2>\n" +
    "\n" +
    "      <p>\n" +
    "        You can use Underscore in either an object-oriented or a functional style,\n" +
    "        depending on your preference. The following two lines of code are\n" +
    "        identical ways to double a list of numbers.\n" +
    "      </p>\n" +
    "\n" +
    "    <pre>\n" +
    "_.map([1, 2, 3], function(n){ return n * 2; });\n" +
    "_([1, 2, 3]).map(function(n){ return n * 2; });</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        Calling <tt>chain</tt> will cause all future method calls to return\n" +
    "        wrapped objects. When you've finished the computation, use\n" +
    "        <tt>value</tt> to retrieve the final value. Here's an example of chaining\n" +
    "        together a <b>map/flatten/reduce</b>, in order to get the word count of\n" +
    "        every word in a song.\n" +
    "      </p>\n" +
    "\n" +
    "<pre>\n" +
    "var lyrics = [\n" +
    "  {line : 1, words : \"I'm a lumberjack and I'm okay\"},\n" +
    "  {line : 2, words : \"I sleep all night and I work all day\"},\n" +
    "  {line : 3, words : \"He's a lumberjack and he's okay\"},\n" +
    "  {line : 4, words : \"He sleeps all night and he works all day\"}\n" +
    "];\n" +
    "\n" +
    "_.chain(lyrics)\n" +
    "  .map(function(line) { return line.words.split(' '); })\n" +
    "  .flatten()\n" +
    "  .reduce(function(counts, word) {\n" +
    "    counts[word] = (counts[word] || 0) + 1;\n" +
    "    return counts;\n" +
    "  }, {})\n" +
    "  .value();\n" +
    "\n" +
    "=&gt; {lumberjack : 2, all : 4, night : 2 ... }</pre>\n" +
    "\n" +
    "      <p>\n" +
    "        In addition, the\n" +
    "        <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/prototype\">Array prototype's methods</a>\n" +
    "        are proxied through the chained Underscore object, so you can slip a\n" +
    "        <tt>reverse</tt> or a <tt>push</tt> into your chain, and continue to\n" +
    "        modify the array.\n" +
    "      </p>\n" +
    "\n" +
    "      <p id=\"chain\">\n" +
    "        <b class=\"header\">chain</b><code>_.chain(obj)</code>\n" +
    "        <br />\n" +
    "        Returns a wrapped object. Calling methods on this object will continue\n" +
    "        to return wrapped objects until <tt>value</tt> is used.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "var stooges = [{name : 'curly', age : 25}, {name : 'moe', age : 21}, {name : 'larry', age : 23}];\n" +
    "var youngest = _.chain(stooges)\n" +
    "  .sortBy(function(stooge){ return stooge.age; })\n" +
    "  .map(function(stooge){ return stooge.name + ' is ' + stooge.age; })\n" +
    "  .first()\n" +
    "  .value();\n" +
    "=&gt; \"moe is 21\"\n" +
    "</pre>\n" +
    "\n" +
    "      <p id=\"value\">\n" +
    "        <b class=\"header\">value</b><code>_(obj).value()</code>\n" +
    "        <br />\n" +
    "        Extracts the value of a wrapped object.\n" +
    "      </p>\n" +
    "      <pre>\n" +
    "_([1, 2, 3]).value();\n" +
    "=&gt; [1, 2, 3]\n" +
    "</pre>\n" +
    "\n" +
    "      <h2 id=\"links\">Links &amp; Suggested Reading</h2>\n" +
    "\n" +
    "      <p>\n" +
    "        The Underscore documentation is also available in\n" +
    "        <a href=\"http://learning.github.com/underscore/\">Simplified Chinese</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://mirven.github.com/underscore.lua/\">Underscore.lua</a>,\n" +
    "        a Lua port of the functions that are applicable in both languages.\n" +
    "        Includes OOP-wrapping and chaining.\n" +
    "        (<a href=\"http://github.com/mirven/underscore.lua\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://underscorem.org\">Underscore.m</a>, an Objective-C port\n" +
    "        of many of the Underscore.js functions, using a syntax that encourages\n" +
    "        chaining.\n" +
    "        (<a href=\"https://github.com/robb/Underscore.m\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://kmalakoff.github.com/_.m/\">_.m</a>, an alternative\n" +
    "        Objective-C port that tries to stick a little closer to the original\n" +
    "        Underscore.js API.\n" +
    "        (<a href=\"https://github.com/kmalakoff/_.m\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://brianhaveri.github.com/Underscore.php/\">Underscore.php</a>,\n" +
    "        a PHP port of the functions that are applicable in both languages.\n" +
    "        Includes OOP-wrapping and chaining.\n" +
    "        (<a href=\"http://github.com/brianhaveri/Underscore.php\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://vti.github.com/underscore-perl/\">Underscore-perl</a>,\n" +
    "        a Perl port of many of the Underscore.js functions,\n" +
    "        aimed at on Perl hashes and arrays.\n" +
    "        (<a href=\"https://github.com/vti/underscore-perl/\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://russplaysguitar.github.com/UnderscoreCF/\">Underscore.cfc</a>,\n" +
    "        a Coldfusion port of many of the Underscore.js functions.\n" +
    "        (<a href=\"https://github.com/russplaysguitar/underscorecf\">source</a>)\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"https://github.com/edtsech/underscore.string\">Underscore.string</a>,\n" +
    "        an Underscore extension that adds functions for string-manipulation:\n" +
    "        <tt>trim</tt>, <tt>startsWith</tt>, <tt>contains</tt>, <tt>capitalize</tt>,\n" +
    "        <tt>reverse</tt>, <tt>sprintf</tt>, and more.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        Ruby's <a href=\"http://ruby-doc.org/core/classes/Enumerable.html\">Enumerable</a> module.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://www.prototypejs.org/\">Prototype.js</a>, which provides\n" +
    "        JavaScript with collection functions in the manner closest to Ruby's Enumerable.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        Oliver Steele's\n" +
    "        <a href=\"http://osteele.com/sources/javascript/functional/\">Functional JavaScript</a>,\n" +
    "        which includes comprehensive higher-order function support as well as string lambdas.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        Michael Aufreiter's <a href=\"http://github.com/michael/data\">Data.js</a>,\n" +
    "        a data manipulation + persistence library for JavaScript.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        Python's <a href=\"http://docs.python.org/library/itertools.html\">itertools</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <h2 id=\"changelog\">Change Log</h2>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.4.4</b> &mdash; <small><i>Jan. 30, 2013</i></small> &mdash; <a href=\"https://github.com/documentcloud/underscore/compare/1.4.3...1.4.4\">Diff</a><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Added <tt>_.findWhere</tt>, for finding the first element in a list\n" +
    "            that matches a particular set of keys and values.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added <tt>_.partial</tt>, for partially applying a function <i>without</i>\n" +
    "            changing its dynamic reference to <tt>this</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Simplified <tt>bind</tt> by removing some edge cases involving\n" +
    "            constructor functions. In short: don't <tt>_.bind</tt> your\n" +
    "            constructors.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            A minor optimization to <tt>invoke</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Fix bug in the minified version due to the minifier incorrectly\n" +
    "            optimizing-away <tt>isFunction</tt>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.4.3</b> &mdash; <small><i>Dec. 4, 2012</i></small> &mdash; <a href=\"https://github.com/documentcloud/underscore/compare/1.4.2...1.4.3\">Diff</a><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Improved Underscore compatibility with Adobe's JS engine that can be\n" +
    "            used to script Illustrator, Photoshop, and friends.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added a default <tt>_.identity</tt> iterator to <tt>countBy</tt> and\n" +
    "            <tt>groupBy</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>uniq</tt> function can now take <tt>array, iterator, context</tt>\n" +
    "            as the argument list.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>times</tt> function now returns the mapped array of iterator\n" +
    "            results.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Simplified and fixed bugs in <tt>throttle</tt>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.4.2</b> &mdash; <small><i>Oct. 1, 2012</i></small> &mdash; <a href=\"https://github.com/documentcloud/underscore/compare/1.4.1...1.4.2\">Diff</a><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            For backwards compatibility, returned to pre-1.4.0 behavior when\n" +
    "            passing <tt>null</tt> to iteration functions. They now become no-ops\n" +
    "            again.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.4.1</b> &mdash; <small><i>Oct. 1, 2012</i></small> &mdash; <a href=\"https://github.com/documentcloud/underscore/compare/1.4.0...1.4.1\">Diff</a><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Fixed a 1.4.0 regression in the <tt>lastIndexOf</tt> function.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.4.0</b> &mdash; <small><i>Sept. 27, 2012</i></small>  &mdash; <a href=\"https://github.com/documentcloud/underscore/compare/1.3.3...1.4.0\">Diff</a><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Added a <tt>pairs</tt> function, for turning a JavaScript object\n" +
    "            into <tt>[key, value]</tt> pairs ... as well as an <tt>object</tt>\n" +
    "            function, for converting an array of <tt>[key, value]</tt> pairs\n" +
    "            into an object.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added a <tt>countBy</tt> function, for counting the number of objects\n" +
    "            in a list that match a certain criteria.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added an <tt>invert</tt> function, for performing a simple inversion\n" +
    "            of the keys and values in an object.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added a <tt>where</tt> function, for easy cases of filtering a list\n" +
    "            for objects with specific values.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added an <tt>omit</tt> function, for filtering an object to remove\n" +
    "            certain keys.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added a <tt>random</tt> function, to return a random number in a\n" +
    "            given range.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.debounce</tt>'d functions now return their last updated value,\n" +
    "            just like <tt>_.throttle</tt>'d functions do.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>sortBy</tt> function now runs a stable sort algorithm.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added the optional <tt>fromIndex</tt> option to <tt>indexOf</tt> and\n" +
    "            <tt>lastIndexOf</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            \"Sparse\" arrays are no longer supported in Underscore iteration\n" +
    "            functions. Use a <tt>for</tt> loop instead (or better yet, an object).\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>min</tt> and <tt>max</tt> functions may now be called on\n" +
    "            <i>very</i> large arrays.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Interpolation in templates now represents <tt>null</tt> and\n" +
    "            <tt>undefined</tt> as the empty string.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <del>Underscore iteration functions no longer accept <tt>null</tt> values\n" +
    "            as a no-op argument. You'll get an early error instead.</del>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            A number of edge-cases fixes and tweaks, which you can spot in the\n" +
    "            <a href=\"https://github.com/documentcloud/underscore/compare/1.3.3...1.4.0\">diff</a>.\n" +
    "            Depending on how you're using Underscore, <b>1.4.0</b> may be more\n" +
    "            backwards-incompatible than usual &mdash; please test when you upgrade.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.3.3</b> &mdash; <small><i>April 10, 2012</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Many improvements to <tt>_.template</tt>, which now provides the\n" +
    "            <tt>source</tt> of the template function as a property, for potentially\n" +
    "            even more efficient pre-compilation on the server-side. You may now\n" +
    "            also set the <tt>variable</tt> option when creating a template,\n" +
    "            which will cause your passed-in data to be made available under the\n" +
    "            variable you named, instead of using a <tt>with</tt> statement &mdash;\n" +
    "            significantly improving the speed of rendering the template.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added the <tt>pick</tt> function, which allows you to filter an\n" +
    "            object literal with a whitelist of allowed property names.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added the <tt>result</tt> function, for convenience when working\n" +
    "            with APIs that allow either functions or raw properties.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added the <tt>isFinite</tt> function, because sometimes knowing that\n" +
    "            a value is a number just ain't quite enough.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>sortBy</tt> function may now also be passed the string name\n" +
    "            of a property to use as the sort order on each object.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Fixed <tt>uniq</tt> to work with sparse arrays.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>difference</tt> function now performs a shallow flatten\n" +
    "            instead of a deep one when computing array differences.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>debounce</tt> function now takes an <tt>immediate</tt>\n" +
    "            parameter, which will cause the callback to fire on the leading\n" +
    "            instead of the trailing edge.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.3.1</b> &mdash; <small><i>Jan. 23, 2012</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Added an <tt>_.has</tt> function, as a safer way to use <tt>hasOwnProperty</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Added <tt>_.collect</tt> as an alias for <tt>_.map</tt>. Smalltalkers, rejoice.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Reverted an old change so that <tt>_.extend</tt> will correctly copy\n" +
    "            over keys with undefined values again.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Bugfix to stop escaping slashes within interpolations in <tt>_.template</tt>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.3.0</b> &mdash; <small><i>Jan. 11, 2012</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Removed AMD (RequireJS) support from Underscore. If you'd like to use\n" +
    "            Underscore with RequireJS, you can load it as a normal script, wrap\n" +
    "            or patch your copy, or download a forked version.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.2.4</b> &mdash; <small><i>Jan. 4, 2012</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            You now can (and probably should, as it's simpler)\n" +
    "            write <tt>_.chain(list)</tt>\n" +
    "            instead of <tt>_(list).chain()</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Fix for escaped characters in Underscore templates, and for supporting\n" +
    "            customizations of <tt>_.templateSettings</tt> that only define one or\n" +
    "            two of the required regexes.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Fix for passing an array as the first argument to an <tt>_.wrap</tt>'d function.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Improved compatibility with ClojureScript, which adds a <tt>call</tt>\n" +
    "            function to <tt>String.prototype</tt>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.2.3</b> &mdash; <small><i>Dec. 7, 2011</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Dynamic scope is now preserved for compiled <tt>_.template</tt> functions,\n" +
    "            so you can use the value of <tt>this</tt> if you like.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Sparse array support of <tt>_.indexOf</tt>, <tt>_.lastIndexOf</tt>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Both <tt>_.reduce</tt> and <tt>_.reduceRight</tt> can now be passed an\n" +
    "            explicitly <tt>undefined</tt> value. (There's no reason why you'd\n" +
    "            want to do this.)\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.2.2</b> &mdash; <small><i>Nov. 14, 2011</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Continued tweaks to <tt>_.isEqual</tt> semantics. Now JS primitives are\n" +
    "            considered equivalent to their wrapped versions, and arrays are compared\n" +
    "            by their numeric properties only <small>(#351)</small>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.escape</tt> no longer tries to be smart about not double-escaping\n" +
    "            already-escaped HTML entities. Now it just escapes regardless <small>(#350)</small>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            In <tt>_.template</tt>, you may now leave semicolons out of evaluated\n" +
    "            statements if you wish: <tt>&lt;% }) %&gt;</tt> <small>(#369)</small>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.after(callback, 0)</tt> will now trigger the callback immediately,\n" +
    "            making \"after\" easier to use with asynchronous APIs <small>(#366)</small>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.2.1</b> &mdash; <small><i>Oct. 24, 2011</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            Several important bug fixes for <tt>_.isEqual</tt>, which should now\n" +
    "            do better on mutated Arrays, and on non-Array objects with\n" +
    "            <tt>length</tt> properties. <small>(#329)</small>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <b>jrburke</b> contributed Underscore exporting for AMD module loaders,\n" +
    "            and <b>tonylukasavage</b> for Appcelerator Titanium.\n" +
    "            <small>(#335, #338)</small>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            You can now <tt>_.groupBy(list, 'property')</tt> as a shortcut for\n" +
    "            grouping values by a particular common property.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.throttle</tt>'d functions now fire immediately upon invocation,\n" +
    "            and are rate-limited thereafter <small>(#170, #266)</small>.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Most of the <tt>_.is[Type]</tt> checks no longer ducktype.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            The <tt>_.bind</tt> function now also works on constructors, a-la\n" +
    "            ES5 ... but you would never want to use <tt>_.bind</tt> on a\n" +
    "            constructor function.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.clone</tt> no longer wraps non-object types in Objects.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.find</tt> and <tt>_.filter</tt> are now the preferred names for\n" +
    "            <tt>_.detect</tt> and <tt>_.select</tt>.\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.2.0</b> &mdash; <small><i>Oct. 5, 2011</i></small><br />\n" +
    "        <ul>\n" +
    "          <li>\n" +
    "            The <tt>_.isEqual</tt> function now\n" +
    "            supports true deep equality comparisons, with checks for cyclic structures,\n" +
    "            thanks to Kit Cambridge.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Underscore templates now support HTML escaping interpolations, using\n" +
    "            <tt>&lt;%- ... %&gt;</tt> syntax.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            Ryan Tenney contributed <tt>_.shuffle</tt>, which uses a modified\n" +
    "            Fisher-Yates to give you a shuffled copy of an array.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.uniq</tt> can now be passed an optional iterator, to determine by\n" +
    "            what criteria an object should be considered unique.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <tt>_.last</tt> now takes an optional argument which will return the last\n" +
    "            N elements of the list.\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            A new <tt>_.initial</tt> function was added, as a mirror of <tt>_.rest</tt>,\n" +
    "            which returns all the initial values of a list (except the last N).\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.7</b> &mdash; <small><i>July 13, 2011</i></small><br />\n" +
    "        Added <tt>_.groupBy</tt>, which aggregates a collection into groups of like items.\n" +
    "        Added <tt>_.union</tt> and <tt>_.difference</tt>, to complement the\n" +
    "        (re-named) <tt>_.intersection</tt>.\n" +
    "        Various improvements for support of sparse arrays.\n" +
    "        <tt>_.toArray</tt> now returns a clone, if directly passed an array.\n" +
    "        <tt>_.functions</tt> now also returns the names of functions that are present\n" +
    "        in the prototype chain.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.6</b> &mdash; <small><i>April 18, 2011</i></small><br />\n" +
    "        Added <tt>_.after</tt>, which will return a function that only runs after\n" +
    "        first being called a specified number of times.\n" +
    "        <tt>_.invoke</tt> can now take a direct function reference.\n" +
    "        <tt>_.every</tt> now requires an iterator function to be passed, which\n" +
    "        mirrors the ECMA5 API.\n" +
    "        <tt>_.extend</tt> no longer copies keys when the value is undefined.\n" +
    "        <tt>_.bind</tt> now errors when trying to bind an undefined value.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.5</b> &mdash; <small><i>Mar 20, 2011</i></small><br />\n" +
    "        Added an <tt>_.defaults</tt> function, for use merging together JS objects\n" +
    "        representing default options.\n" +
    "        Added an <tt>_.once</tt> function, for manufacturing functions that should\n" +
    "        only ever execute a single time.\n" +
    "        <tt>_.bind</tt> now delegates to the native ECMAScript 5 version,\n" +
    "        where available.\n" +
    "        <tt>_.keys</tt> now throws an error when used on non-Object values, as in\n" +
    "        ECMAScript 5.\n" +
    "        Fixed a bug with <tt>_.keys</tt> when used over sparse arrays.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.4</b> &mdash; <small><i>Jan 9, 2011</i></small><br />\n" +
    "        Improved compliance with ES5's Array methods when passing <tt>null</tt>\n" +
    "        as a value. <tt>_.wrap</tt> now correctly sets <tt>this</tt> for the\n" +
    "        wrapped function. <tt>_.indexOf</tt> now takes an optional flag for\n" +
    "        finding the insertion index in an array that is guaranteed to already\n" +
    "        be sorted. Avoiding the use of <tt>.callee</tt>, to allow <tt>_.isArray</tt>\n" +
    "        to work properly in ES5's strict mode.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.3</b> &mdash; <small><i>Dec 1, 2010</i></small><br />\n" +
    "        In CommonJS, Underscore may now be required with just: <br />\n" +
    "        <tt>var _ = require(\"underscore\")</tt>.\n" +
    "        Added <tt>_.throttle</tt> and <tt>_.debounce</tt> functions.\n" +
    "        Removed <tt>_.breakLoop</tt>, in favor of an ECMA5-style un-<i>break</i>-able\n" +
    "        each implementation &mdash; this removes the try/catch, and you'll now have\n" +
    "        better stack traces for exceptions that are thrown within an Underscore iterator.\n" +
    "        Improved the <b>isType</b> family of functions for better interoperability\n" +
    "        with Internet Explorer host objects.\n" +
    "        <tt>_.template</tt> now correctly escapes backslashes in templates.\n" +
    "        Improved <tt>_.reduce</tt> compatibility with the ECMA5 version:\n" +
    "        if you don't pass an initial value, the first item in the collection is used.\n" +
    "        <tt>_.each</tt> no longer returns the iterated collection, for improved\n" +
    "        consistency with ES5's <tt>forEach</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.2</b><br />\n" +
    "        Fixed <tt>_.contains</tt>, which was mistakenly pointing at\n" +
    "        <tt>_.intersect</tt> instead of <tt>_.include</tt>, like it should\n" +
    "        have been. Added <tt>_.unique</tt> as an alias for <tt>_.uniq</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.1</b><br />\n" +
    "        Improved the speed of <tt>_.template</tt>, and its handling of multiline\n" +
    "        interpolations. Ryan Tenney contributed optimizations to many Underscore\n" +
    "        functions. An annotated version of the source code is now available.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.1.0</b><br />\n" +
    "        The method signature of <tt>_.reduce</tt> has been changed to match\n" +
    "        the ECMAScript 5 signature, instead of the Ruby/Prototype.js version.\n" +
    "        This is a backwards-incompatible change. <tt>_.template</tt> may now be\n" +
    "        called with no arguments, and preserves whitespace. <tt>_.contains</tt>\n" +
    "        is a new alias for <tt>_.include</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.0.4</b><br />\n" +
    "        <a href=\"http://themoell.com/\">Andri Möll</a> contributed the <tt>_.memoize</tt>\n" +
    "        function, which can be used to speed up expensive repeated computations\n" +
    "        by caching the results.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.0.3</b><br />\n" +
    "        Patch that makes <tt>_.isEqual</tt> return <tt>false</tt> if any property\n" +
    "        of the compared object has a <tt>NaN</tt> value. Technically the correct\n" +
    "        thing to do, but of questionable semantics. Watch out for NaN comparisons.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.0.2</b><br />\n" +
    "        Fixes <tt>_.isArguments</tt> in recent versions of Opera, which have\n" +
    "        arguments objects as real Arrays.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.0.1</b><br />\n" +
    "        Bugfix for <tt>_.isEqual</tt>, when comparing two objects with the same\n" +
    "        number of undefined keys, but with different names.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">1.0.0</b><br />\n" +
    "        Things have been stable for many months now, so Underscore is now\n" +
    "        considered to be out of beta, at <b>1.0</b>. Improvements since <b>0.6</b>\n" +
    "        include <tt>_.isBoolean</tt>, and the ability to have <tt>_.extend</tt>\n" +
    "        take multiple source objects.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.6.0</b><br />\n" +
    "        Major release. Incorporates a number of\n" +
    "        <a href=\"http://github.com/ratbeard\">Mile Frawley's</a> refactors for\n" +
    "        safer duck-typing on collection functions, and cleaner internals. A new\n" +
    "        <tt>_.mixin</tt> method that allows you to extend Underscore with utility\n" +
    "        functions of your own. Added <tt>_.times</tt>, which works the same as in\n" +
    "        Ruby or Prototype.js. Native support for ECMAScript 5's <tt>Array.isArray</tt>,\n" +
    "        and <tt>Object.keys</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.8</b><br />\n" +
    "        Fixed Underscore's collection functions to work on\n" +
    "        <a href=\"https://developer.mozilla.org/En/DOM/NodeList\">NodeLists</a> and\n" +
    "        <a href=\"https://developer.mozilla.org/En/DOM/HTMLCollection\">HTMLCollections</a>\n" +
    "        once more, thanks to\n" +
    "        <a href=\"http://github.com/jmtulloss\">Justin Tulloss</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.7</b><br />\n" +
    "        A safer implementation of <tt>_.isArguments</tt>, and a\n" +
    "        faster <tt>_.isNumber</tt>,<br />thanks to\n" +
    "        <a href=\"http://jedschmidt.com/\">Jed Schmidt</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.6</b><br />\n" +
    "        Customizable delimiters for <tt>_.template</tt>, contributed by\n" +
    "        <a href=\"http://github.com/iamnoah\">Noah Sloan</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.5</b><br />\n" +
    "        Fix for a bug in MobileSafari's OOP-wrapper, with the arguments object.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.4</b><br />\n" +
    "        Fix for multiple single quotes within a template string for\n" +
    "        <tt>_.template</tt>. See:\n" +
    "        <a href=\"http://www.west-wind.com/Weblog/posts/509108.aspx\">Rick Strahl's blog post</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.2</b><br />\n" +
    "        New implementations of <tt>isArray</tt>, <tt>isDate</tt>, <tt>isFunction</tt>,\n" +
    "        <tt>isNumber</tt>, <tt>isRegExp</tt>, and <tt>isString</tt>, thanks to\n" +
    "        a suggestion from\n" +
    "        <a href=\"http://www.broofa.com/\">Robert Kieffer</a>.\n" +
    "        Instead of doing <tt>Object#toString</tt>\n" +
    "        comparisons, they now check for expected properties, which is less safe,\n" +
    "        but more than an order of magnitude faster. Most other Underscore\n" +
    "        functions saw minor speed improvements as a result.\n" +
    "        <a href=\"http://dolzhenko.org/\">Evgeniy Dolzhenko</a>\n" +
    "        contributed <tt>_.tap</tt>,\n" +
    "        <a href=\"http://ruby-doc.org/core-1.9/classes/Object.html#M000191\">similar to Ruby 1.9's</a>,\n" +
    "        which is handy for injecting side effects (like logging) into chained calls.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.1</b><br />\n" +
    "        Added an <tt>_.isArguments</tt> function. Lots of little safety checks\n" +
    "        and optimizations contributed by\n" +
    "        <a href=\"http://github.com/iamnoah/\">Noah Sloan</a> and\n" +
    "        <a href=\"http://themoell.com/\">Andri Möll</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.5.0</b><br />\n" +
    "        <b>[API Changes]</b> <tt>_.bindAll</tt> now takes the context object as\n" +
    "        its first parameter. If no method names are passed, all of the context\n" +
    "        object's methods are bound to it, enabling chaining and easier binding.\n" +
    "        <tt>_.functions</tt> now takes a single argument and returns the names\n" +
    "        of its Function properties. Calling <tt>_.functions(_)</tt> will get you\n" +
    "        the previous behavior.\n" +
    "        Added <tt>_.isRegExp</tt> so that <tt>isEqual</tt> can now test for RegExp equality.\n" +
    "        All of the \"is\" functions have been shrunk down into a single definition.\n" +
    "        <a href=\"http://github.com/grayrest/\">Karl Guertin</a> contributed patches.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.7</b><br />\n" +
    "        Added <tt>isDate</tt>, <tt>isNaN</tt>, and <tt>isNull</tt>, for completeness.\n" +
    "        Optimizations for <tt>isEqual</tt> when checking equality between Arrays\n" +
    "        or Dates. <tt>_.keys</tt> is now <small><i><b>25%&ndash;2X</b></i></small> faster (depending on your\n" +
    "        browser) which speeds up the functions that rely on it, such as <tt>_.each</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.6</b><br />\n" +
    "        Added the <tt>range</tt> function, a port of the\n" +
    "        <a href=\"http://docs.python.org/library/functions.html#range\">Python\n" +
    "        function of the same name</a>, for generating flexibly-numbered lists\n" +
    "        of integers. Original patch contributed by\n" +
    "        <a href=\"http://github.com/kylichuku\">Kirill Ishanov</a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.5</b><br />\n" +
    "        Added <tt>rest</tt> for Arrays and arguments objects, and aliased\n" +
    "        <tt>first</tt> as <tt>head</tt>, and <tt>rest</tt> as <tt>tail</tt>,\n" +
    "        thanks to <a href=\"http://github.com/lukesutton/\">Luke Sutton</a>'s patches.\n" +
    "        Added tests ensuring that all Underscore Array functions also work on\n" +
    "        <i>arguments</i> objects.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.4</b><br />\n" +
    "        Added <tt>isString</tt>, and <tt>isNumber</tt>, for consistency. Fixed\n" +
    "        <tt>_.isEqual(NaN, NaN)</tt> to return <i>true</i> (which is debatable).\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.3</b><br />\n" +
    "        Started using the native <tt>StopIteration</tt> object in browsers that support it.\n" +
    "        Fixed Underscore setup for CommonJS environments.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.2</b><br />\n" +
    "        Renamed the unwrapping function to <tt>value</tt>, for clarity.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.1</b><br />\n" +
    "        Chained Underscore objects now support the Array prototype methods, so\n" +
    "        that you can perform the full range of operations on a wrapped array\n" +
    "        without having to break your chain. Added a <tt>breakLoop</tt> method\n" +
    "        to <b>break</b> in the middle of any Underscore iteration. Added an\n" +
    "        <tt>isEmpty</tt> function that works on arrays and objects.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.4.0</b><br />\n" +
    "        All Underscore functions can now be called in an object-oriented style,\n" +
    "        like so: <tt>_([1, 2, 3]).map(...);</tt>. Original patch provided by\n" +
    "        <a href=\"http://macournoyer.com/\">Marc-André Cournoyer</a>.\n" +
    "        Wrapped objects can be chained through multiple\n" +
    "        method invocations. A <a href=\"#object-functions\"><tt>functions</tt></a> method\n" +
    "        was added, providing a sorted list of all the functions in Underscore.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.3.3</b><br />\n" +
    "        Added the JavaScript 1.8 function <tt>reduceRight</tt>. Aliased it\n" +
    "        as <tt>foldr</tt>, and aliased <tt>reduce</tt> as <tt>foldl</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.3.2</b><br />\n" +
    "        Now runs on stock <a href=\"http://www.mozilla.org/rhino/\">Rhino</a>\n" +
    "        interpreters with: <tt>load(\"underscore.js\")</tt>.\n" +
    "        Added <a href=\"#identity\"><tt>identity</tt></a> as a utility function.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.3.1</b><br />\n" +
    "        All iterators are now passed in the original collection as their third\n" +
    "        argument, the same as JavaScript 1.6's <b>forEach</b>. Iterating over\n" +
    "        objects is now called with <tt>(value, key, collection)</tt>, for details\n" +
    "        see <a href=\"#each\"><tt>_.each</tt></a>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.3.0</b><br />\n" +
    "        Added <a href=\"http://github.com/dmitryBaranovskiy\">Dmitry Baranovskiy</a>'s\n" +
    "        comprehensive optimizations, merged in\n" +
    "        <a href=\"http://github.com/kriskowal/\">Kris Kowal</a>'s patches to make Underscore\n" +
    "        <a href=\"http://wiki.commonjs.org/wiki/CommonJS\">CommonJS</a> and\n" +
    "        <a href=\"http://narwhaljs.org/\">Narwhal</a> compliant.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.2.0</b><br />\n" +
    "        Added <tt>compose</tt> and <tt>lastIndexOf</tt>, renamed <tt>inject</tt> to\n" +
    "        <tt>reduce</tt>, added aliases for <tt>inject</tt>, <tt>filter</tt>,\n" +
    "        <tt>every</tt>, <tt>some</tt>, and <tt>forEach</tt>.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.1.1</b><br />\n" +
    "        Added <tt>noConflict</tt>, so that the \"Underscore\" object can be assigned to\n" +
    "        other variables.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <b class=\"header\">0.1.0</b><br />\n" +
    "        Initial release of Underscore.js.\n" +
    "      </p>\n" +
    "\n" +
    "      <p>\n" +
    "        <a href=\"http://documentcloud.org/\" title=\"A DocumentCloud Project\" style=\"background:none;\">\n" +
    "          <img src=\"http://jashkenas.s3.amazonaws.com/images/a_documentcloud_project.png\" alt=\"A DocumentCloud Project\" />\n" +
    "        </a>\n" +
    "      </p>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <!-- Include Underscore, so you can play with it in the console. -->\n" +
    "  <script type=\"text/javascript\" src=\"underscore.js\"></script>\n" +
    "\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/deps/ejs/examples/client.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <script src=\"../ejs.js\"></script>\n" +
    "  </head>\n" +
    "</html>");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/examples/browser/test.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <title>Example tests</title>\n" +
    "    <script src=\"nodeunit.js\"></script>\n" +
    "    <script src=\"suite1.js\"></script>\n" +
    "    <script src=\"suite2.js\"></script>\n" +
    "    <script src=\"suite3.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>\n" +
    "      nodeunit.run({\n" +
    "        'suite1': suite1,\n" +
    "        'suite2': suite2,\n" +
    "        'suite3': suite3\n" +
    "      });\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/coveralls/node_modules/log-driver/coverage/lcov-report/index.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for All files</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"prettify.css\">\n" +
    "\n" +
    "    <style>\n" +
    "        body, html {\n" +
    "            margin:0; padding: 0;\n" +
    "        }\n" +
    "        body {\n" +
    "            font-family: Helvetica Neue, Helvetica,Arial;\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        div.header, div.footer {\n" +
    "            background: #eee;\n" +
    "            padding: 1em;\n" +
    "        }\n" +
    "        div.header {\n" +
    "            z-index: 100;\n" +
    "            position: fixed;\n" +
    "            top: 0;\n" +
    "            border-bottom: 1px solid #666;\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "        div.footer {\n" +
    "            border-top: 1px solid #666;\n" +
    "        }\n" +
    "        div.body {\n" +
    "            margin-top: 10em;\n" +
    "        }\n" +
    "        div.meta {\n" +
    "            font-size: 90%;\n" +
    "            text-align: center;\n" +
    "        }\n" +
    "        h1, h2, h3 {\n" +
    "            font-weight: normal;\n" +
    "        }\n" +
    "        h1 {\n" +
    "            font-size: 12pt;\n" +
    "        }\n" +
    "        h2 {\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        pre {\n" +
    "            font-family: Consolas, Menlo, Monaco, monospace;\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            line-height: 14px;\n" +
    "            font-size: 14px;\n" +
    "            -moz-tab-size: 2;\n" +
    "            -o-tab-size:  2;\n" +
    "            tab-size: 2;\n" +
    "        }\n" +
    "\n" +
    "        div.path { font-size: 110%; }\n" +
    "        div.path a:link, div.path a:visited { color: #000; }\n" +
    "        table.coverage { border-collapse: collapse; margin:0; padding: 0 }\n" +
    "\n" +
    "        table.coverage td {\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            color: #111;\n" +
    "            vertical-align: top;\n" +
    "        }\n" +
    "        table.coverage td.line-count {\n" +
    "            width: 50px;\n" +
    "            text-align: right;\n" +
    "            padding-right: 5px;\n" +
    "        }\n" +
    "        table.coverage td.line-coverage {\n" +
    "            color: #777 !important;\n" +
    "            text-align: right;\n" +
    "            border-left: 1px solid #666;\n" +
    "            border-right: 1px solid #666;\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td.text {\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td span.cline-any {\n" +
    "            display: inline-block;\n" +
    "            padding: 0 5px;\n" +
    "            width: 40px;\n" +
    "        }\n" +
    "        table.coverage td span.cline-neutral {\n" +
    "            background: #eee;\n" +
    "        }\n" +
    "        table.coverage td span.cline-yes {\n" +
    "            background: #b5d592;\n" +
    "            color: #999;\n" +
    "        }\n" +
    "        table.coverage td span.cline-no {\n" +
    "            background: #fc8c84;\n" +
    "        }\n" +
    "\n" +
    "        .cstat-yes { color: #111; }\n" +
    "        .cstat-no { background: #fc8c84; color: #111; }\n" +
    "        .fstat-no { background: #ffc520; color: #111 !important; }\n" +
    "        .cbranch-no { background:  yellow !important; color: #111; }\n" +
    "\n" +
    "        .cstat-skip { background: #ddd; color: #111; }\n" +
    "        .fstat-skip { background: #ddd; color: #111 !important; }\n" +
    "        .cbranch-skip { background: #ddd !important; color: #111; }\n" +
    "\n" +
    "        .missing-if-branch {\n" +
    "            display: inline-block;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: black;\n" +
    "            color: yellow;\n" +
    "        }\n" +
    "\n" +
    "        .skip-if-branch {\n" +
    "            display: none;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: #ccc;\n" +
    "            color: white;\n" +
    "        }\n" +
    "\n" +
    "        .missing-if-branch .typ, .skip-if-branch .typ {\n" +
    "            color: inherit !important;\n" +
    "        }\n" +
    "\n" +
    "        .entity, .metric { font-weight: bold; }\n" +
    "        .metric { display: inline-block; border: 1px solid #333; padding: 0.3em; background: white; }\n" +
    "        .metric small { font-size: 80%; font-weight: normal; color: #666; }\n" +
    "\n" +
    "        div.coverage-summary table { border-collapse: collapse; margin: 3em; font-size: 110%; }\n" +
    "        div.coverage-summary td, div.coverage-summary table  th { margin: 0; padding: 0.25em 1em; border-top: 1px solid #666; border-bottom: 1px solid #666; }\n" +
    "        div.coverage-summary th { text-align: left; border: 1px solid #666; background: #eee; font-weight: normal; }\n" +
    "        div.coverage-summary th.file { border-right: none !important; }\n" +
    "        div.coverage-summary th.pic { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary th.pct { border-right: none !important; }\n" +
    "        div.coverage-summary th.abs { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary td.pct { text-align: right; border-left: 1px solid #666; }\n" +
    "        div.coverage-summary td.abs { text-align: right; font-size: 90%; color: #444; border-right: 1px solid #666; }\n" +
    "        div.coverage-summary td.file { text-align: right; border-left: 1px solid #666; white-space: nowrap;  }\n" +
    "        div.coverage-summary td.pic { min-width: 120px !important;  }\n" +
    "        div.coverage-summary a:link { text-decoration: none; color: #000; }\n" +
    "        div.coverage-summary a:visited { text-decoration: none; color: #333; }\n" +
    "        div.coverage-summary a:hover { text-decoration: underline; }\n" +
    "        div.coverage-summary tfoot td { border-top: 1px solid #666; }\n" +
    "\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator, div.coverage-summary .dummy-sort-indicator {\n" +
    "            height: 10px;\n" +
    "            width: 7px;\n" +
    "            display: inline-block;\n" +
    "            margin-left: 0.5em;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator {\n" +
    "            background: url(\"http://yui.yahooapis.com/3.6.0/build/datatable-sort/assets/skins/sam/sort-arrow-sprite.png\") no-repeat scroll 0 0 transparent;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -20px;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted-desc .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -10px;\n" +
    "        }\n" +
    "\n" +
    "        .high { background: #b5d592 !important; }\n" +
    "        .medium { background: #ffe87c !important; }\n" +
    "        .low { background: #fc8c84 !important; }\n" +
    "\n" +
    "        span.cover-fill, span.cover-empty {\n" +
    "            display:inline-block;\n" +
    "            border:1px solid #444;\n" +
    "            background: white;\n" +
    "            height: 12px;\n" +
    "        }\n" +
    "        span.cover-fill {\n" +
    "            background: #ccc;\n" +
    "            border-right: 1px solid #444;\n" +
    "        }\n" +
    "        span.cover-empty {\n" +
    "            background: white;\n" +
    "            border-left: none;\n" +
    "        }\n" +
    "        span.cover-full {\n" +
    "            border-right: none !important;\n" +
    "        }\n" +
    "        pre.prettyprint {\n" +
    "            border: none !important;\n" +
    "            padding: 0 !important;\n" +
    "            margin: 0 !important;\n" +
    "        }\n" +
    "        .com { color: #999 !important; }\n" +
    "        .ignore-none { color: #999; font-weight: normal; }\n" +
    "\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header high\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">All files</span></h1>\n" +
    "    <h2>\n" +
    "        \n" +
    "        Statements: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Branches: <span class=\"metric\">93.75% <small>(15 / 16)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Functions: <span class=\"metric\">100% <small>(8 / 8)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Lines: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"></div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<div class=\"coverage-summary\">\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "   <th data-col=\"file\" data-fmt=\"html\" data-html=\"true\" class=\"file\">File</th>\n" +
    "   <th data-col=\"pic\" data-type=\"number\" data-fmt=\"html\" data-html=\"true\" class=\"pic\"></th>\n" +
    "   <th data-col=\"statements\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Statements</th>\n" +
    "   <th data-col=\"statements_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"branches\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Branches</th>\n" +
    "   <th data-col=\"branches_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"functions\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Functions</th>\n" +
    "   <th data-col=\"functions_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"lines\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Lines</th>\n" +
    "   <th data-col=\"lines_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody><tr>\n" +
    "	<td class=\"file high\" data-value=\"logdriver/\"><a href=\"logdriver/index.html\">logdriver/</a></td>\n" +
    "	<td data-value=\"97.22\" class=\"pic high\"><span class=\"cover-fill\" style=\"width: 97px;\"></span><span class=\"cover-empty\" style=\"width:3px;\"></span></td>\n" +
    "	<td data-value=\"97.22\" class=\"pct high\">97.22%</td>\n" +
    "	<td data-value=\"36\" class=\"abs high\">(35&nbsp;/&nbsp;36)</td>\n" +
    "	<td data-value=\"93.75\" class=\"pct high\">93.75%</td>\n" +
    "	<td data-value=\"16\" class=\"abs high\">(15&nbsp;/&nbsp;16)</td>\n" +
    "	<td data-value=\"100\" class=\"pct high\">100%</td>\n" +
    "	<td data-value=\"8\" class=\"abs high\">(8&nbsp;/&nbsp;8)</td>\n" +
    "	<td data-value=\"97.22\" class=\"pct high\">97.22%</td>\n" +
    "	<td data-value=\"36\" class=\"abs high\">(35&nbsp;/&nbsp;36)</td>\n" +
    "	</tr>\n" +
    "\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Mar 29 2014 20:46:19 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"prettify.js\"></script>\n" +
    "\n" +
    "<script src=\"http://yui.yahooapis.com/3.6.0/build/yui/yui-min.js\"></script>\n" +
    "<script>\n" +
    "\n" +
    "    YUI().use('datatable', function (Y) {\n" +
    "\n" +
    "        var formatters = {\n" +
    "          pct: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              try {\n" +
    "                  return o.value.toFixed(2) + '%';\n" +
    "              } catch (ex) { return o.value + '%'; }\n" +
    "          },\n" +
    "          html: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.record.get(o.column.key + '_html');\n" +
    "          }\n" +
    "        },\n" +
    "          defaultFormatter = function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.value;\n" +
    "          };\n" +
    "\n" +
    "        function getColumns(theadNode) {\n" +
    "            var colNodes = theadNode.all('tr th'),\n" +
    "                cols = [],\n" +
    "                col;\n" +
    "            colNodes.each(function (colNode) {\n" +
    "                col = {\n" +
    "                    key: colNode.getAttribute('data-col'),\n" +
    "                    label: colNode.get('innerHTML') || ' ',\n" +
    "                    sortable: !colNode.getAttribute('data-nosort'),\n" +
    "                    className: colNode.getAttribute('class'),\n" +
    "                    type: colNode.getAttribute('data-type'),\n" +
    "                    allowHTML: colNode.getAttribute('data-html') === 'true' || colNode.getAttribute('data-fmt') === 'html'\n" +
    "                };\n" +
    "                col.formatter = formatters[colNode.getAttribute('data-fmt')] || defaultFormatter;\n" +
    "                cols.push(col);\n" +
    "            });\n" +
    "            return cols;\n" +
    "        }\n" +
    "\n" +
    "        function getRowData(trNode, cols) {\n" +
    "            var tdNodes = trNode.all('td'),\n" +
    "                    i,\n" +
    "                    row = { classes: {} },\n" +
    "                    node,\n" +
    "                    name;\n" +
    "            for (i = 0; i < cols.length; i += 1) {\n" +
    "                name = cols[i].key;\n" +
    "                node = tdNodes.item(i);\n" +
    "                row[name] = node.getAttribute('data-value') || node.get('innerHTML');\n" +
    "                row[name + '_html'] = node.get('innerHTML');\n" +
    "                row.classes[name] = node.getAttribute('class');\n" +
    "                //Y.log('Name: ' + name + '; Value: ' + row[name]);\n" +
    "                if (cols[i].type === 'number') { row[name] = row[name] * 1; }\n" +
    "            }\n" +
    "            //Y.log(row);\n" +
    "            return row;\n" +
    "        }\n" +
    "\n" +
    "        function getData(tbodyNode, cols) {\n" +
    "            var data = [];\n" +
    "            tbodyNode.all('tr').each(function (trNode) {\n" +
    "                data.push(getRowData(trNode, cols));\n" +
    "            });\n" +
    "            return data;\n" +
    "        }\n" +
    "\n" +
    "        function replaceTable(node) {\n" +
    "            if (!node) { return; }\n" +
    "            var cols = getColumns(node.one('thead')),\n" +
    "                data = getData(node.one('tbody'), cols),\n" +
    "                table,\n" +
    "                parent = node.get('parentNode');\n" +
    "\n" +
    "            table = new Y.DataTable({\n" +
    "                columns: cols,\n" +
    "                data: data,\n" +
    "                sortBy: 'file'\n" +
    "            });\n" +
    "            parent.set('innerHTML', '');\n" +
    "            table.render(parent);\n" +
    "        }\n" +
    "\n" +
    "        Y.on('domready', function () {\n" +
    "            replaceTable(Y.one('div.coverage-summary table'));\n" +
    "            if (typeof prettyPrint === 'function') {\n" +
    "                prettyPrint();\n" +
    "            }\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/coveralls/node_modules/log-driver/coverage/lcov-report/logdriver/index.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for logdriver/</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"../prettify.css\">\n" +
    "\n" +
    "    <style>\n" +
    "        body, html {\n" +
    "            margin:0; padding: 0;\n" +
    "        }\n" +
    "        body {\n" +
    "            font-family: Helvetica Neue, Helvetica,Arial;\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        div.header, div.footer {\n" +
    "            background: #eee;\n" +
    "            padding: 1em;\n" +
    "        }\n" +
    "        div.header {\n" +
    "            z-index: 100;\n" +
    "            position: fixed;\n" +
    "            top: 0;\n" +
    "            border-bottom: 1px solid #666;\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "        div.footer {\n" +
    "            border-top: 1px solid #666;\n" +
    "        }\n" +
    "        div.body {\n" +
    "            margin-top: 10em;\n" +
    "        }\n" +
    "        div.meta {\n" +
    "            font-size: 90%;\n" +
    "            text-align: center;\n" +
    "        }\n" +
    "        h1, h2, h3 {\n" +
    "            font-weight: normal;\n" +
    "        }\n" +
    "        h1 {\n" +
    "            font-size: 12pt;\n" +
    "        }\n" +
    "        h2 {\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        pre {\n" +
    "            font-family: Consolas, Menlo, Monaco, monospace;\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            line-height: 14px;\n" +
    "            font-size: 14px;\n" +
    "            -moz-tab-size: 2;\n" +
    "            -o-tab-size:  2;\n" +
    "            tab-size: 2;\n" +
    "        }\n" +
    "\n" +
    "        div.path { font-size: 110%; }\n" +
    "        div.path a:link, div.path a:visited { color: #000; }\n" +
    "        table.coverage { border-collapse: collapse; margin:0; padding: 0 }\n" +
    "\n" +
    "        table.coverage td {\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            color: #111;\n" +
    "            vertical-align: top;\n" +
    "        }\n" +
    "        table.coverage td.line-count {\n" +
    "            width: 50px;\n" +
    "            text-align: right;\n" +
    "            padding-right: 5px;\n" +
    "        }\n" +
    "        table.coverage td.line-coverage {\n" +
    "            color: #777 !important;\n" +
    "            text-align: right;\n" +
    "            border-left: 1px solid #666;\n" +
    "            border-right: 1px solid #666;\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td.text {\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td span.cline-any {\n" +
    "            display: inline-block;\n" +
    "            padding: 0 5px;\n" +
    "            width: 40px;\n" +
    "        }\n" +
    "        table.coverage td span.cline-neutral {\n" +
    "            background: #eee;\n" +
    "        }\n" +
    "        table.coverage td span.cline-yes {\n" +
    "            background: #b5d592;\n" +
    "            color: #999;\n" +
    "        }\n" +
    "        table.coverage td span.cline-no {\n" +
    "            background: #fc8c84;\n" +
    "        }\n" +
    "\n" +
    "        .cstat-yes { color: #111; }\n" +
    "        .cstat-no { background: #fc8c84; color: #111; }\n" +
    "        .fstat-no { background: #ffc520; color: #111 !important; }\n" +
    "        .cbranch-no { background:  yellow !important; color: #111; }\n" +
    "\n" +
    "        .cstat-skip { background: #ddd; color: #111; }\n" +
    "        .fstat-skip { background: #ddd; color: #111 !important; }\n" +
    "        .cbranch-skip { background: #ddd !important; color: #111; }\n" +
    "\n" +
    "        .missing-if-branch {\n" +
    "            display: inline-block;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: black;\n" +
    "            color: yellow;\n" +
    "        }\n" +
    "\n" +
    "        .skip-if-branch {\n" +
    "            display: none;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: #ccc;\n" +
    "            color: white;\n" +
    "        }\n" +
    "\n" +
    "        .missing-if-branch .typ, .skip-if-branch .typ {\n" +
    "            color: inherit !important;\n" +
    "        }\n" +
    "\n" +
    "        .entity, .metric { font-weight: bold; }\n" +
    "        .metric { display: inline-block; border: 1px solid #333; padding: 0.3em; background: white; }\n" +
    "        .metric small { font-size: 80%; font-weight: normal; color: #666; }\n" +
    "\n" +
    "        div.coverage-summary table { border-collapse: collapse; margin: 3em; font-size: 110%; }\n" +
    "        div.coverage-summary td, div.coverage-summary table  th { margin: 0; padding: 0.25em 1em; border-top: 1px solid #666; border-bottom: 1px solid #666; }\n" +
    "        div.coverage-summary th { text-align: left; border: 1px solid #666; background: #eee; font-weight: normal; }\n" +
    "        div.coverage-summary th.file { border-right: none !important; }\n" +
    "        div.coverage-summary th.pic { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary th.pct { border-right: none !important; }\n" +
    "        div.coverage-summary th.abs { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary td.pct { text-align: right; border-left: 1px solid #666; }\n" +
    "        div.coverage-summary td.abs { text-align: right; font-size: 90%; color: #444; border-right: 1px solid #666; }\n" +
    "        div.coverage-summary td.file { text-align: right; border-left: 1px solid #666; white-space: nowrap;  }\n" +
    "        div.coverage-summary td.pic { min-width: 120px !important;  }\n" +
    "        div.coverage-summary a:link { text-decoration: none; color: #000; }\n" +
    "        div.coverage-summary a:visited { text-decoration: none; color: #333; }\n" +
    "        div.coverage-summary a:hover { text-decoration: underline; }\n" +
    "        div.coverage-summary tfoot td { border-top: 1px solid #666; }\n" +
    "\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator, div.coverage-summary .dummy-sort-indicator {\n" +
    "            height: 10px;\n" +
    "            width: 7px;\n" +
    "            display: inline-block;\n" +
    "            margin-left: 0.5em;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator {\n" +
    "            background: url(\"http://yui.yahooapis.com/3.6.0/build/datatable-sort/assets/skins/sam/sort-arrow-sprite.png\") no-repeat scroll 0 0 transparent;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -20px;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted-desc .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -10px;\n" +
    "        }\n" +
    "\n" +
    "        .high { background: #b5d592 !important; }\n" +
    "        .medium { background: #ffe87c !important; }\n" +
    "        .low { background: #fc8c84 !important; }\n" +
    "\n" +
    "        span.cover-fill, span.cover-empty {\n" +
    "            display:inline-block;\n" +
    "            border:1px solid #444;\n" +
    "            background: white;\n" +
    "            height: 12px;\n" +
    "        }\n" +
    "        span.cover-fill {\n" +
    "            background: #ccc;\n" +
    "            border-right: 1px solid #444;\n" +
    "        }\n" +
    "        span.cover-empty {\n" +
    "            background: white;\n" +
    "            border-left: none;\n" +
    "        }\n" +
    "        span.cover-full {\n" +
    "            border-right: none !important;\n" +
    "        }\n" +
    "        pre.prettyprint {\n" +
    "            border: none !important;\n" +
    "            padding: 0 !important;\n" +
    "            margin: 0 !important;\n" +
    "        }\n" +
    "        .com { color: #999 !important; }\n" +
    "        .ignore-none { color: #999; font-weight: normal; }\n" +
    "\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header high\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">logdriver/</span></h1>\n" +
    "    <h2>\n" +
    "        \n" +
    "        Statements: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Branches: <span class=\"metric\">93.75% <small>(15 / 16)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Functions: <span class=\"metric\">100% <small>(8 / 8)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Lines: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"><a href=\"../index.html\">All files</a> &#187; logdriver/</div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<div class=\"coverage-summary\">\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "   <th data-col=\"file\" data-fmt=\"html\" data-html=\"true\" class=\"file\">File</th>\n" +
    "   <th data-col=\"pic\" data-type=\"number\" data-fmt=\"html\" data-html=\"true\" class=\"pic\"></th>\n" +
    "   <th data-col=\"statements\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Statements</th>\n" +
    "   <th data-col=\"statements_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"branches\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Branches</th>\n" +
    "   <th data-col=\"branches_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"functions\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Functions</th>\n" +
    "   <th data-col=\"functions_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"lines\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Lines</th>\n" +
    "   <th data-col=\"lines_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody><tr>\n" +
    "	<td class=\"file high\" data-value=\"index.js\"><a href=\"index.js.html\">index.js</a></td>\n" +
    "	<td data-value=\"97.22\" class=\"pic high\"><span class=\"cover-fill\" style=\"width: 97px;\"></span><span class=\"cover-empty\" style=\"width:3px;\"></span></td>\n" +
    "	<td data-value=\"97.22\" class=\"pct high\">97.22%</td>\n" +
    "	<td data-value=\"36\" class=\"abs high\">(35&nbsp;/&nbsp;36)</td>\n" +
    "	<td data-value=\"93.75\" class=\"pct high\">93.75%</td>\n" +
    "	<td data-value=\"16\" class=\"abs high\">(15&nbsp;/&nbsp;16)</td>\n" +
    "	<td data-value=\"100\" class=\"pct high\">100%</td>\n" +
    "	<td data-value=\"8\" class=\"abs high\">(8&nbsp;/&nbsp;8)</td>\n" +
    "	<td data-value=\"97.22\" class=\"pct high\">97.22%</td>\n" +
    "	<td data-value=\"36\" class=\"abs high\">(35&nbsp;/&nbsp;36)</td>\n" +
    "	</tr>\n" +
    "\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Mar 29 2014 20:46:19 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"../prettify.js\"></script>\n" +
    "\n" +
    "<script src=\"http://yui.yahooapis.com/3.6.0/build/yui/yui-min.js\"></script>\n" +
    "<script>\n" +
    "\n" +
    "    YUI().use('datatable', function (Y) {\n" +
    "\n" +
    "        var formatters = {\n" +
    "          pct: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              try {\n" +
    "                  return o.value.toFixed(2) + '%';\n" +
    "              } catch (ex) { return o.value + '%'; }\n" +
    "          },\n" +
    "          html: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.record.get(o.column.key + '_html');\n" +
    "          }\n" +
    "        },\n" +
    "          defaultFormatter = function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.value;\n" +
    "          };\n" +
    "\n" +
    "        function getColumns(theadNode) {\n" +
    "            var colNodes = theadNode.all('tr th'),\n" +
    "                cols = [],\n" +
    "                col;\n" +
    "            colNodes.each(function (colNode) {\n" +
    "                col = {\n" +
    "                    key: colNode.getAttribute('data-col'),\n" +
    "                    label: colNode.get('innerHTML') || ' ',\n" +
    "                    sortable: !colNode.getAttribute('data-nosort'),\n" +
    "                    className: colNode.getAttribute('class'),\n" +
    "                    type: colNode.getAttribute('data-type'),\n" +
    "                    allowHTML: colNode.getAttribute('data-html') === 'true' || colNode.getAttribute('data-fmt') === 'html'\n" +
    "                };\n" +
    "                col.formatter = formatters[colNode.getAttribute('data-fmt')] || defaultFormatter;\n" +
    "                cols.push(col);\n" +
    "            });\n" +
    "            return cols;\n" +
    "        }\n" +
    "\n" +
    "        function getRowData(trNode, cols) {\n" +
    "            var tdNodes = trNode.all('td'),\n" +
    "                    i,\n" +
    "                    row = { classes: {} },\n" +
    "                    node,\n" +
    "                    name;\n" +
    "            for (i = 0; i < cols.length; i += 1) {\n" +
    "                name = cols[i].key;\n" +
    "                node = tdNodes.item(i);\n" +
    "                row[name] = node.getAttribute('data-value') || node.get('innerHTML');\n" +
    "                row[name + '_html'] = node.get('innerHTML');\n" +
    "                row.classes[name] = node.getAttribute('class');\n" +
    "                //Y.log('Name: ' + name + '; Value: ' + row[name]);\n" +
    "                if (cols[i].type === 'number') { row[name] = row[name] * 1; }\n" +
    "            }\n" +
    "            //Y.log(row);\n" +
    "            return row;\n" +
    "        }\n" +
    "\n" +
    "        function getData(tbodyNode, cols) {\n" +
    "            var data = [];\n" +
    "            tbodyNode.all('tr').each(function (trNode) {\n" +
    "                data.push(getRowData(trNode, cols));\n" +
    "            });\n" +
    "            return data;\n" +
    "        }\n" +
    "\n" +
    "        function replaceTable(node) {\n" +
    "            if (!node) { return; }\n" +
    "            var cols = getColumns(node.one('thead')),\n" +
    "                data = getData(node.one('tbody'), cols),\n" +
    "                table,\n" +
    "                parent = node.get('parentNode');\n" +
    "\n" +
    "            table = new Y.DataTable({\n" +
    "                columns: cols,\n" +
    "                data: data,\n" +
    "                sortBy: 'file'\n" +
    "            });\n" +
    "            parent.set('innerHTML', '');\n" +
    "            table.render(parent);\n" +
    "        }\n" +
    "\n" +
    "        Y.on('domready', function () {\n" +
    "            replaceTable(Y.one('div.coverage-summary table'));\n" +
    "            if (typeof prettyPrint === 'function') {\n" +
    "                prettyPrint();\n" +
    "            }\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/coveralls/node_modules/log-driver/coverage/lcov-report/logdriver/index.js.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for logdriver/index.js</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "\n" +
    "    <link rel=\"stylesheet\" href=\"../prettify.css\">\n" +
    "\n" +
    "    <style>\n" +
    "        body, html {\n" +
    "            margin:0; padding: 0;\n" +
    "        }\n" +
    "        body {\n" +
    "            font-family: Helvetica Neue, Helvetica,Arial;\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        div.header, div.footer {\n" +
    "            background: #eee;\n" +
    "            padding: 1em;\n" +
    "        }\n" +
    "        div.header {\n" +
    "            z-index: 100;\n" +
    "            position: fixed;\n" +
    "            top: 0;\n" +
    "            border-bottom: 1px solid #666;\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "        div.footer {\n" +
    "            border-top: 1px solid #666;\n" +
    "        }\n" +
    "        div.body {\n" +
    "            margin-top: 10em;\n" +
    "        }\n" +
    "        div.meta {\n" +
    "            font-size: 90%;\n" +
    "            text-align: center;\n" +
    "        }\n" +
    "        h1, h2, h3 {\n" +
    "            font-weight: normal;\n" +
    "        }\n" +
    "        h1 {\n" +
    "            font-size: 12pt;\n" +
    "        }\n" +
    "        h2 {\n" +
    "            font-size: 10pt;\n" +
    "        }\n" +
    "        pre {\n" +
    "            font-family: Consolas, Menlo, Monaco, monospace;\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            line-height: 14px;\n" +
    "            font-size: 14px;\n" +
    "            -moz-tab-size: 2;\n" +
    "            -o-tab-size:  2;\n" +
    "            tab-size: 2;\n" +
    "        }\n" +
    "\n" +
    "        div.path { font-size: 110%; }\n" +
    "        div.path a:link, div.path a:visited { color: #000; }\n" +
    "        table.coverage { border-collapse: collapse; margin:0; padding: 0 }\n" +
    "\n" +
    "        table.coverage td {\n" +
    "            margin: 0;\n" +
    "            padding: 0;\n" +
    "            color: #111;\n" +
    "            vertical-align: top;\n" +
    "        }\n" +
    "        table.coverage td.line-count {\n" +
    "            width: 50px;\n" +
    "            text-align: right;\n" +
    "            padding-right: 5px;\n" +
    "        }\n" +
    "        table.coverage td.line-coverage {\n" +
    "            color: #777 !important;\n" +
    "            text-align: right;\n" +
    "            border-left: 1px solid #666;\n" +
    "            border-right: 1px solid #666;\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td.text {\n" +
    "        }\n" +
    "\n" +
    "        table.coverage td span.cline-any {\n" +
    "            display: inline-block;\n" +
    "            padding: 0 5px;\n" +
    "            width: 40px;\n" +
    "        }\n" +
    "        table.coverage td span.cline-neutral {\n" +
    "            background: #eee;\n" +
    "        }\n" +
    "        table.coverage td span.cline-yes {\n" +
    "            background: #b5d592;\n" +
    "            color: #999;\n" +
    "        }\n" +
    "        table.coverage td span.cline-no {\n" +
    "            background: #fc8c84;\n" +
    "        }\n" +
    "\n" +
    "        .cstat-yes { color: #111; }\n" +
    "        .cstat-no { background: #fc8c84; color: #111; }\n" +
    "        .fstat-no { background: #ffc520; color: #111 !important; }\n" +
    "        .cbranch-no { background:  yellow !important; color: #111; }\n" +
    "\n" +
    "        .cstat-skip { background: #ddd; color: #111; }\n" +
    "        .fstat-skip { background: #ddd; color: #111 !important; }\n" +
    "        .cbranch-skip { background: #ddd !important; color: #111; }\n" +
    "\n" +
    "        .missing-if-branch {\n" +
    "            display: inline-block;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: black;\n" +
    "            color: yellow;\n" +
    "        }\n" +
    "\n" +
    "        .skip-if-branch {\n" +
    "            display: none;\n" +
    "            margin-right: 10px;\n" +
    "            position: relative;\n" +
    "            padding: 0 4px;\n" +
    "            background: #ccc;\n" +
    "            color: white;\n" +
    "        }\n" +
    "\n" +
    "        .missing-if-branch .typ, .skip-if-branch .typ {\n" +
    "            color: inherit !important;\n" +
    "        }\n" +
    "\n" +
    "        .entity, .metric { font-weight: bold; }\n" +
    "        .metric { display: inline-block; border: 1px solid #333; padding: 0.3em; background: white; }\n" +
    "        .metric small { font-size: 80%; font-weight: normal; color: #666; }\n" +
    "\n" +
    "        div.coverage-summary table { border-collapse: collapse; margin: 3em; font-size: 110%; }\n" +
    "        div.coverage-summary td, div.coverage-summary table  th { margin: 0; padding: 0.25em 1em; border-top: 1px solid #666; border-bottom: 1px solid #666; }\n" +
    "        div.coverage-summary th { text-align: left; border: 1px solid #666; background: #eee; font-weight: normal; }\n" +
    "        div.coverage-summary th.file { border-right: none !important; }\n" +
    "        div.coverage-summary th.pic { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary th.pct { border-right: none !important; }\n" +
    "        div.coverage-summary th.abs { border-left: none !important; text-align: right; }\n" +
    "        div.coverage-summary td.pct { text-align: right; border-left: 1px solid #666; }\n" +
    "        div.coverage-summary td.abs { text-align: right; font-size: 90%; color: #444; border-right: 1px solid #666; }\n" +
    "        div.coverage-summary td.file { text-align: right; border-left: 1px solid #666; white-space: nowrap;  }\n" +
    "        div.coverage-summary td.pic { min-width: 120px !important;  }\n" +
    "        div.coverage-summary a:link { text-decoration: none; color: #000; }\n" +
    "        div.coverage-summary a:visited { text-decoration: none; color: #333; }\n" +
    "        div.coverage-summary a:hover { text-decoration: underline; }\n" +
    "        div.coverage-summary tfoot td { border-top: 1px solid #666; }\n" +
    "\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator, div.coverage-summary .dummy-sort-indicator {\n" +
    "            height: 10px;\n" +
    "            width: 7px;\n" +
    "            display: inline-block;\n" +
    "            margin-left: 0.5em;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sort-indicator {\n" +
    "            background: url(\"http://yui.yahooapis.com/3.6.0/build/datatable-sort/assets/skins/sam/sort-arrow-sprite.png\") no-repeat scroll 0 0 transparent;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -20px;\n" +
    "        }\n" +
    "        div.coverage-summary .yui3-datatable-sorted-desc .yui3-datatable-sort-indicator {\n" +
    "            background-position: 0 -10px;\n" +
    "        }\n" +
    "\n" +
    "        .high { background: #b5d592 !important; }\n" +
    "        .medium { background: #ffe87c !important; }\n" +
    "        .low { background: #fc8c84 !important; }\n" +
    "\n" +
    "        span.cover-fill, span.cover-empty {\n" +
    "            display:inline-block;\n" +
    "            border:1px solid #444;\n" +
    "            background: white;\n" +
    "            height: 12px;\n" +
    "        }\n" +
    "        span.cover-fill {\n" +
    "            background: #ccc;\n" +
    "            border-right: 1px solid #444;\n" +
    "        }\n" +
    "        span.cover-empty {\n" +
    "            background: white;\n" +
    "            border-left: none;\n" +
    "        }\n" +
    "        span.cover-full {\n" +
    "            border-right: none !important;\n" +
    "        }\n" +
    "        pre.prettyprint {\n" +
    "            border: none !important;\n" +
    "            padding: 0 !important;\n" +
    "            margin: 0 !important;\n" +
    "        }\n" +
    "        .com { color: #999 !important; }\n" +
    "        .ignore-none { color: #999; font-weight: normal; }\n" +
    "\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header high\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">logdriver/index.js</span></h1>\n" +
    "    <h2>\n" +
    "        \n" +
    "        Statements: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Branches: <span class=\"metric\">93.75% <small>(15 / 16)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Functions: <span class=\"metric\">100% <small>(8 / 8)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        \n" +
    "        Lines: <span class=\"metric\">97.22% <small>(35 / 36)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        \n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"><a href=\"../index.html\">All files</a> &#187; <a href=\"index.html\">logdriver/</a> &#187; index.js</div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<pre><table class=\"coverage\">\n" +
    "<tr><td class=\"line-count\">1\n" +
    "2\n" +
    "3\n" +
    "4\n" +
    "5\n" +
    "6\n" +
    "7\n" +
    "8\n" +
    "9\n" +
    "10\n" +
    "11\n" +
    "12\n" +
    "13\n" +
    "14\n" +
    "15\n" +
    "16\n" +
    "17\n" +
    "18\n" +
    "19\n" +
    "20\n" +
    "21\n" +
    "22\n" +
    "23\n" +
    "24\n" +
    "25\n" +
    "26\n" +
    "27\n" +
    "28\n" +
    "29\n" +
    "30\n" +
    "31\n" +
    "32\n" +
    "33\n" +
    "34\n" +
    "35\n" +
    "36\n" +
    "37\n" +
    "38\n" +
    "39\n" +
    "40\n" +
    "41\n" +
    "42\n" +
    "43\n" +
    "44\n" +
    "45\n" +
    "46\n" +
    "47\n" +
    "48\n" +
    "49\n" +
    "50\n" +
    "51\n" +
    "52\n" +
    "53\n" +
    "54\n" +
    "55\n" +
    "56\n" +
    "57\n" +
    "58\n" +
    "59\n" +
    "60\n" +
    "61</td><td class=\"line-coverage\"><span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">4</span>\n" +
    "<span class=\"cline-any cline-yes\">4</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">23</span>\n" +
    "<span class=\"cline-any cline-yes\">16</span>\n" +
    "<span class=\"cline-any cline-yes\">4</span>\n" +
    "<span class=\"cline-any cline-yes\">4</span>\n" +
    "<span class=\"cline-any cline-yes\">4</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">7</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-yes\">23</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">18</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-yes\">5</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">1</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span></td><td class=\"text\"><pre class=\"prettyprint lang-js\">var util = require('util');\n" +
    "&nbsp;\n" +
    "LogDriver = function(options){\n" +
    "  options = options || {};\n" +
    "  var logger = this;\n" +
    "  if (options.format){\n" +
    "    this.format = options.format;\n" +
    "  }\n" +
    "  this.levels = options.levels || ['error', 'warn', 'info', 'debug', 'trace'];\n" +
    "  if (options.level === false){\n" +
    "    this.level = false;  // don't log anything\n" +
    "  } else {\n" +
    "    this.level = options.level || this.levels[this.levels.length - 1];\n" +
    "    <span class=\"missing-if-branch\" title=\"if path not taken\" >I</span>if (this.levels.indexOf(this.level) === -1){\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >      throw new Error(\"Log level '\" +</span>\n" +
    "                      this.level +\n" +
    "                      \"' does not exist in level list '\" + JSON.stringify() + \"'\");\n" +
    "    }\n" +
    "  }\n" +
    "  this.levels.forEach(function(level){\n" +
    "    if (logLevelShouldOutput(level, logger.level, logger.levels)){\n" +
    "      logger[level] = function(){\n" +
    "        var args = Array.prototype.slice.call(arguments);\n" +
    "        args.unshift(level);  // log level is added as the first parameter\n" +
    "        console.log(logger.format.apply(logger, args));\n" +
    "      };\n" +
    "    } else {\n" +
    "      logger[level] = function(){/* no-op, because this log level is ignored */};\n" +
    "    }\n" +
    "  });\n" +
    "};\n" +
    "&nbsp;\n" +
    "var logLevelShouldOutput = function(logLevel, configuredLevel, levels){\n" +
    "  if (configuredLevel === false){\n" +
    "    return false;\n" +
    "  }\n" +
    "  return (levels.indexOf(logLevel) &lt;= levels.indexOf(configuredLevel));\n" +
    "};\n" +
    "&nbsp;\n" +
    "LogDriver.prototype.format = function(){\n" +
    "  var args = Array.prototype.slice.call(arguments, [1]); // change arguments to an array, but\n" +
    "                                                         // drop the first item (log level)\n" +
    "  var out = \"[\" + arguments[0] + \"] \" + JSON.stringify(new Date()) + \" \";\n" +
    "  args.forEach(function(arg){\n" +
    "    out += \" \" + util.inspect(arg);\n" +
    "  });\n" +
    "  return out;\n" +
    "};\n" +
    "&nbsp;\n" +
    "var defaultLogger = null;\n" +
    "&nbsp;\n" +
    "factory = function(options){\n" +
    "  defaultLogger = new LogDriver(options);\n" +
    "  factory.logger = defaultLogger;\n" +
    "  return defaultLogger;\n" +
    "};\n" +
    "&nbsp;\n" +
    "factory();\n" +
    "&nbsp;\n" +
    "module.exports = factory;\n" +
    "&nbsp;</pre></td></tr>\n" +
    "</table></pre>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Mar 29 2014 20:46:19 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"../prettify.js\"></script>\n" +
    "\n" +
    "<script src=\"http://yui.yahooapis.com/3.6.0/build/yui/yui-min.js\"></script>\n" +
    "<script>\n" +
    "\n" +
    "    YUI().use('datatable', function (Y) {\n" +
    "\n" +
    "        var formatters = {\n" +
    "          pct: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              try {\n" +
    "                  return o.value.toFixed(2) + '%';\n" +
    "              } catch (ex) { return o.value + '%'; }\n" +
    "          },\n" +
    "          html: function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.record.get(o.column.key + '_html');\n" +
    "          }\n" +
    "        },\n" +
    "          defaultFormatter = function (o) {\n" +
    "              o.className += o.record.get('classes')[o.column.key];\n" +
    "              return o.value;\n" +
    "          };\n" +
    "\n" +
    "        function getColumns(theadNode) {\n" +
    "            var colNodes = theadNode.all('tr th'),\n" +
    "                cols = [],\n" +
    "                col;\n" +
    "            colNodes.each(function (colNode) {\n" +
    "                col = {\n" +
    "                    key: colNode.getAttribute('data-col'),\n" +
    "                    label: colNode.get('innerHTML') || ' ',\n" +
    "                    sortable: !colNode.getAttribute('data-nosort'),\n" +
    "                    className: colNode.getAttribute('class'),\n" +
    "                    type: colNode.getAttribute('data-type'),\n" +
    "                    allowHTML: colNode.getAttribute('data-html') === 'true' || colNode.getAttribute('data-fmt') === 'html'\n" +
    "                };\n" +
    "                col.formatter = formatters[colNode.getAttribute('data-fmt')] || defaultFormatter;\n" +
    "                cols.push(col);\n" +
    "            });\n" +
    "            return cols;\n" +
    "        }\n" +
    "\n" +
    "        function getRowData(trNode, cols) {\n" +
    "            var tdNodes = trNode.all('td'),\n" +
    "                    i,\n" +
    "                    row = { classes: {} },\n" +
    "                    node,\n" +
    "                    name;\n" +
    "            for (i = 0; i < cols.length; i += 1) {\n" +
    "                name = cols[i].key;\n" +
    "                node = tdNodes.item(i);\n" +
    "                row[name] = node.getAttribute('data-value') || node.get('innerHTML');\n" +
    "                row[name + '_html'] = node.get('innerHTML');\n" +
    "                row.classes[name] = node.getAttribute('class');\n" +
    "                //Y.log('Name: ' + name + '; Value: ' + row[name]);\n" +
    "                if (cols[i].type === 'number') { row[name] = row[name] * 1; }\n" +
    "            }\n" +
    "            //Y.log(row);\n" +
    "            return row;\n" +
    "        }\n" +
    "\n" +
    "        function getData(tbodyNode, cols) {\n" +
    "            var data = [];\n" +
    "            tbodyNode.all('tr').each(function (trNode) {\n" +
    "                data.push(getRowData(trNode, cols));\n" +
    "            });\n" +
    "            return data;\n" +
    "        }\n" +
    "\n" +
    "        function replaceTable(node) {\n" +
    "            if (!node) { return; }\n" +
    "            var cols = getColumns(node.one('thead')),\n" +
    "                data = getData(node.one('tbody'), cols),\n" +
    "                table,\n" +
    "                parent = node.get('parentNode');\n" +
    "\n" +
    "            table = new Y.DataTable({\n" +
    "                columns: cols,\n" +
    "                data: data,\n" +
    "                sortBy: 'file'\n" +
    "            });\n" +
    "            parent.set('innerHTML', '');\n" +
    "            table.render(parent);\n" +
    "        }\n" +
    "\n" +
    "        Y.on('domready', function () {\n" +
    "            replaceTable(Y.one('div.coverage-summary table'));\n" +
    "            if (typeof prettyPrint === 'function') {\n" +
    "                prettyPrint();\n" +
    "            }\n" +
    "        });\n" +
    "    });\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/coveralls/node_modules/request/node_modules/node-uuid/test/test.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <style>\n" +
    "      div {\n" +
    "        font-family: monospace;\n" +
    "        font-size: 8pt;\n" +
    "      }\n" +
    "      div.log {color: #444;}\n" +
    "      div.warn {color: #550;}\n" +
    "      div.error {color: #800; font-weight: bold;}\n" +
    "    </style>\n" +
    "    <script src=\"../uuid.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script src=\"./test.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/foreground-child/coverage/lcov-report/__root__/index.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for __root__/</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <link rel=\"stylesheet\" href=\"../prettify.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../base.css\">\n" +
    "    <style type='text/css'>\n" +
    "        div.coverage-summary .sorter {\n" +
    "            background-image: url(../sort-arrow-sprite.png);\n" +
    "        }\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header medium\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">__root__/</span></h1>\n" +
    "    <h2>\n" +
    "        Statements: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Branches: <span class=\"metric\">64.29% <small>(9 / 14)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Functions: <span class=\"metric\">83.33% <small>(5 / 6)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Lines: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"><a href=\"../index.html\">All files</a> &#187; __root__/</div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<div class=\"coverage-summary\">\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "   <th data-col=\"file\" data-fmt=\"html\" data-html=\"true\" class=\"file\">File</th>\n" +
    "   <th data-col=\"pic\" data-type=\"number\" data-fmt=\"html\" data-html=\"true\" class=\"pic\"></th>\n" +
    "   <th data-col=\"statements\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Statements</th>\n" +
    "   <th data-col=\"statements_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"branches\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Branches</th>\n" +
    "   <th data-col=\"branches_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"functions\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Functions</th>\n" +
    "   <th data-col=\"functions_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"lines\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Lines</th>\n" +
    "   <th data-col=\"lines_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody><tr>\n" +
    "	<td class=\"file medium\" data-value=\"index.js\"><a href=\"index.js.html\">index.js</a></td>\n" +
    "	<td data-value=\"71.43\" class=\"pic medium\"><span class=\"cover-fill\" style=\"width: 71px;\"></span><span class=\"cover-empty\" style=\"width:29px;\"></span></td>\n" +
    "	<td data-value=\"71.43\" class=\"pct medium\">71.43%</td>\n" +
    "	<td data-value=\"28\" class=\"abs medium\">(20&nbsp;/&nbsp;28)</td>\n" +
    "	<td data-value=\"64.29\" class=\"pct medium\">64.29%</td>\n" +
    "	<td data-value=\"14\" class=\"abs medium\">(9&nbsp;/&nbsp;14)</td>\n" +
    "	<td data-value=\"83.33\" class=\"pct high\">83.33%</td>\n" +
    "	<td data-value=\"6\" class=\"abs high\">(5&nbsp;/&nbsp;6)</td>\n" +
    "	<td data-value=\"71.43\" class=\"pct medium\">71.43%</td>\n" +
    "	<td data-value=\"28\" class=\"abs medium\">(20&nbsp;/&nbsp;28)</td>\n" +
    "	</tr>\n" +
    "\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Jun 20 2015 18:55:58 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "<script src=\"../prettify.js\"></script>\n" +
    "<script>\n" +
    "window.onload = function () {\n" +
    "        if (typeof prettyPrint === 'function') {\n" +
    "            prettyPrint();\n" +
    "        }\n" +
    "};\n" +
    "</script>\n" +
    "<script src=\"../sorter.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/foreground-child/coverage/lcov-report/__root__/index.js.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for index.js</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <link rel=\"stylesheet\" href=\"../prettify.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"../base.css\">\n" +
    "    <style type='text/css'>\n" +
    "        div.coverage-summary .sorter {\n" +
    "            background-image: url(../sort-arrow-sprite.png);\n" +
    "        }\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header medium\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">index.js</span></h1>\n" +
    "    <h2>\n" +
    "        Statements: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Branches: <span class=\"metric\">64.29% <small>(9 / 14)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Functions: <span class=\"metric\">83.33% <small>(5 / 6)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Lines: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"><a href=\"../index.html\">All files</a> &#187; <a href=\"index.html\">__root__/</a> &#187; index.js</div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<pre><table class=\"coverage\">\n" +
    "<tr><td class=\"line-count\">1\n" +
    "2\n" +
    "3\n" +
    "4\n" +
    "5\n" +
    "6\n" +
    "7\n" +
    "8\n" +
    "9\n" +
    "10\n" +
    "11\n" +
    "12\n" +
    "13\n" +
    "14\n" +
    "15\n" +
    "16\n" +
    "17\n" +
    "18\n" +
    "19\n" +
    "20\n" +
    "21\n" +
    "22\n" +
    "23\n" +
    "24\n" +
    "25\n" +
    "26\n" +
    "27\n" +
    "28\n" +
    "29\n" +
    "30\n" +
    "31\n" +
    "32\n" +
    "33\n" +
    "34\n" +
    "35\n" +
    "36\n" +
    "37\n" +
    "38\n" +
    "39\n" +
    "40\n" +
    "41\n" +
    "42\n" +
    "43\n" +
    "44\n" +
    "45\n" +
    "46\n" +
    "47\n" +
    "48</td><td class=\"line-coverage\"><span class=\"cline-any cline-yes\">20</span>\n" +
    "<span class=\"cline-any cline-yes\">20</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">20</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-no\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-yes\">6</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-yes\">9</span>\n" +
    "<span class=\"cline-any cline-yes\">9</span>\n" +
    "<span class=\"cline-any cline-yes\">9</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-yes\">3</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">6</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-yes\">11</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span>\n" +
    "<span class=\"cline-any cline-neutral\">&nbsp;</span></td><td class=\"text\"><pre class=\"prettyprint lang-js\">var signalExit = require('signal-exit')\n" +
    "var spawn = require('child_process').spawn\n" +
    "&nbsp;\n" +
    "module.exports = function (program, args, cb) {\n" +
    "&nbsp;\n" +
    "  <span class=\"missing-if-branch\" title=\"if path not taken\" >I</span>if (Array.isArray(program)) {\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    cb = args</span>\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    args = program.slice(1)</span>\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    program = program[0]</span>\n" +
    "  } else <span class=\"missing-if-branch\" title=\"if path not taken\" >I</span>if (!Array.isArray(args)) {\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    args = [].slice.call(arguments, 1)</span>\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    if (typeof args[args.length - 1] === 'function')</span>\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >      cb = args.pop()</span>\n" +
    "  } else <span class=\"missing-if-branch\" title=\"if path not taken\" >I</span>if (typeof args === 'function') {\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    cb = args</span>\n" +
    "<span class=\"cstat-no\" title=\"statement not covered\" >    args = []</span>\n" +
    "  }\n" +
    "&nbsp;\n" +
    "  cb = cb || function (done) {\n" +
    "    return done()\n" +
    "  }\n" +
    "&nbsp;\n" +
    "  var child = spawn(program, args, { stdio: 'inherit' })\n" +
    "&nbsp;\n" +
    "  var childExited = false\n" +
    "  signalExit(function (code, signal) {\n" +
    "    child.kill(signal || 'SIGHUP')\n" +
    "  })\n" +
    "&nbsp;\n" +
    "  child.on('close', function (code, signal) {\n" +
    "    cb(function () {\n" +
    "      childExited = true\n" +
    "      if (signal) {\n" +
    "        // If there is nothing else keeping the event loop alive,\n" +
    "        // then there's a race between a graceful exit and getting\n" +
    "        // the signal to this process.  Put this timeout here to\n" +
    "        // make sure we're still alive to get the signal, and thus\n" +
    "        // exit with the intended signal code.\n" +
    "        setTimeout(<span class=\"fstat-no\" title=\"function not covered\" >function () {</span>}, 200)\n" +
    "        process.kill(process.pid, signal)\n" +
    "      } else\n" +
    "        process.exit(code)\n" +
    "    })\n" +
    "  })\n" +
    "&nbsp;\n" +
    "  return child\n" +
    "}\n" +
    "&nbsp;</pre></td></tr>\n" +
    "</table></pre>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Jun 20 2015 18:55:58 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "<script src=\"../prettify.js\"></script>\n" +
    "<script>\n" +
    "window.onload = function () {\n" +
    "        if (typeof prettyPrint === 'function') {\n" +
    "            prettyPrint();\n" +
    "        }\n" +
    "};\n" +
    "</script>\n" +
    "<script src=\"../sorter.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/foreground-child/coverage/lcov-report/index.html", 
    "<!doctype html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <title>Code coverage report for All files</title>\n" +
    "    <meta charset=\"utf-8\">\n" +
    "    <link rel=\"stylesheet\" href=\"prettify.css\">\n" +
    "    <link rel=\"stylesheet\" href=\"base.css\">\n" +
    "    <style type='text/css'>\n" +
    "        div.coverage-summary .sorter {\n" +
    "            background-image: url(sort-arrow-sprite.png);\n" +
    "        }\n" +
    "    </style>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"header medium\">\n" +
    "    <h1>Code coverage report for <span class=\"entity\">All files</span></h1>\n" +
    "    <h2>\n" +
    "        Statements: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Branches: <span class=\"metric\">64.29% <small>(9 / 14)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Functions: <span class=\"metric\">83.33% <small>(5 / 6)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Lines: <span class=\"metric\">71.43% <small>(20 / 28)</small></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "        Ignored: <span class=\"metric\"><span class=\"ignore-none\">none</span></span> &nbsp;&nbsp;&nbsp;&nbsp;\n" +
    "    </h2>\n" +
    "    <div class=\"path\"></div>\n" +
    "</div>\n" +
    "<div class=\"body\">\n" +
    "<div class=\"coverage-summary\">\n" +
    "<table>\n" +
    "<thead>\n" +
    "<tr>\n" +
    "   <th data-col=\"file\" data-fmt=\"html\" data-html=\"true\" class=\"file\">File</th>\n" +
    "   <th data-col=\"pic\" data-type=\"number\" data-fmt=\"html\" data-html=\"true\" class=\"pic\"></th>\n" +
    "   <th data-col=\"statements\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Statements</th>\n" +
    "   <th data-col=\"statements_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"branches\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Branches</th>\n" +
    "   <th data-col=\"branches_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"functions\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Functions</th>\n" +
    "   <th data-col=\"functions_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "   <th data-col=\"lines\" data-type=\"number\" data-fmt=\"pct\" class=\"pct\">Lines</th>\n" +
    "   <th data-col=\"lines_raw\" data-type=\"number\" data-fmt=\"html\" class=\"abs\"></th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody><tr>\n" +
    "	<td class=\"file medium\" data-value=\"__root__/\"><a href=\"__root__/index.html\">__root__/</a></td>\n" +
    "	<td data-value=\"71.43\" class=\"pic medium\"><span class=\"cover-fill\" style=\"width: 71px;\"></span><span class=\"cover-empty\" style=\"width:29px;\"></span></td>\n" +
    "	<td data-value=\"71.43\" class=\"pct medium\">71.43%</td>\n" +
    "	<td data-value=\"28\" class=\"abs medium\">(20&nbsp;/&nbsp;28)</td>\n" +
    "	<td data-value=\"64.29\" class=\"pct medium\">64.29%</td>\n" +
    "	<td data-value=\"14\" class=\"abs medium\">(9&nbsp;/&nbsp;14)</td>\n" +
    "	<td data-value=\"83.33\" class=\"pct high\">83.33%</td>\n" +
    "	<td data-value=\"6\" class=\"abs high\">(5&nbsp;/&nbsp;6)</td>\n" +
    "	<td data-value=\"71.43\" class=\"pct medium\">71.43%</td>\n" +
    "	<td data-value=\"28\" class=\"abs medium\">(20&nbsp;/&nbsp;28)</td>\n" +
    "	</tr>\n" +
    "\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"footer\">\n" +
    "    <div class=\"meta\">Generated by <a href=\"http://istanbul-js.org/\" target=\"_blank\">istanbul</a> at Sat Jun 20 2015 18:55:58 GMT-0700 (PDT)</div>\n" +
    "</div>\n" +
    "<script src=\"prettify.js\"></script>\n" +
    "<script>\n" +
    "window.onload = function () {\n" +
    "        if (typeof prettyPrint === 'function') {\n" +
    "            prettyPrint();\n" +
    "        }\n" +
    "};\n" +
    "</script>\n" +
    "<script src=\"sorter.js\"></script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/js-yaml/node_modules/argparse/node_modules/sprintf-js/demo/angular.html", 
    "<!doctype html>\n" +
    "<html ng-app=\"app\">\n" +
    "<head>\n" +
    "    <script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.3/angular.min.js\"></script>\n" +
    "    <script src=\"../src/sprintf.js\"></script>\n" +
    "    <script src=\"../src/angular-sprintf.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "    <pre>{{ \"%+010d\"|sprintf:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vsprintf:[-123] }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|fmt:-123 }}</pre>\n" +
    "    <pre>{{ \"%+010d\"|vfmt:[-123] }}</pre>\n" +
    "    <pre>{{ \"I've got %2$d apples and %1$d oranges.\"|fmt:4:2 }}</pre>\n" +
    "    <pre>{{ \"I've got %(apples)d apples and %(oranges)d oranges.\"|fmt:{apples: 2, oranges: 4} }}</pre>\n" +
    "\n" +
    "    <script>\n" +
    "        angular.module(\"app\", [\"sprintf\"])\n" +
    "    </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/tap-mocha-reporter/lib/reporters/templates/script.html", 
    "<script>\n" +
    "\n" +
    "headings = [];\n" +
    "\n" +
    "onload = function(){\n" +
    "  headings = document.querySelectorAll('h2');\n" +
    "};\n" +
    "\n" +
    "onscroll = function(e){\n" +
    "  var heading = find(window.scrollY);\n" +
    "  if (!heading) return;\n" +
    "  var links = document.querySelectorAll('#menu a')\n" +
    "    , link;\n" +
    "\n" +
    "  for (var i = 0, len = links.length; i < len; ++i) {\n" +
    "    link = links[i];\n" +
    "    link.className = link.getAttribute('href') == '#' + heading.id\n" +
    "      ? 'active'\n" +
    "      : '';\n" +
    "  }\n" +
    "};\n" +
    "\n" +
    "function find(y) {\n" +
    "  var i = headings.length\n" +
    "    , heading;\n" +
    "\n" +
    "  while (i--) {\n" +
    "    heading = headings[i];\n" +
    "    if (y >= heading.offsetTop) {\n" +
    "      return heading;\n" +
    "    }\n" +
    "  }\n" +
    "}\n" +
    "</script>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/node_modules/tap/node_modules/tap-mocha-reporter/lib/reporters/templates/style.html", 
    "<style>\n" +
    "\n" +
    "body {\n" +
    "  font: 14px/1.6 \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n" +
    "  margin: 0;\n" +
    "  color: #2C2C2C;\n" +
    "  border-top: 2px solid #ddd;\n" +
    "}\n" +
    "\n" +
    "#coverage {\n" +
    "  padding: 60px 400px 60px 60px;\n" +
    "}\n" +
    "\n" +
    "h1 a {\n" +
    "  color: inherit;\n" +
    "  font-weight: inherit;\n" +
    "}\n" +
    "\n" +
    "h1 a:hover {\n" +
    "  text-decoration: none;\n" +
    "}\n" +
    "\n" +
    ".onload h1 {\n" +
    "  opacity: 1;\n" +
    "}\n" +
    "\n" +
    "h2 {\n" +
    "  width: 80%;\n" +
    "  margin-top: 80px;\n" +
    "  margin-bottom: 0;\n" +
    "  font-weight: 100;\n" +
    "  letter-spacing: 1px;\n" +
    "  border-bottom: 1px solid #eee;\n" +
    "}\n" +
    "\n" +
    "a {\n" +
    "  color: #8A6343;\n" +
    "  font-weight: bold;\n" +
    "  text-decoration: none;\n" +
    "}\n" +
    "\n" +
    "a:hover {\n" +
    "  text-decoration: underline;\n" +
    "}\n" +
    "\n" +
    "ul {\n" +
    "  margin-top: 20px;\n" +
    "  padding: 0 15px;\n" +
    "  width: 100%;\n" +
    "}\n" +
    "\n" +
    "ul li {\n" +
    "  float: left;\n" +
    "  width: 40%;\n" +
    "  margin-top: 5px;\n" +
    "  margin-right: 60px;\n" +
    "  list-style: none;\n" +
    "  border-bottom: 1px solid #eee;\n" +
    "  padding: 5px 0;\n" +
    "  font-size: 12px;\n" +
    "}\n" +
    "\n" +
    "ul::after {\n" +
    "  content: '.';\n" +
    "  height: 0;\n" +
    "  display: block;\n" +
    "  visibility: hidden;\n" +
    "  clear: both;\n" +
    "}\n" +
    "\n" +
    "code {\n" +
    "  font: 12px monaco, monospace;\n" +
    "}\n" +
    "\n" +
    "pre {\n" +
    "  margin: 30px;\n" +
    "  padding: 30px;\n" +
    "  border: 1px solid #eee;\n" +
    "  border-bottom-color: #ddd;\n" +
    "  -webkit-border-radius: 2px;\n" +
    "  -moz-border-radius: 2px;\n" +
    "  border-radius: 2px;\n" +
    "  -webkit-box-shadow: inset 0 0 10px #eee;\n" +
    "  -moz-box-shadow: inset 0 0 10px #eee;\n" +
    "  box-shadow: inset 0 0 10px #eee;\n" +
    "  overflow-x: auto;\n" +
    "}\n" +
    "\n" +
    "img {\n" +
    "  margin: 30px;\n" +
    "  padding: 1px;\n" +
    "  -webkit-border-radius: 3px;\n" +
    "  -moz-border-radius: 3px;\n" +
    "  border-radius: 3px;\n" +
    "  -webkit-box-shadow: 0 3px 10px #dedede, 0 1px 5px #888;\n" +
    "  -moz-box-shadow: 0 3px 10px #dedede, 0 1px 5px #888;\n" +
    "  box-shadow: 0 3px 10px #dedede, 0 1px 5px #888;\n" +
    "  max-width: 100%;\n" +
    "}\n" +
    "\n" +
    "footer {\n" +
    "  background: #eee;\n" +
    "  width: 100%;\n" +
    "  padding: 50px 0;\n" +
    "  text-align: right;\n" +
    "  border-top: 1px solid #ddd;\n" +
    "}\n" +
    "\n" +
    "footer span {\n" +
    "  display: block;\n" +
    "  margin-right: 30px;\n" +
    "  color: #888;\n" +
    "  font-size: 12px;\n" +
    "}\n" +
    "\n" +
    "#menu {\n" +
    "  position: fixed;\n" +
    "  font-size: 12px;\n" +
    "  overflow-y: auto;\n" +
    "  top: 0;\n" +
    "  right: 0;\n" +
    "  margin: 0;\n" +
    "  height: 100%;\n" +
    "  padding: 15px 0;\n" +
    "  text-align: right;\n" +
    "  border-left: 1px solid #eee;\n" +
    "  max-width: 400px;\n" +
    "  overflow: auto;\n" +
    "  white-space: nowrap;\n" +
    "  \n" +
    "  -moz-box-shadow: 0 0 2px #888\n" +
    "     , inset 5px 0 20px rgba(0,0,0,.5)\n" +
    "     , inset 5px 0 3px rgba(0,0,0,.3);\n" +
    "  -webkit-box-shadow: 0 0 2px #888\n" +
    "     , inset 5px 0 20px rgba(0,0,0,.5)\n" +
    "     , inset 5px 0 3px rgba(0,0,0,.3);\n" +
    "  box-shadow: 0 0 2px #888\n" +
    "     , inset 5px 0 20px rgba(0,0,0,.5)\n" +
    "     , inset 5px 0 3px rgba(0,0,0,.3);\n" +
    "  -webkit-font-smoothing: antialiased;\n" +
    "  background: url(\"data:image/png;base64,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\");\n" +
    "}\n" +
    "\n" +
    "#menu::after {\n" +
    "  display: block;\n" +
    "  content: '';\n" +
    "  padding-top: 80px;\n" +
    "}\n" +
    "\n" +
    "#logo {\n" +
    "  position: fixed;\n" +
    "  bottom: 10px;\n" +
    "  right: 10px;\n" +
    "  background: rgba(255,255,255,.1);\n" +
    "  font-size: 11px;\n" +
    "  display: block;\n" +
    "  width: 20px;\n" +
    "  height: 20px;\n" +
    "  line-height: 20px;\n" +
    "  text-align: center;\n" +
    "  -webkit-border-radius: 20px;\n" +
    "  -moz-border-radius: 20px;\n" +
    "  border-radius: 20px;\n" +
    "  -webkit-box-shadow: 0 0 3px rgba(0,0,0,.2);\n" +
    "  -moz-box-shadow: 0 0 3px rgba(0,0,0,.2);\n" +
    "  box-shadow: 0 0 3px rgba(0,0,0,.2);\n" +
    "  color: inherit;\n" +
    "}\n" +
    "\n" +
    "#menu li a {\n" +
    "  display: block;\n" +
    "  color: white;\n" +
    "  padding: 0 35px 0 25px;\n" +
    "  -webkit-transition: background 300ms;\n" +
    "  -moz-transition: background 300ms;\n" +
    "}\n" +
    "\n" +
    "#menu li {\n" +
    "  position: relative;\n" +
    "  list-style: none;\n" +
    "}\n" +
    "\n" +
    "#menu a:hover,\n" +
    "#menu a.active {\n" +
    "  text-decoration: none;\n" +
    "  background: rgba(255,255,255,.1);\n" +
    "}\n" +
    "\n" +
    "#menu li:hover .cov {\n" +
    "  opacity: 1;\n" +
    "}\n" +
    "\n" +
    "#menu li .dirname {\n" +
    "  opacity: .60;\n" +
    "  padding-right: 2px;\n" +
    "}\n" +
    "\n" +
    "#menu li .basename {\n" +
    "  opacity: 1;\n" +
    "}\n" +
    "\n" +
    "#menu .cov {\n" +
    "  background: rgba(0,0,0,.4);\n" +
    "  position: absolute;\n" +
    "  top: 0;\n" +
    "  right: 8px;\n" +
    "  font-size: 9px;\n" +
    "  opacity: .6;\n" +
    "  text-align: left;\n" +
    "  width: 17px;\n" +
    "  -webkit-border-radius: 10px;\n" +
    "  -moz-border-radius: 10px;\n" +
    "  border-radius: 10px;\n" +
    "  padding: 2px 3px;\n" +
    "  text-align: center;\n" +
    "}\n" +
    "\n" +
    "#stats:nth-child(2n) {\n" +
    "  display: inline-block;\n" +
    "  margin-top: 15px;\n" +
    "  border: 1px solid #eee;\n" +
    "  padding: 10px;\n" +
    "  -webkit-box-shadow: inset 0 0 2px #eee;\n" +
    "  -moz-box-shadow: inset 0 0 2px #eee;\n" +
    "  box-shadow: inset 0 0 2px #eee;\n" +
    "  -webkit-border-radius: 5px;\n" +
    "  -moz-border-radius: 5px;\n" +
    "  border-radius: 5px;\n" +
    "}\n" +
    "\n" +
    "#stats div {\n" +
    "  float: left;\n" +
    "  padding: 0 5px;\n" +
    "}\n" +
    "\n" +
    "#stats::after {\n" +
    "  display: block;\n" +
    "  content: '';\n" +
    "  clear: both;\n" +
    "}\n" +
    "\n" +
    "#stats .sloc::after {\n" +
    "  content: ' SLOC';\n" +
    "  color: #b6b6b6;\n" +
    "}\n" +
    "\n" +
    "#stats .percentage::after {\n" +
    "  content: ' coverage';\n" +
    "  color: #b6b6b6;\n" +
    "}\n" +
    "\n" +
    "#stats .hits,\n" +
    "#stats .misses {\n" +
    "  display: none;\n" +
    "}\n" +
    "\n" +
    ".high {\n" +
    "  color: #00d4b4;\n" +
    "}\n" +
    ".medium {\n" +
    "  color: #e87d0d;\n" +
    "}\n" +
    ".low {\n" +
    "  color: #d4081a;\n" +
    "}\n" +
    ".terrible {\n" +
    "  color: #d4081a;\n" +
    "  font-weight: bold;\n" +
    "}\n" +
    "\n" +
    "table {\n" +
    "  width: 80%;\n" +
    "  margin-top: 10px;\n" +
    "  border-collapse: collapse;\n" +
    "  border: 1px solid #cbcbcb;\n" +
    "  color: #363636;\n" +
    "  -webkit-border-radius: 3px;\n" +
    "  -moz-border-radius: 3px;\n" +
    "  border-radius: 3px;\n" +
    "}\n" +
    "\n" +
    "table thead {\n" +
    "  display: none;\n" +
    "}\n" +
    "\n" +
    "table td.line,\n" +
    "table td.hits {\n" +
    "  width: 20px;\n" +
    "  background: #eaeaea;\n" +
    "  text-align: center;\n" +
    "  font-size: 11px;\n" +
    "  padding: 0 10px;\n" +
    "  color: #949494;\n" +
    "}\n" +
    "\n" +
    "table td.hits {\n" +
    "  width: 10px;\n" +
    "  padding: 2px 5px;\n" +
    "  color: rgba(0,0,0,.2);\n" +
    "  background: #f0f0f0;\n" +
    "}\n" +
    "\n" +
    "tr.miss td.line,\n" +
    "tr.miss td.hits {\n" +
    "  background: #e6c3c7;\n" +
    "}\n" +
    "\n" +
    "tr.miss td {\n" +
    "  background: #f8d5d8;\n" +
    "}\n" +
    "\n" +
    "td.source {\n" +
    "  padding-left: 15px;\n" +
    "  line-height: 15px;\n" +
    "  white-space: pre;\n" +
    "  font: 12px monaco, monospace;\n" +
    "}\n" +
    "\n" +
    "code .comment { color: #ddd }\n" +
    "code .init { color: #2F6FAD }\n" +
    "code .string { color: #5890AD }\n" +
    "code .keyword { color: #8A6343 }\n" +
    "code .number { color: #2F6FAD }\n" +
    "</style>\n" +
    "");, 

$templateCache.put("node_modules/grunt-contrib-nodeunit/node_modules/nodeunit/test/test.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <title>Nodeunit Test Suite</title>\n" +
    "    <!--\n" +
    "      Note this file is only used for 'make browser', when it is copied to\n" +
    "      dist/browser/test.html for running the browser test suite\n" +
    "    -->\n" +
    "    <link rel=\"stylesheet\" href=\"nodeunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "    <script src=\"nodeunit.js\"></script>\n" +
    "    <script src=\"test-base.js\"></script>\n" +
    "    <script src=\"test-runmodule.js\"></script>\n" +
    "    <script src=\"test-runtest.js\"></script>\n" +
    "    <script src=\"test-testcase.js\"></script>\n" +
    "    <script src=\"test-testcase-legacy.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <h1 id=\"nodeunit-header\">Nodeunit Test Suite</h1>\n" +
    "    <script>\n" +
    "      nodeunit.run({\n" +
    "        'test-base': test_base,\n" +
    "        'test-runmodule': test_runmodule,\n" +
    "        'test-runtest': test_runtest,\n" +
    "        'test-testcase': test_testcase,\n" +
    "        'test-testcase-legacy': test_testcase_legacy\n" +
    "      });\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/front-end/devtools.html", 
    "<!--\n" +
    " * Copyright 2014 The Chromium Authors. All rights reserved.\n" +
    " * Use of this source code is governed by a BSD-style license that can be\n" +
    " * found in the LICENSE file.\n" +
    "-->\n" +
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "    <meta http-equiv=\"Content-Security-Policy\" content=\"object-src 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline'\">\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"devtools.css\">\n" +
    "    <script type=\"text/javascript\" src=\"Runtime.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"devtools.js\"></script>\n" +
    "</head>\n" +
    "<body class=\"undocked\" id=\"-blink-dev-tools\">\n" +
    "<script>\n" +
    "(function() {\n" +
    "    var remoteFrontendUrl = Runtime.queryParam(\"remoteFrontendUrl\");\n" +
    "    var src = remoteFrontendUrl\n" +
    "        ? decodeURIComponent(remoteFrontendUrl) + Runtime.constructQueryParams([\"remoteFrontendUrl\"])\n" +
    "        : \"inspector.html\" + window.location.search;\n" +
    "    document.write(\"<iframe id='inspector-app-iframe' class='fill' src='\" + src + \"'></iframe>\");\n" +
    "})();\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/front-end/inspector.html", 
    "<!--\n" +
    " * Copyright 2014 The Chromium Authors. All rights reserved.\n" +
    " * Use of this source code is governed by a BSD-style license that can be\n" +
    " * found in the LICENSE file.\n" +
    "-->\n" +
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "    <meta http-equiv=\"Content-Security-Policy\" content=\"object-src 'none'; script-src 'self' 'unsafe-eval'\">\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"inspector.css\">\n" +
    "    <script type=\"text/javascript\" src=\"Runtime.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"inspector.js\"></script>\n" +
    "</head>\n" +
    "<body class=\"undocked\" id=\"-blink-dev-tools\"></body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/front-end/toolbox.html", 
    "<!--\n" +
    " * Copyright 2014 The Chromium Authors. All rights reserved.\n" +
    " * Use of this source code is governed by a BSD-style license that can be\n" +
    " * found in the LICENSE file.\n" +
    "-->\n" +
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\">\n" +
    "    <meta http-equiv=\"Content-Security-Policy\" content=\"object-src 'none'; script-src 'self' 'unsafe-eval'\">\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"toolbox.css\">\n" +
    "    <script type=\"text/javascript\" src=\"Runtime.js\"></script>\n" +
    "    <script type=\"text/javascript\" src=\"toolbox.js\"></script>\n" +
    "</head>\n" +
    "<body class=\"undocked\" id=\"-blink-dev-tools\"></body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/biased-opener/node_modules/browser-launcher2/node_modules/plist/examples/browser/index.html", 
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "  <head>\n" +
    "    <title>plist.js browser example</title>\n" +
    "    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script src=\"../../dist/plist.js\"></script>\n" +
    "    <script>\n" +
    "      // TODO: add <input type=file> drag and drop example\n" +
    "      console.log(plist);\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/biased-opener/node_modules/browser-launcher2/node_modules/uid/test.html", 
    "<html>\n" +
    "<head>\n" +
    "  <title>uid component</title>\n" +
    "  <link rel=\"stylesheet\" href=\"../build/build.css\">\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1>uid component</h1>\n" +
    "  <script src=\"../build/build.js\" type=\"text/javascript\"></script>\n" +
    "  <script type=\"text/javascript\">\n" +
    "    var uid = require('uid'),\n" +
    "        out = [];\n" +
    "\n" +
    "    for (var i = 1; i <= 20; i++) {\n" +
    "      out.push(uid(i));\n" +
    "    };\n" +
    "\n" +
    "    document.write(out.join('<br><br>'));\n" +
    "\n" +
    "  </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/v8-debug/node_modules/node-pre-gyp/lib/util/nw-pre-gyp/index.html", 
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta charset=\"utf-8\">\n" +
    "<title>Node-webkit-based module test</title>\n" +
    "<script>\n" +
    "function nwModuleTest(){\n" +
    "   var util = require('util');\n" +
    "   var moduleFolder = require('nw.gui').App.argv[0];\n" +
    "   try {\n" +
    "      require(moduleFolder);\n" +
    "   } catch(e) {\n" +
    "      if( process.platform !== 'win32' ){\n" +
    "         util.log('nw-pre-gyp error:');\n" +
    "         util.log(e.stack);\n" +
    "      }\n" +
    "      process.exit(1);\n" +
    "   }\n" +
    "   process.exit(0);\n" +
    "}\n" +
    "</script>\n" +
    "</head>\n" +
    "<body onload=\"nwModuleTest()\">\n" +
    "<h1>Node-webkit-based module test</h1>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/v8-debug/node_modules/node-pre-gyp/node_modules/request/node_modules/node-uuid/test/test.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <style>\n" +
    "      div {\n" +
    "        font-family: monospace;\n" +
    "        font-size: 8pt;\n" +
    "      }\n" +
    "      div.log {color: #444;}\n" +
    "      div.warn {color: #550;}\n" +
    "      div.error {color: #800; font-weight: bold;}\n" +
    "    </style>\n" +
    "    <script src=\"../uuid.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script src=\"./test.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/v8-profiler/node_modules/node-pre-gyp/lib/util/nw-pre-gyp/index.html", 
    "<!doctype html>\n" +
    "<html>\n" +
    "<head>\n" +
    "<meta charset=\"utf-8\">\n" +
    "<title>Node-webkit-based module test</title>\n" +
    "<script>\n" +
    "function nwModuleTest(){\n" +
    "   var util = require('util');\n" +
    "   var moduleFolder = require('nw.gui').App.argv[0];\n" +
    "   try {\n" +
    "      require(moduleFolder);\n" +
    "   } catch(e) {\n" +
    "      if( process.platform !== 'win32' ){\n" +
    "         util.log('nw-pre-gyp error:');\n" +
    "         util.log(e.stack);\n" +
    "      }\n" +
    "      process.exit(1);\n" +
    "   }\n" +
    "   process.exit(0);\n" +
    "}\n" +
    "</script>\n" +
    "</head>\n" +
    "<body onload=\"nwModuleTest()\">\n" +
    "<h1>Node-webkit-based module test</h1>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt-debug-task/node_modules/node-inspector/node_modules/v8-profiler/node_modules/node-pre-gyp/node_modules/request/node_modules/node-uuid/test/test.html", 
    "<html>\n" +
    "  <head>\n" +
    "    <style>\n" +
    "      div {\n" +
    "        font-family: monospace;\n" +
    "        font-size: 8pt;\n" +
    "      }\n" +
    "      div.log {color: #444;}\n" +
    "      div.warn {color: #550;}\n" +
    "      div.error {color: #800; font-weight: bold;}\n" +
    "    </style>\n" +
    "    <script src=\"../uuid.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script src=\"./test.js\"></script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/colors/example.html", 
    "<!DOCTYPE HTML>\n" +
    "<html lang=\"en-us\">\n" +
    "  <head>\n" +
    "    <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n" +
    "    <title>Colors Example</title>\n" +
    "    <script src=\"colors.js\"></script>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>\n" +
    "\n" +
    "    var test = colors.red(\"hopefully colorless output\");\n" +
    "\n" +
    "    document.write('Rainbows are fun!'.rainbow + '<br/>');\n" +
    "    document.write('So '.italic + 'are'.underline + ' styles! '.bold + 'inverse'.inverse); // styles not widely supported\n" +
    "    document.write('Chains are also cool.'.bold.italic.underline.red); // styles not widely supported\n" +
    "    //document.write('zalgo time!'.zalgo);\n" +
    "    document.write(test.stripColors);\n" +
    "    document.write(\"a\".grey + \" b\".black);\n" +
    "\n" +
    "    document.write(\"Zebras are so fun!\".zebra);\n" +
    "\n" +
    "    document.write(colors.rainbow('Rainbows are fun!'));\n" +
    "    document.write(\"This is \" + \"not\".strikethrough + \" fun.\");\n" +
    "\n" +
    "    document.write(colors.italic('So ') + colors.underline('are') + colors.bold(' styles! ') + colors.inverse('inverse')); // styles not widely supported\n" +
    "    document.write(colors.bold(colors.italic(colors.underline(colors.red('Chains are also cool.'))))); // styles not widely supported\n" +
    "    //document.write(colors.zalgo('zalgo time!'));\n" +
    "    document.write(colors.stripColors(test));\n" +
    "    document.write(colors.grey(\"a\") + colors.black(\" b\"));\n" +
    "\n" +
    "    colors.addSequencer(\"america\", function(letter, i, exploded) {\n" +
    "      if(letter === \" \") return letter;\n" +
    "      switch(i%3) {\n" +
    "        case 0: return letter.red;\n" +
    "        case 1: return letter.white;\n" +
    "        case 2: return letter.blue;\n" +
    "      }\n" +
    "    });\n" +
    "\n" +
    "    colors.addSequencer(\"random\", (function() {\n" +
    "      var available = ['bold', 'underline', 'italic', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta'];\n" +
    "\n" +
    "      return function(letter, i, exploded) {\n" +
    "        return letter === \" \" ? letter : letter[available[Math.round(Math.random() * (available.length - 1))]];\n" +
    "      };\n" +
    "    })());\n" +
    "\n" +
    "    document.write(\"AMERICA! F--K YEAH!\".america);\n" +
    "    document.write(\"So apparently I've been to Mars, with all the little green men. But you know, I don't recall.\".random);\n" +
    "\n" +
    "    //\n" +
    "    // Custom themes\n" +
    "    //\n" +
    "\n" +
    "    colors.setTheme({\n" +
    "      silly: 'rainbow',\n" +
    "      input: 'grey',\n" +
    "      verbose: 'cyan',\n" +
    "      prompt: 'grey',\n" +
    "      info: 'green',\n" +
    "      data: 'grey',\n" +
    "      help: 'cyan',\n" +
    "      warn: 'yellow',\n" +
    "      debug: 'blue',\n" +
    "      error: 'red'\n" +
    "    });\n" +
    "\n" +
    "    // outputs red text\n" +
    "    document.write(\"this is an error\".error);\n" +
    "\n" +
    "    // outputs yellow text\n" +
    "    document.write(\"this is a warning\".warn);\n" +
    "\n" +
    "    </script>\n" +
    "  </body>\n" +
    "</html>");, 

$templateCache.put("node_modules/grunt/node_modules/grunt-legacy-log/node_modules/underscore.string/test/test.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <title>Underscore.strings Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"test_underscore/vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/qunit.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jslitmus.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"underscore.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../lib/underscore.string.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"strings.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"speed.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Underscore.string Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "  <br />\n" +
    "  <h1 class=\"qunit-header\">Underscore.string Speed Suite</h1>\n" +
    "  <!-- <h2 class=\"qunit-userAgent\">\n" +
    "    A representative sample of the functions are benchmarked here, to provide\n" +
    "    a sense of how fast they might run in different browsers.\n" +
    "    Each iteration runs on an array of 1000 elements.<br /><br />\n" +
    "    For example, the 'intersect' test measures the number of times you can\n" +
    "    find the intersection of two thousand-element arrays in one second.\n" +
    "  </h2> -->\n" +
    "  <br />\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/grunt-legacy-log/node_modules/underscore.string/test/test_standalone.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Underscore.strings Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"test_underscore/vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/qunit.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../lib/underscore.string.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"strings_standalone.js\"></script>\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Underscore.string Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/grunt-legacy-log/node_modules/underscore.string/test/test_underscore/index.html", 
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Underscore Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"vendor/qunit.css\" type=\"text/css\" media=\"screen\">\n" +
    "  <script src=\"vendor/jquery.js\"></script>\n" +
    "  <script src=\"vendor/qunit.js\"></script>\n" +
    "  <script src=\"vendor/jslitmus.js\"></script>\n" +
    "  <script src=\"../underscore.js\"></script>\n" +
    "  <script src=\"../../lib/underscore.string.js\"></script>\n" +
    "\n" +
    "  <script src=\"collections.js\"></script>\n" +
    "  <script src=\"arrays.js\"></script>\n" +
    "  <script src=\"functions.js\"></script>\n" +
    "  <script src=\"objects.js\"></script>\n" +
    "  <script src=\"utility.js\"></script>\n" +
    "  <script src=\"chaining.js\"></script>\n" +
    "  <script src=\"speed.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <div id=\"qunit\"></div>\n" +
    "  <div id=\"qunit-fixture\">\n" +
    "    <div id=\"map-test\">\n" +
    "      <div id=\"id1\"></div>\n" +
    "      <div id=\"id2\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <br>\n" +
    "  <h1 class=\"qunit-header\">Underscore Speed Suite</h1>\n" +
    "  <p>\n" +
    "    A representative sample of the functions are benchmarked here, to provide\n" +
    "    a sense of how fast they might run in different browsers.\n" +
    "    Each iteration runs on an array of 1000 elements.<br /><br />\n" +
    "    For example, the 'intersection' test measures the number of times you can\n" +
    "    find the intersection of two thousand-element arrays in one second.\n" +
    "  </p>\n" +
    "  <br>\n" +
    "  <script type=\"text/html\" id=\"template\">\n" +
    "    <%\n" +
    "    // a comment\n" +
    "    if (data) { data += 12345; }; %>\n" +
    "    <li><%= data %></li>\n" +
    "  </script>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/underscore.string/test/test.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <meta charset=\"utf-8\">\n" +
    "  <title>Underscore.strings Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"test_underscore/vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/qunit.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jslitmus.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"underscore.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../lib/underscore.string.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"strings.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"speed.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Underscore.string Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "  <br />\n" +
    "  <h1 class=\"qunit-header\">Underscore.string Speed Suite</h1>\n" +
    "  <!-- <h2 class=\"qunit-userAgent\">\n" +
    "    A representative sample of the functions are benchmarked here, to provide\n" +
    "    a sense of how fast they might run in different browsers.\n" +
    "    Each iteration runs on an array of 1000 elements.<br /><br />\n" +
    "    For example, the 'intersect' test measures the number of times you can\n" +
    "    find the intersection of two thousand-element arrays in one second.\n" +
    "  </h2> -->\n" +
    "  <br />\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/underscore.string/test/test_standalone.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Underscore.strings Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"test_underscore/vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"test_underscore/vendor/qunit.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../lib/underscore.string.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"strings_standalone.js\"></script>\n" +
    "\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 id=\"qunit-header\">Underscore.string Test Suite</h1>\n" +
    "  <h2 id=\"qunit-banner\"></h2>\n" +
    "  <h2 id=\"qunit-userAgent\"></h2>\n" +
    "  <ol id=\"qunit-tests\"></ol>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/underscore.string/test/test_underscore/temp_tests.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Underscore Temporary Tests</title>\n" +
    "  <link rel=\"stylesheet\" href=\"vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"vendor/jslitmus.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../underscore.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"temp.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <h1 class=\"qunit-header\">Underscore Temporary Tests</h1>\n" +
    "  <h2 class=\"qunit-userAgent\">\n" +
    "    A page for temporary speed tests, used for developing faster implementations\n" +
    "    of existing Underscore methods.\n" +
    "  </h2>\n" +
    "  <br />\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/grunt/node_modules/underscore.string/test/test_underscore/test.html", 
    "<!DOCTYPE HTML>\n" +
    "<html>\n" +
    "<head>\n" +
    "  <title>Underscore Test Suite</title>\n" +
    "  <link rel=\"stylesheet\" href=\"vendor/qunit.css\" type=\"text/css\" media=\"screen\" />\n" +
    "  <script type=\"text/javascript\" src=\"vendor/jquery.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"vendor/qunit.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"vendor/jslitmus.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../underscore.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"../../lib/underscore.string.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"collections.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"arrays.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"functions.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"objects.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"utility.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"chaining.js\"></script>\n" +
    "  <script type=\"text/javascript\" src=\"speed.js\"></script>\n" +
    "</head>\n" +
    "<body>\n" +
    "  <div class=\"underscore-test\">\n" +
    "    <h1 id=\"qunit-header\">Underscore Test Suite</h1>\n" +
    "    <h2 id=\"qunit-banner\"></h2>\n" +
    "    <h2 id=\"qunit-userAgent\"></h2>\n" +
    "    <ol id=\"qunit-tests\"></ol>\n" +
    "    <br />\n" +
    "    <h1 class=\"qunit-header\">Underscore Speed Suite</h1>\n" +
    "    <p>\n" +
    "      A representative sample of the functions are benchmarked here, to provide\n" +
    "      a sense of how fast they might run in different browsers.\n" +
    "      Each iteration runs on an array of 1000 elements.<br /><br />\n" +
    "      For example, the 'intersect' test measures the number of times you can\n" +
    "      find the intersection of two thousand-element arrays in one second.\n" +
    "    </p>\n" +
    "    <br />\n" +
    "\n" +
    "    <script type=\"text/html\" id=\"template\">\n" +
    "      <%\n" +
    "      if (data) { data += 12345; }; %>\n" +
    "      <li><%= data %></li>\n" +
    "    </script>\n" +
    "  </div>\n" +
    "</body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("node_modules/html-minifier/node_modules/uglify-js/tools/props.html", 
    "<html>\n" +
    "  <head>\n" +
    "  </head>\n" +
    "  <body>\n" +
    "    <script>(function(){\n" +
    "      var props = {};\n" +
    "\n" +
    "      function addObject(obj) {\n" +
    "        if (obj == null) return;\n" +
    "        try {\n" +
    "          Object.getOwnPropertyNames(obj).forEach(add);\n" +
    "        } catch(ex) {}\n" +
    "        if (obj.prototype) {\n" +
    "          Object.getOwnPropertyNames(obj.prototype).forEach(add);\n" +
    "        }\n" +
    "        if (typeof obj == \"function\") {\n" +
    "          try {\n" +
    "            Object.getOwnPropertyNames(new obj).forEach(add);\n" +
    "          } catch(ex) {}\n" +
    "        }\n" +
    "      }\n" +
    "\n" +
    "      function add(name) {\n" +
    "        props[name] = true;\n" +
    "      }\n" +
    "\n" +
    "      Object.getOwnPropertyNames(window).forEach(function(thing){\n" +
    "        addObject(window[thing]);\n" +
    "      });\n" +
    "\n" +
    "      try {\n" +
    "        addObject(new Event(\"click\"));\n" +
    "        addObject(new Event(\"contextmenu\"));\n" +
    "        addObject(new Event(\"mouseup\"));\n" +
    "        addObject(new Event(\"mousedown\"));\n" +
    "        addObject(new Event(\"keydown\"));\n" +
    "        addObject(new Event(\"keypress\"));\n" +
    "        addObject(new Event(\"keyup\"));\n" +
    "      } catch(ex) {}\n" +
    "\n" +
    "      var ta = document.createElement(\"textarea\");\n" +
    "      ta.style.width = \"100%\";\n" +
    "      ta.style.height = \"20em\";\n" +
    "      ta.style.boxSizing = \"border-box\";\n" +
    "      <!-- ta.value = Object.keys(props).sort(cmp).map(function(name){ -->\n" +
    "      <!--   return JSON.stringify(name); -->\n" +
    "      <!-- }).join(\",\\n\"); -->\n" +
    "      ta.value = JSON.stringify({\n" +
    "        vars: [],\n" +
    "        props: Object.keys(props).sort(cmp)\n" +
    "      }, null, 2);\n" +
    "      document.body.appendChild(ta);\n" +
    "\n" +
    "      function cmp(a, b) {\n" +
    "        a = a.toLowerCase();\n" +
    "        b = b.toLowerCase();\n" +
    "        return a < b ? -1 : a > b ? 1 : 0;\n" +
    "      }\n" +
    "    })();</script>\n" +
    "  </body>\n" +
    "</html>\n" +
    "");, 

$templateCache.put("test/ui/view/tab.tpl.html", 
    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
    "    <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</li>\n" +
    "");, 

$templateCache.put("test/ui/view/tabset.tpl.html", 
    "<div>\n" +
    "    <ul class=\"nav nav-{{type|| 'tabs'}}\" \n" +
    "        ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude>\n" +
    "\n" +
    "    </ul>\n" +
    "    <div class=\"tab-content\">\n" +
    "        <div class=\"tab-pane\" \n" +
    "             ng-repeat=\"tab in tabs\"\n" +
    "             ng-class=\"{active: tab.active}\"\n" +
    "             tab-content-transclude=\"tab\">\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");

}]);