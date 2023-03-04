const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);



// Faq section 
jQuery(document).ready(function(){
	jQuery('.titleWrapper').click(function(){
		var toggle = jQuery(this).next('div#descwrapper');
		jQuery(toggle).slideToggle("slow");
	});
    jQuery('.inactive').click(function(){
		jQuery(this).toggleClass('inactive active');
	});
});
