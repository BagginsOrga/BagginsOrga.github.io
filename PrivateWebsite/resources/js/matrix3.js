function clickbuttfunc() {
    
    var a = document.getElementById("mdr_a").value; 
    var b = document.getElementById("mdr_b").value; 
    var c = document.getElementById("mdr_c").value; 
    var d = document.getElementById("mdr_d").value; 
    var e = document.getElementById("mdr_e").value; 
    var f = document.getElementById("mdr_f").value; 
    var g = document.getElementById("mdr_g").value; 
    var h = document.getElementById("mdr_h").value; 
    var i = document.getElementById("mdr_i").value; 
    var d1 = document.getElementById("mdr_d1").value;
    var d2 = document.getElementById("mdr_d2").value; 
    var d3 = document.getElementById("mdr_d3").value; 


    var n = (a*e*i)+(b*f*g)+(c*d*h)-(c*e*g)-(a*b*i)-(a*f*h)
    var n1 = (d1*e*i)+(b*f*d3)+(c*d2*h)-(c*e*d3)-(d1*b*i)-(d1*f*h)
    var n2 = (a*d2*i)+(d1*f*g)+(c*d*d3)-(c*d2*g)-(a*d2*i)-(a*f*d3)
    var n3 = (a*e*d3)+(b*d2*g)+(d1*d*h)-(d1*e*g)-(a*b*d3)-(a*d2*h)

    var x = n1/n
    var y = n2/n
    var z = n3/n


    document.getElementById("x").innerHTML=x;
    document.getElementById("y").innerHTML=y;
    document.getElementById("z").innerHTML=z;

}

function info() {

    var help = document.getElementById("basic_stats_help");

    
    if (help.style.display === "none") {

      help.style.display = "block";

    } else {
      help.style.display = "none";
    }
  

    var cachertitre = document.getElementById("player_profile_help");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
      
    }



}