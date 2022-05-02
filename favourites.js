// write js code here corresponding to favourites.html
var favArr=JSON.parse(localStorage.getItem("favourites"));
displayMatch(favArr);

function displayMatch(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem, ind) {
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
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            del(elem,ind);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr);
        
    });
}

function del(elem, ind){  
    favArr.splice(ind, 1);
    localStorage.setItem("favourites", JSON.stringify(favArr));
    window.location.reload(); 

}