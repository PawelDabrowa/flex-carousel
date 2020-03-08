$('.partners-carousel').slick({
	centerMode: true,
	centerPadding: '32px',
	slidesToShow: 5,
	slidesToScroll: 1,
	slide: '.partners',
	nextArrow: '<i class="arrow right">',
	// prevArrow: '<i class="arrow left">',
	prevArrow: '',
	infinite: true,
	responsive: [{
			breakpoint: 1224,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 768,
			settings: {
				centerMode: true,
				centerPadding: '32px',
				slidesToShow: 1,
				slidesToScroll: 1,
				nextArrow: "",
			}
		}
	]
});