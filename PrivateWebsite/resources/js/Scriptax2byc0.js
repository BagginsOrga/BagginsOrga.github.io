function clickbuttfunc() {
    var a = document.getElementById("StrengthITN").value;
    
    var b = document.getElementById("cdITN").value;
    var c = document.getElementById("chanceITN").value;

    var delta = (b*b)-(4*a*c)
{
if (delta > 0)
   var possible = "yes"
   var x1 = (-b + Math.sqrt(delta))/(2*a)
   var x2 = (-b - Math.sqrt(delta))/(2*a);

if (delta < 0)
   var possible = "no"
}

    //Voilà l'exemple (j'ai juste logué parsque je voi rien sur ton IHM) : 

    document.getElementById("newHealth").innerHTML=possible;
    

    document.getElementById("newdef").innerHTML=x1;


    document.getElementById("newstr").innerHTML=x2;


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

        document.getElementById("newHealth1").innerHTML=newlife.resultonestar;
        document.getElementById("newHealth2").innerHTML=newlife.resulttwostar;
        document.getElementById("newHealth3").innerHTML=newlife.resulttreestar;
        document.getElementById("newHealth4").innerHTML=newlife.resultfourstar;
        document.getElementById("newHealth5").innerHTML=newlife.resultfivestar;
    

}

function clickdefence() {
    document.getElementById("newDefence1").innerHTML=newdef.resultonestar;
    document.getElementById("newDefence2").innerHTML=newdef.resulttwostar;
    document.getElementById("newDefence3").innerHTML=newdef.resulttreestar;
    document.getElementById("newDefence4").innerHTML=newdef.resultfourstar;
    document.getElementById("newDefence5").innerHTML=newdef.resultfivestar;
}

function clickstrength() {
    document.getElementById("newStrength1").innerHTML=newstrength.resultonestar;
    document.getElementById("newStrength2").innerHTML=newstrength.resulttwostar;
    document.getElementById("newStrength3").innerHTML=newstrength.resulttreestar;
    document.getElementById("newStrength4").innerHTML=newstrength.resultfourstar;
    document.getElementById("newStrength5").innerHTML=newstrength.resultfivestar;
}

function clickspeed() {
    document.getElementById("newSpeed1").innerHTML=newspeed.resultonestar;
    document.getElementById("newSpeed2").innerHTML=newspeed.resulttwostar;
    document.getElementById("newSpeed3").innerHTML=newspeed.resulttreestar;
    document.getElementById("newSpeed4").innerHTML=newspeed.resultfourstar;
    document.getElementById("newSpeed5").innerHTML=newspeed.resultfivestar;
}

function clickchance() {
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

