

var i = 0;
var n = 0;
var b = 0;
a = new Array();

// funzione per lo scorrimento delle immagini
/**

La funzione anima prende in inpt un array di json
I json devono essere composti cosi :
id -  id dell' immagine da far muovere
dir - direzione true dall alto verso il basso
part - il punto di partenza
arr - il punto di arrivo
vel - la velocita con cui la foto deve sostarsi in millisecondi
fade - la velocita in millisecondi con cui deve apparirae a foto
stop - il tempo in millisecondi per cui la foto cìdeve stare ferma alla fine dell'animazione

**/

jQuery.fn.imgSlider = function(gw,gh){

	$(this.selector).css("width",gw+"px");
	$(this.selector).css("height",gh+"px");

	grapp = gw/gh;

	elem = $(this.selector).children();
	for(i=0;i<elem.length;i++){
		utilizza(elem[i]);
	}

	function setta(id,w,h){
		$(id).css("width",w+"px");
		$(id).css("height",h+"px");
	}

	function utilizza(id){
		w = $(id).css("width");
		h = $(id).css("height");
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
			a.push({"id" : $(id), "dir" : dir, 
	        "part" : (-(newh-gh))+"px", "arr" : "0px",
	        "vel" : 4000, "fade" : 200, "stop": 2000});
         	console.log("cazzo minchia");
		}else{
			ropp = gh / h;
			newh = gh;
			neww = w * ropp;
			a.push({"id" : $(id), "dir" : dir, 
         	"part" : (-(neww-gw))+"px", "arr" : "0px",
         	"vel" : 4000, "fade" : 200, "stop": 2000});
		}
		setta(id,neww,newh);
	}
}

$(document).ready(function() {

	$("#sliderwrapper").imgSlider(1100,480);
	$(".element").hover(
		function(){
			$(this).children(".tendawrapper").children(".tenda").animate({
				lineHeight: '40px'
			},150);
		},function(){
			$(this).children(".tendawrapper").children(".tenda").animate({
				lineHeight: '0px'
			},100);
		}
	);

	$(".tenda,.title").hover(
	function(){
	//$(this).children("a").animate({color:"#673b15"},100);
		$(this).animate({
			backgroundColor:"#cca674"
		},100);
	},function(){
		//$(this).children("a").animate({color:"#fff"},50);
		$(this).animate({
			backgroundColor:"#956939"
		},50);
	});

  /*$("#appa").mouseover(function(){
    $("#tendaappa").css("visibility","visible");
  });
  $("#appa").mouseout(function(){
    $("#tendaappa").css("visibility","hidden");
  });*/


  n = a.length;
  
  anima(a[0]);
  
      
});

function anima(json){  
   
  i++;
  if(i>=n)
      i=0;

  console.log("kk");
   
  $(json.id).fadeIn(json.fade);
  $(json.id).css("display","inline");
  if(json.dir){
     $(json.id).css("marginTop",json.part);
     $(json.id).animate({
         marginTop : json.arr
     }, json.vel, function (){
         setTimeout("anima(a[i])",json.stop);
         $(json.id).delay(json.stop).fadeOut(0);
     });
  }else{
     $(json.id).css("marginLeft",json.part);
     $(json.id).animate({
         marginLeft : json.arr
     }, json.vel, function (){
         setTimeout("anima(a[i])",json.stop);
         $(json.id).delay(json.stop).fadeOut(0);
     });
  }
   
   
}






