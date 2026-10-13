/* =========================================================
   EL PEYOTE ASESINO — sitio homenaje (no oficial)
   Un regalito de Fungirak.
   ========================================================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const NS="http://www.w3.org/2000/svg";
// los valores con var(--x) van como estilo: en atributos de presentación SVG no siempre se resuelven
function mk(tag,attrs,parent){const e=document.createElementNS(NS,tag);for(const k in attrs){const v=attrs[k];if(typeof v==="string"&&v.includes("var("))e.style.setProperty(k,v);else e.setAttribute(k,v)}parent&&parent.appendChild(e);return e}
const fmt=s=>Math.floor(s/60)+":"+String(Math.round(s%60)).padStart(2,"0");
const RM=matchMedia("(prefers-reduced-motion: reduce)").matches;
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
function tween(el,attrs,dur=1000,delay=0){const from={};for(const k in attrs)from[k]=parseFloat(el.getAttribute(k))||0;const t0=performance.now()+delay;(function f(t){const k=Math.max(0,Math.min(1,(t-t0)/dur));const e=1-Math.pow(1-k,3);for(const a in attrs)el.setAttribute(a,from[a]+(attrs[a]-from[a])*e);if(k<1)requestAnimationFrame(f)})(performance.now())}

/* ======================= DATOS ======================= */
const DZ="https://cdn-images.dzcdn.net/images/cover/";
const C=id=>DZ+id+"/1000x1000-000000-80-0-0.jpg";
const COV={
  d95:C("d00976cb41c4115334f436f33c4792c8"), d98:C("452c29d90bab6267cb4d26c76eaebe49"), d21:C("aaeb57df0b78284e1141a0293a46b69c"),
  vos:C("ed2e3aba764a8785144dfe29d95eecc2"), cra:C("658236ed4d59d8d96964be85336e308c"), hay:C("45d99bd0dbc251ec46c631e60a6c81c8"),
  chu:C("c1295f5c473a892d3dff8217f7031a11"), den:C("f83118dbd950127cf80e2f709f45791d"), tie:C("43ae8377e63c297345ad674084f62108"),
  pop:"https://i.scdn.co/image/ab6761610000e5eb82caa33c1641715a6ef56086"
};
// [título, segundos, BPM estimado, tonalidad estimada, energía estimada, nota]
const DISCS=[
 {id:"d95",t:"El Peyote Asesino",y:"diciembre de 1995",label:"Orfeo",color:"#14a39b",font:"Rubik Bubbles",
  desc:"Grabado del 15 de julio al 25 de octubre de 1995 en el Estudio del Cordón, de Luis Restuccia: 164 horas de estudio cuando el premio del concurso Generación 95 cubría 40. Vendió más de mil copias, un récord local, y los lectores de Rock de Primera los eligieron grupo revelación. «El Peyote Asesino» fue número uno en X FM y «L. Mental» pasó por MTV Latino. El País lo puso 48.º entre los 50 mejores discos uruguayos. En 2025, Bizarro lo reeditó remasterizado en vinilo.",
  credits:"Producción: Gabriel Casacuberta · Grabación, mezcla y máster: Luis Restuccia · Asistentes: Jorge Mulet y Víctor Rodríguez · Voces: Fernando Santullo y Carlos Casacuberta · Guitarras: Juan Campodónico y Carlos Casacuberta · Bajo: Daniel Benia · Batería: P.P. Canedo · Diseño: Federico Macazaga · Fotos: Matilde Campodónico y Santiago Epstein · Maqueta: Eduardo Rosas · Personajes: Jis y Trino · Remaster 2025: Julio Berta",
  tr:[["El Peyote Asesino",360,172,"Cm",.159,"n.º 1 en X FM, 1996"],["Chupando la cuchara",236,123,"Em",.221,"vuelve en Bien de Vivo"],["Wanker",172,99,"F",.239,""],["Todos muertos",209,103,"F#m",.195,"empezó como un reggae"],["Satisfaction",155,185,"C#m",.218,"Stones, vía De Falla"],["Lyrics",125,123,"D",.075,""],["L Mental",187,112,"F",.197,"video en MTV Latino"],["H.K.",211,108,"Am",.226,""],["Tanta parla",244,123,"F",.267,"vuelve en Serial"],["Gavilán o paloma / El ojo blindado",181,129,"D",.085,"Pérez Botija + Sumo"],["La concha",88,129,"G",.151,""],["Wanker (versión radio)",172,99,"F",.244,"versión radio"],["Penicilina",167,117,"G",.232,"Los Estómagos · bonus"]]},
 {id:"d98",t:"Terraja",y:"agosto de 1998",label:"Surco / Universal",color:"#c21d37",font:"Rubik 80s Fade",
  desc:"Gustavo Santaolalla recibió el primer disco de manos de Alfonso Carbone, de Orfeo, y los fichó para Surco. Las bases se grabaron desde septiembre de 1997 en Can Am Recorders, en Tarzana, Los Ángeles, el estudio de Dr. Dre, Snoop Dogg y Guns N' Roses; las voces y guitarras, en el estudio de Santaolalla y Kerpel. Hip hop, hardcore, funk y metal, con tango, candombe y milonga. «Terraja», en lunfardo uruguayo, es algo así como «grasa». Salió en Uruguay, Argentina, México, Estados Unidos y Puerto Rico, y Santullo dice que fue «un álbum que tocamos seis veces». El País lo ubicó 20.º entre los 50 mejores discos uruguayos.",
  credits:"Producción: Gustavo Santaolalla y Aníbal Kerpel · Ingeniero: Tony Peluso · Bases: Can Am Recorders (Tarzana, Los Ángeles) · Órgano Hammond y sintetizador en «Mal de la cabeza»: Aníbal Kerpel · Bandoneón en «Mal de la cabeza»: Néstor Vaz · Video de «Mal de la cabeza»: Guillermo Peluffo · Bajo y efectos: Daniel Benia",
  tr:[["Criminal",264,112,"Am",.242,"de lo más tocado en vivo"],["Guacho",246,96,"Am",.264,"«un gangsta de barrio»"],["Mal de la cabeza",259,108,"C#m",.237,"el hit · bandoneón"],["El Peyote Asesino",317,86,"B",.19,"regrabado"],["Denso",223,103,"Dm",.259,""],["Cable pelado",288,83,"Em",.214,"video en MTV"],["Perkins",256,83,"Em",.266,"en The Shield"],["UR Gay",311,117,"F#m",.094,"en Spanglish 101"],["L Mental",188,112,"Fm",.236,"regrabado"],["Cama biónica",267,161,"Em",.266,""],["Psicoterapeuta",207,99,"Gm",.237,""],["La concha",88,129,"A",.226,"regrabado"],["De pedo y de tos",315,103,"B",.184,"en Iberoamérica estalla"],["Demente",229,136,"Am",.272,""]]},
 {id:"d21",t:"Serial",y:"5 de noviembre de 2021",label:"Bizarro",color:"#5a3ea6",font:"Rubik Broken Fax",
  desc:"El primer disco en 23 años. Se compuso entre 2019 y 2020, la pandemia demoró la salida y se grabó en el Estudio Zorzal de Montevideo. Santullo explicó que el título y el arte juegan con una textura de mimeógrafo: «la banda analógica que reaparece». Habla montevideana, fútbol y un «tufo perdedor» en lugar de la bronca de los noventa. Fue número uno de CUDISCO, ganó dos Graffiti en 2022 (álbum de hip hop y banda del año) y Santaolalla dijo: «Creo que es el mejor de los tres discos que ha sacado Peyote».",
  credits:"Producción: Juan Campodónico · Grabación y mezcla: Julio Berta (Estudio Zorzal) · Máster: Ted Jensen · Producción ejecutiva: «Gaucho» · Voz: Fernando Santullo · Guitarra y programación: Juan Campodónico · Guitarra y voz: Carlos Casacuberta · Bajo: Daniel Benia · Batería: PP Canedo · Participación especial: Matías Rada (guitarra y voz) y Bruno Tortorella (teclados) · Videos: Matías De León, Jok y Julián Rodríguez",
  tr:[["Flor de gil",242,136,"C",.207,""],["No te peines",222,112,"Am",.191,""],["La tumba de los crá",224,89,"C#",.215,"single 2020"],["En la B",242,83,"G",.223,""],["Es lo que hay",243,117,"C#m",.237,"video de Jok"],["Vos no me llamaste",213,96,"Am",.16,"single 2020"],["Tierra derretida",216,144,"G",.273,"vuelve en Bien de Vivo"],["Pump Up the Parla",146,129,"Fm",.209,"«Tanta parla», reformulada"],["Bailando samba",238,161,"D#m",.258,"la primera nueva en 19 años"],["Perdiste",227,103,"F#m",.24,""]]}
];
const BDV=[["Chupando la cuchara (en vivo)",234],["Denso (en vivo) con Ale Piccone",236],["Tierra derretida (en vivo)",237]];

