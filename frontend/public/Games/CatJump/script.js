var cat = document.getElementById("Cat");
var cat_image = document.getElementById("cat_image");
var obstacle = document.getElementById("Obstacle");
var counter = 0;
var high_score = 0;
var alerted = false;

function remove_animation() {
  // @ts-ignore
  cat.classList.remove("animate");
  // @ts-ignore
  cat_image.src = "Sprites/standing.png";
}

function jump() {
  // @ts-ignore
  if (cat.classList.contains("animate")) return;

  // @ts-ignore
  cat_image.src = "./Sprites/jumping.png";

  // @ts-ignore
  cat.classList.add("animate");
  setTimeout(remove_animation, 500);
}

// Basically The Game Controller
// Checks the Score
var check = setInterval(function () {
  // @ts-ignore
  var cat_top = parseInt(window.getComputedStyle(cat).getPropertyValue("top"));
  var obstacle_left = parseInt(
    // @ts-ignore
    window.getComputedStyle(obstacle).getPropertyValue("left")
  );

  //Score Checking
  //Position directly under the cat and where the cat hasn't jumped
  if (obstacle_left < 36 && obstacle_left > 0 && cat_top >= 267) {
    // @ts-ignore
    obstacle.style.animation = "none";

    if (!alerted) {
      alert("Game Over! Your score was: " + Math.floor(counter / 10));
    }
    alerted = true;

    let new_score = counter / 10;

    if (new_score > high_score) {
      high_score = new_score;
    }

    counter = 0;

    // @ts-ignore
    obstacle.style.animation = "obstacle_movement 1s infinite linear";
  } else {
    counter++;
    // @ts-ignore
    document.getElementById("score").innerHTML = Math.floor(counter / 10);
    // @ts-ignore
    document.getElementById("high_score").innerHTML = Math.floor(high_score);
  }
}, 10);

function save_score()
{
  
}
