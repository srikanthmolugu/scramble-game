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
         if(button=="ZUPA"){
             alert("u r done");
             window.location="scramble-game/hackathon(13-07-2018)/html/level2.html";
         }
         else{
             alert("game over");
             window.location="../html/welcome1.html";
         } 
    } )
     
});
