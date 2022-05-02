// write js code here corresponding to matches.html
var matchstore= JSON.parse(localStorage.getItem("schedule"));

displayMatch(matchstore);



function venufilter(){
    var selected= document.querySelector("#filterVenue").value;
    var filterList= matchstore.filter(function (elem){
        if("none"==selected){
            return window.location.reload();
        }else{
            return elem.ven==selected
            
        }
        
    })

    displayMatch(filterList);
}


var favArr=JSON.parse(localStorage.getItem("favourites")) || [];

function displayMatch(matchstore){
    document.querySelector("tbody").innerHTML="";
    matchstore.forEach(function(elem) {
        var tr=document.createElement("tr");


        var td1=document.createElement("td");
        td1.innerText=elem.matNu;

        var td2=document.createElement("td");
        td2.innerText=elem.teamA;

        var td3=document.createElement("td");
        td3.innerText=elem.teamB;

        var td4=document.createElement("td");
        td4.innerText=elem.date;

        var td5=document.createElement("td");
        td5.innerText=elem.ven;

        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            favfunction(elem);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        
    });
}

function favfunction(elem){
    favArr.push(elem);
    localStorage.setItem("favourites", JSON.stringify(favArr));
} 
