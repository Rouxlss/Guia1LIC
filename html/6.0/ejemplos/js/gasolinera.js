
select = document.getElementById("cantidad");
total=document.getElementById("sub");
var diesel=document.getElementById("diesel");
var regular=document.getElementById("regular");
var especial=document.getElementById("especial");
for(i = 1; i <= 150; i++){
  option = document.createElement("option");
  option.value = i;
  option.text = i;
  select.appendChild(option);
}
function agregar(){
total=+diesel.value*option.value;
}
