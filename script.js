 
var i = 0;
var n = 0;
a = new Array();

// funzione per lo scorrimento delle immagini
/**

La funzione anima prende in inpt un array di json
I json devono essere composti cosi :
id -  id dell' immagine da far muovere
dir - direzione true dall alto verso il basso
part - il punto di partenza
arr - il punto di arrivoo
vel - la velocita con cui la foto deve sostarsi in millisecondi
fade - la velocita in millisecondi con cui deve apparirae a foto
stop - il tempo in millisecondi per cui la foto cìdeve stare ferma alla fine dell'animazione

**/

$(document).ready(function() {
     
  
  a.push({"id" : "#immalunga1", "dir" : true, 
         "part" : "0px", "arr" : "-400px",
         "vel" : 4000, "fade" : 200, "stop": 1000});
  
  a.push({"id" : "#immalarga1", "dir" : false, 
         "part" : "0px", "arr" : "-300px",
         "vel" : 3000, "fade" : 500, "stop": 2000});
         
  a.push({"id" : "#immalunga2", "dir" : true, 
         "part" : "0px", "arr" : "-450px",
         "vel" : 3000, "fade" : 500, "stop": 1000});
         
  a.push({"id" : "#immalunga3", "dir" : true, 
         "part" : "-450px", "arr" : "-100px",
         "vel" : 3000, "fade" : 500, "stop": 1000});
         
  a.push({"id" : "#immalunga4", "dir" : true,
         "part" : "-400px", "arr" : "-100px",
         "vel" : 3000, "fade" : 500, "stop": 1000});
         
  a.push({"id" : "#immalunga5", "dir" : true,
         "part" : "0px", "arr" : "-60px",
         "vel" : 3000, "fade" : 500, "stop": 10000});
  
  n = a.length;
  
  anima(a[0]);
  
      
});

function anima(json){
   
   //console.log(a[i]);   
   
  i++;
  if(i>=n)
      i=0;
   
  $(json.id).fadeIn(json.fade);
  $(json.id).css("display","inline");
  if(json.dir){
     $(json.id).css("marginTop",json.part);
     $(json.id).animate({
         marginTop : json.arr
     }, json.vel, function (){
         setTimeout("anima(a[i])",json.stop);
         $(json.id).delay(json.stop).fadeOut(1000);
     });
  }else{
     $(json.id).css("marginLeft",json.part);
     $(json.id).animate({
         marginLeft : json.arr
     }, json.vel, function (){
         setTimeout("anima(a[i])",json.stop);
         $(json.id).delay(json.stop).fadeOut(1000);
     });
  }
   
   
}











