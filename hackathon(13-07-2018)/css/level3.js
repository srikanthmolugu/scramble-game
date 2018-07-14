$(document).ready(function(){
    var button = ""
    //var answer="";
    //var e=getElementByClassName("content").$(getElementById("button1")).value;
    $('.button').click(function(e){ 
        button += $(this)[0].value;
        console.log(button);
        document.getElementById("answer1").innerHTML=button;
     })
     $('#submit').click(function(){
         if(button=="HEXAD"){
             alert("U R DONE");
             window.location="file:///D:/workshop/hackathon(13-07-2018)/html/congratulations.html";
         }
         else{
             alert("GAME OVER");
             window.location="file:///D:/workshop/hackathon(13-07-2018)/html/welcome1.html";
         } 
    } )
     
});