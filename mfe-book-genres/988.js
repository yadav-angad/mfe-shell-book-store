"use strict";
(self["webpackChunkmfe_book_genres"] = self["webpackChunkmfe_book_genres"] || []).push([[988],{

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
/* harmony import */ var _VerticalTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6918);
var _s = $RefreshSig$();



const App = () => {
  _s();
  const [counter, setCounter] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    value,
    updateSharedState
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_VerticalTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null));
};
_s(App, "kz/l9nDuH+c4Pz9+fgfKNVLhnpw=", false, function () {
  return [sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext];
});
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

/***/ }),

/***/ 6918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ VerticalTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5285);
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7109);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9739);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_5__);
var _s = $RefreshSig$();
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const MfeBookList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(_c = () => __webpack_require__.e(/* import() */ 425).then(__webpack_require__.t.bind(__webpack_require__, 6425, 23)));

// Memoized TabPanel component
_c2 = MfeBookList;
const TabPanel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(_c3 = ({
  children,
  value,
  index
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`
  }, value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, children)));
});

// a11y props
_c4 = TabPanel;
const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`
});

// Genre list
const genres = ['ALL', 'Romance', 'Fantasy', 'Mystery', 'Thriller', 'Horror', 'Science Fiction', 'Historical Fiction', 'Young Adult', 'Literary Fiction', 'Biography', 'Action & Adventure'];
function VerticalTabs() {
  _s();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
  const {
    updateGenres
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_5__.useSharedContext)();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateGenres(genres[newValue]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      flexGrow: 1,
      bgcolor: 'background.paper',
      display: 'flex',
      height: 'calc(100vh - 64px)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    orientation: "vertical",
    variant: "scrollable",
    value: value,
    onChange: handleChange,
    "aria-label": "Vertical tabs example",
    sx: {
      borderRight: 1,
      borderColor: 'divider',
      backgroundColor: '#f5f5f5'
    }
  }, genres.map((genre, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({
    key: genre,
    label: genre
  }, a11yProps(index), {
    sx: {
      bgcolor: value === index ? '#e0e0e0' : 'transparent'
    }
  })))), genres.map((genre, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TabPanel, {
    key: genre,
    value: value,
    index: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Loading Book List...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MfeBookList, {
    genre: genre
  })))));
}
_s(VerticalTabs, "ZRwAuQ9HxaIW4gd8GSndkqMuO5c=", false, function () {
  return [sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_5__.useSharedContext];
});
_c5 = VerticalTabs;
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "MfeBookList$React.lazy");
$RefreshReg$(_c2, "MfeBookList");
$RefreshReg$(_c3, "TabPanel$React.memo");
$RefreshReg$(_c4, "TabPanel");
$RefreshReg$(_c5, "VerticalTabs");

/***/ })

}]);
//# sourceMappingURL=988.js.map