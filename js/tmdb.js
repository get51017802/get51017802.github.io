 const key = '3e8a7288aeea3477d4fb0ea0ad132d1a'; //sesuai API key anda
 const endpoint_url = 'https://api.themoviedb.org/3/';

function getListmovie(services, sectiontitle) {
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {

    var movieHTML ="";
    data.results.forEach(function(movie) {
      movieHTML += `
      <div class ="col m3 s6">
        <div class = "card">
        <a href="./movie.html?id=${movie.id}">
        <div class = "card-image waves-effect waves-block waves-light">
        <image src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
        </div>
        </a>
        <div class="card-content text-center">
        <strong>${movie.title}</strong>
         </div>
        </div>
      </div>
        `;
      });
      document.getElementById("movie_list").innerHTML = moviesHTML;
      document.getElementById("section_title").innerHTML = sectiontitle;
    })
    .cath(error);
  }

  function getMovie() {

}
