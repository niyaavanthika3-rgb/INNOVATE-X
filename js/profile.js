const h=getJSON(historyKey())||[];
const acc=h.filter(t=>t.status==="Accepted");
document.getElementById("show-name").textContent=user.name;
document.getElementById("show-email").textContent=user.email;
document.getElementById("show-count").textContent=h.length+" ("+acc.length+" accepted)";
document.getElementById("show-total").textContent="Rs "+acc.reduce((s,t)=>s+t.offer,0).toLocaleString("en-IN");
document.getElementById("clear").onclick=()=>{
  if(confirm("Delete all your trade-in history?")){localStorage.removeItem(historyKey());location.reload()}
};
document.getElementById("out").onclick=logout;
