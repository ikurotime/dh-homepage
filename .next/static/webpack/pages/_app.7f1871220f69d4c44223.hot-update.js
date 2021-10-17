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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {
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
                lineNumber: 88,
                columnNumber: 23
              }, _this),
              variant: "outline",
              "aria-label": "Options"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
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
                  lineNumber: 94,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/works",
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {
                  as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,
                  children: "Works"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZjE4NzEyMjBmNjlkNGM0NDIyMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFjQTtDQUVBOzs7O0FBRUEsSUFBTWdCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLElBQThDLFFBQTlDQSxJQUE4QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2hFLE1BQU1DLE1BQU0sR0FBR0osSUFBSSxLQUFLRCxJQUF4QjtBQUNBLE1BQU1NLGFBQWEsR0FBR1YsbUVBQWlCLENBQUMsU0FBRCxFQUFZLGdCQUFaLENBQXZDO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBVSxRQUFJLEVBQUVJLElBQWhCO0FBQXNCLFlBQVEsTUFBOUI7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUNFLE9BQUMsRUFBRSxDQURMO0FBRUUsUUFBRSxFQUFFSyxNQUFNLEdBQUcsV0FBSCxHQUFpQkUsU0FGN0I7QUFHRSxXQUFLLEVBQUVGLE1BQU0sR0FBRyxTQUFILEdBQWVDLGFBSDlCO0FBSUUsYUFBTyxFQUFFSjtBQUpYLE9BS01FLEtBTE47QUFBQSxnQkFPR0Q7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0dBQU1KO1VBRWtCSDs7O0tBRmxCRzs7QUFrQk4sSUFBTVMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQUosS0FBSyxFQUFJO0FBQUE7O0FBQ3RCLE1BQVFILElBQVIsR0FBaUJHLEtBQWpCLENBQVFILElBQVI7QUFFQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVEsRUFBQyxP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TUFBaEM7QUFBQSx1Q0FDRSw4REFBQyxzREFBRDtBQUFVLG9CQUFFLEVBQUVBLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0VELENBbkVEOztJQUFNcUI7VUFRSVo7OztNQVJKWTtBQXFFTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEJveCxcclxuICBMaW5rLFxyXG4gIFN0YWNrLFxyXG4gIEhlYWRpbmcsXHJcbiAgRmxleCxcclxuICBNZW51LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgSWNvbkJ1dHRvbixcclxuICB1c2VDb2xvck1vZGVWYWx1ZVxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xyXG5pbXBvcnQgVGhlbWVUb2dnbGVCdXR0b24gZnJvbSAnLi90aGVtZS10b2dnbGUtYnV0dG9uJ1xyXG4vL2ltcG9ydCB7IElvTG9nb0dpdGh1YiB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcclxuXHJcbmNvbnN0IExpbmtJdGVtID0gKHsgaHJlZiwgcGF0aCwgX3RhcmdldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBhY3RpdmUgPSBwYXRoID09PSBocmVmXHJcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxyXG4gICAgICA8TGlua1xyXG4gICAgICAgIHA9ezJ9XHJcbiAgICAgICAgYmc9e2FjdGl2ZSA/ICdncmFzc1RlYWwnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxyXG4gICAgICAgIF90YXJnZXQ9e190YXJnZXR9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoJyNmZmZmZmY0MCcsICcjMjAyMDIzODAnKX1cclxuICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJyB9fVxyXG4gICAgICB6SW5kZXg9ezF9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lclxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBwPXsyfVxyXG4gICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxyXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcclxuICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XHJcbiAgICAgICAgICA8SGVhZGluZyBhcz1cImgxXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz17J3RpZ2h0ZXInfT5cclxuICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgZGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBtZDogJ3JvdycgfX1cclxuICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19XHJcbiAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cclxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL3dvcmtzXCIgcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICAgIFdvcmtzXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvcG9zdHNcIiBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAgUG9zdHNcclxuICAgICAgICAgIDwvTGlua0l0ZW0+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuXHJcbiAgICAgICAgPEJveCBmbGV4PXsxfSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8VGhlbWVUb2dnbGVCdXR0b24vPlxyXG4gICAgICAgICAgPEJveCBtbD17Mn0gZGlzcGxheT17eyBiYXNlOiAnaW5saW5lLWJsb2NrJywgbWQ6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgPE1lbnU+XHJcbiAgICAgICAgICAgICAgPE1lbnVCdXR0b25cclxuICAgICAgICAgICAgICAgIGFzPXtJY29uQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEhhbWJ1cmdlckljb24gLz59XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5BYm91dDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvd29ya3NcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtMaW5rfT5Xb3JrczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGFtYnVyZ2VySWNvbiIsIlRoZW1lVG9nZ2xlQnV0dG9uIiwiTGlua0l0ZW0iLCJocmVmIiwicGF0aCIsIl90YXJnZXQiLCJjaGlsZHJlbiIsInByb3BzIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsInVuZGVmaW5lZCIsIk5hdmJhciIsImJhY2tkcm9wRmlsdGVyIiwiYmFzZSIsIm1kIl0sInNvdXJjZVJvb3QiOiIifQ==