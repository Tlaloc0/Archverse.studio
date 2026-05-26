// V2 — Studio interactions (extra translations + view toggle)
(function(){
  let lang = 'es';
  let currentFilter = 'all';
  let currentView = 'grid';
  let activeProject = null;
  let activeSlide = 0;

  // Extra translations for V2
  const V2 = {
    es:{
      'pre-1':'Archverse · Studio','pre-2':'Mazatlán · MX','pre-3':'Portafolio 2026','pre-4':'V·02 / Studio','pre-load':'Cargando',
      'nav-work':'Obra','nav-about':'Perfil','nav-career':'Trayectoria','nav-contact':'Contacto','nav-status':'Disponible',
      'ht-1':'Disciplina','ht-1b':'Arquitectura y diseño','ht-2':'Base','ht-2b':'Mazatlán, Sinaloa','ht-3':'Estudio','ht-3b':'Archverse · Fundador','ht-4':'Estatus','ht-4b':'Abierto',
      'hero-eye':'Arquitecto · Diseño + Desarrollo',
      'hero-tag':'Sitio, orientación, escala, materialidad — y al final, un lugar donde alguien vive o trabaja. Diez años recorriendo ese camino de principio a fin.',
      'hero-cta':'Ver obra · 05 proyectos','hero-count-l':'Años de experiencia',
      'tk-1':'Diseño arquitectónico','tk-2':'Proyecto ejecutivo','tk-3':'Coordinación de obra','tk-4':'Visualización · UE5','tk-5':'Vivienda · Cultural · Urbano','tk-6':'Disponible 2026',
      'tk-1b':'Diseño arquitectónico','tk-2b':'Proyecto ejecutivo','tk-3b':'Coordinación de obra','tk-4b':'Visualización · UE5','tk-5b':'Vivienda · Cultural · Urbano','tk-6b':'Disponible 2026',
      'idx-1':'Obra seleccionada · 05 proyectos · 2021 — 2025','idx-2':'↓ Scroll para explorar',
      'work-eye':'Obra seleccionada',
      'work-aside':'Cinco proyectos seleccionados entre vivienda, cultural y urbano. Casos donde el sitio, el programa y la materialidad determinaron la forma final del proyecto.',
      'work-aside-arr':'↓ Filtrar abajo',
      'f-all':'Todos · 05','f-r':'Residencial · 03','f-c':'Cultural · 01','f-u':'Urbano · 01',
      'view':'Vista:','view-grid':'Grid','view-list':'Index',
      'is-1l':'Experiencia','is-1d':'Años en la disciplina','is-2l':'Proyecto mayor','is-2d':'Hogares · Villa Vicario','is-3l':'Estudio propio','is-3d':'Archverse · 2026','is-4l':'Tipologías','is-4d':'Residencial · Cultural · Urbano',
      'about-eye':'Sobre · 02',
      'about-aside':'Diez años entre concepto y obra. Vivienda unifamiliar, torres, condohotel, restauración. Mi punto fuerte es coordinar todas las fases sin perder la idea original.',
      'ac-1':'Nombre','ac-2':'Base','ac-3':'Estudio',
      'ab-1':'<b>Arquitecto.</b> Diez años de experiencia diseñando y coordinando proyectos a distintas escalas — del primer croquis al plano ejecutivo, sin perder la idea por el camino.',
      'ab-2':'Diez años en tres despachos me dieron perspectiva de escala: vivienda unifamiliar, torres de departamentos, condohoteles y restauración patrimonial. Siempre desde el inicio hasta el plano ejecutivo.',
      'ab-3':'Lo que me ocupa en cada proyecto es lo mismo: que la proporción funcione, que la luz entre bien y que los materiales tengan sentido en ese lugar y presupuesto.',
      'ab-4':'En 2026 fundé <b style="color:var(--accent);font-weight:500">Archverse</b>, plataforma de maquetas virtuales interactivas para desarrollos inmobiliarios. Convertimos proyectos en experiencias navegables — tours 3D, simulador de unidades y financiamiento — para que el comprador tome la decisión antes del primer ladrillo.',
      'sk-h-l':'Herramientas · Software','sk-h-r':'Nivel · 0—100',
      'career-eye':'Trayectoria · 03',
      'career-aside':'Cuatro etapas — Archverse, Limbo, JH Arquitectura y Corporativo S2S — más una formación en UAS. Diez años de junior a fundador.',
      'cv-1-role':'Cofundador. Proyectos residenciales y mixtos — diseño, coordinación y presentación a clientes.',
      'cv-2-role':'Project Manager. Tiempos, costos, equipos y control de calidad en proyectos residenciales de gran escala.',
      'cv-3-role':'Diseñador arquitectónico. Del boceto al plano ejecutivo, modelado 3D y presencia en obra.',
      'cv-4-role':'Licenciatura en Arquitectura. Universidad Autónoma de Sinaloa.','cv-4-loc':'Formación',
      'c-eye':'Contacto · 04',
      'c-aside':'Para encargos, colaboraciones o un café en Mazatlán. Respuesta en 48 horas.',
      'c-block-1':'Canales directos','c-block-2':'Cuéntame del proyecto','c-block-2r':'Form 01',
      'c-arr-mail':'Escribir →','c-arr-call':'WhatsApp →','c-arr-li':'Bajo solicitud →','c-arr-ig':'Bajo solicitud →','c-arr-li2':'Mazatlán →',
      'form-name':'Nombre','form-email':'Correo','form-org':'Estudio','form-msg':'Mensaje','form-submit':'Enviar mensaje  →',
      'ft-l':'© 2026 · Jesús Antonio Ornelas','ft-c':'','ft-r':'Disponible',
      'm-year':'Año','m-loc':'Ubicación','m-area':'Programa','m-status':'Estado'
    },
    en:{
      'pre-1':'Archverse · Studio','pre-2':'Mazatlán · MX','pre-3':'Portfolio 2026','pre-4':'V·02 / Studio','pre-load':'Loading',
      'nav-work':'Work','nav-about':'About','nav-career':'Career','nav-contact':'Contact','nav-status':'Available',
      'ht-1':'Discipline','ht-1b':'Architecture & Design','ht-2':'Based in','ht-2b':'Mazatlán, Sinaloa','ht-3':'Studio','ht-3b':'Archverse · Founder','ht-4':'Status','ht-4b':'Open',
      'hero-eye':'Architect · Design + Development',
      'hero-tag':'Site, orientation, scale, materiality — and at the end, a place where someone lives or works. Ten years making that journey, start to finish.',
      'hero-cta':'See work · 05 projects','hero-count-l':'Years of experience',
      'tk-1':'Architectural design','tk-2':'Construction drawings','tk-3':'Site coordination','tk-4':'Visualization · UE5','tk-5':'Housing · Cultural · Urban','tk-6':'Available 2026',
      'tk-1b':'Architectural design','tk-2b':'Construction drawings','tk-3b':'Site coordination','tk-4b':'Visualization · UE5','tk-5b':'Housing · Cultural · Urban','tk-6b':'Available 2026',
      'idx-1':'Selected work · 05 projects · 2021 — 2025','idx-2':'↓ Scroll to explore',
      'work-eye':'Selected work',
      'work-aside':'Five selected projects across housing, cultural and urban. Cases where site, program, and materiality determined the final form of the project.',
      'work-aside-arr':'↓ Filter below',
      'f-all':'All · 05','f-r':'Residential · 03','f-c':'Cultural · 01','f-u':'Urban · 01',
      'view':'View:','view-grid':'Grid','view-list':'Index',
      'is-1l':'Experience','is-1d':'Years in the discipline','is-2l':'Largest project','is-2d':'Homes · Villa Vicario','is-3l':'Own studio','is-3d':'Archverse · 2026','is-4l':'Typologies','is-4d':'Residential · Cultural · Urban',
      'about-eye':'About · 02',
      'about-aside':'Ten years between concept and construction. Single-family homes, towers, condo-hotel, restoration. My strength: coordinating every phase without losing the original idea.',
      'ac-1':'Name','ac-2':'Based in','ac-3':'Studio',
      'ab-1':'<b>Architect.</b> Ten years of experience designing and coordinating projects at different scales — from the first sketch to construction drawings, without losing the idea along the way.',
      'ab-2':'Ten years across three studios gave me a range of scale: single-family homes, apartment towers, condo-hotel developments, and heritage restoration. Always in from start to construction drawings.',
      'ab-3':'What I keep working through on every project is the same: getting the proportions right, letting light in well, and choosing materials that make sense for that site and budget.',
      'ab-4':'In 2026 I founded <b style="color:var(--accent);font-weight:500">Archverse</b>, an interactive virtual model platform for real estate developments in Mexico. We turn projects into navigable experiences — 3D tours, unit finders, and financial simulators — so buyers decide before the first brick is laid.',
      'sk-h-l':'Tools · Software','sk-h-r':'Level · 0—100',
      'career-eye':'Career · 03',
      'career-aside':'Four stages — Archverse, Limbo, JH Arquitectura and Corporativo S2S — plus a degree from UAS. Ten years from junior to founder.',
      'cv-1-role':'Co-founder. Residential and mixed-use projects — design, coordination and client presentation.',
      'cv-2-role':'Project Manager. Schedules, costs, teams and quality control across large-scale residential projects.',
      'cv-3-role':'Architect designer. From first sketch to construction drawings, 3D modeling and on-site presence.',
      'cv-4-role':'Bachelor in Architecture. Universidad Autónoma de Sinaloa.','cv-4-loc':'Education',
      'c-eye':'Contact · 04',
      'c-aside':'For commissions, collaborations or a coffee in Mazatlán. Response within 48 hours.',
      'c-block-1':'Direct channels','c-block-2':'Tell me about your project','c-block-2r':'Form 01',
      'c-arr-mail':'Write →','c-arr-call':'WhatsApp →','c-arr-li':'On request →','c-arr-ig':'On request →','c-arr-li2':'Mazatlán →',
      'form-name':'Name','form-email':'Email','form-org':'Studio','form-msg':'Message','form-submit':'Send message  →',
      'ft-l':'© 2026 · Jesús Antonio Ornelas','ft-c':'','ft-r':'Available',
      'm-year':'Year','m-loc':'Location','m-area':'Program','m-status':'Status'
    }
  };

  // ── CURSOR ──
  const cur = document.getElementById('cur');
  if(cur){
    let tx=0,ty=0,cx=0,cy=0;
    document.addEventListener('mousemove', e=>{ tx=e.clientX; ty=e.clientY; });
    function tick(){
      cx += (tx-cx)*.22; cy += (ty-cy)*.22;
      cur.style.left = cx+'px'; cur.style.top = cy+'px';
      requestAnimationFrame(tick);
    }
    tick();
    document.addEventListener('mouseover', e=>{
      const t = e.target;
      cur.classList.remove('big','cross');
      if(t.closest('.pc, .plist-row, .feat-img')) cur.classList.add('big');
      else if(t.closest('a, button, .wfilter')) cur.classList.add('cross');
    });
  }

  // ── PRELOADER ──
  window.addEventListener('load', ()=>{
    const fill = document.getElementById('pre-f');
    const pct = document.getElementById('pre-pct');
    let p = 0;
    const tick = setInterval(()=>{
      p += Math.random()*8 + 3;
      if(p>=100) p=100;
      pct.textContent = String(Math.floor(p)).padStart(3,'0');
      if(p>=100){
        clearInterval(tick);
        fill.style.width = '100%';
        setTimeout(()=>{
          document.getElementById('pre').classList.add('out');
          document.querySelectorAll('[data-anim]').forEach(el=>el.classList.add('v'));
          document.querySelector('.hero-tag')?.classList.add('v');
        }, 300);
      }
    }, 55);
    setTimeout(()=>{ fill.style.width = '85%'; }, 100);
  });

  // ── REVEAL ──
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('v');
        e.target.querySelectorAll('.skill-fill').forEach(f=>{ f.style.width = f.dataset.w + '%'; });
        io.unobserve(e.target);
      }
    });
  }, {threshold:.12});
  function observeReveal(){ document.querySelectorAll('.rv').forEach(el=>io.observe(el)); }

  // ── WORK ──
  function catLabel(cat){
    const m = {residential:{es:'Residencial',en:'Residential'},cultural:{es:'Cultural',en:'Cultural'},urban:{es:'Urbano',en:'Urban'}};
    return m[cat]?.[lang] || cat;
  }
  function renderWork(){
    const grid = document.getElementById('pgrid');
    const list = document.getElementById('plist');
    const filtered = currentFilter==='all' ? window.PROJECTS : window.PROJECTS.filter(p=>p.cat===currentFilter);
    grid.innerHTML = filtered.map((p,i)=>`
      <div class="pc" data-id="${p.id}">
        <div class="pc-bg" style="background-image:url('${p.images[0]}')"></div>
        <div class="pc-overlay"></div>
        <div class="pc-no">No. ${p.no} / ${String(window.PROJECTS.length).padStart(2,'0')}</div>
        <div class="pc-cat">${catLabel(p.cat)}</div>
        <div class="pc-info">
          <div class="pc-title">${p.title[lang]}</div>
          <div class="pc-meta"><span>${p.loc[lang]}</span><span>${p.year}</span></div>
          <span class="pc-status">${p.status[lang]}</span>
        </div>
      </div>
    `).join('');
    list.innerHTML = filtered.map((p)=>`
      <div class="plist-row" data-id="${p.id}">
        <div class="pl-num">No. ${p.no}</div>
        <div class="pl-thumb"><img src="${p.images[0]}" alt="${p.title[lang]}" loading="lazy"></div>
        <div class="pl-title">${p.title[lang]}</div>
        <div class="pl-meta">${p.loc[lang]} — ${p.year}</div>
        <div class="pl-status">${catLabel(p.cat)} · ${p.status[lang]}</div>
      </div>
    `).join('');
    document.querySelectorAll('.pc, .plist-row').forEach(r=>{
      r.addEventListener('click', ()=> openModal(r.dataset.id));
    });
  }

  document.querySelectorAll('.wfilter').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.wfilter').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      currentFilter = b.dataset.cat;
      renderWork();
    });
  });
  document.querySelectorAll('.viewtoggle button').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.viewtoggle button').forEach(x=>x.classList.remove('on'));
      b.classList.add('on');
      currentView = b.dataset.view;
      document.getElementById('pgrid').classList.toggle('off', currentView==='list');
      document.getElementById('plist').classList.toggle('on', currentView==='list');
    });
  });

  // ── MODAL ──
  function openModal(id){
    const p = window.PROJECTS.find(x=>x.id===id);
    if(!p) return;
    activeProject = p;
    activeSlide = 0;
    const T = V2[lang];
    document.getElementById('m-no').textContent = `No. ${p.no} / ${String(window.PROJECTS.length).padStart(2,'0')}`;
    document.getElementById('m-cat').textContent = `${catLabel(p.cat)} · ${p.status[lang]}`;
    document.getElementById('m-title').textContent = p.title[lang];
    document.getElementById('m-meta').innerHTML = `
      <div><label>${T['m-year']}</label><span>${p.year}</span></div>
      <div><label>${T['m-loc']}</label><span>${p.loc[lang]}</span></div>
      <div><label>${T['m-area']}</label><span>${p.area[lang]}</span></div>
      <div><label>${T['m-status']}</label><span>${p.status[lang]}</span></div>
    `;
    document.getElementById('m-desc').textContent = p.desc[lang];
    renderGallery();
    document.getElementById('modal').classList.add('on');
    document.body.style.overflow = 'hidden';
  }
  function renderGallery(){
    const g = document.getElementById('mod-gallery');
    g.innerHTML = activeProject.images.map((src,i)=>`
      <div class="mod-slide ${i===activeSlide?'on':''}"><img src="${src}" alt="${activeProject.title[lang]} ${i+1}" loading="lazy"></div>
    `).join('') + `
      <div class="mod-nav">
        <div class="mod-counter">${String(activeSlide+1).padStart(2,'0')} / ${String(activeProject.images.length).padStart(2,'0')}</div>
        <div class="mod-arrows">
          <button class="mod-arr" onclick="modPrev()">‹</button>
          <button class="mod-arr" onclick="modNext()">›</button>
        </div>
      </div>
    `;
    const tb = document.getElementById('m-thumbs');
    tb.innerHTML = activeProject.images.slice(0,8).map((src,i)=>`
      <button class="mod-thumb ${i===activeSlide?'on':''}" onclick="modGo(${i})"><img src="${src}" alt="" loading="lazy"></button>
    `).join('');
  }
  window.modPrev = ()=>{ activeSlide = (activeSlide-1+activeProject.images.length) % activeProject.images.length; renderGallery(); };
  window.modNext = ()=>{ activeSlide = (activeSlide+1) % activeProject.images.length; renderGallery(); };
  window.modGo = (i)=>{ activeSlide = i; renderGallery(); };
  window.closeMod = ()=>{ document.getElementById('modal').classList.remove('on'); document.body.style.overflow=''; };
  document.addEventListener('keydown', e=>{
    if(!document.getElementById('modal').classList.contains('on')) return;
    if(e.key==='Escape') window.closeMod();
    if(e.key==='ArrowLeft') window.modPrev();
    if(e.key==='ArrowRight') window.modNext();
  });

  // ── LANG ──
  window.setLang = function(L){
    lang = L;
    document.documentElement.lang = L;
    document.querySelectorAll('.lang button').forEach(b=>b.classList.remove('on'));
    document.querySelector(`.lang button[onclick*="${L}"]`)?.classList.add('on');
    const T = V2[L];
    document.querySelectorAll('[data-t]').forEach(el=>{
      const k = el.dataset.t;
      if(T[k]!==undefined){
        if(/<i>|<br>|<b/.test(T[k])) el.innerHTML = T[k];
        else el.textContent = T[k];
      }
    });
    const placeholders = {es:{'f-name':'Tu nombre','f-email':'tu@correo.com','f-org':'Despacho o empresa','f-msg':'Cuéntame del proyecto...'},en:{'f-name':'Your name','f-email':'your@email.com','f-org':'Studio or company','f-msg':'Tell me about the project...'}};
    Object.entries(placeholders[L]).forEach(([id,ph])=>{
      const el=document.getElementById(id); if(el) el.placeholder = ph;
    });
    document.title = L==='es' ? 'Jesús Ornelas — Studio' : 'Jesús Ornelas — Studio';
    renderWork();
    if(activeProject && document.getElementById('modal').classList.contains('on')) openModal(activeProject.id);
  };

  renderWork();
  observeReveal();
  const mo = new MutationObserver(()=>observeReveal());
  mo.observe(document.getElementById('pgrid'), {childList:true});
  // Sync default language on init (HTML defaults mix EN/ES)
  window.setLang('es');

  // Form
  document.querySelector('.c-submit')?.addEventListener('click', e=>{
    e.preventDefault();
    const btn = e.target;
    const original = btn.textContent;
    btn.textContent = lang==='es' ? '✓ Mensaje enviado' : '✓ Message sent';
    setTimeout(()=>{ btn.textContent = original; }, 2400);
  });
})();
