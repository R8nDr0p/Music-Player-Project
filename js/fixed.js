let seek = document.getElementById("seek-bar");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
const playList = [
  {
    title: "Medisina",
    artist: "Zild",
    cover: "https://i.scdn.co/image/ab67616d0000b27357b6ee1ec17bfb191bc9495b",
    file: "https://nmnn.ummn.nu/api/v1/download?sig=m3RQChapFF82OX2bmrAojyHNT8ufL6Mjoy%2BWKULdAoeszEoA22CWB0kOrwJEXu%2FjGqskNYXrd6H76dAKXweplgUhQ5z9aB2%2Frdbk75p6YfBe7TvgvPyokGunj%2FsoPuH7ADIH3n0RxRwPdOb3NstD%2BVn6etl4PvW%2BxojNx2eL5oDAqseLMUJApApxqKg3EgkgaZSwTmLkHYR%2Fij0gEUt7eNwc%2BgXD1Rq7Dcax5L2NamVdKR0aKkawP0iI%2BDY9K87WOMgG6mdNtiQ3608wGKnClmORW3vLFHTwWAgI%2FSBkRPhN%2FUHwvapx2bzRdAWRj7zxebkJsWiWy0WaesqIIFQa5g%3D%3D&v=v=-0JlqYekQlQ,-0JlqYekQlQ&_=0.13943228757803172",
  },
  {
    title: "Parang Magic",
    artist: "TONEEJAY",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/15/5a/82/155a8252-3594-8763-52b1-6c57abb4e104/cover.jpg/600x600bf-60.jpg",
    file: "https://mumn.ummn.nu/api/v1/download?sig=wtDV1LTO3jswLIkqr%2FNrdzEGiZo8OQFKEp2MTc43oLP8npBKIXNd%2FIDIM1TNiaCdxUMTbzrQNFB3PDbyUshE7ERYjj8ljNO6OtT%2BrRFrX0xEbMFQmXU2gRHSWZjxN5nu%2FywJ5JBCUDYjWp0Zhi4vmnom%2B6HQ%2BkPLwBEAq%2Fp%2FbsMNnV05%2F8xi2givKEm0L66YEx9lcbcPSQc9tSqcvTNiYYXeTx9sTJRFDOjeC9%2FKe2VHvyg%2BK7wTk%2FOhsufXw8o1YpUuLjxOlhZU6hFG8PoDQuzjqZvpbHgSd1wrwM2IUzCAOSwY%2B9g%2FqscisRiZ%2BkgwiW6MMQ5oQ%2FIl88%2B6zomY3Q%3D%3D&v=v=rVLw2qQZ7fw,rVLw2qQZ7fw&_=0.9226505969318325",
  },
  {
    title: "Raining in Manila",
    artist: "Lola Amour",
    cover:
        "https://i.scdn.co/image/ab67616d0000b2738d518b4071e5a14c6b2f08ed",
    file: "https://mmnm.ummn.nu/api/v1/download?sig=VvCbIcfTwxnLWdrNrAHQ6VvTHc9c%2FchNi4KsVP4NyjpE3fkTO67lIjMqcDE2K9P6Ravh%2BDTgGAdVHRpaavZvr983vcyOENlrIW5IRyNpgxeaUyhQkdnO63TGOKRmMbwX0xW9g04IpzKx6WMxiVbOzIlbTwXoDtFwGTcB6ztyFnXoSPjdLWWtX%2FvZ6EGzhfxyaM6kpZRBoI68imFkDSl72iXoid6%2BFRZ03pD27akh0DU3KB4w1KFQpQkGYNkE7jGJ8EnfKKWFH7NIGBC%2F1Ro4Os1ghDZEE06Ld48mAcvGYkYY18F7YhN1kKu1ldEwUtQYkMXrI38qzMf0bgH%2Bb%2F%2BwYw%3D%3D&v=v=dglBgJSMr-E,dglBgJSMr-E&_=0.1590345962044709",
  },
  {
    title: "O Kay Ganda",
    artist: "Blaster",
    cover:
        "https://i.scdn.co/image/ab67616d0000b27341cb0f161c9dc5cee1efcf2a",
    file: "https://uuuu.ummn.nu/api/v1/download?sig=SnbQ8mlVRk1UWWLawfRG8Yy0%2Bxy77nRfkJaYHSzC262qxjYM0YXO2vqKfvnQ0RpiWjRrVc1QelmWp6AUJ6oMro8FBO7lbUpjQJbWs6r6a%2FrMFP63LHSfAGfirrxRs9tbu9MvTCDBwTXOyKQ8JzKy6FMkTb%2FDG3mKflwEfRp%2FDV62ntZkbl%2F74cv3VgY5dHoVzzKT7l8v0WaSfFkfYyokaHAAv4KsQzR6Qh7%2BLDXObMM%2BVNlJYqr6SrvDHsUPu3DucKEZSgnmvM0vRHedq1tpBsdHFcB7I26kndDBonHGp%2BIXanXAAwp4eMz1j6nILkdssrGjFtOpytAdrATcnVyWlQ%3D%3D&v=v=xnKcTv2kgLU,xnKcTv2kgLU&_=0.8147452329246142",
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


const changeSong = (direction) => {
  if(direction === "previous"){
    currentSongIndex--;
    switchTab(tabButtons[0]);
    if (currentSongIndex < 0 ){
      currentSongIndex = playList.length - 1
    }
  }else if(direction === "next"){
    currentSongIndex++;
    switchTab(tabButtons[0]);
    if (currentSongIndex > playList.length - 1 ){
       currentSongIndex = 0
    }
  }
  updateSong()
}

const updateSong = () => {
  song.src = playList[currentSongIndex].file;
  document.querySelector(".song-title").textContent =
    playList[currentSongIndex].title;
  document.querySelector(".artist-name").textContent =
    playList[currentSongIndex].artist;
  document.querySelector(".song-img").src = playList[currentSongIndex].cover;
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector(".selection_container");
const tabButtons = tabsList.querySelectorAll("a");
const tabPanels = document.querySelectorAll(".results-container > div");

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
  const lyricsSearchUrl = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${playList[currentSongIndex].title}&per_page=10&page=1`
  console.log(playList[currentSongIndex].title)
    const lyricsUrl = (id) => {
      return `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}`
    }
    const artistsSearchUrl = `https://spotify23.p.rapidapi.com/search/?q=${playList[currentSongIndex].title}&type=tracks&offset=0&limit=5&numberOfTopResults=5`
    const relatedArtistsUrl = (id) =>
        `https://spotify23.p.rapidapi.com/artist_related/?id=${id}`;
    const albumUrl = (id) =>
        `https://spotify23.p.rapidapi.com/artist_albums/?id=${id}&offset=0&limit=100`;
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
    showLoading(".lyrics")
    try {
      const data1 = await fetchData(lyricsSearchUrl, optionsGenius)
      const searchId = data1.hits[0].result.id
      console.log(data1.hits[0].result.id)
      console.log(searchId)
      const data2 = await fetchData(lyricsUrl(searchId), optionsGenius);
      updateDOM(".lyrics", data2.lyrics.lyrics.body.html);
    } catch (err) {
      console.log(err);
    }
  } else if (activePanelId === "#artists") {
    try {
      const data1 = await fetchData(artistsSearchUrl,optionsSpotify)
      const artistID = data1.tracks.items[0].data.artists.items[0].uri.replace("spotify:artist:", "")
      // console.log(artistID)
      // spotify:artist:7BxbcnOfx5r4d53UQl2I1s
      const data2 = await fetchData(relatedArtistsUrl(artistID), optionsSpotify);
      updateDOM("#artists", "", data2.artists, createArtistElement);
    } catch (err) {
      console.log(err);
    }
  } else if (activePanelId === "#album") {
    try {
      const data1 = await fetchData(artistsSearchUrl, optionsSpotify)
      const artistID = data1.tracks.items[0].data.artists.items[0].uri.replace("spotify:artist:", "")
      const data = await fetchData(albumUrl(artistID), optionsSpotify);
      updateDOM("#album", "", data.data.artist.discography.albums.items, createAlbumElement);
    } catch (error) {
      console.log("Error fetching album data", error);
    }
  }
};

