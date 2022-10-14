let hero = document.getElementById('hero-slides');
let menu = document.getElementById('menu');
let slides = document.getElementById('slides');
let dribbble = document.getElementById('dribbble');
let next = [ 'next', 'next-catch' ].map(n => document.getElementById(n));
let prev = [ 'prev', 'prev-catch' ].map(n => document.getElementById(n));
let slideChildren = slides.children;
let slideCount = slides.children.length;
let currentlyDemoing = false;
let currentPage = 0;
let slidesPerPage = () => window.innerWidth > 1700 ? 4 : window.innerWidth > 1200 ? 3 : 2;
let maxPageCount = () => slideCount / slidesPerPage() - 1;
let more = [ 'more', 'more' ].map(n => document.getElementById(n));



function goToPage(pageNumber = 0) {
	currentPage = Math.min(maxPageCount(), Math.max(0, pageNumber));
	console.log(currentPage);
	hero.style.setProperty('--page', currentPage);
}

function sleep(time) {
	return new Promise(res => setTimeout(res, time));
}

function hoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.add('hover');
}

function unhoverSlide(index) {
	index in slideChildren &&
		slideChildren[index].classList.remove('hover');
}

async function demo() {
	if(currentlyDemoing) {
		return;
	}
	currentlyDemoing = true;
	if(currentPage !== 0) {
		goToPage(0);
		await sleep(800);
	}
	let slides = slidesPerPage();
	let pageSeq_ = { 2: [ 1, 2, 1 ], 3: [ 1, 2, 1 / 3 ], 4: [ 1, 1, 0 ] };
	let pageSeq = pageSeq_[slides] || pageSeq_[4];
	let slideSeq_ = { 2: [ 2, 4, 3 ], 3: [ 3, 6, 2 ], 4: [ 3, 6, 2 ] };
	let slideSeq = slideSeq_[slides] || slideSeq_[2];
	await sleep(300);
	goToPage(pageSeq[0]);
	await sleep(500);
	hoverSlide(slideSeq[0]);
	await sleep(1200);
	goToPage(pageSeq[1]);
	dribbble.classList.add('hover');
	unhoverSlide(slideSeq[0]);
	await sleep(500);
	hoverSlide(slideSeq[1]);
	await sleep(1200);
	goToPage(pageSeq[2]);
	unhoverSlide(slideSeq[1]);
	await sleep(300);
	hoverSlide(slideSeq[2]);
	await sleep(1600);
	goToPage(0);
	unhoverSlide(slideSeq[2]);
	dribbble.classList.remove('hover');
	currentlyDemoing = false;
}

next.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage + 1)));
prev.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)));
menu.addEventListener('click', demo);
more.forEach(n => n.addEventListener('click', () => !currentlyDemoing && goToPage(currentPage - 1)))


sleep(100).then(demo);

// window.addEventListener('resize', () => {
	// console.log(document.body.style.getPropertyValue('--slide-per-page'));
// });

/* requestAnimationFrame */

// button for splash page 
let btn = document.querySelector('button');
let .splash = document.querySelector('div');

btn.addEventListener('click', ()=>{
  if(div.style.display === 'none'){
    div.style.display = 'block';
    
  }
  else { div.style.display = 'none';}
})

// A new functioning button i figured out 
function closeHero(){
	var x = document.getElementById("getSplash");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none";
	}
}
//adding sweetAlerts 

// Footer 
$(document).ready(function($) {

  $(window).on('scroll', function() {

    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').hide();
    } else {
      $('body').removeClass('tight');
      $('.arrow').show();
    }
  });

  //BACK TO PRESENTATION MODE
  $("html").on("click", "body.tight .wrapper", function() {
    $('html, body').animate({
      scrollTop: $('.wrapper').outerHeight() - $(window).height()
    }, 500);
  });

});

$('.arrow').click(function(){
   $("html").animate({ scrollTop: $('html').prop("scrollHeight")}, 1200);
});

//footer 
$(function() {
  $('.footer-links-holder h3').click(function () {
    $(this).parent().toggleClass('active');
  });
});
