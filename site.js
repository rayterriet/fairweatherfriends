/* Fairweather Friends, site-logica. Normaal hoef je hier niets aan te veranderen:
   alle inhoud staat in gegevens.js. Vaste teksten van de site (NL, DE en EN)
   staan hieronder in TEKSTEN. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function el(tag, cls, tekst) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (tekst != null) e.textContent = tekst;
    return e;
  }
  // const-variabelen staan niet op window; daarom expliciet ophalen.
  var DATA = {
    BAND: typeof BAND !== 'undefined' ? BAND : {},
    LEDEN: typeof LEDEN !== 'undefined' ? LEDEN : [],
    REPERTOIRE: typeof REPERTOIRE !== 'undefined' ? REPERTOIRE : [],
    AGENDA: typeof AGENDA !== 'undefined' ? AGENDA : [],
    VIDEOS: typeof VIDEOS !== 'undefined' ? VIDEOS : [],
    FOTOS: typeof FOTOS !== 'undefined' ? FOTOS : [],
    RIDERS: typeof RIDERS !== 'undefined' ? RIDERS : []
  };

  /* ---------- Teksten ---------- */
  var TEKSTEN = {
    nl: {
      'top': 'Fairweather Friends, naar boven',
      'titel': 'Fairweather Friends | Akoestische coverband met drie leadstemmen',
      'menu': 'Hoofdmenu',
      'nav.over': 'Over', 'nav.band': 'Band', 'nav.agenda': 'Agenda', 'nav.fotos': "Foto's", 'nav.boek': 'Boeken',
      'hero.tag': 'Akoestisch. Meerstemmig. In een eigen jasje.',
      'hero.intro': 'Fairweather Friends speelt pop, rock, blues en alternatief, oud en nieuw, bekend en minder bekend. Met gitaren, bas, cajon en drie leadstemmen.',
      'stijl.alt': 'Alternatief', 'stijl.ak': 'Akoestisch',
      'hero.boek': 'Boek de band',
      'hero.lijst': 'Bekijk het repertoire',
      'volgende': 'Eerstvolgende optreden',
      'over.kop': 'Wat je hoort',
      'over.tekst': 'Fairweather Friends is een coverband met een eigen geluid. We spelen nummers van onder meer Neil Young, de Eagles, Radiohead, Crowded House en Chris Stapleton, en geven ze een eigen jasje. Soms rustig, soms groovend, soms allebei in één nummer. De band bestaat al een aantal jaar en speelt in Nederland en Duitsland.',
      'kenmerken': [
        ['Drie leadstemmen', 'Pascal, Eline en Finn wisselen de lead af en zingen samen meerstemmig.'],
        ['Akoestisch en elektrisch', 'Gitaren, bas en cajon. Van een huiskamer tot een festivalpodium.'],
        ['Eigen geluid', 'We nemen onze eigen installatie mee en doen het geluid zelf.'],
        ['Bekend en onbekend', 'Grote nummers naast pareltjes die je misschien nog niet kende.']
      ],
      'band.kop': 'De band',
      'band.intro': 'Vier ervaren muzikanten, drie leadstemmen.',
      'rep.intro': 'Uit onze setlist. Het bolletje laat zien wie de lead zingt. Bij een nummer met een afspeelknop hoor je een fragment van ons.',
      'rep.speel': 'Luister naar een fragment van ',
      'rep.samen': 'Samen',
      'rep.meer': 'En nog veel meer. Een verzoeknummer? Vraag het gerust.',
      'rep.lead': 'Lead: ',
      'agenda.kop': 'Agenda',
      'agenda.intro': 'Waar je ons binnenkort live kunt horen, in Nederland en Duitsland.',
      'agenda.leegkop': 'Nieuwe data volgen binnenkort',
      'agenda.leeg': 'Wil je ons boeken voor je café, feest of festival? <a href="#contact">Neem contact op</a>.',
      'agenda.eerder': 'Eerder gespeeld',
      'uur': ' uur',
      'chip.uitverkocht': 'Uitverkocht', 'chip.gratis': 'Gratis', 'chip.besloten': 'Besloten', 'chip.tickets': 'Tickets',
      'video.binnenkort': 'Binnenkort',
      'video.leeg': "Hier komen onze livevideo's te staan.",
      'video.speel': 'Speel video af: ',
      'fotos.kop': "Foto's",
      'fotos.vergroot': 'Vergroot: ',
      'org.kop': 'Voor organisatoren',
      'org.intro': 'Café, huiskamer, feest of festival: we passen ons aan de plek aan en nemen onze eigen geluidsinstallatie mee. Vragen over ruimte, stroom of techniek? Mail ons gerust.',
      'riders.download': 'Download PDF',
      'riders.aanvraag': 'Op aanvraag',
      'contact.kop': 'Boeken & contact',
      'contact.intro': 'Stuur een mail met de datum, de plaats en iets over de zaal of het feest, dan reageren we snel.',
      'contact.mail': 'Mail',
      'contact.volg': 'Volg ons',
      'kopieer': 'Kopieer', 'gekopieerd': 'Gekopieerd', 'geselecteerd': 'Geselecteerd',
      'voet': 'Akoestische coverband, Nederland en Duitsland',
      'sluit': 'Sluiten',
      'maanden': ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
      'dagen': ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
      'landen': { NL: 'Nederland', DE: 'Duitsland' }
    },
    de: {
      'top': 'Fairweather Friends, nach oben',
      'titel': 'Fairweather Friends | Akustische Coverband mit drei Leadstimmen',
      'menu': 'Hauptmenü',
      'nav.over': 'Über uns', 'nav.band': 'Band', 'nav.agenda': 'Termine', 'nav.fotos': 'Fotos', 'nav.boek': 'Buchen',
      'hero.tag': 'Akustisch. Mehrstimmig. Ganz im eigenen Stil.',
      'hero.intro': 'Fairweather Friends spielt Pop, Rock, Blues und Alternative, alte und neue Songs, bekannte und weniger bekannte. Mit Gitarren, Bass, Cajón und drei Leadstimmen.',
      'stijl.alt': 'Alternative', 'stijl.ak': 'Akustisch',
      'hero.boek': 'Band buchen',
      'hero.lijst': 'Zum Repertoire',
      'volgende': 'Nächster Auftritt',
      'over.kop': 'Was ihr hört',
      'over.tekst': 'Fairweather Friends ist eine Coverband mit eigenem Sound. Wir spielen Songs von Neil Young, den Eagles, Radiohead, Crowded House, Chris Stapleton und vielen anderen, ganz im eigenen Stil. Mal ruhig, mal mit Groove, manchmal beides in einem Song. Die Band gibt es schon einige Jahre, wir spielen in den Niederlanden und in Deutschland.',
      'kenmerken': [
        ['Drei Leadstimmen', 'Pascal, Eline und Finn wechseln sich am Lead ab und singen mehrstimmig zusammen.'],
        ['Akustisch und elektrisch', 'Gitarren, Bass und Cajón. Vom Wohnzimmer bis zur Festivalbühne.'],
        ['Eigene Technik', 'Wir bringen unsere eigene Anlage mit und machen den Sound selbst.'],
        ['Bekannt und unbekannt', 'Große Songs neben kleinen Perlen, die ihr vielleicht noch nicht kennt.']
      ],
      'band.kop': 'Die Band',
      'band.intro': 'Vier erfahrene Musiker, drei Leadstimmen.',
      'rep.intro': 'Aus unserer Setlist. Der Punkt zeigt, wer den Lead singt. Bei Songs mit Play-Knopf könnt ihr in unsere Version reinhören.',
      'rep.speel': 'Hört rein: ',
      'rep.samen': 'Zusammen',
      'rep.meer': 'Und vieles mehr. Ein Musikwunsch? Fragt einfach.',
      'rep.lead': 'Lead: ',
      'agenda.kop': 'Termine',
      'agenda.intro': 'Wo ihr uns demnächst live hören könnt, in den Niederlanden und in Deutschland.',
      'agenda.leegkop': 'Neue Termine folgen bald',
      'agenda.leeg': 'Ihr möchtet uns für eure Kneipe, Feier oder euer Festival buchen? <a href="#contact">Schreibt uns</a>.',
      'agenda.eerder': 'Bisherige Auftritte',
      'uur': ' Uhr',
      'chip.uitverkocht': 'Ausverkauft', 'chip.gratis': 'Eintritt frei', 'chip.besloten': 'Privat', 'chip.tickets': 'Tickets',
      'video.binnenkort': 'Demnächst',
      'video.leeg': 'Hier erscheinen bald unsere Live-Videos.',
      'video.speel': 'Video abspielen: ',
      'fotos.kop': 'Fotos',
      'fotos.vergroot': 'Vergrößern: ',
      'org.kop': 'Für Veranstalter',
      'org.intro': 'Kneipe, Wohnzimmer, Feier oder Festival: Wir passen uns dem Ort an und bringen unsere eigene Anlage mit. Fragen zu Platz, Strom oder Technik? Schreibt uns einfach.',
      'riders.download': 'PDF herunterladen',
      'riders.aanvraag': 'Auf Anfrage',
      'contact.kop': 'Buchung & Kontakt',
      'contact.intro': 'Schickt uns eine Mail mit Datum, Ort und ein paar Worten zum Saal oder zur Feier, dann melden wir uns schnell.',
      'contact.mail': 'E-Mail',
      'contact.volg': 'Folgt uns',
      'kopieer': 'Kopieren', 'gekopieerd': 'Kopiert', 'geselecteerd': 'Markiert',
      'voet': 'Akustische Coverband, Niederlande und Deutschland',
      'sluit': 'Schließen',
      'maanden': ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      'dagen': ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
      'landen': { NL: 'Niederlande', DE: 'Deutschland' }
    },
    en: {
      'top': 'Fairweather Friends, back to top',
      'titel': 'Fairweather Friends | Acoustic covers band with three lead voices',
      'menu': 'Main menu',
      'nav.over': 'About', 'nav.band': 'Band', 'nav.agenda': 'Gigs', 'nav.fotos': 'Photos', 'nav.boek': 'Booking',
      'hero.tag': 'Acoustic. In harmony. In our own style.',
      'hero.intro': 'Fairweather Friends play pop, rock, blues and alternative, old and new, well known and less known. With guitars, bass, cajón and three lead voices.',
      'stijl.alt': 'Alternative', 'stijl.ak': 'Acoustic',
      'hero.boek': 'Book the band',
      'hero.lijst': 'See the songs',
      'volgende': 'Next gig',
      'over.kop': "What you'll hear",
      'over.tekst': 'Fairweather Friends is a covers band with a sound of its own. We play songs by Neil Young, the Eagles, Radiohead, Crowded House, Chris Stapleton and more, each in our own style. Laid back, grooving, sometimes both in one song. The band has been around for a few years and plays in the Netherlands and Germany.',
      'kenmerken': [
        ['Three lead voices', 'Pascal, Eline and Finn take turns on lead and sing together in harmony.'],
        ['Acoustic and electric', 'Guitars, bass and cajón. From a living room to a festival stage.'],
        ['Our own sound', 'We bring our own PA and run our own sound.'],
        ['Hits and hidden gems', "Big songs next to gems you might not know yet."]
      ],
      'band.kop': 'The band',
      'band.intro': 'Four experienced musicians, three lead voices.',
      'rep.intro': 'From our setlist. The dot shows who sings lead. Songs with a play button have a short clip of our version.',
      'rep.speel': 'Play a clip of ',
      'rep.samen': 'Together',
      'rep.meer': 'And plenty more. Got a request? Just ask.',
      'rep.lead': 'Lead: ',
      'agenda.kop': 'Gigs',
      'agenda.intro': 'Where to hear us live soon, in the Netherlands and Germany.',
      'agenda.leegkop': 'New dates coming soon',
      'agenda.leeg': 'Want us at your pub, party or festival? <a href="#contact">Get in touch</a>.',
      'agenda.eerder': 'Previous gigs',
      'uur': '',
      'chip.uitverkocht': 'Sold out', 'chip.gratis': 'Free entry', 'chip.besloten': 'Private', 'chip.tickets': 'Tickets',
      'video.binnenkort': 'Coming soon',
      'video.leeg': 'Our live videos will appear here.',
      'video.speel': 'Play video: ',
      'fotos.kop': 'Photos',
      'fotos.vergroot': 'Enlarge: ',
      'org.kop': 'For promoters',
      'org.intro': 'Pub, living room, party or festival: we adapt to the venue and bring our own PA. Questions about space, power or tech? Just drop us a line.',
      'riders.download': 'Download PDF',
      'riders.aanvraag': 'On request',
      'contact.kop': 'Booking & contact',
      'contact.intro': "Send us an email with the date, the place and a bit about the venue or party, and we'll get back to you quickly.",
      'contact.mail': 'Email',
      'contact.volg': 'Follow us',
      'kopieer': 'Copy', 'gekopieerd': 'Copied', 'geselecteerd': 'Selected',
      'voet': 'Acoustic covers band, the Netherlands and Germany',
      'sluit': 'Close',
      'maanden': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'dagen': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'landen': { NL: 'Netherlands', DE: 'Germany' }
    }
  };

  function startTaal() {
    try { var t = localStorage.getItem('ff-taal'); if (TEKSTEN[t]) return t; } catch (e) {}
    var eerste = ((navigator.languages || [navigator.language || 'nl'])[0] || '').toLowerCase();
    if (/^nl/.test(eerste)) return 'nl';
    if (/^de/.test(eerste)) return 'de';
    return 'en';
  }
  var taal = startTaal();
  function T(k) { return TEKSTEN[taal][k] != null ? TEKSTEN[taal][k] : TEKSTEN.nl[k]; }
  // Kies het veld in de huidige taal (bv. rol_de) als dat bestaat.
  function V(obj, veld) { return (taal !== 'nl' && obj[veld + '_' + taal]) ? obj[veld + '_' + taal] : obj[veld]; }

  /* ---------- Vaste teksten ---------- */
  function vasteTeksten() {
    document.documentElement.lang = taal === 'en' ? 'en' : taal;
    document.title = T('titel');
    document.querySelectorAll('[data-t]').forEach(function (n) { n.textContent = T(n.dataset.t); });
    document.querySelectorAll('[data-th]').forEach(function (n) { n.innerHTML = T(n.dataset.th); });
    document.querySelectorAll('[data-ta]').forEach(function (n) {
      var p = n.dataset.ta.split(':'); n.setAttribute(p[0], T(p[1]));
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === taal));
    });
  }

  /* ---------- Kenmerken ---------- */
  function kenmerken() {
    $('kenmerken').replaceChildren();
    T('kenmerken').forEach(function (k) {
      var li = el('li', 'kenmerk');
      li.appendChild(el('div', 'kenmerk-kop', k[0]));
      li.appendChild(el('p', null, k[1]));
      $('kenmerken').appendChild(li);
    });
  }

  /* ---------- De band ---------- */
  function band() {
    $('leden').replaceChildren();
    DATA.LEDEN.forEach(function (l) {
      if (!l || !l.naam) return;
      var li = el('li', 'lid');
      if (l.foto) {
        var img = el('img', 'lid-foto');
        img.src = 'fotos/' + l.foto; img.alt = l.naam; img.loading = 'lazy';
        li.appendChild(img);
      } else {
        var ini = el('div', 'lid-initiaal', l.naam.charAt(0));
        ini.setAttribute('aria-hidden', 'true');
        li.appendChild(ini);
      }
      li.appendChild(el('h3', 'lid-naam', l.naam));
      if (l.rol) li.appendChild(el('p', 'lid-rol', V(l, 'rol')));
      $('leden').appendChild(li);
    });
  }

  /* ---------- Repertoire ---------- */
  var STEMMEN = { P: 'Pascal', E: 'Eline', F: 'Finn' };
  function stemNaam(c) { return c === 'S' ? T('rep.samen') : (STEMMEN[c] || c); }
  function repertoire() {
    $('legenda').replaceChildren();
    ['P', 'E', 'F', 'S'].forEach(function (c) {
      var li = el('li');
      li.appendChild(el('span', 'stip stip-' + c));
      li.appendChild(document.createTextNode(stemNaam(c)));
      $('legenda').appendChild(li);
    });
    $('rep').replaceChildren();
    DATA.REPERTOIRE.forEach(function (n) {
      if (!n || !n.titel) return;
      var li = el('li', 'nummer');
      li.appendChild(el('span', 'nummer-titel', n.titel));
      if (n.lead) {
        var codes = String(n.lead).toUpperCase().split('+').map(function (s) { return s.trim(); }).filter(Boolean);
        var stem = el('span', 'nummer-stem');
        stem.setAttribute('title', T('rep.lead') + codes.map(stemNaam).join(', '));
        codes.forEach(function (c) { stem.appendChild(el('span', 'stip stip-' + c)); });
        stem.appendChild(el('span', 'sr-only', T('rep.lead') + codes.map(stemNaam).join(', ')));
        li.appendChild(stem);
      }
      li.appendChild(el('span', 'nummer-artiest', n.artiest || ''));
      if (n.demo) {
        var knop = el('button', 'fragment');
        knop.type = 'button';
        knop.dataset.demo = 'demos/' + n.demo;
        knop.setAttribute('aria-pressed', 'false');
        knop.setAttribute('aria-label', T('rep.speel') + n.titel);
        knop.title = T('rep.speel') + n.titel;
        var ring = el('span', 'fragment-ring');
        ring.setAttribute('aria-hidden', 'true');
        knop.appendChild(ring);
        var ikoon = el('span', 'fragment-ikoon');
        ikoon.setAttribute('aria-hidden', 'true');
        knop.appendChild(ikoon);
        knop.addEventListener('click', function () { speel(knop); });
        li.appendChild(knop);
        li.classList.add('met-fragment');
      }
      $('rep').appendChild(li);
    });
  }

  /* ---------- Fragmenten: één speler voor de hele lijst ---------- */
  var speler = new Audio();
  speler.preload = 'none';
  var actief = null;
  function zetStand(knop, aan) {
    if (!knop) return;
    knop.setAttribute('aria-pressed', String(aan));
    knop.classList.toggle('speelt', aan);
    if (!aan) knop.style.setProperty('--voortgang', '0');
  }
  function stopFragment() {
    speler.pause();
    zetStand(actief, false);
    actief = null;
  }
  function speel(knop) {
    if (actief === knop && !speler.paused) { stopFragment(); return; }
    if (actief !== knop) {
      zetStand(actief, false);
      actief = knop;
      speler.src = knop.dataset.demo;
    }
    zetStand(knop, true);
    var p = speler.play();
    if (p && p.catch) p.catch(function () { zetStand(knop, false); actief = null; });
  }
  speler.addEventListener('timeupdate', function () {
    if (actief && speler.duration) actief.style.setProperty('--voortgang', String(speler.currentTime / speler.duration));
  });
  speler.addEventListener('ended', stopFragment);
  speler.addEventListener('error', function () { zetStand(actief, false); actief = null; });

  /* ---------- Agenda ---------- */
  function datum(s) { var p = String(s).split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  var vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
  var gigs = DATA.AGENDA.filter(function (g) { return g && g.datum; })
    .map(function (g) { return Object.assign({ d: datum(g.datum) }, g); })
    .sort(function (a, b) { return a.d - b.d; });
  var komend = gigs.filter(function (g) { return g.d >= vandaag; });
  var oud = gigs.filter(function (g) { return g.d < vandaag; }).reverse();

  function gigRij(g, metActie) {
    var M = T('maanden'), D = T('dagen');
    var li = el('li', 'gig');
    var t = el('time', 'gig-datum');
    t.setAttribute('datetime', g.datum);
    t.appendChild(el('span', 'gig-dag', String(g.d.getDate())));
    t.appendChild(el('span', 'gig-maand', M[g.d.getMonth()]));
    li.appendChild(t);
    var wat = el('div', 'gig-wat');
    wat.appendChild(el('div', 'gig-zaal', V(g, 'zaal') || ''));
    var meta = D[g.d.getDay()] + ' ' + g.d.getDate() + ' ' + M[g.d.getMonth()] + ' ' + g.d.getFullYear();
    if (g.plaats) meta += ', ' + V(g, 'plaats');
    if (g.land && T('landen')[g.land]) meta += ' (' + T('landen')[g.land] + ')';
    if (g.tijd) meta += ', ' + g.tijd + T('uur');
    wat.appendChild(el('div', 'gig-meta', meta));
    li.appendChild(wat);
    if (metActie) {
      var actie = el('div', 'gig-actie');
      if (g.status === 'uitverkocht') actie.appendChild(el('span', 'chip uitverkocht', T('chip.uitverkocht')));
      else if (g.tickets) {
        var a = el('a', 'chip', T('chip.tickets'));
        a.href = g.tickets; a.target = '_blank'; a.rel = 'noopener';
        actie.appendChild(a);
      } else if (g.status === 'gratis') actie.appendChild(el('span', 'chip gratis', T('chip.gratis')));
      else if (g.status === 'besloten') actie.appendChild(el('span', 'chip besloten', T('chip.besloten')));
      if (actie.childNodes.length) li.appendChild(actie);
    }
    return li;
  }
  function agenda() {
    $('gigs').replaceChildren(); $('gigs-oud').replaceChildren();
    komend.forEach(function (g) { $('gigs').appendChild(gigRij(g, true)); });
    $('gigs').hidden = komend.length === 0;
    $('gigs-leeg').hidden = komend.length > 0;
    if (oud.length) {
      oud.forEach(function (g) { $('gigs-oud').appendChild(gigRij(g, false)); });
      $('eerder').hidden = false;
    }
    if (komend.length) {
      var v = komend[0];
      $('volgende').textContent = T('volgende') + ': ' + v.d.getDate() + ' ' + T('maanden')[v.d.getMonth()] + ', ' + V(v, 'zaal') + (v.plaats ? ', ' + V(v, 'plaats') : '');
      $('volgende').hidden = false;
    }
  }

  /* ---------- Video ---------- */
  function video() {
    $('videos').replaceChildren();
    DATA.VIDEOS.forEach(function (v) {
      if (!v || !v.id) return;
      var titel = V(v, 'titel') || '';
      var id = encodeURIComponent(v.id);
      var fig = el('figure', 'video');
      // Een gewone link naar YouTube; op de eigen site speelt hij de video ter plekke af.
      var knop = el('a', 'video-speler');
      knop.href = 'https://www.youtube.com/watch?v=' + id;
      knop.target = '_blank'; knop.rel = 'noopener';
      knop.setAttribute('aria-label', T('video.speel') + titel);
      var plaat = el('span', 'video-plaat');
      plaat.setAttribute('aria-hidden', 'true');
      plaat.appendChild(el('span', 'video-plaat-titel', titel));
      knop.appendChild(plaat);
      var img = el('img');
      img.alt = ''; img.loading = 'lazy';
      img.addEventListener('error', function () { img.remove(); });
      img.src = v.still ? 'img/' + v.still : 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
      knop.appendChild(img);
      knop.appendChild(el('span', 'speel', '▶ Play'));
      knop.addEventListener('click', function (e) {
        if (window.self !== window.top) return; // in een ingesloten voorbeeld: open YouTube
        e.preventDefault();
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        f.title = titel || 'Video';
        knop.replaceChildren(f);
      }, { once: true });
      fig.appendChild(knop);
      var onder = el('figcaption');
      onder.appendChild(el('span', 'video-titel', titel));
      if (v.bij) onder.appendChild(el('span', 'video-bij', V(v, 'bij')));
      fig.appendChild(onder);
      $('videos').appendChild(fig);
    });
    $('videos-leeg').hidden = $('videos').children.length > 0;
  }

  /* ---------- Foto's ---------- */
  var lb = $('lichtbak');
  function toon(src, alt, tekst) {
    $('lichtbak-img').src = src; $('lichtbak-img').alt = alt || '';
    $('lichtbak-tekst').textContent = tekst || '';
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
  }
  function fotos() {
    $('foto-grid').replaceChildren();
    DATA.FOTOS.forEach(function (f) {
      if (!f || !f.bestand) return;
      var onder = V(f, 'onderschrift') || '';
      var fig = el('figure', 'foto');
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-label', T('fotos.vergroot') + (onder || f.bestand));
      var img = el('img');
      img.src = 'fotos/' + f.bestand; img.alt = onder; img.loading = 'lazy';
      b.appendChild(img);
      b.addEventListener('click', function () { toon(img.src, img.alt, onder); });
      fig.appendChild(b);
      if (onder) fig.appendChild(el('figcaption', null, onder));
      $('foto-grid').appendChild(fig);
    });
    var heeft = $('foto-grid').children.length > 0;
    $('fotos').hidden = !heeft;
    $('nav-fotos').hidden = !heeft;
  }
  $('sluit').addEventListener('click', function () { lb.close ? lb.close() : lb.removeAttribute('open'); });
  lb.addEventListener('click', function (e) { if (e.target === lb && lb.close) lb.close(); });

  /* ---------- Riders ---------- */
  function riders() {
    $('riders-lijst').replaceChildren();
    DATA.RIDERS.forEach(function (r) {
      var li = el('li', 'rider');
      var t = el('div');
      t.appendChild(el('div', 'rider-titel', V(r, 'titel')));
      if (r.omschrijving) t.appendChild(el('div', 'rider-tekst', V(r, 'omschrijving')));
      li.appendChild(t);
      var bestand = V(r, 'bestand');
      if (bestand) {
        var a = el('a', 'chip', T('riders.download'));
        a.href = 'riders/' + bestand; a.target = '_blank'; a.rel = 'noopener';
        li.appendChild(a);
      } else {
        li.appendChild(el('span', 'chip op-aanvraag', T('riders.aanvraag')));
      }
      $('riders-lijst').appendChild(li);
    });
  }

  /* ---------- Contact ---------- */
  var B = DATA.BAND;
  if (B.email) { $('mail').textContent = B.email; $('mail').href = 'mailto:' + B.email; }
  if (B.facebook) $('fb').href = B.facebook;
  if (B.instagram) {
    $('ig').href = B.instagram;
    $('ig-naam').textContent = B.instagramNaam || '';
    $('ig-rij').hidden = false;
  }
  $('kopieer').addEventListener('click', function () {
    var knop = this;
    function klaar(k) { knop.textContent = T(k); setTimeout(function () { knop.textContent = T('kopieer'); }, 1800); }
    function selecteer() {
      var r = document.createRange(); r.selectNodeContents($('mail'));
      var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      klaar('geselecteerd');
    }
    try {
      navigator.clipboard.writeText(B.email).then(function () { klaar('gekopieerd'); }, selecteer);
    } catch (e) { selecteer(); }
  });

  /* ---------- Vindbaarheid: optredens als gestructureerde gegevens voor Google ---------- */
  // Zomer- of wintertijd in Nederland/Duitsland op die datum: +02:00 of +01:00
  function tijdzone(datum) {
    try {
      var uur = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Amsterdam', hour: '2-digit', hourCycle: 'h23' })
        .format(new Date(datum + 'T12:00:00Z'));
      return uur === '14' ? '+02:00' : '+01:00';
    } catch (e) { return '+01:00'; }
  }
  (function () {
    if (!komend.length) return;
    var events = komend.map(function (g) {
      return {
        '@type': 'MusicEvent',
        'name': 'Fairweather Friends' + (g.zaal ? ' in ' + g.zaal : ''),
        'startDate': g.datum + (g.tijd ? 'T' + g.tijd + ':00' + tijdzone(g.datum) : ''),
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'location': {
          '@type': 'Place',
          'name': g.zaal || g.plaats,
          'address': { '@type': 'PostalAddress', 'addressLocality': g.plaats || '', 'addressCountry': g.land || 'NL' }
        },
        'image': 'https://fairweatherfriends.nl/img/deelbeeld.jpg',
        'description': 'Fairweather Friends speelt pop, rock, blues en alternatief, akoestisch en met drie leadstemmen.',
        'performer': { '@type': 'MusicGroup', '@id': 'https://fairweatherfriends.nl/#band', 'name': 'Fairweather Friends' },
        'organizer': { '@type': 'Organization', 'name': g.zaal || 'Fairweather Friends', 'url': g.tickets || 'https://fairweatherfriends.nl/' },
        'url': g.tickets || 'https://fairweatherfriends.nl/#agenda',
        'isAccessibleForFree': g.status === 'gratis'
      };
    });
    var sc = document.createElement('script');
    sc.type = 'application/ld+json';
    sc.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': events });
    document.head.appendChild(sc);
  })();

  /* ---------- Alles tekenen, en opnieuw bij taalwissel ---------- */
  function teken() {
    stopFragment();
    vasteTeksten(); kenmerken(); band(); repertoire(); agenda(); video(); fotos(); riders();
  }
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.dataset.lang === taal) return;
      taal = b.dataset.lang;
      try { localStorage.setItem('ff-taal', taal); } catch (e) {}
      teken();
    });
  });
  teken();
})();
