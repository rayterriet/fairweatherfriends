# Fairweather Friends

Website van Fairweather Friends, akoestische coverband met drie leadstemmen. In het Nederlands, Duits en Engels.

## Inhoud aanpassen

Bijna alles staat in **`gegevens.js`**: de band, het repertoire, de agenda, video's, foto's, riders en de contactgegevens.

Op GitHub: open `gegevens.js`, klik op het potloodje, pas iets aan en klik op **Commit changes**.

- **Optreden toevoegen:** zet een regel in `AGENDA`, met de datum als `'JJJJ-MM-DD'`. Optredens in het verleden verhuizen vanzelf naar "Eerder gespeeld".
- **Video toevoegen:** neem het id uit de YouTube-link (het stukje na `v=` of na `youtu.be/`). Een eigen still mag in de map `img`.
- **Foto's:** zet ze in een map `fotos` en noem ze in `FOTOS`. Zolang die lijst leeg is, blijft het fotoblok verborgen.
- **Riders:** zet de PDF's in een map `riders` en vul de bestandsnaam in.

## Na een wijziging

Bezoekers kunnen een oude versie tot 10 minuten in hun browser bewaren. Wil je dat een wijziging meteen bij iedereen zichtbaar is, verhoog dan in `index.html` het versienummer achter `?v=` (bijvoorbeeld van `20261021c` naar `20261021d`).

## Vindbaarheid

- `index.html` bevat een beschrijving, deelinformatie voor social media en gestructureerde gegevens (MusicGroup) voor Google.
- Optredens in `AGENDA` worden automatisch als MusicEvent aan Google doorgegeven.
- `robots.txt` en `sitemap.xml` wijzen zoekmachines de weg.

## Bestanden

| Bestand | Wat |
| --- | --- |
| `index.html` | De pagina |
| `gegevens.js` | Alle inhoud, hier pas je dingen aan |
| `site.js` | Opbouw van de pagina en de vaste teksten in NL, DE en EN |
| `style.css` | Vormgeving |
| `img/` | Logo, monogram, deelbeeld en video-stills |
| `demos/` | Fragmenten van 30 seconden voor de repertoirelijst |
| `fotos/` | Portretten van de bandleden |
| `robots.txt`, `sitemap.xml` | Voor zoekmachines |

## Online zetten met GitHub Pages

Settings → Pages → Source: *Deploy from a branch*, branch `main`, map `/ (root)`.
Voor een eigen domein (fairweatherfriends.nl) vul je dat daar in onder *Custom domain*.
