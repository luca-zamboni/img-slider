
jQuery.fn.imgSlider = function(gw,gh){

	vel = arguments[2].speed || 4000;
	fade = arguments[2].intro || 200;
	stop = arguments[2].stop || 2000;
	
	arr = "0px";
	i = 0;
	n = 0;
	b = 0;
	a = new Array();

	$(this.selector).css("width",gw+"px");
	$(this.selector).css("height",gh+"px");

	grapp = gw/gh;

	elem = $(this.selector).children();
	for(i=0;i<elem.length;i++){
		a.push(elem[i]);
	}

	n = a.length; 

	function setta(id,w,h){
		$(id).css("width",w+"px");
		$(id).css("height",h+"px");
	}
	i=0;
	anima(true);

	function anima(first){
		if(!first){
			oldobj = a[i];
			i++;
			if(i>=n){
			    i=0;
			}
		}
		obj = a[i];

		w = $(obj).css("width");
		h = $(obj).css("height");
		w = w.substring(0,w.indexOf("p"));
		h = h.substring(0,h.indexOf("p"));
		w = parseInt(w);
		h = parseInt(h);
		rapp = w/h;
		dir = rapp < grapp;
		if(dir){
			ropp = gw / w;
			neww = gw;
			newh = h * ropp;
		}else{
			ropp = gh / h;
			newh = gh;
			neww = w * ropp;
		}
		setta(obj,neww,newh);

		if(!first){
			$(oldobj).fadeOut(fade);
		}

		$(obj).fadeIn(0);
		$(obj).css("display","inline");

		if(dir){
			part = (gh-newh);
		    $(obj).css("marginTop",part);
		    $(obj).animate({
		        marginTop : arr
		    }, vel);
		}else{
			part = (gw-neww);
		    $(obj).css("marginLeft",part);
		    $(obj).animate({
		        marginLeft : arr
		    }, vel);
		}
	}

	setInterval(function (){ 

		anima(false);

	},vel+fade);
}


function asd(string){
	console.log(string);
}








