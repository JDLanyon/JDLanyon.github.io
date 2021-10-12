self["webpackHotUpdate_N_E"]("pages/invitation",{

/***/ "./src/components/Invitation/Layout.js":
/*!*********************************************!*\
  !*** ./src/components/Invitation/Layout.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Invitation_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Invitation/Footer */ "./src/components/Invitation/Footer.js");
/* harmony import */ var _Invitation_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Invitation/Header */ "./src/components/Invitation/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/components/Invitation/LayoutStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\GitHub\\JDLanyonWebsiteDevelopment\\src\\components\\Invitation\\Layout.js",
    _this = undefined;





var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invitation_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        position: 'absolute',
        zIndex: '1'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invitation_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        display: 'flex',
        left: '0',
        top: '0',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '0',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "Images/flowers 4.jpg",
        style: {
          flexShrink: '0',
          minWidth: '100%',
          minHeight: '100%',
          opacity: '0.5'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 8
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW52aXRhdGlvbi9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsInpJbmRleCIsImRpc3BsYXkiLCJsZWZ0IiwidG9wIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUNwQyxzQkFDRSw4REFBQyxvREFBRDtBQUFBLDRCQUNDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDO0FBQUssV0FBSyxFQUFFO0FBQUNDLGdCQUFRLEVBQUMsVUFBVjtBQUFzQkMsY0FBTSxFQUFDO0FBQTdCLE9BQVo7QUFBQSw4QkFDQztBQUFBLGtCQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQVFDO0FBQUssV0FBSyxFQUFFO0FBQUNHLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxZQUFJLEVBQUMsR0FBdEI7QUFBMkJDLFdBQUcsRUFBQyxHQUEvQjtBQUFvQ0osZ0JBQVEsRUFBQyxVQUE3QztBQUF5REssc0JBQWMsRUFBQyxRQUF4RTtBQUFrRkMsa0JBQVUsRUFBQyxRQUE3RjtBQUF1R0wsY0FBTSxFQUFDLEdBQTlHO0FBQW1ITSxnQkFBUSxFQUFDLFFBQTVIO0FBQXNJQyxhQUFLLEVBQUMsTUFBNUk7QUFBb0pDLGNBQU0sRUFBQztBQUEzSixPQUFaO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUMsc0JBQVQ7QUFBZ0MsYUFBSyxFQUFFO0FBQUNDLG9CQUFVLEVBQUMsR0FBWjtBQUFpQkMsa0JBQVEsRUFBQyxNQUExQjtBQUFrQ0MsbUJBQVMsRUFBQyxNQUE1QztBQUFvREMsaUJBQU8sRUFBQztBQUE1RDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FmTTtLQUFNZixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2ludml0YXRpb24uYTIyZjRlOGFhMmM1ZDEwY2U4YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vSW52aXRhdGlvbi9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9JbnZpdGF0aW9uL0hlYWRlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgIDxIZWFkZXIvPlxuICAgICB7LyogPG1haW4gc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6XCJ1cmwoJ0ltYWdlcy9mbG93ZXJzIDQuanBnJylcIiwgYmFja2dyb3VuZFNpemU6J2NvdmVyJywgcGFkZGluZzonMjRweCcsIGJhY2tncm91bmRCbGVuZE1vZGU6J2x1bWlub3NpdHknfX0+e2NoaWxkcmVufTwvbWFpbj4gICovfVxuICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJywgekluZGV4OicxJ319PlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj4gXG4gICAgICA8Rm9vdGVyLz5cbiAgICAgPC9kaXY+XG5cbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBsZWZ0OicwJywgdG9wOicwJywgcG9zaXRpb246J2Fic29sdXRlJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIHpJbmRleDonMCcsIG92ZXJmbG93OidoaWRkZW4nLCB3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fT5cbiAgICAgICA8aW1nIHNyYz0nSW1hZ2VzL2Zsb3dlcnMgNC5qcGcnIHN0eWxlPXt7ZmxleFNocmluazonMCcsIG1pbldpZHRoOicxMDAlJywgbWluSGVpZ2h0OicxMDAlJywgb3BhY2l0eTonMC41J319Lz5cbiAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=