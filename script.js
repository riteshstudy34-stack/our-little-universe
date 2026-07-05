// ⭐ Stars
for(let i=0;i<200;i++){
let s=document.createElement("div");
s.className="star";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
s.style.animationDelay=Math.random()*2+"s";
document.body.appendChild(s);
}

// ❤️ Hearts
for(let i=0;i<40;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.fontSize=(15+Math.random()*20)+"px";
h.style.animationDuration=(5+Math.random()*6)+"s";
document.body.appendChild(h);
}

// 🌠 Shooting Stars
for(let i=0;i<6;i++){
let sh=document.createElement("div");
sh.className="shooting";
sh.style.left=Math.random()*100+"vw";
sh.style.top=Math.random()*40+"vh";
sh.style.animationDuration=(3+Math.random()*3)+"s";
sh.style.animationDelay=(Math.random()*5)+"s";
document.body.appendChild(sh);
}

// 💖 Button Effect (Only if button exists)
const btn = document.getElementById("enterBtn");

if(btn){

btn.addEventListener("click",()=>{

for(let i=0;i<25;i++){

let heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=(window.innerWidth/2)+"px";
heart.style.top=(window.innerHeight/2)+"px";
heart.style.fontSize="25px";
heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.left=(window.innerWidth/2+(Math.random()-0.5)*500)+"px";

heart.style.top=(window.innerHeight/2+(Math.random()-0.5)*500)+"px";

heart.style.opacity="0";

},10);

setTimeout(()=>heart.remove(),1000);

}

setTimeout(()=>{

window.location.href="letter.html";

},800);

});

}

// ❤️ Love Timer (Only on final page)

const timer = document.getElementById("loveTimer");

if(timer){

const startDate = new Date("2026-05-05T00:00:00");

function updateLoveTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

const minutes = Math.floor((diff/(1000*60))%60);

const seconds = Math.floor((diff/1000)%60);

timer.innerHTML = `
❤️ ${days} Days<br>
🕒 ${hours} Hours<br>
⏰ ${minutes} Minutes<br>
✨ ${seconds} Seconds
`;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

}
