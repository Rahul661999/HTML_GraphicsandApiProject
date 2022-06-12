window.onload= setLocation;
function setLocation()
{
    var x = document.getElementById("location");

    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition);
    }
    else{
        x.innerHTML="Geolocation is not supported by this browser.";
    }
}

function showPosition(position){
    var x= document.getElementById("location");
    x.innerHTML="Location Details:Latitude: "+ position.coords.latitude + "Longitude: "+ position.coords.longitude;

}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag1(ev)
{
    var var2=4;
    document.getElementById("myText1").innerHTML= --var2;
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag2(ev)
{
    var var2=1;
    document.getElementById("myText2").innerHTML= --var2;
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag3(ev)
{
    var var2=2;

    document.getElementById("myText3").innerHTML= --var2;
    ev.dataTransfer.setData("text",ev.target.id);
}

function drag4(ev)
{
    var var2=0;

    document.getElementById("myText4").innerHTML= --var2;
    ev.dataTransfer.setData("text",ev.target.id);
}



function drop1(ev)
{
    var var1=4;
    document.getElementById("myText1").innerHTML=var1++;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);
    updateAllDivCount();

}

function drop2(ev)
{
    var var2=1;
    document.getElementById("myText2").innerHTML=var2++;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);
    updateAllDivCount();
    
}

function drop3(ev)
{
    var var3=2;
    document.getElementById("myText3").innerHTML=var3++;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);
    updateAllDivCount();
    
}

function drop4(ev)
{
    var var4=0;
    document.getElementById("myText4").innerHTML=var4++;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(ev);
    updateAllDivCount();
    
}


function updateAllDivCount()
{
    localStorage.setItem("myText1",document.getElementById("draglist1").childElementCount-1);
    document.getElementById("myText1").innerHTML= localStorage.getItem("myText1");

    localStorage.setItem("myText2",document.getElementById("draglist2").childElementCount-1);
    document.getElementById("myText2").innerHTML= localStorage.getItem("myText2");

    localStorage.setItem("myText3",document.getElementById("draglist3").childElementCount-1);
    document.getElementById("myText3").innerHTML= localStorage.getItem("myText3");

    localStorage.setItem("myText4",document.getElementById("draglist4").childElementCount-1);
    document.getElementById("myText4").innerHTML= localStorage.getItem("myText4");
}
