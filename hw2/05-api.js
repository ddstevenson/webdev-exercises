const url = 'https://restcountries.eu/rest/v2/all';

// Enter your code here
var request = new XMLHttpRequest();
request.open('GET', url, true)
request.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((country) => {
        document.getElementById("results").innerHTML += `<li>${country.name} - ${country.population.toLocaleString()}</li>`;
        });
    }
}
request.send();