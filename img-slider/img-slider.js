
jQuery.fn.imgSlider = function(options){

	var current = this;
	var resize;
	var ctrlResize;

	$(current).css("overflow","hidden");
	$(current).css("position","relative");

	gooo();

	function gooo(){
		resize = false;
		var fade = 1000;

		var a,neww,newh,grapp,ropp,part,gh,gw,arr = 0,i=0,lobj,j;

		gw = $(current).width();
		gh = $(current).height();
			console.log(gw);

		/*$(current).css("width",gw+"px");
		$(current).css("height",gh+"px");*/
		grapp = gw/gh;

		a = $(current).children();
		a = Array.prototype.slice.call(a);

		a.reverse().forEach(function(e){
			$(e).on('load', function(){
				setta(e);
			});
			$(e).fadeOut(0);
		});
		a.reverse();

		obj = a[i];
		i++;
		j=false;

		$(obj).fadeIn(0,function(){
			setTimeout(sposta,getInitStop(obj));
		});

		$(window).resize(function(){
			gw = $(current).width();
			gh = $(current).height();

			/*$(current).css("width",gw+"px");
			$(current).css("height",gh+"px");*/
			grapp = gw/gh;

			a.forEach(function(e){
				setta(e);
			});
		});

		function anima(){
			if(j){
				i++;
				if(i>=a.length){
					i=0;
				}
				lobj = obj;
			}
			j = true;

			obj = a[i];

			setta(obj);

			$(lobj).fadeOut(fade);
			$(obj).fadeIn(fade/2,function(){
				setTimeout(sposta,getInitStop(obj));
			});


		}

		function sposta(){
			if(obj.dire){
				$(obj).animate({
					marginTop : obj.arr + "px"
				}, obj.speed,function(){
					setTimeout(anima,getStop(obj));
				});
			}else{
				$(obj).animate({
					marginLeft : obj.arr + "px"
				}, obj.speed,function(){
					setTimeout(anima,getStop(obj));
				});
			}
		}

		function setta(id){
			w = $(id).width();
			h = $(id).height();
			rapp = w/h;
			id.dire = rapp < grapp;
			if(id.dire){
				ropp = gw / w;
				neww = gw;
				newh = h * ropp;
				part = (gh-newh);
				if(getDir(id)){
					$(id).css("marginTop",part+"px");
					id.arr = 0;
				}else{
					id.arr = part
					$(id).css("marginTop",0 + "px");
				}
			}else{
				ropp = gh / h;
				newh = gh;
				neww = w * ropp;
				part = (gw-neww);
				if(getDir(id)){
					$(id).css("marginLeft",part+"px");
					id.arr = 0;
				}else{
					id.arr = part
					$(id).css("marginLeft",0 + "px");
				}
			}
			$(id).css("width",neww+"px");
			$(id).css("height",newh+"px");
			id.speed = getSpeed(id,w,h);
		}

		function getInitStop(id){
			istop = 1000*getNumFromClass(id,"i-stop");
			if(istop < 0 || isNaN(istop)){
				istop = 1000;
			}
			return istop;
		}

		function getStop(id){
			stop = 1000*getNumFromClass(id,"stop");
			if(stop < 0 || isNaN(stop)){
				stop = 1000;
			}
			return stop;
		}

		function getSpeed(id){
			speed = 1000*getNumFromClass(id,"speed");
			if(speed < 0 || isNaN(speed)){
				if(id.dire){
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
}


