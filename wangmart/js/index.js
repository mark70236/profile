$(function() {

    var mainSlider = new Swiper(".kv-slider", {
		slidesPerView: "auto",
		centeredSlides: true,
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".kv-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".kv-button-next",
			prevEl: ".kv-button-prev",
		},
	});


    var bestSlider = new Swiper(".best-sellers-slider", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: "auto",
				centeredSlides: true,
			},
			575: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".best-sellers-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".best-sellers-button-next",
			prevEl: ".best-sellers-button-prev",
		},
	});

	var gourmetSlider = new Swiper(".gourmet-slider1", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: "auto",
				centeredSlides: true,
			},
			575: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".swiper-pagination1",
			clickable: true,
		},
		navigation: {
			nextEl: ".diary-button-next1",
			prevEl: ".diary-button-prev1",
		},
		observer: true,
		observeParents: true,
	});

	var gourmetSlider2 = new Swiper(".gourmet-slider2", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: "auto",
				centeredSlides: true,
			},
			575: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		navigation: {
			nextEl: ".diary-button-next2",
			prevEl: ".diary-button-prev2",
		},
		observer: true,
		observeParents: true,
	});

	var gourmetSlider3 = new Swiper(".gourmet-slider3", {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			0: {
				slidesPerView: "auto",
				centeredSlides: true,
			},
			575: {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".swiper-pagination3",
			clickable: true,
		},
		navigation: {
			nextEl: ".diary-button-next3",
			prevEl: ".diary-button-prev3",
		},
		observer: true,
		observeParents: true,
	});


})