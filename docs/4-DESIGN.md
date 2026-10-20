# 4. Design: qual é a cara

Mobile primeiro (390 px), PC por cima (1440 px). Uma regra por item, igual em todas as telas.

## Metáfora do negócio e tema: "o convite"
Um espaço de festa vende **a noite que vira lembrança**. O site é um **convite de gala** que o visitante abre: papel claro, tipografia de impresso fino, **arco** (a moldura da entrada do salão) como forma que se repete, e a página organizada como o **programa impresso da noite** (horário, etapa, clipe). Não é a receita dos protótipos anteriores (fundo escuro, vídeo no topo, 2x2 de fatos, 3 passos): aqui o fundo é **claro**, o vídeo é **vertical dentro de um arco**, e a espinha é uma **linha do tempo da festa**.

**Não repetir:** herói escuro com vídeo em tela cheia no PC, palavras que acendem, faixa de fatos 2x2, janela em 3 passos como bloco central.

## Cores (com código)
Vêm das duas referências do Gabriel: o rosa e a prata da mesa de doces, o vinho, o oliva e o latão do salão do vídeo.

| Papel | Cor | Código | Contraste conferido |
|---|---|---|---|
| Fundo (papel) | Creme | `#FBF5EE` | base |
| Texto | Vinho quase preto | `#2B1B1D` | 15,2:1 no fundo |
| Texto de apoio | Marrom rosado | `#6B5557` | 6,3:1 no fundo |
| Destaque / botão principal | Vinho | `#6E1527` | 10,8:1 no fundo; texto creme no botão 10,8:1 |
| Faixa suave | Rosa blush | `#F2D5D1` | texto `#2B1B1D` 11,9:1 |
| Natureza / "incluso" | Oliva | `#5E6B3C` | 5,3:1 no fundo |
| Latão (só ornamento e texto grande) | Latão | `#8A6428` | 4,9:1 no fundo; o latão claro `#B58B4C` (2,9:1) **só em fio e ícone decorativo** |
| Noite (blocos escuros pontuais) | Vinho noite | `#2A0A10` | texto creme 16,9:1; latão claro `#E8C98F` 11,5:1 |

Tema **claro** na página; só o palco do programa da noite e o rodapé usam o fundo noite, para o vídeo vermelho respirar.

## Fontes e tamanhos
- **Títulos:** Bodoni Moda (itálico nas palavras de destaque), auto-hospedada. **Texto:** Hanken Grotesk 400/600.
- **Celular:** título 40/1,05, subtítulo 20/1,3, texto 17/1,6, legenda 13. **PC (≥1024):** título 88/0,98, subtítulo 28, texto 18.
- Horários do programa em Hanken Grotesk 600, maiúsculas com espaçamento 0,12em.

## Botões, campos, cantos e espaços
- **Botão principal:** pílula vinho, texto creme, 56 px de altura no celular, seta que desliza no hover. **Secundário:** pílula com contorno vinho 1,5 px.
- **WhatsApp fixo (celular):** pílula verde-oliva escura com ícone, canto inferior direito, respeita a barra do iPhone (`env(safe-area-inset-bottom)`).
- **Cantos:** arco (`border-radius: 999px 999px 24px 24px`) em mídia de destaque; cartões 20 px; campos 14 px.
- **Espaços:** escala 8, 16, 24, 40, 72, 120. Seções com muito respiro.
- **Janela de orçamento:** modal em papel com borda de latão fina, cantos 24 px; campos com rótulo em cima, `inputmode` certo no celular.

## Movimento (intensidade alta, é Premium)
Ver `playbooks/animations.md`.
- **Hero:** vídeo no arco com zoom lento de câmera na entrada; título entra por linhas (máscara); arco "abre" (clip-path) ao carregar.
- **Programa da noite:** no PC, palco fixo (`arcane-scrub`) com o arco trocando de clipe a cada etapa e uma linha de horário que avança; **no celular, cartões em sequência**, cada vídeo toca só quando está na tela.
- **Serviços e incluso:** entrada em cascata, itens do "incluso" marcam um por um; botão do WhatsApp magnético no PC.
- **Parado de propósito:** FAQ, formulário, rodapé.
- **Regras de segurança:** `prefers-reduced-motion` = nada se mexe nem toca sozinho; sem JS tudo visível; mobile sem parallax de mouse; só o hero carrega vídeo na abertura.

## Acabamento do navegador
Barra de rolagem estilizada (fina, vinho), modal próprio (nunca `alert/confirm/prompt`), `select` e checkbox estilizados, cor de seleção rosa blush, foco visível em vinho, autofill sem fundo amarelo, `autocomplete="off"` em campo livre. Ver `playbooks/native-ui-polish.md`. Rodar o grep de caixas nativas antes de entregar.

## Imagens
Geradas no Figma (arquivo "Espaço de Festas · Exemplo") em estilo de **foto de celular de convidado**: luz irregular, grão, enquadramento levemente torto, sem retoque. A primeira rodada (estilo revista, muito polido) foi descartada por parecer artificial. Prompts sem texto, sem logo, sem pessoa identificável. Vídeo: clipes do material do Gabriel, **sem áudio e com a marca d'água removida**, só para demonstração.

## Proibições
Tracinho longo (—) em texto, "cara de IA" (`playbooks/taste.md`), depoimento, nota, número ou capacidade inventados (tudo que for dado do cliente fica marcado como exemplo), logo.
