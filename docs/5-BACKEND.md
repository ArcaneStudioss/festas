# 5. Back-end: onde ficam os dados

**O site é estático e não guarda nada.** Não há banco, login nem servidor. O contato acontece assim: o visitante preenche o modal (ou toca no botão fixo), o navegador monta a mensagem e abre `https://wa.me/<numero>?text=...`. O que o visitante digitou **não passa por nenhum servidor nosso**, vai direto para o WhatsApp do espaço.

## Tabelas e campos
Nenhuma.

## Ligações entre tabelas
Nenhuma.

## Quem vê e quem edita cada dado
- **Visitante:** vê o site; o que digita no modal fica só no aparelho dele até enviar pelo WhatsApp.
- **Dono do espaço:** recebe a conversa no WhatsApp.
- **Gabriel:** edita o código e as mídias no repositório; troca de foto/preço é pedido de ajuste da mensalidade.

## Dados pessoais (LGPD)
- **Coletado pelo site:** nada gravado. O modal só monta texto (nome, data, nº de convidados, tipo de festa) e abre o WhatsApp.
- **GA4:** só depois do consentimento (`arcane-analytics.js`); registra cliques e visitas, sem formulário.
- **Mídia:** o vídeo de exemplo tem rostos de convidados de terceiros. No cliente real, só imagem com autorização por escrito.
- **Política de privacidade:** `/politica-de-privacidade/` (modelo do starter, ajustar ao cliente).

## Backup e restauração
Ver `playbooks/backup.md`, caso "site estático".
1. **Código e mídias:** repositório no GitHub (o cliente real ganha repositório próprio).
2. **Espelho semanal criptografado:** `templates/backup/backup-repo.js` para R2/B2; chave de recuperação fora do servidor.
3. **Mídias pesadas** (os MP4): ficam no repositório (são ~6 MB no total); originais em alta ficam com o cliente.
4. **Restauração:** clonar o repositório, abrir `index.html` e conferir que vídeos e imagens carregam. **A testar e registrar a data antes do deploy.**

## Segurança
Sem segredo no site (o número do WhatsApp é público). Rodar `templates/seguranca/auditar-codigo.sh .` antes de publicar (zero FALHA) e `auditar-site.sh URL` depois. Cabeçalhos de segurança no `vercel.json` do starter. Nunca expor `.env`, `.git` ou o vídeo original de 295 MB (não entra no repositório).
