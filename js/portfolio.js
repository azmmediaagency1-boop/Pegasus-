const NUM="966509877538",wa=m=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(m),$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const UPLOADS=["assets/upload-01.webp","assets/upload-02.webp","assets/upload-03.webp","assets/upload-04.webp","assets/upload-05.webp","assets/upload-06.webp","assets/upload-07.webp","assets/upload-08.webp","assets/upload-09.webp","assets/upload-10.webp","assets/upload-11.webp","assets/upload-12.webp","assets/upload-13.webp","assets/upload-14.webp","assets/upload-15.webp","assets/upload-16.webp","assets/upload-17.webp","assets/upload-18.webp","assets/upload-19.webp","assets/upload-20.webp","assets/upload-21.webp","assets/upload-22.webp","assets/upload-23.webp","assets/upload-24.webp","assets/upload-25.webp","assets/upload-26.webp","assets/upload-27.webp","assets/upload-28.webp","assets/upload-29.webp","assets/upload-30.webp","assets/upload-31.webp","assets/upload-32.webp","assets/upload-33.webp","assets/upload-34.webp","assets/upload-35.webp","assets/upload-36.webp","assets/upload-37.webp","assets/upload-38.webp","assets/upload-39.webp","assets/upload-40.webp","assets/upload-41.webp","assets/upload-42.webp","assets/upload-43.webp","assets/upload-44.webp","assets/upload-45.webp","assets/upload-46.webp","assets/upload-47.webp","assets/upload-48.webp"];
const u=n=>UPLOADS[n-1];
/* التصاميم: أربع تصاميم فقط لكل شركة (الصور المرفوعة)، بدون أي هوية بصرية جواها */
const U={
 empower:[24,25,26,27].map(u), shatti:[28,29,30,31].map(u), alora:[16,17,18,19].map(u), lq:[20,21,22,23].map(u),
 lj:[40,44,45,48].map(u), blk:[12,13,14,15].map(u), fw:[35,42,43,46].map(u), iman:[4,5,6,33].map(u),
 costa:[3,7,8,32].map(u), amin:[1,2,9,10].map(u), global:[34,37,38,39].map(u), peg:[11,36,41,47].map(u)
};
/* [المفتاح، الاسم، الصور، اللوجو] */
const DESIGNS=[
 ["em","إيمباور فينشرز",U.empower,"assets/l_em.webp"],
 ["sh","الشطي الكويتية",U.shatti,"assets/l_sh.webp"],
 ["alora","ألورا",U.alora,"assets/l_al.webp"],
 ["lq","لقطة",U.lq,"assets/l_lq.webp"],
 ["lj","لأجلك",U.lj,"assets/l_lj.webp"],
 ["blk","بلوكة",U.blk,"assets/l_blk.webp"],
 ["fw","فوري",U.fw,"assets/l_fw.webp"],
 ["iman","الإيمان للسياحة",U.iman,"assets/l_eman.webp"],
 ["costa","كوستا هايتس",U.costa,"assets/logo-costa.webp"],
 ["amin","محمصة الأمين",U.amin,"assets/logo-amin.webp"],
 ["global","الشركة العالمية",U.global,"assets/logo-global.webp"],
 ["peg","بيجاسوس",U.peg,"assets/logo.png"]
];
const BRANDID=["assets/identity-01.webp","assets/identity-02.webp","assets/identity-03.webp","assets/identity-04.webp","assets/identity-05.webp","assets/identity-06.webp","assets/identity-07.webp","assets/identity-08.webp","assets/identity-09.webp","assets/identity-10.webp","assets/identity-11.webp","assets/identity-12.webp","assets/identity-13.webp","assets/identity-14.webp","assets/identity-15.webp","assets/identity-16.webp","assets/identity-17.webp","assets/identity-18.webp"];
const FAWRY_ID=Array.from({length:26},(_,i)=>`assets/fawry-identity-${String(i+1).padStart(2,"0")}.webp`);
const LEAJLAK_ID=Array.from({length:36},(_,i)=>`assets/leajlak-identity-${String(i+1).padStart(2,"0")}.webp`);
/* الهويات البصرية: كل الهويات هنا فقط */
const IDENTITIES=[
 ["pid","بيجاسوس",G.pid,"assets/logo.png"],
 ["fw","فوري",FAWRY_ID,"assets/l_fw.webp"],
 ["lid","لأجلك",LEAJLAK_ID,"assets/l_lj.webp"],
 ["shm","الشطي الكويتية",G.shm,"assets/l_sh.webp"]
];

