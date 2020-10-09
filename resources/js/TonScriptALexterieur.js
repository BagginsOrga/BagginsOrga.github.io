function clickbuttfunc() {

  var leveldumec = document.getElementById("lvldumecITN").value;

  if ( !leveldumec.replace(/\s+/, '').length ) {
 
    var alertlulu = document.getElementById("goto_target_username4");
    alertlulu.style.display = "block";

  } else {

    var alertlulu = document.getElementById("goto_target_username4");
    alertlulu.style.display = "none";
    var alertluluo = document.getElementById("alert");
    alertluluo.style.display = "none";

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
    resultonestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(50/100),
    };

    //Mana
    var newmana = {
    resultbase: ((sonmultiplicateurdelevel/100) * mana ) + mana*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(50/100),
    };

    //Chance
    var newchance = {
    resultbase: ((sonmultiplicateurdelevel/100) * chance ) + chance*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1  + chance*(50/100),
    };

    //Damages
    var newdamages = {
    resultbase: ((sonmultiplicateurdelevel/100) * damages ) + damages*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(50/100),
    };

    //Strength
    var newstrength = {
    resultbase: ((sonmultiplicateurdelevel/100) * strength ) + strength*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(50/100),
    };

    //Speed
    var newspeed = {
    resultbase: ((sonmultiplicateurdelevel/100) * speed ) + speed*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(50/100),
    };

    //Life
    var newlife = {
    resultbase: ((sonmultiplicateurdelevel/100) * life ) + life*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(50/100),
    };

    //Défence
    var newdef = {
    resultbase: ((sonmultiplicateurdelevel/100) * def ) + def*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(50/100),
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

    document.getElementById("newHealth1").innerHTML=newlife.resultonestar;
    document.getElementById("newHealth2").innerHTML=newlife.resulttwostar;
    document.getElementById("newHealth3").innerHTML=newlife.resulttreestar;
    document.getElementById("newHealth4").innerHTML=newlife.resultfourstar;
    document.getElementById("newHealth5").innerHTML=newlife.resultfivestar;

    document.getElementById("newDefence1").innerHTML=newdef.resultonestar;
    document.getElementById("newDefence2").innerHTML=newdef.resulttwostar;
    document.getElementById("newDefence3").innerHTML=newdef.resulttreestar;
    document.getElementById("newDefence4").innerHTML=newdef.resultfourstar;
    document.getElementById("newDefence5").innerHTML=newdef.resultfivestar;

    document.getElementById("newStrength1").innerHTML=newstrength.resultonestar;
    document.getElementById("newStrength2").innerHTML=newstrength.resulttwostar;
    document.getElementById("newStrength3").innerHTML=newstrength.resulttreestar;
    document.getElementById("newStrength4").innerHTML=newstrength.resultfourstar;
    document.getElementById("newStrength5").innerHTML=newstrength.resultfivestar;

    document.getElementById("newSpeed1").innerHTML=newspeed.resultonestar;
    document.getElementById("newSpeed2").innerHTML=newspeed.resulttwostar;
    document.getElementById("newSpeed3").innerHTML=newspeed.resulttreestar;
    document.getElementById("newSpeed4").innerHTML=newspeed.resultfourstar;
    document.getElementById("newSpeed5").innerHTML=newspeed.resultfivestar;

    document.getElementById("newChance1").innerHTML=newchance.resultonestar;
    document.getElementById("newChance2").innerHTML=newchance.resulttwostar;
    document.getElementById("newChance3").innerHTML=newchance.resulttreestar;
    document.getElementById("newChance4").innerHTML=newchance.resultfourstar;
    document.getElementById("newChance5").innerHTML=newchance.resultfivestar;

    document.getElementById("newCrit1").innerHTML=newcrit2.resultonestar;
    document.getElementById("newCrit2").innerHTML=newcrit2.resulttwostar;
    document.getElementById("newCrit3").innerHTML=newcrit2.resulttreestar;
    document.getElementById("newCrit4").innerHTML=newcrit2.resultfourstar;
    document.getElementById("newCrit5").innerHTML=newcrit2.resultfivestar;

    document.getElementById("newMana1").innerHTML=newmana.resultonestar;
    document.getElementById("newMana2").innerHTML=newmana.resulttwostar;
    document.getElementById("newMana3").innerHTML=newmana.resulttreestar;
    document.getElementById("newMana4").innerHTML=newmana.resultfourstar;
    document.getElementById("newMana5").innerHTML=newmana.resultfivestar;

    document.getElementById("newDamages1").innerHTML=newdamages.resultonestar;
    document.getElementById("newDamages2").innerHTML=newdamages.resulttwostar;
    document.getElementById("newDamages3").innerHTML=newdamages.resulttreestar;
    document.getElementById("newDamages4").innerHTML=newdamages.resultfourstar;
    document.getElementById("newDamages5").innerHTML=newdamages.resultfivestar;

  }

    
    




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

    var cachercrit = document.getElementById("basic_stats_crit");
    var cachercrittitle = document.getElementById("player_profile_crit");

    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");
    
    if (cacherhealth.style.display === "none") {

      cacherhealth.style.display = "block";


      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"

      cacherdef.style.display = "none";
      cacherdeftitle.style.display = "none";

      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

      cachercrit.style.display = "none"
      cachercrittitle.style.display = "none"
      
      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"


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
      resultonestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(10/100),
      resulttwostar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(20/100),
      resulttreestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(30/100),
      resultfourstar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(40/100),
      resultfivestar: ((sonmultiplicateurdelevel/100) * life ) + life*1 + life*(50/100),
      };



        document.getElementById("newHealth1").innerHTML=newlife.resultonestar;
        document.getElementById("newHealth2").innerHTML=newlife.resulttwostar;
        document.getElementById("newHealth3").innerHTML=newlife.resulttreestar;
        document.getElementById("newHealth4").innerHTML=newlife.resultfourstar;
        document.getElementById("newHealth5").innerHTML=newlife.resultfivestar;
    

}



