var APIkey = "AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var requestUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nWr4r-3bHBc&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var youtubeContainerEl = document.querySelector("#youtube-container");
var musicVideo = document.querySelector("#music-video");

fetch(requestUrl, {
}).then(response => response.json())
	.then((result) => {
		console.log(result);
	})

.catch(err => {
	console.error(err);
});

var displayVideo = function() {
		document.getElementById("#music-video").innerHTML
	return;
}
 //look at append child 
 // var to display video
 // add = to line 17 with variable to display video
 // probably need to do a createElementById for line 17
 