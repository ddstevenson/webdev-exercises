const url = 'https://pokeapi.co/api/v2/pokemon/'; //?limit=2000

// Enter your code here
var result = loadResponse(url);
result.then((data) => {
    var result2 = loadResponse(url + `?limit=${data.count}`);
    result2.then((data) => {
        data.results.forEach((pokemon) => {
            document.getElementById("results").innerHTML += `<span>${pokemon.name}</span> - `;
            });
        }
        
    );
});


async function loadResponse(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}