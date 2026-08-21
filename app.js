let evidence=[];
const $=s=>document.querySelector(s);
const uniq=a=>[...new Set(a)].sort((x,y)=>x.localeCompare(y));
const titleSignal=s=>({"ai-signal":"AI signal",strain:"Strain",mixed:"Mixed",context:"Context",recovery:"Recovery",mechanism:"Mechanism"}[s]||s);
async function boot(){
  evidence=await fetch('data/evidence.json').then(r=>r.json());
  populateFilters(); renderLedger(); renderSources(); bind();
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
function bind(){
  ['geoFilter','streamFilter','signalFilter','aiFilter'].forEach(id=>$(`#${id}`).addEventListener('change',renderLedger));
  $('#resetFilters').onclick=()=>{['geoFilter','streamFilter','signalFilter','aiFilter'].forEach(id=>$(`#${id}`).value='all');renderLedger()};
  $('.dialog-close').onclick=()=>$('#detailDialog').close();
  $('#detailDialog').addEventListener('click',e=>{if(e.target===$('#detailDialog'))$('#detailDialog').close()});
}
boot();
