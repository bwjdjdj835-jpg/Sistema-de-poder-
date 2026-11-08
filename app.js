(() => {
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const rand = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const uid = () => Math.random().toString(36).slice(2, 9);
const P = window.POOL;

// ---------- Abas ----------
document.querySelectorAll(".tab").forEach(b => b.onclick = () => {
  document.querySelectorAll(".tab,.pane").forEach(e => e.classList.remove("on"));
  b.classList.add("on"); $("#" + b.dataset.tab).classList.add("on");
});

// ---------- Explorar: catálogo ----------
function renderCatalogo() {
  const q = $("#filtro").value.toLowerCase(), ano = $("#anoFiltro").value;
  const lista = ANIMES.filter(a => (!ano || a.ano == ano) && (!q || JSON.stringify(a).toLowerCase().includes(q)));
  $("#catalogo").innerHTML = lista.map(cardAnime).join("") || `<p class="muted">Nada encontrado.</p>`;
}
const cardAnime = a => `<article class="card"><h3>${esc(a.titulo)}<span class="pill">${a.ano}</span></h3>
  <div class="sys">${esc(a.sistema)}</div><p class="muted">${esc(a.resumo)}</p>
  <ul>${a.personagens.map(p => `<li><b>${esc(p.nome)}</b> — ${esc(p.poder)} <span class="muted">(${esc(p.ligacao)})</span></li>`).join("")}</ul></article>`;
$("#filtro").oninput = $("#anoFiltro").onchange = renderCatalogo;
renderCatalogo();

// ---------- Explorar: busca na web (Jikan / MyAnimeList) ----------
const CHAVES = [["jujutsu kaisen"],["frieren"],["solo leveling","ore dake level"],["kaiju"],["dandadan","dan da dan"],["mashle"],["kimetsu","demon slayer"],["jigokuraku","hell's paradise"],["undead unluck"],["gachiakuta"]];
const norm = s => (s || "").toLowerCase();
function doCatalogo(anime) {
  const t = norm(anime.title) + " " + norm(anime.title_english);
  for (const ks of CHAVES) if (ks.some(k => t.includes(k)))
    return ANIMES.find(a => ks.some(k => norm(a.titulo).includes(k)) || (ks[0] === "kimetsu" && a.titulo.includes("Demon Slayer")) || (ks[0] === "jigokuraku" && a.titulo.includes("Hell")));
  return null;
}
$("#webBuscar").onclick = async () => {
  const ano = $("#webAno").value, temp = $("#webTemp").value, so = $("#webAcao").checked;
  $("#webStatus").textContent = "Buscando…"; $("#webLista").innerHTML = "";
  try {
    let todos = [];
    for (let page = 1; page <= 3; page++) {
      const r = await fetch(`https://api.jikan.moe/v4/seasons/${ano}/${temp}?sfw=true&page=${page}`);
      if (!r.ok) throw new Error("HTTP " + r.status);
      const j = await r.json(); todos = todos.concat(j.data || []);
      if (!j.pagination?.has_next_page) break;
      await new Promise(res => setTimeout(res, 400)); // respeita o limite da API
    }
    const vistos = new Set();
    todos = todos.filter(a => !vistos.has(a.mal_id) && vistos.add(a.mal_id));
    if (so) todos = todos.filter(a => (a.genres || []).some(g => ["Action","Fantasy","Supernatural"].includes(g.name)));
    todos.sort((a, b) => (b.members || 0) - (a.members || 0));
    $("#webStatus").textContent = `${todos.length} animes encontrados. Os marcados em verde têm sistema de poder no catálogo.`;
    $("#webLista").innerHTML = todos.map(a => {
      const c = doCatalogo(a);
      return `<article class="card web"><img loading="lazy" src="${esc(a.images?.jpg?.image_url)}" alt="">
        <h3>${esc(a.title_english || a.title)}</h3>
        <div class="muted">${esc((a.genres || []).map(g => g.name).join(", "))}</div>
        ${c ? `<div class="tem">✔ ${esc(c.sistema)}</div>` : `<div class="muted">Sistema de poder: não catalogado</div>`}
        <a href="${esc(a.url)}" target="_blank" rel="noopener" class="muted">Ver no MyAnimeList ↗</a></article>`;
    }).join("");
  } catch (e) {
    $("#webStatus").textContent = "Não consegui buscar agora (" + e.message + "). Tente de novo em alguns segundos.";
  }
};

// ---------- Criador ----------
const KEY = "forja-poder-v1";
let S = load() || gerar(8, 30);
let sel = null;

function load() { try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; } }
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} }

