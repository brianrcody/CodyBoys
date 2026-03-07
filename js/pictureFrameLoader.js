require(["dojo/_base/kernel", "dojo/_base/loader"], function(dojo) {
    dojo.registerModulePath("bkp", "/" + BKPConstants.rootDir + "/js/bkp");
});

require(["bkp/layers/core", "bkp/layers/pictureframe"], function() {
    require(["bkp/PictureFrameLoader", "dojo/domReady!"], function(loader) {
        var theloader = loader.createPictureFrameLoader();
        theloader.load();
    });
});
