require(["dojo/_base/kernel", "dojo/_base/loader"], function(dojo) {
    dojo.registerModulePath("bkp", "/" + BKPConstants.rootDir + "/js/bkp");
});

require(["bkp/layers/core", "bkp/layers/navigation"], function() {
    require(["bkp/Navigator", "dojo/domReady!"], function(navigator) {
        navigator.populateLinks();
    });
});
