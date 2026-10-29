// Optionaler Hintergrunddienst (NodeJS), läuft auf dem Fernseher mit.
// Wird nur geladen, wenn in package.json "serviceFile" gesetzt ist.
// Hier kannst du z. B. lokale Dienste abfragen oder Daten bereitstellen.

module.exports = {
  onStart() {
    console.log("[mein-modul] Service gestartet");
  },
  onStop() {
    console.log("[mein-modul] Service gestoppt");
  },
};