const lightbox=$("#lightbox"),lightboxImage=$("#lightbox-img"),lightboxCaption=$("#lightbox-caption");
let currentImages=[],currentIndex=0,currentCompany="";
function showImage(i){currentIndex=(i+currentImages.length)%currentImages.length;lightboxImage.src=currentImages[currentIndex];lightboxCaption.textContent=`${currentCompany} · ${currentIndex+1} / ${currentImages.length}`;
 const multi=currentImages.length>1;$("#prev").hidden=$("#next").hidden=!multi}
function openBox(images,company,index){currentImages=images;currentCompany=company;showImage(index);lightbox.showModal()}

function makeGallery({tabs:tabsSel,bar:barSel,grid:gridSel,list,kind,noun,msg}){
 const tabs=$(tabsSel),bar=$(barSel),grid=$(gridSel);let active=0;
 const ini=c=>c[3]?`<img class="${c[3].includes("logo.png")?"plogo":""}" src="${c[3]}" alt="" loading="lazy">`:`<span class="ini">${c[4]||c[1][0]}</span>`;
 tabs.innerHTML=list.map((c,i)=>`<button type="button" class="ctab${i?"":" on"}" data-i="${i}" aria-pressed="${i===0}">${ini(c)}<span>${c[1]}</span></button>`).join("");
 function render(){const c=list[active],imgs=c[2];
  bar.innerHTML=`<div><h3>${c[1]}</h3><p>${imgs.length} ${noun(imgs.length)}</p></div><a class="btn ghost" target="_blank" rel="noopener" href="${wa(msg(c[1]))}">${kind==="d"?"أبغى تصميم بنفس المستوى":"أبغى هوية بنفس المستوى"}</a>`;
  grid.innerHTML=imgs.map((src,i)=>kind==="d"
   ?`<button type="button" class="dcard" data-i="${i}" style="--i:${i};--img:url('${src}')" aria-label="عرض ${c[1]}، تصميم ${i+1}"><img src="${src}" alt="${c[1]} · تصميم ${i+1}" loading="lazy"></button>`
   :`<button type="button" data-i="${i}" style="--i:${Math.min(i,14)}" aria-label="عرض ${c[1]}، صورة ${i+1}"><img src="${src}" alt="${c[1]} · هوية ${i+1}" loading="lazy"></button>`).join("");
  grid._imgs=imgs;grid._name=c[1]}
 tabs.addEventListener("click",e=>{const b=e.target.closest(".ctab");if(!b)return;active=+b.dataset.i;
  tabs.querySelectorAll(".ctab").forEach((x,i)=>{x.classList.toggle("on",i===active);x.setAttribute("aria-pressed",String(i===active))});
  b.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"});render()});
 grid.addEventListener("click",e=>{const b=e.target.closest("button[data-i]");if(b&&grid._imgs.length)openBox(grid._imgs,grid._name,+b.dataset.i)});
 render();
}
makeGallery({tabs:"#design-tabs",bar:"#design-bar",grid:"#design-grid",list:DESIGNS,kind:"d",noun:()=>"تصاميم",msg:n=>"هلا والله، شفت تصاميم "+n+" في موقعكم وأبغى تصاميم بنفس المستوى"});
makeGallery({tabs:"#identity-tabs",bar:"#identity-bar",grid:"#identity-grid",list:IDENTITIES,kind:"i",noun:n=>n===1?"صورة":"صورة",msg:n=>"هلا والله، شفت هوية "+n+" في موقعكم وأبغى هوية بنفس المستوى"});

$("#prev").onclick=()=>showImage(currentIndex-1);$("#next").onclick=()=>showImage(currentIndex+1);$("#close-lightbox").onclick=()=>lightbox.close();
lightbox.addEventListener("click",e=>{if(e.target===lightbox)lightbox.close()});
addEventListener("keydown",e=>{if(!lightbox.open)return;if(e.key==="ArrowLeft")showImage(currentIndex+1);if(e.key==="ArrowRight")showImage(currentIndex-1)});
let tx=0;lightbox.addEventListener("touchstart",e=>{tx=e.changedTouches[0].clientX},{passive:true});
lightbox.addEventListener("touchend",e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50&&currentImages.length>1)showImage(currentIndex+(d<0?1:-1))},{passive:true});

$$(".wal").forEach(a=>{a.href=wa(a.dataset.m);a.target="_blank";a.rel="noopener"});
$("#menu").onclick=()=>$("#nav").classList.toggle("open");$$("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
const fx=$("#fx");addEventListener("pointermove",e=>{fx.style.setProperty("--x",e.clientX+"px");fx.style.setProperty("--y",e.clientY+"px")},{passive:true});
const prog=$("#prog");addEventListener("scroll",()=>{const h=document.documentElement;prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
/* reveal section titles */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$("section>h2").forEach(e=>io.observe(e));

