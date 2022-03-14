const api_url ="https://spotfiy-charts.p.rapidapi.com/?type=regional&country=us&recurrence=weekly&date=latest" //Spotify Charts API//
fetch(api_url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
		"x-rapidapi-key": "669c7263bfmsh21d9c4adb08f748p1ed1b7jsn480ba42fbc10"
	}
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
    console.log(data.content[0]);
    for (var i = 0; i < 6; i++) {
        console.log(data.content[i]);
    }
    document.getElementById('artist1').textContent = data.content[0].artists;
    document.getElementById('track1').textContent = data.content[0].track_title;
    document.getElementById('artist2').textContent = data.content[1].artists;
    document.getElementById('track2').textContent = data.content[1].track_title;
    document.getElementById('artist3').textContent = data.content[2].artists;
    document.getElementById('track3').textContent = data.content[2].track_title;
    document.getElementById('artist4').textContent = data.content[3].artists;
    document.getElementById('track4').textContent = data.content[3].track_title;
    document.getElementById('artist5').textContent = data.content[4].artists;
    document.getElementById('track5').textContent = data.content[4].track_title;
    document.getElementById('artist6').textContent = data.content[5].artists;
    document.getElementById('track6').textContent = data.content[5].track_title;
    document.getElementById('artist7').textContent = data.content[6].artists;
    document.getElementById('track7').textContent = data.content[6].track_title;
    document.getElementById('artist8').textContent = data.content[7].artists;
    document.getElementById('track8').textContent = data.content[7].track_title;
})

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

