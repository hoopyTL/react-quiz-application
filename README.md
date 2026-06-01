# 🧠 Programming Quiz Application

A clean, responsive, and type-safe quiz application built with **React**, **TypeScript**, and **Vite**. This project features a pool of programming questions (covering JavaScript, algorithms, data structures, and web technologies) and serves as an excellent learning resource for React Single Page Application (SPA) development.

---

## 🚀 Key Features

- **Curated Question Pool:** Includes 12 programming questions covering various topics (JavaScript, data structures, Big O notation, JSON, HTML, etc.).
- **Immediate Feedback:** Instant visual feedback (Correct/Incorrect indicators) upon selecting an answer.
- **Intuitive Navigation:** Smooth transitions between questions with the ability to navigate back to review previous selections.
- **Derived State (Optimized Score Calculation):** Automatical score calculation derived dynamically from the user's answers, avoiding redundant effects and cascading renders.
- **Review & Restart Options:**
  - **Review Quiz:** Browse through your answers and check your selections without resetting your progress.
  - **Restart Quiz:** Reset all state variables to take the quiz again from the beginning.
- **Modern Design & Layout:** Styled using Vanilla CSS and modern `oklch()` color space palettes for a premium and consistent visual aesthetic.

---

## 🛠️ Tech Stack

- **Core Library:** React 19 (Function Components & Hooks)
- **Language:** TypeScript (Strict type safety)
- **Build Tool:** Vite (Ultra-fast Hot Module Replacement)
- **Linting & Quality:** ESLint & TypeScript ESLint (Flat Config setup)
- **Styling:** Vanilla CSS (using CSS custom properties / variables)

---

## 📁 Directory Structure

```text
├── components/
│   ├── Quiz.tsx         # Main component managing the quiz data, navigation, and core logic
│   └── Results.tsx      # Renders the final score and post-quiz action buttons
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── App.tsx          # Root application component acting as the layout container
│   ├── index.css        # Global CSS styles and design system tokens
│   └── main.tsx         # App entry point (mounting React DOM tree)
├── eslint.config.js     # Configures code quality rules
├── package.json         # Lists dependencies and script commands
└── tsconfig.json        # TypeScript compiler configurations
```

---

## 💡 React Best Practices Illustrated

This project serves as a showcase for standard React patterns:

1. **Derived State vs. useEffect (Anti-pattern Avoidance):**
   * **The Issue:** The app originally maintained a separate `score` state synced via `useEffect` whenever `selectedOption` changed. This triggered extra renders, potential out-of-sync states, and linter warnings (`react-hooks/set-state-in-effect`).
   * **The Solution:** The `score` state was removed completely. Instead, it is computed dynamically on every render from the `userAnswers` array using `userAnswers.reduce()`. This simplifies the lifecycle, keeps the data source unified, and eliminates unnecessary renders.
2. **Conditional Rendering:** Toggling between the active quiz layout and the results screen using clean conditional render returns.
3. **Array State Updates:** Immutable state updates when saving selected choices in `userAnswers`.

---

## 💻 Getting Started

### Prerequisites
* **Node.js** (LTS version recommended)
* **npm** or **yarn** package manager

### Local Setup & Execution

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open the local server URL (usually `http://localhost:5173`) in your web browser.

3. **Verify code quality (Linter):**
   ```bash
   npm run lint
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready assets will be compiled into the `dist/` directory.
