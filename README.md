# Casa de eventos · demonstração (Arcane Studios)

Site estático de demonstração para casas de eventos e festas: topo com vídeo, roteiro da noite (salão, mesa, cenário, pista), galeria, convite de reserva com janela simulada, FAQ e mapa. Serve para mostrar a prospects; **nada é enviado a ninguém**.

- Documentos do projeto: `docs/` (PRD, TRD, Fluxo, Design, Back-end, Plano) e `docs/MIDIA.md` (origem das fotos e do vídeo).
- Rodar local: `python3 -m http.server 8099` e abrir `http://localhost:8099/`.
- Personalizar por link: `/?casa=Nome da Casa` troca o nome do local no site.
- Hospedagem: Vercel (plano Pro), `demo-eventos.arcanestudios.io`. O `vercel.json` já traz os cabeçalhos de segurança e o `noindex`.
- Ao publicar uma versão nova, mudar o `?v=` dos arquivos CSS e JS no HTML (regra de cache da base).
- Pendências antes de ir ao ar: número de WhatsApp real (hoje `5500000000000`), domínio, backup externo (R2/B2).
