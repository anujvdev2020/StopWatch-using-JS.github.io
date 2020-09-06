var d=document.getElementById('displays');
var dm=document.getElementById('displayms');
var dmin=document.getElementById('displaym');
var s=00;
var ms=00;
var m=00;
var c;
function start(){
  ms++;
  if(ms>99){
    s++;
    ms=00;
  }
  if(s>59){
    m++;
    s=00;
  }
    
  d.innerHTML=""+s;
dm.innerHTML=""+ms;
  dmin.innerHTML=""+m;
}
var startbtn=document.getElementById('onstart');
startbtn.onclick=()=>{
  // console.log("ddd");
  c=setInterval(start,10);
  
 
}

var stopbtn=document.getElementById('stop');
stopbtn.onclick=()=>{
  // console.log("eee");
   clearInterval(c);
}
var resetbtn=document.getElementById('reset');
resetbtn.onclick=()=>{
  
  
  m=0;
  s=0;
  ms=0;
  d.innerHTML="00";
dm.innerHTML="00";
  dmin.innerHTML="00";
}