"use strict";
(self["webpackChunkmfe_user"] = self["webpackChunkmfe_user"] || []).push([[319],{

/***/ 5319:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: remote sharedContext/useSharedContext
var useSharedContext = __webpack_require__(9739);
// EXTERNAL MODULE: consume shared module (default) @mui/material@^5.10.2 (singleton) (fallback: ../node_modules/@mui/material/index.js)
var material_index_js_ = __webpack_require__(6863);
// EXTERNAL MODULE: remote sharedContext/store
var store = __webpack_require__(999);
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
  const [formData, setFormData] = (0,index_js_.useState)(store.store.getState().user || {});
  const [errors, setErrors] = (0,index_js_.useState)({});
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
      EventBusService.EventBusService.fire('MESSAGE', {
        detail: {
          message: 'User information updated successfully',
          type: 'success'
        }
      });
    }
  };
  return /*#__PURE__*/index_js_default().createElement(material_index_js_.Card, {
    sx: {
      maxWidth: 800,
      margin: "20px auto",
      p: 1,
      bgcolor: "#F2F2f2"
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Container, {
    maxWidth: "md"
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    sx: {
      my: 4
    }
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mb: 3
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Avatar, {
    sx: {
      width: 80,
      height: 80,
      bgcolor: "primary.main",
      mb: 2
    }
  }, formData.firstName ? formData.firstName[0] : "U"), /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "h5"
  }, "Edit Profile")), /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    component: "form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.MenuItem, {
    value: "male"
  }, "Male"), /*#__PURE__*/index_js_default().createElement(material_index_js_.MenuItem, {
    value: "female"
  }, "Female"), /*#__PURE__*/index_js_default().createElement(material_index_js_.MenuItem, {
    value: "other"
  }, "Other"))), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Typography, {
    variant: "subtitle1",
    sx: {
      mt: 2,
      fontWeight: "bold"
    }
  }, "Change Password")), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  })), /*#__PURE__*/index_js_default().createElement(material_index_js_.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.TextField, {
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
  }))), /*#__PURE__*/index_js_default().createElement(material_index_js_.Box, {
    mt: 3,
    textAlign: "center"
  }, /*#__PURE__*/index_js_default().createElement(material_index_js_.Button, {
    type: "submit",
    variant: "contained",
    size: "large"
  }, "Save Changes"))))));
};
_s(App, "/jObnu0lrew8pNjASO0kRA8gsLA=", false, function () {
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

/***/ })

}]);
//# sourceMappingURL=319.js.map