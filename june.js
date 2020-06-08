//<색깔>
//var month 변수에서 값을 받아와서 그 값대로 html 텍스트 변경, 해당 박스 안 색깔 변경, 배경 색깔 변경 
const pageBack=document.querySelector('body')
const boxBack=document.querySelector('#colorbox')
var month=4
var day=17

if(month===1){
    pageBack.style.backgroundColor="#d9947c";
    boxBack.style.backgroundColor="#d9947c";
}
else if(month===2){
    pageBack.style.backgroundColor="#bf9acb";
    boxBack.style.backgroundColor="#bf9acb";
}
else if(month===3){
    pageBack.style.backgroundColor="#c1e9e3";
    boxBack.style.backgroundColor="#c1e9e3";
}
else if(month===4){
    pageBack.style.backgroundColor="#dd4b55";
    boxBack.style.backgroundColor="#dd4b55";
}
else if(month===5){
    pageBack.style.backgroundColor="#7cb268";
    boxBack.style.backgroundColor="#7cb268";
}
else if(month===6){
    pageBack.style.backgroundColor="#fed762";
    boxBack.style.backgroundColor="#fed762";
}
else if(month===7){
    pageBack.style.backgroundColor="#e8b8c2";
    boxBack.style.backgroundColor="#e8b8c2";
}
else if(month===8){
    pageBack.style.backgroundColor="#f08042";
    boxBack.style.backgroundColor="#f08042";
}
else if(month===9){
    pageBack.style.backgroundColor="#5367af";
    boxBack.style.backgroundColor="#5367af";
}
else if(month===10){
    pageBack.style.backgroundColor="#9bb8d4";
    boxBack.style.backgroundColor="#9bb8d4";
}
else if(month===11){
    pageBack.style.backgroundColor="#bf4c66";
    boxBack.style.backgroundColor="#bf4c66";
}
else if(month===12){
    pageBack.style.backgroundColor="#228090";
    boxBack.style.backgroundColor="#228090";
}