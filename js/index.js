window.onload = function() {
	var list = document.getElementsByClassName('list')[0];
	var oLis = list.getElementsByTagName('li');
	var txt = list.getElementsByClassName('nav');
	var twonav = list.getElementsByTagName('div')
	var span = document.getElementsByClassName('move')[0];

	for(var i = 0; i < oLis.length; i++) {
		oLis[i].index = i;
		oLis[i].onmouseover = function() {
			yidong(span, {
				'left': this.index * 120
			})
		}
		oLis[i].onmouseout = function() {

			yidong(span, {
				'left': 0
			})

		}
	}

	var banner = document.getElementsByClassName('banner')[0];
	var oUl = banner.getElementsByTagName('ul')[0];
	var oLiss = oUl.getElementsByTagName('li');
	var oOl = banner.getElementsByTagName('ol')[0];
	var aLis = oOl.getElementsByTagName('li');
	var left = document.getElementsByClassName('left')[0];
	var right = document.getElementsByClassName('right')[0];
	var num = 0;
	var timer = null;

	banner.onmouseover = function() {
		clearInterval(timer);
	}
	banner.onmouseout = function() {
		timer = setInterval(function() {

			num++;
			if(num === 5) {
				oUl.style.transition = "0s";
				oUl.style.left = 0 + "px";
				num = 1;
				setTimeout(function() {
					oUl.style.transition = "1s";
					oUl.style.left = -1400 + "px";
				}, 30)
			} else {

				oUl.style.left = -1400 * num + "px";
				oUl.style.transition = "1s";
			}

			for(var i = 0; i < aLis.length; i++) {
				aLis[i].className = '';
			}
			if(num === 4) {
				aLis[0].className = "active";
			} else {
				aLis[num].className = "active";
			}
		}, 2000)

	}
	timer = setInterval(function() {

		num++;
		if(num === 5) {
			oUl.style.transition = "0s";
			oUl.style.left = 0 + "px";
			num = 1;
			setTimeout(function() {
				oUl.style.transition = "1s";
				oUl.style.left = -1400 + "px";
			}, 30)
		} else {

			oUl.style.left = -1400 * num + "px";
			oUl.style.transition = "1s";
		}

		for(var i = 0; i < aLis.length; i++) {
			aLis[i].className = '';
		}
		if(num === 4) {
			aLis[0].className = "active";
		} else {
			aLis[num].className = "active";
		}
	}, 2000)
	for(var i = 0; i < aLis.length; i++) {
		aLis[i].index = i;
		aLis[i].onmouseover = function() {
			for(var j = 0; j < aLis.length; j++) {
				aLis[j].className = ""
			}
			this.className = "active"
			oUl.style.left = -1400 * this.index + 'px';
			num = this.index;
		}
	}

	var show = document.getElementsByClassName("show")[0]
	var longs = document.getElementsByClassName("long")[0];
	var aa=document.getElementsByTagName("li")
	var timer1 = null;
	var speed = 0;
	//oUl.innerHTML += oUl.innerHTML;
	longs.innerHTML = longs.innerHTML + longs.innerHTML;
	longs.style.width = longs.offsetWidth *2+ "px";

	timer1 = setInterval(function() {
		moveImg(-2968, 0)
	}, 30)
	show.onmouseover = function() {
		clearInterval(timer1);
	}
	show.onmouseout = function() {
		timer1 = setInterval(function() {
			moveImg(-2968, 0)
		}, 30)
	}
	
	//封装函数
	function moveImg(iTarget, value) {
		if(iTarget > value) {
			speed = 2
		} else {
			speed = -2
		}
		if(longs.offsetLeft === iTarget) {
			longs.style.left = value;
			console.log(longs.offsetLeft)
		} else {
			longs.style.left = longs.offsetLeft + speed + "px"
			
		}
	}

	$(function() {
		$(".topintro li:nth-of-type(1)").mouseover(function() {
			$(this).children("img").addClass("animated rotateInUpLeft")
			$(this).addClass("hvr-bounce-to-right")
			$(".topintro li:nth-of-type(1) a").addClass("animated bounceIn")
		})
		$(".topintro li:nth-of-type(1)").mouseleave(function() {
			$(this).children("img").removeClass("animated rotateInUpLeft")
			$(".topintro li:nth-of-type(1) a").removeClass("animated bounceIn")
		})

		$(".topintro li:nth-of-type(2)").mouseover(function() {
			$(this).children("img").addClass("animated lightSpeedIn")
			$(this).addClass("hvr-bounce-to-left")
			$(".topintro li:nth-of-type(2) a").addClass("animated flip")
		})
		$(".topintro li:nth-of-type(2)").mouseleave(function() {
			$(this).children("img").removeClass("animated lightSpeedIn")
			$(".topintro li:nth-of-type(2) a").removeClass("animated flip")
		})

		//复合事件的写法
		$(".botintro li:nth-of-type(1)").hover(function() {
			$(this).children(".fixs").fadeOut(800)
			$(this).children("img").addClass("animated zoomIn")
			$(this).children("p").addClass("animated wobble")
			$(this).children("a").addClass("animated bounceInDown")
		}, function() {
			$(this).children(".fixs").stop().fadeIn(800)
			$(this).children("img").removeClass("animated zoomIn")
			$(this).children("p").removeClass("animated wobble")
			$(this).children("a").removeClass("animated bounceInDown")
		})

		$(".botintro li:nth-of-type(2)").hover(function() {
			$(this).children(".fixs").fadeOut(800)
			$(this).children("img").addClass("animated zoomIn")
			$(this).children("p").addClass("animated wobble")
			$(this).children("a").addClass("animated bounceInDown")
		}, function() {
			$(this).children(".fixs").stop().fadeIn(800)
			$(this).children("img").removeClass("animated zoomIn")
			$(this).children("p").removeClass("animated wobble")
			$(this).children("a").removeClass("animated bounceInDown")
		})

		$(".botintro li:nth-of-type(3)").hover(function() {
			$(this).children(".fixs").fadeOut(800)
			$(this).children("img").addClass("animated zoomIn")
			$(this).children("p").addClass("animated wobble")
			$(this).children("a").addClass("animated bounceInDown")
		}, function() {
			$(this).children(".fixs").stop().fadeIn(800)
			$(this).children("img").removeClass("animated zoomIn")
			$(this).children("p").removeClass("animated wobble")
			$(this).children("a").removeClass("animated bounceInDown")
		})

		$(".introduct").hover(function() {
			$(this).addClass("hvr-wobble-bottom")
		}, function() {
			$(this).remove("hvr-wobble-bottom")
		})
		$(window).scroll(function() {
			var sc = $(window).scrollTop();
			var rwidth = $(window).width()
			if(sc > 0) {
				$("#goTopBtn").css("display", "block");
				$("#goTopBtn").css("left", (rwidth - 36) + "px")
			} else {
				$("#goTopBtn").css("display", "none");
			}
		})
		$("#goTopBtn").click(function() {
			var sc = $(window).scrollTop();
			$('body,html').animate({
				scrollTop: 0
			}, 500);
		})

	})

}