
jQuery.fn.imgSlider = function(options){

	fade = options.fade || 1000;

	arr = 0;

	gw = $(this).parent().width();
	gh = $(this).parent().height();

	$(this).css("width",gw+"px");
	$(this).css("height",gh+"px");
	grapp = gw/gh;

	a = $(this).children();
	a = Array.prototype.slice.call(a);

	i=0;
	anima();

	function anima(){
		obj = a[i];
		i++;
		if(i>=a.length){
		    i=0;
		}

		setta(obj);

		$(obj).fadeIn(fade,sposta);

	}

	function sposta(){
		if(dir){
		    $(obj).animate({
		        marginTop : arr + "px"
		    }, obj.speed,callNext);
		}else{
		    $(obj).animate({
		        marginLeft : arr + "px"
		    }, obj.speed,callNext);
		}
	}

	function callNext(){
		$(obj).fadeOut(fade);
		anima();
	}

	function setta(id){
		w = $(id).width();
		h = $(id).height();
		rapp = w/h;
		dir = rapp < grapp;
		if(dir){
			ropp = gw / w;
			neww = gw;
			newh = h * ropp;
			part = (gh-newh);
			if(getDir(obj)){
				$(obj).css("marginTop",part);
				arr = 0;
			}else{
				arr = part
				$(obj).css("marginTop",0 + "px");
			}
		}else{
			ropp = gh / h;
			newh = gh;
			neww = w * ropp;
			part = (gw-neww);
			if(getDir(obj)){
		    	$(obj).css("marginLeft",part);
		    	arr = 0;
			}else{
				arr = part
				$(obj).css("marginLeft",0 + "px");
			}
		}
		$(id).css("width",neww+"px");
		$(id).css("height",newh+"px");
		id.speed = getSpeed(id,w,h);
	}

	function getSpeed(id){
		speed = 1000*getNumFromClass(id,"speed");
		if(speed < 0 || isNaN(speed)){
			if(dir){
				speed = ( newh / gh ) * 2000;
			}else{
				speed = ( neww / gw ) * 2000;
			}
		}
		return speed;
	}

	function getDir(id){
		ret = true;
		$(id).attr("class").split(" ").forEach(function(e){
			if(e == "inv-dir"){
				ret = false;
			}
		});
		return ret;
	}

	function getNumFromClass(id,sub){
		num = -1;
		classes = $(id).attr("class");
		split = classes.split(" ");
		split.forEach(function(e){
			if(e.indexOf(sub) != -1){
				num = parseInt(e.substring(sub.length,e.length));
			}
		});
		return num;
	}
}


