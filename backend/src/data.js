export const posts = [
  {
    id: "1",
    title: "Weniger Overengineering: Wie ich schneller Features shippe",
    excerpt:
      "Fünf Gewohnheiten, die wirklich Tempo bringen: weniger Abstraktionen, klarere Konventionen und ein bisschen Disziplin.",
    content: `
Heute teile ich einen einfachen Ansatz: Wenn ein Feature keine komplexe Architektur verlangt, bekommt es auch keine.

### Was ich geändert habe
- Keine "universellen" Komponenten mit 200 Props mehr.
- Klare Konventionen: wo API-Clients liegen, wo Seiten, wo Shared-Komponenten.
- Erst ein vertikaler Schnitt: UI → Request → Verarbeitung → Happy Path.

### Ergebnis
Mehr Geschwindigkeit, weniger Bugs, angenehmere Reviews. Refactoring folgt später — dann, wenn klar ist, dass die Stelle wirklich wichtig ist.
    `.trim(),
    author: { name: "Ilya", role: "Full-Stack Developer" },
    tags: ["react", "architektur", "praxis"],
    createdAt: "2025-11-06",
    readingMinutes: 6,
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "2",
    title: "Mini-Guide: Docker Compose für kleine Projekte",
    excerpt:
      "Frontend + Backend in Minuten: Ports, Environment-Variablen und typische Stolperfallen — am Beispiel eines Mini-Blogs.",
    content: `
Docker Compose ist perfekt, um ein kleines Projekt so zu verpacken, dass es mit einem Befehl startet.

### Minimal-Setup
- Service: backend
- Service: frontend
- ports
- depends_on

### Häufige Fehler
- Interne und externe Ports verwechseln.
- API-URL hart verdrahten statt über env.
- Dev-Dependencies in den Produktions-Container schleppen.

Wenn du gerade anfängst: halte es simpel und gut lesbar.
    `.trim(),
    author: { name: "Anja", role: "DevOps (ein bisschen)" },
    tags: ["docker", "compose", "devops"],
    createdAt: "2025-10-18",
    readingMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "3",
    title: "Notizen zu sauberen APIs: weniger Endpoints, mehr Sinn",
    excerpt:
      "Warum manchmal ein /posts und ein paar Filter-Parameter besser sind als zehn ähnliche Routen.",
    content: `
Wenn ein API zur "Zoo"-Sammlung aus ähnlichen Endpoints wird, wird alles teurer: Client, Tests, Wartung.

### Mein Prinzip
Ein Ressourcentyp — ein Endpoint:
- GET /posts?tag=react&query=architektur
- GET /posts/:id

### Vorteile
- leichter zu dokumentieren
- leichter zu cachen
- leichter zu erweitern

Und ja: Filter sind okay, solange sie vernünftig bleiben.
    `.trim(),
    author: { name: "Sergej", role: "Backend Engineer" },
    tags: ["api", "rest", "best-practices"],
    createdAt: "2025-09-02",
    readingMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
  }
];
