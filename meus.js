(() => {
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const KEY = "forja-meus-v1";
const copia = o => JSON.parse(JSON.stringify(o));
let M, atual = 0, filtro = "";

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
  const lista = A.personagens.map((p, i) => [p, i]).filter(([p]) => !filtro || (filtro === "__sem" ? !p.sistema : p.sistema === filtro));
  $("#meuAnime").innerHTML = `
    <div class="cabecalho">
      <label>Nome do anime <input id="mTitulo" value="${esc(A.titulo)}"></label>
      <label>Status <input id="mStatus" value="${esc(A.status)}"></label>
      <label class="largo">Sinopse <textarea id="mSinopse" rows="2">${esc(A.sinopse)}</textarea></label>
    </div>
    <h2 class="sec">Sistemas de poder <span class="muted">(${A.sistemas.length})</span> <button class="btn ghost sm" id="mAddSis">+ Sistema</button></h2>
    <div class="cards">${A.sistemas.map((s, i) => `<article class="card sis" data-i="${i}">
      <div class="linha"><input data-k="nome" value="${esc(s.nome)}" class="forte" aria-label="Nome do sistema"><input data-k="tipo" value="${esc(s.tipo)}" aria-label="Tipo" class="tipo"></div>
      <textarea data-k="descricao" rows="3" aria-label="Descrição">${esc(s.descricao)}</textarea>
      <label class="muted mini">Regras (uma por linha)</label>
      <textarea data-k="regras" rows="3" aria-label="Regras">${esc((s.regras || []).join("\n"))}</textarea>
      ${(() => { const f = [...new Set(A.personagens.filter(p => p.sistema === s.nome && p.familia).map(p => p.familia))]; return f.length ? `<p class="mini"><b>Famílias:</b> ${f.map(esc).join(", ")}</p>` : ""; })()}
      <p class="muted mini">${A.personagens.filter(p => p.sistema === s.nome).length} personagens · <button class="btn ghost sm" data-del>Remover</button></p>
    </article>`).join("") || `<p class="muted">Nenhum sistema ainda. Clique em + Sistema.</p>`}</div>
    <h2 class="sec">Personagens <span class="muted">(${A.personagens.length})</span> <button class="btn ghost sm" id="mAddPers">+ Personagem</button></h2>
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
      <button class="btn ghost sm" data-del>Remover personagem</button>
    </article>`).join("")}</div>`;

  $("#mTitulo").oninput = e => { A.titulo = e.target.value; save(); $("#meusLista .chip.on").textContent = A.titulo; };
  $("#mStatus").oninput = e => { A.status = e.target.value; save(); };
  $("#mSinopse").oninput = e => { A.sinopse = e.target.value; save(); };
  $("#mAddSis").onclick = () => { A.sistemas.push({ nome: "Novo sistema", tipo: "", descricao: "", regras: [] }); save(); render(); };
  $("#mAddPers").onclick = () => { A.personagens.push({ nome: "Novo personagem", titulo: "", sistema: filtro === "__sem" ? "" : filtro, familia: "", poder: "", descricao: "", imagem: "" }); filtro = ""; save(); render(); };
  document.querySelectorAll("#meuAnime .filtros .chip").forEach(b => b.onclick = () => { filtro = b.dataset.f; render(); });

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

// Usado pelo PDF/TXT
window.meusTexto = () => M.map(a => [
  `${a.titulo} [${a.status}]`, a.sinopse, "Sistemas de poder:",
  ...a.sistemas.map(s => `  * ${s.nome} (${s.tipo}): ${s.descricao}${(s.regras || []).length ? "\n" + s.regras.map(r => "      - " + r).join("\n") : ""}`),
  "Personagens:",
  ...a.personagens.map(p => `  - ${p.nome} — ${p.titulo}${p.sistema ? " · " + p.sistema : ""}${p.familia ? " · família: " + p.familia : ""}: ${p.poder}. ${p.descricao}`), ""
].join("\n")).join("\n");
window.meusHtml = () => M.map(a => `<div class="bloco"><h3>${esc(a.titulo)}</h3><p><i>${esc(a.status)}</i></p><p>${esc(a.sinopse)}</p>
  ${a.sistemas.map(s => `<p><b>${esc(s.nome)}</b> (${esc(s.tipo)}): ${esc(s.descricao)}</p>${(s.regras || []).length ? `<ul>${s.regras.map(r => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}`).join("")}
  <ul>${a.personagens.map(p => `<li><b>${esc(p.nome)}</b> — ${esc(p.titulo)}${p.sistema ? " · " + esc(p.sistema) : ""}${p.familia ? " · família: " + esc(p.familia) : ""}: ${esc(p.poder)}. ${esc(p.descricao)}</li>`).join("")}</ul></div>`).join("");

render();
})();