function gerar(nLin, nPers) {
  nLin = Math.max(2, Math.min(nLin, P.poderes.length));
  const poderes = shuffle(P.poderes), clas = shuffle(P.clas);
  const linhagens = Array.from({ length: nLin }, (_, i) => ({
    id: uid(), nome: "Clã " + clas[i], cor: `hsl(${Math.round(i * 360 / nLin)},75%,62%)`,
    poder: poderes[i][0], efeito: poderes[i][1], fraqueza: poderes[i][2]
  }));
  const usados = new Set();
  const personagens = Array.from({ length: nPers }, (_, i) => {
    const lin = linhagens[i % nLin];
    let nome, n = 0;
    do { nome = rand(P.nomes) + " " + lin.nome.replace("Clã ", ""); } while (usados.has(nome) && ++n < 50);
    usados.add(nome);
    const r = Math.random();
    return { id: uid(), nome, lin: lin.id, tecnica: `${rand(P.tecnicas)} de ${lin.poder}`,
      rank: r > .93 ? "S" : r > .78 ? "A" : r > .55 ? "B" : r > .32 ? "C" : r > .12 ? "D" : "E", conex: [] };
  });
  personagens.forEach(p => {
    const k = 1 + Math.floor(Math.random() * 2);
    for (let t = 0; t < k && personagens.length > 1; t++) {
      const o = rand(personagens);
      if (o.id !== p.id && !p.conex.some(c => c.id === o.id) && !o.conex.some(c => c.id === p.id)) p.conex.push({ id: o.id, tipo: rand(P.relacoes) });
    }
  });
  return { nome: $("#sNome").value || "Meu Sistema", energia: $("#sEnergia").value || "Energia", linhagens, personagens };
}

const linDe = p => S.linhagens.find(l => l.id === p.lin) || { nome: "—", cor: "#666", poder: "—" };
const persDe = id => S.personagens.find(p => p.id === id);
const conexoesDe = p => [
  ...p.conex.map(c => ({ ...c, outro: persDe(c.id) })),
  ...S.personagens.filter(o => o.conex.some(c => c.id === p.id)).map(o => ({ id: o.id, tipo: o.conex.find(c => c.id === p.id).tipo, outro: o }))
].filter(c => c.outro);

function tudo() { save(); mapa(); linhagens(); tabela(); detalhe(); }

// Mapa radial: sistema -> linhagens -> personagens
function mapa() {
  const svg = $("#mapa"), L = S.linhagens, pos = {};
  const R1 = 190, R2 = 410;
  L.forEach((l, i) => { const a = i / L.length * 2 * Math.PI - Math.PI / 2; pos[l.id] = [R1 * Math.cos(a), R1 * Math.sin(a), a]; });
  L.forEach((l, i) => {
    const membros = S.personagens.filter(p => p.lin === l.id), setor = 2 * Math.PI / L.length;
    membros.forEach((p, j) => {
      const a = pos[l.id][2] - setor / 2 + setor * (j + .5) / membros.length;
      pos[p.id] = [R2 * Math.cos(a), R2 * Math.sin(a), a];
    });
  });
  const ativo = new Set();
  if (sel) {
    ativo.add(sel);
    const l = S.linhagens.find(x => x.id === sel);
    if (l) S.personagens.filter(p => p.lin === l.id).forEach(p => ativo.add(p.id));
    const p = persDe(sel);
    if (p) { ativo.add(p.lin); conexoesDe(p).forEach(c => ativo.add(c.id)); }
  }
  const dim = id => sel && !ativo.has(id) ? "dim" : "";
  let h = "";
  // conexões entre personagens
  S.personagens.forEach(p => p.conex.forEach(c => {
    if (!pos[p.id] || !pos[c.id]) return;
    const [x1, y1] = pos[p.id], [x2, y2] = pos[c.id];
    const on = sel && (sel === p.id || sel === c.id);
    const cor = c.tipo === "rival" || c.tipo === "inimigo" ? "#ff4f8b" : "#7c5cff";
    h += `<path d="M${x1},${y1} Q${(x1 + x2) / 4},${(y1 + y2) / 4} ${x2},${y2}" fill="none" stroke="${cor}" stroke-width="${on ? 2 : 1}" opacity="${sel ? (on ? .9 : .04) : .25}"/>`;
  }));
  L.forEach(l => {
    const [x, y] = pos[l.id];
    h += `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="${l.cor}" stroke-width="2" class="${dim(l.id)}"/>`;
    S.personagens.filter(p => p.lin === l.id).forEach(p => {
      const [px, py] = pos[p.id];
      h += `<line x1="${x}" y1="${y}" x2="${px}" y2="${py}" stroke="${l.cor}" opacity=".5" class="${dim(p.id)}"/>`;
    });
  });
  h += `<circle r="62" fill="#ff4f8b"/><text text-anchor="middle" y="-4" style="font-weight:700;font-size:14px">${esc(S.nome)}</text><text text-anchor="middle" y="14" style="font-size:11px">${esc(S.energia)}</text>`;
  L.forEach(l => {
    const [x, y] = pos[l.id];
    h += `<g class="n ${dim(l.id)}" data-id="${l.id}"><circle cx="${x}" cy="${y}" r="30" fill="${l.cor}" stroke="#0d0f1a" stroke-width="3"/>
      <text x="${x}" y="${y - 36}" text-anchor="middle" style="font-weight:700">${esc(l.nome)}</text><text x="${x}" y="${y + 4}" text-anchor="middle" style="font-size:10px;fill:#0d0f1a;font-weight:700">${esc(l.poder)}</text></g>`;
  });
  const pequeno = S.personagens.length > 60;
  S.personagens.forEach(p => {
    if (!pos[p.id]) return;
    const [x, y, a] = pos[p.id], l = linDe(p), r = p.rank === "S" ? 11 : p.rank === "A" ? 9 : 7;
    const deg = a * 180 / Math.PI, flip = Math.cos(a) < 0;
    h += `<g class="n ${dim(p.id)}" data-id="${p.id}"><circle cx="${x}" cy="${y}" r="${r}" fill="${l.cor}" stroke="${sel === p.id ? "#fff" : "#0d0f1a"}" stroke-width="2"/>
      ${pequeno && sel !== p.id ? "" : `<text transform="translate(${x},${y}) rotate(${flip ? deg + 180 : deg})" x="${flip ? -16 : 16}" y="4" text-anchor="${flip ? "end" : "start"}" style="font-size:11px">${esc(p.nome)}</text>`}</g>`;
  });
  svg.innerHTML = h;
  svg.querySelectorAll(".n").forEach(g => g.onclick = e => { e.stopPropagation(); sel = sel === g.dataset.id ? null : g.dataset.id; mapa(); detalhe(); });
  svg.onclick = () => { sel = null; mapa(); detalhe(); };
}

