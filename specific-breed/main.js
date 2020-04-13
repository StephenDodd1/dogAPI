function formatQuery(breed) {
    $('main').empty();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}


function displayResults(responseJson) {
    let breedImg = responseJson;
    console.log(breedImg);
    $('main').append(`<img src='${breedImg['message']}' alt='a photo of chosen breed'></img>`);
}


function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        let userInput = $('#breed').val();
        console.log(userInput);
        formatQuery(userInput);
    });
}


function handleEventListeners() {
    watchForm()
}


$(handleEventListeners)