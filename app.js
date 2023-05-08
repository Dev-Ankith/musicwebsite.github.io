const music = new Audio("audio/1.mp3");
/* music.play(); */

const songs = [
  {
    id: 1,
    songName: `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `Faded<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `On & On<br>
        <div class="subtitle">Daniel Levi</div>`,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `Mortals<br>
        <div class="subtitle">NCS</div>`,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `Arcade<br>
        <div class="subtitle">Duncan Laurence</div>`,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `Closer<br>
        <div class="subtitle">The Chainsmokers</div>`,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `Dusk Till Dawn<br>
        <div class="subtitle">Zayn, Sia</div>`,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `Hymn for the Weekend<br>
        <div class="subtitle">Coldplay</div>`,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `VILLAIN<br>
        <div class="subtitle">K/DA</div>`,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `Let Me Down Slowly<br>
        <div class="subtitle">Alec Benjamin</div>`,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `Middle of the Night<br>
        <div class="subtitle">Elley Duhé</div>`,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `Play Date<br>
        <div class="subtitle">Melanie Martinez</div>`,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `Rockstar<br>
        <div class="subtitle">Post Malone</div>`,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `Royalty ft. Neoni<br>
        <div class="subtitle">Egzod & Maestro Chives</div>`,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `Señorita<br>
        <div class="subtitle">Camila Cabello, Shawn Mendes</div>`,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `Fake A Smile<br>
        <div class="subtitle">Alan Walker</div>`,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `In The Name of Love<br>
        <div class="subtitle">Martin Garrix, Bebe Rexha</div>`,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `So Far Away<br>
        <div class="subtitle">Martin Garrix, David Guetta</div>`,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `There For You<br>
        <div class="subtitle">Martin Garrix</div>`,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `Why Do I?<br>
        <div class="subtitle">NCS, Unknown Brains</div>`,
    poster: "img/20.jpg",
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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
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
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
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
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
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
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
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
    case "Next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "Repeat";
      break;

    case "Repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "Random";
      break;

    case "Random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "Next";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
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
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
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
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
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
