window.onload = function() {
	var data1Arr = [{
			"src": "../imgs/product/1.jpg",
			"title": "兵兵医用退热贴（儿童装2贴装） ",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/2.jpg",
			"title": "兵兵水果香型退热贴（母婴）",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/3.jpg",
			"title": "兵兵感温医用退热贴 ",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/4.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/5.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/6.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/7.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/8.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/9.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/10.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/11.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		},
		{
			"src": "../imgs/product/12.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "明星产品",
		}
	];

	var data2Arr = [{
			"src": "../imgs/food/1.jpg",
			"title": "兵兵多部位退热贴 ",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/2.jpg",
			"title": "兵兵水果香型退热贴（母婴）",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/3.jpg",
			"title": "兵兵感温医用退热贴 ",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/4.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/5.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/6.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/7.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/8.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/9.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/10.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/11.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		},
		{
			"src": "../imgs/food/12.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "母婴用品",
		}
	];

	var data3Arr = [{
			"src": "../imgs/tie/1.jpg",
			"title": "吲哚美辛巴布膏（OTC)  ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/2.jpg",
			"title": "兵兵智能暖宫腰带 ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/3.jpg",
			"title": "兵兵智能发热腰带  ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/4.jpg",
			"title": "兵兵暖手宝 ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/5.jpg",
			"title": "兵兵暖足宝 ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/6.jpg",
			"title": "兵兵暖宫宝",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/7.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/8.jpg",
			"title": "兵兵关节热敷贴 ",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/9.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/10.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/11.jpg",
			"title": "兵兵腰背热敷贴",
			"txt": "退热贴",
		},
		{
			"src": "../imgs/tie/12.jpg",
			"title": "兵兵肩颈热敷贴 ",
			"txt": "退热贴",
		}
	];

	var data4Arr = [{
			"src": "../imgs/day/1.jpg",
			"title": "兵兵蒸汽眼罩  ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/2.jpg",
			"title": "兵兵成人加湿口罩 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/3.jpg",
			"title": "兵兵防雾霾口罩  ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/4.jpg",
			"title": "兵兵瞬爽凝胶舒眠枕 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/5.jpg",
			"title": "兵兵佳佳平安成人纸尿裤 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/6.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/7.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/8.jpg",
			"title": "兵兵冷敷凝胶 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/9.jpg",
			"title": "兵兵3+1护脑退热贴",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/10.jpg",
			"title": "兵兵医用冰垫 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/11.jpg",
			"title": "兵兵海藻芦荟胶 ",
			"txt": "日用品",
		},
		{
			"src": "../imgs/day/12.jpg",
			"title": "兵兵家用成人儿童鼻腔清洗器 ",
			"txt": "日用品",
		}
	];

	var dist = document.getElementsByClassName("dist")[0]
	var oButton = dist.getElementsByTagName("li");
	var row = document.getElementsByClassName("row")[0];
	var str1 = ""
	for(var i = 0; i < data1Arr.length; i++) {
		str1 += "<li><img src='" + data1Arr[i].src + "' /><p>" + data1Arr[i].title + "</p><div>" + data1Arr[i].txt + "</div></li>"
	}
	row.innerHTML = str1;
	row.style.display = "block";
	oButton[0].onclick = function() {
		var row = document.getElementsByClassName("row")[0];
		var str1 = ""
		for(var i = 0; i < data1Arr.length; i++) {
			str1 += "<li><img src='" + data1Arr[i].src + "' /><p>" + data1Arr[i].title + "</p><div>" + data1Arr[i].txt + "</div></li>"
		}
		row.innerHTML = str1;
		row.style.display = "block";
	}
	oButton[1].onclick = function() {
		var row = document.getElementsByClassName("row")[0];
		var str2 = ""
		for(var i = 0; i < data2Arr.length; i++) {
			str2 += "<li><img src='" + data2Arr[i].src + "' /><p>" + data2Arr[i].title + "</p><div>" + data2Arr[i].txt + "</div></li>"
		}
		row.innerHTML = str2;
		row.style.display = "block";
	}

	oButton[2].onclick = function() {
		var row = document.getElementsByClassName("row")[0];
		var str3 = ""
		for(var i = 0; i < data3Arr.length; i++) {
			str3 += "<li><img src='" + data3Arr[i].src + "' /><p>" + data3Arr[i].title + "</p><div>" + data3Arr[i].txt + "</div></li>"
		}
		row.innerHTML = str3;
		row.style.display = "block";
	}

	oButton[3].onclick = function() {
		var row = document.getElementsByClassName("row")[0];
		var str4 = ""
		for(var i = 0; i < data4Arr.length; i++) {
			str4 += "<li><img src='" + data4Arr[i].src + "' /><p>" + data4Arr[i].title + "</p><div>" + data4Arr[i].txt + "</div></li>"
		}
		row.innerHTML = str4;
		row.style.display = "block";
	}

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
				'left': 480
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

		var oFairy = document.getElementsByClassName("fairy")[0];
		var jLi = oFairy.getElementsByTagName("li");
		var oShow = oFairy.getElementsByTagName("div")
		for(var i = 0; i < jLi.length; i++) {
			jLi[i].index = i;
			jLi[i].onmouseover = function() {
				for(var n = 0; n < jLi.length; n++) {
					oShow[n].style.display = "none";
				}
				oShow[this.index].style.display = "block"
				oShow[this.index].style.top = 30 * [this.index - 1] + 30 + "px";
			}
		}

		for(var i = 0; i < jLi.length; i++) {
			jLi[i].index = i;
			jLi[i].onmouseout = function() {
				for(var n = 0; n < jLi.length; n++) {
					oShow[n].style.display = "none";
				}
			}
		}
		
		var expend=document.getElementsByClassName("expend")[0];
		var change=document.getElementsByClassName("changes")[0];
		expend.onclick=function(){
			change.style.display="block"
		}
		change.onclick=function(){
			change.style.display="none"
		}
		
		
		var user=document.getElementsByClassName("user")[0]
		var contact=document.getElementsByClassName("contact")[0];
		var cancel=user.getElementsByClassName("cancel")[0];
		var btn=user.getElementsByTagName("button")[0];
		var span1=user.getElementsByTagName("span")[1];
		var span2=user.getElementsByTagName("span")[2];
		var input1=user.getElementsByTagName("input")[0];
		var input2=user.getElementsByTagName("input")[1];
		var re=/^1[34578]\d{9}$/
		contact.onclick=function(){
			user.style.display="block";
		}
		cancel.onclick=function(){
			user.style.display="none";
		}
		btn.onclick = function(){
				if(re.test(input2.value)!=true){
					span2.style.display = "block"
				}else{
					span2.style.display = "none"
				}
				if(input1.value===''){
					span1.style.display = "block"
				}else{
					span1.style.display = "none"
				}
				if (re.test(input2.value)&&input1.value!=='') {
					user.style.display="none";
				}
			}
	}
