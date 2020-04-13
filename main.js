'use strict';

function getDogImage(numPic) {
  $('#userInput').val('');
  fetch(`https://dog.ceo/api/breeds/image/random/${numPic}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function findUserInput() {
  $('form').on('submit', (event) => {
    $('.results').empty();
    event.preventDefault();
    let userNum = $('#userInput').val();
    console.log(typeof(userNum));
    if (typeof(Number(userNum)) == "number" && userNum < 51 && userNum > 0) {
      getDogImage(userNum);
    }
    else {
      getDogImage(3);
    }
  });
}

function displayResults(responseJson) {
  console.log(responseJson);
  for (let i = 0; i < (responseJson.message).length; i++)
  $('.results').append(
    `<img src="${responseJson.message[i]}" alt='dog pic!' id='dog-pic'>`
  )
  $('#dog-pic-placeholder').addClass('hidden')
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    findUserInput();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

function eventHandlers() {
  findUserInput()
}

$(eventHandlers)