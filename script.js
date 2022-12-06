let pageReady = false;
let isPaused = true;
const audioElement = new Audio("audio.mp3");
var aboutOverlay = document.querySelector(".about-overlay");
var giveOverlay = document.querySelector(".give-overlay");
var tag = document.createElement("script");

tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    events: {
      onReady: onPlayerReady,
      onError: onPlayerError,
    },
  });
}
function onPlayerReady(event) {
  event.target.pauseVideo();
}
function onPlayerError(event) {
  console.log(event.target.data);
}
function rewindOnPlaylist() {
  player.previousVideo();
}
function playOrPause() {
  if (player.getPlayerState() === 1) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
}
function nextOnPlayList() {
  player.nextVideo();
}
var isShuffled = false;
function shuffleOnPlaylist() {
  if (isShuffled) {
    player.setShuffle(false);
  } else {
    player.setShuffle(true);
  }
  isShuffled = !isShuffled;
}

function muteAudio() {
  if (isPaused) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
  isPaused = !isPaused;
}
 audioElement.loop = true;
document.querySelector(".enter").addEventListener("click", function () {
  document.querySelector(".onLoad-overlay").style.display = "none";
  audioElement.play();
  isPaused = false;
  setTimeout(() => {
    player.playVideo();
  }, 2000);
});

aboutOverlay.addEventListener("click", function () {
  aboutOverlay.style.display = "none";
});
document.querySelector(".links-about").addEventListener("click", function () {
  aboutOverlay.style.display = "flex";
});
giveOverlay.addEventListener("click", function () {
  giveOverlay.style.display = "none";
});
document.querySelector(".links-give").addEventListener("click", function () {
  giveOverlay.style.display = "flex";
});
document
  .querySelector(".modal-content")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".overlay").style.display = "none";
});
document.querySelector(".rewind").addEventListener("click", rewindOnPlaylist);
document.querySelector(".play").addEventListener("click", playOrPause);
document.querySelector(".next").addEventListener("click", nextOnPlayList);
document.querySelector(".mute").addEventListener("click", muteAudio);
document.querySelector(".shuffle").addEventListener("click", shuffleOnPlaylist);
