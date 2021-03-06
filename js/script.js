function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }
});

$(document).ready(function() {
	$('.slide1, .menu-topText2, .menu-bottomText8').click(function (event) {
		$('.slide1, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide4, .slide6, .slide7, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause1() {
			$('.image-item2, .image-item3, .image-item4, .image-item6, .image-item7, .image-visitka, .image-item8, .textLeft2, .textLeft3, .textLeft4, .textLeft6, .textLeft7, .textLeft8, .textRight2, .textRight3, .textRight4, .textRight6, .textRight7, .textRight8').removeClass('is-active');
			$('.image-item1, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft1, .textRight1, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause1, 500);
		function pause11() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText1, .menu-bottomText1').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		}
		setTimeout(pause11, 1000);
	});
});

$(document).ready(function() {
	$('.slide2, .menu-topText3, .menu-bottomText1, .menu-bottomTextNone').click(function (event) {
		$('.slide2, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide1, .slide3, .slide4, .slide6, .slide7, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause2() {
			$('.image-item1, .image-item3, .image-item4, .image-item6, .image-item7, .image-visitka, .image-item8, .textLeft1, .textLeft3, .textLeft4, .textLeft6, .textLeft7, .textLeft8, .textRight1, .textRight3, .textRight4, .textRight6, .textRight7, .textRight8').removeClass('is-active');
			$('.image-item2, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft2, .textRight2, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause2, 500);
		function pause22() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText2, .menu-bottomText2').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause22, 1000);
	});
});

$(document).ready(function() {
	$('.slide3, .menu-topText4, .menu-bottomText2').click(function (event) {
		$('.slide3, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide1, .slide2, .slide4, .slide6, .slide7, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause3() {
			$('.image-item1, .image-item2, .image-item4, .image-item6, .image-item7, .image-visitka, .image-item8, .textLeft2, .textLeft1, .textLeft4, .textLeft6, .textLeft7, .textLeft8, .textRight2, .textRight1, .textRight4, .textRight6, .textRight7, .textRight8').removeClass('is-active');
			$('.image-item3, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft3, .textRight3, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause3, 500);
		function pause33() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText3, .menu-bottomText3').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause33, 1000);
	});
});

$(document).ready(function() {
	$('.slide4, .menu-topText6, .menu-bottomText3').click(function (event) {
		$('.slide4, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide1, .slide6, .slide7, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause4() {
			$('.image-item1, .image-item2, .image-item3, .image-item6, .image-item7, .image-visitka, .image-item8, .textLeft2, .textLeft3, .textLeft1, .textLeft6, .textLeft7, .textLeft8, .textRight2, .textRight3, .textRight1, .textRight6, .textRight7, .textRight8').removeClass('is-active');
			$('.image-item4, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft4, .textRight4, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause4, 500);
		function pause44() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText4, .menu-bottomText4').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause44, 1000);
	});
});

$(document).ready(function() {
	$('.slide6, .menu-topText7, .menu-bottomText4').click(function (event) {
		$('.slide6, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide4, .slide1, .slide7, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause6() {
			$('.image-item1, .image-item2, .image-item3, .image-item4, .image-item7, .image-visitka, .image-item8, .textLeft2, .textLeft3, .textLeft4, .textLeft1, .textLeft7, .textLeft8, .textRight2, .textRight3, .textRight4, .textRight1, .textRight7, .textRight8').removeClass('is-active');
			$('.image-item6, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft6, .textRight6, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause6, 500);
		function pause66() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText6, .menu-bottomText6').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause66, 1000);
	});
});

$(document).ready(function() {
	$('.slide7, .menu-topTextVis, .menu-bottomText6').click(function (event) {
		$('.slide7, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide4, .slide6, .slide1, .slideVisitka, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pause7() {
			$('.image-item1, .image-item2, .image-item3, .image-item4, .image-item6, .image-visitka, .image-item8, .textLeft2, .textLeft3, .textLeft4, .textLeft6, .textLeft1, .textLeft8, .textRight2, .textRight3, .textRight4, .textRight6, .textRight1, .textRight8').removeClass('is-active');
			$('.image-item7, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft7, .textRight7, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause7, 500);
		function pause77() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText7, .menu-bottomText7').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause77, 1000);
	});
});

$(document).ready(function() {
	$('.slideVisitka, .menu-topText8, .menu-bottomText7').click(function (event) {
		$('.slideVisitka, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide4, .slide6, .slide1, .slide7, .slide8, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').removeClass('scroll');
		function pauseVisitka() {
			$('.image-item1, .image-item2, .image-item3, .image-item4, .image-item6, .image-item7, .image-item8, .textLeft2, .textLeft3, .textLeft4, .textLeft6, .textLeft7, .textLeft1, .textLeft8, .textRight2, .textRight3, .textRight4, .textRight6, .textRight7, .textRight1, .textRight8').removeClass('is-active');
			$('.image-visitka, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft7, .textRight7, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pauseVisitka, 500);
		function pauseVisitka1() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topVisitka, .menuBottomVisitka, .menu-bottomVis, .menu-topTextVis').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pauseVisitka1, 1000);
	});
});

$(document).ready(function() {
	$('.slide8, .menu-topText1, .menu-bottomVis, .menu-topTextNone').click(function (event) {
		$('.slide8, .header-left, .footer-left, .header-right, .footer-right, .menu-bottomTextNone, .menu-topTextNone').addClass('is-active');
		$('.slide2, .slide3, .slide4, .slide6, .slide7, .slideVisitka, .slide1, .menu-bottomText1, .menu-bottomText2, .menu-bottomText3, .menu-bottomText4, .menu-bottomText6, .menu-bottomText7, .menu-bottomVis, .menu-bottomText8, .menu-topText1, .menu-topText2, .menu-topText3, .menu-topText4, .menu-topText6, .menu-topText7, .menu-topTextVis, .menu-topText8').removeClass('is-active');
		$('.change-lang').addClass('dis-active');
		$('body').addClass('scroll');
		function pause8() {
			$('.image-item1, .image-item2, .image-item3, .image-item4, .image-item6, .image-item7, .image-visitka, .textLeft2, .textLeft3, .textLeft4, .textLeft6, .textLeft7, .textLeft1, .textRight2, .textRight3, .textRight4, .textRight6, .textRight7, .textRight1').removeClass('is-active');
			$('.image-item8, .image-itemNone, .footer-leftBottom, .header-rightTop, .textLeft8, .textRight8, .textLeftNone, .textRightNone').addClass('is-active');
			$('.header-left, .footer-right').removeClass('is-active');
		};
		setTimeout(pause8, 500);
		function pause88() {
			$('.footer-left, .header-right, .footer-leftBottom, .header-rightTop').removeClass('is-active');
			$('.menu-topText8, .menu-bottomText8').addClass('is-active');
			$('.change-lang').removeClass('dis-active');
		};
		setTimeout(pause88, 1000);
	});
});

const select = document.querySelector('select');
const allLang = ['ru', 'ua'];
const langArr = {
	"topText1": {
		"ru": "???? ??????????????????",
		"ua": "???? ??????????????",
	},
	"topText2": {
		"ru": "???? ??????????????????,",
		"ua": "???? ??????????,",
	},
	"topText3": {
		"ru": "?????????????? ??????????????????",
		"ua": "?????? ??????????????????????",
	},
	"topText4": {
		"ru": "?? ?????????????????? &quot;??????????&quot;",
		"ua": "?? ?????????????????? &quot;??????????&quot;",
	},
	"topText6": {
		"ru": "?????????? ?????????????????????????????? ?????????????????????? ??????????",
		"ua": "?????? ?????????????????? ???????????????????? ??????????",
	},
	"topText7": {
		"ru": "?????????? ???????? <br> ???????????? ??????",
		"ua": "???????????? ???????? <br> ???????????? ??????",
	},
	"topText8": {
		"ru": "?????????? ????????????!!!",
		"ua": "???????? ????????????!!!",
	},
	"topTextNone": {
		"ru": "???? ??????????????????",
		"ua": "???? ??????????????",
	},
	"bottomText1": {
		"ru": "???????????????????? ??????",
		"ua": "?????????????????? ??????",
	},
	"bottomText2": {
		"ru": "?????????????????????? ???????????? ????????????????????????????,",
		"ua": "???????????????????? ???????????? ??????????????????,",
	},
	"bottomText3": {
		"ru": "23 ?????????????? 2021 ???????? ?? 18:00",
		"ua": "23 ???????????? 2021 ???????? ?? 18:00",
	},
	"bottomText4": {
		"ru": "??. ????????, ???????????????? ?????????????????? ????????????????,1",
		"ua": "??. ????????, ???????????????? ?????????????????? ????????????????,1",
	},
	"bottomText6": {
		"ru": "?? ?????????????????????? ?????????? ??.???????? - 16:00",
		"ua": "?? ???????????????????????? ???????? ??. ???????? - 16:00",
	},
	"bottomText7": {
		"ru": "???? ?????????? ??????????????????!",
		"ua": "???? ???????????? ??????????!",
	},
	"bottomText8": {
		"ru": "?????????????????? ?? ??????????????",
		"ua": "?????????????????? ?? ????????????",
	},
	"bottomTextNone": {
		"ru": "???????????????????? ??????",
		"ua": "?????????????????? ??????",
	},
	"title": {
		"ru": "?????????????????????? ???? ??????????????",
		"ua": "???????????????????? ???? ??????????????",
	},
	"big": {
		"ru": "?????????????????? + ?????????????? =<br>??????????????!!!",
		"ua": "?????????????????? + ???????????? =<br>??????????????!!!",
	},
};
select.addEventListener('change', changeURLLanguage);

// ?????????????????????????? ???? url ?? ?????????????????? ??????????
function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
};

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substr(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	select.value = hash;
	document.querySelector('title').innerHTML = langArr['title'][hash];
	for (let key in langArr) {
		let elem = document.querySelector('.menu-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][hash];
		}

   }
}
changeLanguage();