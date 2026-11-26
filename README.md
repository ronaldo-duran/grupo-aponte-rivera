# Grupo Aponte Rivera — sitio web

Sitio web corporativo del **Grupo Aponte Rivera** con la landing del **Club
Aponte Rivera** (el programa de fidelización del grupo).

Este repositorio es **solo el sitio de marketing**. La aplicación del Club
(PWA del cliente, cajero y panel) vive aparte, en
[`fidelizacion-GEAR`](https://github.com/ronaldo-duran/fidelizacion-GEAR), y se
publica en `club.grupoaponterivera.com`.

## Stack

- **[Astro](https://astro.build) 5** — sitio estático, cero JS por defecto.
- **[Tailwind CSS](https://tailwindcss.com) v4** — vía `@tailwindcss/vite`.
- **Fontsource** — fuentes auto-alojadas (sin CDN): Fraunces (display) + Figtree (texto).
- **Node 22** (ver `.nvmrc`).

## Comandos

```bash
npm install
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve dist/ para revisar el build
npm run format     # Prettier
npm run lint       # Prettier en modo check
```

## Estructura

```
src/
├── data/            Contenido editable (comercios, niveles, textos del club)
│   ├── grupo.ts
│   └── club.ts
├── layouts/
│   └── Base.astro   Cabeza, header, footer, SEO, animación al hacer scroll
├── components/      Header, Footer, Monograma, Icono, Check
├── pages/
│   ├── index.astro  Home del grupo
│   └── club.astro   Landing del Club Aponte Rivera
└── styles/
    └── global.css   Tokens de marca (azul noche + dorado) y utilidades
```

## Identidad visual

Dirección aprobada por el cliente: **azul noche + dorado**, tono
cinematográfico, con el monograma **AR**. Es la identidad del **grupo**,
distinta del verde del Club en la app.

Todos los colores, fuentes y tokens están en `src/styles/global.css` (bloque
`@theme`). Para reteñir el sitio se cambian ahí, en un solo lugar. **No pongas
hex sueltos en las vistas.**

## Contenido pendiente del cliente — `TODO(cliente)`

El scaffold usa textos de trabajo y datos de ejemplo marcados con
`TODO(cliente)` en `src/data/`. Falta confirmar:

- Nombres y sedes reales de los 15 comercios.
- Logo e identidad definitivos del grupo y del Club (hoy: monograma AR y logo provisional).
- Correo y canales de contacto reales.
- Umbrales de puntos definitivos (hoy son supuestos de diseño).

## Reglas de negocio que la copia debe respetar

Vienen del `CLAUDE.md` de `fidelizacion-GEAR`:

- **Los puntos son estatus, no moneda.** Nunca usar lenguaje de "canjear" o
  "gastar" puntos.
- Membresía confirmada: **solo Diamante**, $49.900/mes o $499.000/año.
- Los puntos tienen **vigencia de 1 año**.
- Registro del cliente: **tipo + número de documento y PIN**.
