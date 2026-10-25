/*!
 * FieldOps Gen Pro — embeddable chat widget (Phase 10).
 * Vanilla JS, zero dependencies, Shadow DOM style isolation, EN/ES.
 *
 * Install (paste before </body>):
 *   <script src="https://chat.mosbisystems.com/widget/v1/fieldops-chat.js"
 *           data-widget-key="fop_live_xxx" data-lang="auto" async></script>
 *
 * Optional attributes: data-api (gateway base URL), data-accent (hex),
 * data-demo="true" (offline scripted demo, no network), data-manual="true"
 * (do not auto-start; call FieldOpsChat.create(options)).
 *
 * Security: no secrets live here. The widget only sends the public widget
 * key; the gateway checks the origin allowlist and quota server-side.
 */
(function (global) {
  'use strict';

  var DEFAULT_API = 'https://chat.mosbisystems.com/v1';
  var POLL_MS = 4000;
  var HEX = /^#[0-9a-fA-F]{3,8}$/;

  var I18N = {
    en: {
      title: 'Chat with us',
      open: 'Open chat',
      minimize: 'Minimize chat',
      send: 'Send',
      placeholder: 'Type your message…',
      aiNotice: 'You are chatting with an AI assistant. A human can join at any time.',
      human: 'Talk to a person',
      humanSent: 'A dispatcher has been notified and will reply here shortly.',
      typing: 'Typing…',
      error: 'Something went wrong. Please try again.',
      langToggle: 'Español',
      langToggleLabel: 'Switch to Spanish',
      formIntro: 'Our assistant is unavailable right now. Leave your details and we will call you back.',
      name: 'Your name',
      phone: 'Phone',
      email: 'Email',
      address: 'Service address',
      description: 'What is happening?',
      submit: 'Send request',
      formDone: 'Request received. Our team will contact you soon.',
      formInvalid: 'Please add your name, phone or email, address and a description.',
      staff: 'Team',
      ai: 'Assistant'
    },
    es: {
      title: 'Chatea con nosotros',
      open: 'Abrir chat',
      minimize: 'Minimizar chat',
      send: 'Enviar',
      placeholder: 'Escriba su mensaje…',
      aiNotice: 'Está conversando con un asistente de IA. Una persona puede unirse en cualquier momento.',
      human: 'Hablar con una persona',
      humanSent: 'Se avisó a un despachador; responderá aquí en breve.',
      typing: 'Escribiendo…',
      error: 'Algo salió mal. Inténtelo de nuevo.',
      langToggle: 'English',
      langToggleLabel: 'Cambiar a inglés',
      formIntro: 'Nuestro asistente no está disponible ahora. Deje sus datos y le devolvemos la llamada.',
      name: 'Su nombre',
      phone: 'Teléfono',
      email: 'Correo',
      address: 'Dirección del servicio',
      description: '¿Qué está pasando?',
      submit: 'Enviar solicitud',
      formDone: 'Solicitud recibida. Nuestro equipo le contactará pronto.',
      formInvalid: 'Agregue su nombre, teléfono o correo, dirección y una descripción.',
      staff: 'Equipo',
      ai: 'Asistente'
    }
  };

  var CSS = [
    ':host{all:initial}',
    '*{box-sizing:border-box;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.launcher{position:fixed;right:20px;bottom:20px;width:56px;height:56px;border-radius:50%;border:0;',
    'background:linear-gradient(135deg,#1e4d5c,#0284c7);color:#fff;cursor:pointer;box-shadow:0 6px 20px rgba(14,165,233,.4);font-size:24px;z-index:2147483000}',
    '.launcher:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid #38BDF8;outline-offset:2px}',
    '.panel{position:fixed;right:20px;bottom:88px;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 110px));',
    'display:none;flex-direction:column;background:#0d1627;color:#f8fafc;border:1px solid rgba(148,163,184,.2);border-radius:14px;',
    'box-shadow:0 16px 40px rgba(0,0,0,.6);overflow:hidden;z-index:2147483000}',
    '.panel.open{display:flex}',
    'header{display:flex;align-items:center;gap:8px;padding:12px 14px;background:linear-gradient(135deg,#1e4d5c,#0284c7);color:#fff}',
    'header img{width:28px;height:28px;border-radius:6px;object-fit:cover;background:#fff}',
    'header img[hidden]{display:none}',
    'header .name{flex:1;font-weight:700;font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    'header button{background:rgba(255,255,255,.18);color:#fff;border:0;border-radius:8px;min-height:36px;min-width:36px;padding:0 10px;cursor:pointer;font-size:13px}',
    '.notice{padding:8px 14px;font-size:12px;background:rgba(14,165,233,.15);color:#38bdf8;border-bottom:1px solid rgba(148,163,184,.16)}',
    '.log{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#09101d}',
    '.msg{max-width:85%;padding:9px 12px;border-radius:12px;font-size:14px;line-height:1.4;white-space:pre-wrap;word-break:break-word}',
    '.msg small{display:block;font-size:11px;opacity:.75;margin-bottom:2px;font-weight:600}',
    '.msg.visitor{align-self:flex-end;background:linear-gradient(135deg,#1e4d5c,#0284c7);color:#fff}',
    '.msg.ai,.msg.staff{align-self:flex-start;background:#132038;color:#f8fafc;border:1px solid rgba(148,163,184,.16)}',
    '.msg.staff{background:rgba(14,165,233,.2);border-color:#0ea5e9}',
    '.status{font-size:12px;color:#94a3b8;padding:0 14px 4px;min-height:18px}',
    '.bar{display:flex;gap:8px;padding:10px;border-top:1px solid rgba(148,163,184,.16);background:#0d1627}',
    '.bar input{flex:1;min-height:44px;padding:0 12px;border:1px solid rgba(148,163,184,.25);border-radius:10px;font-size:14px;background:#132038;color:#fff}',
    '.bar button,.form button{min-height:44px;padding:0 16px;border:0;border-radius:10px;background:linear-gradient(135deg,#1e4d5c,#0284c7);color:#fff;font-weight:700;cursor:pointer}',
    '.bar button:disabled,.form button:disabled{opacity:.55;cursor:default}',
    '.human{margin:0 10px 8px;min-height:44px;border:1px solid #0284c7;background:#132038;color:#38bdf8;border-radius:10px;font-weight:600;cursor:pointer}',
    '.form{display:none;flex-direction:column;gap:8px;padding:12px;overflow-y:auto;background:#0d1627;color:#f8fafc}',
    '.form.show{display:flex}',
    '.form label{font-size:13px;font-weight:600;display:flex;flex-direction:column;gap:4px;color:#f8fafc}',
    '.form input,.form textarea{min-height:44px;padding:8px 10px;border:1px solid rgba(148,163,184,.25);border-radius:10px;font-size:14px;background:#132038;color:#fff}',
    '.form p{margin:0;font-size:13px;color:#94a3b8}',
    '@media (prefers-reduced-motion:no-preference){.panel.open{animation:pop .15s ease-out}}',
    '@keyframes pop{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}'
  ].join('');

  function detectLang(pref) {
    if (pref === 'en' || pref === 'es') return pref;
    var n = (global.navigator && (global.navigator.language || '')) || 'en';
    return n.toLowerCase().indexOf('es') === 0 ? 'es' : 'en';
  }

  function el(tag, attrs, text) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === 'class') node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    if (text != null) node.textContent = text;
    return node;
  }

  /** Callable-protocol transport: POST {data} -> {result} | {error}. */
  function httpTransport(apiBase) {
    return {
      call: function (name, data) {
        return fetch(apiBase.replace(/\/$/, '') + '/' + name, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({data: data})
        }).then(function (res) {
          return res.json().then(function (body) {
            if (body && body.error) {
              var e = new Error(body.error.message || 'error');
              e.code = body.error.status;
              throw e;
            }
            return body.result;
          });
        });
      }
    };
  }

  /** Offline scripted transport used by the marketing landing demo. */
  function demoTransport() {
    return {
      call: function (name, data) {
        return new Promise(function (resolve) {
          setTimeout(function () {
            var es = data && data.locale === 'es';
            if (name === 'chatSession') {
              resolve({
                tenantId: 'demo', conversationId: 'demo-conv', quotaExceeded: false,
                greeting: es
                  ? '¡Hola! Soy el asistente de IA de Cielo Frío HVAC. ¿En qué podemos ayudarle?'
                  : 'Hello! I am the AI assistant for Cool Sky HVAC. How can we help?',
                branding: {companyName: es ? 'Cielo Frío HVAC' : 'Cool Sky HVAC', accent: '#1D4ED8', logoUrl: ''}
              });
            } else if (name === 'chatMessage') {
              var low = String(data.text || '').toLowerCase();
              var reply;
              if (/price|cost|precio|cu[aá]nto/.test(low)) {
                reply = es ? 'Un técnico confirma el costo en sitio; no puedo inventar precios. ¿Desea agendar una visita?'
                  : 'A technician confirms cost on site; I cannot quote prices. Would you like to schedule a visit?';
              } else if (/cool|air|enfr|aire|\bac\b/.test(low)) {
                reply = es ? 'Lamento eso. Puedo registrar una solicitud de servicio. ¿Nombre, teléfono y dirección?'
                  : 'Sorry about that. I can log a service request. Name, phone and address, please?';
              } else {
                reply = es ? 'Atendemos de lunes a viernes de 8:00 a 17:00. ¿Desea que registre una solicitud?'
                  : 'We are open Mon–Fri 8:00–17:00. Want me to log a service request?';
              }
              resolve({conversationId: 'demo-conv', status: 'ai', replyText: reply});
            } else if (name === 'chatHandoff') {
              resolve({conversationId: 'demo-conv', status: 'waitingHuman'});
            } else if (name === 'chatPoll') {
              resolve({status: 'ai', messages: []});
            } else {
              resolve({inboundRequestId: 'demo-request'});
            }
          }, 450);
        });
      }
    };
  }

  function create(options) {
    options = options || {};
    var state = {
      lang: detectLang(options.lang),
      open: false,
      session: null,
      sinceMs: 0,
      seen: {},
      pollTimer: null,
      busy: false,
      quotaExceeded: false,
      status: 'ai'
    };
    var transport = options.demo ? demoTransport() : httpTransport(options.apiBase || DEFAULT_API);
    var host = el('div', {'data-fieldops-chat': ''});
    var root = host.attachShadow({mode: 'open'});
    host.style.setProperty('--accent', HEX.test(options.accent || '') ? options.accent : '#1D4ED8');

    var style = el('style');
    style.textContent = CSS;
    var launcher = el('button', {class: 'launcher', type: 'button', 'aria-haspopup': 'dialog', 'aria-expanded': 'false'}, '💬');
    var panel = el('section', {class: 'panel', role: 'dialog', 'aria-modal': 'false'});
    var header = el('header');
    var logo = el('img', {alt: '', hidden: ''});
    var nameEl = el('span', {class: 'name'});
    var langBtn = el('button', {type: 'button'});
    var minBtn = el('button', {type: 'button'}, '–');
    header.appendChild(logo);
    header.appendChild(nameEl);
    header.appendChild(langBtn);
    header.appendChild(minBtn);
    var notice = el('div', {class: 'notice'});
    var log = el('div', {class: 'log', role: 'log', 'aria-live': 'polite', 'aria-relevant': 'additions'});
    var statusEl = el('div', {class: 'status', 'aria-live': 'polite'});
    var humanBtn = el('button', {class: 'human', type: 'button'});
    var bar = el('form', {class: 'bar'});
    var input = el('input', {type: 'text', autocomplete: 'off', maxlength: '4000'});
    var sendBtn = el('button', {type: 'submit'});
    bar.appendChild(input);
    bar.appendChild(sendBtn);

    var form = el('form', {class: 'form', novalidate: ''});
    var formIntro = el('p');
    form.appendChild(formIntro);
    var fields = {};
    ['name', 'phone', 'email', 'address'].forEach(function (k) {
      var lab = el('label');
      var span = el('span');
      var inp = el('input', {type: k === 'email' ? 'email' : k === 'phone' ? 'tel' : 'text', name: k});
      lab.appendChild(span);
      lab.appendChild(inp);
      form.appendChild(lab);
      fields[k] = {span: span, input: inp};
    });
    var descLab = el('label');
    var descSpan = el('span');
    var descInput = el('textarea', {name: 'description', rows: '3'});
    descLab.appendChild(descSpan);
    descLab.appendChild(descInput);
    var formMsg = el('p', {role: 'status'});
    var submitBtn = el('button', {type: 'submit'});
    form.appendChild(descLab);
    form.appendChild(formMsg);
    form.appendChild(submitBtn);

    panel.appendChild(header);
    panel.appendChild(notice);
    panel.appendChild(log);
    panel.appendChild(statusEl);
    panel.appendChild(humanBtn);
    panel.appendChild(bar);
    panel.appendChild(form);
    root.appendChild(style);
    root.appendChild(launcher);
    root.appendChild(panel);

    function t(key) { return I18N[state.lang][key]; }

    function applyLang() {
      var s = I18N[state.lang];
      var company = state.session && state.session.branding && state.session.branding.companyName;
      panel.setAttribute('aria-label', company || s.title);
      nameEl.textContent = company || s.title;
      launcher.setAttribute('aria-label', s.open);
      minBtn.setAttribute('aria-label', s.minimize);
      langBtn.textContent = s.langToggle;
      langBtn.setAttribute('aria-label', s.langToggleLabel);
      notice.textContent = s.aiNotice;
      humanBtn.textContent = s.human;
      input.setAttribute('aria-label', s.placeholder);
      input.setAttribute('placeholder', s.placeholder);
      sendBtn.textContent = s.send;
      formIntro.textContent = s.formIntro;
      fields.name.span.textContent = s.name;
      fields.phone.span.textContent = s.phone;
      fields.email.span.textContent = s.email;
      fields.address.span.textContent = s.address;
      descSpan.textContent = s.description;
      submitBtn.textContent = s.submit;
    }

    function addMessage(m) {
      if (m.id && state.seen[m.id]) return;
      if (m.id) state.seen[m.id] = true;
      var b = el('div', {class: 'msg ' + m.role});
      if (m.role !== 'visitor') b.appendChild(el('small', null, m.role === 'staff' ? t('staff') : t('ai')));
      b.appendChild(document.createTextNode(m.text));
      log.appendChild(b);
      log.scrollTop = log.scrollHeight;
      if (typeof m.atMs === 'number' && m.atMs > state.sinceMs) state.sinceMs = m.atMs;
    }

    function setBusy(v, text) {
      state.busy = v;
      sendBtn.disabled = v;
      statusEl.textContent = v ? (text || t('typing')) : '';
    }

    function showForm(show) {
      form.classList.toggle('show', show);
      bar.style.display = show ? 'none' : 'flex';
      humanBtn.style.display = show ? 'none' : 'block';
      log.style.display = show ? 'none' : 'flex';
    }

    function ensureSession() {
      if (state.session) return Promise.resolve(state.session);
      setBusy(true, '…');
      return transport.call('chatSession', {
        widgetKey: options.widgetKey,
        origin: global.location ? global.location.origin : '',
        locale: state.lang
      }).then(function (res) {
        state.session = res;
        state.quotaExceeded = !!res.quotaExceeded;
        var b = res.branding || {};
        if (HEX.test(b.accent || '') && !options.accent) host.style.setProperty('--accent', b.accent);
        if (/^https:\/\//.test(b.logoUrl || '')) {
          logo.src = b.logoUrl;
          logo.hidden = false;
        }
        applyLang();
        addMessage({id: 'greeting', role: 'ai', text: res.greeting, atMs: 0});
        if (state.quotaExceeded) showForm(true);
        setBusy(false);
        return res;
      }).catch(function (err) {
        setBusy(false);
        statusEl.textContent = t('error');
        throw err;
      });
    }

    function poll() {
      if (!state.session || !state.open) return;
      transport.call('chatPoll', {
        tenantId: state.session.tenantId,
        conversationId: state.session.conversationId,
        sinceMs: state.sinceMs
      }).then(function (res) {
        state.status = res.status;
        (res.messages || []).forEach(function (m) {
          if (m.role !== 'visitor') addMessage(m);
        });
      }).catch(function () { /* transient; retry next tick */ });
    }

    function stopPolling() {
      if (state.pollTimer) global.clearInterval(state.pollTimer);
      state.pollTimer = null;
    }
    function startPolling() {
      stopPolling();
      state.pollTimer = global.setInterval(poll, POLL_MS);
    }

    function setOpen(v) {
      state.open = v;
      panel.classList.toggle('open', v);
      launcher.setAttribute('aria-expanded', String(v));
      if (v) {
        ensureSession().then(function () {
          if (!state.quotaExceeded) input.focus();
          startPolling();
        }).catch(function () {});
      } else {
        stopPolling();
        launcher.focus();
      }
    }

    launcher.addEventListener('click', function () { setOpen(!state.open); });
    minBtn.addEventListener('click', function () { setOpen(false); });
    root.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && state.open) setOpen(false);
    });
    langBtn.addEventListener('click', function () {
      state.lang = state.lang === 'en' ? 'es' : 'en';
      applyLang();
    });

    bar.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text || state.busy || !state.session) return;
      input.value = '';
      addMessage({role: 'visitor', text: text, atMs: 0});
      setBusy(true);
      transport.call('chatMessage', {
        tenantId: state.session.tenantId,
        conversationId: state.session.conversationId,
        text: text,
        locale: state.lang
      }).then(function (res) {
        state.status = res.status;
        if (res.replyText) addMessage({id: 'r' + Date.now(), role: 'ai', text: res.replyText, atMs: 0});
        if (res.quotaExceeded) { state.quotaExceeded = true; showForm(true); }
        setBusy(false);
      }).catch(function () {
        setBusy(false);
        statusEl.textContent = t('error');
      });
    });

    humanBtn.addEventListener('click', function () {
      if (!state.session) return;
      transport.call('chatHandoff', {
        tenantId: state.session.tenantId,
        conversationId: state.session.conversationId,
        reason: 'Visitor requested human handoff'
      }).then(function () {
        statusEl.textContent = t('humanSent');
      }).catch(function () { statusEl.textContent = t('error'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var sr = {
        contactName: fields.name.input.value.trim(),
        phone: fields.phone.input.value.trim(),
        email: fields.email.input.value.trim(),
        address: fields.address.input.value.trim(),
        description: descInput.value.trim()
      };
      if (!sr.contactName || !sr.address || !sr.description || (!sr.phone && !sr.email)) {
        formMsg.textContent = t('formInvalid');
        return;
      }
      submitBtn.disabled = true;
      transport.call('chatRequestService', {
        widgetKey: options.widgetKey,
        origin: global.location ? global.location.origin : '',
        serviceRequest: sr
      }).then(function () {
        formMsg.textContent = t('formDone');
        form.reset();
      }).catch(function () {
        formMsg.textContent = t('error');
      }).then(function () { submitBtn.disabled = false; });
    });

    applyLang();
    (options.container || document.body).appendChild(host);
    return {
      open: function () { setOpen(true); },
      close: function () { setOpen(false); },
      host: host
    };
  }

  function autoStart() {
    var script = document.currentScript || document.querySelector('script[data-widget-key]');
    if (!script || script.getAttribute('data-manual') === 'true') return;
    var key = script.getAttribute('data-widget-key');
    var demo = script.getAttribute('data-demo') === 'true';
    if (!key && !demo) return;
    var boot = function () {
      create({
        widgetKey: key,
        lang: script.getAttribute('data-lang') || 'auto',
        apiBase: script.getAttribute('data-api') || DEFAULT_API,
        accent: script.getAttribute('data-accent') || '',
        demo: demo
      });
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
  }

  global.FieldOpsChat = {create: create, version: '1.0.0'};
  autoStart();
})(typeof window !== 'undefined' ? window : this);
