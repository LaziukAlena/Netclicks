const cardWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


const films = [
  {
    id: 0,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },

  {
    id: 1,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },

  {
    id: 2,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },

  {
    id: 3,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },

  {
    id: 4,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },

  {
    id: 5,
    title: "Марсианин",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: '/film.html',
    image: "./images/film.png",
  },
];

const render = (array) => {
  cardWrapper.innerHTML = "";
  array.forEach((item) => {
    cardWrapper.insertAdjacentHTML("beforeend",`
        <a href="${item.link}" class="content-cards__items">
            <div class="content-cards__items--img">
                <img src="./images/film.png" alt="film" />
            </div>
            <div class="content-cards__items--title">
                <h5>${item.title}</h5>
                <span>${item.original}</span>
            </div>
            <p class="content-cards__items--description">
                ${item.category}
            </p>
            <p class="content-cards__items--rating">
                ${item.rating}
            </p>
        </a>        
    `)
  });
};

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)))

   
})

render(films);
