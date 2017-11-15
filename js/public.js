window.onload = function() {
	var list = document.getElementsByClassName('list')[0];
	var oLis = list.getElementsByTagName('li');
	var txt = list.getElementsByClassName('nav');
	var twonav = list.getElementsByTagName('div')
	var span = document.getElementsByClassName('move')[0];

	for(var i = 0; i < oLis.length; i++) {
		oLis[i].index = i;
		oLis[i].onmouseover = function() {
			console.log(this.index)
			move(span, {
				'left': this.index * 120
			})
		}
	}
	
	
	for(var i = 0; i < oLis.length; i++) {
		oLis[i].index = i;
		twonav[i].onmouseout = function() {
			span.style.left = 0;
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
		}, 1500)

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
	}, 1500)
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
}