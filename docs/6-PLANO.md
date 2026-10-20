# 6. Plano: em que ordem construir

Uma etapa por vez; só segue depois de testar a atual. Testes em 390 px e 1440 px, com JS ligado e desligado e com movimento reduzido.

| # | Etapa | Como testar | Status |
|---|---|---|---|
| 0 | **Mídia pronta:** 6 clipes sem marca d'água e sem áudio (~6 MB), 6 imagens WebP naturais; vídeo fica fora do GitHub (repositório público) | marca d'água sumiu (conferido nos 6 clipes), pesos medidos | **feito** |
| 1 | Esqueleto a partir de `site-starter` + cores, fontes locais (Bodoni Moda, Hanken Grotesk) e tokens do doc 4 | abre em 390 e 1440 sem erro de console | a fazer |
| 2 | **Hero:** arco com vídeo, título por linhas, botões, cabeçalho inteligente | poster aparece primeiro, vídeo toca mudo, sem pulo de layout, peso da primeira dobra | a fazer |
| 3 | **Programa da noite** (palco fixo no PC, cartões no celular) | troca de clipe por etapa, só 1 vídeo tocando por vez, JS desligado mostra a lista | a fazer |
| 4 | Serviços, "tudo incluso" + pacotes + adicionais, tipos de evento | leitura em 390 px, alvos de toque ≥ 44 px | a fazer |
| 5 | **Modal de orçamento** + botão fixo + `obrigado` | campo vazio mostra erro, mensagem do WhatsApp sai com data e convidados, foco preso no modal e volta ao fechar, Esc fecha | a fazer |
| 6 | Cases/avaliações (com aviso), como reservar, FAQ, como chegar, rodapé | links e âncoras corretos | a fazer |
| 7 | Os 20 itens: `templates/checagem/checar-20-itens.sh .` | zero FALTA | a fazer |
| 8 | Segurança: `templates/seguranca/auditar-codigo.sh .` e grep de `alert/confirm/prompt` | zero FALHA | a fazer |
| 9 | QA completo (`playbooks/delivery-checklist.md`): capturas 390 e 1440, JS desligado, movimento reduzido, Lighthouse | tudo verde | a fazer |
| 10 | Backup: espelho criptografado + restauração testada | clone limpo abre o site | a fazer |
| 11 | Deploy (só com Vercel Pro confirmado), `auditar-site.sh URL`, CSS/JS com `?v=` | URL no ar confere com o arquivo local | **fora desta rodada** |
| 12 | Resumo ao Gabriel: o que foi feito, link, preço, upsells, pendências | enviado | a fazer |

## Ordem de decisão pendente com o Gabriel
1. OK nos 6 documentos.
2. Confirmar que o vídeo de exemplo é só para demonstração (não vai para cliente real).
3. Escolher se publica a vitrine (precisa do Vercel Pro) ou se fica só em captura de tela/vídeo para mostrar a prospect.
