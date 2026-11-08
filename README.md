# Forja de Poder

Web app estático (pt-BR) sobre sistemas de poder de anime.

- **Explorar animes**: catálogo com animes de 2023 a 2025, o sistema de poder de cada um e como ele se liga a cada personagem (linhagem, clã, contrato, treino). Também busca ao vivo na web via API Jikan (MyAnimeList) por ano e temporada, e marca quais animes já têm sistema catalogado.
- **Criar meu sistema**: gera um sistema de poder com N linhagens e 30 personagens ou mais. Cada linhagem tem um poder diferente (efeito e fraqueza), e cada personagem herda o poder da linhagem, tem técnica própria, rank (E–S) e conexões (aliado, rival, mentor...). Mapa radial interativo, tudo editável, salvo no navegador, com exportar e importar JSON.

## Rodar
    npx serve .
Abra http://localhost:3000 (ou abra `index.html` direto no navegador).

Online: https://sistema-de-poder.vercel.app

Para adicionar animes ao catálogo, edite `data.js`.
