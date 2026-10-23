# 2. TRD: com que peças

| Peça | Escolha | Por quê |
|---|---|---|
| Código | HTML, CSS e JS estáticos a partir de `templates/site-starter/` | Demo não tem dados; estático é rápido, barato e fácil de copiar para cada casa. |
| Fontes | Bodoni Moda e Hanken Grotesk (Google Fonts, com `font-display: swap`) | Bodoni segura bem os acentos do português; Hanken lê bem no celular. |
| Vídeo do topo | MP4 H.264 horizontal, até 8 s, 1080p, até 4 MB, com poster em JPG | Carrega rápido; sem áudio para tocar sozinho no celular. |
| Mídia | Fotos livres (Unsplash/Pexels) ou geradas; **todas com licença anotada** em `docs/MIDIA.md` | Evita problema de direito de imagem. |
| Movimento | `arcane-motion.css` + `arcane-ui.js` do starter, mais `IntersectionObserver` | Segue `playbooks/animations.md`; sem GSAP nesta linha. |
| Banco de dados | Nenhum | Formulário só simula. |
| Login | Nenhum | Não há área restrita. |
| Pagamento | Nenhum | Não vende nada. |
| Hospedagem | Vercel (plano Pro da Arcane; o Hobby não vale para uso comercial) | É site básico; ver `playbooks/deploy-vercel.md`. |
| Domínio e DNS | `demo-eventos.arcanestudios.io`, DNS na Cloudflare | Subdomínio nosso, sem custo. |
| Indexação | `noindex` e `robots.txt` bloqueando | Demo não deve competir no Google nem aparecer como casa real. |
| Integrações | GA4 com consentimento (desligado até haver ID); mapa embutido de exemplo; WhatsApp só no rodapé de exemplo | Cumpre os 20 itens sem coletar dado de ninguém na demo. |
| Cache | CSS e JS com `?v=<data>` a cada deploy | Regra da base (lição da Discloud). |
| Backup | Repositório `arcanestudioss/festas` no GitHub + espelho semanal criptografado (`templates/backup/backup-repo.js`) | Site estático: o código é o dado; restauração testada clonando e abrindo. |
| Segurança | Nível estático: `auditar-codigo.sh` antes e `auditar-site.sh URL` depois, cabeçalhos no `vercel.json` | Ver `playbooks/seguranca.md`. |

## Personalização `?casa=`
Lida com `URLSearchParams`, limitada a 40 caracteres, inserida só com `textContent` (nunca `innerHTML`) para não abrir brecha de injeção. Sem o parâmetro, aparece `[Nome da casa]`.

## Custo mensal
- Cliente: nenhum (demo). Arcane: Vercel Pro já pago + R$ 0 de domínio. Sites derivados: mensalidade R$ 90 a 150.

## Riscos
- Vídeo livre horizontal de salão em vermelho pode não existir; plano B: trocar a cor via grade de cor (gradiente) sobre vídeo de salão neutro, e avisar o Gabriel.
- Peso das fotos: converter para WebP, `loading="lazy"` e `srcset`.
- Demo com cara de casa real: faixa "Demonstração" visível no topo e na página de obrigado.
