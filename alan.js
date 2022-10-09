const music = new Audio("audio/1.mp3");
/* music.play(); */

const songs = [
  {
    id: 1,
    songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/Alan Walker/1.jpg",
  },
  {
    id: 2,
    songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `Fake A Smile<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/16.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105, 105, 105, .0)";
  });
};

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.remove("bi-pause-fill");
    el.classList.add("bi-play-circle-fill");
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/Alan Walker/${index}.mp3`;
    poster_master_play.src = `img/Alan Walker/${index}.jpg`;
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName, poster } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .2)";
    makeAllplays();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
  });
});

Array.from(document.getElementsByClassName("play-icon")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    //console.log(index);
    music.src = `audio/Alan Walker/${index}.mp3`;
    poster_master_play.src = `img/Alan Walker/${index}.jpg`;
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName, poster } = elss;
      title.innerHTML = songName;
    });
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
progressBar = document.querySelector(".progress-bar");
progressArea = document.querySelector(".progress_area");

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  //console.log(min1);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressWidth = (music_curr / music_dur) * 100;
  progressBar.style.width = `${progressWidth}%`;

  progressArea.addEventListener("click", (x) => {
    let progressWidthval = progressArea.clientWidth;
    let clickedoffsetX = x.offsetX;
    let songDuration = music.duration;

    music.currentTime = (clickedoffsetX / progressWidthval) * songDuration;
  });
});

let vol_icon = document.getElementById("vol_icon");
let slid = document.getElementById("slid");

slid.addEventListener("change", () => {
  if (slid.value == 0) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.remove("fa-volume-low");
    vol_icon.classList.add("fa-volume-xmark");
  }
  if (slid.value > 0) {
    vol_icon.classList.remove("fa-volume-high");
    vol_icon.classList.add("fa-volume-low");
    vol_icon.classList.remove("fa-volume-xmark");
  }
  if (slid.value > 50) {
    vol_icon.classList.add("fa-volume-high");
    vol_icon.classList.remove("fa-volume-low");
    vol_icon.classList.remove("fa-volume-xmark");
  }
  let vol_v = slid.value;
  music.volume = vol_v / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `audio/Alan Walker/${index}.mp3`;
  poster_master_play.src = `img/Alan Walker/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .2)";
  makeAllplays();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `audio/Alan Walker/${index}.mp3`;
  poster_master_play.src = `img/Alan Walker/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .2)";
  makeAllplays();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
});

let shuffle = document.getElementsByClassName("bi shuffle")[0];
shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/Alan Walker/${index}.mp3`;
  poster_master_play.src = `img/Alan Walker/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .2)";
  makeAllplays();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
};

const repeat_music = () => {
  index;
  music.src = `audio/Alan Walker/${index}.mp3`;
  poster_master_play.src = `img/Alan Walker/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .2)";
  makeAllplays();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
};

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/Alan Walker/${index}.mp3`;
  poster_master_play.src = `img/Alan Walker/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .2)";
  makeAllplays();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeat_music();
      break;
    case "next":
      next_music();
      break;
    case "random":
      random_music();
      break;
  }
});

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

var $slid = $("#slid");
var $fill = $(".bar .fill");

function setBar() {
  $fill.css("width", $slid.val() + "%");
}

$slid.on("input", setBar);

setBar();
