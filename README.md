# Location Search Application

This project is a location search application built with React, TypeScript, and Vite. It provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Running the Application

To run the application locally, follow these steps:

1. **Install dependencies**: Ensure you have Node.js installed, then run:

```sh
npm install
```

2. **Start the development server**: Use the following command to start the Vite development server:

```sh
npm run dev
```

3. **Build for production**: To create a production build, run:

```sh
npm run build
```

4. **Preview the production build**: After building, you can preview the production build locally with:

```sh
npm run preview
```

## Testing

To run tests, use the following command:

```sh
npm test
```

## Linting

To lint the codebase, use:

```sh
npm run lint
```

## Formatting

To format the codebase, use:

```sh
npm run format
```

## Built With

- Vite
- React
- TypeScript
- Tailwindcss

## Author

👤 **Chi A. Joel**

- GitHub: [@abongsjoel](https://github.com/abongsjoel)
- Twitter: [@thierryjoel10](https://twitter.com/ThierryJoel10)
- LinkedIn: [Chi Abongwa Joel](https://www.linkedin.com/in/joel-chi-b4285a97/)

## Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/abongsjoel/location-search/issues).

## Show your support

Give a ⭐️ if you like this project!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
