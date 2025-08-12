"use strict";
(self["webpackChunkmfe_header"] = self["webpackChunkmfe_header"] || []).push([[988],{

/***/ 1770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6733);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8091);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7963);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6358);
/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2918);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9739);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(999);
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sharedContext_store__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7776);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);












const MfeUser = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => __webpack_require__.e(/* import() */ 989).then(__webpack_require__.t.bind(__webpack_require__, 3989, 23)))));
const MfeCheckout = /*#__PURE__*/(/* unused pure expression or super */ null && (React.lazy(() => __webpack_require__.e(/* import() */ 985).then(__webpack_require__.t.bind(__webpack_require__, 5985, 23)))));
const basePath = window.location.origin.includes('localhost') ? "/" : `${window.location.origin}/mfe-shell-book-store`;
function Header() {
  const {
    sharedState
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_8__.useSharedContext)();
  //Initialize the store to access the cart state
  (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(state => state?.cart);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    position: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    size: "large",
    edge: "start",
    color: "inherit",
    "aria-label": "menu",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
    href: `${basePath}/host`,
    sx: linkStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    }
  }, 'Online Book Store'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading User...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
    href: `${basePath}/host/#/user`,
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `My Account`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      color: 'gray',
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, ` | `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
    href: `${basePath}/host/#/checkout`,
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `Help`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    variant: "h6",
    sx: {
      color: 'gray',
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, ` | `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Link, {
    href: "/#/checkout",
    underline: "none" // remove default underline
    ,
    sx: linkStyle
  }, `Cart (${sharedContext_store__WEBPACK_IMPORTED_MODULE_9__.store?.getState().cart?.length || 0})`))));
}
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

/***/ }),

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

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9739);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1770);



const App = () => {
  const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    value,
    updateSharedState
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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
//# sourceMappingURL=988.js.map