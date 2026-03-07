require(["dojo/_base/kernel", "dojo/_base/loader"], function(dojo) {
    dojo.registerModulePath("bkp", "/" + BKPConstants.rootDir + "/js/bkp");
});

require(["bkp/layers/core", "bkp/layers/decoration"], function() {
    require(["bkp/Decoration", "dojo/domReady!"], function(decorator) {
        if (window.innerWidth >= 600) {
            decorator.decorate();
        }
    });
});
