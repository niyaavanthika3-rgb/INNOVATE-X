const d=getJSON("currentDevice");
if(!d||!d.offer){location.href="device.html"}
else{
  document.getElementById("summary").textContent=d.brand+" "+d.model+" ("+d.storage+" GB), condition: "+d.condition;
  document.getElementById("offer").textContent="Rs "+d.offer.toLocaleString("en-IN");
  function finish(status){
    const list=getJSON(historyKey())||[];
    list.unshift({...d,status,date:new Date().toLocaleDateString("en-IN")});
    localStorage.setItem(historyKey(),JSON.stringify(list));
    localStorage.removeItem("currentDevice");
    location.href="history.html";
  }
  document.getElementById("accept").onclick=()=>finish("Accepted");
  document.getElementById("reject").onclick=()=>finish("Rejected");
}
