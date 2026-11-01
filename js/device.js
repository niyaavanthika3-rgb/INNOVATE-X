document.getElementById("year").max=new Date().getFullYear();
document.getElementById("name").value=user.name;
function saveDevice(event){
  event.preventDefault();
  const v=id=>document.getElementById(id).value.trim();
  const device={name:v("name"),phone:v("phone"),brand:v("brand"),model:v("model"),
    storage:Number(v("storage")),year:Number(v("year")),price:Number(v("price"))};
  localStorage.setItem("currentDevice",JSON.stringify(device));
  location.href="condition.html";
}