function clickdefence() {



    var cacherdef = document.getElementById("basic_stats_def");

    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherspeed = document.getElementById("basic_stats_speed");
    var cacherspeedtitle = document.getElementById("player_profile_speed");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");

    var cachercrit = document.getElementById("basic_stats_crit");
    var cachercrittitle = document.getElementById("player_profile_crit");

    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");
    
    
    if (cacherdef.style.display === "none") {


      cacherdef.style.display = "block";

      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

      cachercrit.style.display = "none"
      cachercrittitle.style.display = "none"

      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"

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
      resultonestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(10/100),
      resulttwostar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(20/100),
      resulttreestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(30/100),
      resultfourstar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(40/100),
      resultfivestar: ((sonmultiplicateurdelevel/100) * def ) + def*1 + def*(50/100),
      };

    document.getElementById("newDefence1").innerHTML=newdef.resultonestar;
    document.getElementById("newDefence2").innerHTML=newdef.resulttwostar;
    document.getElementById("newDefence3").innerHTML=newdef.resulttreestar;
    document.getElementById("newDefence4").innerHTML=newdef.resultfourstar;
    document.getElementById("newDefence5").innerHTML=newdef.resultfivestar;
}



function clickstrength() {

    var cacherstr = document.getElementById("basic_stats_str");

    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");
    
    var cacherspeed = document.getElementById("basic_stats_speed");
    var cacherspeedtitle = document.getElementById("player_profile_speed");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");

    var cachercrit = document.getElementById("basic_stats_crit");
    var cachercrittitle = document.getElementById("player_profile_crit");

    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");


    if (cacherstr.style.display === "none") {

      cacherstr.style.display = "block";
      
      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"
      
      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherspeed.style.display = "none";
      cacherspeedtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

      cachercrit.style.display = "none"
      cachercrittitle.style.display = "none"

      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"


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
      resultonestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(10/100),
      resulttwostar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(20/100),
      resulttreestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(30/100),
      resultfourstar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(40/100),
      resultfivestar: ((sonmultiplicateurdelevel/100) * strength ) + strength*1 + strength*(50/100),
      };

    document.getElementById("newStrength1").innerHTML=newstrength.resultonestar;
    document.getElementById("newStrength2").innerHTML=newstrength.resulttwostar;
    document.getElementById("newStrength3").innerHTML=newstrength.resulttreestar;
    document.getElementById("newStrength4").innerHTML=newstrength.resultfourstar;
    document.getElementById("newStrength5").innerHTML=newstrength.resultfivestar;
}



