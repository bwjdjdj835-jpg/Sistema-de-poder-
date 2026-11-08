// Seus animes autorais. Este arquivo é a cópia salva no repositório.
// Edições feitas no app ficam no navegador; use "Copiar dados" e mande para salvar aqui.
// Textos marcados "(rascunho)" foram tirados das fichas de personagem e precisam da sua confirmação.
window.MEUS_ANIMES = [
  {
    id: "anime-1",
    titulo: "Anime 1 — Semideuses (nome a definir)",
    status: "Em criação",
    sinopse: "Deuses e semideuses usam o Hari, o poder divino, cada um com seu domínio. O Core é o poder vital, passado pelas famílias.",
    sistemas: [
      {
        nome: "Hari", tipo: "Divino",
        descricao: "Poder divino dos deuses e semideuses. Cada um tem o seu domínio (morte, retorno, vida, sol, um mundo...). Não precisa de outro sistema.",
        regras: ["Exclusivo de deuses e semideuses", "Cada um tem o seu domínio"]
      },
      {
        nome: "Core", tipo: "Vital",
        descricao: "Poder vital, organizado por famílias. Cada família tem o seu poder, herdado dos ancestrais. As famílias e como se conectam: a definir (aguardando dados).",
        regras: ["Passado pelas famílias (linhagem)", "Cada família tem um poder diferente", "Famílias: aguardando dados"]
      }
    ],
    personagens: [
      { nome: "Auren", titulo: "O Primeiro Amanhecer", sistema: "Core", familia: "A definir", poder: "Costelas solares que se abrem e liberam luz", descricao: "Felino de cabelo branco e capa azul. As costelas são placas escuras que brilham e se abrem num estado extremo de luz.", imagem: "img/auren-1.jpg", imagens: ["img/auren-2.jpg"] },
      { nome: "Orun", titulo: "O Forjador das Feras / O Pai das Primeiras Feras", sistema: "Core", familia: "A definir", poder: "Formação biológica: cria feras a partir de energia", descricao: "Forma feras camada por camada: energia, esqueleto, músculos, corpo. Também cuida das primeiras feras (dinossauros, aves, répteis marinhos) como um pai.", imagem: "img/orun-forjador.jpg", imagens: ["img/orun-pai.jpg"] },
      { nome: "Ívar", titulo: "O Escultor do Vivo", sistema: "Core", familia: "A definir", poder: "Esculpe seres vivos com energia", descricao: "Modela pequenas criaturas de energia azul com as mãos, como um escultor. Carrega um estojo de ferramentas e sementes.", imagem: "img/ivar.jpg" },
      { nome: "Nér", titulo: "A Primeira Testemunha", sistema: "Core", familia: "A definir", poder: "Observação; esfera negra no peito", descricao: "Gato preto de olhos vermelhos com três formas: Primordial, Visitante e Observador. Possível ligação com o Deus Observador: a confirmar.", imagem: "img/ner.jpg" },
      { nome: "Vorgo", titulo: "O Devorador de Hari", sistema: "Core", familia: "A definir", poder: "Absorve Hari, armazena e dispara", descricao: "Tartaruga gigante. Absorve energia Hari pela palma, guarda no abdômen expansível e dispara pela abertura do peito. Três estados: repouso, energia armazenada, disparo. Enfrenta monstros de energia Hari.", imagem: "img/vorgo.jpg" },
      { nome: "Ancestral Leão", titulo: "Guardião criado pelo Deus Observador", sistema: "Core", familia: "A definir", poder: "Energia dourada na juba e no corpo", descricao: "Leão bípede e quadrúpede, olhos dourados, cicatrizes e marcas antigas no peito.", imagem: "img/ancestral-leao.jpg" },
      { nome: "Ancestral Dragão", titulo: "Ancestral", sistema: "Core", familia: "A definir", poder: "A definir", descricao: "Dragão verde-escuro com placas ventrais claras, chifres e bigodes.", imagem: "img/ancestral-dragao.jpg" },
      { nome: "Deus Observador", titulo: "Deus", sistema: "Hari", poder: "Observação absoluta", descricao: "Gato preto de olhos vermelhos e manto branco. Segura uma esfera negra com anel vermelho; vive numa torre flutuante com um olho. Expressões: curiosidade discreta, indiferença divina, atenção absoluta.", imagem: "img/deus-observador.jpg" },
      { nome: "Semideus da Morte", titulo: "Semideus", sistema: "Hari", poder: "Domínio da morte (rascunho)", descricao: "Casaco cinza com forro vermelho e pistola de plasma Hellfire. Aparece guiado pelos sentidos: segue fitas de cheiro e arcos de som.", imagem: "img/semideus-da-morte.jpg" },
      { nome: "Semideus do Mundo Azul", titulo: "Semideus", sistema: "Hari", poder: "Cria e guarda um mundo de cristal", descricao: "Carrega na mão uma esfera com um mundo azul de cristal e seus golems. Marcas azuis no rosto. (rascunho)", imagem: "img/semideus-mundo-azul.jpg" },
      { nome: "Semideus do Retorno", titulo: "Semideus", sistema: "Hari", poder: "Reverte matéria ao estado anterior", descricao: "Desfaz catástrofes no universo Kore: moléculas voltam à configuração anterior, fragmentos se juntam, trajetórias cósmicas se invertem. Precisa permanecer vivo para agir.", imagem: "img/semideus-retorno.jpg" },
      { nome: "Semideus do Sol (nome a definir)", titulo: "Semideus", sistema: "Hari", poder: "Estrela no peito, chamas (rascunho)", descricao: "Núcleo solar no peito, rachaduras luminosas pelo corpo e chama na mão. Ligado a uma cidade flutuante no espaço.", imagem: "img/semideus-sol.jpg" },
      { nome: "Semideus da Vida (nome a definir)", titulo: "Semideus", sistema: "Hari", poder: "Vida e genética (rascunho)", descricao: "Coroa de folhas, veias verdes luminosas. Manipula DNA, sementes e plantas; ligado a jardins de cristal no espaço.", imagem: "img/semideus-vida.jpg" },
      { nome: "Semideus da Pré-história (nome a definir)", titulo: "Semideus", sistema: "Hari", poder: "Argila luminosa que vira seres pré-históricos", descricao: "Manto de folhas e concha de amonite. A argila luminosa nas mãos se organiza em pele, penas e escamas, criando animais pré-históricos. (rascunho)", imagem: "img/semideus-pre-historia.jpg" },
      { nome: "Cientista da Evolução (nome a definir)", titulo: "A definir", sistema: "", poder: "Evolução de criaturas (rascunho)", descricao: "Jaleco claro, monóculo e frascos no cinto. Faz um micróbio evoluir até plantas e criaturas.", imagem: "img/cientista-evolucao.jpg" },
      { nome: "Leopardo das Chamas (nome a definir)", titulo: "A definir", sistema: "", poder: "Fogo nas mãos e auréola de luz (rascunho)", descricao: "Leopardo-das-neves com chamas nas duas mãos e um ponto de luz no peito que se espalha pelo corpo.", imagem: "img/leopardo-chamas.jpg" },
      { nome: "Rapaz da Pistola (nome a definir)", titulo: "A definir", sistema: "", poder: "Aparição guiada pelos sentidos (rascunho)", descricao: "Usa a mesma pistola de plasma do Semideus da Morte e o mesmo tipo de aparição. Possível ligação com ele: a definir.", imagem: "img/rapaz-pistola.jpg" },
      { nome: "Mestre dos Tecidos (nome a definir)", titulo: "A definir", sistema: "", poder: "Dá força e forma a objetos e tecidos (rascunho)", descricao: "Velho mestre com marcas douradas nos braços. Treina um garoto numa arena com golems de pedra.", imagem: "img/mestre-tecidos.jpg" }
    ]
  },
  {
    id: "anime-2",
    titulo: "Anime 2 (nome a definir)",
    status: "Só o protagonista",
    sinopse: "A definir.",
    sistemas: [],
    personagens: [
      { nome: "Protagonista (aguardando dados)", titulo: "Protagonista", sistema: "", poder: "A definir", descricao: "Mande a ficha do protagonista para eu salvar aqui.", imagem: "" }
    ]
  }
];
