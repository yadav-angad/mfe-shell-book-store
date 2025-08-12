"use strict";
(self["webpackChunkmfe_checkout"] = self["webpackChunkmfe_checkout"] || []).push([[988],{

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
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(999);
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sharedContext_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6074);
/* harmony import */ var _mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9161);
/* harmony import */ var sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3099);
/* harmony import */ var sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_6__);
var _s = $RefreshSig$();







const App = () => {
  _s();
  const {
    value,
    updateSharedState
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext)();
  const cart = sharedContext_store__WEBPACK_IMPORTED_MODULE_2__.store.getState().cart.map(item => ({
    ...item,
    quantity: item.quantity || 1 // default quantity = 1
  }));
  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(cart);
  const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
    sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_6__.EventBusService.fire('MESSAGE', {
      detail: {
        message: `Order placed for ${form.name}!\nTotal: $${total.toFixed(2)}`,
        type: 'success'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
    sx: {
      maxWidth: 800,
      margin: "20px auto",
      p: 2,
      bgcolor: "#F2F2f2"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
    maxWidth: "md",
    sx: {
      py: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    container: true,
    spacing: 2
  }, cartItems.map((book, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    item: true,
    xs: 12,
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Card, {
    sx: {
      display: "flex",
      alignItems: "center",
      p: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardMedia, {
    component: "img",
    sx: {
      width: 80,
      height: 120,
      objectFit: "cover",
      mr: 2
    },
    image: book.cover,
    alt: book.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CardContent, {
    sx: {
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h6"
  }, book.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, "by ", book?.authors?.join(", ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "subtitle1",
    color: "primary"
  }, "$", book.price.toFixed(2), " \xD7 ", book.quantity, " = $", (book.price * book.quantity).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    sx: {
      display: "flex",
      alignItems: "center",
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
    size: "small",
    onClick: () => updateQuantity(index, book.quantity - 1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Remove__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    sx: {
      mx: 1
    }
  }, book.quantity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
    size: "small",
    onClick: () => updateQuantity(index, book.quantity + 1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Divider, {
    sx: {
      my: 3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    variant: "h6",
    sx: {
      mb: 2
    }
  }, "Total: $", total.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
    component: "form",
    onSubmit: handleSubmit,
    sx: {
      display: "grid",
      gap: 2,
      p: 2,
      borderRadius: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
    name: "name",
    label: "Full Name",
    variant: "outlined",
    value: form.name,
    onChange: handleChange,
    required: true,
    sx: {
      bgcolor: 'background.paper'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "contained",
    color: "primary",
    type: "submit",
    size: "large"
  }, "Place Order"))));
};
_s(App, "xOJtfoaD128gsQwyn/V1iPyJd0A=", false, function () {
  return [sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext];
});
_c = App;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
var _c;
$RefreshReg$(_c, "App");

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
//# sourceMappingURL=988.js.map