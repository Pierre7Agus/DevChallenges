const show = document.getElementById('show');
const nav = document.querySelector(".header_nav_contain");
const closer = document.getElementById('closer');



show.addEventListener('click',()=>{
	nav.style.left="0px";
	nav.style.transition="all 1s ease";
	document.body.style.overflow='hidden';
});

closer.addEventListener('click',()=>{
	nav.style.left="-700px";
	nav.style.transition="all 3s ease";
	document.body.style.overflow='visible';
});
