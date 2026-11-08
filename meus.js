(() => {
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const KEY = "forja-meus-v" + (window.MEUS_VERSAO || 1);
const copia = o => JSON.parse(JSON.stringify(o));
let M, atual = 0, filtro = "", filtroFam = "";

try { M = JSON.parse(localStorage.getItem(KEY)); } catch {}
if (!Array.isArray(M)) M = copia(window.MEUS_ANIMES || []);
// Animes novos do arquivo salvo entram mesmo se o navegador já tiver dados
(window.MEUS_ANIMES || []).forEach(a => { if (!M.some(x => x.id === a.id)) M.push(copia(a)); });

function aviso(t) { $("#meusAviso").textContent = t; clearTimeout(aviso.t); aviso.t = setTimeout(() => $("#meusAviso").textContent = "", 4000); }
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(M)); }
  catch { aviso("O navegador ficou sem espaço. Use imagens menores ou clique em Copiar dados e me mande."); }
}

function render() {
  if (!M.length) M.push({ id: "anime-" + Date.now(), titulo: "Novo anime", status: "", sinopse: "", sistemas: [], personagens: [] });
  atual = Math.min(atual, M.length - 1);
  const A = M[atual];
  $("#meusLista").innerHTML = M.map((a, i) => `<button class="chip ${i === atual ? "on" : ""}" data-i="${i}">${esc(a.titulo)}</button>`).join("");
  $("#meusLista").querySelectorAll(".chip").forEach(b => b.onclick = () => { atual = +b.dataset.i; filtro = ""; render(); });

  const nomesSis = A.sistemas.map(s => s.nome);
  const lista = A.personagens.map((p, i) => [p, i]).filter(([p]) => (!filtro || (filtro === "__sem" ? !p.sistema : p.sistema === filtro)) && (!filtroFam || p.familia === filtroFam));
  $("#meuAnime").innerHTML = `
    <div class="cabecalho">
      <label>Nome do anime <input id="mTitulo" value="${esc(A.titulo)}"></label>
      <label>Status <input id="mStatus" value="${esc(A.status)}"></label>
      <label class="largo">Cidade / onde se passa <input id="mCidade" value="${esc(A.cidade || "")}" placeholder="Ex.: Nova York, 2026"></label>
      <label class="largo">Sinopse <textarea id="mSinopse" rows="2">${esc(A.sinopse)}</textarea></label>
    </div>
    <h2 class="sec">Sistemas de poder <span class="muted">(${A.sistemas.length})</span> <button class="btn ghost sm" id="mAddSis">+ Sistema</button></h2>
    <div class="cards">${A.sistemas.map((s, i) => `<article class="card sis" data-i="${i}">
      <div class="linha"><input data-k="nome" value="${esc(s.nome)}" class="forte" aria-label="Nome do sistema"><input data-k="tipo" value="${esc(s.tipo)}" aria-label="Tipo" class="tipo"></div>
      <textarea data-k="descricao" rows="3" aria-label="Descrição">${esc(s.descricao)}</textarea>
      ${(s.imagens || []).length ? `<div class="extras">${s.imagens.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener"><img src="${esc(u)}" alt="Imagem do sistema ${esc(s.nome)}" loading="lazy"></a>`).join("")}</div>` : ""}
      <label class="muted mini">Regras (uma por linha)</label>
      <textarea data-k="regras" rows="3" aria-label="Regras">${esc((s.regras || []).join("\n"))}</textarea>
      ${(() => { const f = [...new Set(A.personagens.filter(p => p.sistema === s.nome && p.familia).map(p => p.familia))]; return f.length ? `<p class="mini"><b>Famílias:</b> ${f.map(esc).join(", ")}</p>` : ""; })()}
      <p class="muted mini">${A.personagens.filter(p => p.sistema === s.nome).length} personagens · <button class="btn ghost sm" data-del>Remover</button></p>
    </article>`).join("") || `<p class="muted">Nenhum sistema ainda. Clique em + Sistema.</p>`}</div>
    ${A.sistemas.filter(s => (s.familias || []).length).map((s, si) => familiasHtml(A, s)).join("")}
    <h2 class="sec">Personagens <span class="muted">(${A.personagens.length})</span> <button class="btn ghost sm" id="mAddPers">+ Personagem</button></h2>
    ${filtroFam ? `<p class="mini">Mostrando a família <b>${esc(filtroFam)}</b> · <button class="btn ghost sm" id="mLimpaFam">Mostrar todos</button></p>` : ""}
    <div class="filtros"><button class="chip ${!filtro ? "on" : ""}" data-f="">Todos</button><button class="chip ${filtro === "__sem" ? "on" : ""}" data-f="__sem">Sem sistema</button>${nomesSis.map(n => `<button class="chip ${filtro === n ? "on" : ""}" data-f="${esc(n)}">${esc(n)}</button>`).join("")}</div>
    <div class="cards pers">${lista.map(([p, i]) => `<article class="card per" data-i="${i}">
      ${p.imagem ? `<a href="${esc(p.imagem)}" target="_blank" rel="noopener"><img src="${esc(p.imagem)}" alt="Ficha de ${esc(p.nome)}" loading="lazy"></a>` : `<div class="semimg">Sem imagem</div>`}
      ${(p.imagens || []).length ? `<div class="extras">${p.imagens.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener"><img src="${esc(u)}" alt="Outra ficha de ${esc(p.nome)}" loading="lazy"></a>`).join("")}</div>` : ""}
      <label class="btn ghost sm file">Trocar imagem<input type="file" accept="image/*" data-img hidden></label>
      <input data-k="nome" value="${esc(p.nome)}" class="forte" aria-label="Nome">
      <div class="linha"><input data-k="titulo" value="${esc(p.titulo)}" aria-label="Título">
      <select data-k="sistema" aria-label="Sistema"><option value="">Sem sistema</option>${nomesSis.map(n => `<option ${n === p.sistema ? "selected" : ""}>${esc(n)}</option>`).join("")}</select></div>
      <label class="mini muted">Família <input data-k="familia" value="${esc(p.familia || "")}" placeholder="Família / linhagem"></label>
      <label class="mini muted">Poder <input data-k="poder" value="${esc(p.poder)}"></label>
      <textarea data-k="descricao" rows="3" aria-label="Descrição">${esc(p.descricao)}</textarea>
      <label class="mini muted">Character design (visual) <textarea data-k="design" rows="3" placeholder="Roupa, cabelo, cores, detalhes do poder">${esc(p.design || "")}</textarea></label>
      <p class="mini"><button class="btn ghost sm" data-prompt>Copiar prompt da ficha</button><button class="btn ghost sm" data-del>Remover personagem</button></p>
    </article>`).join("")}</div>
    <div class="baixarAnime"><b>Baixar só este anime:</b> <button class="btn sm" data-exp="pdf">Baixar PDF</button> <button class="btn ghost sm" data-exp="txt">Baixar TXT</button></div>`;
  $("#meuAnime").insertAdjacentHTML("afterbegin", `<div class="baixarAnime"><b>Baixar só este anime:</b> <button class="btn sm" data-exp="pdf">Baixar PDF</button> <button class="btn ghost sm" data-exp="txt">Baixar TXT</button></div>`);
  document.querySelectorAll("#meuAnime [data-exp]").forEach(b => b.onclick = () => window.exportar[b.dataset.exp](window.meusAnimeAtual()));

  $("#mTitulo").oninput = e => { A.titulo = e.target.value; save(); $("#meusLista .chip.on").textContent = A.titulo; };
  $("#mStatus").oninput = e => { A.status = e.target.value; save(); };
  $("#mCidade").oninput = e => { A.cidade = e.target.value; save(); };
  $("#mSinopse").oninput = e => { A.sinopse = e.target.value; save(); };
  $("#mAddSis").onclick = () => { A.sistemas.push({ nome: "Novo sistema", tipo: "", descricao: "", regras: [] }); save(); render(); };
  $("#mAddPers").onclick = () => { A.personagens.push({ nome: "Novo personagem", titulo: "", sistema: filtro === "__sem" ? "" : filtro, familia: "", poder: "", descricao: "", imagem: "" }); filtro = ""; save(); render(); };
  document.querySelectorAll("#meuAnime .filtros .chip").forEach(b => b.onclick = () => { filtro = b.dataset.f; render(); });
  if ($("#mLimpaFam")) $("#mLimpaFam").onclick = () => { filtroFam = ""; render(); };
  document.querySelectorAll("[data-verfam]").forEach(b => b.onclick = () => { filtroFam = b.dataset.verfam; filtro = ""; render(); $("#meuAnime .pers").scrollIntoView({ behavior: "smooth" }); });
  document.querySelectorAll(".fam").forEach(card => {
    const s = A.sistemas[card.dataset.s], f = s.familias[card.dataset.i];
    card.querySelectorAll("[data-fk]").forEach(el => el.oninput = () => {
      const k = el.dataset.fk;
      if (k === "eras") f.eras = el.value.split("\n").filter(Boolean);
      else if (k === "nome") { const velho = f.nome; f.nome = el.value; A.personagens.forEach(p => { if (p.familia === velho) p.familia = f.nome; }); }
      else f[k] = el.value;
      save();
    });
    card.querySelector("[data-fk=cor]").onchange = render;
    card.querySelector("[data-delfam]").onclick = () => { s.familias.splice(card.dataset.i, 1); save(); render(); };
  });
  document.querySelectorAll("[data-addfam]").forEach(b => b.onclick = () => {
    A.sistemas[b.dataset.addfam].familias.push({ nome: "Nova família", cor: "#888888", poder: "", resumo: "", eras: ["Era ancestral: ", "Era dos clãs: ", "Era dos reinos: ", "Era das escolas: ", "2026: "], imagens: [] });
    save(); render();
  });

  document.querySelectorAll("#meuAnime .sis").forEach(card => {
    const s = A.sistemas[card.dataset.i];
    card.querySelectorAll("[data-k]").forEach(el => el.oninput = () => {
      if (el.dataset.k === "regras") s.regras = el.value.split("\n").filter(Boolean);
      else if (el.dataset.k === "nome") { const velho = s.nome; s.nome = el.value; A.personagens.forEach(p => { if (p.sistema === velho) p.sistema = s.nome; }); }
      else s[el.dataset.k] = el.value;
      save();
    });
    card.querySelectorAll("[data-k=nome]").forEach(el => el.onchange = render);
    card.querySelector("[data-del]").onclick = () => { A.sistemas.splice(card.dataset.i, 1); save(); render(); };
  });

  document.querySelectorAll("#meuAnime .per").forEach(card => {
    const p = A.personagens[card.dataset.i];
    card.querySelectorAll("[data-k]").forEach(el => el[el.tagName === "SELECT" ? "onchange" : "oninput"] = () => { p[el.dataset.k] = el.value; save(); });
    card.querySelector("[data-del]").onclick = () => { A.personagens.splice(card.dataset.i, 1); save(); render(); };
    card.querySelector("[data-prompt]").onclick = async () => {
      const t = `Anime character design sheet, 16:9, light beige background, clean lineart with soft colors. Title: "${p.nome}" — ${p.titulo}. Anime: ${A.titulo}${A.cidade ? ", set in " + A.cidade : ""}. Look: ${p.design || p.descricao}. Power: ${p.poder}${p.familia ? " (" + p.familia + ")" : ""}. Include: full body front, profile and back views; 4 facial expressions; close-ups of hands and power effect; one action pose.`;
      try { await navigator.clipboard.writeText(t); aviso("Prompt copiado. Cole no seu gerador de imagens."); }
      catch { aviso("Não deu para copiar automaticamente."); }
    };
    card.querySelector("[data-img]").onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const img = new Image();
      img.onload = () => {
        const k = Math.min(1, 1000 / Math.max(img.width, img.height)), c = document.createElement("canvas");
        c.width = img.width * k; c.height = img.height * k; c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        p.imagem = c.toDataURL("image/jpeg", .78); URL.revokeObjectURL(img.src); save(); render();
      };
      img.src = URL.createObjectURL(f);
    };
  });
}

$("#meusNovo").onclick = () => { M.push({ id: "anime-" + Date.now(), titulo: "Novo anime", status: "", sinopse: "", sistemas: [], personagens: [] }); atual = M.length - 1; save(); render(); };
$("#meusCopiar").onclick = async () => {
  try { await navigator.clipboard.writeText(JSON.stringify(M, null, 2)); aviso("Dados copiados. Cole e me mande para eu salvar no repositório."); }
  catch { aviso("Não deu para copiar automaticamente."); }
};
$("#meusRestaurar").onclick = () => {
  if ($("#meusRestaurar").dataset.ok !== "1") { $("#meusRestaurar").dataset.ok = "1"; $("#meusRestaurar").textContent = "Confirmar: apagar edições deste navegador"; return; }
  M = copia(window.MEUS_ANIMES || []); atual = 0; filtro = ""; save(); render();
  $("#meusRestaurar").dataset.ok = ""; $("#meusRestaurar").textContent = "Voltar ao salvo"; aviso("Voltou para a versão salva no repositório.");
};

const textoSobre = hex => { const n = parseInt(String(hex).replace("#", ""), 16); if (isNaN(n)) return "#111"; const l = .299 * (n >> 16) + .587 * (n >> 8 & 255) + .114 * (n & 255); return l > 140 ? "#111" : "#fff"; };
function familiasHtml(A, s) {
  const si = A.sistemas.indexOf(s), F = s.familias;
  // mapa: sistema no centro, famílias em volta, herdeiros por fora
  const R1 = 150, R2 = 290; let svg = "";
  F.forEach((f, i) => {
    const a = i / F.length * 2 * Math.PI - Math.PI / 2, x = R1 * Math.cos(a), y = R1 * Math.sin(a);
    const m = A.personagens.filter(p => p.familia === f.nome), setor = 2 * Math.PI / F.length;
    svg += `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="${esc(f.cor)}" stroke-width="3"/>`;
    m.forEach((p, j) => {
      const b = a - setor / 2 + setor * (j + .5) / m.length, px = R2 * Math.cos(b), py = R2 * Math.sin(b), esq = Math.cos(b) < -.2, dir = Math.cos(b) > .2;
      svg += `<line x1="${x}" y1="${y}" x2="${px}" y2="${py}" stroke="${esc(f.cor)}" opacity=".6"/><circle cx="${px}" cy="${py}" r="9" fill="${esc(f.cor)}" stroke="var(--bg)" stroke-width="2"/>
        <text x="${px + (esq ? -14 : dir ? 14 : 0)}" y="${py + (esq || dir ? 4 : py < 0 ? -14 : 22)}" text-anchor="${esq ? "end" : dir ? "start" : "middle"}">${esc(p.nome.replace(/ \(.*\)/, ""))}</text>`;
    });
    svg += `<g class="n" data-verfam="${esc(f.nome)}"><circle cx="${x}" cy="${y}" r="34" fill="${esc(f.cor)}" stroke="var(--bg)" stroke-width="3"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="rotulo" style="fill:${textoSobre(f.cor)}">${esc(f.nome.replace(/^Kore /, "").replace(/ \(.*\)/, ""))}</text></g>`;
  });
  svg += `<circle r="52" fill="var(--acc2)"/><text y="5" text-anchor="middle" class="rotulo claro">${esc(s.nome)}</text>`;
  return `<h2 class="sec">Famílias / raças — ${esc(s.nome)} <span class="muted">(${F.length})</span> <button class="btn ghost sm" data-addfam="${si}">+ Família</button></h2>
    <div class="mapaFam"><svg viewBox="-480 -400 960 800" role="img" aria-label="Mapa das famílias do ${esc(s.nome)}">${svg}</svg><p class="muted mini">Clique numa família para ver os personagens dela.</p></div>
    <div class="cards">${F.map((f, i) => {
      const m = A.personagens.filter(p => p.familia === f.nome);
      return `<article class="card fam" data-s="${si}" data-i="${i}" style="--c:${esc(f.cor)}">
        <div class="linha"><input data-fk="nome" value="${esc(f.nome)}" class="forte" aria-label="Nome da família"><input data-fk="cor" type="color" value="${esc(f.cor)}" aria-label="Cor" class="corInput"></div>
        <label class="mini muted">Poder <input data-fk="poder" value="${esc(f.poder)}"></label>
        <textarea data-fk="resumo" rows="3" aria-label="Resumo">${esc(f.resumo)}</textarea>
        <label class="mini muted">Eras / níveis (um por linha)</label>
        <textarea data-fk="eras" rows="5" aria-label="Eras">${esc((f.eras || []).join("\n"))}</textarea>
        ${(f.imagens || []).length ? `<div class="extras">${f.imagens.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener"><img src="${esc(u)}" alt="Ficha da família ${esc(f.nome)}" loading="lazy"></a>`).join("")}</div>` : ""}
        <p class="mini"><b>Personagens:</b> ${m.length ? m.map(p => esc(p.nome)).join(", ") : "nenhum ainda"}</p>
        <p class="mini"><button class="btn ghost sm" data-verfam="${esc(f.nome)}">Ver personagens</button><button class="btn ghost sm" data-delfam>Remover família</button></p>
      </article>`;
    }).join("")}</div>`;
}

// ---------- PDF / TXT de um anime só ----------
const textoAnime = a => [
  a.titulo.toUpperCase(), a.status ? "Status: " + a.status : "", a.cidade ? "Cidade: " + a.cidade : "", "", a.sinopse, "",
  ...a.sistemas.flatMap(s => [
    `=== SISTEMA DE PODER: ${s.nome} (${s.tipo}) ===`, s.descricao,
    ...(s.regras || []).map(r => "  - " + r), "",
    ...(s.familias || []).flatMap(f => [`> ${f.nome} — ${f.poder}`, "  " + f.resumo, ...(f.eras || []).map(e => "    · " + e),
      "  Personagens: " + (a.personagens.filter(p => p.familia === f.nome).map(p => p.nome).join(", ") || "nenhum ainda"), ""])
  ]),
  `=== PERSONAGENS (${a.personagens.length}) ===`, "",
  ...a.personagens.flatMap(p => [
    `${p.nome} — ${p.titulo}`,
    `  Sistema: ${p.sistema || "sem sistema"}${p.familia ? " · Família: " + p.familia : ""}`,
    `  Poder: ${p.poder}`, `  ${p.descricao}`,
    ...(p.design && p.design !== "Já tem ficha." ? ["  Design: " + p.design] : []), ""
  ])
].join("\n");

const htmlAnime = a => {
  const img = (u, alt) => u ? `<img src="${esc(u)}" alt="${esc(alt)}">` : "";
  const pers = p => `<div class="bloco pessoa">${img(p.imagem, "Ficha de " + p.nome)}<h3>${esc(p.nome)}</h3><p><i>${esc(p.titulo)}</i></p>
    <p><b>Sistema:</b> ${esc(p.sistema || "sem sistema")}${p.familia ? ` · <b>Família:</b> ${esc(p.familia)}` : ""}</p>
    <p><b>Poder:</b> ${esc(p.poder)}</p><p>${esc(p.descricao)}</p>${p.design && p.design !== "Já tem ficha." ? `<p><b>Design:</b> ${esc(p.design)}</p>` : ""}</div>`;
  let h = `<h1>${esc(a.titulo)}</h1><p><i>${esc(a.status || "")}</i>${a.cidade ? ` · <b>Cidade:</b> ${esc(a.cidade)}` : ""}</p><p>${esc(a.sinopse)}</p>`;
  a.sistemas.forEach(s => {
    h += `<h2>Sistema de poder: ${esc(s.nome)} <small>(${esc(s.tipo)})</small></h2><p>${esc(s.descricao)}</p>`;
    if ((s.regras || []).length) h += `<ul>${s.regras.map(r => `<li>${esc(r)}</li>`).join("")}</ul>`;
    (s.imagens || []).forEach(u => h += `<div class="bloco">${img(u, "Imagem de " + s.nome)}</div>`);
    (s.familias || []).forEach(f => {
      const m = a.personagens.filter(p => p.familia === f.nome);
      h += `<div class="bloco"><h3><span class="corFam" style="background:${esc(f.cor)}"></span>${esc(f.nome)} — ${esc(f.poder)}</h3><p>${esc(f.resumo)}</p>
        <ol>${(f.eras || []).map(e => `<li>${esc(e)}</li>`).join("")}</ol><p><b>Personagens:</b> ${m.map(p => esc(p.nome)).join(", ") || "nenhum ainda"}</p>
        ${(f.imagens || []).map(u => img(u, "Ficha da família " + f.nome)).join("")}</div>`;
    });
  });
  h += `<h2 class="quebra">Personagens (${a.personagens.length})</h2>` + a.personagens.map(pers).join("");
  return h;
};
const arquivo = t => (t || "anime").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^\w]+/g, "-").replace(/^-|-$/g, "").toLowerCase();
window.meusAnimeAtual = () => { const a = M[atual]; return { nome: arquivo(a.titulo), titulo: a.titulo, texto: textoAnime(a), html: htmlAnime(a) }; };

render();
})();
