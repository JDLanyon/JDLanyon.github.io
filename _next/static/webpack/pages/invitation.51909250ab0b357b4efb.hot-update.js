self["webpackHotUpdate_N_E"]("pages/invitation",{

/***/ "./src/components/Invitation/Background.js":
/*!*************************************************!*\
  !*** ./src/components/Invitation/Background.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\GitHub\\JDLanyonWebsiteDevelopment\\src\\components\\Invitation\\Background.js",
    _this = undefined;

 // import { rose } from '../../../public/images/Continuous line.svg';

var RoseAnimation = function RoseAnimation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "images/Continuous line.svg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

_c = RoseAnimation;
/* harmony default export */ __webpack_exports__["default"] = (RoseAnimation);

var _c;

$RefreshReg$(_c, "RoseAnimation");

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

/***/ "./src/pages/invitation.js":
/*!*********************************!*\
  !*** ./src/pages/invitation.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Invitation_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Invitation/Hero */ "./src/components/Invitation/Hero.js");
/* harmony import */ var _components_Invitation_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Invitation/Background */ "./src/components/Invitation/Background.js");
/* harmony import */ var _components_Invitation_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Invitation/About */ "./src/components/Invitation/About.js");
/* harmony import */ var _components_Invitation_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Invitation/Layout */ "./src/components/Invitation/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\GitHub\\JDLanyonWebsiteDevelopment\\src\\pages\\invitation.js",
    _this = undefined;







var Invitation = function Invitation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invitation_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invitation_Hero__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RoseBG, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Invitation_About__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = Invitation;
/* harmony default export */ __webpack_exports__["default"] = (Invitation);

var _c;

$RefreshReg$(_c, "Invitation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW52aXRhdGlvbi9CYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW52aXRhdGlvbi5qcyJdLCJuYW1lcyI6WyJSb3NlQW5pbWF0aW9uIiwiSW52aXRhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsc0JBQ3BCO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURvQjtBQUFBLENBQXRCOztLQUFNQSxhO0FBTU4sK0RBQWVBLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsc0JBQ0UsOERBQUMsaUVBQUQ7QUFBQSw0QkFDRSw4REFBQyw2REFBRDtBQUFTLFVBQUksTUFBYjtBQUFBLDhCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLDhEQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0UsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7S0FBTUEsVTtBQVlOLCtEQUFlQSxVQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludml0YXRpb24uNTE5MDkyNTBhYjBiMzU3YjRlZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHJvc2UgfSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL0NvbnRpbnVvdXMgbGluZS5zdmcnO1xyXG5cclxuY29uc3QgUm9zZUFuaW1hdGlvbiA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvQ29udGludW91cyBsaW5lLnN2Z1wiLz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvc2VBbmltYXRpb247IiwiaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9JbnZpdGF0aW9uL0hlcm8nO1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuLi9jb21wb25lbnRzL0ludml0YXRpb24vQmFja2dyb3VuZCc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0ludml0YXRpb24vQWJvdXQnO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ludml0YXRpb24vTGF5b3V0JztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEludml0YXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxTZWN0aW9uIGdyaWQ+XHJcbiAgICAgICAgPEhlcm8vPlxyXG4gICAgICAgIDxSb3NlQkcvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDxBYm91dC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52aXRhdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==