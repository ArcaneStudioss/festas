# 6. Plano: ordem de construção

Cada etapa só termina depois do teste indicado. Commits pequenos na branch da sessão, sem PR.

1. **Base do projeto.** Copiar `templates/site-starter/` e `.claude/settings.json`; criar estrutura e `docs/`. *Teste:* abre local sem erro.
2. **Mídia livre.** Escolher e baixar o vídeo horizontal e 10 a 12 fotos de eventos (Unsplash/Pexels); converter (vídeo 1080p até 4 MB, fotos WebP); anotar autor e licença em `docs/MIDIA.md`. *Teste:* tamanho total da home abaixo de 3 MB sem o vídeo; plano B avisado ao Gabriel se faltar vídeo vermelho.
3. **Tokens e base visual.** Cores, fontes, botões pílula, cantos, rolagem, foco, seleção. *Teste:* tela de teste a 390 px e 1440 px.
4. **Topo.** Faixa de demo, menu, vídeo com poster e pausa, texto e botões. *Teste:* vídeo toca, para com movimento reduzido, topo cabe na primeira tela.
5. **Roteiro da noite** (4 etapas, relógio no PC) e **"Para qual noite é?"**. *Teste:* mobile e PC; relógio acompanha a rolagem.
6. **Galeria** com ampliação, **convite de reserva**, **passos**, **equipe e avaliações (reservados)**, **FAQ**, **mapa**, **rodapé**, **barra fixa**.
7. **Janela "Consultar data"** (calendário próprio, 3 passos, validação, confirmação de fechar) e **obrigado**. *Teste:* teclado completo (Tab, Esc), erro por campo, JS desligado.
8. **`?casa=`.** *Teste:* nome longo é cortado; `<script>` digitado aparece como texto, não executa.
9. **Os 20 itens:** 404, privacidade, cookies/GA4 desligado, `robots.txt` bloqueando, `noindex`, títulos e descrições únicos, og de compartilhamento, LocalBusiness de exemplo, alt. *Teste:* `templates/checagem/checar-20-itens.sh .` (itens de cases/avaliações reais marcados como pendência da demo).
10. **Revisão de design** (taste + impeccable) e **QA**: screenshots 390 e 1440, JS desligado, movimento reduzido, grep de `alert/confirm/prompt` e de `border-radius` pequeno em botão, grep de tracinho longo. `playbooks/delivery-checklist.md`.
11. **Segurança:** `auditar-codigo.sh .` (zero FALHA).
12. **Backup:** espelho criptografado gerado e restauração testada.
13. **Deploy** na Vercel (Gabriel importa o repositório; a sessão cuida do DNS `demo-eventos` na Cloudflare), `?v=` nos arquivos. **Depois:** `auditar-site.sh URL`, conferir arquivo no ar com `curl`.
14. **Resumo ao Gabriel:** link, o que foi verificado e o que não, onde está o backup, pendências (WhatsApp, vídeo definitivo, domínio).
