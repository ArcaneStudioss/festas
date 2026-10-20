# 2. TRD: com que peças

| Peça | Escolha | Por quê |
|---|---|---|
| Código | HTML/CSS/JS estático a partir de `templates/site-starter/`, sem build | Site de uma página longa que não guarda dados: simples, rápido e barato de manter. |
| Movimento | `arcane-motion.css/js`, `arcane-cinema` (camadas do hero) e `arcane-scrub` (programa da noite); sem GSAP | O kit já cobre; GSAP só se o roteiro pedir algo que o kit não faz. |
| Vídeo | 6 clipes MP4 H.264 de 6 a 8 s, sem áudio, 720x1280, ~1 MB cada, com `poster` em WebP | Só o hero toca ao abrir; os outros carregam ao chegar perto (IntersectionObserver). Respeita movimento reduzido e economia de dados. |
| Imagens | 6 imagens geradas no Figma (modelo `gpt-image-2.5-sunburst`, prompt de foto de celular sem retoque), em WebP (~60 a 350 KB) | Cada site tem foto própria; peso baixo para o celular. |
| Fontes | Auto-hospedadas (woff2): **Bodoni Moda** (títulos) + **Hanken Grotesk** (texto) | Sem Google Fonts no ar (privacidade e velocidade). |
| Banco de dados | Nenhum | Contato vai direto para o WhatsApp. |
| Login | Nenhum | Não há área restrita. |
| Pagamento | Nenhum | Preço é "sob consulta". |
| Orçamento | Modal com data, nº de convidados e tipo de festa; monta o texto e abre `wa.me` | Zero servidor, e o dono já recebe a conversa com o que precisa. |
| Hospedagem | Vercel **Pro** quando for cliente real (Hobby não vale). Exemplo: só prévia local por enquanto | Regra da base (`deploy-vercel.md`). **Pendente:** Gabriel confirmar o Pro antes de publicar a vitrine. |
| Domínio e DNS | Subdomínio de `arcanestudios.io` na Cloudflare para a vitrine | Sem domínio de cliente. |
| Integrações | WhatsApp, GA4 com consentimento (`arcane-analytics.js`), Google Maps por link (sem embed pesado) | O essencial dos 20 itens. |
| Backup | Repositório no GitHub + espelho semanal criptografado (`templates/backup/backup-repo.js`) | Site estático (`playbooks/backup.md`). Restauração a testar antes do deploy. |
| Segurança | Nível "estático" (`auditar-codigo.sh` e `auditar-site.sh`) | `playbooks/seguranca.md`. |

## Custo mensal estimado
- **Cliente:** mensalidade Arcane R$ 150 a 200. Domínio `.com.br` ~R$ 40/ano.
- **Arcane:** Vercel Pro (valor por conta, não por site), R2/B2 do backup em centavos.

## Riscos
- **Peso do vídeo no 4G:** só 1 clipe no carregamento; poster aparece primeiro.
- **Autoplay bloqueado** (economia de bateria no iOS): poster fica como imagem e a página segue bonita.
- **Direitos do vídeo de exemplo:** ver PRD. Para cliente real trocar os 6 clipes e não reutilizar estes.
- **Prévia fora do ar:** o Hobby da Vercel é proibido para uso comercial; vitrine só vai ao ar com plano Pro confirmado.
