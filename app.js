let evidence=[];
let trends={};
let recovery={};
let chartMode='level';
let chartRange='all';
const $=s=>document.querySelector(s);
const uniq=a=>[...new Set(a)].sort((x,y)=>x.localeCompare(y));
const titleSignal=s=>({"ai-signal":"AI signal",strain:"Strain",mixed:"Mixed",context:"Context",recovery:"Recovery",mechanism:"Mechanism"}[s]||s);

async function boot(){
  [evidence,trends,recovery]=await Promise.all([
    fetch('data/evidence.json').then(r=>r.json()),
    fetch('data/trends.json').then(r=>r.json()),
    fetch('data/recovery.json').then(r=>r.json())
  ]);
  populateFilters();
  renderLedger();
  renderSources();
  renderTrends();
  renderAttribution();
  renderStatus();
  renderRecovery();
  bind();
}

function populateFilters(){
  uniq(evidence.map(d=>d.geography)).forEach(v=>$('#geoFilter').insertAdjacentHTML('beforeend',`<option>${v}</option>`));
  uniq(evidence.map(d=>d.stream)).forEach(v=>$('#streamFilter').insertAdjacentHTML('beforeend',`<option>${v}</option>`));
}
function filtered(){
  return evidence.filter(d=>( $('#geoFilter').value==='all'||d.geography===$('#geoFilter').value) && ($('#streamFilter').value==='all'||d.stream===$('#streamFilter').value) && ($('#signalFilter').value==='all'||d.signal===$('#signalFilter').value) && ($('#aiFilter').value==='all'||d.ai_specific===$('#aiFilter').value));
}
function renderLedger(){
  const rows=filtered(); $('#evidenceCount').textContent=`${rows.length} observation${rows.length===1?'':'s'}`;
  $('#ledger').innerHTML=rows.map(d=>`<article class="ledger-row" tabindex="0" data-id="${d.id}"><div class="stream">${d.stream}</div><div class="geo">${d.geography}<br>${d.source}</div><h3>${d.headline}</h3><div class="metric">${d.metric}</div><div class="pill ${d.signal}">${titleSignal(d.signal)}</div></article>`).join('') || '<p style="padding:24px 0;color:#66778a">No observations match these filters.</p>';
  document.querySelectorAll('.ledger-row').forEach(r=>{r.onclick=()=>openDetail(r.dataset.id);r.onkeydown=e=>{if(e.key==='Enter')openDetail(r.dataset.id)}})
}
function openDetail(id){
  const d=evidence.find(x=>x.id===id); if(!d)return;
  $('#dialogContent').innerHTML=`<div class="detail"><div class="topline"><span class="pill ${d.signal}">${titleSignal(d.signal)}</span><span class="pill">${d.tier}</span><span class="pill">AI: ${d.ai_specific}</span></div><h2>${d.headline}</h2><p>${d.detail}</p><div class="metric-big">${d.metric}</div><div class="detail-grid"><div class="detail-box"><b>COMPARATOR</b><p>${d.comparator}</p></div><div class="detail-box"><b>PRINCIPAL CAVEAT</b><p>${d.caveat}</p></div><div class="detail-box"><b>WHY IT MATTERS</b><p>${d.why}</p></div><div class="detail-box"><b>PROVENANCE</b><p>${d.source} · ${d.geography} · ${d.date}</p></div></div><a class="source-link" href="${d.url}" target="_blank" rel="noopener">Open direct source ↗</a></div>`;
  $('#detailDialog').showModal();
}
function renderSources(){
  const sourceNames=uniq(evidence.map(d=>d.source)); const geos=uniq(evidence.map(d=>d.geography)); const streams=uniq(evidence.map(d=>d.stream));
  $('#sourceSummary').innerHTML=`<div class="source-stat"><b>${sourceNames.length}</b><span>Named sources</span></div><div class="source-stat"><b>${evidence.length}</b><span>Evidence observations</span></div><div class="source-stat"><b>${geos.length}</b><span>Geographies / regions</span></div><div class="source-stat"><b>${streams.length}</b><span>Evidence streams</span></div>`;
  const bySource={}; evidence.forEach(d=>(bySource[d.source]??=[]).push(d));
  $('#sourceList').innerHTML=Object.entries(bySource).sort((a,b)=>a[0].localeCompare(b[0])).map(([name,items])=>`<article class="source-item"><div><h3>${name}</h3><p>${items.map(i=>`${i.date} · ${i.geography} · ${i.stream}`).join(' | ')}</p></div><a href="${items[0].url}" target="_blank" rel="noopener">Source ↗</a></article>`).join('');
}

function renderStatus(){
  const geos=uniq(evidence.map(d=>d.geography));
  const streams=uniq(evidence.map(d=>d.stream));
  const el=$('#statusEvidence');
  if(el)el.textContent=`${evidence.length} observations · ${geos.length} geographies / regions · ${streams.length} evidence streams`;
}

