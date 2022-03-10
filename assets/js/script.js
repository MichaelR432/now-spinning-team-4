var APIkey = "AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nWr4r-3bHBc&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc

fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=nWr4r-3bHBc&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
		"x-rapidapi-key": "980d637cdbmsh81ca7e280815ecfp1293afjsna174cb76791a"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

