(() => {
  const q = (s, r = document) => r.querySelector(s);
  const esc = (v) => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const iso = (cx, cy, x, y, z = 0) => [cx + (x-y)*.72, cy + (x+y)*.34-z];
  const pts = a => a.map(([x,y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const box = (cx,cy,x,y,z,w,d,h,cl='') => {
    const a=iso(cx,cy,x,y,z+h),b=iso(cx,cy,x+w,y,z+h),c=iso(cx,cy,x+w,y+d,z+h),e=iso(cx,cy,x,y+d,z+h);
    const a0=iso(cx,cy,x,y,z),b0=iso(cx,cy,x+w,y,z),c0=iso(cx,cy,x+w,y+d,z),e0=iso(cx,cy,x,y+d,z);
    return `<g class="rf-box ${cl}"><polygon class="rf-left" points="${pts([e,c,c0,e0])}"/><polygon class="rf-right" points="${pts([b,c,c0,b0])}"/><polygon class="rf-top" points="${pts([a,b,c,e])}"/></g>`;
  };
  const screw=(x,y,r=3)=>`<g class="rf-screw"><circle cx="${x}" cy="${y}" r="${r}"/><path d="M${x-r*.55} ${y}h${r*1.1}"/></g>`;

  function infectionFigure(){
    const stage=q('.lineage-canvas'); if(!stage||q('.rimun-infection-instrument',stage))return;
    const feet=[[-224,-82],[188,-82],[-224,74],[188,74]].map(([x,y])=>box(380,236,x,y,-15,36,28,14,'rf-foot')).join('');
    const ties=Array.from({length:8},(_,i)=>box(380,236,-190+i*51,-52,16,14,104,5,'rf-tie')).join('');
    const ruler=Array.from({length:21},(_,i)=>{const [x,y]=iso(380,236,-204+i*20,99,25);return `<path d="M${x} ${y}l${i%5===0?-7:-4} ${i%5===0?4:2}"/>`}).join('');
    const terminals=[-88,-48,-8,32,72].map((x,i)=>{const [a,b]=iso(380,236,x,-46,91);return `<g class="rf-terminal"><circle cx="${a}" cy="${b}" r="4"/><circle cx="${a}" cy="${b}" r="1.4"/><text x="${a}" y="${b-8}">P${i+1}</text></g>`}).join('');
    const dial=Array.from({length:15},(_,i)=>{const a=(-140+i*10)*Math.PI/180;return `<path d="M${(629+Math.cos(a)*27).toFixed(1)} ${(125+Math.sin(a)*27).toFixed(1)}L${(629+Math.cos(a)*(i%2?22:20)).toFixed(1)} ${(125+Math.sin(a)*(i%2?22:20)).toFixed(1)}"/>`}).join('');
    stage.insertAdjacentHTML('beforeend',`<figure class="rimun-figure rimun-infection-instrument" aria-label="Rimun host defect inspection rig"><figcaption><span>FIG 01 / HOST DEFECT INSPECTION RIG</span><b><i></i> REPAIR GATE ARMED</b></figcaption><svg viewBox="0 -128 760 568" role="img" aria-labelledby="rigTitle rigDesc"><title id="rigTitle">Host defect inspection rig</title><desc id="rigDesc">A host cassette inspected by an isolated Rimun probe and two independent verifiers.</desc>
      <ellipse class="rf-shadow" cx="380" cy="353" rx="300" ry="48"/>${feet}${box(380,236,-260,-120,0,520,240,18,'rf-base')}${box(380,236,-246,-107,18,492,214,7,'rf-deck')}<g class="rf-ruler">${ruler}</g>${screw(215,207,4)}${screw(545,363,4)}${screw(552,203,4)}${screw(208,361,4)}${ties}
      ${box(380,236,-206,-47,25,412,12,13,'rf-rail')}${box(380,236,-206,39,25,412,12,13,'rf-rail')}${box(380,236,-76,-64,38,152,128,12,'rf-carriage')}${box(380,236,-58,-50,50,116,100,42,'rf-host')}${box(380,236,-48,-40,92,96,80,11,'rf-host-lid')}
      <g class="rf-host-seams"><path d="M328 211l83 39 64-30"/><path d="M350 201l82 39"/><path d="M450 235l-65 31"/></g>${terminals}<g class="rf-core"><path d="M380 227l24 11-24 11-24-11z"/><path d="M380 232l13 6-13 6-13-6z"/></g>
      ${box(380,236,-225,-91,25,64,62,65,'rf-verifier')}${box(380,236,161,29,25,64,62,65,'rf-verifier')}<g class="rf-verifier-face"><rect x="174" y="226" width="58" height="29"/><path d="M184 244l9-8 8 5 10-12 10 7"/><circle cx="184" cy="265" r="3"/><circle cx="198" cy="265" r="3"/><text x="176" y="218">REPLAY / A</text></g><g class="rf-verifier-face"><rect x="529" y="278" width="58" height="29"/><path d="M539 296l9-8 8 5 10-12 10 7"/><circle cx="539" cy="317" r="3"/><circle cx="553" cy="317" r="3"/><text x="530" y="269">REPLAY / B</text></g>
      ${box(380,236,-211,-91,90,15,15,135,'rf-post')}${box(380,236,196,-91,90,15,15,135,'rf-post')}${box(380,236,-211,-91,225,422,15,21,'rf-gantry')}${box(380,236,-30,-83,196,60,36,32,'rf-probe-head')}<g class="rf-probe"><path d="M380 91v113"/><rect x="373" y="114" width="14" height="54" rx="2"/><path d="M376 168h8l-2 42h-4z"/><path d="M368 126h24M368 137h24M368 148h24"/><circle cx="380" cy="211" r="5"/></g>
      <g class="rf-cables"><path d="M203 252C248 166 310 173 350 212"/><path d="M557 303C526 187 468 175 411 220"/><path d="M230 273C265 309 291 319 325 290"/></g>${box(380,236,118,-93,30,54,76,26,'rf-repair-slot')}<g class="rf-cartridge"><path d="M530 246l37 17-25 12-37-18z"/><path d="M505 257v12l37 18v-12"/><text x="522" y="264">PATCH</text></g>
      <g class="rf-dial"><circle cx="629" cy="125" r="34"/><circle cx="629" cy="125" r="28"/>${dial}<path class="rf-needle" d="M629 125l18-15"/><circle cx="629" cy="125" r="4"/><text x="609" y="169">FAULT LOAD</text></g><g class="rf-scan"><path d="M315 207l65-31 66 31-66 32z"/><path d="M315 207v58l65 31 66-31v-58"/></g>
      <g class="rf-callout"><path d="M380 78h-71l-34-25H119"/><circle cx="380" cy="78" r="3"/><text x="119" y="44">ISOLATED PROBE</text><text x="119" y="57">read only until approved</text><path d="M545 256h65l25-21h70"/><circle cx="545" cy="256" r="3"/><text x="638" y="226">BOUNDED REPAIR</text><text x="638" y="239">content-addressed</text></g></svg><div class="rf-readout"><span><b>HOST</b> SANDBOXED</span><span><b>PROBE</b> 05 CHANNELS</span><span><b>QUORUM</b> 2× REPLAY</span><em>OBSERVE → REPRODUCE → REPAIR → VERIFY</em></div></figure>`);
  }

  function installFigure(){
    const plate=q('.machine-plate');if(!plate||q('.rimun-coupler',plate))return;const name=q('#previewName',plate)?.textContent||'rimun-local';
    const pins=Array.from({length:9},(_,i)=>`<rect x="${190+i*7}" y="127" width="3" height="13"/>`).join('');
    const bolts=[[88,66],[88,176],[334,66],[334,176]].map(([x,y])=>screw(x,y,4)).join('');
    plate.innerHTML=`<figure class="rimun-figure rimun-coupler"><figcaption><span>FIG 02 / SCOPED HOST COUPLER</span><b><i></i> AWAITING SIGNATURE</b></figcaption><svg viewBox="0 0 420 240" role="img" aria-labelledby="couplerTitle couplerDesc"><title id="couplerTitle">Scoped host coupling fixture</title><desc id="couplerDesc">A constrained dock connecting a Rimun parasite cartridge to an authorized host.</desc><ellipse class="rf-shadow" cx="210" cy="202" rx="172" ry="25"/>${box(210,115,-170,-69,0,340,138,13,'rf-base')}${box(210,115,-158,-57,13,316,114,7,'rf-deck')}${bolts}${box(210,115,-145,-42,20,290,12,10,'rf-rail')}${box(210,115,-145,31,20,290,12,10,'rf-rail')}
      ${box(210,115,-133,-37,30,103,74,54,'rf-host')}${box(210,115,-123,-27,84,83,54,8,'rf-host-lid')}<g class="rf-host-mark"><path d="M92 106l55 26 39-18"/><text x="99" y="98">HOST / PORT 01</text><circle cx="116" cy="148" r="4"/><circle cx="132" cy="155" r="4"/></g>${box(210,115,30,-38,30,90,76,45,'rf-cartridge-body')}${box(210,115,40,-28,75,70,56,8,'rf-cartridge-lid')}<g class="rf-parasite-mark"><path d="M267 106l48 22-34 16-48-23z"/><path d="M274 115l24 11-17 8-24-11z"/><text x="258" y="96">RIMUN</text></g>
      <g class="rf-interface"><rect x="183" y="109" width="63" height="43" rx="2"/>${pins}<path d="M194 145h43"/><circle cx="215" cy="119" r="6"/></g><g class="rf-clamps"><path d="M154 75h22v22h-8V84h-14zM278 75h-22v22h8V84h14z"/><path d="M154 174h22v-22h-8v13h-14zM278 174h-22v-22h8v13h14z"/></g><g class="rf-lock-pins"><path d="M174 66v38M258 66v38"/><rect x="168" y="60" width="12" height="13" rx="2"/><rect x="252" y="60" width="12" height="13" rx="2"/></g>
      <g class="rf-scope-dial"><circle cx="357" cy="91" r="22"/><circle cx="357" cy="91" r="17"/><path d="M357 91l10-9"/><circle cx="357" cy="91" r="3"/><text x="332" y="122">SCOPE</text></g><g class="rf-cables"><path d="M132 158C166 196 240 197 290 160"/><path d="M310 142C343 147 356 135 357 114"/></g><g class="rf-callout"><path d="M214 87V46h-55"/><circle cx="214" cy="87" r="3"/><text x="92" y="42">PERMISSION GATE</text><path d="M301 146h54l18 15h32"/><circle cx="301" cy="146" r="3"/><text x="337" y="178">CLEAN EXIT</text></g></svg><div class="rf-install-id"><span>PARASITE ID</span><strong id="previewName">${esc(name)}</strong><small>scoped access · reversible install</small></div></figure>`;
  }
  const mount=()=>{infectionFigure();installFigure()};
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',mount,{once:true}):mount();
})();
