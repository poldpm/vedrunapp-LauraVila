/* ============================================================
   PERSONALITZACIONS DE LAURA VILA — personal.js
   ------------------------------------------------------------
   A l'app MARE aquest fitxer és BUIT a posta. A l'app de cada
   mestra hi va tot el que és seu i només seu.

   Es carrega l'ÚLTIM de tots, quan la resta de l'app ja hi és,
   i `sync-filla.js` no el trepitja mai: així una mestra es pot
   personalitzar tant com calgui sense que cap fitxer del base
   divergeixi, i continua rebent tots els arranjaments.

   ⚠ La regla que ho fa sostenible: **el que sigui per a ella, aquí.**
   Si es toca `app.js`, `perfil.js` o `notes.js` dins de la seva
   carpeta, aquell fitxer deixa de rebre arranjaments per sempre.

   ------------------------------------------------------------
   COM S'HI FAN LES COSES

   Embolcallar una funció que ja existeix, sense modificar-la:

     var orig = window.perfilSave;
     window.perfilSave = function () {
       var r = orig.apply(this, arguments);
       ferLaMevaCosa();
       return r;
     };

   Canviar una pantalla sencera: redefinir la funció que la pinta.
   Afegir una eina nova: escriure-la aquí i penjar-la del menú.

   Si el que necessita una mestra el necessitaran també les altres,
   val més fer-ho **opció al base per a tothom** que repetir-ho a
   cada app (com ja es va fer amb els objectius, l'estil dels
   comentaris, els aspectes d'actitud i els enllaços).

   Veure FILLES.md.
   ============================================================ */

/* ============================================================
   L'AVÍS DE L'INICI
   ------------------------------------------------------------
   La targeta vermella de sobre «Possibles actualitzacions». El
   text viu a l'index.html; aquí només hi diu QUIN avís toca.

   Aquesta app el té perquè ha fet servir l'assistent i se li ha de
   dir que ja no hi és. Una app nova no neix amb aquesta línia: no
   té sentit donar l'adéu a una eina que no ha tingut mai.

   Quan la mestra el marqui com a llegit, no li tornarà a sortir
   (es desa al seu perfil i per tant també al mòbil). Aquesta línia
   es pot treure d'aquí quan ja faci temps que el va llegir.
   ============================================================ */
window.AVIS_INICI = 'adeu-assistent';

/* ============================================================
   LES EINES OPCIONALS QUE TÉ ENCESES
   ------------------------------------------------------------
   El codi d'aquestes dues eines ve del base i el porten totes les
   apps, però neixen APAGADES: només les veu qui les demana. Un botó
   vermell nou a cada targeta d'alumne, o una pàgina nova al menú, no
   se li han d'aparèixer a ningú sense haver-los demanat.

   La Laura les va demanar totes dues el 16/10/2026.

   ⚠ Aquí NO s'hi puja mai la versió de l'app (`sw.js`, `js/versio.js`,
   `versio.json`): aquells són fitxers base i la propera
   sincronització amb la mare ho revertiria.
   ============================================================ */

/* Avisar la família d'una incidència — el botó vermell de cada
   targeta d'alumne, la finestra per explicar què ha passat i
   l'apartat del compte a la fitxa. Veure `js/incidencies.js`. */
window.EINES_INCIDENCIES = true;

/* Rúbriques d'avaluació d'activitats — «Rúbriques» al menú, l'editor
   de criteris i nivells, la graella d'avaluar i el pas de la nota al
   registre. Veure `js/rubaval-ui.js`. */
window.EINES_RUBAVAL = true;
