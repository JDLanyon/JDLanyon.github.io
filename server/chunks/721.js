"use strict";
exports.id = 721;
exports.ids = [721];
exports.modules = {

/***/ 2721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(3082);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
;// CONCATENATED MODULE: ./utils/analytics.js

(__webpack_require__(5142).config)();
const initGA = ()=>{
    // https://gyazo.com/3101aeec0a80c2e637e8856449ddf071 Select these settings when you are setting up your analytics to get a tracking ID
    external_react_ga_default().initialize(process.env.GA_ENV);
};
const logPageView = ()=>{
    external_react_ga_default().set({
        page: window.location.pathname
    });
    external_react_ga_default().pageview(window.location.pathname);
};
const logEvent = (category = "", action = "")=>{
    if (category && action) {
        ReactGA.event({
            category,
            action
        });
    }
};
const logException = (description = "", fatal = false)=>{
    if (description) {
        ReactGA.exception({
            description,
            fatal
        });
    }
};

;// CONCATENATED MODULE: ./components/LayoutGA.tsx



class Layout extends (external_react_default()).Component {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: this.props.children
        });
    }
};


/***/ })

};
;