"use strict";
(self["webpackChunkmfe_book_genres"] = self["webpackChunkmfe_book_genres"] || []).push([[851],{

/***/ 2851:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: remote sharedContext/useSharedContext
var useSharedContext = __webpack_require__(9739);
// EXTERNAL MODULE: ../node_modules/@mui/material/Tabs/Tabs.js + 27 modules
var Tabs = __webpack_require__(5285);
// EXTERNAL MODULE: ../node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(667);
// EXTERNAL MODULE: ../node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7109);
// EXTERNAL MODULE: ../node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(527);
;// ./src/VerticalTab.js
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






const MfeBookList = /*#__PURE__*/index_js_.lazy(() => __webpack_require__.e(/* import() */ 425).then(__webpack_require__.t.bind(__webpack_require__, 6425, 23)));

// Memoized TabPanel component
const TabPanel = /*#__PURE__*/index_js_.memo(({
  children,
  value,
  index
}) => {
  return /*#__PURE__*/index_js_.createElement("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `vertical-tabpanel-${index}`,
    "aria-labelledby": `vertical-tab-${index}`
  }, value === index && /*#__PURE__*/index_js_.createElement(Box/* default */.A, {
    sx: {
      p: 3
    }
  }, /*#__PURE__*/index_js_.createElement(Typography/* default */.A, null, children)));
});

// a11y props
const a11yProps = index => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`
});

// Genre list
const genres = ['ALL', 'Romance', 'Fantasy', 'Mystery', 'Thriller', 'Horror', 'Science Fiction', 'Historical Fiction', 'Young Adult', 'Literary Fiction', 'Biography', 'Action & Adventure'];
function VerticalTabs() {
  const [value, setValue] = index_js_.useState(0);
  const {
    updateGenres
  } = (0,useSharedContext.useSharedContext)();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    updateGenres(genres[newValue]);
  };
  return /*#__PURE__*/index_js_.createElement(Box/* default */.A, {
    sx: {
      flexGrow: 1,
      bgcolor: 'background.paper',
      display: 'flex',
      height: 'calc(100vh - 64px)'
    }
  }, /*#__PURE__*/index_js_.createElement(Tabs/* default */.A, {
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
  }, genres.map((genre, index) => /*#__PURE__*/index_js_.createElement(Tab/* default */.A, _extends({
    key: genre,
    label: genre
  }, a11yProps(index), {
    sx: {
      bgcolor: value === index ? '#e0e0e0' : 'transparent'
    }
  })))), genres.map((genre, index) => /*#__PURE__*/index_js_.createElement(TabPanel, {
    key: genre,
    value: value,
    index: index
  }, /*#__PURE__*/index_js_.createElement(index_js_.Suspense, {
    fallback: /*#__PURE__*/index_js_.createElement("div", null, "Loading Book List...")
  }, /*#__PURE__*/index_js_.createElement(MfeBookList, {
    genre: genre
  })))));
}
;// ./src/App.js



const App = () => {
  const [counter, setCounter] = (0,index_js_.useState)(0);
  const {
    value,
    updateSharedState
  } = (0,useSharedContext.useSharedContext)();
  return /*#__PURE__*/index_js_default().createElement("main", null, /*#__PURE__*/index_js_default().createElement(VerticalTabs, null));
};
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3476);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// ./src/bootstrap.js



react_dom_index_js_default().render(/*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=851.js.map