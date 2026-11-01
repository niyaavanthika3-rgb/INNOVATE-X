const device=getJSON("currentDevice");
if(!device){location.href="device.html"}
else{
  document.getElementById("summary").textContent=device.brand+" "+device.model+", "+device.storage+" GB, bought "+device.year+".";
  document.getElementById("form").onsubmit=e=>{
    e.preventDefault();
    const r=document.querySelector('input[name="cond"]:checked');
    const label=r.closest("label").querySelector("b").textContent;
    const age=new Date().getFullYear()-device.year;
    const ageFactor=Math.max(0.3,1-age*0.12);
    const storageBonus=1+(device.storage-64)/64*0.04;
    device.condition=label;
    device.offer=Math.round(device.price*Number(r.value)*ageFactor*storageBonus/10)*10;
    localStorage.setItem("currentDevice",JSON.stringify(device));
    location.href="offer.html";
  };
}
