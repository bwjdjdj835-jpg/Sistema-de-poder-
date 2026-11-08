// Catálogo curado: animes de 2023–2025 com sistema de poder.
// "ligacao" = como o personagem obtém / se conecta ao poder (linhagem, clã, contrato, treino...).
window.ANIMES = [
  {
    titulo: "Jujutsu Kaisen (2ª temporada)", ano: 2023,
    sistema: "Energia Amaldiçoada e Técnicas Inatas",
    resumo: "Emoções negativas geram energia amaldiçoada. Feiticeiros nascem com uma técnica inata gravada no corpo, muitas vezes herdada pelo clã.",
    personagens: [
      { nome: "Satoru Gojo", ligacao: "Clã Gojo (linhagem)", poder: "Ilimitado + Seis Olhos — herança rara do clã" },
      { nome: "Megumi Fushiguro", ligacao: "Clã Zen'in (linhagem)", poder: "Técnica das Dez Sombras" },
      { nome: "Yuji Itadori", ligacao: "Receptáculo de Sukuna", poder: "Força física extrema + energia de Sukuna" },
      { nome: "Nobara Kugisaki", ligacao: "Técnica inata", poder: "Técnica da Boneca de Palha" },
      { nome: "Suguru Geto", ligacao: "Técnica inata", poder: "Manipulação de Maldições" },
      { nome: "Maki Zen'in", ligacao: "Clã Zen'in — Restrição Celestial", poder: "Sem energia amaldiçoada, físico sobre-humano" }
    ]
  },
  {
    titulo: "Frieren e a Jornada para o Além", ano: 2023,
    sistema: "Mana e Magia",
    resumo: "Magos manipulam mana para lançar feitiços que podem ser estudados e aprendidos. Ocultar a própria mana é uma arte.",
    personagens: [
      { nome: "Frieren", ligacao: "Elfa, aprendiz de Flamme", poder: "Supressão de mana, vasto arsenal de feitiços" },
      { nome: "Fern", ligacao: "Aprendiz de Frieren", poder: "Zoltraak de disparo veloz" },
      { nome: "Stark", ligacao: "Guerreiro, aluno de Eisen", poder: "Força e resistência sem magia" },
      { nome: "Übel", ligacao: "Maga intuitiva", poder: "Reelseiden — magia de corte pela imaginação" },
      { nome: "Sein", ligacao: "Sacerdote", poder: "Magia de cura e sacerdotal" }
    ]
  },
  {
    titulo: "Solo Leveling", ano: 2024,
    sistema: "Despertados, Ranks (E–S) e Monarcas",
    resumo: "Portais liberam monstros; humanos despertam poderes ranqueados. Um Sistema permite ao protagonista subir de nível.",
    personagens: [
      { nome: "Sung Jinwoo", ligacao: "Escolhido pelo Sistema / Monarca das Sombras", poder: "Extração e comando de sombras" },
      { nome: "Cha Hae-In", ligacao: "Despertada Rank S", poder: "Espadachim de elite" },
      { nome: "Go Gun-Hee", ligacao: "Despertado Rank S", poder: "Presidente da Associação de Caçadores" },
      { nome: "Yoo Jinho", ligacao: "Despertado Rank D", poder: "Tanque e aliado de Jinwoo" }
    ]
  },
  {
    titulo: "Kaiju Nº 8", ano: 2024,
    sistema: "Supressores Kaiju e % de Força de Combate",
    resumo: "A Força de Defesa usa trajes feitos de kaiju; a eficácia é medida em porcentagem de força liberada.",
    personagens: [
      { nome: "Kafka Hibino", ligacao: "Fundido a um kaiju", poder: "Transformação no Kaiju Nº 8" },
      { nome: "Mina Ashiro", ligacao: "Capitã da 3ª Divisão", poder: "Canhão anti-kaiju de alto calibre" },
      { nome: "Soshiro Hoshina", ligacao: "Linhagem Hoshina de espadachins", poder: "Estilo de espadas duplas" },
      { nome: "Kikoru Shinomiya", ligacao: "Família Shinomiya", poder: "Machado e alta força de combate" }
    ]
  },
  {
    titulo: "Dandadan", ano: 2024,
    sistema: "Poderes Psíquicos, Yokai e Alienígenas",
    resumo: "Poderes nascem de dons psíquicos ou de maldições e espíritos que se ligam às pessoas.",
    personagens: [
      { nome: "Momo Ayase", ligacao: "Linhagem de médiuns (avó Seiko)", poder: "Psicocinese" },
      { nome: "Okarun", ligacao: "Possuído pela Turbo Granny", poder: "Super velocidade amaldiçoada" },
      { nome: "Aira Shiratori", ligacao: "Possuída pela Acrobatic Silky", poder: "Poderes da yokai" },
      { nome: "Seiko Ayase", ligacao: "Médium experiente", poder: "Barreiras e exorcismo" }
    ]
  },
  {
    titulo: "Mashle", ano: 2023,
    sistema: "Magia e Marcas Mágicas",
    resumo: "Num mundo onde todos usam magia, o status vem das marcas no rosto. Mash não tem nenhuma magia.",
    personagens: [
      { nome: "Mash Burnedead", ligacao: "Nascido sem magia", poder: "Força física absurda" },
      { nome: "Lance Crown", ligacao: "Marca dupla", poder: "Magia de gravidade" },
      { nome: "Finn Ames", ligacao: "Irmão de Rayne Ames", poder: "Troca de posição" },
      { nome: "Dot Barrett", ligacao: "Magia de combate", poder: "Explosão" }
    ]
  },
  {
    titulo: "Demon Slayer: Vila dos Ferreiros / Treinamento Hashira", ano: 2023,
    sistema: "Respirações e Artes Demoníacas",
    resumo: "Caçadores usam estilos de respiração; demônios têm Artes de Sangue Demoníaco. Algumas técnicas passam por famílias.",
    personagens: [
      { nome: "Tanjiro Kamado", ligacao: "Herança da família Kamado", poder: "Respiração da Água + Dança do Deus do Fogo" },
      { nome: "Muichiro Tokito", ligacao: "Descendente de Kokushibo", poder: "Respiração da Névoa" },
      { nome: "Mitsuri Kanroji", ligacao: "Corpo especial", poder: "Respiração do Amor" },
      { nome: "Gyomei Himejima", ligacao: "Hashira da Pedra", poder: "Respiração da Pedra" },
      { nome: "Genya Shinazugawa", ligacao: "Absorve demônios", poder: "Comer demônios para ganhar poderes" }
    ]
  },
  {
    titulo: "Hell's Paradise", ano: 2023,
    sistema: "Tao",
    resumo: "Energia vital com afinidades (como os cinco elementos). Equilíbrio de yin e yang dita a força.",
    personagens: [
      { nome: "Gabimaru", ligacao: "Ninja da Vila Iwagakure", poder: "Ninpo de fogo (corpo inflamável)" },
      { nome: "Sagiri Yamada Asaemon", ligacao: "Clã Yamada Asaemon", poder: "Espadachim que aprende Tao" },
      { nome: "Yuzuriha", ligacao: "Kunoichi", poder: "Técnicas ninja ágeis" }
    ]
  },
  {
    titulo: "Undead Unluck", ano: 2023,
    sistema: "Negadores e Artefatos",
    resumo: "Negadores negam uma lei da realidade; o poder surge da noção que o portador mais rejeita.",
    personagens: [
      { nome: "Andy", ligacao: "Negador", poder: "Undead — não pode morrer" },
      { nome: "Fuuko Izumo", ligacao: "Negadora", poder: "Unluck — azar a quem a toca" },
      { nome: "Shen", ligacao: "Negador", poder: "Untruth — inverte o sentimento" },
      { nome: "Tatiana", ligacao: "Negadora", poder: "Untouchable — repele tudo" }
    ]
  },
  {
    titulo: "Gachiakuta", ano: 2025,
    sistema: "Givers e Instrumentos Vitais (Jinki)",
    resumo: "Pessoas com forte ligação emocional a um objeto conseguem despertar poderes através dele.",
    personagens: [
      { nome: "Rudo", ligacao: "Giver — luvas do pai adotivo", poder: "Dá poder a objetos descartados" },
      { nome: "Enjin", ligacao: "Giver — Cleaner", poder: "Guarda-chuva como instrumento" },
      { nome: "Zanka Nijiku", ligacao: "Giver — Cleaner", poder: "Bastão como instrumento" }
    ]
  },
  {
    titulo: "Solo Leveling (2ª temporada)", ano: 2025,
    sistema: "Despertados, Ranks (E–S) e Monarcas",
    resumo: "Continuação: reavaliação de rank, Ilha de Jeju e a origem dos Monarcas.",
    personagens: [
      { nome: "Sung Jinwoo", ligacao: "Monarca das Sombras", poder: "Exército de sombras (Igris, Beru...)" },
      { nome: "Thomas Andre", ligacao: "Caçador Nacional", poder: "Força e resistência descomunais" }
    ]
  }
];

