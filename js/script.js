

$(function() {
	function controlme (){
		if (typeof(Swiper)=='function' && typeof($('.popup-case-photos').magnificPopup)=='function'){
			startme();
		}else {
			setTimeout(controlme,500);
		}
	}
	setTimeout(controlme,500);


	function startme (){
		let ar = $('#second_block .swiper');
		let arSwiper = {};
		ar.each(function(i) {
			let id = $(this).parent().attr("id");

			arSwiper[id]={};
			arSwiper[id].gal = new Swiper("#"+id+" .swiper", {

			  // Optional parameters
			  slidesPerView: 3,
			  spaceBetween: 20,
			  preloadImages: false,
			  watchSlidesProgress: true,
				  
			  lazy: {
				  enabled:true,
				  //loadPrevNext:true,
				  //checkInView:true,
				  //loadPrevNextAmount:3,
			  },

			  breakpoints: {
				320: {
				  slidesPerView: 2,
				  spaceBetween: 10,
				  grid: {
					rows: 3,
				  },
				},
				768: {
				  loop: true,
				  slidesPerView: 2,
				},
				1139: {
				  loop: true,
				  slidesPerView: 3,
				},
			  },

				// Navigation arrows
				navigation: {
				  nextEl: "#"+id+' .nav-right',
				  prevEl: "#"+id+' .nav-left',
				},

			  // Pagination
			  pagination: {
				el: "#"+id+' .swiper-pagination',
				clickable: true,
				dynamicBullets: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + '</span>';
			  }
			}

			});


			arSwiper[id].nav = new Swiper("#popup_"+id+' .popup-swiper', {
			  // Optional parameters
			  slidesPerView: 1,
			  spaceBetween: 20,
			  autoHeight:true,
			  lazy: {
				  enabled:true,
				  //loadPrevNext:true,
				  //checkInView:true,
				  //loadPrevNextAmount:3,
			  },

				// Navigation arrows
				navigation: {
				  nextEl: "#"+'popup_'+id+' .popup-right',
				  prevEl: "#"+'popup_'+id+' .popup-left',
				},

			});

			// POPUP 

			let portfolioCases = document.querySelectorAll("#"+id+' .case');
			let popup = document.querySelector("#popup_"+id+' .popup');
			let closePopup = document.querySelectorAll("#popup_"+id+' .close-popup-btn');


			for (i=0; i < portfolioCases.length; i++) {
			  portfolioCase = portfolioCases[i];
			  portfolioCase.addEventListener('click', function(e) {
				e.preventDefault();
				//updatepopup(this);
				let fid = $("#second_block .tabs .active a").attr("href");
				let popup = document.querySelector("#popup_"+fid.substr(1)+' .popup');
				popup.classList.add('open');
				body.classList.add('lock');
				if (!arSwiper[fid.substr(1)].gal.loopedSlides) arSwiper[fid.substr(1)].gal.loopedSlides = 0;
				let f = arSwiper[fid.substr(1)].gal.clickedIndex - arSwiper[fid.substr(1)].gal.loopedSlides;
				arSwiper[fid.substr(1)].nav.slideTo(f);
				$(document).on('keydown', function(e){
					if(e.which == 27){
						$(closePopup).click()
					}
				});

			  })
			}

			 for (i=0; i < closePopup.length; i++) {
			  closePopupBtn = closePopup[i];
			  closePopupBtn.addEventListener('click', function(e) {
				e.preventDefault();
				let fid = $("#second_block .tabs .active a").attr("href");
				let popup = document.querySelector("#popup_"+fid.substr(1)+' .popup');
				popup.classList.remove('open');
				body.classList.remove('lock');
				if (!arSwiper[fid.substr(1)].nav.loopedSlides) arSwiper[fid.substr(1)].nav.loopedSlides = 0;
				let f = arSwiper[fid.substr(1)].nav.activeIndex - arSwiper[fid.substr(1)].nav.loopedSlides;
				//arSwiper[fid.substr(1)].gal.slideTo(f);
				$(document).off('keydown');

			  })
			}

		});


		let ar1 = $('#second_block1 .swiper');
		ar1.each(function(i) {
			let id = $(this).parent().attr("id");
			console.log(id);

			arSwiper[id]={};
			arSwiper[id].gal = new Swiper("#"+id+" .swiper", {

			  // Optional parameters
			  slidesPerView: 3,
			  spaceBetween: 20,
			  preloadImages: false,
			  watchSlidesProgress: true,
			  loop:false,
				  
			  lazy: {
				  enabled:true,
				  //loadPrevNext:true,
				  checkInView:true,
				  loadPrevNextAmount:3,
			  },

			  breakpoints: {
				320: {
				  slidesPerView: 2,
				  spaceBetween: 10,
				  grid: {
					rows: 3,
				  },
				},
				768: {
				  loop: false,
				  slidesPerView: 2,
				},
				1139: {
				  loop: false,
				  slidesPerView: 3,
				},
			  },

				// Navigation arrows
				navigation: {
				  nextEl: "#"+id+' .nav-right',
				  prevEl: "#"+id+' .nav-left',
				},

			  // Pagination
			  pagination: {
				el: "#"+id+' .swiper-pagination',
				clickable: true,
				dynamicBullets: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + '</span>';
			  }
			}

			});


			arSwiper[id].nav = new Swiper("#popup_"+id+' .popup-swiper', {
			  // Optional parameters
			  slidesPerView: 1,
			  spaceBetween: 20,
			  autoHeight:true,
			  lazy: {
				  enabled:true,
				  //loadPrevNext:true,
				  //checkInView:true,
				  //loadPrevNextAmount:3,
			  },

				// Navigation arrows
				navigation: {
				  nextEl: "#"+'popup_'+id+' .popup-right',
				  prevEl: "#"+'popup_'+id+' .popup-left',
				},

			});

			// POPUP 

			let portfolioCases = document.querySelectorAll("#"+id+' .case');
			let popup = document.querySelector("#popup_"+id+' .popup');
			let closePopup = document.querySelectorAll("#popup_"+id+' .close-popup-btn');


			for (i=0; i < portfolioCases.length; i++) {
			  portfolioCase = portfolioCases[i];
			  portfolioCase.addEventListener('click', function(e) {
				e.preventDefault();
				//updatepopup(this);
				let fid = $(this).parents(".second_block1").attr("attrid");
				let popup = document.querySelector("#popup_"+fid+' .popup');
				popup.classList.add('open');
				body.classList.add('lock');
				if (!arSwiper[fid].gal.loopedSlides) arSwiper[fid].gal.loopedSlides = 0;
				let f = arSwiper[fid].gal.clickedIndex - arSwiper[fid].gal.loopedSlides;
				arSwiper[fid].nav.slideTo(f);
				$(document).on('keydown', function(e){
					if(e.which == 27){
						$(closePopup).click()
					}
				});

			  })
			}

			 for (i=0; i < closePopup.length; i++) {
			  closePopupBtn = closePopup[i];
			  closePopupBtn.addEventListener('click', function(e) {
				e.preventDefault();
				let fid = $(this).parents(".second_block1").attr("attrid");
				let popup = document.querySelector("#popup_"+fid+' .popup');
				popup.classList.remove('open');
				body.classList.remove('lock');
				if (!arSwiper[fid].nav.loopedSlides) arSwiper[fid].nav.loopedSlides = 0;
				let f = arSwiper[fid].nav.activeIndex - arSwiper[fid].nav.loopedSlides;
				//arSwiper[fid.substr(1)].gal.slideTo(f);
				$(document).off('keydown');

			  })
			}

		});


		// TABS
		let tabs = document.querySelectorAll('.tab');

		for (i=0; i < tabs.length; i++) {
		  tab = tabs[i];
		  tab.addEventListener('click', function(e) {
			e.preventDefault();
			$("#second_block .tab").removeClass('active');
			$("#second_block .tab a").removeClass('active');
			$("#second_block .block").hide();	
			let id = $(e.target).attr("href");
			if (!id){
				id = $(e.target).find("a").attr("href");
			}
			$("#second_block "+id).show();
			$(e.target).addClass('active');
			$(e.target).parent().addClass('active');
		  })
		}
		$("#second_block .block").hide();
		let id = $("#second_block .tabs .active a").attr("href");
		$("#second_block "+id).show();





			// Открытие отзыва

			let openFeedbacks = document.querySelectorAll('.text-hide');
			let feedbackWrappers = document.querySelectorAll('.feedback-wrapper');

			openFeedbacks.forEach(function(e,i) {
			  e.addEventListener('click', function(){
				feedbackWrappers[i].style.maxHeight = '100%';
				e.style.display = 'none';
			  })
			})

		//Gallery 


			$('.popup-case-photos').magnificPopup({
			  delegate: "a",
			  fixedContentPos: true,
			  type: "image",
			   callbacks: {
				open: function() {
					$(document).off('keydown');
				},
				close: function() {
				  let fid = $("#second_block .tabs .active a").attr("href");
				  let closePopup = document.querySelectorAll("#popup_"+fid.substr(1)+' .close-popup-btn');
				  $(document).on('keydown', function(e){
					if(e.which == 27){
						$(closePopup).click()
					}
					});
				}
			  }
			});
	}

	function updatepopup (el) {
		let id = $(el).attr("for");
		$('#second_block .popup .popup-before img').attr("src", "");
		$('#second_block .popup .popup-after img').attr("src", "");
		let before = $(el).find(".before").find("img").attr("data-src");
		let after = $(el).find(".after").find("img").attr("data-src");
		if (!before) before = $(el).find(".before").find("img").attr("src");
		if (!after) after = $(el).find(".after").find("img").attr("src");
		$('#second_block .popup .popup-before img').attr("src", before);
		$('#second_block .popup .popup-after img').attr("src", after);
		$('#second_block .popup .case-name span').html(id);
	}


});

