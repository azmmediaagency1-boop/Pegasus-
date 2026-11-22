const NUM="966509877538",wa=m=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(m);
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const C=[
["blk","بلوكة","sa","ساهمنا في تطوير حضور بلوكة وبناء صورة مميزة لعلامتها التجارية.","اشتغلنا على إبراز هويتها بأسلوب إبداعي يلفت الانتباه.","وهدفنا دايم إن علامتها توصل لجمهورها بالصورة اللي تستحقها."],
["lj","لأجلك | Leajlak","sa","اشتغلنا على تعزيز حضور لأجلك الرقمي وإبراز قوة علامتها التجارية.","حرصنا على تقديم محتوى إبداعي يعكس جودة خدماتها وتميّزها.","لأجلك شركة توصيل لوجستية، وسعدنا ببناء بصمة مميزة لها."],
["fw","فوري","sa","ساهمنا في تطوير الحضور التسويقي لفوري بأسلوب عصري ومميز.","ركزنا على إبراز هوية العلامة وتقديمها بصورة أقرب لجمهورها.","فوري شركة توصيل لوجستية، وسعدنا ببناء بصمة مميزة لها."],
["eman","الإيمان للسياحة","sa","اشتغلنا على تعزيز حضور الإيمان للسياحة وإبراز خدماتها بشكل جذّاب.","حرصنا على تقديم محتوى تسويقي يعكس قيمة التجربة السياحية.","وقمنا كذلك ببناء ويبسايت وبرنامج احترافي لشركة الإيمان للسياحة."],
["qj","قمة الجود","sa","ساهمنا في تطوير الصورة التسويقية لقمة الجود وتعزيز حضورها.","اشتغلنا على إبراز هوية البراند بأسلوب يعكس التميّز والجودة.","قمة الجود شركة توصيل لوجستية، وساعدنا في إبراز علامتها التجارية."],
["ot","صيدليات أوتام","sa","دعمنا حضور صيدليات أوتام بتوجه تسويقي يهتم بالتواصل مع الجمهور.","ركزنا على إبراز هوية العلامة وتقديم خدماتها بصورة واضحة وجذّابة.","وبنينا لها ويب سايت احترافي ساعد في انتشارها."],
["em","إيمباور فينشرز | Empower Ventures","sa","ساهمنا في تعزيز الحضور الرقمي لإيمباور فينشرز بصورة احترافية.","اهتمينا بإبراز حضور العلامة وتقديمها بأسلوب يواكب طموحاتها.","وجهزنا لها Company Profile احترافي يعرض نشاطها وخدماتها بصورة مرتبة."],
["pc","فارما كونسلت | Pharma Consult","sa","اشتغلنا على دعم الحضور التسويقي لفارما كونسلت وتعزيز هويتها.","حرصنا على تقديم محتوى احترافي يناسب طبيعة القطاع الدوائي.","وهدفنا بناء حضور واضح يعكس قيمة العلامة ويقوّي تواصلها مع جمهورها."],
["ku","الجامعة الهندسية بالكويت","kw","ساهمنا في تطوير حضور الجامعة الهندسية بالكويت وتعزيز صورتها الرقمية.","قدمنا هويتها بأسلوب احترافي يناسب مكانتها التعليمية.","وهدفنا دعم وصول رسالتها لجمهورها بصورة واضحة ومميزة."],
["bh","BH Design GB","kw","ساهمنا في تعزيز حضور BH Design GB وإبراز طابعها الإبداعي.","ركزنا على تقديم العلامة بصورة متناسقة تعكس هويتها وتميّزها.","لأن التفاصيل الإبداعية هي اللي تصنع فرق في عالم البراندات."],
["sh","شركة الشططي للإنشاءات الهندسية","kw","اشتغلنا على دعم الحضور التسويقي لشركة الشططي للإنشاءات الهندسية.","حرصنا على إبراز أعمالها وخبراتها بأسلوب احترافي يعكس قيمة مشاريعها.","ونسعى دايم لصورة تسويقية تواكب طموحاتها في السوق."],
["ex","شركة إكسبريس الفضية للتجارة العامة والمقاولات","kw","ساهمنا في تعزيز الحضور الرقمي لشركة إكسبريس الفضية وإبراز هويتها.","ركزنا على تقديم العلامة بصورة احترافية تعكس تنوّع أعمالها.","وهدفنا دعم انتشارها وبناء حضور أقوى لدى جمهورها المستهدف."],
["lq","لقطة | برنامج مزايدات","kw","ساهمنا في تطوير حضور لقطة مزايدات وتعزيز هويتها بالسوق.","اشتغلنا على إبراز خدماتها بأسلوب تسويقي إبداعي يجذب الجمهور.","وهدفنا نساعد البراند يوصل لشريحة أكبر ويحقق نمو أقوى."],
["global","الشركة العالمية","gulf","نبني للشركة العالمية حضورًا بصريًا واضحًا يعرّف بخدماتها ويقرّبها من جمهورها.","نرتّب الرسالة والتصميم بما يواكب السوق الخليجي ويعكس طموح العلامة.","شغل مرتب، وتفاصيل محسوبة، وحضور يليق باسم الشركة."],
["costa","كوستا هايتس | Costa Heights","gulf","نقدّم كوستا هايتس بصورة أنيقة تبرز هويتها وتفاصيلها المميزة.","نصمم محتوى يلفت النظر ويحافظ على طابع العلامة في كل منصة.","هوية واضحة وتجربة متناسقة من أول نظرة."],
["amin","محمصة الأمين","gulf","نبرز محمصة الأمين ومذاقها الأصيل بمحتوى دافي وقريب من الناس.","نوازن بين جودة المنتج وروح الضيافة في التصاميم والرسائل.","لأن فنجال مضبوط يستاهل حضور يفتح النفس."]];
const CN={sa:"السعودية",kw:"الكويت",gulf:"الخليج"};
const lg=k=>k=="bh"?'<span class="nm">BH<br>Design GB</span>':`<img src="${IM[k]}" alt="" loading="lazy">`;
$("#grid").innerHTML=C.map((c,i)=>`<button class="cl rv" data-k="${c[2]}" data-i="${i}"><div class="lgo">${lg(c[0])}</div><h3>${c[1]}</h3><small>${CN[c[2]]}</small></button>`).join("");
$("#grid").onclick=e=>{const b=e.target.closest(".cl");if(!b)return;const c=C[b.dataset.i];
$("#bx").innerHTML=`<div class="lgo">${lg(c[0])}</div><h3>${c[1]}</h3><div class="ct">${CN[c[2]]}</div><p>${c[3]}</p><p>${c[4]}</p><p>${c[5]}</p><div class="acts"><a class="btn" target="_blank" rel="noopener" href="${wa("هلا والله، شفت شغلكم مع "+c[1]+" وأبغى مشروع بنفس المستوى")}">أبغى مثل هالشغل</a><button class="btn ghost" onclick="dm.close()">إغلاق</button></div>`;dm.showModal()};
$$("#clients .tabs button").forEach(b=>b.onclick=()=>{$$("#clients .tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");$$(".cl").forEach(c=>c.classList.toggle("hide",b.dataset.f!="all"&&c.dataset.k!=b.dataset.f))});
// tilt
$("#grid").addEventListener("pointermove",e=>{const c=e.target.closest(".cl");if(!c)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*-14}deg) rotateX(${y*10}deg) translateY(-6px)`});
$("#grid").addEventListener("pointerout",e=>{const c=e.target.closest(".cl");if(c)c.style.transform=""});
const L=Object.values(IM).filter(s=>s.length);$("#mq").innerHTML=[...L,...L].map(s=>`<img src="${s}" alt="" loading="lazy">`).join("");
// services
const S=[
["✍️","صناعة المحتوى","نكتب ونصمم محتوى يعرّف الناس بعلامتك ويقربهم منها. نحدد الفكرة والنبرة المناسبة، ونحوّل مميزاتك لرسائل واضحة تشجع جمهورك يتفاعل ويتخذ الخطوة اللي تبيها.",["خطة محتوى حسب أهدافك","كتابة منشورات وإعلانات وكابشنات","تقويم نشر منظم ومراجعة مستمرة"]],
["🛒","التجارة الإلكترونية","نجهز تجربة متجرك من عرض المنتجات إلى إتمام الطلب. نهتم بسهولة التصفح والشراء من الجوال، ونرتب صفحات المنتج والدفع عشان العميل يعرف وش يختار وكيف يكمل طلبه.",["تصميم المتجر وترتيب الأقسام","صفحات منتجات واضحة وجذابة","تجربة شراء ودفع سهلة"]],
["🎬","الإنتاج الإعلامي","نخطط وننتج صور وفيديوهات تبرز منتجك وتخدم رسالتك. من الفكرة إلى اللقطة والمونتاج، نجهز محتوى يناسب المنصة ويشد الانتباه من أول لحظة.",["تصوير منتجات وإعلانات","تخطيط مشاهد وأفكار إبداعية","مقاسات جاهزة للمنصات"]],
["📱","إدارة السوشال ميديا","نرتب حضورك اليومي على المنصات، ونحافظ على تواصل ثابت وواضح مع جمهورك. نخطط المحتوى وننشره ونتابع التفاعل، ونراجع النتائج عشان نعرف وش يهم متابعينك.",["إدارة الحسابات والرسائل","خطة محتوى ونشر مستمرة","متابعة التفاعل وقراءة الأداء"]],
["🔎","تحسين محركات البحث SEO","نساعد عملاءك يلقونك وقت يبحثون عن خدمتك. نراجع بنية الموقع والمحتوى والكلمات المهمة، ونشتغل على تحسين الظهور خطوة بخطوة.",["بحث الكلمات المناسبة لنشاطك","تحسين الصفحات وتجربة الموقع","متابعة الظهور والزيارات"]],
["🏷️","الهوية البصرية","نبني نظام بصري متكامل يخلي علامتك معروفة ومتناسقة. نبدأ بالشعار والألوان والخطوط، ونوضح لك طريقة تطبيق الهوية على المنصات والمطبوعات والتغليف.",["تصميم الشعار والألوان والخطوط","دليل استخدام الهوية","تطبيقات رقمية ومطبوعات"]],
["🎨","التصميم الجرافيكي","نحوّل رسالتك لتصاميم مرتبة تلفت النظر وتوصل الفكرة بسرعة. من منشورات التواصل إلى العروض التعريفية والمطبوعات، كل تصميم يكون متناسق مع هوية علامتك.",["منشورات وحملات إعلانية","ملف الشركة Company Profile","مطبوعات ولوحات تعريفية"]],
["📈","الإعلانات الممولة","نخطط للحملة من هدفها إلى جمهورها ورسالتها، ثم نتابع النتائج ونحسن الاستهداف. نساعدك تستفيد من ميزانيتك وتوصل للناس الأقرب لاهتمامهم بخدمتك.",["حملات على المنصات الرقمية","استهداف حسب الجمهور والهدف","متابعة وتحسين مستمر"]],
["✂️","المونتاج","نرتب اللقطات والصوت والنصوص في فيديو سريع وواضح يناسب طبيعة المنصة. نخلي الرسالة توصل من البداية ونجهز نسخ بمقاسات مختلفة للنشر.",["ريلز وإعلانات قصيرة","إيقاع وموسيقى مناسبة","ترجمة ونصوص على الشاشة"]],
["✨","الموشن جرافيك","نشرح فكرتك أو خدمتك برسوم متحركة مبسطة. نساعدك تعرض المعلومة بطريقة سهلة، من فيديوهات التعريف إلى تحريك الشعار والمحتوى الرقمي.",["فيديوهات شرح وتعريف","تحريك الشعارات والعناصر","محتوى متحرك للسوشال"]],
["💻","تصميم وتطوير المواقع","نصمم موقع يعكس علامتك ويسهّل على الزائر يعرف خدماتك ويتواصل معك. نراعي سرعة التصفح، التوافق مع الجوال، وترتيب الصفحات بما يخدم أهداف مشروعك.",["مواقع تعريفية ومتاجر إلكترونية","تصميم متجاوب للجوال والكمبيوتر","تنظيم المحتوى وتجربة المستخدم"]],
["📊","الاستراتيجية والتحليل","نرتب لك رؤية أوضح للسوق والجمهور والقنوات المناسبة. نحول أهدافك لخطة قابلة للتنفيذ، ونستخدم مؤشرات الأداء عشان تعرف وين وصلت وش الخطوة الجاية.",["مراجعة الحضور والمنافسين","تحديد أهداف ومؤشرات أداء","تقارير وتوصيات عملية"]]
];
$("#sl").innerHTML=S.map((s,i)=>`<button data-i="${i}"><b>${String(i+1).padStart(2,"0")}</b>${s[1]}</button>`).join("");
function sv(i){const s=S[i];$$("#sl button").forEach((b,j)=>b.classList.toggle("on",i==j));const d=$("#sd");d.dataset.n=String(i+1).padStart(2,"0");d.innerHTML=`<i>${s[0]}</i><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn" target="_blank" rel="noopener" href="${wa("هلا والله، أبغى أستفسر عن خدمة "+s[1]+" من Pegasus")}">اطلب الخدمة</a>`}
$("#sl").onclick=e=>{const b=e.target.closest("button");if(b)sv(+b.dataset.i)};sv(0);
dm.addEventListener("click",e=>{if(e.target===dm)dm.close()});
const WS=[["nutrivitafit.com","https://nutrivitafit.com"],["fitnesstechlb.com","https://fitnesstechlb.com/"],["berloni-italy.com","https://berloni-italy.com/"],["el-eman.academypegasus.com","https://el-eman.academypegasus.com/"],["pegasusagency.org","https://pegasusagency.org/"],["pharma-sense.academypegasus.com","https://pharma-sense.academypegasus.com/login"]];
$("#st").innerHTML=WS.map(w=>`<a href="${w[1]}" target="_blank" rel="noopener"><span>↗</span>${w[0]}</a>`).join("");
const P=[["الباقة الأولى",2000,533,["بداية قوية لعلامتك","تصاميم أساسية جاهزة للنشر","دعم عبر واتساب"]],["الباقة الثانية",4000,1067,["نمو أسرع وحضور أوضح","محتوى وتصاميم أكثر","متابعة مستمرة"],1],["الباقة الثالثة",8000,2133,["حضور متكامل للعلامة","هوية ومحتوى وإعلانات","فريق يتابع معك خطوة بخطوة"]],["باقة مخصصة",0,0,["نصمم الباقة على قد مشروعك","تحدد الخدمات وتحدد الميزانية","نتفق على التفاصيل بالواتساب"]]];
let cu="sar";const fm=n=>n.toLocaleString("en-US");
function rp(){$("#pk").innerHTML=P.map(p=>`<div class="p${p[4]?" best":""}">${p[4]?'<span class="tag">الأكثر طلباً</span>':""}<h3>${p[0]}</h3><div class="pr">${p[1]?fm(cu=="sar"?p[1]:p[2])+" <small>"+(cu=="sar"?"ريال":"دولار")+"</small>":"<small>حسب طلبك</small>"}</div><ul>${p[3].map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn${p[4]?"":" ghost"}" target="_blank" rel="noopener" href="${wa("هلا والله، أبغى أشترك في "+p[0]+(p[1]?" ("+fm(p[1])+" ريال)":"")+" مع Pegasus Marketing Company، ممكن تفيدوني بالتفاصيل؟")}">تواصل معنا</a></div>`).join("")}
rp();$$(".cur button").forEach(b=>b.onclick=()=>{$$(".cur button").forEach(x=>x.classList.remove("on"));b.classList.add("on");cu=b.dataset.c;rp()});
$$(".wal").forEach(a=>{a.href=wa(a.dataset.m);a.target="_blank";a.rel="noopener"});
$("#menu").onclick=()=>$("#nav").classList.toggle("open");$$("#nav a").forEach(a=>a.onclick=()=>$("#nav").classList.remove("open"));
// hero words
$$(".sp").forEach(h=>{let i=0;h.querySelectorAll("span").forEach(s=>{s.innerHTML=s.textContent.split(" ").map(w=>`<span class="w" style="--i:${i++}">${w}</span>`).join(" ")})});
// motion
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv,section>h2").forEach(e=>io.observe(e));
$$(".grid .cl").forEach((e,i)=>{e.style.transitionDelay=(i%6)*80+"ms"});
const fx=$("#fx");addEventListener("pointermove",e=>{fx.style.setProperty("--x",e.clientX+"px");fx.style.setProperty("--y",e.clientY+"px")},{passive:true});
const tl=$("#tl"),pe=$$("[data-p]");let tk=0;
function up(){tk=0;const h=document.documentElement,y=h.scrollTop;$("#prog").style.width=(y/(h.scrollHeight-h.clientHeight)*100)+"%";
const r=tl.getBoundingClientRect();tl.style.setProperty("--pg",Math.max(0,Math.min(1,(innerHeight*.65-r.top)/r.height)));
pe.forEach(e=>{const b=e.parentElement.getBoundingClientRect();e.style.translate="0 "+((b.top+b.height/2-innerHeight/2)*+e.dataset.p)+"px"})}
addEventListener("scroll",()=>{if(!tk)tk=requestAnimationFrame(up)},{passive:true});up();

