// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",matchsubmit)
var matchArr=JSON.parse(localStorage.getItem("schedule")) || [];

function matchsubmit(){
    event.preventDefault();

   var obj= {
       matNu : masaiForm.matchNum.value,
       teamA : masaiForm.teamA.value,
       teamB : masaiForm.teamA.value,
       date : masaiForm.date.value,
       ven : masaiForm.venue.value,
    }
    matchArr.push(obj);
    console.log(matchArr);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.href="matches.html" ;  

}

