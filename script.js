var heading=document.getElementById("colorname");
var buttons=document.getElementsByClassName("bt");

var ans=document.getElementById("answer");
function makecolor(){
  return Math.round(Math.random()*255);
}
function setcolor(button,red,green,blue){
  button.setAttribute("style",'background-color:rgb('+red+','+green+','+blue+');');

}
function startgame(){
var chance=3;
var answerbt=Math.round(Math.random()*(buttons.length-1))
for(var i=0;i<buttons.length;i++){
  var red=makecolor();
  var green=makecolor();
  var blue=makecolor();
  setcolor(buttons[i],red,green,blue);
  if(i===answerbt){
    heading.innerHTML="("+red+","+green+","+blue+")";
  }
  buttons[i].addEventListener("click",function(){

    if(this==buttons[answerbt]){
      ans.innerHTML="Hurray!Your Guess Is Correct!"
    }else{
      chance-=1
      ans.innerHTML="Sorry!Your Guess Is Not Correct!.Your Chances left "+chance;
      if(chance==0){
          ans.innerHTML="You Lost";

      }
    }
  });
}
ans.innerHTML="";
}
startgame();

var reset=document.getElementById("reset");
reset.addEventListener("click",startgame)
