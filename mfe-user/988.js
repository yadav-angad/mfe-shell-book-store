"use strict";
(self["webpackChunkmfe_user"] = self["webpackChunkmfe_user"] || []).push([[988],{

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6863);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(999);
/* harmony import */ var sharedContext_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sharedContext_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3099);
/* harmony import */ var sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_4__);





const App = () => {
  const {
    value,
    updateSharedState
  } = (0,sharedContext_useSharedContext__WEBPACK_IMPORTED_MODULE_1__.useSharedContext)();
  const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(sharedContext_store__WEBPACK_IMPORTED_MODULE_3__.store.getState().user || {});
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const validate = () => {
    let temp = {};
    temp.userName = formData.userName ? "" : "Username is required";
    temp.firstName = formData.firstName ? "" : "First name is required";
    temp.lastName = formData.lastName ? "" : "Last name is required";
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Email is not valid";
    temp.phone = formData.phone ? "" : "Phone number is required";
    temp.gender = formData.gender ? "" : "Please select gender";
    temp.address = formData.address ? "" : "Address is required";
    if (formData.currentPassword || formData.newPassword || formData.confirmPassword) {
      temp.currentPassword = formData.currentPassword ? "" : "Current password is required";
      temp.newPassword = formData.newPassword.length >= 6 ? "" : "New password must be at least 6 characters";
      temp.confirmPassword = formData.newPassword === formData.confirmPassword ? "" : "Passwords do not match";
    }
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      sharedContext_EventBusService__WEBPACK_IMPORTED_MODULE_4__.EventBusService.fire('MESSAGE', {
        detail: {
          message: 'User information updated successfully',
          type: 'success'
        }
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {
    sx: {
      maxWidth: 800,
      margin: "20px auto",
      p: 1,
      bgcolor: "#F2F2f2"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {
    maxWidth: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    sx: {
      my: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mb: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
    sx: {
      width: 80,
      height: 80,
      bgcolor: "primary.main",
      mb: 2
    }
  }, formData.firstName ? formData.firstName[0] : "U"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "h5"
  }, "Edit Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    component: "form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "userName",
    label: "Username",
    fullWidth: true,
    value: formData.userName,
    onChange: handleChange,
    error: !!errors.userName,
    helperText: errors.userName,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "firstName",
    label: "First Name",
    fullWidth: true,
    value: formData.firstName,
    onChange: handleChange,
    error: !!errors.firstName,
    helperText: errors.firstName,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "lastName",
    label: "Last Name",
    fullWidth: true,
    value: formData.lastName,
    onChange: handleChange,
    error: !!errors.lastName,
    helperText: errors.lastName,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "email",
    label: "Email",
    type: "email",
    fullWidth: true,
    value: formData.email,
    onChange: handleChange,
    error: !!errors.email,
    helperText: errors.email,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "phone",
    label: "Phone",
    type: "tel",
    fullWidth: true,
    value: formData.phone,
    onChange: handleChange,
    error: !!errors.phone,
    helperText: errors.phone,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    select: true,
    name: "gender",
    label: "Gender",
    fullWidth: true,
    value: formData.gender,
    onChange: handleChange,
    error: !!errors.gender,
    helperText: errors.gender,
    sx: {
      bgcolor: "background.paper"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    value: "male"
  }, "Male"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    value: "female"
  }, "Female"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    value: "other"
  }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "address",
    label: "Address",
    multiline: true,
    rows: 2,
    fullWidth: true,
    value: formData.address,
    onChange: handleChange,
    error: !!errors.address,
    helperText: errors.address,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "bio",
    label: "Bio",
    multiline: true,
    rows: 3,
    fullWidth: true,
    value: formData.bio,
    onChange: handleChange,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "subtitle1",
    sx: {
      mt: 2,
      fontWeight: "bold"
    }
  }, "Change Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "currentPassword",
    label: "Current Password",
    type: "password",
    fullWidth: true,
    value: formData.currentPassword,
    onChange: handleChange,
    error: !!errors.currentPassword,
    helperText: errors.currentPassword,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "newPassword",
    label: "New Password",
    type: "password",
    fullWidth: true,
    value: formData.newPassword,
    onChange: handleChange,
    error: !!errors.newPassword,
    helperText: errors.newPassword,
    sx: {
      bgcolor: "background.paper"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
    name: "confirmPassword",
    label: "Confirm New Password",
    type: "password",
    fullWidth: true,
    value: formData.confirmPassword,
    onChange: handleChange,
    error: !!errors.confirmPassword,
    helperText: errors.confirmPassword,
    sx: {
      bgcolor: "background.paper"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
    mt: 3,
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
    type: "submit",
    variant: "contained",
    size: "large"
  }, "Save Changes"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

}]);
//# sourceMappingURL=988.js.map