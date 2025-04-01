# TCG-sort

**TCG-sort** is a cross-platform application for sorting and managing your trading card game collection. Built using a modern monorepo setup, it supports both **web** and **mobile** platforms using shared UI and logic.

## Monorepo Structure

```bash
tcg-sort/
├── apps/
│   ├── web/           # Web app (Next.js)
│   └── mobile/        # Mobile app (Expo + React Native)
├── packages/
│   ├── ui/            # Shared UI components
│   └── utils/         # Shared logic & helpers
├── backend/           # Backend server or cloud functions
├── database/          # Card schemas, seed data
├── turbo.json         # Turborepo pipeline config
└── package.json       # Root with workspaces
```

## Get started

1. Install dependencies
```bash
npm install
```
2. Run the apps

web
```bash
cd apps/web
npm run dev
```
mobile
```bash
cd apps/mobile
npm run dev
```
3. Technologies used

- React / Next.js for the web

- React Native / Expo for mobile

- Turborepo for monorepo management

## Planned Development
- add/remove cards
- sort/filter owned cards
- display the card by image, name, rarity, set

## License
[View it here](LICENSE)