function clickspeed() {

    var cacherspeed = document.getElementById("basic_stats_speed");

    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherchance = document.getElementById("basic_stats_chance");
    var cacherchancetitle = document.getElementById("player_profile_chance");

    var cachercrit = document.getElementById("basic_stats_crit");
    var cachercrittitle = document.getElementById("player_profile_crit");

    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");

  
    if (cacherspeed.style.display === "none") {

      cacherspeed.style.display = "block";
 
      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"

      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

      cachercrit.style.display = "none"
      cachercrittitle.style.display = "none"

      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"

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
      resultonestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(10/100),
      resulttwostar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(20/100),
      resulttreestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(30/100),
      resultfourstar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(40/100),
      resultfivestar: ((sonmultiplicateurdelevel/100) * speed ) + speed*1 + speed*(50/100),
      };

    document.getElementById("newSpeed1").innerHTML=newspeed.resultonestar;
    document.getElementById("newSpeed2").innerHTML=newspeed.resulttwostar;
    document.getElementById("newSpeed3").innerHTML=newspeed.resulttreestar;
    document.getElementById("newSpeed4").innerHTML=newspeed.resultfourstar;
    document.getElementById("newSpeed5").innerHTML=newspeed.resultfivestar;
}



function clickchance() {


    var cacherchance = document.getElementById("basic_stats_chance");

    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherspeedtitle = document.getElementById("player_profile_speed");
    var cacherspeed = document.getElementById("basic_stats_speed");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cachercrit = document.getElementById("basic_stats_crit");
    var cachercrittitle = document.getElementById("player_profile_crit");
    
    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");

    if (cacherchance.style.display === "none") {

      cacherchance.style.display = "block";

      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"

      cacherspeedtitle.style.display = "none";
      cacherspeed.style.display = "none";
 
      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cachercrit.style.display = "none"
      cachercrittitle.style.display = "none"

      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"

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
    resultonestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * chance ) + chance*1 + chance*(50/100),
    };

    document.getElementById("newChance1").innerHTML=newchance.resultonestar;
    document.getElementById("newChance2").innerHTML=newchance.resulttwostar;
    document.getElementById("newChance3").innerHTML=newchance.resulttreestar;
    document.getElementById("newChance4").innerHTML=newchance.resultfourstar;
    document.getElementById("newChance5").innerHTML=newchance.resultfivestar;
}



function clickcrit() {

    var cachercrit = document.getElementById("basic_stats_crit");


    var cachermana = document.getElementById("basic_stats_mana");
    var cachermanatitle = document.getElementById("player_profile_mana");

    var cacherchancetitle = document.getElementById("player_profile_chance");
    var cacherchance = document.getElementById("basic_stats_chance");
    
    var cacherspeedtitle = document.getElementById("player_profile_speed");
    var cacherspeed = document.getElementById("basic_stats_speed");

    var cacherstrtitle = document.getElementById("player_profile_str");
    var cacherstr = document.getElementById("basic_stats_str");

    var cacherdeftitle = document.getElementById("player_profile_def");
    var cacherdef = document.getElementById("basic_stats_def");
    
    var cacherhealthtitle = document.getElementById("player_profile_health");
    var cacherhealth = document.getElementById("basic_stats_health");

    var cacherdama = document.getElementById("basic_stats_dama");
    var cacherdamatitle = document.getElementById("player_profile_dama");
    
    if (cachercrit.style.display === "none") {

      cachercrit.style.display = "block"

      cacherchance.style.display = "none";
      cacherchancetitle.style.display = "none";

      cacherspeedtitle.style.display = "none";
      cacherspeed.style.display = "none";
 
      cacherstr.style.display = "none";
      cacherstrtitle.style.display = "none";

      cacherdeftitle.style.display = "none";
      cacherdef.style.display = "none";

      cacherhealth.style.display = "none";
      cacherhealthtitle.style.display = "none";

      cachermana.style.display = "none"
      cachermanatitle.style.display = "none"

      cacherdama.style.display = "none"
      cacherdamatitle.style.display = "none"

    } else {
      cachercrit.style.display = "none";
    }



  var cachertitre = document.getElementById("player_profile_crit");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }

   var leveldumec = document.getElementById("lvldumecITN").value;
   var crit = document.getElementById("cdITN").value;


   //Défini le pourcentage en fonction du level qu'a tapé le mec
   var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]

   //Crit
   var newcrit2 = {
    resultbase: ((sonmultiplicateurdelevel/100) * crit ) + crit*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * crit ) + crit*1 + crit*(50/100),
    };

    document.getElementById("newCrit1").innerHTML=newcrit2.resultonestar;
    document.getElementById("newCrit2").innerHTML=newcrit2.resulttwostar;
    document.getElementById("newCrit3").innerHTML=newcrit2.resulttreestar;
    document.getElementById("newCrit4").innerHTML=newcrit2.resultfourstar;
    document.getElementById("newCrit5").innerHTML=newcrit2.resultfivestar;
}





