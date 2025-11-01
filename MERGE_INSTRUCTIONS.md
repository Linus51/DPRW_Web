# Minimal Patch: E-Mail-Templates + Discord-Webhook + Apply-API

Kopiere die Dateien/Ordner aus diesem ZIP **in dein Projekt** (Wurzelverzeichnis, wo deine package.json liegt).
Falls Pfade schon existieren, ersetze die Dateien.

## Enthalten
- lib/email.ts
- lib/discord.ts
- templates/email/application-confirmation.html
- templates/email/application-confirmation.txt
- templates/email/application-admin.html
- templates/email/application-admin.txt
- app/api/apply/route.ts  (ersetzt deine aktuelle Apply-Route)
- env.additions.example   (ergänzt Variablen für .env)

## Schritte
1) **Backup**: Lege vorher ein Backup deiner bestehenden `app/api/apply/route.ts` an.
2) **Dateien kopieren**: Ziehe die Ordner `lib/`, `templates/`, `app/` und die Datei `env.additions.example` in dein Projekt.
3) **.env** anpassen**: Öffne `.env` und füge die Variablen aus `env.additions.example` hinzu bzw. passe sie an.
4) **Installieren**:
   ```bash
   npm install nodemailer
   ```
5) **Test**:
   ```bash
   npm run dev
   # Bewerbungsformular absenden und prüfen:
   # - Bewerber erhält Bestätigungsmail
   # - (optional) ADMIN_NOTIFY_EMAIL erhält Mail
   # - (optional) Discord-Kanal bekommt Nachricht
   ```

> Hinweis: Diese Patch-Dateien gehen davon aus, dass du bereits eine Prisma-Tabelle `Application` mit Feldern `name`, `email`, `message`, optional `age` hast und `app/api/apply/route.ts` FormData annimmt.