let seek = document.getElementById("seek-bar");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
const playList = ["music/Zild - Medisina.mp3", "music/Zild - Isang Anghel.mp3"];
const playList2 = [
  {
    title: "Medisina",
    artist: "Zild",
    cover: "https://i.scdn.co/image/ab67616d0000b27357b6ee1ec17bfb191bc9495b",
    file: "https://nmnn.ummn.nu/api/v1/download?sig=m3RQChapFF82OX2bmrAojyHNT8ufL6Mjoy%2BWKULdAoeszEoA22CWB0kOrwJEXu%2FjGqskNYXrd6H76dAKXweplgUhQ5z9aB2%2Frdbk75p6YfBe7TvgvPyokGunj%2FsoPuH7ADIH3n0RxRwPdOb3NstD%2BVn6etl4PvW%2BxojNx2eL5oDAqseLMUJApApxqKg3EgkgaZSwTmLkHYR%2Fij0gEUt7eNwc%2BgXD1Rq7Dcax5L2NamVdKR0aKkawP0iI%2BDY9K87WOMgG6mdNtiQ3608wGKnClmORW3vLFHTwWAgI%2FSBkRPhN%2FUHwvapx2bzRdAWRj7zxebkJsWiWy0WaesqIIFQa5g%3D%3D&v=v=-0JlqYekQlQ,-0JlqYekQlQ&_=0.13943228757803172",
  },
  {
    title: "Isang Anghel",
    artist: "Zild",
    cover:
      "https://images.genius.com/756c01c136e8d15d650192cf1c8e84cd.720x720x1.jpg",
    file: "https://uuuu.ummn.nu/api/v1/download?sig=AOkX0Q5X2%2FNP20KS4UIbFfFjAFUSKp3InHK%2Fnl47IX0W1spR5vQCz1ydPeW2ZpOEyLAmrGbOYMItQUbhEDaEouFfO5WAIhh4j8zjlPSvQ%2BlhfBGV5Y%2FP08%2BihuNkM8M3KWtTXVFGDjY%2FXRcZGPEvu84TLO8GYHHrSzsdNnaEjdNMMUuibsrsoeccHo%2FZk96YH0jFRLhoiv6dMyezWhoYBPdCrhb3sJdKq8UCIpV3NgH06mHp2MRtW1SQ8LXvYRB7qCxXbEXytzPjFzY7LFTzY7JPyUhgB3vWB5CB7a6JZNWgXFxe5H8QoCj7dM4p3%2F6XLVfGAf9cqCzEfg1MifM3kg%3D%3D&v=v=i3CJXdLlKJo,i3CJXdLlKJo&_=0.5780863621498404",
  },
];

let currentSongIndex = 0;
// song.onwaiting = function () {};

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

// if (song.play()) {
//   setInterval(() => {
//     seek.value = song.currentTime;
//   }, 500);
// }

seek.onchange = function () {
  song.play();
  song.currentTime = seek.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

const previous = () => {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = playList.length - 1;
  }
  updateSong();
};

const next = () => {
  currentSongIndex++;
  if (currentSongIndex > playList.length - 1) {
    currentSongIndex = 0;
  }
  updateSong();
};

const updateSong = () => {
  song.src = playList2[currentSongIndex].file;
  document.querySelector(".song-title").textContent =
    playList2[currentSongIndex].title;
  document.querySelector(".artist-name").textContent =
    playList2[currentSongIndex].artist;
  document.querySelector(".song-img").src = playList2[currentSongIndex].cover;
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector(".selection_container");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = document.querySelectorAll(".results-container > div");
const lyricsUrl =
  "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=8505071";
const relatedArtistsUrl =
  "https://spotify23.p.rapidapi.com/artist_related/?id=7BxbcnOfx5r4d53UQl2I1s";
const albumUrl =
  "https://spotify23.p.rapidapi.com/artist_albums/?id=7BxbcnOfx5r4d53UQl2I1s&offset=0&limit=100";
const optionsGenius = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bf2068c6e5mshefeba8a5afa46a0p103083jsnbab70bd0d38b",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};
const optionsSpotify = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bf2068c6e5mshefeba8a5afa46a0p103083jsnbab70bd0d38b",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

tabButtons.forEach((button, index) => {
  if (index === 0) {
    button.classList.add("active");
  } else {
    tabPanels[index].style.display = "none";
  }
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  if (!clickedTab) return;
  console.log(clickedTab);
  e.preventDefault();
  switchTab(clickedTab);
});

const switchTab = async (newTab) => {
  const currentActiveTab = tabsList.querySelector(".active");
  if (currentActiveTab) {
    currentActiveTab.classList.remove("active");
  }
  newTab.classList.add("active");
  const activePanelId = newTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabPanels.forEach((panel) => {
    panel.style.display = "none";
  });
  activePanel.style.display = "flex";

  if (activePanelId === "#lyrics") {
    try {
      const response = await fetch(lyricsUrl, optionsGenius);
      const data = await response.json();
      console.log(data);
      const lyricsElement = data.lyrics.lyrics.body.html;
      const lyricsPanel = document.querySelector(".lyrics");
      lyricsPanel.innerHTML = lyricsElement;
    } catch (err) {
      console.log(err);
    }
  } else if (activePanelId === "#artists") {
    try {
      const response = await fetch(relatedArtistsUrl, optionsSpotify);
      const data = await response.json();
      console.log(data);
      const artists = data.artists;
      const artistsPanel = document.querySelector("#artists");
      artistsPanel.innerHTML = "";
      artists.forEach((artist, index) => {
        const artistElement = document.createElement("div");
        artistElement.classList.add(`artist-${index}`);
        artistElement.classList.add(`card`);
        artistElement.innerHTML = `
          <img src="${artist.images[1].url}" alt="artist image"/>
          <p>${artist.name}</p>
          <p>${artist.followers.total} followers</p>
          `;
        artistsPanel.appendChild(artistElement); // Append the artist element to the container
      });
    } catch (err) {
      console.log(err);
    }
  } else if (activePanelId === "#album") {
    try {
      const response = await fetch(albumUrl, optionsSpotify);
      const data = await response.json();
      const albums = data.data.artist.discography.albums.items;
      console.log(albums);
      const albumPanel = document.querySelector("#album");
      albumPanel.innerHTML = "";
      albums.forEach((album, index) => {
        const albumElement = document.createElement("div");
        albumElement.classList.add(`album-${index + 1}`);
        albumElement.classList.add(`card`);
        albumElement.innerHTML = `
        <img src="${album.releases.items[0].coverArt.sources[0].url}"/>
        <p>${album.releases.items[0].name}</p>
        <p>Year: ${album.releases.items[0].date.year}</p>
        <p>Tracks: ${album.releases.items[0].tracks.totalCount}</p>`;
        albumPanel.appendChild(albumElement);
      });
    } catch (error) {
      console.log("Error fetching album data", error);
    }
  }
};

// const showLoadingState = () => {
//   loadingState.style.display = "block";
// };

// const hideLoadingState = () => {
//   loadingState.style.display = "none";
// };

document.addEventListener("DOMContentLoaded", () => {
  switchTab(tabButtons[0]);
});
