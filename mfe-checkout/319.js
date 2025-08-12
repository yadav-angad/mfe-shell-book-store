"use strict";
(self["webpackChunkmfe_checkout"] = self["webpackChunkmfe_checkout"] || []).push([[319],{

/***/ 5319:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: remote sharedContext/useSharedContext
var useSharedContext = __webpack_require__(9739);
// EXTERNAL MODULE: remote sharedContext/store
var store = __webpack_require__(999);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.10.2 (singleton) (fallback: ../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(6863);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(6074);
// EXTERNAL MODULE: ../node_modules/@mui/icons-material/Remove.js
var Remove = __webpack_require__(9161);
// EXTERNAL MODULE: remote sharedContext/EventBusService
var EventBusService = __webpack_require__(3099);
;// ./src/App.js
var _s = $RefreshSig$();







const App = () => {
  _s();
  const {
    value,
    updateSharedState
  } = (0,useSharedContext.useSharedContext)();
  const cart = store.store.getState().cart.map(item => ({
    ...item,
    quantity: item.quantity || 1 // default quantity = 1
  }));
  const [cartItems, setCartItems] = (0,index_js_.useState)(cart);
  const [form, setForm] = (0,index_js_.useState)({
    name: "",
    email: "",
    address: ""
  });
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return; // prevent zero or negative
    const updated = [...cartItems];
    updated[index].quantity = newQty;
    setCartItems(updated);
  };
  const handleSubmit = e => {
    e.preventDefault();
    EventBusService.EventBusService.fire('MESSAGE', {
      detail: {
        message: `Order placed for ${form.name}!\nTotal: $${total.toFixed(2)}`,
        type: 'success'
      }
    });
  };
  return /*#__PURE__*/index_js_default().createElement(material_index_js_.Card, {
    sx: {
      maxWidth: 800,
      margin: "20px auto",
      p: 2,
      bgcolor: "#F2F2f2"
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Container, {
    maxWidth: "md",
    sx: {
      py: 4
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    container: true,
    spacing: 2
  }, cartItems.map((book, index) => /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12,
    key: index
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Card, {
    sx: {
      display: "flex",
      alignItems: "center",
      p: 1
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.CardMedia, {
    component: "img",
    sx: {
      width: 80,
      height: 120,
      objectFit: "cover",
      mr: 2
    },
    image: book.cover,
    alt: book.title
  }), /*#__PURE__*/index_js_default().createElement(material_index_js_.CardContent, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "h6"
  }, book.title), /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, "by ", book?.authors?.join(", ")), /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "subtitle1",
    color: "primary"
  }, "$", book.price.toFixed(2), " \xD7 ", book.quantity, " = $", (book.price * book.quantity).toFixed(2)), /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      mt: 1
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.IconButton, {
    size: "small",
    onClick: () => updateQuantity(index, book.quantity - 1)
  }, /*#__PURE__*/index_js_default().createElement(Remove/* default */.A, null)), /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    sx: {
      mx: 1
    }
  }, book.quantity), /*#__PURE__*/index_js_default().createElement(material_index_js_.IconButton, {
    size: "small",
    onClick: () => updateQuantity(index, book.quantity + 1)
  }, /*#__PURE__*/index_js_default().createElement(Add/* default */.A, null)))))))), /*#__PURE__*/index_js_default().createElement(material_index_js_.Divider, {
    sx: {
      my: 3
    }
  }), /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "h6",
    sx: {
      mb: 2
    }
  }, "Total: $", total.toFixed(2)), /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    component: "form",
    onSubmit: handleSubmit,
    sx: {
      display: "grid",
      gap: 2,
      p: 2,
      borderRadius: 1
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
    name: "name",
    label: "Full Name",
    variant: "outlined",
    value: form.name,
    onChange: handleChange,
    required: true,
    sx: {
      bgcolor: 'background.paper'
    }
  }), /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
    name: "email",
    label: "Email Address",
    type: "email",
    variant: "outlined",
    value: form.email,
    onChange: handleChange,
    required: true,
    sx: {
      bgcolor: 'background.paper'
    }
  }), /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
    name: "address",
    label: "Shipping Address",
    multiline: true,
    rows: 3,
    variant: "outlined",
    value: form.address,
    onChange: handleChange,
    required: true,
    sx: {
      bgcolor: 'background.paper'
    }
  }), /*#__PURE__*/index_js_default().createElement(material_index_js_.Button, {
    variant: "contained",
    color: "primary",
    type: "submit",
    size: "large"
  }, "Place Order"))));
};
_s(App, "xOJtfoaD128gsQwyn/V1iPyJd0A=", false, function () {
  return [useSharedContext.useSharedContext];
});
_c = App;
/* harmony default export */ const src_App = (App);
var _c;
$RefreshReg$(_c, "App");
// EXTERNAL MODULE: consume shared module (default) react-dom@^18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3476);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
;// ./src/bootstrap.js



react_dom_index_js_default().render(/*#__PURE__*/index_js_default().createElement(src_App, null), document.getElementById('root'));

/***/ }),

/***/ 6074:
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add');

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

/***/ }),

/***/ 9161:
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
  d: "M19 13H5v-2h14z"
}), 'Remove');

/***/ })

}]);
//# sourceMappingURL=319.js.map