var APIkey = "AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var requestUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nWr4r-3bHBc&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var youtubeContainerEl = document.querySelector("#youtube-container");
var musicVideo = document.querySelector("#music-video");

fetch("requestUrl"), {
	"method": "get",
	"headers": {
		"x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
		"x-rapidapi-key": "980d637cdbmsh81ca7e280815ecfp1293afjsna174cb76791a"
	}
}
.then(response => response.json(){
	console.log(response);
})
.catch(err => {
	console.error(err);
});

var displayVideo = function(video, musicVideo) {
		document.getElementById("music-video").innerHTML = tab;
	return;
}


//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json