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
        display: 'flex',
        left: '0',
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
        lineNumber: 13,
        columnNumber: 8
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
        lineNumber: 16,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Invitation_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW52aXRhdGlvbi9MYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwbGF5IiwibGVmdCIsInBvc2l0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiekluZGV4Iiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsImZsZXhTaHJpbmsiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFnQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUNwQyxzQkFDRSw4REFBQyxvREFBRDtBQUFBLDRCQUNDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUdDO0FBQUssV0FBSyxFQUFFO0FBQUNDLGVBQU8sRUFBQyxNQUFUO0FBQWlCQyxZQUFJLEVBQUMsR0FBdEI7QUFBMkJDLGdCQUFRLEVBQUMsVUFBcEM7QUFBZ0RDLHNCQUFjLEVBQUMsUUFBL0Q7QUFBeUVDLGtCQUFVLEVBQUMsUUFBcEY7QUFBOEZDLGNBQU0sRUFBQyxHQUFyRztBQUEwR0MsZ0JBQVEsRUFBQyxRQUFuSDtBQUE2SEMsYUFBSyxFQUFDLE1BQW5JO0FBQTJJQyxjQUFNLEVBQUM7QUFBbEosT0FBWjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFDLHNCQUFUO0FBQWdDLGFBQUssRUFBRTtBQUFDQyxvQkFBVSxFQUFDLEdBQVo7QUFBaUJDLGtCQUFRLEVBQUMsTUFBMUI7QUFBa0NDLG1CQUFTLEVBQUMsTUFBNUM7QUFBb0RDLGlCQUFPLEVBQUM7QUFBNUQ7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQU1DO0FBQUssV0FBSyxFQUFFO0FBQUNWLGdCQUFRLEVBQUMsVUFBVjtBQUFzQkcsY0FBTSxFQUFDO0FBQTdCLE9BQVo7QUFBQSw4QkFDQztBQUFBLGtCQUFPTjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVDLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBZk07S0FBTUQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbnZpdGF0aW9uLjIzYjM5YWEwOTVmZDVjYTllZGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0ludml0YXRpb24vRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSW52aXRhdGlvbi9IZWFkZXInO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9MYXlvdXRTdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICA8SGVhZGVyLz5cbiAgICAgey8qIDxtYWluIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOlwidXJsKCdJbWFnZXMvZmxvd2VycyA0LmpwZycpXCIsIGJhY2tncm91bmRTaXplOidjb3ZlcicsIHBhZGRpbmc6JzI0cHgnLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOidsdW1pbm9zaXR5J319PntjaGlsZHJlbn08L21haW4+ICAqL31cbiAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBsZWZ0OicwJywgcG9zaXRpb246J2Fic29sdXRlJywganVzdGlmeUNvbnRlbnQ6J2NlbnRlcicsIGFsaWduSXRlbXM6J2NlbnRlcicsIHpJbmRleDonMCcsIG92ZXJmbG93OidoaWRkZW4nLCB3aWR0aDonMTAwJScsIGhlaWdodDonMTAwJSd9fT5cbiAgICAgICA8aW1nIHNyYz0nSW1hZ2VzL2Zsb3dlcnMgNC5qcGcnIHN0eWxlPXt7ZmxleFNocmluazonMCcsIG1pbldpZHRoOicxMDAlJywgbWluSGVpZ2h0OicxMDAlJywgb3BhY2l0eTonMC41J319Lz5cbiAgICAgPC9kaXY+XG4gICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLCB6SW5kZXg6JzEnfX0+XG4gICAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPiBcbiAgICAgIDxGb290ZXIvPlxuICAgICA8L2Rpdj5cblxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9