const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  return response.json();
};

const updateDOM = (selector, innerHtml, data, createElementFn) => {
  const panel = document.querySelector(selector);
  panel.innerHTML = innerHtml;
  data.forEach((item, index) => {
    console.log(item)
    const element = createElementFn(item, index);
    panel.appendChild(element);
  });
};

const createArtistElement = (artist, index) => {
  const artistElement = document.createElement("div");
  artistElement.classList.add(`artist-${index}`);
  artistElement.classList.add(`card`);
  artistElement.innerHTML = `
    <img src="${artist.images[1].url}" alt="artist image"/>
    <p>${artist.name}</p>
    <p>${artist.followers.total} followers</p>
  `;
  return artistElement;
};

const createAlbumElement = (album, index) => {
  const albumElement = document.createElement("div");
  albumElement.classList.add(`album-${index + 1}`);
  albumElement.classList.add(`card`);
  albumElement.innerHTML = `
    <img src="${album.releases.items[0].coverArt.sources[0].url}"/>
    <p>${album.releases.items[0].name}</p>
    <p>Year: ${album.releases.items[0].date.year}</p>
    <p>Tracks: ${album.releases.items[0].tracks.totalCount}</p>`;
  return albumElement;
};




// const switchTab = async (newTab) => {
//   const currentActiveTab = tabsList.querySelector(".active");
//   if (currentActiveTab) {
//     currentActiveTab.classList.remove("active");
//   }
//   newTab.classList.add("active");
//   const activePanelId = newTab.getAttribute("href");
//   const activePanel = tabsContainer.querySelector(activePanelId);
//
//   tabPanels.forEach((panel) => {
//     panel.style.display = "none";
//   });
//   activePanel.style.display = "flex";
//
//   if (activePanelId === "#lyrics") {
//     try {
//       const response = await fetch(lyricsUrl, optionsGenius);
//       const data = await response.json();
//       console.log(data);
//       const lyricsElement = data.lyrics.lyrics.body.html;
//       const lyricsPanel = document.querySelector(".lyrics");
//       lyricsPanel.innerHTML = lyricsElement;
//     } catch (err) {
//       console.log(err);
//     }
//   } else if (activePanelId === "#artists") {
//     try {
//       const response = await fetch(relatedArtistsUrl, optionsSpotify);
//       const data = await response.json();
//       console.log(data);
//       const artists = data.artists;
//       const artistsPanel = document.querySelector("#artists");
//       artistsPanel.innerHTML = "";
//       artists.forEach((artist, index) => {
//         const artistElement = document.createElement("div");
//         artistElement.classList.add(`artist-${index}`);
//         artistElement.classList.add(`card`);
//         artistElement.innerHTML = `
//           <img src="${artist.images[1].url}" alt="artist image"/>
//           <p>${artist.name}</p>
//           <p>${artist.followers.total} followers</p>
//           `;
//         artistsPanel.appendChild(artistElement); // Append the artist element to the container
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   } else if (activePanelId === "#album") {
//     try {
//       const response = await fetch(albumUrl, optionsSpotify);
//       const data = await response.json();
//       const albums = data.data.artist.discography.albums.items;
//       console.log(albums);
//       const albumPanel = document.querySelector("#album");
//       albumPanel.innerHTML = "";
//       albums.forEach((album, index) => {
//         const albumElement = document.createElement("div");
//         albumElement.classList.add(`album-${index + 1}`);
//         albumElement.classList.add(`card`);
//         albumElement.innerHTML = `
//         <img alt="cover art of song." src="${album.releases.items[0].coverArt.sources[0].url}"/>
//         <p>${album.releases.items[0].name}</p>
//         <p>Year: ${album.releases.items[0].date.year}</p>
//         <p>Tracks: ${album.releases.items[0].tracks.totalCount}</p>`;
//         albumPanel.appendChild(albumElement);
//       });
//     } catch (error) {
//       console.log("Error fetching album data", error);
//     }
//   }
// };

const showLoading = (selector) => {
  // const lyrics = document.querySelector(".lyrics")
  // const albums = document.querySelector(".album-container")
  // const related = document.querySelector(".related-artists-container")
  // if (showState === true){
  //
  // }
  const parentElement = document.querySelector(selector)
  if(parentElement){
    while(parentElement.firstChild){
      parentElement.removeChild(parentElement.firstChild)
    }
  }

  const loader = document.createElement("span")
  loader.classList.add("loading-state")
  loader.innerHTML = `<span class="cssload-loader"><span class="cssload-loader-inner"></span></span>`
  document.querySelector(`${selector}`).appendChild(loader)
}

document.addEventListener("DOMContentLoaded", () => {
  switchTab(tabButtons[0]);
});