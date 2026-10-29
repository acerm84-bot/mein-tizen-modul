# Mein TizenBrew-Modul (Starter)

Ein minimales, lauffähiges **App-Modul** für TizenBrew: eine eigene Startseite
mit Kacheln, Pfeiltasten-Navigation und App-Start per Tizen-App-ID.

## Aufbau

| Datei             | Zweck |
|-------------------|-------|
| `package.json`    | Modul-Metadaten. `packageType: "app"`, `appPath` zeigt auf die Startseite, `keys` registriert die Fernbedienungstasten. |
| `app/index.html`  | Die Oberfläche. Hier passt du Kacheln, Design und Aktionen an. |
| `service.js`      | Optionaler Node-Hintergrunddienst. Kann entfallen (dann auch aus `package.json` löschen). |

## Anpassen

- **Kacheln:** Im `<script>` von `index.html` das Array `TILES` bearbeiten.
  - `type: "app"` + `id: "<App-ID>"` startet eine installierte Tizen-App.
  - `type: "url"` + `url: "..."` öffnet eine Webseite.
- **App-IDs herausfinden:** mit dem Fernbedienungs-Skript dieses Ordners, z. B.
  `python tv.py app 111299001912`. Bekannte IDs: YouTube `111299001912`.

## Auf dem Fernseher laden

TizenBrew lädt Module aus einem **öffentlichen GitHub-Repo** über jsDelivr.

1. Entwicklermodus am Fernseher aktivieren und TizenBrew installieren
   (siehe TizenBrew-Doku).
2. Diesen Ordner in ein öffentliches GitHub-Repo pushen, z. B.
   `acerm84-bot/mein-tizen-modul` (die `package.json` muss im Wurzelverzeichnis liegen).
3. In TizenBrew → **Add Module** eingeben:
   `gh/acerm84-bot/mein-tizen-modul@main`
   Das `@main` sorgt dafür, dass Updates gezogen werden (ohne Version cacht jsDelivr dauerhaft).

## Hinweise

- Kein Root, kein Firmware-Eingriff: läuft als Web-App über den Entwicklermodus.
- Entwicklermodus/Fremd-Apps können die Garantie berühren und nach Firmware-Updates
  brechen. Auf eigenes Risiko und nur mit deinem eigenen Gerät.
