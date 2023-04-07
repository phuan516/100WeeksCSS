document.querySelector(".profile").addEventListener("click", function () {
  document.querySelector(".detail").classList.add("active");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".detail").classList.remove("active");
});
