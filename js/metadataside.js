const showPanel = (activeClass) => {
  const panels = document.querySelectorAll(".results-container > div");
  panels.forEach((panel) => {
    panel.style.display = "none";
  });
  const panel = document.querySelector(`.results-container .${activeClass}`);
  panel.style.display = "block";
};

const slctn_btns = document.querySelectorAll(".selection_container button");

slctn_btns.forEach((button) => {
  button.addEventListener("click", () => {
    slctn_btns.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    if (button.classList.contains("active")) {
      showPanel("lyrics-container");
    } else if (button.id === "albumsBtn") {
      showPanel("album-container");
    } else {
      showPanel("related-artists-container");
      fetchRelatedArtists();
    }
  });
});

const fetchRelatedArtists = async () => {
  const artistId = "7BxbcnOfx5r4d53UQl2I1s";
  const url = "https://spotify23.p.rapidapi.com/artists/?ids=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf2068c6e5mshefeba8a5afa46a0p103083jsnbab70bd0d38b",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    const errorText = "Error fetching related artists";
    // updateRelatedArtists(errorText);
  }
};

const hideLoading = () => {
  const loadingState = document.querySelector(".loading-state");
  const lyricsContainer = document.querySelector(".lyrics");
  loadingState.style.display = "none";
  lyricsContainer.style.display = "block";
};

const updateLyrics = (lyrics) => {
  const lyricsContainer = document.querySelector(".results-container .lyrics");
  lyricsContainer.innerHTML = lyrics;
};

const apiCall = async () => {
  const songId = "8505071";
  const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${songId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf2068c6e5mshefeba8a5afa46a0p103083jsnbab70bd0d38b",
      "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
    },
  };

  try {
    // showLoading();
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    const lyrics = data.lyrics.lyrics.body.html;
    console.log(lyrics);

    if (lyrics) {
      updateLyrics(lyrics);
      hideLoading();
    } else {
      console.log("no lyrics found");
      const errorText = "Lyrics not found";
      updateLyrics(errorText);
    }
  } catch (err) {
    console.log(err);
    const errorText = "Error fetching lyrics";
    updateLyrics(errorText);
  }
};

window.onload = () => {
  apiCall();
};

const updateRelatedArtists = (artists) => {
  const relatedArtistsContainer = document.querySelector(
    ".results-container .related-artists-container"
  );
  const img = document.querySelector(".related-artists-container img");
};
