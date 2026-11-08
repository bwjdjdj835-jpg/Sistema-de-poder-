// Seus animes autorais. Este arquivo é a cópia salva no repositório.
// Edições feitas no app ficam no navegador; use "Copiar dados" e mande para salvar aqui.
// Textos marcados "(rascunho)" foram tirados das fichas de personagem e precisam da sua confirmação.
window.MEUS_VERSAO = 3;
window.MEUS_ANIMES = [
  {
    id: "anime-1",
    titulo: "Anime 1 — Semideuses (nome a definir)",
    status: "Em criação",
    sinopse: "Deuses e semideuses usam o Hari, o poder divino, cada um com seu domínio. O Kore (Core) é o poder vital dos humanos, passado por famílias: cada cor é uma linhagem com um poder próprio, que evolui da era ancestral até 2026.",
    sistemas: [
      {
        nome: "Hari", tipo: "Divino",
        descricao: "Poder divino dos deuses e semideuses. Cada um tem o seu domínio (morte, retorno, vida, sol, um mundo...). Não precisa de outro sistema.",
        regras: ["Exclusivo de deuses e semideuses", "Cada um tem o seu domínio"]
      },
      {
        nome: "Kore", tipo: "Vital (famílias)",
        descricao: "Poder vital passado por famílias. Cada família tem uma cor e um poder único. Todas passaram pelas mesmas cinco eras: ancestral, clãs, reinos, escolas e 2026.",
        regras: ["Uma cor = uma família = um poder", "O poder é herdado e evolui a cada geração", "Cinco eras: Ancestral, Clãs, Reinos, Escolas, 2026", "Cada herdeiro de 2026 tem um estilo próprio dentro do poder da família"],
        familias: [
          { nome: "Kore Amarelo", cor: "#e8b923", poder: "Eletricidade e trovão", resumo: "Transforma energia vital em eletricidade e ataques de trovão. Primeira linhagem: a Anciã (filamento estável), a Guardiã, o Batedor (pulso nos pés) e o Aprendiz (faísca irregular).", eras: ["Geração 1: Despertar", "Geração 2: Bola elétrica", "Geração 3: Raios direcionados", "Geração 4: Aura e trovão", "Geração 5: Kael (2026)"], imagens: ["img/kore-amarelo-geracoes.jpg", "img/kore-amarelo-primeira-linhagem.jpg"] },
          { nome: "Kore Vermelho", cor: "#d6453d", poder: "Energia explosiva", resumo: "Núcleo no peito que acumula energia e a conduz pelos canais do braço até a palma. Limite: o próprio corpo. Potencial para destruir montanhas.", eras: ["Era ancestral: Primeiros pulsos", "Era dos clãs: Acúmulo controlado", "Era dos reinos: Descarga dirigida", "Era das escolas: Compressão e resistência", "2026: Herança explosiva"], imagens: ["img/kore-vermelho.jpg"] },
          { nome: "Kore Branco", cor: "#e9e6dc", poder: "Força", resumo: "Reforço do corpo: força sem volume excessivo, resistência, transferência de força pelo corpo e controle fino.", eras: ["Era ancestral: Força desperta", "Era dos clãs: Corpo resistente", "Era dos reinos: Impacto e sustentação", "Era das escolas: Força concentrada", "2026: Força em escala colossal"], imagens: ["img/kore-branco.jpg"] },
          { nome: "Kore Azul (Família Ghost)", cor: "#4f86c6", poder: "Água e reflexos", resumo: "A família Ghost controla a água e usa reflexos. Símbolo de três pontas e lâmina escura.", eras: ["Era ancestral: Primeiras gotas", "Formação da linhagem: Fluxo estável", "Tradição Ghost: Água e reflexos", "Herança dos mestres: Controle refinado", "2026: Herdeiro Ghost"], imagens: ["img/kore-azul-ghost.jpg"] },
          { nome: "Kore Verde", cor: "#5a9a4a", poder: "Vegetação", resumo: "Faz brotar, crescer e guiar plantas, raízes e galhos.", eras: ["Era ancestral: O primeiro broto", "Era dos clãs: Cultivo e raízes", "Era dos reinos: Proteção vegetal", "Era das escolas: Arquitetura viva", "2026: Restauração e convivência"], imagens: ["img/kore-verde.jpg"] },
          { nome: "Kore Marrom", cor: "#8b5e3c", poder: "Terra", resumo: "Da primeira pedra movida às cidades construídas em conjunto: grãos, argila, pedra e construção.", eras: ["Primeiro período: Despertar ancestral", "Segundo período: Formação dos clãs", "Terceiro período: Era dos reinos", "Quarto período: Transmissão organizada", "Quinto período: 2026 (construção e resgate)"], imagens: ["img/kore-marrom.jpg"] },
          { nome: "Kore Preto", cor: "#3a3340", poder: "Sombras", resumo: "A sombra ganha volume, vira criatura, se solidifica e permite atravessar de uma sombra a outra (Passo na Sombra).", eras: ["Era ancestral: A sombra responde", "Era dos clãs: Primeiras criaturas", "Era dos reinos: Sombras solidificadas", "Era das escolas: Passo na Sombra", "2026: Forma, criatura e passagem"], imagens: ["img/kore-preto.jpg"] },
          { nome: "Kore Roxo", cor: "#8a5cc2", poder: "Evocação de criaturas", resumo: "Linhagem dos Evocadores: criam vínculo com criaturas de energia e as chamam.", eras: ["Era ancestral: Primeiro chamado", "Era dos clãs: Vínculos estáveis", "Era dos reinos: Evocação coordenada", "Unificação: Escolas de evocação", "2026: Nação dos evocadores"], imagens: ["img/kore-roxo.jpg"] }
        ]
      }
    ],
    personagens: [
      { nome: "Kael", titulo: "Herdeiro do Kore Amarelo (geração 5, 2026)", sistema: "Kore", familia: "Kore Amarelo", poder: "Eletricidade e trovão: controle, arrancada e trovão", descricao: "Cabelo vermelho espetado, palito na boca, sempre comendo um lanche. Expressões: sorriso de canto, gargalhada, olhar provocador. A ficha do Karl parece uma versão anterior dele.", imagem: "img/kael.jpg", imagens: ["img/karl.jpg"] },
      { nome: "Herdeiro do Kore Vermelho (nome a definir)", titulo: "Herdeiro do Kore Vermelho, 19 anos", sistema: "Kore", familia: "Kore Vermelho", poder: "Energia explosiva com núcleo no peito", descricao: "Três estados: contenção, carregamento e raiva extrema. Potencial destrutivo de até 50 km; sob raiva extrema, até 4 mil km. Fica exausto ao interromper o carregamento.", imagem: "img/herdeiro-kore-vermelho.jpg" },
      { nome: "Nareva", titulo: "Herdeira do Kore Branco, 22 anos", sistema: "Kore", familia: "Kore Branco", poder: "Força com técnica e precisão", descricao: "\"A técnica veio antes da força.\" Cabelo branco, faixas nas mãos. Segura um copo comum com delicadeza e quebra pedras sem se transformar.", imagem: "img/nareva-2.jpg", imagens: ["img/nareva-1.jpg"] },
      { nome: "Herdeiro Ghost (nome a definir)", titulo: "Herdeiro do Kore Azul, 2026", sistema: "Kore", familia: "Kore Azul (Família Ghost)", poder: "Água e reflexos, com lâmina", descricao: "Cabelo azul, capa escura com o símbolo da família e uma lâmina preta.", imagem: "img/kore-azul-ghost.jpg" },
      { nome: "Herdeiro do Kore Verde (nome a definir)", titulo: "Herdeiro do Kore Verde, 2026", sistema: "Kore", familia: "Kore Verde", poder: "Cria florestas e controla até 500 galhos", descricao: "Mecha verde no cabelo. Ataca e defende ao mesmo tempo com galhos.", imagem: "img/herdeiro-kore-verde.jpg" },
      { nome: "Colapso", titulo: "Academia Sekai, 2026", sistema: "Kore", familia: "A definir", poder: "Atração e repulsão (força de 1 a 60 mil)", descricao: "Cabelo branco, uniforme da Academia Sekai. Origem compartilhada com o Rei Demônio.", imagem: "img/colapso.jpg" },
      { nome: "Auren", titulo: "O Primeiro Amanhecer", sistema: "Kore", familia: "A definir", poder: "Costelas solares que se abrem e liberam luz", descricao: "Felino de cabelo branco e capa azul. As costelas são placas escuras que brilham e se abrem num estado extremo de luz.", imagem: "img/auren-1.jpg", imagens: ["img/auren-2.jpg"] },
      { nome: "Orun", titulo: "O Forjador das Feras / O Pai das Primeiras Feras", sistema: "Kore", familia: "A definir", poder: "Formação biológica: cria feras a partir de energia", descricao: "Forma feras camada por camada: energia, esqueleto, músculos, corpo. Também cuida das primeiras feras (dinossauros, aves, répteis marinhos) como um pai.", imagem: "img/orun-forjador.jpg", imagens: ["img/orun-pai.jpg"] },
      { nome: "Ívar", titulo: "O Escultor do Vivo", sistema: "Kore", familia: "A definir", poder: "Esculpe seres vivos com energia", descricao: "Modela pequenas criaturas de energia azul com as mãos, como um escultor. Carrega um estojo de ferramentas e sementes.", imagem: "img/ivar.jpg" },
      { nome: "Nér", titulo: "A Primeira Testemunha", sistema: "Kore", familia: "A definir", poder: "Observação; esfera negra no peito", descricao: "Gato preto de olhos vermelhos com três formas: Primordial, Visitante e Observador. Possível ligação com o Deus Observador: a confirmar.", imagem: "img/ner.jpg" },
      { nome: "Vorgo", titulo: "O Devorador de Hari", sistema: "Kore", familia: "A definir", poder: "Absorve Hari, armazena e dispara", descricao: "Tartaruga gigante. Absorve energia Hari pela palma, guarda no abdômen expansível e dispara pela abertura do peito. Três estados: repouso, energia armazenada, disparo. Enfrenta monstros de energia Hari.", imagem: "img/vorgo.jpg" },
      { nome: "Ancestral Leão", titulo: "Guardião criado pelo Deus Observador", sistema: "Kore", familia: "A definir", poder: "Energia dourada na juba e no corpo", descricao: "Leão bípede e quadrúpede, olhos dourados, cicatrizes e marcas antigas no peito.", imagem: "img/ancestral-leao.jpg" },
      { nome: "Ancestral Dragão", titulo: "Ancestral", sistema: "Kore", familia: "A definir", poder: "A definir", descricao: "Dragão verde-escuro com placas ventrais claras, chifres e bigodes.", imagem: "img/ancestral-dragao.jpg" },
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
