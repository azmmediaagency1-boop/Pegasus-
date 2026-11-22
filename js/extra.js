/* شريط التصاميم الشارحة + نافذة التكبير + نموذج التواصل */
(function(){
const PO=[
["رحلة نجاحك، النسخة الجديدة"],["تحليل مجاني لإعلانك"],["نفس الإعلان، نتيجة مختلفة"],["٣ أسباب تخسّرك فلوس"],
["تسوي إعلان، بس وين المبيعات؟"],["الفكرة الصح هي اللي تصنع الفرق"],["١ · إعلان بدون هدف واضح"],["٢ · محتوى حلو بس ما يبيع"],
["٣ · ما في خطة، بس تشغيل إعلانات"],["أنت عليك القوة، واحنا علينا نبيّنها لك"]
].map((p,i)=>({src:`assets/poster-${String(i+1).padStart(2,"0")}.webp`,alt:p[0]}));
const st=$("#pstrip");
if(st){
 st.innerHTML=[...PO,...PO].map((p,i)=>`<button type="button" class="pc" data-i="${i%PO.length}" aria-label="تكبير: ${p.alt}"><img src="${p.src}" alt="${p.alt}" loading="${i<4?"eager":"lazy"}" decoding="async" draggable="false"></button>`).join("");
 const lb=$("#plb"),im=$("#plb-img");let cur=0;
 const show=i=>{cur=(i+PO.length)%PO.length;im.src=PO[cur].src;im.alt=PO[cur].alt};
 st.addEventListener("click",e=>{const b=e.target.closest(".pc");if(!b)return;show(+b.dataset.i);lb.showModal()});
 $("#pprev").onclick=()=>show(cur-1);$("#pnext").onclick=()=>show(cur+1);$("#pclose").onclick=()=>lb.close();
 lb.addEventListener("click",e=>{if(e.target===lb)lb.close()});
 addEventListener("keydown",e=>{if(!lb.open)return;if(e.key==="ArrowLeft")show(cur+1);if(e.key==="ArrowRight")show(cur-1)});
 /* وقف الحركة لما الشريط خارج الشاشة */
 new IntersectionObserver(es=>{st.style.animationPlayState=es[0].isIntersecting?"running":"paused"}).observe(st);
}
/* الخدمات: الشريحة المختارة تتوسّط الشاشة على الموبايل */
const sl=$("#sl");if(sl)sl.addEventListener("click",e=>{const b=e.target.closest("button");if(b&&matchMedia("(max-width:640px)").matches)b.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})});
/* قسم المواقع: لقطات متحركة + بطاقات */
(function(){
 const S=[
  {d:"pharma-sense.academypegasus.com",u:"https://pharma-sense.academypegasus.com/login",n:"Chronica | منصة الصيدليات",t:"تذكير العملاء بمواعيد العلاج",img:"chronica",ic:"💊"},
  {d:"el-eman.academypegasus.com",u:"https://el-eman.academypegasus.com/",n:"الإيمان للسياحة والسفر",t:"حجز رحلات وعمرة ووجهات",img:"eman",ic:"✈️"},
  {d:"berloni-italy.com",u:"https://berloni-italy.com/",n:"Berloni Italy",t:"أجهزة منزلية وأدوات مطبخ",img:"berloni",ic:"🍳"},
  {d:"fitnesstechlb.com",u:"https://fitnesstechlb.com/",n:"Fitness Tech",t:"متجر أجهزة ومعدات رياضية",img:"fitness",ic:"🏋️"},
  {d:"nutrivitafit.com",u:"https://nutrivitafit.com",n:"Nutrivita Fit",t:"متجر مكملات غذائية رياضية",img:"nutri",ic:"💪"}
 ];
 const tr=$("#swtrack");
 if(tr){
  const card=(s,i)=>`<a class="sw" href="${s.u}" target="_blank" rel="noopener" aria-label="زيارة ${s.n}"><div class="bar"><i></i><i></i><i></i><span>${s.d}</span></div><div class="shot"><img src="assets/site-${s.img}.webp" alt="${s.n}" loading="${i<3?"eager":"lazy"}" decoding="async" draggable="false"></div><div class="cap"><div><b>${s.n}</b><small>${s.t}</small></div><em>زيارة الموقع ↗</em></div></a>`;
  tr.innerHTML=[...S,...S].map(card).join("");
 }
 const st=$("#st");
 if(st){
  const all=[...S,{d:"pegasusagency.org",u:"https://pegasusagency.org/",n:"موقع بيجاسوس",t:"موقعنا الرسمي",ic:"🦄"}];
  st.innerHTML=all.map(s=>`<a class="sc" href="${s.u}" target="_blank" rel="noopener"><span class="ic">${s.ic}</span><span class="tx"><b>${s.n}</b><small>${s.d}</small></span><span class="go">↗</span></a>`).join("");
 }
})();
/* نموذج التواصل */
const f=$("#whatsapp-form");
if(f){
 const sel=$("#requested-service"),wrap=$("#other-service-wrap"),oth=$("#other-service"),stt=$("#form-status");
 sel.addEventListener("change",()=>{const o=sel.value==="other";wrap.hidden=!o;oth.required=o;if(!o)oth.value=""});
 f.addEventListener("submit",e=>{e.preventDefault();
  const d=new FormData(f),v=k=>(d.get(k)||"").toString().trim();
  const name=v("name"),phone=v("phone");
  if(!name||!phone||!sel.value){stt.textContent="فضلاً عبّ الاسم ورقم الواتساب واختر الخدمة.";return}
  const svc=sel.value==="other"?("خدمات أخرى: "+(v("other_service")||"غير محدد")):sel.value;
  const lines=["هلا والله، أبغى أطلب خدمة من Pegasus Marketing Company","","الاسم: "+name];
  if(v("company"))lines.push("الشركة/المشروع: "+v("company"));
  lines.push("رقم الواتساب: "+phone,"الخدمة المطلوبة: "+svc);
  if(v("details"))lines.push("","التفاصيل: "+v("details"));
  stt.textContent="جاري فتح واتساب...";
  const w=window.open(wa(lines.join("\n")),"_blank");
  if(w){try{w.opener=null}catch(_){}}else{location.href=wa(lines.join("\n"))}
  setTimeout(()=>{stt.textContent="تم تجهيز رسالتك، أرسلها من واتساب ونرد عليك بأسرع وقت."},600)});
}
})();

