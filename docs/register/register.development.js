/*!
 * 
 * @license @rakuten-rex/react-component-starter-kit v3.1.0 2019-12-12
 * register/register.development.js
 * 
 * Copyright (c) 2018-present, Rakuten, Inc.
 * 
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@storybook/addons"), require("prismjs"), require("pretty"));
	else if(typeof define === 'function' && define.amd)
		define("rakutenRexReactComponentStarterKit", ["react", "@storybook/addons", "prismjs", "pretty"], factory);
	else if(typeof exports === 'object')
		exports["rakutenRexReactComponentStarterKit"] = factory(require("react"), require("@storybook/addons"), require("prismjs"), require("pretty"));
	else
		root["rakutenRexReactComponentStarterKit"] = factory(root["React"], root["StorybookAddons"], root["prismjs"], root["pretty"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOCS_RENDERED = exports.STORY_THREW_EXCEPTION = exports.STORY_CHANGED = exports.STORY_ERRORED = exports.STORY_MISSING = exports.STORY_RENDERED = exports.STORY_RENDER = exports.STORY_ADDED = exports.STORY_INIT = exports.REGISTER_SUBSCRIPTION = exports.FORCE_RE_RENDER = exports.PREVIEW_KEYDOWN = exports.SELECT_STORY = exports.STORIES_CONFIGURED = exports.SET_STORIES = exports.GET_STORIES = exports.SET_CURRENT_STORY = exports.GET_CURRENT_STORY = exports.CHANNEL_CREATED = exports["default"] = void 0;
var events; // Enables: `import Events from ...`

(function (events) {
  events["CHANNEL_CREATED"] = "channelCreated";
  events["GET_CURRENT_STORY"] = "getCurrentStory";
  events["SET_CURRENT_STORY"] = "setCurrentStory";
  events["GET_STORIES"] = "getStories";
  events["SET_STORIES"] = "setStories";
  events["STORIES_CONFIGURED"] = "storiesConfigured";
  events["SELECT_STORY"] = "selectStory";
  events["PREVIEW_KEYDOWN"] = "previewKeydown";
  events["STORY_ADDED"] = "storyAdded";
  events["STORY_CHANGED"] = "storyChanged";
  events["STORY_UNCHANGED"] = "storyUnchanged";
  events["FORCE_RE_RENDER"] = "forceReRender";
  events["REGISTER_SUBSCRIPTION"] = "registerSubscription";
  events["STORY_INIT"] = "storyInit";
  events["STORY_RENDER"] = "storyRender";
  events["STORY_RENDERED"] = "storyRendered";
  events["STORY_MISSING"] = "storyMissing";
  events["STORY_ERRORED"] = "storyErrored";
  events["STORY_THREW_EXCEPTION"] = "storyThrewException";
  events["DOCS_RENDERED"] = "docsRendered";
})(events || (events = {}));

var _default = events; // Enables: `import * as Events from ...` or `import { CHANNEL_CREATED } as Events from ...`
// This is the preferred method

exports["default"] = _default;
var CHANNEL_CREATED = events.CHANNEL_CREATED,
    GET_CURRENT_STORY = events.GET_CURRENT_STORY,
    SET_CURRENT_STORY = events.SET_CURRENT_STORY,
    GET_STORIES = events.GET_STORIES,
    SET_STORIES = events.SET_STORIES,
    STORIES_CONFIGURED = events.STORIES_CONFIGURED,
    SELECT_STORY = events.SELECT_STORY,
    PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN,
    FORCE_RE_RENDER = events.FORCE_RE_RENDER,
    REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION,
    STORY_INIT = events.STORY_INIT,
    STORY_ADDED = events.STORY_ADDED,
    STORY_RENDER = events.STORY_RENDER,
    STORY_RENDERED = events.STORY_RENDERED,
    STORY_MISSING = events.STORY_MISSING,
    STORY_ERRORED = events.STORY_ERRORED,
    STORY_CHANGED = events.STORY_CHANGED,
    STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION,
    DOCS_RENDERED = events.DOCS_RENDERED;
exports.DOCS_RENDERED = DOCS_RENDERED;
exports.STORY_THREW_EXCEPTION = STORY_THREW_EXCEPTION;
exports.STORY_CHANGED = STORY_CHANGED;
exports.STORY_ERRORED = STORY_ERRORED;
exports.STORY_MISSING = STORY_MISSING;
exports.STORY_RENDERED = STORY_RENDERED;
exports.STORY_RENDER = STORY_RENDER;
exports.STORY_ADDED = STORY_ADDED;
exports.STORY_INIT = STORY_INIT;
exports.REGISTER_SUBSCRIPTION = REGISTER_SUBSCRIPTION;
exports.FORCE_RE_RENDER = FORCE_RE_RENDER;
exports.PREVIEW_KEYDOWN = PREVIEW_KEYDOWN;
exports.SELECT_STORY = SELECT_STORY;
exports.STORIES_CONFIGURED = STORIES_CONFIGURED;
exports.SET_STORIES = SET_STORIES;
exports.GET_STORIES = GET_STORIES;
exports.SET_CURRENT_STORY = SET_CURRENT_STORY;
exports.GET_CURRENT_STORY = GET_CURRENT_STORY;
exports.CHANNEL_CREATED = CHANNEL_CREATED;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(18);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(19);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// EXTERNAL MODULE: external {"root":"StorybookAddons","commonjs2":"@storybook/addons","commonjs":"@storybook/addons","amd":"@storybook/addons","umd":"@storybook/addons"}
var addons_ = __webpack_require__(1);
var addons_default = /*#__PURE__*/__webpack_require__.n(addons_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(9);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(10);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(11);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(12);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@storybook/core-events/dist/index.js
var dist = __webpack_require__(3);

// EXTERNAL MODULE: external {"root":"pretty","commonjs2":"pretty","commonjs":"pretty","amd":"pretty","umd":"pretty"}
var external_root_pretty_commonjs2_pretty_commonjs_pretty_amd_pretty_umd_pretty_ = __webpack_require__(13);
var external_root_pretty_commonjs2_pretty_commonjs_pretty_amd_pretty_umd_pretty_default = /*#__PURE__*/__webpack_require__.n(external_root_pretty_commonjs2_pretty_commonjs_pretty_amd_pretty_umd_pretty_);

// EXTERNAL MODULE: external {"root":"prismjs","commonjs2":"prismjs","commonjs":"prismjs","amd":"prismjs","umd":"prismjs"}
var external_root_prismjs_commonjs2_prismjs_commonjs_prismjs_amd_prismjs_umd_prismjs_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/storybook-inspect-html/InspectHtml.jsx







/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable react/no-danger */





var InspectHtml_InspectHtml =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(InspectHtml, _React$Component);

  function InspectHtml() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, InspectHtml);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(InspectHtml)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      html: ''
    };
    _this.onAddHtml = _this.onAddHtml.bind(assertThisInitialized_default()(_this));
    _this.onStoryChange = _this.onStoryChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(InspectHtml, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var api = this.props.api;
      this.onChannelActions();
      api.on(dist["STORY_CHANGED"], this.onStoryChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var active = this.props.active;

      if (active !== prevProps.active) {
        if (active) {
          this.onChannelActions();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props = this.props,
          channel = _this$props.channel,
          api = _this$props.api;
      api.off(dist["STORY_CHANGED"], this.onStoryChange);
      channel.removeListener('storybook/inspecthtml/add_html', this.onAddHtml);
    }
  }, {
    key: "onChannelActions",
    value: function onChannelActions() {
      var _this2 = this;

      var channel = this.props.channel;
      channel.on('storybook/inspecthtml/add_html', function (html) {
        var doubleQuotesPatch = html.replace(/&quot;/gi, '"');
        var cleanHtml = doubleQuotesPatch;

        _this2.onAddHtml(cleanHtml);
      });
    }
  }, {
    key: "onStoryChange",
    value: function onStoryChange() {
      this.onAddHtml('');
    }
  }, {
    key: "onAddHtml",
    value: function onAddHtml(html) {
      var formatedHtml = external_root_pretty_commonjs2_pretty_commonjs_pretty_amd_pretty_umd_pretty_default()(html);
      var highlightHtml = Object(external_root_prismjs_commonjs2_prismjs_commonjs_prismjs_amd_prismjs_umd_prismjs_["highlight"])(formatedHtml, // eslint-disable-next-line no-undef
      external_root_prismjs_commonjs2_prismjs_commonjs_prismjs_amd_prismjs_umd_prismjs_["languages"].markup, 'html');
      this.setState({
        html: highlightHtml
      });
    }
  }, {
    key: "render",
    value: function render() {
      var active = this.props.active;
      var html = this.state.html;

      if (active) {
        return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
          style: {
            paddingLeft: '20px'
          }
        }, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("pre", null, external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("code", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        })));
      }

      return null;
    }
  }]);

  return InspectHtml;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.Component);

InspectHtml_InspectHtml.displayName = "InspectHtml";

// CONCATENATED MODULE: ./src/register/register.jsx
/* eslint-disable react/prop-types */

/* eslint-disable import/no-extraneous-dependencies */



/* harmony default export */ var register = __webpack_exports__["default"] = (addons_default.a.register('storybook/inspecthtml', function (api) {
  addons_default.a.addPanel('storybook/inspecthtml/panel', {
    title: 'Inspect HTML',
    render: function render(_ref) {
      var active = _ref.active;
      var channel = addons_default.a.getChannel();
      return external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(InspectHtml_InspectHtml, {
        channel: channel,
        api: api,
        active: active,
        key: "inspect-html"
      });
    }
  });
}));

/***/ })
/******/ ]);
});