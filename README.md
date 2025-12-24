# ASE Assessment Boilerplate partially completed
A starter template for building a Product & Category Dashboard using React, TypeScript, Redux Saga, Chakra UI, and Highcharts.

## 📋 Assessment Overview

Build a dashboard that displays product and category data with:
- **Pie Chart**: Shows product distribution by category
- **Column Chart**: Shows detailed product report
- **Filter Panel**: Allows filtering by category and products

### Key Requirements

1. **Initial Load**: Pie chart renders with all available product categories
2. **Category Selection**: Single-select dropdown, products list updates accordingly
3. **Product Selection**: Multi-select (only enabled after category selection)
4. **Pie Chart**: Updates in real-time as filters change
5. **Column Chart**: Only renders after clicking "Run Report"
6. **Run Report Button**: 
   - Disabled when filters are empty
   - Disabled after generating report (until filters change)
   - Enabled when filter values change

## 🔧 Technology Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool and dev server |
| **React** | UI library |
| **TypeScript** | Type safety |
| **Chakra UI v3** | Component library |
| **Redux Toolkit** | State management |
| **Redux Saga** | Side effects handling |
| **Highcharts** | Charting library |
| **Vitest** | Testing framework |
| **DummyJSON API** | Data source |

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install all dependencies
npm install

# Or install specific packages manually
npm install @chakra-ui/react @emotion/react @reduxjs/toolkit highcharts highcharts-react-official react-redux react-router-dom redux-saga

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Submission Checklist

- [ ] All filter requirements working
- [ *] Pie chart updates with filter changes
- [ ] Column chart only shows after Run Report
- [ *] Run Report button state logic correct
- [* ] Clear filters functionality
- [ ] TypeScript - no any types
- [ ] Tests written and passing
- [ *] Code is well-commented
- [ *] Production build works

## 🆘 Need Help?

- [Chakra UI v3 Docs](https://www.chakra-ui.com/docs)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [Redux Saga Docs](https://redux-saga.js.org/)
- [Highcharts React Docs](https://github.com/highcharts/highcharts-react)
- [DummyJSON Docs](https://dummyjson.com/docs/products)

---

Good luck with your assessment! 🚀

---


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
