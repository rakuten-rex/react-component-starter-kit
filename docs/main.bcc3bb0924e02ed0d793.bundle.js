(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(module){module.exports={a:"@rakuten-rex/react-component-starter-kit",b:{type:"git",url:"https://github.com/rakuten-rex/react-component-starter-kit.git"}}},262:function(module,__webpack_exports__,__webpack_require__){"use strict";var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(263),_rex_logo_png__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(265),_rex_logo_png__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_rex_logo_png__WEBPACK_IMPORTED_MODULE_1__),_package_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(170);__webpack_exports__.a=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.create)({base:"light",appBg:"#F7F7F7",fontBase:'-apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif',textColor:"#333333",brandTitle:_package_json__WEBPACK_IMPORTED_MODULE_2__.a,brandUrl:_package_json__WEBPACK_IMPORTED_MODULE_2__.b.url,brandImage:_rex_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a})},265:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/rex-logo.35b354da.png"},267:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return MyComponent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);__webpack_require__(583);function MyComponent(_ref){var children=_ref.children,onClick=_ref.onClick,text=_ref.text,className=_ref.className;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:className,onClick:onClick,role:"presentation"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,text),children)}MyComponent.displayName="MyComponent",MyComponent.defaultProps={children:null,text:"Welcome to React",className:"my-component",onClick:function onClick(){return null}},MyComponent.propTypes={children:Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.string,prop_types__WEBPACK_IMPORTED_MODULE_1__.element,Object(prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_1__.element)]),text:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,className:prop_types__WEBPACK_IMPORTED_MODULE_1__.string,onClick:prop_types__WEBPACK_IMPORTED_MODULE_1__.func},MyComponent.__docgenInfo={description:"",methods:[],displayName:"MyComponent",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"string"},{name:"element"},{name:"arrayOf",value:{name:"element"}}]},required:!1,description:""},text:{defaultValue:{value:"'Welcome to React'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'my-component'",computed:!1},type:{name:"string"},required:!1,description:""},onClick:{defaultValue:{value:"() => null",computed:!1},type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/MyComponent.jsx"]={name:"MyComponent",docgenInfo:MyComponent.__docgenInfo,path:"src/MyComponent.jsx"})},268:function(module,exports,__webpack_require__){__webpack_require__(269),__webpack_require__(354),module.exports=__webpack_require__(355)},355:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(19),__webpack_require__(21),__webpack_require__(18),__webpack_require__(43);var _storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(67),_rexTheme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(262);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addParameters)({options:{theme:_rexTheme__WEBPACK_IMPORTED_MODULE_5__.a}});var req=__webpack_require__(502);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(196)(module))},502:function(module,exports,__webpack_require__){var map={"./index.jsx":503};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=502},503:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(171),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(266),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(118),_src_MyComponent__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(267);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).add("to Storybook",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo)("Button")})});var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_MyComponent__WEBPACK_IMPORTED_MODULE_5__.a,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Button",module).add("with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_4__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},_ref)}).add("with test",function(){return _ref2})}.call(this,__webpack_require__(196)(module))},583:function(module,exports,__webpack_require__){}},[[268,1,2]]]);
//# sourceMappingURL=main.bcc3bb0924e02ed0d793.bundle.js.map