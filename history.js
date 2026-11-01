const items=getJSON(historyKey())||[];
const list=document.getElementById("list");
if(!items.length){document.getElementById("message").textContent="No trade-ins yet. Sell your first device to see it here."}
items.forEach(t=>{
  const div=document.createElement("div");div.className="item";
  const h=document.createElement("b");h.textContent=t.brand+" "+t.model+" ("+t.storage+" GB)";
  const p=document.createElement("div");
  p.textContent=t.date+" | "+t.condition+" | Rs "+t.offer.toLocaleString("en-IN")+" | ";
  const s=document.createElement("span");s.className="tag "+t.status;s.textContent=t.status;p.appendChild(s);
  div.append(h,p);list.appendChild(div);
});
