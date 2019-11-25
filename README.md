# ReX React UI Component: react-component-starter-kit

This project is part of ReX Design System and it can be used to create React UI Components.   

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="webpack-scripts/markdown/logos/github-icon.svg" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="webpack-scripts/markdown/logos/npm.svg" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="webpack-scripts/markdown/logos/zh_logo.svg" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

**Project Stack**  


| Front-end | Tools |
|-------------|-------------|
| <img src="webpack-scripts/markdown/logos/html-5.svg" height="16" /> HTML5 <img src="webpack-scripts/markdown/logos/css-3.svg" height="16" /> CSS3 & Sass  <img src="webpack-scripts/markdown/logos/javascript.svg" height="16" /> JavaScript ES6 <img src="webpack-scripts/markdown/logos/react.svg" height="16" /> React | <img src="webpack-scripts/markdown/logos/webpack.svg" height="16" /> webpack <img src="webpack-scripts/markdown/logos/storybook-icon.svg" height="16" /> Storybook <img src="webpack-scripts/markdown/logos/babel.svg" height="16" /> Babel <img src="webpack-scripts/markdown/logos/eslint.svg" height="16" /> ESLint <img src="webpack-scripts/markdown/logos/prettier.svg" height="16" /> Prettier |


**Features**

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |

**Browser Support**

| PC | Mobile 
|-------------|-------------|
| <img src="webpack-scripts/markdown/browsers/chrome.svg" height="14" /> Chrome 49+ | <img src="webpack-scripts/markdown/browsers/apple.svg" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="webpack-scripts/markdown/browsers/safari.svg" height="14" /> Safari 9.1+ | <img src="webpack-scripts/markdown/browsers/android-icon.svg" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="webpack-scripts/markdown/browsers/firefox.svg" height="14" /> Firefox 31+ | |
| <img src="webpack-scripts/markdown/browsers/microsoft-edge.svg" height="14" /> MS Edge 15+ | |
| <img src="webpack-scripts/markdown/browsers/internetexplorer.svg" height="14" /> IE 11+ | |


# How to install

```
npm install @rakuten-rex/react-component-starter-kit@2.5.2 --save
```

# Getting started

## 1) Storybook Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

[<img src="webpack-scripts/markdown/logos/storybook.svg" height="16" />](https://rakuten-rex.github.io/react-component-starter-kit/)   

https://rakuten-rex.github.io/react-component-starter-kit/   


**Storybook features**
- [x] Stories by components types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options


# How to integrate ReX in your project
## A) JavaScript modules

### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

`my-component.jsx`

```js
import MyComponent from '@rakuten-rex/react-component-starter-kit';

function MyCustomComponent() {
  return <MyComponent />;
}
```

[Click here](https://rakuten-rex.github.io/react-component-starter-kit/) to see all working examples in Storybook.


### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-component.jsx`

```js
import '@rakuten-rex/react-component-starter-kit/css';

function MyCustomComponent() {
  return (
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
  );
}
```

[Click here](https://rakuten-rex.github.io/react-component-starter-kit/) to see all working examples in Storybook.


### Sass mixins

For your own customization of styles (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-styles.scss`

```scss
@import '@rakuten-rex/react-component-starter-kit/sass/styles.mixin';

.my-component-with-rex-styles {
  @include rex-my-component();
}
```


## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

**Production mode URL** (recommended for Static HTML projects):  
`https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.production.min.css`


Development mode URL (for local testing):  

`https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.development.css`


### Single component integration
Add it from our NPM CDN into your HTML template or HTML static page.

Example: 

`my-page.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Page</title>
    <!-- ReX react-component-starter-kit -->
    <link href="https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.production.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
  </body>
</html>
```

# Development environment
## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./npm/@rakuten-rex/react-component-starter-kit` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Publish to NPM

Build the project first and then publish it to NPM.  

```
npm run publish:component
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/@rakuten-rex/react-component-starter-kit


# Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

## Official site
https://reactjs.org/docs/getting-started.html   

## Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

## Webpack as magic bundler
https://webpack.js.org/

## Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

## Common React patterns
https://reactpatterns.com   

## Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

## Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

