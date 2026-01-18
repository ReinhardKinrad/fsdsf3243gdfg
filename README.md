# Simple Blog (React + Express + Docker)

Ein kleines Blog-Demo: Frontend mit **React (Vite)** und Backend mit **Node.js/Express** (REST API).
Alles läuft per **Docker Compose**.

## Start

Im Projekt-Root:

```bash
docker compose up --build
```

Öffnen:
- Frontend: http://localhost:5173
- Backend Healthcheck: http://localhost:8080/health

## Features
- Liste von Blogposts (mit Cover, Tags, Autor, Datum)
- Suche (Text) und Filter nach Tag
- Detailseite pro Post

## Hinweise
- Die Posts sind Demo-Daten im Backend (`backend/src/data.js`).
- Das Frontend liest die API-URL aus `VITE_API_URL`.
