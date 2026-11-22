/* Creative intro: the Pegasus logo flies in from the left, swoops across the screen
   and docks into its place in the header. Skippable, auto-cleans, respects reduced motion. */
(function(){
const html=document.documentElement;
if(!html.classList.contains("intro-on"))return;
const q=s=>document.querySelector(s);
const intro=q("#intro"),logo=q("#introLogo"),tag=q(".i-tag"),glow=q(".i-glow"),ring=q(".i-ring"),skip=q("#introSkip"),target=q("header img");
if(!intro||!logo||!target){html.classList.remove("intro-on");return}
let over=false;const rnd=(a,b)=>a+Math.random()*(b-a);

/* size + place the big logo at screen centre (a little above) */
const W=Math.min(innerWidth*.8,520),H=W*170/691,L=(innerWidth-W)/2,T=(innerHeight-H)/2-innerHeight*.05;
Object.assign(logo.style,{width:W+"px",height:H+"px",left:L+"px",top:T+"px"});
tag.style.top=(T+H+34)+"px";
glow.style.top=(T+H/2)+"px";ring.style.top=(T+H/2)+"px";

/* wind streaks behind the logo */
for(let i=0;i<9;i++){const s=document.createElement("div");s.className="i-streak";s.style.top=(T+H/2+rnd(-H*1.1,H*1.1))+"px";s.style.width=rnd(24,52)+"vw";intro.appendChild(s);
 s.animate([{transform:"translateX(-70vw)",opacity:0},{opacity:.9,offset:.25},{transform:"translateX(125vw)",opacity:0}],{duration:rnd(750,1250),delay:rnd(0,750),easing:"cubic-bezier(.4,0,.8,.6)"})}

/* sparkles */
function spark(x,y,dx,dy,size,dur){const e=document.createElement("i");e.className="i-sp";e.style.cssText=`left:${x}px;top:${y}px;width:${size}px;height:${size}px`;document.body.appendChild(e);
 e.animate([{transform:"translate(0,0) scale(1)",opacity:1},{transform:`translate(${dx}px,${dy}px) scale(0)`,opacity:0}],{duration:dur,easing:"ease-out"}).onfinish=()=>e.remove()}
const t0=performance.now();
(function trail(){if(over)return;const r=logo.getBoundingClientRect();
 if(performance.now()-t0<1200){for(let i=0;i<2;i++)spark(r.left+r.width*rnd(.05,.4),r.top+r.height*rnd(.05,.95),rnd(-170,-50),rnd(-50,50),rnd(3,8),rnd(500,900));requestAnimationFrame(trail)}})();

/* 1) fly in from the left on a swooping curve */
const fly=logo.animate([
 {transform:`translate(${-(L+W+120)}px,${innerHeight*.22}px) rotate(-16deg) scale(.55)`,filter:"blur(12px) drop-shadow(0 0 30px rgba(168,85,247,.7))"},
 {transform:`translate(${-innerWidth*.26}px,${-innerHeight*.14}px) rotate(-7deg) scale(.82)`,filter:"blur(5px) drop-shadow(0 0 30px rgba(168,85,247,.7))",offset:.38},
 {transform:`translate(${innerWidth*.05}px,${innerHeight*.05}px) rotate(3deg) scale(1.1)`,filter:"blur(0) drop-shadow(0 0 40px rgba(192,132,252,.9))",offset:.7},
 {transform:`translate(${-innerWidth*.015}px,${-innerHeight*.012}px) rotate(-1deg) scale(.98)`,offset:.86},
 {transform:"translate(0,0) rotate(0) scale(1)",filter:"blur(0) drop-shadow(0 0 30px rgba(168,85,247,.7))"}
],{duration:1150,easing:"cubic-bezier(.22,.75,.3,1)",fill:"forwards"});
glow.animate([{opacity:0,transform:"scale(.5)"},{opacity:1,transform:"scale(1)"}],{duration:1500,delay:300,fill:"forwards",easing:"ease-out"});

fly.finished.then(()=>{if(over)return;
 ring.animate([{opacity:.9,transform:"scale(.4)"},{opacity:0,transform:"scale(3.2)"}],{duration:1200,easing:"ease-out"});
 logo.querySelector(".shine").animate([{backgroundPosition:"150% 0"},{backgroundPosition:"-150% 0"}],{duration:1100,easing:"ease-in-out"});
 logo.animate([{filter:"drop-shadow(0 0 30px rgba(168,85,247,.7))"},{filter:"drop-shadow(0 0 64px rgba(216,180,254,1))"},{filter:"drop-shadow(0 0 30px rgba(168,85,247,.7))"}],{duration:1000});
 tag.animate([{opacity:0,transform:"translateY(16px)"},{opacity:1,transform:"none"}],{duration:700,fill:"forwards",easing:"ease-out"});
 setTimeout(dock,650)});

/* 2) dock into the header */
function dock(){if(over)return;
 tag.animate([{opacity:1},{opacity:0}],{duration:300,fill:"forwards"});
 const r=logo.getBoundingClientRect(),t=target.getBoundingClientRect();
 const dx=t.left+t.width/2-(r.left+r.width/2),dy=t.top+t.height/2-(r.top+r.height/2),s=t.width/r.width;
 const a=logo.animate([
  {transform:"translate(0,0) rotate(0) scale(1)"},
  {transform:`translate(${dx*.45}px,${dy*.45-60}px) rotate(-5deg) scale(${(1+s)/2})`,offset:.55},
  {transform:`translate(${dx}px,${dy}px) rotate(0) scale(${s})`}
 ],{duration:850,easing:"cubic-bezier(.65,0,.25,1)",fill:"forwards"});
 intro.animate([{opacity:1},{opacity:0}],{duration:900,delay:260,fill:"forwards",easing:"ease-in"});
 a.finished.then(()=>land(true))}

/* 3) land: reveal the real header logo + burst */
function land(burst){if(over)return;over=true;
 const t=target.getBoundingClientRect(),cx=t.left+t.width/2,cy=t.top+t.height/2;
 html.classList.remove("intro-on");
 target.classList.add("land");
 [intro,logo,skip].forEach(e=>e&&e.remove());
 document.querySelectorAll(".i-sp").forEach(e=>e.remove());
 if(!burst)return;
 const b=document.createElement("div");b.className="i-burst";b.style.cssText=`left:${cx-30}px;top:${cy-30}px;width:60px;height:60px`;document.body.appendChild(b);
 b.animate([{transform:"scale(.3)",opacity:1},{transform:"scale(4.5)",opacity:0}],{duration:900,easing:"ease-out"}).onfinish=()=>b.remove();
 for(let i=0;i<18;i++){const ang=i/18*6.283+rnd(-.15,.15),d=rnd(50,130);spark(cx,cy,Math.cos(ang)*d,Math.sin(ang)*d,rnd(3,7),rnd(600,1000))}}

skip.addEventListener("click",()=>land(false));
addEventListener("keydown",e=>{if(!over&&(e.key==="Escape"||e.key==="Enter"||e.key===" "))land(false)});
setTimeout(()=>land(false),4500); /* failsafe */
})();