function renderAttribution(){
  const grid=$('#attributionGrid'); if(!grid)return;
  const roles={
    'emanuel-proximity-2026':'PROXIMITY MECHANISM',
    'wang-remote-hiring-2026':'HIRING REQUIREMENTS',
    'lambert-schindler-2026':'JOINT ATTRIBUTION TEST'
  };
  const ids=Object.keys(roles);
  grid.innerHTML=ids.map(id=>{
    const d=evidence.find(x=>x.id===id); if(!d)return '';
    return `<article class="attribution-card" tabindex="0" data-id="${d.id}"><span class="micro">${roles[id]}</span><div class="attribution-metric">${d.metric}</div><h3>${d.headline}</h3><p>${d.detail}</p><div class="attribution-caveat"><b>CAUTION</b>${d.caveat}</div><a href="${d.url}" target="_blank" rel="noopener">Direct source ↗</a></article>`;
  }).join('');
  grid.querySelectorAll('.attribution-card').forEach(card=>{
    card.addEventListener('keydown',e=>{if(e.key==='Enter')openDetail(card.dataset.id)});
  });
}

function renderTrends(){
  const uk=trends.ukVacancies;
  $('#ukVacTitle').textContent=uk.title;
  $('#ukVacSubtitle').textContent=uk.subtitle;
  $('#ukVacLatest').textContent=`${uk.latest}k`;
  $('#ukVacDelta').textContent=`${uk.yoy>0?'+':''}${uk.yoy}% YoY`;
  $('#ukVacNote').textContent=uk.note;
  $('#ukVacSource').href=uk.url;

  const fed=trends.fedGraduates;
  const unemp=fed.series.find(s=>s.name==='Unemployment').points.at(-1).value;
  const under=fed.series.find(s=>s.name==='Underemployment').points.at(-1).value;
  $('#fedUnemp').textContent=`${unemp.toFixed(1)}%`;
  $('#fedUnder').textContent=`${under.toFixed(1)}%`;
  $('#fedNote').textContent=`2026 Q2: ${unemp.toFixed(1)}% unemployment and ${under.toFixed(1)}% underemployment among recent college graduates.`;
  $('#fedSource').href=fed.url;

  const sg=trends.stanfordGap;
  const first=sg.points[0], last=sg.points.at(-1);
  const stanford=$('#stanfordCard');
  stanford.querySelector('.signal-head b').textContent=`${first.value}% → ${last.value}%`;
  stanford.querySelector('p').textContent=`Kept-pace shortfall for ages 22–25 in highly AI-exposed occupations, ${first.label} to ${last.label}.`;
  stanford.onclick=()=>window.open(sg.url,'_blank','noopener');
  stanford.style.cursor='pointer';
  drawUkVacChart();
}

