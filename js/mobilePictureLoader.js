require(["dojo/_base/kernel", "dojo/_base/loader"], function(dojo) {
    dojo.registerModulePath("bkp", "/" + BKPConstants.rootDir + "/js/bkp");
});

require(["bkp/layers/core", "bkp/layers/mobile", "bkp/layers/mobilepictures"], function() {
    require(["bkp/MobilePictureViewer", "dojo/domReady!"], function(viewer) {
        viewer.populateAlbums();
        viewer.connectReorientFcn();
        viewer.reorient();
    });
});
