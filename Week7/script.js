let searchIcon = document.querySelector(".search-icon");
searchIcon.addEventListener("click", function () {
  document.querySelector(".search-input").classList.toggle("active");
});

let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
  document.querySelector(".center").classList.toggle("show-menu");
  document.querySelector(".menu").classList.toggle("active");
});
