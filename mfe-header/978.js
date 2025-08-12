"use strict";
(self["webpackChunkmfe_header"] = self["webpackChunkmfe_header"] || []).push([[978],{

/***/ 2918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(6784);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(7044));
var _jsxRuntime = __webpack_require__(2540);
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), 'Home');

/***/ }),

/***/ 4978:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: remote sharedContext/useSharedContext
var useSharedContext = __webpack_require__(9739);
// EXTERNAL MODULE: ../node_modules/@mui/material/AppBar/AppBar.js
var AppBar = __webpack_require__(6733);
// EXTERNAL MODULE: ../node_modules/@mui/material/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(91);
// EXTERNAL MODULE: ../node_modules/@mui/material/Typography/Typography.js
var Typography = __webpack_require__(8091);
// EXTERNAL MODULE: ../node_modules/@mui/material/IconButton/IconButton.js
var IconButton = __webpack_require__(7963);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(6358);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Home.js
var Home = __webpack_require__(2918);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.10.2 (singleton) (fallback: ../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(6863);
// EXTERNAL MODULE: remote sharedContext/store
var store = __webpack_require__(999);
// EXTERNAL MODULE: consume shared module (default) react-redux@^9.2.0 (singleton) (fallback: ../node_modules/react-redux/dist/react-redux.mjs)
var react_redux_mjs_ = __webpack_require__(7776);
;// ./src/Header.js
var _s = $RefreshSig$();












const MfeUser = /*#__PURE__*/index_js_default().lazy(_c = () => __webpack_require__.e(/* import() */ 989).then(__webpack_require__.t.bind(__webpack_require__, 3989, 23)));
_c2 = MfeUser;
const MfeCheckout = /*#__PURE__*/index_js_default().lazy(_c3 = () => __webpack_require__.e(/* import() */ 985).then(__webpack_require__.t.bind(__webpack_require__, 5985, 23)));
_c4 = MfeCheckout;
function Header() {
  _s();
  const {
    sharedState
  } = (0,useSharedContext.useSharedContext)();
  //Initialize the store to access the cart state
  (0,react_redux_mjs_.useSelector)(state => state?.cart);
  return /*#__PURE__*/index_js_default().createElement(AppBar/* default */.A, {
    position: "static"
  }, /*#__PURE__*/index_js_default().createElement(Toolbar/* default */.A, null, /*#__PURE__*/index_js_default().createElement(IconButton/* default */.A, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_default().createElement(Menu/* default */.A, null)), /*#__PURE__*/index_js_default().createElement(IconButton/* default */.A, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Link, {
    href: "/",
    sx: linkStyle
  }, /*#__PURE__*/index_js_default().createElement(Home/* default */.A, null))), /*#__PURE__*/index_js_default().createElement(Typography/* default */.A, {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, 'Online Book Store'), /*#__PURE__*/index_js_default().createElement(index_js_.Suspense, {
    fallback: /*#__PURE__*/index_js_default().createElement("div", null, "Loading User...")
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Link, {
    href: "/#/user",
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `My Account`), /*#__PURE__*/index_js_default().createElement(Typography/* default */.A, {
    variant: "h6",
    sx: {
      color: 'gray',
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, ` | `), /*#__PURE__*/index_js_default().createElement(material_index_js_.Link, {
    href: "/#/checkout",
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `Help`), /*#__PURE__*/index_js_default().createElement(Typography/* default */.A, {
    variant: "h6",
    sx: {
      color: 'gray',
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, ` | `), /*#__PURE__*/index_js_default().createElement(material_index_js_.Link, {
    href: "/#/checkout",
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `Cart (${store.store?.getState().cart?.length || 0})`))));
}
_s(Header, "wu2nic0iJupTHgypCkL8wXDuGdk=", false, function () {
  return [useSharedContext.useSharedContext, react_redux_mjs_.useSelector];
});
_c5 = Header;
const linkStyle = {
  cursor: "pointer",
  color: "inherit",
  // inherit from parent or theme
  marginLeft: "10px",
  marginRight: "10px",
  fontSize: theme => theme.typography.h6.fontSize,
  fontWeight: theme => theme.typography.h6.fontWeight,
  lineHeight: theme => theme.typography.h6.lineHeight,
  "&:hover": {
    textDecoration: "underline"
  }
};
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "MfeUser$React.lazy");
$RefreshReg$(_c2, "MfeUser");
$RefreshReg$(_c3, "MfeCheckout$React.lazy");
$RefreshReg$(_c4, "MfeCheckout");
$RefreshReg$(_c5, "Header");
;// ./src/App.js
var App_s = $RefreshSig$();



const App = () => {
  App_s();
  const [counter, setCounter] = (0,index_js_.useState)(0);
  const {
    value,
    updateSharedState
  } = (0,useSharedContext.useSharedContext)();
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement(Header, null));
};
App_s(App, "kz/l9nDuH+c4Pz9+fgfKNVLhnpw=", false, function () {
  return [useSharedContext.useSharedContext];
});
App_c = App;
/* harmony default export */ const src_App = (App);
var App_c;
$RefreshReg$(App_c, "App");
// EXTERNAL MODULE: consume shared module (default) react-dom@^18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3476);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// ./src/bootstrap.js



react_dom_index_js_default().render(/*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById('root'));

/***/ }),

/***/ 6358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(6784);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(7044));
var _jsxRuntime = __webpack_require__(2540);
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), 'Menu');

/***/ }),

/***/ 7044:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


'use client';

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
}));
var _utils = __webpack_require__(6836);

/***/ })

}]);
//# sourceMappingURL=978.js.map