function detalhe() {
  const d = $("#detalhe");
  const l = S.linhagens.find(x => x.id === sel), p = persDe(sel);
  if (l) {
    const m = S.personagens.filter(x => x.lin === l.id);
    d.innerHTML = `<h3><span class="dot" style="--c:${l.cor}"></span>${esc(l.nome)}</h3>
      <p><b>Poder:</b> ${esc(l.poder)}<br><b>Efeito:</b> ${esc(l.efeito)}<br><b>Fraqueza:</b> ${esc(l.fraqueza)}</p>
      <p class="muted">${m.length} membros</p><ul>${m.map(x => `<li>${esc(x.nome)} <span class="pill">${x.rank}</span></li>`).join("")}</ul>`;
  } else if (p) {
    const lin = linDe(p);
    d.innerHTML = `<h3>${esc(p.nome)} <span class="pill">Rank ${p.rank}</span></h3>
      <p><span class="dot" style="--c:${lin.cor}"></span><b>${esc(lin.nome)}</b><br><b>Poder herdado:</b> ${esc(lin.poder)}<br>
      <b>Técnica própria:</b> ${esc(p.tecnica)}<br><b>Fraqueza:</b> ${esc(lin.fraqueza)}</p>
      <p><b>Conexões</b></p><ul>${conexoesDe(p).map(c => `<li>${esc(c.tipo)} de <b>${esc(c.outro.nome)}</b> <span class="muted">(${esc(linDe(c.outro).nome)})</span></li>`).join("") || "<li class='muted'>Nenhuma</li>"}</ul>`;
  } else {
    d.innerHTML = `<h3>${esc(S.nome)}</h3><p>Energia: <b>${esc(S.energia)}</b><br>${S.linhagens.length} linhagens · ${S.personagens.length} personagens</p><p class="muted">Clique numa linhagem ou personagem no mapa.</p>`;
  }
}

function linhagens() {
  $("#linhagens").innerHTML = S.linhagens.map(l => `<article class="card lin" style="--c:${l.cor}" data-id="${l.id}">
    <input data-k="nome" value="${esc(l.nome)}" aria-label="Nome da linhagem">
    <input data-k="poder" value="${esc(l.poder)}" aria-label="Poder">
    <input data-k="efeito" value="${esc(l.efeito)}" aria-label="Efeito">
    <input data-k="fraqueza" value="${esc(l.fraqueza)}" aria-label="Fraqueza">
    <p class="muted">${S.personagens.filter(p => p.lin === l.id).length} membros <button class="btn ghost sm" data-del>Remover</button></p></article>`).join("");
  $("#linhagens").querySelectorAll(".lin").forEach(card => {
    const l = S.linhagens.find(x => x.id === card.dataset.id);
    card.querySelectorAll("input").forEach(i => i.oninput = () => { l[i.dataset.k] = i.value; save(); mapa(); detalhe(); tabelaLinOpcoes(); });
    card.querySelector("[data-del]").onclick = () => {
      if (S.linhagens.length <= 1) return;
      S.linhagens = S.linhagens.filter(x => x !== l);
      S.personagens.forEach(p => { if (p.lin === l.id) p.lin = S.linhagens[0].id; });
      tudo();
    };
  });
}

