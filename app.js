function tmMoney(v){
return Number(v || 0).toLocaleString("vi-VN") + "đ";
}

function tmSetText(id, text){
const el = document.getElementById(id);
if(el) el.textContent = text;
}

function tmApplyTheme(){
const theme = localStorage.getItem("theme");
const btn = document.getElementById("themeBtn");

if(theme === "light"){
document.body.classList.add("light");
if(btn) btn.textContent = "☀️ Giao diện";
}else{
document.body.classList.remove("light");
if(btn) btn.textContent = "🌙 Giao diện";
}
}

function tmToggleTheme(){
document.body.classList.toggle("light");
localStorage.setItem(
"theme",
document.body.classList.contains("light") ? "light" : "dark"
);
tmApplyTheme();
}

async function tmLogout(){
try{
if(window.sb){
await sb.auth.signOut();
}
}catch(e){}
localStorage.removeItem("currentUser");
location.href = "login.html";
}

function tmOpenDrawer(){
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
if(drawer) drawer.classList.add("open");
if(overlay) overlay.classList.add("show");
}

function tmCloseDrawer(){
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
if(drawer) drawer.classList.remove("open");
if(overlay) overlay.classList.remove("show");
}

function tmSetActiveMenu(){
const file = location.pathname.split("/").pop() || "home.html";
document.querySelectorAll("[data-link]").forEach(a => {
if(a.getAttribute("data-link") === file){
a.classList.add("active");
}else{
a.classList.remove("active");
}
});
}

function tmBindEscClose(){
document.addEventListener("keydown", (e)=>{
if(e.key === "Escape") tmCloseDrawer();
});
}

function tmInitBodyFade(){
document.body.style.opacity = "0";
document.body.style.transition = "opacity .18s ease";
requestAnimationFrame(()=>{
document.body.style.opacity = "1";
});
}

window.addEventListener("resize", ()=>{
if(window.innerWidth > 900) tmCloseDrawer();
});

document.addEventListener("DOMContentLoaded", ()=>{
tmApplyTheme();
tmSetActiveMenu();
tmBindEscClose();
tmInitBodyFade();
});
