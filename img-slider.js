
jQuery.fn.imgSlider = function(gw,gh){

	vel = arguments[2].speed || 4000;
	fade = arguments[2].intro || 200;
	stop = arguments[2].stop || 2000;
	arr = "0px";
	var i = 0;
	var obj,dir;

	$(this).css("width",gw+"px");
	$(this).css("height",gh+"px");
	var grapp = gw/gh;

	a = $(this).children();

	i=0;
	anima();

	function anima(){
		obj = a[i];
		i++;
		if(i>=a.length){
		    i=0;
		}

		setta(obj);

		$(obj).fadeIn(1000,sposta);

	}

	function sposta(){
		if(dir){
		    $(obj).animate({
		        marginTop : arr
		    }, vel,callNext);
		}else{
		    $(obj).animate({
		        marginLeft : arr
		    }, vel,callNext);
		}
	}

	function callNext(){
		$(obj).fadeOut(1000);
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
	}
}


