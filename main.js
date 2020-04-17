'use strict';

function getDogImage(numPic) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numPic}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function findUserInput() {
  $('form').on('submit', (event) => {
    $('.results').empty();
    event.stopPropagation();
    event.preventDefault();
    let userNum = $('#userInput').val();
    console.log(typeof(Number(userNum)));
    if (typeof(Number(userNum)) === "number" && userNum < 51 && userNum > 0) {
      getDogImage(userNum);
    }
    else {
      alert("You didn't enter a valid number between 1 and 50. The default number is 3.")
      getDogImage(3);
    }
  });
}

function displayResults(responseJson) {
  $('#userInput').val('');
  $('.results').empty();
  for (let i = 0; i < (responseJson.message).length; i++)
  $('.results').append(
    `<img src="${responseJson.message[i]}" alt='dog pic!' id='dog-pic'>`
  )
  $('#dog-pic-placeholder').addClass('hidden')
  $('.results').removeClass('hidden');
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  findUserInput();
});