/* على اللمس: الشرائط المتحركة تتحرك لحالها، ولما تسحبها بإصبعك تتحرك معك */
(function(){
if(!matchMedia("(pointer:coarse),(max-width:640px)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
function drift(box,track,speed,rev){
 if(!box||!track)return;
 box.style.overflowX="auto";box.style.webkitOverflowScrolling="touch";box.style.scrollbarWidth="none";box.style.direction="ltr";
 track.style.animation="none";track.style.transform="none";
 const css=document.createElement("style");css.textContent=".nsb::-webkit-scrollbar{display:none}";document.head.appendChild(css);box.classList.add("nsb");
 let pos=0,half=0,last=0,vis=true,touching=false;
 const calc=()=>{half=track.scrollWidth/2};
 const init=()=>{calc();if(rev){pos=half;box.scrollLeft=half}};
 addEventListener("load",init);setTimeout(init,300);addEventListener("resize",calc);
 new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(box);
 box.addEventListener("touchstart",()=>{touching=true;last=performance.now()},{passive:true});
 box.addEventListener("touchend",()=>{touching=false;last=performance.now()},{passive:true});
 box.addEventListener("touchcancel",()=>{touching=false;last=performance.now()},{passive:true});
 box.addEventListener("scroll",()=>{
  if(!half)calc();
  let x=box.scrollLeft;
  if(x>=half-1){x-=half;box.scrollLeft=x}else if(x<=0&&half){x+=half;box.scrollLeft=x}
  if(touching||performance.now()-last<1500){pos=x}
 },{passive:true});
 (function loop(t){requestAnimationFrame(loop);
  if(!vis||document.hidden||touching||t-last<1500||!half)return;
  pos+=rev?-speed:speed;
  if(pos>=half)pos-=half;if(pos<=0)pos+=half;
  box.scrollLeft=pos})(0);
}
drift($(".pstrip"),$("#pstrip"),.7,false);
drift($(".mq"),$("#mq"),.6,false);
drift($("#siteshow"),$("#swtrack"),.6,false);
const sc=$("#showcase");
if(sc){sc.querySelectorAll(".sr").forEach(r=>{const w=document.createElement("div");r.parentNode.insertBefore(w,r);w.appendChild(r);drift(w,r,.5,r.classList.contains("rev"))})}
})();

