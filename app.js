// Shared helpers: login session, page guard, navbar
function getUsers(){try{return JSON.parse(localStorage.getItem("users"))||[]}catch(e){return []}}
function currentUser(){const e=localStorage.getItem("session");return getUsers().find(u=>u.email===e)||null}
function requireLogin(){const u=currentUser();if(!u){window.location.href="login.html"}return u}
function logout(){localStorage.removeItem("session");localStorage.removeItem("currentDevice");window.location.href="login.html"}
function getJSON(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}}
function historyKey(){return "history_"+localStorage.getItem("session")}
function renderNav(){
  const pages=[["index.html","Home"],["device.html","Sell a Device"],["history.html","My Trade-Ins"],["profile.html","Profile"]];
  const here=location.pathname.split("/").pop()||"index.html";
  const nav=document.getElementById("nav");if(!nav)return;
  nav.className="navbar";
  nav.innerHTML=pages.map(p=>`<a href="${p[0]}"${p[0]===here?' aria-current="page"':""}>${p[1]}</a>`).join("")+'<a href="#" class="logout" id="logout">Log out</a>';
  document.getElementById("logout").onclick=e=>{e.preventDefault();logout()};
}
const user=document.body.dataset.public?null:requireLogin();
renderNav();
