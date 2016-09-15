$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', displayMenuOptions);
}

function displayMenuOptions(){
  $('#menuOptions').html("You can play a song, pause a song, or view all the songs");
}

function play() {
  $('#play').on('click', displayPlayData);
}

function displayPlayData(){
  $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
  return "now playing " + songToPlay + " by " + theArtist;
}

function pause() {
  $('#pause').on('click', displayPause);
}

function displayPause(){
  $('#songPaused').html(songToPlay + " is paused");
}

function show() {
  $('#show').on('click', displayShowData);
}

function displayShowData(){
  var songs = "";
  for (var key in jukeboxSongs) {
    songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
  }
  $('#showSongs').html(songs);
}