/* ======================= RADIO (YouTube) ======================= */
const RADIO=[
 ["Terraja · 1998"],
 ["u-X4aeoQ4hE","Mal de la cabeza","Terraja · video oficial"],["k4fm4Qg7_qE","Cable pelado","Terraja · video oficial"],["P3E5_xUMb6M","Criminal","Terraja · audio"],["XspK4ibvHCo","Guacho","Terraja"],
 ["El Peyote Asesino · 1995"],
 ["Sjc37IAG09s","L Mental","1995 · video oficial"],["ixQJ72QIP78","El Peyote Asesino","en vivo · canal de Santullo"],
 ["Serial · 2017–2021"],
 ["QNaLyAhuuNg","Vos no me llamaste","Serial · video oficial"],["3pcV51HjEf4","La tumba de los crá","Serial · video oficial"],["OvGUoSv3t-Y","Es lo que hay","Serial · video animado"],["m7kEDsNwXwI","Bailando samba","Serial · video oficial"],
 ["Bien de Vivo · 6/12/2025"],
 ["eYwT_qeMhPo","Chupando la cuchara","Bien de Vivo · Sala del Museo"],["V9gW9L2PWcs","Denso","Bien de Vivo · con Ale Piccone"],["agli2-19TjU","Tierra derretida","Bien de Vivo · Sala del Museo"],
 ["En vivo y archivo"],
 ["HSLcTn8lP-Q","Criminal (en vivo)","Pilsen Rock · Durazno 2009"],["-xltcblq6dg","Mal de la cabeza (en vivo)","canal oficial"],["z_RbF_g9sWk","Todos muertos (en vivo)","2016"],["x7FSWTyy4Bk","Guacho (en vivo)","San José de Mayo · 1997"],["VUlH0KIy92U","Vos no me llamaste (en vivo)","Montevideo Rock 2020"],["Mdb6WYyXH6E","Mal de la cabeza con The Horribles","OLA Stream Océano"]
];
const PL=RADIO.filter(r=>r.length===3);
const findPL=n=>{n=n.toLowerCase().replace(/ \(.*/,"");return PL.findIndex(p=>p[1].toLowerCase()===n)};

/* ======================= TIMELINE ======================= */
const TL=[
 ["1973–1985","noventa","Crecer en México","Durante la dictadura, varias familias se exilian en México. Santullo se va a los 8 años y vive allá hasta 1985; Campodónico vuelve en 1984; Casacuberta pasa ahí parte de su adolescencia. De ese tiempo les quedan los mexicanismos y la historieta de Jis y Trino."],
 ["1990–1992","noventa","Discos de Nueva York","Santullo vuelve a México D.F., viaja a Nueva York y regresa a Montevideo en 1992 con discos de hip hop. Casacuberta cree que probablemente tenía «el único ejemplar» de House of Pain o de los Beastie Boys."],
 ["mediados de 1994","noventa","Nace en Villa Española","Fernando Santullo y Juan Campodónico arman la banda. El nombre sale del volumen <i>El Santos contra La Tetona Mendoza</i>; en la lista de unos 40 nombres quedaron afuera «Olor a pata» y «Los Calefones»."],
 ["28 ago 1994","mvd","Debut en El Perro Azul","«Ocho temas, 50 amigos, un boliche sin escenario». Tocan L. Mental (voz), Daniel Benia (bajo), Juan Campodónico (guitarra) y Roberto Rodino (batería)."],
 ["sep 1994","mvd","Pub Big Bang, Parque Rodó","En el segundo show entran PP Canedo en batería y Carlos Casacuberta en voz y guitarra."],
 ["nov 1994","noventa","Ganan Generación 95","El concurso de Rock de Primera, Control Remoto y X FM les da horas de estudio y guitarras Samick, que venden para pagar horas extra."],
 ["dic 1995","disco","El Peyote Asesino (Orfeo)","Se presenta en la disco Enterprise. Más de mil copias, récord local, y grupo revelación 1995 para los lectores de Rock de Primera."],
 ["18 jun 1996","disco","Número uno en X FM","«El Peyote Asesino» llega al primer puesto y se queda dos semanas."],
 ["ago 1996","afuera","Primera vez en Buenos Aires","Centro Cultural Rojas, en un ciclo con Molotov y Tintoreros."],
 ["mar 1997","mvd","Teloneros de Illya Kuryaki","Abren el show de Illya Kuryaki and the Valderramas en el Teatro de Verano, ante más de 3.000 personas. El video de «L. Mental» pasa por MTV Latino."],
 ["7 jun 1997","mvd","«5 horas de rock» en la Estación Central","Con Buitres, Tintoreros, Trotsky Vengarán, La Vela Puerca y Tercera Piedra."],
 ["sep 1997","afuera","Los Ángeles con Santaolalla","Graban las bases de <i>Terraja</i> en Can Am Recorders, el estudio de Dr. Dre y Snoop Dogg, con Tony Peluso de ingeniero."],
 ["1997–98","afuera","Gira por México","Tocan con Molotov, Delinquent Habits y Control Machete."],
 ["8 ago 1998","disco","Terraja (Surco / Universal)","Presentación en La Factoría, en Agraciada y Suárez. Sale a fin de mes en cinco países. «Mal de la cabeza» queda 31.ª entre los más pedidos de 1998 en MTV Latino."],
 ["2 oct 1998","afuera","Festival Surco, Parque Sarmiento","En Buenos Aires, con Cypress Hill, Molotov, Bersuit y Árbol. Dos días después, Teatro de Verano con Molotov y Plátano Macho."],
 ["may 1999","noventa","Chile y la separación","Después de un par de fechas en Chile, entran en un impasse que termina en disolución. Santullo: la duda era «transar en todo o seguir siendo independientes». No hubo peleas, hubo desgaste."],
 ["1999–2009","vuelta","Diez años parados","Los discos quedan descatalogados. Bajofondo, Kato, Drexler, La Vela Puerca. «Esos diez años la banda quedó parada… la música fue pasando de mano en mano»."],
 ["22 mar 2009","vuelta","Vuelven para cerrar el Pilsen Rock","Parque de la Hispanidad, Durazno, en la sexta edición del festival. Unos días antes hicieron una muestra en el Restaurant-Teatro Lindolfo."],
 ["4–5 nov 2009","vuelta","Dos Teatros de Verano llenos","Ese año vuelve Luciano Supervielle como invitado y Bizarro reedita el primer disco en CD."],
 ["12–13 may 2016","vuelta","Segunda vuelta, Teatro de Verano","Matías Rada cubre a Casacuberta, que no puede tocar por salud, y queda en la banda. Entra también Bruno Tortorella en teclados."],
 ["17 sep 2016","afuera","Uniclub, Buenos Aires","Después de dos noches en La Trastienda de Montevideo."],
 ["18 oct 2017","disco","«Bailando samba»","La primera canción nueva en 19 años. El video se arma con celulares del público en La Trastienda."],
 ["2 dic 2017","mvd","Montevideo Rock","Rural del Prado. En abril habían tocado en la Sala Hugo Balzo del Sodre."],
 ["6 oct 2019","mvd","Cosquín Rock Uruguay","Escenario Norte del Parque Roosevelt."],
 ["24 ago 2020","mvd","Montevideo Rock sin público","Grabado en la sala principal del Teatro Solís y transmitido por TV Ciudad. En octubre sale «Vos no me llamaste»."],
 ["5 nov 2021","disco","Serial (Bizarro)","Diez canciones producidas por Campodónico y masterizadas por Ted Jensen. Número uno de CUDISCO."],
 ["30 abr 2022","mvd","Serial en el Teatro de Verano","La presentación oficial del disco. Ese año ganan dos Premios Graffiti: álbum de hip hop y banda del año."],
 ["22 sep 2023","mvd","Sala del Museo, llena","Vuelven tras año y medio sin tocar, ante «mil y pico de personas». En noviembre, en Live Era, debuta Nacho Correa en bajo."],
 ["21 abr 2024","mvd","Cosquín Rock Uruguay 2024","Rural del Prado, escenario Antel I. En junio, La Trastienda con Teysera, Pablo Silvera, Flor Sakeo y Don Felipe."],
 ["29 ago 2024","hoy","30 años del primer show","Sala del Museo, entradas agotadas. Abren los paraguayos Villagrán Bolaños."],
 ["18 sep 2025","hoy","Peyote Asesino vs. Mota","En «Sitio», la carpa del Velódromo, con La Chancha Muda de invitada."],
 ["6 dic 2025","hoy","El primer disco, entero","Por los 30 años del debut tocan el disco completo y en orden en la Sala del Museo, con Catatumbo. Se graba <i>Bien de Vivo</i>; Pablo Izmirlian publica el libro <i>El Peyote Asesino</i>."],
 ["mar–may 2026","disco","Bien de Vivo","Salen los videos de «Chupando la cuchara», «Denso» con Ale Piccone y «Tierra derretida», y después los tres singles en vivo."],
 ["8 oct 2026","hoy","La Trastienda","Otra fecha del ciclo Bien de Vivo, que antes pasó por Live Era, el Montevideo Music Box y San Carlos."],
 ["21 oct 2026","hoy","Libro nominado a los Graffiti","El libro de Izmirlian compite como mejor libro sobre música uruguaya."],
 ["11 dic 2026","hoy","Fiesta de la X","Anunciados en la Rural del Prado. ¡Dale, que es tarde!"]
];
const TN={noventa:"Primera vida",disco:"Disco",mvd:"Montevideo",afuera:"Afuera",vuelta:"La vuelta",hoy:"Hoy"};
const tlEl=$("#timeline");
TL.forEach(([d,t,h,p])=>{const e=document.createElement("div");e.className="ev";e.dataset.t=t;e.innerHTML=`<span class="d">${d}</span><h4>${h}<span class="tag ${t}">${TN[t]}</span></h4><p>${p}</p>`;tlEl.appendChild(e)});
$("#tlf").addEventListener("click",e=>{const b=e.target.closest(".chip");if(!b)return;$$("#tlf .chip").forEach(c=>c.classList.toggle("on",c===b));const f=b.dataset.f;tlEl.querySelectorAll(".ev").forEach(ev=>ev.classList.toggle("hide",f!=="all"&&ev.dataset.t!==f))});

/* ======================= INTEGRANTES ======================= */
// [nombre, rol, [1994-99, 2009-16, 2017-23, 2024-hoy], años, ex]
const MEM=[
 ["Fernando Santullo","voz · «L. Mental»",[1,1,1,1],"1994–99 · 2009 · 2016–hoy"],
 ["Carlos Casacuberta","voz y guitarra",[1,1,1,1],"1994–99 · 2009 · 2016–hoy"],
 ["Juan Campodónico","guitarra, loops y programación",[1,1,1,1],"1994–99 · 2009 · 2016–hoy"],
 ["José «PP» Canedo","batería",[1,1,1,1],"1994–99 · 2009 · 2016–hoy"],
 ["Matías Rada","guitarra y voz",[0,1,1,1],"2016–hoy"],
 ["Bruno Tortorella","teclados, voz y samples",[0,1,1,1],"2016–hoy"],
 ["Nacho Correa","bajo · también en Catatumbo",[0,0,0,1],"fines de 2023–hoy"],
 ["Daniel Benia","bajo",[1,1,1,0],"1994–99 · 2009 · 2016–2023",1],
 ["Roberto Rodino","batería",[1,0,0,0],"solo el debut de 1994",1],
 ["Luciano Supervielle","sampler y tornamesa · invitado",[1,1,0,0],"1995 y 2009",1]
];
const MC=["var(--acido)","var(--turq)","var(--amar)","var(--arcilla)","var(--mag)","var(--violeta)","var(--rojo)"];
$("#integrantes").innerHTML=MEM.map((m,i)=>`<div class="figu${m[4]?" ex":""}" style="--c:${MC[i%MC.length]}"><span class="n">${m[4]?"pasó por la banda":"hoy"}</span><h4>${m[0]}</h4><div class="ins">${m[1]}</div><div class="per" title="1994–99 · 2009–16 · 2017–23 · 2024–hoy">${m[2].map(v=>`<i class="${v?"on":""}"></i>`).join("")}</div><div class="yr">${m[3]}</div></div>`).join("");

/* ======================= DISCOS ======================= */
const allTr=DISCS.flatMap(d=>d.tr);
const maxDur=Math.max(...allTr.map(t=>t[1]));
DISCS.forEach(d=>{
  const tot=d.tr.reduce((a,t)=>a+t[1],0);
  const el=document.createElement("article");el.className="disc";el.style.setProperty("--c",d.color);
  el.innerHTML=`<div class="cover tilt"><div class="vinyl"></div><img src="${COV[d.id]}" alt="Tapa de ${d.t}" loading="lazy"><div class="glare"></div></div>
  <div><h3 class="t" style="color:${d.color};font-family:'${d.font}',Rubik">${d.t}</h3><div class="meta">${d.y} · ${d.label} · ${d.tr.length} temas · ${fmt(tot)} · promedio ${fmt(tot/d.tr.length)}</div>
  <p class="desc">${d.desc}</p>
  <ol class="tracks">${d.tr.map(t=>{const r=findPL(t[0]);return `<li><span>${t[0]}${t[5]?`<small>${t[5]}</small>`:""}${r>=0?`<button class="pl" data-r="${r}" aria-label="Escuchar ${t[0]}">▶ oír</button>`:""}</span><span class="dur">${fmt(t[1])}</span><span class="bar" style="width:calc(${(t[1]/maxDur*100).toFixed(1)}% - 34px);background:${d.color}"></span></li>`}).join("")}</ol>
  <p class="credits">${d.credits}</p></div>`;
  $("#discs").appendChild(el);
});
const OTH=[["vos","Vos no me llamaste","Single · 9/10/2020 · Bizarro. Video de Matías De León. Sonó en un clip de la selección uruguaya contra Argentina en 2023."],["cra","La tumba de los crá","Single · diciembre de 2020. Video de Matías De León, enero de 2021."],["hay","Es lo que hay","Single · 16/7/2021. Video con guion y dibujos del argentino Jok, dirigido por Julián Rodríguez."],["chu","Chupando la cuchara (en vivo)","Bien de Vivo · 2026. Del show del 6/12/2025 en la Sala del Museo."],["den","Denso (en vivo) con Ale Piccone","Bien de Vivo · 2026. La trompeta de La Vela Puerca."],["tie","Tierra derretida (en vivo)","Bien de Vivo · 2026. Producción de Cuatromas, dirección de Julio Viera; mezcla y máster de Julio Berta."]];
$("#others").innerHTML=OTH.map(o=>`<div class="other"><img src="${COV[o[0]].replace("1000x1000","250x250")}" alt="" loading="lazy"><div><h4>${o[1]}</h4><p>${o[2]}</p></div></div>`).join("");
const totalSec=allTr.reduce((a,t)=>a+t[1],0);
$("#totalmin").dataset.count=Math.round(totalSec/60);
{const set=new Set(allTr.filter(t=>!/radio/.test(t[0])).map(t=>t[0].toLowerCase()));$("#nTemas").dataset.count=set.size}

/* Otras vidas */
const VIDAS=[
 ["Fernando Santullo","voz · «L. Mental»","Arma Kato en 2000, se muda a Barcelona en 2002 y abre para Anthrax y Napalm Death. En Bajofondo canta «Ya no duele» y coescribe «El mareo», que cantó Cerati. Como solista gana el Iris y el Graffiti con <i>Bajofondo presenta Santullo</i> (2009). También es periodista y sociólogo.",-1.2],
 ["Juan Campodónico","guitarra y programación","Cofunda Bajofondo con Gustavo Santaolalla en 2001 y lidera el proyecto Campo. Produce a Jorge Drexler, El Cuarteto de Nos, La Vela Puerca y No Te Va Gustar. Hijo del actor César Campodónico.",1],
 ["Carlos Casacuberta","voz y guitarra","Economista, docente de la Facultad de Ciencias Sociales y con posgrado en la London School of Economics. Produce con Campodónico <i>Frontera</i>, <i>Sea</i> y <i>Eco</i>, de Drexler, y <i>Soy sola</i>, de Ana Prada. Como solista: <i>:carlos:</i> (2005) y <i>Naturaleza</i> (2013, Graffiti).",-.6],
 ["PP Canedo","batería","Es el baterista de La Vela Puerca. Antes había tocado en La Tabaré.",1.4],
 ["Daniel Benia","bajo","Toca con Santullo solista y vive en México y en España. A fines de 2023 deja Peyote: tocar esa música «ya no lo divertía».",-1],
 ["Gabriel Casacuberta y Luciano Supervielle","producción e invitado","Gabriel, hermano de Carlos, venía de Plátano Macho y produjo el primer disco; los dos terminan en Bajofondo.",.8]
];
$("#vidasGrid").innerHTML=VIDAS.map(v=>`<div class="vida" style="--r:${v[3]}deg"><h4>${v[0]}</h4><div class="q">${v[1]}</div><p>${v[2]}</p></div>`).join("");
$("#set25").innerHTML=DISCS[0].tr.filter(t=>!/radio|Penicilina/.test(t[0])).map(t=>`<li>${t[0]}</li>`).join("");

/* ======================= CHARTS ======================= */
const tip=$("#tip");
function hover(el,html){const show=e=>{tip.innerHTML=html;tip.style.opacity=1;const x=e.clientX??(e.touches&&e.touches[0].clientX),y=e.clientY??(e.touches&&e.touches[0].clientY);tip.style.left=Math.min(x+14,innerWidth-270)+"px";tip.style.top=(y+14)+"px"};el.addEventListener("mousemove",show);el.addEventListener("click",show);el.addEventListener("mouseleave",()=>tip.style.opacity=0)}
addEventListener("scroll",()=>tip.style.opacity=0,{passive:true});
const onView=(el,fn)=>new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){fn();o.disconnect()}},{threshold:.3}).observe(el);
(()=>{const s=$("#chDur");const all=DISCS.flatMap(d=>d.tr.map(t=>({d,t})));const W=1100,H=360,pl=40,pb=24,bw=(W-pl-20)/all.length;const mx=380;
  [0,60,120,180,240,300,360].forEach(v=>{const y=H-pb-(v/mx)*(H-pb-20);mk("line",{x1:pl,x2:W,y1:y,y2:y,stroke:"var(--linea)"},s);mk("text",{x:pl-8,y:y+4,"text-anchor":"end","font-size":11},s).textContent=v/60+"'"});
  const avgAll=totalSec/all.length;const ay=H-pb-(avgAll/mx)*(H-pb-20);
  all.forEach((o,i)=>{const h=(o.t[1]/mx)*(H-pb-20);const r=mk("rect",{x:pl+i*bw+2,y:H-pb,width:bw-4,height:0,fill:o.d.color,stroke:"var(--tinta)","stroke-width":1.2},s);r.dataset.h=h;hover(r,`<b>${o.t[0]}</b><br>${o.d.t} · ${fmt(o.t[1])}`)});
  mk("line",{x1:pl,x2:W,y1:ay,y2:ay,stroke:"var(--tinta)","stroke-width":2,"stroke-dasharray":"6 5"},s);mk("text",{x:W-4,y:ay-8,"text-anchor":"end","font-size":12,"font-weight":700},s).textContent="promedio general "+fmt(avgAll);
  $("#lgDur").innerHTML=DISCS.map(d=>`<span><i style="background:${d.color}"></i>${d.t}</span>`).join("");
  onView(s,()=>s.querySelectorAll("rect[data-h]").forEach((r,i)=>{const h=+r.dataset.h;tween(r,{y:H-pb-h,height:h},900,i*30)}));
})();
(()=>{const s=$("#chAnios");const on=y=>(y>=1994&&y<=1999)||y===2009||y>=2016;const disc={1995:"El Peyote Asesino",1998:"Terraja",2021:"Serial"};const n=33,w=1100/n;
  for(let i=0;i<n;i++){const y=1994+i;const a=on(y);const r=mk("rect",{x:i*w+2,y:30,width:w-4,height:60,rx:4,fill:a?"var(--e1)":"var(--carta)",stroke:"var(--tinta)","stroke-width":1.6,opacity:0},s);
    if(!a)mk("path",{d:`M${i*w+6} 86 L${i*w+w-6} 34`,stroke:"var(--linea)","stroke-width":1.5},s);
    if(disc[y]){mk("circle",{cx:i*w+w/2,cy:60,r:9,fill:"var(--tinta)"},s);hover(r,`<b>${y}</b><br>sale ${disc[y]}`)}else hover(r,`<b>${y}</b><br>${a?"la banda toca":"parados"}`);
    if(y%5===4||y===2026||y===2009)mk("text",{x:i*w+w/2,y:116,"text-anchor":"middle","font-size":12,"font-weight":700},s).textContent=y;
    onView(s,()=>r.animate([{opacity:0},{opacity:1}],{duration:300,delay:i*45,fill:"forwards"}))}
  mk("text",{x:6*w+(w*9)/2+w,y:20,"text-anchor":"middle","font-size":12,fill:"var(--gris)"},s).textContent="diez años parados";
  mk("text",{x:16*w+(w*6)/2+w,y:20,"text-anchor":"middle","font-size":12,fill:"var(--gris)"},s).textContent="seis más";
})();
function hbars(id,rows,unit,colorFn,W=500){const s=$("#"+id);const rh=Math.min(44,(+s.getAttribute("viewBox").split(" ")[3]-20)/rows.length),mx=Math.max(...rows.map(r=>r[1]));const bars=[];rows.forEach((r,i)=>{const y=10+i*rh;const w=(r[1]/mx)*(W-240);mk("text",{x:0,y:y+rh/2+4,"font-size":12,"font-weight":600},s).textContent=r[0];const b=mk("rect",{x:180,y:y+5,width:0,height:rh-10,rx:3,fill:colorFn?colorFn(r,i):"var(--e1)",stroke:"var(--tinta)","stroke-width":1.4},s);bars.push([b,w]);mk("text",{x:188+w,y:y+rh/2+4,"font-size":11.5,fill:"var(--gris)"},s).textContent=unit(r[1]);hover(b,`<b>${r[0]}</b><br>${unit(r[1])}`)});
  onView(s,()=>bars.forEach(([b,w],i)=>tween(b,{width:w},1100,i*80)))}
