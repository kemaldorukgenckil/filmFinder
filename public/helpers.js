// Populate dropdown menu with all the available genres


const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
    
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

// After liking a movie, clears the current movie from the screen and gets another random movie


const moviesWereLiked = document.getElementById('likedMovies');
let likedMoviesNames = [];
const likeMovie = () => {
  clearCurrentMovie();
  showRandomMovie();
    let movieIndex;
    if(!likedMoviesNames.includes(movieName) && !dislikedMoviesNames.includes(movieName)){
        likedMoviesNames.push(movieName);
        movieIndex = likedMoviesNames.indexOf(movieName);
        moviesWereLiked.innerHTML += `<li>${likedMoviesNames[movieIndex]}</li>`;
    }
     
   
    
  
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const moviesWereDisliked = document.getElementById('dislikedMovies');
let dislikedMoviesNames = [];
const dislikeMovie = () => {
    let movieIndex;
    clearCurrentMovie();
    showRandomMovie();
    if(!dislikedMoviesNames.includes(movieName)){
        dislikedMoviesNames.push(movieName);
        movieIndex = dislikedMoviesNames.indexOf(movieName);
        moviesWereDisliked.innerHTML += `<li>${dislikedMoviesNames[movieIndex]}</li>`;
    }
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');
  
    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h2');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

const createReleaseDate = (date) =>{
    const dateHolder = document.createElement('h2');
    dateHolder.setAttribute('id','dateTitle');
    dateHolder.innerHTML = date;
    return dateHolder;
}

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;
  
    return overviewParagraph;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Uses the DOM to create HTML to display the movie
let movieName = "";
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    


  
    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const overviewText = createMovieOverview(movieInfo.overview);
    const releaseDate = createReleaseDate(movieInfo.release_date);   
  
    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(overviewText);
    movieTextDiv.appendChild(releaseDate);
    
    movieName = movieInfo.title;
    
    showBtns();
    likeBtn.onclick=likeMovie;
    dislikeBtn.onclick=dislikeMovie;
    
};

  