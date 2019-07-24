# ReX React UI Components Library
## ReX React UI Component: __COMPONENT_NAME__

This project is part of ReX Design Language and it can be used to create React UI Components.   
For more information visit:   

Github  
https://github.com/rakuten-rex

NPM  
https://www.npmjs.com/org/rakuten-rex

How it was built:  

1. webpack 4 (static module bundler)
1. HTML5
1. CSS3 & Sass (Normalize.css + Fork of Bootstrap project + ReX custom styles)
1. JavaScript ES6 Modules & Components based on React

# How to install

```
npm install @rakuten-rex/__COMPONENT_NAME__@__VERSION__ --save
```

# Getting started

## 1) Storybook Live examples

For a complete guide of properties for React and HTML classes please visit the Storybook site:  

https://rakuten-rex.github.io/__COMPONENT_NAME__/

## 2) Choose the distribution builds

### ReX Component + ReX Core (with ReX Fonts)

For projects with full ReX implementation.

```js
import RexComponent from '@rakuten-rex/__COMPONENT_NAME__';
```

### ReX Component + ReX Core (without ReX Fonts)

For integration projects.   

```js
import RexComponent from '@rakuten-rex/__COMPONENT_NAME__/without-fonts.js';
```

### ReX Component Only (without ReX Core)

For integration projects using Static HTML or if you use a build tools without duplicated CSS classes removal.  

Note: Requires global import of ReX Core.   

```js
import RexComponent from '@rakuten-rex/__COMPONENT_NAME__/without-core.js';
```

# How to integrate ReX in your project
## A) JavaScript modules

### React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

```js
import RexComponent from '@rakuten-rex/__COMPONENT_NAME__';

function MyComponent() {
  return <RexComponent>Hello World</RexComponent>;
}
```

### CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

Example: 

```js
import '@rakuten-rex/__COMPONENT_NAME__/css';

function MyComponent() {
  return <h1 className="rex-core-h1 rex-h1">Hello World</h1>;
}
```

## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

You can choose between `development` (dev comments and unminified) or `production` (without dev comments and minified) mode.   

We recommend to use `production` mode if your build process doesn't support to switch between both.

Development mode URL:  
`https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.development.css`

Production mode URL:  
`https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.css`

### Single component integration
Add it from our CDN into your HTML template or HTML static page.

```markdown
<!-- ReX __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__.production.min.css" rel="stylesheet">
```

### Multiple component integration

Note: use `__COMPONENT_NAME__-without-core.min.css` version to avoid duplicated code from ReX Core.

```markdown
<!-- ReX Core -->
<link href="https://r.r10s.jp/com/rex/__REX_CORE_NAME__/__REX_CORE_VERSION__/full-version.production.min.css" rel="stylesheet">

<!-- ReX __COMPONENT_NAME__ -->
<link href="https://r.r10s.jp/com/rex/__COMPONENT_NAME__/__VERSION__/__COMPONENT_NAME__-without-core.production.min.css" rel="stylesheet">
```

Example: 

```markdown
<div class="rex-__COMPONENT_NAME__">
  <h1 class="rex-core-h1 rex-h1">Welcome to React</h1>
</div>
```

__INFO_HOW_TO__