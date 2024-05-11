let inputBox = document.getElementById("displayBox");
let buttons = document.querySelectorAll("button");

function display(value){
    inputBox.value+=value;
}
function calculation(){
   let a=  inputBox.value;
   let b = eval(a);
   inputBox.value=b;
}
function clearAll(){
    inputBox.value="";
}