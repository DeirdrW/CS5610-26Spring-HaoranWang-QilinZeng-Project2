# Sudoku React App

An interactive Sudoku experience built for CS5610 Assignment 2. The app lets players choose between 6×6 “easy” and 9×9 “normal” modes, keeps progress in `localStorage`, and validates the board in real time. It is implemented with React 18, React Router, a custom Context-based state manager, and a lightweight puzzle generator that randomizes completed boards before carving out playable puzzles.

## Features
- Context-driven game state shared across all routes, including timer, puzzle grid, and validation feedback.
- Local persistence: every move is serialized to `window.localStorage` so reloading or navigating away preserves progress.
- Responsive grid renderer that adapts CSS Grid templates to either 6×6 or 9×9 boards and highlights conflicts immediately.
- Simple navigation hub with pages for games, rules, scores, login/register stubs, etc., allowing the Sudoku board to coexist with static marketing content.

## Tech Stack
- React 18 + React Router 6
- Vite dev server/bundler
- Plain CSS modules for layout and theming

## Getting Started
```bash
cd sudoku-app
npm install
npm run dev
```
`npm run build` produces a production bundle under `dist/`, and `npm run preview` serves that bundle locally.

## Key Files
- `src/context/SudokuContext.jsx` — reducer, persistence, timer loop, and validation checks.
- `src/utils/generator.js` — puzzle generator and `validateBoard` helper.
- `src/components/Board.jsx` & `src/components/Cell.jsx` — grid renderer and editable cells.
- `src/App.jsx` & `src/pages/Game.jsx` — routing plus the game page wrapper.

## Writeup
**Challenge**  
Coordinating puzzle generation, routing, and persistence was surprisingly tricky. The reducer had to support hydration from `localStorage` without immediately overwriting the saved puzzle, so I gated the initial `NEW_GAME` dispatch and tracked the last action (`src/context/SudokuContext.jsx`). Getting the timer to tick only when the game is “running” while avoiding multiple intervals required a dedicated `useEffect` keyed on `state.running`. Finally, validation needed to be fast enough to run every render, which meant keeping `validateBoard` pure and letting components read its `errors` set directly.

**Future work**  
If I had more time I would add a richer generator that enforces unique solutions via backtracking, pencil-mark annotations, and number highlighting to show peers in the same row/column/subgrid. A Statistics/Scores page backed by cloud storage plus OAuth login would make replays meaningful. Design-wise I would experiment with theming (light/dark), keyboard-only controls, and subtle animations when conflicts appear or the puzzle completes.

**Assumptions**  
I assumed browsers always provide `window.localStorage`, so there is no SSR fallback. I also baked in just two board sizes (6×6, 9×9); `boxSizes` is hard-coded for those dimensions and falls back to integer square roots only as a safeguard. The generator intentionally permits puzzles that might have multiple solutions, because enforcing uniqueness would have required a more expensive solver than the assignment timeline allowed.

**Time spent**  
Roughly 6 hours split across two evenings: about 3 hours wiring the context/state logic, 2 hours building the board/cell components, and 1 hour polishing layout plus persistence.

**Bonus points**  
Completed “3 Bonus Points: Local Storage.” The context initializer (`init()` in `src/context/SudokuContext.jsx`) checks `window.localStorage` for `sudoku_game_v1` before dispatching anything, so an existing game is restored on load. Every subsequent state change triggers a persistence effect that writes the serialized puzzle back to the same key, while guarding the first render with `_didInit` to avoid clobbering stored data. All reads/writes happen inside the context, satisfying the “context-only” rule, and when a puzzle is reset or solved (`RESET`/`STOP` actions) the effect removes the key entirely so finished games do not linger.
