# EMB TV

A non-profit personal project that showcase a web app to watch TV channels and guide (EPG).

## Demo

Go to [tv.embthings.com](https://tv.embthings.com/) for a preview.

---

## Inspiration:

When visiting a web with free TV there is a lot of Ads and no User Experience. So instead of switching between pages to view a different channel, the app allow you to change channel and continue watching in the same player like a paid app would do.

This project uses: React, TypeScript, Shaka Player, Scss, among others, and is deployed on [Vercel](https://vercel.com/).

### Disclaimer:

The web is built with external resource for the streams and guide data. For that, the availability of such information is not always guarantee.

---

## Environment Variables

To run this project, you will need to check for the environment variables in the

`.env.example`

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/).

How to use the Player SDK, [Shaka Player Docs](https://shaka-player-demo.appspot.com/docs/api/index.html)