const avg=d=>d.tr.reduce((a,t)=>a+t[1],0)/d.tr.length;
hbars("chAvg",DISCS.map(d=>[d.t,avg(d)]),fmt,(r,i)=>DISCS[i].color);
hbars("chTot",[...DISCS.map(d=>[d.t,d.tr.reduce((a,t)=>a+t[1],0)]),["Bien de Vivo (3 en vivo)",BDV.reduce((a,t)=>a+t[1],0)]],v=>fmt(v)+" min",(r,i)=>i<3?DISCS[i].color:"var(--acido)");
const YTV=[["Cable pelado · fans",899,"f"],["Mal de la cabeza · fans",578,"f"],["Mal de la cabeza",461,"o"],["Mal de la cabeza · temas",392,"t"],["Criminal · temas",324,"t"],["Guacho · temas",293,"t"],["Mal de la cabeza en vivo",275,"o"],["L Mental",235,"o"],["Denso · temas",232,"t"],["Vos no me llamaste",148,"o"],["La tumba de los crá",87,"o"],["Chupando la cuchara (vivo)",69,"o"]];
hbars("chYt",YTV,v=>v+" mil",r=>r[2]==="o"?"var(--tinta)":r[2]==="t"?"var(--acido)":"var(--linea)");
(()=>{const s=$("#chScat");const W=500,H=340,p=40;const xs=[70,195],ys=[.06,.29];
  const X=v=>p+(v-xs[0])/(xs[1]-xs[0])*(W-p-10),Y=v=>H-p-(v-ys[0])/(ys[1]-ys[0])*(H-p-10);
  [80,100,120,140,160,180].forEach(v=>{mk("line",{x1:X(v),x2:X(v),y1:10,y2:H-p,stroke:"var(--linea)"},s);mk("text",{x:X(v),y:H-p+16,"text-anchor":"middle","font-size":10.5},s).textContent=v});
  mk("text",{x:W-10,y:H-6,"text-anchor":"end","font-size":11,fill:"var(--gris)"},s).textContent="BPM →";mk("text",{x:p,y:20,"font-size":11,fill:"var(--gris)"},s).textContent="↑ energía";
  DISCS.forEach(d=>d.tr.forEach(t=>{const c=mk("circle",{cx:X(t[2]),cy:Y(t[4]),r:7,fill:d.color,stroke:"var(--tinta)","stroke-width":1.4,opacity:.9},s);hover(c,`<b>${t[0]}</b><br>~${t[2]} BPM · ${t[3]} · energía ${t[4]}`)}));
})();
const KEYN={C:"Do",D:"Re",E:"Mi",F:"Fa",G:"Sol",A:"La",B:"Si"};
const keyEs=k=>{const m=k.endsWith("m");let b=k.replace("m","");const sh=b.includes("#");b=b.replace("#","");return KEYN[b]+(sh?"♯":"")+(m?" menor":" mayor")};
(()=>{const s=$("#chKey");const cnt={};allTr.filter(t=>!/radio/.test(t[0])).forEach(t=>cnt[t[3]]=(cnt[t[3]]||0)+1);const rows=Object.entries(cnt).sort((a,b)=>b[1]-a[1]);
  const cx=150,cy=170,R=120,r0=62;let a0=-Math.PI/2;const tot=rows.reduce((a,r)=>a+r[1],0);const pal=["#86ec2c","#f3c22e","#14a39b","#e0552b","#5a3ea6","#d4237c","#c21d37","#9fd8d3","#f6a98f","#b7a7ff","#e8e6a3","#5f5a69","#cdd5c8","#2f8a12","#ffd9ea","#1a1424"];
  rows.forEach(([k,v],i)=>{const a1=a0+v/tot*Math.PI*2;const L=a1-a0>Math.PI?1:0;const P=(a,r)=>[cx+r*Math.cos(a),cy+r*Math.sin(a)];const [x0,y0]=P(a0,R),[x1,y1]=P(a1,R),[x2,y2]=P(a1,r0),[x3,y3]=P(a0,r0);
    const pth=mk("path",{d:`M${x0},${y0}A${R},${R} 0 ${L} 1 ${x1},${y1}L${x2},${y2}A${r0},${r0} 0 ${L} 0 ${x3},${y3}Z`,fill:pal[i%pal.length],stroke:"var(--tinta)","stroke-width":1.6},s);hover(pth,`<b>${keyEs(k)}</b> · ${v} tema${v>1?"s":""}`);a0=a1;
    if(i<9){mk("rect",{x:300,y:40+i*28,width:13,height:13,fill:pal[i%pal.length],stroke:"var(--tinta)"},s);mk("text",{x:322,y:51+i*28,"font-size":12.5},s).textContent=`${keyEs(k)}  ×${v}`}});
  mk("text",{x:cx,y:cy+9,"text-anchor":"middle","font-size":26,"font-family":"Rubik Mono One"},s).textContent="Lam";
})();
const SPO=[["Mal de la cabeza","Terraja"],["Cable pelado","Terraja"],["L Mental","1995 / Terraja"],["Criminal","Terraja"],["Guacho","Terraja"],["Denso","Terraja"],["Vos no me llamaste","Serial"],["La tumba de los crá","Serial"],["El Peyote Asesino","Terraja"],["Pump Up the Parla","Serial"]];
$("#chSpo").innerHTML=SPO.map(s=>`<li>${s[0]}<small>${s[1]}</small></li>`).join("");