function clickmana() {





  var cachermana = document.getElementById("basic_stats_mana");

  var cachercrittitle = document.getElementById("player_profile_crit");
  var cachercrit = document.getElementById("basic_stats_crit");
  
  var cacherchancetitle = document.getElementById("player_profile_chance");
  var cacherchance = document.getElementById("basic_stats_chance");
  
  var cacherspeedtitle = document.getElementById("player_profile_speed");
  var cacherspeed = document.getElementById("basic_stats_speed");

  var cacherstrtitle = document.getElementById("player_profile_str");
  var cacherstr = document.getElementById("basic_stats_str");

  var cacherdeftitle = document.getElementById("player_profile_def");
  var cacherdef = document.getElementById("basic_stats_def");
  
  var cacherhealthtitle = document.getElementById("player_profile_health");
  var cacherhealth = document.getElementById("basic_stats_health");

  var cacherdama = document.getElementById("basic_stats_dama");
  var cacherdamatitle = document.getElementById("player_profile_dama");

  
  if (cachermana.style.display === "none") {



    cachermana.style.display = "block"

    cachercrit.style.display = "none"
    cachercrittitle.style.display = "none";

    cacherchance.style.display = "none";
    cacherchancetitle.style.display = "none";

    cacherspeedtitle.style.display = "none";
    cacherspeed.style.display = "none";

    cacherstr.style.display = "none";
    cacherstrtitle.style.display = "none";

    cacherdeftitle.style.display = "none";
    cacherdef.style.display = "none";

    cacherhealth.style.display = "none";
    cacherhealthtitle.style.display = "none";

    cacherdama.style.display = "none"
    cacherdamatitle.style.display = "none"



  } else {
    cachermana.style.display = "none";
  }


  var cachertitre = document.getElementById("player_profile_mana");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }


  var mana = document.getElementById("manaITN").value;
  var leveldumec = document.getElementById("lvldumecITN").value;


  //Défini le pourcentage en fonction du level qu'a tapé le mec
  var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]

  //Mana
  var newmana = {
    resultbase: ((sonmultiplicateurdelevel/100) * mana ) + mana*2,
    resultonestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * mana ) + mana*1 + mana*(50/100),
    };


    document.getElementById("newMana1").innerHTML=newmana.resultonestar;
    document.getElementById("newMana2").innerHTML=newmana.resulttwostar;
    document.getElementById("newMana3").innerHTML=newmana.resulttreestar;
    document.getElementById("newMana4").innerHTML=newmana.resultfourstar;
    document.getElementById("newMana5").innerHTML=newmana.resultfivestar;
}





