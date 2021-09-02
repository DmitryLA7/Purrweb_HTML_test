//Burger menu
let burgerEl = document.querySelector('.burger')
let menuNav = document.querySelector('.nav__body')
if (burgerEl){
	burgerEl.addEventListener('click', function (event) {
		document.body.classList.toggle('lock')
		this.classList.toggle('active')
		menuNav.classList.toggle('active')
	})
}
//Smooth scroll
let scrollElem = document.querySelector('.anchor[data-goto]')

if (scrollElem) {
	scrollElem.addEventListener('click', scrollToFunc)
	function scrollToFunc(e) {
		let scrollToEl = e.target
		if (scrollToEl.dataset.goto && document.querySelector(scrollToEl.dataset.goto)){
			let gotoElem = document.querySelector(scrollToEl.dataset.goto)
			let gotoElemValue = gotoElem.getBoundingClientRect().top + pageYOffset + document.querySelector('.header__nav').offsetHeight - 80
		
		window.scrollTo({
			top : gotoElemValue,
			behavior: 'smooth'
		})

		e.preventDefault()
		}
	}
}
//Slider scripts
let slideItems = document.querySelectorAll('.header__slider .slider__line .slider__columns')
let sliderLine = document.querySelector('.slider__line')
let width = document.querySelector('.header__slider').offsetWidth

let slideInd = 0
let slides = document.querySelectorAll('.slider__columns')
let switchBtn = document.querySelectorAll('.slider__switch')

function currentSlide(n) {
    showSlide(slideInd = n)
    return slideInd
}

function initSlider(){
	width = document.querySelector('.header__slider').offsetWidth
	sliderLine.style.width = width * slideItems.length + 'px'
	slideItems.forEach(item => {
		item.style.width = width + 'px'
		item.style.height = 'auto'
	})
	sliderRoll(slideInd)
	return width
}

window.addEventListener('resize', initSlider)
initSlider()

//Slider touch


function showSlide(n){
	let i

	if( n > slides.length - 1){
		slideInd = 0
	}
	if( n < 0){
		slideInd = slides.length
	}
	for (i = 0; i < switchBtn.length; i++){
		switchBtn[i].className = switchBtn[i].className.replace(' active', '')
	}
	switchBtn[slideInd - 0].className += ' active';

	sliderRoll(n)
}

function sliderRoll(n){
	sliderLine.style.transform = 'translate(-' + n * width + 'px)'
}
//Player scripts

let playVideo = document.querySelector('.btn__play')
let pauseVideo = document.querySelector('.btn__pause')

let video
let display = document.querySelector('.spotlights__video')
let overlay = document.querySelector('.video__overlay')
let videoText = document.querySelector('.video__text')

video = document.querySelector('.video_player')

playVideo.addEventListener('click', function(){
	video.play()
	this.classList.remove('active')
	overlay.classList.remove('active')
	videoText.classList.remove('active')
	pauseVideo.classList.add('active')
	video.classList.add('active')
})
pauseVideo.addEventListener('click', function(){
	video.pause()
	this.classList.remove('active')
	playVideo.classList.add('active')
	overlay.classList.add('active')
	videoText.classList.add('active')
	video.classList.remove('active')
})