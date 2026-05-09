const smallMovies = [];
const mediumMovies = [];
const bigMovies = [];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    smallMovies.push(movies[i]);
  } else if (movies[i].durationInMinutes < 200) {
    mediumMovies.push(movies[i]);
  } else {
    bigMovies.push(movies[i]);
  }
}

console.log(smallMovies);
console.log(mediumMovies);
console.log(bigMovies);
