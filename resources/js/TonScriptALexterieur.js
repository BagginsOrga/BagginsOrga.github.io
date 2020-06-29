function clickbuttfunc() {
    var leveldumec = document.getElementById("lvldumecITN").value;
    console.log("coucou, la valeur du niveau est de : " + lvldumecITN.value);
    var strength = document.getElementById("StrengthITN").value;
    var damages = document.getElementById("DamagesITN").value;
    var crit = document.getElementById("cdITN").value;
    var chance = document.getElementById("chanceITN").value;
    var mana = document.getElementById("manaITN").value;
    var speed = document.getElementById("spidITN").value;
    var life = document.getElementById("lifeITN").value;
    var def = document.getElementById("defITN").value; 

    //Défini le pourcentage en fonction du level qu'a tapé le mec
    var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]
    
        //Crit
    var newcrit2 = {
    resultbase: ((sonmultiplicateurdelevel/100) * crit ) + crit*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * crit )+((sonmultiplicateurdelevel/100) * crit )*(10/100) + crit*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * crit )+((sonmultiplicateurdelevel/100) * crit )*(20/100) + crit*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * crit )+((sonmultiplicateurdelevel/100) * crit )*(30/100) + crit*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * crit )+((sonmultiplicateurdelevel/100) * crit )*(40/100) + crit*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * crit )+((sonmultiplicateurdelevel/100) * crit )*(50/100) + crit*1,
    };

    //Mana
    var newmana = {
    resultbase: ((sonmultiplicateurdelevel/100) * mana ) + mana*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * mana )+((sonmultiplicateurdelevel/100) * mana )*(10/100) + mana*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * mana )+((sonmultiplicateurdelevel/100) * mana )*(20/100) + mana*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * mana )+((sonmultiplicateurdelevel/100) * mana )*(30/100) + mana*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * mana )+((sonmultiplicateurdelevel/100) * mana )*(40/100) + mana*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * mana )+((sonmultiplicateurdelevel/100) * mana )*(50/100) + mana*1,
    };

    //Chance
    var newchance = {
    resultbase: ((sonmultiplicateurdelevel/100) * chance ) + chance*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(10/100) + chance*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(20/100) + chance*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(30/100) + chance*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(40/100) + chance*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(50/100) + chance*1,
    };

    //Damages
    var newdamages = {
    resultbase: ((sonmultiplicateurdelevel/100) * damages ) + damages*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * damages )+((sonmultiplicateurdelevel/100) * damages )*(10/100) + damages*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * damages )+((sonmultiplicateurdelevel/100) * damages )*(20/100) + damages*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * damages )+((sonmultiplicateurdelevel/100) * damages )*(30/100) + damages*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * damages )+((sonmultiplicateurdelevel/100) * damages )*(40/100) + damages*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * damages )+((sonmultiplicateurdelevel/100) * damages )*(50/100) + damages*1,
    };

    //Strength
    var newstrength = {
    resultbase: ((sonmultiplicateurdelevel/100) * strength ) + strength*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(10/100) + strength*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(20/100) + strength*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(30/100) + strength*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(40/100) + strength*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(50/100) + strength*1,
    };

    //Speed
    var newspeed = {
    resultbase: ((sonmultiplicateurdelevel/100) * speed ) + speed*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(10/100) + speed*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(20/100) + speed*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(30/100) + speed*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(40/100) + speed*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(50/100) + speed*1,
    };

    //Life
    var newlife = {
    resultbase: ((sonmultiplicateurdelevel/100) * life ) + life*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(10/100) + life*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(20/100) + life*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(30/100) + life*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(40/100) + life*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(50/100) + life*1,
    };

    //Défence
    var newdef = {
    resultbase: ((sonmultiplicateurdelevel/100) * def ) + def*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(10/100) + def*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(20/100) + def*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(30/100) + def*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(40/100) + def*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(50/100) + def*1,
    };

    //EHP
    var ehp = {
    resultbase: newlife.resultbase * newdef.resultbase,
    resultonestar: newlife.resultonestar * newdef.resultonestar,
    resulttwostar: newlife.resulttwostar * newdef.resulttwostar,
    resulttreestar: newlife.resulttreestar * newdef.resulttreestar,  
    resultfourstar: newlife.resultfourstar * newdef.resultfourstar,
    resultfivestar: newlife.resultfivestar * newdef.resultfivestar,
    };

    //Voilà l'exemple (j'ai juste logué parsque je voi rien sur ton IHM) : 

    document.getElementById("newHealth").innerHTML=newlife.resultbase;
    

    document.getElementById("newdef").innerHTML=newdef.resultbase;


    document.getElementById("newstr").innerHTML=newstrength.resultbase;


    document.getElementById("newspeed").innerHTML=newspeed.resultbase;


    document.getElementById("newchance").innerHTML=newchance.resultbase;


    document.getElementById("newcrit").innerHTML=newcrit2.resultbase;


    document.getElementById("newmana").innerHTML=newmana.resultbase;


    document.getElementById("newdamages").innerHTML=newdamages.resultbase;

}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------                              -----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------  Quand tu clique sur Health  -----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------                              -----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function clickhealth() {

    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherspeed = document.getElementById("basic_stats_speed");
    var cacherspeedtitle = document.getElementById("player_profile_speed");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");
    
    if (cacherhealth.style.display === "none") {

      cacherhealth.style.display = "block";


      cacherdef.style.display = "none";
      cacherdeftitle.style.display = "none";

      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";


    } else {
      cacherhealth.style.display = "none";
    }
  

    var cachertitre = document.getElementById("player_profile_health");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }


    
    var leveldumec = document.getElementById("lvldumecITN").value;
    var life = document.getElementById("lifeITN").value;


    //Défini le pourcentage en fonction du level qu'a tapé le mec
    var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]
    
    //Life
    var newlife = {
    resultbase: ((sonmultiplicateurdelevel/100) * life ) + life*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(10/100) + life*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(20/100) + life*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(30/100) + life*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(40/100) + life*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * life )+((sonmultiplicateurdelevel/100) * life )*(50/100) + life*1,
    };



        document.getElementById("newHealth1").innerHTML=newlife.resultonestar;
        document.getElementById("newHealth2").innerHTML=newlife.resulttwostar;
        document.getElementById("newHealth3").innerHTML=newlife.resulttreestar;
        document.getElementById("newHealth4").innerHTML=newlife.resultfourstar;
        document.getElementById("newHealth5").innerHTML=newlife.resultfivestar;
    

}










