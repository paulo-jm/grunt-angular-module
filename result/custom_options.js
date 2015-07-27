app.run(['$templateCache', function($templateCache) {

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