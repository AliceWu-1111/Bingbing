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
					'left': 360
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

	var cOne = document.getElementsByClassName("cone")[0];
	var olist = cOne.getElementsByTagName("ul")[0];
	var oLi1 = olist.getElementsByTagName("li")[1];
	var oLi2 = olist.getElementsByTagName("li")[2];
	var font1 = oLi1.getElementsByClassName("font1")[0];
	var none1 = font1.getElementsByTagName("span")[0];
	var font2 = oLi2.getElementsByClassName("font2")[0];
	var none2 = font2.getElementsByTagName("span")[0];
	cOne.onmouseover = function() {
		none1.style.display = "block";
		none2.style.display = "block"
	}
	cOne.onmouseout = function() {
		none1.style.display = "none";
		none2.style.display = "none"
	}

	var ctwo = document.getElementsByClassName("ctwo")[0];
	var know = ctwo.getElementsByClassName("know")[0];
	var adis = know.getElementsByTagName("a")[0];
	ctwo.onmouseover = function() {
		yidong(know, {
			'top': 200
		})
		adis.style.background = "#fff";
		adis.style.color = "#57678d";

	}
	ctwo.onmouseout = function() {
		yidong(know, {
			'top': 400
		})
		adis.style.background = "";
		adis.style.color = "#fff";
	}

	var cthree = document.getElementsByClassName("cthree")[0];
	var know1 = cthree.getElementsByClassName("know1")[0];
	var adis1 = know1.getElementsByTagName("a")[0];
	cthree.onmouseover = function() {
		yidong(know1, {
			'top': 200
		})
		adis1.style.background = "#fff";
		adis1.style.color = "#57678d";

	}
	cthree.onmouseout = function() {
		yidong(know1, {
			'top': 400
		})
		adis1.style.background = "";
		adis1.style.color = "#fff";
	}

	var cfour = document.getElementsByClassName("cfour")[0];
	var oLi1 = cfour.getElementsByTagName("li")[1];
	var oLi2 = cfour.getElementsByTagName("li")[2];
	var font1 = oLi1.getElementsByClassName("font1")[0];
	var none1 = font1.getElementsByTagName("span")[0];
	var font2 = oLi2.getElementsByClassName("font2")[0];
	var none2 = font2.getElementsByTagName("span")[0];
	cfour.onmouseover = function() {
		none1.style.display = "block";
		none2.style.display = "block"
	}
	cfour.onmouseout = function() {
		none1.style.display = "none";
		none2.style.display = "none"
	}

	var csix = document.getElementsByClassName("csix")[0];
	var know2 = csix.getElementsByClassName("know2")[0];
	var adis2 = know2.getElementsByTagName("a")[0];
	csix.onmouseover = function() {
		yidong(know2, {
			'top': 200
		})
		adis2.style.background = "#fff";
		adis2.style.color = "#57678d";

	}
	csix.onmouseout = function() {
		yidong(know2, {
			'top': 400
		})
		adis2.style.background = "";
		adis2.style.color = "#fff";
	}

	var cseven = document.getElementsByClassName("cseven")[0];
	var know3 = cseven.getElementsByClassName("know3")[0];
	var adis3 = know3.getElementsByTagName("a")[0];
	cseven.onmouseover = function() {
		yidong(know3, {
			'top': 200
		})
		adis3.style.background = "#fff";
		adis3.style.color = "#57678d";

	}
	cseven.onmouseout = function() {
		yidong(know3, {
			'top': 400
		})
		adis3.style.background = "";
		adis3.style.color = "#fff";
	}


	var model3 = document.getElementsByClassName("model3")[0];
	var screenH = document.documentElement.clientHeight || document.body.clientHeight;
	var model3H = model3.offsetHeight; //获取自身高度
	var model3T = model3.offsetTop; //获取它距离屏幕顶端的高度
	document.onscroll = function() {
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		if(model3T <= screenH + scrollT - model3.offsetHeight) {
			model3.style.animationName = "bounceOut";
			model3.style.animationDuration = "1s";

		}
	}

}