let movies = [
  {
    name: "The Shawshank Redemption",
    image: "./images/1.jpg",
    year: 1994,
    rating: 9.3,
    link: "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1",
  },

  {
    name: "The Godfather",
    image: "./images/2.jpg",
    year: 1972,
    rating: 9.2,
    link: "https://www.imdb.com/title/tt0068646/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_2",
  },

  {
    name: "The Godfather: Part II",
    image: "./images/3.jpg",
    year: 1974,
    rating: 9.0,
    link: "https://www.imdb.com/title/tt0071562/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_3",
  },

  {
    name: "The Dark Knight",
    image: "./images/4.jpg",
    year: 2008,
    rating: 9.0,
    link: "https://www.imdb.com/title/tt0468569/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_4",
  },

  {
    name: "12 Angry Men",
    image: "./images/5.png",
    year: 1957,
    rating: 9.0,
    link: "https://www.imdb.com/title/tt0050083/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_5",
  },

  {
    name: "Schindler's List",
    image: "./images/6.jpg",
    year: 1993,
    rating: 8.9,
    link: "https://www.imdb.com/title/tt0108052/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_6",
  },

  {
    name: "The Lord of the Rings: The Return of the King",
    image: "./images/7.jpg",
    year: 2003,
    rating: 8.9,
    link: "https://www.imdb.com/title/tt0167260/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_7",
  },

  {
    name: "Pulp Fiction",
    image: "./images/8.jpg",
    year: 1994,
    rating: 8.9,
    link: "https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8",
  },

  {
    name: "The Good, The Bad, The Ugly",
    image: "./images/9.jpg",
    year: 1966,
    rating: 8.8,
    link: "https://www.imdb.com/title/tt0060196/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_9",
  },

  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    image: "./images/10.jpg",
    year: 2001,
    rating: 8.8,
    link: "https://www.imdb.com/title/tt0120737/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=YTA3MKHFFGM06C08AYJJ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_10",
  },
];

let index = 0;
let slideCount = movies.length;
let interval;

let settings = {
  duration: "2000",
  random: false,
};

// showSlide(index);
init(settings);

let leftArrow = document.querySelector(".fa-caret-left");
let rightArrow = document.querySelector(".fa-caret-right");
let arrows = document.querySelectorAll(".fas");

// add Event Listener

leftArrow.addEventListener("click", () => {
  index--;
  showSlide(index);
  console.log(index);
});

rightArrow.addEventListener("click", () => {
  index++;
  showSlide(index);
  console.log(index);
});

arrows.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });
});

arrows.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    init(settings);
  });
});

// functions

function init(settings) {
  let previous;
  interval = setInterval(function () {
    if (settings.random) {
      // aynı sayıyı 2 kere üst üste random olarak üretip slaytı 4 saniye bekletmemek için do-while kullanarak random gelen sayı öncekine eşitse tekrar sayı üret komutu vermiş olduk.
      do {
        index = Math.floor(Math.random() * slideCount);
      } while (index == previous);
      prev = index;
    } else {
      if (slideCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;

  if (i < 0) {
    index = slideCount - 1;
  }

  if (i >= slideCount) {
    index = 0;
  }

  document.querySelector(".nav-title").textContent = `${index + 1}-) ${
    movies[index].name
  } | ${movies[index].year} | ${movies[index].rating.toFixed(1)}`;

  document
    .querySelector(".section-image")
    .setAttribute("src", movies[index].image);

  document.querySelector(".nav-link").setAttribute("href", movies[index].link);
}
