let pageReady = false;
let isMuted = false;
let isShuffled = false;
const audioElement = new Audio("audio.mp3");
let onLoadOverlay = document.querySelector(".onLoad-overlay");
let onLoadContent = document.querySelector(".onLoad-content");
let aboutOverlay = document.querySelector(".about-overlay");
let giveOverlay = document.querySelector(".give-overlay");
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
    document.querySelector(".play-image").src = "assets/images/play.png";
  } else {
    player.playVideo();
    document.querySelector(".play-image").src = "assets/images/pause.png";
  }
}
function nextOnPlayList() {
  player.nextVideo();
}

function shuffleOnPlaylist() {
  if (isShuffled) {
    player.setShuffle(false);
    document.querySelector(".shuffle-image").src = "assets/images/shuffle.png";
  } else {
    player.setShuffle(true);
    document.querySelector(".shuffle-image").src = "assets/images/continue.png";

  }
  isShuffled = !isShuffled;
}

function muteAudio() {
  if (isMuted) {
    audioElement.play();
    console.log("unmuted");
    document.querySelector(".mute-image").src = "assets/images/unmute.png";
  } else {
    audioElement.pause();
    console.log("muted");
    document.querySelector(".mute-image").src = "assets/images/mute.png";
  }
  isMuted = !isMuted;
}

audioElement.loop = true;
document.querySelector(".enter").addEventListener("click", function () {
  audioElement.play();
  isPaused = false;
  onLoadOverlay.classList.add("fade-out");
  onLoadContent.classList.add("text-blur-out");
  setTimeout(() => {
    player.playVideo();
  }, 500);
  setTimeout(() => {
    onLoadOverlay.style.display = "none";
  }, 5000);
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