function clickdamages() {




  var cacherdama = document.getElementById("basic_stats_dama");

  var cachermana = document.getElementById("basic_stats_mana");
  var cachermanatitle = document.getElementById("player_profile_mana");

  var cachercrittitle = document.getElementById("player_profile_crit");
  var cachercrit = document.getElementById("basic_stats_crit");
  
  var cacherchancetitle = document.getElementById("player_profile_chance");
  var cacherchance = document.getElementById("basic_stats_chance");
  
  var cacherspeedtitle = document.getElementById("player_profile_speed");
  var cacherspeed = document.getElementById("basic_stats_speed");

  var cacherstrtitle = document.getElementById("player_profile_str");
  var cacherstr = document.getElementById("basic_stats_str");

  var cacherdeftitle = document.getElementById("player_profile_def");
  var cacherdef = document.getElementById("basic_stats_def");
  
  var cacherhealthtitle = document.getElementById("player_profile_health");
  var cacherhealth = document.getElementById("basic_stats_health");
  
  if (cacherdama.style.display === "none") {


    cacherdama.style.display = "block"

    cachermana.style.display = "none"
    cachermanatitle.style.display = "none"

    cachercrit.style.display = "none"
    cachercrittitle.style.display = "none";

    cacherchance.style.display = "none";
    cacherchancetitle.style.display = "none";

    cacherspeedtitle.style.display = "none";
    cacherspeed.style.display = "none";

    cacherstr.style.display = "none";
    cacherstrtitle.style.display = "none";

    cacherdeftitle.style.display = "none";
    cacherdef.style.display = "none";

    cacherhealth.style.display = "none";
    cacherhealthtitle.style.display = "none";

    

  } else {
    cacherdama.style.display = "none";
  }



  var cachertitre = document.getElementById("player_profile_dama");
    if (cachertitre.style.display === "none" ) {
      cachertitre.style.display = "block";
    } else {
      cachertitre.style.display = "none";
    }

  var damages = document.getElementById("DamagesITN").value;
  var leveldumec = document.getElementById("lvldumecITN").value;


  //Défini le pourcentage en fonction du level qu'a tapé le mec
  var sonmultiplicateurdelevel = pourcentparlevel[leveldumec -(1)]

  //Damages
  var newdamages = {
    resultbase: ((sonmultiplicateurdelevel/100) * damages ) + damages*1,
    resultonestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(10/100),
    resulttwostar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(20/100),
    resulttreestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(30/100),
    resultfourstar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(40/100),
    resultfivestar: ((sonmultiplicateurdelevel/100) * damages ) + damages*1 + damages*(50/100),
    };

    document.getElementById("newDamages1").innerHTML=newdamages.resultonestar;
    document.getElementById("newDamages2").innerHTML=newdamages.resulttwostar;
    document.getElementById("newDamages3").innerHTML=newdamages.resulttreestar;
    document.getElementById("newDamages4").innerHTML=newdamages.resultfourstar;
    document.getElementById("newDamages5").innerHTML=newdamages.resultfivestar;
}


