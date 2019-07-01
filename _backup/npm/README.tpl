# ReX React UI Components Library
## ReX React UI Component: __COMPONENT_NAME__

This project is part of ReX Design Language and it can be used to create React UI Components.   
For more information visit:   

Github  
https://github.com/rakuten-rex

NPM  
https://www.npmjs.com/org/rakuten-rex

## How it was built 

1. Build tool: webpack 4
1. Codebase: Fork of Bootstrap project + ReX custom styles
1. Css engine: Sass
1. JavaScript component: React

# How to install

```
npm install @rakuten-rex/__COMPONENT_NAME__@__VERSION__ --save
```

## What you can do

This project is a started kit, it contains the settings to start the creations of a React component and publish it to NPM.   

Use it as a basement and reference for your own project and customize it as you will.  

If you need a full environment to create a React Web App, try the react-create-app to get a full environment for your App or use any other started kit.

### Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/__COMPONENT_NAME__/

### JavaScript modules

#### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import '@rakuten-rex/core'; // ReX Core dependency
import RexComponent from '@rakuten-rex/__COMPONENT_NAME__';

function MyComponent() {
  return <RexComponent>Hello World</RexComponent>;
}
```

#### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import '@rakuten-rex/core/css'; // ReX Core dependency
import '@rakuten-rex/__COMPONENT_NAME__/css';

function MyComponent() {
  return <div className="rex-css-style my-component">Hello World</div>;
}
```

### Static HTML

Add it from our CDN into your HTML template or HTML static page.

For development mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/core/__REX_CORE_VERSION__/core.development.css" rel="stylesheet">
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.development.css" rel="stylesheet">
```

For production mode:

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/core/__REX_CORE_VERSION__/core.production.min.css" rel="stylesheet">
<!-- __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.css" rel="stylesheet">
```

Example: 

```markdown
<div class="rex-css-style my-component">
  <h1>Welcome to React</h1>
</div>
```
