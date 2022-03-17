const api_url ="https://spotfiy-charts.p.rapidapi.com/?type=regional&country=us&recurrence=weekly&date=latest" //Spotify Charts API//
fetch(api_url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
		"x-rapidapi-key": "c313de1ad3msh4602fa283a24682p189403jsn953e0897f524"
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

$("#randomBtn").on("click", function() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 51))
      // localStorage.setItem('numbers', JSON.stringify(arr));
    }
    //console.log(arr);
    //var storedNums = JSON.parse(localStorage.getItem("numbers"));
    //console.log(storedNums.length);
    var a = arr[0];
    var b = arr[1];
    var c = arr[2];
    var d = arr[3];
    var e = arr[4];
    var f = data.content[a].artists;
    var f1 = data.content[a].track_title;
    var g = data.content[b].artists;
    var g1 = data.content[b].track_title;
    var h = data.content[c].artists;
    var h1 = data.content[c].track_title;
    var i = data.content[d].artists;
    var i1 = data.content[d].track_title;
    var j = data.content[e].artists;
    var j1 = data.content[e].track_title;
    /*console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);
    localStorage.setItem('artist1', JSON.stringify(f));
    localStorage.setItem('track1', JSON.stringify(f1));
    localStorage.setItem('artist2', JSON.stringify(g));
    localStorage.setItem('track2', JSON.stringify(g1));
    localStorage.setItem('artist3', JSON.stringify(h));
    localStorage.setItem('track3', JSON.stringify(h1));
    localStorage.setItem('artist4', JSON.stringify(i));
    localStorage.setItem('track4', JSON.stringify(i1));
    localStorage.setItem('artist5', JSON.stringify(j));
    localStorage.setItem('track5', JSON.stringify(j1));
    var k = JSON.parse(localStorage.getItem('artist1'));
    var k1 = JSON.parse(localStorage.getItem('track1'));
    var l = JSON.parse(localStorage.getItem('artist2'));
    var l1 = JSON.parse(localStorage.getItem('track2'));
    var m = JSON.parse(localStorage.getItem('artist3'));
    var m1 = JSON.parse(localStorage.getItem('track3'));
    var n = JSON.parse(localStorage.getItem('artist4'));
    var n1 = JSON.parse(localStorage.getItem('track4'));
    var o = JSON.parse(localStorage.getItem('artist5'));
    var o1 = JSON.parse(localStorage.getItem('track5'));*/
    document.getElementById('randArtists1').textContent = f1 + " by " + f;
    document.getElementById('randArtists2').textContent = g1 + " by " + g;
    document.getElementById('randArtists3').textContent = h1 + " by " + h;
    document.getElementById('randArtists4').textContent = i1 + " by " + i;
    document.getElementById('randArtists5').textContent = j1 + " by " + j;
})
    /*for (i = 0; i < storedNums.length; i++) {
        var x = storedNums[i];
        var y = JSON.stringify(data.content[x].artists);
        console.log(storedNums[i]);
        console.log(data.content[x].artists);
        console.log(y);
    }*/
    
    /*for (var i = 0; i < 50; i ++) {
        var x = JSON.stringify(data.content[i].artists);
        var y = JSON.stringify(data.content[i].track_title);
    
        console.log(x.length);
        console.log(x);
        console.log(y);

    }*/
})

var APIkey = "AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
const requestUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ubnDMTUui1Y&key=AIzaSyA2ChTeollJqbj7hUF54Y88r9RysfXB2xc";
var youtubeContainerEl = document.querySelector("#youtube-container");
const musicVideo = document.querySelector("#music-video");

fetch(requestUrl)
	.then (function (response) {
		return response.json();
	}) 
	.then(function (result) {
		console.log(result);
		if (!response.ok) {

		}
		return result.musicVideo
	})

	.catch((e) => {
		console.log(e);
	});
// Second Spotify API that allows for searching of genre

var keyCount = 0;
var genreSearched ='';
for (var i = 0; i < localStorage.length; i++) {

    var genre = localStorage.getItem(i);
    var genreType = $('.list-group').addClass('list-group-item');

    genreType.append('<li>' + genre + '</li>');
}
var searchGenre = () => {
    var searchInput = $('.searchInput').val();
    var urlCurrent = "https://spotify23.p.rapidapi.com/search/?q=" + searchInput + "&type=genre&offset=0&limit=10&numberOfTopResults=5";
    fetch( urlCurrent, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotify23.p.rapidapi.com",
		"x-rapidapi-key": "c313de1ad3msh4602fa283a24682p189403jsn953e0897f524"
	}
    })
    .then(function (response) {
        // console logging response to access data string //
        console.log(response);
        var genreName = $(".list-group").addClass("list-group-item");
        genreName.append("<li>" + searchInput + "</li>");
        var local = localStorage.setItem(keyCount, searchInput);
        keyCount = keyCount + 1;
        return response.json();
        })
    .catch(err => {
	    console.error(err);
    })
    .then(data => {
        var a1 = Math.floor(Math.random() * 10)
        console.log(data);
        var currentCard = $(".currentCard").append("<div>").addClass("card-body");
        currentCard.empty();
        var currentName = currentCard.append("<p>");
        currentCard.append(currentName);
        var currentTrack = currentName.append("<p>");
        currentTrack.append("<p>" + "Track Name: " + JSON.stringify(data.tracks.items[a1].data.name) + " by: " + JSON.stringify(data.tracks.items[a1].data.artists.items[0].profile.name) + "</p>");
    })
}
$('.searchBtn').on('click', (event) => {
    event.preventDefault();
    genreSearched = $('.searchInput').val();
    searchGenre();
});

$('.list-group').on('click', (event) => {
    event.preventDefault();
    $('.searchInput').val(event.target.textContent);
    genreSearched = $('.searchInput').val();
    searchGenre();
});

$('.clearButton').on('click', (event) => {
    event.preventDefault();
    var genreType = $(".list-group").addClass("list-group-item");
    genreType.empty();
    localStorage.clear();
});