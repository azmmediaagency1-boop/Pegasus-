const NUM="966509877538",wa=m=>"https://wa.me/"+NUM+"?text="+encodeURIComponent(m);
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const C=[
["blk","بلوكة","sa","ساهمنا في تطوير حضور بلوكة وبناء صورة مميزة لعلامتها التجارية.","اشتغلنا على إبراز هويتها بأسلوب إبداعي يلفت الانتباه.","وهدفنا دايم إن علامتها توصل لجمهورها بالصورة اللي تستحقها."],
["lj","لأجلك | Leajlak","sa","اشتغلنا على تعزيز حضور لأجلك الرقمي وإبراز قوة علامتها التجارية.","حرصنا على تقديم محتوى إبداعي يعكس جودة خدماتها وتميّزها.","لأجلك شركة توصيل لوجستية، وسعدنا ببناء بصمة مميزة لها."],
["fw","فوري","sa","ساهمنا في تطوير الحضور التسويقي لفوري بأسلوب عصري ومميز.","ركزنا على إبراز هوية العلامة وتقديمها بصورة أقرب لجمهورها.","فوري شركة توصيل لوجستية، وسعدنا ببناء بصمة مميزة لها."],
["eman","الإيمان للسياحة","sa","اشتغلنا على تعزيز حضور الإيمان للسياحة وإبراز خدماتها بشكل جذّاب.","حرصنا على تقديم محتوى تسويقي يعكس قيمة التجربة السياحية.","وقمنا كذلك ببناء ويبسايت وبرنامج احترافي لشركة الإيمان للسياحة."],
["qj","قمة الجود","sa","ساهمنا في تطوير الصورة التسويقية لقمة الجود وتعزيز حضورها.","اشتغلنا على إبراز هوية البراند بأسلوب يعكس التميّز والجودة.","قمة الجود شركة توصيل لوجستية، وساعدنا في إبراز علامتها التجارية."],
["ot","صيدليات أوتام","sa","دعمنا حضور صيدليات أوتام بتوجه تسويقي يهتم بالتواصل مع الجمهور.","ركزنا على إبراز هوية العلامة وتقديم خدماتها بصورة واضحة وجذّابة.","وبنينا لها ويب سايت احترافي ساعد في انتشارها."],
["em","إيمباور فينشرز | Empower Ventures","sa","ساهمنا في تعزيز الحضور الرقمي لإيمباور فينشرز بصورة احترافية.","اهتمينا بإبراز هوية العلامة وتقديمها بأسلوب يواكب طموحاتها.","وبنينا لها هوية بصرية وCompany Profile."],
["pc","فارما كونسلت | Pharma Consult","sa","اشتغلنا على دعم الحضور التسويقي لفارما كونسلت وتعزيز هويتها.","حرصنا على تقديم محتوى احترافي يناسب طبيعة القطاع الدوائي.","وهدفنا بناء حضور واضح يعكس قيمة العلامة ويقوّي تواصلها مع جمهورها."],
["ku","الجامعة الهندسية بالكويت","kw","ساهمنا في تطوير حضور الجامعة الهندسية بالكويت وتعزيز صورتها الرقمية.","قدمنا هويتها بأسلوب احترافي يناسب مكانتها التعليمية.","وهدفنا دعم وصول رسالتها لجمهورها بصورة واضحة ومميزة."],
["bh","BH Design GB","kw","ساهمنا في تعزيز حضور BH Design GB وإبراز طابعها الإبداعي.","ركزنا على تقديم العلامة بصورة متناسقة تعكس هويتها وتميّزها.","لأن التفاصيل الإبداعية هي اللي تصنع فرق في عالم البراندات."],
["sh","شركة الشططي للإنشاءات الهندسية","kw","اشتغلنا على دعم الحضور التسويقي لشركة الشططي للإنشاءات الهندسية.","حرصنا على إبراز أعمالها وخبراتها بأسلوب احترافي يعكس قيمة مشاريعها.","ونسعى دايم لصورة تسويقية تواكب طموحاتها في السوق."],
["ex","شركة إكسبريس الفضية للتجارة العامة والمقاولات","kw","ساهمنا في تعزيز الحضور الرقمي لشركة إكسبريس الفضية وإبراز هويتها.","ركزنا على تقديم العلامة بصورة احترافية تعكس تنوّع أعمالها.","وهدفنا دعم انتشارها وبناء حضور أقوى لدى جمهورها المستهدف."],
["lq","لقطة | برنامج مزايدات","kw","ساهمنا في تطوير حضور لقطة مزايدات وتعزيز هويتها بالسوق.","اشتغلنا على إبراز خدماتها بأسلوب تسويقي إبداعي يجذب الجمهور.","وهدفنا نساعد البراند يوصل لشريحة أكبر ويحقق نمو أقوى."]];
const CN={sa:"السعودية",kw:"الكويت"};
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
const S=[["✍️","صناعة المحتوى","نكتب ونصمم محتوى يحكي قصة علامتك بنبرة جمهورك.",["أفكار وخطط محتوى","نصوص إعلانية وكابشنات","تقويم نشر منظم"]],["🛒","التجارة الإلكترونية","نجهز متجرك ونرتب تجربة الشراء عشان تتحول الزيارة لطلب.",["بناء المتاجر والمواقع","عرض المنتجات","ربط الدفع والحملات"]],["🎬","الإنتاج الإعلامي","تصوير وإنتاج بجودة تليق بالبراند وتشد الانتباه من أول ثانية.",["تصوير منتجات وإعلانات","أفكار إبداعية","جودة عالية للمنصات"]],["📱","إدارة السوشال ميديا","نكون حضورك اليومي على المنصات ونتفاعل مع جمهورك.",["إدارة الحسابات","محتوى مستمر","تفاعل وتحليل الأداء"]],["🔎","تحسين محركات البحث SEO","نرتب موقعك عشان يظهر لعميلك وهو يدور عليك في قوقل.",["تحليل الكلمات المفتاحية","تحسين الصفحات","تقارير تقدّم"]],["🏷️","الهوية البصرية","شعار وألوان وخطوط ونظام كامل يعرّف الناس فيك من بعيد.",["تصميم الشعار","دليل الهوية","تطبيقها على المطبوعات والزي والمركبات"]],["🎨","التصميم الجرافيكي","تصاميم تثبّت رسالتك وتخلي منشوراتك تنتبه لها العين.",["منشورات وإعلانات","ملف الشركة Company Profile","مطبوعات ولوحات"]],["📈","الإعلانات الممولة","نشغّل ميزانيتك صح ونستهدف الشريحة الصح بأقل تكلفة.",["حملات على المنصات","استهداف دقيق","قياس وتحسين مستمر"]],["✂️","المونتاج","فيديوهات سريعة ومرتبة للريلز والإعلانات والقصص.",["ريلز وإعلانات","إيقاع وموسيقى","ترجمة وتعليق نصي"]],["✨","الموشن جرافيك","رسوم متحركة تشرح فكرتك وخدمتك في ثواني.",["فيديوهات شرح","شعارات متحركة","محتوى متحرك للسوشال"]]];
$("#sl").innerHTML=S.map((s,i)=>`<button data-i="${i}"><b>${String(i+1).padStart(2,"0")}</b>${s[1]}</button>`).join("");
function sv(i){const s=S[i];$$("#sl button").forEach((b,j)=>b.classList.toggle("on",i==j));const d=$("#sd");d.dataset.n=String(i+1).padStart(2,"0");d.innerHTML=`<i>${s[0]}</i><h3>${s[1]}</h3><p>${s[2]}</p><ul>${s[3].map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn" target="_blank" rel="noopener" href="${wa("هلا والله، أبغى أستفسر عن خدمة "+s[1]+" من Pegasus")}">اطلب الخدمة</a>`}
$("#sl").onclick=e=>{const b=e.target.closest("button");if(b)sv(+b.dataset.i)};sv(0);
// galleries
let cur=[],ci=0;
const W2=[["all","الكل",["emp","sh","shp","shm","al","lq","lj"]],["emp","إمباور فينشرز",["emp"]],["sh","الشطي الكويتية",["sh","shp","shm"]],["al","ألورا",["al"]],["lq","لقطة",["lq"]],["lj","لأجلك",["lj"]]];
const I1=[["pid","هوية بيجاسوس",["pid"]],["fw","هوية فوري",["fw"]],["lid","هوية لأجلك",["lid"]],["ep","نماذج هويات",["ep"]],["pw","من ملف أعمالنا",["pw"]]];
function mk(tabs,sel,gel){const t=$(tabs),g=$(gel);t.innerHTML=sel.map((x,i)=>`<button data-i="${i}" class="${i?"":"on"}">${x[1]}</button>`).join("");
const show=i=>{const l=sel[i][2].flatMap(k=>G[k]);g.innerHTML=l.map((s,n)=>`<button data-n="${n}" style="--i:${Math.min(n,14)}"><img src="${s}" alt="" loading="lazy"></button>`).join("");g._l=l};
t.onclick=e=>{const b=e.target.closest("button");if(!b)return;$$(tabs+" button").forEach(x=>x.classList.remove("on"));b.classList.add("on");show(+b.dataset.i)};
g.onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=g._l;ci=+b.dataset.n;$("#li").src=cur[ci];lb.showModal()};show(0)}
mk("#t2",W2,"#g2");mk("#t1",I1,"#g1");
const go=d=>{ci=(ci+d+cur.length)%cur.length;$("#li").src=cur[ci]};$("#pv").onclick=()=>go(-1);$("#nx").onclick=()=>go(1);
addEventListener("keydown",e=>{if(lb.open){if(e.key=="ArrowLeft")go(1);if(e.key=="ArrowRight")go(-1)}});
[dm,lb].forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
const WS=[["nutrivitafit.com","https://nutrivitafit.com"],["fitnesstechlb.com","https://fitnesstechlb.com/"],["berloni-italy.com","https://berloni-italy.com/"],["el-eman.academypegasus.com","https://el-eman.academypegasus.com/"],["pegasusagency.org","https://pegasusagency.org/"],["pharma-sense.academypegasus.com","https://pharma-sense.academypegasus.com/login"]];
$("#st").innerHTML=WS.map(w=>`<a href="${w[1]}" target="_blank" rel="noopener"><span>↗</span>${w[0]}</a>`).join("");
const P=[["الباقة الأولى",1000,300,["بداية قوية لعلامتك","تصاميم أساسية جاهزة للنشر","دعم عبر واتساب"]],["الباقة الثانية",1600,500,["نمو أسرع وحضور أوضح","محتوى وتصاميم أكثر","متابعة مستمرة"],1],["الباقة الثالثة",3500,1000,["حضور متكامل للعلامة","هوية ومحتوى وإعلانات","فريق يتابع معك خطوة بخطوة"]],["باقة مخصصة",0,0,["نصمم الباقة على قد مشروعك","تحدد الخدمات وتحدد الميزانية","نتفق على التفاصيل بالواتساب"]]];
let cu="sar";const fm=n=>n.toLocaleString("en-US");
function rp(){$("#pk").innerHTML=P.map(p=>`<div class="p${p[4]?" best":""}">${p[4]?'<span class="tag">الأكثر طلباً</span>':""}<h3>${p[0]}</h3><div class="pr">${p[1]?fm(cu=="sar"?p[1]:p[2])+" <small>"+(cu=="sar"?"ريال":"دولار")+"</small>":"<small>حسب طلبك</small>"}</div><ul>${p[3].map(x=>`<li>${x}</li>`).join("")}</ul><a class="btn${p[4]?"":" ghost"}" target="_blank" rel="noopener" href="${wa("هلا والله، أبغى أشترك في "+p[0]+(p[1]?" ("+fm(p[1])+" ريال)":"")+" مع Pegasus Marketing Agency، ممكن تفيدوني بالتفاصيل؟")}">تواصل معنا</a></div>`).join("")}
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
