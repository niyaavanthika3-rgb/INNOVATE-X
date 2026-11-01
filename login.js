let mode="login";
const $=id=>document.getElementById(id);
function getUsers(){try{return JSON.parse(localStorage.getItem("users"))||[]}catch(e){return []}}
if(localStorage.getItem("session")&&getUsers().some(u=>u.email===localStorage.getItem("session"))){location.href="index.html"}
function setMode(m){
  mode=m;$("name-wrap").hidden=m==="login";$("name").required=m!=="login";
  $("submit").textContent=m==="login"?"Log in":"Create account";$("error").textContent="";
  $("tab-login").className=m==="login"?"":"secondary";$("tab-register").className=m==="login"?"secondary":"";
}
$("tab-login").onclick=()=>setMode("login");
$("tab-register").onclick=()=>setMode("register");
$("form").onsubmit=e=>{
  e.preventDefault();
  const email=$("email").value.trim().toLowerCase(),password=$("password").value,users=getUsers();
  if(mode==="register"){
    if(users.some(u=>u.email===email)){$("error").textContent="This email already has an account. Log in instead.";return}
    users.push({name:$("name").value.trim(),email,password});
    localStorage.setItem("users",JSON.stringify(users));
  }else if(!users.some(u=>u.email===email&&u.password===password)){
    $("error").textContent="Email or password is incorrect.";return;
  }
  localStorage.setItem("session",email);
  location.href="index.html";
};
