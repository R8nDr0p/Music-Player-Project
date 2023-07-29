let seek = document.getElementById("seek-bar");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onwaiting = function () {};

song.ontimeupdate = function () {
  seek.value = song.currentTime;
  document.getElementById("start-time").textContent = formatTime(
    song.currentTime
  );
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

song.onloadedmetadata = function () {
  seek.max = song.duration;
  seek.value = song.currentTime;
  document.getElementById("end-time").textContent = formatTime(song.duration);
};

const playPause = () => {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};

if (song.play()) {
  setInterval(() => {
    seek.value = song.currentTime;
  }, 500);
}

seek.onchange = function () {
  song.play();
  song.currentTime = seek.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};
