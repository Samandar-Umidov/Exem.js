let elForm = document.querySelector(".movies__form");
let elInputSearch = document.querySelector(".movies__search");
let elFromInput = document.querySelector(".movies__from");
let elToInput = document.querySelector(".movies__to");
let elList = document.querySelector(".movies__list")

function renderMovies(array) {
  elList.innerHTML = "";
  array.forEach(function(item, index, array) {

      let liElement = document.createElement("li");
      liElement.classList.add("movies__item");

      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", `https://i3.ytimg.com/vi/${item.ytid}/maxresdefault.jpg`);
      // https://i3.ytimg.com/vi/4hZi5QaMBFc/maxresdefault.jpg
      imgElement.setAttribute("alt", item.fulltitle);
      imgElement.classList.add("movies__img");

      let headingElement = document.createElement("h1");
      headingElement.classList.add("movies__heading");
      headingElement.textContent = item.Title;


      let fullTitleElement = document.createElement("p");
      fullTitleElement.classList.add("movies__fulltitle");
      fullTitleElement.textContent = ` ${item.summary}`;


      let yearElement = document.createElement("p");
      yearElement.classList.add("movies__year");
      yearElement.textContent = `Movie year: ${item.movie_year}`;


      let categoryElement = document.createElement("p");
      categoryElement.classList.add("movies__categories");
      categoryElement.textContent = `Categories: ${item.Categories}`;


      let langElement = document.createElement("p");
      langElement.classList.add("movies__language");
      langElement.textContent = `Movie language: ${item.language}`;


      let linkElement = document.createElement('a')
      linkElement.classList.add("movies__link");
      linkElement.textContent = 'Watch movie'
      linkElement.setAttribute('target', "blank");
      linkElement.setAttribute('href', `https://www.imdb.com/title/${item.imdb_id}`);

      let ratingElement = document.createElement("strong");
      ratingElement.classList.add("movies__rating");
      ratingElement.textContent = `Movie rating: ${item.imdb_rating}`;


      liElement.append(imgElement, headingElement, fullTitleElement, yearElement, categoryElement, langElement, ratingElement, linkElement);
      elList.appendChild(liElement);
  });
};

let slicedmovies = movies.slice(1, 100);
renderMovies(slicedmovies);

function filterMovies(movies) {
  const searchValue = elInputSearch.value.trim().toLowerCase()
  const searchFrom = Number(elFromInput.value) || 0
  const searchTo= Number(elToInput.value) || 0

  if(searchValue) {
    movies = movies.filter(function(item) {
      return item.fulltitle.toLowerCase().includes(searchValue)
    })
  }
  if(searchTo && searchTo > searchFrom) {
    movies = movies.filter(function(item) {
      return item.movie_year <= searchTo && item.movie_year >= searchFrom
    })
  }

  renderMovies(movies)
}

elInputSearch.addEventListener("keyup", function(evt) {
 evt.preventDefault();
 
 filterMovies(slicedmovies)
});

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  
  filterMovies(slicedmovies)
});  