# Webpack

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
