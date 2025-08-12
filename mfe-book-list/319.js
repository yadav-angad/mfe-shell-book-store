"use strict";
(self["webpackChunkmfe_book_list"] = self["webpackChunkmfe_book_list"] || []).push([[319],{

/***/ 5319:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ../node_modules/@mui/x-data-grid/DataGrid/DataGrid.js + 263 modules
var DataGrid = __webpack_require__(9308);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.10.2 (singleton) (fallback: ../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(6863);
// EXTERNAL MODULE: consume shared module (default) react-redux@^9.2.0 (singleton) (fallback: ../node_modules/react-redux/dist/react-redux.mjs)
var react_redux_mjs_ = __webpack_require__(7776);
// EXTERNAL MODULE: remote sharedContext/useSharedContext
var useSharedContext = __webpack_require__(9739);
;// ./src/App.js






const App = () => {
  const {
    bookList
  } = (0,react_redux_mjs_.useSelector)(state => state?.bookList);
  const {
    genres
  } = (0,useSharedContext.useSharedContext)();
  const dispatch = (0,react_redux_mjs_.useDispatch)();
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
    renderCell: params => /*#__PURE__*/index_js_default().createElement(material_index_js_.Avatar, {
      src: params.value,
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
    renderCell: params => /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
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
    renderCell: params => /*#__PURE__*/index_js_default().createElement(material_index_js_.Button, {
      size: "small",
      variant: "outlined",
      color: "primary",
      onClick: () => handleAddToCart(params.row),
      sx: {
        '&:hover': {
          bgcolor: '#F2F2F2'
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
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    sx: {
      height: 'calc(100vh - 180px)',
      flexGrow: 1,
      padding: 2
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    gutterBottom: true
  }, `Book List (${bookList?.length} Found)`), /*#__PURE__*/index_js_default().createElement(DataGrid/* DataGrid */.z, {
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
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: consume shared module (default) react-dom@^18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3476);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// ./src/bootstrap.js



react_dom_index_js_default().render(/*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById('root'));

/***/ })

}]);
//# sourceMappingURL=319.js.map