function ehp() {


}

  function lul() {



    var newcaca = {
      caca: 0
    }
    
    document.getElementById("newHealth").innerHTML=newcaca.caca
    document.getElementById("newdef").innerHTML=newcaca.caca
    document.getElementById("newstr").innerHTML=newcaca.caca
    document.getElementById("newspeed").innerHTML=newcaca.caca
    document.getElementById("newchance").innerHTML=newcaca.caca
    document.getElementById("newcrit").innerHTML=newcaca.caca
    document.getElementById("newmana").innerHTML=newcaca.caca
    document.getElementById("newdamages").innerHTML=newcaca.caca
    document.getElementById("newDamages1").innerHTML=newcaca.caca
    document.getElementById("newDamages2").innerHTML=newcaca.caca
    document.getElementById("newDamages3").innerHTML=newcaca.caca
    document.getElementById("newDamages4").innerHTML=newcaca.caca
    document.getElementById("newDamages5").innerHTML=newcaca.caca
    document.getElementById("newMana1").innerHTML=newcaca.caca
    document.getElementById("newMana2").innerHTML=newcaca.caca
    document.getElementById("newMana3").innerHTML=newcaca.caca
    document.getElementById("newMana4").innerHTML=newcaca.caca
    document.getElementById("newMana5").innerHTML=newcaca.caca
    document.getElementById("newCrit1").innerHTML=newcaca.caca
    document.getElementById("newCrit2").innerHTML=newcaca.caca
    document.getElementById("newCrit3").innerHTML=newcaca.caca
    document.getElementById("newCrit4").innerHTML=newcaca.caca
    document.getElementById("newCrit5").innerHTML=newcaca.caca
    document.getElementById("newChance1").innerHTML=newcaca.caca
    document.getElementById("newChance2").innerHTML=newcaca.caca
    document.getElementById("newChance3").innerHTML=newcaca.caca
    document.getElementById("newChance4").innerHTML=newcaca.caca
    document.getElementById("newChance5").innerHTML=newcaca.caca
    document.getElementById("newSpeed1").innerHTML=newcaca.caca
    document.getElementById("newSpeed2").innerHTML=newcaca.caca
    document.getElementById("newSpeed3").innerHTML=newcaca.caca
    document.getElementById("newSpeed4").innerHTML=newcaca.caca
    document.getElementById("newSpeed5").innerHTML=newcaca.caca
    document.getElementById("newStrength1").innerHTML=newcaca.caca
    document.getElementById("newStrength2").innerHTML=newcaca.caca
    document.getElementById("newStrength3").innerHTML=newcaca.caca
    document.getElementById("newStrength4").innerHTML=newcaca.caca
    document.getElementById("newStrength5").innerHTML=newcaca.caca
    document.getElementById("newDefence1").innerHTML=newcaca.caca
    document.getElementById("newDefence2").innerHTML=newcaca.caca
    document.getElementById("newDefence3").innerHTML=newcaca.caca
    document.getElementById("newDefence4").innerHTML=newcaca.caca
    document.getElementById("newDefence5").innerHTML=newcaca.caca
    document.getElementById("newHealth1").innerHTML=newcaca.caca
    document.getElementById("newHealth2").innerHTML=newcaca.caca
    document.getElementById("newHealth3").innerHTML=newcaca.caca
    document.getElementById("newHealth4").innerHTML=newcaca.caca
    document.getElementById("newHealth5").innerHTML=newcaca.caca

  }





  function alert() {

    var help = document.getElementById("alert");

    
    if (help.style.display === "none") {

      help.style.display = "block";

    } else {
      help.style.display = "none";
    }
  
      
    }


    function reset(){



      document.getElementById("StrengthITN").value = "";
      document.getElementById("DamagesITN").value = "";
      document.getElementById("cdITN").value = "";
      document.getElementById("chanceITN").value = "";
      document.getElementById("manaITN").value = "";
      document.getElementById("spidITN").value = "";
      document.getElementById("lifeITN").value = "";
      document.getElementById("defITN").value = "";

      lul()

    

     var health = document.getElementById("basic_stats_health");
     var healthtitre = document.getElementById("player_profile_health");

     var def = document.getElementById("basic_stats_def");
     var deftitre = document.getElementById("player_profile_def");

     var str = document.getElementById("basic_stats_str");
     var strtitre = document.getElementById("player_profile_str");

     var speed = document.getElementById("basic_stats_speed");
     var speedtitre = document.getElementById("player_profile_speed");

     var chance = document.getElementById("basic_stats_chance");
     var chancetitre = document.getElementById("player_profile_chance");

     var crit = document.getElementById("basic_stats_crit");
     var crittitre = document.getElementById("player_profile_crit");

     var cachermana = document.getElementById("basic_stats_mana");
     var cachermanatitle = document.getElementById("player_profile_mana");

     var cacherdama = document.getElementById("basic_stats_dama");
     var cacherdamatitle = document.getElementById("player_profile_dama");

     chance.style.display = "none";
     chancetitre.style.display = "none"

     speed.style.display = "none";
     speedtitre.style.display = "none"

     str.style.display = "none";
     strtitre.style.display = "none"

     def.style.display = "none";
     deftitre.style.display = "none"

     health.style.display = "none";
     healthtitre.style.display = "none"

     crit.style.display = "none";
     crittitre.style.display = "none"

     cachermana.style.display = "none"
     cachermanatitle.style.display = "none"

     cacherdama.style.display = "none"
     cacherdamatitle.style.display = "none"

    }