/* ======================= ADN ======================= */
const GENES=[
 ["El exilio en la boca","Crecieron en México y se nota: en los noventa las letras estaban llenas de mexicanismos. El nombre, el personaje y la tapa vienen de una historieta de Jis y Trino.","«rap blanco»","cómo se definían"],
 ["La autoparodia","Se ríen primero de sí mismos. El seudónimo L. Mental nació para burlarse de los nombres de rapero tipo Master P.","«El Peyote siempre tuvo un componente de autoparodia»","Santullo, 2021"],
 ["Lo que suena antes que lo que dice","Buscan una actitud más que un mensaje: la palabra que entra justo en el golpe.","«Las palabras están allí muchas veces porque suenan bien»","Santullo"],
 ["La cancha","En <i>Serial</i> el fútbol y el básquet son idioma: el área, el golero, el penal, el triple.","«Juego bien, juego mal, piso el área, es penal»","«En la B»"],
 ["El barrio montevideano","Ticholos, botijas, crá: el habla de la calle de Montevideo como materia prima.","«Te compro ticholos, te doy alegría»","«La tumba de los crá»"],
 ["El perdedor con gracia","Donde en los noventa había bronca, en <i>Serial</i> aparece un «tufo perdedor» que se ríe de su propia mala suerte.","«Soy la clase de tarado que ya va medio cagado»","«La tumba de los crá»"],
 ["Spanglish y cultura pop","Steven Seagal, René Higuita, un capítulo de Los Simpson y el inglés metido en el medio: «Perkins», «UR Gay», «Wanker».","«Tierra pa'l golero como el Pepe Sasía»","«Es lo que hay»"],
 ["Corta y pega","Componen como un colectivo de hip hop y después lo convierten en rock: loops, riffs y versos que se pegan como un collage.","«una banda de hip hop que después convierte esas canciones en rock»","Santullo, EFE 2021"],
 ["El consejo de la calle","Frases que suenan a refrán de esquina, dichas con la seriedad de un abuelo y la cara de un pibe.","«Nunca digas payador / adelante de un botija»","«Vos no me llamaste»"],
 ["Lo oscuro con risa","Cementerios, zombies, «Todos muertos», «La tumba de los crá», «Criminal»: la muerte y el crimen siempre con una mueca.","«está buscando problemas»","el pegotín de 1994"]
];
$("#dna").innerHTML=GENES.map((g,i)=>`<div class="gene"><div class="n">gen ${String(i+1).padStart(2,"0")}</div><h4>${g[0]}</h4><p>${g[1]}</p><q>${g[2]}<small>${g[3]}</small></q></div>`).join("");
const WORDS=[["cabeza",5],["criminal",4],["guacho",4],["denso",4],["peyote",5],["muertos",3],["tumba",3],["crá",3],["gil",3],["parla",3],["samba",2],["demente",3],["botija",3],["ticholos",2],["golero",2],["penal",2],["área",2],["barrio",4],["México",3],["terraja",4],["cable",3],["pelado",2],["L. Mental",3],["psicoterapeuta",2],["biónica",2],["cuchara",3],["tierra",2],["derretida",2],["payador",2],["Sasía",2],["serial",3],["perdiste",2],["zombies",2],["carnaval",2],["Villa Española",3],["rap blanco",4],["yuyos",2],["problemas",3]];
{const cols=["var(--tinta)","var(--eT)","var(--e2)","var(--gris)"],fams=["Rubik","var(--disp)","Rubik Mono One","Rubik"];
 $("#cloud").innerHTML=WORDS.sort(()=>Math.random()-.5).map(([w,n],i)=>`<span style="font-size:${13+n*8}px;color:${cols[i%4]};font-family:${fams[(i+n)%4]};font-weight:${n>=4?800:500}">${w}</span>`).join("")}

