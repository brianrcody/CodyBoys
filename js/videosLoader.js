require(["dojo/_base/kernel", "dojo/_base/loader"], function(dojo) {
    dojo.registerModulePath("bkp", "/" + BKPConstants.rootDir + "/js/bkp");
});

require(["bkp/layers/core", "bkp/layers/video"], function() {
    require(["bkp/VideoLoader", "dojo/domReady!"], function(loader) {
        var theloader = loader();
        theloader.init();
    });
});
