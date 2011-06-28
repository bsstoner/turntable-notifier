var numSongs = 0;

function checkForNewSong(){
  var songDivs = qwery('#room-info-tab .song')
    , curNumSongs = (songDivs) ? songDivs.length : 0;

  // check if it changed:
  if(numSongs!=curNumSongs){
    numSongs = curNumSongs;

    // grab the top song:
    var song = songDivs[0]
      , thumbUrl = qwery('#room-info-tab .thumb')[0].src
      , title = qwery('#room-info-tab .title')[1].textContent
      , artist = qwery('#room-info-tab .details')[0].childNodes[0].textContent;

    chrome.extension.sendRequest({
      type: "songChange",
      image: thumbUrl,
      title: title,
      artist: artist
    });
  }
}

setInterval(checkForNewSong,2000);