/* ======================= LA MÁQUINA ======================= */
const I=p=>`<svg viewBox="0 0 64 64" fill="none" stroke="#1a1424" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const LAB=[
 ["Dos voces","Santullo rapea, Casacuberta canta y toca la guitarra: se pasan el verso como una pelota.",I('<rect x="8" y="8" width="14" height="24" rx="7" fill="#86ec2c"/><rect x="42" y="8" width="14" height="24" rx="7" fill="#f3c22e"/><path d="M4 28c0 8 5 12 11 12s11-4 11-12M38 28c0 8 5 12 11 12s11-4 11-12M15 40v14M49 40v14M24 30q8-8 16 0"/>')],
 ["Guitarras de metal","Riffs de hardcore y metal, de Campodónico, Casacuberta y Rada. «De los hermanos Fattoruso a Gojira».",I('<path d="M40 6l18 18-6 2-16 16" fill="#c21d37"/><path d="M36 28L14 50a7 7 0 1 1-6-6l22-22"/><circle cx="14" cy="50" r="3" fill="#1a1424"/><path d="M44 10l10 10"/>')],
 ["Loops y programación","Campodónico arma la base como un productor de hip hop: corta, pega y repite.",I('<rect x="6" y="14" width="52" height="36" rx="4" fill="#f4f6f0"/><circle cx="20" cy="32" r="8" fill="#14a39b"/><circle cx="44" cy="32" r="8" fill="#14a39b"/><path d="M20 24c8-6 16-6 24 0M28 44h8"/>')],
 ["Sampler y tornamesa","Luciano Supervielle, invitado en 1995 y en 2009. Nunca tuvieron un DJ fijo.",I('<rect x="6" y="10" width="52" height="44" rx="4"/><circle cx="28" cy="32" r="16" fill="#1a1424"/><circle cx="28" cy="32" r="4" fill="#f3c22e"/><path d="M50 16v24l-10 6"/>')],
 ["Bandoneón","Néstor Vaz en «Mal de la cabeza»: el tango metido en el hit.",I('<path d="M8 18h10v28H8zM46 18h10v28H46z" fill="#e0552b"/><path d="M18 18l4 28M22 18l4 28M26 18l4 28M30 18l4 28M34 18l4 28M38 18l4 28M42 18l4 28M18 18h28M18 46h28"/>')],
 ["Órgano Hammond","Aníbal Kerpel, en Los Ángeles, también en «Mal de la cabeza».",I('<rect x="6" y="16" width="52" height="16" fill="#5a3ea6"/><rect x="6" y="32" width="52" height="14" fill="#f4f6f0"/><path d="M14 32v14M22 32v14M30 32v14M38 32v14M46 32v14M12 46v10M52 46v10"/>')],
 ["Bajo funk","Daniel Benia hasta 2023; desde entonces, Nacho Correa, de Catatumbo.",I('<path d="M44 4l14 14-4 2-14 14" fill="#14a39b"/><path d="M40 24L16 48a8 8 0 1 1-6-6l24-24"/><path d="M47 9l8 8M20 44l-4-4"/>')],
 ["Batería","PP Canedo, el mismo de La Vela Puerca. En el debut tocó Roberto Rodino.",I('<ellipse cx="32" cy="38" rx="20" ry="7" fill="#f3c22e"/><path d="M12 38v12c0 4 9 7 20 7s20-3 20-7V38"/><path d="M8 8l18 22M56 8L38 30"/>')],
 ["Teclados y samples","Bruno Tortorella, desde 2016: la capa que en vivo reemplaza a la máquina.",I('<rect x="4" y="20" width="56" height="26" rx="3"/><path d="M12 20v16M20 20v16M28 20v16M36 20v16M44 20v16M52 20v16"/><path d="M8 12q6-6 12 0t12 0 12 0 12 0" stroke="#d4237c"/>')],
 ["Trompeta","Ale Piccone, de La Vela Puerca, en el «Denso» de Bien de Vivo.",I('<path d="M6 28h30l18-12v32L36 36H6z" fill="#f3c22e"/><path d="M14 28v-6h4v6M22 28v-6h4v6M30 28v-6h4v6"/>')]
];
$("#lab").innerHTML=LAB.map(l=>`<div class="inst">${l[2]}<h4>${l[0]}</h4><p>${l[1]}</p></div>`).join("");

/* ======================= MAPA ======================= */
(()=>{const s=$("#map");const P=(lat,lon)=>[(lon+59.0)/5.8*470+30,(-lat-29.9)/5.4*440+40];
  const UY=[[-30.19,-57.61],[-30.28,-57.08],[-30.11,-56.74],[-30.4,-56.4],[-30.73,-56.0],[-30.88,-55.6],[-31.08,-55.25],[-31.35,-54.9],[-31.87,-54.16],[-32.18,-53.75],[-32.58,-53.38],[-32.95,-53.55],[-33.3,-53.5],[-33.69,-53.46],[-34.2,-53.75],[-34.66,-54.16],[-34.97,-54.95],[-34.87,-55.27],[-34.78,-55.9],[-34.9,-56.2],[-34.85,-56.6],[-34.47,-57.85],[-34.2,-58.2],[-33.88,-58.42],[-33.12,-58.3],[-32.32,-58.08],[-31.38,-57.97],[-30.65,-57.85],[-30.19,-57.61]].map(c=>P(...c));
  mk("path",{d:"M"+UY.map(p=>p.join(",")).join(" L")+"Z",fill:"var(--papel2)",stroke:"var(--tinta)","stroke-width":2,"stroke-linejoin":"round"},s);
  const AR=[[-29.7,-57.4],[-30.19,-57.61],[-30.65,-57.85],[-31.38,-57.97],[-32.32,-58.08],[-33.12,-58.3],[-33.88,-58.42],[-34.25,-58.55],[-34.6,-58.38],[-35.0,-57.6],[-35.4,-57.2]].map(c=>P(...c));
  mk("path",{d:"M"+AR.map(p=>p.join(",")).join(" L"),fill:"none",stroke:"var(--tinta)","stroke-width":1.4,"stroke-dasharray":"5 4"},s);
  mk("text",{x:24,y:300,"font-size":11,fill:"var(--gris)"},s).textContent="ARGENTINA";mk("text",{x:380,y:90,"font-size":11,fill:"var(--gris)"},s).textContent="BRASIL";
  const [rx,ry]=P(-35.4,-56.3);const rio=mk("text",{x:rx,y:ry,"font-size":11,fill:"var(--turq)","font-weight":700},s);rio.textContent="Río de la Plata";
  const [mx,my]=P(-34.9,-56.17);
  const pts=[["Montevideo","El Perro Azul · Big Bang · Teatro de Verano · La Trastienda · Sala del Museo · Rural del Prado · Velódromo · Teatro Solís · Parque Roosevelt · Estudio del Cordón · La Factoría · Live Era",-34.9,-56.17,"var(--rojo)",15],["Durazno","Pilsen Rock 2009 · Parque de la Hispanidad",-33.375,-56.523,"var(--e1)",8],["San José de Mayo","Show de 1997 (Guacho en vivo)",-34.34,-56.71,"var(--turq)",6],["Minas","Semana de Lavalleja 2024",-34.376,-55.235,"var(--e1)",6],["Parque del Plata","Fiesta de la Cerveza Artesanal 2025",-34.764,-55.712,"var(--e1)",5],["Punta Ballena","Festival Medio y Medio 2021, 2022 y 2024",-34.91,-55.05,"var(--e1)",6],["Punta del Este","Centro de Convenciones 2025",-34.96,-54.94,"var(--e1)",5],["José Ignacio","La Ferona 2024",-34.82,-54.66,"var(--e1)",5],["San Carlos","Entrecasa · Bien de Vivo 2026",-34.79,-54.918,"var(--mag)",5],["Treinta y Tres","Festival del Olimar 2025",-33.233,-54.373,"var(--e1)",6],["Buenos Aires","Centro Cultural Rojas 1996 y 1998 · Festival Surco 1998 · Uniclub 2016",-34.6,-58.38,"var(--arcilla)",11]];
  const arcs=[["México","Gira 1997–98 con Molotov y Control Machete",[24,30]],["Los Ángeles","Can Am Recorders · Terraja 1997",[24,90]],["Chile","Últimas fechas · mayo de 1999",[24,150]]];
  arcs.forEach(([n,d,[x,y]])=>{const g=mk("g",{},s);const a=mk("path",{d:`M${mx},${my} Q${(mx+x)/2-20},${(my+y)/2-60} ${x},${y}`,stroke:"var(--tinta)","stroke-width":1.4,fill:"none","stroke-dasharray":"3 5"},g);if(!RM)a.animate([{strokeDashoffset:0},{strokeDashoffset:64}],{duration:2600,iterations:Infinity});mk("circle",{cx:x,cy:y,r:6,fill:"var(--arcilla)",stroke:"var(--tinta)","stroke-width":1.4},g);mk("text",{x:x+11,y:y+4,"font-size":12,"font-weight":800},g).textContent="← "+n;hover(g,`<b>${n}</b><br>${d}`)});
  const LO={"Montevideo":[-16,5,"end"],"Durazno":[12,4,"start"],"San José de Mayo":[-12,-8,"end"],"Minas":[10,-8,"start"],"Parque del Plata":[0,-14,"middle"],"Punta Ballena":[-12,22,"end"],"Punta del Este":[10,26,"start"],"José Ignacio":[10,4,"start"],"San Carlos":[2,-14,"middle"],"Treinta y Tres":[12,4,"start"],"Buenos Aires":[0,28,"middle"]};
  pts.forEach(([n,d,la,lo,c,r])=>{const [x,y]=P(la,lo);const g=mk("g",{},s);mk("circle",{cx:x,cy:y,r:r+7,fill:c,opacity:.25},g);const cc=mk("circle",{cx:x,cy:y,r:r/2+2.5,fill:c,stroke:"var(--tinta)","stroke-width":1.5},g);if(!RM)cc.animate([{opacity:1},{opacity:.45},{opacity:1}],{duration:2200+Math.random()*1500,iterations:Infinity});
    const L=LO[n];mk("text",{x:x+L[0],y:y+L[1],"text-anchor":L[2],"font-size":n==="Montevideo"?14:10.5,"font-weight":n==="Montevideo"?800:600},g).textContent=n;hover(g,`<b>${n}</b><br>${d}`)});
})();
const VEN=[["El Perro Azul","Montevideo · debut, 28/8/1994"],["Pub Big Bang","Parque Rodó · 1994"],["Estudio del Cordón","grabación del primer disco · 1995"],["Disco Enterprise","presentación del primer disco · 1995"],["Centro Cultural Rojas","Buenos Aires · 1996 y 1998"],["Teatro de Verano","1997, 1998, 2009, 2016 y 2022"],["Estación Central AFE","«5 horas de rock» · 1997"],["Can Am Recorders","Tarzana, Los Ángeles · 1997"],["La Factoría","presentación de Terraja · 1998"],["Parque Sarmiento","Festival Surco, Buenos Aires · 1998"],["Parque de la Hispanidad","Pilsen Rock, Durazno · 2009"],["La Trastienda","de 2016 a hoy, muchas noches"],["Uniclub","Buenos Aires · 2016"],["Sala Hugo Balzo, Sodre","2017"],["Rural del Prado","Montevideo Rock 2017 · Cosquín 2024 · Fiesta de la X 2026"],["Sala del Museo","2018, 2023, 2024 y 2025"],["Parque Roosevelt","Cosquín Rock Uruguay · 2019"],["Teatro Solís","Montevideo Rock sin público · 2020"],["Estudio Zorzal","grabación de Serial"],["Medio y Medio","Punta Ballena · 2021, 2022 y 2024"],["Live Era","2023 y 2026"],["Sitio, Velódromo","Peyote vs. Mota · 2025"],["Montevideo Music Box","Montevideo Live Rock · 2026"],["Entrecasa","San Carlos · 2026"]];
$("#venues").innerHTML=VEN.map(v=>`<li>${v[0]}<span>${v[1]}</span></li>`).join("");

/* ======================= RED ======================= */
(()=>{const s=$("#net");const W=1100,H=620,cx=W/2,cy=H/2;const G={banda:"#86ec2c",prod:"#14a39b",invitado:"#f3c22e",amigas:"#e0552b",imagen:"#d4237c"};
  const N=[["Fernando Santullo","banda","voz · fundador"],["Juan Campodónico","banda","guitarra · fundador"],["Carlos Casacuberta","banda","voz y guitarra"],["PP Canedo","banda","batería"],["Daniel Benia","banda","bajo 1994–2023"],["Matías Rada","banda","guitarra y voz"],["Bruno Tortorella","banda","teclados"],["Nacho Correa","banda","bajo"],
   ["Gabriel Casacuberta","prod","productor del primer disco"],["Luis Restuccia","prod","Estudio del Cordón"],["Gustavo Santaolalla","prod","productor de Terraja"],["Aníbal Kerpel","prod","coproductor y Hammond"],["Tony Peluso","prod","ingeniero en Los Ángeles"],["Julio Berta","prod","Serial · remaster · Bien de Vivo"],["Ted Jensen","prod","máster de Serial"],["Alfonso Carbone","prod","A&R de Orfeo"],
   ["Luciano Supervielle","invitado","sampler · 1995 y 2009"],["Néstor Vaz","invitado","bandoneón en Mal de la cabeza"],["Ale Piccone","invitado","trompeta en Denso"],["Sebastián Teysera","invitado","La Trastienda 2024"],["Pablo Silvera","invitado","Teatro de Verano 2016"],["Flor Sakeo","invitado","La Trastienda 2024"],
   ["La Vela Puerca","amigas","5 horas de rock · Luna Park"],["Molotov","amigas","México, Buenos Aires, Montevideo"],["Plátano Macho","amigas","Teatro de Verano 1998"],["Buitres","amigas","Estación Central 1997"],["Mota","amigas","Peyote vs. Mota 2025"],["Catatumbo","amigas","30 años del debut"],["Illya Kuryaki","amigas","Teatro de Verano 1997"],["Cypress Hill","amigas","Festival Surco 1998"],
   ["Jis y Trino","imagen","el personaje"],["Federico Macazaga","imagen","diseño de los noventa"],["Matilde Campodónico","imagen","fotografía, de 1995 a hoy"],["Guillermo Peluffo","imagen","video de Mal de la cabeza"],["Matías De León","imagen","videos 2020–21"],["Jok","imagen","dibujos de Es lo que hay"],["Zelmar Borrás","imagen","diseño actual"]];
  const groups=Object.keys(G);const pos=N.map(n=>{const gi=groups.indexOf(n[1]);const same=N.filter(m=>m[1]===n[1]);const k=same.indexOf(n);const base=gi/groups.length*Math.PI*2-Math.PI/2;const spread=(Math.PI*2/groups.length)*.84;const a=base+(k/(Math.max(1,same.length-1))-.5)*spread;const R=(k%2?255:200);return [cx+Math.cos(a)*R*1.6,cy+Math.sin(a)*R*.98]});
  const lines=N.map((n,i)=>mk("line",{x1:cx,y1:cy,x2:pos[i][0],y2:pos[i][1],stroke:"#1a1424","stroke-width":1.2,opacity:.16},s));
  N.forEach((n,i)=>{const g=mk("g",{class:"node"},s);g.dataset.g=n[1];mk("circle",{cx:pos[i][0],cy:pos[i][1],r:7,fill:G[n[1]],stroke:"#1a1424","stroke-width":1.5},g);const left=pos[i][0]<cx;mk("text",{x:pos[i][0]+(left?-12:12),y:pos[i][1]+4,"text-anchor":left?"end":"start","font-weight":600},g).textContent=n[0];hover(g,`<b>${n[0]}</b><br>${n[2]}`);
    g.addEventListener("mouseenter",()=>{s.classList.add("focus");$$("#net .node").forEach(x=>x.classList.toggle("hl",x.dataset.g===n[1]));lines.forEach((l,j)=>l.setAttribute("opacity",N[j][1]===n[1]?.7:.05))});
    g.addEventListener("mouseleave",()=>{s.classList.remove("focus");lines.forEach(l=>l.setAttribute("opacity",.16))})});
  mk("circle",{cx,cy,r:62,fill:"var(--acido)",stroke:"#1a1424","stroke-width":2.5},s);const pulse=mk("circle",{cx,cy,r:62,fill:"none",stroke:"#1a1424","stroke-width":1.5},s);if(!RM)pulse.animate([{r:62,opacity:.8},{r:118,opacity:0}],{duration:2600,iterations:Infinity});
  mk("text",{x:cx,y:cy-2,"text-anchor":"middle","font-size":19,"font-family":"Rubik Mono One"},s).textContent="PEYOTE";
  mk("text",{x:cx,y:cy+18,"text-anchor":"middle","font-size":11,"font-weight":700},s).textContent="ASESINO";
  const lg={banda:"Integrantes",prod:"Producción y técnica",invitado:"Invitados",amigas:"Bandas amigas y escenarios compartidos",imagen:"Imagen y video"};
  groups.forEach((k,i)=>{mk("rect",{x:10,y:14+i*20,width:12,height:12,fill:G[k],stroke:"#1a1424"},s);mk("text",{x:30,y:24+i*20,"font-size":12},s).textContent=lg[k]});
})();

/* ======================= CARRUSEL ======================= */
const VID=[["u-X4aeoQ4hE","Mal de la cabeza","Video oficial · Terraja · dir. Guillermo Peluffo"],["k4fm4Qg7_qE","Cable pelado","Video oficial · Terraja"],["Sjc37IAG09s","L Mental","Video oficial · 1995"],["QNaLyAhuuNg","Vos no me llamaste","Video oficial · Serial"],["3pcV51HjEf4","La tumba de los crá","Video oficial · Serial"],["OvGUoSv3t-Y","Es lo que hay","Video animado de Jok · Serial"],["m7kEDsNwXwI","Bailando samba","Video oficial · 2017"],["eYwT_qeMhPo","Chupando la cuchara","Bien de Vivo · 2025"],["V9gW9L2PWcs","Denso con Ale Piccone","Bien de Vivo · 2025"],["agli2-19TjU","Tierra derretida","Bien de Vivo · 2025"],["BdS27mo1wT4","Pilsen Rock 2009, show completo","Valvular TV · Durazno"],["HSLcTn8lP-Q","Criminal en vivo","Pilsen Rock 2009"],["qPcP4lMd-x4","Montevideo Rock 2017","En vivo · grabación de un fan"],["6oMQvn2capc","Guacho / HK con Pablo Silvera","Teatro de Verano · 13/5/2016"],["x7FSWTyy4Bk","Guacho en San José","En vivo · 1997"],["HQ34sc_UMaM","Los Ángeles 1997","Archivo · grabando Terraja"],["lwOkScXRfkw","Mal de la cabeza en MTV","Archivo · 1999"],["TNlK5Tph73g","Rock de Acá","Archivo de TV"],["Q3r5NvU2aVE","Volver a la energía del principio","Entrevista · la diaria, 2026"],["9QS_gr45oq8","Santaolalla en Villa Española","Campodónico en la diaria · 2026"]];
(()=>{const car=$("#car");const dots=$("#dots");let cur=0,timer;
  car.innerHTML=VID.map((v,i)=>`<div class="slide" data-i="${i}" role="button" tabindex="0" aria-label="${v[1]}"><img src="https://i.ytimg.com/vi/${v[0]}/hqdefault.jpg" alt="" loading="lazy"><div class="cap"><b>${v[1]}</b>${v[2]}</div></div>`).join("");
  dots.innerHTML=VID.map((_,i)=>`<i data-i="${i}"></i>`).join("");
  const slides=[...car.children],n=slides.length;
  function lay(){const w=innerWidth<700?150:300;slides.forEach((s,i)=>{let o=i-cur;if(o>n/2)o-=n;if(o<-n/2)o+=n;const a=Math.abs(o);s.style.transform=`translateX(${o*w}px) translateZ(${-a*220}px) rotateY(${-o*26}deg)`;s.style.opacity=a>3?0:1-a*.2;s.style.zIndex=100-a;s.style.filter=a?`grayscale(1) contrast(1.1)`:"none";s.classList.toggle("c",a===0);s.style.pointerEvents=a>3?"none":"auto"});[...dots.children].forEach((d,i)=>d.classList.toggle("on",i===cur))}
  const go=i=>{cur=(i+n)%n;lay()};
  const auto=()=>{clearInterval(timer);if(!RM)timer=setInterval(()=>go(cur+1),5200)};
  const pick=s=>{const i=+s.dataset.i;if(i===cur)openVid(VID[i][0]);else go(i);auto()};
  car.addEventListener("click",e=>{const s=e.target.closest(".slide");if(s)pick(s)});
  car.addEventListener("keydown",e=>{const s=e.target.closest(".slide");if(s&&(e.key==="Enter"||e.key===" ")){e.preventDefault();pick(s)}});
  dots.addEventListener("click",e=>{if(e.target.dataset.i)go(+e.target.dataset.i);auto()});
  $("#carPrev").onclick=()=>{go(cur-1);auto()};$("#carNext").onclick=()=>{go(cur+1);auto()};
  car.addEventListener("mouseenter",()=>clearInterval(timer));car.addEventListener("mouseleave",auto);
  let sx=null;car.addEventListener("pointerdown",e=>sx=e.clientX);car.addEventListener("pointerup",e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50){go(cur+(e.clientX<sx?1:-1));auto()}sx=null});
  addEventListener("keydown",e=>{if(e.target.closest("input,textarea"))return;const r=car.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)}});
  addEventListener("resize",lay);lay();auto();
})();
function openVid(id){if(window.YTP&&YTP.pauseVideo)try{YTP.pauseVideo()}catch(e){}$("#modalBox").innerHTML=`<button class="close" onclick="closeVid()">Cerrar ✕</button><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="Video"></iframe>`;$("#modal").classList.add("on")}
function closeVid(){$("#modal").classList.remove("on");$("#modalBox").innerHTML=""}
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeVid()});
addEventListener("keydown",e=>{if(e.key==="Escape")closeVid()});

/* ======================= CABOS / SET / HUMORES ======================= */
const bpmAvg=d=>Math.round(d.tr.reduce((a,t)=>a+t[2],0)/d.tr.length),enAvg=d=>(d.tr.reduce((a,t)=>a+t[4],0)/d.tr.length).toFixed(3);
const keyCount=(()=>{const c={};allTr.filter(t=>!/radio/.test(t[0])).forEach(t=>c[t[3]]=(c[t[3]]||0)+1);return c})();
const INS=[
 ["Terraja estiró las canciones",`El primer disco promedia ${fmt(avg(DISCS[0]))} por tema, <i>Terraja</i> ${fmt(avg(DISCS[1]))} y <i>Serial</i> ${fmt(avg(DISCS[2]))}. Con Santaolalla y en Los Ángeles se tomaron más tiempo; en 2021 volvieron a ir al grano.`],
 ["Más lento y más pesado",`<i>Terraja</i> es el disco con el tempo promedio más bajo (~${bpmAvg(DISCS[1])} BPM, contra ~${bpmAvg(DISCS[0])} del debut y ~${bpmAvg(DISCS[2])} de <i>Serial</i>) y, a la vez, el de más energía (${enAvg(DISCS[1])}). Bajaron la velocidad para ganar peso.`],
 ["La menor es su casa",`Según la estimación armónica, La menor es la tonalidad que más se repite: ${keyCount.Am} temas, entre ellos «Criminal», «Guacho», «Demente» y «Vos no me llamaste».`],
 ["El disco que tocaron seis veces es el que todos escuchan","Santullo dice que <i>Terraja</i> fue «un álbum que tocamos seis veces» antes de separarse. Hoy, de los seis temas más escuchados en Spotify, al menos cinco son de ese disco, empezando por «Mal de la cabeza»."],
 ["Los fans fueron el sello","El «Cable pelado» más visto no es el del canal oficial (65 mil vistas) sino la subida de un fan (cerca de 900 mil). Con los discos descatalogados, la música literalmente pasó de mano en mano."],
 ["Una banda que fabricó productores","Campodónico (Bajofondo, Drexler, Cuarteto de Nos, La Vela Puerca), Casacuberta (Drexler, Ana Prada), Gabriel Casacuberta y Supervielle (Bajofondo), Canedo (La Vela Puerca): media música uruguaya de los 2000 pasó por esta sala de ensayo."],
 ["México está en el ADN, no en la decoración","El nombre, el personaje, la tapa, los mexicanismos y la gira de 1997–98 vienen del exilio. Es su manera de contar una historia política sin hacer canción de protesta."],
 ["El regreso no fue nostalgia","Volvieron a tocar en 2009 y 2016, pero recién con <i>Serial</i> (dos Graffiti) y <i>Bien de Vivo</i> la banda se volvió presente. Santullo: «querer copiarte a vos mismo veinte años atrás es medio triste»."],
 ["Mucho público, pocos números","17,7 mil oyentes mensuales en Spotify para una banda que llena la Sala del Museo y cerró el Pilsen Rock. La gente los vive en vivo más que en streaming: el ciclo <i>Bien de Vivo</i> está bien elegido."]
];
$("#insights").innerHTML=INS.map(i=>`<div class="ins"><h4>${i[0]}</h4><p>${i[1]}</p></div>`).join("");
const SET=["Criminal","Guacho","L Mental","Chupando la cuchara","Vos no me llamaste","Denso","Todos muertos","Tierra derretida","La tumba de los crá","Cable pelado","El Peyote Asesino","Mal de la cabeza"];
$("#setlist").innerHTML=`<li class="h">Set · Villa Española</li>`+SET.map(s=>`<li>${s}</li>`).join("");
const MOOD=[["Pogo","Criminal · Demente · Cama biónica"],["Barrio","Guacho · La tumba de los crá · Es lo que hay"],["Bronca","Todos muertos · Denso · Perkins"],["Cancha","En la B · Flor de gil · Es lo que hay"],["Humor negro","Mal de la cabeza · Psicoterapeuta · No te peines"],["Raíz","Mal de la cabeza (bandoneón) · Bailando samba"],["Volver","Vos no me llamaste · Tierra derretida · Perdiste"],["Primera escucha","Mal de la cabeza → Cable pelado → L Mental → Vos no me llamaste → Chupando la cuchara (en vivo)"]];
$("#moods").innerHTML=MOOD.map(m=>`<div class="mood"><h4>${m[0]}</h4><p>${m[1]}</p></div>`).join("");

/* ======================= OFRENDA: pestañas ======================= */
$("#tabs").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;$$("#tabs button").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-selected",x===b)});$$(".poem").forEach(p=>p.classList.toggle("on",p.id===b.dataset.p))});

/* ======================= FUENTES ======================= */
const SRC=[["Wikipedia · El Peyote Asesino","https://es.wikipedia.org/wiki/El_Peyote_Asesino"],["Wikipedia · El Peyote Asesino (álbum)","https://es.wikipedia.org/wiki/El_Peyote_Asesino_(%C3%A1lbum)"],["Wikipedia · Terraja","https://es.wikipedia.org/wiki/Terraja_(%C3%A1lbum)"],["Wikipedia · Serial","https://es.wikipedia.org/wiki/Serial_(%C3%A1lbum)"],["Wikipedia · Mal de la cabeza","https://es.wikipedia.org/wiki/Mal_de_la_cabeza"],["Bio oficial (archivo)","https://web.archive.org/web/2019/https://www.peyoteasesino.com/bio.php"],["Juan Campodónico · El Peyote Asesino","https://www.juancampodonico.com/project/el_peyote_asesino"],["Juan Campodónico · Terraja","https://www.juancampodonico.com/project/peyote_asesino_terraja"],["Juan Campodónico · Serial","https://www.juancampodonico.com/project/peyote_asesino_serial"],["El País · 30 años","https://www.elpais.com.uy/tvshow/musica/el-curioso-caso-del-peyote-asesino-la-banda-que-vivio-varias-vidas-y-cumple-30-anos-envuelta-en-un-misterio"],["El País · Vuelve al ruedo","https://www.elpais.com.uy/tvshow/musica/peyote-asesino-vuelve-al-ruedo-tras-ano-y-medio-sin-tocar-y-para-darle-mas-vida-a-su-primer-disco-en-23-anos"],["Revista Dossier · Serial","https://revistadossier.com.uy/musica/el-peyote-regresa-como-asesino-serial/"],["Página/12 · NO, 1998","https://www.pagina12.com.ar/1998/suple/no/98-07/98-07-30/199.htm"],["Caras y Caretas · Casacuberta","https://www.carasycaretas.com.uy/entrevistas/hay-gente-todas-las-edades-que-esta-experimentando-la-banda-n72541"],["EFE · Cubo de Rubik demencial","https://www.swissinfo.ch/spa/uruguay-m%C3%BAsica_el-peyote-asesino--el--cubo-de-rubik-demencial--que-regresa-20-a%C3%B1os-despu%C3%A9s/47084078"],["El Observador · Santullo 2021","https://www.elobservador.com.uy/nota/fernando-santullo-y-la-vuelta-del-peyote-querer-copiarte-a-vos-mismo-veinte-anos-atras-es-medio-triste--2021102111340"],["El Observador · Sin nostalgia","https://www.elobservador.com.uy/nota/el-peyote-sin-nostalgia-2016119500"],["Montevideo Portal · Santullo y Benia","https://www.montevideo.com.uy/Tiempo-libre/Conversamos-con-Fernando-Santullo-y-Daniel-Benia-de-El-Peyote-Asesino-uc308056"],["Montevideo Portal · Logro monumental","https://www.montevideo.com.uy/Tiempo-libre/Santullo-Sacar-un-disco-cuando-nadie-pensaba-que-iba-a-ocurrir-es-un-logro-monumental--uc802043"],["Montevideo Portal · Graffiti 2026","https://www.montevideo.com.uy/Tiempo-libre/Premios-Graffiti-2026-estos-son-los-nominados-de-la-musica-uruguaya-uc976446"],["Cooltivarte · 30 años y un día","https://cooltivarte.com/portal/del-perro-azul-a-la-sala-del-museo-30-anos-y-un-dia-de-peyote-asesino-en-escena/"],["Cooltivarte · 30 años del debut","https://cooltivarte.com/portal/peyote-asesino-celebra-los-30-anos-de-su-debut/"],["180 · Bailando samba","https://www.180.com.uy/articulo/71160_peyote-asesino-lanzo-una-nueva-cancion-la-primera-desde-1998"],["Indie Hoy · Serial","https://indiehoy.com/noticias/peyote-asesino-publica-su-primer-disco-en-23-anos-serial/"],["En Perspectiva · Peyote vs. Mota","https://enperspectiva.uy/en-perspectiva-radio/la-conversacion/peyote-asesino-vs-mota-con-rock-encendido-e-intensidad-afilada-se-enfrentan-para-sacudir-la-ciudad/"],["Premios Graffiti 2022","https://www.premiosgraffiti.com.uy/ganadores-2022/"],["Wikipedia · Fernando Santullo","https://es.wikipedia.org/wiki/Fernando_Santullo"],["Wikipedia · Carlos Casacuberta","https://es.wikipedia.org/wiki/Carlos_Casacuberta"],["Wikipedia · Juan Campodónico","https://es.wikipedia.org/wiki/Juan_Campod%C3%B3nico"],["Wikipedia · Kato","https://es.wikipedia.org/wiki/Kato_(banda)"],["Wikipedia · Pilsen Rock","https://es.wikipedia.org/wiki/Pilsen_Rock_(Uruguay)"],["Sólo Rock Uruguay · el debut","https://solorock-uruguay.com/2021/05/31/el-peyote-asesino-el-peyote-asesino-1995/"],["Lacarne · 10 discos fundamentales","https://lacarnemagazine.com/10-discos-fundamentales-rock-uruguayo/"],["Setlist.fm","https://www.setlist.fm/setlists/peyote-asesino-1bd595e4.html"],["Discogs","https://www.discogs.com/artist/1523117"],["MusicBrainz","https://musicbrainz.org/artist/1ff0490d-3601-498e-939f-867db5d7f973"],["Deezer · duraciones y sellos","https://www.deezer.com/artist/1237182"],["YouTube · Bien de Vivo (créditos)","https://www.youtube.com/watch?v=eYwT_qeMhPo"]];
$("#srcs").innerHTML=SRC.map(s=>`<a href="${s[1]}" target="_blank" rel="noopener">${s[0]}</a>`).join("");

/* ======================= RADIO / YOUTUBE API ======================= */
let YTP=null,idx=-1,apiReady=false,pending=null,tick=null;
window.YTP=null;
const radioList=$("#radioList");
{let html="",k=0;RADIO.forEach(r=>{if(r.length===1)html+=`<h5>${r[0]}</h5>`;else{html+=`<button data-r="${k}"><span class="i">${String(k+1).padStart(2,"0")}</span><span>${r[1]}</span><span class="s">${r[2]}</span></button>`;k++}});radioList.innerHTML=html}
function loadAPI(){if(document.getElementById("ytapi"))return;const t=document.createElement("script");t.id="ytapi";t.src="https://www.youtube.com/iframe_api";document.head.appendChild(t)}
window.onYouTubeIframeAPIReady=()=>{YTP=new YT.Player("ytmini",{width:"128",height:"72",videoId:PL[0][0],playerVars:{autoplay:0,controls:0,rel:0,modestbranding:1,playsinline:1},events:{onReady:()=>{apiReady=true;window.YTP=YTP;if(pending!==null){const p=pending;pending=null;play(p)}},onStateChange:onState,onError:()=>{if(idx>=0)next()}}})};
if("requestIdleCallback" in window)requestIdleCallback(loadAPI,{timeout:2500});else setTimeout(loadAPI,1500);
function play(i){idx=(i+PL.length)%PL.length;const t=PL[idx];$("#pT").textContent=t[1];$("#pA").textContent=t[2];$("#casTit").textContent=t[1];$("#casSub").textContent=t[2];$("#player").classList.add("show");
  $$("#radioList button").forEach(b=>b.classList.toggle("on",+b.dataset.r===idx));
  if(!apiReady||!YTP||!YTP.loadVideoById){pending=idx;loadAPI();return}YTP.loadVideoById(t[0]);YTP.playVideo();setPlayIcon(true)}
function next(){play(idx+1)} function prev(){play(idx-1)}
function toggle(){if(idx<0){play(0);return}if(!YTP||!YTP.getPlayerState)return;const st=YTP.getPlayerState();if(st===1){YTP.pauseVideo()}else{YTP.playVideo()}}
function onState(e){const playing=e.data===1;setPlayIcon(playing);$(".radio").classList.toggle("playing",playing);document.body.classList.toggle("is-playing",playing);if(e.data===0)next();clearInterval(tick);if(playing)tick=setInterval(()=>{try{const d=YTP.getDuration(),c=YTP.getCurrentTime();$("#pBar").style.width=(d?c/d*100:0)+"%"}catch(_){}},400)}
function setPlayIcon(p){$("#pPlay").innerHTML=p?'<svg width="18" height="18" viewBox="0 0 10 10"><path d="M2 1h2v8H2zM6 1h2v8H6z" fill="currentColor"/></svg>':'<svg width="18" height="18" viewBox="0 0 10 10"><path d="M2 1l7 4-7 4z" fill="currentColor"/></svg>'}
$("#pPlay").onclick=toggle;$("#pNext").onclick=next;$("#pPrev").onclick=prev;
$("#pClose").onclick=()=>{try{YTP&&YTP.pauseVideo()}catch(_){}$("#player").classList.remove("show")};
$("#pBarWrap").addEventListener("click",e=>{if(!YTP||!YTP.getDuration)return;const r=e.currentTarget.getBoundingClientRect();YTP.seekTo((e.clientX-r.left)/r.width*YTP.getDuration(),true)});
radioList.addEventListener("click",e=>{const b=e.target.closest("button");if(b)play(+b.dataset.r)});
document.addEventListener("click",e=>{const b=e.target.closest(".pl");if(b)play(+b.dataset.r)});
$$("[data-radio]").forEach(b=>b.addEventListener("click",()=>play(0)));
// ecualizador animado: el iframe de YouTube no expone el audio, así que sigue el estado de reproducción
(()=>{const eq=$("#eq");eq.innerHTML="<i></i>".repeat(10);const bars=[...eq.children];let t=0;(function f(){t+=.12;const on=document.body.classList.contains("is-playing");bars.forEach((b,i)=>{b.style.height=on?(5+Math.abs(Math.sin(t*(1+i*.37)+i))*20)+"px":"4px"});requestAnimationFrame(f)})()})();

/* ======================= ÉPOCAS ======================= */
const ERAS=["95","98","21","26"];
const ERA_FONTS={"95":"Rubik Bubbles","98":"Rubik 80s Fade","21":"Rubik Broken Fax","26":"Rubik Wet Paint"};
const ERA_NAME={"95":"1995","98":"1998","21":"2021","26":"2026"};
const VARIANTS=["Rubik Glitch","Rubik Puddles","Rubik Maze","Rubik Microbe","Rubik Spray Paint","Rubik Beastly","Rubik Iso","Rubik Moonrocks","Rubik Vinyl","Rubik Burned","Rubik Dirt","Rubik Marker Hatch","Rubik Doodle Shadow","Rubik Scribble","Rubik Storm","Rubik Mono One","Rubik Bubbles","Rubik 80s Fade","Rubik Broken Fax","Rubik Wet Paint"];
const eraNow=()=>document.documentElement.dataset.era||"26";
const pey=$("#peyote");pey.innerHTML=[..."PEYOTE"].map((c,i)=>`<span data-i="${i}">${c}</span>`).join("");
const letters=[...pey.children];const LC=["var(--e1)","var(--e2)","var(--amar)","var(--turq)","var(--e3)","var(--e1)"];
function settle(){const f=ERA_FONTS[eraNow()];letters.forEach((l,i)=>{l.style.fontFamily=`'${f}','Rubik Mono One',sans-serif`;l.style.setProperty("--c",LC[i])})}
function scramble(dur=1300){if(RM){settle();return}const t0=performance.now();(function f(t){if(t-t0<dur){letters.forEach(l=>{if(Math.random()<.5)l.style.fontFamily=`'${VARIANTS[Math.random()*VARIANTS.length|0]}'`});setTimeout(()=>requestAnimationFrame(f),70)}else settle()})(t0)}
function twist(l){if(RM)return;l.style.fontFamily=`'${VARIANTS[Math.random()*VARIANTS.length|0]}'`;l.style.transform="rotateY(360deg)";setTimeout(()=>{l.style.transform="";settle()},700)}
letters.forEach(l=>l.addEventListener("mouseenter",()=>twist(l)));
pey.addEventListener("click",()=>scramble());
if(!RM)setInterval(()=>{if(scrollY<innerHeight)twist(letters[Math.random()*letters.length|0])},3200);
let glColors=null;
function setEra(e,save=true){document.documentElement.dataset.era=e;$("#eraLab").textContent=ERA_NAME[e];$$("[data-set-era]").forEach(b=>b.classList.toggle("on",b.dataset.setEra===e));if(save)try{localStorage.setItem("peyote-era",e)}catch(_){}scramble(700);glColors&&glColors();const cb=$("#cuboBtn");cb.classList.remove("giro");void cb.offsetWidth;cb.classList.add("giro")}
$("#cuboBtn").addEventListener("click",()=>setEra(ERAS[(ERAS.indexOf(eraNow())+1)%ERAS.length]));
$$("[data-set-era]").forEach(b=>b.addEventListener("click",()=>setEra(b.dataset.setEra)));
$("#eraLab").textContent=ERA_NAME[eraNow()];$$("[data-set-era]").forEach(b=>b.classList.toggle("on",b.dataset.setEra===eraNow()));
document.fonts.ready.then(()=>scramble(1600));settle();

/* ======================= WEBGL: tinta de mimeógrafo ======================= */
(()=>{const c=$("#gl");const gl=c.getContext("webgl",{antialias:false,premultipliedAlpha:false});if(!gl){c.style.background="var(--papel)";return}
  const vs=`attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
  const fs=`precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;uniform float s;uniform float pl;uniform vec3 pa;uniform vec3 c1;uniform vec3 c2;
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
  void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;float tt=t*.035;
    vec2 q=vec2(fbm(p*1.3+tt),fbm(p*1.3-tt+3.1));float f=fbm(p*1.8+q*1.6+vec2(0.,-tt*1.5)+m*.2);
    vec2 mp=m*vec2(r.x/r.y,1.)*.5;float dm=length(p-mp);
    // trama de semitono: puntos que crecen donde hay "tinta"
    float cell=r.y/95.;vec2 g=gl_FragCoord.xy/cell;vec2 gc=fract(g)-.5;
    float ink=smoothstep(.48,.85,f)+.35*smoothstep(.35,0.,dm)*(1.+pl);
    float rad=clamp(ink,0.,1.)*.46;float dot1=1.-smoothstep(rad-.06,rad+.02,length(gc));
    vec3 col=pa;
    col=mix(col,c1,dot1*.55*(1.-s*.6));
    float veta=smoothstep(.66,.72,fbm(p*3.2+q*2.+tt));col=mix(col,c2,veta*.18*(.5+.5*pl));
    col*=1.-.06*smoothstep(.4,1.2,length(uv-.5)*1.4);
    gl_FragColor=vec4(col,1.);}`;
  function sh(t,src){const s=gl.createShader(t);gl.shaderSource(s,src);gl.compileShader(s);return s}
  const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){c.style.background="var(--papel)";return}
  gl.useProgram(pr);const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  const loc=gl.getAttribLocation(pr,"p");gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  const U=k=>gl.getUniformLocation(pr,k);const ur=U("r"),ut=U("t"),um=U("m"),us=U("s"),up=U("pl"),upa=U("pa"),uc1=U("c1"),uc2=U("c2");
  const hex=v=>{v=v.replace("#","");return [0,2,4].map(i=>parseInt(v.substr(i,2),16)/255)};
  const resolve=v=>{const d=document.createElement("i");d.style.color=v;document.body.appendChild(d);const rgb=getComputedStyle(d).color.match(/\d+/g).map(x=>x/255);d.remove();return rgb};
  glColors=()=>{gl.uniform3fv(upa,hex(css("--papel")));gl.uniform3fv(uc1,resolve("var(--e1)"));gl.uniform3fv(uc2,resolve("var(--e2)"))};glColors();
  let mx=0,my=0,tmx=0,tmy=0,pl=0;addEventListener("mousemove",e=>{tmx=e.clientX/innerWidth-.5;tmy=.5-e.clientY/innerHeight});
  const scale=.6;function rs(){c.width=innerWidth*scale;c.height=innerHeight*scale;gl.viewport(0,0,c.width,c.height)}rs();addEventListener("resize",rs);
  const t0=performance.now();(function f(){mx+=(tmx-mx)*.05;my+=(tmy-my)*.05;pl+=((document.body.classList.contains("is-playing")?1:0)-pl)*.03;
    const sc=Math.min(1,scrollY/innerHeight);gl.uniform2f(ur,c.width,c.height);gl.uniform1f(ut,RM?0:(performance.now()-t0)/1000);gl.uniform2f(um,mx,my);gl.uniform1f(us,sc);gl.uniform1f(up,pl);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(!RM)requestAnimationFrame(f)})();
})();

