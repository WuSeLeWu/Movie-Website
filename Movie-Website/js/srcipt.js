const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll(".movie-item-img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.footer-container,.container .content-wrapper .featured-content p,.container .content-wrapper .featured-content .bgimg,.navbar,.container .content-wrapper,.navbar-container .navbar .profile-container .toggle,.sidebar,.movie-list-container h1,.sidebar i,.navbar-container .navbar .profile-container .toggle .toggle-ball,.toggle-ball,.movie-list-filter select,.movie-list-title,.navbar-container .navbar .menu-list a,.navbar-container"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