/* ---- v3 additions: constellation hero, nav scroll-spy, designs showcase ---- */
(function(){
const c=document.getElementById("stars");if(!c)return;
const ctx=c.getContext("2d"),dpr=Math.min(devicePixelRatio||1,2);let w=0,h=0,pts=[],mx=-999,my=-999,vis=true;
function size(){const r=c.getBoundingClientRect();w=r.width;h=r.height;c.width=w*dpr;c.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
 const n=Math.round(Math.min(90,w*h/15000));pts=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,r:Math.random()*1.7+.6}))}
size();addEventListener("resize",size);
c.parentElement.addEventListener("pointermove",e=>{const r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});
c.parentElement.addEventListener("pointerleave",()=>{mx=my=-999});
new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(c);
function draw(move){ctx.clearRect(0,0,w,h);
 for(const p of pts){if(move){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.283);ctx.fillStyle="rgba(222,200,252,.8)";ctx.fill()}
 for(let i=0;i<pts.length;i++){const a=pts[i];
  for(let j=i+1;j<pts.length;j++){const b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<120){ctx.strokeStyle="rgba(168,110,230,"+(.34*(1-d/120))+")";ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
  const dm=Math.hypot(a.x-mx,a.y-my);if(dm<170){ctx.strokeStyle="rgba(216,180,254,"+(.6*(1-dm/170))+")";ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(mx,my);ctx.stroke()}}}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){draw(false)}
