<?php
include 'BKPConstants.php';
include 'vimeo.php';

// Load the raw data from Vimeo
$vimeo = new phpVimeo(BKPConstants::VIMEO_KEY, BKPConstants::VIMEO_SECRET);
$album = $vimeo->call('vimeo.albums.getVideos',
                      array('album_id' => BKPConstants::ALBUM_ID,
                            'full_response' => true,
                            'per_page' => '50',
                            'page' => $_POST["set"]));

// Filter the data to send back to the client
$videos = array();
$index = 0;
foreach ($album->videos->video as $video) {
    $videos[$index++] = array("id" => $video->id,
                              "title" => $video->title,
                              "description" => $video->description,
                              "thumbnail" => $video->thumbnails->thumbnail[1]);
}

$result = array();
$result["videos"] = $videos;
$result["numVideosTotal"] = $album->videos->total;
$result["numVideosPage"] = $album->videos->on_this_page;

// Send the data
echo json_encode($result);
?>
