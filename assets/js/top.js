const api_url ="https://spotfiy-charts.p.rapidapi.com/?type=regional&country=us&recurrence=weekly&date=latest" //Spotify Charts API//
fetch(api_url, {
	"method": "GET",
    "headers": {
		"x-rapidapi-host": "spotfiy-charts.p.rapidapi.com",
		"x-rapidapi-key": "8e2f52cc90mshf376dfdd4afaf94p1d2968jsn77916a99b0cd"
	}
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
})