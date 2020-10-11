# Webpack

- Webpack
  - Installing Webpack
  - `https://webpack.github.io/`
  - `https://www.npmjs.com/`
    - Type `webpack` in the search bar will navigate to `https://www.npmjs.com/package/webpack`
    - Prerequisite: `Node JS` to be installed `https://nodejs.org/en/`
  - Creating Package.json file
    - `npm init`
  - Installing Webpack
    - devDependencies
    - `npm install webpack --save-dev`
    - dependencies
    - `npm install jquery`
    ```
    devDependencies are everything we need in development,
        things like testing frameworks and transpiling frameworks like webpack.
    dependencies are everything we need for the browser,
        things like jquery, things like react, so that our users will actually need.
    ```
  - Running the webpack build
  - `webpack main.js ./bundle.js` : if the webpack command is not found run the below
  - `./node_modules/.bin/webpack main.js ./bundle.js`
  - Understanding the webpack.config file
  - Creating the `webpack.config.js file`
    - Run the command in the terminal: `./node_modules/.bin/webpack`
    - Adding `src` and `build` directory to the path
    - Run the command in the terminal to watch and read the bundle: `./node_modules/.bin/webpack -w`
- Webpack loaders
  - `https://webpack.js.org/loaders/remark-loader/#usage`
  - Setting up a babel-loader for a React or ES6 Project
    - `npm install babel-loader@6 babel-core@6 --save-dev`
    - Run the command to execute: `./node_modules/.bin/webpack`
  - Using presets
    - `https://github.com/tc39/ecma262`
    - `npm install babel-preset-es2015 babel-preset-react --save-dev`
  - Setting up coffee-loader for CoffeeScript projects
    - `https://webpack.js.org/concepts/modules/#supported-module-types`
    - `npm install coffee-loader coffee-script --save-dev`
- Webpack & CSS
  - Adding style with Webpack and with CSS loaders
    - Creating React Component
      - `npm install react react-dom --save`
      - Run the webpack command: `./node_modules/.bin/webpack`
    - Initializing the style & css loaders
      - `npm install style-loader css-loader --save-dev`
      - Run the webpack command: `./node_modules/.bin/webpack`
  - Transpiling Sass with Webpack
    - Couple more peer dependencies
      - `npm install sass-loader node-sass --save-dev`
  - Loading images with Webpack
    - `npm install url-loader file-loader --save-dev`
- Code Splitting with Webpack
  - Adding multiple entry points
    - Run the webpack command: `./node_modules/.bin/webpack`
  - Using the commons chunk bundle
