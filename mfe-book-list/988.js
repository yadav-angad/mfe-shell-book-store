"use strict";
(self["webpackChunkmfe_book_list"] = self["webpackChunkmfe_book_list"] || []).push([[988],{

/***/ 5988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3232);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9308);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7776);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9739);
/* harmony import */ var sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();






const App = () => {
  _s();
  const {
    bookList
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state?.bookList);
  const {
    genres
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_4__.useSharedContext)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const handleAddToCart = book => {
    console.log("Adding to cart:", book);
    dispatch({
      type: 'SET_CART',
      payload: book
    });
  };
  const filteredBooks = genres && genres !== 'ALL' ? bookList.filter(book => book.work.genre === genres) : bookList;
  const columns = [{
    field: 'cover',
    headerName: 'Cover',
    width: 80,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
      src: 'params.value',
      variant: "square",
      sx: {
        width: 70,
        height: 70
      }
    })
  }, {
    field: 'title',
    headerName: 'Title',
    width: 220
  }, {
    field: 'authors',
    headerName: 'Authors',
    width: 250,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      variant: "body2",
      sx: {
        wordWrap: 'break-word',
        textWrap: 'wrap',
        textAlign: 'left'
      }
    }, params.value.join(', '))
  }, {
    field: 'genre',
    headerName: 'Genre',
    width: 150
  }, {
    field: 'year',
    headerName: 'Published',
    width: 100,
    type: 'number'
  }, {
    field: 'price',
    headerName: 'Price ($)',
    width: 100,
    type: 'number'
  }, {
    field: 'action',
    headerName: 'Action',
    width: 160,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "contained",
      color: "primary",
      onClick: () => handleAddToCart(params.row),
      sx: {
        '&:hover': {
          bgcolor: 'secondary.main'
        }
      }
    }, "Add to Cart")
  }];
  const rows = filteredBooks?.map((book, index) => ({
    id: index,
    cover: book.work.cover_image,
    title: book.work.title,
    authors: book.work.author_names,
    genre: book.work.genre,
    year: book.work.first_publish_year,
    price: book.work.price
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      height: 'calc(100vh - 180px)',
      flexGrow: 1,
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "h6",
    gutterBottom: true
  }, `Book List (${bookList?.length} Found)`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_1__/* .DataGrid */ .z, {
    rows: rows,
    columns: columns.map(col => ({
      ...col,
      headerAlign: 'center'
    })),
    disableRowSelectionOnClick: true,
    pagination: false,
    sx: {
      '& .MuiDataGrid-cell': {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
      },
      '& .MuiDataGrid-row:hover': {
        backgroundColor: '#f5f5f5'
      }
    }
  })));
};
_s(App, "A3ArTvWMMjK9pQQczCWMh6QsOsE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector, sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_4__.useSharedContext, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

/***/ })

}]);
//# sourceMappingURL=988.js.map