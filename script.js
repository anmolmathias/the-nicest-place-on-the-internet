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
  event.target.playVideo();
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

document.querySelector(".rewind").addEventListener("click", rewindOnPlaylist);
document.querySelector(".play").addEventListener("click", playOrPause);
document.querySelector(".next").addEventListener("click", nextOnPlayList);
document.querySelector(".shuffle").addEventListener("click", shuffleOnPlaylist);

var aboutOverlay = document.querySelector(".about-overlay");
aboutOverlay.addEventListener("click", function () {
  aboutOverlay.style.display = "none";
});
document.querySelector(".links-about").addEventListener("click", function () {
  aboutOverlay.style.display = "flex";
});

var aboutOverlay = document.querySelector(".about-overlay");
aboutOverlay.addEventListener("click", function () {
  aboutOverlay.style.display = "none";
});
document.querySelector(".links-about").addEventListener("click", function () {
  aboutOverlay.style.display = "flex";
});

var giveOverlay = document.querySelector(".give-overlay");
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

document.querySelector(".close").addEventListener('click', function () {
    document.querySelector(".overlay").style.display = "none";
})