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

// ❤️ Timer
const timer=document.getElementById("loveTimer");

if(timer){

const startDate=new Date("2026-05-05T00:00:00");

function updateLoveTimer(){

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

const hours=Math.floor((diff/(1000*60*60))%24);

const minutes=Math.floor((diff/(1000*60))%60);

const seconds=Math.floor((diff/1000)%60);

timer.innerHTML=`
❤️ ${days} Days<br>
🕒 ${hours} Hours<br>
⏰ ${minutes} Minutes<br>
✨ ${seconds} Seconds
`;

}

updateLoveTimer();

setInterval(updateLoveTimer,1000);

}

// 🎵 Music
const music=document.getElementById("bgMusic");

if(music){

const saved=localStorage.getItem("musicTime");

if(saved){
music.currentTime=parseFloat(saved);
}

music.volume=0;

document.addEventListener("click",()=>{

music.play().catch(()=>{});

let vol=0;

const fade=setInterval(()=>{

if(vol<0.4){

vol+=0.02;

music.volume=vol;

}else{

clearInterval(fade);

}

},150);

},{once:true});

setInterval(()=>{

localStorage.setItem("musicTime",music.currentTime);

},500);

}
