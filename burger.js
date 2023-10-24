burger = document.querySelector('.burger');
burger.onclick = function() {
  navBar = document.querySelector("#navbar");
  navBar.classList.toggle('active');
}