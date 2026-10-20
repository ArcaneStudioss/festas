# 3. Fluxo: o que cada clique faz

## Lista de telas
1. **Home** (página longa com seções por âncora)
2. **Obrigado** (`/obrigado/`)
3. **Política de privacidade** (`/politica-de-privacidade/`)
4. **404**
5. **Janela "Montar orçamento"** (modal, não é página)

## Ordem da Home (mobile primeiro)
1. Cabeçalho: nome em texto + botão "Chamar no WhatsApp". Esconde ao rolar para baixo, volta ao subir.
2. **Hero:** vídeo (celular: tela cheia vertical com recorte em arco; PC: arco ao lado do texto), título, uma frase, botões "Montar meu orçamento" e "Ver como é a noite".
3. **Faixa de prova:** 3 fatos do espaço (capacidade, estacionamento, climatização), **só com dados reais do cliente**; no exemplo aparecem marcados como exemplo.
4. **Programa da noite:** 5 etapas com clipe (Recepção, Mesa posta, Jantar, Equipe, Pista).
5. **Serviços:** espaço, decoração e iluminação, buffet, garçons e equipe, som e pista, bolo e doces.
6. **Tudo incluso:** lista do que vem em toda festa, 3 pacotes lado a lado e adicionais.
7. **Para cada comemoração:** casamento, 15 anos, infantil, formatura, corporativo.
8. **Cases e avaliações:** aviso de "entram só avaliações reais".
9. **Como reservar:** 1 visita, 2 proposta, 3 data reservada.
10. **FAQ** (5 perguntas) e **Como chegar** (endereço, horário, botão "Abrir rota").
11. **Chamada final** + rodapé (política, redes, crédito só se o contrato prever).
12. **Botão fixo de WhatsApp** no celular (item 9 dos 20).

## Caminho principal do visitante
1. Abre o Instagram do espaço, toca no link → **Home** carrega com o poster e o vídeo começa mudo.
2. Rola → entra no **Programa da noite**; cada etapa troca o clipe (PC: palco fixo; celular: cartões em sequência).
3. Toca em **"Montar meu orçamento"** → abre o **modal**: tipo de festa, data, nº de convidados, nome.
4. Toca em **"Enviar pelo WhatsApp"** → valida os campos → abre o WhatsApp com a mensagem pronta e, na aba do site, mostra **Obrigado**.
5. Alternativa curta: botão fixo "WhatsApp" → abre direto a conversa com mensagem simples.

## Casos de erro e vazio
- **JS desligado:** o conteúdo inteiro aparece (poster no lugar do vídeo, lista no lugar do palco fixo) e os botões de WhatsApp são links `wa.me` normais.
- **Movimento reduzido:** nenhum vídeo toca sozinho; ficam o poster e um botão "Tocar".
- **Economia de dados / vídeo que não carrega:** fica o poster.
- **Modal com campo vazio:** mensagem em cima do campo; não abre WhatsApp; foco volta ao campo.
- **Sem WhatsApp instalado:** `wa.me` abre o WhatsApp Web; texto copiado também fica disponível por botão "Copiar mensagem".
- **Página inexistente:** 404 com botão para a Home e para o WhatsApp.

## Telas obrigatórias dos 20 itens
404, obrigado, política de privacidade, breadcrumbs nas páginas internas, `robots.txt`, `sitemap.xml`, imagens de compartilhamento, JSON-LD LocalBusiness, GA4 com consentimento. Ver `playbooks/checklist-20-itens.md`.
