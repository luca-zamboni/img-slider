
jQuery.fn.imgSlider = function(gw,gh){

	fade = arguments[2].fade || 1000;

	arr = "0px";

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
		        marginTop : arr
		    }, obj.speed,callNext);
		}else{
		    $(obj).animate({
		        marginLeft : arr
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
			$(obj).css("marginTop",part);
		}else{
			ropp = gh / h;
			newh = gh;
			neww = w * ropp;
			part = (gw-neww);
		    $(obj).css("marginLeft",part);
		}
		$(id).css("width",neww+"px");
		$(id).css("height",newh+"px");
		id.speed = getSpeed(id,w,h);
	}

	function getSpeed(id,w,h){
		speed = -1;
		classes = $(id).attr("class");
		split = classes.split(" ");
		split.forEach(function(e){
			if(e.indexOf("speed") != -1){
				speed = 1000 * parseInt(e.substring(5,e.length));
			}
		});
		if(speed < 0 || isNaN(speed)){
			if(dir){
				speed = ( newh / gh ) * 2000;
			}else{
				speed = ( neww / gw ) * 2000;
			}
		}
		console.log(speed);
		return speed;
	}
}


