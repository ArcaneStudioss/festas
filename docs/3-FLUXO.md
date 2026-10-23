# 3. Fluxo: o que cada clique faz

## Telas
1. **Início** (`index.html`): topo com vídeo, roteiro da noite, "Para qual noite é?", galeria, convite de reserva, quem atende e avaliações, FAQ, mapa, rodapé.
2. **Janela "Consultar data"** (modal, não é página).
3. **Obrigado** (`obrigado.html`).
4. **Política de privacidade** (`privacidade.html`).
5. **404** (`404.html`).

## Caminhos
- **Faixa "Demonstração"**: fixa no topo; link "Quero um site assim" abre o WhatsApp do Gabriel (número vem depois).
- **Menu** (celular: botão abre painel em tela cheia; PC: links no topo): A noite, Espaço, Galeria, Dúvidas rolam suavemente até a seção. "Consultar data" abre a janela.
- **Topo, "Consultar data"**: abre a janela. **"Conhecer o espaço"**: rola até o roteiro. **Pausar vídeo**: pausa/retoma; o estado vale até recarregar.
- **Roteiro da noite**: no PC, o relógio lateral destaca a etapa visível; no celular, só a lista. Sem clique.
- **"Para qual noite é?"**: cada linha abre a janela já com o tipo de festa escolhido.
- **Galeria**: toque numa foto abre em janela ampliada (setas e Esc); "Ver no Instagram" abre link de exemplo em nova aba.
- **Convite de reserva**: os campos "Data" e "Convidados" abrem a janela no passo certo; "Verificar disponibilidade" abre a janela do início.
- **FAQ**: abre e fecha uma pergunta de cada vez.
- **Barra fixa (celular)**: aparece depois do topo; "Consultar data" abre a janela; botão redondo leva ao WhatsApp de exemplo.
- **Cookies**: aviso pede consentimento; "Aceitar" libera o GA4 (só se houver ID), "Recusar" mantém desligado.

## Janela "Consultar data" (3 passos, sem recarregar a página)
1. **Data**: calendário próprio (nada de campo de data do navegador); dias passados desabilitados.
2. **Convidados e tipo de festa**: contador com mais e menos e seleção do tipo.
3. **Contato**: nome e WhatsApp (máscara), aceite da privacidade.
- **Enviar**: valida; erro aparece embaixo do campo; ao passar, mostra "Enviando" por 1 s (simulado) e vai para `obrigado.html?casa=...`.
- **Fechar** (X, Esc ou clique fora): se houver dados digitados, pede confirmação em janela própria; nunca usa `alert/confirm`.

## Obrigado
Mostra o resumo do que foi digitado (só na tela, nada guardado), a promessa de "resposta em até [2 horas]" e um aviso **"Isto é uma demonstração, nada foi enviado"** com botão "Quero um site assim" (WhatsApp) e "Voltar ao início".

## Estados
Vídeo falhou: aparece o poster. JS desligado: tudo legível, janela vira link para a seção do convite com número de WhatsApp. Movimento reduzido: vídeo fica no poster e sem animações de entrada.
