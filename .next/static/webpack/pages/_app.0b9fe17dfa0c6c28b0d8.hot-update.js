"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_david_OneDrive_Documentos_Development_dh_homepage_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_david_OneDrive_Documentos_Development_dh_homepage_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./components/logo.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ "./components/theme-toggle-button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _excluded = ["href", "path", "_target", "children"];

var _jsxFileName = "C:\\Users\\david\\OneDrive\\Documentos\\Development\\dh-homepage\\components\\navbar.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_david_OneDrive_Documentos_Development_dh_homepage_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





 //import { IoLogoGithub } from 'react-icons/io5'



var LinkItem = function LinkItem(_ref) {
  _s();

  var href = _ref.href,
      path = _ref.path,
      _target = _ref._target,
      children = _ref.children,
      props = (0,C_Users_david_OneDrive_Documentos_Development_dh_homepage_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);

  var active = path === href;
  var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)('gray200', 'whiteAlpha.900');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, _objectSpread(_objectSpread({
      p: 2,
      bg: active ? 'grassTeal' : undefined,
      color: active ? '#202023' : inactiveColor,
      _target: _target
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(LinkItem, "dl0xx8ZlQuUn9JhHFu16yTlHTaE=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue];
});

_c = LinkItem;

var Navbar = function Navbar(props) {
  _s2();

  var path = props.path;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread(_objectSpread({
    position: "fixed",
    as: "nav",
    w: "100%",
    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)('#ffffff40', '#20202380'),
    style: {
      backdropFilter: 'blur(10px)'
    },
    zIndex: 1
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {
      display: "flex",
      p: 2,
      maxW: "container.md",
      wrap: "wrap",
      align: "center",
      justify: "space-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {
        align: "center",
        mr: 5,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
          as: "h1",
          size: "lg",
          letterSpacing: 'tighter',
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
        direction: {
          base: 'column',
          md: 'row'
        },
        display: {
          base: 'none',
          md: 'flex'
        },
        width: {
          base: 'full',
          md: 'auto'
        },
        alignItems: "center",
        flexGrow: 1,
        mt: {
          base: 4,
          md: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LinkItem, {
          href: "/works",
          path: path,
          children: "Works"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(LinkItem, {
          href: "/posts",
          path: path,
          children: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
        flex: 1,
        align: "right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
          ml: 2,
          display: {
            base: 'inline-block',
            md: 'none'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuButton, {
              as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton,
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.HamburgerIcon, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 23
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuList, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "About"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "Works"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s2(Navbar, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue];
});

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "LinkItem");
$RefreshReg$(_c2, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/theme-toggle-button.js":
/*!*******************************************!*\
  !*** ./components/theme-toggle-button.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\david\\OneDrive\\Documentos\\Development\\dh-homepage\\components\\theme-toggle-button.js",
    _this = undefined,
    _s = $RefreshSig$();






var ThemeToggleButton = function ThemeToggleButton() {
  _s();

  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
      style: {
        display: 'inline-block'
      },
      initial: {
        y: -20,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      exit: {
        y: 20,
        opacity: 0
      },
      transition: {
        duration: 0.2
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
        "aria-label": "Toggle theme",
        colorScheme: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('purple', 'orange'),
        icon: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 35
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 49
        }, _this)),
        onClick: toggleColorMode
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this)
    }, (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)('light', 'dark'), false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_s(ThemeToggleButton, "nOxe+ebHCqC5bMQGsSWeuYX/oOQ=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue];
});

_c = ThemeToggleButton;
/* harmony default export */ __webpack_exports__["default"] = (ThemeToggleButton);

var _c;

$RefreshReg$(_c, "ThemeToggleButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYjlmZTE3ZGZhMGM2YzI4YjBkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtDQUVBOzs7O0FBRUEsSUFBTWdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLElBQThDLFFBQTlDQSxJQUE4QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2hFLE1BQU1DLE1BQU0sR0FBR0osSUFBSSxLQUFLRCxJQUF4QjtBQUNBLE1BQU1NLGFBQWEsR0FBR1YsbUVBQWlCLENBQUMsU0FBRCxFQUFZLGdCQUFaLENBQXZDO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVJLElBQWhCO0FBQXNCLFlBQVEsTUFBOUI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUNFLE9BQUMsRUFBRSxDQURMO0FBRUUsUUFBRSxFQUFFSyxNQUFNLEdBQUcsV0FBSCxHQUFpQkUsU0FGN0I7QUFHRSxXQUFLLEVBQUVGLE1BQU0sR0FBRyxTQUFILEdBQWVDLGFBSDlCO0FBSUUsYUFBTyxFQUFFSjtBQUpYLE9BS01FLEtBTE47QUFBQSxnQkFPR0Q7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0dBQU1KO1VBRWtCSDs7O0tBRmxCRzs7QUFrQk4sSUFBTVMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUosS0FBSyxFQUFJO0FBQUE7O0FBQ3RCLE1BQVFILElBQVIsR0FBaUJHLEtBQWpCLENBQVFILElBQVI7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVEsRUFBQyxPQURYO0FBRUUsTUFBRSxFQUFDLEtBRkw7QUFHRSxLQUFDLEVBQUMsTUFISjtBQUlFLE1BQUUsRUFBRUwsbUVBQWlCLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FKdkI7QUFLRSxTQUFLLEVBQUU7QUFBRWEsTUFBQUEsY0FBYyxFQUFFO0FBQWxCLEtBTFQ7QUFNRSxVQUFNLEVBQUU7QUFOVixLQU9NTCxLQVBOO0FBQUEsMkJBU0UsOERBQUMsdURBQUQ7QUFDRSxhQUFPLEVBQUMsTUFEVjtBQUVFLE9BQUMsRUFBRSxDQUZMO0FBR0UsVUFBSSxFQUFDLGNBSFA7QUFJRSxVQUFJLEVBQUMsTUFKUDtBQUtFLFdBQUssRUFBQyxRQUxSO0FBTUUsYUFBTyxFQUFDLGVBTlY7QUFBQSw4QkFRRSw4REFBQyxrREFBRDtBQUFNLGFBQUssRUFBQyxRQUFaO0FBQXFCLFVBQUUsRUFBRSxDQUF6QjtBQUFBLCtCQUNFLDhEQUFDLHFEQUFEO0FBQVMsWUFBRSxFQUFDLElBQVo7QUFBaUIsY0FBSSxFQUFDLElBQXRCO0FBQTJCLHVCQUFhLEVBQUUsU0FBMUM7QUFBQSxpQ0FDRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSRixlQWNFLDhEQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBRTtBQUFFTSxVQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsVUFBQUEsRUFBRSxFQUFFO0FBQXRCLFNBRGI7QUFFRSxlQUFPLEVBQUU7QUFBRUQsVUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFVBQUFBLEVBQUUsRUFBRTtBQUFwQixTQUZYO0FBR0UsYUFBSyxFQUFFO0FBQUVELFVBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxVQUFBQSxFQUFFLEVBQUU7QUFBcEIsU0FIVDtBQUlFLGtCQUFVLEVBQUMsUUFKYjtBQUtFLGdCQUFRLEVBQUUsQ0FMWjtBQU1FLFVBQUUsRUFBRTtBQUFFRCxVQUFBQSxJQUFJLEVBQUUsQ0FBUjtBQUFXQyxVQUFBQSxFQUFFLEVBQUU7QUFBZixTQU5OO0FBQUEsZ0NBUUUsOERBQUMsUUFBRDtBQUFVLGNBQUksRUFBQyxRQUFmO0FBQXdCLGNBQUksRUFBRVYsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFXRSw4REFBQyxRQUFEO0FBQVUsY0FBSSxFQUFDLFFBQWY7QUFBd0IsY0FBSSxFQUFFQSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixlQThCRSw4REFBQyxpREFBRDtBQUFLLFlBQUksRUFBRSxDQUFYO0FBQWMsYUFBSyxFQUFDLE9BQXBCO0FBQUEsK0JBR0UsOERBQUMsaURBQUQ7QUFBSyxZQUFFLEVBQUUsQ0FBVDtBQUFZLGlCQUFPLEVBQUU7QUFBRVMsWUFBQUEsSUFBSSxFQUFFLGNBQVI7QUFBd0JDLFlBQUFBLEVBQUUsRUFBRTtBQUE1QixXQUFyQjtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQUEsb0NBQ0UsOERBQUMsd0RBQUQ7QUFDRSxnQkFBRSxFQUFFaEIsd0RBRE47QUFFRSxrQkFBSSxlQUFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlI7QUFHRSxxQkFBTyxFQUFDLFNBSFY7QUFJRSw0QkFBVztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRSw4REFBQyxzREFBRDtBQUFBLHNDQUNFLDhEQUFDLGtEQUFEO0FBQVUsb0JBQUksRUFBQyxHQUFmO0FBQW1CLHdCQUFRLE1BQTNCO0FBQUEsdUNBQ0UsOERBQUMsc0RBQUQ7QUFBVSxvQkFBRSxFQUFFUixrREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFJRSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUMsUUFBZjtBQUF3Qix3QkFBUSxNQUFoQztBQUFBLHVDQUNFLDhEQUFDLHNEQUFEO0FBQVUsb0JBQUUsRUFBRUEsa0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRUQsQ0FwRUQ7O0lBQU1xQjtVQVFJWjs7O01BUkpZO0FBc0VOLCtEQUFlQSxNQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQUE7O0FBQzlCLHNCQUE0QmdCLDhEQUFZLEVBQXhDO0FBQUEsTUFBUUcsZUFBUixpQkFBUUEsZUFBUjs7QUFFQSxzQkFDRSw4REFBQywwREFBRDtBQUFpQixtQkFBZSxNQUFoQztBQUFpQyxXQUFPLEVBQUUsS0FBMUM7QUFBQSwyQkFDRSw4REFBQyxxREFBRDtBQUNFLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQURUO0FBR0UsYUFBTyxFQUFFO0FBQUVDLFFBQUFBLENBQUMsRUFBRSxDQUFDLEVBQU47QUFBVUMsUUFBQUEsT0FBTyxFQUFFO0FBQW5CLE9BSFg7QUFJRSxhQUFPLEVBQUU7QUFBRUQsUUFBQUEsQ0FBQyxFQUFFLENBQUw7QUFBUUMsUUFBQUEsT0FBTyxFQUFFO0FBQWpCLE9BSlg7QUFLRSxVQUFJLEVBQUU7QUFBRUQsUUFBQUEsQ0FBQyxFQUFFLEVBQUw7QUFBU0MsUUFBQUEsT0FBTyxFQUFFO0FBQWxCLE9BTFI7QUFNRSxnQkFBVSxFQUFFO0FBQUVDLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BTmQ7QUFBQSw2QkFRRSw4REFBQyx3REFBRDtBQUNFLHNCQUFXLGNBRGI7QUFFRSxtQkFBVyxFQUFFekIsbUVBQWlCLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FGaEM7QUFHRSxZQUFJLEVBQUVBLG1FQUFpQixlQUFDLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUQsZUFBZSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFmLENBSHpCO0FBSUUsZUFBTyxFQUFFcUI7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkYsT0FFT3JCLG1FQUFpQixDQUFDLE9BQUQsRUFBVSxNQUFWLENBRnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0F0QkQ7O0dBQU1FO1VBQ3dCZ0IsNERBTWpCbEIsaUVBUVVBLGlFQUNQQTs7O0tBaEJWRTtBQXdCTiwrREFBZUEsaUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdGhlbWUtdG9nZ2xlLWJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEJveCxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIEhlYWRpbmcsXHJcbiAgRmxleCxcclxuICBNZW51LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICB1c2VDb2xvck1vZGVWYWx1ZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSAnLi90aGVtZS10b2dnbGUtYnV0dG9uJ1xyXG4vL2ltcG9ydCB7IElvTG9nb0dpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgX3RhcmdldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXHJcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgYmc9e2FjdGl2ZSA/ICdncmFzc1RlYWwnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxyXG4gICAgICAgIF90YXJnZXQ9e190YXJnZXR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cclxuICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyB9fVxyXG4gICAgICB6SW5kZXg9ezF9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cclxuICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19XHJcbiAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3dvcmtzXCIgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgIFdvcmtzXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcG9zdHNcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XHJcblxyXG5cclxuICAgICAgICAgIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3sgYmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIDxNZW51PlxyXG4gICAgICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGljb249ezxIYW1idXJnZXJJY29uIC8+fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+QWJvdXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3dvcmtzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+V29ya3M8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgdXNlQ29sb3JNb2RlLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IFN1bkljb24sIE1vb25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuXHJcbmNvbnN0IFRoZW1lVG9nZ2xlQnV0dG9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAga2V5PXt1c2VDb2xvck1vZGVWYWx1ZSgnbGlnaHQnLCAnZGFyaycpfVxyXG4gICAgICAgIGluaXRpYWw9e3sgeTogLTIwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XHJcbiAgICAgICAgZXhpdD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgdGhlbWVcIlxyXG4gICAgICAgICAgY29sb3JTY2hlbWU9e3VzZUNvbG9yTW9kZVZhbHVlKCdwdXJwbGUnLCAnb3JhbmdlJyl9XHJcbiAgICAgICAgICBpY29uPXt1c2VDb2xvck1vZGVWYWx1ZSg8TW9vbkljb24gLz4sIDxTdW5JY29uIC8+KX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNvbG9yTW9kZX1cclxuICAgICAgICA+PC9JY29uQnV0dG9uPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lVG9nZ2xlQnV0dG9uIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsIl90YXJnZXQiLCJjaGlsZHJlbiIsInByb3BzIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInVuZGVmaW5lZCIsIk5hdmJhciIsImJhY2tkcm9wRmlsdGVyIiwiYmFzZSIsIm1kIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlQ29sb3JNb2RlIiwiU3VuSWNvbiIsIk1vb25JY29uIiwidG9nZ2xlQ29sb3JNb2RlIiwiZGlzcGxheSIsInkiLCJvcGFjaXR5IiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9