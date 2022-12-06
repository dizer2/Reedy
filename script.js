// localStorage.setItem('username', 'Vitalok');


// let usename = localStorage.getItem('username');
// console.log(usename)

let btnColor = localStorage.getItem("btnColor") ||  "#000";
let bgColor = localStorage.getItem("bgColor") ||  "#fff";

$(".wrap").css("backgroundColor", bgColor);
$(".btn").css("backgroundColor", btnColor);



btn.onclick = function(){ 
       
if (btnColor == "#000" && bgColor == "#fff") {
  localStorage.setItem("btnColor", "#fff");
  localStorage.setItem("bgColor", "#000");
  $(".wrap").css("backgroundColor", '#000');
  $(".btn").css("backgroundColor", '#fff');

}else if (btnColor == "#fff" && bgColor == "#000"){
  localStorage.setItem("btnColor", "#000");
  localStorage.setItem("bgColor", "#fff");
  $(".wrap").css("backgroundColor", '#fff');
  $(".btn").css("backgroundColor", '#000');

 }
}








