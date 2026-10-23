/* =========================================================
   FAIRWEATHER FRIENDS, GEGEVENS VAN DE SITE

   De site is drietalig (NL, DE en EN). Velden die eindigen op
   _de zijn Duits, op _en Engels. Laat je er een weg, dan toont
   die taal gewoon de Nederlandse tekst.
   Dit is het enige bestand dat je normaal hoeft aan te passen.

   Let op de schrijfwijze: tekst tussen 'aanhalingstekens',
   en na elke regel of elk blokje { } een komma.
   ========================================================= */

const BAND = {
  email: 'band.fairweatherfriends@gmail.com',
  facebook: 'https://www.facebook.com/Band.FairweatherFriends',
  instagram: 'https://www.instagram.com/fairweather_friends.band/',
  instagramNaam: '@fairweather_friends.band',
};

/* ---------------------------------------------------------
   DE BAND
   foto (mag je weglaten): zet een portret in de map "fotos"
   en vul de bestandsnaam in, bijvoorbeeld foto: 'eline.jpg'
   --------------------------------------------------------- */
const LEDEN = [
  { naam: 'Pascal Velzeboer', foto: 'pascal.jpg', rol: 'Zang, cajon', rol_de: 'Gesang, Cajón', rol_en: 'Vocals, cajón' },
  { naam: 'Eline van den Berg', rol: 'Zang, akoestische gitaar', rol_de: 'Gesang, Akustikgitarre', rol_en: 'Vocals, acoustic guitar' },
  { naam: 'Finn Groenestein', rol: 'Zang, bas', rol_de: 'Gesang, Bass', rol_en: 'Vocals, bass' },
  { naam: 'Ray ter Riet', foto: 'ray.jpg', rol: 'Akoestische en elektrische gitaar', rol_de: 'Akustik- und E-Gitarre', rol_en: 'Acoustic and electric guitar' },
];

/* ---------------------------------------------------------
   REPERTOIRE
   lead: wie zingt de lead? 'P' = Pascal, 'E' = Eline, 'F' = Finn,
   'S' = samen. Twee stemmen kan ook: 'E+F'. Leeg laten mag.
   demo (mag je weglaten): fragment van ca. 30 sec. in de map "demos".
   Overgenomen uit de setlist van 21 juni 2025.
   --------------------------------------------------------- */
const REPERTOIRE = [
  { artiest: 'Incubus', titel: 'Drive', lead: 'P' },
  { artiest: 'Crosby, Stills, Nash & Young', titel: 'Carry On', lead: 'S' },
  { artiest: 'Gotye', titel: 'Somebody That I Used to Know', lead: 'E+F' },
  { artiest: 'The Beatles', titel: 'Blackbird', lead: 'F' },
  { artiest: 'Jon Allen', titel: 'Mercy', lead: '' },
  { artiest: 'P!nk', titel: 'The One That Got Away', lead: 'E' },
  { artiest: 'Damien Rice', titel: 'Volcano', lead: 'P+E' },
  { artiest: 'Oasis', titel: "Don't Look Back in Anger", lead: 'P' },
  { artiest: 'Foo Fighters', titel: 'Learn to Fly', lead: 'P' },
  { artiest: 'Khruangbin', titel: 'Texas Sun', lead: 'F' },
  { artiest: 'Gretchen Peters', titel: "The Aviator's Song", lead: 'E', demo: 'the-aviators-song.mp3' },
  { artiest: 'Maroon 5', titel: 'Sunday Morning', lead: 'F' },
  { artiest: 'Chris Stapleton', titel: 'Tennessee Whiskey', lead: 'P' },
  { artiest: 'David Gray', titel: 'Babylon', lead: 'P' },
  { artiest: 'Radiohead', titel: 'Street Spirit', lead: 'F', demo: 'street-spirit.mp3' },
  { artiest: 'Queens of the Stone Age', titel: 'Make It Wit Chu', lead: 'P' },
  { artiest: 'Crowded House', titel: "Don't Dream It's Over", lead: '' },
  { artiest: 'Eddie Vedder', titel: 'Society', lead: 'P' },
  { artiest: 'Neil Young', titel: 'Old Man', lead: 'P' },
  { artiest: 'Eagles', titel: 'Seven Bridges Road', lead: 'S', demo: 'seven-bridges-road.mp3' },
  { artiest: 'Elbow', titel: 'One Day Like This', lead: 'F' },
  { artiest: 'Oasis', titel: 'Live Forever', lead: 'E', demo: 'live-forever.mp3' },
  { artiest: 'Muse', titel: 'Supermassive Black Hole', lead: 'P' },
  { artiest: 'Chris Stapleton', titel: 'Starting Over', lead: 'P' },
  { artiest: 'Justin Timberlake & Chris Stapleton', titel: 'Say Something', lead: 'P' },
  { artiest: 'Crowded House', titel: 'Weather With You', lead: 'P' },
  { artiest: 'Eddie Vedder', titel: 'Hard Sun', lead: 'P', demo: 'hard-sun.mp3' },
  { artiest: 'Crosby, Stills & Nash', titel: 'Helplessly Hoping', lead: 'S' },
];

