# 5. Back-end: onde ficam os dados

**Não há banco, servidor nem dados de usuário.** O site é estático e o formulário só simula.

| Dado | Onde fica | Quem vê |
|---|---|---|
| Código e textos | repositório `arcanestudioss/festas` | Gabriel e a Arcane |
| Fotos e vídeo | pasta `assets/` do site + registro de licença em `docs/MIDIA.md` | público (é o site) |
| O que o prospect digita na janela | só na memória do navegador até a página de obrigado; **não é gravado nem enviado** | só ele |
| Nome da casa (`?casa=`) | só na URL | quem recebe o link |
| GA4 | desligado (sem ID); com consentimento, só depois | Arcane |

## Segurança
Nível estático. `?casa=` e dados do formulário só entram na página com `textContent`. Cabeçalhos (`vercel.json`): CSP restrita, `X-Content-Type-Options`, `Referrer-Policy`, `frame-ancestors none`. Nada de `.env` ou chave no repositório.

## Backup e restauração
Código no GitHub + espelho semanal criptografado (`templates/backup/backup-repo.js`). Restauração testada: clonar do espelho, abrir `index.html` e conferir que o vídeo e as fotos aparecem. Registrar data do teste na entrega.

## Quando virar site de uma casa de verdade
Aí entram os dados reais: pedidos de data (tabela com nome, WhatsApp, data, convidados, tipo), com backend, backup diário com cópia fora do servidor e aviso de privacidade (LGPD). Isso muda a hospedagem para VPS e o TRD precisa ser refeito.