const opcoesLin = sel => S.linhagens.map(l => `<option value="${l.id}" ${l.id === sel ? "selected" : ""}>${esc(l.nome)}</option>`).join("");
function tabelaLinOpcoes() { document.querySelectorAll("#tabela select[data-k=lin]").forEach(s => { const v = s.value; s.innerHTML = opcoesLin(v); }); }

function tabela() {
  $("#contagem").textContent = `(${S.personagens.length})`;
  $("#tabela tbody").innerHTML = S.personagens.map(p => `<tr data-id="${p.id}">
    <td><input data-k="nome" value="${esc(p.nome)}"></td>
    <td><select data-k="lin">${opcoesLin(p.lin)}</select></td>
    <td class="pw">${esc(linDe(p).poder)}</td>
    <td><input data-k="tecnica" value="${esc(p.tecnica)}"></td>
    <td><select data-k="rank">${P.ranks.map(r => `<option ${r === p.rank ? "selected" : ""}>${r}</option>`).join("")}</select></td>
    <td class="muted">${conexoesDe(p).map(c => esc(c.tipo + ": " + c.outro.nome)).join("<br>")}</td>
    <td><button class="btn ghost sm" data-del>✕</button></td></tr>`).join("");
  $("#tabela tbody").querySelectorAll("tr").forEach(tr => {
    const p = persDe(tr.dataset.id);
    tr.querySelectorAll("[data-k]").forEach(i => {
      i[i.tagName === "SELECT" ? "onchange" : "oninput"] = () => {
        p[i.dataset.k] = i.value;
        if (i.dataset.k === "lin") { tr.querySelector(".pw").textContent = linDe(p).poder; linhagens(); }
        save(); mapa(); detalhe();
      };
    });
    tr.querySelector("[data-del]").onclick = () => {
      S.personagens = S.personagens.filter(x => x !== p);
      S.personagens.forEach(o => o.conex = o.conex.filter(c => c.id !== p.id));
      if (sel === p.id) sel = null;
      tudo();
    };
  });
}

// Controles
$("#gerar").onclick = () => { S = gerar(+$("#sLin").value || 8, Math.max(1, +$("#sPers").value || 30)); sel = null; tudo(); };
$("#sNome").oninput = () => { S.nome = $("#sNome").value; save(); mapa(); detalhe(); };
$("#sEnergia").oninput = () => { S.energia = $("#sEnergia").value; save(); mapa(); detalhe(); };
$("#addLin").onclick = () => {
  const livres = P.poderes.filter(x => !S.linhagens.some(l => l.poder === x[0]));
  const pw = livres.length ? rand(livres) : ["Novo Poder", "Descreva o efeito", "Descreva a fraqueza"];
  const cla = rand(P.clas.filter(c => !S.linhagens.some(l => l.nome === "Clã " + c))) || "Novo";
  S.linhagens.push({ id: uid(), nome: "Clã " + cla, cor: `hsl(${Math.floor(Math.random() * 360)},75%,62%)`, poder: pw[0], efeito: pw[1], fraqueza: pw[2] });
  tudo();
};
$("#addPers").onclick = () => {
  const l = rand(S.linhagens);
  S.personagens.push({ id: uid(), nome: rand(P.nomes) + " " + l.nome.replace("Clã ", ""), lin: l.id, tecnica: `${rand(P.tecnicas)} de ${l.poder}`, rank: "E", conex: [] });
  tudo();
};
$("#exportar").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: "application/json" }));
  a.download = (S.nome || "sistema").replace(/\W+/g, "-") + ".json"; a.click();
};
$("#importar").onchange = async e => {
  try {
    const d = JSON.parse(await e.target.files[0].text());
    if (!Array.isArray(d.linhagens) || !Array.isArray(d.personagens)) throw 0;
    S = d; sel = null; $("#sNome").value = S.nome; $("#sEnergia").value = S.energia; tudo();
  } catch { alert("Arquivo inválido."); }
};

$("#sNome").value = S.nome; $("#sEnergia").value = S.energia;
tudo();
})();
