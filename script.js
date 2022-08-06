
const API_KEY ='api_key=d098ea827529c13f4c8053f69c7d3553';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+ API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(response => response.json()).then(data => {
        
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path,overview} = movie;
        const movieTile = document.createElement('div');
        movieTile.classList.add('movie');
        movieTile.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">

            <div class="movieInfo">
                <h3>${title}</h3>
                
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
            `
        main.appendChild(movieTile);
    });
}

{/* <span class="genre">${genre.name}</span> */}