/* ======================= arte flotante (parallax) ======================= */
(()=>{const w=$("#artfloat");const A=[[COV.d95,4,16,-8,.25],[COV.d98,74,8,7,.4],[COV.d21,66,64,-5,.15],[COV.chu,2,72,10,.3],[COV.pop,40,125,-12,.5]];
  w.innerHTML=A.map(a=>`<img src="${a[0].replace("1000x1000","500x500")}" alt="" style="left:${a[1]}%;top:${a[2]}%;transform:rotate(${a[3]}deg)" data-sp="${a[4]}" data-r="${a[3]}">`).join("");
  const imgs=[...w.children];let mx=0,my=0;addEventListener("mousemove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
  (function f(){const y=scrollY;imgs.forEach(im=>{const sp=+im.dataset.sp;im.style.transform=`translate(${mx*40*sp}px,${-y*sp*.35+my*40*sp}px) rotate(${+im.dataset.r+y*.004*sp*10}deg)`});if(!RM)requestAnimationFrame(f)})();
})();

/* ======================= tilt 3D ======================= */
document.addEventListener("mousemove",e=>{const c=e.target.closest(".tilt");$$(".tilt").forEach(t=>{if(t!==c)t.style.transform=""});if(!c)return;const r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.transform=`perspective(900px) rotateY(${(x-.5)*16}deg) rotateX(${(.5-y)*16}deg)`;c.style.setProperty("--gx",x*100+"%");c.style.setProperty("--gy",y*100+"%")});

/* ======================= retrato rotativo ======================= */
(()=>{const st=$("#pstack");const imgs=[COV.d95,COV.d98,COV.d21,COV.chu,COV.pop];const cap=["El Peyote Asesino · 1995 · el personaje es de Jis y Trino","Terraja · 1998 · el auto de las luces nocturnas","Serial · 2021 · textura de mimeógrafo","Bien de Vivo · 2026 · Chupando la cuchara","Hoy · el Peyote en clave pop art"];
  st.innerHTML=imgs.map((s,i)=>`<img src="${s.replace("1000x1000","500x500")}" alt="" class="${i?"":"on"}" loading="lazy">`).join("");let i=0;
  setInterval(()=>{const a=st.children;a[i].classList.remove("on");i=(i+1)%a.length;a[i].classList.add("on");$("#pcap").textContent=cap[i]},4200)})();

/* ======================= papel picado ======================= */
(()=>{const w=$("#picado");const n=Math.ceil(innerWidth/72)+2;const cols=["var(--e1)","var(--amar)","var(--turq)","var(--e2)","var(--mag)","var(--arcilla)"];
  // agujeros: botón de peyote, calavera, estrella, cactus
  const holes=["M18 19c5 0 6 2 8 3 3 2 3 5 2 8-1 4-5 6-10 6s-9-2-10-6c-1-3-1-6 2-8 2-1 3-3 8-3zM12 26h5v3h-5zM19 26h5v3h-5z","M18 20a9 9 0 0 1 9 9v4h-3v3h-12v-3h-3v-4a9 9 0 0 1 9-9zM14 28a2 2 0 1 0 0 .1zM22 28a2 2 0 1 0 0 .1z","M18 18l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z","M16 40V24a2 2 0 0 1 4 0v16zM12 32v-5a2 2 0 0 1 4 0v5zM20 30v-6a2 2 0 0 1 4 0v6z"];
  let html="";for(let i=0;i<n;i++){const c=cols[i%cols.length];html+=`<svg width="68" height="64" viewBox="0 0 36 52" style="animation-delay:${-(i%7)*.5}s"><path d="M0 0H36V44l-3 4-3-4-3 4-3-4-3 4-3-4-3 4-3-4-3 4-3-4-3 4-3-4z" style="fill:${c}" stroke="#1a1424" stroke-width="1"/><path d="${holes[i%holes.length]}" fill="#f4f6f0" stroke="#1a1424" stroke-width=".8"/><circle cx="6" cy="10" r="1.6" fill="#f4f6f0"/><circle cx="30" cy="10" r="1.6" fill="#f4f6f0"/></svg>`}
  w.innerHTML=`<div style="position:absolute;top:0;left:0;right:0;height:2px;background:#1a1424"></div>`+html})();

/* ======================= pegotines arrastrables ======================= */
$$(".sticker").forEach(st=>{let sx,sy,ox=0,oy=0,drag=false;
  st.addEventListener("pointerdown",e=>{drag=true;sx=e.clientX-ox;sy=e.clientY-oy;st.setPointerCapture(e.pointerId);st.style.zIndex=5;st.style.boxShadow="7px 7px 0 var(--tinta)"});
  st.addEventListener("pointermove",e=>{if(!drag)return;ox=e.clientX-sx;oy=e.clientY-sy;st.style.translate=`${ox}px ${oy}px`});
  const up=()=>{drag=false;st.style.boxShadow=""};st.addEventListener("pointerup",up);st.addEventListener("pointercancel",up)});

/* ======================= horizonte: de los peyotes al Palacio Salvo ======================= */
(()=>{const f=$("#horizonte");const far=[],near=[];
  // fondo: cerros suaves
  let d="M0 120 ";for(let x=0;x<=1440;x+=40)d+=`L${x} ${82+Math.sin(x*.012)*10+Math.sin(x*.031)*6} `;mk("path",{d:d+"L1440 120Z",fill:"var(--papel2)",opacity:.7},f);
  const ink="#dfe6da";const LN={stroke:"#1a1424","stroke-width":1.6,"stroke-linejoin":"round"};let p="M0 120 L0 108 ";let x=0;
  while(x<620){const w=26+Math.random()*30,h=12+Math.random()*16;p+=`Q${x+w*.1} ${108-h} ${x+w/2} ${108-h-2} Q${x+w*.9} ${108-h} ${x+w} 108 `;
    if(Math.random()<.35){const sx=x+w/2-4,sh=40+Math.random()*30;p+=`L${x+w} 108 `;mk("path",{d:`M${sx} 110V${110-sh}a4 4 0 0 1 8 0V110zM${sx} ${100-sh*.4}h-7a3 3 0 0 1-3-3v-10a3 3 0 0 1 6 0v7h4zM${sx+8} ${104-sh*.6}h6v-8a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3h-9z`,fill:ink,...LN},f)}
    x+=w}
  p+="L620 108 ";
  // Montevideo: edificios y el Palacio Salvo
  x=620;while(x<1440){if(x>930&&x<960){p+=`L${x} 108 L${x} 60 L${x+8} 60 L${x+8} 38 L${x+14} 38 L${x+14} 22 L${x+18} 8 L${x+22} 22 L${x+22} 38 L${x+28} 38 L${x+28} 60 L${x+36} 60 L${x+36} 108 `;x+=36;continue}
    const w=18+Math.random()*34,h=14+Math.random()*(x>1200?20:40);p+=`L${x} ${108-h} L${x+w} ${108-h} `;x+=w}
  p+="L1440 108 L1440 122 L0 122Z";mk("path",{d:p,fill:ink,...LN},f);
  // el Cerro, al final
  mk("path",{d:"M1300 122 Q1370 70 1440 92 L1440 122Z",fill:ink,...LN},f);
})();

/* ======================= cable pelado ======================= */
(()=>{const a=$("#cableA"),b=$("#cableB"),ch=$("#chispas");if(!a)return;let t=0,amp=4;addEventListener("mousemove",e=>{amp=3+Math.min(10,(1-e.clientX/innerWidth)*12)});
  (function draw(){t+=.025;const play=document.body.classList.contains("is-playing");const A=amp*(play?1.7:1);let d1="",d2="";for(let y=0;y<=1000;y+=10){const x=17+Math.sin(y*.012+t)*A*Math.sin(y*.003+t*.4);d1+=(y?"L":"M")+x.toFixed(1)+" "+y;if(y>420&&y<520){const j=(Math.random()-.5)*(play?5:2.5);d2+=(y>430?"L":"M")+(x+j).toFixed(1)+" "+y}}a.setAttribute("d",d1);b.setAttribute("d",d2);
    if(Math.random()<(play?.3:.06)){const y=430+Math.random()*90;const xx=17+Math.sin(y*.012+t)*A*Math.sin(y*.003+t*.4);const s=mk("path",{d:`M${xx} ${y}l${6+Math.random()*8} ${-4-Math.random()*8}l-4 2l${8+Math.random()*6} ${-6}`,stroke:Math.random()<.5?"var(--amar)":"var(--e1)","stroke-width":1.6,fill:"none"},ch);setTimeout(()=>s.remove(),160)}
    if(!RM)requestAnimationFrame(draw)})();
})();

/* ======================= confeti (papel picado suelto) ======================= */
(()=>{const c=$("#confeti"),x=c.getContext("2d");let W,H,F=[];const n=innerWidth<700?18:42;let mx=-999,my=-999;const D=devicePixelRatio||1;
  function rs(){W=c.width=innerWidth*D;H=c.height=innerHeight*D}rs();addEventListener("resize",rs);
  addEventListener("mousemove",e=>{mx=e.clientX*D;my=e.clientY*D});
  const pal=()=>["--e1","--amar","--turq","--e2","--mag"].map(v=>{const s=css(v);return s.startsWith("var")?css(s.slice(4,-1)):s});let P=pal();new MutationObserver(()=>P=pal()).observe(document.documentElement,{attributes:true,attributeFilter:["data-era"]});
  for(let i=0;i<n;i++)F.push({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.0004,vy:.0004+Math.random()*.0006,a:Math.random()*6.28,va:(Math.random()-.5)*.04,s:4+Math.random()*7,c:i});
  function loop(){x.clearRect(0,0,W,H);F.forEach(f=>{const dx=f.x*W-mx,dy=f.y*H-my,d=Math.hypot(dx,dy);if(d<150*D){f.vx+=dx/d*.00012;f.vy+=dy/d*.00012}
    f.x+=f.vx;f.y+=f.vy;f.vx*=.985;f.vy=f.vy*.985+.00001;f.a+=f.va;if(f.y>1.05){f.y=-.05;f.x=Math.random()}if(f.x<-.05)f.x=1.05;if(f.x>1.05)f.x=-.05;
    x.save();x.translate(f.x*W,f.y*H);x.rotate(f.a);x.scale(1,Math.cos(f.a*1.7));x.fillStyle=P[f.c%P.length];x.globalAlpha=.75;const s=f.s*D;x.fillRect(-s/2,-s/2,s,s*1.3);x.globalAlpha=1;x.strokeStyle="#1a1424";x.lineWidth=D;x.strokeRect(-s/2,-s/2,s,s*1.3);x.restore()});requestAnimationFrame(loop)}
  if(!RM)loop();
})();

/* ======================= cursor peyote ======================= */
(()=>{if(!matchMedia("(hover:hover) and (pointer:fine)").matches)return;document.body.classList.add("cur");const c=$("#cursor");let x=0,y=0,tx=0,ty=0;
  addEventListener("mousemove",e=>{tx=e.clientX;ty=e.clientY;c.classList.toggle("big",!!e.target.closest("a,button,.slide,.chip,.tilt,.node,.sticker,#peyote"))});
  (function f(){x+=(tx-x)*.25;y+=(ty-y)*.25;c.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})();
})();

/* ======================= gráficos anchos: se deslizan en el celular ======================= */
[["net",880],["map",500],["chDur",720],["chAnios",640],["chAvg",470],["chTot",470],["chYt",470],["chScat",470],["chKey",470]].forEach(([id,mw])=>{const sv=$("#"+id);const w=document.createElement("div");w.className="desliza";w.style.setProperty("--mw",mw+"px");sv.parentNode.insertBefore(w,sv);w.appendChild(sv);const h=document.createElement("p");h.className="desliza-hint";h.textContent="← deslizá para ver todo →";w.after(h)});

/* ======================= menú celular ======================= */
(()=>{const h=$("#hamb"),nav=$("#nav");const set=o=>{h.setAttribute("aria-expanded",o);nav.classList.toggle("abierto",o);h.setAttribute("aria-label",o?"Cerrar menú":"Abrir menú")};
  h.addEventListener("click",()=>set(h.getAttribute("aria-expanded")!=="true"));nav.addEventListener("click",e=>{if(e.target.closest("a"))set(false)});
  addEventListener("keydown",e=>{if(e.key==="Escape")set(false)})})();

/* ======================= scroll: reveal, contadores, nav ======================= */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.06});
$$(".reveal,.ev").forEach(r=>io.observe(r));
setTimeout(()=>$$("[data-count]").forEach(el=>{const to=+el.dataset.count;const t0=performance.now();(function st(t){const k=Math.min(1,(t-t0)/1800);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(st)})(t0)}),400);
const prog=$("#prog"),links=$$("#nav a");
addEventListener("scroll",()=>{const h=document.documentElement;prog.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";let cur="";$$("main section").forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s.id});links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+cur))},{passive:true});

/* marquee */
{const words=["Mal de la cabeza","Cable pelado","Criminal","Guacho","Denso","L Mental","Todos muertos","Chupando la cuchara","Vos no me llamaste","La tumba de los crá","Tierra derretida","Perkins","Flor de gil","Es lo que hay","Bailando samba","Demente"];const h=words.map(w=>`<span>${w}</span><i>✦</i>`).join("");$("#mq").innerHTML=h+h}