function clickdefence() {



    var cacherdef = document.getElementById("basic_stats_def");

    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherspeed = document.getElementById("basic_stats_speed");
    var cacherspeedtitle = document.getElementById("player_profile_speed");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");
    
    if (cacherdef.style.display === "none") {


      cacherdef.style.display = "block";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";


    } else {
      cacherdef.style.display = "none";
    }
  


    var cachertitre = document.getElementById("player_profile_def");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }

    var leveldumec = document.getElementById("lvldumecITN").value;
    var def = document.getElementById("defITN").value; 


    //Défini le pourcentage en fonction du level qu'a tapé le mec
    var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]
    

    //Défence
    var newdef = {
        resultbase: ((sonmultiplicateurdelevel/100) * def ) + def*1,
        resultonestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(10/100) + def*1,
        resulttwostar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(20/100) + def*1,
        resulttreestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(30/100) + def*1,
        resultfourstar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(40/100) + def*1,
        resultfivestar: ((sonmultiplicateurdelevel/100) * def ) + ((sonmultiplicateurdelevel/100) * def )*(50/100) + def*1,
        };

    document.getElementById("newDefence1").innerHTML=newdef.resultonestar;
    document.getElementById("newDefence2").innerHTML=newdef.resulttwostar;
    document.getElementById("newDefence3").innerHTML=newdef.resulttreestar;
    document.getElementById("newDefence4").innerHTML=newdef.resultfourstar;
    document.getElementById("newDefence5").innerHTML=newdef.resultfivestar;
}











function clickstrength() {

    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");
    
    var cacherspeed = document.getElementById("basic_stats_speed");
    var cacherspeedtitle = document.getElementById("player_profile_speed");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");

    if (cacherstr.style.display === "none") {

      cacherstr.style.display = "block";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";


    } else {
      cacherstr.style.display = "none";
    }
  


    var cachertitre = document.getElementById("player_profile_str");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }

    var leveldumec = document.getElementById("lvldumecITN").value;
    var strength = document.getElementById("StrengthITN").value;


    //Défini le pourcentage en fonction du level qu'a tapé le mec
    var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]


    //Strength
    var newstrength = {
        resultbase: ((sonmultiplicateurdelevel/100) * strength ) + strength*1,
        resultonestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(10/100) + strength*1,
        resulttwostar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(20/100) + strength*1,
        resulttreestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(30/100) + strength*1,
        resultfourstar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(40/100) + strength*1,
        resultfivestar: ((sonmultiplicateurdelevel/100) * strength )+((sonmultiplicateurdelevel/100) * strength )*(50/100) + strength*1,
        };

    document.getElementById("newStrength1").innerHTML=newstrength.resultonestar;
    document.getElementById("newStrength2").innerHTML=newstrength.resulttwostar;
    document.getElementById("newStrength3").innerHTML=newstrength.resulttreestar;
    document.getElementById("newStrength4").innerHTML=newstrength.resultfourstar;
    document.getElementById("newStrength5").innerHTML=newstrength.resultfivestar;
}









