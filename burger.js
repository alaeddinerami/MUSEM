const burger = document.querySelector('.burger');
const header = document.querySelector('.header-section');

// burger.onclick = function() {
//   navBar = document.querySelector("#navbar");
//   navBar.classList.toggle('active');
// }



burger.addEventListener("click",()=>{
	header.classList.toggle("nav-open")
})
