(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
  global: props => ({
    body: {
      bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#f0e7db', '#202023')(props)
    }
  })
};
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'udnerline',
        fontSize: 20,
        textUnderLineOffset: 6,
        textUnderLineThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)('#3d7aed', '#ff63c3')(props),
      textUnderLineOffset: 3
    })
  }
};
const fonts = {
  heading: "'M PLUS Rounded 1c'"
};
const colors = {
  glassTeal: '#88ccca'
};
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  config,
  styles,
  components,
  colors,
  fonts
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../shared/lib/head-manager-context */ "../shared/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    strategy = 'afterInteractive',
    onError
  } = props;
  const cacheKey = id || src; // Script has already loaded

  if (cacheKey && LoadCache.has(cacheKey)) {
    return;
  } // Contents of this script are already loading/loaded


  if (ScriptCache.has(src)) {
    LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

    ScriptCache.get(src).then(onLoad, onError);
    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function (e) {
      resolve();

      if (onLoad) {
        onLoad.call(this, e);
      }
    });
    el.addEventListener('error', function (e) {
      reject(e);
    });
  }).catch(function (e) {
    if (onError) {
      onError(e);
    }
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
  }

  LoadCache.add(cacheKey);

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  el.setAttribute('data-nscript', strategy);
  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    dangerouslySetInnerHTML,
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = _objectWithoutProperties(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR


  const {
    updateScripts,
    scripts,
    getIsSsr
  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
  (0, _react).useEffect(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([_objectSpread({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    } else if (getIsSsr && getIsSsr()) {
      // Script has already loaded during SSR
      LoadCache.add(restProps.id || src);
    } else if (getIsSsr && !getIsSsr()) {
      loadScript(props);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const _excluded = ["strategy"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DocumentContext", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentContext;
  }
}));
Object.defineProperty(exports, "DocumentInitialProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentInitialProps;
  }
}));
Object.defineProperty(exports, "DocumentProps", ({
  enumerable: true,
  get: function () {
    return _utils.DocumentProps;
  }
}));
exports.Html = Html;
exports.Main = Main;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../shared/lib/constants */ "../shared/lib/constants");

var _utils = __webpack_require__(/*! ../shared/lib/utils */ "../shared/lib/utils");

var _getPageFiles = __webpack_require__(/*! ../server/get-page-files */ "../server/get-page-files");

var _utils1 = __webpack_require__(/*! ../server/utils */ "../server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../server/htmlescape");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles).getPageFiles(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles).getPageFiles(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map((file, index) => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, _excluded);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      key: scriptProps.src || index,
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      "data-nscript": "beforeInteractive",
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var ref;
  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (ref = buildManifest.lowPriorityFiles) === null || ref === void 0 ? void 0 : ref.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

class Document1 extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, Object.assign({}, props));
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server).default()];
    return {
      html,
      head,
      styles
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document1;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var ref;
        const isReactHelmet = child === null || child === void 0 ? void 0 : (ref = child.props) === null || ref === void 0 ? void 0 : ref['data-react-helmet'];

        if (!isReactHelmet) {
          var ref1;

          if ((child === null || child === void 0 ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child === null || child === void 0 ? void 0 : child.type) === 'meta' && (child === null || child === void 0 ? void 0 : (ref1 = child.props) === null || ref1 === void 0 ? void 0 : ref1.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var ref2, ref3;
        return el === null || el === void 0 ? void 0 : (ref2 = el.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.dangerouslySetInnerHTML) === null || ref3 === void 0 ? void 0 : ref3.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);

    var _nonce, _nonce1;

    return /*#__PURE__*/_react.default.createElement("head", Object.assign({}, this.props), this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils1).cleanAmpPath(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_nonce = this.props.nonce) !== null && _nonce !== void 0 ? _nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)

    /*#__PURE__*/
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _utils.HtmlContext;

function Main() {
  const {
    inAmpMode,
    docComponentsRendered
  } = (0, _react).useContext(_utils.HtmlContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.BODY_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next"
  }, _constants.BODY_RENDER_TARGET);
}

class NextScript extends _react.Component {
  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(context) {
    const {
      __NEXT_DATA__
    } = context;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape).htmlEscapeJsonString(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _utils.HtmlContext;
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\david\\OneDrive\\Documentos\\Development\\dh-homepage\\pages\\_document.js";




class Document extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.ColorModeScript, {
          initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_2__.default.config.initialColorMode
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }

}

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "../server/get-page-files":
/*!*****************************************************!*\
  !*** external "next/dist/server/get-page-files.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ "../server/htmlescape":
/*!*************************************************!*\
  !*** external "next/dist/server/htmlescape.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ "../server/utils":
/*!********************************************!*\
  !*** external "next/dist/server/utils.js" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ "../shared/lib/constants":
/*!****************************************************!*\
  !*** external "next/dist/shared/lib/constants.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ "../shared/lib/head-manager-context":
/*!***************************************************************!*\
  !*** external "next/dist/shared/lib/head-manager-context.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/server");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_document.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNRSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsTUFBTSxFQUFFQyxLQUFLLEtBQUs7QUFDZEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFELEVBQVcsU0FBWCxDQUFKLENBQTBCRyxLQUExQjtBQURGO0FBRFEsR0FBTDtBQURGLENBQWY7QUFPQSxNQUFNRyxVQUFVLEdBQUc7QUFDZkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLFFBQVEsRUFBQztBQUNMLHVCQUFnQjtBQUNaQyxRQUFBQSxjQUFjLEVBQUMsV0FESDtBQUVaQyxRQUFBQSxRQUFRLEVBQUUsRUFGRTtBQUdaQyxRQUFBQSxtQkFBbUIsRUFBRSxDQUhUO0FBSVpDLFFBQUFBLHNCQUFzQixFQUFFLENBSlo7QUFLWkMsUUFBQUEsU0FBUyxFQUFFLENBTEM7QUFNWkMsUUFBQUEsWUFBWSxFQUFFO0FBTkY7QUFEWDtBQURKLEdBRE07QUFhZkMsRUFBQUEsSUFBSSxFQUFDO0FBQ0RDLElBQUFBLFNBQVMsRUFBRWIsS0FBSyxLQUFLO0FBQ2pCYyxNQUFBQSxLQUFLLEVBQUVqQiw0REFBSSxDQUFDLFNBQUQsRUFBVyxTQUFYLENBQUosQ0FBMEJHLEtBQTFCLENBRFU7QUFFakJRLE1BQUFBLG1CQUFtQixFQUFFO0FBRkosS0FBTDtBQURmO0FBYlUsQ0FBbkI7QUFvQkEsTUFBTU8sS0FBSyxHQUFHO0FBQ1ZDLEVBQUFBLE9BQU8sRUFBRTtBQURDLENBQWQ7QUFJQSxNQUFNQyxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsU0FBUyxFQUFFO0FBREEsQ0FBZjtBQUdBLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxFQUFBQSxnQkFBZ0IsRUFBRSxNQURQO0FBRVhDLEVBQUFBLGtCQUFrQixFQUFFO0FBRlQsQ0FBZjtBQUlBLE1BQU1DLEtBQUssR0FBRzFCLDZEQUFXLENBQUM7QUFDekJ1QixFQUFBQSxNQUR5QjtBQUV6QnJCLEVBQUFBLE1BRnlCO0FBR3pCSyxFQUFBQSxVQUh5QjtBQUl6QmMsRUFBQUEsTUFKeUI7QUFLekJGLEVBQUFBO0FBTHlCLENBQUQsQ0FBekI7QUFRQSxpRUFBZU8sS0FBZjs7Ozs7Ozs7Ozs7QUNqRGE7O0FBQ2JDLDhDQUE2QztBQUN6Q0csRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGVBQUEsR0FBa0JHLGVBQWxCO0FBQ0FILHlCQUFBLEdBQTRCLEtBQUssQ0FBakM7QUFDQSxNQUFNSSxpQkFBaUIsR0FBRztBQUN0QkMsRUFBQUEsYUFBYSxFQUFFLGdCQURPO0FBRXRCQyxFQUFBQSxTQUFTLEVBQUUsT0FGVztBQUd0QkMsRUFBQUEsT0FBTyxFQUFFLEtBSGE7QUFJdEJDLEVBQUFBLFNBQVMsRUFBRSxZQUpXO0FBS3RCQyxFQUFBQSxRQUFRLEVBQUU7QUFMWSxDQUExQjtBQU9BVCx5QkFBQSxHQUE0QkksaUJBQTVCOztBQUNBLFNBQVNNLGlCQUFULENBQTJCO0FBQUVDLEVBQUFBLElBQUY7QUFBU3BDLEVBQUFBO0FBQVQsQ0FBM0IsRUFBOEM7QUFDMUMsUUFBTXFDLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCSCxJQUF2QixDQUFYOztBQUNBLE9BQUksTUFBTUksQ0FBVixJQUFleEMsS0FBZixFQUFxQjtBQUNqQixRQUFJLENBQUNBLEtBQUssQ0FBQ3lDLGNBQU4sQ0FBcUJELENBQXJCLENBQUwsRUFBOEI7QUFDOUIsUUFBSUEsQ0FBQyxLQUFLLFVBQU4sSUFBb0JBLENBQUMsS0FBSyx5QkFBOUIsRUFBeUQsU0FGeEMsQ0FHakI7O0FBQ0EsUUFBSXhDLEtBQUssQ0FBQ3dDLENBQUQsQ0FBTCxLQUFhRSxTQUFqQixFQUE0QjtBQUM1QixVQUFNQyxJQUFJLEdBQUdkLGlCQUFpQixDQUFDVyxDQUFELENBQWpCLElBQXdCQSxDQUFDLENBQUNJLFdBQUYsRUFBckM7O0FBQ0EsUUFBSVIsSUFBSSxLQUFLLFFBQVQsS0FBc0JPLElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJLEtBQUssT0FBN0IsSUFBd0NBLElBQUksS0FBSyxVQUF2RSxDQUFKLEVBQXdGO0FBQ3BGTixNQUFBQSxFQUFFLENBQUNNLElBQUQsQ0FBRixHQUFXLENBQUMsQ0FBQzNDLEtBQUssQ0FBQ3dDLENBQUQsQ0FBbEI7QUFDSCxLQUZELE1BRU87QUFDSEgsTUFBQUEsRUFBRSxDQUFDUSxZQUFILENBQWdCRixJQUFoQixFQUFzQjNDLEtBQUssQ0FBQ3dDLENBQUQsQ0FBM0I7QUFDSDtBQUNKOztBQUNELFFBQU07QUFBRU0sSUFBQUEsUUFBRjtBQUFhQyxJQUFBQTtBQUFiLE1BQTBDL0MsS0FBaEQ7O0FBQ0EsTUFBSStDLHVCQUFKLEVBQTZCO0FBQ3pCVixJQUFBQSxFQUFFLENBQUNXLFNBQUgsR0FBZUQsdUJBQXVCLENBQUNFLE1BQXhCLElBQWtDLEVBQWpEO0FBQ0gsR0FGRCxNQUVPLElBQUlILFFBQUosRUFBYztBQUNqQlQsSUFBQUEsRUFBRSxDQUFDYSxXQUFILEdBQWlCLE9BQU9KLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0JBLFFBQS9CLEdBQTBDSyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sUUFBZCxJQUEwQkEsUUFBUSxDQUFDTyxJQUFULENBQWMsRUFBZCxDQUExQixHQUE4QyxFQUF6RztBQUNIOztBQUNELFNBQU9oQixFQUFQO0FBQ0g7O0FBQ0QsU0FBU2lCLGNBQVQsQ0FBd0JsQixJQUF4QixFQUE4QmpDLFVBQTlCLEVBQTBDO0FBQ3RDLFFBQU1vRCxNQUFNLEdBQUdqQixRQUFRLENBQUNrQixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFmO0FBQ0EsUUFBTUMsV0FBVyxHQUFHRixNQUFNLENBQUNHLGFBQVAsQ0FBcUIsNEJBQXJCLENBQXBCOztBQUNBLFlBQTJDO0FBQ3ZDLFFBQUksQ0FBQ0QsV0FBTCxFQUFrQjtBQUNkRSxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYywrRkFBZDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFNQyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0wsV0FBVyxDQUFDTSxPQUFiLENBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHVCxXQUFXLENBQUNVLHNCQUEvQixFQUF1REYsQ0FBQyxHQUFHSixTQUEzRCxFQUFzRUksQ0FBQyxJQUFJQyxDQUFDLEdBQUdBLENBQUMsQ0FBQ0Msc0JBQWpGLEVBQXdHO0FBQ3BHLFFBQUlELENBQUMsQ0FBQ0UsT0FBRixDQUFVeEIsV0FBVixPQUE0QlIsSUFBaEMsRUFBc0M7QUFDbEM0QixNQUFBQSxPQUFPLENBQUNLLElBQVIsQ0FBYUgsQ0FBYjtBQUNIO0FBQ0o7O0FBQ0QsUUFBTUksT0FBTyxHQUFHbkUsVUFBVSxDQUFDb0UsR0FBWCxDQUFlcEMsaUJBQWYsRUFBa0NxQyxNQUFsQyxDQUEwQ0MsTUFBRCxJQUFVO0FBQy9ELFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHWCxPQUFPLENBQUNZLE1BQTdCLEVBQXFDRixDQUFDLEdBQUdDLEdBQXpDLEVBQThDRCxDQUFDLEVBQS9DLEVBQWtEO0FBQzlDLFlBQU1HLE1BQU0sR0FBR2IsT0FBTyxDQUFDVSxDQUFELENBQXRCOztBQUNBLFVBQUlHLE1BQU0sQ0FBQ0MsV0FBUCxDQUFtQkwsTUFBbkIsQ0FBSixFQUFnQztBQUM1QlQsUUFBQUEsT0FBTyxDQUFDZSxNQUFSLENBQWVMLENBQWYsRUFBa0IsQ0FBbEI7QUFDQSxlQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFdBQU8sSUFBUDtBQUNILEdBVGUsQ0FBaEI7QUFVQVYsRUFBQUEsT0FBTyxDQUFDZ0IsT0FBUixDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUNDLFVBQUYsQ0FBYUMsV0FBYixDQUF5QkYsQ0FBekIsQ0FBckI7QUFFQVgsRUFBQUEsT0FBTyxDQUFDVSxPQUFSLENBQWlCQyxDQUFELElBQUsxQixNQUFNLENBQUM2QixZQUFQLENBQW9CSCxDQUFwQixFQUF1QnhCLFdBQXZCLENBQXJCO0FBRUFBLEVBQUFBLFdBQVcsQ0FBQ00sT0FBWixHQUFzQixDQUFDRixTQUFTLEdBQUdHLE9BQU8sQ0FBQ1ksTUFBcEIsR0FBNkJOLE9BQU8sQ0FBQ00sTUFBdEMsRUFBOENTLFFBQTlDLEVBQXRCO0FBQ0g7O0FBQ0QsU0FBU3pELGVBQVQsR0FBMkI7QUFDdkIsTUFBSTBELGFBQWEsR0FBRyxJQUFwQjtBQUNBLFNBQU87QUFDSEMsSUFBQUEsZ0JBQWdCLEVBQUUsSUFBSUMsR0FBSixFQURmO0FBRUhDLElBQUFBLFVBQVUsRUFBR0MsSUFBRCxJQUFRO0FBQ2hCLFlBQU1DLE9BQU8sR0FBR0wsYUFBYSxHQUFHTSxPQUFPLENBQUNDLE9BQVIsR0FBa0JDLElBQWxCLENBQXVCLE1BQUk7QUFDdkQsWUFBSUgsT0FBTyxLQUFLTCxhQUFoQixFQUErQjtBQUMvQkEsUUFBQUEsYUFBYSxHQUFHLElBQWhCO0FBQ0EsY0FBTVMsSUFBSSxHQUFHLEVBQWI7QUFFQUwsUUFBQUEsSUFBSSxDQUFDVixPQUFMLENBQWNnQixDQUFELElBQUs7QUFDZCxlQUFJO0FBQ0o7QUFDQUEsVUFBQUEsQ0FBQyxDQUFDNUQsSUFBRixLQUFXLE1BQVgsSUFBcUI0RCxDQUFDLENBQUNoRyxLQUFGLENBQVEsc0JBQVIsQ0FBckIsSUFBd0QsQ0FBQ3NDLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBd0Isb0JBQW1Cc0MsQ0FBQyxDQUFDaEcsS0FBRixDQUFRLFdBQVIsQ0FBcUIsSUFBaEUsQ0FGekQsRUFFK0g7QUFDM0hnRyxZQUFBQSxDQUFDLENBQUNoRyxLQUFGLENBQVFpRyxJQUFSLEdBQWVELENBQUMsQ0FBQ2hHLEtBQUYsQ0FBUSxXQUFSLENBQWY7QUFDQWdHLFlBQUFBLENBQUMsQ0FBQ2hHLEtBQUYsQ0FBUSxXQUFSLElBQXVCMEMsU0FBdkI7QUFDSDs7QUFDRCxnQkFBTXZDLFVBQVUsR0FBRzRGLElBQUksQ0FBQ0MsQ0FBQyxDQUFDNUQsSUFBSCxDQUFKLElBQWdCLEVBQW5DO0FBQ0FqQyxVQUFBQSxVQUFVLENBQUNrRSxJQUFYLENBQWdCMkIsQ0FBaEI7QUFDQUQsVUFBQUEsSUFBSSxDQUFDQyxDQUFDLENBQUM1RCxJQUFILENBQUosR0FBZWpDLFVBQWY7QUFDSCxTQVZEO0FBV0EsY0FBTStGLGNBQWMsR0FBR0gsSUFBSSxDQUFDSSxLQUFMLEdBQWFKLElBQUksQ0FBQ0ksS0FBTCxDQUFXLENBQVgsQ0FBYixHQUE2QixJQUFwRDtBQUNBLFlBQUlBLEtBQUssR0FBRyxFQUFaOztBQUNBLFlBQUlELGNBQUosRUFBb0I7QUFDaEIsZ0JBQU07QUFBRXBELFlBQUFBO0FBQUYsY0FBZ0JvRCxjQUFjLENBQUNsRyxLQUFyQztBQUNBbUcsVUFBQUEsS0FBSyxHQUFHLE9BQU9yRCxRQUFQLEtBQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQ0ssS0FBSyxDQUFDQyxPQUFOLENBQWNOLFFBQWQsSUFBMEJBLFFBQVEsQ0FBQ08sSUFBVCxDQUFjLEVBQWQsQ0FBMUIsR0FBOEMsRUFBaEc7QUFDSDs7QUFDRCxZQUFJOEMsS0FBSyxLQUFLN0QsUUFBUSxDQUFDNkQsS0FBdkIsRUFBOEI3RCxRQUFRLENBQUM2RCxLQUFULEdBQWlCQSxLQUFqQjtBQUM5QixTQUNJLE1BREosRUFFSSxNQUZKLEVBR0ksTUFISixFQUlJLE9BSkosRUFLSSxRQUxKLEVBTUVuQixPQU5GLENBTVc1QyxJQUFELElBQVE7QUFDZGtCLFVBQUFBLGNBQWMsQ0FBQ2xCLElBQUQsRUFBTzJELElBQUksQ0FBQzNELElBQUQsQ0FBSixJQUFjLEVBQXJCLENBQWQ7QUFDSCxTQVJEO0FBU0gsT0FoQytCLENBQWhDO0FBaUNIO0FBcENFLEdBQVA7QUFzQ0g7Ozs7Ozs7Ozs7O0FDNUdZOztBQUNiYiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBRCwyQkFBQSxHQUE4QkEsMEJBQUEsR0FBNkIsS0FBSyxDQUFoRTs7QUFDQSxNQUFNMkUsbUJBQW1CLEdBQUcsT0FBT0UsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRixtQkFBcEMsSUFBMkRFLElBQUksQ0FBQ0YsbUJBQUwsQ0FBeUJHLElBQXpCLENBQThCQyxNQUE5QixDQUEzRCxJQUFvRyxVQUFTQyxFQUFULEVBQWE7QUFDekksTUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBWjtBQUNBLFNBQU9DLFVBQVUsQ0FBQyxZQUFXO0FBQ3pCSixJQUFBQSxFQUFFLENBQUM7QUFDQ0ssTUFBQUEsVUFBVSxFQUFFLEtBRGI7QUFFQ0MsTUFBQUEsYUFBYSxFQUFFLFlBQVc7QUFDdEIsZUFBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZLE1BQU1OLElBQUksQ0FBQ0MsR0FBTCxLQUFhRixLQUFuQixDQUFaLENBQVA7QUFDSDtBQUpGLEtBQUQsQ0FBRjtBQU1ILEdBUGdCLEVBT2QsQ0FQYyxDQUFqQjtBQVFILENBVkQ7O0FBV0FqRiwyQkFBQSxHQUE4QjJFLG1CQUE5Qjs7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxPQUFPQyxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNELGtCQUFwQyxJQUEwREMsSUFBSSxDQUFDRCxrQkFBTCxDQUF3QkUsSUFBeEIsQ0FBNkJDLE1BQTdCLENBQTFELElBQWtHLFVBQVNVLEVBQVQsRUFBYTtBQUN0SSxTQUFPQyxZQUFZLENBQUNELEVBQUQsQ0FBbkI7QUFDSCxDQUZEOztBQUdBekYsMEJBQUEsR0FBNkI0RSxrQkFBN0I7Ozs7Ozs7Ozs7O0FDcEJhOztBQUNiOUUsOENBQTZDO0FBQ3pDRyxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQUQsd0JBQUEsR0FBMkIyRixnQkFBM0I7QUFDQTNGLGVBQUEsR0FBa0IsS0FBSyxDQUF2Qjs7QUFDQSxJQUFJNEYsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLG9CQUFELENBQXBCOztBQUNBLElBQUlDLG1CQUFtQixHQUFHRCxtQkFBTyxDQUFDLDhFQUFELENBQWpDOztBQUNBLElBQUlFLFlBQVksR0FBR0YsbUJBQU8sQ0FBQyx1RUFBRCxDQUExQjs7QUFDQSxJQUFJRyxvQkFBb0IsR0FBR0gsbUJBQU8sQ0FBQyx5RkFBRCxDQUFsQzs7QUFDQSxTQUFTSSxlQUFULENBQXlCQyxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNsRyxLQUFuQyxFQUEwQztBQUN0QyxNQUFJa0csR0FBRyxJQUFJRCxHQUFYLEVBQWdCO0FBQ1pwRyxJQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JtRyxHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDNUJsRyxNQUFBQSxLQUFLLEVBQUVBLEtBRHFCO0FBRTVCbUcsTUFBQUEsVUFBVSxFQUFFLElBRmdCO0FBRzVCQyxNQUFBQSxZQUFZLEVBQUUsSUFIYztBQUk1QkMsTUFBQUEsUUFBUSxFQUFFO0FBSmtCLEtBQWhDO0FBTUgsR0FQRCxNQU9PO0FBQ0hKLElBQUFBLEdBQUcsQ0FBQ0MsR0FBRCxDQUFILEdBQVdsRyxLQUFYO0FBQ0g7O0FBQ0QsU0FBT2lHLEdBQVA7QUFDSDs7QUFDRCxTQUFTSyxhQUFULENBQXVCQyxNQUF2QixFQUErQjtBQUMzQixPQUFJLElBQUloRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdpRSxTQUFTLENBQUN0RCxNQUE3QixFQUFxQ1gsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQyxRQUFJa0UsTUFBTSxHQUFHRCxTQUFTLENBQUNqRSxDQUFELENBQVQsSUFBZ0IsSUFBaEIsR0FBdUJpRSxTQUFTLENBQUNqRSxDQUFELENBQWhDLEdBQXNDLEVBQW5EO0FBRUEsUUFBSW1FLE9BQU8sR0FBRzdHLE1BQU0sQ0FBQzhHLElBQVAsQ0FBWUYsTUFBWixDQUFkOztBQUNBLFFBQUksT0FBTzVHLE1BQU0sQ0FBQytHLHFCQUFkLEtBQXdDLFVBQTVDLEVBQXdEO0FBQ3BERixNQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csTUFBUixDQUFlaEgsTUFBTSxDQUFDK0cscUJBQVAsQ0FBNkJILE1BQTdCLEVBQXFDM0QsTUFBckMsQ0FBNEMsVUFBU2dFLEdBQVQsRUFBYztBQUMvRSxlQUFPakgsTUFBTSxDQUFDa0gsd0JBQVAsQ0FBZ0NOLE1BQWhDLEVBQXdDSyxHQUF4QyxFQUE2Q1gsVUFBcEQ7QUFDSCxPQUZ3QixDQUFmLENBQVY7QUFHSDs7QUFDRE8sSUFBQUEsT0FBTyxDQUFDcEQsT0FBUixDQUFnQixVQUFTNEMsR0FBVCxFQUFjO0FBQzFCRixNQUFBQSxlQUFlLENBQUNPLE1BQUQsRUFBU0wsR0FBVCxFQUFjTyxNQUFNLENBQUNQLEdBQUQsQ0FBcEIsQ0FBZjtBQUNILEtBRkQ7QUFHSDs7QUFDRCxTQUFPSyxNQUFQO0FBQ0g7O0FBQ0QsU0FBU1Msd0JBQVQsQ0FBa0NQLE1BQWxDLEVBQTBDUSxRQUExQyxFQUFvRDtBQUNoRCxNQUFJUixNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7O0FBRXBCLE1BQUlGLE1BQU0sR0FBR1csNkJBQTZCLENBQUNULE1BQUQsRUFBU1EsUUFBVCxDQUExQzs7QUFDQSxNQUFJZixHQUFKLEVBQVMzRCxDQUFUOztBQUNBLE1BQUkxQyxNQUFNLENBQUMrRyxxQkFBWCxFQUFrQztBQUM5QixRQUFJTyxnQkFBZ0IsR0FBR3RILE1BQU0sQ0FBQytHLHFCQUFQLENBQTZCSCxNQUE3QixDQUF2Qjs7QUFDQSxTQUFJbEUsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHNEUsZ0JBQWdCLENBQUNqRSxNQUFoQyxFQUF3Q1gsQ0FBQyxFQUF6QyxFQUE0QztBQUN4QzJELE1BQUFBLEdBQUcsR0FBR2lCLGdCQUFnQixDQUFDNUUsQ0FBRCxDQUF0QjtBQUNBLFVBQUkwRSxRQUFRLENBQUNHLE9BQVQsQ0FBaUJsQixHQUFqQixLQUF5QixDQUE3QixFQUFnQztBQUNoQyxVQUFJLENBQUNyRyxNQUFNLENBQUN3SCxTQUFQLENBQWlCQyxvQkFBakIsQ0FBc0NDLElBQXRDLENBQTJDZCxNQUEzQyxFQUFtRFAsR0FBbkQsQ0FBTCxFQUE4RDtBQUM5REssTUFBQUEsTUFBTSxDQUFDTCxHQUFELENBQU4sR0FBY08sTUFBTSxDQUFDUCxHQUFELENBQXBCO0FBQ0g7QUFDSjs7QUFDRCxTQUFPSyxNQUFQO0FBQ0g7O0FBQ0QsU0FBU1csNkJBQVQsQ0FBdUNULE1BQXZDLEVBQStDUSxRQUEvQyxFQUF5RDtBQUNyRCxNQUFJUixNQUFNLElBQUksSUFBZCxFQUFvQixPQUFPLEVBQVA7QUFFcEIsTUFBSUYsTUFBTSxHQUFHLEVBQWI7QUFFQSxNQUFJaUIsVUFBVSxHQUFHM0gsTUFBTSxDQUFDOEcsSUFBUCxDQUFZRixNQUFaLENBQWpCO0FBQ0EsTUFBSVAsR0FBSixFQUFTM0QsQ0FBVDs7QUFDQSxPQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXQSxDQUFDLEdBQUdpRixVQUFVLENBQUN0RSxNQUExQixFQUFrQ1gsQ0FBQyxFQUFuQyxFQUFzQztBQUNsQzJELElBQUFBLEdBQUcsR0FBR3NCLFVBQVUsQ0FBQ2pGLENBQUQsQ0FBaEI7QUFDQSxRQUFJMEUsUUFBUSxDQUFDRyxPQUFULENBQWlCbEIsR0FBakIsS0FBeUIsQ0FBN0IsRUFBZ0M7QUFDaENLLElBQUFBLE1BQU0sQ0FBQ0wsR0FBRCxDQUFOLEdBQWNPLE1BQU0sQ0FBQ1AsR0FBRCxDQUFwQjtBQUNIOztBQUNELFNBQU9LLE1BQVA7QUFDSDs7QUFDRCxNQUFNa0IsV0FBVyxHQUFHLElBQUlDLEdBQUosRUFBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBSTdELEdBQUosRUFBbEI7QUFDQSxNQUFNOEQsV0FBVyxHQUFHLENBQ2hCLFFBRGdCLEVBRWhCLHlCQUZnQixFQUdoQixVQUhnQixFQUloQixTQUpnQixFQUtoQixVQUxnQixDQUFwQjs7QUFPQSxNQUFNQyxVQUFVLEdBQUl2SixLQUFELElBQVM7QUFDeEIsUUFBTTtBQUFFd0osSUFBQUEsR0FBRjtBQUFRdEMsSUFBQUEsRUFBUjtBQUFhdUMsSUFBQUEsTUFBTSxHQUFFLE1BQUksQ0FDOUIsQ0FESztBQUNGMUcsSUFBQUEsdUJBREU7QUFDd0JELElBQUFBLFFBQVEsR0FBRSxFQURsQztBQUN1QzRHLElBQUFBLFFBQVEsR0FBRSxrQkFEakQ7QUFDc0VDLElBQUFBO0FBRHRFLE1BQ3FGM0osS0FEM0Y7QUFFQSxRQUFNNEosUUFBUSxHQUFHMUMsRUFBRSxJQUFJc0MsR0FBdkIsQ0FId0IsQ0FJeEI7O0FBQ0EsTUFBSUksUUFBUSxJQUFJUCxTQUFTLENBQUNRLEdBQVYsQ0FBY0QsUUFBZCxDQUFoQixFQUF5QztBQUNyQztBQUNILEdBUHVCLENBUXhCOzs7QUFDQSxNQUFJVCxXQUFXLENBQUNVLEdBQVosQ0FBZ0JMLEdBQWhCLENBQUosRUFBMEI7QUFDdEJILElBQUFBLFNBQVMsQ0FBQ1MsR0FBVixDQUFjRixRQUFkLEVBRHNCLENBRXRCOztBQUNBVCxJQUFBQSxXQUFXLENBQUNZLEdBQVosQ0FBZ0JQLEdBQWhCLEVBQXFCMUQsSUFBckIsQ0FBMEIyRCxNQUExQixFQUFrQ0UsT0FBbEM7QUFDQTtBQUNIOztBQUNELFFBQU10SCxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFYO0FBQ0EsUUFBTXlILFdBQVcsR0FBRyxJQUFJcEUsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVW9FLE1BQVYsS0FBbUI7QUFDL0M1SCxJQUFBQSxFQUFFLENBQUM2SCxnQkFBSCxDQUFvQixNQUFwQixFQUE0QixVQUFTQyxDQUFULEVBQVk7QUFDcEN0RSxNQUFBQSxPQUFPOztBQUNQLFVBQUk0RCxNQUFKLEVBQVk7QUFDUkEsUUFBQUEsTUFBTSxDQUFDUixJQUFQLENBQVksSUFBWixFQUFrQmtCLENBQWxCO0FBQ0g7QUFDSixLQUxEO0FBTUE5SCxJQUFBQSxFQUFFLENBQUM2SCxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFTQyxDQUFULEVBQVk7QUFDckNGLE1BQUFBLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOO0FBQ0gsS0FGRDtBQUdILEdBVm1CLEVBVWpCQyxLQVZpQixDQVVYLFVBQVNELENBQVQsRUFBWTtBQUNqQixRQUFJUixPQUFKLEVBQWE7QUFDVEEsTUFBQUEsT0FBTyxDQUFDUSxDQUFELENBQVA7QUFDSDtBQUNKLEdBZG1CLENBQXBCOztBQWVBLE1BQUlYLEdBQUosRUFBUztBQUNMTCxJQUFBQSxXQUFXLENBQUNrQixHQUFaLENBQWdCYixHQUFoQixFQUFxQlEsV0FBckI7QUFDSDs7QUFDRFgsRUFBQUEsU0FBUyxDQUFDUyxHQUFWLENBQWNGLFFBQWQ7O0FBQ0EsTUFBSTdHLHVCQUFKLEVBQTZCO0FBQ3pCVixJQUFBQSxFQUFFLENBQUNXLFNBQUgsR0FBZUQsdUJBQXVCLENBQUNFLE1BQXhCLElBQWtDLEVBQWpEO0FBQ0gsR0FGRCxNQUVPLElBQUlILFFBQUosRUFBYztBQUNqQlQsSUFBQUEsRUFBRSxDQUFDYSxXQUFILEdBQWlCLE9BQU9KLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0JBLFFBQS9CLEdBQTBDSyxLQUFLLENBQUNDLE9BQU4sQ0FBY04sUUFBZCxJQUEwQkEsUUFBUSxDQUFDTyxJQUFULENBQWMsRUFBZCxDQUExQixHQUE4QyxFQUF6RztBQUNILEdBRk0sTUFFQSxJQUFJbUcsR0FBSixFQUFTO0FBQ1puSCxJQUFBQSxFQUFFLENBQUNtSCxHQUFILEdBQVNBLEdBQVQ7QUFDSDs7QUFDRCxPQUFLLE1BQU0sQ0FBQzlFLENBQUQsRUFBSWhELEtBQUosQ0FBWCxJQUF5QkgsTUFBTSxDQUFDK0ksT0FBUCxDQUFldEssS0FBZixDQUF6QixFQUErQztBQUMzQyxRQUFJMEIsS0FBSyxLQUFLZ0IsU0FBVixJQUF1QjRHLFdBQVcsQ0FBQ2lCLFFBQVosQ0FBcUI3RixDQUFyQixDQUEzQixFQUFvRDtBQUNoRDtBQUNIOztBQUNELFVBQU0vQixJQUFJLEdBQUc2RSxZQUFZLENBQUMzRixpQkFBYixDQUErQjZDLENBQS9CLEtBQXFDQSxDQUFDLENBQUM5QixXQUFGLEVBQWxEO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsWUFBSCxDQUFnQkYsSUFBaEIsRUFBc0JqQixLQUF0QjtBQUNIOztBQUNEVyxFQUFBQSxFQUFFLENBQUNRLFlBQUgsQ0FBZ0IsY0FBaEIsRUFBZ0M2RyxRQUFoQztBQUNBcEgsRUFBQUEsUUFBUSxDQUFDckMsSUFBVCxDQUFjdUssV0FBZCxDQUEwQm5JLEVBQTFCO0FBQ0gsQ0FuREQ7O0FBb0RBLFNBQVNvSSxzQkFBVCxDQUFnQ3pLLEtBQWhDLEVBQXVDO0FBQ25DLFFBQU07QUFBRTBKLElBQUFBLFFBQVEsR0FBRTtBQUFaLE1BQW9DMUosS0FBMUM7O0FBQ0EsTUFBSTBKLFFBQVEsS0FBSyxrQkFBakIsRUFBcUM7QUFDakNILElBQUFBLFVBQVUsQ0FBQ3ZKLEtBQUQsQ0FBVjtBQUNILEdBRkQsTUFFTyxJQUFJMEosUUFBUSxLQUFLLFlBQWpCLEVBQStCO0FBQ2xDbEQsSUFBQUEsTUFBTSxDQUFDMEQsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsTUFBSTtBQUNoQyxPQUFDLEdBQUd6QyxvQkFBSixFQUEwQnJCLG1CQUExQixDQUE4QyxNQUFJbUQsVUFBVSxDQUFDdkosS0FBRCxDQUE1RDtBQUVILEtBSEQ7QUFJSDtBQUNKOztBQUNELFNBQVMwSyxjQUFULENBQXdCMUssS0FBeEIsRUFBK0I7QUFDM0IsTUFBSXNDLFFBQVEsQ0FBQ3FJLFVBQVQsS0FBd0IsVUFBNUIsRUFBd0M7QUFDcEMsS0FBQyxHQUFHbEQsb0JBQUosRUFBMEJyQixtQkFBMUIsQ0FBOEMsTUFBSW1ELFVBQVUsQ0FBQ3ZKLEtBQUQsQ0FBNUQ7QUFFSCxHQUhELE1BR087QUFDSHdHLElBQUFBLE1BQU0sQ0FBQzBELGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQUk7QUFDaEMsT0FBQyxHQUFHekMsb0JBQUosRUFBMEJyQixtQkFBMUIsQ0FBOEMsTUFBSW1ELFVBQVUsQ0FBQ3ZKLEtBQUQsQ0FBNUQ7QUFFSCxLQUhEO0FBSUg7QUFDSjs7QUFDRCxTQUFTb0gsZ0JBQVQsQ0FBMEJ3RCxpQkFBMUIsRUFBNkM7QUFDekNBLEVBQUFBLGlCQUFpQixDQUFDNUYsT0FBbEIsQ0FBMEJ5RixzQkFBMUI7QUFDSDs7QUFDRCxTQUFTSSxNQUFULENBQWdCN0ssS0FBaEIsRUFBdUI7QUFDbkIsUUFBTTtBQUFFd0osSUFBQUEsR0FBRyxHQUFFLEVBQVA7QUFBWUMsSUFBQUEsTUFBTSxHQUFFLE1BQUksQ0FDN0IsQ0FESztBQUNGMUcsSUFBQUEsdUJBREU7QUFDd0IyRyxJQUFBQSxRQUFRLEdBQUUsa0JBRGxDO0FBQ3VEQyxJQUFBQTtBQUR2RCxNQUNvRTNKLEtBRDFFO0FBQUEsUUFDaUY4SyxTQUFTLEdBQUdwQyx3QkFBd0IsQ0FBQzFJLEtBQUQsRUFBUSxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLHlCQUFsQixFQUE2QyxVQUE3QyxFQUF5RCxTQUF6RCxDQUFSLENBRHJILENBRG1CLENBR25COzs7QUFDQSxRQUFNO0FBQUUrSyxJQUFBQSxhQUFGO0FBQWtCQyxJQUFBQSxPQUFsQjtBQUE0QkMsSUFBQUE7QUFBNUIsTUFBMEMsQ0FBQyxHQUFHNUQsTUFBSixFQUFZNkQsVUFBWixDQUF1QjNELG1CQUFtQixDQUFDNEQsa0JBQTNDLENBQWhEO0FBQ0EsR0FBQyxHQUFHOUQsTUFBSixFQUFZK0QsU0FBWixDQUFzQixNQUFJO0FBQ3RCLFFBQUkxQixRQUFRLEtBQUssa0JBQWpCLEVBQXFDO0FBQ2pDSCxNQUFBQSxVQUFVLENBQUN2SixLQUFELENBQVY7QUFDSCxLQUZELE1BRU8sSUFBSTBKLFFBQVEsS0FBSyxZQUFqQixFQUErQjtBQUNsQ2dCLE1BQUFBLGNBQWMsQ0FBQzFLLEtBQUQsQ0FBZDtBQUNIO0FBQ0osR0FORCxFQU1HLENBQ0NBLEtBREQsRUFFQzBKLFFBRkQsQ0FOSDs7QUFVQSxNQUFJQSxRQUFRLEtBQUssbUJBQWpCLEVBQXNDO0FBQ2xDLFFBQUlxQixhQUFKLEVBQW1CO0FBQ2ZDLE1BQUFBLE9BQU8sQ0FBQ0ssaUJBQVIsR0FBNEIsQ0FBQ0wsT0FBTyxDQUFDSyxpQkFBUixJQUE2QixFQUE5QixFQUFrQzlDLE1BQWxDLENBQXlDLENBQ2pFUCxhQUFhLENBQUM7QUFDVndCLFFBQUFBLEdBRFU7QUFFVkMsUUFBQUEsTUFGVTtBQUdWRSxRQUFBQTtBQUhVLE9BQUQsRUFJVm1CLFNBSlUsQ0FEb0QsQ0FBekMsQ0FBNUI7QUFPQUMsTUFBQUEsYUFBYSxDQUFDQyxPQUFELENBQWI7QUFDSCxLQVRELE1BU08sSUFBSUMsUUFBUSxJQUFJQSxRQUFRLEVBQXhCLEVBQTRCO0FBQy9CO0FBQ0E1QixNQUFBQSxTQUFTLENBQUNTLEdBQVYsQ0FBY2dCLFNBQVMsQ0FBQzVELEVBQVYsSUFBZ0JzQyxHQUE5QjtBQUNILEtBSE0sTUFHQSxJQUFJeUIsUUFBUSxJQUFJLENBQUNBLFFBQVEsRUFBekIsRUFBNkI7QUFDaEMxQixNQUFBQSxVQUFVLENBQUN2SixLQUFELENBQVY7QUFDSDtBQUNKOztBQUNELFNBQU8sSUFBUDtBQUNIOztBQUNELElBQUlzTCxRQUFRLEdBQUdULE1BQWY7QUFDQXBKLGVBQUEsR0FBa0I2SixRQUFsQjs7Ozs7Ozs7Ozs7QUM5TGE7Ozs7Ozs7Ozs7Ozs7O0FBQ2IvSiw4Q0FBNkM7QUFDekNHLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBSCxtREFBa0Q7QUFDOUNzRyxFQUFBQSxVQUFVLEVBQUUsSUFEa0M7QUFFOUNrQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU93QixNQUFNLENBQUNDLGVBQWQ7QUFDSDtBQUo2QyxDQUFsRDtBQU1Bakssd0RBQXVEO0FBQ25Ec0csRUFBQUEsVUFBVSxFQUFFLElBRHVDO0FBRW5Ea0MsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPd0IsTUFBTSxDQUFDRSxvQkFBZDtBQUNIO0FBSmtELENBQXZEO0FBTUFsSyxpREFBZ0Q7QUFDNUNzRyxFQUFBQSxVQUFVLEVBQUUsSUFEZ0M7QUFFNUNrQyxFQUFBQSxHQUFHLEVBQUUsWUFBVztBQUNaLFdBQU93QixNQUFNLENBQUNHLGFBQWQ7QUFDSDtBQUoyQyxDQUFoRDtBQU1BakssWUFBQSxHQUFla0ssSUFBZjtBQUNBbEssWUFBQSxHQUFlbUssSUFBZjtBQUNBbkssZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUk0RixNQUFNLEdBQUd3RSx1QkFBdUIsQ0FBQ3ZFLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJd0UsT0FBTyxHQUFHQyxzQkFBc0IsQ0FBQ3pFLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFwQzs7QUFDQSxJQUFJMEUsVUFBVSxHQUFHMUUsbUJBQU8sQ0FBQyx3REFBRCxDQUF4Qjs7QUFDQSxJQUFJaUUsTUFBTSxHQUFHakUsbUJBQU8sQ0FBQyxnREFBRCxDQUFwQjs7QUFDQSxJQUFJMkUsYUFBYSxHQUFHM0UsbUJBQU8sQ0FBQywwREFBRCxDQUEzQjs7QUFDQSxJQUFJNEUsT0FBTyxHQUFHNUUsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFyQjs7QUFDQSxJQUFJNkUsV0FBVyxHQUFHN0UsbUJBQU8sQ0FBQyxrREFBRCxDQUF6Qjs7QUFDQSxJQUFJOEUsT0FBTyxHQUFHTCxzQkFBc0IsQ0FBQ3pFLG1CQUFPLENBQUMsbUVBQUQsQ0FBUixDQUFwQzs7QUFDQSxTQUFTeUUsc0JBQVQsQ0FBZ0NwRSxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQzBFLFVBQVgsR0FBd0IxRSxHQUF4QixHQUE4QjtBQUNqQ2hHLElBQUFBLE9BQU8sRUFBRWdHO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU2tFLHVCQUFULENBQWlDbEUsR0FBakMsRUFBc0M7QUFDbEMsTUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUMwRSxVQUFmLEVBQTJCO0FBQ3ZCLFdBQU8xRSxHQUFQO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsUUFBSTJFLE1BQU0sR0FBRyxFQUFiOztBQUVBLFFBQUkzRSxHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNiLFdBQUksSUFBSUMsR0FBUixJQUFlRCxHQUFmLEVBQW1CO0FBQ2YsWUFBSXBHLE1BQU0sQ0FBQ3dILFNBQVAsQ0FBaUJ0RyxjQUFqQixDQUFnQ3dHLElBQWhDLENBQXFDdEIsR0FBckMsRUFBMENDLEdBQTFDLENBQUosRUFBb0Q7QUFDaEQsY0FBSTJFLElBQUksR0FBR2hMLE1BQU0sQ0FBQ0MsY0FBUCxJQUF5QkQsTUFBTSxDQUFDa0gsd0JBQWhDLEdBQTJEbEgsTUFBTSxDQUFDa0gsd0JBQVAsQ0FBZ0NkLEdBQWhDLEVBQXFDQyxHQUFyQyxDQUEzRCxHQUF1RyxFQUFsSDs7QUFFQSxjQUFJMkUsSUFBSSxDQUFDeEMsR0FBTCxJQUFZd0MsSUFBSSxDQUFDbEMsR0FBckIsRUFBMEI7QUFDdEI5SSxZQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0I4SyxNQUF0QixFQUE4QjFFLEdBQTlCLEVBQW1DMkUsSUFBbkM7QUFDSCxXQUZELE1BRU87QUFDSEQsWUFBQUEsTUFBTSxDQUFDMUUsR0FBRCxDQUFOLEdBQWNELEdBQUcsQ0FBQ0MsR0FBRCxDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKOztBQUNEMEUsSUFBQUEsTUFBTSxDQUFDM0ssT0FBUCxHQUFpQmdHLEdBQWpCO0FBQ0EsV0FBTzJFLE1BQVA7QUFDSDtBQUNKOztBQUNELFNBQVNFLGdCQUFULENBQTBCQyxhQUExQixFQUF5Q0MsUUFBekMsRUFBbURDLFNBQW5ELEVBQThEO0FBQzFELFFBQU1DLFdBQVcsR0FBRyxDQUFDLEdBQUdYLGFBQUosRUFBbUJZLFlBQW5CLENBQWdDSixhQUFoQyxFQUErQyxPQUEvQyxDQUFwQjtBQUNBLFFBQU1LLFNBQVMsR0FBR0gsU0FBUyxHQUFHLEVBQUgsR0FBUSxDQUFDLEdBQUdWLGFBQUosRUFBbUJZLFlBQW5CLENBQWdDSixhQUFoQyxFQUErQ0MsUUFBL0MsQ0FBbkM7QUFDQSxTQUFPO0FBQ0hFLElBQUFBLFdBREc7QUFFSEUsSUFBQUEsU0FGRztBQUdIQyxJQUFBQSxRQUFRLEVBQUUsQ0FDTixHQUFHLElBQUl2SCxHQUFKLENBQVEsQ0FDUCxHQUFHb0gsV0FESSxFQUVQLEdBQUdFLFNBRkksQ0FBUixDQURHO0FBSFAsR0FBUDtBQVVIOztBQUNELFNBQVNFLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQ2pOLEtBQXJDLEVBQTRDO0FBQ3hDO0FBQ0E7QUFDQSxRQUFNO0FBQUVrTixJQUFBQSxXQUFGO0FBQWdCVCxJQUFBQSxhQUFoQjtBQUFnQ1UsSUFBQUEsNkJBQWhDO0FBQWdFQyxJQUFBQTtBQUFoRSxNQUErRkgsT0FBckc7QUFDQSxTQUFPUixhQUFhLENBQUNZLGFBQWQsQ0FBNEI3SSxNQUE1QixDQUFvQzhJLFFBQUQsSUFBWUEsUUFBUSxDQUFDQyxRQUFULENBQWtCLEtBQWxCLEtBQTRCLENBQUNELFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQixZQUFsQixDQUE1RSxFQUNMaEosR0FESyxDQUNBK0ksUUFBRCxJQUFZLGFBQWNqRyxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7QUFDL0RxRixJQUFBQSxHQUFHLEVBQUUwRixRQUQwRDtBQUUvREUsSUFBQUEsS0FBSyxFQUFFLENBQUNKLHVCQUZ1RDtBQUcvREssSUFBQUEsS0FBSyxFQUFFek4sS0FBSyxDQUFDeU4sS0FIa0Q7QUFJL0RDLElBQUFBLFdBQVcsRUFBRTFOLEtBQUssQ0FBQzBOLFdBQU4sSUFBcUJDLFNBSjZCO0FBSy9EekwsSUFBQUEsUUFBUSxFQUFFLElBTHFEO0FBTS9Ec0gsSUFBQUEsR0FBRyxFQUFHLEdBQUUwRCxXQUFZLFVBQVNJLFFBQVMsR0FBRUgsNkJBQThCO0FBTlAsR0FBdkMsQ0FEekIsQ0FBUDtBQVVIOztBQUNELFNBQVNXLGlCQUFULENBQTJCYixPQUEzQixFQUFvQ2pOLEtBQXBDLEVBQTJDO0FBQ3ZDLFFBQU07QUFBRStOLElBQUFBLFlBQUY7QUFBaUJYLElBQUFBO0FBQWpCLE1BQThDSCxPQUFwRDtBQUNBLFNBQU8sQ0FBQ2MsWUFBWSxDQUFDMUMsaUJBQWIsSUFBa0MsRUFBbkMsRUFBdUM5RyxHQUF2QyxDQUEyQyxDQUFDeUosSUFBRCxFQUFPQyxLQUFQLEtBQWU7QUFDN0QsVUFBTTtBQUFFdkUsTUFBQUE7QUFBRixRQUFnQ3NFLElBQXRDO0FBQUEsVUFBc0JFLFdBQXRCLDRCQUFzQ0YsSUFBdEM7O0FBQ0EsV0FBTyxhQUFjM0csTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFFBQTdCLEVBQXVDaEIsTUFBTSxDQUFDNE0sTUFBUCxDQUFjLEVBQWQsRUFDekRELFdBRHlELEVBQzVDO0FBQ1p0RyxNQUFBQSxHQUFHLEVBQUVzRyxXQUFXLENBQUMxRSxHQUFaLElBQW1CeUUsS0FEWjtBQUVaVCxNQUFBQSxLQUFLLEVBQUUsQ0FBQ0osdUJBRkk7QUFHWkssTUFBQUEsS0FBSyxFQUFFek4sS0FBSyxDQUFDeU4sS0FIRDtBQUlaLHNCQUFnQixtQkFKSjtBQUtaQyxNQUFBQSxXQUFXLEVBQUUxTixLQUFLLENBQUMwTixXQUFOLElBQXFCQyxTQUErQkU7QUFMckQsS0FENEMsQ0FBdkMsQ0FBckI7QUFRSCxHQVZNLENBQVA7QUFXSDs7QUFDRCxTQUFTTyxnQkFBVCxDQUEwQm5CLE9BQTFCLEVBQW1Dak4sS0FBbkMsRUFBMENxTyxLQUExQyxFQUFpRDtBQUM3QyxRQUFNO0FBQUVDLElBQUFBLGNBQUY7QUFBbUJwQixJQUFBQSxXQUFuQjtBQUFpQ3FCLElBQUFBLGFBQWpDO0FBQWlEcEIsSUFBQUEsNkJBQWpEO0FBQWlGQyxJQUFBQTtBQUFqRixNQUFnSEgsT0FBdEg7QUFDQSxTQUFPcUIsY0FBYyxDQUFDL0osR0FBZixDQUFvQnlKLElBQUQsSUFBUTtBQUM5QixRQUFJLENBQUNBLElBQUksQ0FBQ1QsUUFBTCxDQUFjLEtBQWQsQ0FBRCxJQUF5QmMsS0FBSyxDQUFDdEIsUUFBTixDQUFleEMsUUFBZixDQUF3QnlELElBQXhCLENBQTdCLEVBQTRELE9BQU8sSUFBUDtBQUM1RCxXQUFPLGFBQWMzRyxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7QUFDeERpTSxNQUFBQSxLQUFLLEVBQUUsQ0FBQ0QsYUFBRCxJQUFrQm5CLHVCQUQrQjtBQUV4REksTUFBQUEsS0FBSyxFQUFFLENBQUNKLHVCQUZnRDtBQUd4RHhGLE1BQUFBLEdBQUcsRUFBRW9HLElBSG1EO0FBSXhEeEUsTUFBQUEsR0FBRyxFQUFHLEdBQUUwRCxXQUFZLFVBQVN1QixTQUFTLENBQUNULElBQUQsQ0FBTyxHQUFFYiw2QkFBOEIsRUFKckI7QUFLeERNLE1BQUFBLEtBQUssRUFBRXpOLEtBQUssQ0FBQ3lOLEtBTDJDO0FBTXhEQyxNQUFBQSxXQUFXLEVBQUUxTixLQUFLLENBQUMwTixXQUFOLElBQXFCQyxTQUErQkU7QUFOVCxLQUF2QyxDQUFyQjtBQVFILEdBVk0sQ0FBUDtBQVdIOztBQUNELFNBQVNhLFVBQVQsQ0FBb0J6QixPQUFwQixFQUE2QmpOLEtBQTdCLEVBQW9DcU8sS0FBcEMsRUFBMkM7QUFDdkMsTUFBSU0sR0FBSjtBQUNBLFFBQU07QUFBRXpCLElBQUFBLFdBQUY7QUFBZ0JULElBQUFBLGFBQWhCO0FBQWdDOEIsSUFBQUEsYUFBaEM7QUFBZ0RwQixJQUFBQSw2QkFBaEQ7QUFBZ0ZDLElBQUFBO0FBQWhGLE1BQStHSCxPQUFySDtBQUNBLFFBQU0yQixhQUFhLEdBQUdQLEtBQUssQ0FBQ3RCLFFBQU4sQ0FBZXZJLE1BQWYsQ0FBdUJ3SixJQUFELElBQVFBLElBQUksQ0FBQ1QsUUFBTCxDQUFjLEtBQWQsQ0FBOUIsQ0FBdEI7QUFFQSxRQUFNc0Isa0JBQWtCLEdBQUcsQ0FBQ0YsR0FBRyxHQUFHbEMsYUFBYSxDQUFDcUMsZ0JBQXJCLE1BQTJDLElBQTNDLElBQW1ESCxHQUFHLEtBQUssS0FBSyxDQUFoRSxHQUFvRSxLQUFLLENBQXpFLEdBQTZFQSxHQUFHLENBQUNuSyxNQUFKLENBQVl3SixJQUFELElBQVFBLElBQUksQ0FBQ1QsUUFBTCxDQUFjLEtBQWQsQ0FBbkIsQ0FBeEc7QUFFQSxTQUFPLENBQ0gsR0FBR3FCLGFBREEsRUFFSCxHQUFHQyxrQkFGQSxFQUdMdEssR0FISyxDQUdBeUosSUFBRCxJQUFRO0FBQ1YsV0FBTyxhQUFjM0csTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFFBQTdCLEVBQXVDO0FBQ3hEcUYsTUFBQUEsR0FBRyxFQUFFb0csSUFEbUQ7QUFFeER4RSxNQUFBQSxHQUFHLEVBQUcsR0FBRTBELFdBQVksVUFBU3VCLFNBQVMsQ0FBQ1QsSUFBRCxDQUFPLEdBQUViLDZCQUE4QixFQUZyQjtBQUd4RE0sTUFBQUEsS0FBSyxFQUFFek4sS0FBSyxDQUFDeU4sS0FIMkM7QUFJeERlLE1BQUFBLEtBQUssRUFBRSxDQUFDRCxhQUFELElBQWtCbkIsdUJBSitCO0FBS3hESSxNQUFBQSxLQUFLLEVBQUUsQ0FBQ0osdUJBTGdEO0FBTXhETSxNQUFBQSxXQUFXLEVBQUUxTixLQUFLLENBQUMwTixXQUFOLElBQXFCQyxTQUErQkU7QUFOVCxLQUF2QyxDQUFyQjtBQVFILEdBWk0sQ0FBUDtBQWFIOztBQUNELE1BQU1rQixTQUFOLFNBQXdCMUgsTUFBTSxDQUFDMkgsU0FBL0IsQ0FBeUM7QUFDckM7QUFDSjtBQUNBO0FBQ0E7QUFBa0MsZUFBZkMsZUFBZSxDQUFDQyxHQUFELEVBQU07QUFDaEMsVUFBTUMsVUFBVSxHQUFJQyxHQUFELElBQU87QUFDdEIsYUFBUXBQLEtBQUQsSUFBUyxhQUFjcUgsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCNk0sR0FBN0IsRUFBa0M3TixNQUFNLENBQUM0TSxNQUFQLENBQWMsRUFBZCxFQUN6RG5PLEtBRHlELENBQWxDLENBQTlCO0FBR0gsS0FKRDs7QUFLQSxVQUFNO0FBQUVxUCxNQUFBQSxJQUFGO0FBQVMzSixNQUFBQTtBQUFULFFBQW1CLE1BQU13SixHQUFHLENBQUNJLFVBQUosQ0FBZTtBQUMxQ0gsTUFBQUE7QUFEMEMsS0FBZixDQUEvQjtBQUdBLFVBQU1yUCxNQUFNLEdBQUcsQ0FDWCxHQUFHLENBQUMsR0FBR2dNLE9BQUosRUFBYW5LLE9BQWIsRUFEUSxDQUFmO0FBR0EsV0FBTztBQUNIME4sTUFBQUEsSUFERztBQUVIM0osTUFBQUEsSUFGRztBQUdINUYsTUFBQUE7QUFIRyxLQUFQO0FBS0g7O0FBQ0R5UCxFQUFBQSxNQUFNLEdBQUc7QUFDTCxXQUFPLGFBQWNsSSxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkJvSixJQUE3QixFQUFtQyxJQUFuQyxFQUF5QyxhQUFjdEUsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCaU4sSUFBN0IsRUFBbUMsSUFBbkMsQ0FBdkQsRUFBaUcsYUFBY25JLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixNQUE3QixFQUFxQyxJQUFyQyxFQUEyQyxhQUFjOEUsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCcUosSUFBN0IsRUFBbUMsSUFBbkMsQ0FBekQsRUFBbUcsYUFBY3ZFLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QmtOLFVBQTdCLEVBQXlDLElBQXpDLENBQWpILENBQS9HLENBQXJCO0FBQ0g7O0FBeEJvQzs7QUEwQnpDaE8sZUFBQSxHQUFrQnNOLFNBQWxCOztBQUNBLFNBQVNwRCxJQUFULENBQWMzTCxLQUFkLEVBQXFCO0FBQ2pCLFFBQU07QUFBRTJNLElBQUFBLFNBQUY7QUFBYytDLElBQUFBLHFCQUFkO0FBQXNDQyxJQUFBQTtBQUF0QyxNQUFrRCxDQUFDLEdBQUd0SSxNQUFKLEVBQVk2RCxVQUFaLENBQXVCSyxNQUFNLENBQUNxRSxXQUE5QixDQUF4RDtBQUNBRixFQUFBQSxxQkFBcUIsQ0FBQy9ELElBQXRCLEdBQTZCLElBQTdCO0FBQ0EsU0FBTyxhQUFjdEUsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDaEIsTUFBTSxDQUFDNE0sTUFBUCxDQUFjLEVBQWQsRUFDdkRuTyxLQUR1RCxFQUNoRDtBQUNONlAsSUFBQUEsSUFBSSxFQUFFN1AsS0FBSyxDQUFDNlAsSUFBTixJQUFjRixNQUFkLElBQXdCak4sU0FEeEI7QUFFTm9OLElBQUFBLEdBQUcsRUFBRW5ELFNBQVMsR0FBRyxFQUFILEdBQVFqSyxTQUZoQjtBQUdOLHVCQUFtQmlLLFNBQVMsUUFBVCxHQUFxRCxFQUFyRCxHQUEwRGpLO0FBSHZFLEdBRGdELENBQXJDLENBQXJCO0FBTUg7O0FBQ0QsTUFBTThNLElBQU4sU0FBbUJuSSxNQUFNLENBQUMySCxTQUExQixDQUFvQztBQUNoQ2UsRUFBQUEsV0FBVyxDQUFDMUIsS0FBRCxFQUFRO0FBQ2YsVUFBTTtBQUFFbkIsTUFBQUEsV0FBRjtBQUFnQkMsTUFBQUEsNkJBQWhCO0FBQWdEbUIsTUFBQUE7QUFBaEQsUUFBb0UsS0FBS3JCLE9BQS9FO0FBQ0EsVUFBTStDLFFBQVEsR0FBRzNCLEtBQUssQ0FBQ3RCLFFBQU4sQ0FBZXZJLE1BQWYsQ0FBdUJ5TCxDQUFELElBQUtBLENBQUMsQ0FBQzFDLFFBQUYsQ0FBVyxNQUFYLENBQTNCLENBQWpCO0FBRUEsVUFBTVgsV0FBVyxHQUFHLElBQUlwSCxHQUFKLENBQVE2SSxLQUFLLENBQUN6QixXQUFkLENBQXBCLENBSmUsQ0FLZjtBQUNBOztBQUNBLFFBQUlzRCxhQUFhLEdBQUcsSUFBSTFLLEdBQUosQ0FBUSxFQUFSLENBQXBCO0FBQ0EsUUFBSTJLLGVBQWUsR0FBR2hOLEtBQUssQ0FBQ2lOLElBQU4sQ0FBVyxJQUFJNUssR0FBSixDQUFROEksY0FBYyxDQUFDOUosTUFBZixDQUF1QndKLElBQUQsSUFBUUEsSUFBSSxDQUFDVCxRQUFMLENBQWMsTUFBZCxDQUE5QixDQUFSLENBQVgsQ0FBdEI7O0FBRUEsUUFBSTRDLGVBQWUsQ0FBQ3ZMLE1BQXBCLEVBQTRCO0FBQ3hCLFlBQU15TCxRQUFRLEdBQUcsSUFBSTdLLEdBQUosQ0FBUXdLLFFBQVIsQ0FBakI7QUFDQUcsTUFBQUEsZUFBZSxHQUFHQSxlQUFlLENBQUMzTCxNQUFoQixDQUF3QnlMLENBQUQsSUFBSyxFQUFFSSxRQUFRLENBQUN4RyxHQUFULENBQWFvRyxDQUFiLEtBQW1CckQsV0FBVyxDQUFDL0MsR0FBWixDQUFnQm9HLENBQWhCLENBQXJCLENBQTVCLENBQWxCO0FBRUFDLE1BQUFBLGFBQWEsR0FBRyxJQUFJMUssR0FBSixDQUFRMkssZUFBUixDQUFoQjtBQUNBSCxNQUFBQSxRQUFRLENBQUMzTCxJQUFULENBQWMsR0FBRzhMLGVBQWpCO0FBQ0g7O0FBQ0QsUUFBSUcsZUFBZSxHQUFHLEVBQXRCO0FBQ0FOLElBQUFBLFFBQVEsQ0FBQ2hMLE9BQVQsQ0FBa0JnSixJQUFELElBQVE7QUFDckIsWUFBTXVDLFlBQVksR0FBRzNELFdBQVcsQ0FBQy9DLEdBQVosQ0FBZ0JtRSxJQUFoQixDQUFyQjs7QUFDQSxVQUFJLElBQUosRUFBc0M7QUFDbENzQyxRQUFBQSxlQUFlLENBQUNqTSxJQUFoQixFQUFxQixhQUFjZ0QsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQ3BFcUYsVUFBQUEsR0FBRyxFQUFHLEdBQUVvRyxJQUFLLFVBRHVEO0FBRXBFUCxVQUFBQSxLQUFLLEVBQUUsS0FBS3pOLEtBQUwsQ0FBV3lOLEtBRmtEO0FBR3BFZ0QsVUFBQUEsR0FBRyxFQUFFLFNBSCtEO0FBSXBFeEssVUFBQUEsSUFBSSxFQUFHLEdBQUVpSCxXQUFZLFVBQVN1QixTQUFTLENBQUNULElBQUQsQ0FBTyxHQUFFYiw2QkFBOEIsRUFKVjtBQUtwRXVELFVBQUFBLEVBQUUsRUFBRSxPQUxnRTtBQU1wRWhELFVBQUFBLFdBQVcsRUFBRSxLQUFLMU4sS0FBTCxDQUFXME4sV0FBWCxJQUEwQkMsU0FBK0JFO0FBTkYsU0FBckMsQ0FBbkM7QUFRSDs7QUFDRCxZQUFNOEMsZUFBZSxHQUFHVCxhQUFhLENBQUNyRyxHQUFkLENBQWtCbUUsSUFBbEIsQ0FBeEI7QUFDQXNDLE1BQUFBLGVBQWUsQ0FBQ2pNLElBQWhCLEVBQXFCLGFBQWNnRCxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDcEVxRixRQUFBQSxHQUFHLEVBQUVvRyxJQUQrRDtBQUVwRVAsUUFBQUEsS0FBSyxFQUFFLEtBQUt6TixLQUFMLENBQVd5TixLQUZrRDtBQUdwRWdELFFBQUFBLEdBQUcsRUFBRSxZQUgrRDtBQUlwRXhLLFFBQUFBLElBQUksRUFBRyxHQUFFaUgsV0FBWSxVQUFTdUIsU0FBUyxDQUFDVCxJQUFELENBQU8sR0FBRWIsNkJBQThCLEVBSlY7QUFLcEVPLFFBQUFBLFdBQVcsRUFBRSxLQUFLMU4sS0FBTCxDQUFXME4sV0FBWCxJQUEwQkMsU0FMNkI7QUFNcEUsb0JBQVlnRCxlQUFlLEdBQUdqTyxTQUFILEdBQWU2TixZQUFZLEdBQUcsRUFBSCxHQUFRN04sU0FOTTtBQU9wRSxvQkFBWWlPLGVBQWUsR0FBR2pPLFNBQUgsR0FBZTZOLFlBQVksR0FBRzdOLFNBQUgsR0FBZTtBQVBELE9BQXJDLENBQW5DO0FBU0gsS0F0QkQ7O0FBdUJBLFFBQUksS0FBSixFQUFpRixFQUVoRjs7QUFDRCxXQUFPNE4sZUFBZSxDQUFDMUwsTUFBaEIsS0FBMkIsQ0FBM0IsR0FBK0IsSUFBL0IsR0FBc0MwTCxlQUE3QztBQUNIOztBQUNEUSxFQUFBQSx1QkFBdUIsR0FBRztBQUN0QixVQUFNO0FBQUV4QyxNQUFBQSxjQUFGO0FBQW1CcEIsTUFBQUEsV0FBbkI7QUFBaUNDLE1BQUFBO0FBQWpDLFFBQW9FLEtBQUtGLE9BQS9FO0FBQ0EsV0FBT3FCLGNBQWMsQ0FBQy9KLEdBQWYsQ0FBb0J5SixJQUFELElBQVE7QUFDOUIsVUFBSSxDQUFDQSxJQUFJLENBQUNULFFBQUwsQ0FBYyxLQUFkLENBQUwsRUFBMkI7QUFDdkIsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsYUFBTyxhQUFjbEcsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQ3REa08sUUFBQUEsR0FBRyxFQUFFLFNBRGlEO0FBRXREN0ksUUFBQUEsR0FBRyxFQUFFb0csSUFGaUQ7QUFHdEQvSCxRQUFBQSxJQUFJLEVBQUcsR0FBRWlILFdBQVksVUFBU3VCLFNBQVMsQ0FBQ1QsSUFBRCxDQUFPLEdBQUViLDZCQUE4QixFQUh4QjtBQUl0RHVELFFBQUFBLEVBQUUsRUFBRSxRQUprRDtBQUt0RGpELFFBQUFBLEtBQUssRUFBRSxLQUFLek4sS0FBTCxDQUFXeU4sS0FMb0M7QUFNdERDLFFBQUFBLFdBQVcsRUFBRSxLQUFLMU4sS0FBTCxDQUFXME4sV0FBWCxJQUEwQkMsU0FBK0JFO0FBTmhCLE9BQXJDLENBQXJCO0FBUUgsS0FaTSxFQVlMO0FBWkssS0FhTnJKLE1BYk0sQ0FhQ3VNLE9BYkQsQ0FBUDtBQWNIOztBQUNEQyxFQUFBQSxtQkFBbUIsQ0FBQzNDLEtBQUQsRUFBUTtBQUN2QixVQUFNO0FBQUVuQixNQUFBQSxXQUFGO0FBQWdCQyxNQUFBQSw2QkFBaEI7QUFBZ0RZLE1BQUFBO0FBQWhELFFBQWtFLEtBQUtkLE9BQTdFO0FBQ0EsVUFBTWdFLFlBQVksR0FBRzVDLEtBQUssQ0FBQ3RCLFFBQU4sQ0FBZXZJLE1BQWYsQ0FBdUJ3SixJQUFELElBQVE7QUFDL0MsYUFBT0EsSUFBSSxDQUFDVCxRQUFMLENBQWMsS0FBZCxDQUFQO0FBQ0gsS0FGb0IsQ0FBckI7QUFHQSxXQUFPLENBQ0gsR0FBRyxDQUFDUSxZQUFZLENBQUMxQyxpQkFBYixJQUFrQyxFQUFuQyxFQUF1QzlHLEdBQXZDLENBQTRDeUosSUFBRCxJQUFRLGFBQWMzRyxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDakdxRixNQUFBQSxHQUFHLEVBQUVvRyxJQUFJLENBQUN4RSxHQUR1RjtBQUVqR2lFLE1BQUFBLEtBQUssRUFBRSxLQUFLek4sS0FBTCxDQUFXeU4sS0FGK0U7QUFHakdnRCxNQUFBQSxHQUFHLEVBQUUsU0FINEY7QUFJakd4SyxNQUFBQSxJQUFJLEVBQUUrSCxJQUFJLENBQUN4RSxHQUpzRjtBQUtqR2tILE1BQUFBLEVBQUUsRUFBRSxRQUw2RjtBQU1qR2hELE1BQUFBLFdBQVcsRUFBRSxLQUFLMU4sS0FBTCxDQUFXME4sV0FBWCxJQUEwQkMsU0FBK0JFO0FBTjJCLEtBQXJDLENBQWpFLENBREEsRUFVSCxHQUFHb0QsWUFBWSxDQUFDMU0sR0FBYixDQUFrQnlKLElBQUQsSUFBUSxhQUFjM0csTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQ3ZFcUYsTUFBQUEsR0FBRyxFQUFFb0csSUFEa0U7QUFFdkVQLE1BQUFBLEtBQUssRUFBRSxLQUFLek4sS0FBTCxDQUFXeU4sS0FGcUQ7QUFHdkVnRCxNQUFBQSxHQUFHLEVBQUUsU0FIa0U7QUFJdkV4SyxNQUFBQSxJQUFJLEVBQUcsR0FBRWlILFdBQVksVUFBU3VCLFNBQVMsQ0FBQ1QsSUFBRCxDQUFPLEdBQUViLDZCQUE4QixFQUpQO0FBS3ZFdUQsTUFBQUEsRUFBRSxFQUFFLFFBTG1FO0FBTXZFaEQsTUFBQUEsV0FBVyxFQUFFLEtBQUsxTixLQUFMLENBQVcwTixXQUFYLElBQTBCQyxTQUErQkU7QUFOQyxLQUFyQyxDQUF2QyxDQVZBLENBQVA7QUFvQkg7O0FBQ0RPLEVBQUFBLGdCQUFnQixDQUFDQyxLQUFELEVBQVE7QUFDcEIsV0FBT0QsZ0JBQWdCLENBQUMsS0FBS25CLE9BQU4sRUFBZSxLQUFLak4sS0FBcEIsRUFBMkJxTyxLQUEzQixDQUF2QjtBQUNIOztBQUNEUCxFQUFBQSxpQkFBaUIsR0FBRztBQUNoQixXQUFPQSxpQkFBaUIsQ0FBQyxLQUFLYixPQUFOLEVBQWUsS0FBS2pOLEtBQXBCLENBQXhCO0FBQ0g7O0FBQ0QwTyxFQUFBQSxVQUFVLENBQUNMLEtBQUQsRUFBUTtBQUNkLFdBQU9LLFVBQVUsQ0FBQyxLQUFLekIsT0FBTixFQUFlLEtBQUtqTixLQUFwQixFQUEyQnFPLEtBQTNCLENBQWpCO0FBQ0g7O0FBQ0RyQixFQUFBQSxrQkFBa0IsR0FBRztBQUNqQixXQUFPQSxrQkFBa0IsQ0FBQyxLQUFLQyxPQUFOLEVBQWUsS0FBS2pOLEtBQXBCLENBQXpCO0FBQ0g7O0FBQ0RrUixFQUFBQSwrQkFBK0IsQ0FBQ3BPLFFBQUQsRUFBVztBQUN0QyxVQUFNO0FBQUVpTCxNQUFBQTtBQUFGLFFBQW9CLEtBQUtkLE9BQS9CO0FBQ0EsVUFBTXJDLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsVUFBTXVHLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBOUosSUFBQUEsTUFBTSxDQUFDMUYsT0FBUCxDQUFleVAsUUFBZixDQUF3QnBNLE9BQXhCLENBQWdDbEMsUUFBaEMsRUFBMkN1TyxLQUFELElBQVM7QUFDL0MsVUFBSUEsS0FBSyxDQUFDalAsSUFBTixLQUFlZ0ssT0FBTyxDQUFDekssT0FBM0IsRUFBb0M7QUFDaEMsWUFBSTBQLEtBQUssQ0FBQ3JSLEtBQU4sQ0FBWTBKLFFBQVosS0FBeUIsbUJBQTdCLEVBQWtEO0FBQzlDcUUsVUFBQUEsWUFBWSxDQUFDMUMsaUJBQWIsR0FBaUMsQ0FBQzBDLFlBQVksQ0FBQzFDLGlCQUFiLElBQWtDLEVBQW5DLEVBQXVDOUMsTUFBdkMsQ0FBOEMsbUJBRXBFOEksS0FBSyxDQUFDclIsS0FGOEQsRUFBOUMsQ0FBakM7QUFLQTtBQUNILFNBUEQsTUFPTyxJQUFJLENBQ1AsWUFETyxFQUVQLGtCQUZPLEVBR1R1SyxRQUhTLENBR0E4RyxLQUFLLENBQUNyUixLQUFOLENBQVkwSixRQUhaLENBQUosRUFHMkI7QUFDOUJrQixVQUFBQSxpQkFBaUIsQ0FBQ3ZHLElBQWxCLENBQXVCZ04sS0FBSyxDQUFDclIsS0FBN0I7QUFDQTtBQUNIO0FBQ0o7O0FBQ0RtUixNQUFBQSxnQkFBZ0IsQ0FBQzlNLElBQWpCLENBQXNCZ04sS0FBdEI7QUFDSCxLQWxCRDs7QUFtQkEsU0FBS3BFLE9BQUwsQ0FBYXFFLGFBQWIsQ0FBMkJ2RCxZQUEzQixHQUEwQ25ELGlCQUExQztBQUNBLFdBQU91RyxnQkFBUDtBQUNIOztBQUNETixFQUFBQSxtQkFBbUIsQ0FBQ1UsSUFBRCxFQUFPO0FBQ3RCLFdBQU9sSyxNQUFNLENBQUMxRixPQUFQLENBQWV5UCxRQUFmLENBQXdCN00sR0FBeEIsQ0FBNEJnTixJQUE1QixFQUFtQ0MsQ0FBRCxJQUFLO0FBQzFDLFVBQUlBLENBQUMsQ0FBQ3BQLElBQUYsS0FBVyxNQUFYLElBQXFCb1AsQ0FBQyxDQUFDeFIsS0FBRixDQUFRLE1BQVIsQ0FBckIsSUFBd0NnTSxVQUFVLENBQUN5Rix3QkFBWCxDQUFvQ0MsSUFBcEMsQ0FBeUMsQ0FBQztBQUFFQyxRQUFBQTtBQUFGLE9BQUQsS0FBWUgsQ0FBQyxDQUFDeFIsS0FBRixDQUFRLE1BQVIsRUFBZ0I0UixVQUFoQixDQUEyQkQsR0FBM0IsQ0FBckQsQ0FBNUMsRUFDRztBQUNDLGNBQU1FLFFBQVEscUJBQ1BMLENBQUMsQ0FBQ3hSLEtBQUYsSUFBVyxFQURKLENBQWQ7O0FBSUE2UixRQUFBQSxRQUFRLENBQUMsV0FBRCxDQUFSLEdBQXdCQSxRQUFRLENBQUMsTUFBRCxDQUFoQztBQUNBQSxRQUFBQSxRQUFRLENBQUMsTUFBRCxDQUFSLEdBQW1CblAsU0FBbkI7QUFDQSxlQUFPLGFBQWMyRSxNQUFNLENBQUMxRixPQUFQLENBQWVtUSxZQUFmLENBQTRCTixDQUE1QixFQUErQkssUUFBL0IsQ0FBckI7QUFDSCxPQVRELE1BU08sSUFBSUwsQ0FBQyxDQUFDeFIsS0FBRixJQUFXd1IsQ0FBQyxDQUFDeFIsS0FBRixDQUFRLFVBQVIsQ0FBZixFQUFvQztBQUN2Q3dSLFFBQUFBLENBQUMsQ0FBQ3hSLEtBQUYsQ0FBUSxVQUFSLElBQXNCLEtBQUs2USxtQkFBTCxDQUF5QlcsQ0FBQyxDQUFDeFIsS0FBRixDQUFRLFVBQVIsQ0FBekIsQ0FBdEI7QUFDSDs7QUFDRCxhQUFPd1IsQ0FBUDtBQUNILEtBZE0sQ0FBUDtBQWVIOztBQUNEakMsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFelAsTUFBQUEsTUFBRjtBQUFXaVMsTUFBQUEsT0FBWDtBQUFxQnBGLE1BQUFBLFNBQXJCO0FBQWlDcUYsTUFBQUEsU0FBakM7QUFBNkNDLE1BQUFBLGFBQTdDO0FBQTZEWCxNQUFBQSxhQUE3RDtBQUE2RVksTUFBQUEsZUFBN0U7QUFBK0ZDLE1BQUFBLFFBQS9GO0FBQTBHQyxNQUFBQSxrQkFBMUc7QUFBK0hDLE1BQUFBLGtCQUEvSDtBQUFvSmpGLE1BQUFBO0FBQXBKLFFBQW1MLEtBQUtILE9BQTlMO0FBQ0EsVUFBTXFGLGdCQUFnQixHQUFHRixrQkFBa0IsS0FBSyxLQUFoRDtBQUNBLFVBQU1HLGdCQUFnQixHQUFHRixrQkFBa0IsS0FBSyxLQUF2QixJQUFnQyxDQUFDakYsdUJBQTFEO0FBQ0EsU0FBS0gsT0FBTCxDQUFheUMscUJBQWIsQ0FBbUNGLElBQW5DLEdBQTBDLElBQTFDO0FBQ0EsUUFBSTtBQUFFOUosTUFBQUE7QUFBRixRQUFZLEtBQUt1SCxPQUFyQjtBQUNBLFFBQUl1RixXQUFXLEdBQUcsRUFBbEI7QUFDQSxRQUFJQyxpQkFBaUIsR0FBRyxFQUF4Qjs7QUFDQSxRQUFJL00sSUFBSixFQUFVO0FBQ05BLE1BQUFBLElBQUksQ0FBQ1YsT0FBTCxDQUFjd00sQ0FBRCxJQUFLO0FBQ2QsWUFBSUEsQ0FBQyxJQUFJQSxDQUFDLENBQUNwUCxJQUFGLEtBQVcsTUFBaEIsSUFBMEJvUCxDQUFDLENBQUN4UixLQUFGLENBQVEsS0FBUixNQUFtQixTQUE3QyxJQUEwRHdSLENBQUMsQ0FBQ3hSLEtBQUYsQ0FBUSxJQUFSLE1BQWtCLE9BQWhGLEVBQXlGO0FBQ3JGd1MsVUFBQUEsV0FBVyxDQUFDbk8sSUFBWixDQUFpQm1OLENBQWpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLFVBQUFBLENBQUMsSUFBSWlCLGlCQUFpQixDQUFDcE8sSUFBbEIsQ0FBdUJtTixDQUF2QixDQUFMO0FBQ0g7QUFDSixPQU5EO0FBT0E5TCxNQUFBQSxJQUFJLEdBQUc4TSxXQUFXLENBQUNqSyxNQUFaLENBQW1Ca0ssaUJBQW5CLENBQVA7QUFDSDs7QUFDRCxRQUFJM1AsUUFBUSxHQUFHdUUsTUFBTSxDQUFDMUYsT0FBUCxDQUFleVAsUUFBZixDQUF3QnNCLE9BQXhCLENBQWdDLEtBQUsxUyxLQUFMLENBQVc4QyxRQUEzQyxFQUFxRDBCLE1BQXJELENBQTREdU0sT0FBNUQsQ0FBZixDQWxCSyxDQW1CTDs7O0FBQ0EsY0FBMkM7QUFDdkNqTyxNQUFBQSxRQUFRLEdBQUd1RSxNQUFNLENBQUMxRixPQUFQLENBQWV5UCxRQUFmLENBQXdCN00sR0FBeEIsQ0FBNEJ6QixRQUE1QixFQUF1Q3VPLEtBQUQsSUFBUztBQUN0RCxZQUFJMUMsR0FBSjtBQUNBLGNBQU1nRSxhQUFhLEdBQUd0QixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4QyxDQUFDMUMsR0FBRyxHQUFHMEMsS0FBSyxDQUFDclIsS0FBYixNQUF3QixJQUF4QixJQUFnQzJPLEdBQUcsS0FBSyxLQUFLLENBQTdDLEdBQWlELEtBQUssQ0FBdEQsR0FBMERBLEdBQUcsQ0FBQyxtQkFBRCxDQUFqSTs7QUFDQSxZQUFJLENBQUNnRSxhQUFMLEVBQW9CO0FBQ2hCLGNBQUlDLElBQUo7O0FBQ0EsY0FBSSxDQUFDdkIsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOENBLEtBQUssQ0FBQ2pQLElBQXJELE1BQStELE9BQW5FLEVBQTRFO0FBQ3hFdUIsWUFBQUEsT0FBTyxDQUFDa1AsSUFBUixDQUFhLGtIQUFiO0FBQ0gsV0FGRCxNQUVPLElBQUksQ0FBQ3hCLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNqUCxJQUFyRCxNQUErRCxNQUEvRCxJQUF5RSxDQUFDaVAsS0FBSyxLQUFLLElBQVYsSUFBa0JBLEtBQUssS0FBSyxLQUFLLENBQWpDLEdBQXFDLEtBQUssQ0FBMUMsR0FBOEMsQ0FBQ3VCLElBQUksR0FBR3ZCLEtBQUssQ0FBQ3JSLEtBQWQsTUFBeUIsSUFBekIsSUFBaUM0UyxJQUFJLEtBQUssS0FBSyxDQUEvQyxHQUFtRCxLQUFLLENBQXhELEdBQTREQSxJQUFJLENBQUNFLElBQWhILE1BQTBILFVBQXZNLEVBQW1OO0FBQ3ROblAsWUFBQUEsT0FBTyxDQUFDa1AsSUFBUixDQUFhLHFJQUFiO0FBQ0g7QUFDSjs7QUFDRCxlQUFPeEIsS0FBUDtBQUNILE9BWlUsQ0FBWDtBQWFBLFVBQUksS0FBS3JSLEtBQUwsQ0FBVzBOLFdBQWYsRUFBNEIvSixPQUFPLENBQUNrUCxJQUFSLENBQWEsb0hBQWI7QUFDL0I7O0FBQ0QsUUFBSSxLQUFKLEVBQStGLEVBRTlGOztBQUNEL1AsSUFBQUEsUUFBUSxHQUFHLEtBQUtvTywrQkFBTCxDQUFxQ3BPLFFBQXJDLENBQVg7QUFDQSxRQUFJaVEsYUFBYSxHQUFHLEtBQXBCO0FBQ0EsUUFBSUMsZUFBZSxHQUFHLEtBQXRCLENBekNLLENBMENMOztBQUNBdE4sSUFBQUEsSUFBSSxHQUFHMkIsTUFBTSxDQUFDMUYsT0FBUCxDQUFleVAsUUFBZixDQUF3QjdNLEdBQXhCLENBQTRCbUIsSUFBSSxJQUFJLEVBQXBDLEVBQXlDMkwsS0FBRCxJQUFTO0FBQ3BELFVBQUksQ0FBQ0EsS0FBTCxFQUFZLE9BQU9BLEtBQVA7QUFDWixZQUFNO0FBQUVqUCxRQUFBQSxJQUFGO0FBQVNwQyxRQUFBQTtBQUFULFVBQW9CcVIsS0FBMUI7O0FBQ0EsVUFBSTFFLFNBQUosRUFBZTtBQUNYLFlBQUlzRyxPQUFPLEdBQUcsRUFBZDs7QUFDQSxZQUFJN1EsSUFBSSxLQUFLLE1BQVQsSUFBbUJwQyxLQUFLLENBQUM4UyxJQUFOLEtBQWUsVUFBdEMsRUFBa0Q7QUFDOUNHLFVBQUFBLE9BQU8sR0FBRyxpQkFBVjtBQUNILFNBRkQsTUFFTyxJQUFJN1EsSUFBSSxLQUFLLE1BQVQsSUFBbUJwQyxLQUFLLENBQUN5USxHQUFOLEtBQWMsV0FBckMsRUFBa0Q7QUFDckR1QyxVQUFBQSxlQUFlLEdBQUcsSUFBbEI7QUFDSCxTQUZNLE1BRUEsSUFBSTVRLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBSXBDLEtBQUssQ0FBQ3dKLEdBQU4sSUFBYXhKLEtBQUssQ0FBQ3dKLEdBQU4sQ0FBVVYsT0FBVixDQUFrQixZQUFsQixJQUFrQyxDQUFDLENBQWhELElBQXFEOUksS0FBSyxDQUFDK0MsdUJBQU4sS0FBa0MsQ0FBQy9DLEtBQUssQ0FBQ29DLElBQVAsSUFBZXBDLEtBQUssQ0FBQ29DLElBQU4sS0FBZSxpQkFBaEUsQ0FBekQsRUFBNkk7QUFDekk2USxZQUFBQSxPQUFPLEdBQUcsU0FBVjtBQUNBMVIsWUFBQUEsTUFBTSxDQUFDOEcsSUFBUCxDQUFZckksS0FBWixFQUFtQmdGLE9BQW5CLENBQTRCa08sSUFBRCxJQUFRO0FBQy9CRCxjQUFBQSxPQUFPLElBQUssSUFBR0MsSUFBSyxLQUFJbFQsS0FBSyxDQUFDa1QsSUFBRCxDQUFPLEdBQXBDO0FBQ0gsYUFGRDtBQUdBRCxZQUFBQSxPQUFPLElBQUksSUFBWDtBQUNIO0FBQ0o7O0FBQ0QsWUFBSUEsT0FBSixFQUFhO0FBQ1R0UCxVQUFBQSxPQUFPLENBQUNrUCxJQUFSLENBQWMsOEJBQTZCeEIsS0FBSyxDQUFDalAsSUFBSywyQkFBMEI2USxPQUFRLE9BQU0zQixhQUFhLENBQUM2QixJQUFLLHdEQUFqSDtBQUNBLGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BdkJELE1BdUJPO0FBQ0g7QUFDQSxZQUFJL1EsSUFBSSxLQUFLLE1BQVQsSUFBbUJwQyxLQUFLLENBQUN5USxHQUFOLEtBQWMsU0FBckMsRUFBZ0Q7QUFDNUNzQyxVQUFBQSxhQUFhLEdBQUcsSUFBaEI7QUFDSDtBQUNKOztBQUNELGFBQU8xQixLQUFQO0FBQ0gsS0FqQ00sQ0FBUCxDQTNDSyxDQTZFTDs7QUFDQSxVQUFNK0IsU0FBUyxHQUFHalEsS0FBSyxDQUFDQyxPQUFOLENBQWN0RCxNQUFkLElBQXdCQSxNQUF4QixHQUFpQyxFQUFuRDs7QUFDQSxRQUFJNk0sU0FBUyxJQUFJN00sTUFBYixJQUF1QjtBQUMzQkEsSUFBQUEsTUFBTSxDQUFDRSxLQURILElBQ1k7QUFDaEJtRCxJQUFBQSxLQUFLLENBQUNDLE9BQU4sQ0FBY3RELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhOEMsUUFBM0IsQ0FGQSxFQUVzQztBQUNsQyxZQUFNdVEsU0FBUyxHQUFJaFIsRUFBRCxJQUFNO0FBQ3BCLFlBQUlpUixJQUFKLEVBQVVDLElBQVY7QUFDQSxlQUFPbFIsRUFBRSxLQUFLLElBQVAsSUFBZUEsRUFBRSxLQUFLLEtBQUssQ0FBM0IsR0FBK0IsS0FBSyxDQUFwQyxHQUF3QyxDQUFDaVIsSUFBSSxHQUFHalIsRUFBRSxDQUFDckMsS0FBWCxNQUFzQixJQUF0QixJQUE4QnNULElBQUksS0FBSyxLQUFLLENBQTVDLEdBQWdELEtBQUssQ0FBckQsR0FBeUQsQ0FBQ0MsSUFBSSxHQUFHRCxJQUFJLENBQUN2USx1QkFBYixNQUEwQyxJQUExQyxJQUFrRHdRLElBQUksS0FBSyxLQUFLLENBQWhFLEdBQW9FLEtBQUssQ0FBekUsR0FBNkVBLElBQUksQ0FBQ3RRLE1BQTFMO0FBQ0gsT0FIRCxDQURrQyxDQUtsQzs7O0FBQ0FuRCxNQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYThDLFFBQWIsQ0FBc0JrQyxPQUF0QixDQUErQnFNLEtBQUQsSUFBUztBQUNuQyxZQUFJbE8sS0FBSyxDQUFDQyxPQUFOLENBQWNpTyxLQUFkLENBQUosRUFBMEI7QUFDdEJBLFVBQUFBLEtBQUssQ0FBQ3JNLE9BQU4sQ0FBZTNDLEVBQUQsSUFBTWdSLFNBQVMsQ0FBQ2hSLEVBQUQsQ0FBVCxJQUFpQitRLFNBQVMsQ0FBQy9PLElBQVYsQ0FBZWhDLEVBQWYsQ0FBckM7QUFFSCxTQUhELE1BR08sSUFBSWdSLFNBQVMsQ0FBQ2hDLEtBQUQsQ0FBYixFQUFzQjtBQUN6QitCLFVBQUFBLFNBQVMsQ0FBQy9PLElBQVYsQ0FBZWdOLEtBQWY7QUFDSDtBQUNKLE9BUEQ7QUFRSDs7QUFDRCxVQUFNaEQsS0FBSyxHQUFHN0IsZ0JBQWdCLENBQUMsS0FBS1MsT0FBTCxDQUFhUixhQUFkLEVBQTZCLEtBQUtRLE9BQUwsQ0FBYXFFLGFBQWIsQ0FBMkI2QixJQUF4RCxFQUE4RHhHLFNBQTlELENBQTlCOztBQUNBLFFBQUk2RyxNQUFKLEVBQVlDLE9BQVo7O0FBQ0EsV0FBTyxhQUFjcE0sTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDaEIsTUFBTSxDQUFDNE0sTUFBUCxDQUFjLEVBQWQsRUFDdkQsS0FBS25PLEtBRGtELENBQXJDLEVBQ0wsS0FBS2lOLE9BQUwsQ0FBYXNCLGFBQWIsSUFBOEIsYUFBY2xILE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QjhFLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZStSLFFBQTVDLEVBQXNELElBQXRELEVBQTRELGFBQWNyTSxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsT0FBN0IsRUFBc0M7QUFDeEssNkJBQXVCLElBRGlKO0FBRXhLLHlCQUFtQm9LLFNBQVMsR0FBRyxNQUFILEdBQVlqSyxTQUZnSTtBQUd4S0ssTUFBQUEsdUJBQXVCLEVBQUU7QUFDckJFLFFBQUFBLE1BQU0sRUFBRztBQURZO0FBSCtJLEtBQXRDLENBQTFFLEVBTXhELGFBQWNvRSxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsVUFBN0IsRUFBeUM7QUFDdkQsNkJBQXVCLElBRGdDO0FBRXZELHlCQUFtQm9LLFNBQVMsR0FBRyxNQUFILEdBQVlqSztBQUZlLEtBQXpDLEVBR2YsYUFBYzJFLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixPQUE3QixFQUFzQztBQUNuRFEsTUFBQUEsdUJBQXVCLEVBQUU7QUFDckJFLFFBQUFBLE1BQU0sRUFBRztBQURZO0FBRDBCLEtBQXRDLENBSEMsQ0FOMEMsQ0FEdkMsRUFjZkgsUUFkZSxFQWNMNkssTUFBQSxJQUFxQyxhQUFjdEcsQ0FkOUMsRUFnQmpCM0IsSUFoQmlCLEVBZ0JYLGFBQWMyQixNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDekR1USxNQUFBQSxJQUFJLEVBQUUsaUJBRG1EO0FBRXpEL08sTUFBQUEsT0FBTyxFQUFFc0QsTUFBTSxDQUFDMUYsT0FBUCxDQUFleVAsUUFBZixDQUF3QnVDLEtBQXhCLENBQThCak8sSUFBSSxJQUFJLEVBQXRDLEVBQTBDTCxRQUExQztBQUZnRCxLQUFyQyxDQWhCSCxFQW1CakJzSCxTQUFTLElBQUksYUFBY3RGLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QjhFLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZStSLFFBQTVDLEVBQXNELElBQXRELEVBQTRELGFBQWNyTSxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDMUl1USxNQUFBQSxJQUFJLEVBQUUsVUFEb0k7QUFFMUkvTyxNQUFBQSxPQUFPLEVBQUU7QUFGaUksS0FBckMsQ0FBMUUsRUFHM0IsQ0FBQ2lQLGVBQUQsSUFBb0IsYUFBYzNMLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixNQUE3QixFQUFxQztBQUN2RWtPLE1BQUFBLEdBQUcsRUFBRSxXQURrRTtBQUV2RXhLLE1BQUFBLElBQUksRUFBRWdNLGFBQWEsR0FBRyxDQUFDLEdBQUcvRixPQUFKLEVBQWEwSCxZQUFiLENBQTBCMUIsZUFBMUI7QUFGaUQsS0FBckMsQ0FIUCxFQU0zQixhQUFjN0ssTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQ25Ea08sTUFBQUEsR0FBRyxFQUFFLFNBRDhDO0FBRW5EQyxNQUFBQSxFQUFFLEVBQUUsUUFGK0M7QUFHbkR6SyxNQUFBQSxJQUFJLEVBQUU7QUFINkMsS0FBckMsQ0FOYSxFQVUzQm5HLE1BQU0sSUFBSSxhQUFjdUgsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE9BQTdCLEVBQXNDO0FBQzlELG9CQUFjLEVBRGdEO0FBRTlEUSxNQUFBQSx1QkFBdUIsRUFBRTtBQUNyQkUsUUFBQUEsTUFBTSxFQUFFbVEsU0FBUyxDQUFDN08sR0FBVixDQUFlc1AsS0FBRCxJQUFTQSxLQUFLLENBQUM3VCxLQUFOLENBQVkrQyx1QkFBWixDQUFvQ0UsTUFBM0QsRUFDTkksSUFETSxDQUNELEVBREMsRUFDR3lRLE9BREgsQ0FDVyxnQ0FEWCxFQUM2QyxFQUQ3QyxFQUNpREEsT0FEakQsQ0FDeUQsMEJBRHpELEVBQ3FGLEVBRHJGO0FBRGE7QUFGcUMsS0FBdEMsQ0FWRyxFQWdCM0IsYUFBY3pNLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixPQUE3QixFQUFzQztBQUNwRCx5QkFBbUIsRUFEaUM7QUFFcERRLE1BQUFBLHVCQUF1QixFQUFFO0FBQ3JCRSxRQUFBQSxNQUFNLEVBQUc7QUFEWTtBQUYyQixLQUF0QyxDQWhCYSxFQXFCM0IsYUFBY29FLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixVQUE3QixFQUF5QyxJQUF6QyxFQUErQyxhQUFjOEUsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE9BQTdCLEVBQXNDO0FBQ2pILHlCQUFtQixFQUQ4RjtBQUVqSFEsTUFBQUEsdUJBQXVCLEVBQUU7QUFDckJFLFFBQUFBLE1BQU0sRUFBRztBQURZO0FBRndGLEtBQXRDLENBQTdELENBckJhLEVBMEIxQixhQUFjb0UsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFFBQTdCLEVBQXVDO0FBQ3REaU0sTUFBQUEsS0FBSyxFQUFFLElBRCtDO0FBRXREaEYsTUFBQUEsR0FBRyxFQUFFO0FBRmlELEtBQXZDLENBMUJZLENBbkJWLEVBZ0RoQixDQUFDbUQsU0FBRCxJQUFjLGFBQWN0RixNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkI4RSxNQUFNLENBQUMxRixPQUFQLENBQWUrUixRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUFDWCxhQUFELElBQWtCZixTQUFsQixJQUErQixhQUFjM0ssTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLE1BQTdCLEVBQXFDO0FBQzNLa08sTUFBQUEsR0FBRyxFQUFFLFNBRHNLO0FBRTNLeEssTUFBQUEsSUFBSSxFQUFFZ00sYUFBYSxHQUFHOEIsVUFBVSxDQUFDaEMsT0FBRCxFQUFVRyxlQUFWO0FBRjJJLEtBQXJDLENBQXpHLEVBRzdCLFNBQW9DLEtBQUtuQyxXQUFMLENBQWlCMUIsS0FBakIsQ0FIUCxFQUdnQyxTQUFvQyxhQUFjaEgsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFVBQTdCLEVBQXlDO0FBQ3hKLG9CQUFjLENBQUNpUixNQUFNLEdBQUcsS0FBS3hULEtBQUwsQ0FBV3lOLEtBQXJCLE1BQWdDLElBQWhDLElBQXdDK0YsTUFBTSxLQUFLLEtBQUssQ0FBeEQsR0FBNERBLE1BQTVELEdBQXFFO0FBRHFFLEtBQXpDLENBSGxGLEVBSzdCN0YsTUFBQSxJQUFzQyxhQUFjdEcsQ0FMdkIsRUFPN0IsQ0FBQ2lMLGdCQUFELElBQXFCLENBQUNDLGdCQUF0QixJQUEwQyxLQUFLekIsdUJBQUwsRUFQYixFQU82QyxDQUFDd0IsZ0JBQUQsSUFBcUIsQ0FBQ0MsZ0JBQXRCLElBQTBDLEtBQUt2QixtQkFBTCxDQUF5QjNDLEtBQXpCLENBUHZGLEVBT3dILENBQUNqQix1QkFBRCxJQUE0QixDQUFDa0YsZ0JBQTdCLElBQWlELEtBQUt0RixrQkFBTCxFQVB6SyxFQU9vTSxDQUFDSSx1QkFBRCxJQUE0QixDQUFDa0YsZ0JBQTdCLElBQWlELEtBQUt4RSxpQkFBTCxFQVByUCxFQU8rUSxDQUFDVix1QkFBRCxJQUE0QixDQUFDa0YsZ0JBQTdCLElBQWlELEtBQUtsRSxnQkFBTCxDQUFzQkMsS0FBdEIsQ0FQaFUsRUFPOFYsQ0FBQ2pCLHVCQUFELElBQTRCLENBQUNrRixnQkFBN0IsSUFBaUQsS0FBSzVELFVBQUwsQ0FBZ0JMLEtBQWhCLENBUC9ZLEVBT3VhVixNQUFBLElBQW1DLENBUDFjLEVBT21lQSxNQUFBLElBQW1DLGFBQWN0RyxDQVBwaEIsRUFTN0IsS0FBSzRGLE9BQUwsQ0FBYXNCLGFBQWIsSUFBOEI7QUFDbEM7QUFDQTs7QUFDQTtBQUFjbEgsSUFBQUEsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFVBQTdCLEVBQXlDO0FBQ25EMkUsTUFBQUEsRUFBRSxFQUFFO0FBRCtDLEtBQXpDLENBWm1CLEVBYzdCcEgsTUFBTSxJQUFJLElBZG1CLENBaERaLEVBOERBLGFBQWN1SCxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkI4RSxNQUFNLENBQUMxRixPQUFQLENBQWUrUixRQUE1QyxFQUFzRCxFQUF0RCxFQUNoQyxJQUFHdkIsUUFBUSxJQUFJLEVBQWYsQ0FEZ0MsQ0E5RGQsQ0FBckI7QUFnRUg7O0FBblQrQjs7QUFxVHBDMVEsWUFBQSxHQUFlK04sSUFBZjtBQUNBQSxJQUFJLENBQUN5RSxXQUFMLEdBQW1CMUksTUFBTSxDQUFDcUUsV0FBMUI7O0FBQ0EsU0FBU2hFLElBQVQsR0FBZ0I7QUFDWixRQUFNO0FBQUVlLElBQUFBLFNBQUY7QUFBYytDLElBQUFBO0FBQWQsTUFBeUMsQ0FBQyxHQUFHckksTUFBSixFQUFZNkQsVUFBWixDQUF1QkssTUFBTSxDQUFDcUUsV0FBOUIsQ0FBL0M7QUFDQUYsRUFBQUEscUJBQXFCLENBQUM5RCxJQUF0QixHQUE2QixJQUE3QjtBQUNBLE1BQUllLFNBQUosRUFBZSxPQUFPLGFBQWN0RixNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkI4RSxNQUFNLENBQUMxRixPQUFQLENBQWUrUixRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RDFILFVBQVUsQ0FBQ2tJLGtCQUF2RSxDQUFyQjtBQUNmLFNBQU8sYUFBYzdNLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QixLQUE3QixFQUFvQztBQUNyRDJFLElBQUFBLEVBQUUsRUFBRTtBQURpRCxHQUFwQyxFQUVsQjhFLFVBQVUsQ0FBQ2tJLGtCQUZPLENBQXJCO0FBR0g7O0FBQ0QsTUFBTXpFLFVBQU4sU0FBeUJwSSxNQUFNLENBQUMySCxTQUFoQyxDQUEwQztBQUN0Q1osRUFBQUEsZ0JBQWdCLENBQUNDLEtBQUQsRUFBUTtBQUNwQixXQUFPRCxnQkFBZ0IsQ0FBQyxLQUFLbkIsT0FBTixFQUFlLEtBQUtqTixLQUFwQixFQUEyQnFPLEtBQTNCLENBQXZCO0FBQ0g7O0FBQ0RQLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2hCLFdBQU9BLGlCQUFpQixDQUFDLEtBQUtiLE9BQU4sRUFBZSxLQUFLak4sS0FBcEIsQ0FBeEI7QUFDSDs7QUFDRDBPLEVBQUFBLFVBQVUsQ0FBQ0wsS0FBRCxFQUFRO0FBQ2QsV0FBT0ssVUFBVSxDQUFDLEtBQUt6QixPQUFOLEVBQWUsS0FBS2pOLEtBQXBCLEVBQTJCcU8sS0FBM0IsQ0FBakI7QUFDSDs7QUFDRHJCLEVBQUFBLGtCQUFrQixHQUFHO0FBQ2pCLFdBQU9BLGtCQUFrQixDQUFDLEtBQUtDLE9BQU4sRUFBZSxLQUFLak4sS0FBcEIsQ0FBekI7QUFDSDs7QUFDMkIsU0FBckJtVSxxQkFBcUIsQ0FBQ2xILE9BQUQsRUFBVTtBQUNsQyxVQUFNO0FBQUVxRSxNQUFBQTtBQUFGLFFBQXFCckUsT0FBM0I7O0FBQ0EsUUFBSTtBQUNBLFlBQU1tSCxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEQsYUFBZixDQUFiO0FBQ0EsYUFBTyxDQUFDLEdBQUduRixXQUFKLEVBQWlCb0ksb0JBQWpCLENBQXNDSCxJQUF0QyxDQUFQO0FBQ0gsS0FIRCxDQUdFLE9BQU9JLEdBQVAsRUFBWTtBQUNWLFVBQUlBLEdBQUcsQ0FBQ0MsT0FBSixDQUFZM0wsT0FBWixDQUFvQixvQkFBcEIsQ0FBSixFQUErQztBQUMzQyxjQUFNLElBQUk0TCxLQUFKLENBQVcsMkRBQTBEcEQsYUFBYSxDQUFDNkIsSUFBSyx3REFBeEYsQ0FBTjtBQUNIOztBQUNELFlBQU1xQixHQUFOO0FBQ0g7QUFDSjs7QUFDRGpGLEVBQUFBLE1BQU0sR0FBRztBQUNMLFVBQU07QUFBRXJDLE1BQUFBLFdBQUY7QUFBZ0JQLE1BQUFBLFNBQWhCO0FBQTRCRixNQUFBQSxhQUE1QjtBQUE0QzJGLE1BQUFBLGtCQUE1QztBQUFpRTFDLE1BQUFBLHFCQUFqRTtBQUF5RnZDLE1BQUFBLDZCQUF6RjtBQUF5SEMsTUFBQUE7QUFBekgsUUFBd0osS0FBS0gsT0FBbks7QUFDQSxVQUFNcUYsZ0JBQWdCLEdBQUdGLGtCQUFrQixLQUFLLEtBQWhEO0FBQ0ExQyxJQUFBQSxxQkFBcUIsQ0FBQ0QsVUFBdEIsR0FBbUMsSUFBbkM7O0FBQ0EsUUFBSTlDLFNBQUosRUFBZTtBQUNYLGlCQUEyQyxFQUUxQzs7QUFDRCxZQUFNZ0ksV0FBVyxHQUFHLENBQ2hCLEdBQUdsSSxhQUFhLENBQUNtSSxRQURELEVBRWhCLEdBQUduSSxhQUFhLENBQUNZLGFBRkQsRUFHaEIsR0FBR1osYUFBYSxDQUFDa0ksV0FIRCxDQUFwQjtBQUtBLGFBQU8sYUFBY3ROLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZVksYUFBZixDQUE2QjhFLE1BQU0sQ0FBQzFGLE9BQVAsQ0FBZStSLFFBQTVDLEVBQXNELElBQXRELEVBQTREcEIsZ0JBQWdCLEdBQUcsSUFBSCxHQUFVLGFBQWNqTCxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7QUFDNUoyRSxRQUFBQSxFQUFFLEVBQUUsZUFEd0o7QUFFNUo5RSxRQUFBQSxJQUFJLEVBQUUsa0JBRnNKO0FBRzVKcUwsUUFBQUEsS0FBSyxFQUFFLEtBQUt6TixLQUFMLENBQVd5TixLQUgwSTtBQUk1SkMsUUFBQUEsV0FBVyxFQUFFLEtBQUsxTixLQUFMLENBQVcwTixXQUFYLElBQTBCQyxTQUpxSDtBQUs1SjVLLFFBQUFBLHVCQUF1QixFQUFFO0FBQ3JCRSxVQUFBQSxNQUFNLEVBQUV3TSxVQUFVLENBQUMwRSxxQkFBWCxDQUFpQyxLQUFLbEgsT0FBdEM7QUFEYSxTQUxtSTtBQVE1SiwyQkFBbUI7QUFSeUksT0FBdkMsQ0FBcEcsRUFTakIwSCxXQUFXLENBQUNwUSxHQUFaLENBQWlCeUosSUFBRCxJQUFRLGFBQWMzRyxNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkIsUUFBN0IsRUFBdUM7QUFDekVxRixRQUFBQSxHQUFHLEVBQUVvRyxJQURvRTtBQUV6RXhFLFFBQUFBLEdBQUcsRUFBRyxHQUFFMEQsV0FBWSxVQUFTYyxJQUFLLEdBQUViLDZCQUE4QixFQUZPO0FBR3pFTSxRQUFBQSxLQUFLLEVBQUUsS0FBS3pOLEtBQUwsQ0FBV3lOLEtBSHVEO0FBSXpFQyxRQUFBQSxXQUFXLEVBQUUsS0FBSzFOLEtBQUwsQ0FBVzBOLFdBQVgsSUFBMEJDLFNBSmtDO0FBS3pFLDJCQUFtQjtBQUxzRCxPQUF2QyxDQUF0QyxDQVRpQixDQUFyQjtBQWlCSDs7QUFDRCxjQUEyQztBQUN2QyxVQUFJLEtBQUszTixLQUFMLENBQVcwTixXQUFmLEVBQTRCL0osT0FBTyxDQUFDa1AsSUFBUixDQUFhLDBIQUFiO0FBQy9COztBQUNELFVBQU14RSxLQUFLLEdBQUc3QixnQkFBZ0IsQ0FBQyxLQUFLUyxPQUFMLENBQWFSLGFBQWQsRUFBNkIsS0FBS1EsT0FBTCxDQUFhcUUsYUFBYixDQUEyQjZCLElBQXhELEVBQThEeEcsU0FBOUQsQ0FBOUI7QUFDQSxXQUFPLGFBQWN0RixNQUFNLENBQUMxRixPQUFQLENBQWVZLGFBQWYsQ0FBNkI4RSxNQUFNLENBQUMxRixPQUFQLENBQWUrUixRQUE1QyxFQUFzRCxJQUF0RCxFQUE0RCxDQUFDcEIsZ0JBQUQsSUFBcUI3RixhQUFhLENBQUNtSSxRQUFuQyxHQUE4Q25JLGFBQWEsQ0FBQ21JLFFBQWQsQ0FBdUJyUSxHQUF2QixDQUE0QnlKLElBQUQsSUFBUSxhQUFjM0csTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFFBQTdCLEVBQXVDO0FBQy9NcUYsTUFBQUEsR0FBRyxFQUFFb0csSUFEME07QUFFL014RSxNQUFBQSxHQUFHLEVBQUcsR0FBRTBELFdBQVksVUFBU3VCLFNBQVMsQ0FBQ1QsSUFBRCxDQUFPLEdBQUViLDZCQUE4QixFQUZrSTtBQUcvTU0sTUFBQUEsS0FBSyxFQUFFLEtBQUt6TixLQUFMLENBQVd5TixLQUg2TDtBQUkvTUMsTUFBQUEsV0FBVyxFQUFFLEtBQUsxTixLQUFMLENBQVcwTixXQUFYLElBQTBCQyxTQUErQkU7QUFKeUksS0FBdkMsQ0FBakQsQ0FBOUMsR0FNN0UsSUFOaUIsRUFNWHlFLGdCQUFnQixHQUFHLElBQUgsR0FBVSxhQUFjakwsTUFBTSxDQUFDMUYsT0FBUCxDQUFlWSxhQUFmLENBQTZCLFFBQTdCLEVBQXVDO0FBQ3JGMkUsTUFBQUEsRUFBRSxFQUFFLGVBRGlGO0FBRXJGOUUsTUFBQUEsSUFBSSxFQUFFLGtCQUYrRTtBQUdyRnFMLE1BQUFBLEtBQUssRUFBRSxLQUFLek4sS0FBTCxDQUFXeU4sS0FIbUU7QUFJckZDLE1BQUFBLFdBQVcsRUFBRSxLQUFLMU4sS0FBTCxDQUFXME4sV0FBWCxJQUEwQkMsU0FKOEM7QUFLckY1SyxNQUFBQSx1QkFBdUIsRUFBRTtBQUNyQkUsUUFBQUEsTUFBTSxFQUFFd00sVUFBVSxDQUFDMEUscUJBQVgsQ0FBaUMsS0FBS2xILE9BQXRDO0FBRGE7QUFMNEQsS0FBdkMsQ0FON0IsRUFjakJHLHVCQUF1QixJQUFJLENBQUNrRixnQkFBNUIsSUFBZ0QsS0FBS3RGLGtCQUFMLEVBZC9CLEVBYzBESSx1QkFBdUIsSUFBSSxDQUFDa0YsZ0JBQTVCLElBQWdELEtBQUt4RSxpQkFBTCxFQWQxRyxFQWNvSVYsdUJBQXVCLElBQUksQ0FBQ2tGLGdCQUE1QixJQUFnRCxLQUFLbEUsZ0JBQUwsQ0FBc0JDLEtBQXRCLENBZHBMLEVBY2tOakIsdUJBQXVCLElBQUksQ0FBQ2tGLGdCQUE1QixJQUFnRCxLQUFLNUQsVUFBTCxDQUFnQkwsS0FBaEIsQ0FkbFEsQ0FBckI7QUFlSDs7QUEzRXFDOztBQTZFMUM1TSxrQkFBQSxHQUFxQmdPLFVBQXJCO0FBQ0FBLFVBQVUsQ0FBQ3dFLFdBQVgsR0FBeUIxSSxNQUFNLENBQUNxRSxXQUFoQztBQUNBSCxVQUFVLENBQUNvRixpQkFBWCxHQUErQiwwVEFBL0I7O0FBQ0EsU0FBU2QsVUFBVCxDQUFvQmhDLE9BQXBCLEVBQTZCK0MsTUFBN0IsRUFBcUM7QUFDakMsU0FBTy9DLE9BQU8sSUFBSyxHQUFFK0MsTUFBTyxHQUFFQSxNQUFNLENBQUN2SyxRQUFQLENBQWdCLEdBQWhCLElBQXVCLEdBQXZCLEdBQTZCLEdBQUksT0FBL0Q7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqa0JEO0FBQ0E7QUFDQTs7QUFFZSxNQUFNMEssUUFBTixTQUF1QkQsc0RBQXZCLENBQW9DO0FBQy9DekYsRUFBQUEsTUFBTSxHQUFJO0FBQ04sd0JBQ0ksOERBQUMsK0NBQUQ7QUFBTSxVQUFJLEVBQUMsSUFBWDtBQUFBLDhCQUNJLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVBO0FBQUEsZ0NBQ0ksOERBQUMsNkRBQUQ7QUFBaUIsMEJBQWdCLEVBQUVqTyx1RUFBNkJGO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVdIOztBQWI4Qzs7Ozs7Ozs7OztBQ0puRCxpSEFBa0Q7Ozs7Ozs7Ozs7OztBQ0FsRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RoLWhvbWVwYWdlLy4vbGliL3RoZW1lLmpzIiwid2VicGFjazovL2RoLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaGVhZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL2RoLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2RoLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvc2NyaXB0LmpzIiwid2VicGFjazovL2RoLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGgtaG9tZXBhZ2UvLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vZGgtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvbmV4dC9kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiIiwid2VicGFjazovL2RoLWhvbWVwYWdlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovL2RoLWhvbWVwYWdlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvY29uc3RhbnRzLmpzXCIiLCJ3ZWJwYWNrOi8vZGgtaG9tZXBhZ2UvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2RoLWhvbWVwYWdlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGgtaG9tZXBhZ2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kaC1ob21lcGFnZS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSAnQGNoYWtyYS11aS90aGVtZS10b29scydcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywnIzIwMjAyMycpKHByb3BzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgIEhlYWRpbmc6IHtcclxuICAgICAgICB2YXJpYW50czp7XHJcbiAgICAgICAgICAgICdzZWN0aW9uLXRpdGxlJzp7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjondWRuZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlckxpbmVPZmZzZXQ6IDYsXHJcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJMaW5lVGhpY2tuZXNzOiA0LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAzLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgTGluazp7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzNkN2FlZCcsJyNmZjYzYzMnKShwcm9wcyksXHJcbiAgICAgICAgICAgIHRleHRVbmRlckxpbmVPZmZzZXQ6IDNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGZvbnRzID0ge1xyXG4gICAgaGVhZGluZzogXCInTSBQTFVTIFJvdW5kZWQgMWMnXCJcclxufVxyXG5cclxuY29uc3QgY29sb3JzID0ge1xyXG4gICAgZ2xhc3NUZWFsOiAnIzg4Y2NjYSdcclxufVxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWVcclxufVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuIGNvbmZpZyxcclxuIHN0eWxlcyxcclxuIGNvbXBvbmVudHMsXHJcbiBjb2xvcnMsXHJcbiBmb250c1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWUiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGluaXRIZWFkTWFuYWdlcjtcbmV4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXMgPSB2b2lkIDA7XG5jb25zdCBET01BdHRyaWJ1dGVOYW1lcyA9IHtcbiAgICBhY2NlcHRDaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBodG1sRm9yOiAnZm9yJyxcbiAgICBodHRwRXF1aXY6ICdodHRwLWVxdWl2JyxcbiAgICBub01vZHVsZTogJ25vTW9kdWxlJ1xufTtcbmV4cG9ydHMuRE9NQXR0cmlidXRlTmFtZXMgPSBET01BdHRyaWJ1dGVOYW1lcztcbmZ1bmN0aW9uIHJlYWN0RWxlbWVudFRvRE9NKHsgdHlwZSAsIHByb3BzICB9KSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvcihjb25zdCBwIGluIHByb3BzKXtcbiAgICAgICAgaWYgKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSkgY29udGludWU7XG4gICAgICAgIGlmIChwID09PSAnY2hpbGRyZW4nIHx8IHAgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIGNvbnRpbnVlO1xuICAgICAgICAvLyB3ZSBkb24ndCByZW5kZXIgdW5kZWZpbmVkIHByb3BzIHRvIHRoZSBET01cbiAgICAgICAgaWYgKHByb3BzW3BdID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhdHRyID0gRE9NQXR0cmlidXRlTmFtZXNbcF0gfHwgcC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3NjcmlwdCcgJiYgKGF0dHIgPT09ICdhc3luYycgfHwgYXR0ciA9PT0gJ2RlZmVyJyB8fCBhdHRyID09PSAnbm9Nb2R1bGUnKSkge1xuICAgICAgICAgICAgZWxbYXR0cl0gPSAhIXByb3BzW3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHByb3BzW3BdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB7IGNoaWxkcmVuICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIH0gPSBwcm9wcztcbiAgICBpZiAoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sIHx8ICcnO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnID8gY2hpbGRyZW4gOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oJycpIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGUsIGNvbXBvbmVudHMpIHtcbiAgICBjb25zdCBoZWFkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGNvbnN0IGhlYWRDb3VudEVsID0gaGVhZEVsLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJyk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFoZWFkQ291bnRFbCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGVhZENvdW50ID0gTnVtYmVyKGhlYWRDb3VudEVsLmNvbnRlbnQpO1xuICAgIGNvbnN0IG9sZFRhZ3MgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwLCBqID0gaGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZzsgaSA8IGhlYWRDb3VudDsgaSsrLCBqID0gai5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKXtcbiAgICAgICAgaWYgKGoudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlKSB7XG4gICAgICAgICAgICBvbGRUYWdzLnB1c2goaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV3VGFncyA9IGNvbXBvbmVudHMubWFwKHJlYWN0RWxlbWVudFRvRE9NKS5maWx0ZXIoKG5ld1RhZyk9PntcbiAgICAgICAgZm9yKGxldCBrID0gMCwgbGVuID0gb2xkVGFncy5sZW5ndGg7IGsgPCBsZW47IGsrKyl7XG4gICAgICAgICAgICBjb25zdCBvbGRUYWcgPSBvbGRUYWdzW2tdO1xuICAgICAgICAgICAgaWYgKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKSB7XG4gICAgICAgICAgICAgICAgb2xkVGFncy5zcGxpY2UoaywgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIG9sZFRhZ3MuZm9yRWFjaCgodCk9PnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KVxuICAgICk7XG4gICAgbmV3VGFncy5mb3JFYWNoKCh0KT0+aGVhZEVsLmluc2VydEJlZm9yZSh0LCBoZWFkQ291bnRFbClcbiAgICApO1xuICAgIGhlYWRDb3VudEVsLmNvbnRlbnQgPSAoaGVhZENvdW50IC0gb2xkVGFncy5sZW5ndGggKyBuZXdUYWdzLmxlbmd0aCkudG9TdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpIHtcbiAgICBsZXQgdXBkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlczogbmV3IFNldCgpLFxuICAgICAgICB1cGRhdGVIZWFkOiAoaGVhZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB1cGRhdGVQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICE9PSB1cGRhdGVQcm9taXNlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFncyA9IHtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGhlYWQuZm9yRWFjaCgoaCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKC8vIElmIHRoZSBmb250IHRhZyBpcyBsb2FkZWQgb25seSBvbiBjbGllbnQgbmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB3b24ndCBiZSBpbmxpbmVkLiBJbiB0aGlzIGNhc2UgcmV2ZXJ0IHRvIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICBoLnR5cGUgPT09ICdsaW5rJyAmJiBoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzdHlsZVtkYXRhLWhyZWY9XCIke2gucHJvcHNbJ2RhdGEtaHJlZiddfVwiXWApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoLnByb3BzLmhyZWYgPSBoLnByb3BzWydkYXRhLWhyZWYnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgucHJvcHNbJ2RhdGEtaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0YWdzW2gudHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFnc1toLnR5cGVdID0gY29tcG9uZW50cztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbXBvbmVudCA9IHRhZ3MudGl0bGUgPyB0YWdzLnRpdGxlWzBdIDogbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiAgfSA9IHRpdGxlQ29tcG9uZW50LnByb3BzO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBkb2N1bWVudC50aXRsZSkgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdtZXRhJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Jhc2UnLFxuICAgICAgICAgICAgICAgICAgICAnbGluaycsXG4gICAgICAgICAgICAgICAgICAgICdzdHlsZScsXG4gICAgICAgICAgICAgICAgICAgICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgXS5mb3JFYWNoKCh0eXBlKT0+e1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50cyh0eXBlLCB0YWdzW3R5cGVdIHx8IFtdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaW5pdFNjcmlwdExvYWRlciA9IGluaXRTY3JpcHRMb2FkZXI7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9oZWFkTWFuYWdlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTtcbnZhciBfaGVhZE1hbmFnZXIgPSByZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXJcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgU2NyaXB0Q2FjaGUgPSBuZXcgTWFwKCk7XG5jb25zdCBMb2FkQ2FjaGUgPSBuZXcgU2V0KCk7XG5jb25zdCBpZ25vcmVQcm9wcyA9IFtcbiAgICAnb25Mb2FkJyxcbiAgICAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLFxuICAgICdjaGlsZHJlbicsXG4gICAgJ29uRXJyb3InLFxuICAgICdzdHJhdGVneScsIFxuXTtcbmNvbnN0IGxvYWRTY3JpcHQgPSAocHJvcHMpPT57XG4gICAgY29uc3QgeyBzcmMgLCBpZCAsIG9uTG9hZCA9KCk9PntcbiAgICB9ICwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgLCBjaGlsZHJlbiA9JycgLCBzdHJhdGVneSA9J2FmdGVySW50ZXJhY3RpdmUnICwgb25FcnJvciAsICB9ID0gcHJvcHM7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBpZCB8fCBzcmM7XG4gICAgLy8gU2NyaXB0IGhhcyBhbHJlYWR5IGxvYWRlZFxuICAgIGlmIChjYWNoZUtleSAmJiBMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENvbnRlbnRzIG9mIHRoaXMgc2NyaXB0IGFyZSBhbHJlYWR5IGxvYWRpbmcvbG9hZGVkXG4gICAgaWYgKFNjcmlwdENhY2hlLmhhcyhzcmMpKSB7XG4gICAgICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO1xuICAgICAgICAvLyBFeGVjdXRlIG9uTG9hZCBzaW5jZSB0aGUgc2NyaXB0IGxvYWRpbmcgaGFzIGJlZ3VuXG4gICAgICAgIFNjcmlwdENhY2hlLmdldChzcmMpLnRoZW4ob25Mb2FkLCBvbkVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICAgICAgICBvbkxvYWQuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9KS5jYXRjaChmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICBvbkVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNyYykge1xuICAgICAgICBTY3JpcHRDYWNoZS5zZXQoc3JjLCBsb2FkUHJvbWlzZSk7XG4gICAgfVxuICAgIExvYWRDYWNoZS5hZGQoY2FjaGVLZXkpO1xuICAgIGlmIChkYW5nZXJvdXNseVNldElubmVySFRNTCkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBkYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwgfHwgJyc7XG4gICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBjaGlsZHJlbiA6IEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pID8gY2hpbGRyZW4uam9pbignJykgOiAnJztcbiAgICB9IGVsc2UgaWYgKHNyYykge1xuICAgICAgICBlbC5zcmMgPSBzcmM7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW2ssIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpe1xuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpZ25vcmVQcm9wcy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXR0ciA9IF9oZWFkTWFuYWdlci5ET01BdHRyaWJ1dGVOYW1lc1trXSB8fCBrLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyLCB2YWx1ZSk7XG4gICAgfVxuICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1uc2NyaXB0Jywgc3RyYXRlZ3kpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xufTtcbmZ1bmN0aW9uIGhhbmRsZUNsaWVudFNjcmlwdExvYWQocHJvcHMpIHtcbiAgICBjb25zdCB7IHN0cmF0ZWd5ID0nYWZ0ZXJJbnRlcmFjdGl2ZScgIH0gPSBwcm9wcztcbiAgICBpZiAoc3RyYXRlZ3kgPT09ICdhZnRlckludGVyYWN0aXZlJykge1xuICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHN0cmF0ZWd5ID09PSAnbGF6eU9ubG9hZCcpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZExhenlTY3JpcHQocHJvcHMpIHtcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PmxvYWRTY3JpcHQocHJvcHMpXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5sb2FkU2NyaXB0KHByb3BzKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5pdFNjcmlwdExvYWRlcihzY3JpcHRMb2FkZXJJdGVtcykge1xuICAgIHNjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCk7XG59XG5mdW5jdGlvbiBTY3JpcHQocHJvcHMpIHtcbiAgICBjb25zdCB7IHNyYyA9JycgLCBvbkxvYWQgPSgpPT57XG4gICAgfSAsIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICwgc3RyYXRlZ3kgPSdhZnRlckludGVyYWN0aXZlJyAsIG9uRXJyb3IgIH0gPSBwcm9wcywgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJzcmNcIiwgXCJvbkxvYWRcIiwgXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiLCBcInN0cmF0ZWd5XCIsIFwib25FcnJvclwiXSk7XG4gICAgLy8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG4gICAgY29uc3QgeyB1cGRhdGVTY3JpcHRzICwgc2NyaXB0cyAsIGdldElzU3NyICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmIChzdHJhdGVneSA9PT0gJ2FmdGVySW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICBsb2FkU2NyaXB0KHByb3BzKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJhdGVneSA9PT0gJ2xhenlPbmxvYWQnKSB7XG4gICAgICAgICAgICBsb2FkTGF6eVNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHByb3BzLFxuICAgICAgICBzdHJhdGVneVxuICAgIF0pO1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2JlZm9yZUludGVyYWN0aXZlJykge1xuICAgICAgICBpZiAodXBkYXRlU2NyaXB0cykge1xuICAgICAgICAgICAgc2NyaXB0cy5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRzLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5jb25jYXQoW1xuICAgICAgICAgICAgICAgIF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvclxuICAgICAgICAgICAgICAgIH0sIHJlc3RQcm9wcyksIFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB1cGRhdGVTY3JpcHRzKHNjcmlwdHMpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldElzU3NyICYmIGdldElzU3NyKCkpIHtcbiAgICAgICAgICAgIC8vIFNjcmlwdCBoYXMgYWxyZWFkeSBsb2FkZWQgZHVyaW5nIFNTUlxuICAgICAgICAgICAgTG9hZENhY2hlLmFkZChyZXN0UHJvcHMuaWQgfHwgc3JjKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRJc1NzciAmJiAhZ2V0SXNTc3IoKSkge1xuICAgICAgICAgICAgbG9hZFNjcmlwdChwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG52YXIgX2RlZmF1bHQgPSBTY3JpcHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NyaXB0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRDb250ZXh0XCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdXRpbHMuRG9jdW1lbnRDb250ZXh0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRG9jdW1lbnRJbml0aWFsUHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztcbiAgICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkRvY3VtZW50UHJvcHNcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF91dGlscy5Eb2N1bWVudFByb3BzO1xuICAgIH1cbn0pO1xuZXhwb3J0cy5IdG1sID0gSHRtbDtcbmV4cG9ydHMuTWFpbiA9IE1haW47XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfc2VydmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO1xudmFyIF9jb25zdGFudHMgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9jb25zdGFudHNcIik7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdXRpbHNcIik7XG52YXIgX2dldFBhZ2VGaWxlcyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7XG52YXIgX3V0aWxzMSA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvdXRpbHNcIik7XG52YXIgX2h0bWxlc2NhcGUgPSByZXF1aXJlKFwiLi4vc2VydmVyL2h0bWxlc2NhcGVcIik7XG52YXIgX3NjcmlwdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NsaWVudC9zY3JpcHRcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdPYmogPSB7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChvYmogIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gb2JqKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSwgaW5BbXBNb2RlKSB7XG4gICAgY29uc3Qgc2hhcmVkRmlsZXMgPSAoMCwgX2dldFBhZ2VGaWxlcykuZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpO1xuICAgIGNvbnN0IHBhZ2VGaWxlcyA9IGluQW1wTW9kZSA/IFtdIDogKDAsIF9nZXRQYWdlRmlsZXMpLmdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hhcmVkRmlsZXMsXG4gICAgICAgIHBhZ2VGaWxlcyxcbiAgICAgICAgYWxsRmlsZXM6IFtcbiAgICAgICAgICAgIC4uLm5ldyBTZXQoW1xuICAgICAgICAgICAgICAgIC4uLnNoYXJlZEZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLnBhZ2VGaWxlc1xuICAgICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRQb2x5ZmlsbFNjcmlwdHMoY29udGV4dCwgcHJvcHMpIHtcbiAgICAvLyBwb2x5ZmlsbHMuanMgaGFzIHRvIGJlIHJlbmRlcmVkIGFzIG5vbW9kdWxlIHdpdGhvdXQgYXN5bmNcbiAgICAvLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbiAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgYnVpbGRNYW5pZmVzdCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICwgZGlzYWJsZU9wdGltaXplZExvYWRpbmcgLCAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcy5maWx0ZXIoKHBvbHlmaWxsKT0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpICYmICFwb2x5ZmlsbC5lbmRzV2l0aCgnLm1vZHVsZS5qcycpXG4gICAgKS5tYXAoKHBvbHlmaWxsKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGtleTogcG9seWZpbGwsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgbm9uY2U6IHByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICBub01vZHVsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNyYzogYCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7cG9seWZpbGx9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gXG4gICAgICAgIH0pXG4gICAgKTtcbn1cbmZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQsIHByb3BzKSB7XG4gICAgY29uc3QgeyBzY3JpcHRMb2FkZXIgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAgfSA9IGNvbnRleHQ7XG4gICAgcmV0dXJuIChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLm1hcCgoZmlsZSwgaW5kZXgpPT57XG4gICAgICAgIGNvbnN0IHsgc3RyYXRlZ3kgLCAuLi5zY3JpcHRQcm9wcyB9ID0gZmlsZTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgfSwgc2NyaXB0UHJvcHMsIHtcbiAgICAgICAgICAgIGtleTogc2NyaXB0UHJvcHMuc3JjIHx8IGluZGV4LFxuICAgICAgICAgICAgZGVmZXI6ICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIG5vbmNlOiBwcm9wcy5ub25jZSxcbiAgICAgICAgICAgIFwiZGF0YS1uc2NyaXB0XCI6IFwiYmVmb3JlSW50ZXJhY3RpdmVcIixcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luOiBwcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgIH0pKSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXREeW5hbWljQ2h1bmtzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMgLCBhc3NldFByZWZpeCAsIGlzRGV2ZWxvcG1lbnQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSBjb250ZXh0O1xuICAgIHJldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoKGZpbGUpPT57XG4gICAgICAgIGlmICghZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgIGFzeW5jOiAhaXNEZXZlbG9wbWVudCAmJiBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxcbiAgICAgICAgICAgIGRlZmVyOiAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBjcm9zc09yaWdpbjogcHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTY3JpcHRzKGNvbnRleHQsIHByb3BzLCBmaWxlcykge1xuICAgIHZhciByZWY7XG4gICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGJ1aWxkTWFuaWZlc3QgLCBpc0RldmVsb3BtZW50ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gY29udGV4dDtcbiAgICBjb25zdCBub3JtYWxTY3JpcHRzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmaWxlKT0+ZmlsZS5lbmRzV2l0aCgnLmpzJylcbiAgICApO1xuICAgIGNvbnN0IGxvd1ByaW9yaXR5U2NyaXB0cyA9IChyZWYgPSBidWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmZpbHRlcigoZmlsZSk9PmZpbGUuZW5kc1dpdGgoJy5qcycpXG4gICAgKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAuLi5ub3JtYWxTY3JpcHRzLFxuICAgICAgICAuLi5sb3dQcmlvcml0eVNjcmlwdHNcbiAgICBdLm1hcCgoZmlsZSk9PntcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICBub25jZTogcHJvcHMubm9uY2UsXG4gICAgICAgICAgICBhc3luYzogIWlzRGV2ZWxvcG1lbnQgJiYgZGlzYWJsZU9wdGltaXplZExvYWRpbmcsXG4gICAgICAgICAgICBkZWZlcjogIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuY2xhc3MgRG9jdW1lbnQxIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwKT0+e1xuICAgICAgICAgICAgcmV0dXJuIChwcm9wcyk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgIH0sIHByb3BzKSlcbiAgICAgICAgICAgIDtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBodG1sICwgaGVhZCAgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHtcbiAgICAgICAgICAgIGVuaGFuY2VBcHBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IFtcbiAgICAgICAgICAgIC4uLigwLCBfc2VydmVyKS5kZWZhdWx0KClcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBoZWFkLFxuICAgICAgICAgICAgc3R5bGVzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sIG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCwgbnVsbCkpKSk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gRG9jdW1lbnQxO1xuZnVuY3Rpb24gSHRtbChwcm9wcykge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICwgbG9jYWxlICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfdXRpbHMuSHRtbENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sID0gdHJ1ZTtcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCBwcm9wcywge1xuICAgICAgICBsYW5nOiBwcm9wcy5sYW5nIHx8IGxvY2FsZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIGFtcDogaW5BbXBNb2RlID8gJycgOiB1bmRlZmluZWQsXG4gICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICB9KSkpO1xufVxuY2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnQge1xuICAgIGdldENzc0xpbmtzKGZpbGVzKSB7XG4gICAgICAgIGNvbnN0IHsgYXNzZXRQcmVmaXggLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGR5bmFtaWNJbXBvcnRzICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBjc3NGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZik9PmYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzaGFyZWRGaWxlcyA9IG5ldyBTZXQoZmlsZXMuc2hhcmVkRmlsZXMpO1xuICAgICAgICAvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbiAgICAgICAgLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbiAgICAgICAgbGV0IHVubWFuZ2VkRmlsZXMgPSBuZXcgU2V0KFtdKTtcbiAgICAgICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IEFycmF5LmZyb20obmV3IFNldChkeW5hbWljSW1wb3J0cy5maWx0ZXIoKGZpbGUpPT5maWxlLmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgKSkpO1xuICAgICAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKTtcbiAgICAgICAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoKGYpPT4hKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdW5tYW5nZWRGaWxlcyA9IG5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY3NzTGlua0VsZW1lbnRzID0gW107XG4gICAgICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpPT57XG4gICAgICAgICAgICBjb25zdCBpc1NoYXJlZEZpbGUgPSBzaGFyZWRGaWxlcy5oYXMoZmlsZSk7XG4gICAgICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MpIHtcbiAgICAgICAgICAgICAgICBjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBgJHtmaWxlfS1wcmVsb2FkYCxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgICAgIGFzOiBcInN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpc1VubWFuYWdlZEZpbGUgPSB1bm1hbmdlZEZpbGVzLmhhcyhmaWxlKTtcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgIGtleTogZmlsZSxcbiAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICBcImRhdGEtbi1nXCI6IGlzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1uLXBcIjogaXNVbm1hbmFnZWRGaWxlID8gdW5kZWZpbmVkIDogaXNTaGFyZWRGaWxlID8gdW5kZWZpbmVkIDogJydcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMpIHtcbiAgICAgICAgICAgIGNzc0xpbmtFbGVtZW50cyA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjc3NMaW5rRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50cztcbiAgICB9XG4gICAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgICAgIGNvbnN0IHsgZHluYW1pY0ltcG9ydHMgLCBhc3NldFByZWZpeCAsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICByZXR1cm4gZHluYW1pY0ltcG9ydHMubWFwKChmaWxlKT0+e1xuICAgICAgICAgICAgaWYgKCFmaWxlLmVuZHNXaXRoKCcuanMnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgIGhyZWY6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsXG4gICAgICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KS8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbiAgICAgICAgLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgZ2V0UHJlbG9hZE1haW5MaW5rcyhmaWxlcykge1xuICAgICAgICBjb25zdCB7IGFzc2V0UHJlZml4ICwgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcgLCBzY3JpcHRMb2FkZXIgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IHByZWxvYWRGaWxlcyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSk9PntcbiAgICAgICAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKCcuanMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlIHx8IFtdKS5tYXAoKGZpbGUpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLnNyYyxcbiAgICAgICAgICAgICAgICAgICAgbm9uY2U6IHRoaXMucHJvcHMubm9uY2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGZpbGUuc3JjLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLi4ucHJlbG9hZEZpbGVzLm1hcCgoZmlsZSk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICBocmVmOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBhczogXCJzY3JpcHRcIixcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLCBcbiAgICAgICAgXTtcbiAgICB9XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgaGFuZGxlRG9jdW1lbnRTY3JpcHRMb2FkZXJJdGVtcyhjaGlsZHJlbikge1xuICAgICAgICBjb25zdCB7IHNjcmlwdExvYWRlciAgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3Qgc2NyaXB0TG9hZGVySXRlbXMgPSBbXTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRDaGlsZHJlbiA9IFtdO1xuICAgICAgICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQpPT57XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gX3NjcmlwdC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLnN0cmF0ZWd5ID09PSAnYmVmb3JlSW50ZXJhY3RpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlci5iZWZvcmVJbnRlcmFjdGl2ZSA9IChzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmUgfHwgW10pLmNvbmNhdChbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoW1xuICAgICAgICAgICAgICAgICAgICAnbGF6eU9ubG9hZCcsXG4gICAgICAgICAgICAgICAgICAgICdhZnRlckludGVyYWN0aXZlJ1xuICAgICAgICAgICAgICAgIF0uaW5jbHVkZXMoY2hpbGQucHJvcHMuc3RyYXRlZ3kpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdExvYWRlckl0ZW1zLnB1c2goY2hpbGQucHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnNjcmlwdExvYWRlciA9IHNjcmlwdExvYWRlckl0ZW1zO1xuICAgICAgICByZXR1cm4gZmlsdGVyZWRDaGlsZHJlbjtcbiAgICB9XG4gICAgbWFrZVN0eWxlc2hlZXRJbmVydChub2RlKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAobm9kZSwgKGMpPT57XG4gICAgICAgICAgICBpZiAoYy50eXBlID09PSAnbGluaycgJiYgYy5wcm9wc1snaHJlZiddICYmIF9jb25zdGFudHMuT1BUSU1JWkVEX0ZPTlRfUFJPVklERVJTLnNvbWUoKHsgdXJsICB9KT0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKVxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jLnByb3BzIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXTtcbiAgICAgICAgICAgICAgICBuZXdQcm9wc1snaHJlZiddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgICAgICAgICBjLnByb3BzWydjaGlsZHJlbiddID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGMucHJvcHNbJ2NoaWxkcmVuJ10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGVzICwgYW1wUGF0aCAsIGluQW1wTW9kZSAsIGh5YnJpZEFtcCAsIGNhbm9uaWNhbEJhc2UgLCBfX05FWFRfREFUQV9fICwgZGFuZ2Vyb3VzQXNQYXRoICwgaGVhZFRhZ3MgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCB1bnN0YWJsZV9Kc1ByZWxvYWQgLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAsICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZTtcbiAgICAgICAgY29uc3QgZGlzYWJsZUpzUHJlbG9hZCA9IHVuc3RhYmxlX0pzUHJlbG9hZCA9PT0gZmFsc2UgfHwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nO1xuICAgICAgICB0aGlzLmNvbnRleHQuZG9jQ29tcG9uZW50c1JlbmRlcmVkLkhlYWQgPSB0cnVlO1xuICAgICAgICBsZXQgeyBoZWFkICB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBsZXQgY3NzUHJlbG9hZHMgPSBbXTtcbiAgICAgICAgbGV0IG90aGVySGVhZEVsZW1lbnRzID0gW107XG4gICAgICAgIGlmIChoZWFkKSB7XG4gICAgICAgICAgICBoZWFkLmZvckVhY2goKGMpPT57XG4gICAgICAgICAgICAgICAgaWYgKGMgJiYgYy50eXBlID09PSAnbGluaycgJiYgYy5wcm9wc1sncmVsJ10gPT09ICdwcmVsb2FkJyAmJiBjLnByb3BzWydhcyddID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc1ByZWxvYWRzLnB1c2goYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYyAmJiBvdGhlckhlYWRFbGVtZW50cy5wdXNoKGMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaGVhZCA9IGNzc1ByZWxvYWRzLmNvbmNhdChvdGhlckhlYWRFbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlYWN0SGVsbWV0ID0gY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYgPSBjaGlsZC5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWZbJ2RhdGEtcmVhY3QtaGVsbWV0J107XG4gICAgICAgICAgICAgICAgaWYgKCFpc1JlYWN0SGVsbWV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWYxO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC50eXBlKSA9PT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uby1kb2N1bWVudC10aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoaWxkLnR5cGUpID09PSAnbWV0YScgJiYgKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IGNoaWxkLnByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLm5hbWUpID09PSAndmlld3BvcnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKSBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgIWluQW1wTW9kZSkge1xuICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5oYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zKGNoaWxkcmVuKTtcbiAgICAgICAgbGV0IGhhc0FtcGh0bWxSZWwgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhhc0Nhbm9uaWNhbFJlbCA9IGZhbHNlO1xuICAgICAgICAvLyBzaG93IHdhcm5pbmcgYW5kIHJlbW92ZSBjb25mbGljdGluZyBhbXAgaGVhZCB0YWdzXG4gICAgICAgIGhlYWQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoaGVhZCB8fCBbXSwgKGNoaWxkKT0+e1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlICwgcHJvcHMgIH0gPSBjaGlsZDtcbiAgICAgICAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgYmFkUHJvcCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbWV0YScgJiYgcHJvcHMubmFtZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgICAgICAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0Nhbm9uaWNhbFJlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2NyaXB0Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGJsb2NrIGlmXG4gICAgICAgICAgICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgICAgICAgICAgICAvLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xIHx8IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZFByb3AgPSAnPHNjcmlwdCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRQcm9wICs9ICcvPic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIG5vbi1hbXAgbW9kZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQW1waHRtbFJlbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgICAgIGNvbnN0IGN1clN0eWxlcyA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKSA/IHN0eWxlcyA6IFtdO1xuICAgICAgICBpZiAoaW5BbXBNb2RlICYmIHN0eWxlcyAmJiAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgICAgc3R5bGVzLnByb3BzICYmIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbCk9PntcbiAgICAgICAgICAgICAgICB2YXIgcmVmMiwgcmVmMztcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYyID0gZWwucHJvcHMpID09PSBudWxsIHx8IHJlZjIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYzID0gcmVmMi5kYW5nZXJvdXNseVNldElubmVySFRNTCkgPT09IG51bGwgfHwgcmVmMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMy5fX2h0bWw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICAgICAgICBzdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpPT57XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmZvckVhY2goKGVsKT0+aGFzU3R5bGVzKGVsKSAmJiBjdXJTdHlsZXMucHVzaChlbClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyU3R5bGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgaW5BbXBNb2RlKTtcbiAgICAgICAgdmFyIF9ub25jZSwgX25vbmNlMTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIH0sIHRoaXMucHJvcHMpLCB0aGlzLmNvbnRleHQuaXNEZXZlbG9wbWVudCAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogaW5BbXBNb2RlID8gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5e2Rpc3BsYXk6bm9uZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1hbXBkZXZtb2RlXCI6IGluQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZFxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKSksIGNoaWxkcmVuLCBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBuYW1lOiBcIm5leHQtZm9udC1wcmVjb25uZWN0XCJcbiAgICAgICAgfSksIGhlYWQsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJuZXh0LWhlYWQtY291bnRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKClcbiAgICAgICAgfSksIGluQW1wTW9kZSAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgbmFtZTogXCJ2aWV3cG9ydFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgIH0pLCAhaGFzQ2Fub25pY2FsUmVsICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICAgICAgcmVsOiBcImNhbm9uaWNhbFwiLFxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArICgwLCBfdXRpbHMxKS5jbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICAgICAgYXM6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgfSksIHN0eWxlcyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1jdXN0b21cIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXMubWFwKChzdHlsZSk9PnN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbFxuICAgICAgICAgICAgICAgICkuam9pbignJykucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLCB7XG4gICAgICAgICAgICBcImFtcC1ib2lsZXJwbGF0ZVwiOiBcIlwiLFxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1vei1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbXMtYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7YW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGh9QC13ZWJraXQta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbW96LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1zLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW8ta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUBrZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19YFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xuICAgICAgICAgICAgXCJhbXAtYm9pbGVycGxhdGVcIjogXCJcIixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgICAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIlxuICAgICAgICB9KSksICFpbkFtcE1vZGUgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCAhaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgICAgICByZWw6IFwiYW1waHRtbFwiLFxuICAgICAgICAgICAgaHJlZjogY2Fub25pY2FsQmFzZSArIGdldEFtcFBhdGgoYW1wUGF0aCwgZGFuZ2Vyb3VzQXNQYXRoKVxuICAgICAgICB9KSwgIXByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9DU1MgJiYgdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyksICFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTICYmIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIHtcbiAgICAgICAgICAgIFwiZGF0YS1uLWNzc1wiOiAoX25vbmNlID0gdGhpcy5wcm9wcy5ub25jZSkgIT09IG51bGwgJiYgX25vbmNlICE9PSB2b2lkIDAgPyBfbm9uY2UgOiAnJ1xuICAgICAgICB9KSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0lNQUdFUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV4dC1pbWFnZS1wcmVsb2FkXCJcbiAgICAgICAgfSksICFkaXNhYmxlUnVudGltZUpTICYmICFkaXNhYmxlSnNQcmVsb2FkICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSwgIWRpc2FibGVSdW50aW1lSlMgJiYgIWRpc2FibGVKc1ByZWxvYWQgJiYgdGhpcy5nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKSwgIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksICFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpLCAhZGlzYWJsZU9wdGltaXplZExvYWRpbmcgJiYgIWRpc2FibGVSdW50aW1lSlMgJiYgdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKSwgcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyAmJiAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBcImRhdGEtbi1jc3NcIjogKF9ub25jZTEgPSB0aGlzLnByb3BzLm5vbmNlKSAhPT0gbnVsbCAmJiBfbm9uY2UxICE9PSB2b2lkIDAgPyBfbm9uY2UxIDogJydcbiAgICAgICAgfSksIHRoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbiAgICAgICAgLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4gICAgICAgIC8vIChieSBkZWZhdWx0LCBzdHlsZS1sb2FkZXIgaW5qZWN0cyBhdCB0aGUgYm90dG9tIG9mIDxoZWFkIC8+KVxuICAgICAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIlxuICAgICAgICB9KSwgc3R5bGVzIHx8IG51bGwpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIHtcbiAgICAgICAgfSwgLi4uaGVhZFRhZ3MgfHwgW10pKSk7XG4gICAgfVxufVxuZXhwb3J0cy5IZWFkID0gSGVhZDtcbkhlYWQuY29udGV4dFR5cGUgPSBfdXRpbHMuSHRtbENvbnRleHQ7XG5mdW5jdGlvbiBNYWluKCkge1xuICAgIGNvbnN0IHsgaW5BbXBNb2RlICwgZG9jQ29tcG9uZW50c1JlbmRlcmVkICB9ID0gKDAsIF9yZWFjdCkudXNlQ29udGV4dChfdXRpbHMuSHRtbENvbnRleHQpO1xuICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZTtcbiAgICBpZiAoaW5BbXBNb2RlKSByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBfY29uc3RhbnRzLkJPRFlfUkVOREVSX1RBUkdFVCkpO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBpZDogXCJfX25leHRcIlxuICAgIH0sIF9jb25zdGFudHMuQk9EWV9SRU5ERVJfVEFSR0VUKSk7XG59XG5jbGFzcyBOZXh0U2NyaXB0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudCB7XG4gICAgZ2V0RHluYW1pY0NodW5rcyhmaWxlcykge1xuICAgICAgICByZXR1cm4gZ2V0RHluYW1pY0NodW5rcyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMsIGZpbGVzKTtcbiAgICB9XG4gICAgZ2V0UHJlTmV4dFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsIHRoaXMucHJvcHMpO1xuICAgIH1cbiAgICBnZXRTY3JpcHRzKGZpbGVzKSB7XG4gICAgICAgIHJldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCwgdGhpcy5wcm9wcywgZmlsZXMpO1xuICAgIH1cbiAgICBnZXRQb2x5ZmlsbFNjcmlwdHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LCB0aGlzLnByb3BzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyAgfSA9IGNvbnRleHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7XG4gICAgICAgICAgICByZXR1cm4gKDAsIF9odG1sZXNjYXBlKS5odG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignY2lyY3VsYXIgc3RydWN0dXJlJykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhc3NldFByZWZpeCAsIGluQW1wTW9kZSAsIGJ1aWxkTWFuaWZlc3QgLCB1bnN0YWJsZV9ydW50aW1lSlMgLCBkb2NDb21wb25lbnRzUmVuZGVyZWQgLCBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyAsIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICwgIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlO1xuICAgICAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWU7XG4gICAgICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAgICAgICAgIC4uLmJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcyxcbiAgICAgICAgICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLCBcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiX19ORVhUX0RBVEFfX1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImRhdGEtYW1wZGV2bW9kZVwiOiB0cnVlXG4gICAgICAgICAgICB9KSwgYW1wRGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICBzcmM6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgICAgICBub25jZTogdGhpcy5wcm9wcy5ub25jZSxcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWFtcGRldm1vZGVcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyb3NzT3JpZ2luKSBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyh0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCwgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSwgaW5BbXBNb2RlKTtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgIWRpc2FibGVSdW50aW1lSlMgJiYgYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IGZpbGUsXG4gICAgICAgICAgICAgICAgc3JjOiBgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLFxuICAgICAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgICAgIGNyb3NzT3JpZ2luOiB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICkgOiBudWxsLCBkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgICAgICAgICBpZDogXCJfX05FWFRfREFUQV9fXCIsXG4gICAgICAgICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIG5vbmNlOiB0aGlzLnByb3BzLm5vbmNlLFxuICAgICAgICAgICAgY3Jvc3NPcmlnaW46IHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLCBkaXNhYmxlT3B0aW1pemVkTG9hZGluZyAmJiAhZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZU5leHRTY3JpcHRzKCksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksIGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nICYmICFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpKTtcbiAgICB9XG59XG5leHBvcnRzLk5leHRTY3JpcHQgPSBOZXh0U2NyaXB0O1xuTmV4dFNjcmlwdC5jb250ZXh0VHlwZSA9IF91dGlscy5IdG1sQ29udGV4dDtcbk5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXggPSAnIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO1xuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLCBhc1BhdGgpIHtcbiAgICByZXR1cm4gYW1wUGF0aCB8fCBgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/J31hbXA9MWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9kb2N1bWVudC5qcy5tYXAiLCJpbXBvcnQgeyBDb2xvck1vZGVTY3JpcHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTmV4dERvY3VtZW50LCB7SHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9saWIvdGhlbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxIdG1sIGxhbmc9J2VuJz5cclxuICAgICAgICAgICAgICAgIDxIZWFkIC8+XHJcbiAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXt0aGVtZS5jb25maWcuaW5pdGlhbENvbG9yTW9kZX0gLz5cclxuICAgICAgICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG5cclxuICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJMaW5lT2Zmc2V0IiwidGV4dFVuZGVyTGluZVRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdsYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZGVmYXVsdCIsImluaXRIZWFkTWFuYWdlciIsIkRPTUF0dHJpYnV0ZU5hbWVzIiwiYWNjZXB0Q2hhcnNldCIsImNsYXNzTmFtZSIsImh0bWxGb3IiLCJodHRwRXF1aXYiLCJub01vZHVsZSIsInJlYWN0RWxlbWVudFRvRE9NIiwidHlwZSIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicCIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiYXR0ciIsInRvTG93ZXJDYXNlIiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImlubmVySFRNTCIsIl9faHRtbCIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInVwZGF0ZUVsZW1lbnRzIiwiaGVhZEVsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJoZWFkQ291bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWFkQ291bnQiLCJOdW1iZXIiLCJjb250ZW50Iiwib2xkVGFncyIsImkiLCJqIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJwdXNoIiwibmV3VGFncyIsIm1hcCIsImZpbHRlciIsIm5ld1RhZyIsImsiLCJsZW4iLCJsZW5ndGgiLCJvbGRUYWciLCJpc0VxdWFsTm9kZSIsInNwbGljZSIsImZvckVhY2giLCJ0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwidG9TdHJpbmciLCJ1cGRhdGVQcm9taXNlIiwibW91bnRlZEluc3RhbmNlcyIsIlNldCIsInVwZGF0ZUhlYWQiLCJoZWFkIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsInRhZ3MiLCJoIiwiaHJlZiIsInRpdGxlQ29tcG9uZW50IiwidGl0bGUiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsImluaXRTY3JpcHRMb2FkZXIiLCJfcmVhY3QiLCJyZXF1aXJlIiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9oZWFkTWFuYWdlciIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsIlNjcmlwdENhY2hlIiwiTWFwIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwic3JjIiwib25Mb2FkIiwic3RyYXRlZ3kiLCJvbkVycm9yIiwiY2FjaGVLZXkiLCJoYXMiLCJhZGQiLCJnZXQiLCJsb2FkUHJvbWlzZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2F0Y2giLCJzZXQiLCJlbnRyaWVzIiwiaW5jbHVkZXMiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJsb2FkTGF6eVNjcmlwdCIsInJlYWR5U3RhdGUiLCJzY3JpcHRMb2FkZXJJdGVtcyIsIlNjcmlwdCIsInJlc3RQcm9wcyIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwiZ2V0SXNTc3IiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwidXNlRWZmZWN0IiwiYmVmb3JlSW50ZXJhY3RpdmUiLCJfZGVmYXVsdCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIkh0bWwiLCJNYWluIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJfc2VydmVyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9jb25zdGFudHMiLCJfZ2V0UGFnZUZpbGVzIiwiX3V0aWxzMSIsIl9odG1sZXNjYXBlIiwiX3NjcmlwdCIsIl9fZXNNb2R1bGUiLCJuZXdPYmoiLCJkZXNjIiwiZ2V0RG9jdW1lbnRGaWxlcyIsImJ1aWxkTWFuaWZlc3QiLCJwYXRobmFtZSIsImluQW1wTW9kZSIsInNoYXJlZEZpbGVzIiwiZ2V0UGFnZUZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJjb250ZXh0IiwiYXNzZXRQcmVmaXgiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwiZW5kc1dpdGgiLCJkZWZlciIsIm5vbmNlIiwiY3Jvc3NPcmlnaW4iLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0NST1NTX09SSUdJTiIsImdldFByZU5leHRTY3JpcHRzIiwic2NyaXB0TG9hZGVyIiwiZmlsZSIsImluZGV4Iiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJnZXREeW5hbWljQ2h1bmtzIiwiZmlsZXMiLCJkeW5hbWljSW1wb3J0cyIsImlzRGV2ZWxvcG1lbnQiLCJhc3luYyIsImVuY29kZVVSSSIsImdldFNjcmlwdHMiLCJyZWYiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwibG93UHJpb3JpdHlGaWxlcyIsIkRvY3VtZW50MSIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VBcHAiLCJBcHAiLCJodG1sIiwicmVuZGVyUGFnZSIsInJlbmRlciIsIkhlYWQiLCJOZXh0U2NyaXB0IiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwibG9jYWxlIiwiSHRtbENvbnRleHQiLCJsYW5nIiwiYW1wIiwiZ2V0Q3NzTGlua3MiLCJjc3NGaWxlcyIsImYiLCJ1bm1hbmdlZEZpbGVzIiwiZHluYW1pY0Nzc0ZpbGVzIiwiZnJvbSIsImV4aXN0aW5nIiwiY3NzTGlua0VsZW1lbnRzIiwiaXNTaGFyZWRGaWxlIiwiX19ORVhUX09QVElNSVpFX0NTUyIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiX19ORVhUX09QVElNSVpFX0ZPTlRTIiwibWFrZVN0eWxlc2hlZXRJbmVydCIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJoYW5kbGVEb2N1bWVudFNjcmlwdExvYWRlckl0ZW1zIiwiZmlsdGVyZWRDaGlsZHJlbiIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfX05FWFRfREFUQV9fIiwibm9kZSIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwidXJsIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwiY2xvbmVFbGVtZW50IiwiYW1wUGF0aCIsImh5YnJpZEFtcCIsImNhbm9uaWNhbEJhc2UiLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsInVuc3RhYmxlX0pzUHJlbG9hZCIsImRpc2FibGVSdW50aW1lSlMiLCJkaXNhYmxlSnNQcmVsb2FkIiwiY3NzUHJlbG9hZHMiLCJvdGhlckhlYWRFbGVtZW50cyIsInRvQXJyYXkiLCJpc1JlYWN0SGVsbWV0IiwicmVmMSIsIndhcm4iLCJuYW1lIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJwcm9wIiwicGFnZSIsImN1clN0eWxlcyIsImhhc1N0eWxlcyIsInJlZjIiLCJyZWYzIiwiX25vbmNlIiwiX25vbmNlMSIsIkZyYWdtZW50IiwiY291bnQiLCJjbGVhbkFtcFBhdGgiLCJzdHlsZSIsInJlcGxhY2UiLCJnZXRBbXBQYXRoIiwiX19ORVhUX09QVElNSVpFX0lNQUdFUyIsImNvbnRleHRUeXBlIiwiQk9EWV9SRU5ERVJfVEFSR0VUIiwiZ2V0SW5saW5lU2NyaXB0U291cmNlIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsIkNvbG9yTW9kZVNjcmlwdCIsIk5leHREb2N1bWVudCIsIkRvY3VtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==