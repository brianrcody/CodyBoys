$(document).ready(function() {
    // Set up the containers
    var startingYear = 2010;
    var date = new Date();
    var endingYear = date.getFullYear();

    var yearHTML = "";
    var year;
    for (year = endingYear; year >= startingYear; year--) {
        yearHTML += "<div class=hello>";
        yearHTML += year;
        yearHTML += " Albums:</div><div id=kidpics"
        yearHTML += year;
        yearHTML += "></div>"
    }
    $("#kidpics").html(yearHTML);

    // Populate the containers
    var thumbnailSize = 144;;
    if (window.innerWidth < 600) {
        thumbnailSize = 72;
    }

    for (year = startingYear; year <= endingYear; year++) {
        yearDivQuery = "#kidpics" + year;
        $(yearDivQuery).EmbedPicasaGallery(BKPConstants.picasaUserName,{
            loading_animation: "css/loading.gif",
            size: thumbnailSize,
            matcher: new RegExp(BKPConstants.kidName + "(.)*" + year)
        });
    }

    // Set up the picture frame link
    $("#pictureframelink").click(function(e) {
        var frameTitle = BKPConstants.appName + " Digital Picture Frame";
        window.open("pictureFrame.html", frameTitle, "location=0,status=0,scrollbars=0,width=500,height=500");
        e.stopPropagation();
        e.preventDefault();
    });
})
