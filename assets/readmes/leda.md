<div align="center">
  <img src="docs/images/leda-logo.svg" width="72" alt="Logo da L.E.D.A" />

  <h1>L.E.D.A</h1>
  <h3>Live Environment Diagnostic Assistant</h3>
  <p>Local, continuous and visual monitoring for application health.</p>
</div>

## About

L.E.D.A is a Windows desktop sentinel that monitors HTTP/HTTPS endpoints, detects unavailability or slowness, and keeps the user informed about application health.

Checks continue in the background when the window is closed. When an application fails, degrades, or recovers, L.E.D.A can show a native Windows notification.

## Main features

- Desktop dashboard with a black, silver, and yellow visual identity.
- Application registration, editing, pause, and removal.
- HTTP status code validation and optional response-body text validation.
- Operational, degraded, unavailable, and pending states.
- History of the last 180 checks per application, uptime and response-time metrics.
- State-change timeline, native Windows notifications, and automatic startup.
- Local-only storage with no data sent to external services.

## Stack

- Electron
- React 18
- Vite
- Node.js
- JavaScript

## Run locally

```powershell
npm install
npm run dev
```

## Tests and build

```powershell
npm test
npm run build
npm run build:win
```
