// Seus animes autorais. Este arquivo é a cópia salva no repositório.
// Edições feitas no app ficam no navegador; use "Copiar dados" e mande para salvar aqui.
// Textos marcados "(rascunho)" foram tirados das fichas de personagem e precisam da sua confirmação.
window.MEUS_VERSAO = 4;
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
    "id": "anime-2",
    "titulo": "Caixa de Pandora (nome a definir)",
    "status": "Em criação: 30 personagens propostos",
    "sinopse": "Nova York, 2026. Num túnel abandonado do metrô, um arqueólogo acha a Caixa de Pandora: um artefato alienígena de 5 metros feito pelo Concílio das Sete Raças. Os Anunnaki, líderes do Concílio, foram os criadores dos humanos. A Caixa guarda milhões de DNAs alienígenas e nanites pretos. Cano Curto, de 19 anos, senta na cadeira de escaneamento e tem o DNA reescrito. Agora o Instituto Prometeu quer copiá-lo, e Ensar, um Anunnaki exilado, quer usar a Caixa para refazer a humanidade.",
    "cidade": "Nova York (proposta, por causa do NYR na jaqueta do Cano)",
    "sistemas": [
      {
        "nome": "Caixa de Pandora",
        "tipo": "DNA alienígena + nanites",
        "descricao": "A Caixa escaneia a energia vital e o perfil emocional da pessoa na cadeira. Depois escolhe um DNA do Arquivo Xenogenético e aplica com micro-agulhas. Os nanites pretos integram o DNA ao corpo. Cada pessoa recebe o DNA de uma das 7 raças, e cada raça dá um poder diferente.",
        "regras": [
          "Cada hospedeiro tem uma raça dominante",
          "A compatibilidade depende das emoções na hora do escaneamento",
          "DNA copiado em laboratório (Instituto Prometeu) é instável e cobra do corpo",
          "Os nanites gastam energia: usar o poder dá fome e cansaço",
          "Exceção: Cano Curto carrega as 7 raças; só a Anunnaki despertou"
        ],
        "imagens": [
          "img/caixa-de-pandora.jpg"
        ],
        "familias": [
          {
            "nome": "Anunnaki",
            "cor": "#d4a72c",
            "poder": "Energia e engenharia genética",
            "resumo": "Criadores dos humanos e líderes do Concílio das Sete Raças. O DNA deles libera pulsos de energia vital e permite reescrever o próprio corpo.",
            "eras": [
              "Nível 1: filamentos dourados na pele",
              "Nível 2: pulso de energia pelas mãos",
              "Nível 3: escudo e regeneração celular",
              "Nível 4: reescreve o próprio DNA em combate",
              "Nível 5: lê e altera o DNA de outros (proibido)"
            ],
            "imagens": [
              "img/ezen-anunnaki.jpg"
            ]
          },
          {
            "nome": "Velthari",
            "cor": "#7fc8d8",
            "poder": "Cristal e blindagem",
            "resumo": "Raça de corpos cristalinos de um planeta de alta gravidade. O DNA endurece a pele em placas de cristal.",
            "eras": [
              "Nível 1: pele mais densa",
              "Nível 2: placas de cristal",
              "Nível 3: armadura completa",
              "Nível 4: lança cristais",
              "Nível 5: corpo inteiro de cristal (quase indestrutível, mas lento)"
            ],
            "imagens": []
          },
          {
            "nome": "Ozzrak",
            "cor": "#6f8f3a",
            "poder": "Predador: regeneração e sentidos",
            "resumo": "Caçadores reptilianos. O DNA dá garras, sentidos aguçados e regeneração rápida, mas aumenta a agressividade.",
            "eras": [
              "Nível 1: olfato e visão noturna",
              "Nível 2: garras",
              "Nível 3: regeneração rápida",
              "Nível 4: escamas e força bruta",
              "Nível 5: fúria predadora (perde o controle)"
            ],
            "imagens": []
          },
          {
            "nome": "Myrr",
            "cor": "#3fa7a0",
            "poder": "Telepatia e água",
            "resumo": "Seres aquáticos que vivem em mente coletiva. O DNA permite sentir emoções, ler pensamentos de superfície e mover líquidos.",
            "eras": [
              "Nível 1: sente emoções próximas",
              "Nível 2: move pequenas quantidades de água",
              "Nível 3: lê pensamentos de superfície",
              "Nível 4: ondas e controle de líquidos do corpo",
              "Nível 5: liga várias mentes numa rede"
            ],
            "imagens": []
          },
          {
            "nome": "Siravex",
            "cor": "#9fb63a",
            "poder": "Enxame e colmeia",
            "resumo": "Insectoides que vivem em colmeia. O DNA permite comandar enxames (insetos, nanites, drones) e criar exoesqueleto.",
            "eras": [
              "Nível 1: ouve o zumbido das colmeias",
              "Nível 2: comanda pequenos enxames",
              "Nível 3: exoesqueleto parcial",
              "Nível 4: comanda nanites e drones",
              "Nível 5: mente de colmeia (perde a individualidade)"
            ],
            "imagens": []
          },
          {
            "nome": "Khaal",
            "cor": "#e8642c",
            "poder": "Plasma, luz e calor",
            "resumo": "Seres nascidos perto de estrelas. O DNA gera calor, luz e plasma, e permite voos curtos.",
            "eras": [
              "Nível 1: corpo quente, olhos que brilham",
              "Nível 2: mãos em brasa",
              "Nível 3: rajadas de plasma",
              "Nível 4: voo curto",
              "Nível 5: forma estelar (pode se consumir)"
            ],
            "imagens": []
          },
          {
            "nome": "Noctivar",
            "cor": "#4b3a78",
            "poder": "Vácuo e distorção do espaço",
            "resumo": "Raça do espaço profundo, quase sem corpo físico. O DNA distorce a luz e o espaço: invisibilidade, passos curtos pelo vácuo, peso.",
            "eras": [
              "Nível 1: some das câmeras",
              "Nível 2: invisibilidade parcial",
              "Nível 3: passo de vácuo (teleporte curto)",
              "Nível 4: altera a gravidade local",
              "Nível 5: abre fendas no espaço"
            ],
            "imagens": []
          }
        ]
      }
    ],
    "personagens": [
      {
        "nome": "Cano Curto",
        "titulo": "Protagonista, 19 anos",
        "sistema": "Caixa de Pandora",
        "familia": "Anunnaki",
        "poder": "Pulso de energia; nanites pretos com filamentos laranja nas mãos. É uma anomalia: a Caixa gravou nele DNA das 7 raças, mas só o Anunnaki despertou.",
        "descricao": "Ligação com a Caixa: Foi o primeiro humano em milhares de anos a sentar na cadeira de escaneamento. A Caixa o escolheu e agora só abre com ele.",
        "design": "Já tem ficha.",
        "imagem": "img/cano-curto.jpg"
      },
      {
        "nome": "Ezen",
        "titulo": "Mentor; guardião Anunnaki da Caixa",
        "sistema": "Caixa de Pandora",
        "familia": "Anunnaki",
        "poder": "Escudos e pulso de energia; a pulseira dele é a chave da Caixa.",
        "descricao": "Ligação com a Caixa: Ficou na Terra para vigiar a Caixa. Ensina Cano a controlar o DNA.",
        "design": "Já tem ficha.",
        "imagem": "img/ezen-anunnaki.jpg"
      },
      {
        "nome": "Ensar, o Arquivista Exilado",
        "titulo": "Vilão principal",
        "sistema": "Caixa de Pandora",
        "familia": "Anunnaki",
        "poder": "Nível 5 Anunnaki: lê e reescreve o DNA de outras pessoas.",
        "descricao": "Ligação com a Caixa: Foi um dos construtores da Caixa e foi expulso do Concílio. Quer usar o Arquivo Xenogenético para criar uma 'humanidade 2.0' obediente.",
        "design": "Anunnaki alto, pele cinza-violeta escura, olhos brancos sem pupila, manto branco com placas douradas rachadas e uma coroa de filamentos de dados flutuando atrás da cabeça.",
        "imagem": ""
      },
      {
        "nome": "Dante Kreyl",
        "titulo": "Antagonista; caçador do Instituto Prometeu, 24 anos",
        "sistema": "Caixa de Pandora",
        "familia": "Ozzrak",
        "poder": "Regeneração, garras e faro. O DNA dele é uma cópia de laboratório, instável.",
        "descricao": "Ligação com a Caixa: Recebeu uma amostra roubada da Caixa. Caça Cano para levá-lo ao Instituto, mas tem o próprio código de honra.",
        "design": "Casaco tático preto, cicatrizes que se fecham sozinhas, olhos amarelos em fenda e braço direito coberto de escamas verdes.",
        "imagem": ""
      },
      {
        "nome": "Dra. Helena Voss",
        "titulo": "Diretora do Instituto Prometeu",
        "sistema": "",
        "familia": "",
        "poder": "Nenhum poder; controla a tecnologia de cópia de DNA.",
        "descricao": "Ligação com a Caixa: Quer replicar a Caixa e vender DNA alienígena. Financia Ensar sem saber o plano real dele.",
        "design": "Jaleco branco longo, cabelo grisalho preso, óculos finos, luvas pretas e o crachá do Instituto Prometeu (símbolo de uma chama dentro de um cubo).",
        "imagem": ""
      },
      {
        "nome": "Lia Moraes",
        "titulo": "Melhor amiga, hacker",
        "sistema": "Caixa de Pandora",
        "familia": "Siravex",
        "poder": "Comanda enxames de nanites e drones.",
        "descricao": "Ligação com a Caixa: Estava junto quando Cano abriu a Caixa e recebeu uma dose pequena de nanites.",
        "design": "Moletom amarelo grande, fones no pescoço, óculos com lente rachada e antenas finas de luz que aparecem na testa quando usa o poder.",
        "imagem": ""
      },
      {
        "nome": "Teo 'Bigorna' Batista",
        "titulo": "Aliado, lutador",
        "sistema": "Caixa de Pandora",
        "familia": "Velthari",
        "poder": "Pele de cristal blindada.",
        "descricao": "Ligação com a Caixa: Recebeu o DNA tentando proteger Cano dentro da Caixa.",
        "design": "Grandão de regata, braços e ombros com placas de cristal azul-claro, faixa de boxe nas mãos.",
        "imagem": ""
      },
      {
        "nome": "Nara Okafor",
        "titulo": "Aliada, estudante de medicina",
        "sistema": "Caixa de Pandora",
        "familia": "Myrr",
        "poder": "Sente emoções e move líquidos.",
        "descricao": "Ligação com a Caixa: Atendeu Cano depois da primeira integração e foi contaminada pelos nanites do sangue dele.",
        "design": "Tranças longas, guelras discretas no pescoço, olhos turquesa e jaleco de estágio com mangas dobradas.",
        "imagem": ""
      },
      {
        "nome": "Ícaro Lin",
        "titulo": "Aliado, motoboy",
        "sistema": "Caixa de Pandora",
        "familia": "Khaal",
        "poder": "Calor, luz e voo curto.",
        "descricao": "Ligação com a Caixa: Fazia entregas perto do túnel onde a Caixa foi achada; um fragmento queimou o braço dele.",
        "design": "Jaqueta de motoboy com faixa refletiva, capacete pendurado, cabelo preto com pontas que brilham como brasa.",
        "imagem": ""
      },
      {
        "nome": "Yara Kuen",
        "titulo": "Aliada, ladra",
        "sistema": "Caixa de Pandora",
        "familia": "Noctivar",
        "poder": "Invisibilidade e passo de vácuo.",
        "descricao": "Ligação com a Caixa: Tentou roubar a Caixa para outra pessoa e foi marcada por ela.",
        "design": "Capuz preto, roupa justa cinza, contornos do corpo que 'somem' em partes quando usa o poder.",
        "imagem": ""
      },
      {
        "nome": "Vó Celeste",
        "titulo": "Guardiã humana da chave",
        "sistema": "",
        "familia": "",
        "poder": "Sem poder; conhece a história da Caixa.",
        "descricao": "Ligação com a Caixa: A família dela guardou a localização da Caixa por gerações. É a avó de Cano.",
        "design": "Senhora baixinha de xale vinho, bengala com um cubo entalhado e óculos pendurados num cordão.",
        "imagem": ""
      },
      {
        "nome": "Rafa Curto",
        "titulo": "Irmão mais novo de Cano, 12 anos",
        "sistema": "",
        "familia": "",
        "poder": "Ainda sem poder.",
        "descricao": "Ligação com a Caixa: A Caixa reagiu à presença dele uma vez; ninguém sabe por quê.",
        "design": "Garoto de boné virado, camiseta grande demais e mochila cheia de chaveiros.",
        "imagem": ""
      },
      {
        "nome": "Mira Sato",
        "titulo": "Cientista do Prometeu, agente dupla",
        "sistema": "",
        "familia": "",
        "poder": "Sem DNA; usa luvas que controlam nanites.",
        "descricao": "Ligação com a Caixa: Estuda os nanites da Caixa e passa informações para Cano em segredo.",
        "design": "Jaleco cinza curto, cabelo chanel, luvas tecnológicas com luz azul e tablet sempre na mão.",
        "imagem": ""
      },
      {
        "nome": "Sargento Brak Holt",
        "titulo": "Soldado do Prometeu",
        "sistema": "Caixa de Pandora",
        "familia": "Velthari",
        "poder": "Armadura de cristal sintético.",
        "descricao": "Ligação com a Caixa: Primeira cobaia bem-sucedida do Instituto com DNA copiado.",
        "design": "Soldado enorme com uniforme tático do Prometeu e placas de cristal opaco e cinza nos braços.",
        "imagem": ""
      },
      {
        "nome": "Victor 'Agulha' Pell",
        "titulo": "Assassino do Prometeu",
        "sistema": "Caixa de Pandora",
        "familia": "Siravex",
        "poder": "Ferrões nos antebraços e veneno.",
        "descricao": "Ligação com a Caixa: Recebeu DNA Siravex de laboratório; é leal só a Helena Voss.",
        "design": "Magro, de terno preto justo, antebraços com ferrões que saem da pele e olhos com reflexo de inseto.",
        "imagem": ""
      },
      {
        "nome": "Kessler",
        "titulo": "Piloto de drones do Prometeu",
        "sistema": "Caixa de Pandora",
        "familia": "Khaal",
        "poder": "Plasma instável.",
        "descricao": "Ligação com a Caixa: O DNA copiado está queimando o corpo dele por dentro.",
        "design": "Piloto com macacão de voo, rosto com marcas de queimadura brilhantes e visor laranja.",
        "imagem": ""
      },
      {
        "nome": "Thessa",
        "titulo": "Embaixadora Velthari",
        "sistema": "Caixa de Pandora",
        "familia": "Velthari",
        "poder": "Corpo inteiro de cristal.",
        "descricao": "Ligação com a Caixa: Veio à Terra para cobrar do Concílio a promessa de nunca reabrir a Caixa.",
        "design": "Alienígena alta de cristal translúcido azul, com pequenos fragmentos flutuando em volta da cabeça.",
        "imagem": ""
      },
      {
        "nome": "Grul-Okk",
        "titulo": "Caçador Ozzrak",
        "sistema": "Caixa de Pandora",
        "familia": "Ozzrak",
        "poder": "Fúria predadora controlada.",
        "descricao": "Ligação com a Caixa: Persegue Ensar há séculos; vê Cano como presa e aliado ao mesmo tempo.",
        "design": "Reptiliano de 2,5 m, escamas verde-escuras, cicatrizes, colar de dentes e armadura de osso.",
        "imagem": ""
      },
      {
        "nome": "Ylmira",
        "titulo": "Oráculo Myrr",
        "sistema": "Caixa de Pandora",
        "familia": "Myrr",
        "poder": "Telepatia em rede.",
        "descricao": "Ligação com a Caixa: Fala com Cano em sonhos pela parte Myrr do DNA dele, ainda dormente.",
        "design": "Ser aquático de pele azul translúcida, sem boca, com tentáculos finos no lugar do cabelo, flutuando numa bolha de água.",
        "imagem": ""
      },
      {
        "nome": "Vexa, Rainha Siravex",
        "titulo": "Rainha da colmeia",
        "sistema": "Caixa de Pandora",
        "familia": "Siravex",
        "poder": "Mente de colmeia.",
        "descricao": "Ligação com a Caixa: Quer de volta o DNA da sua raça guardado na Caixa.",
        "design": "Insectoide alta de exoesqueleto dourado e preto, asas finas, coroa de antenas e quatro braços.",
        "imagem": ""
      },
      {
        "nome": "Solun",
        "titulo": "Espírito Khaal do núcleo da Caixa",
        "sistema": "Caixa de Pandora",
        "familia": "Khaal",
        "poder": "Forma estelar.",
        "descricao": "Ligação com a Caixa: Uma consciência Khaal presa no núcleo de energia da Caixa.",
        "design": "Silhueta humanoide feita de plasma laranja e branco, sem rosto, com anéis de luz girando no peito.",
        "imagem": ""
      },
      {
        "nome": "O Vazio",
        "titulo": "Entidade Noctivar",
        "sistema": "Caixa de Pandora",
        "familia": "Noctivar",
        "poder": "Abre fendas no espaço.",
        "descricao": "Ligação com a Caixa: Quer fechar a Caixa para sempre, mesmo que isso apague todos os humanos com DNA.",
        "design": "Recorte escuro em forma de pessoa, com estrelas dentro do corpo e bordas que tremem.",
        "imagem": ""
      },
      {
        "nome": "Marcus Reed",
        "titulo": "Policial da cidade",
        "sistema": "Caixa de Pandora",
        "familia": "Myrr",
        "poder": "Sente emoções (detector de mentira).",
        "descricao": "Ligação com a Caixa: Foi contaminado na noite em que a Caixa foi aberta.",
        "design": "Policial de uniforme azul-marinho amassado, barba por fazer, distintivo no cinto e olhos que ficam turquesa.",
        "imagem": ""
      },
      {
        "nome": "Priya Nair",
        "titulo": "Streamer",
        "sistema": "Caixa de Pandora",
        "familia": "Khaal",
        "poder": "Luz e calor.",
        "descricao": "Ligação com a Caixa: Transmitiu ao vivo a abertura do túnel; o vídeo viralizou e a fez alvo.",
        "design": "Jaqueta brilhante, celular num bastão, cabelo com mechas rosa e mãos que brilham.",
        "imagem": ""
      },
      {
        "nome": "Léo Duarte",
        "titulo": "Gêmeo, skatista",
        "sistema": "Caixa de Pandora",
        "familia": "Velthari",
        "poder": "Blindagem de cristal.",
        "descricao": "Ligação com a Caixa: Ele e a irmã receberam DNAs opostos no mesmo dia.",
        "design": "Skatista de bermuda e camisa xadrez aberta, joelhos e cotovelos de cristal.",
        "imagem": ""
      },
      {
        "nome": "Luna Duarte",
        "titulo": "Gêmea, artista de rua",
        "sistema": "Caixa de Pandora",
        "familia": "Noctivar",
        "poder": "Invisibilidade.",
        "descricao": "Ligação com a Caixa: Irmã de Léo; o DNA dela rejeita o dele (não conseguem se tocar sem dor).",
        "design": "Macacão sujo de tinta spray, cabelo preso com lápis, partes do corpo que ficam transparentes.",
        "imagem": ""
      },
      {
        "nome": "Pastor Elias Crow",
        "titulo": "Líder do culto Filhos de Anu",
        "sistema": "Caixa de Pandora",
        "familia": "Anunnaki",
        "poder": "Anunnaki corrompido: absorve energia de outros.",
        "descricao": "Ligação com a Caixa: Adora a Caixa como deus e entrega fiéis a Ensar.",
        "design": "Homem magro de terno branco, colarinho clerical, olhos dourados e marcas de filamentos pretos no pescoço.",
        "imagem": ""
      },
      {
        "nome": "Kai Moreno",
        "titulo": "Ex-boxeador",
        "sistema": "Caixa de Pandora",
        "familia": "Ozzrak",
        "poder": "Regeneração e força.",
        "descricao": "Ligação com a Caixa: Comprou DNA no mercado negro do Prometeu; vira aliado depois.",
        "design": "Boxeador de moletom com capuz, nariz quebrado, faixas nas mãos e escamas no pescoço.",
        "imagem": ""
      },
      {
        "nome": "Dr. Samuel Hart",
        "titulo": "Arqueólogo que achou a Caixa",
        "sistema": "",
        "familia": "",
        "poder": "Sem poder; morre no episódio 1.",
        "descricao": "Ligação com a Caixa: Achou a Caixa num túnel abandonado do metrô. As memórias dele ficaram gravadas no Arquivo.",
        "design": "Homem de 60 anos, chapéu de abas, colete de campo cheio de bolsos, lanterna na cabeça.",
        "imagem": ""
      },
      {
        "nome": "ECO",
        "titulo": "Inteligência do Arquivo Xenogenético",
        "sistema": "",
        "familia": "",
        "poder": "Controla a Caixa por dentro.",
        "descricao": "Ligação com a Caixa: É a consciência do Arquivo, com milhões de DNAs alienígenas. Conversa com Cano e não tem lado.",
        "design": "Holograma ciano de um rosto que muda a cada frase, misturando traços das 7 raças.",
        "imagem": ""
      }
    ]
  }
];