// Pools para gerar o seu sistema
window.POOL = {
  poderes: [
    ["Chamas Negras", "Fogo que não se apaga com água", "Água sagrada"],
    ["Gelo Eterno", "Congela o ar e o movimento", "Calor extremo"],
    ["Sombras", "Move-se e ataca pelas sombras", "Luz intensa"],
    ["Gravidade", "Aumenta ou anula o peso", "Distância"],
    ["Trovão", "Velocidade e descargas elétricas", "Terra"],
    ["Sangue", "Molda o próprio sangue em armas", "Perda de vitalidade"],
    ["Tempo", "Acelera ou congela instantes", "Envelhece o usuário"],
    ["Ilusão", "Cria realidades falsas", "Mentes fortes"],
    ["Som", "Ondas que cortam e ensurdecem", "Vácuo"],
    ["Metal", "Controla e cria aço", "Ferrugem / magnetismo"],
    ["Vento Cortante", "Lâminas de ar invisíveis", "Espaços fechados"],
    ["Veneno", "Toxinas que corroem", "Antídotos naturais"],
    ["Luz", "Raios e cegueira", "Escuridão total"],
    ["Espaço", "Portais e teleporte", "Alto custo de energia"],
    ["Vida", "Cura e crescimento", "Não ataca diretamente"],
    ["Memória", "Lê e apaga lembranças", "Contato físico obrigatório"],
    ["Terra", "Montanhas, muralhas e terremotos", "Voo"],
    ["Água Viva", "Água consciente e moldável", "Trovão"],
    ["Alma", "Vê e fere o espírito", "Corpo frágil"],
    ["Corrente", "Correntes que selam poderes", "Lentidão"]
  ],
  clas: ["Kurogane","Shiranui","Amagiri","Hoshizora","Kagerou","Tenkai","Mizuchi","Raikou","Yamigumo","Akatsuki","Hyouga","Tsukuyomi","Kaminari","Senjou","Byakuya","Homura","Kazeyama","Rengoku","Sakuraba","Ōtsuki"],
  nomes: ["Ren","Kaito","Yuki","Haru","Aoi","Sora","Rin","Daichi","Mei","Kenji","Hana","Riku","Akira","Nao","Takeru","Emi","Shin","Kaede","Ryo","Mio","Hayato","Saki","Jin","Ayame","Toma","Nami","Kyo","Suzu","Itsuki","Hikari","Raiden","Yuna","Kai","Sayo","Gin","Rei","Tora","Chiyo","Sei","Asuka"],
  ranks: ["E","D","C","B","A","S"],
  tecnicas: ["Despertar","Selo","Lâmina","Domínio","Eco","Coroa","Véu","Pulso","Fúria","Prisão","Ascensão","Fenda"],
  relacoes: ["aliado","rival","mentor","irmão de juramento","inimigo"]
};
