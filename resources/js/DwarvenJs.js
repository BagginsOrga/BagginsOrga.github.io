
function hideviv() {
    var cacherhealth = document.getElementById("basic_stats_health");
    var cacherdef = document.getElementById("basic_stats_def");
    var cacherstr = document.getElementById("basic_stats_str");
    var cacherspeed = document.getElementById("basic_stats_speed");
    var cachercrit = document.getElementById("basic_stats_crit");
    cacherhealth.style.display = "none";
    cacherdef.style.display = "none";
    cacherstr.style.display = "none";
    cacherspeed.style.display = "none";
    cachercrit.style.display = "none"
}



function clickhealth() {

    var cacherhealth = document.getElementById("basic_stats_health");
    var cacherdef = document.getElementById("basic_stats_def");
    var cacherstr = document.getElementById("basic_stats_str");
    var cacherspeed = document.getElementById("basic_stats_speed");
    var cachercrit = document.getElementById("basic_stats_crit");


    if (cacherhealth.style.display === "none") {

        cacherhealth.style.display = "block";

        cacherdef.style.display = "none";

        cacherstr.style.display = "none";

        cacherspeed.style.display = "none";

        cachercrit.style.display = "none"





    } else {
        cacherhealth.style.display = "none";
    }






}