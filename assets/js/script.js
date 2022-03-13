var APIkey = "AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
const requestUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ubnDMTUui1Y&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var youtubeContainerEl = document.querySelector("#youtube-container");
const musicVideo = document.querySelector("#music-video");

fetch(requestUrl)
	.then(response => response.json())
	.then(result => {
		console.log(result);
		if (!response.ok) {

		}
		return result.musicVideo
	})

	.catch((e) => {
		console.log(e);
	});