/* ---------------------------------------------------------
   AGENDA
   Eén blokje per optreden. Datum altijd als 'JJJJ-MM-DD'.
   Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld".
   status (mag je weglaten): 'uitverkocht', 'gratis' of 'besloten'
   tickets (mag je weglaten): link naar de kaartverkoop
   --------------------------------------------------------- */
const AGENDA = [
  // Nieuw optreden? Haal de // weg en pas de regel aan, bijvoorbeeld:
  // { datum: '2026-12-12', tijd: '21:00', zaal: 'Naam zaal', plaats: 'Stad', status: 'gratis' },
  // { datum: '2027-03-06', zaal: 'Naam Kneipe', plaats: 'Rees', land: 'DE' },
];

/* ---------------------------------------------------------
   VIDEO'S (YouTube)
   Neem het stukje na "v=" uit de YouTube-link.
   Voorbeeld: https://www.youtube.com/watch?v=abc123XYZ  ->  id: 'abc123XYZ'
   still (mag je weglaten): een beeld uit de video in de map "img".
   Zonder still toont de site het plaatje dat YouTube zelf kiest.
   --------------------------------------------------------- */
const VIDEOS = [
  { id: 'ng-nPEMZwTk', still: 'video-hard-sun.jpg', titel: 'Hard Sun', bij: 'Eddie Vedder cover by Fairweather Friends' },
  { id: 'kN9wM4zA20o', still: 'video-street-spirit.jpg', titel: 'Street Spirit', bij: 'Radiohead cover by Fairweather Friends' },
  // Nieuwe video? Kopieer een regel hierboven en vervang het id.
];

/* ---------------------------------------------------------
   FOTO'S
   Zet de foto's in de map "fotos" en noem ze hier.
   Zolang de lijst leeg is, blijft het fotoblok verborgen.
   --------------------------------------------------------- */
const FOTOS = [
  // { bestand: 'live-1.jpg', onderschrift: 'Live in ...', onderschrift_de: 'Live in ...', onderschrift_en: 'Live at ...' },
];

/* ---------------------------------------------------------
   RIDERS
   Zet de PDF's in de map "riders" en vul de bestandsnaam in.
   Leeg laten ('') betekent: "op aanvraag".
   --------------------------------------------------------- */
const RIDERS = [
  { titel: 'Technische rider', titel_de: 'Technischer Rider', titel_en: 'Technical rider',
    omschrijving: 'Stroom, podiumruimte en kanalenlijst', omschrijving_de: 'Strom, Bühnenfläche und Kanalliste', omschrijving_en: 'Power, stage space and input list', bestand: '' },
  { titel: 'Stageplot', titel_de: 'Bühnenplan', titel_en: 'Stage plot',
    omschrijving: 'Opstelling op het podium', omschrijving_de: 'Aufstellung auf der Bühne', omschrijving_en: 'Stage layout', bestand: '' },
];
