# 4. Design: a cara

Parte de `playbooks/taste.md`, `animations.md` e `native-ui-polish.md`. **Mobile primeiro**, PC por `@media (min-width: 960px)`. Esboço aprovado: `esboco/` (rodada 2).

## Metáfora
"O roteiro da noite": o site conta a festa na ordem em que ela acontece (chegada, jantar, cenário, pista) e fecha com um **convite R.S.V.P.** (cartão de papel).

## Cores (tema escuro, uma família de destaque: vermelho)
| Token | Valor | Uso |
|---|---|---|
| `--noite` | `#120d0d` | fundo |
| `--noite-2` | `#1c1415` | cartões, mapa |
| `--vela` | `#f3eadf` | texto principal |
| `--vela-suave` | `#bdaea2` | texto secundário |
| `--cortina` | `#b5303a` | botão e destaques |
| `--cortina-escura` | `#8e2129` | texto vermelho sobre papel |
| `--brasa` | `#e2453f` | pontos de luz, ícones, estrelas |
| `--brasa-clara` | `#ff7f74` | palavras em itálico, números |
| `--rosa` | `#f0b2b0` | rótulos e valores |
| `--bordo` | `#4a0f17` | faixas de fundo |
| `--papel` | `#efe6da` | convite |
Contraste mínimo AA (conferir com `contrast_check.py`); `--brasa` nunca como texto pequeno sobre fundo escuro.

## Fontes
Títulos **Bodoni Moda 400** (itálico para a palavra de destaque); texto **Hanken Grotesk 400/500/600**. Títulos: 38 px no celular e 54 a 62 px no PC; texto 16 px; rótulos 12 px em caixa-alta com 0,18em. Sem tracinho longo em nenhum texto.

## Botões e cantos (regra do Gabriel)
- **Todo botão é pílula** (`--pill: 999px`); só ícone vira círculo. Principal: degradê `#cf404a` a `#9c2630` com sombra vermelha suave; secundário: contorno fino com fundo translúcido; altura mínima 54 px.
- **Cartões, fotos, campos, FAQ e janelas** com raio 16 a 28 px (`--raio: 20px`); um sistema só.
- Etiquetas (Espaço, Decoração...) são pílulas vermelhas finas.

## Espaço e layout
Gutter 20 px (celular) e 56 px (PC); seções com 88 a 140 px de respiro. Roteiro no PC em duas colunas (relógio fixo à esquerda). Galeria em 2 colunas no celular e 4 no PC. Convite levemente inclinado (-1,2°) só no PC.

## Movimento (intensidade média, 4/3/4 da escala do taste)
Vídeo do topo em loop; entrada suave das seções (`opacity` + `translateY`) por `IntersectionObserver`; brilho vermelho que respira nos pontos de hora; hover dos botões sobe 2 px. Tudo desligado com `prefers-reduced-motion`. Só `transform` e `opacity`.

## O que o navegador desenharia e nós estilizamos
Barra de rolagem fina vermelha; janelas próprias (nunca `alert/confirm/prompt`); calendário próprio; campos e máscara de WhatsApp com `autocomplete="off"` onde cabe; seleção de texto vermelha; foco com anel vermelho de 2 px; botão de arquivo não existe nesta página.

## Mídia
Fotos e vídeo livres/gerados, em tons de salão iluminado em vermelho e dourado quando houver; sem toalha verde-limão. Todas com `alt`. Ícones: Phosphor (família única).
