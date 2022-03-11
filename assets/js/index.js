const spotify_data = "";
const api_url ="https://spotfiy-charts.p.rapidapi.com/?type=regional&country=us&recurrence=weekly&date=latest"
fetch(api_url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
		"x-rapidapi-key": "4f0d91789amshc2b344d8971cadbp19fd34jsn5ebdc8770c89"
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
    document.getElementById('track1').textContent = data.content[1].track_title;
})


/*.then(response => {
	console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
    console.log(data.content);
    
})
.catch(err => {
	console.error(err);
});


/*var redirect_uri ='http://127.0.0.1:5500/index.html';

var client_id = '';
var client_secret = '';

const AUTHORIZE = 'https://accounts.spotify.com/authorize';
const TOKEN = 'https://accounts.spotify.com/api/token';

onPageLoad();

function onPageLoad() {
    /*client_id = document.getElementById("clientId").value;
    client_secret = document.getElementById("clientSecret").value;

    if (window.location.search.length > 0) {
        handleRedirect();
    }
}

function handleRedirect(){
    let code = getCode();
    fetchAccessToken(code);
    /*window.history.pushState("", "", redirect_uri);
}

function getCode() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
        const urlParams= new URLSearchParams(queryString);
        code = urlParams.get('code');
        console.log(code);
    }
    return code;
} 

function requestAuthorization() {
    client_id = document.getElementById("clientId").value;
    client_secret = document.getElementById("clientSecret").value;
    localStorage.setItem('client_id', client_id);
    localStorage.setItem('client_secret', client_secret);

    let url = AUTHORIZE;
    url += '?client_id=' + client_id;
    url += '&response_type=code';
    url += '&redirect_uri=' + encodeURI(redirect_uri);
    url += '&show_dialog=true';
    url += '&scope=user-read-private user-modify-playback-state user-library-modify ugc-image-upload';
    window.location.href = url;
    console.log(url);
}

function fetchAccessToken(code) {
    let body = 'grant_type=authorization_code';
    body += '&code=' + code;
    body += '&redirect_uri=' + encodeURI(redirect_uri);
    body += '&client_id=' + client_id;
    body += '&client_secret=' + client_secret;
    callAuthorizationApi(body);
    console.log(body);
}

function refreshAccessToken(){
    refresh_token = localStorage.getItem("refresh_token");
    let body = "grant_type=refresh_token";
    body += "&refresh_token=" + refresh_token;
    body += "&client_id=" + client_id;
    callAuthorizationApi(body);
}

function callAuthorizationApi(body){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", TOKEN, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(client_id + ":" + client_secret));
    xhr.send(body);
    xhr.onload = handleAuthorizationResponse;
    console.log(body);
}

function handleAuthorizationResponse() {
    if (this.status == 200) {
        var data =JSON.parse(this.responseText);
        console.log(data);
        var data = JSON.parse(this.responseText);
        if (data.access_token != undefined) {
            access_token = data.access.token;
            localStorage.setItem('access_token', access_token);
        }
        if (data.refresh_token != undefined) {
            refresh_token = data.refresh_token;
            localStorage.setItem('refresh_token', refresh_token);
        }
        onPageLoad();
    }
    else {
        console.log(this.responseText);
        alert(this.responseText);
    }
}

$(document).ready(function(){
    $(".btn").on("click", function() {
        requestAuthorization();
    })
})*/
