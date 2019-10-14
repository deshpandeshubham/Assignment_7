//STEP 1
var favMovies = ["Avengers","Civil War","End Game","Age of Ultron","Batman"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
window.console.log(movies[0]);

//STEP 3
var movies = new Array(5);
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies.splice(2,0,"Captain America");
window.console.log(movies.length);

//STEP 4
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
delete movies[0];
window.console.log(movies);

//STEP 5
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
for(var i=0;i<movies.length;i++) {
    window.console.log("Movie "+ i + " : " + movies[i]);
}

//STEP 6
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
var index;
for(index in movies) {
    window.console.log("Movie "+ index + " : " + movies[index]);
}

//STEP 7
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
movies.sort();
for(var i=0;i<movies.length;i++) {
    window.console.log("Movie "+ i + " : " + movies[i]);
}

//STEP 8
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
var leastFavMovies = movies.splice(1,2);
window.console.log("Movies I like:\n\n");
for(var i=0;i<movies.length;i++) {
    window.console.log("Movie "+ i + " : " + movies[i]);
}
window.console.log("\n\n\n");
window.console.log("Movies I regret watching:\n\n");
for(var i=0;i<leastFavMovies.length;i++) {
    window.console.log("Movie "+ i + " : " + leastFavMovies[i]);
}

//STEP 9
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
var leastFavMovies = movies.splice(1,2);
movies = movies.concat(leastFavMovies);
movies.sort();
window.console.log(movies.reverse());

//STEP 10
var movies = [];
movies[0] = "Iron Man";
movies[1] = "Batman";
movies[2] = "Superman";
movies[3] = "SpiderMan";
movies[4] = "Ant-Man";
movies[5] = "Battleship";
movies[6] = "Avtaar";
var leastFavMovies = movies.splice(1,2);
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies.slice(-1));