else{(function loop(){requestAnimationFrame(loop);if(vis&&!document.hidden)draw(true)})()}
})();

(function(){
const links=$$("#nav a[href^='#']");if(!links.length)return;
const map=new Map();links.forEach(a=>{const t=$(a.getAttribute("href"));if(t)map.set(t,a)});
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(l=>l.classList.remove("act"));map.get(e.target).classList.add("act")}}),{rootMargin:"-45% 0px -50% 0px"});
map.forEach((_,t)=>spy.observe(t));
})();

(function(){
const box=$("#showcase");if(!box)return;
const A=["assets/upload-24.webp","assets/upload-05.webp","assets/upload-20.webp","assets/upload-40.webp","assets/upload-09.webp","assets/upload-36.webp","assets/upload-13.webp","assets/upload-07.webp"];
const B=["assets/upload-28.webp","assets/upload-16.webp","assets/upload-35.webp","assets/upload-34.webp","assets/upload-26.webp","assets/upload-22.webp","assets/upload-41.webp","assets/upload-06.webp"];
const row=(l,r)=>`<div class="sr${r?" rev":""}">${[...l,...l].map(s=>`<img src="${s}" alt="" loading="lazy">`).join("")}</div>`;
box.innerHTML=row(A,0)+row(B,1);
})();
