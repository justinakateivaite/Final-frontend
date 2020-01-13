(function () {
    const searchButton = document.querySelector('#search');
    searchButton.addEventListener('click', loadMovie);
})();

function loadMovie() {
    const searchInput = document.querySelector('#searchInput');
    const movieTitle = searchInput.value;

    const url = "https://www.omdbapi.com/?apikey=e4db3ced&t=" + movieTitle;
    const oReq = new XMLHttpRequest();
    oReq.open("GET", url);
    oReq.responseType = "json";
    oReq.onload = function(e) {
        const movie = oReq.response;
        if (movie.Response == "False") {
            const errorMessageElement = document.querySelector('#errorMessage')
            errorMessageElement.innerHTML = "Filmas nerastas!";

            const errorSection = document.querySelector('#error');
            errorSection.classList.add("d-block");
            errorSection.classList.remove("d-none");

            const resultsSection = document.querySelector('#results');
            resultsSection.classList.add("d-none");
            resultsSection.classList.remove("d-block");
        } else {
            const errorSection = document.querySelector('#error');
            errorSection.classList.add("d-none");
            errorSection.classList.remove("d-block");
            displayMovieResults(movie);
        }
    }
    oReq.send();

    }



function displayMovieResults(movie) {
    const resultsSection = document.querySelector('#results');
    resultsSection.classList.add("d-block");
    resultsSection.classList.remove("d-none");

    const movieTitle = document.querySelector("#movieTitle");
    movieTitle.innerHTML = movie.Title;

    const movieDescription = document.querySelector("#movieDescription");
    movieDescription.innerHTML = movie.Plot;

    const movieRating = document.querySelector("#movieRating");
    movieRating.innerHTML = movie.imdbRating;

    const movieDuration = document.querySelector("#movieDuration");
    movieDuration.innerHTML = movie.Runtime;

    const movieDirector = document.querySelector("#movieDirector");
    movieDirector.innerHTML = movie.Director;

}