function clickspeed() {

    var cacherspeed = document.getElementById("basic_stats_speed");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");

    
    
    if (cacherspeed.style.display === "none") {

      cacherspeed.style.display = "block";
 
      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

    } else {
      cacherspeed.style.display = "none";
    }
  


    var cachertitre = document.getElementById("player_profile_speed");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }


    var leveldumec = document.getElementById("lvldumecITN").value;
    var speed = document.getElementById("spidITN").value;


    //Défini le pourcentage en fonction du level qu'a tapé le mec
    var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]


    //Speed
    var newspeed = {
        resultbase: ((sonmultiplicateurdelevel/100) * speed ) + speed*1,
        resultonestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(10/100) + speed*1,
        resulttwostar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(20/100) + speed*1,
        resulttreestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(30/100) + speed*1,
        resultfourstar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(40/100) + speed*1,
        resultfivestar: ((sonmultiplicateurdelevel/100) * speed )+((sonmultiplicateurdelevel/100) * speed )*(50/100) + speed*1,
        };

    document.getElementById("newSpeed1").innerHTML=newspeed.resultonestar;
    document.getElementById("newSpeed2").innerHTML=newspeed.resulttwostar;
    document.getElementById("newSpeed3").innerHTML=newspeed.resulttreestar;
    document.getElementById("newSpeed4").innerHTML=newspeed.resultfourstar;
    document.getElementById("newSpeed5").innerHTML=newspeed.resultfivestar;
}














function clickchance() {


    var cacherchance = document.getElementById("basic_stats_chance");

    var cacherspeedtitle = document.getElementById("player_profile_speed");
    var cacherspeed = document.getElementById("basic_stats_speed");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");
    
    if (cacherchance.style.display === "none") {

      cacherchance.style.display = "block";

      cacherspeedtitle.style.display = "none";
      cacherspeed.style.display = "none";
 
      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

    } else {
      cacherchance.style.display = "none";
    }

  var cachertitre = document.getElementById("player_profile_chance");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }

  var leveldumec = document.getElementById("lvldumecITN").value;
  var chance = document.getElementById("chanceITN").value;

  //Défini le pourcentage en fonction du level qu'a tapé le mec
  var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]

  //Chance
  var newchance = {
    resultbase: ((sonmultiplicateurdelevel/100) * chance ) + chance*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(10/100) + chance*1,
    resulttwostar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(20/100) + chance*1,
    resulttreestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(30/100) + chance*1,
    resultfourstar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(40/100) + chance*1,
    resultfivestar: ((sonmultiplicateurdelevel/100) * chance )+((sonmultiplicateurdelevel/100) * chance )*(50/100) + chance*1,
    };

    document.getElementById("newChance1").innerHTML=newchance.resultonestar;
    document.getElementById("newChance2").innerHTML=newchance.resulttwostar;
    document.getElementById("newChance3").innerHTML=newchance.resulttreestar;
    document.getElementById("newChance4").innerHTML=newchance.resultfourstar;
    document.getElementById("newChance5").innerHTML=newchance.resultfivestar;
}

function clickcrit() {
    document.getElementById("newCrit1").innerHTML=newcrit2.resultonestar;
    document.getElementById("newCrit2").innerHTML=newcrit2.resulttwostar;
    document.getElementById("newCrit3").innerHTML=newcrit2.resulttreestar;
    document.getElementById("newCrit4").innerHTML=newcrit2.resultfourstar;
    document.getElementById("newCrit5").innerHTML=newcrit2.resultfivestar;
}

function clickmana() {
    document.getElementById("newMana1").innerHTML=newmana.resultonestar;
    document.getElementById("newMana2").innerHTML=newmana.resulttwostar;
    document.getElementById("newMana3").innerHTML=newmana.resulttreestar;
    document.getElementById("newMana4").innerHTML=newmana.resultfourstar;
    document.getElementById("newMana5").innerHTML=newmana.resultfivestar;
}

function clickdamages() {
    document.getElementById("newDamages1").innerHTML=newdamages.resultonestar;
    document.getElementById("newDamages2").innerHTML=newdamages.resulttwostar;
    document.getElementById("newDamages3").innerHTML=newdamages.resulttreestar;
    document.getElementById("newDamages4").innerHTML=newdamages.resultfourstar;
    document.getElementById("newDamages5").innerHTML=newdamages.resultfivestar;
}


function titreoff() {

    
}