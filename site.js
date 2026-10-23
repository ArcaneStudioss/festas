/* Site da casa de eventos (demo Arcane). Sem dependências.
   Depende de arcane-ui.js (Arcane.confirmar, entrada ao rolar). Tudo aqui é opcional: sem JS o site continua legível
   e os botões "Consultar data" levam para #reserva. */
(() => {
  'use strict';
  const d = document, root = d.documentElement;
  const $ = (s, o = d) => o.querySelector(s);
  const $$ = (s, o = d) => [...o.querySelectorAll(s)];
  const reduzir = matchMedia('(prefers-reduced-motion: reduce)');
  const lerSessao = k => { try { return sessionStorage.getItem(k); } catch { return null; } };
  const gravarSessao = (k, v) => { try { sessionStorage.setItem(k, v); } catch { /* sem armazenamento: a página de obrigado mostra a versão genérica */ } };

  /* 1. ?casa=Nome troca o nome da casa (só textContent, 40 caracteres, sem controle nem < >) */
  const casa = (new URLSearchParams(location.search).get('casa') || '').replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, 40);
  if (casa) {
    $$('[data-casa]').forEach(el => { el.textContent = casa; });
    if (d.title) d.title = d.title.replace(/^[^·]+/, casa + ' ');
    $$('a[data-keep-casa],a[href^="/politica-de-privacidade"],a[href="/"]').forEach(a => {
      const u = new URL(a.getAttribute('href'), location.href); u.searchParams.set('casa', casa);
      a.setAttribute('href', u.pathname + u.search + u.hash);
    });
  }

  /* 2. Menu em tela cheia (celular) */
  const menu = $('dialog.menu-painel');
  const abrirMenu = () => { if (menu && !menu.open) { menu.showModal(); root.classList.add('ui-lock'); } };
  const fecharMenu = () => { if (menu?.open) { menu.close(); } };
  menu?.addEventListener('close', () => { if (!$('dialog[open]')) root.classList.remove('ui-lock'); });
  $('[data-abrir-menu]')?.addEventListener('click', abrirMenu);
  $('[data-fechar-menu]')?.addEventListener('click', fecharMenu);
  menu?.addEventListener('click', e => { if (e.target === menu || e.target.closest('a[href^="#"]:not([data-abrir-reserva])')) fecharMenu(); });
  matchMedia('(min-width:960px)').addEventListener?.('change', e => { if (e.matches) fecharMenu(); });

  /* 3. Vídeo do topo: pausa manual e respeito a "reduzir movimento" */
  const video = $('.heroi video'), btnPausa = $('[data-pausa]');
  if (video && btnPausa) {
    const marcar = pausado => {
      btnPausa.setAttribute('aria-pressed', String(pausado));
      btnPausa.setAttribute('aria-label', pausado ? 'Tocar vídeo' : 'Pausar vídeo');
    };
    const pausar = () => { video.pause(); marcar(true); };
    const tocar = () => { video.play().then(() => marcar(false)).catch(() => marcar(true)); };
    if (reduzir.matches) { video.removeAttribute('autoplay'); pausar(); }
    btnPausa.addEventListener('click', () => (video.paused ? tocar() : pausar()));
    video.addEventListener('error', () => { btnPausa.hidden = true; });
    d.addEventListener('visibilitychange', () => { if (d.hidden) video.pause(); else if (btnPausa.getAttribute('aria-pressed') === 'false') video.play().catch(() => {}); });
  }

  /* 4. Relógio lateral (PC) acompanha a etapa da noite que está na tela */
  const atos = $$('[data-ato]'), marcas = $$('[data-rel]');
  if (atos.length && marcas.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const n = e.target.dataset.ato;
      marcas.forEach(m => m.classList.toggle('agora', m.dataset.rel === n));
    }), { rootMargin: '-45% 0px -45% 0px' });
    atos.forEach(a => io.observe(a));
  }

  /* 5. Barra fixa do celular aparece depois do topo */
  const barra = $('.cta-fixo'), heroi = $('.heroi');
  if (barra && heroi && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => barra.classList.toggle('escondida', e.isIntersecting), { threshold: 0.2 }).observe(heroi);
  }

  /* 6. FAQ: uma pergunta aberta por vez */
  $$('.faq details').forEach(det => det.addEventListener('toggle', () => {
    if (det.open) $$('.faq details').forEach(o => { if (o !== det) o.open = false; });
  }));

  /* 7. Galeria ampliada */
  const lb = $('dialog.lightbox');
  if (lb) {
    const fotos = $$('[data-lb] img');
    const img = $('[data-lb-img]', lb), cont = $('[data-lb-cont]', lb);
    let i = 0;
    const mostrar = n => {
      i = (n + fotos.length) % fotos.length;
      img.src = fotos[i].currentSrc || fotos[i].src; img.alt = fotos[i].alt;
      cont.textContent = (i + 1) + ' / ' + fotos.length;
    };
    $$('[data-lb]').forEach((b, n) => b.addEventListener('click', () => { mostrar(n); lb.showModal(); root.classList.add('ui-lock'); }));
    $('[data-lb-ant]', lb).addEventListener('click', () => mostrar(i - 1));
    $('[data-lb-prox]', lb).addEventListener('click', () => mostrar(i + 1));
    $('[data-lb-fechar]', lb).addEventListener('click', () => lb.close());
    lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
    lb.addEventListener('close', () => { if (!$('dialog[open]')) root.classList.remove('ui-lock'); });
    lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') mostrar(i - 1); if (e.key === 'ArrowRight') mostrar(i + 1); });
  }

  /* 8. Janela "Consultar data" (3 passos, simulada: nada é enviado) */
  const jan = $('dialog.reserva-janela');
  if (jan) {
    const form = $('form', jan);
    const secoes = $$('[data-passo]', jan).filter(s => s.tagName === 'SECTION');
    const pontos = $$('.rj__passos i', jan);
    const btnVoltar = $('[data-rj-voltar]', jan), btnAvancar = $('[data-rj-avancar]', jan);
    const est = { passo: 1, data: null, conv: 100, tipo: '', enviando: false };
    const fmtLongo = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    const fmtMes = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' });
    const fmtCurto = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });
    const hoje = new Date(); hoje.setHours(0, 0, 0, 0);
    const limite = new Date(hoje.getFullYear(), hoje.getMonth() + 24, 1);
    let vista = new Date(hoje.getFullYear(), hoje.getMonth(), 1);

    const erro = (k, msg) => {
      const el = $('[data-erro="' + k + '"]', jan); if (el) el.textContent = msg || '';
      const campo = { nome: '#rj-nome', zap: '#rj-zap' }[k];
      if (campo) $(campo, jan).setAttribute('aria-invalid', msg ? 'true' : 'false');
    };
    const limparErros = () => ['data', 'tipo', 'nome', 'zap', 'aceite'].forEach(k => erro(k, ''));

    /* calendário */
    const gradeDias = $('[data-cal-dias]', jan), rotMes = $('[data-cal-mes]', jan), rotSel = $('[data-cal-sel]', jan);
    const btnAnt = $('[data-cal-ant]', jan), btnProx = $('[data-cal-prox]', jan);
    const mesmoDia = (a, b) => a && b && a.getTime() === b.getTime();
    const desenharCal = () => {
      rotMes.textContent = fmtMes.format(vista);
      gradeDias.textContent = '';
      const total = new Date(vista.getFullYear(), vista.getMonth() + 1, 0).getDate();
      for (let v = 0; v < vista.getDay(); v++) { const s = d.createElement('span'); s.className = 'vazio'; gradeDias.append(s); }
      for (let n = 1; n <= total; n++) {
        const dia = new Date(vista.getFullYear(), vista.getMonth(), n);
        const b = d.createElement('button'); b.type = 'button'; b.textContent = n;
        b.setAttribute('aria-label', fmtLongo.format(dia));
        b.setAttribute('aria-pressed', String(mesmoDia(dia, est.data)));
        if (mesmoDia(dia, hoje)) b.classList.add('hoje');
        if (dia < hoje) b.disabled = true;
        b.addEventListener('click', () => { est.data = dia; erro('data', ''); atualizarResumo(); desenharCal(); });
        gradeDias.append(b);
      }
      btnAnt.disabled = vista <= new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      btnProx.disabled = new Date(vista.getFullYear(), vista.getMonth() + 1, 1) >= limite;
      rotSel.textContent = est.data ? fmtLongo.format(est.data) : '';
    };
    btnAnt.addEventListener('click', () => { vista = new Date(vista.getFullYear(), vista.getMonth() - 1, 1); desenharCal(); });
    btnProx.addEventListener('click', () => { vista = new Date(vista.getFullYear(), vista.getMonth() + 1, 1); desenharCal(); });

    /* convidados e tipo */
    const valorConv = $('[data-conv-valor]', jan);
    $$('[data-conv]', jan).forEach(b => b.addEventListener('click', () => {
      est.conv = Math.min(600, Math.max(10, est.conv + parseInt(b.dataset.conv, 10)));
      valorConv.textContent = est.conv; atualizarResumo();
    }));
    $$('input[name=tipo]', jan).forEach(r => r.addEventListener('change', () => { est.tipo = r.value; erro('tipo', ''); }));
    const marcarTipo = t => { const r = $$('input[name=tipo]', jan).find(x => x.value === t); if (r) { r.checked = true; est.tipo = t; erro('tipo', ''); } };

    /* WhatsApp com máscara */
    const campoZap = $('#rj-zap', jan), campoNome = $('#rj-nome', jan);
    campoZap.addEventListener('input', () => {
      const n = campoZap.value.replace(/\D/g, '').slice(0, 11);
      campoZap.value = n.length > 10 ? n.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3')
        : n.length > 6 ? n.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3')
        : n.length > 2 ? n.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2') : n;
      if (campoZap.getAttribute('aria-invalid') === 'true') erro('zap', '');
    });
    campoNome.addEventListener('input', () => { if (campoNome.getAttribute('aria-invalid') === 'true') erro('nome', ''); });

    /* resumo no convite da página */
    const vData = $('.campo[data-passo="1"] .v'), vConv = $('.campo[data-passo="2"] .v');
    const atualizarResumo = () => {
      if (vData) vData.textContent = est.data ? fmtCurto.format(est.data) : 'Escolher o dia';
      if (vConv) vConv.textContent = est.conv !== 100 || est.tipo ? est.conv + ' pessoas' : 'Quantas pessoas?';
    };

    /* passos */
    const irPara = n => {
      est.passo = n;
      secoes.forEach(s => { s.hidden = Number(s.dataset.passo) !== n; });
      pontos.forEach((p, k) => p.classList.toggle('on', k < n));
      btnVoltar.hidden = n === 1;
      btnAvancar.textContent = n === 3 ? 'Enviar pedido' : 'Continuar';
      if (n === 1) desenharCal();
      $('h2', secoes[n - 1])?.focus({ preventScroll: true });
      jan.scrollTop = 0;
    };
    const validar = n => {
      if (n === 1 && !est.data) { erro('data', 'Escolha o dia da festa para continuar.'); return false; }
      if (n === 2 && !est.tipo) { erro('tipo', 'Escolha o tipo de festa para continuar.'); return false; }
      if (n === 3) {
        let ok = true;
        const nome = campoNome.value.trim();
        if (nome.length < 2) { erro('nome', 'Diga seu nome para a gente saber com quem falar.'); ok = false; }
        const z = campoZap.value.replace(/\D/g, '');
        if (!(z.length === 10 || z.length === 11) || z[0] === '0' || (z.length === 11 && z[2] !== '9')) { erro('zap', 'Confira o WhatsApp: DDD e número, como (51) 99999-9999.'); ok = false; }
        if (!$('input[name=aceite]', jan).checked) { erro('aceite', 'Para enviar, aceite a política de privacidade.'); ok = false; }
        return ok;
      }
      return true;
    };
    btnVoltar.addEventListener('click', () => irPara(est.passo - 1));
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (est.enviando) return;
      limparErros();
      if (!validar(est.passo)) return;
      if (est.passo < 3) { irPara(est.passo + 1); return; }
      if (!est.data) { irPara(1); validar(1); return; }
      if (!est.tipo) { irPara(2); validar(2); return; }
      est.enviando = true; btnAvancar.disabled = true; btnAvancar.textContent = 'Enviando…';
      gravarSessao('demo-pedido', JSON.stringify({ data: fmtLongo.format(est.data), conv: est.conv, tipo: est.tipo, nome: campoNome.value.trim().slice(0, 60) }));
      setTimeout(() => { location.href = '/obrigado/' + (casa ? '?casa=' + encodeURIComponent(casa) : ''); }, 900);
    });

    /* abrir e fechar */
    const sujo = () => !!(est.data || est.tipo || est.conv !== 100 || campoNome.value.trim() || campoZap.value.trim());
    const fecharJanela = () => { if (jan.open) jan.close(); };
    const tentarFechar = async () => {
      if (est.enviando) return;
      if (sujo() && window.Arcane?.confirmar) {
        const sim = await Arcane.confirmar({ titulo: 'Descartar o pedido?', texto: 'O que você preencheu será apagado.', ok: 'Descartar', cancelar: 'Continuar preenchendo', perigo: true });
        if (jan.open) root.classList.add('ui-lock');
        if (!sim) return;
        form.reset(); Object.assign(est, { data: null, conv: 100, tipo: '' }); valorConv.textContent = '100'; limparErros(); atualizarResumo();
      }
      fecharJanela();
    };
    const abrir = ({ passo = 1, tipo = '' } = {}) => {
      if (menu?.open) menu.close();
      if (tipo) marcarTipo(tipo);
      limparErros();
      if (!jan.open) { jan.showModal(); root.classList.add('ui-lock'); }
      irPara(passo);
    };
    d.addEventListener('click', e => {
      const gatilho = e.target.closest?.('[data-abrir-reserva]');
      if (!gatilho) return;
      e.preventDefault();
      abrir({ passo: parseInt(gatilho.dataset.passo || '1', 10), tipo: gatilho.dataset.tipo || '' });
    });
    $('[data-rj-fechar]', jan).addEventListener('click', tentarFechar);
    jan.addEventListener('cancel', e => { e.preventDefault(); tentarFechar(); });
    jan.addEventListener('click', e => { if (e.target === jan) tentarFechar(); });
    jan.addEventListener('close', () => { if (!$('dialog[open]')) root.classList.remove('ui-lock'); });
    desenharCal();
  }

  /* 9. Página de obrigado: resumo do que foi digitado (só na aba, nada foi enviado) */
  const lista = $('[data-resumo]');
  if (lista) {
    let p = null; try { p = JSON.parse(lerSessao('demo-pedido') || 'null'); } catch { p = null; }
    if (p) {
      [['Data', p.data], ['Convidados', p.conv + ' pessoas'], ['Tipo de festa', p.tipo], ['Nome', p.nome]].forEach(([k, v]) => {
        const li = d.createElement('li'), a = d.createElement('span'), b = d.createElement('b');
        a.textContent = k; b.textContent = v; li.append(a, b); lista.append(li);
      });
      lista.hidden = false;
    }
  }
})();
