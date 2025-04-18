window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


const hamburger_button = document.querySelector('.dropdown-btn i');
const dropdown_menu = document.querySelector('.dropdown-ops');

hamburger_button.addEventListener('click' , ()=>{
    dropdown_menu.classList.toggle('visible-dropdown');
    //Togle the icon class
    if (dropdown_menu.classList.contains('visible-dropdown')){
        hamburger_button.classList.remove('fa-bars');
        hamburger_button.classList.add('fa-xmark')
    } else{
        hamburger_button.classList.remove('fa-xmark');
        hamburger_button.classList.add('fa-bars')
    }
});

const math_calc = window.document.querySelector('#math-calc');

math_calc.addEventListener('click' , ()=>{
  window.location.href = '../maths-calculator/index.html';
})