function drawUkVacChart(){
  const svg=$('#ukVacChart');
  if(!svg || !trends.ukVacancies)return;
  let points=trends.ukVacancies.points.slice();
  if(chartRange==='6')points=points.slice(-6);
  const raw=points.map(p=>p.value);
  const base=raw[0];
  const vals=chartMode==='index'?raw.map(v=>v/base*100):raw;
  const W=760,H=330,ml=54,mr=20,mt=28,mb=58;
  let min=Math.min(...vals),max=Math.max(...vals);
  const pad=(max-min || 10)*.22;
  min-=pad; max+=pad;
  if(chartMode==='index'){min=Math.min(min,97);max=Math.max(max,103)}
  const x=i=>ml+(i/(vals.length-1||1))*(W-ml-mr);
  const y=v=>mt+(max-v)/(max-min)*(H-mt-mb);
  const ticks=4;
  const grid=[];
  for(let i=0;i<=ticks;i++){
    const val=max-(max-min)*i/ticks;
    const yy=y(val);
    grid.push(`<line class="chart-grid" x1="${ml}" x2="${W-mr}" y1="${yy}" y2="${yy}"></line><text class="chart-axis-label" x="${ml-10}" y="${yy+4}" text-anchor="end">${chartMode==='index'?val.toFixed(0):Math.round(val)}</text>`);
  }
  const coords=vals.map((v,i)=>[x(i),y(v)]);
  const path=coords.map((c,i)=>`${i?'L':'M'} ${c[0].toFixed(2)} ${c[1].toFixed(2)}`).join(' ');
  const area=`M ${coords[0][0]} ${H-mb} `+coords.map((c,i)=>`${i?'L':'L'} ${c[0]} ${c[1]}`).join(' ')+` L ${coords.at(-1)[0]} ${H-mb} Z`;
  const xLabels=points.map((p,i)=>{
    const show=points.length<=6 || i===0 || i===points.length-1 || i%2===0;
    return show?`<text class="chart-axis-label" x="${x(i)}" y="${H-24}" text-anchor="middle">${shortLabel(p.label)}</text>`:'';
  }).join('');
  const baseline=chartMode==='index'?`<line class="chart-baseline" x1="${ml}" x2="${W-mr}" y1="${y(100)}" y2="${y(100)}"></line><text class="chart-axis-label" x="${W-mr}" y="${y(100)-6}" text-anchor="end">baseline 100</text>`:'';
  const circles=coords.map((c,i)=>`<circle class="chart-point ${i===coords.length-1?'latest':''}" cx="${c[0]}" cy="${c[1]}" r="5" tabindex="0" data-index="${i}"></circle>`).join('');
  svg.innerHTML=`<defs><linearGradient id="chartFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6aa9db" stop-opacity=".28"/><stop offset="100%" stop-color="#6aa9db" stop-opacity=".02"/></linearGradient></defs>${grid.join('')}${baseline}<path class="chart-area" d="${area}"></path><path class="chart-line" d="${path}"></path>${circles}${xLabels}<text class="chart-axis-label" x="${ml}" y="16">${chartMode==='index'?'Index, first visible period = 100':'Vacancies, thousands'}</text>`;
  const tooltip=$('#chartTooltip');
  svg.querySelectorAll('.chart-point').forEach(el=>{
    const show=()=>{
      const i=+el.dataset.index,p=points[i],v=vals[i];
      const vb=svg.getBoundingClientRect();
      tooltip.innerHTML=`<b>${p.label}</b><br>${chartMode==='index'?v.toFixed(1)+' index':p.value+'k vacancies'}`;
      tooltip.hidden=false;
      tooltip.style.left=`${el.cx.baseVal.value/W*vb.width}px`;
      tooltip.style.top=`${el.cy.baseVal.value/H*vb.height}px`;
    };
    el.addEventListener('mouseenter',show); el.addEventListener('focus',show);
    el.addEventListener('mouseleave',()=>tooltip.hidden=true); el.addEventListener('blur',()=>tooltip.hidden=true);
  });
}
function shortLabel(s){
  return s.replace(' 2025',' ’25').replace(' 2026',' ’26').replace('May–Jul','May–Jul').replace('Jun–Aug','Jun–Aug').replace('Jul–Sep','Jul–Sep').replace('Aug–Oct','Aug–Oct').replace('Sep–Nov','Sep–Nov').replace('Oct–Dec','Oct–Dec').replace('Nov–Jan','Nov–Jan').replace('Dec–Feb','Dec–Feb').replace('Jan–Mar','Jan–Mar').replace('Feb–Apr','Feb–Apr').replace('Mar–May','Mar–May').replace('Apr–Jun','Apr–Jun');
}

function renderRecovery(){
  $('#recoveryReading').textContent=recovery.reading;
  $('#recoveryUpdated').textContent=`Updated ${recovery.updated}`;
  $('#broadMarketLane').innerHTML=recovery.broad_market.map(recoveryItem).join('');
  $('#firstRungLane').innerHTML=recovery.first_rung.map(recoveryItem).join('');
}
function recoveryItem(d){
  return `<article class="lane-item ${d.status}"><div><h3>${d.label}</h3><p>${d.detail}</p><a href="${d.url}" target="_blank" rel="noopener">Source ↗</a></div><div class="lane-value"><b>${d.metric}</b><span>${d.change}</span></div></article>`;
}

function bind(){
  ['geoFilter','streamFilter','signalFilter','aiFilter'].forEach(id=>$(`#${id}`).addEventListener('change',renderLedger));
  $('#resetFilters').onclick=()=>{['geoFilter','streamFilter','signalFilter','aiFilter'].forEach(id=>$(`#${id}`).value='all');renderLedger()};
  $('.dialog-close').onclick=()=>$('#detailDialog').close();
  $('#detailDialog').addEventListener('click',e=>{if(e.target===$('#detailDialog'))$('#detailDialog').close()});
  document.querySelectorAll('[data-chart-mode]').forEach(btn=>btn.addEventListener('click',()=>{
    chartMode=btn.dataset.chartMode;
    document.querySelectorAll('[data-chart-mode]').forEach(b=>b.classList.toggle('active',b===btn));
    drawUkVacChart();
  }));
  document.querySelectorAll('[data-chart-range]').forEach(btn=>btn.addEventListener('click',()=>{
    chartRange=btn.dataset.chartRange;
    document.querySelectorAll('[data-chart-range]').forEach(b=>b.classList.toggle('active',b===btn));
    drawUkVacChart();
  }));
}
boot().catch(err=>{
  console.error(err);
  const count=$('#evidenceCount'); if(count)count.textContent='Data failed to load';
});
