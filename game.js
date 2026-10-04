(() => {
  const ASSETS = {
    backgrounds: {
      forest: 'assets/backgrounds/forest.png',
      castle: 'assets/backgrounds/castle.png'
    },
    characters: {
      lucian: 'assets/characters/lucian.png',
      vesper: 'assets/characters/vesper_wolf.png',
      mira: 'assets/characters/mira_rabbit.png',
      finn: 'assets/characters/finn_fox.png',
      bramble: 'assets/characters/bramble_hedgehog.png',
      pip: 'assets/characters/pip_goblin.png'
    }
  };

  const PEOPLE = {
    lucian:  { name: 'Lucian',  role: 'You — Cyber Guardian in training' },
    vesper:  { name: 'Vesper',  role: 'Access & identity guardian' },
    mira:    { name: 'Mira',    role: 'Security analyst' },
    finn:    { name: 'Finn',    role: 'Network scout' },
    bramble: { name: 'Bramble', role: 'Incident investigator' },
    pip:     { name: 'Pip',     role: 'Suspicious outsider' }
  };

  const LEVELS = [
    {
      title:'Whispers in the Enchanted Forest', bg:'forest',
      heading:'Who can Lucian trust?',
      intro:'Meet friendly strangers and coworkers while learning what personal information should stay private.',
      rule:'Pause → inspect → decide.',
      team:['lucian','vesper','mira','finn','bramble'],
      cast:[
        {id:'lucian',x:35,w:28,cls:'hero'}, {id:'finn',x:62,w:23,cls:'friend'}, {id:'mira',x:76,w:19,cls:'friend'}, {id:'pip',x:88,w:18,cls:'suspicious'}
      ],
      steps:['Explore the glowing network clues.','Decide whether Pip is trustworthy.','Protect personal data.'],
      hotspots:[
        {x:21,y:28,icon:'✨',text:'A friendly face does not automatically mean a safe request.'},
        {x:54,y:18,icon:'🔗',text:'Network paths can connect people and services — treat unexpected requests carefully.'},
        {x:78,y:36,icon:'🪪',text:'Your name, school, address, credentials and location can all be personal data.'}
      ],
      scenario:{type:'question',title:'Pip asks for Lucian’s home address to “send a prize.”',body:'You just met Pip. He seems friendly, but this request asks for personal data.'},
      choices:[
        {icon:'🛡️',label:'Do not share',sub:'Keep the address private',ok:true},
        {icon:'👥',label:'Ask a coworker',sub:'Check with Mira or Vesper',ok:true,alt:true},
        {icon:'📍',label:'Send the address',sub:'Share personal location details',ok:false}
      ]
    },
    {
      title:'Messages Matter', bg:'forest',
      heading:'Can Lucian spot phishing?',
      intro:'Incoming letters glow across the forest network. Inspect the message before acting.',
      rule:'Urgency + unusual sender + data request = investigate.',
      team:['lucian','mira','bramble','vesper'],
      cast:[{id:'lucian',x:31,w:27,cls:'hero'},{id:'mira',x:72,w:20,cls:'friend'},{id:'bramble',x:82,w:19,cls:'friend'}],
      steps:['Inspect the sender.','Find phishing clues.','Report the suspicious message.'],
      mail:true,
      scenario:{type:'email',from:'HR Team <hr@company-support.com>',subject:'Action Required: Update Your Account',body:'Your account will be closed today. Reply immediately with your username, password and phone number.',clues:['Unexpected domain','Urgency','Requests credentials']},
      choices:[
        {icon:'📨',label:'Forward to CISO',sub:'Let the security team check',ok:true},
        {icon:'⚠️',label:'Report suspicious',sub:'Flag the message',ok:true,alt:true},
        {icon:'🔑',label:'Reply with password',sub:'Give the sender what they asked for',ok:false,severity:'incident'}
      ]
    },
    {
      title:'Keys to the Castle', bg:'castle',
      heading:'Secure the castle entrance',
      intro:'Vesper protects the castle’s access systems. Choose an authentication method that is strong but practical.',
      rule:'Use strong authentication and least privilege.',
      team:['lucian','vesper','mira'],
      cast:[{id:'lucian',x:27,w:26,cls:'hero'},{id:'vesper',x:70,w:25,cls:'friend'}],
      steps:['Choose strong sign-in.','Avoid shared credentials.','Use only the access you need.'],
      hotspots:[{x:63,y:27,icon:'🔐',text:'Critical systems should use stronger authentication than ordinary low-risk services.'}],
      scenario:{type:'question',title:'Which sign-in setup is best for a critical castle console?',body:'The console controls important services.'},
      choices:[
        {icon:'🔑',label:'Long passphrase + MFA',sub:'Strong and accountable',ok:true},
        {icon:'👥',label:'Shared team password',sub:'Everyone uses one secret',ok:false},
        {icon:'🗝️',label:'Master access for everyone',sub:'Maximum access “just in case”',ok:false}
      ]
    },
    {
      title:'Trusted Vendors', bg:'castle',
      heading:'Choose a safer supplier',
      intro:'Mira reviews a new provider before the kingdom shares data or access.',
      rule:'Third-party risk is still your risk.',
      team:['lucian','mira','finn'],
      cast:[{id:'lucian',x:30,w:25,cls:'hero'},{id:'mira',x:72,w:20,cls:'friend'},{id:'finn',x:82,w:18,cls:'friend'}],
      steps:['Check security evidence.','Limit supplier access.','Record the decision.'],
      scenario:{type:'question',title:'A vendor asks for permanent admin access.',body:'They say it will make support faster. Their contract does not explain why this level of access is required.'},
      choices:[
        {icon:'📋',label:'Ask for evidence',sub:'Review controls and scope',ok:true},
        {icon:'🔒',label:'Grant minimum access',sub:'Only what is needed',ok:true,alt:true},
        {icon:'⚡',label:'Give full admin',sub:'Make support easier',ok:false}
      ]
    },
    {
      title:'Network Patrol', bg:'forest',
      heading:'Investigate the glowing network',
      intro:'Finn maps network paths through the forest. One node starts sending unusual traffic.',
      rule:'Anomaly → investigate → contain deliberately.',
      team:['lucian','finn','bramble'],
      cast:[{id:'lucian',x:27,w:25,cls:'hero'},{id:'finn',x:72,w:21,cls:'friend'},{id:'bramble',x:84,w:18,cls:'friend'}],
      steps:['Trace the network route.','Identify the odd node.','Choose a safe response.'],
      network:true,
      hotspots:[
        {x:35,y:29,icon:'●',text:'This node looks normal.'},
        {x:51,y:45,icon:'●',text:'Normal traffic pattern.'},
        {x:69,y:32,icon:'⚠️',text:'This node is sending unusual traffic at an unexpected time.'}
      ],
      scenario:{type:'question',title:'A workstation begins sending unusual traffic at midnight.',body:'The behavior is not expected for this system.'},
      choices:[
        {icon:'🧯',label:'Investigate & isolate',sub:'Contain deliberately',ok:true},
        {icon:'🙈',label:'Ignore it',sub:'Wait for morning',ok:false,severity:'incident'},
        {icon:'🔌',label:'Disconnect everything',sub:'Cause a broad outage',ok:false}
      ]
    },
    {
      title:'The Data Fortress', bg:'castle',
      heading:'Respond to a serious incident',
      intro:'Bramble confirms a compromised account is touching critical services.',
      rule:'Contain fast, preserve evidence, notify the right people.',
      team:['lucian','bramble','vesper','mira'],
      cast:[{id:'lucian',x:25,w:25,cls:'hero'},{id:'bramble',x:69,w:18,cls:'friend'},{id:'vesper',x:82,w:20,cls:'friend'}],
      steps:['Confirm the incident.','Contain affected access.','Notify response leaders.'],
      severity:'major',
      scenario:{type:'question',title:'A privileged account is compromised.',body:'The account can reach systems supporting important kingdom services.'},
      choices:[
        {icon:'🛑',label:'Contain & notify',sub:'Disable affected access and escalate',ok:true},
        {icon:'🧹',label:'Delete the logs',sub:'Remove the evidence',ok:false,severity:'major'},
        {icon:'🤫',label:'Keep it secret',sub:'Avoid telling responders',ok:false,severity:'major'}
      ]
    },
    {
      title:'Critical Services', bg:'castle',
      heading:'Keep essential services running',
      intro:'The incident affects multiple systems. Lucian must choose what gets restored first.',
      rule:'Prioritize critical services and safe recovery.',
      team:['lucian','vesper','mira'],
      cast:[{id:'lucian',x:29,w:25,cls:'hero'},{id:'vesper',x:72,w:22,cls:'friend'}],
      steps:['Assess impact.','Prioritize critical service.','Communicate status.'],
      scenario:{type:'question',title:'Several services are offline. Which should be restored first?',body:'One supports emergency communications; another is the staff wallpaper gallery.'},
      choices:[
        {icon:'🚨',label:'Emergency communications',sub:'Critical service',ok:true},
        {icon:'🖼️',label:'Wallpaper gallery',sub:'Low business impact',ok:false},
        {icon:'📢',label:'Communicate priorities',sub:'Keep teams informed',ok:true,alt:true}
      ]
    },
    {
      title:'Clock Court of Resilience', bg:'castle',
      heading:'Test resilience before trouble',
      intro:'The team runs a DORA-inspired resilience exercise to practice before a real disruption.',
      rule:'Practice, measure, learn, improve.',
      team:['lucian','bramble','mira','finn'],
      cast:[{id:'lucian',x:26,w:25,cls:'hero'},{id:'bramble',x:72,w:19,cls:'friend'},{id:'mira',x:84,w:17,cls:'friend'}],
      steps:['Run the exercise.','Capture lessons.','Improve the plan.'],
      scenario:{type:'question',title:'What makes a resilience test useful?',body:'The team wants the exercise to improve real-world readiness.'},
      choices:[
        {icon:'🧪',label:'Test realistic scenarios',sub:'Practice response under pressure',ok:true},
        {icon:'📝',label:'Record lessons learned',sub:'Turn findings into improvements',ok:true,alt:true},
        {icon:'🎭',label:'Only test what always works',sub:'Avoid difficult scenarios',ok:false}
      ]
    },
    {
      title:'Crystal Recovery', bg:'forest',
      heading:'Restore trusted data',
      intro:'After containment, Lucian and Bramble prepare a clean recovery.',
      rule:'Recover from verified backups, then learn from the incident.',
      team:['lucian','bramble','mira'],
      cast:[{id:'lucian',x:29,w:25,cls:'hero'},{id:'bramble',x:73,w:19,cls:'friend'}],
      steps:['Select clean backup.','Verify integrity.','Restore and monitor.'],
      mail:true,
      scenario:{type:'question',title:'Which backup should be restored?',body:'A ransomware incident has been contained. The newest backup has not been checked yet.'},
      choices:[
        {icon:'☁️',label:'Verified clean backup',sub:'Tested and trusted',ok:true},
        {icon:'⚡',label:'Newest unverified backup',sub:'Fastest, but unknown state',ok:false},
        {icon:'✅',label:'Verify before restore',sub:'Check integrity first',ok:true,alt:true}
      ]
    },
    {
      title:'Cyber Council Finale', bg:'castle',
      heading:'Become a Cyber Guardian',
      intro:'The team gathers at the castle. One final decision summarizes Lucian’s journey.',
      rule:'Protection • Detection • Response • Recovery • Resilience',
      team:['lucian','vesper','mira','finn','bramble'],
      cast:[{id:'lucian',x:35,w:27,cls:'hero'},{id:'vesper',x:11,w:20,cls:'friend'},{id:'finn',x:63,w:19,cls:'friend'},{id:'mira',x:76,w:17,cls:'friend'},{id:'bramble',x:86,w:16,cls:'friend'}],
      steps:['Review the journey.','Choose the Cyber Guardian mindset.','Earn the badge.'],
      scenario:{type:'question',title:'What is the Cyber Guardian mindset?',body:'Choose the principle that best connects every mission.'},
      choices:[
        {icon:'🧠',label:'Pause, verify, protect',sub:'Then respond and recover',ok:true,final:true},
        {icon:'⚡',label:'Act first, check later',sub:'Speed over safety',ok:false},
        {icon:'🤐',label:'Hide incidents',sub:'Never involve the team',ok:false}
      ]
    }
  ];

  const $ = s => document.querySelector(s);
  const world = $('#world'), stage = $('#stage'), characterLayer = $('#characterLayer'), interactionLayer = $('#interactionLayer'), cardArea = $('#cardArea');
  const choiceBar = $('#choiceBar'), teamList = $('#teamList'), missionSteps = $('#missionSteps'), toast = $('#toast'), mailLayer = $('#mailLayer'), ambient = $('#ambient'), networkSvg = $('#networkSvg');

  const state = { level:0, lives:3, score:0, medals:0, mistakes:0, clues:0, settings:{reduced:false,noShake:false,emailMotion:true}, locked:false };

  function loadSettings(){ try{ Object.assign(state.settings, JSON.parse(localStorage.getItem('cg-lucian-settings')||'{}')); }catch{} syncSettings(); }
  function saveSettings(){ localStorage.setItem('cg-lucian-settings', JSON.stringify(state.settings)); }
  function syncSettings(){ $('#reducedMotion').checked=state.settings.reduced; $('#noShake').checked=state.settings.noShake; $('#emailMotion').checked=state.settings.emailMotion; }

  function render(){
    state.locked=false; state.mistakes=0; state.clues=0;
    const L=LEVELS[state.level];
    world.style.backgroundImage=`url('${ASSETS.backgrounds[L.bg]}')`;
    $('#chapterTitle').textContent=`Chapter ${state.level+1} — ${L.title}`;
    $('#progressText').textContent=`${state.level+1}/${LEVELS.length}`;
    $('#lives').textContent=state.lives; $('#score').textContent=state.score;
    $('#missionHeading').textContent=L.heading; $('#missionIntro').textContent=L.intro; $('#lucianRule').textContent=L.rule;
    $('#chapterProgress').style.width=`${(state.level/(LEVELS.length-1))*100}%`;
    renderSteps(L); renderTeam(L); renderCast(L); renderHotspots(L); renderScenario(L); renderChoices(L); renderNetwork(L);
    if(L.mail) startMailBurst();
    if(L.severity==='major') setTimeout(()=>incident('major'),520);
  }

  function renderSteps(L){ missionSteps.innerHTML=L.steps.map((s,i)=>`<div class="mission-step" data-step="${i}"><div class="step-icon">${i+1}</div><div>${s}</div></div>`).join(''); }
  function markStep(i){ const el=missionSteps.querySelector(`[data-step="${i}"]`); if(el) el.classList.add('done'); }

  function renderTeam(L){ teamList.innerHTML=L.team.filter(id=>id!=='pip').map(id=>`<div class="team-member"><img src="${ASSETS.characters[id]}" alt="${PEOPLE[id].name}"><div><strong>${PEOPLE[id].name}</strong><span>${PEOPLE[id].role}</span></div></div>`).join(''); }

  function renderCast(L){
    characterLayer.innerHTML='';
    const tags=[];
    L.cast.forEach((c,idx)=>{
      const img=document.createElement('img'); img.src=ASSETS.characters[c.id]; img.alt=PEOPLE[c.id].name; img.className=`character ${c.cls||''}${idx===0?' focus':''}`; img.style.left=`${c.x}%`; img.style.width=`${c.w}%`; characterLayer.appendChild(img);
      const tag=document.createElement('div'); tag.className='name-tag'; tag.textContent=PEOPLE[c.id].name; tag.style.left=`${c.x+Math.min(c.w*.28,8)}%`; tag.style.top=`${Math.max(8,60-c.w*.95)}%`; tags.push(tag);
    });
    tags.forEach(t=>characterLayer.appendChild(t));
  }

  function renderHotspots(L){ interactionLayer.innerHTML=''; (L.hotspots||[]).forEach((h,i)=>{ const b=document.createElement('button'); b.className='hotspot'; b.style.left=`${h.x}%`; b.style.top=`${h.y}%`; b.innerHTML=h.icon; b.setAttribute('aria-label',`Clue ${i+1}`); b.onclick=()=>{ showToast(h.text); b.remove(); state.clues++; markStep(Math.min(i,1)); state.score+=60; updateHud(); }; interactionLayer.appendChild(b); }); }

  function renderScenario(L){
    if(L.scenario.type==='email') cardArea.innerHTML=`<div class="scenario-card"><div class="email-card"><div class="email-icon">✉️</div><div class="email-meta"><strong>${L.scenario.from}</strong><small>Incoming message</small></div><div class="risk-chip">Inspect carefully</div><div class="email-subject">${L.scenario.subject}</div><div class="email-body">${L.scenario.body}</div><div class="clues">${L.scenario.clues.map(c=>`<span class="clue">${c}</span>`).join('')}</div></div></div>`;
    else cardArea.innerHTML=`<div class="scenario-card"><h2>${L.scenario.title}</h2><p>${L.scenario.body}</p></div>`;
  }

  function renderChoices(L){ choiceBar.innerHTML=''; L.choices.forEach((c,i)=>{ const b=document.createElement('button'); b.className=`choice ${c.ok?'good':'danger'}`; b.innerHTML=`<div class="choice-icon">${c.icon}</div><div><strong>${c.label}</strong><small>${c.sub}</small></div>`; b.onclick=()=>choose(c); choiceBar.appendChild(b); }); }

  function choose(c){
    if(state.locked) return;
    const L=LEVELS[state.level];
    if(c.ok){ state.locked=true; state.score += c.alt?180:260; state.medals += c.alt?1:2; markStep(2); updateHud(); showToast(c.alt?'Safe alternative — good judgment.':'Correct — Lucian protected the kingdom.'); setTimeout(()=>completeLevel(c.final),650); }
    else { state.mistakes++; state.lives=Math.max(1,state.lives-1); updateHud(); showToast('Learning point: that choice increases cyber risk. Try another response.'); incident(c.severity==='major'?'major':'minor'); }
  }

  function completeLevel(final){
    confetti(final?170:80);
    const L=LEVELS[state.level];
    $('#completeTitle').textContent=final?'🏆 CYBER GUARDIAN 🏆':'✨ Cyber Mission Complete ✨';
    $('#completeText').textContent=final?'Lucian and the team protected the Cyber Kingdom.':'Lucian completed the mission and gained another cybersecurity skill.';
    $('#medals').innerHTML=`<span class="medal">🛡 Guardian</span><span class="medal">🔎 Detective</span><span class="medal">⚡ Responder</span>`;
    $('#scoreboard').innerHTML=`<div class="score-item">Threats investigated: <strong>${Math.max(1,state.clues)}</strong></div><div class="score-item">Mistakes converted to learning points: <strong>${state.mistakes}</strong></div><div class="score-item">Data protected: <strong>+${state.mistakes?300:500}</strong></div><div class="score-item">Total score: <strong>${state.score}</strong></div>`;
    $('#nextChapter').textContent=final?'Play again':'Next chapter →'; showModal('complete');
  }

  function next(){ hideModals(); if(state.level===LEVELS.length-1){ state.level=0; state.score=0; state.medals=0; state.lives=3; } else state.level++; render(); }

  function renderNetwork(L){
    networkSvg.innerHTML=''; if(!L.network && state.level!==0 && state.level!==1) return;
    const pts=L.network?[[160,380],[330,270],[505,360],[670,245],[830,330]]:[[160,260],[360,195],[560,270],[760,190]];
    const path=document.createElementNS('http://www.w3.org/2000/svg','path'); const d=pts.map((p,i)=>(i?'L':'M')+p[0]+','+p[1]).join(' '); path.setAttribute('d',d); path.setAttribute('class','net-line'); networkSvg.appendChild(path);
    pts.forEach(p=>{ const c=document.createElementNS('http://www.w3.org/2000/svg','circle'); c.setAttribute('cx',p[0]); c.setAttribute('cy',p[1]); c.setAttribute('r','9'); c.setAttribute('class','net-node'); networkSvg.appendChild(c); });
  }

  function startMailBurst(){ if(!state.settings.emailMotion||state.settings.reduced) return; for(let i=0;i<7;i++) setTimeout(spawnMail,i*260); }
  function spawnMail(){ const m=document.createElement('div'); m.className='flying-mail'; m.textContent='✉️'; const sx=-80+Math.random()*180, sy=30+Math.random()*90, mx=280+Math.random()*170, my=-20-Math.random()*70, tx=500+Math.random()*160, ty=200+Math.random()*60; Object.entries({sx,sy,mx,my,tx,ty}).forEach(([k,v])=>m.style.setProperty(`--${k}`,`${v}px`)); mailLayer.appendChild(m); setTimeout(()=>m.remove(),4100); }

  function leaf(){ if(state.settings.reduced)return; const l=document.createElement('div'); l.className='leaf'; l.style.left=`${Math.random()*100}%`; l.style.setProperty('--dx',`${-150+Math.random()*300}px`); l.style.animationDuration=`${7+Math.random()*6}s`; ambient.appendChild(l); setTimeout(()=>l.remove(),13500); }

  function incident(kind){ if(!state.settings.noShake&&!state.settings.reduced){ world.classList.remove('incident','major-incident'); void world.offsetWidth; world.classList.add(kind==='major'?'major-incident':'incident'); setTimeout(()=>world.classList.remove('incident','major-incident'),850); } if(!state.settings.reduced){ for(let i=0;i<(kind==='major'?11:4);i++) setTimeout(leaf,i*60); } }

  function updateHud(){ $('#lives').textContent=state.lives; $('#score').textContent=state.score; }
  function showToast(t){ toast.textContent=t; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove('show'),2500); }

  function showModal(which){ $('#modalBackdrop').classList.remove('hidden'); $(`#${which}Modal`).classList.remove('hidden'); }
  function hideModals(){ $('#modalBackdrop').classList.add('hidden'); $('#settingsModal').classList.add('hidden'); $('#completeModal').classList.add('hidden'); }

  function confetti(count=80){ const canvas=$('#confetti'), ctx=canvas.getContext('2d'); resizeCanvas(); const pieces=Array.from({length:count},()=>({x:Math.random()*innerWidth,y:-20-Math.random()*150,vx:-2+Math.random()*4,vy:2+Math.random()*4,r:Math.random()*6,w:6+Math.random()*7,h:8+Math.random()*9,c:['#4d96ff','#ffd93d','#6bcb77','#ff6b6b','#b77cff'][Math.floor(Math.random()*5)]})); let f=0; const tick=()=>{ctx.clearRect(0,0,innerWidth,innerHeight); pieces.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.025;p.r+=.08;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();}); if(f++<190)requestAnimationFrame(tick);else ctx.clearRect(0,0,innerWidth,innerHeight)}; tick(); }
  function resizeCanvas(){ const c=$('#confetti'), d=devicePixelRatio||1; c.width=innerWidth*d;c.height=innerHeight*d;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';c.getContext('2d').setTransform(d,0,0,d,0,0); }

  $('#settingsBtn').onclick=()=>showModal('settings'); $('#closeSettings').onclick=hideModals; $('#modalBackdrop').onclick=hideModals; $('#nextChapter').onclick=next;
  $('#reducedMotion').onchange=e=>{state.settings.reduced=e.target.checked;saveSettings()}; $('#noShake').onchange=e=>{state.settings.noShake=e.target.checked;saveSettings()}; $('#emailMotion').onchange=e=>{state.settings.emailMotion=e.target.checked;saveSettings()};
  window.addEventListener('resize',resizeCanvas); setInterval(leaf,1900);

  loadSettings(); resizeCanvas(); render();
})();
