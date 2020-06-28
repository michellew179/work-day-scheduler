// displays current date in the header
var currentDay = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = currentDay.format('dddd MMM Do');

// saves text input when button is clicked
var saveEvent = document.getElementsByClassName('.save-button');
// when save button pressed, it saves text input in field and in local storage

saveEvent.addEventListener('click', function () {
    document.getElementsByTagName('textarea').textcontent = '';
    console.log(saveEvent);
})