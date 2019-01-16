let blackSheepMp3 = 'songs/black_sheep.mp3';
let signalMp3 = 'songs/signal.mp3';
let furtherMp3 = 'songs/even_further_down.mp3';

let songArray = [
  blackSheepMp3,
  signalMp3,
  furtherMp3
];



function navMQ() {
  if ($("#now-playing").css("display") === "none") {
    console.log('hi');
    $('.nav-bar').hide();
  }
}

function navScroller() {
  console.log('hey');
  $('.nav-bar').slideToggle();
}

function init() {
  loadSong(blackSheepMp3);
}

function getCurrentFilename()  {
  let audioElm = $('audio')[0];
  let currentSrc = 'songs/' + audioElm.src.split('songs/')[1];
  return currentSrc;
}

function loadSong(fileName, artist, songName) {
    let audioElm = $('audio')[0];
    if (getCurrentFilename() !== fileName) {
      audioElm.src = fileName;
      $('#band-name').html(artist);
      $('#song-title').html(songName);
    } else {
      return;
    }
}

function playColor() {
  $('#play').addClass('pressed');
  $('#pause').removeClass('pressed');
}

function pauseColor() {
  $('#pause').addClass('pressed');
  $('#play').removeClass('pressed');
}

function play() {
  let audioElm = $('audio')[0];
  audioElm.play();
  playColor();
}

function pause() {
  let audioElm = $('audio')[0];
  audioElm.pause();
  pauseColor();
}

function stop() {
  let audioElm = $('audio')[0];
  audioElm.pause();
  audioElm.currentTime = 0;
  $('#play, #pause').removeClass('pressed');
}

function nextSong() {
  let audioElm = $('audio')[0];
  audioElm.pause();
  let audioName = getCurrentFilename();
  if (audioName === blackSheepMp3) {
    loadSong(signalMp3, 'Dan Lehner\'s\ Memory Field', '\"Signal\"');
    play();
  } else if (audioName === signalMp3) {
    loadSong(furtherMp3, '(solo piece)', '\"Even Further Down\"');
    play();
  } else {
    loadSong(blackSheepMp3, 'Karikatura', '\"Black Sheep\"');
    play();
  };
  $('#play, #pause').removeClass('pressed');
}

function previousSong() {
  let audioElm = $('audio')[0];
  audioElm.pause();
  let audioName = getCurrentFilename();
  if (audioName === blackSheepMp3) {
    loadSong(furtherMp3, '(solo piece)', '\"Even Further Down\"');
    play();
  } else if (audioName === signalMp3) {
    loadSong(blackSheepMp3, 'Karikatura', '\"Black Sheep\"');
    play();
  } else {
    loadSong(signalMp3, 'Dan Lehner\'s\ Memory Field', '\"Signal\"');
    play();
  };
  $('#play, #pause').removeClass('pressed');
}


// ---------- On pageload -------------------

songSkip();
navMQ();
init();
$('#about-page').hide();
$('#main-shows-page').hide();
$('#main-listen-page').hide();
$('#main-watch-page').hide();
$('#main-contact-page').hide();


// ---------- Click listeners ---------------------

$('#click-me').click(navScroller);
$('#play').click(play);
$('#pause').click(pause);
$('#stop').click(stop);
$('#next-song').click(nextSong);
$('#previous-song').click(previousSong);


// ---------- Song Click Listeners ---------------

// ----- "Black Sheep" --------------

$('#play-sheep').click(function() {
  loadSong(blackSheepMp3, 'Karikatura', '\"Black Sheep\"');
  play();
  $('.landing-buttons button').removeClass('pressed');
  $('#play-sheep').addClass('pressed');
})

$('#pause-sheep').click(function() {
  let audioElm = $('audio')[0];
  let audioName = getCurrentFilename();
  if (audioName === blackSheepMp3) {
  pause();
  $('.landing-buttons button').removeClass('pressed');
  $('#pause-sheep').addClass('pressed');
} else {
  console.log('no');
  return;
}
})

// ------ "Signal" --------------

$('#play-signal').click(function() {
  loadSong(signalMp3, 'Dan Lehner\'s\ Memory Field', '\"Signal\"');
  play();
  $('.landing-buttons button').removeClass('pressed');
  $('#play-signal').addClass('pressed');
})

$('#pause-signal').click(function() {
  let audioElm = $('audio')[0];
  let audioName = getCurrentFilename();
  if (audioName === signalMp3) {
  pause();
  $('.landing-buttons button').removeClass('pressed');
  $('#pause-signal').addClass('pressed');
} else {
  console.log('no');
  return;
}
})

// -----------"Even Further Down" ----

$('#play-further').click(function() {
  loadSong(furtherMp3, '(solo piece)', '\"Even Further Down\"');
  play();
  $('.landing-buttons button').removeClass('pressed');
  $('#play-further').addClass('pressed');
})

$('#pause-further').click(function() {
  let audioElm = $('audio')[0];
  let audioName = getCurrentFilename();
  if (audioName === furtherMp3) {
  pause();
  $('.landing-buttons button').removeClass('pressed');
  $('#pause-further').addClass('pressed');
} else {
  console.log('no');
  return;
}
})

// --------------------Page Click Listeners -----------

$('#about').click(function() {
  $('.blurb').hide();
  $('#about-page').show();
});

$('#shows').click(function() {
  $('.blurb').hide();
  $('#main-shows-page').show();
});

$('#listen').click(function() {
  $('.blurb').hide();
  $('#main-listen-page').show();
});

$('#watch').click(function() {
  $('.blurb').hide();
  $('#main-watch-page').show();
});

$('#contact').click(function() {
  $('.blurb').hide();
  $('#main-contact-page').show();
});
