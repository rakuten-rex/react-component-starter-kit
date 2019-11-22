# ReX React UI Component: react-component-starter-kit

This project is part of ReX Design System and it can be used to create React UI Components.   

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="https://cdn.svgporn.com/logos/github-icon.svg" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="https://cdn.svgporn.com/logos/npm.svg" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="https://zeroheight.com/images/zhapp/landingv4/zh_logo.svg" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

Front-end Stack  

|<img src="https://cdn.svgporn.com/logos/html-5.svg" height="16" />| <img src="https://cdn.svgporn.com/logos/css-3.svg" height="16" /> <img src="https://cdn.svgporn.com/logos/sass.svg" height="16" />  | <img src="https://cdn.svgporn.com/logos/javascript.svg" height="16" /> | <img src="https://cdn.svgporn.com/logos/react.svg" height="16" /> |
|:---:|:---: | :---: | :---: |
| HTML5 |CSS3 & Sass | JavaScript ES6 | React |

Tools
|<img src="https://cdn.svgporn.com/logos/webpack.svg" height="16" />| <img src="https://cdn.svgporn.com/logos/storybook-icon.svg" height="16" /> | <img src="https://cdn.svgporn.com/logos/babel.svg" height="16" /> | <img src="https://cdn.svgporn.com/logos/eslint.svg" height="16" /> | <img src="https://cdn.svgporn.com/logos/prettier.svg" height="16" /> |
|:---:|:---: | :---: | :---: | :---: |
| webpack 4 | Storybook | Babel | ESLint | Prettier |

Styles features
- [x] Theme support via CSS variables
- [x] Static CSS styles available for HTML/VueJS/AngularJS
- [x] Sass mixins for custom builds
- [x] Reset CSS styles already bundled by HTML tags
- [x] Removed duplicated CSS props 

JavaScript features
- [x] React components splitted by type
- [x] Universal Module Definition support

# How to install

```
npm install @rakuten-rex/react-component-starter-kit@2.5.2 --save
```

# Getting started

## 1) Storybook Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/react-component-starter-kit/

Storybook features
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
import RexComponent from '@rakuten-rex/react-component-starter-kit';

function MyComponent() {
  return <RexComponent>Hello World</RexComponent>;
}
```

### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-component.jsx`

```js
import '@rakuten-rex/react-component-starter-kit/css';

function MyComponent() {
  return <h1 className="rex-core-h1 rex-h1">Hello World</h1>;
}
```

### Sass mixins

For your own customization of styles (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-styles.scss`

```scss
@import '@rakuten-rex/react-component-starter-kit/sass/styles.mixin';

.my-component-with-rex-styles {
  @include react-component-starter-kit();
}
```


## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

You can choose between `development` (dev comments and unminified) or `production` (without dev comments and minified) mode.   

We recommend to use `production` mode if your build process doesn't support to switch between both.

*Production mode URL* (recommended for Static HTML projects):  
`https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.production.min.css`


Development mode URL (for local testing):  

`https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.development.css`


### Single component integration
Add it from our NPM CDN into your HTML template or HTML static page.

Example: 

`my-page.html`

```markdown
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Page</title>
  <!-- ReX react-component-starter-kit -->
  <link href="https://unpkg.com/react-component-starter-kit@2.5.2/react-component-starter-kit.production.min.css" rel="stylesheet">
</head>
<body>
  <div class="rex-react-component-starter-kit">
    <h1 class="rex-core-h1 rex-h1">Welcome to React</h1>
  </div>
  </body>
</html>
```
