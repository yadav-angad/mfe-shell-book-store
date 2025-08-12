(self["webpackChunkmfe_book_list"] = self["webpackChunkmfe_book_list"] || []).push([[308],{

/***/ 147:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(564)["default"]);
function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (module.exports = _interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)(e, t);
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 362:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(6441);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 564:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2473:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var React = __webpack_require__(3232);
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  useState = React.useState,
  useEffect = React.useEffect,
  useLayoutEffect = React.useLayoutEffect,
  useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
  var value = getSnapshot(),
    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
    inst = _useState[0].inst,
    forceUpdate = _useState[1];
  useLayoutEffect(
    function () {
      inst.value = value;
      inst.getSnapshot = getSnapshot;
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
    },
    [subscribe, value, getSnapshot]
  );
  useEffect(
    function () {
      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      return subscribe(function () {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
      });
    },
    [subscribe]
  );
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
  return getSnapshot();
}
var shim =
  "undefined" === typeof window ||
  "undefined" === typeof window.document ||
  "undefined" === typeof window.document.createElement
    ? useSyncExternalStore$1
    : useSyncExternalStore$2;
exports.useSyncExternalStore =
  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;


/***/ }),

/***/ 2688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) // removed by dead control flow
{ var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(362)();
}


/***/ }),

/***/ 3676:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2473);
} else // removed by dead control flow
{}


/***/ }),

/***/ 3958:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireWildcard = (__webpack_require__(147)["default"]);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(3232));
var _default = exports.A = parseInt(React.version, 10);

/***/ }),

/***/ 6441:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 9308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ DataGrid)
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8102);
// EXTERNAL MODULE: consume shared module (default) react@^18.2.0 (singleton) (fallback: ../node_modules/react/index.js)
var index_js_ = __webpack_require__(3232);
var index_js_namespaceObject = /*#__PURE__*/__webpack_require__.t(index_js_, 2);
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(2688);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ../node_modules/@mui/x-internals/esm/reactMajor.js

/* harmony default export */ const reactMajor = (parseInt(index_js_.version, 10));
;// ../node_modules/@mui/x-internals/esm/forwardRef/forwardRef.js



// Compatibility shim that ensures stable props object for forwardRef components
// Fixes https://github.com/facebook/react/issues/31613
// We ensure that the ref is always present in the props object (even if that's not the case for older versions of React) to avoid the footgun of spreading props over the ref in the newer versions of React.
// Footgun: <Component ref={ref} {...props} /> will break past React 19, but the types will now warn us that we should use <Component {...props} ref={ref} /> instead.
const forwardRef = render => {
  if (reactMajor >= 19) {
    const Component = props => render(props, props.ref ?? null);
    Component.displayName = render.displayName ?? render.name;
    return Component;
  }
  return /*#__PURE__*/index_js_.forwardRef(render);
};
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(9257);
// EXTERNAL MODULE: ../node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(1750);
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 * @param {number} code
 */
function formatMuiErrorMessage(code, ...args) {
  const url = new URL(`https://mui.com/production-error/?code=${code}`);
  args.forEach(arg => url.searchParams.append('args[]', arg));
  return `Minified MUI error #${code}; visit ${url} for the full message.`;
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/capitalize/capitalize.js

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( false ? 0 : formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
/* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
   ---
   These rules are preventing the performance optimizations below.
 */

/**
 * Compose classes from multiple sources.
 *
 * @example
 * ```tsx
 * const slots = {
 *  root: ['root', 'primary'],
 *  label: ['label'],
 * };
 *
 * const getUtilityClass = (slot) => `MuiButton-${slot}`;
 *
 * const classes = {
 *   root: 'my-root-class',
 * };
 *
 * const output = composeClasses(slots, getUtilityClass, classes);
 * // {
 * //   root: 'MuiButton-root MuiButton-primary my-root-class',
 * //   label: 'MuiButton-label',
 * // }
 * ```
 *
 * @param slots a list of classes for each possible slot
 * @param getUtilityClass a function to resolve the class based on the slot name
 * @param classes the input classes from props
 * @returns the resolved classes for all slots
 */
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  for (const slotName in slots) {
    const slot = slots[slotName];
    let buffer = '';
    let start = true;
    for (let i = 0; i < slot.length; i += 1) {
      const value = slot[i];
      if (value) {
        buffer += (start === true ? '' : ' ') + getUtilityClass(value);
        start = false;
        if (classes && classes[value]) {
          buffer += ' ' + classes[value];
        }
      }
    }
    output[slotName] = buffer;
  }
  return output;
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
'use client';



/**
 * Merges refs into a single memoized callback ref or `null`.
 *
 * ```tsx
 * const rootRef = React.useRef<Instance>(null);
 * const refFork = useForkRef(rootRef, props.ref);
 *
 * return (
 *   <Root {...props} ref={refFork} />
 * );
 * ```
 *
 * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
 * @returns {React.RefCallback<Instance> | null} The new ref callback.
 */
function useForkRef(...refs) {
  const cleanupRef = index_js_.useRef(undefined);
  const refEffect = index_js_.useCallback(instance => {
    const cleanups = refs.map(ref => {
      if (ref == null) {
        return null;
      }
      if (typeof ref === 'function') {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === 'function' ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach(refCleanup => refCleanup?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
  return index_js_.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return value => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = undefined;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
;// ../node_modules/@mui/x-internals/esm/fastObjectShallowCompare/fastObjectShallowCompare.js
const is = Object.is;
function fastObjectShallowCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  let aLength = 0;
  let bLength = 0;

  /* eslint-disable guard-for-in */
  for (const key in a) {
    aLength += 1;
    if (!is(a[key], b[key])) {
      return false;
    }
    if (!(key in b)) {
      return false;
    }
  }

  /* eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */
  for (const _ in b) {
    bLength += 1;
  }
  return aLength === bLength;
}
;// ../node_modules/@mui/x-internals/esm/fastMemo/fastMemo.js


function fastMemo(component) {
  return /*#__PURE__*/index_js_.memo(component, fastObjectShallowCompare);
}
// EXTERNAL MODULE: ../node_modules/@mui/system/esm/colorManipulator.js
var colorManipulator = __webpack_require__(9195);
// EXTERNAL MODULE: ../node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(7308);
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
/* harmony default export */ const ClassNameGenerator_ClassNameGenerator = (ClassNameGenerator);
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_ClassNameGenerator.generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
;// ../node_modules/@mui/x-data-grid/constants/gridClasses.js

function getDataGridUtilityClass(slot) {
  return generateUtilityClass('MuiDataGrid', slot);
}
const gridClasses = generateUtilityClasses('MuiDataGrid', ['actionsCell', 'aggregationColumnHeader', 'aggregationColumnHeader--alignLeft', 'aggregationColumnHeader--alignCenter', 'aggregationColumnHeader--alignRight', 'aggregationColumnHeaderLabel', 'autoHeight', 'autosizing', 'booleanCell', 'cell--editable', 'cell--editing', 'cell--flex', 'cell--textCenter', 'cell--textLeft', 'cell--textRight', 'cell--rangeTop', 'cell--rangeBottom', 'cell--rangeLeft', 'cell--rangeRight', 'cell--pinnedLeft', 'cell--pinnedRight', 'cell--selectionMode', 'cell', 'cellCheckbox', 'cellEmpty', 'cellSkeleton', 'cellOffsetLeft', 'checkboxInput', 'columnHeader', 'columnHeader--alignCenter', 'columnHeader--alignLeft', 'columnHeader--alignRight', 'columnHeader--dragging', 'columnHeader--moving', 'columnHeader--numeric', 'columnHeader--sortable', 'columnHeader--sorted', 'columnHeader--filtered', 'columnHeader--pinnedLeft', 'columnHeader--pinnedRight', 'columnHeader--last', 'columnHeader--lastUnpinned', 'columnHeader--siblingFocused', 'columnHeaderCheckbox', 'columnHeaderDraggableContainer', 'columnHeaderTitle', 'columnHeaderTitleContainer', 'columnHeaderTitleContainerContent', 'columnHeader--filledGroup', 'columnHeader--emptyGroup', 'columnHeaders', 'columnSeparator--resizable', 'columnSeparator--resizing', 'columnSeparator--sideLeft', 'columnSeparator--sideRight', 'columnSeparator', 'columnsManagement', 'columnsManagementRow', 'columnsManagementHeader', 'columnsManagementSearchInput', 'columnsManagementFooter', 'container--top', 'container--bottom', 'detailPanel', 'detailPanels', 'detailPanelToggleCell', 'detailPanelToggleCell--expanded', 'footerCell', 'panel', 'panelHeader', 'panelWrapper', 'panelContent', 'panelFooter', 'paper', 'editBooleanCell', 'editInputCell', 'filler', 'filler--borderBottom', 'filler--pinnedLeft', 'filler--pinnedRight', 'filterForm', 'filterFormDeleteIcon', 'filterFormLogicOperatorInput', 'filterFormColumnInput', 'filterFormOperatorInput', 'filterFormValueInput', 'filterIcon', 'footerContainer', 'headerFilterRow', 'iconButtonContainer', 'iconSeparator', 'main', 'main--hasPinnedRight', 'main--hasSkeletonLoadingOverlay', 'menu', 'menuIcon', 'menuIconButton', 'menuOpen', 'menuList', 'overlay', 'overlayWrapper', 'overlayWrapperInner', 'root', 'root--densityStandard', 'root--densityComfortable', 'root--densityCompact', 'root--disableUserSelection', 'root--noToolbar', 'row', 'row--editable', 'row--editing', 'row--firstVisible', 'row--lastVisible', 'row--dragging', 'row--dynamicHeight', 'row--detailPanelExpanded', 'row--borderBottom', 'rowReorderCellPlaceholder', 'rowCount', 'rowReorderCellContainer', 'rowReorderCell', 'rowReorderCell--draggable', 'rowSkeleton', 'scrollArea--left', 'scrollArea--right', 'scrollArea--up', 'scrollArea--down', 'scrollArea', 'scrollbar', 'scrollbar--vertical', 'scrollbar--horizontal', 'scrollbarFiller', 'scrollbarFiller--header', 'scrollbarFiller--borderTop', 'scrollbarFiller--borderBottom', 'scrollbarFiller--pinnedRight', 'selectedRowCount', 'sortButton', 'sortIcon', 'toolbarContainer', 'toolbarFilterList', 'virtualScroller', 'virtualScroller--hasScrollX', 'virtualScrollerContent', 'virtualScrollerContent--overflowed', 'virtualScrollerRenderZone', 'pinnedColumns', 'withVerticalBorder', 'withBorderColor', 'cell--withRightBorder', 'cell--withLeftBorder', 'columnHeader--withRightBorder', 'columnHeader--withLeftBorder', 'treeDataGroupingCell', 'treeDataGroupingCellToggle', 'treeDataGroupingCellLoadingContainer', 'groupingCriteriaCell', 'groupingCriteriaCellToggle', 'groupingCriteriaCellLoadingContainer', 'pinnedRows', 'pinnedRows--top', 'pinnedRows--bottom', 'pinnedRowsRenderZone']);
// EXTERNAL MODULE: ../node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(3676);
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = index_js_.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js





function isOutputSelector(selector) {
  return selector.acceptsApiRef;
}
// TODO v8: Remove this function
function applySelector(apiRef, selector) {
  if (isOutputSelector(selector)) {
    return selector(apiRef);
  }
  return selector(apiRef.current.state);
}

// TODO v8: Rename this function to `applySelector`
function applySelectorV8(apiRef, selector, args, instanceId) {
  if (isOutputSelector(selector)) {
    return selector(apiRef, args);
  }
  return selector(apiRef.current.state, instanceId);
}
const defaultCompare = Object.is;
const objectShallowCompare = fastObjectShallowCompare;
const arrayShallowCompare = (a, b) => {
  if (a === b) {
    return true;
  }
  return a.length === b.length && a.every((v, i) => v === b[i]);
};
const useGridSelector_argsEqual = (prev, curr) => {
  let fn = Object.is;
  if (curr instanceof Array) {
    fn = arrayShallowCompare;
  } else if (curr instanceof Object) {
    fn = objectShallowCompare;
  }
  return fn(prev, curr);
};
const createRefs = () => ({
  state: null,
  equals: null,
  selector: null,
  args: undefined
});
const EMPTY = [];
const emptyGetSnapshot = () => null;

// TODO v8: Remove this function
const useGridSelector = (apiRef, selector, equals = defaultCompare) => {
  if (false) // removed by dead control flow
{}
  const refs = useLazyRef(createRefs);
  const didInit = refs.current.selector !== null;
  const [state, setState] = index_js_.useState(
  // We don't use an initialization function to avoid allocations
  didInit ? null : applySelector(apiRef, selector));
  refs.current.state = state;
  refs.current.equals = equals;
  refs.current.selector = selector;
  const subscribe = index_js_.useCallback(() => {
    if (refs.current.subscription) {
      return null;
    }
    refs.current.subscription = apiRef.current.store.subscribe(() => {
      const newState = applySelector(apiRef, refs.current.selector);
      if (!refs.current.equals(refs.current.state, newState)) {
        refs.current.state = newState;
        setState(newState);
      }
    });
    return null;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  EMPTY);
  const unsubscribe = index_js_.useCallback(() => {
    return () => {
      if (refs.current.subscription) {
        refs.current.subscription();
        refs.current.subscription = undefined;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, EMPTY);
  (0,shim.useSyncExternalStore)(unsubscribe, subscribe, emptyGetSnapshot);
  return state;
};

// TODO v8: Rename this function to `useGridSelector`
const useGridSelectorV8 = (apiRef, selector, args = undefined, equals = defaultCompare) => {
  if (false) // removed by dead control flow
{}
  const refs = useLazyRef(createRefs);
  const didInit = refs.current.selector !== null;
  const [state, setState] = index_js_.useState(
  // We don't use an initialization function to avoid allocations
  didInit ? null : applySelectorV8(apiRef, selector, args, apiRef.current.instanceId));
  refs.current.state = state;
  refs.current.equals = equals;
  refs.current.selector = selector;
  const prevArgs = refs.current.args;
  refs.current.args = args;
  if (didInit && !useGridSelector_argsEqual(prevArgs, args)) {
    const newState = applySelectorV8(apiRef, refs.current.selector, refs.current.args, apiRef.current.instanceId);
    if (!refs.current.equals(refs.current.state, newState)) {
      refs.current.state = newState;
      setState(newState);
    }
  }
  const subscribe = index_js_.useCallback(() => {
    if (refs.current.subscription) {
      return null;
    }
    refs.current.subscription = apiRef.current.store.subscribe(() => {
      const newState = applySelectorV8(apiRef, refs.current.selector, refs.current.args, apiRef.current.instanceId);
      if (!refs.current.equals(refs.current.state, newState)) {
        refs.current.state = newState;
        setState(newState);
      }
    });
    return null;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  EMPTY);
  const unsubscribe = index_js_.useCallback(() => {
    return () => {
      if (refs.current.subscription) {
        refs.current.subscription();
        refs.current.subscription = undefined;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, EMPTY);
  (0,shim.useSyncExternalStore)(unsubscribe, subscribe, emptyGetSnapshot);
  return state;
};
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridPrivateApiContext.js

const GridPrivateApiContext = /*#__PURE__*/index_js_.createContext(undefined);
if (false) // removed by dead control flow
{}
function useGridPrivateApiContext() {
  const privateApiRef = index_js_.useContext(GridPrivateApiContext);
  if (privateApiRef === undefined) {
    throw new Error(['MUI X: Could not find the Data Grid private context.', 'It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.', 'This can also happen if you are bundling multiple versions of the Data Grid.'].join('\n'));
  }
  return privateApiRef;
}
;// ../node_modules/@mui/x-data-grid/components/containers/GridRootStyles.js





function getBorderColor(theme) {
  if (theme.vars) {
    return theme.vars.palette.TableCell.border;
  }
  if (theme.palette.mode === 'light') {
    return (0,colorManipulator/* lighten */.a)((0,colorManipulator/* alpha */.X4)(theme.palette.divider, 1), 0.88);
  }
  return (0,colorManipulator/* darken */.e$)((0,colorManipulator/* alpha */.X4)(theme.palette.divider, 1), 0.68);
}
const columnSeparatorTargetSize = 10;
const columnSeparatorOffset = -5;
const focusOutlineWidth = 1;
const separatorIconDragStyles = {
  width: 3,
  rx: 1.5,
  x: 10.5
};

// Emotion thinks it knows better than us which selector we should use.
// https://github.com/emotion-js/emotion/issues/1105#issuecomment-1722524968
const ignoreSsrWarning = '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
const shouldShowBorderTopRightRadiusSelector = state => state.dimensions.hasScrollX && (!state.dimensions.hasScrollY || state.dimensions.scrollbarSize === 0);
const GridRootStyles = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => [
  // Root overrides
  styles.root, {
    [`&.${gridClasses.autoHeight}`]: styles.autoHeight
  }, {
    [`&.${gridClasses.autosizing}`]: styles.autosizing
  }, {
    [`&.${gridClasses['root--densityStandard']}`]: styles['root--densityStandard']
  }, {
    [`&.${gridClasses['root--densityComfortable']}`]: styles['root--densityComfortable']
  }, {
    [`&.${gridClasses['root--densityCompact']}`]: styles['root--densityCompact']
  }, {
    [`&.${gridClasses['root--disableUserSelection']}`]: styles['root--disableUserSelection']
  }, {
    [`&.${gridClasses['root--noToolbar']}`]: styles['root--noToolbar']
  }, {
    [`&.${gridClasses.withVerticalBorder}`]: styles.withVerticalBorder
  },
  // Child element overrides
  // - Only declare overrides here for class names that are not applied to `styled` components.
  // - For `styled` components, declare overrides in the component itself.
  {
    [`& .${gridClasses.actionsCell}`]: styles.actionsCell
  }, {
    [`& .${gridClasses.booleanCell}`]: styles.booleanCell
  }, {
    [`& .${gridClasses.cell}`]: styles.cell
  }, {
    [`& .${gridClasses['cell--editable']}`]: styles['cell--editable']
  }, {
    [`& .${gridClasses['cell--editing']}`]: styles['cell--editing']
  }, {
    [`& .${gridClasses['cell--flex']}`]: styles['cell--flex']
  }, {
    [`& .${gridClasses['cell--pinnedLeft']}`]: styles['cell--pinnedLeft']
  }, {
    [`& .${gridClasses['cell--pinnedRight']}`]: styles['cell--pinnedRight']
  }, {
    [`& .${gridClasses['cell--rangeBottom']}`]: styles['cell--rangeBottom']
  }, {
    [`& .${gridClasses['cell--rangeLeft']}`]: styles['cell--rangeLeft']
  }, {
    [`& .${gridClasses['cell--rangeRight']}`]: styles['cell--rangeRight']
  }, {
    [`& .${gridClasses['cell--rangeTop']}`]: styles['cell--rangeTop']
  }, {
    [`& .${gridClasses['cell--selectionMode']}`]: styles['cell--selectionMode']
  }, {
    [`& .${gridClasses['cell--textCenter']}`]: styles['cell--textCenter']
  }, {
    [`& .${gridClasses['cell--textLeft']}`]: styles['cell--textLeft']
  }, {
    [`& .${gridClasses['cell--textRight']}`]: styles['cell--textRight']
  }, {
    [`& .${gridClasses['cell--withLeftBorder']}`]: styles['cell--withLeftBorder']
  }, {
    [`& .${gridClasses['cell--withRightBorder']}`]: styles['cell--withRightBorder']
  }, {
    [`& .${gridClasses.cellCheckbox}`]: styles.cellCheckbox
  }, {
    [`& .${gridClasses.cellEmpty}`]: styles.cellEmpty
  }, {
    [`& .${gridClasses.cellOffsetLeft}`]: styles.cellOffsetLeft
  }, {
    [`& .${gridClasses.cellSkeleton}`]: styles.cellSkeleton
  }, {
    [`& .${gridClasses.checkboxInput}`]: styles.checkboxInput
  }, {
    [`& .${gridClasses.columnHeader}`]: styles.columnHeader
  }, {
    [`& .${gridClasses['columnHeader--alignCenter']}`]: styles['columnHeader--alignCenter']
  }, {
    [`& .${gridClasses['columnHeader--alignLeft']}`]: styles['columnHeader--alignLeft']
  }, {
    [`& .${gridClasses['columnHeader--alignRight']}`]: styles['columnHeader--alignRight']
  }, {
    [`& .${gridClasses['columnHeader--dragging']}`]: styles['columnHeader--dragging']
  }, {
    [`& .${gridClasses['columnHeader--emptyGroup']}`]: styles['columnHeader--emptyGroup']
  }, {
    [`& .${gridClasses['columnHeader--filledGroup']}`]: styles['columnHeader--filledGroup']
  }, {
    [`& .${gridClasses['columnHeader--filtered']}`]: styles['columnHeader--filtered']
  }, {
    [`& .${gridClasses['columnHeader--last']}`]: styles['columnHeader--last']
  }, {
    [`& .${gridClasses['columnHeader--lastUnpinned']}`]: styles['columnHeader--lastUnpinned']
  }, {
    [`& .${gridClasses['columnHeader--moving']}`]: styles['columnHeader--moving']
  }, {
    [`& .${gridClasses['columnHeader--numeric']}`]: styles['columnHeader--numeric']
  }, {
    [`& .${gridClasses['columnHeader--pinnedLeft']}`]: styles['columnHeader--pinnedLeft']
  }, {
    [`& .${gridClasses['columnHeader--pinnedRight']}`]: styles['columnHeader--pinnedRight']
  }, {
    [`& .${gridClasses['columnHeader--siblingFocused']}`]: styles['columnHeader--siblingFocused']
  }, {
    [`& .${gridClasses['columnHeader--sortable']}`]: styles['columnHeader--sortable']
  }, {
    [`& .${gridClasses['columnHeader--sorted']}`]: styles['columnHeader--sorted']
  }, {
    [`& .${gridClasses['columnHeader--withLeftBorder']}`]: styles['columnHeader--withLeftBorder']
  }, {
    [`& .${gridClasses['columnHeader--withRightBorder']}`]: styles['columnHeader--withRightBorder']
  }, {
    [`& .${gridClasses.columnHeaderCheckbox}`]: styles.columnHeaderCheckbox
  }, {
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: styles.columnHeaderDraggableContainer
  }, {
    [`& .${gridClasses.columnHeaderTitleContainer}`]: styles.columnHeaderTitleContainer
  }, {
    [`& .${gridClasses.columnHeaderTitleContainerContent}`]: styles.columnHeaderTitleContainerContent
  }, {
    [`& .${gridClasses.columnSeparator}`]: styles.columnSeparator
  }, {
    [`& .${gridClasses['columnSeparator--resizable']}`]: styles['columnSeparator--resizable']
  }, {
    [`& .${gridClasses['columnSeparator--resizing']}`]: styles['columnSeparator--resizing']
  }, {
    [`& .${gridClasses['columnSeparator--sideLeft']}`]: styles['columnSeparator--sideLeft']
  }, {
    [`& .${gridClasses['columnSeparator--sideRight']}`]: styles['columnSeparator--sideRight']
  }, {
    [`& .${gridClasses['container--bottom']}`]: styles['container--bottom']
  }, {
    [`& .${gridClasses['container--top']}`]: styles['container--top']
  }, {
    [`& .${gridClasses.detailPanelToggleCell}`]: styles.detailPanelToggleCell
  }, {
    [`& .${gridClasses['detailPanelToggleCell--expanded']}`]: styles['detailPanelToggleCell--expanded']
  }, {
    [`& .${gridClasses.editBooleanCell}`]: styles.editBooleanCell
  }, {
    [`& .${gridClasses.filterIcon}`]: styles.filterIcon
  }, {
    [`& .${gridClasses['filler--borderBottom']}`]: styles['filler--borderBottom']
  }, {
    [`& .${gridClasses['filler--pinnedLeft']}`]: styles['filler--pinnedLeft']
  }, {
    [`& .${gridClasses['filler--pinnedRight']}`]: styles['filler--pinnedRight']
  }, {
    [`& .${gridClasses.groupingCriteriaCell}`]: styles.groupingCriteriaCell
  }, {
    [`& .${gridClasses.groupingCriteriaCellLoadingContainer}`]: styles.groupingCriteriaCellLoadingContainer
  }, {
    [`& .${gridClasses.groupingCriteriaCellToggle}`]: styles.groupingCriteriaCellToggle
  }, {
    [`& .${gridClasses.headerFilterRow}`]: styles.headerFilterRow
  }, {
    [`& .${gridClasses.iconSeparator}`]: styles.iconSeparator
  }, {
    [`& .${gridClasses.menuIcon}`]: styles.menuIcon
  }, {
    [`& .${gridClasses.menuIconButton}`]: styles.menuIconButton
  }, {
    [`& .${gridClasses.menuList}`]: styles.menuList
  }, {
    [`& .${gridClasses.menuOpen}`]: styles.menuOpen
  }, {
    [`& .${gridClasses.overlayWrapperInner}`]: styles.overlayWrapperInner
  }, {
    [`& .${gridClasses.pinnedRows}`]: styles.pinnedRows
  }, {
    [`& .${gridClasses['pinnedRows--bottom']}`]: styles['pinnedRows--bottom']
  }, {
    [`& .${gridClasses['pinnedRows--top']}`]: styles['pinnedRows--top']
  }, {
    [`& .${gridClasses.row}`]: styles.row
  }, {
    [`& .${gridClasses['row--borderBottom']}`]: styles['row--borderBottom']
  }, {
    [`& .${gridClasses['row--detailPanelExpanded']}`]: styles['row--detailPanelExpanded']
  }, {
    [`& .${gridClasses['row--dragging']}`]: styles['row--dragging']
  }, {
    [`& .${gridClasses['row--dynamicHeight']}`]: styles['row--dynamicHeight']
  }, {
    [`& .${gridClasses['row--editable']}`]: styles['row--editable']
  }, {
    [`& .${gridClasses['row--editing']}`]: styles['row--editing']
  }, {
    [`& .${gridClasses['row--firstVisible']}`]: styles['row--firstVisible']
  }, {
    [`& .${gridClasses['row--lastVisible']}`]: styles['row--lastVisible']
  }, {
    [`& .${gridClasses.rowReorderCell}`]: styles.rowReorderCell
  }, {
    [`& .${gridClasses['rowReorderCell--draggable']}`]: styles['rowReorderCell--draggable']
  }, {
    [`& .${gridClasses.rowReorderCellContainer}`]: styles.rowReorderCellContainer
  }, {
    [`& .${gridClasses.rowReorderCellPlaceholder}`]: styles.rowReorderCellPlaceholder
  }, {
    [`& .${gridClasses.rowSkeleton}`]: styles.rowSkeleton
  }, {
    [`& .${gridClasses.scrollbar}`]: styles.scrollbar
  }, {
    [`& .${gridClasses['scrollbar--horizontal']}`]: styles['scrollbar--horizontal']
  }, {
    [`& .${gridClasses['scrollbar--vertical']}`]: styles['scrollbar--vertical']
  }, {
    [`& .${gridClasses.scrollbarFiller}`]: styles.scrollbarFiller
  }, {
    [`& .${gridClasses['scrollbarFiller--borderBottom']}`]: styles['scrollbarFiller--borderBottom']
  }, {
    [`& .${gridClasses['scrollbarFiller--borderTop']}`]: styles['scrollbarFiller--borderTop']
  }, {
    [`& .${gridClasses['scrollbarFiller--header']}`]: styles['scrollbarFiller--header']
  }, {
    [`& .${gridClasses['scrollbarFiller--pinnedRight']}`]: styles['scrollbarFiller--pinnedRight']
  }, {
    [`& .${gridClasses.sortIcon}`]: styles.sortIcon
  }, {
    [`& .${gridClasses.treeDataGroupingCell}`]: styles.treeDataGroupingCell
  }, {
    [`& .${gridClasses.treeDataGroupingCellLoadingContainer}`]: styles.treeDataGroupingCellLoadingContainer
  }, {
    [`& .${gridClasses.treeDataGroupingCellToggle}`]: styles.treeDataGroupingCellToggle
  }, {
    [`& .${gridClasses.withBorderColor}`]: styles.withBorderColor
  }]
})(({
  theme: t
}) => {
  const apiRef = useGridPrivateApiContext();
  const shouldShowBorderTopRightRadius = useGridSelector(apiRef, shouldShowBorderTopRightRadiusSelector);
  const borderColor = getBorderColor(t);
  const radius = t.shape.borderRadius;
  const containerBackground = t.vars ? t.vars.palette.background.default : t.mixins.MuiDataGrid?.containerBackground ?? t.palette.background.default;
  const pinnedBackground = t.mixins.MuiDataGrid?.pinnedBackground ?? containerBackground;
  const overlayBackground = t.vars ? `rgba(${t.vars.palette.background.defaultChannel} / ${t.vars.palette.action.disabledOpacity})` : (0,colorManipulator/* alpha */.X4)(t.palette.background.default, t.palette.action.disabledOpacity);
  const hoverOpacity = (t.vars || t).palette.action.hoverOpacity;
  const hoverColor = (t.vars || t).palette.action.hover;
  const selectedOpacity = (t.vars || t).palette.action.selectedOpacity;
  const selectedHoverOpacity = t.vars ? `calc(${hoverOpacity} + ${selectedOpacity})` // TODO: Improve type
  : hoverOpacity + selectedOpacity;
  const selectedBackground = t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${selectedOpacity})` : (0,colorManipulator/* alpha */.X4)(t.palette.primary.main, selectedOpacity);
  const selectedHoverBackground = t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${selectedHoverOpacity})` : (0,colorManipulator/* alpha */.X4)(t.palette.primary.main, selectedHoverOpacity);
  const blendFn = t.vars ? blendCssVars : blend;
  const getPinnedBackgroundStyles = backgroundColor => ({
    [`& .${gridClasses['cell--pinnedLeft']}, & .${gridClasses['cell--pinnedRight']}`]: {
      backgroundColor,
      '&.Mui-selected': {
        backgroundColor: blendFn(backgroundColor, selectedBackground, selectedOpacity),
        '&:hover': {
          backgroundColor: blendFn(backgroundColor, selectedBackground, selectedHoverOpacity)
        }
      }
    }
  });
  const pinnedBackgroundColor = blendFn(pinnedBackground, hoverColor, hoverOpacity);
  const pinnedHoverStyles = getPinnedBackgroundStyles(pinnedBackgroundColor);
  const pinnedSelectedBackgroundColor = blendFn(pinnedBackground, selectedBackground, selectedOpacity);
  const pinnedSelectedStyles = getPinnedBackgroundStyles(pinnedSelectedBackgroundColor);
  const pinnedSelectedHoverBackgroundColor = blendFn(pinnedBackground, selectedHoverBackground, selectedHoverOpacity);
  const pinnedSelectedHoverStyles = getPinnedBackgroundStyles(pinnedSelectedHoverBackgroundColor);
  const selectedStyles = {
    backgroundColor: selectedBackground,
    '&:hover': {
      backgroundColor: selectedHoverBackground,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: selectedBackground
      }
    }
  };
  const gridStyle = (0,esm_extends/* default */.A)({
    '--unstable_DataGrid-radius': typeof radius === 'number' ? `${radius}px` : radius,
    '--unstable_DataGrid-headWeight': t.typography.fontWeightMedium,
    '--unstable_DataGrid-overlayBackground': overlayBackground,
    '--DataGrid-containerBackground': containerBackground,
    '--DataGrid-pinnedBackground': pinnedBackground,
    '--DataGrid-rowBorderColor': borderColor,
    '--DataGrid-cellOffsetMultiplier': 2,
    '--DataGrid-width': '0px',
    '--DataGrid-hasScrollX': '0',
    '--DataGrid-hasScrollY': '0',
    '--DataGrid-scrollbarSize': '10px',
    '--DataGrid-rowWidth': '0px',
    '--DataGrid-columnsTotalWidth': '0px',
    '--DataGrid-leftPinnedWidth': '0px',
    '--DataGrid-rightPinnedWidth': '0px',
    '--DataGrid-headerHeight': '0px',
    '--DataGrid-headersTotalHeight': '0px',
    '--DataGrid-topContainerHeight': '0px',
    '--DataGrid-bottomContainerHeight': '0px',
    flex: 1,
    boxSizing: 'border-box',
    position: 'relative',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor,
    borderRadius: 'var(--unstable_DataGrid-radius)',
    color: (t.vars || t).palette.text.primary
  }, t.typography.body2, {
    outline: 'none',
    height: '100%',
    display: 'flex',
    minWidth: 0,
    // See https://github.com/mui/mui-x/issues/8547
    minHeight: 0,
    flexDirection: 'column',
    overflow: 'hidden',
    overflowAnchor: 'none',
    // Keep the same scrolling position
    transform: 'translate(0, 0)',
    // Create a stacking context to keep scrollbars from showing on top

    [`.${gridClasses.main} > *:first-child${ignoreSsrWarning}`]: {
      borderTopLeftRadius: 'var(--unstable_DataGrid-radius)',
      borderTopRightRadius: 'var(--unstable_DataGrid-radius)'
    },
    [`&.${gridClasses.autoHeight}`]: {
      height: 'auto'
    },
    [`&.${gridClasses.autosizing}`]: {
      [`& .${gridClasses.columnHeaderTitleContainerContent} > *`]: {
        overflow: 'visible !important'
      },
      '@media (hover: hover)': {
        [`& .${gridClasses.menuIcon}`]: {
          width: '0 !important',
          visibility: 'hidden !important'
        }
      },
      [`& .${gridClasses.cell}`]: {
        overflow: 'visible !important',
        whiteSpace: 'nowrap',
        minWidth: 'max-content !important',
        maxWidth: 'max-content !important'
      },
      [`& .${gridClasses.groupingCriteriaCell}`]: {
        width: 'unset'
      },
      [`& .${gridClasses.treeDataGroupingCell}`]: {
        width: 'unset'
      }
    },
    [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
      WebkitTapHighlightColor: 'transparent',
      padding: '0 10px',
      boxSizing: 'border-box'
    },
    [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]: {
      outline: `solid ${t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / 0.5)` : (0,colorManipulator/* alpha */.X4)(t.palette.primary.main, 0.5)} ${focusOutlineWidth}px`,
      outlineOffset: focusOutlineWidth * -1
    },
    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.cell}:focus`]: {
      outline: `solid ${t.palette.primary.main} ${focusOutlineWidth}px`,
      outlineOffset: focusOutlineWidth * -1
    },
    // Hide the column separator when:
    // - the column is focused and has an outline
    // - the next column is focused and has an outline
    // - the column has a left or right border
    // - the next column is pinned right and has a left border
    [`& .${gridClasses.columnHeader}:focus,
      & .${gridClasses['columnHeader--withLeftBorder']},
      & .${gridClasses['columnHeader--withRightBorder']},
      & .${gridClasses['columnHeader--siblingFocused']},
      & .${gridClasses['virtualScroller--hasScrollX']} .${gridClasses['columnHeader--lastUnpinned']},
      & .${gridClasses['virtualScroller--hasScrollX']} .${gridClasses['columnHeader--last']}
      `]: {
      [`& .${gridClasses.columnSeparator}`]: {
        opacity: 0
      },
      // Show resizable separators at all times on touch devices
      '@media (hover: none)': {
        [`& .${gridClasses['columnSeparator--resizable']}`]: {
          opacity: 1
        }
      },
      [`& .${gridClasses['columnSeparator--resizable']}:hover`]: {
        opacity: 1
      }
    },
    [`&.${gridClasses['root--noToolbar']} [aria-rowindex="1"] [aria-colindex="1"]`]: {
      borderTopLeftRadius: 'calc(var(--unstable_DataGrid-radius) - 1px)'
    },
    [`&.${gridClasses['root--noToolbar']} [aria-rowindex="1"] .${gridClasses['columnHeader--last']}`]: {
      borderTopRightRadius: shouldShowBorderTopRightRadius ? 'calc(var(--unstable_DataGrid-radius) - 1px)' : undefined
    },
    [`& .${gridClasses.columnHeaderCheckbox}, & .${gridClasses.cellCheckbox}`]: {
      padding: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    [`& .${gridClasses.columnHeader}`]: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    [`& .${gridClasses['virtualScroller--hasScrollX']} .${gridClasses['columnHeader--last']}`]: {
      overflow: 'hidden'
    },
    [`& .${gridClasses['columnHeader--sorted']} .${gridClasses.iconButtonContainer}, & .${gridClasses['columnHeader--filtered']} .${gridClasses.iconButtonContainer}`]: {
      visibility: 'visible',
      width: 'auto'
    },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses['columnHeader--sorted']}) .${gridClasses.sortButton}`]: {
      opacity: 0,
      transition: t.transitions.create(['opacity'], {
        duration: t.transitions.duration.shorter
      })
    },
    [`& .${gridClasses.columnHeaderTitleContainer}`]: {
      display: 'flex',
      alignItems: 'center',
      gap: t.spacing(0.25),
      minWidth: 0,
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    [`& .${gridClasses.columnHeaderTitleContainerContent}`]: {
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    },
    [`& .${gridClasses['columnHeader--filledGroup']} .${gridClasses.columnHeaderTitleContainer}`]: {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      boxSizing: 'border-box'
    },
    [`& .${gridClasses.sortIcon}, & .${gridClasses.filterIcon}`]: {
      fontSize: 'inherit'
    },
    [`& .${gridClasses['columnHeader--sortable']}`]: {
      cursor: 'pointer'
    },
    [`& .${gridClasses['columnHeader--alignCenter']} .${gridClasses.columnHeaderTitleContainer}`]: {
      justifyContent: 'center'
    },
    [`& .${gridClasses['columnHeader--alignRight']} .${gridClasses.columnHeaderDraggableContainer}, & .${gridClasses['columnHeader--alignRight']} .${gridClasses.columnHeaderTitleContainer}`]: {
      flexDirection: 'row-reverse'
    },
    [`& .${gridClasses['columnHeader--alignCenter']} .${gridClasses.menuIcon}`]: {
      marginLeft: 'auto'
    },
    [`& .${gridClasses['columnHeader--alignRight']} .${gridClasses.menuIcon}`]: {
      marginRight: 'auto',
      marginLeft: -5
    },
    [`& .${gridClasses['columnHeader--moving']}`]: {
      backgroundColor: (t.vars || t).palette.action.hover
    },
    [`& .${gridClasses['columnHeader--pinnedLeft']}, & .${gridClasses['columnHeader--pinnedRight']}`]: {
      position: 'sticky',
      zIndex: 40,
      // Should be above the column separator
      background: 'var(--DataGrid-pinnedBackground)'
    },
    [`& .${gridClasses.columnSeparator}`]: {
      position: 'absolute',
      overflow: 'hidden',
      zIndex: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: columnSeparatorTargetSize,
      color: borderColor
    },
    [`& .${gridClasses.columnHeaders}`]: {
      width: 'var(--DataGrid-rowWidth)'
    },
    '@media (hover: hover)': {
      [`& .${gridClasses.columnHeader}:hover`]: {
        [`& .${gridClasses.menuIcon}`]: {
          width: 'auto',
          visibility: 'visible'
        },
        [`& .${gridClasses.iconButtonContainer}`]: {
          visibility: 'visible',
          width: 'auto'
        }
      },
      [`& .${gridClasses.columnHeader}:not(.${gridClasses['columnHeader--sorted']}):hover .${gridClasses.sortButton}`]: {
        opacity: 0.5
      }
    },
    '@media (hover: none)': {
      [`& .${gridClasses.columnHeader} .${gridClasses.menuIcon}`]: {
        width: 'auto',
        visibility: 'visible'
      },
      [`& .${gridClasses.columnHeader}:focus,
        & .${gridClasses['columnHeader--siblingFocused']}`]: {
        [`.${gridClasses['columnSeparator--resizable']}`]: {
          color: (t.vars || t).palette.primary.main
        }
      }
    },
    [`& .${gridClasses['columnSeparator--sideLeft']}`]: {
      left: columnSeparatorOffset
    },
    [`& .${gridClasses['columnSeparator--sideRight']}`]: {
      right: columnSeparatorOffset
    },
    [`& .${gridClasses['columnHeader--withRightBorder']} .${gridClasses['columnSeparator--sideLeft']}`]: {
      left: columnSeparatorOffset - 0.5
    },
    [`& .${gridClasses['columnHeader--withRightBorder']} .${gridClasses['columnSeparator--sideRight']}`]: {
      right: columnSeparatorOffset - 0.5
    },
    [`& .${gridClasses['columnSeparator--resizable']}`]: {
      cursor: 'col-resize',
      touchAction: 'none',
      [`&.${gridClasses['columnSeparator--resizing']}`]: {
        color: (t.vars || t).palette.primary.main
      },
      // Always appear as draggable on touch devices
      '@media (hover: none)': {
        [`& .${gridClasses.iconSeparator} rect`]: separatorIconDragStyles
      },
      '@media (hover: hover)': {
        '&:hover': {
          color: (t.vars || t).palette.primary.main,
          [`& .${gridClasses.iconSeparator} rect`]: separatorIconDragStyles
        }
      },
      '& svg': {
        pointerEvents: 'none'
      }
    },
    [`& .${gridClasses.iconSeparator}`]: {
      color: 'inherit',
      transition: t.transitions.create(['color', 'width'], {
        duration: t.transitions.duration.shortest
      })
    },
    [`& .${gridClasses.menuIcon}`]: {
      width: 0,
      visibility: 'hidden',
      fontSize: 20,
      marginRight: -5,
      display: 'flex',
      alignItems: 'center'
    },
    [`.${gridClasses.menuOpen}`]: {
      visibility: 'visible',
      width: 'auto'
    },
    [`& .${gridClasses.headerFilterRow}`]: {
      [`& .${gridClasses.columnHeader}`]: {
        boxSizing: 'border-box',
        borderBottom: '1px solid var(--DataGrid-rowBorderColor)'
      }
    },
    /* Bottom border of the top-container */
    [`& .${gridClasses['row--borderBottom']} .${gridClasses.columnHeader},
      & .${gridClasses['row--borderBottom']} .${gridClasses.filler},
      & .${gridClasses['row--borderBottom']} .${gridClasses.scrollbarFiller}`]: {
      borderBottom: `1px solid var(--DataGrid-rowBorderColor)`
    },
    [`& .${gridClasses['row--borderBottom']} .${gridClasses.cell}`]: {
      borderBottom: `1px solid var(--rowBorderColor)`
    },
    /* Row styles */
    [`.${gridClasses.row}`]: {
      display: 'flex',
      width: 'var(--DataGrid-rowWidth)',
      breakInside: 'avoid',
      // Avoid the row to be broken in two different print pages.

      '--rowBorderColor': 'var(--DataGrid-rowBorderColor)',
      [`&.${gridClasses['row--firstVisible']}`]: {
        '--rowBorderColor': 'transparent'
      },
      '&:hover': {
        backgroundColor: (t.vars || t).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      [`&.${gridClasses.rowSkeleton}:hover`]: {
        backgroundColor: 'transparent'
      },
      '&.Mui-selected': selectedStyles
    },
    [`& .${gridClasses['container--top']}, & .${gridClasses['container--bottom']}`]: {
      '[role=row]': {
        background: 'var(--DataGrid-containerBackground)'
      }
    },
    /* Cell styles */
    [`& .${gridClasses.cell}`]: {
      flex: '0 0 auto',
      height: 'var(--height)',
      width: 'var(--width)',
      lineHeight: 'calc(var(--height) - 1px)',
      // -1px for the border

      boxSizing: 'border-box',
      borderTop: `1px solid var(--rowBorderColor)`,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      '&.Mui-selected': selectedStyles
    },
    [`& .${gridClasses['virtualScrollerContent--overflowed']} .${gridClasses['row--lastVisible']} .${gridClasses.cell}`]: {
      borderTopColor: 'transparent'
    },
    [`& .${gridClasses['pinnedRows--top']} :first-of-type`]: {
      [`& .${gridClasses.cell}, .${gridClasses.scrollbarFiller}`]: {
        borderTop: 'none'
      }
    },
    [`&.${gridClasses['root--disableUserSelection']}`]: {
      userSelect: 'none'
    },
    [`& .${gridClasses['row--dynamicHeight']} > .${gridClasses.cell}`]: {
      whiteSpace: 'initial',
      lineHeight: 'inherit'
    },
    [`& .${gridClasses.cellEmpty}`]: {
      flex: 1,
      padding: 0,
      height: 'unset'
    },
    [`& .${gridClasses.cell}.${gridClasses['cell--selectionMode']}`]: {
      cursor: 'default'
    },
    [`& .${gridClasses.cell}.${gridClasses['cell--editing']}`]: {
      padding: 1,
      display: 'flex',
      boxShadow: t.shadows[2],
      backgroundColor: (t.vars || t).palette.background.paper,
      '&:focus-within': {
        outline: `${focusOutlineWidth}px solid ${(t.vars || t).palette.primary.main}`,
        outlineOffset: focusOutlineWidth * -1
      }
    },
    [`& .${gridClasses['row--editing']}`]: {
      boxShadow: t.shadows[2]
    },
    [`& .${gridClasses['row--editing']} .${gridClasses.cell}`]: {
      boxShadow: t.shadows[0],
      backgroundColor: (t.vars || t).palette.background.paper
    },
    [`& .${gridClasses.editBooleanCell}`]: {
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    [`& .${gridClasses.booleanCell}[data-value="true"]`]: {
      color: (t.vars || t).palette.text.secondary
    },
    [`& .${gridClasses.booleanCell}[data-value="false"]`]: {
      color: (t.vars || t).palette.text.disabled
    },
    [`& .${gridClasses.actionsCell}`]: {
      display: 'inline-flex',
      alignItems: 'center',
      gridGap: t.spacing(1)
    },
    [`& .${gridClasses.rowReorderCell}`]: {
      display: 'inline-flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    [`& .${gridClasses['rowReorderCell--draggable']}`]: {
      cursor: 'move',
      opacity: 1
    },
    [`& .${gridClasses.rowReorderCellContainer}`]: {
      padding: 0,
      display: 'flex',
      alignItems: 'stretch'
    },
    [`.${gridClasses.withBorderColor}`]: {
      borderColor
    },
    [`& .${gridClasses['cell--withLeftBorder']}, & .${gridClasses['columnHeader--withLeftBorder']}`]: {
      borderLeftColor: 'var(--DataGrid-rowBorderColor)',
      borderLeftWidth: '1px',
      borderLeftStyle: 'solid'
    },
    [`& .${gridClasses['cell--withRightBorder']}, & .${gridClasses['columnHeader--withRightBorder']}`]: {
      borderRightColor: 'var(--DataGrid-rowBorderColor)',
      borderRightWidth: '1px',
      borderRightStyle: 'solid'
    },
    [`& .${gridClasses['cell--flex']}`]: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 'inherit'
    },
    [`& .${gridClasses['cell--textLeft']}`]: {
      textAlign: 'left',
      justifyContent: 'flex-start'
    },
    [`& .${gridClasses['cell--textRight']}`]: {
      textAlign: 'right',
      justifyContent: 'flex-end'
    },
    [`& .${gridClasses['cell--textCenter']}`]: {
      textAlign: 'center',
      justifyContent: 'center'
    },
    [`& .${gridClasses['cell--pinnedLeft']}, & .${gridClasses['cell--pinnedRight']}`]: {
      position: 'sticky',
      zIndex: 30,
      background: 'var(--DataGrid-pinnedBackground)',
      '&.Mui-selected': {
        backgroundColor: pinnedSelectedBackgroundColor
      }
    },
    [`& .${gridClasses.virtualScrollerContent} .${gridClasses.row}`]: {
      '&:hover': pinnedHoverStyles,
      '&.Mui-selected': pinnedSelectedStyles,
      '&.Mui-selected:hover': pinnedSelectedHoverStyles
    },
    [`& .${gridClasses.cellOffsetLeft}`]: {
      flex: '0 0 auto',
      display: 'inline-block'
    },
    [`& .${gridClasses.cellSkeleton}`]: {
      flex: '0 0 auto',
      height: '100%',
      display: 'inline-flex',
      alignItems: 'center'
    },
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
      display: 'none'
    },
    [`& .${gridClasses['columnHeader--dragging']}, & .${gridClasses['row--dragging']}`]: {
      background: (t.vars || t).palette.background.paper,
      padding: '0 12px',
      borderRadius: 'var(--unstable_DataGrid-radius)',
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    [`& .${gridClasses['row--dragging']}`]: {
      background: (t.vars || t).palette.background.paper,
      padding: '0 12px',
      borderRadius: 'var(--unstable_DataGrid-radius)',
      opacity: (t.vars || t).palette.action.disabledOpacity,
      [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
        display: 'flex'
      }
    },
    [`& .${gridClasses.treeDataGroupingCell}`]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    [`& .${gridClasses.treeDataGroupingCellToggle}`]: {
      flex: '0 0 28px',
      alignSelf: 'stretch',
      marginRight: t.spacing(2)
    },
    [`& .${gridClasses.treeDataGroupingCellLoadingContainer}, .${gridClasses.groupingCriteriaCellLoadingContainer}`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    [`& .${gridClasses.groupingCriteriaCell}`]: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    [`& .${gridClasses.groupingCriteriaCellToggle}`]: {
      flex: '0 0 28px',
      alignSelf: 'stretch',
      marginRight: t.spacing(2)
    },
    /* ScrollbarFiller styles */
    [`.${gridClasses.scrollbarFiller}`]: {
      minWidth: 'calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))',
      alignSelf: 'stretch',
      [`&.${gridClasses['scrollbarFiller--borderTop']}`]: {
        borderTop: '1px solid var(--DataGrid-rowBorderColor)'
      },
      [`&.${gridClasses['scrollbarFiller--borderBottom']}`]: {
        borderBottom: '1px solid var(--DataGrid-rowBorderColor)'
      },
      [`&.${gridClasses['scrollbarFiller--pinnedRight']}`]: {
        backgroundColor: 'var(--DataGrid-pinnedBackground)',
        position: 'sticky',
        right: 0
      }
    },
    [`& .${gridClasses.filler}`]: {
      flex: '1 0 auto'
    },
    [`& .${gridClasses['filler--borderBottom']}`]: {
      borderBottom: '1px solid var(--DataGrid-rowBorderColor)'
    },
    /* Hide grid rows, row filler, and vertical scrollbar when skeleton overlay is visible */
    [`& .${gridClasses['main--hasSkeletonLoadingOverlay']}`]: {
      [`& .${gridClasses.virtualScrollerContent}`]: {
        // We use visibility hidden so that the virtual scroller content retains its height.
        // Position fixed is used to remove the virtual scroller content from the flow.
        // https://github.com/mui/mui-x/issues/14061
        position: 'fixed',
        visibility: 'hidden'
      },
      [`& .${gridClasses['scrollbar--vertical']}, & .${gridClasses.pinnedRows}, & .${gridClasses.virtualScroller} > .${gridClasses.filler}`]: {
        display: 'none'
      }
    }
  });
  return gridStyle;
});

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 */
function blend(background, overlay, opacity, gamma = 1) {
  const f = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = (0,colorManipulator/* decomposeColor */.rP)(background);
  const overlayColor = (0,colorManipulator/* decomposeColor */.rP)(overlay);
  const rgb = [f(backgroundColor.values[0], overlayColor.values[0]), f(backgroundColor.values[1], overlayColor.values[1]), f(backgroundColor.values[2], overlayColor.values[2])];
  return (0,colorManipulator/* recomposeColor */.X0)({
    type: 'rgb',
    values: rgb
  });
}
const removeOpacity = color => `rgb(from ${color} r g b / 1)`;
function blendCssVars(background, overlay, opacity) {
  return `color-mix(in srgb,${background}, ${removeOpacity(overlay)} calc(${opacity} * 100%))`;
}
;// ../node_modules/@mui/x-data-grid/context/GridRootPropsContext.js
'use client';


const GridRootPropsContext = /*#__PURE__*/index_js_.createContext(undefined);
if (false) // removed by dead control flow
{}

;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js


const useGridRootProps = () => {
  const contextValue = index_js_.useContext(GridRootPropsContext);
  if (!contextValue) {
    throw new Error('MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.');
  }
  return contextValue;
};
;// ../node_modules/reselect/dist/reselect.mjs
// src/devModeChecks/identityFunctionCheck.ts
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult) => {
  if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
    let isInputSameAsOutput = false;
    try {
      const emptyObject = {};
      if (resultFunc(emptyObject) === emptyObject)
        isInputSameAsOutput = true;
    } catch {
    }
    if (isInputSameAsOutput) {
      let stack = void 0;
      try {
        throw new Error();
      } catch (e) {
        ;
        ({ stack } = e);
      }
      console.warn(
        "The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.",
        { stack }
      );
    }
  }
};

// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs) => {
  const { memoize, memoizeOptions } = options;
  const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
  const createAnEmptyObject = memoize(() => ({}), ...memoizeOptions);
  const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
  if (!areInputSelectorResultsEqual) {
    let stack = void 0;
    try {
      throw new Error();
    } catch (e) {
      ;
      ({ stack } = e);
    }
    console.warn(
      "An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`",
      {
        arguments: inputSelectorArgs,
        firstInputs: inputSelectorResults,
        secondInputs: inputSelectorResultsCopy,
        stack
      }
    );
  }
};

// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks) => {
  Object.assign(globalDevModeChecks, devModeChecks);
};

// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
  if (typeof func !== "function") {
    throw new TypeError(errorMessage);
  }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
  if (typeof object !== "object") {
    throw new TypeError(errorMessage);
  }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
  if (!array.every((item) => typeof item === "function")) {
    const itemTypes = array.map(
      (item) => typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item
    ).join(", ");
    throw new TypeError(`${errorMessage}[${itemTypes}]`);
  }
}
var ensureIsArray = (item) => {
  return Array.isArray(item) ? item : [item];
};
function getDependencies(createSelectorArgs) {
  const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
  assertIsArrayOfFunctions(
    dependencies,
    `createSelector expects all input-selectors to be functions, but received the following types: `
  );
  return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
  const inputSelectorResults = [];
  const { length } = dependencies;
  for (let i = 0; i < length; i++) {
    inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
  }
  return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks) => {
  const { identityFunctionCheck, inputStabilityCheck } = {
    ...globalDevModeChecks,
    ...devModeChecks
  };
  return {
    identityFunctionCheck: {
      shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
      run: runIdentityFunctionCheck
    },
    inputStabilityCheck: {
      shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
      run: runInputStabilityCheck
    }
  };
};

// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
  revision = $REVISION;
  _value;
  _lastValue;
  _isEqual = tripleEq;
  constructor(initialValue, isEqual = tripleEq) {
    this._value = this._lastValue = initialValue;
    this._isEqual = isEqual;
  }
  // Whenever a storage value is read, it'll add itself to the current tracker if
  // one exists, entangling its state with that cache.
  get value() {
    CURRENT_TRACKER?.add(this);
    return this._value;
  }
  // Whenever a storage value is updated, we bump the global revision clock,
  // assign the revision for this storage to the new value, _and_ we schedule a
  // rerender. This is important, and it's what makes autotracking  _pull_
  // based. We don't actively tell the caches which depend on the storage that
  // anything has happened. Instead, we recompute the caches when needed.
  set value(newValue) {
    if (this.value === newValue)
      return;
    this._value = newValue;
    this.revision = ++$REVISION;
  }
};
function tripleEq(a, b) {
  return a === b;
}
var TrackingCache = class {
  _cachedValue;
  _cachedRevision = -1;
  _deps = [];
  hits = 0;
  fn;
  constructor(fn) {
    this.fn = fn;
  }
  clear() {
    this._cachedValue = void 0;
    this._cachedRevision = -1;
    this._deps = [];
    this.hits = 0;
  }
  get value() {
    if (this.revision > this._cachedRevision) {
      const { fn } = this;
      const currentTracker = /* @__PURE__ */ new Set();
      const prevTracker = CURRENT_TRACKER;
      CURRENT_TRACKER = currentTracker;
      this._cachedValue = fn();
      CURRENT_TRACKER = prevTracker;
      this.hits++;
      this._deps = Array.from(currentTracker);
      this._cachedRevision = this.revision;
    }
    CURRENT_TRACKER?.add(this);
    return this._cachedValue;
  }
  get revision() {
    return Math.max(...this._deps.map((d) => d.revision), 0);
  }
};
function getValue(cell) {
  if (!(cell instanceof Cell)) {
    console.warn("Not a valid cell! ", cell);
  }
  return cell.value;
}
function setValue(storage, value) {
  if (!(storage instanceof Cell)) {
    throw new TypeError(
      "setValue must be passed a tracked store created with `createStorage`."
    );
  }
  storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
  return new Cell(initialValue, isEqual);
}
function createCache(fn) {
  assertIsFunction(
    fn,
    "the first parameter to `createCache` must be a function"
  );
  return new TrackingCache(fn);
}

// src/autotrackMemoize/tracking.ts
var neverEq = (a, b) => false;
function createTag() {
  return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
  setValue(tag, value);
}
var consumeCollection = (node) => {
  let tag = node.collectionTag;
  if (tag === null) {
    tag = node.collectionTag = createTag();
  }
  getValue(tag);
};
var dirtyCollection = (node) => {
  const tag = node.collectionTag;
  if (tag !== null) {
    dirtyTag(tag, null);
  }
};

// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy(this, objectProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var objectProxyHandler = {
  get(node, key) {
    function calculateResult() {
      const { value } = node;
      const childValue = Reflect.get(value, key);
      if (typeof key === "symbol") {
        return childValue;
      }
      if (key in proto) {
        return childValue;
      }
      if (typeof childValue === "object" && childValue !== null) {
        let childNode = node.children[key];
        if (childNode === void 0) {
          childNode = node.children[key] = createNode(childValue);
        }
        if (childNode.tag) {
          getValue(childNode.tag);
        }
        return childNode.proxy;
      } else {
        let tag = node.tags[key];
        if (tag === void 0) {
          tag = node.tags[key] = createTag();
          tag.value = childValue;
        }
        getValue(tag);
        return childValue;
      }
    }
    const res = calculateResult();
    return res;
  },
  ownKeys(node) {
    consumeCollection(node);
    return Reflect.ownKeys(node.value);
  },
  getOwnPropertyDescriptor(node, prop) {
    return Reflect.getOwnPropertyDescriptor(node.value, prop);
  },
  has(node, prop) {
    return Reflect.has(node.value, prop);
  }
};
var ArrayTreeNode = class {
  constructor(value) {
    this.value = value;
    this.value = value;
    this.tag.value = value;
  }
  proxy = new Proxy([this], arrayProxyHandler);
  tag = createTag();
  tags = {};
  children = {};
  collectionTag = null;
  id = nextId++;
};
var arrayProxyHandler = {
  get([node], key) {
    if (key === "length") {
      consumeCollection(node);
    }
    return objectProxyHandler.get(node, key);
  },
  ownKeys([node]) {
    return objectProxyHandler.ownKeys(node);
  },
  getOwnPropertyDescriptor([node], prop) {
    return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
  },
  has([node], prop) {
    return objectProxyHandler.has(node, prop);
  }
};
function createNode(value) {
  if (Array.isArray(value)) {
    return new ArrayTreeNode(value);
  }
  return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
  const { value, tags, children } = node;
  node.value = newValue;
  if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
    dirtyCollection(node);
  } else {
    if (value !== newValue) {
      let oldKeysSize = 0;
      let newKeysSize = 0;
      let anyKeysAdded = false;
      for (const _key in value) {
        oldKeysSize++;
      }
      for (const key in newValue) {
        newKeysSize++;
        if (!(key in value)) {
          anyKeysAdded = true;
          break;
        }
      }
      const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
      if (isDifferent) {
        dirtyCollection(node);
      }
    }
  }
  for (const key in tags) {
    const childValue = value[key];
    const newChildValue = newValue[key];
    if (childValue !== newChildValue) {
      dirtyCollection(node);
      dirtyTag(tags[key], newChildValue);
    }
    if (typeof newChildValue === "object" && newChildValue !== null) {
      delete tags[key];
    }
  }
  for (const key in children) {
    const childNode = children[key];
    const newChildValue = newValue[key];
    const childValue = childNode.value;
    if (childValue === newChildValue) {
      continue;
    } else if (typeof newChildValue === "object" && newChildValue !== null) {
      updateNode(childNode, newChildValue);
    } else {
      deleteNode(childNode);
      delete children[key];
    }
  }
}
function deleteNode(node) {
  if (node.tag) {
    dirtyTag(node.tag, null);
  }
  dirtyCollection(node);
  for (const key in node.tags) {
    dirtyTag(node.tags[key], null);
  }
  for (const key in node.children) {
    deleteNode(node.children[key]);
  }
}

// src/lruMemoize.ts
function createSingletonCache(equals) {
  let entry;
  return {
    get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put(key, value) {
      entry = { key, value };
    },
    getEntries() {
      return entry ? [entry] : [];
    },
    clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  let entries = [];
  function get(key) {
    const cacheIndex = entries.findIndex((entry) => equals(key, entry.key));
    if (cacheIndex > -1) {
      const entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({ key, value });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return { get, put, getEntries, clear };
}
var referenceEqualityCheck = (a, b) => a === b;
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    const { length } = prev;
    for (let i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function lruMemoize(func, equalityCheckOrOptions) {
  const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : { equalityCheck: equalityCheckOrOptions };
  const {
    equalityCheck = referenceEqualityCheck,
    maxSize = 1,
    resultEqualityCheck
  } = providedOptions;
  const comparator = createCacheKeyComparator(equalityCheck);
  let resultsCount = 0;
  const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    let value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const entries = cache.getEntries();
        const matchingEntry = entries.find(
          (entry) => resultEqualityCheck(entry.value, value)
        );
        if (matchingEntry) {
          value = matchingEntry.value;
          resultsCount !== 0 && resultsCount--;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = () => {
    cache.clear();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
  const node = createNode(
    []
  );
  let lastArgs = null;
  const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
  const cache = createCache(() => {
    const res = func.apply(null, node.proxy);
    return res;
  });
  function memoized() {
    if (!shallowEqual(lastArgs, arguments)) {
      updateNode(node, arguments);
      lastArgs = arguments;
    }
    return cache.value;
  }
  memoized.clearCache = () => {
    return cache.clear();
  };
  return memoized;
}

// src/weakMapMemoize.ts
var StrongRef = class {
  constructor(value) {
    this.value = value;
  }
  deref() {
    return this.value;
  }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
  return {
    s: UNTERMINATED,
    v: void 0,
    o: null,
    p: null
  };
}
function weakMapMemoize(func, options = {}) {
  let fnNode = createCacheNode();
  const { resultEqualityCheck } = options;
  let lastResult;
  let resultsCount = 0;
  function memoized() {
    let cacheNode = fnNode;
    const { length } = arguments;
    for (let i = 0, l = length; i < l; i++) {
      const arg = arguments[i];
      if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
        let objectCache = cacheNode.o;
        if (objectCache === null) {
          cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
        }
        const objectNode = objectCache.get(arg);
        if (objectNode === void 0) {
          cacheNode = createCacheNode();
          objectCache.set(arg, cacheNode);
        } else {
          cacheNode = objectNode;
        }
      } else {
        let primitiveCache = cacheNode.p;
        if (primitiveCache === null) {
          cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
        }
        const primitiveNode = primitiveCache.get(arg);
        if (primitiveNode === void 0) {
          cacheNode = createCacheNode();
          primitiveCache.set(arg, cacheNode);
        } else {
          cacheNode = primitiveNode;
        }
      }
    }
    const terminatedNode = cacheNode;
    let result;
    if (cacheNode.s === TERMINATED) {
      result = cacheNode.v;
    } else {
      result = func.apply(null, arguments);
      resultsCount++;
      if (resultEqualityCheck) {
        const lastResultValue = lastResult?.deref?.() ?? lastResult;
        if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
          result = lastResultValue;
          resultsCount !== 0 && resultsCount--;
        }
        const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
        lastResult = needsWeakRef ? new Ref(result) : result;
      }
    }
    terminatedNode.s = TERMINATED;
    terminatedNode.v = result;
    return result;
  }
  memoized.clearCache = () => {
    fnNode = createCacheNode();
    memoized.resetResultsCount();
  };
  memoized.resultsCount = () => resultsCount;
  memoized.resetResultsCount = () => {
    resultsCount = 0;
  };
  return memoized;
}

// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
  const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
    memoize: memoizeOrOptions,
    memoizeOptions: memoizeOptionsFromArgs
  } : memoizeOrOptions;
  const createSelector2 = (...createSelectorArgs) => {
    let recomputations = 0;
    let dependencyRecomputations = 0;
    let lastResult;
    let directlyPassedOptions = {};
    let resultFunc = createSelectorArgs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = createSelectorArgs.pop();
    }
    assertIsFunction(
      resultFunc,
      `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`
    );
    const combinedOptions = {
      ...createSelectorCreatorOptions,
      ...directlyPassedOptions
    };
    const {
      memoize,
      memoizeOptions = [],
      argsMemoize = weakMapMemoize,
      argsMemoizeOptions = [],
      devModeChecks = {}
    } = combinedOptions;
    const finalMemoizeOptions = ensureIsArray(memoizeOptions);
    const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
    const dependencies = getDependencies(createSelectorArgs);
    const memoizedResultFunc = memoize(function recomputationWrapper() {
      recomputations++;
      return resultFunc.apply(
        null,
        arguments
      );
    }, ...finalMemoizeOptions);
    let firstRun = true;
    const selector = argsMemoize(function dependenciesChecker() {
      dependencyRecomputations++;
      const inputSelectorResults = collectInputSelectorResults(
        dependencies,
        arguments
      );
      lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
      if (false) // removed by dead control flow
{}
      return lastResult;
    }, ...finalArgsMemoizeOptions);
    return Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      dependencyRecomputations: () => dependencyRecomputations,
      resetDependencyRecomputations: () => {
        dependencyRecomputations = 0;
      },
      lastResult: () => lastResult,
      recomputations: () => recomputations,
      resetRecomputations: () => {
        recomputations = 0;
      },
      memoize,
      argsMemoize
    });
  };
  Object.assign(createSelector2, {
    withTypes: () => createSelector2
  });
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);

// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign(
  (inputSelectorsObject, selectorCreator = createSelector) => {
    assertIsObject(
      inputSelectorsObject,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`
    );
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map(
      (key) => inputSelectorsObject[key]
    );
    const structuredSelector = selectorCreator(
      dependencies,
      (...inputSelectorResults) => {
        return inputSelectorResults.reduce((composition, value, index) => {
          composition[inputSelectorKeys[index]] = value;
          return composition;
        }, {});
      }
    );
    return structuredSelector;
  },
  { withTypes: () => createStructuredSelector }
);

//# sourceMappingURL=reselect.mjs.map
;// ../node_modules/@mui/x-data-grid/utils/createSelector.js



const reselectCreateSelector = createSelectorCreator({
  memoize: lruMemoize,
  memoizeOptions: {
    maxSize: 1,
    equalityCheck: Object.is
  }
});

// TODO v8: Remove this type

// TODO v8: Rename this type to `OutputSelector`

// TODO v8: Remove this type

// TODO v8: Rename this type to `SelectorArgs`

// TODO v8: Remove this type

// TODO v8: Rename this type to `CreateSelectorFunction`

const cache = new WeakMap();
function checkIsAPIRef(value) {
  return 'current' in value && 'instanceId' in value.current;
}
const DEFAULT_INSTANCE_ID = {
  id: 'default'
};

// TODO v8: Remove this function
const createSelector_createSelector = (a, b, c, d, e, f, ...other) => {
  if (other.length > 0) {
    throw new Error('Unsupported number of selectors');
  }
  let selector;

  // eslint-disable-next-line id-denylist
  if (a && b && c && d && e && f) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      const vd = d(state, instanceId);
      const ve = e(state, instanceId);
      return f(va, vb, vc, vd, ve);
    };
    // eslint-disable-next-line id-denylist
  } else if (a && b && c && d && e) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      const vd = d(state, instanceId);
      return e(va, vb, vc, vd);
    };
  } else if (a && b && c && d) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      return d(va, vb, vc);
    };
  } else if (a && b && c) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      return c(va, vb);
    };
  } else if (a && b) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      return b(va);
    };
  } else {
    throw new Error('Missing arguments');
  }

  // We use this property to detect if the selector was created with createSelector
  // or it's only a simple function the receives the state and returns part of it.
  selector.acceptsApiRef = true;
  return selector;
};

// TODO v8: Rename this function to `createSelector`
const createSelectorV8 = (a, b, c, d, e, f, ...other) => {
  if (other.length > 0) {
    throw new Error('Unsupported number of selectors');
  }
  let selector;

  // eslint-disable-next-line id-denylist
  if (a && b && c && d && e && f) {
    selector = (stateOrApiRef, args, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, args, instanceId);
      const vb = b(state, args, instanceId);
      const vc = c(state, args, instanceId);
      const vd = d(state, args, instanceId);
      const ve = e(state, args, instanceId);
      return f(va, vb, vc, vd, ve, args);
    };
    // eslint-disable-next-line id-denylist
  } else if (a && b && c && d && e) {
    selector = (stateOrApiRef, args, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, args, instanceId);
      const vb = b(state, args, instanceId);
      const vc = c(state, args, instanceId);
      const vd = d(state, args, instanceId);
      return e(va, vb, vc, vd, args);
    };
  } else if (a && b && c && d) {
    selector = (stateOrApiRef, args, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, args, instanceId);
      const vb = b(state, args, instanceId);
      const vc = c(state, args, instanceId);
      return d(va, vb, vc, args);
    };
  } else if (a && b && c) {
    selector = (stateOrApiRef, args, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, args, instanceId);
      const vb = b(state, args, instanceId);
      return c(va, vb, args);
    };
  } else if (a && b) {
    selector = (stateOrApiRef, args, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, args, instanceId);
      return b(va, args);
    };
  } else {
    throw new Error('Missing arguments');
  }

  // We use this property to detect if the selector was created with createSelector
  // or it's only a simple function the receives the state and returns part of it.
  selector.acceptsApiRef = true;
  return selector;
};

// TODO v8: Remove this function
const createSelectorMemoized = (...args) => {
  const selector = (stateOrApiRef, instanceId) => {
    const isAPIRef = checkIsAPIRef(stateOrApiRef);
    const cacheKey = isAPIRef ? stateOrApiRef.current.instanceId : instanceId ?? DEFAULT_INSTANCE_ID;
    const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
    if (false) // removed by dead control flow
{}
    const cacheArgsInit = cache.get(cacheKey);
    const cacheArgs = cacheArgsInit ?? new Map();
    const cacheFn = cacheArgs?.get(args);
    if (cacheArgs && cacheFn) {
      // We pass the cache key because the called selector might have as
      // dependency another selector created with this `createSelector`.
      return cacheFn(state, cacheKey);
    }
    const fn = reselectCreateSelector(...args);
    if (!cacheArgsInit) {
      cache.set(cacheKey, cacheArgs);
    }
    cacheArgs.set(args, fn);
    return fn(state, cacheKey);
  };

  // We use this property to detect if the selector was created with createSelector
  // or it's only a simple function the receives the state and returns part of it.
  selector.acceptsApiRef = true;
  return selector;
};

// TODO v8: Rename this function to `createSelectorMemoized`
const createSelectorMemoizedV8 = (...args) => {
  const selector = (stateOrApiRef, selectorArgs, instanceId) => {
    const isAPIRef = checkIsAPIRef(stateOrApiRef);
    const cacheKey = isAPIRef ? stateOrApiRef.current.instanceId : instanceId ?? DEFAULT_INSTANCE_ID;
    const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
    if (false) // removed by dead control flow
{}
    const cacheArgsInit = cache.get(cacheKey);
    const cacheArgs = cacheArgsInit ?? new Map();
    const cacheFn = cacheArgs?.get(args);
    if (cacheArgs && cacheFn) {
      if (!argsEqual(cacheFn.selectorArgs, selectorArgs)) {
        const reselectArgs = selectorArgs !== undefined ? [...args.slice(0, args.length - 1), () => selectorArgs, args[args.length - 1]] : args;
        const fn = reselectCreateSelector(...reselectArgs);
        fn.selectorArgs = selectorArgs;
        cacheArgs.set(args, fn);
        return fn(state, selectorArgs, cacheKey);
      }
      // We pass the cache key because the called selector might have as
      // dependency another selector created with this `createSelector`.
      return cacheFn(state, selectorArgs, cacheKey);
    }
    const reselectArgs = selectorArgs !== undefined ? [...args.slice(0, args.length - 1), () => selectorArgs, args[args.length - 1]] : args;
    const fn = reselectCreateSelector(...reselectArgs);
    fn.selectorArgs = selectorArgs;
    if (!cacheArgsInit) {
      cache.set(cacheKey, cacheArgs);
    }
    cacheArgs.set(args, fn);
    return fn(state, selectorArgs, cacheKey);
  };

  // We use this property to detect if the selector was created with createSelector
  // or it's only a simple function the receives the state and returns part of it.
  selector.acceptsApiRef = true;
  return selector;
};
;// ../node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js

const COMPACT_DENSITY_FACTOR = 0.7;
const COMFORTABLE_DENSITY_FACTOR = 1.3;
const DENSITY_FACTORS = {
  compact: COMPACT_DENSITY_FACTOR,
  comfortable: COMFORTABLE_DENSITY_FACTOR,
  standard: 1
};
const gridDensitySelector = state => state.density;
const gridDensityFactorSelector = createSelector_createSelector(gridDensitySelector, density => DENSITY_FACTORS[density]);
;// ../node_modules/@mui/x-data-grid/hooks/utils/useIsSSR.js

const emptySubscribe = () => () => {};
const clientSnapshot = () => false;
const serverSnapshot = () => true;
const useIsSSR = () => (0,shim.useSyncExternalStore)(emptySubscribe, clientSnapshot, serverSnapshot);
;// ../node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces.js
let GridPinnedColumnPosition = /*#__PURE__*/function (GridPinnedColumnPosition) {
  GridPinnedColumnPosition["LEFT"] = "left";
  GridPinnedColumnPosition["RIGHT"] = "right";
  return GridPinnedColumnPosition;
}({});
const EMPTY_PINNED_COLUMN_FIELDS = {
  left: [],
  right: []
};
;// ../node_modules/@mui/x-data-grid/hooks/core/gridCoreSelector.js
/**
 * Get the theme state
 * @category Core
 */
const gridIsRtlSelector = state => state.isRtl;
;// ../node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js




/**
 * Get the columns state
 * @category Columns
 */
const gridColumnsStateSelector = state => state.columns;

/**
 * Get an array of column fields in the order rendered on screen.
 * @category Columns
 */
const gridColumnFieldsSelector = createSelector_createSelector(gridColumnsStateSelector, columnsState => columnsState.orderedFields);

/**
 * Get the columns as a lookup (an object containing the field for keys and the definition for values).
 * @category Columns
 */
const gridColumnLookupSelector = createSelector_createSelector(gridColumnsStateSelector, columnsState => columnsState.lookup);

/**
 * Get an array of column definitions in the order rendered on screen..
 * @category Columns
 */
const gridColumnDefinitionsSelector = createSelectorMemoized(gridColumnFieldsSelector, gridColumnLookupSelector, (allFields, lookup) => allFields.map(field => lookup[field]));

/**
 * Get the column visibility model, containing the visibility status of each column.
 * If a column is not registered in the model, it is visible.
 * @category Visible Columns
 */
const gridColumnVisibilityModelSelector = createSelector_createSelector(gridColumnsStateSelector, columnsState => columnsState.columnVisibilityModel);

/**
 * Get the visible columns as a lookup (an object containing the field for keys and the definition for values).
 * @category Visible Columns
 */
const gridVisibleColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, gridColumnVisibilityModelSelector, (columns, columnVisibilityModel) => columns.filter(column => columnVisibilityModel[column.field] !== false));

/**
 * Get the field of each visible column.
 * @category Visible Columns
 */
const gridVisibleColumnFieldsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, visibleColumns => visibleColumns.map(column => column.field));

/**
 * Get the visible pinned columns model.
 * @category Visible Columns
 */
const gridPinnedColumnsSelector = state => state.pinnedColumns;

/**
 * Get all existing pinned columns. Place the columns on the side that depends on the rtl state.
 * @category Pinned Columns
 * @ignore - Do not document
 */
const gridExistingPinnedColumnSelector = createSelectorMemoized(gridPinnedColumnsSelector, gridColumnFieldsSelector, gridIsRtlSelector, (model, orderedFields, isRtl) => filterMissingColumns(model, orderedFields, isRtl));

/**
 * Get the visible pinned columns.
 * @category Visible Columns
 */
const gridVisiblePinnedColumnDefinitionsSelector = createSelectorMemoized(gridColumnsStateSelector, gridPinnedColumnsSelector, gridVisibleColumnFieldsSelector, gridIsRtlSelector, (columnsState, model, visibleColumnFields, isRtl) => {
  const visiblePinnedFields = filterMissingColumns(model, visibleColumnFields, isRtl);
  const visiblePinnedColumns = {
    left: visiblePinnedFields.left.map(field => columnsState.lookup[field]),
    right: visiblePinnedFields.right.map(field => columnsState.lookup[field])
  };
  return visiblePinnedColumns;
});
function filterMissingColumns(pinnedColumns, columns, invert) {
  if (!Array.isArray(pinnedColumns.left) && !Array.isArray(pinnedColumns.right)) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  if (pinnedColumns.left?.length === 0 && pinnedColumns.right?.length === 0) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  const filter = (newPinnedColumns, remainingColumns) => {
    if (!Array.isArray(newPinnedColumns)) {
      return [];
    }
    return newPinnedColumns.filter(field => remainingColumns.includes(field));
  };
  const leftPinnedColumns = filter(pinnedColumns.left, columns);
  const columnsWithoutLeftPinnedColumns = columns.filter(
  // Filter out from the remaining columns those columns already pinned to the left
  field => !leftPinnedColumns.includes(field));
  const rightPinnedColumns = filter(pinnedColumns.right, columnsWithoutLeftPinnedColumns);
  if (invert) {
    return {
      left: rightPinnedColumns,
      right: leftPinnedColumns
    };
  }
  return {
    left: leftPinnedColumns,
    right: rightPinnedColumns
  };
}

/**
 * Get the left position in pixel of each visible columns relative to the left of the first column.
 * @category Visible Columns
 */
const gridColumnPositionsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, visibleColumns => {
  const positions = [];
  let currentPosition = 0;
  for (let i = 0; i < visibleColumns.length; i += 1) {
    positions.push(currentPosition);
    currentPosition += visibleColumns[i].computedWidth;
  }
  return positions;
});

/**
 * Get the filterable columns as an array.
 * @category Columns
 */
const gridFilterableColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, columns => columns.filter(col => col.filterable));

/**
 * Get the filterable columns as a lookup (an object containing the field for keys and the definition for values).
 * @category Columns
 */
const gridFilterableColumnLookupSelector = createSelectorMemoized(gridColumnDefinitionsSelector, columns => columns.reduce((acc, col) => {
  if (col.filterable) {
    acc[col.field] = col;
  }
  return acc;
}, {}));

/**
 * Checks if some column has a colSpan field.
 * @category Columns
 * @ignore - Do not document
 */
const gridHasColSpanSelector = createSelectorMemoized(gridColumnDefinitionsSelector, columns => columns.some(column => column.colSpan !== undefined));
;// ../node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelSelector.js

const gridPreferencePanelStateSelector = state => state.preferencePanel;
const gridPreferencePanelSelectorWithLabel = createSelectorV8(gridPreferencePanelStateSelector, (panel, labelId) => {
  if (panel.open && panel.labelId === labelId) {
    return true;
  }
  return false;
});
;// ../node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelsValue.js
var GridPreferencePanelsValue = /*#__PURE__*/function (GridPreferencePanelsValue) {
  GridPreferencePanelsValue["filters"] = "filters";
  GridPreferencePanelsValue["columns"] = "columns";
  return GridPreferencePanelsValue;
}(GridPreferencePanelsValue || {});

;// ../node_modules/@mui/x-data-grid/components/GridApiContext.js
'use client';


const GridApiContext = /*#__PURE__*/index_js_.createContext(undefined);
if (false) // removed by dead control flow
{}
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js


function useGridApiContext() {
  const apiRef = index_js_.useContext(GridApiContext);
  if (apiRef === undefined) {
    throw new Error(['MUI X: Could not find the Data Grid context.', 'It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.', 'This can also happen if you are bundling multiple versions of the Data Grid.'].join('\n'));
  }
  return apiRef;
}
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2540);
;// ../node_modules/@mui/x-data-grid/components/panel/GridPreferencesPanel.js









function GridPreferencesPanel() {
  const apiRef = useGridApiContext();
  const columns = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const rootProps = useGridRootProps();
  const preferencePanelState = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const panelContent = apiRef.current.unstable_applyPipeProcessors('preferencePanel', null, preferencePanelState.openedPanelValue ?? GridPreferencePanelsValue.filters);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.panel, (0,esm_extends/* default */.A)({
    as: rootProps.slots.basePopper,
    open: columns.length > 0 && preferencePanelState.open,
    id: preferencePanelState.panelId,
    "aria-labelledby": preferencePanelState.labelId
  }, rootProps.slotProps?.panel, rootProps.slotProps?.basePopper, {
    children: panelContent
  }));
}
;// ../node_modules/@mui/x-data-grid/components/GridHeader.js





function GridHeader() {
  const rootProps = useGridRootProps();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridPreferencesPanel, {}), rootProps.slots.toolbar && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.toolbar, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.toolbar))]
  });
}
// EXTERNAL MODULE: ../node_modules/@mui/system/esm/styled.js + 1 modules
var esm_styled = __webpack_require__(8688);
;// ../node_modules/@mui/x-data-grid/hooks/features/dimensions/gridDimensionsSelectors.js

const gridDimensionsSelector = state => state.dimensions;

/**
 * Get the summed width of all the visible columns.
 * @category Visible Columns
 */
const gridColumnsTotalWidthSelector = createSelector_createSelector(gridDimensionsSelector, dimensions => dimensions.columnsTotalWidth);
const gridRowHeightSelector = state => state.dimensions.rowHeight;
const gridContentHeightSelector = state => state.dimensions.contentSize.height;
const gridHasScrollXSelector = state => state.dimensions.hasScrollX;
const gridHasScrollYSelector = state => state.dimensions.hasScrollY;
const gridHasFillerSelector = state => state.dimensions.columnsTotalWidth < state.dimensions.viewportOuterSize.width;
const gridHeaderHeightSelector = state => state.dimensions.headerHeight;
const gridGroupHeaderHeightSelector = state => state.dimensions.groupHeaderHeight;
const gridHeaderFilterHeightSelector = state => state.dimensions.headerFilterHeight;
const gridVerticalScrollbarWidthSelector = state => state.dimensions.hasScrollY ? state.dimensions.scrollbarSize : 0;
const gridHorizontalScrollbarHeightSelector = state => state.dimensions.hasScrollX ? state.dimensions.scrollbarSize : 0;
const gridHasBottomFillerSelector = state => {
  const height = state.dimensions.hasScrollX ? state.dimensions.scrollbarSize : 0;
  const needsLastRowBorder = state.dimensions.viewportOuterSize.height - state.dimensions.minimumSize.height > 0;
  if (height === 0 && !needsLastRowBorder) {
    return false;
  }
  return true;
};
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
'use client';



/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? index_js_.useLayoutEffect : index_js_.useEffect;
/* harmony default export */ const useEnhancedEffect_useEnhancedEffect = (useEnhancedEffect);
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
'use client';




/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = index_js_.useRef(fn);
  useEnhancedEffect_useEnhancedEffect(() => {
    ref.current = fn;
  });
  return index_js_.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}
/* harmony default export */ const useEventCallback_useEventCallback = (useEventCallback);
;// ../node_modules/@mui/x-data-grid/utils/cleanupTracking/TimerBasedCleanupTracking.js
// If no effect ran after this amount of time, we assume that the render was not committed by React
const CLEANUP_TIMER_LOOP_MILLIS = 1000;
class TimerBasedCleanupTracking {
  constructor(timeout = CLEANUP_TIMER_LOOP_MILLIS) {
    this.timeouts = new Map();
    this.cleanupTimeout = CLEANUP_TIMER_LOOP_MILLIS;
    this.cleanupTimeout = timeout;
  }
  register(object, unsubscribe, unregisterToken) {
    if (!this.timeouts) {
      this.timeouts = new Map();
    }
    const timeout = setTimeout(() => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
      this.timeouts.delete(unregisterToken.cleanupToken);
    }, this.cleanupTimeout);
    this.timeouts.set(unregisterToken.cleanupToken, timeout);
  }
  unregister(unregisterToken) {
    const timeout = this.timeouts.get(unregisterToken.cleanupToken);
    if (timeout) {
      this.timeouts.delete(unregisterToken.cleanupToken);
      clearTimeout(timeout);
    }
  }
  reset() {
    if (this.timeouts) {
      this.timeouts.forEach((value, key) => {
        this.unregister({
          cleanupToken: key
        });
      });
      this.timeouts = undefined;
    }
  }
}
;// ../node_modules/@mui/x-data-grid/utils/cleanupTracking/FinalizationRegistryBasedCleanupTracking.js
class FinalizationRegistryBasedCleanupTracking {
  constructor() {
    this.registry = new FinalizationRegistry(unsubscribe => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    });
  }
  register(object, unsubscribe, unregisterToken) {
    this.registry.register(object, unsubscribe, unregisterToken);
  }
  unregister(unregisterToken) {
    this.registry.unregister(unregisterToken);
  }

  // eslint-disable-next-line class-methods-use-this
  reset() {}
}
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js



/**
 * Signal to the underlying logic what version of the public component API
 * of the Data Grid is exposed.
 */
var GridSignature = /*#__PURE__*/function (GridSignature) {
  GridSignature["DataGrid"] = "DataGrid";
  GridSignature["DataGridPro"] = "DataGridPro";
  GridSignature["DataGridPremium"] = "DataGridPremium";
  return GridSignature;
}(GridSignature || {});
// We use class to make it easier to detect in heap snapshots by name
class ObjectToBeRetainedByReact {}

// Based on https://github.com/Bnaya/use-dispose-uncommitted/blob/main/src/finalization-registry-based-impl.ts
// Check https://github.com/facebook/react/issues/15317 to get more information
function createUseGridApiEventHandler(registryContainer) {
  let cleanupTokensCounter = 0;
  return function useGridApiEventHandler(apiRef, eventName, handler, options) {
    if (registryContainer.registry === null) {
      registryContainer.registry = typeof FinalizationRegistry !== 'undefined' ? new FinalizationRegistryBasedCleanupTracking() : new TimerBasedCleanupTracking();
    }
    const [objectRetainedByReact] = index_js_.useState(new ObjectToBeRetainedByReact());
    const subscription = index_js_.useRef(null);
    const handlerRef = index_js_.useRef(null);
    handlerRef.current = handler;
    const cleanupTokenRef = index_js_.useRef(null);
    if (!subscription.current && handlerRef.current) {
      const enhancedHandler = (params, event, details) => {
        if (!event.defaultMuiPrevented) {
          handlerRef.current?.(params, event, details);
        }
      };
      subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      cleanupTokensCounter += 1;
      cleanupTokenRef.current = {
        cleanupToken: cleanupTokensCounter
      };
      registryContainer.registry.register(objectRetainedByReact,
      // The callback below will be called once this reference stops being retained
      () => {
        subscription.current?.();
        subscription.current = null;
        cleanupTokenRef.current = null;
      }, cleanupTokenRef.current);
    } else if (!handlerRef.current && subscription.current) {
      subscription.current();
      subscription.current = null;
      if (cleanupTokenRef.current) {
        registryContainer.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
    }
    index_js_.useEffect(() => {
      if (!subscription.current && handlerRef.current) {
        const enhancedHandler = (params, event, details) => {
          if (!event.defaultMuiPrevented) {
            handlerRef.current?.(params, event, details);
          }
        };
        subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      }
      if (cleanupTokenRef.current && registryContainer.registry) {
        // If the effect was called, it means that this render was committed
        // so we can trust the cleanup function to remove the listener.
        registryContainer.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
      return () => {
        subscription.current?.();
        subscription.current = null;
      };
    }, [apiRef, eventName, options]);
  };
}
const registryContainer = {
  registry: null
};

// TODO: move to @mui/x-data-grid/internals
// eslint-disable-next-line @typescript-eslint/naming-convention
const unstable_resetCleanupTracking = () => {
  registryContainer.registry?.reset();
  registryContainer.registry = null;
};
const useGridApiEventHandler = createUseGridApiEventHandler(registryContainer);
const optionsSubscriberOptions = {
  isFirst: true
};
function useGridApiOptionHandler(apiRef, eventName, handler) {
  useGridApiEventHandler(apiRef, eventName, handler, optionsSubscriberOptions);
}

;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
'use client';


const useOnMount_EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
  /* eslint-disable react-hooks/exhaustive-deps */
  index_js_.useEffect(fn, useOnMount_EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
'use client';



class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = null;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
  clear = () => {
    if (this.currentId !== null) {
      clearTimeout(this.currentId);
      this.currentId = null;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/resolveProps/resolveProps.js


/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param defaultProps
 * @param props
 * @param mergeClassNameAndStyle If `true`, merges `className` and `style` props instead of overriding them.
 *   When `false` (default), props override defaultProps. When `true`, `className` values are concatenated
 *   and `style` objects are merged with props taking precedence.
 * @returns resolved props
 */
function resolveProps(defaultProps, props, mergeClassNameAndStyle = false) {
  const output = {
    ...props
  };
  for (const key in defaultProps) {
    if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
      const propName = key;
      if (propName === 'components' || propName === 'slots') {
        output[propName] = {
          ...defaultProps[propName],
          ...output[propName]
        };
      } else if (propName === 'componentsProps' || propName === 'slotProps') {
        const defaultSlotProps = defaultProps[propName];
        const slotProps = props[propName];
        if (!slotProps) {
          output[propName] = defaultSlotProps || {};
        } else if (!defaultSlotProps) {
          output[propName] = slotProps;
        } else {
          output[propName] = {
            ...slotProps
          };
          for (const slotKey in defaultSlotProps) {
            if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
              const slotPropName = slotKey;
              output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName], mergeClassNameAndStyle);
            }
          }
        }
      } else if (propName === 'className' && mergeClassNameAndStyle && props.className) {
        output.className = (0,clsx/* default */.A)(defaultProps?.className, props?.className);
      } else if (propName === 'style' && mergeClassNameAndStyle && props.style) {
        output.style = {
          ...defaultProps?.style,
          ...props?.style
        };
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    }
  }
  return output;
}
// EXTERNAL MODULE: ../node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(6927);
;// ../node_modules/@mui/x-data-grid/components/cell/GridEditInputCell.js


const _excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "isValidating", "debounceMs", "isProcessingProps", "onValueChange"];










const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['editInputCell']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridEditInputCellRoot = (0,styled/* default */.Ay)(InputBase/* default */.Ay, {
  name: 'MuiDataGrid',
  slot: 'EditInputCell',
  overridesResolver: (props, styles) => styles.editInputCell
})(({
  theme
}) => (0,esm_extends/* default */.A)({}, theme.typography.body2, {
  padding: '1px 0',
  '& input': {
    padding: '0 16px',
    height: '100%'
  }
}));
const GridEditInputCell = forwardRef((props, ref) => {
  const rootProps = useGridRootProps();
  const {
      id,
      value,
      field,
      colDef,
      hasFocus,
      debounceMs = 200,
      isProcessingProps,
      onValueChange
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const apiRef = useGridApiContext();
  const inputRef = index_js_.useRef(null);
  const [valueState, setValueState] = index_js_.useState(value);
  const classes = useUtilityClasses(rootProps);
  const handleChange = index_js_.useCallback(async event => {
    const newValue = event.target.value;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    const column = apiRef.current.getColumn(field);
    let parsedValue = newValue;
    if (column.valueParser) {
      parsedValue = column.valueParser(newValue, apiRef.current.getRow(id), column, apiRef);
    }
    setValueState(parsedValue);
    apiRef.current.setEditCellValue({
      id,
      field,
      value: parsedValue,
      debounceMs,
      unstable_skipValueParser: true
    }, event);
  }, [apiRef, debounceMs, field, id, onValueChange]);
  const meta = apiRef.current.unstable_getEditCellMeta(id, field);
  index_js_.useEffect(() => {
    if (meta?.changeReason !== 'debouncedSetEditCellValue') {
      setValueState(value);
    }
  }, [meta, value]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridEditInputCellRoot, (0,esm_extends/* default */.A)({
    inputRef: inputRef,
    className: classes.root,
    ownerState: rootProps,
    fullWidth: true,
    type: colDef.type === 'number' ? colDef.type : 'text',
    value: valueState ?? '',
    onChange: handleChange,
    endAdornment: isProcessingProps ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.loadIcon, {
      fontSize: "small",
      color: "action"
    }) : undefined
  }, other, {
    ref: ref
  }));
});
 false ? 0 : void 0;

const renderEditInputCell = params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridEditInputCell, (0,esm_extends/* default */.A)({}, params));
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js

const gridRowsStateSelector = state => state.rows;
const gridRowCountSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.totalRowCount);
const gridRowsLoadingSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.loading);
const gridTopLevelRowCountSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.totalTopLevelRowCount);

// TODO rows v6: Rename
const gridRowsLookupSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.dataRowIdToModelLookup);
const gridRowsDataRowIdToIdLookupSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.dataRowIdToIdLookup);
const gridRowTreeSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.tree);
const gridRowGroupsToFetchSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.groupsToFetch);
const gridRowGroupingNameSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.groupingName);
const gridRowTreeDepthsSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.treeDepths);
const gridRowMaximumTreeDepthSelector = createSelectorMemoized(gridRowsStateSelector, rows => {
  const entries = Object.entries(rows.treeDepths);
  if (entries.length === 0) {
    return 1;
  }
  return (entries.filter(([, nodeCount]) => nodeCount > 0).map(([depth]) => Number(depth)).sort((a, b) => b - a)[0] ?? 0) + 1;
});
const gridDataRowIdsSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows.dataRowIds);

/**
 * @ignore - do not document.
 */
const gridAdditionalRowGroupsSelector = createSelector_createSelector(gridRowsStateSelector, rows => rows?.additionalRowGroups);

/**
 * @ignore - do not document.
 */
const gridPinnedRowsSelector = createSelectorMemoized(gridAdditionalRowGroupsSelector, additionalRowGroups => {
  const rawPinnedRows = additionalRowGroups?.pinnedRows;
  return {
    bottom: rawPinnedRows?.bottom?.map(rowEntry => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    })) ?? [],
    top: rawPinnedRows?.top?.map(rowEntry => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    })) ?? []
  };
});

/**
 * @ignore - do not document.
 */
const gridPinnedRowsCountSelector = createSelector_createSelector(gridPinnedRowsSelector, pinnedRows => {
  return (pinnedRows?.top?.length || 0) + (pinnedRows?.bottom?.length || 0);
});
;// ../node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingUtils.js



const sanitizeSortModel = (model, disableMultipleColumnsSorting) => {
  if (disableMultipleColumnsSorting && model.length > 1) {
    if (false) // removed by dead control flow
{}
    return [model[0]];
  }
  return model;
};
const mergeStateWithSortModel = (sortModel, disableMultipleColumnsSorting) => state => (0,esm_extends/* default */.A)({}, state, {
  sorting: (0,esm_extends/* default */.A)({}, state.sorting, {
    sortModel: sanitizeSortModel(sortModel, disableMultipleColumnsSorting)
  })
});
const isDesc = direction => direction === 'desc';

/**
 * Transform an item of the sorting model into a method comparing two rows.
 * @param {GridSortItem} sortItem The sort item we want to apply.
 * @param {RefObject<GridApiCommunity>} apiRef The API of the grid.
 * @returns {GridParsedSortItem | null} The parsed sort item. Returns `null` is the sort item is not valid.
 */
const parseSortItem = (sortItem, apiRef) => {
  const column = apiRef.current.getColumn(sortItem.field);
  if (!column || sortItem.sort === null) {
    return null;
  }
  let comparator;
  if (column.getSortComparator) {
    comparator = column.getSortComparator(sortItem.sort);
  } else {
    comparator = isDesc(sortItem.sort) ? (...args) => -1 * column.sortComparator(...args) : column.sortComparator;
  }
  if (!comparator) {
    return null;
  }
  const getSortCellParams = id => ({
    id,
    field: column.field,
    rowNode: gridRowTreeSelector(apiRef)[id],
    value: apiRef.current.getCellValue(id, column.field),
    api: apiRef.current
  });
  return {
    getSortCellParams,
    comparator
  };
};
/**
 * Compare two rows according to a list of valid sort items.
 * The `row1Params` and `row2Params` must have the same length as `parsedSortItems`,
 * and each of their index must contain the `GridSortCellParams` of the sort item with the same index.
 * @param {GridParsedSortItem[]} parsedSortItems All the sort items with which we want to compare the rows.
 * @param {GridRowAggregatedSortingParams} row1 The node and params of the 1st row for each sort item.
 * @param {GridRowAggregatedSortingParams} row2 The node and params of the 2nd row for each sort item.
 */
const compareRows = (parsedSortItems, row1, row2) => {
  return parsedSortItems.reduce((res, item, index) => {
    if (res !== 0) {
      // return the results of the first comparator which distinguish the two rows
      return res;
    }
    const sortCellParams1 = row1.params[index];
    const sortCellParams2 = row2.params[index];
    res = item.comparator(sortCellParams1.value, sortCellParams2.value, sortCellParams1, sortCellParams2);
    return res;
  }, 0);
};

/**
 * Generates a method to easily sort a list of rows according to the current sort model.
 * @param {GridSortModel} sortModel The model with which we want to sort the rows.
 * @param {RefObject<GridApiCommunity>} apiRef The API of the grid.
 * @returns {GridSortingModelApplier | null} A method that generates a list of sorted row ids from a list of rows according to the current sort model. If `null`, we consider that the rows should remain in the order there were provided.
 */
const buildAggregatedSortingApplier = (sortModel, apiRef) => {
  const comparatorList = sortModel.map(item => parseSortItem(item, apiRef)).filter(comparator => !!comparator);
  if (comparatorList.length === 0) {
    return null;
  }
  return rowList => rowList.map(node => ({
    node,
    params: comparatorList.map(el => el.getSortCellParams(node.id))
  })).sort((a, b) => compareRows(comparatorList, a, b)).map(row => row.node.id);
};
const getNextGridSortDirection = (sortingOrder, current) => {
  const currentIdx = sortingOrder.indexOf(current);
  if (!current || currentIdx === -1 || currentIdx + 1 === sortingOrder.length) {
    return sortingOrder[0];
  }
  return sortingOrder[currentIdx + 1];
};
const gridNillComparator = (v1, v2) => {
  if (v1 == null && v2 != null) {
    return -1;
  }
  if (v2 == null && v1 != null) {
    return 1;
  }
  if (v1 == null && v2 == null) {
    return 0;
  }
  return null;
};
const collator = new Intl.Collator();
const gridStringOrNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (typeof value1 === 'string') {
    return collator.compare(value1.toString(), value2.toString());
  }
  return value1 - value2;
};
const gridNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  return Number(value1) - Number(value2);
};
const gridDateComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (value1 > value2) {
    return 1;
  }
  if (value1 < value2) {
    return -1;
  }
  return 0;
};
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/useId/useId.js
'use client';


let globalId = 0;

// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = index_js_.useState(idOverride);
  const id = idOverride || defaultId;
  index_js_.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
const safeReact = {
  ...index_js_namespaceObject
};
const maybeReactUseId = safeReact.useId;

/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  // React.useId() is only available from React 17.0.0.
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride ?? reactId;
  }

  // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputValue.js


const GridFilterInputValue_excluded = ["item", "applyValue", "type", "apiRef", "focusElementRef", "tabIndex", "disabled", "isFilterActive", "clearButton", "InputProps", "variant"];






function GridFilterInputValue(props) {
  const {
      item,
      applyValue,
      type,
      apiRef,
      focusElementRef,
      tabIndex,
      disabled,
      clearButton,
      InputProps,
      variant = 'standard'
    } = props,
    others = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputValue_excluded);
  const filterTimeout = useTimeout();
  const [filterValueState, setFilterValueState] = index_js_.useState(sanitizeFilterItemValue(item.value));
  const [applying, setIsApplying] = index_js_.useState(false);
  const id = useId();
  const rootProps = useGridRootProps();
  const onFilterChange = index_js_.useCallback(event => {
    const value = sanitizeFilterItemValue(event.target.value);
    setFilterValueState(value);
    setIsApplying(true);
    filterTimeout.start(rootProps.filterDebounceMs, () => {
      const newItem = (0,esm_extends/* default */.A)({}, item, {
        value: type === 'number' && !Number.isNaN(Number(value)) ? Number(value) : value,
        fromInput: id
      });
      applyValue(newItem);
      setIsApplying(false);
    });
  }, [filterTimeout, rootProps.filterDebounceMs, item, type, id, applyValue]);
  index_js_.useEffect(() => {
    const itemPlusTag = item;
    if (itemPlusTag.fromInput !== id || item.value == null) {
      setFilterValueState(sanitizeFilterItemValue(item.value));
    }
  }, [id, item]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTextField, (0,esm_extends/* default */.A)({
    id: id,
    label: apiRef.current.getLocaleText('filterPanelInputLabel'),
    placeholder: apiRef.current.getLocaleText('filterPanelInputPlaceholder'),
    value: filterValueState ?? '',
    onChange: onFilterChange,
    variant: variant,
    type: type || 'text',
    InputProps: (0,esm_extends/* default */.A)({}, applying || clearButton ? {
      endAdornment: applying ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : clearButton
    } : {}, {
      disabled
    }, InputProps, {
      inputProps: (0,esm_extends/* default */.A)({
        tabIndex
      }, InputProps?.inputProps)
    }),
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef
  }, others, rootProps.slotProps?.baseTextField));
}
function sanitizeFilterItemValue(value) {
  if (value == null || value === '') {
    return undefined;
  }
  return String(value);
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/utils/utils.js
function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}
function isFunction(value) {
  return typeof value === 'function';
}
function isObject(value) {
  return typeof value === 'object' && value !== null;
}
function localStorageAvailable() {
  try {
    // Incognito mode might reject access to the localStorage for security reasons.
    // window isn't defined on Node.js
    // https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available
    const key = '__some_random_key_you_are_not_going_to_use__';
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Follows the CSS specification behavior for min and max
 * If min > max, then the min have priority
 */
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

/**
 * Create an array containing the range [from, to[
 */
function range(from, to) {
  return Array.from({
    length: to - from
  }).map((_, i) => from + i);
}

/**
 * Based on `fast-deep-equal`
 *
 * MIT License
 *
 * Copyright (c) 2017 Evgeny Poberezkin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * We only type the public interface to avoid dozens of `as` in the function.
 */

function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a)) {
      const length = a.length;
      if (length !== b.length) {
        return false;
      }
      for (let i = 0; i < length; i += 1) {
        if (!isDeepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }
      const entriesA = Array.from(a.entries());
      for (let i = 0; i < entriesA.length; i += 1) {
        if (!b.has(entriesA[i][0])) {
          return false;
        }
      }
      for (let i = 0; i < entriesA.length; i += 1) {
        const entryA = entriesA[i];
        if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      const entries = Array.from(a.entries());
      for (let i = 0; i < entries.length; i += 1) {
        if (!b.has(entries[i][0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      const length = a.length;
      if (length !== b.length) {
        return false;
      }
      for (let i = 0; i < length; i += 1) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const keys = Object.keys(a);
    const length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (let i = 0; i < length; i += 1) {
      const key = keys[i];
      if (!isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }

  // true if both NaN, false otherwise
  // eslint-disable-next-line no-self-compare
  return a !== a && b !== b;
}

// Pseudo random number. See https://stackoverflow.com/a/47593316
function mulberry32(a) {
  return () => {
    /* eslint-disable */
    let t = a += 0x6d2b79f5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
    /* eslint-enable */
  };
}

/**
 * Create a random number generator from a seed. The seed
 * ensures that the random number generator produces the
 * same sequence of 'random' numbers on every render. It
 * returns a function that generates a random number between
 * a specified min and max.
 */
function createRandomNumberGenerator(seed) {
  const random = mulberry32(seed);
  return (min, max) => min + (max - min) * random();
}
function deepClone(obj) {
  if (typeof structuredClone === 'function') {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Mark a value as used so eslint doesn't complain. Use this instead
 * of a `eslint-disable-next-line react-hooks/exhaustive-deps` because
 * that hint disables checks on all values instead of just one.
 */
function eslintUseValue(_) {}
const runIf = (condition, fn) => params => {
  if (condition) {
    fn(params);
  }
};
// EXTERNAL MODULE: ../node_modules/@mui/material/Autocomplete/Autocomplete.js
var Autocomplete = __webpack_require__(7413);
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleValue.js


const GridFilterInputMultipleValue_excluded = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"],
  _excluded2 = ["key"];






function GridFilterInputMultipleValue(props) {
  const {
      item,
      applyValue,
      type,
      apiRef,
      focusElementRef,
      color,
      error,
      helperText,
      size,
      variant = 'standard'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputMultipleValue_excluded);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const [filterValueState, setFilterValueState] = index_js_.useState(item.value || []);
  const id = useId();
  const rootProps = useGridRootProps();
  index_js_.useEffect(() => {
    const itemValue = item.value ?? [];
    setFilterValueState(itemValue.map(String));
  }, [item.value]);
  const handleChange = index_js_.useCallback((event, value) => {
    setFilterValueState(value.map(String));
    applyValue((0,esm_extends/* default */.A)({}, item, {
      value: [...value.map(filterItemValue => type === 'number' ? Number(filterItemValue) : filterItemValue)]
    }));
  }, [applyValue, item, type]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.A, (0,esm_extends/* default */.A)({
    multiple: true,
    freeSolo: true,
    options: [],
    filterOptions: (options, params) => {
      const {
        inputValue
      } = params;
      return inputValue == null || inputValue === '' ? [] : [inputValue];
    },
    id: id,
    value: filterValueState,
    onChange: handleChange,
    renderTags: (value, getTagProps) => value.map((option, index) => {
      const _getTagProps = getTagProps({
          index
        }),
        {
          key
        } = _getTagProps,
        tagProps = (0,objectWithoutPropertiesLoose/* default */.A)(_getTagProps, _excluded2);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseChip, (0,esm_extends/* default */.A)({
        variant: "outlined",
        size: "small",
        label: option
      }, tagProps), key);
    }),
    renderInput: params => /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTextField, (0,esm_extends/* default */.A)({}, params, {
      label: apiRef.current.getLocaleText('filterPanelInputLabel'),
      placeholder: apiRef.current.getLocaleText('filterPanelInputPlaceholder'),
      InputLabelProps: (0,esm_extends/* default */.A)({}, params.InputLabelProps, {
        shrink: true
      }),
      inputRef: focusElementRef,
      type: type || 'text'
    }, TextFieldProps, rootProps.slotProps?.baseTextField))
  }, other));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/models/gridFilterItem.js
/**
 * Filter item definition interface.
 * @demos
 *   - [Custom filter operator](/x/react-data-grid/filtering/customization/#create-a-custom-operator)
 */
var GridLogicOperator = /*#__PURE__*/function (GridLogicOperator) {
  GridLogicOperator["And"] = "and";
  GridLogicOperator["Or"] = "or";
  return GridLogicOperator;
}(GridLogicOperator || {});

;// ../node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterState.js

const defaultGridFilterLookup = {
  filteredRowsLookup: {},
  filteredChildrenCountLookup: {},
  filteredDescendantCountLookup: {}
};
const getDefaultGridFilterModel = () => ({
  items: [],
  logicOperator: GridLogicOperator.And,
  quickFilterValues: [],
  quickFilterLogicOperator: GridLogicOperator.And
});

/**
 * @param {GridRowId} rowId The id of the row we want to filter.
 * @param {(filterItem: GridFilterItem) => boolean} shouldApplyItem An optional callback to allow the filtering engine to only apply some items.
 */

/**
 * Visibility status for each row.
 * A row is visible if it is passing the filters AND if its parents are expanded.
 * If a row is not registered in this lookup, it is visible.
 */
;// ../node_modules/@mui/x-data-grid/utils/getPublicApiRef.js
function getPublicApiRef(apiRef) {
  return {
    current: apiRef.current.getPublicApi()
  };
}
;// ../node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterUtils.js






let hasEval;
function getHasEval() {
  if (hasEval !== undefined) {
    return hasEval;
  }
  try {
    hasEval = new Function('return true')();
  } catch (_) {
    hasEval = false;
  }
  return hasEval;
}
/**
 * Adds default values to the optional fields of a filter items.
 * @param {GridFilterItem} item The raw filter item.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @return {GridFilterItem} The clean filter item with an uniq ID and an always-defined operator.
 * TODO: Make the typing reflect the different between GridFilterInputItem and GridFilterItem.
 */
const cleanFilterItem = (item, apiRef) => {
  const cleanItem = (0,esm_extends/* default */.A)({}, item);
  if (cleanItem.id == null) {
    cleanItem.id = Math.round(Math.random() * 1e5);
  }
  if (cleanItem.operator == null) {
    // Selects a default operator
    // We don't use `apiRef.current.getColumn` because it is not ready during state initialization
    const column = gridColumnLookupSelector(apiRef)[cleanItem.field];
    cleanItem.operator = column && column.filterOperators[0].value;
  }
  return cleanItem;
};
const sanitizeFilterModel = (model, disableMultipleColumnsFiltering, apiRef) => {
  const hasSeveralItems = model.items.length > 1;
  let items;
  if (hasSeveralItems && disableMultipleColumnsFiltering) {
    if (false) // removed by dead control flow
{}
    items = [model.items[0]];
  } else {
    items = model.items;
  }
  const hasItemsWithoutIds = hasSeveralItems && items.some(item => item.id == null);
  const hasItemWithoutOperator = items.some(item => item.operator == null);
  if (false) // removed by dead control flow
{}
  if (false) // removed by dead control flow
{}
  if (hasItemWithoutOperator || hasItemsWithoutIds) {
    return (0,esm_extends/* default */.A)({}, model, {
      items: items.map(item => cleanFilterItem(item, apiRef))
    });
  }
  if (model.items !== items) {
    return (0,esm_extends/* default */.A)({}, model, {
      items
    });
  }
  return model;
};
const mergeStateWithFilterModel = (filterModel, disableMultipleColumnsFiltering, apiRef) => filteringState => (0,esm_extends/* default */.A)({}, filteringState, {
  filterModel: sanitizeFilterModel(filterModel, disableMultipleColumnsFiltering, apiRef)
});
const removeDiacritics = value => {
  if (typeof value === 'string') {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  return value;
};
const getFilterCallbackFromItem = (filterItem, apiRef) => {
  if (!filterItem.field || !filterItem.operator) {
    return null;
  }
  const column = apiRef.current.getColumn(filterItem.field);
  if (!column) {
    return null;
  }
  let parsedValue;
  if (column.valueParser) {
    const parser = column.valueParser;
    parsedValue = Array.isArray(filterItem.value) ? filterItem.value?.map(x => parser(x, undefined, column, apiRef)) : parser(filterItem.value, undefined, column, apiRef);
  } else {
    parsedValue = filterItem.value;
  }
  const {
    ignoreDiacritics
  } = apiRef.current.rootProps;
  if (ignoreDiacritics) {
    parsedValue = removeDiacritics(parsedValue);
  }
  const newFilterItem = (0,esm_extends/* default */.A)({}, filterItem, {
    value: parsedValue
  });
  const filterOperators = column.filterOperators;
  if (!filterOperators?.length) {
    throw new Error(`MUI X: No filter operators found for column '${column.field}'.`);
  }
  const filterOperator = filterOperators.find(operator => operator.value === newFilterItem.operator);
  if (!filterOperator) {
    throw new Error(`MUI X: No filter operator found for column '${column.field}' and operator value '${newFilterItem.operator}'.`);
  }
  const publicApiRef = getPublicApiRef(apiRef);
  const applyFilterOnRow = filterOperator.getApplyFilterFn(newFilterItem, column);
  if (typeof applyFilterOnRow !== 'function') {
    return null;
  }
  return {
    item: newFilterItem,
    fn: row => {
      let value = apiRef.current.getRowValue(row, column);
      if (ignoreDiacritics) {
        value = removeDiacritics(value);
      }
      return applyFilterOnRow(value, row, column, publicApiRef);
    }
  };
};
let filterItemsApplierId = 1;

/**
 * Generates a method to easily check if a row is matching the current filter model.
 * @param {GridFilterModel} filterModel The model with which we want to filter the rows.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @returns {GridAggregatedFilterItemApplier | null} A method that checks if a row is matching the current filter model. If `null`, we consider that all the rows are matching the filters.
 */
const buildAggregatedFilterItemsApplier = (filterModel, apiRef, disableEval) => {
  const {
    items
  } = filterModel;
  const appliers = items.map(item => getFilterCallbackFromItem(item, apiRef)).filter(callback => !!callback);
  if (appliers.length === 0) {
    return null;
  }
  if (disableEval || !getHasEval()) {
    // This is the original logic, which is used if `eval()` is not supported (aka prevented by CSP).
    return (row, shouldApplyFilter) => {
      const resultPerItemId = {};
      for (let i = 0; i < appliers.length; i += 1) {
        const applier = appliers[i];
        if (!shouldApplyFilter || shouldApplyFilter(applier.item.field)) {
          resultPerItemId[applier.item.id] = applier.fn(row);
        }
      }
      return resultPerItemId;
    };
  }

  // We generate a new function with `new Function()` to avoid expensive patterns for JS engines
  // such as a dynamic object assignment, for example `{ [dynamicKey]: value }`.
  const filterItemCore = new Function('appliers', 'row', 'shouldApplyFilter', `"use strict";
${appliers.map((applier, i) => `const shouldApply${i} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(applier.item.field)});`).join('\n')}

const result$$ = {
${appliers.map((applier, i) => `  ${JSON.stringify(String(applier.item.id))}: !shouldApply${i} ? false : appliers[${i}].fn(row),`).join('\n')}
};

return result$$;`.replaceAll('$$', String(filterItemsApplierId)));
  filterItemsApplierId += 1;

  // Assign to the arrow function a name to help debugging
  const filterItem = (row, shouldApplyItem) => filterItemCore(appliers, row, shouldApplyItem);
  return filterItem;
};
const shouldQuickFilterExcludeHiddenColumns = filterModel => {
  return filterModel.quickFilterExcludeHiddenColumns ?? true;
};

/**
 * Generates a method to easily check if a row is matching the current quick filter.
 * @param {any[]} filterModel The model with which we want to filter the rows.
 * @param {RefObject<GridPrivateApiCommunity>} apiRef The API of the grid.
 * @returns {GridAggregatedFilterItemApplier | null} A method that checks if a row is matching the current filter model. If `null`, we consider that all the rows are matching the filters.
 */
const buildAggregatedQuickFilterApplier = (filterModel, apiRef) => {
  const quickFilterValues = filterModel.quickFilterValues?.filter(Boolean) ?? [];
  if (quickFilterValues.length === 0) {
    return null;
  }
  const columnFields = shouldQuickFilterExcludeHiddenColumns(filterModel) ? gridVisibleColumnFieldsSelector(apiRef) : gridColumnFieldsSelector(apiRef);
  const appliersPerField = [];
  const {
    ignoreDiacritics
  } = apiRef.current.rootProps;
  const publicApiRef = getPublicApiRef(apiRef);
  columnFields.forEach(field => {
    const column = apiRef.current.getColumn(field);
    const getApplyQuickFilterFn = column?.getApplyQuickFilterFn;
    if (getApplyQuickFilterFn) {
      appliersPerField.push({
        column,
        appliers: quickFilterValues.map(quickFilterValue => {
          const value = ignoreDiacritics ? removeDiacritics(quickFilterValue) : quickFilterValue;
          return {
            fn: getApplyQuickFilterFn(value, column, publicApiRef)
          };
        })
      });
    }
  });
  return function isRowMatchingQuickFilter(row, shouldApplyFilter) {
    const result = {};

    /* eslint-disable no-labels */
    outer: for (let v = 0; v < quickFilterValues.length; v += 1) {
      const filterValue = quickFilterValues[v];
      for (let i = 0; i < appliersPerField.length; i += 1) {
        const {
          column,
          appliers
        } = appliersPerField[i];
        const {
          field
        } = column;
        if (shouldApplyFilter && !shouldApplyFilter(field)) {
          continue;
        }
        const applier = appliers[v];
        let value = apiRef.current.getRowValue(row, column);
        if (applier.fn === null) {
          continue;
        }
        if (ignoreDiacritics) {
          value = removeDiacritics(value);
        }
        const isMatching = applier.fn(value, row, column, publicApiRef);
        if (isMatching) {
          result[filterValue] = true;
          continue outer;
        }
      }
      result[filterValue] = false;
    }
    return result;
  };
};
const buildAggregatedFilterApplier = (filterModel, apiRef, disableEval) => {
  const isRowMatchingFilterItems = buildAggregatedFilterItemsApplier(filterModel, apiRef, disableEval);
  const isRowMatchingQuickFilter = buildAggregatedQuickFilterApplier(filterModel, apiRef);
  return function isRowMatchingFilters(row, shouldApplyFilter, result) {
    result.passingFilterItems = isRowMatchingFilterItems?.(row, shouldApplyFilter) ?? null;
    result.passingQuickFilterValues = isRowMatchingQuickFilter?.(row, shouldApplyFilter) ?? null;
  };
};
const isNotNull = result => result != null;
const filterModelItems = (cache, apiRef, items) => {
  if (!cache.cleanedFilterItems) {
    cache.cleanedFilterItems = items.filter(item => getFilterCallbackFromItem(item, apiRef) !== null);
  }
  return cache.cleanedFilterItems;
};
const passFilterLogic = (allFilterItemResults, allQuickFilterResults, filterModel, apiRef, cache) => {
  const cleanedFilterItems = filterModelItems(cache, apiRef, filterModel.items);
  const cleanedFilterItemResults = allFilterItemResults.filter(isNotNull);
  const cleanedQuickFilterResults = allQuickFilterResults.filter(isNotNull);

  // get result for filter items model
  if (cleanedFilterItemResults.length > 0) {
    // Return true if the item pass with one of the rows
    const filterItemPredicate = item => {
      return cleanedFilterItemResults.some(filterItemResult => filterItemResult[item.id]);
    };
    const logicOperator = filterModel.logicOperator ?? getDefaultGridFilterModel().logicOperator;
    if (logicOperator === GridLogicOperator.And) {
      const passesAllFilters = cleanedFilterItems.every(filterItemPredicate);
      if (!passesAllFilters) {
        return false;
      }
    } else {
      const passesSomeFilters = cleanedFilterItems.some(filterItemPredicate);
      if (!passesSomeFilters) {
        return false;
      }
    }
  }

  // get result for quick filter model
  if (cleanedQuickFilterResults.length > 0 && filterModel.quickFilterValues != null) {
    // Return true if the item pass with one of the rows
    const quickFilterValuePredicate = value => {
      return cleanedQuickFilterResults.some(quickFilterValueResult => quickFilterValueResult[value]);
    };
    const quickFilterLogicOperator = filterModel.quickFilterLogicOperator ?? getDefaultGridFilterModel().quickFilterLogicOperator;
    if (quickFilterLogicOperator === GridLogicOperator.And) {
      const passesAllQuickFilterValues = filterModel.quickFilterValues.every(quickFilterValuePredicate);
      if (!passesAllQuickFilterValues) {
        return false;
      }
    } else {
      const passesSomeQuickFilterValues = filterModel.quickFilterValues.some(quickFilterValuePredicate);
      if (!passesSomeQuickFilterValues) {
        return false;
      }
    }
  }
  return true;
};
;// ../node_modules/@mui/x-data-grid/colDef/gridStringOperators.js




const getGridStringQuickFilterFn = value => {
  if (!value) {
    return null;
  }
  const filterRegex = new RegExp(escapeRegExp(value), 'i');
  return (_, row, column, apiRef) => {
    let columnValue = apiRef.current.getRowFormattedValue(row, column);
    if (apiRef.current.ignoreDiacritics) {
      columnValue = removeDiacritics(columnValue);
    }
    return columnValue != null ? filterRegex.test(columnValue.toString()) : false;
  };
};
const createContainsFilterFn = (disableTrim, negate) => filterItem => {
  if (!filterItem.value) {
    return null;
  }
  const trimmedValue = disableTrim ? filterItem.value : filterItem.value.trim();
  const filterRegex = new RegExp(escapeRegExp(trimmedValue), 'i');
  return value => {
    if (value == null) {
      return negate;
    }
    const matches = filterRegex.test(String(value));
    return negate ? !matches : matches;
  };
};
const createEqualityFilterFn = (disableTrim, negate) => filterItem => {
  if (!filterItem.value) {
    return null;
  }
  const trimmedValue = disableTrim ? filterItem.value : filterItem.value.trim();
  const collator = new Intl.Collator(undefined, {
    sensitivity: 'base',
    usage: 'search'
  });
  return value => {
    if (value == null) {
      return negate;
    }
    const isEqual = collator.compare(trimmedValue, value.toString()) === 0;
    return negate ? !isEqual : isEqual;
  };
};
const createEmptyFilterFn = negate => () => {
  return value => {
    const isEmpty = value === '' || value == null;
    return negate ? !isEmpty : isEmpty;
  };
};
const getGridStringOperators = (disableTrim = false) => [{
  value: 'contains',
  getApplyFilterFn: createContainsFilterFn(disableTrim, false),
  InputComponent: GridFilterInputValue
}, {
  value: 'doesNotContain',
  getApplyFilterFn: createContainsFilterFn(disableTrim, true),
  InputComponent: GridFilterInputValue
}, {
  value: 'equals',
  getApplyFilterFn: createEqualityFilterFn(disableTrim, false),
  InputComponent: GridFilterInputValue
}, {
  value: 'doesNotEqual',
  getApplyFilterFn: createEqualityFilterFn(disableTrim, true),
  InputComponent: GridFilterInputValue
}, {
  value: 'startsWith',
  getApplyFilterFn: filterItem => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`^${escapeRegExp(filterItemValue)}.*$`, 'i');
    return value => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: 'endsWith',
  getApplyFilterFn: filterItem => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`.*${escapeRegExp(filterItemValue)}$`, 'i');
    return value => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: 'isEmpty',
  getApplyFilterFn: createEmptyFilterFn(false),
  requiresFilterValue: false
}, {
  value: 'isNotEmpty',
  getApplyFilterFn: createEmptyFilterFn(true),
  requiresFilterValue: false
}, {
  value: 'isAnyOf',
  getApplyFilterFn: filterItem => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.map(val => val.trim());
    const collator = new Intl.Collator(undefined, {
      sensitivity: 'base',
      usage: 'search'
    });
    return value => value != null ? filterItemValue.some(filterValue => {
      return collator.compare(filterValue, value.toString() || '') === 0;
    }) : false;
  },
  InputComponent: GridFilterInputMultipleValue
}];
;// ../node_modules/@mui/x-data-grid/colDef/gridStringColDef.js




/**
 * TODO: Move pro and premium properties outside of this Community file
 */
const GRID_STRING_COL_DEF = {
  width: 100,
  minWidth: 50,
  maxWidth: Infinity,
  hideable: true,
  sortable: true,
  resizable: true,
  filterable: true,
  groupable: true,
  pinnable: true,
  // @ts-ignore
  aggregable: true,
  editable: false,
  sortComparator: gridStringOrNumberComparator,
  type: 'string',
  align: 'left',
  filterOperators: getGridStringOperators(),
  renderEditCell: renderEditInputCell,
  getApplyQuickFilterFn: getGridStringQuickFilterFn
};
;// ../node_modules/@mui/x-data-grid/colDef/gridNumericOperators.js


const parseNumericValue = value => {
  if (value == null) {
    return null;
  }
  return Number(value);
};
const getGridNumericQuickFilterFn = value => {
  if (value == null || Number.isNaN(value) || value === '') {
    return null;
  }
  return columnValue => {
    return parseNumericValue(columnValue) === parseNumericValue(value);
  };
};
const getGridNumericOperators = () => [{
  value: '=',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      return parseNumericValue(value) === filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: '!=',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      return parseNumericValue(value) !== filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: '>',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) > filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: '>=',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) >= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: '<',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) < filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: '<=',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return value => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) <= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: 'number'
  }
}, {
  value: 'isEmpty',
  getApplyFilterFn: () => {
    return value => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: 'isNotEmpty',
  getApplyFilterFn: () => {
    return value => {
      return value != null;
    };
  },
  requiresFilterValue: false
}, {
  value: 'isAnyOf',
  getApplyFilterFn: filterItem => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    return value => {
      return value != null && filterItem.value.includes(Number(value));
    };
  },
  InputComponent: GridFilterInputMultipleValue,
  InputComponentProps: {
    type: 'number'
  }
}];
;// ../node_modules/@mui/x-data-grid/colDef/gridNumericColDef.js





const GRID_NUMERIC_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  type: 'number',
  align: 'right',
  headerAlign: 'right',
  sortComparator: gridNumberComparator,
  valueParser: value => value === '' ? null : Number(value),
  valueFormatter: value => isNumber(value) ? value.toLocaleString() : value || '',
  filterOperators: getGridNumericOperators(),
  getApplyQuickFilterFn: getGridNumericQuickFilterFn
});
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate.js


const GridFilterInputDate_excluded = ["item", "applyValue", "type", "apiRef", "focusElementRef", "InputProps", "isFilterActive", "clearButton", "tabIndex", "disabled"];






function convertFilterItemValueToInputValue(itemValue, inputType) {
  if (itemValue == null) {
    return '';
  }
  const dateCopy = new Date(itemValue);
  if (Number.isNaN(dateCopy.getTime())) {
    return '';
  }
  if (inputType === 'date') {
    return dateCopy.toISOString().substring(0, 10);
  }
  if (inputType === 'datetime-local') {
    // The date picker expects the date to be in the local timezone.
    // But .toISOString() converts it to UTC with zero offset.
    // So we need to subtract the timezone offset.
    dateCopy.setMinutes(dateCopy.getMinutes() - dateCopy.getTimezoneOffset());
    return dateCopy.toISOString().substring(0, 19);
  }
  return dateCopy.toISOString().substring(0, 10);
}
function GridFilterInputDate(props) {
  const {
      item,
      applyValue,
      type,
      apiRef,
      focusElementRef,
      InputProps,
      clearButton,
      tabIndex,
      disabled
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputDate_excluded);
  const filterTimeout = useTimeout();
  const [filterValueState, setFilterValueState] = index_js_.useState(() => convertFilterItemValueToInputValue(item.value, type));
  const [applying, setIsApplying] = index_js_.useState(false);
  const id = useId();
  const rootProps = useGridRootProps();
  const onFilterChange = index_js_.useCallback(event => {
    filterTimeout.clear();
    const value = event.target.value;
    setFilterValueState(value);
    setIsApplying(true);
    filterTimeout.start(rootProps.filterDebounceMs, () => {
      const date = new Date(value);
      applyValue((0,esm_extends/* default */.A)({}, item, {
        value: Number.isNaN(date.getTime()) ? undefined : date
      }));
      setIsApplying(false);
    });
  }, [applyValue, item, rootProps.filterDebounceMs, filterTimeout]);
  index_js_.useEffect(() => {
    const value = convertFilterItemValueToInputValue(item.value, type);
    setFilterValueState(value);
  }, [item.value, type]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTextField, (0,esm_extends/* default */.A)({
    fullWidth: true,
    id: id,
    label: apiRef.current.getLocaleText('filterPanelInputLabel'),
    placeholder: apiRef.current.getLocaleText('filterPanelInputPlaceholder'),
    value: filterValueState,
    onChange: onFilterChange,
    variant: "standard",
    type: type || 'text',
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef,
    InputProps: (0,esm_extends/* default */.A)({}, applying || clearButton ? {
      endAdornment: applying ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : clearButton
    } : {}, {
      disabled
    }, InputProps, {
      inputProps: (0,esm_extends/* default */.A)({
        max: type === 'datetime-local' ? '9999-12-31T23:59' : '9999-12-31',
        tabIndex
      }, InputProps?.inputProps)
    })
  }, other, rootProps.slotProps?.baseTextField));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/colDef/gridDateOperators.js

function buildApplyFilterFn(filterItem, compareFn, showTime, keepHours) {
  if (!filterItem.value) {
    return null;
  }
  const date = new Date(filterItem.value);
  if (showTime) {
    date.setSeconds(0, 0);
  } else {
    // In GMT-X timezone, the date will be one day behind.
    // For 2022-08-16:
    // GMT+2: Tue Aug 16 2022 02:00:00 GMT+0200
    // GMT-4: Mon Aug 15 2022 20:00:00 GMT-0400
    //
    // We need to add the offset before resetting the hours.
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    date.setHours(0, 0, 0, 0);
  }
  const time = date.getTime();
  return value => {
    if (!value) {
      return false;
    }
    if (keepHours) {
      return compareFn(value.getTime(), time);
    }

    // Make a copy of the date to not reset the hours in the original object
    const dateCopy = new Date(value);
    if (showTime) {
      dateCopy.setSeconds(0, 0);
    } else {
      dateCopy.setHours(0, 0, 0, 0);
    }
    return compareFn(dateCopy.getTime(), time);
  };
}
const getGridDateOperators = showTime => [{
  value: 'is',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 === value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'not',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 !== value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'after',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 > value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'onOrAfter',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 >= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'before',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 < value2, showTime, !showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'onOrBefore',
  getApplyFilterFn: filterItem => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 <= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? 'datetime-local' : 'date'
  }
}, {
  value: 'isEmpty',
  getApplyFilterFn: () => {
    return value => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: 'isNotEmpty',
  getApplyFilterFn: () => {
    return value => {
      return value != null;
    };
  },
  requiresFilterValue: false
}];
;// ../node_modules/@mui/x-data-grid/components/cell/GridEditDateCell.js


const GridEditDateCell_excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "inputProps", "isValidating", "isProcessingProps", "onValueChange"];









const StyledInputBase = (0,styled/* default */.Ay)(InputBase/* default */.Ay)({
  fontSize: 'inherit'
});
const GridEditDateCell_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['editInputCell']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridEditDateCell(props) {
  const {
      id,
      value: valueProp,
      field,
      colDef,
      hasFocus,
      inputProps,
      onValueChange
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridEditDateCell_excluded);
  const isDateTime = colDef.type === 'dateTime';
  const apiRef = useGridApiContext();
  const inputRef = index_js_.useRef(null);
  const valueTransformed = index_js_.useMemo(() => {
    let parsedDate;
    if (valueProp == null) {
      parsedDate = null;
    } else if (valueProp instanceof Date) {
      parsedDate = valueProp;
    } else {
      parsedDate = new Date((valueProp ?? '').toString());
    }
    let formattedDate;
    if (parsedDate == null || Number.isNaN(parsedDate.getTime())) {
      formattedDate = '';
    } else {
      const localDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60 * 1000);
      formattedDate = localDate.toISOString().substr(0, isDateTime ? 16 : 10);
    }
    return {
      parsed: parsedDate,
      formatted: formattedDate
    };
  }, [valueProp, isDateTime]);
  const [valueState, setValueState] = index_js_.useState(valueTransformed);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = GridEditDateCell_useUtilityClasses(ownerState);
  const parseValueToDate = index_js_.useCallback(value => {
    if (value === '') {
      return null;
    }
    const [date, time] = value.split('T');
    const [year, month, day] = date.split('-');
    const parsedDate = new Date();
    parsedDate.setFullYear(Number(year), Number(month) - 1, Number(day));
    parsedDate.setHours(0, 0, 0, 0);
    if (time) {
      const [hours, minutes] = time.split(':');
      parsedDate.setHours(Number(hours), Number(minutes), 0, 0);
    }
    return parsedDate;
  }, []);
  const handleChange = index_js_.useCallback(async event => {
    const newFormattedDate = event.target.value;
    const newParsedDate = parseValueToDate(newFormattedDate);
    if (onValueChange) {
      await onValueChange(event, newParsedDate);
    }
    setValueState({
      parsed: newParsedDate,
      formatted: newFormattedDate
    });
    apiRef.current.setEditCellValue({
      id,
      field,
      value: newParsedDate
    }, event);
  }, [apiRef, field, id, onValueChange, parseValueToDate]);
  index_js_.useEffect(() => {
    setValueState(state => {
      if (valueTransformed.parsed !== state.parsed && valueTransformed.parsed?.getTime() !== state.parsed?.getTime()) {
        return valueTransformed;
      }
      return state;
    });
  }, [valueTransformed]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputBase, (0,esm_extends/* default */.A)({
    inputRef: inputRef,
    fullWidth: true,
    className: classes.root,
    type: isDateTime ? 'datetime-local' : 'date',
    inputProps: (0,esm_extends/* default */.A)({
      max: isDateTime ? '9999-12-31T23:59' : '9999-12-31'
    }, inputProps),
    value: valueState.formatted,
    onChange: handleChange
  }, other));
}
 false ? 0 : void 0;

const renderEditDateCell = params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridEditDateCell, (0,esm_extends/* default */.A)({}, params));
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js

const GRID_ROOT_GROUP_ID = `auto-generated-group-node-root`;
const GRID_ID_AUTOGENERATED = Symbol('mui.id_autogenerated');
const buildRootGroup = () => ({
  type: 'group',
  id: GRID_ROOT_GROUP_ID,
  depth: -1,
  groupingField: null,
  groupingKey: null,
  isAutoGenerated: true,
  children: [],
  childrenFromPath: {},
  childrenExpanded: true,
  parent: null
});

/**
 * A helper function to check if the id provided is valid.
 * @param {GridRowId} id Id as [[GridRowId]].
 * @param {GridRowModel | Partial<GridRowModel>} row Row as [[GridRowModel]].
 * @param {string} detailErrorMessage A custom error message to display for invalid IDs
 */
function checkGridRowIdIsValid(id, row, detailErrorMessage = 'A row was provided without id in the rows prop:') {
  if (id == null) {
    throw new Error(['MUI X: The Data Grid component requires all rows to have a unique `id` property.', 'Alternatively, you can use the `getRowId` prop to specify a custom id for each row.', detailErrorMessage, JSON.stringify(row)].join('\n'));
  }
}
const getRowIdFromRowModel = (rowModel, getRowId, detailErrorMessage) => {
  const id = getRowId ? getRowId(rowModel) : rowModel.id;
  checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
  return id;
};
const createRowsInternalCache = ({
  rows,
  getRowId,
  loading,
  rowCount
}) => {
  const updates = {
    type: 'full',
    rows: []
  };
  const dataRowIdToModelLookup = {};
  const dataRowIdToIdLookup = {};
  for (let i = 0; i < rows.length; i += 1) {
    const model = rows[i];
    const id = getRowIdFromRowModel(model, getRowId);
    dataRowIdToModelLookup[id] = model;
    dataRowIdToIdLookup[id] = id;
    updates.rows.push(id);
  }
  return {
    rowsBeforePartialUpdates: rows,
    loadingPropBeforePartialUpdates: loading,
    rowCountPropBeforePartialUpdates: rowCount,
    updates,
    dataRowIdToIdLookup,
    dataRowIdToModelLookup
  };
};
const getTopLevelRowCount = ({
  tree,
  rowCountProp = 0
}) => {
  const rootGroupNode = tree[GRID_ROOT_GROUP_ID];
  return Math.max(rowCountProp, rootGroupNode.children.length + (rootGroupNode.footerId == null ? 0 : 1));
};
const getRowsStateFromCache = ({
  apiRef,
  rowCountProp = 0,
  loadingProp,
  previousTree,
  previousTreeDepths,
  previousGroupsToFetch
}) => {
  const cache = apiRef.current.caches.rows;

  // 1. Apply the "rowTreeCreation" family processing.
  const {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIds: unProcessedDataRowIds,
    groupingName,
    groupsToFetch = []
  } = apiRef.current.applyStrategyProcessor('rowTreeCreation', {
    previousTree,
    previousTreeDepths,
    updates: cache.updates,
    dataRowIdToIdLookup: cache.dataRowIdToIdLookup,
    dataRowIdToModelLookup: cache.dataRowIdToModelLookup,
    previousGroupsToFetch
  });

  // 2. Apply the "hydrateRows" pipe-processing.
  const groupingParamsWithHydrateRows = apiRef.current.unstable_applyPipeProcessors('hydrateRows', {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIdToIdLookup: cache.dataRowIdToIdLookup,
    dataRowIds: unProcessedDataRowIds,
    dataRowIdToModelLookup: cache.dataRowIdToModelLookup
  });

  // 3. Reset the cache updates
  apiRef.current.caches.rows.updates = {
    type: 'partial',
    actions: {
      insert: [],
      modify: [],
      remove: []
    },
    idToActionLookup: {}
  };
  return (0,esm_extends/* default */.A)({}, groupingParamsWithHydrateRows, {
    totalRowCount: Math.max(rowCountProp, groupingParamsWithHydrateRows.dataRowIds.length),
    totalTopLevelRowCount: getTopLevelRowCount({
      tree: groupingParamsWithHydrateRows.tree,
      rowCountProp
    }),
    groupingName,
    loading: loadingProp,
    groupsToFetch
  });
};
const isAutogeneratedRow = row => GRID_ID_AUTOGENERATED in row;
const isAutogeneratedRowNode = rowNode => rowNode.type === 'skeletonRow' || rowNode.type === 'footer' || rowNode.type === 'group' && rowNode.isAutoGenerated || rowNode.type === 'pinnedRow' && rowNode.isAutoGenerated;
const getTreeNodeDescendants = (tree, parentId, skipAutoGeneratedRows) => {
  const node = tree[parentId];
  if (node.type !== 'group') {
    return [];
  }
  const validDescendants = [];
  for (let i = 0; i < node.children.length; i += 1) {
    const child = node.children[i];
    if (!skipAutoGeneratedRows || !isAutogeneratedRowNode(tree[child])) {
      validDescendants.push(child);
    }
    const childDescendants = getTreeNodeDescendants(tree, child, skipAutoGeneratedRows);
    for (let j = 0; j < childDescendants.length; j += 1) {
      validDescendants.push(childDescendants[j]);
    }
  }
  if (!skipAutoGeneratedRows && node.footerId != null) {
    validDescendants.push(node.footerId);
  }
  return validDescendants;
};
const updateCacheWithNewRows = ({
  previousCache,
  getRowId,
  updates,
  groupKeys
}) => {
  if (previousCache.updates.type === 'full') {
    throw new Error('MUI X: Unable to prepare a partial update if a full update is not applied yet.');
  }

  // Remove duplicate updates.
  // A server can batch updates, and send several updates for the same row in one fn call.
  const uniqueUpdates = new Map();
  updates.forEach(update => {
    const id = getRowIdFromRowModel(update, getRowId, 'A row was provided without id when calling updateRows():');
    if (uniqueUpdates.has(id)) {
      uniqueUpdates.set(id, (0,esm_extends/* default */.A)({}, uniqueUpdates.get(id), update));
    } else {
      uniqueUpdates.set(id, update);
    }
  });
  const partialUpdates = {
    type: 'partial',
    actions: {
      insert: [...(previousCache.updates.actions.insert ?? [])],
      modify: [...(previousCache.updates.actions.modify ?? [])],
      remove: [...(previousCache.updates.actions.remove ?? [])]
    },
    idToActionLookup: (0,esm_extends/* default */.A)({}, previousCache.updates.idToActionLookup),
    groupKeys
  };
  const dataRowIdToModelLookup = (0,esm_extends/* default */.A)({}, previousCache.dataRowIdToModelLookup);
  const dataRowIdToIdLookup = (0,esm_extends/* default */.A)({}, previousCache.dataRowIdToIdLookup);
  const alreadyAppliedActionsToRemove = {
    insert: {},
    modify: {},
    remove: {}
  };

  // Depending on the action already applied to the data row,
  // We might want drop the already-applied-update.
  // For instance:
  // - if you delete then insert, then you don't want to apply the deletion in the tree.
  // - if you insert, then modify, then you just want to apply the insertion in the tree.
  uniqueUpdates.forEach((partialRow, id) => {
    const actionAlreadyAppliedToRow = partialUpdates.idToActionLookup[id];

    // Action === "delete"
    // eslint-disable-next-line no-underscore-dangle
    if (partialRow._action === 'delete') {
      // If the data row has been removed since the last state update,
      // Then do nothing.
      if (actionAlreadyAppliedToRow === 'remove' || !dataRowIdToModelLookup[id]) {
        return;
      }

      // If the data row has been inserted / modified since the last state update,
      // Then drop this "insert" / "modify" update.
      if (actionAlreadyAppliedToRow != null) {
        alreadyAppliedActionsToRemove[actionAlreadyAppliedToRow][id] = true;
      }

      // Remove the data row from the lookups and add it to the "delete" update.
      partialUpdates.actions.remove.push(id);
      delete dataRowIdToModelLookup[id];
      delete dataRowIdToIdLookup[id];
      return;
    }
    const oldRow = dataRowIdToModelLookup[id];

    // Action === "modify"
    if (oldRow) {
      // If the data row has been removed since the last state update,
      // Then drop this "remove" update and add it to the "modify" update instead.
      if (actionAlreadyAppliedToRow === 'remove') {
        alreadyAppliedActionsToRemove.remove[id] = true;
        partialUpdates.actions.modify.push(id);
      }
      // If the date has not been inserted / modified since the last state update,
      // Then add it to the "modify" update (if it has been inserted it should just remain "inserted").
      else if (actionAlreadyAppliedToRow == null) {
        partialUpdates.actions.modify.push(id);
      }

      // Update the data row lookups.
      dataRowIdToModelLookup[id] = (0,esm_extends/* default */.A)({}, oldRow, partialRow);
      return;
    }

    // Action === "insert"
    // If the data row has been removed since the last state update,
    // Then drop the "remove" update and add it to the "insert" update instead.
    if (actionAlreadyAppliedToRow === 'remove') {
      alreadyAppliedActionsToRemove.remove[id] = true;
      partialUpdates.actions.insert.push(id);
    }
    // If the data row has not been inserted since the last state update,
    // Then add it to the "insert" update.
    // `actionAlreadyAppliedToRow` can't be equal to "modify", otherwise we would have an `oldRow` above.
    else if (actionAlreadyAppliedToRow == null) {
      partialUpdates.actions.insert.push(id);
    }

    // Update the data row lookups.
    dataRowIdToModelLookup[id] = partialRow;
    dataRowIdToIdLookup[id] = id;
  });
  const actionTypeWithActionsToRemove = Object.keys(alreadyAppliedActionsToRemove);
  for (let i = 0; i < actionTypeWithActionsToRemove.length; i += 1) {
    const actionType = actionTypeWithActionsToRemove[i];
    const idsToRemove = alreadyAppliedActionsToRemove[actionType];
    if (Object.keys(idsToRemove).length > 0) {
      partialUpdates.actions[actionType] = partialUpdates.actions[actionType].filter(id => !idsToRemove[id]);
    }
  }
  return {
    dataRowIdToModelLookup,
    dataRowIdToIdLookup,
    updates: partialUpdates,
    rowsBeforePartialUpdates: previousCache.rowsBeforePartialUpdates,
    loadingPropBeforePartialUpdates: previousCache.loadingPropBeforePartialUpdates,
    rowCountPropBeforePartialUpdates: previousCache.rowCountPropBeforePartialUpdates
  };
};
const minimalContentHeight = 'var(--DataGrid-overlayHeight, calc(var(--height) * 2))';
function computeRowsUpdates(apiRef, updates, getRowId) {
  const nonPinnedRowsUpdates = [];
  updates.forEach(update => {
    const id = getRowIdFromRowModel(update, getRowId, 'A row was provided without id when calling updateRows():');
    const rowNode = apiRef.current.getRowNode(id);
    if (rowNode?.type === 'pinnedRow') {
      // @ts-ignore because otherwise `release:build` doesn't work
      const pinnedRowsCache = apiRef.current.caches.pinnedRows;
      const prevModel = pinnedRowsCache.idLookup[id];
      if (prevModel) {
        pinnedRowsCache.idLookup[id] = (0,esm_extends/* default */.A)({}, prevModel, update);
      }
    } else {
      nonPinnedRowsUpdates.push(update);
    }
  });
  return nonPinnedRowsUpdates;
}
let warnedOnceInvalidRowHeight = false;
const getValidRowHeight = (rowHeightProp, defaultRowHeight, warningMessage) => {
  if (typeof rowHeightProp === 'number' && rowHeightProp > 0) {
    return rowHeightProp;
  }
  if (false) // removed by dead control flow
{}
  return defaultRowHeight;
};
const rowHeightWarning = [`MUI X: The \`rowHeight\` prop should be a number greater than 0.`, `The default value will be used instead.`].join('\n');
const getRowHeightWarning = [`MUI X: The \`getRowHeight\` prop should return a number greater than 0 or 'auto'.`, `The default value will be used instead.`].join('\n');
;// ../node_modules/@mui/x-data-grid/hooks/core/gridPropsSelectors.js


/**
 * Get the row id for a given row
 * @param state - The grid state
 * @param {GridRowModel} row - The row to get the id for
 * @returns {GridRowId} The row id
 */
const gridRowIdSelector = (state, row) => {
  if (GRID_ID_AUTOGENERATED in row) {
    return row[GRID_ID_AUTOGENERATED];
  }
  return state.props.getRowId ? state.props.getRowId(row) : row.id;
};
;// ../node_modules/@mui/x-data-grid/colDef/gridDateColDef.js






function throwIfNotDateObject({
  value,
  columnType,
  rowId,
  field
}) {
  if (!(value instanceof Date)) {
    throw new Error([`MUI X: \`${columnType}\` column type only accepts \`Date\` objects as values.`, 'Use `valueGetter` to transform the value into a `Date` object.', `Row ID: ${rowId}, field: "${field}".`].join('\n'));
  }
}
const gridDateFormatter = (value, row, column, apiRef) => {
  if (!value) {
    return '';
  }
  const rowId = gridRowIdSelector(apiRef.current.state, row);
  throwIfNotDateObject({
    value,
    columnType: 'date',
    rowId,
    field: column.field
  });
  return value.toLocaleDateString();
};
const gridDateTimeFormatter = (value, row, column, apiRef) => {
  if (!value) {
    return '';
  }
  const rowId = gridRowIdSelector(apiRef.current.state, row);
  throwIfNotDateObject({
    value,
    columnType: 'dateTime',
    rowId,
    field: column.field
  });
  return value.toLocaleString();
};
const GRID_DATE_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  type: 'date',
  sortComparator: gridDateComparator,
  valueFormatter: gridDateFormatter,
  filterOperators: getGridDateOperators(),
  renderEditCell: renderEditDateCell,
  // @ts-ignore
  pastedValueParser: value => new Date(value)
});
const GRID_DATETIME_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  type: 'dateTime',
  sortComparator: gridDateComparator,
  valueFormatter: gridDateTimeFormatter,
  filterOperators: getGridDateOperators(true),
  renderEditCell: renderEditDateCell,
  // @ts-ignore
  pastedValueParser: value => new Date(value)
});
;// ../node_modules/@mui/x-data-grid/internals/constants.js
const GRID_TREE_DATA_GROUPING_FIELD = '__tree_data_group__';
const GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD = '__row_group_by_columns_group__';
const GRID_DETAIL_PANEL_TOGGLE_FIELD = '__detail_panel_toggle__';
let PinnedColumnPosition = /*#__PURE__*/function (PinnedColumnPosition) {
  PinnedColumnPosition[PinnedColumnPosition["NONE"] = 0] = "NONE";
  PinnedColumnPosition[PinnedColumnPosition["LEFT"] = 1] = "LEFT";
  PinnedColumnPosition[PinnedColumnPosition["RIGHT"] = 2] = "RIGHT";
  PinnedColumnPosition[PinnedColumnPosition["VIRTUAL"] = 3] = "VIRTUAL";
  return PinnedColumnPosition;
}({});
;// ../node_modules/@mui/x-data-grid/components/cell/GridBooleanCell.js


const GridBooleanCell_excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "hasFocus", "tabIndex", "hideDescendantCount"];











const GridBooleanCell_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['booleanCell']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridBooleanCellRaw(props) {
  const {
      value,
      rowNode
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridBooleanCell_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = GridBooleanCell_useUtilityClasses(ownerState);
  const maxDepth = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector);
  const isServerSideRowGroupingRow =
  // @ts-expect-error - Access tree data prop
  maxDepth > 0 && rowNode.type === 'group' && rootProps.treeData === false;
  const Icon = index_js_.useMemo(() => value ? rootProps.slots.booleanCellTrueIcon : rootProps.slots.booleanCellFalseIcon, [rootProps.slots.booleanCellFalseIcon, rootProps.slots.booleanCellTrueIcon, value]);
  if (isServerSideRowGroupingRow && value === undefined) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, (0,esm_extends/* default */.A)({
    fontSize: "small",
    className: classes.root,
    titleAccess: apiRef.current.getLocaleText(value ? 'booleanCellTrueLabel' : 'booleanCellFalseLabel'),
    "data-value": Boolean(value)
  }, other));
}
 false ? 0 : void 0;
const GridBooleanCell = /*#__PURE__*/index_js_.memo(GridBooleanCellRaw);

const renderBooleanCell = params => {
  if (params.field !== GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD && isAutogeneratedRowNode(params.rowNode)) {
    return '';
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridBooleanCell, (0,esm_extends/* default */.A)({}, params));
};
;// ../node_modules/@mui/x-data-grid/components/cell/GridEditBooleanCell.js


const GridEditBooleanCell_excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange"];








const GridEditBooleanCell_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['editBooleanCell']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridEditBooleanCell(props) {
  const {
      id: idProp,
      value,
      field,
      className,
      hasFocus,
      onValueChange
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridEditBooleanCell_excluded);
  const apiRef = useGridApiContext();
  const inputRef = index_js_.useRef(null);
  const id = useId();
  const [valueState, setValueState] = index_js_.useState(value);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = GridEditBooleanCell_useUtilityClasses(ownerState);
  const handleChange = index_js_.useCallback(async event => {
    const newValue = event.target.checked;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    setValueState(newValue);
    await apiRef.current.setEditCellValue({
      id: idProp,
      field,
      value: newValue
    }, event);
  }, [apiRef, field, idProp, onValueChange]);
  index_js_.useEffect(() => {
    setValueState(value);
  }, [value]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", (0,esm_extends/* default */.A)({
    htmlFor: id,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseCheckbox, (0,esm_extends/* default */.A)({
      id: id,
      inputRef: inputRef,
      checked: Boolean(valueState),
      onChange: handleChange,
      size: "small"
    }, rootProps.slotProps?.baseCheckbox))
  }));
}
 false ? 0 : void 0;

const renderEditBooleanCell = params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridEditBooleanCell, (0,esm_extends/* default */.A)({}, params));
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputBoolean.js


const GridFilterInputBoolean_excluded = ["item", "applyValue", "apiRef", "focusElementRef", "isFilterActive", "clearButton", "tabIndex", "label", "variant", "InputLabelProps"];






const GridFilterInputBoolean_sanitizeFilterItemValue = value => {
  if (String(value).toLowerCase() === 'true') {
    return true;
  }
  if (String(value).toLowerCase() === 'false') {
    return false;
  }
  return undefined;
};
const BooleanOperatorContainer = (0,styled/* default */.Ay)('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  [`& button`]: {
    margin: 'auto 0px 5px 5px'
  }
});
function GridFilterInputBoolean(props) {
  const {
      item,
      applyValue,
      apiRef,
      focusElementRef,
      clearButton,
      tabIndex,
      label: labelProp,
      variant = 'standard'
    } = props,
    others = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputBoolean_excluded);
  const [filterValueState, setFilterValueState] = index_js_.useState(GridFilterInputBoolean_sanitizeFilterItemValue(item.value));
  const rootProps = useGridRootProps();
  const labelId = useId();
  const selectId = useId();
  const baseSelectProps = rootProps.slotProps?.baseSelect || {};
  const isSelectNative = baseSelectProps.native ?? false;
  const baseSelectOptionProps = rootProps.slotProps?.baseSelectOption || {};
  const onFilterChange = index_js_.useCallback(event => {
    const value = GridFilterInputBoolean_sanitizeFilterItemValue(event.target.value);
    setFilterValueState(value);
    applyValue((0,esm_extends/* default */.A)({}, item, {
      value
    }));
  }, [applyValue, item]);
  index_js_.useEffect(() => {
    setFilterValueState(GridFilterInputBoolean_sanitizeFilterItemValue(item.value));
  }, [item.value]);
  const label = labelProp ?? apiRef.current.getLocaleText('filterPanelInputLabel');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(BooleanOperatorContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(rootProps.slots.baseFormControl, {
      fullWidth: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseInputLabel, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.baseInputLabel, {
        id: labelId,
        shrink: true,
        variant: variant,
        children: label
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
        labelId: labelId,
        id: selectId,
        label: label,
        value: filterValueState === undefined ? '' : String(filterValueState),
        onChange: onFilterChange,
        variant: variant,
        notched: variant === 'outlined' ? true : undefined,
        native: isSelectNative,
        displayEmpty: true,
        inputProps: {
          ref: focusElementRef,
          tabIndex
        }
      }, others /* FIXME: typing error */, baseSelectProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "",
          children: apiRef.current.getLocaleText('filterValueAny')
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "true",
          children: apiRef.current.getLocaleText('filterValueTrue')
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "false",
          children: apiRef.current.getLocaleText('filterValueFalse')
        }))]
      }))]
    }), clearButton]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/colDef/gridBooleanOperators.js

const getGridBooleanOperators = () => [{
  value: 'is',
  getApplyFilterFn: filterItem => {
    const sanitizedValue = GridFilterInputBoolean_sanitizeFilterItemValue(filterItem.value);
    if (sanitizedValue === undefined) {
      return null;
    }
    return value => Boolean(value) === sanitizedValue;
  },
  InputComponent: GridFilterInputBoolean
}];
;// ../node_modules/@mui/x-data-grid/colDef/gridBooleanColDef.js






const gridBooleanFormatter = (value, row, column, apiRef) => {
  return value ? apiRef.current.getLocaleText('booleanCellTrueLabel') : apiRef.current.getLocaleText('booleanCellFalseLabel');
};
const stringToBoolean = value => {
  switch (value.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case 'null':
    case 'undefined':
      return false;
    default:
      return undefined;
  }
};
const GRID_BOOLEAN_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  type: 'boolean',
  display: 'flex',
  align: 'center',
  headerAlign: 'center',
  renderCell: renderBooleanCell,
  renderEditCell: renderEditBooleanCell,
  sortComparator: gridNumberComparator,
  valueFormatter: gridBooleanFormatter,
  filterOperators: getGridBooleanOperators(),
  getApplyQuickFilterFn: undefined,
  // @ts-ignore
  aggregable: false,
  // @ts-ignore
  pastedValueParser: value => stringToBoolean(value)
});
;// ../node_modules/@mui/x-data-grid/models/params/gridEditCellParams.js
/**
 * Params passed to `apiRef.current.setEditCellValue`.
 */
var GridCellEditStartReasons = /*#__PURE__*/function (GridCellEditStartReasons) {
  GridCellEditStartReasons["enterKeyDown"] = "enterKeyDown";
  GridCellEditStartReasons["cellDoubleClick"] = "cellDoubleClick";
  GridCellEditStartReasons["printableKeyDown"] = "printableKeyDown";
  GridCellEditStartReasons["deleteKeyDown"] = "deleteKeyDown";
  GridCellEditStartReasons["pasteKeyDown"] = "pasteKeyDown";
  return GridCellEditStartReasons;
}(GridCellEditStartReasons || {});
/**
 * Params passed to the `cellEditStart` event.
 */
var GridCellEditStopReasons = /*#__PURE__*/function (GridCellEditStopReasons) {
  GridCellEditStopReasons["cellFocusOut"] = "cellFocusOut";
  GridCellEditStopReasons["escapeKeyDown"] = "escapeKeyDown";
  GridCellEditStopReasons["enterKeyDown"] = "enterKeyDown";
  GridCellEditStopReasons["tabKeyDown"] = "tabKeyDown";
  GridCellEditStopReasons["shiftTabKeyDown"] = "shiftTabKeyDown";
  return GridCellEditStopReasons;
}(GridCellEditStopReasons || {});
/**
 * Params passed to the `cellEditStop event.
 */
// https://github.com/mui/mui-x/pull/3738#discussion_r798504277

;// ../node_modules/@mui/x-data-grid/models/gridEditRowModel.js
var GridEditModes = /*#__PURE__*/function (GridEditModes) {
  GridEditModes["Cell"] = "cell";
  GridEditModes["Row"] = "row";
  return GridEditModes;
}(GridEditModes || {});
var GridCellModes = /*#__PURE__*/function (GridCellModes) {
  GridCellModes["Edit"] = "edit";
  GridCellModes["View"] = "view";
  return GridCellModes;
}(GridCellModes || {});
var GridRowModes = /*#__PURE__*/function (GridRowModes) {
  GridRowModes["Edit"] = "edit";
  GridRowModes["View"] = "view";
  return GridRowModes;
}(GridRowModes || {});

;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils.js

function isSingleSelectColDef(colDef) {
  return colDef?.type === 'singleSelect';
}
function getValueOptions(column, additionalParams) {
  if (!column) {
    return undefined;
  }
  return typeof column.valueOptions === 'function' ? column.valueOptions((0,esm_extends/* default */.A)({
    field: column.field
  }, additionalParams)) : column.valueOptions;
}
function getValueFromValueOptions(value, valueOptions, getOptionValue) {
  if (valueOptions === undefined) {
    return undefined;
  }
  const result = valueOptions.find(option => {
    const optionValue = getOptionValue(option);
    return String(optionValue) === String(value);
  });
  return getOptionValue(result);
}
;// ../node_modules/@mui/x-data-grid/components/cell/GridEditSingleSelectCell.js


const GridEditSingleSelectCell_excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange", "initialOpen"],
  GridEditSingleSelectCell_excluded2 = ["MenuProps"];










function isKeyboardEvent(event) {
  return !!event.key;
}
function GridEditSingleSelectCell(props) {
  const rootProps = useGridRootProps();
  const {
      id,
      value: valueProp,
      field,
      row,
      colDef,
      hasFocus,
      error,
      onValueChange,
      initialOpen = rootProps.editMode === GridEditModes.Cell
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridEditSingleSelectCell_excluded);
  const apiRef = useGridApiContext();
  const ref = index_js_.useRef(null);
  const inputRef = index_js_.useRef(null);
  const [open, setOpen] = index_js_.useState(initialOpen);
  const baseSelectProps = rootProps.slotProps?.baseSelect || {};
  const isSelectNative = baseSelectProps.native ?? false;
  const _ref = rootProps.slotProps?.baseSelect || {},
    {
      MenuProps
    } = _ref,
    otherBaseSelectProps = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, GridEditSingleSelectCell_excluded2);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (hasFocus) {
      inputRef.current?.focus();
    }
  }, [hasFocus]);
  if (!isSingleSelectColDef(colDef)) {
    return null;
  }
  const valueOptions = getValueOptions(colDef, {
    id,
    row
  });
  if (!valueOptions) {
    return null;
  }
  const getOptionValue = colDef.getOptionValue;
  const getOptionLabel = colDef.getOptionLabel;
  const handleChange = async event => {
    if (!isSingleSelectColDef(colDef) || !valueOptions) {
      return;
    }
    setOpen(false);
    const target = event.target;
    // NativeSelect casts the value to a string.
    const formattedTargetValue = getValueFromValueOptions(target.value, valueOptions, getOptionValue);
    if (onValueChange) {
      await onValueChange(event, formattedTargetValue);
    }
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: formattedTargetValue
    }, event);
  };
  const handleClose = (event, reason) => {
    if (rootProps.editMode === GridEditModes.Row) {
      setOpen(false);
      return;
    }
    if (reason === 'backdropClick' || event.key === 'Escape') {
      const params = apiRef.current.getCellParams(id, field);
      apiRef.current.publishEvent('cellEditStop', (0,esm_extends/* default */.A)({}, params, {
        reason: event.key === 'Escape' ? GridCellEditStopReasons.escapeKeyDown : GridCellEditStopReasons.cellFocusOut
      }));
    }
  };
  const handleOpen = event => {
    if (isKeyboardEvent(event) && event.key === 'Enter') {
      return;
    }
    setOpen(true);
  };
  if (!valueOptions || !colDef) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
    ref: ref,
    inputRef: inputRef,
    value: valueProp,
    onChange: handleChange,
    open: open,
    onOpen: handleOpen,
    MenuProps: (0,esm_extends/* default */.A)({
      onClose: handleClose
    }, MenuProps),
    error: error,
    native: isSelectNative,
    fullWidth: true
  }, other, otherBaseSelectProps, {
    children: valueOptions.map(valueOption => {
      const value = getOptionValue(valueOption);
      return /*#__PURE__*/(0,index_js_.createElement)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.baseSelectOption || {}, {
        native: isSelectNative,
        key: value,
        value: value
      }), getOptionLabel(valueOption));
    })
  }));
}
 false ? 0 : void 0;

const renderEditSingleSelectCell = params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridEditSingleSelectCell, (0,esm_extends/* default */.A)({}, params));
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputSingleSelect.js


const GridFilterInputSingleSelect_excluded = ["item", "applyValue", "type", "apiRef", "focusElementRef", "placeholder", "tabIndex", "label", "variant", "isFilterActive", "clearButton", "InputLabelProps"];








const renderSingleSelectOptions = ({
  column,
  OptionComponent,
  getOptionLabel,
  getOptionValue,
  isSelectNative,
  baseSelectOptionProps
}) => {
  const iterableColumnValues = ['', ...(getValueOptions(column) || [])];
  return iterableColumnValues.map(option => {
    const value = getOptionValue(option);
    let label = getOptionLabel(option);
    if (label === '') {
      label = ' '; // To force the height of the empty option
    }
    return /*#__PURE__*/(0,index_js_.createElement)(OptionComponent, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
      native: isSelectNative,
      key: value,
      value: value
    }), label);
  });
};
const SingleSelectOperatorContainer = (0,styled/* default */.Ay)('div')({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  [`& button`]: {
    margin: 'auto 0px 5px 5px'
  }
});
function GridFilterInputSingleSelect(props) {
  const {
      item,
      applyValue,
      type,
      apiRef,
      focusElementRef,
      placeholder,
      tabIndex,
      label: labelProp,
      variant = 'standard',
      clearButton
    } = props,
    others = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputSingleSelect_excluded);
  const filterValue = item.value ?? '';
  const id = useId();
  const labelId = useId();
  const rootProps = useGridRootProps();
  const isSelectNative = rootProps.slotProps?.baseSelect?.native ?? false;
  let resolvedColumn = null;
  if (item.field) {
    const column = apiRef.current.getColumn(item.field);
    if (isSingleSelectColDef(column)) {
      resolvedColumn = column;
    }
  }
  const getOptionValue = resolvedColumn?.getOptionValue;
  const getOptionLabel = resolvedColumn?.getOptionLabel;
  const currentValueOptions = index_js_.useMemo(() => {
    return getValueOptions(resolvedColumn);
  }, [resolvedColumn]);
  const onFilterChange = index_js_.useCallback(event => {
    let value = event.target.value;

    // NativeSelect casts the value to a string.
    value = getValueFromValueOptions(value, currentValueOptions, getOptionValue);
    applyValue((0,esm_extends/* default */.A)({}, item, {
      value
    }));
  }, [currentValueOptions, getOptionValue, applyValue, item]);
  if (!isSingleSelectColDef(resolvedColumn)) {
    return null;
  }
  const label = labelProp ?? apiRef.current.getLocaleText('filterPanelInputLabel');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SingleSelectOperatorContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(rootProps.slots.baseFormControl, {
      fullWidth: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseInputLabel, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.baseInputLabel, {
        id: labelId,
        htmlFor: id,
        shrink: true,
        variant: variant,
        children: label
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
        id: id,
        label: label,
        labelId: labelId,
        value: filterValue,
        onChange: onFilterChange,
        variant: variant,
        type: type || 'text',
        inputProps: {
          tabIndex,
          ref: focusElementRef,
          placeholder: placeholder ?? apiRef.current.getLocaleText('filterPanelInputPlaceholder')
        },
        native: isSelectNative,
        notched: variant === 'outlined' ? true : undefined
      }, others /* FIXME: typing error */, rootProps.slotProps?.baseSelect, {
        children: renderSingleSelectOptions({
          column: resolvedColumn,
          OptionComponent: rootProps.slots.baseSelectOption,
          getOptionLabel,
          getOptionValue,
          isSelectNative,
          baseSelectOptionProps: rootProps.slotProps?.baseSelectOption
        })
      }))]
    }), clearButton]
  });
}
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/useAutocomplete/useAutocomplete.js
var useAutocomplete = __webpack_require__(3899);
;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleSingleSelect.js


const GridFilterInputMultipleSingleSelect_excluded = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"],
  GridFilterInputMultipleSingleSelect_excluded2 = ["key"];







const filter = (0,useAutocomplete/* createFilterOptions */.Z)();
function GridFilterInputMultipleSingleSelect(props) {
  const {
      item,
      applyValue,
      apiRef,
      focusElementRef,
      color,
      error,
      helperText,
      size,
      variant = 'standard'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterInputMultipleSingleSelect_excluded);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const id = useId();
  const rootProps = useGridRootProps();
  let resolvedColumn = null;
  if (item.field) {
    const column = apiRef.current.getColumn(item.field);
    if (isSingleSelectColDef(column)) {
      resolvedColumn = column;
    }
  }
  const getOptionValue = resolvedColumn?.getOptionValue;
  const getOptionLabel = resolvedColumn?.getOptionLabel;
  const isOptionEqualToValue = index_js_.useCallback((option, value) => getOptionValue(option) === getOptionValue(value), [getOptionValue]);
  const resolvedValueOptions = index_js_.useMemo(() => {
    return getValueOptions(resolvedColumn) || [];
  }, [resolvedColumn]);

  // The value is computed from the item.value and used directly
  // If it was done by a useEffect/useState, the Autocomplete could receive incoherent value and options
  const filteredValues = index_js_.useMemo(() => {
    if (!Array.isArray(item.value)) {
      return [];
    }
    return item.value.reduce((acc, value) => {
      const resolvedValue = resolvedValueOptions.find(v => getOptionValue(v) === value);
      if (resolvedValue != null) {
        acc.push(resolvedValue);
      }
      return acc;
    }, []);
  }, [getOptionValue, item.value, resolvedValueOptions]);
  const handleChange = index_js_.useCallback((event, value) => {
    applyValue((0,esm_extends/* default */.A)({}, item, {
      value: value.map(getOptionValue)
    }));
  }, [applyValue, item, getOptionValue]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.A, (0,esm_extends/* default */.A)({
    multiple: true,
    options: resolvedValueOptions,
    isOptionEqualToValue: isOptionEqualToValue,
    filterOptions: filter,
    id: id,
    value: filteredValues,
    onChange: handleChange,
    getOptionLabel: getOptionLabel,
    renderTags: (value, getTagProps) => value.map((option, index) => {
      const _getTagProps = getTagProps({
          index
        }),
        {
          key
        } = _getTagProps,
        tagProps = (0,objectWithoutPropertiesLoose/* default */.A)(_getTagProps, GridFilterInputMultipleSingleSelect_excluded2);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseChip, (0,esm_extends/* default */.A)({
        variant: "outlined",
        size: "small",
        label: getOptionLabel(option)
      }, tagProps), key);
    }),
    renderInput: params => /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTextField, (0,esm_extends/* default */.A)({}, params, {
      label: apiRef.current.getLocaleText('filterPanelInputLabel'),
      placeholder: apiRef.current.getLocaleText('filterPanelInputPlaceholder'),
      InputLabelProps: (0,esm_extends/* default */.A)({}, params.InputLabelProps, {
        shrink: true
      }),
      inputRef: focusElementRef,
      type: "singleSelect"
    }, TextFieldProps, rootProps.slotProps?.baseTextField))
  }, other));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/colDef/gridSingleSelectOperators.js



const parseObjectValue = value => {
  if (value == null || !isObject(value)) {
    return value;
  }
  return value.value;
};
const getGridSingleSelectOperators = () => [{
  value: 'is',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || filterItem.value === '') {
      return null;
    }
    return value => parseObjectValue(value) === parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: 'not',
  getApplyFilterFn: filterItem => {
    if (filterItem.value == null || filterItem.value === '') {
      return null;
    }
    return value => parseObjectValue(value) !== parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: 'isAnyOf',
  getApplyFilterFn: filterItem => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValues = filterItem.value.map(parseObjectValue);
    return value => filterItemValues.includes(parseObjectValue(value));
  },
  InputComponent: GridFilterInputMultipleSingleSelect
}];
;// ../node_modules/@mui/x-data-grid/colDef/gridSingleSelectColDef.js







const isArrayOfObjects = options => {
  return typeof options[0] === 'object';
};
const defaultGetOptionValue = value => {
  return isObject(value) ? value.value : value;
};
const defaultGetOptionLabel = value => {
  return isObject(value) ? value.label : String(value);
};
const GRID_SINGLE_SELECT_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  type: 'singleSelect',
  getOptionLabel: defaultGetOptionLabel,
  getOptionValue: defaultGetOptionValue,
  valueFormatter(value, row, colDef, apiRef) {
    const rowId = gridRowIdSelector(apiRef.current.state, row);
    if (!isSingleSelectColDef(colDef)) {
      return '';
    }
    const valueOptions = getValueOptions(colDef, {
      id: rowId,
      row
    });
    if (value == null) {
      return '';
    }
    if (!valueOptions) {
      return value;
    }
    if (!isArrayOfObjects(valueOptions)) {
      return colDef.getOptionLabel(value);
    }
    const valueOption = valueOptions.find(option => colDef.getOptionValue(option) === value);
    return valueOption ? colDef.getOptionLabel(valueOption) : '';
  },
  renderEditCell: renderEditSingleSelectCell,
  filterOperators: getGridSingleSelectOperators(),
  // @ts-ignore
  pastedValueParser: (value, row, column) => {
    const colDef = column;
    const valueOptions = getValueOptions(colDef) || [];
    const getOptionValue = colDef.getOptionValue;
    const valueOption = valueOptions.find(option => {
      if (getOptionValue(option) === value) {
        return true;
      }
      return false;
    });
    if (valueOption) {
      return value;
    }
    // do not paste the value if it is not in the valueOptions
    return undefined;
  }
});
// EXTERNAL MODULE: ../node_modules/@mui/material/MenuList/MenuList.js + 1 modules
var MenuList = __webpack_require__(8848);
// EXTERNAL MODULE: ../node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(5216);
// EXTERNAL MODULE: ../node_modules/@mui/material/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(8535);
// EXTERNAL MODULE: ../node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(6823);
// EXTERNAL MODULE: ../node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(4159);
// EXTERNAL MODULE: ../node_modules/@mui/material/Popper/Popper.js + 55 modules
var Popper = __webpack_require__(1009);
;// ../node_modules/@mui/x-data-grid/components/menu/GridMenu.js


const GridMenu_excluded = ["open", "target", "onClose", "children", "position", "className", "onExited"];













const GridMenu_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['menu']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridMenuRoot = (0,styled/* default */.Ay)(Popper/* default */.A, {
  name: 'MuiDataGrid',
  slot: 'Menu',
  overridesResolver: (_, styles) => styles.menu
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal,
  [`& .${gridClasses.menuList}`]: {
    outline: 0
  }
}));
const transformOrigin = {
  'bottom-start': 'top left',
  'bottom-end': 'top right'
};
function GridMenu(props) {
  const {
      open,
      target,
      onClose,
      children,
      position,
      className,
      onExited
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridMenu_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes = GridMenu_useUtilityClasses(rootProps);
  const savedFocusRef = index_js_.useRef(null);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (open) {
      savedFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    } else {
      savedFocusRef.current?.focus?.();
      savedFocusRef.current = null;
    }
  }, [open]);
  index_js_.useEffect(() => {
    // Emit menuOpen or menuClose events
    const eventName = open ? 'menuOpen' : 'menuClose';
    apiRef.current.publishEvent(eventName, {
      target
    });
  }, [apiRef, open, target]);
  const handleExited = popperOnExited => node => {
    if (popperOnExited) {
      popperOnExited();
    }
    if (onExited) {
      onExited(node);
    }
  };
  const handleClickAway = event => {
    if (event.target && (target === event.target || target?.contains(event.target))) {
      return;
    }
    onClose(event);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenuRoot, (0,esm_extends/* default */.A)({
    as: rootProps.slots.basePopper,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps,
    open: open,
    anchorEl: target,
    transition: true,
    placement: position
  }, other, rootProps.slotProps?.basePopper, {
    children: ({
      TransitionProps,
      placement
    }) => /*#__PURE__*/(0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
      onClickAway: handleClickAway,
      mouseEvent: "onMouseDown",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Grow/* default */.A, (0,esm_extends/* default */.A)({}, TransitionProps, {
        style: {
          transformOrigin: transformOrigin[placement]
        },
        onExited: handleExited(TransitionProps?.onExited),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A, {
          children: children
        })
      }))
    })
  }));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/cell/GridActionsCell.js


const GridActionsCell_excluded = ["api", "colDef", "id", "hasFocus", "isEditable", "field", "value", "formattedValue", "row", "rowNode", "cellMode", "tabIndex", "position", "focusElementRef"];










const hasActions = colDef => typeof colDef.getActions === 'function';
function GridActionsCell(props) {
  const {
      colDef,
      id,
      hasFocus,
      tabIndex,
      position = 'bottom-end',
      focusElementRef
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridActionsCell_excluded);
  const [focusedButtonIndex, setFocusedButtonIndex] = index_js_.useState(-1);
  const [open, setOpen] = index_js_.useState(false);
  const apiRef = useGridApiContext();
  const rootRef = index_js_.useRef(null);
  const buttonRef = index_js_.useRef(null);
  const ignoreCallToFocus = index_js_.useRef(false);
  const touchRippleRefs = index_js_.useRef({});
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const menuId = useId();
  const buttonId = useId();
  const rootProps = useGridRootProps();
  if (!hasActions(colDef)) {
    throw new Error('MUI X: Missing the `getActions` property in the `GridColDef`.');
  }
  const options = colDef.getActions(apiRef.current.getRowParams(id));
  const iconButtons = options.filter(option => !option.props.showInMenu);
  const menuButtons = options.filter(option => option.props.showInMenu);
  const numberOfButtons = iconButtons.length + (menuButtons.length ? 1 : 0);
  index_js_.useLayoutEffect(() => {
    if (!hasFocus) {
      Object.entries(touchRippleRefs.current).forEach(([index, ref]) => {
        ref?.stop({}, () => {
          delete touchRippleRefs.current[index];
        });
      });
    }
  }, [hasFocus]);
  index_js_.useEffect(() => {
    if (focusedButtonIndex < 0 || !rootRef.current) {
      return;
    }
    if (focusedButtonIndex >= rootRef.current.children.length) {
      return;
    }
    const child = rootRef.current.children[focusedButtonIndex];
    child.focus({
      preventScroll: true
    });
  }, [focusedButtonIndex]);
  index_js_.useEffect(() => {
    if (!hasFocus) {
      setFocusedButtonIndex(-1);
      ignoreCallToFocus.current = false;
    }
  }, [hasFocus]);
  index_js_.useImperativeHandle(focusElementRef, () => ({
    focus() {
      // If ignoreCallToFocus is true, then one of the buttons was clicked and the focus is already set
      if (!ignoreCallToFocus.current) {
        // find the first focusable button and pass the index to the state
        const focusableButtonIndex = options.findIndex(o => !o.props.disabled);
        setFocusedButtonIndex(focusableButtonIndex);
      }
    }
  }), [options]);
  index_js_.useEffect(() => {
    if (focusedButtonIndex >= numberOfButtons) {
      setFocusedButtonIndex(numberOfButtons - 1);
    }
  }, [focusedButtonIndex, numberOfButtons]);
  const showMenu = () => {
    setOpen(true);
    setFocusedButtonIndex(numberOfButtons - 1);
    ignoreCallToFocus.current = true;
  };
  const hideMenu = () => {
    setOpen(false);
  };
  const toggleMenu = event => {
    event.stopPropagation();
    event.preventDefault();
    if (open) {
      hideMenu();
    } else {
      showMenu();
    }
  };
  const handleTouchRippleRef = index => instance => {
    touchRippleRefs.current[index] = instance;
  };
  const handleButtonClick = (index, onClick) => event => {
    setFocusedButtonIndex(index);
    ignoreCallToFocus.current = true;
    if (onClick) {
      onClick(event);
    }
  };
  const handleRootKeyDown = event => {
    if (numberOfButtons <= 1) {
      return;
    }
    const getNewIndex = (index, direction) => {
      if (index < 0 || index > options.length) {
        return index;
      }

      // for rtl mode we need to reverse the direction
      const rtlMod = isRtl ? -1 : 1;
      const indexMod = (direction === 'left' ? -1 : 1) * rtlMod;

      // if the button that should receive focus is disabled go one more step
      return options[index + indexMod]?.props.disabled ? getNewIndex(index + indexMod, direction) : index + indexMod;
    };
    let newIndex = focusedButtonIndex;
    if (event.key === 'ArrowRight') {
      newIndex = getNewIndex(focusedButtonIndex, 'right');
    } else if (event.key === 'ArrowLeft') {
      newIndex = getNewIndex(focusedButtonIndex, 'left');
    }
    if (newIndex < 0 || newIndex >= numberOfButtons) {
      return; // We're already in the first or last item = do nothing and let the grid listen the event
    }
    if (newIndex !== focusedButtonIndex) {
      event.preventDefault(); // Prevent scrolling
      event.stopPropagation(); // Don't stop propagation for other keys, for example ArrowUp
      setFocusedButtonIndex(newIndex);
    }
  };
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
    }
    if (['Tab', 'Escape'].includes(event.key)) {
      hideMenu();
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", (0,esm_extends/* default */.A)({
    role: "menu",
    ref: rootRef,
    tabIndex: -1,
    className: gridClasses.actionsCell,
    onKeyDown: handleRootKeyDown
  }, other, {
    children: [iconButtons.map((button, index) => /*#__PURE__*/index_js_.cloneElement(button, {
      key: index,
      touchRippleRef: handleTouchRippleRef(index),
      onClick: handleButtonClick(index, button.props.onClick),
      tabIndex: focusedButtonIndex === index ? tabIndex : -1
    })), menuButtons.length > 0 && buttonId && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
      ref: buttonRef,
      id: buttonId,
      "aria-label": apiRef.current.getLocaleText('actionsCellMore'),
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? menuId : undefined,
      role: "menuitem",
      size: "small",
      onClick: toggleMenu,
      touchRippleRef: handleTouchRippleRef(buttonId),
      tabIndex: focusedButtonIndex === iconButtons.length ? tabIndex : -1
    }, rootProps.slotProps?.baseIconButton, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.moreActionsIcon, {
        fontSize: "small"
      })
    })), menuButtons.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenu, {
      open: open,
      target: buttonRef.current,
      position: position,
      onClose: hideMenu,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuList/* default */.A, {
        id: menuId,
        className: gridClasses.menuList,
        onKeyDown: handleListKeyDown,
        "aria-labelledby": buttonId,
        variant: "menu",
        autoFocusItem: true,
        children: menuButtons.map((button, index) => /*#__PURE__*/index_js_.cloneElement(button, {
          key: index,
          closeMenu: hideMenu
        }))
      })
    })]
  }));
}
 false ? 0 : void 0;

const renderActionsCell = params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridActionsCell, (0,esm_extends/* default */.A)({}, params));
;// ../node_modules/@mui/x-data-grid/colDef/gridActionsColDef.js



const GRID_ACTIONS_COLUMN_TYPE = 'actions';
const GRID_ACTIONS_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_STRING_COL_DEF, {
  sortable: false,
  filterable: false,
  // @ts-ignore
  aggregable: false,
  width: 100,
  display: 'flex',
  align: 'center',
  headerAlign: 'center',
  headerName: '',
  disableColumnMenu: true,
  disableExport: true,
  renderCell: renderActionsCell,
  getApplyQuickFilterFn: undefined
});
;// ../node_modules/@mui/x-data-grid/colDef/gridDefaultColumnTypes.js






const DEFAULT_GRID_COL_TYPE_KEY = 'string';
const getGridDefaultColumnTypes = () => {
  const nativeColumnTypes = {
    string: GRID_STRING_COL_DEF,
    number: GRID_NUMERIC_COL_DEF,
    date: GRID_DATE_COL_DEF,
    dateTime: GRID_DATETIME_COL_DEF,
    boolean: GRID_BOOLEAN_COL_DEF,
    singleSelect: GRID_SINGLE_SELECT_COL_DEF,
    [GRID_ACTIONS_COLUMN_TYPE]: GRID_ACTIONS_COL_DEF,
    custom: GRID_STRING_COL_DEF
  };
  return nativeColumnTypes;
};
;// ../node_modules/@mui/x-data-grid/hooks/features/headerFiltering/gridHeaderFilteringSelectors.js

const gridHeaderFilteringStateSelector = state => state.headerFiltering;
const gridHeaderFilteringEnabledSelector = createSelector_createSelector(gridHeaderFilteringStateSelector,
// No initialization in MIT, so we need to default to false to be used by `getTotalHeaderHeight`
headerFilteringState => headerFilteringState?.enabled ?? false);
const gridHeaderFilteringEditFieldSelector = createSelector_createSelector(gridHeaderFilteringStateSelector, headerFilteringState => headerFilteringState.editing);
const gridHeaderFilteringMenuSelector = createSelector_createSelector(gridHeaderFilteringStateSelector, headerFilteringState => headerFilteringState.menuOpen);
;// ../node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsSelector.js

/**
 * @category ColumnGrouping
 * @ignore - do not document.
 */
const gridColumnGroupingSelector = state => state.columnGrouping;
const gridColumnGroupsUnwrappedModelSelector = createSelectorMemoized(gridColumnGroupingSelector, columnGrouping => columnGrouping?.unwrappedGroupingModel ?? {});
const gridColumnGroupsLookupSelector = createSelectorMemoized(gridColumnGroupingSelector, columnGrouping => columnGrouping?.lookup ?? {});
const gridColumnGroupsHeaderStructureSelector = createSelectorMemoized(gridColumnGroupingSelector, columnGrouping => columnGrouping?.headerStructure ?? []);
const gridColumnGroupsHeaderMaxDepthSelector = createSelector_createSelector(gridColumnGroupingSelector, columnGrouping => columnGrouping?.maxDepth ?? 0);
;// ../node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js








const COLUMNS_DIMENSION_PROPERTIES = ['maxWidth', 'minWidth', 'width', 'flex'];
const COLUMN_TYPES = getGridDefaultColumnTypes();

/**
 * Computes width for flex columns.
 * Based on CSS Flexbox specification:
 * https://drafts.csswg.org/css-flexbox-1/#resolve-flexible-lengths
 */
function computeFlexColumnsWidth({
  initialFreeSpace,
  totalFlexUnits,
  flexColumns
}) {
  const uniqueFlexColumns = new Set(flexColumns.map(col => col.field));
  const flexColumnsLookup = {
    all: {},
    frozenFields: [],
    freeze: field => {
      const value = flexColumnsLookup.all[field];
      if (value && value.frozen !== true) {
        flexColumnsLookup.all[field].frozen = true;
        flexColumnsLookup.frozenFields.push(field);
      }
    }
  };

  // Step 5 of https://drafts.csswg.org/css-flexbox-1/#resolve-flexible-lengths
  function loopOverFlexItems() {
    // 5a: If all the flex items on the line are frozen, free space has been distributed.
    if (flexColumnsLookup.frozenFields.length === uniqueFlexColumns.size) {
      return;
    }
    const violationsLookup = {
      min: {},
      max: {}
    };
    let remainingFreeSpace = initialFreeSpace;
    let flexUnits = totalFlexUnits;
    let totalViolation = 0;

    // 5b: Calculate the remaining free space
    flexColumnsLookup.frozenFields.forEach(field => {
      remainingFreeSpace -= flexColumnsLookup.all[field].computedWidth;
      flexUnits -= flexColumnsLookup.all[field].flex;
    });
    for (let i = 0; i < flexColumns.length; i += 1) {
      const column = flexColumns[i];
      if (flexColumnsLookup.all[column.field] && flexColumnsLookup.all[column.field].frozen === true) {
        continue;
      }

      // 5c: Distribute remaining free space proportional to the flex factors
      const widthPerFlexUnit = remainingFreeSpace / flexUnits;
      let computedWidth = widthPerFlexUnit * column.flex;

      // 5d: Fix min/max violations
      if (computedWidth < column.minWidth) {
        totalViolation += column.minWidth - computedWidth;
        computedWidth = column.minWidth;
        violationsLookup.min[column.field] = true;
      } else if (computedWidth > column.maxWidth) {
        totalViolation += column.maxWidth - computedWidth;
        computedWidth = column.maxWidth;
        violationsLookup.max[column.field] = true;
      }
      flexColumnsLookup.all[column.field] = {
        frozen: false,
        computedWidth,
        flex: column.flex
      };
    }

    // 5e: Freeze over-flexed items
    if (totalViolation < 0) {
      // Freeze all the items with max violations
      Object.keys(violationsLookup.max).forEach(field => {
        flexColumnsLookup.freeze(field);
      });
    } else if (totalViolation > 0) {
      // Freeze all the items with min violations
      Object.keys(violationsLookup.min).forEach(field => {
        flexColumnsLookup.freeze(field);
      });
    } else {
      // Freeze all items
      flexColumns.forEach(({
        field
      }) => {
        flexColumnsLookup.freeze(field);
      });
    }

    // 5f: Return to the start of this loop
    loopOverFlexItems();
  }
  loopOverFlexItems();
  return flexColumnsLookup.all;
}

/**
 * Compute the `computedWidth` (ie: the width the column should have during rendering) based on the `width` / `flex` / `minWidth` / `maxWidth` properties of `GridColDef`.
 * The columns already have been merged with there `type` default values for `minWidth`, `maxWidth` and `width`, thus the `!` for those properties below.
 * TODO: Unit test this function in depth and only keep basic cases for the whole grid testing.
 * TODO: Improve the `GridColDef` typing to reflect the fact that `minWidth` / `maxWidth` and `width` can't be null after the merge with the `type` default values.
 */
const hydrateColumnsWidth = (rawState, dimensions) => {
  const columnsLookup = {};
  let totalFlexUnits = 0;
  let widthAllocatedBeforeFlex = 0;
  const flexColumns = [];

  // For the non-flex columns, compute their width
  // For the flex columns, compute their minimum width and how much width must be allocated during the flex allocation
  rawState.orderedFields.forEach(columnField => {
    let column = rawState.lookup[columnField];
    let computedWidth = 0;
    let isFlex = false;
    if (rawState.columnVisibilityModel[columnField] !== false) {
      if (column.flex && column.flex > 0) {
        totalFlexUnits += column.flex;
        isFlex = true;
      } else {
        computedWidth = clamp(column.width || GRID_STRING_COL_DEF.width, column.minWidth || GRID_STRING_COL_DEF.minWidth, column.maxWidth || GRID_STRING_COL_DEF.maxWidth);
      }
      widthAllocatedBeforeFlex += computedWidth;
    }
    if (column.computedWidth !== computedWidth) {
      column = (0,esm_extends/* default */.A)({}, column, {
        computedWidth
      });
    }
    if (isFlex) {
      flexColumns.push(column);
    }
    columnsLookup[columnField] = column;
  });
  const availableWidth = dimensions === undefined ? 0 : dimensions.viewportOuterSize.width - (dimensions.hasScrollY ? dimensions.scrollbarSize : 0);
  const initialFreeSpace = Math.max(availableWidth - widthAllocatedBeforeFlex, 0);

  // Allocate the remaining space to the flex columns
  if (totalFlexUnits > 0 && availableWidth > 0) {
    const computedColumnWidths = computeFlexColumnsWidth({
      initialFreeSpace,
      totalFlexUnits,
      flexColumns
    });
    Object.keys(computedColumnWidths).forEach(field => {
      columnsLookup[field].computedWidth = computedColumnWidths[field].computedWidth;
    });
  }
  return (0,esm_extends/* default */.A)({}, rawState, {
    lookup: columnsLookup
  });
};

/**
 * Apply the order and the dimensions of the initial state.
 * The columns not registered in `orderedFields` will be placed after the imported columns.
 */
const applyInitialState = (columnsState, initialState) => {
  if (!initialState) {
    return columnsState;
  }
  const {
    orderedFields = [],
    dimensions = {}
  } = initialState;
  const columnsWithUpdatedDimensions = Object.keys(dimensions);
  if (columnsWithUpdatedDimensions.length === 0 && orderedFields.length === 0) {
    return columnsState;
  }
  const orderedFieldsLookup = {};
  const cleanOrderedFields = [];
  for (let i = 0; i < orderedFields.length; i += 1) {
    const field = orderedFields[i];

    // Ignores the fields in the initialState that matches no field on the current column state
    if (columnsState.lookup[field]) {
      orderedFieldsLookup[field] = true;
      cleanOrderedFields.push(field);
    }
  }
  const newOrderedFields = cleanOrderedFields.length === 0 ? columnsState.orderedFields : [...cleanOrderedFields, ...columnsState.orderedFields.filter(field => !orderedFieldsLookup[field])];
  const newColumnLookup = (0,esm_extends/* default */.A)({}, columnsState.lookup);
  for (let i = 0; i < columnsWithUpdatedDimensions.length; i += 1) {
    const field = columnsWithUpdatedDimensions[i];
    const newColDef = (0,esm_extends/* default */.A)({}, newColumnLookup[field], {
      hasBeenResized: true
    });
    Object.entries(dimensions[field]).forEach(([key, value]) => {
      newColDef[key] = value === -1 ? Infinity : value;
    });
    newColumnLookup[field] = newColDef;
  }
  const newColumnsState = (0,esm_extends/* default */.A)({}, columnsState, {
    orderedFields: newOrderedFields,
    lookup: newColumnLookup
  });
  return newColumnsState;
};
function getDefaultColTypeDef(type) {
  let colDef = COLUMN_TYPES[DEFAULT_GRID_COL_TYPE_KEY];
  if (type && COLUMN_TYPES[type]) {
    colDef = COLUMN_TYPES[type];
  }
  return colDef;
}
const createColumnsState = ({
  apiRef,
  columnsToUpsert,
  initialState,
  columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef),
  keepOnlyColumnsToUpsert = false
}) => {
  const isInsideStateInitializer = !apiRef.current.state.columns;
  let columnsState;
  if (isInsideStateInitializer) {
    columnsState = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel
    };
  } else {
    const currentState = gridColumnsStateSelector(apiRef.current.state);
    columnsState = {
      orderedFields: keepOnlyColumnsToUpsert ? [] : [...currentState.orderedFields],
      lookup: (0,esm_extends/* default */.A)({}, currentState.lookup),
      // Will be cleaned later if keepOnlyColumnsToUpsert=true
      columnVisibilityModel
    };
  }
  let columnsToKeep = {};
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    columnsToKeep = Object.keys(columnsState.lookup).reduce((acc, key) => (0,esm_extends/* default */.A)({}, acc, {
      [key]: false
    }), {});
  }
  const columnsToUpsertLookup = {};
  columnsToUpsert.forEach(newColumn => {
    const {
      field
    } = newColumn;
    columnsToUpsertLookup[field] = true;
    columnsToKeep[field] = true;
    let existingState = columnsState.lookup[field];
    if (existingState == null) {
      existingState = (0,esm_extends/* default */.A)({}, getDefaultColTypeDef(newColumn.type), {
        field,
        hasBeenResized: false
      });
      columnsState.orderedFields.push(field);
    } else if (keepOnlyColumnsToUpsert) {
      columnsState.orderedFields.push(field);
    }

    // If the column type has changed - merge the existing state with the default column type definition
    if (existingState && existingState.type !== newColumn.type) {
      existingState = (0,esm_extends/* default */.A)({}, getDefaultColTypeDef(newColumn.type), {
        field
      });
    }
    let hasBeenResized = existingState.hasBeenResized;
    COLUMNS_DIMENSION_PROPERTIES.forEach(key => {
      if (newColumn[key] !== undefined) {
        hasBeenResized = true;
        if (newColumn[key] === -1) {
          newColumn[key] = Infinity;
        }
      }
    });
    columnsState.lookup[field] = resolveProps(existingState, (0,esm_extends/* default */.A)({}, newColumn, {
      hasBeenResized
    }));
  });
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    Object.keys(columnsState.lookup).forEach(field => {
      if (!columnsToKeep[field]) {
        delete columnsState.lookup[field];
      }
    });
  }
  const columnsStateWithPreProcessing = apiRef.current.unstable_applyPipeProcessors('hydrateColumns', columnsState);
  const columnsStateWithPortableColumns = applyInitialState(columnsStateWithPreProcessing, initialState);
  return hydrateColumnsWidth(columnsStateWithPortableColumns, apiRef.current.getRootDimensions?.() ?? undefined);
};
function getFirstNonSpannedColumnToRender({
  firstColumnToRender,
  apiRef,
  firstRowToRender,
  lastRowToRender,
  visibleRows
}) {
  let firstNonSpannedColumnToRender = firstColumnToRender;
  let foundStableColumn = false;

  // Keep checking columns until we find one that's not spanned in any visible row
  while (!foundStableColumn) {
    foundStableColumn = true;
    for (let i = firstRowToRender; i < lastRowToRender; i += 1) {
      const row = visibleRows[i];
      if (row) {
        const rowId = visibleRows[i].id;
        const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, firstNonSpannedColumnToRender);
        if (cellColSpanInfo && cellColSpanInfo.spannedByColSpan && cellColSpanInfo.leftVisibleCellIndex < firstNonSpannedColumnToRender) {
          firstNonSpannedColumnToRender = cellColSpanInfo.leftVisibleCellIndex;
          foundStableColumn = false;
          break; // Check the new column index against the visible rows, because it might be spanned
        }
      }
    }
  }
  return firstNonSpannedColumnToRender;
}
function getTotalHeaderHeight(apiRef, props) {
  if (props.unstable_listView) {
    return 0;
  }
  const densityFactor = gridDensityFactorSelector(apiRef);
  const maxDepth = gridColumnGroupsHeaderMaxDepthSelector(apiRef);
  const isHeaderFilteringEnabled = gridHeaderFilteringEnabledSelector(apiRef);
  const columnHeadersHeight = Math.floor(props.columnHeaderHeight * densityFactor);
  const columnGroupHeadersHeight = Math.floor((props.columnGroupHeaderHeight ?? props.columnHeaderHeight) * densityFactor);
  const filterHeadersHeight = isHeaderFilteringEnabled ? Math.floor((props.headerFilterHeight ?? props.columnHeaderHeight) * densityFactor) : 0;
  return columnHeadersHeight + columnGroupHeadersHeight * maxDepth + filterHeadersHeight;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsMetaSelector.js
const gridRowsMetaSelector = state => state.rowsMeta;
;// ../node_modules/@mui/x-data-grid/components/GridScrollArea.js
'use client';

/* eslint-disable @typescript-eslint/no-use-before-define */


















const CLIFF = 1;
const SLOP = 1.5;
const GridScrollArea_useUtilityClasses = ownerState => {
  const {
    scrollDirection,
    classes
  } = ownerState;
  const slots = {
    root: ['scrollArea', `scrollArea--${scrollDirection}`]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridScrollAreaRawRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'ScrollArea',
  overridesResolver: (props, styles) => [{
    [`&.${gridClasses['scrollArea--left']}`]: styles['scrollArea--left']
  }, {
    [`&.${gridClasses['scrollArea--right']}`]: styles['scrollArea--right']
  }, {
    [`&.${gridClasses['scrollArea--up']}`]: styles['scrollArea--up']
  }, {
    [`&.${gridClasses['scrollArea--down']}`]: styles['scrollArea--down']
  }, styles.scrollArea]
})(() => ({
  position: 'absolute',
  zIndex: 101,
  // Horizontal scroll areas
  [`&.${gridClasses['scrollArea--left']}`]: {
    top: 0,
    left: 0,
    width: 20,
    bottom: 0
  },
  [`&.${gridClasses['scrollArea--right']}`]: {
    top: 0,
    right: 0,
    width: 20,
    bottom: 0
  },
  // Vertical scroll areas
  [`&.${gridClasses['scrollArea--up']}`]: {
    top: 0,
    left: 0,
    right: 0,
    height: 20
  },
  [`&.${gridClasses['scrollArea--down']}`]: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 20
  }
}));
const offsetSelector = createSelectorV8(gridDimensionsSelector, (dimensions, direction) => {
  if (direction === 'left') {
    return dimensions.leftPinnedWidth;
  }
  if (direction === 'right') {
    return dimensions.rightPinnedWidth + (dimensions.hasScrollX ? dimensions.scrollbarSize : 0);
  }
  // For vertical scroll areas, we don't need horizontal offset
  return 0;
});
function GridScrollAreaWrapper(props) {
  const apiRef = useGridApiContext();
  const [dragDirection, setDragDirection] = index_js_.useState('none');

  // Listen for both column and row drag events
  useGridApiEventHandler(apiRef, 'columnHeaderDragStart', () => setDragDirection('horizontal'));
  useGridApiEventHandler(apiRef, 'columnHeaderDragEnd', () => setDragDirection('none'));
  useGridApiEventHandler(apiRef, 'rowDragStart', () => setDragDirection('vertical'));
  useGridApiEventHandler(apiRef, 'rowDragEnd', () => setDragDirection('none'));
  if (dragDirection === 'none') {
    return null;
  }
  if (dragDirection === 'horizontal') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GridHorizontalScrollAreaContent, (0,esm_extends/* default */.A)({}, props));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridVerticalScrollAreaContent, (0,esm_extends/* default */.A)({}, props));
}
function GridHorizontalScrollAreaContent(props) {
  const {
    scrollDirection,
    scrollPosition
  } = props;
  const rootRef = index_js_.useRef(null);
  const apiRef = useGridApiContext();
  const timeout = useTimeout();
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const sideOffset = useGridSelectorV8(apiRef, offsetSelector, scrollDirection);
  const getCanScrollMore = () => {
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    if (scrollDirection === 'left') {
      // Only render if the user has not reached yet the start of the list
      return scrollPosition.current.left > 0;
    }
    if (scrollDirection === 'right') {
      // Only render if the user has not reached yet the end of the list
      const maxScrollLeft = columnsTotalWidth - dimensions.viewportInnerSize.width;
      return scrollPosition.current.left < maxScrollLeft;
    }
    return false;
  };
  const rootProps = useGridRootProps();
  const totalHeaderHeight = getTotalHeaderHeight(apiRef, rootProps);
  const headerHeight = Math.floor(rootProps.columnHeaderHeight * densityFactor);
  const style = (0,esm_extends/* default */.A)({
    height: headerHeight,
    top: totalHeaderHeight - headerHeight
  }, scrollDirection === 'left' ? {
    left: sideOffset
  } : {}, scrollDirection === 'right' ? {
    right: sideOffset
  } : {});
  const handleDragOver = useEventCallback_useEventCallback(event => {
    let offset;

    // Prevents showing the forbidden cursor
    event.preventDefault();
    if (scrollDirection === 'left') {
      offset = event.clientX - rootRef.current.getBoundingClientRect().right;
    } else if (scrollDirection === 'right') {
      offset = Math.max(1, event.clientX - rootRef.current.getBoundingClientRect().left);
    } else {
      throw new Error('MUI X: Wrong drag direction');
    }
    offset = (offset - CLIFF) * SLOP + CLIFF;

    // Avoid freeze and inertia.
    timeout.start(0, () => {
      apiRef.current.scroll({
        left: scrollPosition.current.left + offset,
        top: scrollPosition.current.top
      });
    });
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollAreaContent, (0,esm_extends/* default */.A)({}, props, {
    ref: rootRef,
    getCanScrollMore: getCanScrollMore,
    style: style,
    handleDragOver: handleDragOver
  }));
}
function GridVerticalScrollAreaContent(props) {
  const {
    scrollDirection,
    scrollPosition
  } = props;
  const rootRef = index_js_.useRef(null);
  const apiRef = useGridApiContext();
  const timeout = useTimeout();
  const rowsMeta = useGridSelector(apiRef, gridRowsMetaSelector);
  const getCanScrollMore = () => {
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    if (scrollDirection === 'up') {
      // Only render if the user has not reached yet the top of the list
      return scrollPosition.current.top > 0;
    }
    if (scrollDirection === 'down') {
      // Only render if the user has not reached yet the bottom of the list
      const totalRowsHeight = rowsMeta.currentPageTotalHeight || 0;
      const maxScrollTop = totalRowsHeight - dimensions.viewportInnerSize.height - dimensions.scrollbarSize;
      return scrollPosition.current.top < maxScrollTop;
    }
    return false;
  };
  const rootProps = useGridRootProps();
  const totalHeaderHeight = getTotalHeaderHeight(apiRef, rootProps);
  const style = {
    top: scrollDirection === 'up' ? totalHeaderHeight : undefined,
    bottom: scrollDirection === 'down' ? 0 : undefined
  };
  const handleDragOver = useEventCallback_useEventCallback(event => {
    let offset;

    // Prevents showing the forbidden cursor
    event.preventDefault();
    if (scrollDirection === 'up') {
      offset = event.clientY - rootRef.current.getBoundingClientRect().bottom;
    } else if (scrollDirection === 'down') {
      offset = Math.max(1, event.clientY - rootRef.current.getBoundingClientRect().top);
    } else {
      throw new Error('MUI X: Wrong drag direction');
    }
    offset = (offset - CLIFF) * SLOP + CLIFF;

    // Avoid freeze and inertia.
    timeout.start(0, () => {
      apiRef.current.scroll({
        left: scrollPosition.current.left,
        top: scrollPosition.current.top + offset
      });
    });
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollAreaContent, (0,esm_extends/* default */.A)({}, props, {
    ref: rootRef,
    getCanScrollMore: getCanScrollMore,
    style: style,
    handleDragOver: handleDragOver
  }));
}
const GridScrollAreaContent = forwardRef(function GridScrollAreaContent(props, ref) {
  const {
    scrollDirection,
    getCanScrollMore,
    style,
    handleDragOver
  } = props;
  const apiRef = useGridApiContext();
  const [canScrollMore, setCanScrollMore] = index_js_.useState(getCanScrollMore);
  const rootProps = useGridRootProps();
  const ownerState = (0,esm_extends/* default */.A)({}, rootProps, {
    scrollDirection
  });
  const classes = GridScrollArea_useUtilityClasses(ownerState);
  const handleScrolling = () => {
    setCanScrollMore(getCanScrollMore);
  };
  useGridApiEventHandler(apiRef, 'scrollPositionChange', handleScrolling);
  if (!canScrollMore) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollAreaRawRoot, {
    ref: ref,
    className: classes.root,
    ownerState: ownerState,
    onDragOver: handleDragOver,
    style: style
  });
});
const GridScrollArea = fastMemo(GridScrollAreaWrapper);
// EXTERNAL MODULE: consume shared module (default) react-dom@^18.2.0 (singleton) (fallback: ../node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(3476);
// EXTERNAL MODULE: ../node_modules/@mui/x-internals/reactMajor.js
var x_internals_reactMajor = __webpack_require__(3958);
;// ../node_modules/@mui/x-data-grid/hooks/utils/useRunOnce.js


const noop = () => {};

/**
 * Runs an effect once, when `condition` is true.
 */
const useRunOnce = (condition, effect) => {
  const didRun = index_js_.useRef(false);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (didRun.current || !condition) {
      return noop;
    }
    didRun.current = true;
    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [didRun.current || condition]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingSelector.js



/**
 * @category Sorting
 * @ignore - do not document.
 */
const gridSortingStateSelector = state => state.sorting;

/**
 * Get the id of the rows after the sorting process.
 * @category Sorting
 */
const gridSortedRowIdsSelector = createSelector_createSelector(gridSortingStateSelector, sortingState => sortingState.sortedRows);

/**
 * Get the id and the model of the rows after the sorting process.
 * @category Sorting
 */
const gridSortedRowEntriesSelector = createSelectorMemoized(gridSortedRowIdsSelector, gridRowsLookupSelector, gridRowTreeSelector, (sortedIds, idRowsLookup, rowTree) => sortedIds.reduce((acc, id) => {
  const model = idRowsLookup[id];
  if (model) {
    acc.push({
      id,
      model
    });
  } else {
    const rowNode = rowTree[id];
    if (rowNode && isAutogeneratedRowNode(rowNode)) {
      acc.push({
        id,
        model: {
          [GRID_ID_AUTOGENERATED]: id
        }
      });
    }
  }
  return acc;
}, []));

/**
 * Get the current sorting model.
 * @category Sorting
 */
const gridSortModelSelector = createSelector_createSelector(gridSortingStateSelector, sorting => sorting.sortModel);
/**
 * @category Sorting
 * @ignore - do not document.
 */
const gridSortColumnLookupSelector = createSelectorMemoized(gridSortModelSelector, sortModel => {
  const result = sortModel.reduce((res, sortItem, index) => {
    res[sortItem.field] = {
      sortDirection: sortItem.sort,
      sortIndex: sortModel.length > 1 ? index + 1 : undefined
    };
    return res;
  }, {});
  return result;
});

/**
 * @category Sorting
 * @ignore - do not document.
 */
const gridSortedRowIndexLookupSelector = createSelectorMemoized(gridSortedRowIdsSelector, sortedIds => {
  return sortedIds.reduce((acc, id, index) => {
    acc[id] = index;
    return acc;
  }, Object.create(null));
});
;// ../node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterSelector.js





/**
 * @category Filtering
 */
const gridFilterStateSelector = state => state.filter;

/**
 * Get the current filter model.
 * @category Filtering
 */
const gridFilterModelSelector = createSelector_createSelector(gridFilterStateSelector, filterState => filterState.filterModel);

/**
 * Get the current quick filter values.
 * @category Filtering
 */
const gridQuickFilterValuesSelector = createSelector_createSelector(gridFilterModelSelector, filterModel => filterModel.quickFilterValues);

/**
 * @category Visible rows
 * @ignore - do not document.
 */
const gridVisibleRowsLookupSelector = state => state.visibleRowsLookup;

/**
 * @category Filtering
 * @ignore - do not document.
 */
const gridFilteredRowsLookupSelector = createSelector_createSelector(gridFilterStateSelector, filterState => filterState.filteredRowsLookup);

/**
 * @category Filtering
 * @ignore - do not document.
 */
const gridFilteredChildrenCountLookupSelector = createSelector_createSelector(gridFilterStateSelector, filterState => filterState.filteredChildrenCountLookup);

/**
 * @category Filtering
 * @ignore - do not document.
 */
const gridFilteredDescendantCountLookupSelector = createSelector_createSelector(gridFilterStateSelector, filterState => filterState.filteredDescendantCountLookup);

/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
const gridExpandedSortedRowEntriesSelector = createSelectorMemoized(gridVisibleRowsLookupSelector, gridSortedRowEntriesSelector, gridRowMaximumTreeDepthSelector, gridFilterModelSelector, gridQuickFilterValuesSelector, (visibleRowsLookup, sortedRows, maxDepth, filterModel, quickFilterValues) => {
  if (maxDepth < 2 && !filterModel.items.length && !quickFilterValues?.length) {
    return sortedRows;
  }
  return sortedRows.filter(row => visibleRowsLookup[row.id] !== false);
});

/**
 * Get the id of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 */
const gridExpandedSortedRowIdsSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, visibleSortedRowEntries => visibleSortedRowEntries.map(row => row.id));

/**
 * Get the id and the model of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
const gridFilteredSortedRowEntriesSelector = createSelectorMemoized(gridFilteredRowsLookupSelector, gridSortedRowEntriesSelector, (filteredRowsLookup, sortedRows) => sortedRows.filter(row => filteredRowsLookup[row.id] !== false));

/**
 * Get the id of the rows accessible after the filtering process.
 * Contains the collapsed children.
 * @category Filtering
 */
const gridFilteredSortedRowIdsSelector = createSelectorMemoized(gridFilteredSortedRowEntriesSelector, filteredSortedRowEntries => filteredSortedRowEntries.map(row => row.id));

/**
 * Get the ids to position in the current tree level lookup of the rows accessible after the filtering process.
 * Does not contain the collapsed children.
 * @category Filtering
 * @ignore - do not document.
 */
const gridExpandedSortedRowTreeLevelPositionLookupSelector = createSelectorMemoized(gridExpandedSortedRowIdsSelector, gridRowTreeSelector, (visibleSortedRowIds, rowTree) => {
  const depthPositionCounter = {};
  let lastDepth = 0;
  return visibleSortedRowIds.reduce((acc, rowId) => {
    const rowNode = rowTree[rowId];
    if (!depthPositionCounter[rowNode.depth]) {
      depthPositionCounter[rowNode.depth] = 0;
    }

    // going deeper in the tree should reset the counter
    // since it might have been used in some other branch at the same level, up in the tree
    // going back up should keep the counter and continue where it left off
    if (rowNode.depth > lastDepth) {
      depthPositionCounter[rowNode.depth] = 0;
    }
    lastDepth = rowNode.depth;
    depthPositionCounter[rowNode.depth] += 1;
    acc[rowId] = depthPositionCounter[rowNode.depth];
    return acc;
  }, {});
});

/**
 * Get the id and the model of the top level rows accessible after the filtering process.
 * @category Filtering
 */
const gridFilteredSortedTopLevelRowEntriesSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, gridRowTreeSelector, gridRowMaximumTreeDepthSelector, (visibleSortedRows, rowTree, rowTreeDepth) => {
  if (rowTreeDepth < 2) {
    return visibleSortedRows;
  }
  return visibleSortedRows.filter(row => rowTree[row.id]?.depth === 0);
});

/**
 * Get the amount of rows accessible after the filtering process.
 * @category Filtering
 */
const gridExpandedRowCountSelector = createSelector_createSelector(gridExpandedSortedRowEntriesSelector, visibleSortedRows => visibleSortedRows.length);

/**
 * Get the amount of top level rows accessible after the filtering process.
 * @category Filtering
 */
const gridFilteredTopLevelRowCountSelector = createSelector_createSelector(gridFilteredSortedTopLevelRowEntriesSelector, visibleSortedTopLevelRows => visibleSortedTopLevelRows.length);

/**
 * Get the amount of rows accessible after the filtering process.
 * Includes top level and descendant rows.
 * @category Filtering
 */
const gridFilteredRowCountSelector = createSelector_createSelector(gridFilteredSortedRowEntriesSelector, filteredSortedRowEntries => filteredSortedRowEntries.length);

/**
 * Get the amount of descendant rows accessible after the filtering process.
 * @category Filtering
 */
const gridFilteredDescendantRowCountSelector = createSelector_createSelector(gridFilteredRowCountSelector, gridFilteredTopLevelRowCountSelector, (totalRowCount, topLevelRowCount) => totalRowCount - topLevelRowCount);

/**
 * @category Filtering
 * @ignore - do not document.
 */
const gridFilterActiveItemsSelector = createSelectorMemoized(gridFilterModelSelector, gridColumnLookupSelector, (filterModel, columnLookup) => filterModel.items?.filter(item => {
  if (!item.field) {
    return false;
  }
  const column = columnLookup[item.field];
  if (!column?.filterOperators || column?.filterOperators?.length === 0) {
    return false;
  }
  const filterOperator = column.filterOperators.find(operator => operator.value === item.operator);
  if (!filterOperator) {
    return false;
  }
  return !filterOperator.InputComponent || item.value != null && item.value?.toString() !== '';
}));
/**
 * @category Filtering
 * @ignore - do not document.
 */
const gridFilterActiveItemsLookupSelector = createSelectorMemoized(gridFilterActiveItemsSelector, activeFilters => {
  const result = activeFilters.reduce((res, filterItem) => {
    if (!res[filterItem.field]) {
      res[filterItem.field] = [filterItem];
    } else {
      res[filterItem.field].push(filterItem);
    }
    return res;
  }, {});
  return result;
});
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationUtils.js

const MAX_PAGE_SIZE = 100;
const defaultPageSize = autoPageSize => autoPageSize ? 0 : 100;
const getPageCount = (rowCount, pageSize, page) => {
  if (pageSize > 0 && rowCount > 0) {
    return Math.ceil(rowCount / pageSize);
  }
  if (rowCount === -1) {
    // With unknown row-count, we can assume a page after the current one
    return page + 2;
  }
  return 0;
};
const getDefaultGridPaginationModel = autoPageSize => ({
  page: 0,
  pageSize: autoPageSize ? 0 : 100
});
const getValidPage = (page, pageCount = 0) => {
  if (pageCount === 0) {
    return page;
  }
  return Math.max(Math.min(page, pageCount - 1), 0);
};
const throwIfPageSizeExceedsTheLimit = (pageSize, signatureProp) => {
  if (signatureProp === GridSignature.DataGrid && pageSize > MAX_PAGE_SIZE) {
    throw new Error(['MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.', 'You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature.'].join('\n'));
  }
};
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js




const ALL_RESULTS_PAGE_VALUE = -1;

/**
 * @category Pagination
 * @ignore - do not document.
 */
const gridPaginationSelector = state => state.pagination;

/**
 * @category Pagination
 * @ignore - do not document.
 */
const gridPaginationEnabledClientSideSelector = createSelector_createSelector(gridPaginationSelector, pagination => pagination.enabled && pagination.paginationMode === 'client');

/**
 * Get the pagination model
 * @category Pagination
 */
const gridPaginationModelSelector = createSelector_createSelector(gridPaginationSelector, pagination => pagination.paginationModel);

/**
 * Get the row count
 * @category Pagination
 */
const gridPaginationRowCountSelector = createSelector_createSelector(gridPaginationSelector, pagination => pagination.rowCount);

/**
 * Get the pagination meta
 * @category Pagination
 */
const gridPaginationMetaSelector = createSelector_createSelector(gridPaginationSelector, pagination => pagination.meta);

/**
 * Get the index of the page to render if the pagination is enabled
 * @category Pagination
 */
const gridPageSelector = createSelector_createSelector(gridPaginationModelSelector, paginationModel => paginationModel.page);

/**
 * Get the maximum amount of rows to display on a single page if the pagination is enabled
 * @category Pagination
 */
const gridPageSizeSelector = createSelector_createSelector(gridPaginationModelSelector, paginationModel => paginationModel.pageSize);

/**
 * Get the amount of pages needed to display all the rows if the pagination is enabled
 * @category Pagination
 */
const gridPageCountSelector = createSelector_createSelector(gridPaginationModelSelector, gridPaginationRowCountSelector, (paginationModel, rowCount) => getPageCount(rowCount, paginationModel.pageSize, paginationModel.page));

/**
 * Get the index of the first and the last row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
const gridPaginationRowRangeSelector = createSelectorMemoized(gridPaginationEnabledClientSideSelector, gridPaginationModelSelector, gridRowTreeSelector, gridRowMaximumTreeDepthSelector, gridExpandedSortedRowEntriesSelector, gridFilteredSortedTopLevelRowEntriesSelector, (clientSidePaginationEnabled, paginationModel, rowTree, rowTreeDepth, visibleSortedRowEntries, visibleSortedTopLevelRowEntries) => {
  if (!clientSidePaginationEnabled) {
    return null;
  }
  const visibleTopLevelRowCount = visibleSortedTopLevelRowEntries.length;
  const topLevelFirstRowIndex = Math.min(paginationModel.pageSize * paginationModel.page, visibleTopLevelRowCount - 1);
  const topLevelLastRowIndex = paginationModel.pageSize === ALL_RESULTS_PAGE_VALUE ? visibleTopLevelRowCount - 1 : Math.min(topLevelFirstRowIndex + paginationModel.pageSize - 1, visibleTopLevelRowCount - 1);

  // The range contains no element
  if (topLevelFirstRowIndex === -1 || topLevelLastRowIndex === -1) {
    return null;
  }

  // The tree is flat, there is no need to look for children
  if (rowTreeDepth < 2) {
    return {
      firstRowIndex: topLevelFirstRowIndex,
      lastRowIndex: topLevelLastRowIndex
    };
  }
  const topLevelFirstRow = visibleSortedTopLevelRowEntries[topLevelFirstRowIndex];
  const topLevelRowsInCurrentPageCount = topLevelLastRowIndex - topLevelFirstRowIndex + 1;
  const firstRowIndex = visibleSortedRowEntries.findIndex(row => row.id === topLevelFirstRow.id);
  let lastRowIndex = firstRowIndex;
  let topLevelRowAdded = 0;
  while (lastRowIndex < visibleSortedRowEntries.length && topLevelRowAdded <= topLevelRowsInCurrentPageCount) {
    const row = visibleSortedRowEntries[lastRowIndex];
    const depth = rowTree[row.id]?.depth;
    if (depth === undefined) {
      lastRowIndex += 1;
    } else {
      if (topLevelRowAdded < topLevelRowsInCurrentPageCount || depth > 0) {
        lastRowIndex += 1;
      }
      if (depth === 0) {
        topLevelRowAdded += 1;
      }
    }
  }
  return {
    firstRowIndex,
    lastRowIndex: lastRowIndex - 1
  };
});

/**
 * Get the id and the model of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
const gridPaginatedVisibleSortedGridRowEntriesSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, gridPaginationRowRangeSelector, (visibleSortedRowEntries, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowEntries.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});

/**
 * Get the id of each row to include in the current page if the pagination is enabled.
 * @category Pagination
 */
const gridPaginatedVisibleSortedGridRowIdsSelector = createSelectorMemoized(gridExpandedSortedRowIdsSelector, gridPaginationRowRangeSelector, (visibleSortedRowIds, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowIds.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});

/**
 * Get the rows, range and rowIndex lookup map after filtering and sorting.
 * Does not contain the collapsed children.
 * @category Pagination
 */
const gridVisibleRowsSelector = createSelectorMemoized(gridPaginationEnabledClientSideSelector, gridPaginationRowRangeSelector, gridPaginatedVisibleSortedGridRowEntriesSelector, gridExpandedSortedRowEntriesSelector, (clientPaginationEnabled, paginationRowRange, paginationRows, expandedSortedRowEntries) => {
  if (clientPaginationEnabled) {
    return {
      rows: paginationRows,
      range: paginationRowRange,
      rowToIndexMap: paginationRows.reduce((lookup, row, index) => {
        lookup.set(row.model, index);
        return lookup;
      }, new Map())
    };
  }
  return {
    rows: expandedSortedRowEntries,
    range: expandedSortedRowEntries.length === 0 ? null : {
      firstRowIndex: 0,
      lastRowIndex: expandedSortedRowEntries.length - 1
    },
    rowToIndexMap: expandedSortedRowEntries.reduce((lookup, row, index) => {
      lookup.set(row.model, index);
      return lookup;
    }, new Map())
  };
});
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js


const getVisibleRows = (apiRef, props) => {
  return gridVisibleRowsSelector(apiRef);
};

/**
 * Computes the list of rows that are reachable by scroll.
 * Depending on whether pagination is enabled, it will return the rows in the current page.
 * - If the pagination is disabled or in server mode, it equals all the visible rows.
 * - If the row tree has several layers, it contains up to `state.pageSize` top level rows and all their descendants.
 * - If the row tree is flat, it only contains up to `state.pageSize` rows.
 */

const useGridVisibleRows = (apiRef, props) => {
  return useGridSelector(apiRef, gridVisibleRowsSelector);
};
;// ../node_modules/@mui/x-data-grid/utils/platform.js
const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : 'empty';
const isFirefox = userAgent.includes('firefox');
;// ../node_modules/@mui/x-data-grid/hooks/features/rowSelection/gridRowSelectionSelector.js


const gridRowSelectionStateSelector = state => state.rowSelection;
const selectedGridRowsCountSelector = createSelector_createSelector(gridRowSelectionStateSelector, selection => selection.length);
const selectedGridRowsSelector = createSelectorMemoized(gridRowSelectionStateSelector, gridRowsLookupSelector, (selectedRows, rowsLookup) => new Map(selectedRows.map(id => [id, rowsLookup[id]])));
const selectedIdsLookupSelector = createSelectorMemoized(gridRowSelectionStateSelector, selection => selection.reduce((lookup, rowId) => {
  lookup[rowId] = rowId;
  return lookup;
}, {}));
;// ../node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js

/**
 * Get the columns state
 * @category Virtualization
 */
const gridVirtualizationSelector = state => state.virtualization;

/**
 * Get the enabled state for virtualization
 * @category Virtualization
 * @deprecated Use `gridVirtualizationColumnEnabledSelector` and `gridVirtualizationRowEnabledSelector`
 */
const gridVirtualizationEnabledSelector = createSelector_createSelector(gridVirtualizationSelector, state => state.enabled);

/**
 * Get the enabled state for column virtualization
 * @category Virtualization
 */
const gridVirtualizationColumnEnabledSelector = createSelector_createSelector(gridVirtualizationSelector, state => state.enabledForColumns);

/**
 * Get the enabled state for row virtualization
 * @category Virtualization
 */
const gridVirtualizationRowEnabledSelector = createSelector_createSelector(gridVirtualizationSelector, state => state.enabledForRows);

/**
 * Get the render context
 * @category Virtualization
 * @ignore - do not document.
 */
const gridRenderContextSelector = createSelector_createSelector(gridVirtualizationSelector, state => state.renderContext);

/**
 * Get the render context, with only columns filled in.
 * This is cached, so it can be used to only re-render when the column interval changes.
 * @category Virtualization
 * @ignore - do not document.
 */
const gridRenderContextColumnsSelector = createSelectorMemoized(state => state.virtualization.renderContext.firstColumnIndex, state => state.virtualization.renderContext.lastColumnIndex, (firstColumnIndex, lastColumnIndex) => ({
  firstColumnIndex,
  lastColumnIndex
}));
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js


function useGridApiMethod(privateApiRef, apiMethods, visibility) {
  const isFirstRender = index_js_.useRef(true);
  useEnhancedEffect_useEnhancedEffect(() => {
    isFirstRender.current = false;
    privateApiRef.current.register(visibility, apiMethods);
  }, [privateApiRef, visibility, apiMethods]);
  if (isFirstRender.current) {
    privateApiRef.current.register(visibility, apiMethods);
  }
}
;// ../node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualization.js



const EMPTY_RENDER_CONTEXT = {
  firstRowIndex: 0,
  lastRowIndex: 0,
  firstColumnIndex: 0,
  lastColumnIndex: 0
};
const virtualizationStateInitializer = (state, props) => {
  const {
    disableVirtualization,
    autoHeight
  } = props;
  const virtualization = {
    enabled: !disableVirtualization,
    enabledForColumns: !disableVirtualization,
    enabledForRows: !disableVirtualization && !autoHeight,
    renderContext: EMPTY_RENDER_CONTEXT
  };
  return (0,esm_extends/* default */.A)({}, state, {
    virtualization
  });
};
function useGridVirtualization(apiRef, props) {
  /*
   * API METHODS
   */

  const setVirtualization = enabled => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      virtualization: (0,esm_extends/* default */.A)({}, state.virtualization, {
        enabled,
        enabledForColumns: enabled,
        enabledForRows: enabled && !props.autoHeight
      })
    }));
  };
  const setColumnVirtualization = enabled => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      virtualization: (0,esm_extends/* default */.A)({}, state.virtualization, {
        enabledForColumns: enabled
      })
    }));
  };
  const api = {
    unstable_setVirtualization: setVirtualization,
    unstable_setColumnVirtualization: setColumnVirtualization
  };
  useGridApiMethod(apiRef, api, 'public');

  /*
   * EFFECTS
   */

  /* eslint-disable react-hooks/exhaustive-deps */
  index_js_.useEffect(() => {
    setVirtualization(!props.disableVirtualization);
  }, [props.disableVirtualization, props.autoHeight]);
  /* eslint-enable react-hooks/exhaustive-deps */
}
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningSelectors.js

const gridRowSpanningStateSelector = state => state.rowSpanning;
const gridRowSpanningHiddenCellsSelector = createSelector_createSelector(gridRowSpanningStateSelector, rowSpanning => rowSpanning.hiddenCells);
const gridRowSpanningSpannedCellsSelector = createSelector_createSelector(gridRowSpanningStateSelector, rowSpanning => rowSpanning.spannedCells);
const gridRowSpanningHiddenCellsOriginMapSelector = createSelector_createSelector(gridRowSpanningStateSelector, rowSpanning => rowSpanning.hiddenCellOriginMap);
;// ../node_modules/@mui/x-data-grid/hooks/features/listView/gridListViewSelectors.js
/**
 * Get the list column definition
 * @category List View
 * @ignore - Do not document
 */
const gridListColumnSelector = state => state.listViewColumn;
;// ../node_modules/@mui/x-data-grid/hooks/features/focus/gridFocusStateSelector.js

const gridFocusStateSelector = state => state.focus;
const gridFocusCellSelector = createSelector_createSelector(gridFocusStateSelector, focusState => focusState.cell);
const gridFocusColumnHeaderSelector = createSelector_createSelector(gridFocusStateSelector, focusState => focusState.columnHeader);
const gridFocusColumnHeaderFilterSelector = createSelector_createSelector(gridFocusStateSelector, focusState => focusState.columnHeaderFilter);
const gridFocusColumnGroupHeaderSelector = createSelector_createSelector(gridFocusStateSelector, focusState => focusState.columnGroupHeader);
const gridTabIndexStateSelector = state => state.tabIndex;
const gridTabIndexCellSelector = createSelector_createSelector(gridTabIndexStateSelector, state => state.cell);
const gridTabIndexColumnHeaderSelector = createSelector_createSelector(gridTabIndexStateSelector, state => state.columnHeader);
const gridTabIndexColumnHeaderFilterSelector = createSelector_createSelector(gridTabIndexStateSelector, state => state.columnHeaderFilter);
const gridTabIndexColumnGroupHeaderSelector = createSelector_createSelector(gridTabIndexStateSelector, state => state.columnGroupHeader);
;// ../node_modules/@mui/x-data-grid/hooks/features/virtualization/gridFocusedVirtualCellSelector.js








const gridIsFocusedCellOutOfContext = createSelector(gridFocusCellSelector, gridRenderContextSelector, gridVisibleRowsSelector, gridVisibleColumnDefinitionsSelector, gridRowsLookupSelector, (focusedCell, renderContext, currentPage, visibleColumns, rows) => {
  if (!focusedCell) {
    return false;
  }
  const row = rows[focusedCell.id];
  if (!row) {
    return false;
  }
  const rowIndex = currentPage.rowToIndexMap.get(row);
  const columnIndex = visibleColumns.slice(renderContext.firstColumnIndex, renderContext.lastColumnIndex).findIndex(column => column.field === focusedCell.field);
  const isInRenderContext = rowIndex !== undefined && columnIndex !== -1 && rowIndex >= renderContext.firstRowIndex && rowIndex <= renderContext.lastRowIndex;
  return !isInRenderContext;
});
const gridFocusedVirtualCellSelector = createSelectorMemoized(gridIsFocusedCellOutOfContext, gridVisibleColumnDefinitionsSelector, gridVisibleRowsSelector, gridRowsLookupSelector, gridFocusCellSelector, (isFocusedCellOutOfRenderContext, visibleColumns, currentPage, rows, focusedCell) => {
  if (!isFocusedCellOutOfRenderContext) {
    return null;
  }
  const row = rows[focusedCell.id];
  if (!row) {
    return null;
  }
  const rowIndex = currentPage.rowToIndexMap.get(row);
  if (rowIndex === undefined) {
    return null;
  }
  const columnIndex = visibleColumns.findIndex(column => column.field === focusedCell.field);
  if (columnIndex === -1) {
    return null;
  }
  return (0,esm_extends/* default */.A)({}, focusedCell, {
    rowIndex,
    columnIndex
  });
});
;// ../node_modules/@mui/x-data-grid/utils/roundToDecimalPlaces.js
function roundToDecimalPlaces(value, decimals) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}
;// ../node_modules/@mui/x-data-grid/utils/isJSDOM.js
const isJSDOM = typeof window !== 'undefined' && /jsdom|HappyDOM/.test(window.navigator.userAgent);
;// ../node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualScroller.js
































const MINIMUM_COLUMN_WIDTH = 50;
var ScrollDirection = /*#__PURE__*/function (ScrollDirection) {
  ScrollDirection[ScrollDirection["NONE"] = 0] = "NONE";
  ScrollDirection[ScrollDirection["UP"] = 1] = "UP";
  ScrollDirection[ScrollDirection["DOWN"] = 2] = "DOWN";
  ScrollDirection[ScrollDirection["LEFT"] = 3] = "LEFT";
  ScrollDirection[ScrollDirection["RIGHT"] = 4] = "RIGHT";
  return ScrollDirection;
}(ScrollDirection || {});
const EMPTY_SCROLL_POSITION = {
  top: 0,
  left: 0
};
const EMPTY_DETAIL_PANELS = Object.freeze(new Map());
const createScrollCache = (isRtl, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer) => ({
  direction: ScrollDirection.NONE,
  buffer: bufferForDirection(isRtl, ScrollDirection.NONE, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer)
});
const useGridVirtualScroller = () => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const {
    unstable_listView: listView
  } = rootProps;
  const visibleColumns = useGridSelector(apiRef, () => listView ? [gridListColumnSelector(apiRef.current.state)] : gridVisibleColumnDefinitionsSelector(apiRef));
  const enabledForRows = useGridSelector(apiRef, gridVirtualizationRowEnabledSelector) && !isJSDOM;
  const enabledForColumns = useGridSelector(apiRef, gridVirtualizationColumnEnabledSelector) && !isJSDOM;
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const pinnedColumnDefinitions = gridVisiblePinnedColumnDefinitionsSelector(apiRef);
  const pinnedColumns = listView ? EMPTY_PINNED_COLUMN_FIELDS : pinnedColumnDefinitions;
  const hasBottomPinnedRows = pinnedRows.bottom.length > 0;
  const [panels, setPanels] = index_js_.useState(EMPTY_DETAIL_PANELS);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const selectedRowsLookup = useGridSelector(apiRef, selectedIdsLookupSelector);
  const currentPage = useGridVisibleRows(apiRef);
  const mainRef = apiRef.current.mainElementRef;
  const scrollerRef = apiRef.current.virtualScrollerRef;
  const scrollbarVerticalRef = apiRef.current.virtualScrollbarVerticalRef;
  const scrollbarHorizontalRef = apiRef.current.virtualScrollbarHorizontalRef;
  const hasColSpan = useGridSelector(apiRef, gridHasColSpanSelector);
  const isRenderContextReady = index_js_.useRef(false);
  const rowHeight = useGridSelector(apiRef, gridRowHeightSelector);
  const contentHeight = useGridSelector(apiRef, gridContentHeightSelector);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const needsHorizontalScrollbar = useGridSelector(apiRef, needsHorizontalScrollbarSelector);
  const verticalScrollbarWidth = useGridSelector(apiRef, gridVerticalScrollbarWidthSelector);
  const gridHasFiller = useGridSelector(apiRef, gridHasFillerSelector);
  const previousSize = index_js_.useRef(null);
  const mainRefCallback = index_js_.useCallback(node => {
    mainRef.current = node;
    if (!node) {
      return undefined;
    }
    const initialRect = node.getBoundingClientRect();
    let lastSize = {
      width: roundToDecimalPlaces(initialRect.width, 1),
      height: roundToDecimalPlaces(initialRect.height, 1)
    };
    if (!previousSize.current || lastSize.width !== previousSize.current.width && lastSize.height !== previousSize.current.height) {
      previousSize.current = lastSize;
      apiRef.current.publishEvent('resize', lastSize);
    }
    if (typeof ResizeObserver === 'undefined') {
      return undefined;
    }
    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      if (!entry) {
        return;
      }
      const newSize = {
        width: roundToDecimalPlaces(entry.contentRect.width, 1),
        height: roundToDecimalPlaces(entry.contentRect.height, 1)
      };
      if (newSize.width === lastSize.width && newSize.height === lastSize.height) {
        return;
      }
      apiRef.current.publishEvent('resize', newSize);
      lastSize = newSize;
    });
    observer.observe(node);
    if (x_internals_reactMajor/* default */.A >= 19) {
      return () => {
        mainRef.current = null;
        observer.disconnect();
      };
    }
    return undefined;
  }, [apiRef, mainRef]);

  /*
   * Scroll context logic
   * ====================
   * We only render the cells contained in the `renderContext`. However, when the user starts scrolling the grid
   * in a direction, we want to render as many cells as possible in that direction, as to avoid presenting white
   * areas if the user scrolls too fast/far and the viewport ends up in a region we haven't rendered yet. To render
   * more cells, we store some offsets to add to the viewport in `scrollCache.buffer`. Those offsets make the render
   * context wider in the direction the user is going, but also makes the buffer around the viewport `0` for the
   * dimension (horizontal or vertical) in which the user is not scrolling. So if the normal viewport is 8 columns
   * wide, with a 1 column buffer (10 columns total), then we want it to be exactly 8 columns wide during vertical
   * scroll.
   * However, we don't want the rows in the old context to re-render from e.g. 10 columns to 8 columns, because that's
   * work that's not necessary. Thus we store the context at the start of the scroll in `frozenContext`, and the rows
   * that are part of this old context will keep their same render context as to avoid re-rendering.
   */
  const scrollPosition = index_js_.useRef(rootProps.initialState?.scroll ?? EMPTY_SCROLL_POSITION);
  const ignoreNextScrollEvent = index_js_.useRef(false);
  const previousContextScrollPosition = index_js_.useRef(EMPTY_SCROLL_POSITION);
  const previousRowContext = index_js_.useRef(EMPTY_RENDER_CONTEXT);
  const renderContext = useGridSelector(apiRef, gridRenderContextSelector);
  const focusedVirtualCell = useGridSelector(apiRef, gridFocusedVirtualCellSelector);
  const scrollTimeout = useTimeout();
  const frozenContext = index_js_.useRef(undefined);
  const scrollCache = useLazyRef(() => createScrollCache(isRtl, rootProps.rowBufferPx, rootProps.columnBufferPx, rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6)).current;
  const updateRenderContext = index_js_.useCallback(nextRenderContext => {
    if (areRenderContextsEqual(nextRenderContext, apiRef.current.state.virtualization.renderContext)) {
      return;
    }
    const didRowsIntervalChange = nextRenderContext.firstRowIndex !== previousRowContext.current.firstRowIndex || nextRenderContext.lastRowIndex !== previousRowContext.current.lastRowIndex;
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        virtualization: (0,esm_extends/* default */.A)({}, state.virtualization, {
          renderContext: nextRenderContext
        })
      });
    });

    // The lazy-loading hook is listening to `renderedRowsIntervalChange`,
    // but only does something if we already have a render context, because
    // otherwise we would call an update directly on mount
    const isReady = gridDimensionsSelector(apiRef.current.state).isReady;
    if (isReady && didRowsIntervalChange) {
      previousRowContext.current = nextRenderContext;
      apiRef.current.publishEvent('renderedRowsIntervalChange', nextRenderContext);
    }
    previousContextScrollPosition.current = scrollPosition.current;
  }, [apiRef]);
  const triggerUpdateRenderContext = useEventCallback_useEventCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return undefined;
    }
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    const maxScrollTop = Math.ceil(dimensions.minimumSize.height - dimensions.viewportOuterSize.height);
    const maxScrollLeft = Math.ceil(dimensions.minimumSize.width - dimensions.viewportInnerSize.width);

    // Clamp the scroll position to the viewport to avoid re-calculating the render context for scroll bounce
    const newScroll = {
      top: clamp(scroller.scrollTop, 0, maxScrollTop),
      left: isRtl ? clamp(scroller.scrollLeft, -maxScrollLeft, 0) : clamp(scroller.scrollLeft, 0, maxScrollLeft)
    };
    const dx = newScroll.left - scrollPosition.current.left;
    const dy = newScroll.top - scrollPosition.current.top;
    const isScrolling = dx !== 0 || dy !== 0;
    scrollPosition.current = newScroll;
    const direction = isScrolling ? directionForDelta(dx, dy) : ScrollDirection.NONE;

    // Since previous render, we have scrolled...
    const rowScroll = Math.abs(scrollPosition.current.top - previousContextScrollPosition.current.top);
    const columnScroll = Math.abs(scrollPosition.current.left - previousContextScrollPosition.current.left);

    // PERF: use the computed minimum column width instead of a static one
    const didCrossThreshold = rowScroll >= rowHeight || columnScroll >= MINIMUM_COLUMN_WIDTH;
    const didChangeDirection = scrollCache.direction !== direction;
    const shouldUpdate = didCrossThreshold || didChangeDirection;
    if (!shouldUpdate) {
      return renderContext;
    }

    // Render a new context

    if (didChangeDirection) {
      switch (direction) {
        case ScrollDirection.NONE:
        case ScrollDirection.LEFT:
        case ScrollDirection.RIGHT:
          frozenContext.current = undefined;
          break;
        default:
          frozenContext.current = renderContext;
          break;
      }
    }
    scrollCache.direction = direction;
    scrollCache.buffer = bufferForDirection(isRtl, direction, rootProps.rowBufferPx, rootProps.columnBufferPx, rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6);
    const inputs = inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns);
    const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
    if (!areRenderContextsEqual(nextRenderContext, renderContext)) {
      // Prevents batching render context changes
      react_dom_index_js_.flushSync(() => {
        updateRenderContext(nextRenderContext);
      });
      scrollTimeout.start(1000, triggerUpdateRenderContext);
    }
    return nextRenderContext;
  });
  const forceUpdateRenderContext = () => {
    // skip update if dimensions are not ready and virtualization is enabled
    if (!gridDimensionsSelector(apiRef.current.state).isReady && (enabledForRows || enabledForColumns)) {
      return;
    }
    const inputs = inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns);
    const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
    // Reset the frozen context when the render context changes, see the illustration in https://github.com/mui/mui-x/pull/12353
    frozenContext.current = undefined;
    updateRenderContext(nextRenderContext);
  };
  const handleScroll = useEventCallback_useEventCallback(() => {
    if (ignoreNextScrollEvent.current) {
      ignoreNextScrollEvent.current = false;
      return;
    }
    const nextRenderContext = triggerUpdateRenderContext();
    apiRef.current.publishEvent('scrollPositionChange', {
      top: scrollPosition.current.top,
      left: scrollPosition.current.left,
      renderContext: nextRenderContext
    });
  });
  const handleWheel = useEventCallback_useEventCallback(event => {
    apiRef.current.publishEvent('virtualScrollerWheel', {}, event);
  });
  const handleTouchMove = useEventCallback_useEventCallback(event => {
    apiRef.current.publishEvent('virtualScrollerTouchMove', {}, event);
  });
  const getRows = (params = {}) => {
    if (!params.rows && !currentPage.range) {
      return [];
    }
    const rowTree = gridRowTreeSelector(apiRef);
    let baseRenderContext = renderContext;
    if (params.renderContext) {
      baseRenderContext = params.renderContext;
      baseRenderContext.firstColumnIndex = renderContext.firstColumnIndex;
      baseRenderContext.lastColumnIndex = renderContext.lastColumnIndex;
    }
    const isLastSection = !hasBottomPinnedRows && params.position === undefined || hasBottomPinnedRows && params.position === 'bottom';
    const isPinnedSection = params.position !== undefined;
    let rowIndexOffset;
    // FIXME: Why is the switch check exhaustiveness not validated with typescript-eslint?
    // eslint-disable-next-line default-case
    switch (params.position) {
      case 'top':
        rowIndexOffset = 0;
        break;
      case 'bottom':
        rowIndexOffset = pinnedRows.top.length + currentPage.rows.length;
        break;
      case undefined:
        rowIndexOffset = pinnedRows.top.length;
        break;
    }
    const rowModels = params.rows ?? currentPage.rows;
    const firstRowToRender = baseRenderContext.firstRowIndex;
    const lastRowToRender = Math.min(baseRenderContext.lastRowIndex, rowModels.length);
    const rowIndexes = params.rows ? range(0, params.rows.length) : range(firstRowToRender, lastRowToRender);
    let virtualRowIndex = -1;
    if (!isPinnedSection && focusedVirtualCell) {
      if (focusedVirtualCell.rowIndex < firstRowToRender) {
        rowIndexes.unshift(focusedVirtualCell.rowIndex);
        virtualRowIndex = focusedVirtualCell.rowIndex;
      }
      if (focusedVirtualCell.rowIndex > lastRowToRender) {
        rowIndexes.push(focusedVirtualCell.rowIndex);
        virtualRowIndex = focusedVirtualCell.rowIndex;
      }
    }
    const rows = [];
    const rowProps = rootProps.slotProps?.row;
    const columnPositions = gridColumnPositionsSelector(apiRef);
    rowIndexes.forEach(rowIndexInPage => {
      const {
        id,
        model
      } = rowModels[rowIndexInPage];

      // In certain cases, the state might already be updated and `currentPage.rows` (which sets `rowModels`)
      // contains stale data.
      // In that case, skip any further row processing.
      // See:
      // - https://github.com/mui/mui-x/issues/16638
      // - https://github.com/mui/mui-x/issues/17022
      if (!rowTree[id]) {
        return;
      }
      const rowIndex = (currentPage?.range?.firstRowIndex || 0) + rowIndexOffset + rowIndexInPage;

      // NOTE: This is an expensive feature, the colSpan code could be optimized.
      if (hasColSpan) {
        const minFirstColumn = pinnedColumns.left.length;
        const maxLastColumn = visibleColumns.length - pinnedColumns.right.length;
        apiRef.current.calculateColSpan({
          rowId: id,
          minFirstColumn,
          maxLastColumn,
          columns: visibleColumns
        });
        if (pinnedColumns.left.length > 0) {
          apiRef.current.calculateColSpan({
            rowId: id,
            minFirstColumn: 0,
            maxLastColumn: pinnedColumns.left.length,
            columns: visibleColumns
          });
        }
        if (pinnedColumns.right.length > 0) {
          apiRef.current.calculateColSpan({
            rowId: id,
            minFirstColumn: visibleColumns.length - pinnedColumns.right.length,
            maxLastColumn: visibleColumns.length,
            columns: visibleColumns
          });
        }
      }
      const baseRowHeight = !apiRef.current.rowHasAutoHeight(id) ? apiRef.current.unstable_getRowHeight(id) : 'auto';
      let isSelected;
      if (selectedRowsLookup[id] == null) {
        isSelected = false;
      } else {
        isSelected = apiRef.current.isRowSelectable(id);
      }
      let isFirstVisible = false;
      if (params.position === undefined) {
        isFirstVisible = rowIndexInPage === 0;
      }
      let isLastVisible = false;
      const isLastVisibleInSection = rowIndexInPage === rowModels.length - 1;
      if (isLastSection) {
        if (!isPinnedSection) {
          const lastIndex = currentPage.rows.length - 1;
          const isLastVisibleRowIndex = rowIndexInPage === lastIndex;
          if (isLastVisibleRowIndex) {
            isLastVisible = true;
          }
        } else {
          isLastVisible = isLastVisibleInSection;
        }
      }
      let currentRenderContext = baseRenderContext;
      if (frozenContext.current && rowIndexInPage >= frozenContext.current.firstRowIndex && rowIndexInPage < frozenContext.current.lastRowIndex) {
        currentRenderContext = frozenContext.current;
      }
      const isVirtualFocusRow = rowIndexInPage === virtualRowIndex;
      const isVirtualFocusColumn = focusedVirtualCell?.rowIndex === rowIndex;
      const offsetLeft = computeOffsetLeft(columnPositions, currentRenderContext, pinnedColumns.left.length);
      const showBottomBorder = isLastVisibleInSection && params.position === 'top';
      const firstColumnIndex = currentRenderContext.firstColumnIndex;
      const lastColumnIndex = currentRenderContext.lastColumnIndex;
      rows.push(/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.row, (0,esm_extends/* default */.A)({
        row: model,
        rowId: id,
        index: rowIndex,
        selected: isSelected,
        offsetLeft: offsetLeft,
        columnsTotalWidth: columnsTotalWidth,
        rowHeight: baseRowHeight,
        pinnedColumns: pinnedColumns,
        visibleColumns: visibleColumns,
        firstColumnIndex: firstColumnIndex,
        lastColumnIndex: lastColumnIndex,
        focusedColumnIndex: isVirtualFocusColumn ? focusedVirtualCell.columnIndex : undefined,
        isFirstVisible: isFirstVisible,
        isLastVisible: isLastVisible,
        isNotVisible: isVirtualFocusRow,
        showBottomBorder: showBottomBorder,
        scrollbarWidth: verticalScrollbarWidth,
        gridHasFiller: gridHasFiller
      }, rowProps), id));
      if (isVirtualFocusRow) {
        return;
      }
      const panel = panels.get(id);
      if (panel) {
        rows.push(panel);
      }
      if (params.position === undefined && isLastVisibleInSection) {
        rows.push(apiRef.current.getInfiniteLoadingTriggerElement?.({
          lastRowId: id
        }));
      }
    });
    return rows;
  };
  const scrollerStyle = index_js_.useMemo(() => ({
    overflowX: !needsHorizontalScrollbar || listView ? 'hidden' : undefined,
    overflowY: rootProps.autoHeight ? 'hidden' : undefined
  }), [needsHorizontalScrollbar, rootProps.autoHeight, listView]);
  const contentSize = index_js_.useMemo(() => {
    const size = {
      width: needsHorizontalScrollbar ? columnsTotalWidth : 'auto',
      flexBasis: contentHeight,
      flexShrink: 0
    };
    if (size.flexBasis === 0) {
      size.flexBasis = minimalContentHeight; // Give room to show the overlay when there no rows.
    }
    return size;
  }, [columnsTotalWidth, contentHeight, needsHorizontalScrollbar]);
  const onContentSizeApplied = index_js_.useCallback(node => {
    if (!node) {
      return;
    }
    apiRef.current.publishEvent('virtualScrollerContentSizeChange', {
      columnsTotalWidth,
      contentHeight
    });
  }, [apiRef, columnsTotalWidth, contentHeight]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (!isRenderContextReady.current) {
      return;
    }
    apiRef.current.updateRenderContext?.();
  }, [apiRef, enabledForColumns, enabledForRows]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (listView) {
      scrollerRef.current.scrollLeft = 0;
    }
  }, [listView, scrollerRef]);
  useRunOnce(renderContext !== EMPTY_RENDER_CONTEXT, () => {
    apiRef.current.publishEvent('scrollPositionChange', {
      top: scrollPosition.current.top,
      left: scrollPosition.current.left,
      renderContext
    });
    isRenderContextReady.current = true;
    if (rootProps.initialState?.scroll && scrollerRef.current) {
      const scroller = scrollerRef.current;
      const {
        top,
        left
      } = rootProps.initialState.scroll;

      // On initial mount, if we have columns available, we can restore the horizontal scroll immediately, but we need to skip the resulting scroll event, otherwise we would recalculate the render context at position top=0, left=restoredValue, but the initial render context is already calculated based on the initial value of scrollPosition ref.
      const isScrollRestored = {
        top: !(top > 0),
        left: !(left > 0)
      };
      if (!isScrollRestored.left && columnsTotalWidth) {
        scroller.scrollLeft = left;
        ignoreNextScrollEvent.current = true;
        isScrollRestored.left = true;
      }

      // For the sake of completeness, but I'm not sure if contentHeight is ever available at this point. Maybe when virtualisation is disabled?
      if (!isScrollRestored.top && contentHeight) {
        scroller.scrollTop = top;
        ignoreNextScrollEvent.current = true;
        isScrollRestored.top = true;
      }

      // To restore the vertical scroll, we need to wait until the rows are available in the DOM (otherwise there's nowhere to scroll), but before paint to avoid reflows
      if (!isScrollRestored.top || !isScrollRestored.left) {
        const unsubscribeContentSizeChange = apiRef.current.subscribeEvent('virtualScrollerContentSizeChange', params => {
          if (!isScrollRestored.left && params.columnsTotalWidth) {
            scroller.scrollLeft = left;
            ignoreNextScrollEvent.current = true;
            isScrollRestored.left = true;
          }
          if (!isScrollRestored.top && params.contentHeight) {
            scroller.scrollTop = top;
            ignoreNextScrollEvent.current = true;
            isScrollRestored.top = true;
          }
          if (isScrollRestored.left && isScrollRestored.top) {
            unsubscribeContentSizeChange();
          }
        });
        return unsubscribeContentSizeChange;
      }
    }
    return undefined;
  });
  apiRef.current.register('private', {
    updateRenderContext: forceUpdateRenderContext
  });
  useGridApiOptionHandler(apiRef, 'sortedRowsSet', forceUpdateRenderContext);
  useGridApiOptionHandler(apiRef, 'paginationModelChange', forceUpdateRenderContext);
  useGridApiOptionHandler(apiRef, 'columnsChange', forceUpdateRenderContext);
  return {
    renderContext,
    setPanels,
    getRows,
    getContainerProps: () => ({
      ref: mainRefCallback
    }),
    getScrollerProps: () => ({
      ref: scrollerRef,
      onScroll: handleScroll,
      onWheel: handleWheel,
      onTouchMove: handleTouchMove,
      style: scrollerStyle,
      role: 'presentation',
      // `tabIndex` shouldn't be used along role=presentation, but it fixes a Firefox bug
      // https://github.com/mui/mui-x/pull/13891#discussion_r1683416024
      tabIndex: isFirefox ? -1 : undefined
    }),
    getContentProps: () => ({
      style: contentSize,
      role: 'presentation',
      ref: onContentSizeApplied
    }),
    getRenderZoneProps: () => ({
      role: 'rowgroup'
    }),
    getScrollbarVerticalProps: () => ({
      ref: scrollbarVerticalRef,
      scrollPosition
    }),
    getScrollbarHorizontalProps: () => ({
      ref: scrollbarHorizontalRef,
      scrollPosition
    }),
    getScrollAreaProps: () => ({
      scrollPosition
    })
  };
};
// dimension selectors
function needsHorizontalScrollbarSelector(state) {
  return state.dimensions.viewportOuterSize.width > 0 && state.dimensions.columnsTotalWidth > state.dimensions.viewportOuterSize.width;
}
function inputsSelector(apiRef, rootProps, enabledForRows, enabledForColumns) {
  const dimensions = gridDimensionsSelector(apiRef.current.state);
  const currentPage = getVisibleRows(apiRef, rootProps);
  const visibleColumns = rootProps.unstable_listView ? [gridListColumnSelector(apiRef.current.state)] : gridVisibleColumnDefinitionsSelector(apiRef);
  const hiddenCellsOriginMap = gridRowSpanningHiddenCellsOriginMapSelector(apiRef);
  const lastRowId = apiRef.current.state.rows.dataRowIds.at(-1);
  const lastColumn = visibleColumns.at(-1);
  return {
    enabledForRows,
    enabledForColumns,
    apiRef,
    autoHeight: rootProps.autoHeight,
    rowBufferPx: rootProps.rowBufferPx,
    columnBufferPx: rootProps.columnBufferPx,
    leftPinnedWidth: dimensions.leftPinnedWidth,
    columnsTotalWidth: dimensions.columnsTotalWidth,
    viewportInnerWidth: dimensions.viewportInnerSize.width,
    viewportInnerHeight: dimensions.viewportInnerSize.height,
    lastRowHeight: lastRowId !== undefined ? apiRef.current.unstable_getRowHeight(lastRowId) : 0,
    lastColumnWidth: lastColumn?.computedWidth ?? 0,
    rowsMeta: gridRowsMetaSelector(apiRef.current.state),
    columnPositions: gridColumnPositionsSelector(apiRef),
    rows: currentPage.rows,
    range: currentPage.range,
    pinnedColumns: gridVisiblePinnedColumnDefinitionsSelector(apiRef),
    visibleColumns,
    hiddenCellsOriginMap,
    listView: rootProps.unstable_listView ?? false,
    virtualizeColumnsWithAutoRowHeight: rootProps.virtualizeColumnsWithAutoRowHeight
  };
}
function computeRenderContext(inputs, scrollPosition, scrollCache) {
  const renderContext = {
    firstRowIndex: 0,
    lastRowIndex: inputs.rows.length,
    firstColumnIndex: 0,
    lastColumnIndex: inputs.visibleColumns.length
  };
  const {
    top,
    left
  } = scrollPosition;
  const realLeft = Math.abs(left) + inputs.leftPinnedWidth;
  if (inputs.enabledForRows) {
    // Clamp the value because the search may return an index out of bounds.
    // In the last index, this is not needed because Array.slice doesn't include it.
    let firstRowIndex = Math.min(getNearestIndexToRender(inputs, top, {
      atStart: true,
      lastPosition: inputs.rowsMeta.positions[inputs.rowsMeta.positions.length - 1] + inputs.lastRowHeight
    }), inputs.rowsMeta.positions.length - 1);

    // If any of the cells in the `firstRowIndex` is hidden due to an extended row span,
    // Make sure the row from where the rowSpan is originated is visible.
    const rowSpanHiddenCellOrigin = inputs.hiddenCellsOriginMap[firstRowIndex];
    if (rowSpanHiddenCellOrigin) {
      const minSpannedRowIndex = Math.min(...Object.values(rowSpanHiddenCellOrigin));
      firstRowIndex = Math.min(firstRowIndex, minSpannedRowIndex);
    }
    const lastRowIndex = inputs.autoHeight ? firstRowIndex + inputs.rows.length : getNearestIndexToRender(inputs, top + inputs.viewportInnerHeight);
    renderContext.firstRowIndex = firstRowIndex;
    renderContext.lastRowIndex = lastRowIndex;
  }
  if (inputs.listView) {
    return (0,esm_extends/* default */.A)({}, renderContext, {
      lastColumnIndex: 1
    });
  }
  if (inputs.enabledForColumns) {
    let firstColumnIndex = 0;
    let lastColumnIndex = inputs.columnPositions.length;
    let hasRowWithAutoHeight = false;
    const [firstRowToRender, lastRowToRender] = getIndexesToRender({
      firstIndex: renderContext.firstRowIndex,
      lastIndex: renderContext.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: inputs.rows.length,
      bufferBefore: scrollCache.buffer.rowBefore,
      bufferAfter: scrollCache.buffer.rowAfter,
      positions: inputs.rowsMeta.positions,
      lastSize: inputs.lastRowHeight
    });
    if (!inputs.virtualizeColumnsWithAutoRowHeight) {
      for (let i = firstRowToRender; i < lastRowToRender && !hasRowWithAutoHeight; i += 1) {
        const row = inputs.rows[i];
        hasRowWithAutoHeight = inputs.apiRef.current.rowHasAutoHeight(row.id);
      }
    }
    if (!hasRowWithAutoHeight || inputs.virtualizeColumnsWithAutoRowHeight) {
      firstColumnIndex = binarySearch(realLeft, inputs.columnPositions, {
        atStart: true,
        lastPosition: inputs.columnsTotalWidth
      });
      lastColumnIndex = binarySearch(realLeft + inputs.viewportInnerWidth, inputs.columnPositions);
    }
    renderContext.firstColumnIndex = firstColumnIndex;
    renderContext.lastColumnIndex = lastColumnIndex;
  }
  const actualRenderContext = deriveRenderContext(inputs, renderContext, scrollCache);
  return actualRenderContext;
}
function getNearestIndexToRender(inputs, offset, options) {
  const lastMeasuredIndexRelativeToAllRows = inputs.apiRef.current.getLastMeasuredRowIndex();
  let allRowsMeasured = lastMeasuredIndexRelativeToAllRows === Infinity;
  if (inputs.range?.lastRowIndex && !allRowsMeasured) {
    // Check if all rows in this page are already measured
    allRowsMeasured = lastMeasuredIndexRelativeToAllRows >= inputs.range.lastRowIndex;
  }
  const lastMeasuredIndexRelativeToCurrentPage = clamp(lastMeasuredIndexRelativeToAllRows - (inputs.range?.firstRowIndex || 0), 0, inputs.rowsMeta.positions.length);
  if (allRowsMeasured || inputs.rowsMeta.positions[lastMeasuredIndexRelativeToCurrentPage] >= offset) {
    // If all rows were measured (when no row has "auto" as height) or all rows before the offset
    // were measured, then use a binary search because it's faster.
    return binarySearch(offset, inputs.rowsMeta.positions, options);
  }

  // Otherwise, use an exponential search.
  // If rows have "auto" as height, their positions will be based on estimated heights.
  // In this case, we can skip several steps until we find a position higher than the offset.
  // Inspired by https://github.com/bvaughn/react-virtualized/blob/master/source/Grid/utils/CellSizeAndPositionManager.js
  return exponentialSearch(offset, inputs.rowsMeta.positions, lastMeasuredIndexRelativeToCurrentPage, options);
}

/**
 * Accepts as input a raw render context (the area visible in the viewport) and adds
 * computes the actual render context based on pinned elements, buffer dimensions and
 * spanning.
 */
function deriveRenderContext(inputs, nextRenderContext, scrollCache) {
  const [firstRowToRender, lastRowToRender] = getIndexesToRender({
    firstIndex: nextRenderContext.firstRowIndex,
    lastIndex: nextRenderContext.lastRowIndex,
    minFirstIndex: 0,
    maxLastIndex: inputs.rows.length,
    bufferBefore: scrollCache.buffer.rowBefore,
    bufferAfter: scrollCache.buffer.rowAfter,
    positions: inputs.rowsMeta.positions,
    lastSize: inputs.lastRowHeight
  });
  const [initialFirstColumnToRender, lastColumnToRender] = getIndexesToRender({
    firstIndex: nextRenderContext.firstColumnIndex,
    lastIndex: nextRenderContext.lastColumnIndex,
    minFirstIndex: inputs.pinnedColumns.left.length,
    maxLastIndex: inputs.visibleColumns.length - inputs.pinnedColumns.right.length,
    bufferBefore: scrollCache.buffer.columnBefore,
    bufferAfter: scrollCache.buffer.columnAfter,
    positions: inputs.columnPositions,
    lastSize: inputs.lastColumnWidth
  });
  const firstColumnToRender = getFirstNonSpannedColumnToRender({
    firstColumnToRender: initialFirstColumnToRender,
    apiRef: inputs.apiRef,
    firstRowToRender,
    lastRowToRender,
    visibleRows: inputs.rows
  });
  return {
    firstRowIndex: firstRowToRender,
    lastRowIndex: lastRowToRender,
    firstColumnIndex: firstColumnToRender,
    lastColumnIndex: lastColumnToRender
  };
}
/**
 * Use binary search to avoid looping through all possible positions.
 * The `options.atStart` provides the possibility to match for the first element that
 * intersects the screen, even if said element's start position is before `offset`. In
 * other words, we search for `offset + width`.
 */
function binarySearch(offset, positions, options = undefined, sliceStart = 0, sliceEnd = positions.length) {
  if (positions.length <= 0) {
    return -1;
  }
  if (sliceStart >= sliceEnd) {
    return sliceStart;
  }
  const pivot = sliceStart + Math.floor((sliceEnd - sliceStart) / 2);
  const position = positions[pivot];
  let isBefore;
  if (options?.atStart) {
    const width = (pivot === positions.length - 1 ? options.lastPosition : positions[pivot + 1]) - position;
    isBefore = offset - width < position;
  } else {
    isBefore = offset <= position;
  }
  return isBefore ? binarySearch(offset, positions, options, sliceStart, pivot) : binarySearch(offset, positions, options, pivot + 1, sliceEnd);
}
function exponentialSearch(offset, positions, index, options = undefined) {
  let interval = 1;
  while (index < positions.length && Math.abs(positions[index]) < offset) {
    index += interval;
    interval *= 2;
  }
  return binarySearch(offset, positions, options, Math.floor(index / 2), Math.min(index, positions.length));
}
function getIndexesToRender({
  firstIndex,
  lastIndex,
  bufferBefore,
  bufferAfter,
  minFirstIndex,
  maxLastIndex,
  positions,
  lastSize
}) {
  const firstPosition = positions[firstIndex] - bufferBefore;
  const lastPosition = positions[lastIndex] + bufferAfter;
  const firstIndexPadded = binarySearch(firstPosition, positions, {
    atStart: true,
    lastPosition: positions[positions.length - 1] + lastSize
  });
  const lastIndexPadded = binarySearch(lastPosition, positions);
  return [clamp(firstIndexPadded, minFirstIndex, maxLastIndex), clamp(lastIndexPadded, minFirstIndex, maxLastIndex)];
}
function areRenderContextsEqual(context1, context2) {
  if (context1 === context2) {
    return true;
  }
  return context1.firstRowIndex === context2.firstRowIndex && context1.lastRowIndex === context2.lastRowIndex && context1.firstColumnIndex === context2.firstColumnIndex && context1.lastColumnIndex === context2.lastColumnIndex;
}
function computeOffsetLeft(columnPositions, renderContext, pinnedLeftLength) {
  const left = (columnPositions[renderContext.firstColumnIndex] ?? 0) - (columnPositions[pinnedLeftLength] ?? 0);
  return Math.abs(left);
}
function directionForDelta(dx, dy) {
  if (dx === 0 && dy === 0) {
    return ScrollDirection.NONE;
  }
  /* eslint-disable */
  if (Math.abs(dy) >= Math.abs(dx)) {
    if (dy > 0) {
      return ScrollDirection.DOWN;
    } else {
      return ScrollDirection.UP;
    }
  } else {
    if (dx > 0) {
      return ScrollDirection.RIGHT;
    } else {
      return ScrollDirection.LEFT;
    }
  }
  /* eslint-enable */
}
function bufferForDirection(isRtl, direction, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer) {
  if (isRtl) {
    switch (direction) {
      case ScrollDirection.LEFT:
        direction = ScrollDirection.RIGHT;
        break;
      case ScrollDirection.RIGHT:
        direction = ScrollDirection.LEFT;
        break;
      default:
    }
  }
  switch (direction) {
    case ScrollDirection.NONE:
      return {
        rowAfter: rowBufferPx,
        rowBefore: rowBufferPx,
        columnAfter: columnBufferPx,
        columnBefore: columnBufferPx
      };
    case ScrollDirection.LEFT:
      return {
        rowAfter: 0,
        rowBefore: 0,
        columnAfter: 0,
        columnBefore: horizontalBuffer
      };
    case ScrollDirection.RIGHT:
      return {
        rowAfter: 0,
        rowBefore: 0,
        columnAfter: horizontalBuffer,
        columnBefore: 0
      };
    case ScrollDirection.UP:
      return {
        rowAfter: 0,
        rowBefore: verticalBuffer,
        columnAfter: 0,
        columnBefore: 0
      };
    case ScrollDirection.DOWN:
      return {
        rowAfter: verticalBuffer,
        rowBefore: 0,
        columnAfter: 0,
        columnBefore: 0
      };
    default:
      // eslint unable to figure out enum exhaustiveness
      throw new Error('unreachable');
  }
}
;// ../node_modules/@mui/x-data-grid/hooks/features/overlays/useGridOverlays.js






/**
 * Uses the grid state to determine which overlay to display.
 * Returns the active overlay type and the active loading overlay variant.
 */
const useGridOverlays = () => {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const visibleRowCount = useGridSelector(apiRef, gridExpandedRowCountSelector);
  const pinnedRowsCount = useGridSelector(apiRef, gridPinnedRowsCountSelector);
  const noRows = totalRowCount === 0 && pinnedRowsCount === 0;
  const loading = useGridSelector(apiRef, gridRowsLoadingSelector);
  const showNoRowsOverlay = !loading && noRows;
  const showNoResultsOverlay = !loading && totalRowCount > 0 && visibleRowCount === 0;
  let overlayType = null;
  let loadingOverlayVariant = null;
  if (showNoRowsOverlay) {
    overlayType = 'noRowsOverlay';
  }
  if (showNoResultsOverlay) {
    overlayType = 'noResultsOverlay';
  }
  if (loading) {
    overlayType = 'loadingOverlay';
    loadingOverlayVariant = rootProps.slotProps?.loadingOverlay?.[noRows ? 'noRowsVariant' : 'variant'] || null;
  }
  return {
    overlayType,
    loadingOverlayVariant
  };
};
;// ../node_modules/@mui/x-data-grid/components/base/GridOverlays.js













const GridOverlayWrapperRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'OverlayWrapper',
  shouldForwardProp: prop => prop !== 'overlayType' && prop !== 'loadingOverlayVariant',
  overridesResolver: (props, styles) => styles.overlayWrapper
})(({
  overlayType,
  loadingOverlayVariant
}) =>
// Skeleton overlay should flow with the scroll container and not be sticky
loadingOverlayVariant !== 'skeleton' ? {
  position: 'sticky',
  // To stay in place while scrolling
  top: 'var(--DataGrid-headersTotalHeight)',
  // TODO: take pinned rows into account
  left: 0,
  width: 0,
  // To stay above the content instead of shifting it down
  height: 0,
  // To stay above the content instead of shifting it down
  zIndex: overlayType === 'loadingOverlay' ? 5 // Should be above pinned columns, pinned rows, and detail panel
  : 4 // Should be above pinned columns and detail panel
} : {});
const GridOverlayWrapperInner = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'OverlayWrapperInner',
  shouldForwardProp: prop => prop !== 'overlayType' && prop !== 'loadingOverlayVariant',
  overridesResolver: (props, styles) => styles.overlayWrapperInner
})({});
const GridOverlays_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['overlayWrapper'],
    inner: ['overlayWrapperInner']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridOverlayWrapper(props) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  let height = Math.max(dimensions.viewportOuterSize.height - dimensions.topContainerHeight - dimensions.bottomContainerHeight - (dimensions.hasScrollX ? dimensions.scrollbarSize : 0), 0);
  if (height === 0) {
    height = minimalContentHeight;
  }
  const classes = GridOverlays_useUtilityClasses((0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlayWrapperRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root)
  }, props, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlayWrapperInner, (0,esm_extends/* default */.A)({
      className: (0,clsx/* default */.A)(classes.inner),
      style: {
        height,
        width: dimensions.viewportOuterSize.width
      }
    }, props))
  }));
}
 false ? 0 : void 0;
 false ? 0 : void 0;
function GridOverlays(props) {
  const {
    overlayType
  } = props;
  const rootProps = useGridRootProps();
  if (!overlayType) {
    return null;
  }
  const Overlay = rootProps.slots?.[overlayType];
  const overlayProps = rootProps.slotProps?.[overlayType];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlayWrapper, (0,esm_extends/* default */.A)({}, props, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Overlay, (0,esm_extends/* default */.A)({}, overlayProps))
  }));
}
;// ../node_modules/@mui/x-data-grid/hooks/features/columnMenu/columnMenuSelector.js
const gridColumnMenuSelector = state => state.columnMenu;
;// ../node_modules/@mui/x-data-grid/components/GridHeaders.js













function GridHeaders() {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const filterColumnLookup = useGridSelector(apiRef, gridFilterActiveItemsLookupSelector);
  const sortColumnLookup = useGridSelector(apiRef, gridSortColumnLookupSelector);
  const columnHeaderTabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const hasNoCellTabIndexState = useGridSelector(apiRef, () => gridTabIndexCellSelector(apiRef) === null);
  const columnGroupHeaderTabIndexState = useGridSelector(apiRef, gridTabIndexColumnGroupHeaderSelector);
  const columnHeaderFocus = useGridSelector(apiRef, gridFocusColumnHeaderSelector);
  const columnGroupHeaderFocus = useGridSelector(apiRef, gridFocusColumnGroupHeaderSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  const columnMenuState = useGridSelector(apiRef, gridColumnMenuSelector);
  const columnVisibility = useGridSelector(apiRef, gridColumnVisibilityModelSelector);
  const columnGroupsHeaderStructure = useGridSelector(apiRef, gridColumnGroupsHeaderStructureSelector);
  const hasOtherElementInTabSequence = !(columnGroupHeaderTabIndexState === null && columnHeaderTabIndexState === null && hasNoCellTabIndexState);
  const columnsContainerRef = apiRef.current.columnHeadersContainerRef;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnHeaders, (0,esm_extends/* default */.A)({
    ref: columnsContainerRef,
    visibleColumns: visibleColumns,
    filterColumnLookup: filterColumnLookup,
    sortColumnLookup: sortColumnLookup,
    columnHeaderTabIndexState: columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState: columnGroupHeaderTabIndexState,
    columnHeaderFocus: columnHeaderFocus,
    columnGroupHeaderFocus: columnGroupHeaderFocus,
    headerGroupingMaxDepth: headerGroupingMaxDepth,
    columnMenuState: columnMenuState,
    columnVisibility: columnVisibility,
    columnGroupsHeaderStructure: columnGroupsHeaderStructure,
    hasOtherElementInTabSequence: hasOtherElementInTabSequence
  }, rootProps.slotProps?.columnHeaders));
}
const MemoizedGridHeaders = fastMemo(GridHeaders);

;// ../node_modules/@mui/x-data-grid/components/GridConfigurationContext.js
'use client';


const GridConfigurationContext = /*#__PURE__*/index_js_.createContext(undefined);
if (false) // removed by dead control flow
{}
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridConfiguration.js


const useGridConfiguration = () => {
  const configuration = index_js_.useContext(GridConfigurationContext);
  if (configuration === undefined) {
    throw new Error(['MUI X: Could not find the Data Grid configuration context.', 'It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.', 'This can also happen if you are bundling multiple versions of the Data Grid.'].join('\n'));
  }
  return configuration;
};
;// ../node_modules/@mui/x-data-grid/components/virtualization/GridMainContainer.js







const GridPanelAnchor = (0,esm_styled/* default */.A)('div')({
  position: 'absolute',
  top: `var(--DataGrid-headersTotalHeight)`,
  left: 0,
  width: 'calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))'
});
const Element = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'Main',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.main, ownerState.hasPinnedRight && styles['main--hasPinnedRight'], ownerState.loadingOverlayVariant === 'skeleton' && styles['main--hasSkeletonLoadingOverlay']];
  }
})({
  flexGrow: 1,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column'
});
const GridMainContainer = forwardRef((props, ref) => {
  const {
    ownerState
  } = props;
  const rootProps = useGridRootProps();
  const configuration = useGridConfiguration();
  const ariaAttributes = configuration.hooks.useGridAriaAttributes();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Element, (0,esm_extends/* default */.A)({
    ownerState: ownerState,
    className: props.className,
    tabIndex: -1
  }, ariaAttributes, rootProps.slotProps?.main, {
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelAnchor, {
      role: "presentation",
      "data-id": "gridPanelAnchor"
    }), props.children]
  }));
});
;// ../node_modules/@mui/x-data-grid/components/virtualization/GridTopContainer.js







const GridTopContainer_useUtilityClasses = () => {
  const slots = {
    root: ['topContainer']
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};
const GridTopContainer_Element = (0,esm_styled/* default */.A)('div')({
  position: 'sticky',
  zIndex: 40,
  top: 0
});
function GridTopContainer(props) {
  const classes = GridTopContainer_useUtilityClasses();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridTopContainer_Element, (0,esm_extends/* default */.A)({}, props, {
    className: (0,clsx/* default */.A)(classes.root, gridClasses['container--top']),
    role: "presentation"
  }));
}
;// ../node_modules/@mui/x-data-grid/components/virtualization/GridBottomContainer.js







const GridBottomContainer_useUtilityClasses = () => {
  const slots = {
    root: ['bottomContainer']
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};
const GridBottomContainer_Element = (0,esm_styled/* default */.A)('div')({
  position: 'sticky',
  zIndex: 40,
  bottom: 'calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))'
});
function GridBottomContainer(props) {
  const classes = GridBottomContainer_useUtilityClasses();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridBottomContainer_Element, (0,esm_extends/* default */.A)({}, props, {
    className: (0,clsx/* default */.A)(classes.root, gridClasses['container--bottom']),
    role: "presentation"
  }));
}
;// ../node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerContent.js









const GridVirtualScrollerContent_useUtilityClasses = (props, overflowedContent) => {
  const {
    classes
  } = props;
  const slots = {
    root: ['virtualScrollerContent', overflowedContent && 'virtualScrollerContent--overflowed']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const VirtualScrollerContentRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'VirtualScrollerContent',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.virtualScrollerContent, ownerState.overflowedContent && styles['virtualScrollerContent--overflowed']];
  }
})({});
const GridVirtualScrollerContent = forwardRef(function GridVirtualScrollerContent(props, ref) {
  const rootProps = useGridRootProps();
  const overflowedContent = !rootProps.autoHeight && props.style?.minHeight === 'auto';
  const classes = GridVirtualScrollerContent_useUtilityClasses(rootProps, overflowedContent);
  const ownerState = {
    classes: rootProps.classes,
    overflowedContent
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(VirtualScrollerContentRoot, (0,esm_extends/* default */.A)({}, props, {
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, props.className),
    ref: ref
  }));
});

;// ../node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerFiller.js








const Filler = (0,esm_styled/* default */.A)('div')({
  display: 'flex',
  flexDirection: 'row',
  width: 'var(--DataGrid-rowWidth)',
  boxSizing: 'border-box'
});
const Pinned = (0,esm_styled/* default */.A)('div')({
  position: 'sticky',
  height: '100%',
  boxSizing: 'border-box',
  borderTop: '1px solid var(--rowBorderColor)',
  backgroundColor: 'var(--DataGrid-pinnedBackground)'
});
const PinnedLeft = (0,esm_styled/* default */.A)(Pinned)({
  left: 0,
  borderRight: '1px solid var(--rowBorderColor)'
});
const PinnedRight = (0,esm_styled/* default */.A)(Pinned)({
  right: 0,
  borderLeft: '1px solid var(--rowBorderColor)'
});
const Main = (0,esm_styled/* default */.A)('div')({
  flexGrow: 1,
  borderTop: '1px solid var(--rowBorderColor)'
});
function GridVirtualScrollerFiller({
  rowsLength
}) {
  const apiRef = useGridApiContext();
  const {
    viewportOuterSize,
    minimumSize,
    hasScrollX,
    hasScrollY,
    scrollbarSize,
    leftPinnedWidth,
    rightPinnedWidth
  } = useGridSelector(apiRef, gridDimensionsSelector);
  const height = hasScrollX ? scrollbarSize : 0;
  const needsLastRowBorder = viewportOuterSize.height - minimumSize.height > 0;
  if (height === 0 && !needsLastRowBorder) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Filler, {
    className: gridClasses.filler,
    role: "presentation",
    style: {
      height,
      '--rowBorderColor': rowsLength === 0 ? 'transparent' : 'var(--DataGrid-rowBorderColor)'
    },
    children: [leftPinnedWidth > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(PinnedLeft, {
      className: gridClasses['filler--pinnedLeft'],
      style: {
        width: leftPinnedWidth
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Main, {}), rightPinnedWidth > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(PinnedRight, {
      className: gridClasses['filler--pinnedRight'],
      style: {
        width: rightPinnedWidth + (hasScrollY ? scrollbarSize : 0)
      }
    })]
  });
}
const Memoized = fastMemo(GridVirtualScrollerFiller);

;// ../node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerRenderZone.js


const GridVirtualScrollerRenderZone_excluded = ["className"];












const GridVirtualScrollerRenderZone_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['virtualScrollerRenderZone']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const VirtualScrollerRenderZoneRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'VirtualScrollerRenderZone',
  overridesResolver: (props, styles) => styles.virtualScrollerRenderZone
})({
  position: 'absolute',
  display: 'flex',
  // Prevents margin collapsing when using `getRowSpacing`
  flexDirection: 'column'
});
const GridVirtualScrollerRenderZone = forwardRef(function GridVirtualScrollerRenderZone(props, ref) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridVirtualScrollerRenderZone_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes = GridVirtualScrollerRenderZone_useUtilityClasses(rootProps);
  const offsetTop = useGridSelector(apiRef, () => {
    const renderContext = gridRenderContextSelector(apiRef);
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    return rowsMeta.positions[renderContext.firstRowIndex] ?? 0;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(VirtualScrollerRenderZoneRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps,
    style: {
      transform: `translate3d(0, ${offsetTop}px, 0)`
    }
  }, other, {
    ref: ref
  }));
});

;// ../node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollbar.js










const GridVirtualScrollbar_useUtilityClasses = (ownerState, position) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['scrollbar', `scrollbar--${position}`],
    content: ['scrollbarContent']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const Scrollbar = (0,esm_styled/* default */.A)('div')({
  position: 'absolute',
  display: 'inline-block',
  zIndex: 60,
  '&:hover': {
    zIndex: 70
  },
  // In macOS Safari and Gnome Web, scrollbars are overlaid and don't affect the layout. So we consider
  // their size to be 0px throughout all the calculations, but the floating scrollbar container does need
  // to appear and have a real size. We set it to 14px because it seems like an acceptable value and we
  // don't have a method to find the required size for scrollbars on those platforms.
  '--size': 'calc(max(var(--DataGrid-scrollbarSize), 14px))'
});
const ScrollbarVertical = (0,esm_styled/* default */.A)(Scrollbar)({
  width: 'var(--size)',
  height: 'calc(var(--DataGrid-hasScrollY) * (100% - var(--DataGrid-topContainerHeight) - var(--DataGrid-bottomContainerHeight) - var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize)))',
  overflowY: 'auto',
  overflowX: 'hidden',
  // Disable focus-visible style, it's a scrollbar.
  outline: 0,
  '& > div': {
    width: 'var(--size)'
  },
  top: 'var(--DataGrid-topContainerHeight)',
  right: '0px'
});
const ScrollbarHorizontal = (0,esm_styled/* default */.A)(Scrollbar)({
  width: '100%',
  height: 'var(--size)',
  overflowY: 'hidden',
  overflowX: 'auto',
  // Disable focus-visible style, it's a scrollbar.
  outline: 0,
  '& > div': {
    height: 'var(--size)'
  },
  bottom: '0px'
});
const GridVirtualScrollbar = forwardRef(function GridVirtualScrollbar(props, ref) {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const isLocked = index_js_.useRef(false);
  const lastPosition = index_js_.useRef(0);
  const scrollbarRef = index_js_.useRef(null);
  const contentRef = index_js_.useRef(null);
  const classes = GridVirtualScrollbar_useUtilityClasses(rootProps, props.position);
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const propertyDimension = props.position === 'vertical' ? 'height' : 'width';
  const propertyScroll = props.position === 'vertical' ? 'scrollTop' : 'scrollLeft';
  const propertyScrollPosition = props.position === 'vertical' ? 'top' : 'left';
  const hasScroll = props.position === 'vertical' ? dimensions.hasScrollX : dimensions.hasScrollY;
  const contentSize = dimensions.minimumSize[propertyDimension] + (hasScroll ? dimensions.scrollbarSize : 0);
  const scrollbarSize = props.position === 'vertical' ? dimensions.viewportInnerSize.height : dimensions.viewportOuterSize.width;
  const scrollbarInnerSize = scrollbarSize * (contentSize / dimensions.viewportOuterSize[propertyDimension]);
  const onScrollerScroll = useEventCallback_useEventCallback(() => {
    const scrollbar = scrollbarRef.current;
    const scrollPosition = props.scrollPosition.current;
    if (!scrollbar) {
      return;
    }
    if (scrollPosition[propertyScrollPosition] === lastPosition.current) {
      return;
    }
    lastPosition.current = scrollPosition[propertyScrollPosition];
    if (isLocked.current) {
      isLocked.current = false;
      return;
    }
    isLocked.current = true;
    const value = scrollPosition[propertyScrollPosition] / contentSize;
    scrollbar[propertyScroll] = value * scrollbarInnerSize;
  });
  const onScrollbarScroll = useEventCallback_useEventCallback(() => {
    const scroller = apiRef.current.virtualScrollerRef.current;
    const scrollbar = scrollbarRef.current;
    if (!scrollbar) {
      return;
    }
    if (isLocked.current) {
      isLocked.current = false;
      return;
    }
    isLocked.current = true;
    const value = scrollbar[propertyScroll] / scrollbarInnerSize;
    scroller[propertyScroll] = value * contentSize;
  });
  useOnMount(() => {
    const scroller = apiRef.current.virtualScrollerRef.current;
    const scrollbar = scrollbarRef.current;
    const options = {
      passive: true
    };
    scroller.addEventListener('scroll', onScrollerScroll, options);
    scrollbar.addEventListener('scroll', onScrollbarScroll, options);
    return () => {
      scroller.removeEventListener('scroll', onScrollerScroll, options);
      scrollbar.removeEventListener('scroll', onScrollbarScroll, options);
    };
  });
  index_js_.useEffect(() => {
    const content = contentRef.current;
    content.style.setProperty(propertyDimension, `${scrollbarInnerSize}px`);
  }, [scrollbarInnerSize, propertyDimension]);
  const Container = props.position === 'vertical' ? ScrollbarVertical : ScrollbarHorizontal;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Container, {
    ref: useForkRef(ref, scrollbarRef),
    className: classes.root,
    style: props.position === 'vertical' && rootProps.unstable_listView ? {
      height: '100%',
      top: 0
    } : undefined,
    tabIndex: -1,
    "aria-hidden": "true"
    // tabIndex does not prevent focus with a mouse click, throwing a console error
    // https://github.com/mui/mui-x/issues/16706
    ,
    onFocus: event => {
      event.target.blur();
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: contentRef,
      className: classes.content
    })
  });
});

;// ../node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScroller.js






















const GridVirtualScroller_useUtilityClasses = ownerState => {
  const {
    classes,
    hasScrollX,
    hasPinnedRight,
    loadingOverlayVariant
  } = ownerState;
  const slots = {
    root: ['main', hasPinnedRight && 'main--hasPinnedRight', loadingOverlayVariant === 'skeleton' && 'main--hasSkeletonLoadingOverlay'],
    scroller: ['virtualScroller', hasScrollX && 'virtualScroller--hasScrollX']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const Scroller = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'VirtualScroller',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.virtualScroller, ownerState.hasScrollX && styles['virtualScroller--hasScrollX']];
  }
})({
  position: 'relative',
  height: '100%',
  flexGrow: 1,
  overflow: 'scroll',
  scrollbarWidth: 'none' /* Firefox */,
  display: 'flex',
  flexDirection: 'column',
  '&::-webkit-scrollbar': {
    display: 'none' /* Safari and Chrome */
  },
  '@media print': {
    overflow: 'hidden'
  },
  // See https://github.com/mui/mui-x/issues/10547
  zIndex: 0
});
const hasPinnedRightSelector = state => state.dimensions.rightPinnedWidth > 0;
function GridVirtualScroller(props) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const hasScrollY = useGridSelector(apiRef, gridHasScrollYSelector);
  const hasScrollX = useGridSelector(apiRef, gridHasScrollXSelector);
  const hasPinnedRight = useGridSelector(apiRef, hasPinnedRightSelector);
  const hasBottomFiller = useGridSelector(apiRef, gridHasBottomFillerSelector);
  const overlaysProps = useGridOverlays();
  const ownerState = {
    classes: rootProps.classes,
    hasScrollX,
    hasPinnedRight,
    loadingOverlayVariant: overlaysProps.loadingOverlayVariant
  };
  const classes = GridVirtualScroller_useUtilityClasses(ownerState);
  const virtualScroller = useGridVirtualScroller();
  const {
    getContainerProps,
    getScrollerProps,
    getContentProps,
    getRenderZoneProps,
    getScrollbarVerticalProps,
    getScrollbarHorizontalProps,
    getRows,
    getScrollAreaProps
  } = virtualScroller;
  const rows = getRows();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridMainContainer, (0,esm_extends/* default */.A)({
    className: classes.root
  }, getContainerProps(), {
    ownerState: ownerState,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollArea, (0,esm_extends/* default */.A)({
      scrollDirection: "left"
    }, getScrollAreaProps())), /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollArea, (0,esm_extends/* default */.A)({
      scrollDirection: "right"
    }, getScrollAreaProps())), /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollArea, (0,esm_extends/* default */.A)({
      scrollDirection: "up"
    }, getScrollAreaProps())), /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollArea, (0,esm_extends/* default */.A)({
      scrollDirection: "down"
    }, getScrollAreaProps())), /*#__PURE__*/(0,jsx_runtime.jsxs)(Scroller, (0,esm_extends/* default */.A)({
      className: classes.scroller
    }, getScrollerProps(), {
      ownerState: ownerState,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(GridTopContainer, {
        children: [!rootProps.unstable_listView && /*#__PURE__*/(0,jsx_runtime.jsx)(MemoizedGridHeaders, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.pinnedRows, {
          position: "top",
          virtualScroller: virtualScroller
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlays, (0,esm_extends/* default */.A)({}, overlaysProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(GridVirtualScrollerContent, (0,esm_extends/* default */.A)({}, getContentProps(), {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(GridVirtualScrollerRenderZone, (0,esm_extends/* default */.A)({}, getRenderZoneProps(), {
          children: [rows, /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.detailPanels, {
            virtualScroller: virtualScroller
          })]
        }))
      })), hasBottomFiller && /*#__PURE__*/(0,jsx_runtime.jsx)(Memoized, {
        rowsLength: rows.length
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(GridBottomContainer, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.pinnedRows, {
          position: "bottom",
          virtualScroller: virtualScroller
        })
      })]
    })), hasScrollX && !rootProps.unstable_listView && /*#__PURE__*/(0,jsx_runtime.jsx)(GridVirtualScrollbar, (0,esm_extends/* default */.A)({
      position: "horizontal"
    }, getScrollbarHorizontalProps())), hasScrollY && /*#__PURE__*/(0,jsx_runtime.jsx)(GridVirtualScrollbar, (0,esm_extends/* default */.A)({
      position: "vertical"
    }, getScrollbarVerticalProps())), props.children]
  }));
}

;// ../node_modules/@mui/x-data-grid/components/base/GridFooterPlaceholder.js




function GridFooterPlaceholder() {
  const rootProps = useGridRootProps();
  if (rootProps.hideFooter) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.footer, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.footer /* FIXME: typing error */));
}
;// ../node_modules/@mui/x-data-grid/components/containers/GridRoot.js


const GridRoot_excluded = ["className", "children"];
















const GridRoot_useUtilityClasses = (ownerState, density) => {
  const {
    autoHeight,
    classes,
    showCellVerticalBorder
  } = ownerState;
  const slots = {
    root: ['root', autoHeight && 'autoHeight', `root--density${capitalize(density)}`, ownerState.slots.toolbar === null && 'root--noToolbar', 'withBorderColor', showCellVerticalBorder && 'withVerticalBorder']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridRoot = forwardRef(function GridRoot(props, ref) {
  const rootProps = useGridRootProps();
  const {
      className,
      children
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridRoot_excluded);
  const apiRef = useGridPrivateApiContext();
  const density = useGridSelector(apiRef, gridDensitySelector);
  const rootElementRef = apiRef.current.rootElementRef;
  const rootMountCallback = index_js_.useCallback(node => {
    if (node === null) {
      return;
    }
    apiRef.current.publishEvent('rootMount', node);
  }, [apiRef]);
  const handleRef = useForkRef(rootElementRef, ref, rootMountCallback);
  const ownerState = rootProps;
  const classes = GridRoot_useUtilityClasses(ownerState, density);
  const isSSR = useIsSSR();
  if (isSSR) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridRootStyles, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    ref: handleRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridHeader, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(GridVirtualScroller, {
      children: children
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(GridFooterPlaceholder, {})]
  }));
});
 false ? 0 : void 0;
const MemoizedGridRoot = fastMemo(GridRoot);

;// ../node_modules/@mui/x-data-grid/hooks/features/rowSelection/utils.js







const ROW_SELECTION_PROPAGATION_DEFAULT = {
  parents: false,
  descendants: false
};
function getGridRowGroupSelectableDescendants(apiRef, groupId) {
  const rowTree = gridRowTreeSelector(apiRef);
  const sortedRowIds = gridSortedRowIdsSelector(apiRef);
  const filteredRowsLookup = gridFilteredRowsLookupSelector(apiRef);
  const groupNode = rowTree[groupId];
  if (!groupNode || groupNode.type !== 'group') {
    return [];
  }
  const descendants = [];
  const startIndex = sortedRowIds.findIndex(id => id === groupId) + 1;
  for (let index = startIndex; index < sortedRowIds.length && rowTree[sortedRowIds[index]]?.depth > groupNode.depth; index += 1) {
    const id = sortedRowIds[index];
    if (filteredRowsLookup[id] !== false && apiRef.current.isRowSelectable(id)) {
      descendants.push(id);
    }
  }
  return descendants;
}

// TODO v8: Use `createSelectorV8`
function getCheckboxPropsSelector(groupId, autoSelectParents) {
  return createSelector_createSelector(gridRowTreeSelector, gridSortedRowIdsSelector, gridFilteredRowsLookupSelector, selectedIdsLookupSelector, (rowTree, sortedRowIds, filteredRowsLookup, rowSelectionLookup) => {
    const groupNode = rowTree[groupId];
    if (!groupNode || groupNode.type !== 'group') {
      return {
        isIndeterminate: false,
        isChecked: rowSelectionLookup[groupId] === groupId
      };
    }
    if (rowSelectionLookup[groupId] === groupId) {
      return {
        isIndeterminate: false,
        isChecked: true
      };
    }
    let selectableDescendantsCount = 0;
    let selectedDescendantsCount = 0;
    const startIndex = sortedRowIds.findIndex(id => id === groupId) + 1;
    for (let index = startIndex; index < sortedRowIds.length && rowTree[sortedRowIds[index]]?.depth > groupNode.depth; index += 1) {
      const id = sortedRowIds[index];
      if (filteredRowsLookup[id] !== false) {
        selectableDescendantsCount += 1;
        if (rowSelectionLookup[id] !== undefined) {
          selectedDescendantsCount += 1;
        }
      }
    }
    return {
      isIndeterminate: selectedDescendantsCount > 0 && (selectedDescendantsCount < selectableDescendantsCount || rowSelectionLookup[groupId] === undefined),
      isChecked: autoSelectParents ? selectedDescendantsCount > 0 : rowSelectionLookup[groupId] === groupId
    };
  });
}
function isMultipleRowSelectionEnabled(props) {
  if (props.signature === GridSignature.DataGrid) {
    // DataGrid Community has multiple row selection enabled only if checkbox selection is enabled.
    return props.checkboxSelection && props.disableMultipleRowSelection !== true;
  }
  return !props.disableMultipleRowSelection;
}
const getRowNodeParents = (tree, id) => {
  const parents = [];
  let parent = id;
  while (parent != null && parent !== GRID_ROOT_GROUP_ID) {
    const node = tree[parent];
    if (!node) {
      return parents;
    }
    parents.push(parent);
    parent = node.parent;
  }
  return parents;
};
const getFilteredRowNodeSiblings = (tree, filteredRows, id) => {
  const node = tree[id];
  if (!node) {
    return [];
  }
  const parent = node.parent;
  if (parent == null) {
    return [];
  }
  const parentNode = tree[parent];
  return parentNode.children.filter(childId => childId !== id && filteredRows[childId] !== false);
};
const findRowsToSelect = (apiRef, tree, selectedRow, autoSelectDescendants, autoSelectParents, addRow, selectedIds = new Set(gridRowSelectionStateSelector(apiRef.current.state))) => {
  const filteredRows = gridFilteredRowsLookupSelector(apiRef);
  const selectedDescendants = new Set([]);
  if (!autoSelectDescendants && !autoSelectParents || filteredRows[selectedRow] === false) {
    return;
  }
  if (autoSelectDescendants) {
    const rowNode = tree[selectedRow];
    if (rowNode?.type === 'group') {
      const descendants = getGridRowGroupSelectableDescendants(apiRef, selectedRow);
      descendants.forEach(rowId => {
        addRow(rowId);
        selectedDescendants.add(rowId);
      });
    }
  }
  if (autoSelectParents) {
    const checkAllDescendantsSelected = rowId => {
      if (!selectedIds.has(rowId) && !selectedDescendants.has(rowId)) {
        return false;
      }
      const node = tree[rowId];
      if (!node) {
        return false;
      }
      if (node.type !== 'group') {
        return true;
      }
      return node.children.every(checkAllDescendantsSelected);
    };
    const traverseParents = rowId => {
      const siblings = getFilteredRowNodeSiblings(tree, filteredRows, rowId);
      if (siblings.length === 0 || siblings.every(checkAllDescendantsSelected)) {
        const rowNode = tree[rowId];
        const parent = rowNode?.parent;
        if (parent != null && parent !== GRID_ROOT_GROUP_ID && apiRef.current.isRowSelectable(parent)) {
          addRow(parent);
          selectedDescendants.add(parent);
          traverseParents(parent);
        }
      }
    };
    traverseParents(selectedRow);
  }
};
const findRowsToDeselect = (apiRef, tree, deselectedRow, autoSelectDescendants, autoSelectParents, removeRow) => {
  const selectedIdsLookup = selectedIdsLookupSelector(apiRef);
  if (!autoSelectParents && !autoSelectDescendants) {
    return;
  }
  if (autoSelectParents) {
    const allParents = getRowNodeParents(tree, deselectedRow);
    allParents.forEach(parent => {
      const isSelected = selectedIdsLookup[parent] === parent;
      if (isSelected) {
        removeRow(parent);
      }
    });
  }
  if (autoSelectDescendants) {
    const rowNode = tree[deselectedRow];
    if (rowNode?.type === 'group') {
      const descendants = getGridRowGroupSelectableDescendants(apiRef, deselectedRow);
      descendants.forEach(descendant => {
        removeRow(descendant);
      });
    }
  }
};
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridAriaAttributes.js








const useGridAriaAttributes = () => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const accessibleRowCount = useGridSelector(apiRef, gridExpandedRowCountSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  const pinnedRowsCount = useGridSelector(apiRef, gridPinnedRowsCountSelector);
  return {
    role: 'grid',
    'aria-colcount': visibleColumns.length,
    'aria-rowcount': headerGroupingMaxDepth + 1 + pinnedRowsCount + accessibleRowCount,
    'aria-multiselectable': isMultipleRowSelectionEnabled(rootProps)
  };
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowAriaAttributes.js





const useGridRowAriaAttributes = () => {
  const apiRef = useGridPrivateApiContext();
  const selectedIdsLookup = useGridSelector(apiRef, selectedIdsLookupSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  return index_js_.useCallback((rowNode, index) => {
    const ariaAttributes = {};
    const ariaRowIndex = index + headerGroupingMaxDepth + 2; // 1 for the header row and 1 as it's 1-based
    ariaAttributes['aria-rowindex'] = ariaRowIndex;
    if (apiRef.current.isRowSelectable(rowNode.id)) {
      ariaAttributes['aria-selected'] = selectedIdsLookup[rowNode.id] !== undefined;
    }
    return ariaAttributes;
  }, [apiRef, selectedIdsLookup, headerGroupingMaxDepth]);
};
;// ../node_modules/@mui/x-data-grid/context/GridContextProvider.js






function GridContextProvider({
  privateApiRef,
  configuration,
  props,
  children
}) {
  const apiRef = index_js_.useRef(privateApiRef.current.getPublicApi());
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridConfigurationContext.Provider, {
    value: configuration,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridRootPropsContext.Provider, {
      value: props,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridPrivateApiContext.Provider, {
        value: privateApiRef,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridApiContext.Provider, {
          value: apiRef,
          children: children
        })
      })
    })
  });
}
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridRefs.js

const useGridRefs = apiRef => {
  const rootElementRef = index_js_.useRef(null);
  const mainElementRef = index_js_.useRef(null);
  const virtualScrollerRef = index_js_.useRef(null);
  const virtualScrollbarVerticalRef = index_js_.useRef(null);
  const virtualScrollbarHorizontalRef = index_js_.useRef(null);
  const columnHeadersContainerRef = index_js_.useRef(null);
  apiRef.current.register('public', {
    rootElementRef
  });
  apiRef.current.register('private', {
    mainElementRef,
    virtualScrollerRef,
    virtualScrollbarVerticalRef,
    virtualScrollbarHorizontalRef,
    columnHeadersContainerRef
  });
};
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridIsRtl.js



const useGridIsRtl = apiRef => {
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  if (apiRef.current.state.isRtl === undefined) {
    apiRef.current.state.isRtl = isRtl;
  }
  const isFirstEffect = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstEffect.current) {
      isFirstEffect.current = false;
    } else {
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        isRtl
      }));
    }
  }, [apiRef, isRtl]);
};
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridLoggerFactory.js



const forceDebug = localStorageAvailable() && window.localStorage.getItem('DEBUG') != null;
const useGridLoggerFactory_noop = () => {};
const noopLogger = {
  debug: useGridLoggerFactory_noop,
  info: useGridLoggerFactory_noop,
  warn: useGridLoggerFactory_noop,
  error: useGridLoggerFactory_noop
};
const LOG_LEVELS = ['debug', 'info', 'warn', 'error'];
function getAppender(name, logLevel, appender = console) {
  const minLogLevelIdx = LOG_LEVELS.indexOf(logLevel);
  if (minLogLevelIdx === -1) {
    throw new Error(`MUI X: Log level ${logLevel} not recognized.`);
  }
  const logger = LOG_LEVELS.reduce((loggerObj, method, idx) => {
    if (idx >= minLogLevelIdx) {
      loggerObj[method] = (...args) => {
        const [message, ...other] = args;
        appender[method](`MUI X: ${name} - ${message}`, ...other);
      };
    } else {
      loggerObj[method] = useGridLoggerFactory_noop;
    }
    return loggerObj;
  }, {});
  return logger;
}
const useGridLoggerFactory = (apiRef, props) => {
  const getLogger = index_js_.useCallback(name => {
    if (forceDebug) {
      return getAppender(name, 'debug', props.logger);
    }
    if (!props.logLevel) {
      return noopLogger;
    }
    return getAppender(name, props.logLevel.toString(), props.logger);
  }, [props.logLevel, props.logger]);
  useGridApiMethod(apiRef, {
    getLogger
  }, 'private');
};
;// ../node_modules/@mui/x-internals/esm/EventManager/EventManager.js
// Used https://gist.github.com/mudge/5830382 as a starting point.
// See https://github.com/browserify/events/blob/master/events.js for
// the Node.js (https://nodejs.org/api/events.html) polyfill used by webpack.
class EventManager {
  constructor() {
    this.maxListeners = 20;
    this.warnOnce = false;
    this.events = {};
  }
  on(eventName, listener, options = {}) {
    let collection = this.events[eventName];
    if (!collection) {
      collection = {
        highPriority: new Map(),
        regular: new Map()
      };
      this.events[eventName] = collection;
    }
    if (options.isFirst) {
      collection.highPriority.set(listener, true);
    } else {
      collection.regular.set(listener, true);
    }
    if (false) // removed by dead control flow
{}
  }
  removeListener(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName].regular.delete(listener);
      this.events[eventName].highPriority.delete(listener);
    }
  }
  removeAllListeners() {
    this.events = {};
  }
  emit(eventName, ...args) {
    const collection = this.events[eventName];
    if (!collection) {
      return;
    }
    const highPriorityListeners = Array.from(collection.highPriority.keys());
    const regularListeners = Array.from(collection.regular.keys());
    for (let i = highPriorityListeners.length - 1; i >= 0; i -= 1) {
      const listener = highPriorityListeners[i];
      if (collection.highPriority.has(listener)) {
        listener.apply(this, args);
      }
    }
    for (let i = 0; i < regularListeners.length; i += 1) {
      const listener = regularListeners[i];
      if (collection.regular.has(listener)) {
        listener.apply(this, args);
      }
    }
  }
  once(eventName, listener) {
    // eslint-disable-next-line consistent-this
    const that = this;
    this.on(eventName, function oneTimeListener(...args) {
      that.removeListener(eventName, oneTimeListener);
      listener.apply(that, args);
    });
  }
}
;// ../node_modules/@mui/x-data-grid/utils/Store.js
class Store {
  static create(value) {
    return new Store(value);
  }
  constructor(_value) {
    this.value = void 0;
    this.listeners = void 0;
    this.subscribe = fn => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    };
    this.getSnapshot = () => {
      return this.value;
    };
    this.update = value => {
      this.value = value;
      this.listeners.forEach(l => l(value));
    };
    this.value = _value;
    this.listeners = new Set();
  }
}
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridApiInitialization.js





const SYMBOL_API_PRIVATE = Symbol('mui.api_private');
const isSyntheticEvent = event => {
  return event.isPropagationStopped !== undefined;
};
function unwrapPrivateAPI(publicApi) {
  return publicApi[SYMBOL_API_PRIVATE];
}
let useGridApiInitialization_globalId = 0;
function createPrivateAPI(publicApiRef) {
  const existingPrivateApi = publicApiRef.current?.[SYMBOL_API_PRIVATE];
  if (existingPrivateApi) {
    return existingPrivateApi;
  }
  const state = {};
  const privateApi = {
    state,
    store: Store.create(state),
    instanceId: {
      id: useGridApiInitialization_globalId
    }
  };
  useGridApiInitialization_globalId += 1;
  privateApi.getPublicApi = () => publicApiRef.current;
  privateApi.register = (visibility, methods) => {
    Object.keys(methods).forEach(methodName => {
      const method = methods[methodName];
      const currentPrivateMethod = privateApi[methodName];
      if (currentPrivateMethod?.spying === true) {
        currentPrivateMethod.target = method;
      } else {
        privateApi[methodName] = method;
      }
      if (visibility === 'public') {
        const publicApi = publicApiRef.current;
        const currentPublicMethod = publicApi[methodName];
        if (currentPublicMethod?.spying === true) {
          currentPublicMethod.target = method;
        } else {
          publicApi[methodName] = method;
        }
      }
    });
  };
  privateApi.register('private', {
    caches: {},
    eventManager: new EventManager()
  });
  return privateApi;
}
function createPublicAPI(privateApiRef) {
  const publicApi = {
    get state() {
      return privateApiRef.current.state;
    },
    get store() {
      return privateApiRef.current.store;
    },
    get instanceId() {
      return privateApiRef.current.instanceId;
    },
    [SYMBOL_API_PRIVATE]: privateApiRef.current
  };
  return publicApi;
}
function useGridApiInitialization(inputApiRef, props) {
  const publicApiRef = index_js_.useRef(null);
  const privateApiRef = index_js_.useRef(null);
  if (!privateApiRef.current) {
    privateApiRef.current = createPrivateAPI(publicApiRef);
  }
  if (!publicApiRef.current) {
    publicApiRef.current = createPublicAPI(privateApiRef);
  }
  const publishEvent = index_js_.useCallback((...args) => {
    const [name, params, event = {}] = args;
    event.defaultMuiPrevented = false;
    if (isSyntheticEvent(event) && event.isPropagationStopped()) {
      return;
    }
    const details = props.signature === GridSignature.DataGridPro || props.signature === GridSignature.DataGridPremium ? {
      api: privateApiRef.current.getPublicApi()
    } : {};
    privateApiRef.current.eventManager.emit(name, params, event, details);
  }, [privateApiRef, props.signature]);
  const subscribeEvent = index_js_.useCallback((event, handler, options) => {
    privateApiRef.current.eventManager.on(event, handler, options);
    const api = privateApiRef.current;
    return () => {
      api.eventManager.removeListener(event, handler);
    };
  }, [privateApiRef]);
  useGridApiMethod(privateApiRef, {
    subscribeEvent,
    publishEvent
  }, 'public');
  if (inputApiRef && !inputApiRef.current?.state) {
    inputApiRef.current = publicApiRef.current;
  }
  index_js_.useImperativeHandle(inputApiRef, () => publicApiRef.current, [publicApiRef]);
  index_js_.useEffect(() => {
    const api = privateApiRef.current;
    return () => {
      api.publishEvent('unmount');
    };
  }, [privateApiRef]);
  return privateApiRef;
}
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridLocaleText.js

const useGridLocaleText = (apiRef, props) => {
  const getLocaleText = index_js_.useCallback(key => {
    if (props.localeText[key] == null) {
      throw new Error(`Missing translation for key ${key}.`);
    }
    return props.localeText[key];
  }, [props.localeText]);
  apiRef.current.register('public', {
    getLocaleText
  });
};
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js + 2 modules
var toPropertyKey = __webpack_require__(2236);
;// ../node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridPipeProcessing.js




/**
 * Implement the Pipeline Pattern
 *
 * More information and detailed example in (TODO add link to technical doc when ready)
 *
 * Some plugins contains custom logic to enrich data provided by other plugins or components.
 * For instance, the row grouping plugin needs to add / remove the grouping columns when the grid columns are updated.
 *
 * =====================================================================================================================
 *
 * The plugin containing the custom logic must use:
 *
 * - `useGridRegisterPipeProcessor` to register their processor.
 *
 * - `apiRef.current.requestPipeProcessorsApplication` to imperatively re-apply a group.
 *   This method should be used in last resort.
 *   Most of the time, the application should be triggered by an update on the deps of the processor.
 *
 * =====================================================================================================================
 *
 * The plugin or component that needs to enrich its data must use:
 *
 * - `apiRef.current.unstable_applyPipeProcessors` to run in chain all the processors of a given group.
 *
 * - `useGridRegisterPipeApplier` to re-apply the whole pipe when requested.
 *   The applier will be called when:
 *   * a processor is registered.
 *   * `apiRef.current.requestPipeProcessorsApplication` is called for the given group.
 */
const useGridPipeProcessing = apiRef => {
  const cache = index_js_.useRef({});
  const isRunning = index_js_.useRef(false);
  const runAppliers = index_js_.useCallback(groupCache => {
    if (isRunning.current || !groupCache) {
      return;
    }
    isRunning.current = true;
    Object.values(groupCache.appliers).forEach(callback => {
      callback();
    });
    isRunning.current = false;
  }, []);
  const registerPipeProcessor = index_js_.useCallback((group, id, processor) => {
    if (!cache.current[group]) {
      cache.current[group] = {
        processors: new Map(),
        processorsAsArray: [],
        appliers: {}
      };
    }
    const groupCache = cache.current[group];
    const oldProcessor = groupCache.processors.get(id);
    if (oldProcessor !== processor) {
      groupCache.processors.set(id, processor);
      groupCache.processorsAsArray = Array.from(cache.current[group].processors.values()).filter(processorValue => processorValue !== null);
      runAppliers(groupCache);
    }
    return () => {
      cache.current[group].processors.set(id, null);
      cache.current[group].processorsAsArray = Array.from(cache.current[group].processors.values()).filter(processorValue => processorValue !== null);
    };
  }, [runAppliers]);
  const registerPipeApplier = index_js_.useCallback((group, id, applier) => {
    if (!cache.current[group]) {
      cache.current[group] = {
        processors: new Map(),
        processorsAsArray: [],
        appliers: {}
      };
    }
    cache.current[group].appliers[id] = applier;
    return () => {
      const _appliers = cache.current[group].appliers,
        otherAppliers = (0,objectWithoutPropertiesLoose/* default */.A)(_appliers, [id].map(toPropertyKey/* default */.A));
      cache.current[group].appliers = otherAppliers;
    };
  }, []);
  const requestPipeProcessorsApplication = index_js_.useCallback(group => {
    runAppliers(cache.current[group]);
  }, [runAppliers]);
  const applyPipeProcessors = index_js_.useCallback((...args) => {
    const [group, value, context] = args;
    if (!cache.current[group]) {
      return value;
    }
    const processors = cache.current[group].processorsAsArray;
    let result = value;
    for (let i = 0; i < processors.length; i += 1) {
      result = processors[i](result, context);
    }
    return result;
  }, []);
  const preProcessingPrivateApi = {
    registerPipeProcessor,
    registerPipeApplier,
    requestPipeProcessorsApplication
  };
  const preProcessingPublicApi = {
    unstable_applyPipeProcessors: applyPipeProcessors
  };
  useGridApiMethod(apiRef, preProcessingPrivateApi, 'private');
  useGridApiMethod(apiRef, preProcessingPublicApi, 'public');
};
;// ../node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridStrategyProcessing.js




const GRID_DEFAULT_STRATEGY = 'none';
const GRID_STRATEGIES_PROCESSORS = {
  rowTreeCreation: 'rowTree',
  filtering: 'rowTree',
  sorting: 'rowTree',
  visibleRowsLookupCreation: 'rowTree'
};
/**
 * Implements a variant of the Strategy Pattern (see https://en.wikipedia.org/wiki/Strategy_pattern)
 *
 * More information and detailed example in (TODO add link to technical doc when ready)
 *
 * Some plugins contains custom logic that must only be applied if the right strategy is active.
 * For instance, the row grouping plugin has a custom filtering algorithm.
 * This algorithm must be applied by the filtering plugin if the row grouping is the current way of grouping rows,
 * but not if the tree data is the current way of grouping rows.
 *
 * =====================================================================================================================
 *
 * The plugin containing the custom logic must use:
 *
 * - `useGridRegisterStrategyProcessor` to register their processor.
 *   When the processor of the active strategy changes, it will fire `"activeStrategyProcessorChange"` to re-apply the processor.
 *
 * - `apiRef.current.setStrategyAvailability` to tell if their strategy can be used.
 *
 * =====================================================================================================================
 *
 * The plugin or component that needs to apply the custom logic of the current strategy must use:
 *
 * - `apiRef.current.applyStrategyProcessor` to run the processor of the active strategy for a given processor name.
 *
 * - the "strategyAvailabilityChange" event to update something when the active strategy changes.
 *    Warning: Be careful not to apply the processor several times.
 *    For instance "rowsSet" is fired by `useGridRows` whenever the active strategy changes.
 *    So listening to both would most likely run your logic twice.
 *
 * - The "activeStrategyProcessorChange" event to update something when the processor of the active strategy changes.
 *
 * =====================================================================================================================
 *
 * Each processor name is part of a strategy group which can only have one active strategy at the time.
 * For now, there is only one strategy group named `rowTree` which customize
 * - row tree creation algorithm.
 * - sorting algorithm.
 * - filtering algorithm.
 */
const useGridStrategyProcessing = apiRef => {
  const availableStrategies = index_js_.useRef(new Map());
  const strategiesCache = index_js_.useRef({});
  const registerStrategyProcessor = index_js_.useCallback((strategyName, processorName, processor) => {
    const cleanup = () => {
      const _ref = strategiesCache.current[processorName],
        otherProcessors = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, [strategyName].map(toPropertyKey/* default */.A));
      strategiesCache.current[processorName] = otherProcessors;
    };
    if (!strategiesCache.current[processorName]) {
      strategiesCache.current[processorName] = {};
    }
    const groupPreProcessors = strategiesCache.current[processorName];
    const previousProcessor = groupPreProcessors[strategyName];
    groupPreProcessors[strategyName] = processor;
    if (!previousProcessor || previousProcessor === processor) {
      return cleanup;
    }
    if (strategyName === apiRef.current.getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName])) {
      apiRef.current.publishEvent('activeStrategyProcessorChange', processorName);
    }
    return cleanup;
  }, [apiRef]);
  const applyStrategyProcessor = index_js_.useCallback((processorName, params) => {
    const activeStrategy = apiRef.current.getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName]);
    if (activeStrategy == null) {
      throw new Error("Can't apply a strategy processor before defining an active strategy");
    }
    const groupCache = strategiesCache.current[processorName];
    if (!groupCache || !groupCache[activeStrategy]) {
      throw new Error(`No processor found for processor "${processorName}" on strategy "${activeStrategy}"`);
    }
    const processor = groupCache[activeStrategy];
    return processor(params);
  }, [apiRef]);
  const getActiveStrategy = index_js_.useCallback(strategyGroup => {
    const strategyEntries = Array.from(availableStrategies.current.entries());
    const availableStrategyEntry = strategyEntries.find(([, strategy]) => {
      if (strategy.group !== strategyGroup) {
        return false;
      }
      return strategy.isAvailable();
    });
    return availableStrategyEntry?.[0] ?? GRID_DEFAULT_STRATEGY;
  }, []);
  const setStrategyAvailability = index_js_.useCallback((strategyGroup, strategyName, isAvailable) => {
    availableStrategies.current.set(strategyName, {
      group: strategyGroup,
      isAvailable
    });
    apiRef.current.publishEvent('strategyAvailabilityChange');
  }, [apiRef]);
  const strategyProcessingApi = {
    registerStrategyProcessor,
    applyStrategyProcessor,
    getActiveStrategy,
    setStrategyAvailability
  };
  useGridApiMethod(apiRef, strategyProcessingApi, 'private');
};
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridStateInitialization.js




const useGridStateInitialization = apiRef => {
  const controlStateMapRef = index_js_.useRef({});
  const registerControlState = index_js_.useCallback(controlStateItem => {
    controlStateMapRef.current[controlStateItem.stateId] = controlStateItem;
  }, []);
  const setState = index_js_.useCallback((state, reason) => {
    let newState;
    if (isFunction(state)) {
      newState = state(apiRef.current.state);
    } else {
      newState = state;
    }
    if (apiRef.current.state === newState) {
      return false;
    }
    let ignoreSetState = false;

    // Apply the control state constraints
    const updatedControlStateIds = [];
    Object.keys(controlStateMapRef.current).forEach(stateId => {
      const controlState = controlStateMapRef.current[stateId];
      const oldSubState = controlState.stateSelector(apiRef.current.state, apiRef.current.instanceId);
      const newSubState = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (newSubState === oldSubState) {
        return;
      }
      updatedControlStateIds.push({
        stateId: controlState.stateId,
        hasPropChanged: newSubState !== controlState.propModel
      });

      // The state is controlled, the prop should always win
      if (controlState.propModel !== undefined && newSubState !== controlState.propModel) {
        ignoreSetState = true;
      }
    });
    if (updatedControlStateIds.length > 1) {
      // Each hook modify its own state, and it should not leak
      // Events are here to forward to other hooks and apply changes.
      // You are trying to update several states in a no isolated way.
      throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${updatedControlStateIds[0].stateId}, therefore, you're not allowed to update ${updatedControlStateIds.map(el => el.stateId).join(', ')} in the same transaction.`);
    }
    if (!ignoreSetState) {
      // We always assign it as we mutate rows for perf reason.
      apiRef.current.state = newState;
      apiRef.current.publishEvent('stateChange', newState);
      apiRef.current.store.update(newState);
    }
    if (updatedControlStateIds.length === 1) {
      const {
        stateId,
        hasPropChanged
      } = updatedControlStateIds[0];
      const controlState = controlStateMapRef.current[stateId];
      const model = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (controlState.propOnChange && hasPropChanged) {
        controlState.propOnChange(model, {
          reason,
          api: apiRef.current
        });
      }
      if (!ignoreSetState) {
        apiRef.current.publishEvent(controlState.changeEvent, model, {
          reason
        });
      }
    }
    return !ignoreSetState;
  }, [apiRef]);
  const updateControlState = index_js_.useCallback((key, state, reason) => {
    return apiRef.current.setState(previousState => {
      return (0,esm_extends/* default */.A)({}, previousState, {
        [key]: state(previousState[key])
      });
    }, reason);
  }, [apiRef]);
  const forceUpdate = index_js_.useCallback(() => {
    // @deprecated - do nothing
  }, []);
  const publicStateApi = {
    setState,
    forceUpdate
  };
  const privateStateApi = {
    updateControlState,
    registerControlState
  };
  useGridApiMethod(apiRef, publicStateApi, 'public');
  useGridApiMethod(apiRef, privateStateApi, 'private');
};
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridProps.js


const propsStateInitializer = (state, props) => {
  return (0,esm_extends/* default */.A)({}, state, {
    props: {
      getRowId: props.getRowId
    }
  });
};
const useGridProps = (apiRef, props) => {
  index_js_.useEffect(() => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      props: {
        getRowId: props.getRowId
      }
    }));
  }, [apiRef, props.getRowId]);
};
;// ../node_modules/@mui/x-data-grid/hooks/core/useGridInitialization.js










/**
 * Initialize the technical pieces of the DataGrid (logger, state, ...) that any DataGrid implementation needs
 */
const useGridInitialization = (inputApiRef, props) => {
  const privateApiRef = useGridApiInitialization(inputApiRef, props);
  useGridRefs(privateApiRef);
  useGridProps(privateApiRef, props);
  useGridIsRtl(privateApiRef);
  useGridLoggerFactory(privateApiRef, props);
  useGridStateInitialization(privateApiRef);
  useGridPipeProcessing(privateApiRef);
  useGridStrategyProcessing(privateApiRef);
  useGridLocaleText(privateApiRef, props);
  privateApiRef.current.register('private', {
    rootProps: props
  });
  return privateApiRef;
};
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridInitializeState.js

const useGridInitializeState = (initializer, privateApiRef, props) => {
  const isInitialized = index_js_.useRef(false);
  if (!isInitialized.current) {
    privateApiRef.current.state = initializer(privateApiRef.current.state, props, privateApiRef);
    isInitialized.current = true;
  }
};
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridLogger.js

function useGridLogger(privateApiRef, name) {
  const logger = index_js_.useRef(null);
  if (logger.current) {
    return logger.current;
  }
  const newLogger = privateApiRef.current.getLogger(name);
  logger.current = newLogger;
  return newLogger;
}
;// ../node_modules/@mui/x-data-grid/hooks/utils/useGridNativeEventListener.js


const useGridNativeEventListener = (apiRef, ref, eventName, handler, options) => {
  const logger = useGridLogger(apiRef, 'useNativeEventListener');
  useGridApiOptionHandler(apiRef, 'rootMount', () => {
    const targetElement = typeof ref === 'function' ? ref() : ref.current;
    if (!targetElement || !eventName || !handler) {
      return undefined;
    }
    logger.debug(`Binding native ${eventName} event`);
    targetElement.addEventListener(eventName, handler, options);
    return () => {
      logger.debug(`Clearing native ${eventName} event`);
      targetElement.removeEventListener(eventName, handler, options);
    };
  });
};
;// ../node_modules/@mui/x-data-grid/components/columnSelection/GridCellCheckboxRenderer.js


const GridCellCheckboxRenderer_excluded = ["field", "id", "formattedValue", "row", "rowNode", "colDef", "isEditable", "cellMode", "hasFocus", "tabIndex", "api"];










const GridCellCheckboxRenderer_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['checkboxInput']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridCellCheckboxForwardRef = forwardRef(function GridCellCheckboxRenderer(props, ref) {
  const {
      field,
      id,
      rowNode,
      hasFocus,
      tabIndex
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridCellCheckboxRenderer_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = GridCellCheckboxRenderer_useUtilityClasses(ownerState);
  const checkboxElement = index_js_.useRef(null);
  const rippleRef = index_js_.useRef(null);
  const handleRef = useForkRef(checkboxElement, ref);
  const handleChange = event => {
    const params = {
      value: event.target.checked,
      id
    };
    apiRef.current.publishEvent('rowSelectionCheckboxChange', params, event);
  };
  index_js_.useLayoutEffect(() => {
    if (tabIndex === 0) {
      const element = apiRef.current.getCellElement(id, field);
      if (element) {
        element.tabIndex = -1;
      }
    }
  }, [apiRef, tabIndex, id, field]);
  index_js_.useEffect(() => {
    if (hasFocus) {
      const input = checkboxElement.current?.querySelector('input');
      input?.focus({
        preventScroll: true
      });
    } else if (rippleRef.current) {
      // Only available in @mui/material v5.4.1 or later
      rippleRef.current.stop({});
    }
  }, [hasFocus]);
  const handleKeyDown = index_js_.useCallback(event => {
    if (event.key === ' ') {
      // We call event.stopPropagation to avoid selecting the row and also scrolling to bottom
      // TODO: Remove and add a check inside useGridKeyboardNavigation
      event.stopPropagation();
    }
  }, []);
  const isSelectable = apiRef.current.isRowSelectable(id);
  const checkboxPropsSelector = getCheckboxPropsSelector(id, rootProps.rowSelectionPropagation?.parents ?? false);
  const {
    isIndeterminate,
    isChecked
  } = useGridSelector(apiRef, checkboxPropsSelector, objectShallowCompare);
  if (rowNode.type === 'footer' || rowNode.type === 'pinnedRow') {
    return null;
  }
  const checked = rootProps.indeterminateCheckboxAction === 'select' ? isChecked && !isIndeterminate : isChecked;
  const label = apiRef.current.getLocaleText(checked ? 'checkboxSelectionUnselectRow' : 'checkboxSelectionSelectRow');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseCheckbox, (0,esm_extends/* default */.A)({
    tabIndex: tabIndex,
    checked: checked,
    onChange: handleChange,
    className: classes.root,
    inputProps: {
      'aria-label': label,
      name: 'select_row'
    },
    onKeyDown: handleKeyDown,
    indeterminate: isIndeterminate,
    disabled: !isSelectable,
    touchRippleRef: rippleRef /* FIXME: typing error */
  }, rootProps.slotProps?.baseCheckbox, other, {
    ref: handleRef
  }));
});
 false ? 0 : void 0;

const GridCellCheckboxRenderer = GridCellCheckboxForwardRef;
;// ../node_modules/@mui/x-data-grid/components/columnSelection/GridHeaderCheckbox.js


const GridHeaderCheckbox_excluded = ["field", "colDef"];














const GridHeaderCheckbox_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['checkboxInput']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridHeaderCheckbox = forwardRef(function GridHeaderCheckbox(props, ref) {
  const other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridHeaderCheckbox_excluded);
  const [, forceUpdate] = index_js_.useState(false);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes = GridHeaderCheckbox_useUtilityClasses(ownerState);
  const tabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const selection = useGridSelector(apiRef, gridRowSelectionStateSelector);
  const visibleRowIds = useGridSelector(apiRef, gridExpandedSortedRowIdsSelector);
  const paginatedVisibleRowIds = useGridSelector(apiRef, gridPaginatedVisibleSortedGridRowIdsSelector);
  const filteredSelection = index_js_.useMemo(() => {
    if (typeof rootProps.isRowSelectable !== 'function') {
      return selection;
    }
    return selection.filter(id => {
      if (rootProps.keepNonExistentRowsSelected) {
        return true;
      }
      // The row might have been deleted
      if (!apiRef.current.getRow(id)) {
        return false;
      }
      return rootProps.isRowSelectable(apiRef.current.getRowParams(id));
    });
  }, [apiRef, rootProps.isRowSelectable, selection, rootProps.keepNonExistentRowsSelected]);

  // All the rows that could be selected / unselected by toggling this checkbox
  const selectionCandidates = index_js_.useMemo(() => {
    const rowIds = !rootProps.pagination || !rootProps.checkboxSelectionVisibleOnly || rootProps.paginationMode === 'server' ? visibleRowIds : paginatedVisibleRowIds;

    // Convert to an object to make O(1) checking if a row exists or not
    // TODO create selector that returns visibleRowIds/paginatedVisibleRowIds as an object
    return rowIds.reduce((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
  }, [rootProps.pagination, rootProps.paginationMode, rootProps.checkboxSelectionVisibleOnly, paginatedVisibleRowIds, visibleRowIds]);

  // Amount of rows selected and that are visible in the current page
  const currentSelectionSize = index_js_.useMemo(() => filteredSelection.filter(id => selectionCandidates[id]).length, [filteredSelection, selectionCandidates]);
  const isIndeterminate = currentSelectionSize > 0 && currentSelectionSize < Object.keys(selectionCandidates).length;
  const isChecked = currentSelectionSize > 0;
  const handleChange = event => {
    const params = {
      value: event.target.checked
    };
    apiRef.current.publishEvent('headerSelectionCheckboxChange', params);
  };
  const tabIndex = tabIndexState !== null && tabIndexState.field === props.field ? 0 : -1;
  index_js_.useLayoutEffect(() => {
    const element = apiRef.current.getColumnHeaderElement(props.field);
    if (tabIndex === 0 && element) {
      element.tabIndex = -1;
    }
  }, [tabIndex, apiRef, props.field]);
  const handleKeyDown = index_js_.useCallback(event => {
    if (event.key === ' ') {
      // imperative toggle the checkbox because Space is disable by some preventDefault
      apiRef.current.publishEvent('headerSelectionCheckboxChange', {
        value: !isChecked
      });
    }
  }, [apiRef, isChecked]);
  const handleSelectionChange = index_js_.useCallback(() => {
    forceUpdate(p => !p);
  }, []);
  index_js_.useEffect(() => {
    return apiRef.current.subscribeEvent('rowSelectionChange', handleSelectionChange);
  }, [apiRef, handleSelectionChange]);
  const checked = rootProps.indeterminateCheckboxAction === 'select' ? isChecked && !isIndeterminate : isChecked;
  const label = apiRef.current.getLocaleText(checked ? 'checkboxSelectionUnselectAllRows' : 'checkboxSelectionSelectAllRows');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseCheckbox, (0,esm_extends/* default */.A)({
    indeterminate: isIndeterminate,
    checked: checked,
    onChange: handleChange,
    className: classes.root,
    inputProps: {
      'aria-label': label,
      name: 'select_all_rows'
    },
    tabIndex: tabIndex,
    onKeyDown: handleKeyDown,
    disabled: !isMultipleRowSelectionEnabled(rootProps)
  }, rootProps.slotProps?.baseCheckbox, other, {
    ref: ref
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/colDef/gridCheckboxSelectionColDef.js








const GRID_CHECKBOX_SELECTION_FIELD = '__check__';
const GRID_CHECKBOX_SELECTION_COL_DEF = (0,esm_extends/* default */.A)({}, GRID_BOOLEAN_COL_DEF, {
  type: 'custom',
  field: GRID_CHECKBOX_SELECTION_FIELD,
  width: 50,
  resizable: false,
  sortable: false,
  filterable: false,
  // @ts-ignore
  aggregable: false,
  disableColumnMenu: true,
  disableReorder: true,
  disableExport: true,
  getApplyQuickFilterFn: undefined,
  display: 'flex',
  valueGetter: (value, row, column, apiRef) => {
    const selectionLookup = selectedIdsLookupSelector(apiRef);
    const rowId = gridRowIdSelector(apiRef.current.state, row);
    return selectionLookup[rowId] !== undefined;
  },
  renderHeader: params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridHeaderCheckbox, (0,esm_extends/* default */.A)({}, params)),
  renderCell: params => /*#__PURE__*/(0,jsx_runtime.jsx)(GridCellCheckboxRenderer, (0,esm_extends/* default */.A)({}, params))
});
;// ../node_modules/@mui/x-data-grid/hooks/features/export/serializers/csvSerializer.js


function sanitizeCellValue(value, csvOptions) {
  if (value === null || value === undefined) {
    return '';
  }
  const valueStr = typeof value === 'string' ? value : `${value}`;
  if (csvOptions.shouldAppendQuotes || csvOptions.escapeFormulas) {
    const escapedValue = valueStr.replace(/"/g, '""');
    if (csvOptions.escapeFormulas) {
      // See https://owasp.org/www-community/attacks/CSV_Injection
      if (['=', '+', '-', '@', '\t', '\r'].includes(escapedValue[0])) {
        return `"'${escapedValue}"`;
      }
    }
    // Make sure value containing delimiter or line break won't be split into multiple cells
    if ([csvOptions.delimiter, '\n', '\r', '"'].some(delimiter => valueStr.includes(delimiter))) {
      return `"${escapedValue}"`;
    }
    return escapedValue;
  }
  return valueStr;
}
const serializeCellValue = (cellParams, options) => {
  const {
    csvOptions,
    ignoreValueFormatter
  } = options;
  let value;
  if (ignoreValueFormatter) {
    const columnType = cellParams.colDef.type;
    if (columnType === 'number') {
      value = String(cellParams.value);
    } else if (columnType === 'date' || columnType === 'dateTime') {
      value = cellParams.value?.toISOString();
    } else if (typeof cellParams.value?.toString === 'function') {
      value = cellParams.value.toString();
    } else {
      value = cellParams.value;
    }
  } else {
    value = cellParams.formattedValue;
  }
  return sanitizeCellValue(value, csvOptions);
};
class CSVRow {
  constructor(options) {
    this.options = void 0;
    this.rowString = '';
    this.isEmpty = true;
    this.options = options;
  }
  addValue(value) {
    if (!this.isEmpty) {
      this.rowString += this.options.csvOptions.delimiter;
    }
    if (typeof this.options.sanitizeCellValue === 'function') {
      this.rowString += this.options.sanitizeCellValue(value, this.options.csvOptions);
    } else {
      this.rowString += value;
    }
    this.isEmpty = false;
  }
  getRowString() {
    return this.rowString;
  }
}
const serializeRow = ({
  id,
  columns,
  getCellParams,
  csvOptions,
  ignoreValueFormatter
}) => {
  const row = new CSVRow({
    csvOptions
  });
  columns.forEach(column => {
    const cellParams = getCellParams(id, column.field);
    if (false) // removed by dead control flow
{}
    row.addValue(serializeCellValue(cellParams, {
      ignoreValueFormatter,
      csvOptions
    }));
  });
  return row.getRowString();
};
function buildCSV(options) {
  const {
    columns,
    rowIds,
    csvOptions,
    ignoreValueFormatter,
    apiRef
  } = options;
  const CSVBody = rowIds.reduce((acc, id) => `${acc}${serializeRow({
    id,
    columns,
    getCellParams: apiRef.current.getCellParams,
    ignoreValueFormatter,
    csvOptions
  })}\r\n`, '').trim();
  if (!csvOptions.includeHeaders) {
    return CSVBody;
  }
  const filteredColumns = columns.filter(column => column.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field);
  const headerRows = [];
  if (csvOptions.includeColumnGroupsHeaders) {
    const columnGroupLookup = apiRef.current.getAllGroupDetails();
    let maxColumnGroupsDepth = 0;
    const columnGroupPathsLookup = filteredColumns.reduce((acc, column) => {
      const columnGroupPath = apiRef.current.getColumnGroupPath(column.field);
      acc[column.field] = columnGroupPath;
      maxColumnGroupsDepth = Math.max(maxColumnGroupsDepth, columnGroupPath.length);
      return acc;
    }, {});
    for (let i = 0; i < maxColumnGroupsDepth; i += 1) {
      const headerGroupRow = new CSVRow({
        csvOptions,
        sanitizeCellValue
      });
      headerRows.push(headerGroupRow);
      filteredColumns.forEach(column => {
        const columnGroupId = (columnGroupPathsLookup[column.field] || [])[i];
        const columnGroup = columnGroupLookup[columnGroupId];
        headerGroupRow.addValue(columnGroup ? columnGroup.headerName || columnGroup.groupId : '');
      });
    }
  }
  const mainHeaderRow = new CSVRow({
    csvOptions,
    sanitizeCellValue
  });
  filteredColumns.forEach(column => {
    mainHeaderRow.addValue(column.headerName || column.field);
  });
  headerRows.push(mainHeaderRow);
  const CSVHead = `${headerRows.map(row => row.getRowString()).join('\r\n')}\r\n`;
  return `${CSVHead}${CSVBody}`.trim();
}
;// ../node_modules/@mui/x-data-grid/utils/keyboardUtils.js
// Non printable keys have a name, for example "ArrowRight", see the whole list:
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
// So event.key.length === 1 is often enough.
//
// However, we also need to ignore shortcuts, for example: select all:
// - Windows: Ctrl+A, event.ctrlKey is true
// - macOS: ⌘ Command+A, event.metaKey is true
function isPrintableKey(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
const GRID_MULTIPLE_SELECTION_KEYS = (/* unused pure expression or super */ null && (['Meta', 'Control', 'Shift']));
const GRID_CELL_EXIT_EDIT_MODE_KEYS = (/* unused pure expression or super */ null && (['Enter', 'Escape', 'Tab']));
const GRID_CELL_EDIT_COMMIT_KEYS = (/* unused pure expression or super */ null && (['Enter', 'Tab']));
const isMultipleKey = key => GRID_MULTIPLE_SELECTION_KEYS.indexOf(key) > -1;
const isCellEnterEditModeKeys = event => isPrintableKey(event) || event.key === 'Enter' || event.key === 'Backspace' || event.key === 'Delete';
const isCellExitEditModeKeys = key => GRID_CELL_EXIT_EDIT_MODE_KEYS.indexOf(key) > -1;
const isCellEditCommitKeys = key => GRID_CELL_EDIT_COMMIT_KEYS.indexOf(key) > -1;
const isNavigationKey = key => key.indexOf('Arrow') === 0 || key.indexOf('Page') === 0 || key === ' ' || key === 'Home' || key === 'End';
const keyboardUtils_isKeyboardEvent = event => !!event.key;
const isHideMenuKey = key => key === 'Tab' || key === 'Escape';

// In theory, on macOS, ctrl + v doesn't trigger a paste, so the function should return false.
// However, maybe it's overkill to fix, so let's be lazy.
function isPasteShortcut(event) {
  return (event.ctrlKey || event.metaKey) &&
  // We can't use event.code === 'KeyV' as event.code assumes a QWERTY keyboard layout,
  // for example, it would be another letter on a Dvorak physical keyboard.
  // We can't use event.key === 'v' as event.key is not stable with key modifiers and keyboard layouts,
  // for example, it would be ה on a Hebrew keyboard layout.
  // https://github.com/w3c/uievents/issues/377 could be a long-term solution
  String.fromCharCode(event.keyCode) === 'V' && !event.shiftKey && !event.altKey;
}

// Checks if the keyboard event corresponds to the copy shortcut (CTRL+C or CMD+C) across different localization keyboards.
function isCopyShortcut(event) {
  return (event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === 'C' && !event.shiftKey && !event.altKey;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/clipboard/useGridClipboard.js





function writeToClipboardPolyfill(data) {
  const span = document.createElement('span');
  span.style.whiteSpace = 'pre';
  span.style.userSelect = 'all';
  span.style.opacity = '0px';
  span.textContent = data;
  document.body.appendChild(span);
  const range = document.createRange();
  range.selectNode(span);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(span);
  }
}
function copyToClipboard(data) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(data).catch(() => {
      writeToClipboardPolyfill(data);
    });
  } else {
    writeToClipboardPolyfill(data);
  }
}
function hasNativeSelection(element) {
  // When getSelection is called on an <iframe> that is not displayed Firefox will return null.
  if (window.getSelection()?.toString()) {
    return true;
  }

  // window.getSelection() returns an empty string in Firefox for selections inside a form element.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=85686.
  // Instead, we can use element.selectionStart that is only defined on form elements.
  if (element && (element.selectionEnd || 0) - (element.selectionStart || 0) > 0) {
    return true;
  }
  return false;
}

/**
 * @requires useGridCsvExport (method)
 * @requires useGridSelection (method)
 */
const useGridClipboard = (apiRef, props) => {
  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter = (typeof ignoreValueFormatterProp === 'object' ? ignoreValueFormatterProp?.clipboardExport : ignoreValueFormatterProp) || false;
  const clipboardCopyCellDelimiter = props.clipboardCopyCellDelimiter;
  const handleCopy = index_js_.useCallback(event => {
    if (!isCopyShortcut(event)) {
      return;
    }

    // Do nothing if there's a native selection
    if (hasNativeSelection(event.target)) {
      return;
    }
    let textToCopy = '';
    const selectedRows = apiRef.current.getSelectedRows();
    if (selectedRows.size > 0) {
      textToCopy = apiRef.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: clipboardCopyCellDelimiter,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
    } else {
      const focusedCell = gridFocusCellSelector(apiRef);
      if (focusedCell) {
        const cellParams = apiRef.current.getCellParams(focusedCell.id, focusedCell.field);
        textToCopy = serializeCellValue(cellParams, {
          csvOptions: {
            delimiter: clipboardCopyCellDelimiter,
            shouldAppendQuotes: false,
            escapeFormulas: false
          },
          ignoreValueFormatter
        });
      }
    }
    textToCopy = apiRef.current.unstable_applyPipeProcessors('clipboardCopy', textToCopy);
    if (textToCopy) {
      copyToClipboard(textToCopy);
      apiRef.current.publishEvent('clipboardCopy', textToCopy);
    }
  }, [apiRef, ignoreValueFormatter, clipboardCopyCellDelimiter]);
  useGridNativeEventListener(apiRef, () => apiRef.current.rootElementRef.current, 'keydown', handleCopy);
  useGridApiOptionHandler(apiRef, 'clipboardCopy', props.onClipboardCopy);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenu.js





const columnMenuStateInitializer = state => (0,esm_extends/* default */.A)({}, state, {
  columnMenu: {
    open: false
  }
});

/**
 * @requires useGridColumnResize (event)
 * @requires useGridInfiniteLoader (event)
 */
const useGridColumnMenu = apiRef => {
  const logger = useGridLogger(apiRef, 'useGridColumnMenu');

  /**
   * API METHODS
   */
  const showColumnMenu = index_js_.useCallback(field => {
    const columnMenuState = gridColumnMenuSelector(apiRef.current.state);
    const newState = {
      open: true,
      field
    };
    const shouldUpdate = newState.open !== columnMenuState.open || newState.field !== columnMenuState.field;
    if (shouldUpdate) {
      apiRef.current.setState(state => {
        if (state.columnMenu.open && state.columnMenu.field === field) {
          return state;
        }
        logger.debug('Opening Column Menu');
        return (0,esm_extends/* default */.A)({}, state, {
          columnMenu: {
            open: true,
            field
          }
        });
      });
      apiRef.current.hidePreferences();
    }
  }, [apiRef, logger]);
  const hideColumnMenu = index_js_.useCallback(() => {
    const columnMenuState = gridColumnMenuSelector(apiRef.current.state);
    if (columnMenuState.field) {
      const columnLookup = gridColumnLookupSelector(apiRef);
      const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);
      const orderedFields = gridColumnFieldsSelector(apiRef);
      let fieldToFocus = columnMenuState.field;

      // If the column was removed from the grid, we need to find the closest visible field
      if (!columnLookup[fieldToFocus]) {
        fieldToFocus = orderedFields[0];
      }

      // If the field to focus is hidden, we need to find the closest visible field
      if (columnVisibilityModel[fieldToFocus] === false) {
        // contains visible column fields + the field that was just hidden
        const visibleOrderedFields = orderedFields.filter(field => {
          if (field === fieldToFocus) {
            return true;
          }
          return columnVisibilityModel[field] !== false;
        });
        const fieldIndex = visibleOrderedFields.indexOf(fieldToFocus);
        fieldToFocus = visibleOrderedFields[fieldIndex + 1] || visibleOrderedFields[fieldIndex - 1];
      }
      apiRef.current.setColumnHeaderFocus(fieldToFocus);
    }
    const newState = {
      open: false,
      field: undefined
    };
    const shouldUpdate = newState.open !== columnMenuState.open || newState.field !== columnMenuState.field;
    if (shouldUpdate) {
      apiRef.current.setState(state => {
        logger.debug('Hiding Column Menu');
        return (0,esm_extends/* default */.A)({}, state, {
          columnMenu: newState
        });
      });
    }
  }, [apiRef, logger]);
  const toggleColumnMenu = index_js_.useCallback(field => {
    logger.debug('Toggle Column Menu');
    const columnMenu = gridColumnMenuSelector(apiRef.current.state);
    if (!columnMenu.open || columnMenu.field !== field) {
      showColumnMenu(field);
    } else {
      hideColumnMenu();
    }
  }, [apiRef, logger, showColumnMenu, hideColumnMenu]);
  const columnMenuApi = {
    showColumnMenu,
    hideColumnMenu,
    toggleColumnMenu
  };
  useGridApiMethod(apiRef, columnMenuApi, 'public');
  useGridApiEventHandler(apiRef, 'columnResizeStart', hideColumnMenu);
  useGridApiEventHandler(apiRef, 'virtualScrollerWheel', apiRef.current.hideColumnMenu);
  useGridApiEventHandler(apiRef, 'virtualScrollerTouchMove', apiRef.current.hideColumnMenu);
};
;// ../node_modules/@mui/x-data-grid/hooks/utils/useFirstRender.js

const useFirstRender = callback => {
  const isFirstRender = index_js_.useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    callback();
  }
};
;// ../node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeProcessor.js


const useGridRegisterPipeProcessor = (apiRef, group, callback, enabled = true) => {
  const cleanup = index_js_.useRef(null);
  const id = index_js_.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = index_js_.useCallback(() => {
    cleanup.current = apiRef.current.registerPipeProcessor(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    if (enabled) {
      registerPreProcessor();
    }
  });
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (enabled) {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor, enabled]);
};
;// ../node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeApplier.js


const useGridRegisterPipeApplier = (apiRef, group, callback) => {
  const cleanup = index_js_.useRef(null);
  const id = index_js_.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = index_js_.useCallback(() => {
    cleanup.current = apiRef.current.registerPipeApplier(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumns.js











const columnsStateInitializer = (state, props, apiRef) => {
  const columnsState = createColumnsState({
    apiRef,
    columnsToUpsert: props.columns,
    initialState: props.initialState?.columns,
    columnVisibilityModel: props.columnVisibilityModel ?? props.initialState?.columns?.columnVisibilityModel ?? {},
    keepOnlyColumnsToUpsert: true
  });
  return (0,esm_extends/* default */.A)({}, state, {
    columns: columnsState,
    // In pro/premium, this part of the state is defined. We give it an empty but defined value
    // for the community version.
    pinnedColumns: state.pinnedColumns ?? EMPTY_PINNED_COLUMN_FIELDS
  });
};

/**
 * @requires useGridParamsApi (method)
 * @requires useGridDimensions (method, event) - can be after
 * TODO: Impossible priority - useGridParamsApi also needs to be after useGridColumns
 */
function useGridColumns(apiRef, props) {
  const logger = useGridLogger(apiRef, 'useGridColumns');
  const previousColumnsProp = index_js_.useRef(props.columns);
  apiRef.current.registerControlState({
    stateId: 'visibleColumns',
    propModel: props.columnVisibilityModel,
    propOnChange: props.onColumnVisibilityModelChange,
    stateSelector: gridColumnVisibilityModelSelector,
    changeEvent: 'columnVisibilityModelChange'
  });
  const setGridColumnsState = index_js_.useCallback(columnsState => {
    logger.debug('Updating columns state.');
    apiRef.current.setState(mergeColumnsState(columnsState));
    apiRef.current.publishEvent('columnsChange', columnsState.orderedFields);
  }, [logger, apiRef]);

  /**
   * API METHODS
   */
  const getColumn = index_js_.useCallback(field => gridColumnLookupSelector(apiRef)[field], [apiRef]);
  const getAllColumns = index_js_.useCallback(() => gridColumnDefinitionsSelector(apiRef), [apiRef]);
  const getVisibleColumns = index_js_.useCallback(() => gridVisibleColumnDefinitionsSelector(apiRef), [apiRef]);
  const getColumnIndex = index_js_.useCallback((field, useVisibleColumns = true) => {
    const columns = useVisibleColumns ? gridVisibleColumnDefinitionsSelector(apiRef) : gridColumnDefinitionsSelector(apiRef);
    return columns.findIndex(col => col.field === field);
  }, [apiRef]);
  const getColumnPosition = index_js_.useCallback(field => {
    const index = getColumnIndex(field);
    return gridColumnPositionsSelector(apiRef)[index];
  }, [apiRef, getColumnIndex]);
  const setColumnVisibilityModel = index_js_.useCallback(model => {
    const currentModel = gridColumnVisibilityModelSelector(apiRef);
    if (currentModel !== model) {
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        columns: createColumnsState({
          apiRef,
          columnsToUpsert: [],
          initialState: undefined,
          columnVisibilityModel: model,
          keepOnlyColumnsToUpsert: false
        })
      }));
      apiRef.current.updateRenderContext?.();
      apiRef.current.forceUpdate();
    }
  }, [apiRef]);
  const updateColumns = index_js_.useCallback(columns => {
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: columns,
      initialState: undefined,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, setGridColumnsState]);
  const setColumnVisibility = index_js_.useCallback((field, isVisible) => {
    const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);
    const isCurrentlyVisible = columnVisibilityModel[field] ?? true;
    if (isVisible !== isCurrentlyVisible) {
      const newModel = (0,esm_extends/* default */.A)({}, columnVisibilityModel, {
        [field]: isVisible
      });
      apiRef.current.setColumnVisibilityModel(newModel);
    }
  }, [apiRef]);
  const getColumnIndexRelativeToVisibleColumns = index_js_.useCallback(field => {
    const allColumns = gridColumnFieldsSelector(apiRef);
    return allColumns.findIndex(col => col === field);
  }, [apiRef]);
  const setColumnIndex = index_js_.useCallback((field, targetIndexPosition) => {
    const allColumns = gridColumnFieldsSelector(apiRef);
    const oldIndexPosition = getColumnIndexRelativeToVisibleColumns(field);
    if (oldIndexPosition === targetIndexPosition) {
      return;
    }
    logger.debug(`Moving column ${field} to index ${targetIndexPosition}`);
    const updatedColumns = [...allColumns];
    const fieldRemoved = updatedColumns.splice(oldIndexPosition, 1)[0];
    updatedColumns.splice(targetIndexPosition, 0, fieldRemoved);
    setGridColumnsState((0,esm_extends/* default */.A)({}, gridColumnsStateSelector(apiRef.current.state), {
      orderedFields: updatedColumns
    }));
    const params = {
      column: apiRef.current.getColumn(field),
      targetIndex: apiRef.current.getColumnIndexRelativeToVisibleColumns(field),
      oldIndex: oldIndexPosition
    };
    apiRef.current.publishEvent('columnIndexChange', params);
  }, [apiRef, logger, setGridColumnsState, getColumnIndexRelativeToVisibleColumns]);
  const setColumnWidth = index_js_.useCallback((field, width) => {
    logger.debug(`Updating column ${field} width to ${width}`);
    const columnsState = gridColumnsStateSelector(apiRef.current.state);
    const column = columnsState.lookup[field];
    const newColumn = (0,esm_extends/* default */.A)({}, column, {
      width,
      hasBeenResized: true
    });
    setGridColumnsState(hydrateColumnsWidth((0,esm_extends/* default */.A)({}, columnsState, {
      lookup: (0,esm_extends/* default */.A)({}, columnsState.lookup, {
        [field]: newColumn
      })
    }), apiRef.current.getRootDimensions()));
    apiRef.current.publishEvent('columnWidthChange', {
      element: apiRef.current.getColumnHeaderElement(field),
      colDef: newColumn,
      width
    });
  }, [apiRef, logger, setGridColumnsState]);
  const columnApi = {
    getColumn,
    getAllColumns,
    getColumnIndex,
    getColumnPosition,
    getVisibleColumns,
    getColumnIndexRelativeToVisibleColumns,
    updateColumns,
    setColumnVisibilityModel,
    setColumnVisibility,
    setColumnWidth
  };
  const columnReorderApi = {
    setColumnIndex
  };
  useGridApiMethod(apiRef, columnApi, 'public');
  useGridApiMethod(apiRef, columnReorderApi, props.signature === GridSignature.DataGrid ? 'private' : 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const columnsStateToExport = {};
    const columnVisibilityModelToExport = gridColumnVisibilityModelSelector(apiRef);
    const shouldExportColumnVisibilityModel =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the model is controlled
    props.columnVisibilityModel != null ||
    // Always export if the model has been initialized
    // TODO v6 Do a nullish check instead to export even if the initial model equals "{}"
    Object.keys(props.initialState?.columns?.columnVisibilityModel ?? {}).length > 0 ||
    // Always export if the model is not empty
    Object.keys(columnVisibilityModelToExport).length > 0;
    if (shouldExportColumnVisibilityModel) {
      columnsStateToExport.columnVisibilityModel = columnVisibilityModelToExport;
    }
    columnsStateToExport.orderedFields = gridColumnFieldsSelector(apiRef);
    const columns = gridColumnDefinitionsSelector(apiRef);
    const dimensions = {};
    columns.forEach(colDef => {
      if (colDef.hasBeenResized) {
        const colDefDimensions = {};
        COLUMNS_DIMENSION_PROPERTIES.forEach(propertyName => {
          let propertyValue = colDef[propertyName];
          if (propertyValue === Infinity) {
            propertyValue = -1;
          }
          colDefDimensions[propertyName] = propertyValue;
        });
        dimensions[colDef.field] = colDefDimensions;
      }
    });
    if (Object.keys(dimensions).length > 0) {
      columnsStateToExport.dimensions = dimensions;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      columns: columnsStateToExport
    });
  }, [apiRef, props.columnVisibilityModel, props.initialState?.columns]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const columnVisibilityModelToImport = context.stateToRestore.columns?.columnVisibilityModel;
    const initialState = context.stateToRestore.columns;
    if (columnVisibilityModelToImport == null && initialState == null) {
      return params;
    }
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: [],
      initialState,
      columnVisibilityModel: columnVisibilityModelToImport,
      keepOnlyColumnsToUpsert: false
    });
    apiRef.current.setState(mergeColumnsState(columnsState));
    if (initialState != null) {
      apiRef.current.publishEvent('columnsChange', columnsState.orderedFields);
    }
    return params;
  }, [apiRef]);
  const preferencePanelPreProcessing = index_js_.useCallback((initialValue, value) => {
    if (value === GridPreferencePanelsValue.columns) {
      const ColumnsPanel = props.slots.columnsPanel;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ColumnsPanel, (0,esm_extends/* default */.A)({}, props.slotProps?.columnsPanel));
    }
    return initialValue;
  }, [props.slots.columnsPanel, props.slotProps?.columnsPanel]);
  const addColumnMenuItems = index_js_.useCallback(columnMenuItems => {
    if (props.disableColumnSelector) {
      return columnMenuItems;
    }
    return [...columnMenuItems, 'columnMenuColumnsItem'];
  }, [props.disableColumnSelector]);
  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItems);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'preferencePanel', preferencePanelPreProcessing);

  /*
   * EVENTS
   */

  const prevInnerWidth = index_js_.useRef(null);
  const handleGridSizeChange = size => {
    if (prevInnerWidth.current !== size.width) {
      prevInnerWidth.current = size.width;
      const hasFlexColumns = gridVisibleColumnDefinitionsSelector(apiRef).some(col => col.flex && col.flex > 0);
      if (!hasFlexColumns) {
        return;
      }
      setGridColumnsState(hydrateColumnsWidth(gridColumnsStateSelector(apiRef.current.state), apiRef.current.getRootDimensions()));
    }
  };
  useGridApiEventHandler(apiRef, 'viewportInnerSizeChange', handleGridSizeChange);

  /**
   * APPLIERS
   */
  const hydrateColumns = index_js_.useCallback(() => {
    logger.info(`Columns pipe processing have changed, regenerating the columns`);
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: [],
      initialState: undefined,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, logger, setGridColumnsState]);
  useGridRegisterPipeApplier(apiRef, 'hydrateColumns', hydrateColumns);

  /*
   * EFFECTS
   */
  // The effect do not track any value defined synchronously during the 1st render by hooks called after `useGridColumns`
  // As a consequence, the state generated by the 1st run of this useEffect will always be equal to the initialization one
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    logger.info(`GridColumns have changed, new length ${props.columns.length}`);
    if (previousColumnsProp.current === props.columns) {
      return;
    }
    const columnsState = createColumnsState({
      apiRef,
      initialState: undefined,
      // If the user provides a model, we don't want to set it in the state here because it has it's dedicated `useEffect` which calls `setColumnVisibilityModel`
      columnsToUpsert: props.columns,
      keepOnlyColumnsToUpsert: true
    });
    previousColumnsProp.current = props.columns;
    setGridColumnsState(columnsState);
  }, [logger, apiRef, setGridColumnsState, props.columns]);
  index_js_.useEffect(() => {
    if (props.columnVisibilityModel !== undefined) {
      apiRef.current.setColumnVisibilityModel(props.columnVisibilityModel);
    }
  }, [apiRef, logger, props.columnVisibilityModel]);
}
function mergeColumnsState(columnsState) {
  return state => (0,esm_extends/* default */.A)({}, state, {
    columns: columnsState
  });
}
;// ../node_modules/@mui/x-data-grid/hooks/features/density/useGridDensity.js







const densityStateInitializer = (state, props) => (0,esm_extends/* default */.A)({}, state, {
  density: props.initialState?.density ?? props.density ?? 'standard'
});
const useGridDensity = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useDensity');
  apiRef.current.registerControlState({
    stateId: 'density',
    propModel: props.density,
    propOnChange: props.onDensityChange,
    stateSelector: gridDensitySelector,
    changeEvent: 'densityChange'
  });
  const setDensity = useEventCallback_useEventCallback(newDensity => {
    const currentDensity = gridDensitySelector(apiRef.current.state);
    if (currentDensity === newDensity) {
      return;
    }
    logger.debug(`Set grid density to ${newDensity}`);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      density: newDensity
    }));
  });
  const densityApi = {
    setDensity
  };
  useGridApiMethod(apiRef, densityApi, 'public');
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const exportedDensity = gridDensitySelector(apiRef.current.state);
    const shouldExportRowCount =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the `density` is controlled
    props.density != null ||
    // Always export if the `density` has been initialized
    props.initialState?.density != null;
    if (!shouldExportRowCount) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      density: exportedDensity
    });
  }, [apiRef, props.density, props.initialState?.density]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const restoredDensity = context.stateToRestore?.density ? context.stateToRestore.density : gridDensitySelector(apiRef.current.state);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      density: restoredDensity
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  index_js_.useEffect(() => {
    if (props.density) {
      apiRef.current.setDensity(props.density);
    }
  }, [apiRef, props.density]);
};
;// ../node_modules/@mui/x-data-grid/utils/exportAs.js
/**
 * I have hesitated to use https://github.com/eligrey/FileSaver.js.
 * If we get bug reports that this project solves, we should consider using it.
 *
 * Related resources.
 * https://blog.logrocket.com/programmatic-file-downloads-in-the-browser-9a5186298d5c/
 * https://github.com/mbrn/filefy/blob/ec4ed0b7415d93be7158c23029f2ea1fa0b8e2d9/src/core/BaseBuilder.ts
 * https://unpkg.com/browse/@progress/kendo-file-saver@1.0.7/dist/es/save-as.js
 * https://github.com/ag-grid/ag-grid/blob/9565c219b6210aa85fa833c929d0728f9d163a91/community-modules/csv-export/src/csvExport/downloader.ts
 */

function exportAs(blob, extension = 'csv', filename = document.title || 'untitled') {
  const fullName = `${filename}.${extension}`;

  // Test download attribute first
  // https://github.com/eligrey/FileSaver.js/issues/193
  if ('download' in HTMLAnchorElement.prototype) {
    // Create an object URL for the blob object
    const url = URL.createObjectURL(blob);

    // Create a new anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = fullName;

    // Programmatically trigger a click on the anchor element
    // Useful if you want the download to happen automatically
    // Without attaching the anchor element to the DOM
    a.click();

    // https://github.com/eligrey/FileSaver.js/issues/205
    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
    return;
  }
  throw new Error('MUI X: exportAs not supported.');
}
;// ../node_modules/@mui/x-data-grid/hooks/features/export/utils.js



const getColumnsToExport = ({
  apiRef,
  options
}) => {
  const columns = gridColumnDefinitionsSelector(apiRef);
  if (options.fields) {
    return options.fields.reduce((currentColumns, field) => {
      const column = columns.find(col => col.field === field);
      if (column) {
        currentColumns.push(column);
      }
      return currentColumns;
    }, []);
  }
  const validColumns = options.allColumns ? columns : gridVisibleColumnDefinitionsSelector(apiRef);
  return validColumns.filter(column => !column.disableExport);
};
const defaultGetRowsToExport = ({
  apiRef
}) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const rowTree = gridRowTreeSelector(apiRef);
  const selectedRows = apiRef.current.getSelectedRows();
  const bodyRows = filteredSortedRowIds.filter(id => rowTree[id].type !== 'footer');
  const pinnedRows = gridPinnedRowsSelector(apiRef);
  const topPinnedRowsIds = pinnedRows?.top?.map(row => row.id) || [];
  const bottomPinnedRowsIds = pinnedRows?.bottom?.map(row => row.id) || [];
  bodyRows.unshift(...topPinnedRowsIds);
  bodyRows.push(...bottomPinnedRowsIds);
  if (selectedRows.size > 0) {
    return bodyRows.filter(id => selectedRows.has(id));
  }
  return bodyRows;
};
// EXTERNAL MODULE: ../node_modules/@mui/material/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(8077);
;// ../node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExportContainer.js












const GridToolbarExportContainer = forwardRef(function GridToolbarExportContainer(props, ref) {
  const {
    children,
    slotProps = {}
  } = props;
  const buttonProps = slotProps.button || {};
  const tooltipProps = slotProps.tooltip || {};
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const exportButtonId = useId();
  const exportMenuId = useId();
  const [open, setOpen] = index_js_.useState(false);
  const buttonRef = index_js_.useRef(null);
  const handleRef = useForkRef(ref, buttonRef);
  const handleMenuOpen = event => {
    setOpen(prevOpen => !prevOpen);
    buttonProps.onClick?.(event);
  };
  const handleMenuClose = () => setOpen(false);
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      handleMenuClose();
    }
  };
  if (children == null) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTooltip, (0,esm_extends/* default */.A)({
      title: apiRef.current.getLocaleText('toolbarExportLabel'),
      enterDelay: 1000
    }, rootProps.slotProps?.baseTooltip, tooltipProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
        size: "small",
        startIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.exportIcon, {}),
        "aria-expanded": open,
        "aria-label": apiRef.current.getLocaleText('toolbarExportLabel'),
        "aria-haspopup": "menu",
        "aria-controls": open ? exportMenuId : undefined,
        id: exportButtonId
      }, rootProps.slotProps?.baseButton, buttonProps, {
        onClick: handleMenuOpen,
        ref: handleRef,
        children: apiRef.current.getLocaleText('toolbarExport')
      }))
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenu, {
      open: open,
      target: buttonRef.current,
      onClose: handleMenuClose,
      position: "bottom-start",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuList/* default */.A, {
        id: exportMenuId,
        className: gridClasses.menuList,
        "aria-labelledby": exportButtonId,
        onKeyDown: handleListKeyDown,
        autoFocusItem: open,
        children: index_js_.Children.map(children, child => {
          if (! /*#__PURE__*/index_js_.isValidElement(child)) {
            return child;
          }
          return /*#__PURE__*/index_js_.cloneElement(child, {
            hideMenu: handleMenuClose
          });
        })
      })
    })]
  });
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js


const GridToolbarExport_excluded = ["hideMenu", "options"],
  GridToolbarExport_excluded2 = ["hideMenu", "options"],
  _excluded3 = ["csvOptions", "printOptions", "excelOptions"];







function GridCsvExportMenuItem(props) {
  const apiRef = useGridApiContext();
  const {
      hideMenu,
      options
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarExport_excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A, (0,esm_extends/* default */.A)({
    onClick: () => {
      apiRef.current.exportDataAsCsv(options);
      hideMenu?.();
    }
  }, other, {
    children: apiRef.current.getLocaleText('toolbarExportCSV')
  }));
}
 false ? 0 : void 0;
function GridPrintExportMenuItem(props) {
  const apiRef = useGridApiContext();
  const {
      hideMenu,
      options
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridToolbarExport_excluded2);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A, (0,esm_extends/* default */.A)({
    onClick: () => {
      apiRef.current.exportDataAsPrint(options);
      hideMenu?.();
    }
  }, other, {
    children: apiRef.current.getLocaleText('toolbarExportPrint')
  }));
}
 false ? 0 : void 0;
const GridToolbarExport = forwardRef(function GridToolbarExport(props, ref) {
  const _ref = props,
    {
      csvOptions = {},
      printOptions = {},
      excelOptions
    } = _ref,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, _excluded3);
  const apiRef = useGridApiContext();
  const preProcessedButtons = apiRef.current.unstable_applyPipeProcessors('exportMenu', [], {
    excelOptions,
    csvOptions,
    printOptions
  }).sort((a, b) => a.componentName > b.componentName ? 1 : -1);
  if (preProcessedButtons.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridToolbarExportContainer, (0,esm_extends/* default */.A)({}, other, {
    ref: ref,
    children: preProcessedButtons.map((button, index) => /*#__PURE__*/index_js_.cloneElement(button.component, {
      key: index
    }))
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/hooks/features/export/useGridCsvExport.js









/**
 * @requires useGridColumns (state)
 * @requires useGridFilter (state)
 * @requires useGridSorting (state)
 * @requires useGridSelection (state)
 * @requires useGridParamsApi (method)
 */
const useGridCsvExport = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridCsvExport');
  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter = (typeof ignoreValueFormatterProp === 'object' ? ignoreValueFormatterProp?.csvExport : ignoreValueFormatterProp) || false;
  const getDataAsCsv = index_js_.useCallback((options = {}) => {
    logger.debug(`Get data as CSV`);
    const exportedColumns = getColumnsToExport({
      apiRef,
      options
    });
    const getRowsToExport = options.getRowsToExport ?? defaultGetRowsToExport;
    const exportedRowIds = getRowsToExport({
      apiRef
    });
    return buildCSV({
      columns: exportedColumns,
      rowIds: exportedRowIds,
      csvOptions: {
        delimiter: options.delimiter || ',',
        shouldAppendQuotes: options.shouldAppendQuotes ?? true,
        includeHeaders: options.includeHeaders ?? true,
        includeColumnGroupsHeaders: options.includeColumnGroupsHeaders ?? true,
        escapeFormulas: options.escapeFormulas ?? true
      },
      ignoreValueFormatter,
      apiRef
    });
  }, [logger, apiRef, ignoreValueFormatter]);
  const exportDataAsCsv = index_js_.useCallback(options => {
    logger.debug(`Export data as CSV`);
    const csv = getDataAsCsv(options);
    const blob = new Blob([options?.utf8WithBom ? new Uint8Array([0xef, 0xbb, 0xbf]) : '', csv], {
      type: 'text/csv'
    });
    exportAs(blob, 'csv', options?.fileName);
  }, [logger, getDataAsCsv]);
  const csvExportApi = {
    getDataAsCsv,
    exportDataAsCsv
  };
  useGridApiMethod(apiRef, csvExportApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const addExportMenuButtons = index_js_.useCallback((initialValue, options) => {
    if (options.csvOptions?.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: /*#__PURE__*/(0,jsx_runtime.jsx)(GridCsvExportMenuItem, {
        options: options.csvOptions
      }),
      componentName: 'csvExport'
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, 'exportMenu', addExportMenuButtons);
};
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPaginationModel.js









const getDerivedPaginationModel = (paginationState, signature, paginationModelProp) => {
  let paginationModel = paginationState.paginationModel;
  const rowCount = paginationState.rowCount;
  const pageSize = paginationModelProp?.pageSize ?? paginationModel.pageSize;
  const page = paginationModelProp?.page ?? paginationModel.page;
  const pageCount = getPageCount(rowCount, pageSize, page);
  if (paginationModelProp && (paginationModelProp?.page !== paginationModel.page || paginationModelProp?.pageSize !== paginationModel.pageSize)) {
    paginationModel = paginationModelProp;
  }
  const validPage = pageSize === -1 ? 0 : getValidPage(paginationModel.page, pageCount);
  if (validPage !== paginationModel.page) {
    paginationModel = (0,esm_extends/* default */.A)({}, paginationModel, {
      page: validPage
    });
  }
  throwIfPageSizeExceedsTheLimit(paginationModel.pageSize, signature);
  return paginationModel;
};

/**
 * @requires useGridFilter (state)
 * @requires useGridDimensions (event) - can be after
 */
const useGridPaginationModel = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridPaginationModel');
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const previousFilterModel = index_js_.useRef(gridFilterModelSelector(apiRef));
  const rowHeight = Math.floor(props.rowHeight * densityFactor);
  apiRef.current.registerControlState({
    stateId: 'paginationModel',
    propModel: props.paginationModel,
    propOnChange: props.onPaginationModelChange,
    stateSelector: gridPaginationModelSelector,
    changeEvent: 'paginationModelChange'
  });

  /**
   * API METHODS
   */
  const setPage = index_js_.useCallback(page => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (page === currentModel.page) {
      return;
    }
    logger.debug(`Setting page to ${page}`);
    apiRef.current.setPaginationModel({
      page,
      pageSize: currentModel.pageSize
    });
  }, [apiRef, logger]);
  const setPageSize = index_js_.useCallback(pageSize => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (pageSize === currentModel.pageSize) {
      return;
    }
    logger.debug(`Setting page size to ${pageSize}`);
    apiRef.current.setPaginationModel({
      pageSize,
      page: currentModel.page
    });
  }, [apiRef, logger]);
  const setPaginationModel = index_js_.useCallback(paginationModel => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (paginationModel === currentModel) {
      return;
    }
    logger.debug("Setting 'paginationModel' to", paginationModel);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, paginationModel)
      })
    }), 'setPaginationModel');
  }, [apiRef, logger, props.signature]);
  const paginationModelApi = {
    setPage,
    setPageSize,
    setPaginationModel
  };
  useGridApiMethod(apiRef, paginationModelApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const paginationModel = gridPaginationModelSelector(apiRef);
    const shouldExportPaginationModel =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the `paginationModel` is controlled
    props.paginationModel != null ||
    // Always export if the `paginationModel` has been initialized
    props.initialState?.pagination?.paginationModel != null ||
    // Export if `page` or `pageSize` is not equal to the default value
    paginationModel.page !== 0 && paginationModel.pageSize !== defaultPageSize(props.autoPageSize);
    if (!shouldExportPaginationModel) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      pagination: (0,esm_extends/* default */.A)({}, prevState.pagination, {
        paginationModel
      })
    });
  }, [apiRef, props.paginationModel, props.initialState?.pagination?.paginationModel, props.autoPageSize]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const paginationModel = context.stateToRestore.pagination?.paginationModel ? (0,esm_extends/* default */.A)({}, getDefaultGridPaginationModel(props.autoPageSize), context.stateToRestore.pagination?.paginationModel) : gridPaginationModelSelector(apiRef);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, paginationModel)
      })
    }), 'stateRestorePreProcessing');
    return params;
  }, [apiRef, props.autoPageSize, props.signature]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /**
   * EVENTS
   */
  const handlePaginationModelChange = () => {
    const paginationModel = gridPaginationModelSelector(apiRef);
    if (apiRef.current.virtualScrollerRef?.current) {
      apiRef.current.scrollToIndexes({
        rowIndex: paginationModel.page * paginationModel.pageSize
      });
    }
  };
  const handleUpdateAutoPageSize = index_js_.useCallback(() => {
    if (!props.autoPageSize) {
      return;
    }
    const dimensions = apiRef.current.getRootDimensions();
    const maximumPageSizeWithoutScrollBar = Math.max(1, Math.floor(dimensions.viewportInnerSize.height / rowHeight));
    apiRef.current.setPageSize(maximumPageSizeWithoutScrollBar);
  }, [apiRef, props.autoPageSize, rowHeight]);
  const handleRowCountChange = index_js_.useCallback(newRowCount => {
    if (newRowCount == null) {
      return;
    }
    const paginationModel = gridPaginationModelSelector(apiRef);
    if (paginationModel.page === 0) {
      return;
    }
    const pageCount = gridPageCountSelector(apiRef);
    if (paginationModel.page > pageCount - 1) {
      apiRef.current.setPage(Math.max(0, pageCount - 1));
    }
  }, [apiRef]);

  /**
   * Goes to the first row of the grid
   */
  const navigateToStart = index_js_.useCallback(() => {
    const paginationModel = gridPaginationModelSelector(apiRef);
    if (paginationModel.page !== 0) {
      apiRef.current.setPage(0);
    }

    // If the page was not changed it might be needed to scroll to the top
    const scrollPosition = apiRef.current.getScrollPosition();
    if (scrollPosition.top !== 0) {
      apiRef.current.scroll({
        top: 0
      });
    }
  }, [apiRef]);

  /**
   * Resets the page only if the active items or quick filter has changed from the last time.
   * This is to avoid resetting the page when the filter model is changed
   * because of and update of the operator from an item that does not have the value
   * or reseting when the filter panel is just opened
   */
  const handleFilterModelChange = index_js_.useCallback(filterModel => {
    const currentActiveFilters = (0,esm_extends/* default */.A)({}, filterModel, {
      // replace items with the active items
      items: gridFilterActiveItemsSelector(apiRef)
    });
    if (isDeepEqual(currentActiveFilters, previousFilterModel.current)) {
      return;
    }
    previousFilterModel.current = currentActiveFilters;
    navigateToStart();
  }, [apiRef, navigateToStart]);
  useGridApiEventHandler(apiRef, 'viewportInnerSizeChange', handleUpdateAutoPageSize);
  useGridApiEventHandler(apiRef, 'paginationModelChange', handlePaginationModelChange);
  useGridApiEventHandler(apiRef, 'rowCountChange', handleRowCountChange);
  useGridApiEventHandler(apiRef, 'sortModelChange', runIf(props.resetPageOnSortFilter, navigateToStart));
  useGridApiEventHandler(apiRef, 'filterModelChange', runIf(props.resetPageOnSortFilter, handleFilterModelChange));

  /**
   * EFFECTS
   */
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!props.pagination) {
      return;
    }
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, props.paginationModel)
      })
    }));
  }, [apiRef, props.paginationModel, props.signature, props.pagination]);
  index_js_.useEffect(() => {
    apiRef.current.setState(state => {
      const isEnabled = props.pagination === true;
      if (state.pagination.paginationMode === props.paginationMode || state.pagination.enabled === isEnabled) {
        return state;
      }
      return (0,esm_extends/* default */.A)({}, state, {
        pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
          paginationMode: props.paginationMode,
          enabled: props.pagination === true
        })
      });
    });
  }, [apiRef, props.paginationMode, props.pagination]);
  index_js_.useEffect(handleUpdateAutoPageSize, [handleUpdateAutoPageSize]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/export/useGridPrintExport.js

















function raf() {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      resolve();
    });
  });
}
function buildPrintWindow(title) {
  const iframeEl = document.createElement('iframe');
  iframeEl.style.position = 'absolute';
  iframeEl.style.width = '0px';
  iframeEl.style.height = '0px';
  iframeEl.title = title || document.title;
  return iframeEl;
}

/**
 * @requires useGridColumns (state)
 * @requires useGridFilter (state)
 * @requires useGridSorting (state)
 * @requires useGridParamsApi (method)
 */
const useGridPrintExport = (apiRef, props) => {
  const hasRootReference = apiRef.current.rootElementRef.current !== null;
  const logger = useGridLogger(apiRef, 'useGridPrintExport');
  const doc = index_js_.useRef(null);
  const previousGridState = index_js_.useRef(null);
  const previousColumnVisibility = index_js_.useRef({});
  const previousRows = index_js_.useRef([]);
  const previousVirtualizationState = index_js_.useRef(null);
  index_js_.useEffect(() => {
    doc.current = ownerDocument(apiRef.current.rootElementRef.current);
  }, [apiRef, hasRootReference]);

  // Returns a promise because updateColumns triggers state update and
  // the new state needs to be in place before the grid can be sized correctly
  const updateGridColumnsForPrint = index_js_.useCallback((fields, allColumns, includeCheckboxes) => new Promise(resolve => {
    const exportedColumnFields = getColumnsToExport({
      apiRef,
      options: {
        fields,
        allColumns
      }
    }).map(column => column.field);
    const columns = gridColumnDefinitionsSelector(apiRef);
    const newColumnVisibilityModel = {};
    columns.forEach(column => {
      newColumnVisibilityModel[column.field] = exportedColumnFields.includes(column.field);
    });
    if (includeCheckboxes) {
      newColumnVisibilityModel[GRID_CHECKBOX_SELECTION_COL_DEF.field] = true;
    }
    apiRef.current.setColumnVisibilityModel(newColumnVisibilityModel);
    resolve();
  }), [apiRef]);
  const updateGridRowsForPrint = index_js_.useCallback(getRowsToExport => {
    const rowsToExportIds = getRowsToExport({
      apiRef
    });
    const newRows = rowsToExportIds.reduce((acc, id) => {
      const row = apiRef.current.getRow(id);
      if (!row[GRID_ID_AUTOGENERATED]) {
        acc.push(row);
      }
      return acc;
    }, []);
    apiRef.current.setRows(newRows);
  }, [apiRef]);
  const handlePrintWindowLoad = index_js_.useCallback((printWindow, options) => {
    const normalizeOptions = (0,esm_extends/* default */.A)({
      copyStyles: true,
      hideToolbar: false,
      hideFooter: false,
      includeCheckboxes: false
    }, options);
    const printDoc = printWindow.contentDocument;
    if (!printDoc) {
      return;
    }
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    const gridRootElement = apiRef.current.rootElementRef.current;
    const gridClone = gridRootElement.cloneNode(true);

    // Allow to overflow to not hide the border of the last row
    const gridMain = gridClone.querySelector(`.${gridClasses.main}`);
    gridMain.style.overflow = 'visible';

    // See https://support.google.com/chrome/thread/191619088?hl=en&msgid=193009642
    gridClone.style.contain = 'size';
    let gridToolbarElementHeight = gridRootElement.querySelector(`.${gridClasses.toolbarContainer}`)?.offsetHeight || 0;
    let gridFooterElementHeight = gridRootElement.querySelector(`.${gridClasses.footerContainer}`)?.offsetHeight || 0;
    const gridFooterElement = gridClone.querySelector(`.${gridClasses.footerContainer}`);
    if (normalizeOptions.hideToolbar) {
      gridClone.querySelector(`.${gridClasses.toolbarContainer}`)?.remove();
      gridToolbarElementHeight = 0;
    }
    if (normalizeOptions.hideFooter && gridFooterElement) {
      gridFooterElement.remove();
      gridFooterElementHeight = 0;
    }

    // Expand container height to accommodate all rows
    const computedTotalHeight = rowsMeta.currentPageTotalHeight + getTotalHeaderHeight(apiRef, props) + gridToolbarElementHeight + gridFooterElementHeight;
    gridClone.style.height = `${computedTotalHeight}px`;
    // The height above does not include grid border width, so we need to exclude it
    gridClone.style.boxSizing = 'content-box';
    if (!normalizeOptions.hideFooter && gridFooterElement) {
      // the footer is always being placed at the bottom of the page as if all rows are exported
      // so if getRowsToExport is being used to only export a subset of rows then we need to
      // adjust the footer position to be correctly placed at the bottom of the grid
      gridFooterElement.style.position = 'absolute';
      gridFooterElement.style.width = '100%';
      gridFooterElement.style.top = `${computedTotalHeight - gridFooterElementHeight}px`;
    }

    // printDoc.body.appendChild(gridClone); should be enough but a clone isolation bug in Safari
    // prevents us to do it
    const container = document.createElement('div');
    container.appendChild(gridClone);
    // To avoid an empty page in start on Chromium based browsers
    printDoc.body.style.marginTop = '0px';
    printDoc.body.innerHTML = container.innerHTML;
    const defaultPageStyle = typeof normalizeOptions.pageStyle === 'function' ? normalizeOptions.pageStyle() : normalizeOptions.pageStyle;
    if (typeof defaultPageStyle === 'string') {
      // TODO custom styles should always win
      const styleElement = printDoc.createElement('style');
      styleElement.appendChild(printDoc.createTextNode(defaultPageStyle));
      printDoc.head.appendChild(styleElement);
    }
    if (normalizeOptions.bodyClassName) {
      printDoc.body.classList.add(...normalizeOptions.bodyClassName.split(' '));
    }
    const stylesheetLoadPromises = [];
    if (normalizeOptions.copyStyles) {
      const rootCandidate = gridRootElement.getRootNode();
      const root = rootCandidate.constructor.name === 'ShadowRoot' ? rootCandidate : doc.current;
      const headStyleElements = root.querySelectorAll("style, link[rel='stylesheet']");
      for (let i = 0; i < headStyleElements.length; i += 1) {
        const node = headStyleElements[i];
        if (node.tagName === 'STYLE') {
          const newHeadStyleElements = printDoc.createElement(node.tagName);
          const sheet = node.sheet;
          if (sheet) {
            let styleCSS = '';
            // NOTE: for-of is not supported by IE
            for (let j = 0; j < sheet.cssRules.length; j += 1) {
              if (typeof sheet.cssRules[j].cssText === 'string') {
                styleCSS += `${sheet.cssRules[j].cssText}\r\n`;
              }
            }
            newHeadStyleElements.appendChild(printDoc.createTextNode(styleCSS));
            printDoc.head.appendChild(newHeadStyleElements);
          }
        } else if (node.getAttribute('href')) {
          // If `href` tag is empty, avoid loading these links

          const newHeadStyleElements = printDoc.createElement(node.tagName);
          for (let j = 0; j < node.attributes.length; j += 1) {
            const attr = node.attributes[j];
            if (attr) {
              newHeadStyleElements.setAttribute(attr.nodeName, attr.nodeValue || '');
            }
          }
          stylesheetLoadPromises.push(new Promise(resolve => {
            newHeadStyleElements.addEventListener('load', () => resolve());
          }));
          printDoc.head.appendChild(newHeadStyleElements);
        }
      }
    }

    // Trigger print
    if (true) {
      // wait for remote stylesheets to load
      Promise.all(stylesheetLoadPromises).then(() => {
        printWindow.contentWindow.print();
      });
    }
  }, [apiRef, doc, props]);
  const handlePrintWindowAfterPrint = index_js_.useCallback(printWindow => {
    // Remove the print iframe
    doc.current.body.removeChild(printWindow);

    // Revert grid to previous state
    apiRef.current.restoreState(previousGridState.current || {});
    if (!previousGridState.current?.columns?.columnVisibilityModel) {
      // if the apiRef.current.exportState(); did not exported the column visibility, we update it
      apiRef.current.setColumnVisibilityModel(previousColumnVisibility.current);
    }
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      virtualization: previousVirtualizationState.current
    }));
    apiRef.current.setRows(previousRows.current);

    // Clear local state
    previousGridState.current = null;
    previousColumnVisibility.current = {};
    previousRows.current = [];
  }, [apiRef]);
  const exportDataAsPrint = index_js_.useCallback(async options => {
    logger.debug(`Export data as Print`);
    if (!apiRef.current.rootElementRef.current) {
      throw new Error('MUI X: No grid root element available.');
    }
    previousGridState.current = apiRef.current.exportState();
    // It appends that the visibility model is not exported, especially if columnVisibility is not controlled
    previousColumnVisibility.current = gridColumnVisibilityModelSelector(apiRef);
    previousRows.current = apiRef.current.getSortedRows().filter(row => !row[GRID_ID_AUTOGENERATED]);
    if (props.pagination) {
      const visibleRowCount = gridExpandedRowCountSelector(apiRef);
      const paginationModel = {
        page: 0,
        pageSize: visibleRowCount
      };
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
          paginationModel: getDerivedPaginationModel(state.pagination,
          // Using signature `DataGridPro` to allow more than 100 rows in the print export
          'DataGridPro', paginationModel)
        })
      }));
    }
    previousVirtualizationState.current = apiRef.current.state.virtualization;
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      virtualization: (0,esm_extends/* default */.A)({}, state.virtualization, {
        enabled: false,
        enabledForColumns: false
      })
    }));
    await updateGridColumnsForPrint(options?.fields, options?.allColumns, options?.includeCheckboxes);
    updateGridRowsForPrint(options?.getRowsToExport ?? defaultGetRowsToExport);
    await raf(); // wait for the state changes to take action
    const printWindow = buildPrintWindow(options?.fileName);
    if (false) // removed by dead control flow
{} else {
      printWindow.onload = () => {
        handlePrintWindowLoad(printWindow, options);
        const mediaQueryList = printWindow.contentWindow.matchMedia('print');
        mediaQueryList.addEventListener('change', mql => {
          const isAfterPrint = mql.matches === false;
          if (isAfterPrint) {
            handlePrintWindowAfterPrint(printWindow);
          }
        });
      };
      doc.current.body.appendChild(printWindow);
    }
  }, [props, logger, apiRef, handlePrintWindowLoad, handlePrintWindowAfterPrint, updateGridColumnsForPrint, updateGridRowsForPrint]);
  const printExportApi = {
    exportDataAsPrint
  };
  useGridApiMethod(apiRef, printExportApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const addExportMenuButtons = index_js_.useCallback((initialValue, options) => {
    if (options.printOptions?.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: /*#__PURE__*/(0,jsx_runtime.jsx)(GridPrintExportMenuItem, {
        options: options.printOptions
      }),
      componentName: 'printExport'
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, 'exportMenu', addExportMenuButtons);
};
;// ../node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridRegisterStrategyProcessor.js


const useGridRegisterStrategyProcessor = (apiRef, strategyName, group, processor) => {
  const registerPreProcessor = index_js_.useCallback(() => {
    apiRef.current.registerStrategyProcessor(strategyName, group, processor);
  }, [apiRef, processor, group, strategyName]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
  }, [registerPreProcessor]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/filter/useGridFilter.js



















const filterStateInitializer = (state, props, apiRef) => {
  const filterModel = props.filterModel ?? props.initialState?.filter?.filterModel ?? getDefaultGridFilterModel();
  return (0,esm_extends/* default */.A)({}, state, {
    filter: (0,esm_extends/* default */.A)({
      filterModel: sanitizeFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef)
    }, defaultGridFilterLookup),
    visibleRowsLookup: {}
  });
};
const getVisibleRowsLookup = params => {
  // For flat tree, the `visibleRowsLookup` and the `filteredRowsLookup` are equals since no row is collapsed.
  return params.filteredRowsLookup;
};
function getVisibleRowsLookupState(apiRef, state) {
  return apiRef.current.applyStrategyProcessor('visibleRowsLookupCreation', {
    tree: state.rows.tree,
    filteredRowsLookup: state.filter.filteredRowsLookup
  });
}
function createMemoizedValues() {
  return lruMemoize(Object.values);
}

/**
 * @requires useGridColumns (method, event)
 * @requires useGridParamsApi (method)
 * @requires useGridRows (event)
 */
const useGridFilter = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridFilter');
  apiRef.current.registerControlState({
    stateId: 'filter',
    propModel: props.filterModel,
    propOnChange: props.onFilterModelChange,
    stateSelector: gridFilterModelSelector,
    changeEvent: 'filterModelChange'
  });
  const updateFilteredRows = index_js_.useCallback(() => {
    apiRef.current.setState(state => {
      const filterModel = gridFilterModelSelector(state, apiRef.current.instanceId);
      const filterState = apiRef.current.getFilterState(filterModel);
      const newState = (0,esm_extends/* default */.A)({}, state, {
        filter: (0,esm_extends/* default */.A)({}, state.filter, filterState)
      });
      const visibleRowsLookupState = getVisibleRowsLookupState(apiRef, newState);
      return (0,esm_extends/* default */.A)({}, newState, {
        visibleRowsLookup: visibleRowsLookupState
      });
    });
    apiRef.current.publishEvent('filteredRowsSet');
  }, [apiRef]);
  const addColumnMenuItem = index_js_.useCallback((columnMenuItems, colDef) => {
    if (colDef == null || colDef.filterable === false || props.disableColumnFilter) {
      return columnMenuItems;
    }
    return [...columnMenuItems, 'columnMenuFilterItem'];
  }, [props.disableColumnFilter]);

  /**
   * API METHODS
   */
  const applyFilters = index_js_.useCallback(() => {
    updateFilteredRows();
    apiRef.current.forceUpdate();
  }, [apiRef, updateFilteredRows]);
  const upsertFilterItem = index_js_.useCallback(item => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = [...filterModel.items];
    const itemIndex = items.findIndex(filterItem => filterItem.id === item.id);
    if (itemIndex === -1) {
      items.push(item);
    } else {
      items[itemIndex] = item;
    }
    apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      items
    }), 'upsertFilterItem');
  }, [apiRef]);
  const upsertFilterItems = index_js_.useCallback(items => {
    const filterModel = gridFilterModelSelector(apiRef);
    const existingItems = [...filterModel.items];
    items.forEach(item => {
      const itemIndex = existingItems.findIndex(filterItem => filterItem.id === item.id);
      if (itemIndex === -1) {
        existingItems.push(item);
      } else {
        existingItems[itemIndex] = item;
      }
    });
    apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      items: existingItems
    }), 'upsertFilterItems');
  }, [apiRef]);
  const deleteFilterItem = index_js_.useCallback(itemToDelete => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = filterModel.items.filter(item => item.id !== itemToDelete.id);
    if (items.length === filterModel.items.length) {
      return;
    }
    apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      items
    }), 'deleteFilterItem');
  }, [apiRef]);
  const showFilterPanel = index_js_.useCallback((targetColumnField, panelId, labelId) => {
    logger.debug('Displaying filter panel');
    if (targetColumnField) {
      const filterModel = gridFilterModelSelector(apiRef);
      const filterItemsWithValue = filterModel.items.filter(item => {
        if (item.value !== undefined) {
          // Some filters like `isAnyOf` support array as `item.value`.
          // If array is empty, we want to remove it from the filter model.
          if (Array.isArray(item.value) && item.value.length === 0) {
            return false;
          }
          return true;
        }
        const column = apiRef.current.getColumn(item.field);
        const filterOperator = column.filterOperators?.find(operator => operator.value === item.operator);
        const requiresFilterValue = typeof filterOperator?.requiresFilterValue === 'undefined' ? true : filterOperator?.requiresFilterValue;

        // Operators like `isEmpty` don't have and don't require `item.value`.
        // So we don't want to remove them from the filter model if `item.value === undefined`.
        // See https://github.com/mui/mui-x/issues/5402
        if (requiresFilterValue) {
          return false;
        }
        return true;
      });
      let newFilterItems;
      const filterItemOnTarget = filterItemsWithValue.find(item => item.field === targetColumnField);
      const targetColumn = apiRef.current.getColumn(targetColumnField);
      if (filterItemOnTarget) {
        newFilterItems = filterItemsWithValue;
      } else if (props.disableMultipleColumnsFiltering) {
        newFilterItems = [cleanFilterItem({
          field: targetColumnField,
          operator: targetColumn.filterOperators[0].value
        }, apiRef)];
      } else {
        newFilterItems = [...filterItemsWithValue, cleanFilterItem({
          field: targetColumnField,
          operator: targetColumn.filterOperators[0].value
        }, apiRef)];
      }
      apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
        items: newFilterItems
      }));
    }
    apiRef.current.showPreferences(GridPreferencePanelsValue.filters, panelId, labelId);
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const hideFilterPanel = index_js_.useCallback(() => {
    logger.debug('Hiding filter panel');
    apiRef.current.hidePreferences();
  }, [apiRef, logger]);
  const setFilterLogicOperator = index_js_.useCallback(logicOperator => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (filterModel.logicOperator === logicOperator) {
      return;
    }
    apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      logicOperator
    }), 'changeLogicOperator');
  }, [apiRef]);
  const setQuickFilterValues = index_js_.useCallback(values => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (isDeepEqual(filterModel.quickFilterValues, values)) {
      return;
    }
    apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      quickFilterValues: [...values]
    }));
  }, [apiRef]);
  const setFilterModel = index_js_.useCallback((model, reason) => {
    const currentModel = gridFilterModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug('Setting filter model');
      apiRef.current.updateControlState('filter', mergeStateWithFilterModel(model, props.disableMultipleColumnsFiltering, apiRef), reason);
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const getFilterState = index_js_.useCallback(inputFilterModel => {
    const filterModel = sanitizeFilterModel(inputFilterModel, props.disableMultipleColumnsFiltering, apiRef);
    const isRowMatchingFilters = props.filterMode === 'client' ? buildAggregatedFilterApplier(filterModel, apiRef, props.disableEval) : null;
    const filterResult = apiRef.current.applyStrategyProcessor('filtering', {
      isRowMatchingFilters,
      filterModel: filterModel ?? getDefaultGridFilterModel()
    });
    return (0,esm_extends/* default */.A)({}, filterResult, {
      filterModel
    });
  }, [props.disableMultipleColumnsFiltering, props.filterMode, props.disableEval, apiRef]);
  const filterApi = {
    setFilterLogicOperator,
    unstable_applyFilters: applyFilters,
    deleteFilterItem,
    upsertFilterItem,
    upsertFilterItems,
    setFilterModel,
    showFilterPanel,
    hideFilterPanel,
    setQuickFilterValues,
    ignoreDiacritics: props.ignoreDiacritics,
    getFilterState
  };
  useGridApiMethod(apiRef, filterApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const filterModelToExport = gridFilterModelSelector(apiRef);

    // Remove the additional `fromInput` property from the filter model
    filterModelToExport.items.forEach(item => {
      delete item.fromInput;
    });
    const shouldExportFilterModel =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the model is controlled
    props.filterModel != null ||
    // Always export if the model has been initialized
    props.initialState?.filter?.filterModel != null ||
    // Export if the model is not equal to the default value
    !isDeepEqual(filterModelToExport, getDefaultGridFilterModel());
    if (!shouldExportFilterModel) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      filter: {
        filterModel: filterModelToExport
      }
    });
  }, [apiRef, props.filterModel, props.initialState?.filter?.filterModel]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const filterModel = context.stateToRestore.filter?.filterModel;
    if (filterModel == null) {
      return params;
    }
    apiRef.current.updateControlState('filter', mergeStateWithFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef), 'restoreState');
    return (0,esm_extends/* default */.A)({}, params, {
      callbacks: [...params.callbacks, apiRef.current.unstable_applyFilters]
    });
  }, [apiRef, props.disableMultipleColumnsFiltering]);
  const preferencePanelPreProcessing = index_js_.useCallback((initialValue, value) => {
    if (value === GridPreferencePanelsValue.filters) {
      const FilterPanel = props.slots.filterPanel;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(FilterPanel, (0,esm_extends/* default */.A)({}, props.slotProps?.filterPanel));
    }
    return initialValue;
  }, [props.slots.filterPanel, props.slotProps?.filterPanel]);
  const {
    getRowId
  } = props;
  const getRowsRef = useLazyRef(createMemoizedValues);
  const flatFilteringMethod = index_js_.useCallback(params => {
    if (props.filterMode !== 'client' || !params.isRowMatchingFilters || !params.filterModel.items.length && !params.filterModel.quickFilterValues?.length) {
      return defaultGridFilterLookup;
    }
    const dataRowIdToModelLookup = gridRowsLookupSelector(apiRef);
    const filteredRowsLookup = {};
    const {
      isRowMatchingFilters
    } = params;
    const filterCache = {};
    const result = {
      passingFilterItems: null,
      passingQuickFilterValues: null
    };
    const rows = getRowsRef.current(apiRef.current.state.rows.dataRowIdToModelLookup);
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      const id = getRowId ? getRowId(row) : row.id;
      isRowMatchingFilters(row, undefined, result);
      const isRowPassing = passFilterLogic([result.passingFilterItems], [result.passingQuickFilterValues], params.filterModel, apiRef, filterCache);
      filteredRowsLookup[id] = isRowPassing;
    }
    const footerId = 'auto-generated-group-footer-root';
    const footer = dataRowIdToModelLookup[footerId];
    if (footer) {
      filteredRowsLookup[footerId] = true;
    }
    return {
      filteredRowsLookup,
      filteredChildrenCountLookup: {},
      filteredDescendantCountLookup: {}
    };
  }, [apiRef, props.filterMode, getRowId, getRowsRef]);
  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItem);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'preferencePanel', preferencePanelPreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'filtering', flatFilteringMethod);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'visibleRowsLookupCreation', getVisibleRowsLookup);

  /**
   * EVENTS
   */
  const handleColumnsChange = index_js_.useCallback(() => {
    logger.debug('onColUpdated - GridColumns changed, applying filters');
    const filterModel = gridFilterModelSelector(apiRef);
    const columnsLookup = gridColumnLookupSelector(apiRef);
    const newFilterItems = filterModel.items.filter(item => item.field && columnsLookup[item.field]);
    if (newFilterItems.length < filterModel.items.length) {
      apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
        items: newFilterItems
      }));
    }
  }, [apiRef, logger]);
  const handleStrategyProcessorChange = index_js_.useCallback(methodName => {
    if (methodName === 'filtering') {
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef]);
  const updateVisibleRowsLookupState = index_js_.useCallback(() => {
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        visibleRowsLookup: getVisibleRowsLookupState(apiRef, state)
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);

  // Do not call `apiRef.current.forceUpdate` to avoid re-render before updating the sorted rows.
  // Otherwise, the state is not consistent during the render
  useGridApiEventHandler(apiRef, 'rowsSet', updateFilteredRows);
  useGridApiEventHandler(apiRef, 'columnsChange', handleColumnsChange);
  useGridApiEventHandler(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);
  useGridApiEventHandler(apiRef, 'rowExpansionChange', updateVisibleRowsLookupState);
  useGridApiEventHandler(apiRef, 'columnVisibilityModelChange', () => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (filterModel.quickFilterValues && shouldQuickFilterExcludeHiddenColumns(filterModel)) {
      // re-apply filters because the quick filter results may have changed
      apiRef.current.unstable_applyFilters();
    }
  });

  /**
   * 1ST RENDER
   */
  useFirstRender(() => {
    apiRef.current.unstable_applyFilters();
  });

  /**
   * EFFECTS
   */
  useEnhancedEffect_useEnhancedEffect(() => {
    if (props.filterModel !== undefined) {
      apiRef.current.setFilterModel(props.filterModel);
    }
  }, [apiRef, logger, props.filterModel]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/focus/useGridFocus.js













const focusStateInitializer = state => (0,esm_extends/* default */.A)({}, state, {
  focus: {
    cell: null,
    columnHeader: null,
    columnHeaderFilter: null,
    columnGroupHeader: null
  },
  tabIndex: {
    cell: null,
    columnHeader: null,
    columnHeaderFilter: null,
    columnGroupHeader: null
  }
});

/**
 * @requires useGridParamsApi (method)
 * @requires useGridRows (method)
 * @requires useGridEditing (event)
 */
const useGridFocus = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridFocus');
  const lastClickedCell = index_js_.useRef(null);
  const hasRootReference = apiRef.current.rootElementRef.current !== null;
  const publishCellFocusOut = index_js_.useCallback((cell, event) => {
    if (cell) {
      // The row might have been deleted
      if (apiRef.current.getRow(cell.id)) {
        apiRef.current.publishEvent('cellFocusOut', apiRef.current.getCellParams(cell.id, cell.field), event);
      }
    }
  }, [apiRef]);
  const setCellFocus = index_js_.useCallback((id, field) => {
    const focusedCell = gridFocusCellSelector(apiRef);
    if (focusedCell?.id === id && focusedCell?.field === field) {
      return;
    }
    apiRef.current.setState(state => {
      logger.debug(`Focusing on cell with id=${id} and field=${field}`);
      return (0,esm_extends/* default */.A)({}, state, {
        tabIndex: {
          cell: {
            id,
            field
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id,
            field
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();

    // The row might have been deleted
    if (!apiRef.current.getRow(id)) {
      return;
    }
    if (focusedCell) {
      // There's a focused cell but another cell was clicked
      // Publishes an event to notify that the focus was lost
      publishCellFocusOut(focusedCell, {});
    }
    apiRef.current.publishEvent('cellFocusIn', apiRef.current.getCellParams(id, field));
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnHeaderFocus = index_js_.useCallback((field, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    publishCellFocusOut(cell, event);
    apiRef.current.setState(state => {
      logger.debug(`Focusing on column header with colIndex=${field}`);
      return (0,esm_extends/* default */.A)({}, state, {
        tabIndex: {
          columnHeader: {
            field
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnHeaderFilterFocus = index_js_.useCallback((field, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    publishCellFocusOut(cell, event);
    apiRef.current.setState(state => {
      logger.debug(`Focusing on column header filter with colIndex=${field}`);
      return (0,esm_extends/* default */.A)({}, state, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field
          },
          cell: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnGroupHeaderFocus = index_js_.useCallback((field, depth, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    if (cell) {
      apiRef.current.publishEvent('cellFocusOut', apiRef.current.getCellParams(cell.id, cell.field), event);
    }
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        tabIndex: {
          columnGroupHeader: {
            field,
            depth
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field,
            depth
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const getColumnGroupHeaderFocus = index_js_.useCallback(() => gridFocusColumnGroupHeaderSelector(apiRef), [apiRef]);
  const moveFocusToRelativeCell = index_js_.useCallback((id, field, direction) => {
    let columnIndexToFocus = apiRef.current.getColumnIndex(field);
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    const pinnedRows = gridPinnedRowsSelector(apiRef);

    // Include pinned rows as well
    const currentPageRows = [].concat(pinnedRows.top || [], currentPage.rows, pinnedRows.bottom || []);
    let rowIndexToFocus = currentPageRows.findIndex(row => row.id === id);
    if (direction === 'right') {
      columnIndexToFocus += 1;
    } else if (direction === 'left') {
      columnIndexToFocus -= 1;
    } else {
      rowIndexToFocus += 1;
    }
    if (columnIndexToFocus >= visibleColumns.length) {
      // Go to next row if we are after the last column
      rowIndexToFocus += 1;
      if (rowIndexToFocus < currentPageRows.length) {
        // Go to first column of the next row if there's one more row
        columnIndexToFocus = 0;
      }
    } else if (columnIndexToFocus < 0) {
      // Go to previous row if we are before the first column
      rowIndexToFocus -= 1;
      if (rowIndexToFocus >= 0) {
        // Go to last column of the previous if there's one more row
        columnIndexToFocus = visibleColumns.length - 1;
      }
    }
    rowIndexToFocus = clamp(rowIndexToFocus, 0, currentPageRows.length - 1);
    const rowToFocus = currentPageRows[rowIndexToFocus];
    if (!rowToFocus) {
      return;
    }
    const colSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowToFocus.id, columnIndexToFocus);
    if (colSpanInfo && colSpanInfo.spannedByColSpan) {
      if (direction === 'left' || direction === 'below') {
        columnIndexToFocus = colSpanInfo.leftVisibleCellIndex;
      } else if (direction === 'right') {
        columnIndexToFocus = colSpanInfo.rightVisibleCellIndex;
      }
    }
    columnIndexToFocus = clamp(columnIndexToFocus, 0, visibleColumns.length - 1);
    const columnToFocus = visibleColumns[columnIndexToFocus];
    apiRef.current.setCellFocus(rowToFocus.id, columnToFocus.field);
  }, [apiRef, props.pagination, props.paginationMode]);
  const handleCellDoubleClick = index_js_.useCallback(({
    id,
    field
  }) => {
    apiRef.current.setCellFocus(id, field);
  }, [apiRef]);
  const handleCellKeyDown = index_js_.useCallback((params, event) => {
    // GRID_CELL_NAVIGATION_KEY_DOWN handles the focus on Enter, Tab and navigation keys
    if (event.key === 'Enter' || event.key === 'Tab' || event.key === 'Shift' || isNavigationKey(event.key)) {
      return;
    }
    apiRef.current.setCellFocus(params.id, params.field);
  }, [apiRef]);
  const handleColumnHeaderFocus = index_js_.useCallback(({
    field
  }, event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef]);
  const handleColumnGroupHeaderFocus = index_js_.useCallback(({
    fields,
    depth
  }, event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    const focusedColumnGroup = gridFocusColumnGroupHeaderSelector(apiRef);
    if (focusedColumnGroup !== null && focusedColumnGroup.depth === depth && fields.includes(focusedColumnGroup.field)) {
      // This group cell has already been focused
      return;
    }
    apiRef.current.setColumnGroupHeaderFocus(fields[0], depth, event);
  }, [apiRef]);
  const handleBlur = index_js_.useCallback((_, event) => {
    if (event.relatedTarget?.getAttribute('class')?.includes(gridClasses.columnHeader)) {
      return;
    }
    logger.debug(`Clearing focus`);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      focus: {
        cell: null,
        columnHeader: null,
        columnHeaderFilter: null,
        columnGroupHeader: null
      }
    }));
  }, [logger, apiRef]);
  const handleCellMouseDown = index_js_.useCallback(params => {
    lastClickedCell.current = params;
  }, []);
  const handleDocumentClick = index_js_.useCallback(event => {
    const cellParams = lastClickedCell.current;
    lastClickedCell.current = null;
    const focusedCell = gridFocusCellSelector(apiRef);
    const canUpdateFocus = apiRef.current.unstable_applyPipeProcessors('canUpdateFocus', true, {
      event,
      cell: cellParams
    });
    if (!canUpdateFocus) {
      return;
    }
    if (!focusedCell) {
      if (cellParams) {
        apiRef.current.setCellFocus(cellParams.id, cellParams.field);
      }
      return;
    }
    if (cellParams?.id === focusedCell.id && cellParams?.field === focusedCell.field) {
      return;
    }
    const cellElement = apiRef.current.getCellElement(focusedCell.id, focusedCell.field);
    if (cellElement?.contains(event.target)) {
      return;
    }
    if (cellParams) {
      apiRef.current.setCellFocus(cellParams.id, cellParams.field);
    } else {
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }));
      apiRef.current.forceUpdate();

      // There's a focused cell but another element (not a cell) was clicked
      // Publishes an event to notify that the focus was lost
      publishCellFocusOut(focusedCell, event);
    }
  }, [apiRef, publishCellFocusOut]);
  const handleCellModeChange = index_js_.useCallback(params => {
    if (params.cellMode === 'view') {
      return;
    }
    const cell = gridFocusCellSelector(apiRef);
    if (cell?.id !== params.id || cell?.field !== params.field) {
      apiRef.current.setCellFocus(params.id, params.field);
    }
  }, [apiRef]);
  const handleRowSet = index_js_.useCallback(() => {
    const cell = gridFocusCellSelector(apiRef);

    // If the focused cell is in a row which does not exist anymore,
    // focus previous row or remove the focus
    if (cell && !apiRef.current.getRow(cell.id)) {
      const lastFocusedRowId = cell.id;
      let nextRowId = null;
      if (typeof lastFocusedRowId !== 'undefined') {
        const rowEl = apiRef.current.getRowElement(lastFocusedRowId);
        const lastFocusedRowIndex = rowEl?.dataset.rowindex ? Number(rowEl?.dataset.rowindex) : 0;
        const currentPage = getVisibleRows(apiRef, {
          pagination: props.pagination,
          paginationMode: props.paginationMode
        });
        const nextRow = currentPage.rows[clamp(lastFocusedRowIndex, 0, currentPage.rows.length - 1)];
        nextRowId = nextRow?.id ?? null;
      }
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        focus: {
          cell: nextRowId === null ? null : {
            id: nextRowId,
            field: cell.field
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }));
    }
  }, [apiRef, props.pagination, props.paginationMode]);
  const handlePaginationModelChange = useEventCallback_useEventCallback(() => {
    const currentFocusedCell = gridFocusCellSelector(apiRef);
    if (!currentFocusedCell) {
      return;
    }
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    const rowIsInCurrentPage = currentPage.rows.find(row => row.id === currentFocusedCell.id);
    if (rowIsInCurrentPage) {
      return;
    }
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        tabIndex: {
          cell: {
            id: currentPage.rows[0].id,
            field: visibleColumns[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      });
    });
  });
  const focusApi = {
    setCellFocus,
    setColumnHeaderFocus,
    setColumnHeaderFilterFocus
  };
  const focusPrivateApi = {
    moveFocusToRelativeCell,
    setColumnGroupHeaderFocus,
    getColumnGroupHeaderFocus
  };
  useGridApiMethod(apiRef, focusApi, 'public');
  useGridApiMethod(apiRef, focusPrivateApi, 'private');
  index_js_.useEffect(() => {
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.addEventListener('mouseup', handleDocumentClick);
    return () => {
      doc.removeEventListener('mouseup', handleDocumentClick);
    };
  }, [apiRef, hasRootReference, handleDocumentClick]);
  useGridApiEventHandler(apiRef, 'columnHeaderBlur', handleBlur);
  useGridApiEventHandler(apiRef, 'cellDoubleClick', handleCellDoubleClick);
  useGridApiEventHandler(apiRef, 'cellMouseDown', handleCellMouseDown);
  useGridApiEventHandler(apiRef, 'cellKeyDown', handleCellKeyDown);
  useGridApiEventHandler(apiRef, 'cellModeChange', handleCellModeChange);
  useGridApiEventHandler(apiRef, 'columnHeaderFocus', handleColumnHeaderFocus);
  useGridApiEventHandler(apiRef, 'columnGroupHeaderFocus', handleColumnGroupHeaderFocus);
  useGridApiEventHandler(apiRef, 'rowsSet', handleRowSet);
  useGridApiEventHandler(apiRef, 'paginationModelChange', handlePaginationModelChange);
};
;// ../node_modules/@mui/x-data-grid/internals/utils/gridRowGroupingUtils.js

const getRowGroupingCriteriaFromGroupingField = groupingColDefField => {
  const match = groupingColDefField.match(/^__row_group_by_columns_group_(.*)__$/);
  if (!match) {
    return null;
  }
  return match[1];
};
const isGroupingColumn = field => field === GRID_ROW_GROUPING_SINGLE_GROUPING_FIELD || getRowGroupingCriteriaFromGroupingField(field) !== null;
;// ../node_modules/@mui/x-data-grid/utils/domUtils.js

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function findParentElementFromClassName(elem, className) {
  return elem.closest(`.${className}`);
}

// TODO, eventually replaces this function with CSS.escape, once available in jsdom, either added manually or built in
// https://github.com/jsdom/jsdom/issues/1550#issuecomment-236734471
function escapeOperandAttributeSelector(operand) {
  return operand.replace(/["\\]/g, '\\$&');
}
function getGridColumnHeaderElement(root, field) {
  return root.querySelector(`[role="columnheader"][data-field="${escapeOperandAttributeSelector(field)}"]`);
}
function getGridRowElementSelector(id) {
  return `.${gridClasses.row}[data-id="${escapeOperandAttributeSelector(String(id))}"]`;
}
function getGridRowElement(root, id) {
  return root.querySelector(getGridRowElementSelector(id));
}
function getGridCellElement(root, {
  id,
  field
}) {
  const rowSelector = getGridRowElementSelector(id);
  const cellSelector = `.${gridClasses.cell}[data-field="${escapeOperandAttributeSelector(field)}"]`;
  const selector = `${rowSelector} ${cellSelector}`;
  return root.querySelector(selector);
}

// https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
const getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};
function isEventTargetInPortal(event) {
  if (
  // The target is not an element when triggered by a Select inside the cell
  // See https://github.com/mui/material-ui/issues/10534
  event.target.nodeType === 1 && !event.currentTarget.contains(event.target)) {
    return true;
  }
  return false;
}
function getFieldFromHeaderElem(colCellEl) {
  return colCellEl.getAttribute('data-field');
}
function findHeaderElementFromField(elem, field) {
  return elem.querySelector(`[data-field="${escapeOperandAttributeSelector(field)}"]`);
}
function getFieldsFromGroupHeaderElem(colCellEl) {
  return colCellEl.getAttribute('data-fields').slice(2, -2).split('-|-');
}
function findGroupHeaderElementsFromField(elem, field) {
  return Array.from(elem.querySelectorAll(`[data-fields*="|-${escapeOperandAttributeSelector(field)}-|"]`) ?? []);
}
function findGridCellElementsFromCol(col, api) {
  const root = findParentElementFromClassName(col, gridClasses.root);
  if (!root) {
    throw new Error('MUI X: The root element is not found.');
  }
  const ariaColIndex = col.getAttribute('aria-colindex');
  if (!ariaColIndex) {
    return [];
  }
  const colIndex = Number(ariaColIndex) - 1;
  const cells = [];
  if (!api.virtualScrollerRef?.current) {
    return [];
  }
  queryRows(api).forEach(rowElement => {
    const rowId = rowElement.getAttribute('data-id');
    if (!rowId) {
      return;
    }
    let columnIndex = colIndex;
    const cellColSpanInfo = api.unstable_getCellColSpanInfo(rowId, colIndex);
    if (cellColSpanInfo && cellColSpanInfo.spannedByColSpan) {
      columnIndex = cellColSpanInfo.leftVisibleCellIndex;
    }
    const cell = rowElement.querySelector(`[data-colindex="${columnIndex}"]`);
    if (cell) {
      cells.push(cell);
    }
  });
  return cells;
}
function findGridElement(api, klass) {
  return api.rootElementRef.current.querySelector(`.${gridClasses[klass]}`);
}
const findPinnedCells = ({
  api,
  colIndex,
  position,
  filterFn
}) => {
  if (colIndex === null) {
    return [];
  }
  const cells = [];
  queryRows(api).forEach(rowElement => {
    const rowId = rowElement.getAttribute('data-id');
    if (!rowId) {
      return;
    }
    rowElement.querySelectorAll(`.${gridClasses[position === 'left' ? 'cell--pinnedLeft' : 'cell--pinnedRight']}`).forEach(cell => {
      const currentColIndex = parseCellColIndex(cell);
      if (currentColIndex !== null && filterFn(currentColIndex)) {
        cells.push(cell);
      }
    });
  });
  return cells;
};
function findLeftPinnedCellsAfterCol(api, col, isRtl) {
  const colIndex = parseCellColIndex(col);
  return findPinnedCells({
    api,
    colIndex,
    position: isRtl ? 'right' : 'left',
    filterFn: index => isRtl ? index < colIndex : index > colIndex
  });
}
function findRightPinnedCellsBeforeCol(api, col, isRtl) {
  const colIndex = parseCellColIndex(col);
  return findPinnedCells({
    api,
    colIndex,
    position: isRtl ? 'left' : 'right',
    filterFn: index => isRtl ? index > colIndex : index < colIndex
  });
}
const findPinnedHeaders = ({
  api,
  colIndex,
  position,
  filterFn
}) => {
  if (!api.columnHeadersContainerRef?.current) {
    return [];
  }
  if (colIndex === null) {
    return [];
  }
  const elements = [];
  api.columnHeadersContainerRef.current.querySelectorAll(`.${gridClasses[position === 'left' ? 'columnHeader--pinnedLeft' : 'columnHeader--pinnedRight']}`).forEach(element => {
    const currentColIndex = parseCellColIndex(element);
    if (currentColIndex !== null && filterFn(currentColIndex, element)) {
      elements.push(element);
    }
  });
  return elements;
};
function findLeftPinnedHeadersAfterCol(api, col, isRtl) {
  const colIndex = parseCellColIndex(col);
  return findPinnedHeaders({
    api,
    position: isRtl ? 'right' : 'left',
    colIndex,
    filterFn: index => isRtl ? index < colIndex : index > colIndex
  });
}
function findRightPinnedHeadersBeforeCol(api, col, isRtl) {
  const colIndex = parseCellColIndex(col);
  return findPinnedHeaders({
    api,
    position: isRtl ? 'left' : 'right',
    colIndex,
    filterFn: (index, element) => {
      if (element.classList.contains(gridClasses['columnHeader--last'])) {
        return false;
      }
      return isRtl ? index > colIndex : index < colIndex;
    }
  });
}
function findGridHeader(api, field) {
  const headers = api.columnHeadersContainerRef.current;
  return headers.querySelector(`:scope > div > [data-field="${escapeOperandAttributeSelector(field)}"][role="columnheader"]`);
}
function findGridCells(api, field) {
  const container = api.virtualScrollerRef.current;
  return Array.from(container.querySelectorAll(`:scope > div > div > div > [data-field="${escapeOperandAttributeSelector(field)}"][role="gridcell"]`));
}
function queryRows(api) {
  return api.virtualScrollerRef.current.querySelectorAll(
  // Use > to ignore rows from nested Data Grids (for example in detail panel)
  `:scope > div > div > .${gridClasses.row}`);
}
function parseCellColIndex(col) {
  const ariaColIndex = col.getAttribute('aria-colindex');
  if (!ariaColIndex) {
    return null;
  }
  return Number(ariaColIndex) - 1;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/keyboardNavigation/utils.js


const getLeftColumnIndex = ({
  currentColIndex,
  firstColIndex,
  lastColIndex,
  isRtl
}) => {
  if (isRtl) {
    if (currentColIndex < lastColIndex) {
      return currentColIndex + 1;
    }
  } else if (!isRtl) {
    if (currentColIndex > firstColIndex) {
      return currentColIndex - 1;
    }
  }
  return null;
};
const getRightColumnIndex = ({
  currentColIndex,
  firstColIndex,
  lastColIndex,
  isRtl
}) => {
  if (isRtl) {
    if (currentColIndex > firstColIndex) {
      return currentColIndex - 1;
    }
  } else if (!isRtl) {
    if (currentColIndex < lastColIndex) {
      return currentColIndex + 1;
    }
  }
  return null;
};
function findNonRowSpannedCell(apiRef, rowId, field, rowSpanScanDirection) {
  const rowSpanHiddenCells = gridRowSpanningHiddenCellsSelector(apiRef);
  if (!rowSpanHiddenCells[rowId]?.[field]) {
    return rowId;
  }
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  // find closest non row spanned cell in the given `rowSpanScanDirection`
  let nextRowIndex = filteredSortedRowIds.indexOf(rowId) + (rowSpanScanDirection === 'down' ? 1 : -1);
  while (nextRowIndex >= 0 && nextRowIndex < filteredSortedRowIds.length) {
    const nextRowId = filteredSortedRowIds[nextRowIndex];
    if (!rowSpanHiddenCells[nextRowId]?.[field]) {
      return nextRowId;
    }
    nextRowIndex += rowSpanScanDirection === 'down' ? 1 : -1;
  }
  return rowId;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/keyboardNavigation/useGridKeyboardNavigation.js






















const gridVisibleRowsWithPinnedRowsSelector = createSelectorMemoized(gridVisibleRowsSelector, gridPinnedRowsSelector, (visibleRows, pinnedRows) => {
  return (pinnedRows.top || []).concat(visibleRows.rows, pinnedRows.bottom || []);
});

/**
 * @requires useGridSorting (method) - can be after
 * @requires useGridFilter (state) - can be after
 * @requires useGridColumns (state, method) - can be after
 * @requires useGridDimensions (method) - can be after
 * @requires useGridFocus (method) - can be after
 * @requires useGridScroll (method) - can be after
 * @requires useGridColumnSpanning (method) - can be after
 */
const useGridKeyboardNavigation = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridKeyboardNavigation');
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const listView = props.unstable_listView;
  const getCurrentPageRows = index_js_.useCallback(() => {
    return gridVisibleRowsWithPinnedRowsSelector(apiRef);
  }, [apiRef]);
  const headerFilteringEnabled = props.signature !== 'DataGrid' && props.headerFilters;

  /**
   * @param {number} colIndex Index of the column to focus
   * @param {GridRowId} rowId index of the row to focus
   * @param {string} closestColumnToUse Which closest column cell to use when the cell is spanned by `colSpan`.
   * @param {string} rowSpanScanDirection Which direction to search to find the next cell not hidden by `rowSpan`.
   * TODO replace with apiRef.current.moveFocusToRelativeCell()
   */
  const goToCell = index_js_.useCallback((colIndex, rowId, closestColumnToUse = 'left', rowSpanScanDirection = 'up') => {
    const visibleSortedRows = gridExpandedSortedRowEntriesSelector(apiRef);
    const nextCellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, colIndex);
    if (nextCellColSpanInfo && nextCellColSpanInfo.spannedByColSpan) {
      if (closestColumnToUse === 'left') {
        colIndex = nextCellColSpanInfo.leftVisibleCellIndex;
      } else if (closestColumnToUse === 'right') {
        colIndex = nextCellColSpanInfo.rightVisibleCellIndex;
      }
    }
    const field = listView ? gridListColumnSelector(apiRef.current.state).field : gridVisibleColumnFieldsSelector(apiRef)[colIndex];
    const nonRowSpannedRowId = findNonRowSpannedCell(apiRef, rowId, field, rowSpanScanDirection);
    // `scrollToIndexes` requires a rowIndex relative to all visible rows.
    // Those rows do not include pinned rows, but pinned rows do not need scroll anyway.
    const rowIndexRelativeToAllRows = visibleSortedRows.findIndex(row => row.id === nonRowSpannedRowId);
    logger.debug(`Navigating to cell row ${rowIndexRelativeToAllRows}, col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex,
      rowIndex: rowIndexRelativeToAllRows
    });
    apiRef.current.setCellFocus(nonRowSpannedRowId, field);
  }, [apiRef, logger, listView]);
  const goToHeader = index_js_.useCallback((colIndex, event) => {
    logger.debug(`Navigating to header col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef, logger]);
  const goToHeaderFilter = index_js_.useCallback((colIndex, event) => {
    logger.debug(`Navigating to header filter col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setColumnHeaderFilterFocus(field, event);
  }, [apiRef, logger]);
  const goToGroupHeader = index_js_.useCallback((colIndex, depth, event) => {
    logger.debug(`Navigating to header col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const {
      field
    } = apiRef.current.getVisibleColumns()[colIndex];
    apiRef.current.setColumnGroupHeaderFocus(field, depth, event);
  }, [apiRef, logger]);
  const getRowIdFromIndex = index_js_.useCallback(rowIndex => {
    return getCurrentPageRows()[rowIndex]?.id;
  }, [getCurrentPageRows]);
  const handleColumnHeaderKeyDown = index_js_.useCallback((params, event) => {
    const headerTitleNode = event.currentTarget.querySelector(`.${gridClasses.columnHeaderTitleContainerContent}`);
    const isFromInsideContent = !!headerTitleNode && headerTitleNode.contains(event.target);
    if (isFromInsideContent && params.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      // When focus is on a nested input, keyboard events have no effect to avoid conflicts with native events.
      // There is one exception for the checkBoxHeader
      return;
    }
    const currentPageRows = getCurrentPageRows();
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const firstRowIndexInPage = currentPageRows.length > 0 ? 0 : null;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    const columnGroupMaxDepth = gridColumnGroupsHeaderMaxDepthSelector(apiRef);
    let shouldPreventDefault = true;
    switch (event.key) {
      case 'ArrowDown':
        {
          if (headerFilteringEnabled) {
            goToHeaderFilter(colIndexBefore, event);
          } else if (firstRowIndexInPage !== null) {
            goToCell(colIndexBefore, getRowIdFromIndex(firstRowIndexInPage));
          }
          break;
        }
      case 'ArrowRight':
        {
          const rightColIndex = getRightColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (rightColIndex !== null) {
            goToHeader(rightColIndex, event);
          }
          break;
        }
      case 'ArrowLeft':
        {
          const leftColIndex = getLeftColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (leftColIndex !== null) {
            goToHeader(leftColIndex, event);
          }
          break;
        }
      case 'ArrowUp':
        {
          if (columnGroupMaxDepth > 0) {
            goToGroupHeader(colIndexBefore, columnGroupMaxDepth - 1, event);
          }
          break;
        }
      case 'PageDown':
        {
          if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
            goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
          }
          break;
        }
      case 'Home':
        {
          goToHeader(firstColIndex, event);
          break;
        }
      case 'End':
        {
          goToHeader(lastColIndex, event);
          break;
        }
      case 'Enter':
        {
          if (event.ctrlKey || event.metaKey) {
            apiRef.current.toggleColumnMenu(params.field);
          }
          break;
        }
      case ' ':
        {
          // prevent Space event from scrolling
          break;
        }
      default:
        {
          shouldPreventDefault = false;
        }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, getCurrentPageRows, headerFilteringEnabled, goToHeaderFilter, goToCell, getRowIdFromIndex, isRtl, goToHeader, goToGroupHeader]);
  const handleHeaderFilterKeyDown = index_js_.useCallback((params, event) => {
    const isEditing = gridHeaderFilteringEditFieldSelector(apiRef) === params.field;
    const isHeaderMenuOpen = gridHeaderFilteringMenuSelector(apiRef) === params.field;
    if (isEditing || isHeaderMenuOpen || !isNavigationKey(event.key)) {
      return;
    }
    const currentPageRows = getCurrentPageRows();
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case 'ArrowDown':
        {
          const rowId = getRowIdFromIndex(firstRowIndexInPage);
          if (firstRowIndexInPage !== null && rowId != null) {
            goToCell(colIndexBefore, rowId);
          }
          break;
        }
      case 'ArrowRight':
        {
          const rightColIndex = getRightColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (rightColIndex !== null) {
            goToHeaderFilter(rightColIndex, event);
          }
          break;
        }
      case 'ArrowLeft':
        {
          const leftColIndex = getLeftColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (leftColIndex !== null) {
            goToHeaderFilter(leftColIndex, event);
          } else {
            apiRef.current.setColumnHeaderFilterFocus(params.field, event);
          }
          break;
        }
      case 'ArrowUp':
        {
          goToHeader(colIndexBefore, event);
          break;
        }
      case 'PageDown':
        {
          if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
            goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
          }
          break;
        }
      case 'Home':
        {
          goToHeaderFilter(firstColIndex, event);
          break;
        }
      case 'End':
        {
          goToHeaderFilter(lastColIndex, event);
          break;
        }
      case ' ':
        {
          // prevent Space event from scrolling
          break;
        }
      default:
        {
          shouldPreventDefault = false;
        }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, getCurrentPageRows, goToHeaderFilter, isRtl, goToHeader, goToCell, getRowIdFromIndex]);
  const handleColumnGroupHeaderKeyDown = index_js_.useCallback((params, event) => {
    const focusedColumnGroup = gridFocusColumnGroupHeaderSelector(apiRef);
    if (focusedColumnGroup === null) {
      return;
    }
    const {
      field: currentField,
      depth: currentDepth
    } = focusedColumnGroup;
    const {
      fields,
      depth,
      maxDepth
    } = params;
    const currentPageRows = getCurrentPageRows();
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const currentColIndex = apiRef.current.getColumnIndex(currentField);
    const colIndexBefore = currentField ? apiRef.current.getColumnIndex(currentField) : 0;
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case 'ArrowDown':
        {
          if (depth === maxDepth - 1) {
            goToHeader(currentColIndex, event);
          } else {
            goToGroupHeader(currentColIndex, currentDepth + 1, event);
          }
          break;
        }
      case 'ArrowUp':
        {
          if (depth > 0) {
            goToGroupHeader(currentColIndex, currentDepth - 1, event);
          }
          break;
        }
      case 'ArrowRight':
        {
          const remainingRightColumns = fields.length - fields.indexOf(currentField) - 1;
          if (currentColIndex + remainingRightColumns + 1 <= lastColIndex) {
            goToGroupHeader(currentColIndex + remainingRightColumns + 1, currentDepth, event);
          }
          break;
        }
      case 'ArrowLeft':
        {
          const remainingLeftColumns = fields.indexOf(currentField);
          if (currentColIndex - remainingLeftColumns - 1 >= firstColIndex) {
            goToGroupHeader(currentColIndex - remainingLeftColumns - 1, currentDepth, event);
          }
          break;
        }
      case 'PageDown':
        {
          if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
            goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
          }
          break;
        }
      case 'Home':
        {
          goToGroupHeader(firstColIndex, currentDepth, event);
          break;
        }
      case 'End':
        {
          goToGroupHeader(lastColIndex, currentDepth, event);
          break;
        }
      case ' ':
        {
          // prevent Space event from scrolling
          break;
        }
      default:
        {
          shouldPreventDefault = false;
        }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, getCurrentPageRows, goToHeader, goToGroupHeader, goToCell, getRowIdFromIndex]);
  const handleCellKeyDown = index_js_.useCallback((params, event) => {
    // Ignore portal
    if (isEventTargetInPortal(event)) {
      return;
    }

    // Get the most recent params because the cell mode may have changed by another listener
    const cellParams = apiRef.current.getCellParams(params.id, params.field);
    if (cellParams.cellMode === GridCellModes.Edit || !isNavigationKey(event.key)) {
      return;
    }
    const canUpdateFocus = apiRef.current.unstable_applyPipeProcessors('canUpdateFocus', true, {
      event,
      cell: cellParams
    });
    if (!canUpdateFocus) {
      return;
    }
    const currentPageRows = getCurrentPageRows();
    if (currentPageRows.length === 0) {
      return;
    }
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const getColumnIndexFn = listView ? () => 0 : apiRef.current.getColumnIndex;
    const colIndexBefore = params.field ? getColumnIndexFn(params.field) : 0;
    const rowIndexBefore = currentPageRows.findIndex(row => row.id === params.id);
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const visibleColumns = listView ? [gridListColumnSelector(apiRef.current.state)] : gridVisibleColumnDefinitionsSelector(apiRef);
    const lastColIndex = visibleColumns.length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case 'ArrowDown':
        {
          // "Enter" is only triggered by the row / cell editing feature
          if (rowIndexBefore < lastRowIndexInPage) {
            goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore + 1), isRtl ? 'right' : 'left', 'down');
          }
          break;
        }
      case 'ArrowUp':
        {
          if (rowIndexBefore > firstRowIndexInPage) {
            goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore - 1));
          } else if (headerFilteringEnabled) {
            goToHeaderFilter(colIndexBefore, event);
          } else {
            goToHeader(colIndexBefore, event);
          }
          break;
        }
      case 'ArrowRight':
        {
          const rightColIndex = getRightColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (rightColIndex !== null) {
            goToCell(rightColIndex, getRowIdFromIndex(rowIndexBefore), isRtl ? 'left' : 'right');
          }
          break;
        }
      case 'ArrowLeft':
        {
          const leftColIndex = getLeftColumnIndex({
            currentColIndex: colIndexBefore,
            firstColIndex,
            lastColIndex,
            isRtl
          });
          if (leftColIndex !== null) {
            goToCell(leftColIndex, getRowIdFromIndex(rowIndexBefore), isRtl ? 'right' : 'left');
          }
          break;
        }
      case 'Tab':
        {
          // "Tab" is only triggered by the row / cell editing feature
          if (event.shiftKey && colIndexBefore > firstColIndex) {
            goToCell(colIndexBefore - 1, getRowIdFromIndex(rowIndexBefore), 'left');
          } else if (!event.shiftKey && colIndexBefore < lastColIndex) {
            goToCell(colIndexBefore + 1, getRowIdFromIndex(rowIndexBefore), 'right');
          }
          break;
        }
      case ' ':
        {
          const field = params.field;
          if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
            break;
          }
          const colDef = params.colDef;
          if (colDef && (colDef.field === GRID_TREE_DATA_GROUPING_FIELD || isGroupingColumn(colDef.field))) {
            break;
          }
          if (!event.shiftKey && rowIndexBefore < lastRowIndexInPage) {
            goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
          }
          break;
        }
      case 'PageDown':
        {
          if (rowIndexBefore < lastRowIndexInPage) {
            goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
          }
          break;
        }
      case 'PageUp':
        {
          // Go to the first row before going to header
          const nextRowIndex = Math.max(rowIndexBefore - viewportPageSize, firstRowIndexInPage);
          if (nextRowIndex !== rowIndexBefore && nextRowIndex >= firstRowIndexInPage) {
            goToCell(colIndexBefore, getRowIdFromIndex(nextRowIndex));
          } else {
            goToHeader(colIndexBefore, event);
          }
          break;
        }
      case 'Home':
        {
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            goToCell(firstColIndex, getRowIdFromIndex(firstRowIndexInPage));
          } else {
            goToCell(firstColIndex, getRowIdFromIndex(rowIndexBefore));
          }
          break;
        }
      case 'End':
        {
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            goToCell(lastColIndex, getRowIdFromIndex(lastRowIndexInPage));
          } else {
            goToCell(lastColIndex, getRowIdFromIndex(rowIndexBefore));
          }
          break;
        }
      default:
        {
          shouldPreventDefault = false;
        }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, getCurrentPageRows, isRtl, goToCell, getRowIdFromIndex, headerFilteringEnabled, goToHeaderFilter, goToHeader, listView]);
  const checkIfCanStartEditing = index_js_.useCallback((initialValue, {
    event
  }) => {
    if (event.key === ' ') {
      // Space scrolls to the last row
      return false;
    }
    return initialValue;
  }, []);
  useGridRegisterPipeProcessor(apiRef, 'canStartEditing', checkIfCanStartEditing);
  useGridApiEventHandler(apiRef, 'columnHeaderKeyDown', handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, 'headerFilterKeyDown', handleHeaderFilterKeyDown);
  useGridApiEventHandler(apiRef, 'columnGroupHeaderKeyDown', handleColumnGroupHeaderKeyDown);
  useGridApiEventHandler(apiRef, 'cellKeyDown', handleCellKeyDown);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/useGridRowCount.js







const useGridRowCount = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridRowCount');
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const rowCountState = useGridSelector(apiRef, gridPaginationRowCountSelector);
  const paginationMeta = useGridSelector(apiRef, gridPaginationMetaSelector);
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const previousPageSize = useLazyRef(() => gridPaginationModelSelector(apiRef).pageSize);
  apiRef.current.registerControlState({
    stateId: 'paginationRowCount',
    propModel: props.rowCount,
    propOnChange: props.onRowCountChange,
    stateSelector: gridPaginationRowCountSelector,
    changeEvent: 'rowCountChange'
  });

  /**
   * API METHODS
   */
  const setRowCount = index_js_.useCallback(newRowCount => {
    if (rowCountState === newRowCount) {
      return;
    }
    logger.debug("Setting 'rowCount' to", newRowCount);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        rowCount: newRowCount
      })
    }));
  }, [apiRef, logger, rowCountState]);
  const paginationRowCountApi = {
    setRowCount
  };
  useGridApiMethod(apiRef, paginationRowCountApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const exportedRowCount = gridPaginationRowCountSelector(apiRef);
    const shouldExportRowCount =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the `rowCount` is controlled
    props.rowCount != null ||
    // Always export if the `rowCount` has been initialized
    props.initialState?.pagination?.rowCount != null;
    if (!shouldExportRowCount) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      pagination: (0,esm_extends/* default */.A)({}, prevState.pagination, {
        rowCount: exportedRowCount
      })
    });
  }, [apiRef, props.rowCount, props.initialState?.pagination?.rowCount]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const restoredRowCount = context.stateToRestore.pagination?.rowCount ? context.stateToRestore.pagination.rowCount : gridPaginationRowCountSelector(apiRef);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        rowCount: restoredRowCount
      })
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /**
   * EVENTS
   */
  const handlePaginationModelChange = index_js_.useCallback(model => {
    if (props.paginationMode === 'client' || !previousPageSize.current) {
      return;
    }
    if (model.pageSize !== previousPageSize.current) {
      previousPageSize.current = model.pageSize;
      if (rowCountState === -1) {
        // Row count unknown and page size changed, reset the page
        apiRef.current.setPage(0);
      }
    }
  }, [props.paginationMode, previousPageSize, rowCountState, apiRef]);
  useGridApiEventHandler(apiRef, 'paginationModelChange', handlePaginationModelChange);

  /**
   * EFFECTS
   */
  index_js_.useEffect(() => {
    if (props.paginationMode === 'client') {
      apiRef.current.setRowCount(visibleTopLevelRowCount);
    } else if (props.rowCount != null) {
      apiRef.current.setRowCount(props.rowCount);
    }
  }, [apiRef, props.paginationMode, visibleTopLevelRowCount, props.rowCount]);
  const isLastPage = paginationMeta.hasNextPage === false;
  index_js_.useEffect(() => {
    if (isLastPage && rowCountState === -1) {
      apiRef.current.setRowCount(paginationModel.pageSize * paginationModel.page + visibleTopLevelRowCount);
    }
  }, [apiRef, visibleTopLevelRowCount, isLastPage, rowCountState, paginationModel]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPaginationMeta.js





const useGridPaginationMeta = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridPaginationMeta');
  const paginationMeta = useGridSelector(apiRef, gridPaginationMetaSelector);
  apiRef.current.registerControlState({
    stateId: 'paginationMeta',
    propModel: props.paginationMeta,
    propOnChange: props.onPaginationMetaChange,
    stateSelector: gridPaginationMetaSelector,
    changeEvent: 'paginationMetaChange'
  });

  /**
   * API METHODS
   */
  const setPaginationMeta = index_js_.useCallback(newPaginationMeta => {
    if (paginationMeta === newPaginationMeta) {
      return;
    }
    logger.debug("Setting 'paginationMeta' to", newPaginationMeta);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        meta: newPaginationMeta
      })
    }));
  }, [apiRef, logger, paginationMeta]);
  const paginationMetaApi = {
    setPaginationMeta
  };
  useGridApiMethod(apiRef, paginationMetaApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const exportedPaginationMeta = gridPaginationMetaSelector(apiRef);
    const shouldExportRowCount =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the `paginationMeta` is controlled
    props.paginationMeta != null ||
    // Always export if the `paginationMeta` has been initialized
    props.initialState?.pagination?.meta != null;
    if (!shouldExportRowCount) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      pagination: (0,esm_extends/* default */.A)({}, prevState.pagination, {
        meta: exportedPaginationMeta
      })
    });
  }, [apiRef, props.paginationMeta, props.initialState?.pagination?.meta]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const restoredPaginationMeta = context.stateToRestore.pagination?.meta ? context.stateToRestore.pagination.meta : gridPaginationMetaSelector(apiRef);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
        meta: restoredPaginationMeta
      })
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);

  /**
   * EFFECTS
   */
  index_js_.useEffect(() => {
    if (props.paginationMeta) {
      apiRef.current.setPaginationMeta(props.paginationMeta);
    }
  }, [apiRef, props.paginationMeta]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPagination.js





const paginationStateInitializer = (state, props) => {
  const paginationModel = (0,esm_extends/* default */.A)({}, getDefaultGridPaginationModel(props.autoPageSize), props.paginationModel ?? props.initialState?.pagination?.paginationModel);
  throwIfPageSizeExceedsTheLimit(paginationModel.pageSize, props.signature);
  const rowCount = props.rowCount ?? props.initialState?.pagination?.rowCount ?? (props.paginationMode === 'client' ? state.rows?.totalRowCount : undefined);
  const meta = props.paginationMeta ?? props.initialState?.pagination?.meta ?? {};
  return (0,esm_extends/* default */.A)({}, state, {
    pagination: (0,esm_extends/* default */.A)({}, state.pagination, {
      paginationModel,
      rowCount,
      meta,
      enabled: props.pagination === true,
      paginationMode: props.paginationMode
    })
  });
};

/**
 * @requires useGridFilter (state)
 * @requires useGridDimensions (event) - can be after
 */
const useGridPagination = (apiRef, props) => {
  useGridPaginationMeta(apiRef, props);
  useGridPaginationModel(apiRef, props);
  useGridRowCount(apiRef, props);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/useGridPreferencesPanel.js






const preferencePanelStateInitializer = (state, props) => (0,esm_extends/* default */.A)({}, state, {
  preferencePanel: props.initialState?.preferencePanel ?? {
    open: false
  }
});

/**
 * TODO: Add a single `setPreferencePanel` method to avoid multiple `setState`
 */
const useGridPreferencesPanel = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridPreferencesPanel');

  /**
   * API METHODS
   */
  const hidePreferences = index_js_.useCallback(() => {
    apiRef.current.setState(state => {
      if (!state.preferencePanel.open) {
        return state;
      }
      logger.debug('Hiding Preferences Panel');
      const preferencePanelState = gridPreferencePanelStateSelector(state);
      apiRef.current.publishEvent('preferencePanelClose', {
        openedPanelValue: preferencePanelState.openedPanelValue
      });
      return (0,esm_extends/* default */.A)({}, state, {
        preferencePanel: {
          open: false
        }
      });
    });
  }, [apiRef, logger]);
  const showPreferences = index_js_.useCallback((newValue, panelId, labelId) => {
    logger.debug('Opening Preferences Panel');
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      preferencePanel: (0,esm_extends/* default */.A)({}, state.preferencePanel, {
        open: true,
        openedPanelValue: newValue,
        panelId,
        labelId
      })
    }));
    apiRef.current.publishEvent('preferencePanelOpen', {
      openedPanelValue: newValue
    });
  }, [logger, apiRef]);
  useGridApiMethod(apiRef, {
    showPreferences,
    hidePreferences
  }, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const preferencePanelToExport = gridPreferencePanelStateSelector(apiRef.current.state);
    const shouldExportPreferencePanel =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the panel was initialized
    props.initialState?.preferencePanel != null ||
    // Always export if the panel is opened
    preferencePanelToExport.open;
    if (!shouldExportPreferencePanel) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      preferencePanel: preferencePanelToExport
    });
  }, [apiRef, props.initialState?.preferencePanel]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const preferencePanel = context.stateToRestore.preferencePanel;
    if (preferencePanel != null) {
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        preferencePanel
      }));
    }
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/editing/gridEditingSelectors.js



/**
 * Select the row editing state.
 */
const gridEditRowsStateSelector = state => state.editRows;
const gridRowIsEditingSelector = createSelectorV8(gridEditRowsStateSelector, (editRows, {
  rowId,
  editMode
}) => editMode === GridEditModes.Row && Boolean(editRows[rowId]));
const gridEditCellStateSelector = createSelectorV8(gridEditRowsStateSelector, (editRows, {
  rowId,
  field
}) => editRows[rowId]?.[field] ?? null);
;// ../node_modules/@mui/x-data-grid/hooks/features/editing/utils.js
const getDefaultCellValue = colDef => {
  switch (colDef.type) {
    case 'boolean':
      return false;
    case 'date':
    case 'dateTime':
    case 'number':
      return undefined;
    case 'singleSelect':
      return null;
    case 'string':
    default:
      return '';
  }
};
;// ../node_modules/@mui/x-data-grid/hooks/features/editing/useGridCellEditing.js



const useGridCellEditing_excluded = ["id", "field"],
  useGridCellEditing_excluded2 = ["id", "field"];












const useGridCellEditing = (apiRef, props) => {
  const [cellModesModel, setCellModesModel] = index_js_.useState({});
  const cellModesModelRef = index_js_.useRef(cellModesModel);
  const prevCellModesModel = index_js_.useRef({});
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    cellModesModel: cellModesModelProp,
    onCellModesModelChange
  } = props;
  const runIfEditModeIsCell = callback => (...args) => {
    if (props.editMode === GridEditModes.Cell) {
      callback(...args);
    }
  };
  const throwIfNotEditable = index_js_.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = index_js_.useCallback((id, field, mode) => {
    if (apiRef.current.getCellMode(id, field) !== mode) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const handleCellDoubleClick = index_js_.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (params.cellMode === GridCellModes.Edit) {
      return;
    }
    const newParams = (0,esm_extends/* default */.A)({}, params, {
      reason: GridCellEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent('cellEditStart', newParams, event);
  }, [apiRef]);
  const handleCellFocusOut = index_js_.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.View) {
      return;
    }
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.View) {
      return;
    }
    const newParams = (0,esm_extends/* default */.A)({}, params, {
      reason: GridCellEditStopReasons.cellFocusOut
    });
    apiRef.current.publishEvent('cellEditStop', newParams, event);
  }, [apiRef]);
  const handleCellKeyDown = index_js_.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.Edit) {
      // Wait until IME is settled for Asian languages like Japanese and Chinese
      // TODO: to replace at one point. See https://github.com/mui/material-ui/pull/39713#discussion_r1381678957.
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === 'Escape') {
        reason = GridCellEditStopReasons.escapeKeyDown;
      } else if (event.key === 'Enter') {
        reason = GridCellEditStopReasons.enterKeyDown;
      } else if (event.key === 'Tab') {
        reason = event.shiftKey ? GridCellEditStopReasons.shiftTabKeyDown : GridCellEditStopReasons.tabKeyDown;
        event.preventDefault(); // Prevent going to the next element in the tab sequence
      }
      if (reason) {
        const newParams = (0,esm_extends/* default */.A)({}, params, {
          reason
        });
        apiRef.current.publishEvent('cellEditStop', newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      const canStartEditing = apiRef.current.unstable_applyPipeProcessors('canStartEditing', true, {
        event,
        cellParams: params,
        editMode: 'cell'
      });
      if (!canStartEditing) {
        return;
      }
      if (isPrintableKey(event)) {
        reason = GridCellEditStartReasons.printableKeyDown;
      } else if (isPasteShortcut(event)) {
        reason = GridCellEditStartReasons.pasteKeyDown;
      } else if (event.key === 'Enter') {
        reason = GridCellEditStartReasons.enterKeyDown;
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        reason = GridCellEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const newParams = (0,esm_extends/* default */.A)({}, params, {
          reason,
          key: event.key
        });
        apiRef.current.publishEvent('cellEditStart', newParams, event);
      }
    }
  }, [apiRef]);
  const handleCellEditStart = index_js_.useCallback(params => {
    const {
      id,
      field,
      reason
    } = params;
    const startCellEditModeParams = {
      id,
      field
    };
    if (reason === GridCellEditStartReasons.printableKeyDown || reason === GridCellEditStartReasons.deleteKeyDown || reason === GridCellEditStartReasons.pasteKeyDown) {
      startCellEditModeParams.deleteValue = true;
    }
    apiRef.current.startCellEditMode(startCellEditModeParams);
  }, [apiRef]);
  const handleCellEditStop = index_js_.useCallback(params => {
    const {
      id,
      field,
      reason
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id, field);
    let cellToFocusAfter;
    if (reason === GridCellEditStopReasons.enterKeyDown) {
      cellToFocusAfter = 'below';
    } else if (reason === GridCellEditStopReasons.tabKeyDown) {
      cellToFocusAfter = 'right';
    } else if (reason === GridCellEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = 'left';
    }
    const ignoreModifications = reason === 'escapeKeyDown';
    apiRef.current.stopCellEditMode({
      id,
      field,
      ignoreModifications,
      cellToFocusAfter
    });
  }, [apiRef]);
  const runIfNoFieldErrors = callback => async (...args) => {
    if (callback) {
      const {
        id,
        field
      } = args[0];
      const editRowsState = apiRef.current.state.editRows;
      const hasFieldErrors = editRowsState[id][field]?.error;
      if (!hasFieldErrors) {
        callback(...args);
      }
    }
  };
  useGridApiEventHandler(apiRef, 'cellDoubleClick', runIfEditModeIsCell(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, 'cellFocusOut', runIfEditModeIsCell(handleCellFocusOut));
  useGridApiEventHandler(apiRef, 'cellKeyDown', runIfEditModeIsCell(handleCellKeyDown));
  useGridApiEventHandler(apiRef, 'cellEditStart', runIfEditModeIsCell(handleCellEditStart));
  useGridApiEventHandler(apiRef, 'cellEditStop', runIfEditModeIsCell(handleCellEditStop));
  useGridApiOptionHandler(apiRef, 'cellEditStart', props.onCellEditStart);
  useGridApiOptionHandler(apiRef, 'cellEditStop', runIfNoFieldErrors(props.onCellEditStop));
  const getCellMode = index_js_.useCallback((id, field) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editingState[id] && editingState[id][field];
    return isEditing ? GridCellModes.Edit : GridCellModes.View;
  }, [apiRef]);
  const updateCellModesModel = useEventCallback_useEventCallback(newModel => {
    const isNewModelDifferentFromProp = newModel !== props.cellModesModel;
    if (onCellModesModelChange && isNewModelDifferentFromProp) {
      onCellModesModelChange(newModel, {
        api: apiRef.current
      });
    }
    if (props.cellModesModel && isNewModelDifferentFromProp) {
      return; // The prop always win
    }
    setCellModesModel(newModel);
    cellModesModelRef.current = newModel;
    apiRef.current.publishEvent('cellModesModelChange', newModel);
  });
  const updateFieldInCellModesModel = index_js_.useCallback((id, field, newProps) => {
    // We use the ref because it always contain the up-to-date value, different from the state
    // that needs a rerender to reflect the new value
    const newModel = (0,esm_extends/* default */.A)({}, cellModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = (0,esm_extends/* default */.A)({}, newModel[id], {
        [field]: (0,esm_extends/* default */.A)({}, newProps)
      });
    } else {
      const _newModel$id = newModel[id],
        otherFields = (0,objectWithoutPropertiesLoose/* default */.A)(_newModel$id, [field].map(toPropertyKey/* default */.A)); // Ensure that we have a new object, not a reference
      newModel[id] = otherFields;
      if (Object.keys(newModel[id]).length === 0) {
        delete newModel[id];
      }
    }
    updateCellModesModel(newModel);
  }, [updateCellModesModel]);
  const updateOrDeleteFieldState = index_js_.useCallback((id, field, newProps) => {
    apiRef.current.setState(state => {
      const newEditingState = (0,esm_extends/* default */.A)({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = (0,esm_extends/* default */.A)({}, newEditingState[id], {
          [field]: (0,esm_extends/* default */.A)({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return (0,esm_extends/* default */.A)({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startCellEditMode = index_js_.useCallback(params => {
    const {
        id,
        field
      } = params,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(params, useGridCellEditing_excluded);
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.View);
    updateFieldInCellModesModel(id, field, (0,esm_extends/* default */.A)({
      mode: GridCellModes.Edit
    }, other));
  }, [throwIfNotEditable, throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStartCellEditMode = useEventCallback_useEventCallback(async params => {
    const {
      id,
      field,
      deleteValue,
      initialValue
    } = params;
    const value = apiRef.current.getCellValue(id, field);
    let newValue = value;
    if (deleteValue) {
      newValue = getDefaultCellValue(apiRef.current.getColumn(field));
    } else if (initialValue) {
      newValue = initialValue;
    }
    const column = apiRef.current.getColumn(field);
    const shouldProcessEditCellProps = !!column.preProcessEditCellProps && deleteValue;
    let newProps = {
      value: newValue,
      error: false,
      isProcessingProps: shouldProcessEditCellProps
    };
    updateOrDeleteFieldState(id, field, newProps);
    apiRef.current.setCellFocus(id, field);
    if (shouldProcessEditCellProps) {
      newProps = await Promise.resolve(column.preProcessEditCellProps({
        id,
        row: apiRef.current.getRow(id),
        props: newProps,
        hasChanged: newValue !== value
      }));
      // Check if still in edit mode before updating
      if (apiRef.current.getCellMode(id, field) === GridCellModes.Edit) {
        const editingState = gridEditRowsStateSelector(apiRef.current.state);
        updateOrDeleteFieldState(id, field, (0,esm_extends/* default */.A)({}, newProps, {
          value: editingState[id][field].value,
          isProcessingProps: false
        }));
      }
    }
  });
  const stopCellEditMode = index_js_.useCallback(params => {
    const {
        id,
        field
      } = params,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(params, useGridCellEditing_excluded2);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    updateFieldInCellModesModel(id, field, (0,esm_extends/* default */.A)({
      mode: GridCellModes.View
    }, other));
  }, [throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStopCellEditMode = useEventCallback_useEventCallback(async params => {
    const {
      id,
      field,
      ignoreModifications,
      cellToFocusAfter = 'none'
    } = params;
    throwIfNotInMode(id, field, GridCellModes.Edit);
    apiRef.current.runPendingEditCellValueMutation(id, field);
    const finishCellEditMode = () => {
      updateOrDeleteFieldState(id, field, null);
      updateFieldInCellModesModel(id, field, null);
      if (cellToFocusAfter !== 'none') {
        apiRef.current.moveFocusToRelativeCell(id, field, cellToFocusAfter);
      }
    };
    if (ignoreModifications) {
      finishCellEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const {
      error,
      isProcessingProps
    } = editingState[id][field];
    if (error || isProcessingProps) {
      // Attempt to change cell mode to "view" was not successful
      // Update previous mode to allow another attempt
      prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
      // Revert the mode in the cellModesModel prop back to "edit"
      updateFieldInCellModesModel(id, field, {
        mode: GridCellModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.getRowWithUpdatedValuesFromCellEditing(id, field);
    if (processRowUpdate) {
      const handleError = errorThrown => {
        prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
        // Revert the mode in the cellModesModel prop back to "edit"
        updateFieldInCellModesModel(id, field, {
          mode: GridCellModes.Edit
        });
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else if (false) // removed by dead control flow
{}
      };
      try {
        const row = apiRef.current.getRow(id);
        Promise.resolve(processRowUpdate(rowUpdate, row, {
          rowId: id
        })).then(finalRowUpdate => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishCellEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishCellEditMode();
    }
  });
  const setCellEditingEditCellValue = index_js_.useCallback(async params => {
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, row, column, apiRef);
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = (0,esm_extends/* default */.A)({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? 'debouncedSetEditCellValue' : 'setEditCellValue'
    });
    if (column.preProcessEditCellProps) {
      const hasChanged = value !== editingState[id][field].value;
      newProps = (0,esm_extends/* default */.A)({}, newProps, {
        isProcessingProps: true
      });
      updateOrDeleteFieldState(id, field, newProps);
      newProps = await Promise.resolve(column.preProcessEditCellProps({
        id,
        row,
        props: newProps,
        hasChanged
      }));
    }

    // Check again if the cell is in edit mode because the user may have
    // discarded the changes while the props were being processed.
    if (apiRef.current.getCellMode(id, field) === GridCellModes.View) {
      return false;
    }
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    newProps = (0,esm_extends/* default */.A)({}, newProps, {
      isProcessingProps: false
    });
    // We don't update the value with the one coming from the props pre-processing
    // because when the promise resolves it may be already outdated. The only
    // exception to this rule is when there's no pre-processing.
    newProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
    updateOrDeleteFieldState(id, field, newProps);
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    return !editingState[id]?.[field]?.error;
  }, [apiRef, throwIfNotEditable, throwIfNotInMode, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromCellEditing = index_js_.useCallback((id, field) => {
    const column = apiRef.current.getColumn(field);
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    if (!editingState[id] || !editingState[id][field]) {
      return apiRef.current.getRow(id);
    }
    const {
      value
    } = editingState[id][field];
    return column.valueSetter ? column.valueSetter(value, row, column, apiRef) : (0,esm_extends/* default */.A)({}, row, {
      [field]: value
    });
  }, [apiRef]);
  const editingApi = {
    getCellMode,
    startCellEditMode,
    stopCellEditMode
  };
  const editingPrivateApi = {
    setCellEditingEditCellValue,
    getRowWithUpdatedValuesFromCellEditing
  };
  useGridApiMethod(apiRef, editingApi, 'public');
  useGridApiMethod(apiRef, editingPrivateApi, 'private');
  index_js_.useEffect(() => {
    if (cellModesModelProp) {
      updateCellModesModel(cellModesModelProp);
    }
  }, [cellModesModelProp, updateCellModesModel]);

  // Run this effect synchronously so that the keyboard event can impact the yet-to-be-rendered input.
  useEnhancedEffect_useEnhancedEffect(() => {
    const rowsLookup = gridRowsLookupSelector(apiRef);

    // Update the ref here because updateStateToStopCellEditMode may change it later
    const copyOfPrevCellModes = prevCellModesModel.current;
    prevCellModesModel.current = deepClone(cellModesModel); // Do a deep-clone because the attributes might be changed later

    Object.entries(cellModesModel).forEach(([id, fields]) => {
      Object.entries(fields).forEach(([field, params]) => {
        const prevMode = copyOfPrevCellModes[id]?.[field]?.mode || GridCellModes.View;
        const originalId = rowsLookup[id] ? apiRef.current.getRowId(rowsLookup[id]) : id;
        if (params.mode === GridCellModes.Edit && prevMode === GridCellModes.View) {
          updateStateToStartCellEditMode((0,esm_extends/* default */.A)({
            id: originalId,
            field
          }, params));
        } else if (params.mode === GridCellModes.View && prevMode === GridCellModes.Edit) {
          updateStateToStopCellEditMode((0,esm_extends/* default */.A)({
            id: originalId,
            field
          }, params));
        }
      });
    });
  }, [apiRef, cellModesModel, updateStateToStartCellEditMode, updateStateToStopCellEditMode]);
};
;// ../node_modules/@mui/x-data-grid/models/params/gridRowParams.js
/**
 * Object passed as parameter in the row callbacks.
 * @demos
 *   - [Master detail](/x/react-data-grid/master-detail/)
 */
/**
 * Object passed as parameter in the row `getRowClassName` callback prop.
 * @demos
 *   - [Styling rows](/x/react-data-grid/style/#styling-rows)
 */
/**
 * Object passed as parameter in the row `getRowHeight` callback prop.
 */
/**
 * The getRowHeight return value.
 */
var GridRowEditStartReasons = /*#__PURE__*/function (GridRowEditStartReasons) {
  GridRowEditStartReasons["enterKeyDown"] = "enterKeyDown";
  GridRowEditStartReasons["cellDoubleClick"] = "cellDoubleClick";
  GridRowEditStartReasons["printableKeyDown"] = "printableKeyDown";
  GridRowEditStartReasons["deleteKeyDown"] = "deleteKeyDown";
  return GridRowEditStartReasons;
}(GridRowEditStartReasons || {});
/**
 * Params passed to the `rowEditStart` event.
 */
var GridRowEditStopReasons = /*#__PURE__*/function (GridRowEditStopReasons) {
  GridRowEditStopReasons["rowFocusOut"] = "rowFocusOut";
  GridRowEditStopReasons["escapeKeyDown"] = "escapeKeyDown";
  GridRowEditStopReasons["enterKeyDown"] = "enterKeyDown";
  GridRowEditStopReasons["tabKeyDown"] = "tabKeyDown";
  GridRowEditStopReasons["shiftTabKeyDown"] = "shiftTabKeyDown";
  return GridRowEditStopReasons;
}(GridRowEditStopReasons || {});
/**
 * Object passed as parameter in the row `getRowSpacing` callback prop.
 * @demos
 *   - [Row spacing](/x/react-data-grid/row-height/#row-spacing)
 */
/**
 * The getRowSpacing return value.
 */
// https://github.com/mui/mui-x/pull/3738#discussion_r798504277

;// ../node_modules/@mui/x-data-grid/hooks/features/editing/useGridRowEditing.js



const useGridRowEditing_excluded = ["id"],
  useGridRowEditing_excluded2 = ["id"];














const useGridRowEditing = (apiRef, props) => {
  const [rowModesModel, setRowModesModel] = index_js_.useState({});
  const rowModesModelRef = index_js_.useRef(rowModesModel);
  const prevRowModesModel = index_js_.useRef({});
  const prevRowValuesLookup = index_js_.useRef({});
  const focusTimeout = index_js_.useRef(undefined);
  const nextFocusedCell = index_js_.useRef(null);
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    rowModesModel: rowModesModelProp,
    onRowModesModelChange
  } = props;
  const runIfEditModeIsRow = callback => (...args) => {
    if (props.editMode === GridEditModes.Row) {
      callback(...args);
    }
  };
  const throwIfNotEditable = index_js_.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = index_js_.useCallback((id, mode) => {
    if (apiRef.current.getRowMode(id) !== mode) {
      throw new Error(`MUI X: The row with id=${id} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const hasFieldsWithErrors = index_js_.useCallback(rowId => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    return Object.values(editingState[rowId]).some(fieldProps => fieldProps.error);
  }, [apiRef]);
  const handleCellDoubleClick = index_js_.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.Edit) {
      return;
    }
    const rowParams = apiRef.current.getRowParams(params.id);
    const newParams = (0,esm_extends/* default */.A)({}, rowParams, {
      field: params.field,
      reason: GridRowEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent('rowEditStart', newParams, event);
  }, [apiRef]);
  const handleCellFocusIn = index_js_.useCallback(params => {
    nextFocusedCell.current = params;
  }, []);
  const handleCellFocusOut = index_js_.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
      return;
    }
    // The mechanism to detect if we can stop editing a row is different from
    // the cell editing. Instead of triggering it when clicking outside a cell,
    // we must check if another cell in the same row was not clicked. To achieve
    // that, first we keep track of all cells that gained focus. When a cell loses
    // focus we check if the next cell that received focus is from a different row.
    nextFocusedCell.current = null;
    focusTimeout.current = setTimeout(() => {
      if (nextFocusedCell.current?.id !== params.id) {
        // The row might have been deleted during the click
        if (!apiRef.current.getRow(params.id)) {
          return;
        }

        // The row may already changed its mode
        if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
          return;
        }
        if (hasFieldsWithErrors(params.id)) {
          return;
        }
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = (0,esm_extends/* default */.A)({}, rowParams, {
          field: params.field,
          reason: GridRowEditStopReasons.rowFocusOut
        });
        apiRef.current.publishEvent('rowEditStop', newParams, event);
      }
    });
  }, [apiRef, hasFieldsWithErrors]);
  index_js_.useEffect(() => {
    return () => {
      clearTimeout(focusTimeout.current);
    };
  }, []);
  const handleCellKeyDown = index_js_.useCallback((params, event) => {
    if (params.cellMode === GridRowModes.Edit) {
      // Wait until IME is settled for Asian languages like Japanese and Chinese
      // TODO: to replace at one point. See https://github.com/mui/material-ui/pull/39713#discussion_r1381678957.
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === 'Escape') {
        reason = GridRowEditStopReasons.escapeKeyDown;
      } else if (event.key === 'Enter') {
        reason = GridRowEditStopReasons.enterKeyDown;
      } else if (event.key === 'Tab') {
        const columnFields = gridVisibleColumnFieldsSelector(apiRef).filter(field => {
          const column = apiRef.current.getColumn(field);
          if (column.type === GRID_ACTIONS_COLUMN_TYPE) {
            return true;
          }
          return apiRef.current.isCellEditable(apiRef.current.getCellParams(params.id, field));
        });
        if (event.shiftKey) {
          if (params.field === columnFields[0]) {
            // Exit if user pressed Shift+Tab on the first field
            reason = GridRowEditStopReasons.shiftTabKeyDown;
          }
        } else if (params.field === columnFields[columnFields.length - 1]) {
          // Exit if user pressed Tab on the last field
          reason = GridRowEditStopReasons.tabKeyDown;
        }

        // Always prevent going to the next element in the tab sequence because the focus is
        // handled manually to support edit components rendered inside Portals
        event.preventDefault();
        if (!reason) {
          const index = columnFields.findIndex(field => field === params.field);
          const nextFieldToFocus = columnFields[event.shiftKey ? index - 1 : index + 1];
          apiRef.current.setCellFocus(params.id, nextFieldToFocus);
        }
      }
      if (reason) {
        if (reason !== GridRowEditStopReasons.escapeKeyDown && hasFieldsWithErrors(params.id)) {
          return;
        }
        const newParams = (0,esm_extends/* default */.A)({}, apiRef.current.getRowParams(params.id), {
          reason,
          field: params.field
        });
        apiRef.current.publishEvent('rowEditStop', newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      const canStartEditing = apiRef.current.unstable_applyPipeProcessors('canStartEditing', true, {
        event,
        cellParams: params,
        editMode: 'row'
      });
      if (!canStartEditing) {
        return;
      }
      if (isPrintableKey(event)) {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if (isPasteShortcut(event)) {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if (event.key === 'Enter') {
        reason = GridRowEditStartReasons.enterKeyDown;
      } else if (event.key === 'Backspace' || event.key === 'Delete') {
        reason = GridRowEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = (0,esm_extends/* default */.A)({}, rowParams, {
          field: params.field,
          reason
        });
        apiRef.current.publishEvent('rowEditStart', newParams, event);
      }
    }
  }, [apiRef, hasFieldsWithErrors]);
  const handleRowEditStart = index_js_.useCallback(params => {
    const {
      id,
      field,
      reason
    } = params;
    const startRowEditModeParams = {
      id,
      fieldToFocus: field
    };
    if (reason === GridRowEditStartReasons.printableKeyDown || reason === GridRowEditStartReasons.deleteKeyDown) {
      startRowEditModeParams.deleteValue = !!field;
    }
    apiRef.current.startRowEditMode(startRowEditModeParams);
  }, [apiRef]);
  const handleRowEditStop = index_js_.useCallback(params => {
    const {
      id,
      reason,
      field
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id);
    let cellToFocusAfter;
    if (reason === GridRowEditStopReasons.enterKeyDown) {
      cellToFocusAfter = 'below';
    } else if (reason === GridRowEditStopReasons.tabKeyDown) {
      cellToFocusAfter = 'right';
    } else if (reason === GridRowEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = 'left';
    }
    const ignoreModifications = reason === 'escapeKeyDown';
    apiRef.current.stopRowEditMode({
      id,
      ignoreModifications,
      field,
      cellToFocusAfter
    });
  }, [apiRef]);
  useGridApiEventHandler(apiRef, 'cellDoubleClick', runIfEditModeIsRow(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, 'cellFocusIn', runIfEditModeIsRow(handleCellFocusIn));
  useGridApiEventHandler(apiRef, 'cellFocusOut', runIfEditModeIsRow(handleCellFocusOut));
  useGridApiEventHandler(apiRef, 'cellKeyDown', runIfEditModeIsRow(handleCellKeyDown));
  useGridApiEventHandler(apiRef, 'rowEditStart', runIfEditModeIsRow(handleRowEditStart));
  useGridApiEventHandler(apiRef, 'rowEditStop', runIfEditModeIsRow(handleRowEditStop));
  useGridApiOptionHandler(apiRef, 'rowEditStart', props.onRowEditStart);
  useGridApiOptionHandler(apiRef, 'rowEditStop', props.onRowEditStop);
  const getRowMode = index_js_.useCallback(id => {
    const isEditing = gridRowIsEditingSelector(apiRef, {
      rowId: id,
      editMode: props.editMode
    });
    return isEditing ? GridRowModes.Edit : GridRowModes.View;
  }, [apiRef, props.editMode]);
  const updateRowModesModel = useEventCallback_useEventCallback(newModel => {
    const isNewModelDifferentFromProp = newModel !== props.rowModesModel;
    if (onRowModesModelChange && isNewModelDifferentFromProp) {
      onRowModesModelChange(newModel, {
        api: apiRef.current
      });
    }
    if (props.rowModesModel && isNewModelDifferentFromProp) {
      return; // The prop always win
    }
    setRowModesModel(newModel);
    rowModesModelRef.current = newModel;
    apiRef.current.publishEvent('rowModesModelChange', newModel);
  });
  const updateRowInRowModesModel = index_js_.useCallback((id, newProps) => {
    const newModel = (0,esm_extends/* default */.A)({}, rowModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = (0,esm_extends/* default */.A)({}, newProps);
    } else {
      delete newModel[id];
    }
    updateRowModesModel(newModel);
  }, [updateRowModesModel]);
  const updateOrDeleteRowState = index_js_.useCallback((id, newProps) => {
    apiRef.current.setState(state => {
      const newEditingState = (0,esm_extends/* default */.A)({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = newProps;
      } else {
        delete newEditingState[id];
      }
      return (0,esm_extends/* default */.A)({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const updateOrDeleteFieldState = index_js_.useCallback((id, field, newProps) => {
    apiRef.current.setState(state => {
      const newEditingState = (0,esm_extends/* default */.A)({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = (0,esm_extends/* default */.A)({}, newEditingState[id], {
          [field]: (0,esm_extends/* default */.A)({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return (0,esm_extends/* default */.A)({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startRowEditMode = index_js_.useCallback(params => {
    const {
        id
      } = params,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(params, useGridRowEditing_excluded);
    throwIfNotInMode(id, GridRowModes.View);
    updateRowInRowModesModel(id, (0,esm_extends/* default */.A)({
      mode: GridRowModes.Edit
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStartRowEditMode = useEventCallback_useEventCallback(params => {
    const {
      id,
      fieldToFocus,
      deleteValue,
      initialValue
    } = params;
    const row = apiRef.current.getRow(id);
    const columns = gridColumnDefinitionsSelector(apiRef);
    const newProps = columns.reduce((acc, col) => {
      const field = col.field;
      const cellParams = apiRef.current.getCellParams(id, field);
      if (!cellParams.isEditable) {
        return acc;
      }
      const column = apiRef.current.getColumn(field);
      let newValue = apiRef.current.getCellValue(id, field);
      if (fieldToFocus === field && (deleteValue || initialValue)) {
        if (deleteValue) {
          newValue = getDefaultCellValue(column);
        } else if (initialValue) {
          newValue = initialValue;
        }
      }
      acc[field] = {
        value: newValue,
        error: false,
        isProcessingProps: column.editable && !!column.preProcessEditCellProps && deleteValue
      };
      return acc;
    }, {});
    prevRowValuesLookup.current[id] = row;
    updateOrDeleteRowState(id, newProps);
    if (fieldToFocus) {
      apiRef.current.setCellFocus(id, fieldToFocus);
    }
    columns.filter(column => {
      const isCellEditable = apiRef.current.getCellParams(id, column.field).isEditable;
      return isCellEditable && column.editable && !!column.preProcessEditCellProps && deleteValue;
    }).forEach(column => {
      const field = column.field;
      const value = apiRef.current.getCellValue(id, field);
      const newValue = deleteValue ? getDefaultCellValue(column) : initialValue ?? value;
      Promise.resolve(column.preProcessEditCellProps({
        id,
        row,
        props: newProps[field],
        hasChanged: newValue !== value
      })).then(processedProps => {
        // Check if still in edit mode before updating
        if (apiRef.current.getRowMode(id) === GridRowModes.Edit) {
          const editingState = gridEditRowsStateSelector(apiRef.current.state);
          updateOrDeleteFieldState(id, field, (0,esm_extends/* default */.A)({}, processedProps, {
            value: editingState[id][field].value,
            isProcessingProps: false
          }));
        }
      });
    });
  });
  const stopRowEditMode = index_js_.useCallback(params => {
    const {
        id
      } = params,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(params, useGridRowEditing_excluded2);
    throwIfNotInMode(id, GridRowModes.Edit);
    updateRowInRowModesModel(id, (0,esm_extends/* default */.A)({
      mode: GridRowModes.View
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStopRowEditMode = useEventCallback_useEventCallback(params => {
    const {
      id,
      ignoreModifications,
      field: focusedField,
      cellToFocusAfter = 'none'
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id);
    const finishRowEditMode = () => {
      if (cellToFocusAfter !== 'none' && focusedField) {
        apiRef.current.moveFocusToRelativeCell(id, focusedField, cellToFocusAfter);
      }
      updateOrDeleteRowState(id, null);
      updateRowInRowModesModel(id, null);
      delete prevRowValuesLookup.current[id];
    };
    if (ignoreModifications) {
      finishRowEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = prevRowValuesLookup.current[id];
    const isSomeFieldProcessingProps = Object.values(editingState[id]).some(fieldProps => fieldProps.isProcessingProps);
    if (isSomeFieldProcessingProps) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      return;
    }
    if (hasFieldsWithErrors(id)) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      // Revert the mode in the rowModesModel prop back to "edit"
      updateRowInRowModesModel(id, {
        mode: GridRowModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.getRowWithUpdatedValuesFromRowEditing(id);
    if (processRowUpdate) {
      const handleError = errorThrown => {
        // The row might have been deleted
        if (prevRowModesModel.current[id]) {
          prevRowModesModel.current[id].mode = GridRowModes.Edit;
          // Revert the mode in the rowModesModel prop back to "edit"
          updateRowInRowModesModel(id, {
            mode: GridRowModes.Edit
          });
        }
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else if (false) // removed by dead control flow
{}
      };
      try {
        Promise.resolve(processRowUpdate(rowUpdate, row, {
          rowId: id
        })).then(finalRowUpdate => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishRowEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishRowEditMode();
    }
  });
  const setRowEditingEditCellValue = index_js_.useCallback(params => {
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, row, column, apiRef);
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = (0,esm_extends/* default */.A)({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? 'debouncedSetEditCellValue' : 'setEditCellValue'
    });
    if (!column.preProcessEditCellProps) {
      updateOrDeleteFieldState(id, field, newProps);
    }
    return new Promise(resolve => {
      const promises = [];
      if (column.preProcessEditCellProps) {
        const hasChanged = newProps.value !== editingState[id][field].value;
        newProps = (0,esm_extends/* default */.A)({}, newProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, field, newProps);
        const _editingState$id = editingState[id],
          otherFieldsProps = (0,objectWithoutPropertiesLoose/* default */.A)(_editingState$id, [field].map(toPropertyKey/* default */.A));
        const promise = Promise.resolve(column.preProcessEditCellProps({
          id,
          row,
          props: newProps,
          hasChanged,
          otherFieldsProps
        })).then(processedProps => {
          // Check again if the row is in edit mode because the user may have
          // discarded the changes while the props were being processed.
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          processedProps = (0,esm_extends/* default */.A)({}, processedProps, {
            isProcessingProps: false
          });
          // We don't reuse the value from the props pre-processing because when the
          // promise resolves it may be already outdated. The only exception to this rule
          // is when there's no pre-processing.
          processedProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
          updateOrDeleteFieldState(id, field, processedProps);
        });
        promises.push(promise);
      }
      Object.entries(editingState[id]).forEach(([thisField, fieldProps]) => {
        if (thisField === field) {
          return;
        }
        const fieldColumn = apiRef.current.getColumn(thisField);
        if (!fieldColumn.preProcessEditCellProps) {
          return;
        }
        fieldProps = (0,esm_extends/* default */.A)({}, fieldProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, thisField, fieldProps);
        editingState = gridEditRowsStateSelector(apiRef.current.state);
        const _editingState$id2 = editingState[id],
          otherFieldsProps = (0,objectWithoutPropertiesLoose/* default */.A)(_editingState$id2, [thisField].map(toPropertyKey/* default */.A));
        const promise = Promise.resolve(fieldColumn.preProcessEditCellProps({
          id,
          row,
          props: fieldProps,
          hasChanged: false,
          otherFieldsProps
        })).then(processedProps => {
          // Check again if the row is in edit mode because the user may have
          // discarded the changes while the props were being processed.
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          processedProps = (0,esm_extends/* default */.A)({}, processedProps, {
            isProcessingProps: false
          });
          updateOrDeleteFieldState(id, thisField, processedProps);
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        if (apiRef.current.getRowMode(id) === GridRowModes.Edit) {
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          resolve(!editingState[id][field].error);
        } else {
          resolve(false);
        }
      });
    });
  }, [apiRef, throwIfNotEditable, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromRowEditing = index_js_.useCallback(id => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    if (!editingState[id]) {
      return apiRef.current.getRow(id);
    }
    let rowUpdate = (0,esm_extends/* default */.A)({}, prevRowValuesLookup.current[id], row);
    Object.entries(editingState[id]).forEach(([field, fieldProps]) => {
      const column = apiRef.current.getColumn(field);
      // Column might have been removed
      // see https://github.com/mui/mui-x/pull/16888
      if (column?.valueSetter) {
        rowUpdate = column.valueSetter(fieldProps.value, rowUpdate, column, apiRef);
      } else {
        rowUpdate[field] = fieldProps.value;
      }
    });
    return rowUpdate;
  }, [apiRef]);
  const editingApi = {
    getRowMode,
    startRowEditMode,
    stopRowEditMode
  };
  const editingPrivateApi = {
    setRowEditingEditCellValue,
    getRowWithUpdatedValuesFromRowEditing
  };
  useGridApiMethod(apiRef, editingApi, 'public');
  useGridApiMethod(apiRef, editingPrivateApi, 'private');
  index_js_.useEffect(() => {
    if (rowModesModelProp) {
      updateRowModesModel(rowModesModelProp);
    }
  }, [rowModesModelProp, updateRowModesModel]);

  // Run this effect synchronously so that the keyboard event can impact the yet-to-be-rendered input.
  useEnhancedEffect_useEnhancedEffect(() => {
    const rowsLookup = gridRowsLookupSelector(apiRef);

    // Update the ref here because updateStateToStopRowEditMode may change it later
    const copyOfPrevRowModesModel = prevRowModesModel.current;
    prevRowModesModel.current = deepClone(rowModesModel); // Do a deep-clone because the attributes might be changed later

    const ids = new Set([...Object.keys(rowModesModel), ...Object.keys(copyOfPrevRowModesModel)]);
    Array.from(ids).forEach(id => {
      const params = rowModesModel[id] ?? {
        mode: GridRowModes.View
      };
      const prevMode = copyOfPrevRowModesModel[id]?.mode || GridRowModes.View;
      const originalId = rowsLookup[id] ? apiRef.current.getRowId(rowsLookup[id]) : id;
      if (params.mode === GridRowModes.Edit && prevMode === GridRowModes.View) {
        updateStateToStartRowEditMode((0,esm_extends/* default */.A)({
          id: originalId
        }, params));
      } else if (params.mode === GridRowModes.View && prevMode === GridRowModes.Edit) {
        updateStateToStopRowEditMode((0,esm_extends/* default */.A)({
          id: originalId
        }, params));
      }
    });
  }, [apiRef, rowModesModel, updateStateToStartRowEditMode, updateStateToStopRowEditMode]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/editing/useGridEditing.js








const editingStateInitializer = state => (0,esm_extends/* default */.A)({}, state, {
  editRows: {}
});
const useGridEditing = (apiRef, props) => {
  useGridCellEditing(apiRef, props);
  useGridRowEditing(apiRef, props);
  const debounceMap = index_js_.useRef({});
  const {
    isCellEditable: isCellEditableProp
  } = props;
  const isCellEditable = index_js_.useCallback(params => {
    if (isAutogeneratedRowNode(params.rowNode)) {
      return false;
    }
    if (!params.colDef.editable) {
      return false;
    }
    if (!params.colDef.renderEditCell) {
      return false;
    }
    if (isCellEditableProp) {
      return isCellEditableProp(params);
    }
    return true;
  }, [isCellEditableProp]);
  const maybeDebounce = (id, field, debounceMs, callback) => {
    if (!debounceMs) {
      callback();
      return;
    }
    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }
    if (debounceMap.current[id][field]) {
      const [timeout] = debounceMap.current[id][field];
      clearTimeout(timeout);
    }

    // To run the callback immediately without waiting the timeout
    const runImmediately = () => {
      const [timeout] = debounceMap.current[id][field];
      clearTimeout(timeout);
      callback();
      delete debounceMap.current[id][field];
    };
    const timeout = setTimeout(() => {
      callback();
      delete debounceMap.current[id][field];
    }, debounceMs);
    debounceMap.current[id][field] = [timeout, runImmediately];
  };
  index_js_.useEffect(() => {
    const debounces = debounceMap.current;
    return () => {
      Object.entries(debounces).forEach(([id, fields]) => {
        Object.keys(fields).forEach(field => {
          const [timeout] = debounces[id][field];
          clearTimeout(timeout);
          delete debounces[id][field];
        });
      });
    };
  }, []);
  const runPendingEditCellValueMutation = index_js_.useCallback((id, field) => {
    if (!debounceMap.current[id]) {
      return;
    }
    if (!field) {
      Object.keys(debounceMap.current[id]).forEach(debouncedField => {
        const [, runCallback] = debounceMap.current[id][debouncedField];
        runCallback();
      });
    } else if (debounceMap.current[id][field]) {
      const [, runCallback] = debounceMap.current[id][field];
      runCallback();
    }
  }, []);
  const setEditCellValue = index_js_.useCallback(params => {
    const {
      id,
      field,
      debounceMs
    } = params;
    return new Promise(resolve => {
      maybeDebounce(id, field, debounceMs, async () => {
        const setEditCellValueToCall = props.editMode === GridEditModes.Row ? apiRef.current.setRowEditingEditCellValue : apiRef.current.setCellEditingEditCellValue;

        // Check if the cell is in edit mode
        // By the time this callback runs the user may have cancelled the editing
        if (apiRef.current.getCellMode(id, field) === GridCellModes.Edit) {
          const result = await setEditCellValueToCall(params);
          resolve(result);
        }
      });
    });
  }, [apiRef, props.editMode]);
  const getRowWithUpdatedValues = index_js_.useCallback((id, field) => {
    return props.editMode === GridEditModes.Cell ? apiRef.current.getRowWithUpdatedValuesFromCellEditing(id, field) : apiRef.current.getRowWithUpdatedValuesFromRowEditing(id);
  }, [apiRef, props.editMode]);
  const getEditCellMeta = index_js_.useCallback((id, field) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    return editingState[id]?.[field] ?? null;
  }, [apiRef]);
  const editingSharedApi = {
    isCellEditable,
    setEditCellValue,
    getRowWithUpdatedValues,
    unstable_getEditCellMeta: getEditCellMeta
  };
  const editingSharedPrivateApi = {
    runPendingEditCellValueMutation
  };
  useGridApiMethod(apiRef, editingSharedApi, 'public');
  useGridApiMethod(apiRef, editingSharedPrivateApi, 'private');
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridRows.js














const rowsStateInitializer = (state, props, apiRef) => {
  const isDataSourceAvailable = !!props.unstable_dataSource;
  apiRef.current.caches.rows = createRowsInternalCache({
    rows: isDataSourceAvailable ? [] : props.rows,
    getRowId: props.getRowId,
    loading: props.loading,
    rowCount: props.rowCount
  });
  return (0,esm_extends/* default */.A)({}, state, {
    rows: getRowsStateFromCache({
      apiRef,
      rowCountProp: props.rowCount,
      loadingProp: isDataSourceAvailable ? true : props.loading,
      previousTree: null,
      previousTreeDepths: null
    })
  });
};
const useGridRows = (apiRef, props) => {
  if (false) // removed by dead control flow
{}
  const logger = useGridLogger(apiRef, 'useGridRows');
  const lastUpdateMs = index_js_.useRef(Date.now());
  const lastRowCount = index_js_.useRef(props.rowCount);
  const timeout = useTimeout();
  const getRow = index_js_.useCallback(id => {
    const model = gridRowsLookupSelector(apiRef)[id];
    if (model) {
      return model;
    }
    const node = apiRef.current.getRowNode(id);
    if (node && isAutogeneratedRowNode(node)) {
      return {
        [GRID_ID_AUTOGENERATED]: id
      };
    }
    return null;
  }, [apiRef]);
  const getRowId = index_js_.useCallback(row => gridRowIdSelector(apiRef.current.state, row), [apiRef]);
  const throttledRowsChange = index_js_.useCallback(({
    cache,
    throttle
  }) => {
    const run = () => {
      lastUpdateMs.current = Date.now();
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        rows: getRowsStateFromCache({
          apiRef,
          rowCountProp: props.rowCount,
          loadingProp: props.loading,
          previousTree: gridRowTreeSelector(apiRef),
          previousTreeDepths: gridRowTreeDepthsSelector(apiRef),
          previousGroupsToFetch: gridRowGroupsToFetchSelector(apiRef)
        })
      }));
      apiRef.current.publishEvent('rowsSet');
      apiRef.current.forceUpdate();
    };
    timeout.clear();
    apiRef.current.caches.rows = cache;
    if (!throttle) {
      run();
      return;
    }
    const throttleRemainingTimeMs = props.throttleRowsMs - (Date.now() - lastUpdateMs.current);
    if (throttleRemainingTimeMs > 0) {
      timeout.start(throttleRemainingTimeMs, run);
      return;
    }
    run();
  }, [props.throttleRowsMs, props.rowCount, props.loading, apiRef, timeout]);

  /**
   * API METHODS
   */
  const setRows = index_js_.useCallback(rows => {
    logger.debug(`Updating all rows, new length ${rows.length}`);
    const cache = createRowsInternalCache({
      rows,
      getRowId: props.getRowId,
      loading: props.loading,
      rowCount: props.rowCount
    });
    const prevCache = apiRef.current.caches.rows;
    cache.rowsBeforePartialUpdates = prevCache.rowsBeforePartialUpdates;
    throttledRowsChange({
      cache,
      throttle: true
    });
  }, [logger, props.getRowId, props.loading, props.rowCount, throttledRowsChange, apiRef]);
  const updateRows = index_js_.useCallback(updates => {
    if (props.signature === GridSignature.DataGrid && updates.length > 1) {
      throw new Error(['MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.', 'You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature.'].join('\n'));
    }
    const nonPinnedRowsUpdates = computeRowsUpdates(apiRef, updates, props.getRowId);
    const cache = updateCacheWithNewRows({
      updates: nonPinnedRowsUpdates,
      getRowId: props.getRowId,
      previousCache: apiRef.current.caches.rows
    });
    throttledRowsChange({
      cache,
      throttle: true
    });
  }, [props.signature, props.getRowId, throttledRowsChange, apiRef]);
  const updateServerRows = index_js_.useCallback((updates, groupKeys) => {
    const nonPinnedRowsUpdates = computeRowsUpdates(apiRef, updates, props.getRowId);
    const cache = updateCacheWithNewRows({
      updates: nonPinnedRowsUpdates,
      getRowId: props.getRowId,
      previousCache: apiRef.current.caches.rows,
      groupKeys: groupKeys ?? []
    });
    throttledRowsChange({
      cache,
      throttle: false
    });
  }, [props.getRowId, throttledRowsChange, apiRef]);
  const setLoading = index_js_.useCallback(loading => {
    if (loading === props.loading) {
      return;
    }
    logger.debug(`Setting loading to ${loading}`);
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      rows: (0,esm_extends/* default */.A)({}, state.rows, {
        loading
      })
    }));
    apiRef.current.caches.rows.loadingPropBeforePartialUpdates = loading;
  }, [props.loading, apiRef, logger]);
  const getRowModels = index_js_.useCallback(() => {
    const dataRows = gridDataRowIdsSelector(apiRef);
    const idRowsLookup = gridRowsLookupSelector(apiRef);
    return new Map(dataRows.map(id => [id, idRowsLookup[id] ?? {}]));
  }, [apiRef]);
  const getRowsCount = index_js_.useCallback(() => gridRowCountSelector(apiRef), [apiRef]);
  const getAllRowIds = index_js_.useCallback(() => gridDataRowIdsSelector(apiRef), [apiRef]);
  const getRowIndexRelativeToVisibleRows = index_js_.useCallback(id => {
    const row = apiRef.current.getRow(id);
    const {
      rowToIndexMap
    } = getVisibleRows(apiRef);
    return rowToIndexMap.get(row);
  }, [apiRef]);
  const setRowChildrenExpansion = index_js_.useCallback((id, isExpanded) => {
    const currentNode = apiRef.current.getRowNode(id);
    if (!currentNode) {
      throw new Error(`MUI X: No row with id #${id} found.`);
    }
    if (currentNode.type !== 'group') {
      throw new Error('MUI X: Only group nodes can be expanded or collapsed.');
    }
    const newNode = (0,esm_extends/* default */.A)({}, currentNode, {
      childrenExpanded: isExpanded
    });
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        rows: (0,esm_extends/* default */.A)({}, state.rows, {
          tree: (0,esm_extends/* default */.A)({}, state.rows.tree, {
            [id]: newNode
          })
        })
      });
    });
    apiRef.current.forceUpdate();
    apiRef.current.publishEvent('rowExpansionChange', newNode);
  }, [apiRef]);
  const getRowNode = index_js_.useCallback(id => gridRowTreeSelector(apiRef)[id] ?? null, [apiRef]);
  const getRowGroupChildren = index_js_.useCallback(({
    skipAutoGeneratedRows = true,
    groupId,
    applySorting,
    applyFiltering
  }) => {
    const tree = gridRowTreeSelector(apiRef);
    let children;
    if (applySorting) {
      const groupNode = tree[groupId];
      if (!groupNode) {
        return [];
      }
      const sortedRowIds = gridSortedRowIdsSelector(apiRef);
      children = [];
      const startIndex = sortedRowIds.findIndex(id => id === groupId) + 1;
      for (let index = startIndex; index < sortedRowIds.length && tree[sortedRowIds[index]].depth > groupNode.depth; index += 1) {
        const id = sortedRowIds[index];
        if (!skipAutoGeneratedRows || !isAutogeneratedRowNode(tree[id])) {
          children.push(id);
        }
      }
    } else {
      children = getTreeNodeDescendants(tree, groupId, skipAutoGeneratedRows);
    }
    if (applyFiltering) {
      const filteredRowsLookup = gridFilteredRowsLookupSelector(apiRef);
      children = children.filter(childId => filteredRowsLookup[childId] !== false);
    }
    return children;
  }, [apiRef]);
  const setRowIndex = index_js_.useCallback((rowId, targetIndex) => {
    const node = apiRef.current.getRowNode(rowId);
    if (!node) {
      throw new Error(`MUI X: No row with id #${rowId} found.`);
    }
    if (node.parent !== GRID_ROOT_GROUP_ID) {
      throw new Error(`MUI X: The row reordering do not support reordering of grouped rows yet.`);
    }
    if (node.type !== 'leaf') {
      throw new Error(`MUI X: The row reordering do not support reordering of footer or grouping rows.`);
    }
    apiRef.current.setState(state => {
      const group = gridRowTreeSelector(state, apiRef.current.instanceId)[GRID_ROOT_GROUP_ID];
      const allRows = group.children;
      const oldIndex = allRows.findIndex(row => row === rowId);
      if (oldIndex === -1 || oldIndex === targetIndex) {
        return state;
      }
      logger.debug(`Moving row ${rowId} to index ${targetIndex}`);
      const updatedRows = [...allRows];
      updatedRows.splice(targetIndex, 0, updatedRows.splice(oldIndex, 1)[0]);
      return (0,esm_extends/* default */.A)({}, state, {
        rows: (0,esm_extends/* default */.A)({}, state.rows, {
          tree: (0,esm_extends/* default */.A)({}, state.rows.tree, {
            [GRID_ROOT_GROUP_ID]: (0,esm_extends/* default */.A)({}, group, {
              children: updatedRows
            })
          })
        })
      });
    });
    apiRef.current.publishEvent('rowsSet');
  }, [apiRef, logger]);
  const replaceRows = index_js_.useCallback((firstRowToRender, newRows) => {
    if (props.signature === GridSignature.DataGrid && newRows.length > 1) {
      throw new Error(['MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.', 'You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature.'].join('\n'));
    }
    if (newRows.length === 0) {
      return;
    }
    const treeDepth = gridRowMaximumTreeDepthSelector(apiRef);
    if (treeDepth > 1) {
      throw new Error('`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping');
    }
    const tree = (0,esm_extends/* default */.A)({}, gridRowTreeSelector(apiRef));
    const dataRowIdToModelLookup = (0,esm_extends/* default */.A)({}, gridRowsLookupSelector(apiRef));
    const dataRowIdToIdLookup = (0,esm_extends/* default */.A)({}, gridRowsDataRowIdToIdLookupSelector(apiRef));
    const rootGroup = tree[GRID_ROOT_GROUP_ID];
    const rootGroupChildren = [...rootGroup.children];
    const seenIds = new Set();
    for (let i = 0; i < newRows.length; i += 1) {
      const rowModel = newRows[i];
      const rowId = getRowIdFromRowModel(rowModel, props.getRowId, 'A row was provided without id when calling replaceRows().');
      const [removedRowId] = rootGroupChildren.splice(firstRowToRender + i, 1, rowId);
      if (!seenIds.has(removedRowId)) {
        delete dataRowIdToModelLookup[removedRowId];
        delete dataRowIdToIdLookup[removedRowId];
        delete tree[removedRowId];
      }
      const rowTreeNodeConfig = {
        id: rowId,
        depth: 0,
        parent: GRID_ROOT_GROUP_ID,
        type: 'leaf',
        groupingKey: null
      };
      dataRowIdToModelLookup[rowId] = rowModel;
      dataRowIdToIdLookup[rowId] = rowId;
      tree[rowId] = rowTreeNodeConfig;
      seenIds.add(rowId);
    }
    tree[GRID_ROOT_GROUP_ID] = (0,esm_extends/* default */.A)({}, rootGroup, {
      children: rootGroupChildren
    });

    // Removes potential remaining skeleton rows from the dataRowIds.
    const dataRowIds = rootGroupChildren.filter(childId => tree[childId]?.type === 'leaf');
    apiRef.current.caches.rows.dataRowIdToModelLookup = dataRowIdToModelLookup;
    apiRef.current.caches.rows.dataRowIdToIdLookup = dataRowIdToIdLookup;
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      rows: (0,esm_extends/* default */.A)({}, state.rows, {
        dataRowIdToModelLookup,
        dataRowIdToIdLookup,
        dataRowIds,
        tree
      })
    }));
    apiRef.current.publishEvent('rowsSet');
  }, [apiRef, props.signature, props.getRowId]);
  const rowApi = {
    getRow,
    setLoading,
    getRowId,
    getRowModels,
    getRowsCount,
    getAllRowIds,
    setRows,
    updateRows,
    getRowNode,
    getRowIndexRelativeToVisibleRows,
    unstable_replaceRows: replaceRows
  };
  const rowProApi = {
    setRowIndex,
    setRowChildrenExpansion,
    getRowGroupChildren
  };
  const rowProPrivateApi = {
    updateServerRows
  };

  /**
   * EVENTS
   */
  const groupRows = index_js_.useCallback(() => {
    logger.info(`Row grouping pre-processing have changed, regenerating the row tree`);
    let cache;
    if (apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows) {
      // The `props.rows` did not change since the last row grouping
      // We can use the current rows cache which contains the partial updates done recently.
      cache = (0,esm_extends/* default */.A)({}, apiRef.current.caches.rows, {
        updates: {
          type: 'full',
          rows: gridDataRowIdsSelector(apiRef)
        }
      });
    } else {
      // The `props.rows` has changed since the last row grouping
      // We must use the new `props.rows` on the new grouping
      // This occurs because this event is triggered before the `useEffect` on the rows when both the grouping pre-processing and the rows changes on the same render
      cache = createRowsInternalCache({
        rows: props.rows,
        getRowId: props.getRowId,
        loading: props.loading,
        rowCount: props.rowCount
      });
    }
    throttledRowsChange({
      cache,
      throttle: false
    });
  }, [logger, apiRef, props.rows, props.getRowId, props.loading, props.rowCount, throttledRowsChange]);
  const previousDataSource = useLazyRef(() => props.unstable_dataSource);
  const handleStrategyProcessorChange = index_js_.useCallback(methodName => {
    if (props.unstable_dataSource && props.unstable_dataSource !== previousDataSource.current) {
      previousDataSource.current = props.unstable_dataSource;
      return;
    }
    if (methodName === 'rowTreeCreation') {
      groupRows();
    }
  }, [groupRows, previousDataSource, props.unstable_dataSource]);
  const handleStrategyActivityChange = index_js_.useCallback(() => {
    // `rowTreeCreation` is the only processor ran when `strategyAvailabilityChange` is fired.
    // All the other processors listen to `rowsSet` which will be published by the `groupRows` method below.
    if (apiRef.current.getActiveStrategy('rowTree') !== gridRowGroupingNameSelector(apiRef)) {
      groupRows();
    }
  }, [apiRef, groupRows]);
  useGridApiEventHandler(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);
  useGridApiEventHandler(apiRef, 'strategyAvailabilityChange', handleStrategyActivityChange);

  /**
   * APPLIERS
   */
  const applyHydrateRowsProcessor = index_js_.useCallback(() => {
    apiRef.current.setState(state => {
      const response = apiRef.current.unstable_applyPipeProcessors('hydrateRows', {
        tree: gridRowTreeSelector(state, apiRef.current.instanceId),
        treeDepths: gridRowTreeDepthsSelector(state, apiRef.current.instanceId),
        dataRowIds: gridDataRowIdsSelector(state, apiRef.current.instanceId),
        dataRowIdToModelLookup: gridRowsLookupSelector(state, apiRef.current.instanceId),
        dataRowIdToIdLookup: gridRowsDataRowIdToIdLookupSelector(state, apiRef.current.instanceId)
      });
      return (0,esm_extends/* default */.A)({}, state, {
        rows: (0,esm_extends/* default */.A)({}, state.rows, response, {
          totalTopLevelRowCount: getTopLevelRowCount({
            tree: response.tree,
            rowCountProp: props.rowCount
          })
        })
      });
    });
    apiRef.current.publishEvent('rowsSet');
    apiRef.current.forceUpdate();
  }, [apiRef, props.rowCount]);
  useGridRegisterPipeApplier(apiRef, 'hydrateRows', applyHydrateRowsProcessor);
  useGridApiMethod(apiRef, rowApi, 'public');
  useGridApiMethod(apiRef, rowProApi, props.signature === GridSignature.DataGrid ? 'private' : 'public');
  useGridApiMethod(apiRef, rowProPrivateApi, 'private');

  // The effect do not track any value defined synchronously during the 1st render by hooks called after `useGridRows`
  // As a consequence, the state generated by the 1st run of this useEffect will always be equal to the initialization one
  const isFirstRender = index_js_.useRef(true);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    let isRowCountPropUpdated = false;
    if (props.rowCount !== lastRowCount.current) {
      isRowCountPropUpdated = true;
      lastRowCount.current = props.rowCount;
    }
    const areNewRowsAlreadyInState = apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows;
    const isNewLoadingAlreadyInState = apiRef.current.caches.rows.loadingPropBeforePartialUpdates === props.loading;
    const isNewRowCountAlreadyInState = apiRef.current.caches.rows.rowCountPropBeforePartialUpdates === props.rowCount;

    // The new rows have already been applied (most likely in the `'rowGroupsPreProcessingChange'` listener)
    if (areNewRowsAlreadyInState) {
      // If the loading prop has changed, we need to update its value in the state because it won't be done by `throttledRowsChange`
      if (!isNewLoadingAlreadyInState) {
        apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
          rows: (0,esm_extends/* default */.A)({}, state.rows, {
            loading: props.loading
          })
        }));
        apiRef.current.caches.rows.loadingPropBeforePartialUpdates = props.loading;
        apiRef.current.forceUpdate();
      }
      if (!isNewRowCountAlreadyInState) {
        apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
          rows: (0,esm_extends/* default */.A)({}, state.rows, {
            totalRowCount: Math.max(props.rowCount || 0, state.rows.totalRowCount),
            totalTopLevelRowCount: Math.max(props.rowCount || 0, state.rows.totalTopLevelRowCount)
          })
        }));
        apiRef.current.caches.rows.rowCountPropBeforePartialUpdates = props.rowCount;
        apiRef.current.forceUpdate();
      }
      if (!isRowCountPropUpdated) {
        return;
      }
    }
    logger.debug(`Updating all rows, new length ${props.rows?.length}`);
    throttledRowsChange({
      cache: createRowsInternalCache({
        rows: props.rows,
        getRowId: props.getRowId,
        loading: props.loading,
        rowCount: props.rowCount
      }),
      throttle: false
    });
  }, [props.rows, props.rowCount, props.getRowId, props.loading, logger, throttledRowsChange, apiRef]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsPreProcessors.js



const createFlatRowTree = rows => {
  const tree = {
    [GRID_ROOT_GROUP_ID]: (0,esm_extends/* default */.A)({}, buildRootGroup(), {
      children: rows
    })
  };
  for (let i = 0; i < rows.length; i += 1) {
    const rowId = rows[i];
    tree[rowId] = {
      id: rowId,
      depth: 0,
      parent: GRID_ROOT_GROUP_ID,
      type: 'leaf',
      groupingKey: null
    };
  }
  return {
    groupingName: GRID_DEFAULT_STRATEGY,
    tree,
    treeDepths: {
      0: rows.length
    },
    dataRowIds: rows
  };
};
const updateFlatRowTree = ({
  previousTree,
  actions
}) => {
  const tree = (0,esm_extends/* default */.A)({}, previousTree);
  const idsToRemoveFromRootGroup = {};
  for (let i = 0; i < actions.remove.length; i += 1) {
    const idToDelete = actions.remove[i];
    idsToRemoveFromRootGroup[idToDelete] = true;
    delete tree[idToDelete];
  }
  for (let i = 0; i < actions.insert.length; i += 1) {
    const idToInsert = actions.insert[i];
    tree[idToInsert] = {
      id: idToInsert,
      depth: 0,
      parent: GRID_ROOT_GROUP_ID,
      type: 'leaf',
      groupingKey: null
    };
  }

  // TODO rows v6: Support row unpinning

  const rootGroup = tree[GRID_ROOT_GROUP_ID];
  let rootGroupChildren = [...rootGroup.children, ...actions.insert];
  if (Object.values(idsToRemoveFromRootGroup).length) {
    rootGroupChildren = rootGroupChildren.filter(id => !idsToRemoveFromRootGroup[id]);
  }
  tree[GRID_ROOT_GROUP_ID] = (0,esm_extends/* default */.A)({}, rootGroup, {
    children: rootGroupChildren
  });
  return {
    groupingName: GRID_DEFAULT_STRATEGY,
    tree,
    treeDepths: {
      0: rootGroupChildren.length
    },
    dataRowIds: rootGroupChildren
  };
};
const flatRowTreeCreationMethod = params => {
  if (params.updates.type === 'full') {
    return createFlatRowTree(params.updates.rows);
  }
  return updateFlatRowTree({
    previousTree: params.previousTree,
    actions: params.updates.actions
  });
};
const useGridRowsPreProcessors = apiRef => {
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'rowTreeCreation', flatRowTreeCreationMethod);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridParamsApi.js





class MissingRowIdError extends Error {}

/**
 * @requires useGridColumns (method)
 * @requires useGridRows (method)
 * @requires useGridFocus (state)
 * @requires useGridEditing (method)
 * TODO: Impossible priority - useGridEditing also needs to be after useGridParamsApi
 * TODO: Impossible priority - useGridFocus also needs to be after useGridParamsApi
 */
function useGridParamsApi(apiRef, props) {
  const getColumnHeaderParams = index_js_.useCallback(field => ({
    field,
    colDef: apiRef.current.getColumn(field)
  }), [apiRef]);
  const getRowParams = index_js_.useCallback(id => {
    const row = apiRef.current.getRow(id);
    if (!row) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    const params = {
      id,
      columns: apiRef.current.getAllColumns(),
      row
    };
    return params;
  }, [apiRef]);
  const getCellParamsForRow = index_js_.useCallback((id, field, row, {
    cellMode,
    colDef,
    hasFocus,
    rowNode,
    tabIndex
  }) => {
    const rawValue = row[field];
    const value = colDef?.valueGetter ? colDef.valueGetter(rawValue, row, colDef, apiRef) : rawValue;
    const params = {
      id,
      field,
      row,
      rowNode,
      colDef,
      cellMode,
      hasFocus,
      tabIndex,
      value,
      formattedValue: value,
      isEditable: false,
      api: apiRef.current
    };
    if (colDef && colDef.valueFormatter) {
      params.formattedValue = colDef.valueFormatter(value, row, colDef, apiRef);
    }
    params.isEditable = colDef && apiRef.current.isCellEditable(params);
    return params;
  }, [apiRef]);
  const getCellParams = index_js_.useCallback((id, field) => {
    const row = apiRef.current.getRow(id);
    const rowNode = apiRef.current.getRowNode(id);
    if (!row || !rowNode) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    const cellFocus = gridFocusCellSelector(apiRef);
    const cellTabIndex = gridTabIndexCellSelector(apiRef);
    const cellMode = apiRef.current.getCellMode(id, field);
    return apiRef.current.getCellParamsForRow(id, field, row, {
      colDef: props.unstable_listView && props.unstable_listColumn?.field === field ? gridListColumnSelector(apiRef.current.state) : apiRef.current.getColumn(field),
      rowNode,
      hasFocus: cellFocus !== null && cellFocus.field === field && cellFocus.id === id,
      tabIndex: cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === id ? 0 : -1,
      cellMode
    });
  }, [apiRef, props.unstable_listView, props.unstable_listColumn?.field]);
  const getCellValue = index_js_.useCallback((id, field) => {
    const colDef = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    if (!row) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    if (!colDef || !colDef.valueGetter) {
      return row[field];
    }
    return colDef.valueGetter(row[colDef.field], row, colDef, apiRef);
  }, [apiRef]);
  const getRowValue = index_js_.useCallback((row, colDef) => {
    const field = colDef.field;
    if (!colDef || !colDef.valueGetter) {
      return row[field];
    }
    const value = row[colDef.field];
    return colDef.valueGetter(value, row, colDef, apiRef);
  }, [apiRef]);
  const getRowFormattedValue = index_js_.useCallback((row, colDef) => {
    const value = getRowValue(row, colDef);
    if (!colDef || !colDef.valueFormatter) {
      return value;
    }
    return colDef.valueFormatter(value, row, colDef, apiRef);
  }, [apiRef, getRowValue]);
  const getColumnHeaderElement = index_js_.useCallback(field => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridColumnHeaderElement(apiRef.current.rootElementRef.current, field);
  }, [apiRef]);
  const getRowElement = index_js_.useCallback(id => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridRowElement(apiRef.current.rootElementRef.current, id);
  }, [apiRef]);
  const getCellElement = index_js_.useCallback((id, field) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridCellElement(apiRef.current.rootElementRef.current, {
      id,
      field
    });
  }, [apiRef]);
  const paramsApi = {
    getCellValue,
    getCellParams,
    getCellElement,
    getRowValue,
    getRowFormattedValue,
    getRowParams,
    getRowElement,
    getColumnHeaderParams,
    getColumnHeaderElement
  };
  const paramsPrivateApi = {
    getCellParamsForRow
  };
  useGridApiMethod(apiRef, paramsApi, 'public');
  useGridApiMethod(apiRef, paramsPrivateApi, 'private');
}
// EXTERNAL MODULE: ../node_modules/@mui/material/utils/useEventCallback.js
var utils_useEventCallback = __webpack_require__(2398);
;// ../node_modules/@mui/x-data-grid/hooks/features/rowSelection/useGridRowSelection.js




















const getSelectionModelPropValue = (selectionModelProp, prevSelectionModel) => {
  if (selectionModelProp == null) {
    return selectionModelProp;
  }
  if (Array.isArray(selectionModelProp)) {
    return selectionModelProp;
  }
  if (prevSelectionModel && prevSelectionModel[0] === selectionModelProp) {
    return prevSelectionModel;
  }
  return [selectionModelProp];
};
const rowSelectionStateInitializer = (state, props) => (0,esm_extends/* default */.A)({}, state, {
  rowSelection: props.rowSelection ? getSelectionModelPropValue(props.rowSelectionModel) ?? [] : []
});

/**
 * @requires useGridRows (state, method) - can be after
 * @requires useGridParamsApi (method) - can be after
 * @requires useGridFocus (state) - can be after
 * @requires useGridKeyboardNavigation (`cellKeyDown` event must first be consumed by it)
 */
const useGridRowSelection = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridSelection');
  const runIfRowSelectionIsEnabled = index_js_.useCallback(callback => (...args) => {
    if (props.rowSelection) {
      callback(...args);
    }
  }, [props.rowSelection]);
  const applyAutoSelection = props.signature !== GridSignature.DataGrid && (props.rowSelectionPropagation?.parents || props.rowSelectionPropagation?.descendants);
  const propRowSelectionModel = index_js_.useMemo(() => {
    return getSelectionModelPropValue(props.rowSelectionModel, gridRowSelectionStateSelector(apiRef.current.state));
  }, [apiRef, props.rowSelectionModel]);
  const lastRowToggled = index_js_.useRef(null);
  apiRef.current.registerControlState({
    stateId: 'rowSelection',
    propModel: propRowSelectionModel,
    propOnChange: props.onRowSelectionModelChange,
    stateSelector: gridRowSelectionStateSelector,
    changeEvent: 'rowSelectionChange'
  });
  const {
    checkboxSelection,
    disableRowSelectionOnClick,
    isRowSelectable: propIsRowSelectable
  } = props;
  const canHaveMultipleSelection = isMultipleRowSelectionEnabled(props);
  const tree = useGridSelector(apiRef, gridRowTreeSelector);
  const isNestedData = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector) > 1;
  const expandMouseRowRangeSelection = index_js_.useCallback(id => {
    let endId = id;
    const startId = lastRowToggled.current ?? id;
    const isSelected = apiRef.current.isRowSelected(id);
    if (isSelected) {
      const visibleRowIds = gridExpandedSortedRowIdsSelector(apiRef);
      const startIndex = visibleRowIds.findIndex(rowId => rowId === startId);
      const endIndex = visibleRowIds.findIndex(rowId => rowId === endId);
      if (startIndex === endIndex) {
        return;
      }
      if (startIndex > endIndex) {
        endId = visibleRowIds[endIndex + 1];
      } else {
        endId = visibleRowIds[endIndex - 1];
      }
    }
    lastRowToggled.current = id;
    apiRef.current.selectRowRange({
      startId,
      endId
    }, !isSelected);
  }, [apiRef]);

  /*
   * API METHODS
   */
  const setRowSelectionModel = index_js_.useCallback(model => {
    if (props.signature === GridSignature.DataGrid && !canHaveMultipleSelection && Array.isArray(model) && model.length > 1) {
      throw new Error(['MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.', 'You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection.'].join('\n'));
    }
    const currentModel = gridRowSelectionStateSelector(apiRef.current.state);
    if (currentModel !== model) {
      logger.debug(`Setting selection model`);
      apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
        rowSelection: props.rowSelection ? model : []
      }));
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger, props.rowSelection, props.signature, canHaveMultipleSelection]);
  const isRowSelected = index_js_.useCallback(id => gridRowSelectionStateSelector(apiRef.current.state).includes(id), [apiRef]);
  const isRowSelectable = index_js_.useCallback(id => {
    if (props.rowSelection === false) {
      return false;
    }
    if (propIsRowSelectable && !propIsRowSelectable(apiRef.current.getRowParams(id))) {
      return false;
    }
    const rowNode = gridRowTreeSelector(apiRef)[id];
    if (rowNode?.type === 'footer' || rowNode?.type === 'pinnedRow') {
      return false;
    }
    return true;
  }, [apiRef, props.rowSelection, propIsRowSelectable]);
  const getSelectedRows = index_js_.useCallback(() => selectedGridRowsSelector(apiRef), [apiRef]);
  const selectRow = index_js_.useCallback((id, isSelected = true, resetSelection = false) => {
    if (!apiRef.current.isRowSelectable(id)) {
      return;
    }
    lastRowToggled.current = id;
    if (resetSelection) {
      logger.debug(`Setting selection for row ${id}`);
      const newSelection = [];
      const addRow = rowId => {
        newSelection.push(rowId);
      };
      if (isSelected) {
        addRow(id);
        if (applyAutoSelection) {
          findRowsToSelect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, addRow);
        }
      }
      apiRef.current.setRowSelectionModel(newSelection);
    } else {
      logger.debug(`Toggling selection for row ${id}`);
      const selection = gridRowSelectionStateSelector(apiRef.current.state);
      const newSelection = new Set(selection);
      newSelection.delete(id);
      const addRow = rowId => {
        newSelection.add(rowId);
      };
      const removeRow = rowId => {
        newSelection.delete(rowId);
      };
      if (isSelected) {
        addRow(id);
        if (applyAutoSelection) {
          findRowsToSelect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, addRow);
        }
      } else if (applyAutoSelection) {
        findRowsToDeselect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, removeRow);
      }
      const isSelectionValid = newSelection.size < 2 || canHaveMultipleSelection;
      if (isSelectionValid) {
        apiRef.current.setRowSelectionModel(Array.from(newSelection));
      }
    }
  }, [apiRef, logger, applyAutoSelection, tree, props.rowSelectionPropagation?.descendants, props.rowSelectionPropagation?.parents, canHaveMultipleSelection]);
  const selectRows = index_js_.useCallback((ids, isSelected = true, resetSelection = false) => {
    logger.debug(`Setting selection for several rows`);
    const selectableIds = ids.filter(id => apiRef.current.isRowSelectable(id));
    let newSelection;
    if (resetSelection) {
      if (isSelected) {
        newSelection = new Set(selectableIds);
        if (applyAutoSelection) {
          const addRow = rowId => {
            newSelection.add(rowId);
          };
          selectableIds.forEach(id => {
            findRowsToSelect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, addRow);
          });
        }
      } else {
        newSelection = new Set();
      }
      const currentLookup = selectedIdsLookupSelector(apiRef);
      if (newSelection.size === Object.keys(currentLookup).length && Array.from(newSelection).every(id => currentLookup[id] === id)) {
        return;
      }
    } else {
      newSelection = new Set(Object.values(selectedIdsLookupSelector(apiRef)));
      const addRow = rowId => {
        newSelection.add(rowId);
      };
      const removeRow = rowId => {
        newSelection.delete(rowId);
      };
      selectableIds.forEach(id => {
        if (isSelected) {
          newSelection.add(id);
          if (applyAutoSelection) {
            findRowsToSelect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, addRow);
          }
        } else {
          removeRow(id);
          if (applyAutoSelection) {
            findRowsToDeselect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, removeRow);
          }
        }
      });
    }
    const isSelectionValid = newSelection.size < 2 || canHaveMultipleSelection;
    if (isSelectionValid) {
      apiRef.current.setRowSelectionModel(Array.from(newSelection));
    }
  }, [logger, applyAutoSelection, canHaveMultipleSelection, apiRef, tree, props.rowSelectionPropagation?.descendants, props.rowSelectionPropagation?.parents]);
  const getPropagatedRowSelectionModel = index_js_.useCallback(inputSelectionModel => {
    if (!isNestedData || !applyAutoSelection || inputSelectionModel.length === 0) {
      return inputSelectionModel;
    }
    const propagatedSelectionModel = new Set(inputSelectionModel);
    const addRow = rowId => {
      propagatedSelectionModel.add(rowId);
    };
    for (const id of inputSelectionModel) {
      findRowsToSelect(apiRef, tree, id, props.rowSelectionPropagation?.descendants ?? false, props.rowSelectionPropagation?.parents ?? false, addRow, propagatedSelectionModel);
    }
    return Array.from(propagatedSelectionModel);
  }, [apiRef, tree, props.rowSelectionPropagation?.descendants, props.rowSelectionPropagation?.parents, isNestedData, applyAutoSelection]);
  const selectRowRange = index_js_.useCallback(({
    startId,
    endId
  }, isSelected = true, resetSelection = false) => {
    if (!apiRef.current.getRow(startId) || !apiRef.current.getRow(endId)) {
      return;
    }
    logger.debug(`Expanding selection from row ${startId} to row ${endId}`);

    // Using rows from all pages allow to select a range across several pages
    const allPagesRowIds = gridExpandedSortedRowIdsSelector(apiRef);
    const startIndex = allPagesRowIds.indexOf(startId);
    const endIndex = allPagesRowIds.indexOf(endId);
    const [start, end] = startIndex > endIndex ? [endIndex, startIndex] : [startIndex, endIndex];
    const rowsBetweenStartAndEnd = allPagesRowIds.slice(start, end + 1);
    apiRef.current.selectRows(rowsBetweenStartAndEnd, isSelected, resetSelection);
  }, [apiRef, logger]);
  const selectionPublicApi = {
    selectRow,
    setRowSelectionModel,
    getSelectedRows,
    isRowSelected,
    isRowSelectable
  };
  const selectionPrivateApi = {
    selectRows,
    selectRowRange,
    getPropagatedRowSelectionModel
  };
  useGridApiMethod(apiRef, selectionPublicApi, 'public');
  useGridApiMethod(apiRef, selectionPrivateApi, props.signature === GridSignature.DataGrid ? 'private' : 'public');

  /*
   * EVENTS
   */
  const isFirstRender = index_js_.useRef(true);
  const removeOutdatedSelection = index_js_.useCallback((sortModelUpdated = false) => {
    if (isFirstRender.current) {
      return;
    }
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    const rowsLookup = gridRowsLookupSelector(apiRef);
    const filteredRowsLookup = gridFilteredRowsLookupSelector(apiRef);

    // We clone the existing object to avoid mutating the same object returned by the selector to others part of the project
    const selectionLookup = (0,esm_extends/* default */.A)({}, selectedIdsLookupSelector(apiRef));
    const isNonExistent = id => {
      if (props.filterMode === 'server') {
        return !rowsLookup[id];
      }
      return !rowsLookup[id] || filteredRowsLookup[id] === false;
    };
    let hasChanged = false;
    currentSelection.forEach(id => {
      if (isNonExistent(id)) {
        if (props.keepNonExistentRowsSelected) {
          return;
        }
        delete selectionLookup[id];
        hasChanged = true;
        return;
      }
      if (!props.rowSelectionPropagation?.parents) {
        return;
      }
      const node = tree[id];
      if (node.type === 'group') {
        const isAutoGenerated = node.isAutoGenerated;
        if (isAutoGenerated) {
          delete selectionLookup[id];
          hasChanged = true;
          return;
        }
        // Keep previously selected tree data parents selected if all their children are filtered out
        if (!node.children.every(childId => filteredRowsLookup[childId] === false)) {
          delete selectionLookup[id];
          hasChanged = true;
        }
      }
    });

    // For nested data, on row tree updation (filtering, adding rows, etc.) when the selection is
    // not empty, we need to re-run scanning of the tree to propagate the selection changes
    // Example: A parent whose de-selected children are filtered out should now be selected
    const shouldReapplyPropagation = isNestedData && props.rowSelectionPropagation?.parents && Object.keys(selectionLookup).length > 0;
    if (hasChanged || shouldReapplyPropagation && !sortModelUpdated) {
      const newSelection = Object.values(selectionLookup);
      if (shouldReapplyPropagation) {
        apiRef.current.selectRows(newSelection, true, true);
      } else {
        apiRef.current.setRowSelectionModel(newSelection);
      }
    }
  }, [apiRef, isNestedData, props.rowSelectionPropagation?.parents, props.keepNonExistentRowsSelected, props.filterMode, tree]);
  const handleSingleRowSelection = index_js_.useCallback((id, event) => {
    const hasCtrlKey = event.metaKey || event.ctrlKey;

    // multiple selection is only allowed if:
    // - it is a checkboxSelection
    // - it is a keyboard selection
    // - Ctrl is pressed

    const isMultipleSelectionDisabled = !checkboxSelection && !hasCtrlKey && !keyboardUtils_isKeyboardEvent(event);
    const resetSelection = !canHaveMultipleSelection || isMultipleSelectionDisabled;
    const isSelected = apiRef.current.isRowSelected(id);
    if (resetSelection) {
      apiRef.current.selectRow(id, !isMultipleSelectionDisabled ? !isSelected : true, true);
    } else {
      apiRef.current.selectRow(id, !isSelected, false);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection]);
  const handleRowClick = index_js_.useCallback((params, event) => {
    if (disableRowSelectionOnClick) {
      return;
    }
    const field = event.target.closest(`.${gridClasses.cell}`)?.getAttribute('data-field');
    if (field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      // click on checkbox should not trigger row selection
      return;
    }
    if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
      // click to open the detail panel should not select the row
      return;
    }
    if (field) {
      const column = apiRef.current.getColumn(field);
      if (column?.type === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    const rowNode = gridRowTreeSelector(apiRef)[params.id];
    if (rowNode.type === 'pinnedRow') {
      return;
    }
    if (event.shiftKey && canHaveMultipleSelection) {
      expandMouseRowRangeSelection(params.id);
    } else {
      handleSingleRowSelection(params.id, event);
    }
  }, [disableRowSelectionOnClick, canHaveMultipleSelection, apiRef, expandMouseRowRangeSelection, handleSingleRowSelection]);
  const preventSelectionOnShift = index_js_.useCallback((params, event) => {
    if (canHaveMultipleSelection && event.shiftKey) {
      window.getSelection()?.removeAllRanges();
    }
  }, [canHaveMultipleSelection]);
  const handleRowSelectionCheckboxChange = index_js_.useCallback((params, event) => {
    if (canHaveMultipleSelection && event.nativeEvent.shiftKey) {
      expandMouseRowRangeSelection(params.id);
    } else {
      apiRef.current.selectRow(params.id, params.value, !canHaveMultipleSelection);
    }
  }, [apiRef, expandMouseRowRangeSelection, canHaveMultipleSelection]);
  const handleHeaderSelectionCheckboxChange = index_js_.useCallback(params => {
    const rowsToBeSelected = props.pagination && props.checkboxSelectionVisibleOnly && props.paginationMode === 'client' ? gridPaginatedVisibleSortedGridRowIdsSelector(apiRef) : gridExpandedSortedRowIdsSelector(apiRef);
    apiRef.current.selectRows(rowsToBeSelected, params.value);
  }, [apiRef, props.checkboxSelectionVisibleOnly, props.pagination, props.paginationMode]);
  const handleCellKeyDown = index_js_.useCallback((params, event) => {
    // Get the most recent cell mode because it may have been changed by another listener
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.Edit) {
      return;
    }

    // Ignore portal
    // Do not apply shortcuts if the focus is not on the cell root component
    if (isEventTargetInPortal(event)) {
      return;
    }
    if (isNavigationKey(event.key) && event.shiftKey) {
      // The cell that has focus after the keyboard navigation
      const focusCell = gridFocusCellSelector(apiRef);
      if (focusCell && focusCell.id !== params.id) {
        event.preventDefault();
        const isNextRowSelected = apiRef.current.isRowSelected(focusCell.id);
        if (!canHaveMultipleSelection) {
          apiRef.current.selectRow(focusCell.id, !isNextRowSelected, true);
          return;
        }
        const newRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(focusCell.id);
        const previousRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(params.id);
        let start;
        let end;
        if (newRowIndex > previousRowIndex) {
          if (isNextRowSelected) {
            // We are navigating to the bottom of the page and adding selected rows
            start = previousRowIndex;
            end = newRowIndex - 1;
          } else {
            // We are navigating to the bottom of the page and removing selected rows
            start = previousRowIndex;
            end = newRowIndex;
          }
        } else {
          // eslint-disable-next-line no-lonely-if
          if (isNextRowSelected) {
            // We are navigating to the top of the page and removing selected rows
            start = newRowIndex + 1;
            end = previousRowIndex;
          } else {
            // We are navigating to the top of the page and adding selected rows
            start = newRowIndex;
            end = previousRowIndex;
          }
        }
        const visibleRows = getVisibleRows(apiRef);
        const rowsBetweenStartAndEnd = visibleRows.rows.slice(start, end + 1).map(row => row.id);
        apiRef.current.selectRows(rowsBetweenStartAndEnd, !isNextRowSelected);
        return;
      }
    }
    if (event.key === ' ' && event.shiftKey) {
      event.preventDefault();
      handleSingleRowSelection(params.id, event);
      return;
    }
    if (String.fromCharCode(event.keyCode) === 'A' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      selectRows(apiRef.current.getAllRowIds(), true);
    }
  }, [apiRef, handleSingleRowSelection, selectRows, canHaveMultipleSelection]);
  const syncControlledState = (0,utils_useEventCallback/* default */.A)(() => {
    if (!props.rowSelection) {
      apiRef.current.setRowSelectionModel([]);
      return;
    }
    if (propRowSelectionModel === undefined) {
      return;
    }
    if (!applyAutoSelection || !isNestedData || propRowSelectionModel.length === 0) {
      apiRef.current.setRowSelectionModel(propRowSelectionModel);
      return;
    }
    const newSelectionModel = apiRef.current.getPropagatedRowSelectionModel(propRowSelectionModel);
    if (newSelectionModel.length !== propRowSelectionModel.length || !newSelectionModel.every(id => propRowSelectionModel.includes(id))) {
      apiRef.current.setRowSelectionModel(newSelectionModel);
      return;
    }
    apiRef.current.setRowSelectionModel(propRowSelectionModel);
  });
  useGridApiEventHandler(apiRef, 'sortedRowsSet', runIfRowSelectionIsEnabled(() => removeOutdatedSelection(true)));
  useGridApiEventHandler(apiRef, 'filteredRowsSet', runIfRowSelectionIsEnabled(() => removeOutdatedSelection()));
  useGridApiEventHandler(apiRef, 'rowClick', runIfRowSelectionIsEnabled(handleRowClick));
  useGridApiEventHandler(apiRef, 'rowSelectionCheckboxChange', runIfRowSelectionIsEnabled(handleRowSelectionCheckboxChange));
  useGridApiEventHandler(apiRef, 'headerSelectionCheckboxChange', handleHeaderSelectionCheckboxChange);
  useGridApiEventHandler(apiRef, 'cellMouseDown', runIfRowSelectionIsEnabled(preventSelectionOnShift));
  useGridApiEventHandler(apiRef, 'cellKeyDown', runIfRowSelectionIsEnabled(handleCellKeyDown));

  /*
   * EFFECTS
   */
  index_js_.useEffect(() => {
    syncControlledState();
  }, [apiRef, propRowSelectionModel, props.rowSelection, syncControlledState]);
  const isStateControlled = propRowSelectionModel != null;
  index_js_.useEffect(() => {
    if (isStateControlled || !props.rowSelection) {
      return;
    }

    // props.isRowSelectable changed
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    if (isRowSelectable) {
      const newSelection = currentSelection.filter(id => isRowSelectable(id));
      if (newSelection.length < currentSelection.length) {
        apiRef.current.setRowSelectionModel(newSelection);
      }
    }
  }, [apiRef, isRowSelectable, isStateControlled, props.rowSelection]);
  index_js_.useEffect(() => {
    if (!props.rowSelection || isStateControlled) {
      return;
    }
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    if (!canHaveMultipleSelection && currentSelection.length > 1) {
      // See https://github.com/mui/mui-x/issues/8455
      apiRef.current.setRowSelectionModel([]);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection, isStateControlled, props.rowSelection]);
  index_js_.useEffect(() => {
    runIfRowSelectionIsEnabled(removeOutdatedSelection);
  }, [removeOutdatedSelection, runIfRowSelectionIsEnabled]);
  index_js_.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, []);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rowSelection/useGridRowSelectionPreProcessors.js






const useGridRowSelectionPreProcessors_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  return index_js_.useMemo(() => {
    const slots = {
      cellCheckbox: ['cellCheckbox'],
      columnHeaderCheckbox: ['columnHeaderCheckbox']
    };
    return composeClasses(slots, getDataGridUtilityClass, classes);
  }, [classes]);
};
const useGridRowSelectionPreProcessors = (apiRef, props) => {
  const ownerState = {
    classes: props.classes
  };
  const classes = useGridRowSelectionPreProcessors_useUtilityClasses(ownerState);
  const updateSelectionColumn = index_js_.useCallback(columnsState => {
    const selectionColumn = (0,esm_extends/* default */.A)({}, GRID_CHECKBOX_SELECTION_COL_DEF, {
      cellClassName: classes.cellCheckbox,
      headerClassName: classes.columnHeaderCheckbox,
      headerName: apiRef.current.getLocaleText('checkboxSelectionHeaderName')
    });
    const shouldHaveSelectionColumn = props.checkboxSelection;
    const hasSelectionColumn = columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] != null;
    if (shouldHaveSelectionColumn && !hasSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = selectionColumn;
      columnsState.orderedFields = [GRID_CHECKBOX_SELECTION_FIELD, ...columnsState.orderedFields];
    } else if (!shouldHaveSelectionColumn && hasSelectionColumn) {
      delete columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD];
      columnsState.orderedFields = columnsState.orderedFields.filter(field => field !== GRID_CHECKBOX_SELECTION_FIELD);
    } else if (shouldHaveSelectionColumn && hasSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = (0,esm_extends/* default */.A)({}, selectionColumn, columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD]);
      // If the column is not in the columns array (not a custom selection column), move it to the beginning of the column order
      if (!props.columns.some(col => col.field === GRID_CHECKBOX_SELECTION_FIELD)) {
        columnsState.orderedFields = [GRID_CHECKBOX_SELECTION_FIELD, ...columnsState.orderedFields.filter(field => field !== GRID_CHECKBOX_SELECTION_FIELD)];
      }
    }
    return columnsState;
  }, [apiRef, classes, props.columns, props.checkboxSelection]);
  useGridRegisterPipeProcessor(apiRef, 'hydrateColumns', updateSelectionColumn);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/sorting/useGridSorting.js














const sortingStateInitializer = (state, props) => {
  const sortModel = props.sortModel ?? props.initialState?.sorting?.sortModel ?? [];
  return (0,esm_extends/* default */.A)({}, state, {
    sorting: {
      sortModel: sanitizeSortModel(sortModel, props.disableMultipleColumnsSorting),
      sortedRows: []
    }
  });
};

/**
 * @requires useGridRows (event)
 * @requires useGridColumns (event)
 */
const useGridSorting = (apiRef, props) => {
  const logger = useGridLogger(apiRef, 'useGridSorting');
  apiRef.current.registerControlState({
    stateId: 'sortModel',
    propModel: props.sortModel,
    propOnChange: props.onSortModelChange,
    stateSelector: gridSortModelSelector,
    changeEvent: 'sortModelChange'
  });
  const upsertSortModel = index_js_.useCallback((field, sortItem) => {
    const sortModel = gridSortModelSelector(apiRef);
    const existingIdx = sortModel.findIndex(c => c.field === field);
    let newSortModel = [...sortModel];
    if (existingIdx > -1) {
      if (sortItem?.sort == null) {
        newSortModel.splice(existingIdx, 1);
      } else {
        newSortModel.splice(existingIdx, 1, sortItem);
      }
    } else {
      newSortModel = [...sortModel, sortItem];
    }
    return newSortModel;
  }, [apiRef]);
  const createSortItem = index_js_.useCallback((col, directionOverride) => {
    const sortModel = gridSortModelSelector(apiRef);
    const existing = sortModel.find(c => c.field === col.field);
    if (existing) {
      const nextSort = directionOverride === undefined ? getNextGridSortDirection(col.sortingOrder ?? props.sortingOrder, existing.sort) : directionOverride;
      return nextSort === undefined ? undefined : (0,esm_extends/* default */.A)({}, existing, {
        sort: nextSort
      });
    }
    return {
      field: col.field,
      sort: directionOverride === undefined ? getNextGridSortDirection(col.sortingOrder ?? props.sortingOrder) : directionOverride
    };
  }, [apiRef, props.sortingOrder]);
  const addColumnMenuItem = index_js_.useCallback((columnMenuItems, colDef) => {
    if (colDef == null || colDef.sortable === false || props.disableColumnSorting) {
      return columnMenuItems;
    }
    const sortingOrder = colDef.sortingOrder || props.sortingOrder;
    if (sortingOrder.some(item => !!item)) {
      return [...columnMenuItems, 'columnMenuSortItem'];
    }
    return columnMenuItems;
  }, [props.sortingOrder, props.disableColumnSorting]);

  /**
   * API METHODS
   */
  const applySorting = index_js_.useCallback(() => {
    apiRef.current.setState(state => {
      if (props.sortingMode === 'server') {
        logger.debug('Skipping sorting rows as sortingMode = server');
        return (0,esm_extends/* default */.A)({}, state, {
          sorting: (0,esm_extends/* default */.A)({}, state.sorting, {
            sortedRows: getTreeNodeDescendants(gridRowTreeSelector(apiRef), GRID_ROOT_GROUP_ID, false)
          })
        });
      }
      const sortModel = gridSortModelSelector(state, apiRef.current.instanceId);
      const sortRowList = buildAggregatedSortingApplier(sortModel, apiRef);
      const sortedRows = apiRef.current.applyStrategyProcessor('sorting', {
        sortRowList
      });
      return (0,esm_extends/* default */.A)({}, state, {
        sorting: (0,esm_extends/* default */.A)({}, state.sorting, {
          sortedRows
        })
      });
    });
    apiRef.current.publishEvent('sortedRowsSet');
    apiRef.current.forceUpdate();
  }, [apiRef, logger, props.sortingMode]);
  const setSortModel = index_js_.useCallback(model => {
    const currentModel = gridSortModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug(`Setting sort model`);
      apiRef.current.setState(mergeStateWithSortModel(model, props.disableMultipleColumnsSorting));
      apiRef.current.forceUpdate();
      apiRef.current.applySorting();
    }
  }, [apiRef, logger, props.disableMultipleColumnsSorting]);
  const sortColumn = index_js_.useCallback((field, direction, allowMultipleSorting) => {
    const column = apiRef.current.getColumn(field);
    const sortItem = createSortItem(column, direction);
    let sortModel;
    if (!allowMultipleSorting || props.disableMultipleColumnsSorting) {
      sortModel = sortItem?.sort == null ? [] : [sortItem];
    } else {
      sortModel = upsertSortModel(column.field, sortItem);
    }
    apiRef.current.setSortModel(sortModel);
  }, [apiRef, upsertSortModel, createSortItem, props.disableMultipleColumnsSorting]);
  const getSortModel = index_js_.useCallback(() => gridSortModelSelector(apiRef), [apiRef]);
  const getSortedRows = index_js_.useCallback(() => {
    const sortedRows = gridSortedRowEntriesSelector(apiRef);
    return sortedRows.map(row => row.model);
  }, [apiRef]);
  const getSortedRowIds = index_js_.useCallback(() => gridSortedRowIdsSelector(apiRef), [apiRef]);
  const getRowIdFromRowIndex = index_js_.useCallback(index => apiRef.current.getSortedRowIds()[index], [apiRef]);
  const sortApi = {
    getSortModel,
    getSortedRows,
    getSortedRowIds,
    getRowIdFromRowIndex,
    setSortModel,
    sortColumn,
    applySorting
  };
  useGridApiMethod(apiRef, sortApi, 'public');

  /**
   * PRE-PROCESSING
   */
  const stateExportPreProcessing = index_js_.useCallback((prevState, context) => {
    const sortModelToExport = gridSortModelSelector(apiRef);
    const shouldExportSortModel =
    // Always export if the `exportOnlyDirtyModels` property is not activated
    !context.exportOnlyDirtyModels ||
    // Always export if the model is controlled
    props.sortModel != null ||
    // Always export if the model has been initialized
    props.initialState?.sorting?.sortModel != null ||
    // Export if the model is not empty
    sortModelToExport.length > 0;
    if (!shouldExportSortModel) {
      return prevState;
    }
    return (0,esm_extends/* default */.A)({}, prevState, {
      sorting: {
        sortModel: sortModelToExport
      }
    });
  }, [apiRef, props.sortModel, props.initialState?.sorting?.sortModel]);
  const stateRestorePreProcessing = index_js_.useCallback((params, context) => {
    const sortModel = context.stateToRestore.sorting?.sortModel;
    if (sortModel == null) {
      return params;
    }
    apiRef.current.setState(mergeStateWithSortModel(sortModel, props.disableMultipleColumnsSorting));
    return (0,esm_extends/* default */.A)({}, params, {
      callbacks: [...params.callbacks, apiRef.current.applySorting]
    });
  }, [apiRef, props.disableMultipleColumnsSorting]);
  const flatSortingMethod = index_js_.useCallback(params => {
    const rowTree = gridRowTreeSelector(apiRef);
    const rootGroupNode = rowTree[GRID_ROOT_GROUP_ID];
    const sortedChildren = params.sortRowList ? params.sortRowList(rootGroupNode.children.map(childId => rowTree[childId])) : [...rootGroupNode.children];
    if (rootGroupNode.footerId != null) {
      sortedChildren.push(rootGroupNode.footerId);
    }
    return sortedChildren;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'exportState', stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, 'restoreState', stateRestorePreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, 'sorting', flatSortingMethod);

  /**
   * EVENTS
   */
  const handleColumnHeaderClick = index_js_.useCallback(({
    field,
    colDef
  }, event) => {
    if (!colDef.sortable || props.disableColumnSorting) {
      return;
    }
    const allowMultipleSorting = event.shiftKey || event.metaKey || event.ctrlKey;
    sortColumn(field, undefined, allowMultipleSorting);
  }, [sortColumn, props.disableColumnSorting]);
  const handleColumnHeaderKeyDown = index_js_.useCallback(({
    field,
    colDef
  }, event) => {
    if (!colDef.sortable || props.disableColumnSorting) {
      return;
    }
    // Ctrl + Enter opens the column menu
    if (event.key === 'Enter' && !event.ctrlKey && !event.metaKey) {
      sortColumn(field, undefined, event.shiftKey);
    }
  }, [sortColumn, props.disableColumnSorting]);
  const handleColumnsChange = index_js_.useCallback(() => {
    // When the columns change we check that the sorted columns are still part of the dataset
    const sortModel = gridSortModelSelector(apiRef);
    const latestColumns = gridColumnLookupSelector(apiRef);
    if (sortModel.length > 0) {
      const newModel = sortModel.filter(sortItem => latestColumns[sortItem.field]);
      if (newModel.length < sortModel.length) {
        apiRef.current.setSortModel(newModel);
      }
    }
  }, [apiRef]);
  const handleStrategyProcessorChange = index_js_.useCallback(methodName => {
    if (methodName === 'sorting') {
      apiRef.current.applySorting();
    }
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, 'columnMenu', addColumnMenuItem);
  useGridApiEventHandler(apiRef, 'columnHeaderClick', handleColumnHeaderClick);
  useGridApiEventHandler(apiRef, 'columnHeaderKeyDown', handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, 'rowsSet', apiRef.current.applySorting);
  useGridApiEventHandler(apiRef, 'columnsChange', handleColumnsChange);
  useGridApiEventHandler(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);

  /**
   * 1ST RENDER
   */
  useFirstRender(() => {
    apiRef.current.applySorting();
  });

  /**
   * EFFECTS
   */
  useEnhancedEffect_useEnhancedEffect(() => {
    if (props.sortModel !== undefined) {
      apiRef.current.setSortModel(props.sortModel);
    }
  }, [apiRef, props.sortModel]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/scroll/useGridScroll.js













// Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
// Similar to https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
function scrollIntoView(dimensions) {
  const {
    containerSize,
    scrollPosition,
    elementSize,
    elementOffset
  } = dimensions;
  const elementEnd = elementOffset + elementSize;
  // Always scroll to top when cell is higher than viewport to avoid scroll jump
  // See https://github.com/mui/mui-x/issues/4513 and https://github.com/mui/mui-x/issues/4514
  if (elementSize > containerSize) {
    return elementOffset;
  }
  if (elementEnd - containerSize > scrollPosition) {
    return elementEnd - containerSize;
  }
  if (elementOffset < scrollPosition) {
    return elementOffset;
  }
  return undefined;
}

/**
 * @requires useGridPagination (state) - can be after, async only
 * @requires useGridColumns (state) - can be after, async only
 * @requires useGridRows (state) - can be after, async only
 * @requires useGridRowsMeta (state) - can be after, async only
 * @requires useGridFilter (state)
 * @requires useGridColumnSpanning (method)
 */
const useGridScroll = (apiRef, props) => {
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const logger = useGridLogger(apiRef, 'useGridScroll');
  const colRef = apiRef.current.columnHeadersContainerRef;
  const virtualScrollerRef = apiRef.current.virtualScrollerRef;
  const visibleSortedRows = useGridSelector(apiRef, gridExpandedSortedRowEntriesSelector);
  const scrollToIndexes = index_js_.useCallback(params => {
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    const totalRowCount = gridRowCountSelector(apiRef);
    const visibleColumns = props.unstable_listView ? [gridListColumnSelector(apiRef.current.state)] : gridVisibleColumnDefinitionsSelector(apiRef);
    const scrollToHeader = params.rowIndex == null;
    if (!scrollToHeader && totalRowCount === 0 || visibleColumns.length === 0) {
      return false;
    }
    logger.debug(`Scrolling to cell at row ${params.rowIndex}, col: ${params.colIndex} `);
    let scrollCoordinates = {};
    if (params.colIndex !== undefined) {
      const columnPositions = gridColumnPositionsSelector(apiRef);
      let cellWidth;
      if (typeof params.rowIndex !== 'undefined') {
        const rowId = visibleSortedRows[params.rowIndex]?.id;
        const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, params.colIndex);
        if (cellColSpanInfo && !cellColSpanInfo.spannedByColSpan) {
          cellWidth = cellColSpanInfo.cellProps.width;
        }
      }
      if (typeof cellWidth === 'undefined') {
        cellWidth = visibleColumns[params.colIndex].computedWidth;
      }
      // When using RTL, `scrollLeft` becomes negative, so we must ensure that we only compare values.
      scrollCoordinates.left = scrollIntoView({
        containerSize: dimensions.viewportOuterSize.width,
        scrollPosition: Math.abs(virtualScrollerRef.current.scrollLeft),
        elementSize: cellWidth,
        elementOffset: columnPositions[params.colIndex]
      });
    }
    if (params.rowIndex !== undefined) {
      const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
      const page = gridPageSelector(apiRef);
      const pageSize = gridPageSizeSelector(apiRef);
      const elementIndex = !props.pagination ? params.rowIndex : params.rowIndex - page * pageSize;
      const targetOffsetHeight = rowsMeta.positions[elementIndex + 1] ? rowsMeta.positions[elementIndex + 1] - rowsMeta.positions[elementIndex] : rowsMeta.currentPageTotalHeight - rowsMeta.positions[elementIndex];
      scrollCoordinates.top = scrollIntoView({
        containerSize: dimensions.viewportInnerSize.height,
        scrollPosition: virtualScrollerRef.current.scrollTop,
        elementSize: targetOffsetHeight,
        elementOffset: rowsMeta.positions[elementIndex]
      });
    }
    scrollCoordinates = apiRef.current.unstable_applyPipeProcessors('scrollToIndexes', scrollCoordinates, params);
    if (typeof scrollCoordinates.left !== undefined || typeof scrollCoordinates.top !== undefined) {
      apiRef.current.scroll(scrollCoordinates);
      return true;
    }
    return false;
  }, [logger, apiRef, virtualScrollerRef, props.pagination, visibleSortedRows, props.unstable_listView]);
  const scroll = index_js_.useCallback(params => {
    if (virtualScrollerRef.current && params.left !== undefined && colRef.current) {
      const direction = isRtl ? -1 : 1;
      colRef.current.scrollLeft = params.left;
      virtualScrollerRef.current.scrollLeft = direction * params.left;
      logger.debug(`Scrolling left: ${params.left}`);
    }
    if (virtualScrollerRef.current && params.top !== undefined) {
      virtualScrollerRef.current.scrollTop = params.top;
      logger.debug(`Scrolling top: ${params.top}`);
    }
    logger.debug(`Scrolling, updating container, and viewport`);
  }, [virtualScrollerRef, isRtl, colRef, logger]);
  const getScrollPosition = index_js_.useCallback(() => {
    if (!virtualScrollerRef?.current) {
      return {
        top: 0,
        left: 0
      };
    }
    return {
      top: virtualScrollerRef.current.scrollTop,
      left: virtualScrollerRef.current.scrollLeft
    };
  }, [virtualScrollerRef]);
  const scrollApi = {
    scroll,
    scrollToIndexes,
    getScrollPosition
  };
  useGridApiMethod(apiRef, scrollApi, 'public');
};
;// ../node_modules/@mui/x-data-grid/hooks/features/events/useGridEvents.js

/**
 * @requires useGridFocus (event) - can be after, async only
 * @requires useGridColumns (event) - can be after, async only
 */
function useGridEvents(apiRef, props) {
  useGridApiOptionHandler(apiRef, 'columnHeaderClick', props.onColumnHeaderClick);
  useGridApiOptionHandler(apiRef, 'columnHeaderContextMenu', props.onColumnHeaderContextMenu);
  useGridApiOptionHandler(apiRef, 'columnHeaderDoubleClick', props.onColumnHeaderDoubleClick);
  useGridApiOptionHandler(apiRef, 'columnHeaderOver', props.onColumnHeaderOver);
  useGridApiOptionHandler(apiRef, 'columnHeaderOut', props.onColumnHeaderOut);
  useGridApiOptionHandler(apiRef, 'columnHeaderEnter', props.onColumnHeaderEnter);
  useGridApiOptionHandler(apiRef, 'columnHeaderLeave', props.onColumnHeaderLeave);
  useGridApiOptionHandler(apiRef, 'cellClick', props.onCellClick);
  useGridApiOptionHandler(apiRef, 'cellDoubleClick', props.onCellDoubleClick);
  useGridApiOptionHandler(apiRef, 'cellKeyDown', props.onCellKeyDown);
  useGridApiOptionHandler(apiRef, 'preferencePanelClose', props.onPreferencePanelClose);
  useGridApiOptionHandler(apiRef, 'preferencePanelOpen', props.onPreferencePanelOpen);
  useGridApiOptionHandler(apiRef, 'menuOpen', props.onMenuOpen);
  useGridApiOptionHandler(apiRef, 'menuClose', props.onMenuClose);
  useGridApiOptionHandler(apiRef, 'rowDoubleClick', props.onRowDoubleClick);
  useGridApiOptionHandler(apiRef, 'rowClick', props.onRowClick);
  useGridApiOptionHandler(apiRef, 'stateChange', props.onStateChange);
}
;// ../node_modules/@mui/x-data-grid/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
;// ../node_modules/@mui/x-internals/esm/throttle/throttle.js
function throttle(func, wait = 166) {
  let timeout;
  let lastArgs;
  const later = () => {
    timeout = undefined;
    func(...lastArgs);
  };
  function throttled(...args) {
    lastArgs = args;
    if (timeout === undefined) {
      timeout = setTimeout(later, wait);
    }
  }
  throttled.clear = () => {
    clearTimeout(timeout);
    timeout = undefined;
  };
  return throttled;
}
;// ../node_modules/@mui/x-data-grid/constants/dataGridPropsDefaultValues.js

/**
 * The default values of `DataGridPropsWithDefaultValues` to inject in the props of DataGrid.
 */
const DATA_GRID_PROPS_DEFAULT_VALUES = {
  autoHeight: false,
  autoPageSize: false,
  autosizeOnMount: false,
  checkboxSelection: false,
  checkboxSelectionVisibleOnly: false,
  clipboardCopyCellDelimiter: '\t',
  columnBufferPx: 150,
  columnHeaderHeight: 56,
  disableAutosize: false,
  disableColumnFilter: false,
  disableColumnMenu: false,
  disableColumnReorder: false,
  disableColumnResize: false,
  disableColumnSelector: false,
  disableColumnSorting: false,
  disableDensitySelector: false,
  disableEval: false,
  disableMultipleColumnsFiltering: false,
  disableMultipleColumnsSorting: false,
  disableMultipleRowSelection: false,
  disableRowSelectionOnClick: false,
  disableVirtualization: false,
  editMode: GridEditModes.Cell,
  filterDebounceMs: 150,
  filterMode: 'client',
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterRowCount: false,
  hideFooterSelectedRowCount: false,
  ignoreDiacritics: false,
  ignoreValueFormatterDuringExport: false,
  // TODO v8: Update to 'select'
  indeterminateCheckboxAction: 'deselect',
  keepColumnPositionIfDraggedOutside: false,
  keepNonExistentRowsSelected: false,
  loading: false,
  logger: console,
  logLevel:  true ? 'error' : 0,
  pageSizeOptions: [25, 50, 100],
  pagination: false,
  paginationMode: 'client',
  resetPageOnSortFilter: false,
  resizeThrottleMs: 60,
  rowBufferPx: 150,
  rowHeight: 52,
  rowPositionsDebounceMs: 166,
  rows: [],
  rowSelection: true,
  rowSpacingType: 'margin',
  showCellVerticalBorder: false,
  showColumnVerticalBorder: false,
  sortingMode: 'client',
  sortingOrder: ['asc', 'desc', null],
  throttleRowsMs: 0,
  unstable_rowSpanning: false,
  virtualizeColumnsWithAutoRowHeight: false
};
;// ../node_modules/@mui/x-data-grid/hooks/features/dimensions/useGridDimensions.js





















const EMPTY_SIZE = {
  width: 0,
  height: 0
};
const EMPTY_DIMENSIONS = {
  isReady: false,
  root: EMPTY_SIZE,
  viewportOuterSize: EMPTY_SIZE,
  viewportInnerSize: EMPTY_SIZE,
  contentSize: EMPTY_SIZE,
  minimumSize: EMPTY_SIZE,
  hasScrollX: false,
  hasScrollY: false,
  scrollbarSize: 0,
  headerHeight: 0,
  groupHeaderHeight: 0,
  headerFilterHeight: 0,
  rowWidth: 0,
  rowHeight: 0,
  columnsTotalWidth: 0,
  leftPinnedWidth: 0,
  rightPinnedWidth: 0,
  headersTotalHeight: 0,
  topContainerHeight: 0,
  bottomContainerHeight: 0
};
const dimensionsStateInitializer = (state, props, apiRef) => {
  const dimensions = EMPTY_DIMENSIONS;
  const density = gridDensityFactorSelector(apiRef);
  return (0,esm_extends/* default */.A)({}, state, {
    dimensions: (0,esm_extends/* default */.A)({}, dimensions, getStaticDimensions(props, apiRef, density, gridVisiblePinnedColumnDefinitionsSelector(apiRef)))
  });
};
const columnsTotalWidthSelector = createSelector_createSelector(gridVisibleColumnDefinitionsSelector, gridColumnPositionsSelector, (visibleColumns, positions) => {
  const colCount = visibleColumns.length;
  if (colCount === 0) {
    return 0;
  }
  return roundToDecimalPlaces(positions[colCount - 1] + visibleColumns[colCount - 1].computedWidth, 1);
});
function useGridDimensions(apiRef, props) {
  const logger = useGridLogger(apiRef, 'useResizeContainer');
  const errorShown = index_js_.useRef(false);
  const rootDimensionsRef = index_js_.useRef(EMPTY_SIZE);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const columnsTotalWidth = useGridSelector(apiRef, columnsTotalWidthSelector);
  const isFirstSizing = index_js_.useRef(true);
  const {
    rowHeight,
    headerHeight,
    groupHeaderHeight,
    headerFilterHeight,
    headersTotalHeight,
    leftPinnedWidth,
    rightPinnedWidth
  } = getStaticDimensions(props, apiRef, densityFactor, pinnedColumns);
  const previousSize = index_js_.useRef(undefined);
  const getRootDimensions = index_js_.useCallback(() => gridDimensionsSelector(apiRef.current.state), [apiRef]);
  const setDimensions = index_js_.useCallback(dimensions => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      dimensions
    }));
    if (apiRef.current.rootElementRef.current) {
      setCSSVariables(apiRef.current.rootElementRef.current, gridDimensionsSelector(apiRef.current.state));
    }
  }, [apiRef]);
  const resize = index_js_.useCallback(() => {
    const element = apiRef.current.mainElementRef.current;
    if (!element) {
      return;
    }
    const computedStyle = ownerWindow(element).getComputedStyle(element);
    const newSize = {
      width: parseFloat(computedStyle.width) || 0,
      height: parseFloat(computedStyle.height) || 0
    };
    if (!previousSize.current || !areElementSizesEqual(previousSize.current, newSize)) {
      apiRef.current.publishEvent('resize', newSize);
      previousSize.current = newSize;
    }
  }, [apiRef]);
  const getViewportPageSize = index_js_.useCallback(() => {
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    if (!dimensions.isReady) {
      return 0;
    }
    const currentPage = getVisibleRows(apiRef);

    // TODO: Use a combination of scrollTop, dimensions.viewportInnerSize.height and rowsMeta.possitions
    // to find out the maximum number of rows that can fit in the visible part of the grid
    if (props.getRowHeight) {
      const renderContext = gridRenderContextSelector(apiRef);
      const viewportPageSize = renderContext.lastRowIndex - renderContext.firstRowIndex;
      return Math.min(viewportPageSize - 1, currentPage.rows.length);
    }
    const maximumPageSizeWithoutScrollBar = Math.floor(dimensions.viewportInnerSize.height / rowHeight);
    return Math.min(maximumPageSizeWithoutScrollBar, currentPage.rows.length);
  }, [apiRef, props.getRowHeight, rowHeight]);
  const updateDimensions = index_js_.useCallback(() => {
    if (isFirstSizing.current) {
      return;
    }
    // All the floating point dimensions should be rounded to .1 decimal places to avoid subpixel rendering issues
    // https://github.com/mui/mui-x/issues/9550#issuecomment-1619020477
    // https://github.com/mui/mui-x/issues/15721
    const scrollbarSize = measureScrollbarSize(apiRef.current.mainElementRef.current, props.scrollbarSize);
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    const topContainerHeight = headersTotalHeight + rowsMeta.pinnedTopRowsTotalHeight;
    const bottomContainerHeight = rowsMeta.pinnedBottomRowsTotalHeight;
    const nonPinnedColumnsTotalWidth = columnsTotalWidth - leftPinnedWidth - rightPinnedWidth;
    const contentSize = {
      width: nonPinnedColumnsTotalWidth,
      height: roundToDecimalPlaces(rowsMeta.currentPageTotalHeight, 1)
    };
    let viewportOuterSize;
    let viewportInnerSize;
    let hasScrollX = false;
    let hasScrollY = false;
    if (props.autoHeight) {
      hasScrollY = false;
      hasScrollX = Math.round(columnsTotalWidth) > Math.round(rootDimensionsRef.current.width);
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: topContainerHeight + bottomContainerHeight + contentSize.height
      };
      viewportInnerSize = {
        width: Math.max(0, viewportOuterSize.width - (hasScrollY ? scrollbarSize : 0)),
        height: Math.max(0, viewportOuterSize.height - (hasScrollX ? scrollbarSize : 0))
      };
    } else {
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: rootDimensionsRef.current.height
      };
      viewportInnerSize = {
        width: Math.max(0, viewportOuterSize.width - leftPinnedWidth - rightPinnedWidth),
        height: Math.max(0, viewportOuterSize.height - topContainerHeight - bottomContainerHeight)
      };
      const content = contentSize;
      const container = viewportInnerSize;
      const hasScrollXIfNoYScrollBar = content.width > container.width;
      const hasScrollYIfNoXScrollBar = content.height > container.height;
      if (hasScrollXIfNoYScrollBar || hasScrollYIfNoXScrollBar) {
        hasScrollY = hasScrollYIfNoXScrollBar;
        hasScrollX = content.width + (hasScrollY ? scrollbarSize : 0) > container.width;

        // We recalculate the scroll y to consider the size of the x scrollbar.
        if (hasScrollX) {
          hasScrollY = content.height + scrollbarSize > container.height;
        }
      }
      if (hasScrollY) {
        viewportInnerSize.width -= scrollbarSize;
      }
      if (hasScrollX) {
        viewportInnerSize.height -= scrollbarSize;
      }
    }
    const rowWidth = Math.max(viewportOuterSize.width, columnsTotalWidth + (hasScrollY ? scrollbarSize : 0));
    const minimumSize = {
      width: columnsTotalWidth,
      height: topContainerHeight + contentSize.height + bottomContainerHeight
    };
    const newDimensions = {
      isReady: true,
      root: rootDimensionsRef.current,
      viewportOuterSize,
      viewportInnerSize,
      contentSize,
      minimumSize,
      hasScrollX,
      hasScrollY,
      scrollbarSize,
      headerHeight,
      groupHeaderHeight,
      headerFilterHeight,
      rowWidth,
      rowHeight,
      columnsTotalWidth,
      leftPinnedWidth,
      rightPinnedWidth,
      headersTotalHeight,
      topContainerHeight,
      bottomContainerHeight
    };
    const prevDimensions = apiRef.current.state.dimensions;
    if (isDeepEqual(prevDimensions, newDimensions)) {
      return;
    }
    setDimensions(newDimensions);
    if (!areElementSizesEqual(newDimensions.viewportInnerSize, prevDimensions.viewportInnerSize)) {
      apiRef.current.publishEvent('viewportInnerSizeChange', newDimensions.viewportInnerSize);
    }
    apiRef.current.updateRenderContext?.();
  }, [apiRef, setDimensions, props.scrollbarSize, props.autoHeight, rowHeight, headerHeight, groupHeaderHeight, headerFilterHeight, columnsTotalWidth, headersTotalHeight, leftPinnedWidth, rightPinnedWidth]);
  const updateDimensionCallback = useEventCallback_useEventCallback(updateDimensions);
  const debouncedUpdateDimensions = index_js_.useMemo(() => props.resizeThrottleMs > 0 ? throttle(() => {
    updateDimensionCallback();
    apiRef.current.publishEvent('debouncedResize', rootDimensionsRef.current);
  }, props.resizeThrottleMs) : undefined, [apiRef, props.resizeThrottleMs, updateDimensionCallback]);
  index_js_.useEffect(() => debouncedUpdateDimensions?.clear, [debouncedUpdateDimensions]);
  const apiPublic = {
    resize,
    getRootDimensions
  };
  const apiPrivate = {
    updateDimensions,
    getViewportPageSize
  };
  useEnhancedEffect_useEnhancedEffect(updateDimensions, [updateDimensions]);
  useGridApiMethod(apiRef, apiPublic, 'public');
  useGridApiMethod(apiRef, apiPrivate, 'private');
  const handleRootMount = index_js_.useCallback(root => {
    setCSSVariables(root, gridDimensionsSelector(apiRef.current.state));
  }, [apiRef]);
  const handleResize = index_js_.useCallback(size => {
    rootDimensionsRef.current = size;
    if (size.height === 0 && !errorShown.current && !props.autoHeight && !isJSDOM) {
      logger.error(['The parent DOM element of the Data Grid has an empty height.', 'Please make sure that this element has an intrinsic height.', 'The grid displays with a height of 0px.', '', 'More details: https://mui.com/r/x-data-grid-no-dimensions.'].join('\n'));
      errorShown.current = true;
    }
    if (size.width === 0 && !errorShown.current && !isJSDOM) {
      logger.error(['The parent DOM element of the Data Grid has an empty width.', 'Please make sure that this element has an intrinsic width.', 'The grid displays with a width of 0px.', '', 'More details: https://mui.com/r/x-data-grid-no-dimensions.'].join('\n'));
      errorShown.current = true;
    }
    if (isFirstSizing.current || !debouncedUpdateDimensions) {
      // We want to initialize the grid dimensions as soon as possible to avoid flickering
      isFirstSizing.current = false;
      updateDimensions();
      return;
    }
    debouncedUpdateDimensions();
  }, [updateDimensions, props.autoHeight, debouncedUpdateDimensions, logger]);
  useGridApiOptionHandler(apiRef, 'rootMount', handleRootMount);
  useGridApiOptionHandler(apiRef, 'resize', handleResize);
  useGridApiOptionHandler(apiRef, 'debouncedResize', props.onResize);
}
function setCSSVariables(root, dimensions) {
  const set = (k, v) => root.style.setProperty(k, v);
  set('--DataGrid-hasScrollX', `${Number(dimensions.hasScrollX)}`);
  set('--DataGrid-hasScrollY', `${Number(dimensions.hasScrollY)}`);
  set('--DataGrid-scrollbarSize', `${dimensions.scrollbarSize}px`);
  set('--DataGrid-rowWidth', `${dimensions.rowWidth}px`);
  set('--DataGrid-columnsTotalWidth', `${dimensions.columnsTotalWidth}px`);
  set('--DataGrid-leftPinnedWidth', `${dimensions.leftPinnedWidth}px`);
  set('--DataGrid-rightPinnedWidth', `${dimensions.rightPinnedWidth}px`);
  set('--DataGrid-headerHeight', `${dimensions.headerHeight}px`);
  set('--DataGrid-headersTotalHeight', `${dimensions.headersTotalHeight}px`);
  set('--DataGrid-topContainerHeight', `${dimensions.topContainerHeight}px`);
  set('--DataGrid-bottomContainerHeight', `${dimensions.bottomContainerHeight}px`);
  set('--height', `${dimensions.rowHeight}px`);
}
function getStaticDimensions(props, apiRef, density, pinnedColumnns) {
  const validRowHeight = getValidRowHeight(props.rowHeight, DATA_GRID_PROPS_DEFAULT_VALUES.rowHeight, rowHeightWarning);
  return {
    rowHeight: Math.floor(validRowHeight * density),
    headerHeight: Math.floor(props.columnHeaderHeight * density),
    groupHeaderHeight: Math.floor((props.columnGroupHeaderHeight ?? props.columnHeaderHeight) * density),
    headerFilterHeight: Math.floor((props.headerFilterHeight ?? props.columnHeaderHeight) * density),
    columnsTotalWidth: columnsTotalWidthSelector(apiRef),
    headersTotalHeight: getTotalHeaderHeight(apiRef, props),
    leftPinnedWidth: pinnedColumnns.left.reduce((w, col) => w + col.computedWidth, 0),
    rightPinnedWidth: pinnedColumnns.right.reduce((w, col) => w + col.computedWidth, 0)
  };
}
const scrollbarSizeCache = new WeakMap();
function measureScrollbarSize(element, scrollbarSize) {
  if (scrollbarSize !== undefined) {
    return scrollbarSize;
  }
  if (element === null) {
    return 0;
  }
  const cachedSize = scrollbarSizeCache.get(element);
  if (cachedSize !== undefined) {
    return cachedSize;
  }
  const doc = ownerDocument(element);
  const scrollDiv = doc.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.className = 'scrollDiv';
  element.appendChild(scrollDiv);
  const size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  element.removeChild(scrollDiv);
  scrollbarSizeCache.set(element, size);
  return size;
}
function areElementSizesEqual(a, b) {
  return a.width === b.width && a.height === b.height;
}
;// ../node_modules/@mui/x-data-grid/utils/ResizeObserver.js
/* eslint-disable */

/**
 * HACK: Minimal shim to get jsdom to work.
 */
const ResizeObserver_ResizeObserver = typeof globalThis.ResizeObserver !== 'undefined' ? globalThis.ResizeObserver : class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsMeta.js
















/* eslint-disable no-underscore-dangle */

const rowsMetaStateInitializer = (state, props, apiRef) => {
  apiRef.current.caches.rowsMeta = {
    heights: new Map()
  };
  const baseRowHeight = gridRowHeightSelector(apiRef.current.state);
  const dataRowCount = gridRowCountSelector(apiRef);
  const pagination = gridPaginationSelector(apiRef.current.state);
  const rowCount = Math.min(pagination.enabled ? pagination.paginationModel.pageSize : dataRowCount, dataRowCount);
  return (0,esm_extends/* default */.A)({}, state, {
    rowsMeta: {
      currentPageTotalHeight: rowCount * baseRowHeight,
      positions: Array.from({
        length: rowCount
      }, (_, i) => i * baseRowHeight),
      pinnedTopRowsTotalHeight: 0,
      pinnedBottomRowsTotalHeight: 0
    }
  });
};

/**
 * @requires useGridPageSize (method)
 * @requires useGridPage (method)
 */
const useGridRowsMeta = (apiRef, props) => {
  const {
    getRowHeight: getRowHeightProp,
    getRowSpacing,
    getEstimatedRowHeight
  } = props;
  const heightCache = apiRef.current.caches.rowsMeta.heights;
  const lastMeasuredRowIndex = index_js_.useRef(-1);
  const hasRowWithAutoHeight = index_js_.useRef(false);
  const isHeightMetaValid = index_js_.useRef(false);
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const currentPage = useGridVisibleRows(apiRef, props);
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const rowHeight = useGridSelector(apiRef, gridRowHeightSelector);
  const getRowHeightEntry = rowId => {
    let entry = heightCache.get(rowId);
    if (entry === undefined) {
      entry = {
        content: rowHeight,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      };
      heightCache.set(rowId, entry);
    }
    return entry;
  };
  const processHeightEntry = index_js_.useCallback(row => {
    // HACK: rowHeight trails behind the most up-to-date value just enough to
    // mess the initial rowsMeta hydration :/
    const baseRowHeight = gridDimensionsSelector(apiRef.current.state).rowHeight;
    eslintUseValue(rowHeight);
    const entry = apiRef.current.getRowHeightEntry(row.id);
    if (!getRowHeightProp) {
      entry.content = baseRowHeight;
      entry.needsFirstMeasurement = false;
    } else {
      const rowHeightFromUser = getRowHeightProp((0,esm_extends/* default */.A)({}, row, {
        densityFactor
      }));
      if (rowHeightFromUser === 'auto') {
        if (entry.needsFirstMeasurement) {
          const estimatedRowHeight = getEstimatedRowHeight ? getEstimatedRowHeight((0,esm_extends/* default */.A)({}, row, {
            densityFactor
          })) : baseRowHeight;

          // If the row was not measured yet use the estimated row height
          entry.content = estimatedRowHeight ?? baseRowHeight;
        }
        hasRowWithAutoHeight.current = true;
        entry.autoHeight = true;
      } else {
        // Default back to base rowHeight if getRowHeight returns invalid value.
        entry.content = getValidRowHeight(rowHeightFromUser, baseRowHeight, getRowHeightWarning);
        entry.needsFirstMeasurement = false;
        entry.autoHeight = false;
      }
    }
    if (getRowSpacing) {
      const indexRelativeToCurrentPage = apiRef.current.getRowIndexRelativeToVisibleRows(row.id);
      const spacing = getRowSpacing((0,esm_extends/* default */.A)({}, row, {
        isFirstVisible: indexRelativeToCurrentPage === 0,
        isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
        indexRelativeToCurrentPage
      }));
      entry.spacingTop = spacing.top ?? 0;
      entry.spacingBottom = spacing.bottom ?? 0;
    } else {
      entry.spacingTop = 0;
      entry.spacingBottom = 0;
    }
    apiRef.current.unstable_applyPipeProcessors('rowHeight', entry, row);
    return entry;
  }, [apiRef, currentPage.rows, getRowHeightProp, getEstimatedRowHeight, rowHeight, getRowSpacing, densityFactor]);
  const hydrateRowsMeta = index_js_.useCallback(() => {
    hasRowWithAutoHeight.current = false;
    const pinnedTopRowsTotalHeight = pinnedRows.top.reduce((acc, row) => {
      const entry = processHeightEntry(row);
      return acc + entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
    }, 0);
    const pinnedBottomRowsTotalHeight = pinnedRows.bottom.reduce((acc, row) => {
      const entry = processHeightEntry(row);
      return acc + entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
    }, 0);
    const positions = [];
    const currentPageTotalHeight = currentPage.rows.reduce((acc, row) => {
      positions.push(acc);
      const entry = processHeightEntry(row);
      const total = entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
      return acc + total;
    }, 0);
    if (!hasRowWithAutoHeight.current) {
      // No row has height=auto, so all rows are already measured
      lastMeasuredRowIndex.current = Infinity;
    }
    const didHeightsChange = pinnedTopRowsTotalHeight !== apiRef.current.state.rowsMeta.pinnedTopRowsTotalHeight || pinnedBottomRowsTotalHeight !== apiRef.current.state.rowsMeta.pinnedBottomRowsTotalHeight || currentPageTotalHeight !== apiRef.current.state.rowsMeta.currentPageTotalHeight;
    const rowsMeta = {
      currentPageTotalHeight,
      positions,
      pinnedTopRowsTotalHeight,
      pinnedBottomRowsTotalHeight
    };
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        rowsMeta
      });
    });
    if (didHeightsChange) {
      apiRef.current.updateDimensions();
    }
    isHeightMetaValid.current = true;
  }, [apiRef, pinnedRows, currentPage.rows, processHeightEntry]);
  const getRowHeight = rowId => {
    return heightCache.get(rowId)?.content ?? rowHeight;
  };
  const storeRowHeightMeasurement = (id, height) => {
    const entry = apiRef.current.getRowHeightEntry(id);
    const didChange = entry.content !== height;
    entry.needsFirstMeasurement = false;
    entry.content = height;
    isHeightMetaValid.current &&= !didChange;
  };
  const rowHasAutoHeight = id => {
    return heightCache.get(id)?.autoHeight ?? false;
  };
  const getLastMeasuredRowIndex = () => {
    return lastMeasuredRowIndex.current;
  };
  const setLastMeasuredRowIndex = index => {
    if (hasRowWithAutoHeight.current && index > lastMeasuredRowIndex.current) {
      lastMeasuredRowIndex.current = index;
    }
  };
  const resetRowHeights = () => {
    heightCache.clear();
    hydrateRowsMeta();
  };
  const resizeObserver = useLazyRef(() => new ResizeObserver_ResizeObserver(entries => {
    for (let i = 0; i < entries.length; i += 1) {
      const entry = entries[i];
      const height = entry.borderBoxSize && entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.contentRect.height;
      const rowId = entry.target.__mui_id;
      const focusedVirtualRowId = gridFocusedVirtualCellSelector(apiRef)?.id;
      if (focusedVirtualRowId === rowId && height === 0) {
        // Focused virtual row has 0 height.
        // We don't want to store it to avoid scroll jumping.
        // https://github.com/mui/mui-x/issues/14726
        return;
      }
      apiRef.current.unstable_storeRowHeightMeasurement(rowId, height);
    }
    if (!isHeightMetaValid.current) {
      // Avoids "ResizeObserver loop completed with undelivered notifications" error
      requestAnimationFrame(() => {
        apiRef.current.requestPipeProcessorsApplication('rowHeight');
      });
    }
  })).current;
  const observeRowHeight = (element, rowId) => {
    element.__mui_id = rowId;
    resizeObserver.observe(element);
    return () => resizeObserver.unobserve(element);
  };
  useGridRegisterPipeApplier(apiRef, 'rowHeight', hydrateRowsMeta);

  // The effect is used to build the rows meta data - currentPageTotalHeight and positions.
  // Because of variable row height this is needed for the virtualization
  useEnhancedEffect_useEnhancedEffect(() => {
    hydrateRowsMeta();
  }, [hydrateRowsMeta]);
  const rowsMetaApi = {
    unstable_getRowHeight: getRowHeight,
    unstable_setLastMeasuredRowIndex: setLastMeasuredRowIndex,
    unstable_storeRowHeightMeasurement: storeRowHeightMeasurement,
    resetRowHeights
  };
  const rowsMetaPrivateApi = {
    hydrateRowsMeta,
    observeRowHeight,
    rowHasAutoHeight,
    getRowHeightEntry,
    getLastMeasuredRowIndex
  };
  useGridApiMethod(apiRef, rowsMetaApi, 'public');
  useGridApiMethod(apiRef, rowsMetaPrivateApi, 'private');
};
;// ../node_modules/@mui/x-data-grid/hooks/features/statePersistence/useGridStatePersistence.js


const useGridStatePersistence = apiRef => {
  const exportState = index_js_.useCallback((params = {}) => {
    const stateToExport = apiRef.current.unstable_applyPipeProcessors('exportState', {}, params);
    return stateToExport;
  }, [apiRef]);
  const restoreState = index_js_.useCallback(stateToRestore => {
    const response = apiRef.current.unstable_applyPipeProcessors('restoreState', {
      callbacks: []
    }, {
      stateToRestore
    });
    response.callbacks.forEach(callback => {
      callback();
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const statePersistenceApi = {
    exportState,
    restoreState
  };
  useGridApiMethod(apiRef, statePersistenceApi, 'public');
};
;// ../node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumnSpanning.js



/**
 * @requires useGridColumns (method, event)
 * @requires useGridParamsApi (method)
 */
const useGridColumnSpanning = apiRef => {
  const lookup = index_js_.useRef({});
  const getCellColSpanInfo = (rowId, columnIndex) => {
    return lookup.current[rowId]?.[columnIndex];
  };
  const resetColSpan = () => {
    lookup.current = {};
  };

  // Calculate `colSpan` for each cell in the row
  const calculateColSpan = index_js_.useCallback(({
    rowId,
    minFirstColumn,
    maxLastColumn,
    columns
  }) => {
    for (let i = minFirstColumn; i < maxLastColumn; i += 1) {
      const cellProps = calculateCellColSpan({
        apiRef,
        lookup: lookup.current,
        columnIndex: i,
        rowId,
        minFirstColumnIndex: minFirstColumn,
        maxLastColumnIndex: maxLastColumn,
        columns
      });
      if (cellProps.colSpan > 1) {
        i += cellProps.colSpan - 1;
      }
    }
  }, [apiRef]);
  const columnSpanningPublicApi = {
    unstable_getCellColSpanInfo: getCellColSpanInfo
  };
  const columnSpanningPrivateApi = {
    resetColSpan,
    calculateColSpan
  };
  useGridApiMethod(apiRef, columnSpanningPublicApi, 'public');
  useGridApiMethod(apiRef, columnSpanningPrivateApi, 'private');
  useGridApiEventHandler(apiRef, 'columnOrderChange', resetColSpan);
};
function calculateCellColSpan(params) {
  const {
    apiRef,
    lookup,
    columnIndex,
    rowId,
    minFirstColumnIndex,
    maxLastColumnIndex,
    columns
  } = params;
  const columnsLength = columns.length;
  const column = columns[columnIndex];
  const row = apiRef.current.getRow(rowId);
  const value = apiRef.current.getRowValue(row, column);
  const colSpan = typeof column.colSpan === 'function' ? column.colSpan(value, row, column, apiRef) : column.colSpan;
  if (!colSpan || colSpan === 1) {
    setCellColSpanInfo(lookup, rowId, columnIndex, {
      spannedByColSpan: false,
      cellProps: {
        colSpan: 1,
        width: column.computedWidth
      }
    });
    return {
      colSpan: 1
    };
  }
  let width = column.computedWidth;
  for (let j = 1; j < colSpan; j += 1) {
    const nextColumnIndex = columnIndex + j;
    // Cells should be spanned only within their column section (left-pinned, right-pinned and unpinned).
    if (nextColumnIndex >= minFirstColumnIndex && nextColumnIndex < maxLastColumnIndex) {
      const nextColumn = columns[nextColumnIndex];
      width += nextColumn.computedWidth;
      setCellColSpanInfo(lookup, rowId, columnIndex + j, {
        spannedByColSpan: true,
        rightVisibleCellIndex: Math.min(columnIndex + colSpan, columnsLength - 1),
        leftVisibleCellIndex: columnIndex
      });
    }
    setCellColSpanInfo(lookup, rowId, columnIndex, {
      spannedByColSpan: false,
      cellProps: {
        colSpan,
        width
      }
    });
  }
  return {
    colSpan
  };
}
function setCellColSpanInfo(lookup, rowId, columnIndex, cellColSpanInfo) {
  if (!lookup[rowId]) {
    lookup[rowId] = {};
  }
  lookup[rowId][columnIndex] = cellColSpanInfo;
}
;// ../node_modules/@mui/x-data-grid/models/gridColumnGrouping.js
function isLeaf(node) {
  return node.field !== undefined;
}

/**
 * A function used to process headerClassName params.
 */

/**
 * The union type representing the [[GridColDef]] column header class type.
 */
;// ../node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsUtils.js


// This is the recurrence function that help writing `unwrapGroupingColumnModel()`
const recurrentUnwrapGroupingColumnModel = (columnGroupNode, parents, unwrappedGroupingModelToComplete) => {
  if (isLeaf(columnGroupNode)) {
    if (unwrappedGroupingModelToComplete[columnGroupNode.field] !== undefined) {
      throw new Error([`MUI X: columnGroupingModel contains duplicated field`, `column field ${columnGroupNode.field} occurs two times in the grouping model:`, `- ${unwrappedGroupingModelToComplete[columnGroupNode.field].join(' > ')}`, `- ${parents.join(' > ')}`].join('\n'));
    }
    unwrappedGroupingModelToComplete[columnGroupNode.field] = parents;
    return;
  }
  const {
    groupId,
    children
  } = columnGroupNode;
  children.forEach(child => {
    recurrentUnwrapGroupingColumnModel(child, [...parents, groupId], unwrappedGroupingModelToComplete);
  });
};

/**
 * This is a function that provide for each column the array of its parents.
 * Parents are ordered from the root to the leaf.
 * @param columnGroupingModel The model such as provided in DataGrid props
 * @returns An object `{[field]: groupIds}` where `groupIds` is the parents of the column `field`
 */
const unwrapGroupingColumnModel = columnGroupingModel => {
  if (!columnGroupingModel) {
    return {};
  }
  const unwrappedSubTree = {};
  columnGroupingModel.forEach(columnGroupNode => {
    recurrentUnwrapGroupingColumnModel(columnGroupNode, [], unwrappedSubTree);
  });
  return unwrappedSubTree;
};
const getColumnGroupsHeaderStructure = (orderedColumns, unwrappedGroupingModel, pinnedFields) => {
  const getParents = field => unwrappedGroupingModel[field] ?? [];
  const groupingHeaderStructure = [];
  const maxDepth = Math.max(...orderedColumns.map(field => getParents(field).length));
  const haveSameParents = (field1, field2, depth) => isDeepEqual(getParents(field1).slice(0, depth + 1), getParents(field2).slice(0, depth + 1));
  const haveDifferentContainers = (field1, field2) => {
    if (pinnedFields?.left && pinnedFields.left.includes(field1) && !pinnedFields.left.includes(field2)) {
      return true;
    }
    if (pinnedFields?.right && !pinnedFields.right.includes(field1) && pinnedFields.right.includes(field2)) {
      return true;
    }
    return false;
  };
  for (let depth = 0; depth < maxDepth; depth += 1) {
    const depthStructure = orderedColumns.reduce((structure, newField) => {
      const groupId = getParents(newField)[depth] ?? null;
      if (structure.length === 0) {
        return [{
          columnFields: [newField],
          groupId
        }];
      }
      const lastGroup = structure[structure.length - 1];
      const prevField = lastGroup.columnFields[lastGroup.columnFields.length - 1];
      const prevGroupId = lastGroup.groupId;
      if (prevGroupId !== groupId || !haveSameParents(prevField, newField, depth) ||
      // Fix for https://github.com/mui/mui-x/issues/7041
      haveDifferentContainers(prevField, newField)) {
        // It's a new group
        return [...structure, {
          columnFields: [newField],
          groupId
        }];
      }

      // It extends the previous group
      return [...structure.slice(0, structure.length - 1), {
        columnFields: [...lastGroup.columnFields, newField],
        groupId
      }];
    }, []);
    groupingHeaderStructure.push(depthStructure);
  }
  return groupingHeaderStructure;
};
;// ../node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGrouping.js


const useGridColumnGrouping_excluded = ["groupId", "children"];







const createGroupLookup = columnGroupingModel => {
  let groupLookup = {};
  columnGroupingModel.forEach(node => {
    if (isLeaf(node)) {
      return;
    }
    const {
        groupId,
        children
      } = node,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(node, useGridColumnGrouping_excluded);
    if (!groupId) {
      throw new Error('MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.');
    }
    if (false) // removed by dead control flow
{}
    const groupParam = (0,esm_extends/* default */.A)({}, other, {
      groupId
    });
    const subTreeLookup = createGroupLookup(children);
    if (subTreeLookup[groupId] !== undefined || groupLookup[groupId] !== undefined) {
      throw new Error(`MUI X: The groupId ${groupId} is used multiple times in the columnGroupingModel.`);
    }
    groupLookup = (0,esm_extends/* default */.A)({}, groupLookup, subTreeLookup, {
      [groupId]: groupParam
    });
  });
  return (0,esm_extends/* default */.A)({}, groupLookup);
};
const columnGroupsStateInitializer = (state, props, apiRef) => {
  if (!props.columnGroupingModel) {
    return state;
  }
  const columnFields = gridColumnFieldsSelector(apiRef);
  const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
  const groupLookup = createGroupLookup(props.columnGroupingModel ?? []);
  const unwrappedGroupingModel = unwrapGroupingColumnModel(props.columnGroupingModel ?? []);
  const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(columnFields, unwrappedGroupingModel, apiRef.current.state.pinnedColumns ?? {});
  const maxDepth = visibleColumnFields.length === 0 ? 0 : Math.max(...visibleColumnFields.map(field => unwrappedGroupingModel[field]?.length ?? 0));
  return (0,esm_extends/* default */.A)({}, state, {
    columnGrouping: {
      lookup: groupLookup,
      unwrappedGroupingModel,
      headerStructure: columnGroupsHeaderStructure,
      maxDepth
    }
  });
};

/**
 * @requires useGridColumns (method, event)
 * @requires useGridParamsApi (method)
 */
const useGridColumnGrouping = (apiRef, props) => {
  /**
   * API METHODS
   */
  const getColumnGroupPath = index_js_.useCallback(field => {
    const unwrappedGroupingModel = gridColumnGroupsUnwrappedModelSelector(apiRef);
    return unwrappedGroupingModel[field] ?? [];
  }, [apiRef]);
  const getAllGroupDetails = index_js_.useCallback(() => {
    const columnGroupLookup = gridColumnGroupsLookupSelector(apiRef);
    return columnGroupLookup;
  }, [apiRef]);
  const columnGroupingApi = {
    getColumnGroupPath,
    getAllGroupDetails
  };
  useGridApiMethod(apiRef, columnGroupingApi, 'public');
  const handleColumnIndexChange = index_js_.useCallback(() => {
    const unwrappedGroupingModel = unwrapGroupingColumnModel(props.columnGroupingModel ?? []);
    apiRef.current.setState(state => {
      const orderedFields = state.columns?.orderedFields ?? [];
      const pinnedColumns = state.pinnedColumns ?? {};
      const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(orderedFields, unwrappedGroupingModel, pinnedColumns);
      return (0,esm_extends/* default */.A)({}, state, {
        columnGrouping: (0,esm_extends/* default */.A)({}, state.columnGrouping, {
          headerStructure: columnGroupsHeaderStructure
        })
      });
    });
  }, [apiRef, props.columnGroupingModel]);
  const updateColumnGroupingState = index_js_.useCallback(columnGroupingModel => {
    // @ts-expect-error Move this logic to `Pro` package
    const pinnedColumns = apiRef.current.getPinnedColumns?.() ?? {};
    const columnFields = gridColumnFieldsSelector(apiRef);
    const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
    const groupLookup = createGroupLookup(columnGroupingModel ?? []);
    const unwrappedGroupingModel = unwrapGroupingColumnModel(columnGroupingModel ?? []);
    const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(columnFields, unwrappedGroupingModel, pinnedColumns);
    const maxDepth = visibleColumnFields.length === 0 ? 0 : Math.max(...visibleColumnFields.map(field => unwrappedGroupingModel[field]?.length ?? 0));
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        columnGrouping: {
          lookup: groupLookup,
          unwrappedGroupingModel,
          headerStructure: columnGroupsHeaderStructure,
          maxDepth
        }
      });
    });
  }, [apiRef]);
  useGridApiEventHandler(apiRef, 'columnIndexChange', handleColumnIndexChange);
  useGridApiEventHandler(apiRef, 'columnsChange', () => {
    updateColumnGroupingState(props.columnGroupingModel);
  });
  useGridApiEventHandler(apiRef, 'columnVisibilityModelChange', () => {
    updateColumnGroupingState(props.columnGroupingModel);
  });

  /**
   * EFFECTS
   */
  index_js_.useEffect(() => {
    updateColumnGroupingState(props.columnGroupingModel);
  }, [updateColumnGroupingState, props.columnGroupingModel]);
};
;// ../node_modules/@mui/x-data-grid/hooks/features/columnResize/gridColumnResizeApi.js
const DEFAULT_GRID_AUTOSIZE_OPTIONS = {
  includeHeaders: true,
  includeOutliers: false,
  outliersFactor: 1.5,
  expand: false,
  disableColumnVirtualization: true
};

/**
 * The Resize API interface that is available in the grid `apiRef`.
 */
;// ../node_modules/@mui/x-data-grid/utils/createControllablePromise.js
function createControllablePromise() {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/columnResize/useGridColumnResize.js















function trackFinger(event, currentTouchId) {
  if (currentTouchId !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === currentTouchId) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function computeNewWidth(initialOffsetToSeparator, clickX, columnBounds, resizeDirection) {
  let newWidth = initialOffsetToSeparator;
  if (resizeDirection === 'Right') {
    newWidth += clickX - columnBounds.left;
  } else {
    newWidth += columnBounds.right - clickX;
  }
  return newWidth;
}
function computeOffsetToSeparator(clickX, columnBounds, resizeDirection) {
  if (resizeDirection === 'Left') {
    return clickX - columnBounds.left;
  }
  return columnBounds.right - clickX;
}
function flipResizeDirection(side) {
  if (side === 'Right') {
    return 'Left';
  }
  return 'Right';
}
function getResizeDirection(separator, isRtl) {
  const side = separator.classList.contains(gridClasses['columnSeparator--sideRight']) ? 'Right' : 'Left';
  if (isRtl) {
    // Resizing logic should be mirrored in the RTL case
    return flipResizeDirection(side);
  }
  return side;
}
function preventClick(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

/**
 * Checker that returns a promise that resolves when the column virtualization
 * is disabled.
 */
function useColumnVirtualizationDisabled(apiRef) {
  const promise = index_js_.useRef(undefined);
  const selector = () => gridVirtualizationColumnEnabledSelector(apiRef);
  const value = useGridSelector(apiRef, selector);
  index_js_.useEffect(() => {
    if (promise.current && value === false) {
      promise.current.resolve();
      promise.current = undefined;
    }
  });
  const asyncCheck = () => {
    if (!promise.current) {
      if (selector() === false) {
        return Promise.resolve();
      }
      promise.current = createControllablePromise();
    }
    return promise.current;
  };
  return asyncCheck;
}

/**
 * Basic statistical outlier detection, checks if the value is `F * IQR` away from
 * the Q1 and Q3 boundaries. IQR: interquartile range.
 */
function excludeOutliers(inputValues, factor) {
  if (inputValues.length < 4) {
    return inputValues;
  }
  const values = inputValues.slice();
  values.sort((a, b) => a - b);
  const q1 = values[Math.floor(values.length * 0.25)];
  const q3 = values[Math.floor(values.length * 0.75) - 1];
  const iqr = q3 - q1;

  // We make a small adjustment if `iqr < 5` for the cases where the IQR is
  // very small (for example zero) due to very close by values in the input data.
  // Otherwise, with an IQR of `0`, anything outside that would be considered
  // an outlier, but it makes more sense visually to allow for this 5px variance
  // rather than showing a cropped cell.
  const deviation = iqr < 5 ? 5 : iqr * factor;
  return values.filter(v => v > q1 - deviation && v < q3 + deviation);
}
function extractColumnWidths(apiRef, options, columns) {
  const widthByField = {};
  const root = apiRef.current.rootElementRef.current;
  root.classList.add(gridClasses.autosizing);
  columns.forEach(column => {
    const cells = findGridCells(apiRef.current, column.field);
    const widths = cells.map(cell => {
      return cell.getBoundingClientRect().width ?? 0;
    });
    const filteredWidths = options.includeOutliers ? widths : excludeOutliers(widths, options.outliersFactor);
    if (options.includeHeaders) {
      const header = findGridHeader(apiRef.current, column.field);
      if (header) {
        const title = header.querySelector(`.${gridClasses.columnHeaderTitle}`);
        const content = header.querySelector(`.${gridClasses.columnHeaderTitleContainerContent}`);
        const iconContainer = header.querySelector(`.${gridClasses.iconButtonContainer}`);
        const menuContainer = header.querySelector(`.${gridClasses.menuIcon}`);
        const element = title ?? content;
        const style = window.getComputedStyle(header, null);
        const paddingWidth = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
        const contentWidth = element.scrollWidth + 1;
        const width = contentWidth + paddingWidth + (iconContainer?.clientWidth ?? 0) + (menuContainer?.clientWidth ?? 0);
        filteredWidths.push(width);
      }
    }
    const hasColumnMin = column.minWidth !== -Infinity && column.minWidth !== undefined;
    const hasColumnMax = column.maxWidth !== Infinity && column.maxWidth !== undefined;
    const min = hasColumnMin ? column.minWidth : 0;
    const max = hasColumnMax ? column.maxWidth : Infinity;
    const maxContent = filteredWidths.length === 0 ? 0 : Math.max(...filteredWidths);
    widthByField[column.field] = clamp(maxContent, min, max);
  });
  root.classList.remove(gridClasses.autosizing);
  return widthByField;
}
const columnResizeStateInitializer = state => (0,esm_extends/* default */.A)({}, state, {
  columnResize: {
    resizingColumnField: ''
  }
});
function createResizeRefs() {
  return {
    colDef: undefined,
    initialColWidth: 0,
    initialTotalWidth: 0,
    previousMouseClickEvent: undefined,
    columnHeaderElement: undefined,
    headerFilterElement: undefined,
    groupHeaderElements: [],
    cellElements: [],
    leftPinnedCellsAfter: [],
    rightPinnedCellsBefore: [],
    fillerLeft: undefined,
    fillerRight: undefined,
    leftPinnedHeadersAfter: [],
    rightPinnedHeadersBefore: []
  };
}

/**
 * @requires useGridColumns (method, event)
 * TODO: improve experience for last column
 */
const useGridColumnResize = (apiRef, props) => {
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const logger = useGridLogger(apiRef, 'useGridColumnResize');
  const refs = useLazyRef(createResizeRefs).current;

  // To improve accessibility, the separator has padding on both sides.
  // Clicking inside the padding area should be treated as a click in the separator.
  // This ref stores the offset between the click and the separator.
  const initialOffsetToSeparator = index_js_.useRef(null);
  const resizeDirection = index_js_.useRef(null);
  const stopResizeEventTimeout = useTimeout();
  const touchId = index_js_.useRef(undefined);
  const updateWidth = newWidth => {
    logger.debug(`Updating width to ${newWidth} for col ${refs.colDef.field}`);
    const prevWidth = refs.columnHeaderElement.offsetWidth;
    const widthDiff = newWidth - prevWidth;
    const columnWidthDiff = newWidth - refs.initialColWidth;
    if (columnWidthDiff > 0) {
      const newTotalWidth = refs.initialTotalWidth + columnWidthDiff;
      apiRef.current.rootElementRef?.current?.style.setProperty('--DataGrid-rowWidth', `${newTotalWidth}px`);
    }
    refs.colDef.computedWidth = newWidth;
    refs.colDef.width = newWidth;
    refs.colDef.flex = 0;
    refs.columnHeaderElement.style.width = `${newWidth}px`;
    const headerFilterElement = refs.headerFilterElement;
    if (headerFilterElement) {
      headerFilterElement.style.width = `${newWidth}px`;
    }
    refs.groupHeaderElements.forEach(element => {
      const div = element;
      let finalWidth;
      if (div.getAttribute('aria-colspan') === '1') {
        finalWidth = `${newWidth}px`;
      } else {
        // Cell with colspan > 1 cannot be just updated width new width.
        // Instead, we add width diff to the current width.
        finalWidth = `${div.offsetWidth + widthDiff}px`;
      }
      div.style.width = finalWidth;
    });
    refs.cellElements.forEach(element => {
      const div = element;
      let finalWidth;
      if (div.getAttribute('aria-colspan') === '1') {
        finalWidth = `${newWidth}px`;
      } else {
        // Cell with colspan > 1 cannot be just updated width new width.
        // Instead, we add width diff to the current width.
        finalWidth = `${div.offsetWidth + widthDiff}px`;
      }
      div.style.setProperty('--width', finalWidth);
    });
    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors('isColumnPinned', false, refs.colDef.field);
    if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
      updateProperty(refs.fillerLeft, 'width', widthDiff);
      refs.leftPinnedCellsAfter.forEach(cell => {
        updateProperty(cell, 'left', widthDiff);
      });
      refs.leftPinnedHeadersAfter.forEach(header => {
        updateProperty(header, 'left', widthDiff);
      });
    }
    if (pinnedPosition === GridPinnedColumnPosition.RIGHT) {
      updateProperty(refs.fillerRight, 'width', widthDiff);
      refs.rightPinnedCellsBefore.forEach(cell => {
        updateProperty(cell, 'right', widthDiff);
      });
      refs.rightPinnedHeadersBefore.forEach(header => {
        updateProperty(header, 'right', widthDiff);
      });
    }
  };
  const finishResize = nativeEvent => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    stopListening();

    // Prevent double-clicks from being interpreted as two separate clicks
    if (refs.previousMouseClickEvent) {
      const prevEvent = refs.previousMouseClickEvent;
      const prevTimeStamp = prevEvent.timeStamp;
      const prevClientX = prevEvent.clientX;
      const prevClientY = prevEvent.clientY;

      // Check if the current event is part of a double-click
      if (nativeEvent.timeStamp - prevTimeStamp < 300 && nativeEvent.clientX === prevClientX && nativeEvent.clientY === prevClientY) {
        refs.previousMouseClickEvent = undefined;
        apiRef.current.publishEvent('columnResizeStop', null, nativeEvent);
        return;
      }
    }
    if (refs.colDef) {
      apiRef.current.setColumnWidth(refs.colDef.field, refs.colDef.width);
      logger.debug(`Updating col ${refs.colDef.field} with new width: ${refs.colDef.width}`);

      // Since during resizing we update the columns width outside of React, React is unable to
      // reapply the right style properties. We need to sync the state manually.
      // So we reapply the same logic as in https://github.com/mui/mui-x/blob/0511bf65543ca05d2602a5a3e0a6156f2fc8e759/packages/x-data-grid/src/hooks/features/columnHeaders/useGridColumnHeaders.tsx#L405
      const columnsState = gridColumnsStateSelector(apiRef.current.state);
      refs.groupHeaderElements.forEach(element => {
        const fields = getFieldsFromGroupHeaderElem(element);
        const div = element;
        const newWidth = fields.reduce((acc, field) => {
          if (columnsState.columnVisibilityModel[field] !== false) {
            return acc + columnsState.lookup[field].computedWidth;
          }
          return acc;
        }, 0);
        const finalWidth = `${newWidth}px`;
        div.style.width = finalWidth;
      });
    }
    stopResizeEventTimeout.start(0, () => {
      apiRef.current.publishEvent('columnResizeStop', null, nativeEvent);
    });
  };
  const storeReferences = (colDef, separator, xStart) => {
    const root = apiRef.current.rootElementRef.current;
    refs.initialColWidth = colDef.computedWidth;
    refs.initialTotalWidth = apiRef.current.getRootDimensions().rowWidth;
    refs.colDef = colDef;
    refs.columnHeaderElement = findHeaderElementFromField(apiRef.current.columnHeadersContainerRef.current, colDef.field);
    const headerFilterElement = root.querySelector(`.${gridClasses.headerFilterRow} [data-field="${escapeOperandAttributeSelector(colDef.field)}"]`);
    if (headerFilterElement) {
      refs.headerFilterElement = headerFilterElement;
    }
    refs.groupHeaderElements = findGroupHeaderElementsFromField(apiRef.current.columnHeadersContainerRef?.current, colDef.field);
    refs.cellElements = findGridCellElementsFromCol(refs.columnHeaderElement, apiRef.current);
    refs.fillerLeft = findGridElement(apiRef.current, isRtl ? 'filler--pinnedRight' : 'filler--pinnedLeft');
    refs.fillerRight = findGridElement(apiRef.current, isRtl ? 'filler--pinnedLeft' : 'filler--pinnedRight');
    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors('isColumnPinned', false, refs.colDef.field);
    refs.leftPinnedCellsAfter = pinnedPosition !== GridPinnedColumnPosition.LEFT ? [] : findLeftPinnedCellsAfterCol(apiRef.current, refs.columnHeaderElement, isRtl);
    refs.rightPinnedCellsBefore = pinnedPosition !== GridPinnedColumnPosition.RIGHT ? [] : findRightPinnedCellsBeforeCol(apiRef.current, refs.columnHeaderElement, isRtl);
    refs.leftPinnedHeadersAfter = pinnedPosition !== GridPinnedColumnPosition.LEFT ? [] : findLeftPinnedHeadersAfterCol(apiRef.current, refs.columnHeaderElement, isRtl);
    refs.rightPinnedHeadersBefore = pinnedPosition !== GridPinnedColumnPosition.RIGHT ? [] : findRightPinnedHeadersBeforeCol(apiRef.current, refs.columnHeaderElement, isRtl);
    resizeDirection.current = getResizeDirection(separator, isRtl);
    initialOffsetToSeparator.current = computeOffsetToSeparator(xStart, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
  };
  const handleResizeMouseUp = useEventCallback_useEventCallback(finishResize);
  const handleResizeMouseMove = useEventCallback_useEventCallback(nativeEvent => {
    // Cancel move in case some other element consumed a mouseup event and it was not fired.
    if (nativeEvent.buttons === 0) {
      handleResizeMouseUp(nativeEvent);
      return;
    }
    let newWidth = computeNewWidth(initialOffsetToSeparator.current, nativeEvent.clientX, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
    newWidth = clamp(newWidth, refs.colDef.minWidth, refs.colDef.maxWidth);
    updateWidth(newWidth);
    const params = {
      element: refs.columnHeaderElement,
      colDef: refs.colDef,
      width: newWidth
    };
    apiRef.current.publishEvent('columnResize', params, nativeEvent);
  });
  const handleTouchEnd = useEventCallback_useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId.current);
    if (!finger) {
      return;
    }
    finishResize(nativeEvent);
  });
  const handleTouchMove = useEventCallback_useEventCallback(nativeEvent => {
    const finger = trackFinger(nativeEvent, touchId.current);
    if (!finger) {
      return;
    }

    // Cancel move in case some other element consumed a touchmove event and it was not fired.
    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    let newWidth = computeNewWidth(initialOffsetToSeparator.current, finger.x, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
    newWidth = clamp(newWidth, refs.colDef.minWidth, refs.colDef.maxWidth);
    updateWidth(newWidth);
    const params = {
      element: refs.columnHeaderElement,
      colDef: refs.colDef,
      width: newWidth
    };
    apiRef.current.publishEvent('columnResize', params, nativeEvent);
  });
  const handleTouchStart = useEventCallback_useEventCallback(event => {
    const cellSeparator = findParentElementFromClassName(event.target, gridClasses['columnSeparator--resizable']);
    // Let the event bubble if the target is not a col separator
    if (!cellSeparator) {
      return;
    }
    const touch = event.changedTouches[0];
    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }
    const columnHeaderElement = findParentElementFromClassName(event.target, gridClasses.columnHeader);
    const field = getFieldFromHeaderElem(columnHeaderElement);
    const colDef = apiRef.current.getColumn(field);
    logger.debug(`Start Resize on col ${colDef.field}`);
    apiRef.current.publishEvent('columnResizeStart', {
      field
    }, event);
    storeReferences(colDef, cellSeparator, touch.clientX);
    const doc = ownerDocument(event.currentTarget);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = index_js_.useCallback(() => {
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.body.style.removeProperty('cursor');
    doc.removeEventListener('mousemove', handleResizeMouseMove);
    doc.removeEventListener('mouseup', handleResizeMouseUp);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
    // The click event runs right after the mouseup event, we want to wait until it
    // has been canceled before removing our handler.
    setTimeout(() => {
      doc.removeEventListener('click', preventClick, true);
    }, 100);
    if (refs.columnHeaderElement) {
      refs.columnHeaderElement.style.pointerEvents = 'unset';
    }
  }, [apiRef, refs, handleResizeMouseMove, handleResizeMouseUp, handleTouchMove, handleTouchEnd]);
  const handleResizeStart = index_js_.useCallback(({
    field
  }) => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      columnResize: (0,esm_extends/* default */.A)({}, state.columnResize, {
        resizingColumnField: field
      })
    }));
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const handleResizeStop = index_js_.useCallback(() => {
    apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
      columnResize: (0,esm_extends/* default */.A)({}, state.columnResize, {
        resizingColumnField: ''
      })
    }));
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const handleColumnResizeMouseDown = useEventCallback_useEventCallback(({
    colDef
  }, event) => {
    // Only handle left clicks
    if (event.button !== 0) {
      return;
    }

    // Skip if the column isn't resizable
    if (!event.currentTarget.classList.contains(gridClasses['columnSeparator--resizable'])) {
      return;
    }

    // Avoid text selection
    event.preventDefault();
    logger.debug(`Start Resize on col ${colDef.field}`);
    apiRef.current.publishEvent('columnResizeStart', {
      field: colDef.field
    }, event);
    storeReferences(colDef, event.currentTarget, event.clientX);
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.body.style.cursor = 'col-resize';
    refs.previousMouseClickEvent = event.nativeEvent;
    doc.addEventListener('mousemove', handleResizeMouseMove);
    doc.addEventListener('mouseup', handleResizeMouseUp);

    // Prevent the click event if we have resized the column.
    // Fixes https://github.com/mui/mui-x/issues/4777
    doc.addEventListener('click', preventClick, true);
  });
  const handleColumnSeparatorDoubleClick = useEventCallback_useEventCallback((params, event) => {
    if (props.disableAutosize) {
      return;
    }

    // Only handle left clicks
    if (event.button !== 0) {
      return;
    }
    const column = apiRef.current.state.columns.lookup[params.field];
    if (column.resizable === false) {
      return;
    }
    apiRef.current.autosizeColumns((0,esm_extends/* default */.A)({}, props.autosizeOptions, {
      disableColumnVirtualization: false,
      columns: [column.field]
    }));
  });

  /**
   * API METHODS
   */

  const columnVirtualizationDisabled = useColumnVirtualizationDisabled(apiRef);
  const isAutosizingRef = index_js_.useRef(false);
  const autosizeColumns = index_js_.useCallback(async userOptions => {
    const root = apiRef.current.rootElementRef?.current;
    if (!root) {
      return;
    }
    if (isAutosizingRef.current) {
      return;
    }
    isAutosizingRef.current = true;
    const state = gridColumnsStateSelector(apiRef.current.state);
    const options = (0,esm_extends/* default */.A)({}, DEFAULT_GRID_AUTOSIZE_OPTIONS, userOptions, {
      columns: userOptions?.columns ?? state.orderedFields
    });
    options.columns = options.columns.filter(c => state.columnVisibilityModel[c] !== false);
    const columns = options.columns.map(c => apiRef.current.state.columns.lookup[c]);
    try {
      if (!props.disableVirtualization && options.disableColumnVirtualization) {
        apiRef.current.unstable_setColumnVirtualization(false);
        await columnVirtualizationDisabled();
      }
      const widthByField = extractColumnWidths(apiRef, options, columns);
      const newColumns = columns.map(column => (0,esm_extends/* default */.A)({}, column, {
        width: widthByField[column.field],
        computedWidth: widthByField[column.field],
        flex: 0
      }));
      if (options.expand) {
        const visibleColumns = state.orderedFields.map(field => state.lookup[field]).filter(c => state.columnVisibilityModel[c.field] !== false);
        const totalWidth = visibleColumns.reduce((total, column) => total + (widthByField[column.field] ?? column.computedWidth ?? column.width), 0);
        const dimensions = apiRef.current.getRootDimensions();
        const availableWidth = dimensions.viewportInnerSize.width;
        const remainingWidth = availableWidth - totalWidth;
        if (remainingWidth > 0) {
          const widthPerColumn = remainingWidth / (newColumns.length || 1);
          newColumns.forEach(column => {
            column.width += widthPerColumn;
            column.computedWidth += widthPerColumn;
          });
        }
      }
      apiRef.current.updateColumns(newColumns);
      newColumns.forEach((newColumn, index) => {
        if (newColumn.width !== columns[index].width) {
          const width = newColumn.width;
          apiRef.current.publishEvent('columnWidthChange', {
            element: apiRef.current.getColumnHeaderElement(newColumn.field),
            colDef: newColumn,
            width
          });
        }
      });
    } finally {
      if (!props.disableVirtualization) {
        apiRef.current.unstable_setColumnVirtualization(true);
      }
      isAutosizingRef.current = false;
    }
  }, [apiRef, columnVirtualizationDisabled, props.disableVirtualization]);

  /**
   * EFFECTS
   */

  index_js_.useEffect(() => stopListening, [stopListening]);
  useOnMount(() => {
    if (props.autosizeOnMount) {
      Promise.resolve().then(() => {
        apiRef.current.autosizeColumns(props.autosizeOptions);
      });
    }
  });
  useGridNativeEventListener(apiRef, () => apiRef.current.columnHeadersContainerRef?.current, 'touchstart', handleTouchStart, {
    passive: true
  });
  useGridApiMethod(apiRef, {
    autosizeColumns
  }, 'public');
  useGridApiEventHandler(apiRef, 'columnResizeStop', handleResizeStop);
  useGridApiEventHandler(apiRef, 'columnResizeStart', handleResizeStart);
  useGridApiEventHandler(apiRef, 'columnSeparatorMouseDown', handleColumnResizeMouseDown);
  useGridApiEventHandler(apiRef, 'columnSeparatorDoubleClick', handleColumnSeparatorDoubleClick);
  useGridApiOptionHandler(apiRef, 'columnResize', props.onColumnResize);
  useGridApiOptionHandler(apiRef, 'columnWidthChange', props.onColumnWidthChange);
};
function updateProperty(element, property, delta) {
  if (!element) {
    return;
  }
  element.style[property] = `${parseInt(element.style[property], 10) + delta}px`;
}
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningUtils.js
function getUnprocessedRange(testRange, processedRange) {
  if (testRange.firstRowIndex >= processedRange.firstRowIndex && testRange.lastRowIndex <= processedRange.lastRowIndex) {
    return null;
  }
  // Overflowing at the end
  // Example: testRange={ firstRowIndex: 10, lastRowIndex: 20 }, processedRange={ firstRowIndex: 0, lastRowIndex: 15 }
  // Unprocessed Range={ firstRowIndex: 16, lastRowIndex: 20 }
  if (testRange.firstRowIndex >= processedRange.firstRowIndex && testRange.lastRowIndex > processedRange.lastRowIndex) {
    return {
      firstRowIndex: processedRange.lastRowIndex,
      lastRowIndex: testRange.lastRowIndex
    };
  }
  // Overflowing at the beginning
  // Example: testRange={ firstRowIndex: 0, lastRowIndex: 20 }, processedRange={ firstRowIndex: 16, lastRowIndex: 30 }
  // Unprocessed Range={ firstRowIndex: 0, lastRowIndex: 15 }
  if (testRange.firstRowIndex < processedRange.firstRowIndex && testRange.lastRowIndex <= processedRange.lastRowIndex) {
    return {
      firstRowIndex: testRange.firstRowIndex,
      lastRowIndex: processedRange.firstRowIndex - 1
    };
  }
  // TODO: Should return two ranges handle overflowing at both ends ?
  return testRange;
}
function isRowContextInitialized(renderContext) {
  return renderContext.firstRowIndex !== 0 || renderContext.lastRowIndex !== 0;
}
function isRowRangeUpdated(range1, range2) {
  return range1.firstRowIndex !== range2.firstRowIndex || range1.lastRowIndex !== range2.lastRowIndex;
}
const getCellValue = (row, colDef, apiRef) => {
  if (!row) {
    return null;
  }
  let cellValue = row[colDef.field];
  const valueGetter = colDef.rowSpanValueGetter ?? colDef.valueGetter;
  if (valueGetter) {
    cellValue = valueGetter(cellValue, row, colDef, apiRef);
  }
  return cellValue;
};
;// ../node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowSpanning.js













const EMPTY_STATE = {
  spannedCells: {},
  hiddenCells: {},
  hiddenCellOriginMap: {}
};
const EMPTY_RANGE = {
  firstRowIndex: 0,
  lastRowIndex: 0
};
const skippedFields = new Set([GRID_CHECKBOX_SELECTION_FIELD, '__reorder__', GRID_DETAIL_PANEL_TOGGLE_FIELD]);
/**
 * Default number of rows to process during state initialization to avoid flickering.
 * Number `20` is arbitrarily chosen to be large enough to cover most of the cases without
 * compromising performance.
 */
const DEFAULT_ROWS_TO_PROCESS = 20;
const computeRowSpanningState = (apiRef, colDefs, visibleRows, range, rangeToProcess, resetState, processedRange) => {
  const spannedCells = resetState ? {} : (0,esm_extends/* default */.A)({}, apiRef.current.state.rowSpanning.spannedCells);
  const hiddenCells = resetState ? {} : (0,esm_extends/* default */.A)({}, apiRef.current.state.rowSpanning.hiddenCells);
  const hiddenCellOriginMap = resetState ? {} : (0,esm_extends/* default */.A)({}, apiRef.current.state.rowSpanning.hiddenCellOriginMap);
  if (resetState) {
    processedRange = EMPTY_RANGE;
  }
  colDefs.forEach(colDef => {
    if (skippedFields.has(colDef.field)) {
      return;
    }
    for (let index = rangeToProcess.firstRowIndex; index < rangeToProcess.lastRowIndex; index += 1) {
      const row = visibleRows[index];
      if (hiddenCells[row.id]?.[colDef.field]) {
        continue;
      }
      const cellValue = getCellValue(row.model, colDef, apiRef);
      if (cellValue == null) {
        continue;
      }
      let spannedRowId = row.id;
      let spannedRowIndex = index;
      let rowSpan = 0;

      // For first index, also scan in the previous rows to handle the reset state case e.g by sorting
      const backwardsHiddenCells = [];
      if (index === rangeToProcess.firstRowIndex) {
        let prevIndex = index - 1;
        let prevRowEntry = visibleRows[prevIndex];
        while (prevIndex >= range.firstRowIndex && prevRowEntry && getCellValue(prevRowEntry.model, colDef, apiRef) === cellValue) {
          const currentRow = visibleRows[prevIndex + 1];
          if (hiddenCells[currentRow.id]) {
            hiddenCells[currentRow.id][colDef.field] = true;
          } else {
            hiddenCells[currentRow.id] = {
              [colDef.field]: true
            };
          }
          backwardsHiddenCells.push(index);
          rowSpan += 1;
          spannedRowId = prevRowEntry.id;
          spannedRowIndex = prevIndex;
          prevIndex -= 1;
          prevRowEntry = visibleRows[prevIndex];
        }
      }
      backwardsHiddenCells.forEach(hiddenCellIndex => {
        if (hiddenCellOriginMap[hiddenCellIndex]) {
          hiddenCellOriginMap[hiddenCellIndex][colDef.field] = spannedRowIndex;
        } else {
          hiddenCellOriginMap[hiddenCellIndex] = {
            [colDef.field]: spannedRowIndex
          };
        }
      });

      // Scan the next rows
      let relativeIndex = index + 1;
      while (relativeIndex <= range.lastRowIndex && visibleRows[relativeIndex] && getCellValue(visibleRows[relativeIndex].model, colDef, apiRef) === cellValue) {
        const currentRow = visibleRows[relativeIndex];
        if (hiddenCells[currentRow.id]) {
          hiddenCells[currentRow.id][colDef.field] = true;
        } else {
          hiddenCells[currentRow.id] = {
            [colDef.field]: true
          };
        }
        if (hiddenCellOriginMap[relativeIndex]) {
          hiddenCellOriginMap[relativeIndex][colDef.field] = spannedRowIndex;
        } else {
          hiddenCellOriginMap[relativeIndex] = {
            [colDef.field]: spannedRowIndex
          };
        }
        relativeIndex += 1;
        rowSpan += 1;
      }
      if (rowSpan > 0) {
        if (spannedCells[spannedRowId]) {
          spannedCells[spannedRowId][colDef.field] = rowSpan + 1;
        } else {
          spannedCells[spannedRowId] = {
            [colDef.field]: rowSpan + 1
          };
        }
      }
    }
    processedRange = {
      firstRowIndex: Math.min(processedRange.firstRowIndex, rangeToProcess.firstRowIndex),
      lastRowIndex: Math.max(processedRange.lastRowIndex, rangeToProcess.lastRowIndex)
    };
  });
  return {
    spannedCells,
    hiddenCells,
    hiddenCellOriginMap,
    processedRange
  };
};
const getInitialRangeToProcess = (props, apiRef) => {
  const rowCount = gridDataRowIdsSelector(apiRef).length;
  if (props.pagination) {
    const pageSize = gridPageSizeSelector(apiRef);
    let paginationLastRowIndex = DEFAULT_ROWS_TO_PROCESS;
    if (pageSize > 0) {
      paginationLastRowIndex = pageSize - 1;
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(paginationLastRowIndex, rowCount)
    };
  }
  return {
    firstRowIndex: 0,
    lastRowIndex: Math.min(DEFAULT_ROWS_TO_PROCESS, rowCount)
  };
};

/**
 * @requires columnsStateInitializer (method) - should be initialized before
 * @requires rowsStateInitializer (method) - should be initialized before
 * @requires filterStateInitializer (method) - should be initialized before
 */
const rowSpanningStateInitializer = (state, props, apiRef) => {
  if (!props.unstable_rowSpanning) {
    return (0,esm_extends/* default */.A)({}, state, {
      rowSpanning: EMPTY_STATE
    });
  }
  const rowIds = state.rows.dataRowIds || [];
  const orderedFields = state.columns.orderedFields || [];
  const dataRowIdToModelLookup = state.rows.dataRowIdToModelLookup;
  const columnsLookup = state.columns.lookup;
  const isFilteringPending = Boolean(state.filter.filterModel.items.length) || Boolean(state.filter.filterModel.quickFilterValues?.length);
  if (!rowIds.length || !orderedFields.length || !dataRowIdToModelLookup || !columnsLookup || isFilteringPending) {
    return (0,esm_extends/* default */.A)({}, state, {
      rowSpanning: EMPTY_STATE
    });
  }
  const rangeToProcess = getInitialRangeToProcess(props, apiRef);
  const rows = rowIds.map(id => ({
    id,
    model: dataRowIdToModelLookup[id]
  }));
  const colDefs = orderedFields.map(field => columnsLookup[field]);
  const {
    spannedCells,
    hiddenCells,
    hiddenCellOriginMap
  } = computeRowSpanningState(apiRef, colDefs, rows, rangeToProcess, rangeToProcess, true, EMPTY_RANGE);
  return (0,esm_extends/* default */.A)({}, state, {
    rowSpanning: {
      spannedCells,
      hiddenCells,
      hiddenCellOriginMap
    }
  });
};
const useGridRowSpanning = (apiRef, props) => {
  const processedRange = useLazyRef(() => {
    return apiRef.current.state.rowSpanning !== EMPTY_STATE ? getInitialRangeToProcess(props, apiRef) : EMPTY_RANGE;
  });
  const updateRowSpanningState = index_js_.useCallback((renderContext, resetState = false) => {
    const {
      range,
      rows: visibleRows
    } = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    if (range === null || !isRowContextInitialized(renderContext)) {
      return;
    }
    if (resetState) {
      processedRange.current = EMPTY_RANGE;
    }
    const rangeToProcess = getUnprocessedRange({
      firstRowIndex: renderContext.firstRowIndex,
      lastRowIndex: Math.min(renderContext.lastRowIndex, range.lastRowIndex + 1)
    }, processedRange.current);
    if (rangeToProcess === null) {
      return;
    }
    const colDefs = gridVisibleColumnDefinitionsSelector(apiRef);
    const {
      spannedCells,
      hiddenCells,
      hiddenCellOriginMap,
      processedRange: newProcessedRange
    } = computeRowSpanningState(apiRef, colDefs, visibleRows, range, rangeToProcess, resetState, processedRange.current);
    processedRange.current = newProcessedRange;
    const newSpannedCellsCount = Object.keys(spannedCells).length;
    const newHiddenCellsCount = Object.keys(hiddenCells).length;
    const currentSpannedCellsCount = Object.keys(apiRef.current.state.rowSpanning.spannedCells).length;
    const currentHiddenCellsCount = Object.keys(apiRef.current.state.rowSpanning.hiddenCells).length;
    const shouldUpdateState = resetState || newSpannedCellsCount !== currentSpannedCellsCount || newHiddenCellsCount !== currentHiddenCellsCount;
    const hasNoSpannedCells = newSpannedCellsCount === 0 && currentSpannedCellsCount === 0;
    if (!shouldUpdateState || hasNoSpannedCells) {
      return;
    }
    apiRef.current.setState(state => {
      return (0,esm_extends/* default */.A)({}, state, {
        rowSpanning: {
          spannedCells,
          hiddenCells,
          hiddenCellOriginMap
        }
      });
    });
  }, [apiRef, processedRange, props.pagination, props.paginationMode]);

  // Reset events trigger a full re-computation of the row spanning state:
  // - The `unstable_rowSpanning` prop is updated (feature flag)
  // - The filtering is applied
  // - The sorting is applied
  // - The `paginationModel` is updated
  // - The rows are updated
  const resetRowSpanningState = index_js_.useCallback(() => {
    const renderContext = gridRenderContextSelector(apiRef);
    if (!isRowContextInitialized(renderContext)) {
      return;
    }
    updateRowSpanningState(renderContext, true);
  }, [apiRef, updateRowSpanningState]);
  useGridApiEventHandler(apiRef, 'renderedRowsIntervalChange', runIf(props.unstable_rowSpanning, updateRowSpanningState));
  useGridApiEventHandler(apiRef, 'sortedRowsSet', runIf(props.unstable_rowSpanning, resetRowSpanningState));
  useGridApiEventHandler(apiRef, 'paginationModelChange', runIf(props.unstable_rowSpanning, resetRowSpanningState));
  useGridApiEventHandler(apiRef, 'filteredRowsSet', runIf(props.unstable_rowSpanning, resetRowSpanningState));
  useGridApiEventHandler(apiRef, 'columnsChange', runIf(props.unstable_rowSpanning, resetRowSpanningState));
  index_js_.useEffect(() => {
    if (!props.unstable_rowSpanning) {
      if (apiRef.current.state.rowSpanning !== EMPTY_STATE) {
        apiRef.current.setState(state => (0,esm_extends/* default */.A)({}, state, {
          rowSpanning: EMPTY_STATE
        }));
      }
    } else if (apiRef.current.state.rowSpanning === EMPTY_STATE) {
      resetRowSpanningState();
    }
  }, [apiRef, resetRowSpanningState, props.unstable_rowSpanning]);
};
;// ../node_modules/@mui/x-internals/esm/warning/warning.js
const warnedOnceCache = new Set();

// TODO move to @base_ui/internals. Base UI, etc. need this helper.
function warnOnce(message, gravity = 'warning') {
  if (true) {
    return;
  }
  // removed by dead control flow
{}
  // removed by dead control flow
{}
}
function clearWarningsCache() {
  warnedOnceCache.clear();
}
;// ../node_modules/@mui/x-data-grid/hooks/features/listView/useGridListView.js






const listViewStateInitializer = (state, props, apiRef) => (0,esm_extends/* default */.A)({}, state, {
  listViewColumn: props.unstable_listColumn ? (0,esm_extends/* default */.A)({}, props.unstable_listColumn, {
    computedWidth: getListColumnWidth(apiRef)
  }) : undefined
});
function useGridListView(apiRef, props) {
  /*
   * EVENTS
   */
  const updateListColumnWidth = () => {
    apiRef.current.setState(state => {
      if (!state.listViewColumn) {
        return state;
      }
      return (0,esm_extends/* default */.A)({}, state, {
        listViewColumn: (0,esm_extends/* default */.A)({}, state.listViewColumn, {
          computedWidth: getListColumnWidth(apiRef)
        })
      });
    });
  };
  const prevInnerWidth = index_js_.useRef(null);
  const handleGridSizeChange = viewportInnerSize => {
    if (prevInnerWidth.current !== viewportInnerSize.width) {
      prevInnerWidth.current = viewportInnerSize.width;
      updateListColumnWidth();
    }
  };
  useGridApiEventHandler(apiRef, 'viewportInnerSizeChange', handleGridSizeChange);
  useGridApiEventHandler(apiRef, 'columnVisibilityModelChange', updateListColumnWidth);

  /*
   * EFFECTS
   */
  useEnhancedEffect_useEnhancedEffect(() => {
    const listColumn = props.unstable_listColumn;
    if (listColumn) {
      apiRef.current.setState(state => {
        return (0,esm_extends/* default */.A)({}, state, {
          listViewColumn: (0,esm_extends/* default */.A)({}, listColumn, {
            computedWidth: getListColumnWidth(apiRef)
          })
        });
      });
    }
  }, [apiRef, props.unstable_listColumn]);
  index_js_.useEffect(() => {
    if (props.unstable_listView && !props.unstable_listColumn) {
      warnOnce(['MUI X: The `unstable_listColumn` prop must be set if `unstable_listView` is enabled.', 'To fix, pass a column definition to the `unstable_listColumn` prop, e.g. `{ field: "example", renderCell: (params) => <div>{params.row.id}</div> }`.', 'For more details, see https://mui.com/x/react-data-grid/list-view/']);
    }
  }, [props.unstable_listView, props.unstable_listColumn]);
}
function getListColumnWidth(apiRef) {
  return gridDimensionsSelector(apiRef.current.state).viewportInnerSize.width;
}
;// ../node_modules/@mui/x-data-grid/DataGrid/useDataGridComponent.js
































const useDataGridComponent = (inputApiRef, props) => {
  const apiRef = useGridInitialization(inputApiRef, props);

  /**
   * Register all pre-processors called during state initialization here.
   */
  useGridRowSelectionPreProcessors(apiRef, props);
  useGridRowsPreProcessors(apiRef);

  /**
   * Register all state initializers here.
   */
  useGridInitializeState(propsStateInitializer, apiRef, props);
  useGridInitializeState(rowSelectionStateInitializer, apiRef, props);
  useGridInitializeState(columnsStateInitializer, apiRef, props);
  useGridInitializeState(rowsStateInitializer, apiRef, props);
  useGridInitializeState(paginationStateInitializer, apiRef, props);
  useGridInitializeState(editingStateInitializer, apiRef, props);
  useGridInitializeState(focusStateInitializer, apiRef, props);
  useGridInitializeState(sortingStateInitializer, apiRef, props);
  useGridInitializeState(preferencePanelStateInitializer, apiRef, props);
  useGridInitializeState(filterStateInitializer, apiRef, props);
  useGridInitializeState(rowSpanningStateInitializer, apiRef, props);
  useGridInitializeState(densityStateInitializer, apiRef, props);
  useGridInitializeState(columnResizeStateInitializer, apiRef, props);
  useGridInitializeState(columnMenuStateInitializer, apiRef, props);
  useGridInitializeState(columnGroupsStateInitializer, apiRef, props);
  useGridInitializeState(virtualizationStateInitializer, apiRef, props);
  useGridInitializeState(dimensionsStateInitializer, apiRef, props);
  useGridInitializeState(rowsMetaStateInitializer, apiRef, props);
  useGridInitializeState(listViewStateInitializer, apiRef, props);
  useGridKeyboardNavigation(apiRef, props);
  useGridRowSelection(apiRef, props);
  useGridColumns(apiRef, props);
  useGridRows(apiRef, props);
  useGridRowSpanning(apiRef, props);
  useGridParamsApi(apiRef, props);
  useGridColumnSpanning(apiRef);
  useGridColumnGrouping(apiRef, props);
  useGridEditing(apiRef, props);
  useGridFocus(apiRef, props);
  useGridPreferencesPanel(apiRef, props);
  useGridFilter(apiRef, props);
  useGridSorting(apiRef, props);
  useGridDensity(apiRef, props);
  useGridColumnResize(apiRef, props);
  useGridPagination(apiRef, props);
  useGridRowsMeta(apiRef, props);
  useGridScroll(apiRef, props);
  useGridColumnMenu(apiRef);
  useGridCsvExport(apiRef, props);
  useGridPrintExport(apiRef, props);
  useGridClipboard(apiRef, props);
  useGridDimensions(apiRef, props);
  useGridEvents(apiRef, props);
  useGridStatePersistence(apiRef);
  useGridVirtualization(apiRef, props);
  useGridListView(apiRef, props);
  return apiRef;
};
// EXTERNAL MODULE: ../node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(6599);
// EXTERNAL MODULE: ../node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(320);
;// ../node_modules/@mui/x-data-grid/constants/localeTextConstants.js
const GRID_DEFAULT_LOCALE_TEXT = {
  // Root
  noRowsLabel: 'No rows',
  noResultsOverlayLabel: 'No results found.',
  // Density selector toolbar button text
  toolbarDensity: 'Density',
  toolbarDensityLabel: 'Density',
  toolbarDensityCompact: 'Compact',
  toolbarDensityStandard: 'Standard',
  toolbarDensityComfortable: 'Comfortable',
  // Columns selector toolbar button text
  toolbarColumns: 'Columns',
  toolbarColumnsLabel: 'Select columns',
  // Filters toolbar button text
  toolbarFilters: 'Filters',
  toolbarFiltersLabel: 'Show filters',
  toolbarFiltersTooltipHide: 'Hide filters',
  toolbarFiltersTooltipShow: 'Show filters',
  toolbarFiltersTooltipActive: count => count !== 1 ? `${count} active filters` : `${count} active filter`,
  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Search…',
  toolbarQuickFilterLabel: 'Search',
  toolbarQuickFilterDeleteIconLabel: 'Clear',
  // Export selector toolbar button text
  toolbarExport: 'Export',
  toolbarExportLabel: 'Export',
  toolbarExportCSV: 'Download as CSV',
  toolbarExportPrint: 'Print',
  toolbarExportExcel: 'Download as Excel',
  // Columns management text
  columnsManagementSearchTitle: 'Search',
  columnsManagementNoColumns: 'No columns',
  columnsManagementShowHideAllText: 'Show/Hide All',
  columnsManagementReset: 'Reset',
  columnsManagementDeleteIconLabel: 'Clear',
  // Filter panel text
  filterPanelAddFilter: 'Add filter',
  filterPanelRemoveAll: 'Remove all',
  filterPanelDeleteIconLabel: 'Delete',
  filterPanelLogicOperator: 'Logic operator',
  filterPanelOperator: 'Operator',
  filterPanelOperatorAnd: 'And',
  filterPanelOperatorOr: 'Or',
  filterPanelColumns: 'Columns',
  filterPanelInputLabel: 'Value',
  filterPanelInputPlaceholder: 'Filter value',
  // Filter operators text
  filterOperatorContains: 'contains',
  filterOperatorDoesNotContain: 'does not contain',
  filterOperatorEquals: 'equals',
  filterOperatorDoesNotEqual: 'does not equal',
  filterOperatorStartsWith: 'starts with',
  filterOperatorEndsWith: 'ends with',
  filterOperatorIs: 'is',
  filterOperatorNot: 'is not',
  filterOperatorAfter: 'is after',
  filterOperatorOnOrAfter: 'is on or after',
  filterOperatorBefore: 'is before',
  filterOperatorOnOrBefore: 'is on or before',
  filterOperatorIsEmpty: 'is empty',
  filterOperatorIsNotEmpty: 'is not empty',
  filterOperatorIsAnyOf: 'is any of',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',
  // Header filter operators text
  headerFilterOperatorContains: 'Contains',
  headerFilterOperatorDoesNotContain: 'Does not contain',
  headerFilterOperatorEquals: 'Equals',
  headerFilterOperatorDoesNotEqual: 'Does not equal',
  headerFilterOperatorStartsWith: 'Starts with',
  headerFilterOperatorEndsWith: 'Ends with',
  headerFilterOperatorIs: 'Is',
  headerFilterOperatorNot: 'Is not',
  headerFilterOperatorAfter: 'Is after',
  headerFilterOperatorOnOrAfter: 'Is on or after',
  headerFilterOperatorBefore: 'Is before',
  headerFilterOperatorOnOrBefore: 'Is on or before',
  headerFilterOperatorIsEmpty: 'Is empty',
  headerFilterOperatorIsNotEmpty: 'Is not empty',
  headerFilterOperatorIsAnyOf: 'Is any of',
  'headerFilterOperator=': 'Equals',
  'headerFilterOperator!=': 'Not equals',
  'headerFilterOperator>': 'Greater than',
  'headerFilterOperator>=': 'Greater than or equal to',
  'headerFilterOperator<': 'Less than',
  'headerFilterOperator<=': 'Less than or equal to',
  // Filter values text
  filterValueAny: 'any',
  filterValueTrue: 'true',
  filterValueFalse: 'false',
  // Column menu text
  columnMenuLabel: 'Menu',
  columnMenuAriaLabel: columnName => `${columnName} column menu`,
  columnMenuShowColumns: 'Show columns',
  columnMenuManageColumns: 'Manage columns',
  columnMenuFilter: 'Filter',
  columnMenuHideColumn: 'Hide column',
  columnMenuUnsort: 'Unsort',
  columnMenuSortAsc: 'Sort by ASC',
  columnMenuSortDesc: 'Sort by DESC',
  // Column header text
  columnHeaderFiltersTooltipActive: count => count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: 'Show filters',
  columnHeaderSortIconLabel: 'Sort',
  // Rows selected footer text
  footerRowSelected: count => count !== 1 ? `${count.toLocaleString()} rows selected` : `${count.toLocaleString()} row selected`,
  // Total row amount footer text
  footerTotalRows: 'Total Rows:',
  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,
  // Checkbox selection text
  checkboxSelectionHeaderName: 'Checkbox selection',
  checkboxSelectionSelectAllRows: 'Select all rows',
  checkboxSelectionUnselectAllRows: 'Unselect all rows',
  checkboxSelectionSelectRow: 'Select row',
  checkboxSelectionUnselectRow: 'Unselect row',
  // Boolean cell text
  booleanCellTrueLabel: 'yes',
  booleanCellFalseLabel: 'no',
  // Actions cell more text
  actionsCellMore: 'more',
  // Column pinning text
  pinToLeft: 'Pin to left',
  pinToRight: 'Pin to right',
  unpin: 'Unpin',
  // Tree Data
  treeDataGroupingHeaderName: 'Group',
  treeDataExpand: 'see children',
  treeDataCollapse: 'hide children',
  // Grouping columns
  groupingColumnHeaderName: 'Group',
  groupColumn: name => `Group by ${name}`,
  unGroupColumn: name => `Stop grouping by ${name}`,
  // Master/detail
  detailPanelToggle: 'Detail panel toggle',
  expandDetailPanel: 'Expand',
  collapseDetailPanel: 'Collapse',
  // Used core components translation keys
  MuiTablePagination: {},
  // Row reordering text
  rowReorderingHeaderName: 'Row reordering',
  // Aggregation
  aggregationMenuItemHeader: 'Aggregation',
  aggregationFunctionLabelSum: 'sum',
  aggregationFunctionLabelAvg: 'avg',
  aggregationFunctionLabelMin: 'min',
  aggregationFunctionLabelMax: 'max',
  aggregationFunctionLabelSize: 'size'
};
// EXTERNAL MODULE: ../node_modules/@mui/material/Skeleton/Skeleton.js
var Skeleton = __webpack_require__(8151);
;// ../node_modules/@mui/x-data-grid/components/cell/GridSkeletonCell.js


const GridSkeletonCell_excluded = ["field", "type", "align", "width", "height", "empty", "style", "className"];










const CIRCULAR_CONTENT_SIZE = '1.3em';
const CONTENT_HEIGHT = '1.2em';
const DEFAULT_CONTENT_WIDTH_RANGE = [40, 80];
const CONTENT_WIDTH_RANGE_BY_TYPE = {
  number: [40, 60],
  string: [40, 80],
  date: [40, 60],
  dateTime: [60, 80],
  singleSelect: [40, 80]
};
const GridSkeletonCell_useUtilityClasses = ownerState => {
  const {
    align,
    classes,
    empty
  } = ownerState;
  const slots = {
    root: ['cell', 'cellSkeleton', `cell--text${align ? capitalize(align) : 'Left'}`, empty && 'cellEmpty']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const randomNumberGenerator = createRandomNumberGenerator(12345);
function GridSkeletonCell(props) {
  const {
      field,
      type,
      align,
      width,
      height,
      empty = false,
      style,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridSkeletonCell_excluded);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes,
    align,
    empty
  };
  const classes = GridSkeletonCell_useUtilityClasses(ownerState);

  // Memo prevents the non-circular skeleton widths changing to random widths on every render
  const skeletonProps = index_js_.useMemo(() => {
    const isCircularContent = type === 'boolean' || type === 'actions';
    if (isCircularContent) {
      return {
        variant: 'circular',
        width: CIRCULAR_CONTENT_SIZE,
        height: CIRCULAR_CONTENT_SIZE
      };
    }

    // The width of the skeleton is a random number between the min and max values
    // The min and max values are determined by the type of the column
    const [min, max] = type ? CONTENT_WIDTH_RANGE_BY_TYPE[type] ?? DEFAULT_CONTENT_WIDTH_RANGE : DEFAULT_CONTENT_WIDTH_RANGE;
    return {
      variant: 'text',
      width: `${Math.round(randomNumberGenerator(min, max))}%`,
      height: CONTENT_HEIGHT
    };
  }, [type]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", (0,esm_extends/* default */.A)({
    "data-field": field,
    className: (0,clsx/* default */.A)(classes.root, className),
    style: (0,esm_extends/* default */.A)({
      height,
      maxWidth: width,
      minWidth: width
    }, style)
  }, other, {
    children: !empty && /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* default */.A, (0,esm_extends/* default */.A)({}, skeletonProps))
  }));
}
 false ? 0 : void 0;
const GridSkeletonCell_Memoized = fastMemo(GridSkeletonCell);

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridIconButtonContainer.js


const GridIconButtonContainer_excluded = ["className"];








const GridIconButtonContainer_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['iconButtonContainer']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridIconButtonContainerRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'IconButtonContainer',
  overridesResolver: (props, styles) => styles.iconButtonContainer
})(() => ({
  display: 'flex',
  visibility: 'hidden',
  width: 0
}));
const GridIconButtonContainer = forwardRef(function GridIconButtonContainer(props, ref) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridIconButtonContainer_excluded);
  const rootProps = useGridRootProps();
  const classes = GridIconButtonContainer_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridIconButtonContainerRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other, {
    ref: ref
  }));
});
;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderFilterIconButton.js












const GridColumnHeaderFilterIconButton_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    icon: ['filterIcon']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderFilterIconButtonWrapped(props) {
  if (!props.counter) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderFilterIconButton, (0,esm_extends/* default */.A)({}, props));
}
 false ? 0 : void 0;
function GridColumnHeaderFilterIconButton(props) {
  const {
    counter,
    field,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes
  });
  const classes = GridColumnHeaderFilterIconButton_useUtilityClasses(ownerState);
  const labelId = useId();
  const isOpen = useGridSelectorV8(apiRef, gridPreferencePanelSelectorWithLabel, labelId);
  const panelId = useId();
  const toggleFilter = index_js_.useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
    const {
      open,
      openedPanelValue
    } = gridPreferencePanelStateSelector(apiRef.current.state);
    if (open && openedPanelValue === GridPreferencePanelsValue.filters) {
      apiRef.current.hideFilterPanel();
    } else {
      apiRef.current.showFilterPanel(undefined, panelId, labelId);
    }
    if (onClick) {
      onClick(apiRef.current.getColumnHeaderParams(field), event);
    }
  }, [apiRef, field, onClick, panelId, labelId]);
  if (!counter) {
    return null;
  }
  const iconButton = /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
    id: labelId,
    onClick: toggleFilter,
    color: "default",
    "aria-label": apiRef.current.getLocaleText('columnHeaderFiltersLabel'),
    size: "small",
    tabIndex: -1,
    "aria-haspopup": "menu",
    "aria-expanded": isOpen,
    "aria-controls": isOpen ? panelId : undefined
  }, rootProps.slotProps?.baseIconButton, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnFilteredIcon, {
      className: classes.icon,
      fontSize: "small"
    })
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTooltip, (0,esm_extends/* default */.A)({
    title: apiRef.current.getLocaleText('columnHeaderFiltersTooltipActive')(counter),
    enterDelay: 1000
  }, rootProps.slotProps?.baseTooltip, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(GridIconButtonContainer, {
      children: [counter > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseBadge, {
        badgeContent: counter,
        color: "default",
        children: iconButton
      }), counter === 1 && iconButton]
    })
  }));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSortIcon.js


const GridColumnHeaderSortIcon_excluded = ["direction", "index", "sortingOrder", "disabled", "className"];









const GridColumnHeaderSortIcon_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['sortButton'],
    icon: ['sortIcon']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function getIcon(icons, direction, className, sortingOrder) {
  let Icon;
  const iconProps = {};
  if (direction === 'asc') {
    Icon = icons.columnSortedAscendingIcon;
  } else if (direction === 'desc') {
    Icon = icons.columnSortedDescendingIcon;
  } else {
    Icon = icons.columnUnsortedIcon;
    iconProps.sortingOrder = sortingOrder;
  }
  return Icon ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, (0,esm_extends/* default */.A)({
    fontSize: "small",
    className: className
  }, iconProps)) : null;
}
function GridColumnHeaderSortIconRaw(props) {
  const {
      direction,
      index,
      sortingOrder,
      disabled,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnHeaderSortIcon_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes
  });
  const classes = GridColumnHeaderSortIcon_useUtilityClasses(ownerState);
  const iconElement = getIcon(rootProps.slots, direction, classes.icon, sortingOrder);
  if (!iconElement) {
    return null;
  }
  const iconButton = /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
    tabIndex: -1,
    "aria-label": apiRef.current.getLocaleText('columnHeaderSortIconLabel'),
    title: apiRef.current.getLocaleText('columnHeaderSortIconLabel'),
    size: "small",
    disabled: disabled,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, rootProps.slotProps?.baseIconButton, other, {
    children: iconElement
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridIconButtonContainer, {
    children: [index != null && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseBadge, {
      badgeContent: index,
      color: "default",
      overlap: "circular",
      children: iconButton
    }), index == null && iconButton]
  });
}
const GridColumnHeaderSortIcon = /*#__PURE__*/index_js_.memo(GridColumnHeaderSortIconRaw);
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/GridSelectedRowCount.js


const GridSelectedRowCount_excluded = ["className", "selectedRowCount"];










const GridSelectedRowCount_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['selectedRowCount']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridSelectedRowCountRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'SelectedRowCount',
  overridesResolver: (props, styles) => styles.selectedRowCount
})(({
  theme
}) => ({
  alignItems: 'center',
  display: 'flex',
  margin: theme.spacing(0, 2),
  visibility: 'hidden',
  width: 0,
  height: 0,
  [theme.breakpoints.up('sm')]: {
    visibility: 'visible',
    width: 'auto',
    height: 'auto'
  }
}));
const GridSelectedRowCount = forwardRef(function GridSelectedRowCount(props, ref) {
  const {
      className,
      selectedRowCount
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridSelectedRowCount_excluded);
  const apiRef = useGridApiContext();
  const ownerState = useGridRootProps();
  const classes = GridSelectedRowCount_useUtilityClasses(ownerState);
  const rowSelectedText = apiRef.current.getLocaleText('footerRowSelected')(selectedRowCount);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridSelectedRowCountRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    ref: ref,
    children: rowSelectedText
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/containers/GridFooterContainer.js


const GridFooterContainer_excluded = ["className"];









const GridFooterContainer_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['footerContainer', 'withBorderColor']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridFooterContainerRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'FooterContainer',
  overridesResolver: (props, styles) => styles.footerContainer
})({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 52,
  borderTop: '1px solid'
});
const GridFooterContainer = forwardRef(function GridFooterContainer(props, ref) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFooterContainer_excluded);
  const rootProps = useGridRootProps();
  const classes = GridFooterContainer_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridFooterContainerRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other, {
    ref: ref
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/GridFooter.js













const GridFooter = forwardRef(function GridFooter(props, ref) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalTopLevelRowCount = useGridSelector(apiRef, gridTopLevelRowCountSelector);
  const selectedRowCount = useGridSelector(apiRef, selectedGridRowsCountSelector);
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const selectedRowCountElement = !rootProps.hideFooterSelectedRowCount && selectedRowCount > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(GridSelectedRowCount, {
    selectedRowCount: selectedRowCount
  }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {});
  const rowCountElement = !rootProps.hideFooterRowCount && !rootProps.pagination ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.footerRowCount, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.footerRowCount, {
    rowCount: totalTopLevelRowCount,
    visibleRowCount: visibleTopLevelRowCount
  })) : null;
  const paginationElement = rootProps.pagination && !rootProps.hideFooterPagination && rootProps.slots.pagination && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.pagination, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.pagination));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridFooterContainer, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    children: [selectedRowCountElement, rowCountElement, paginationElement]
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/GridRowCount.js


const GridRowCount_excluded = ["className", "rowCount", "visibleRowCount"];










const GridRowCount_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['rowCount']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridRowCountRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'RowCount',
  overridesResolver: (props, styles) => styles.rowCount
})(({
  theme
}) => ({
  alignItems: 'center',
  display: 'flex',
  margin: theme.spacing(0, 2)
}));
const GridRowCount = forwardRef(function GridRowCount(props, ref) {
  const {
      className,
      rowCount,
      visibleRowCount
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridRowCount_excluded);
  const apiRef = useGridApiContext();
  const ownerState = useGridRootProps();
  const classes = GridRowCount_useUtilityClasses(ownerState);
  if (rowCount === 0) {
    return null;
  }
  const text = visibleRowCount < rowCount ? apiRef.current.getLocaleText('footerTotalVisibleRows')(visibleRowCount, rowCount) : rowCount.toLocaleString();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridRowCountRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    ref: ref,
    children: [apiRef.current.getLocaleText('footerTotalRows'), " ", text]
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(2613);
// EXTERNAL MODULE: ../node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(3129);
;// ../node_modules/@mui/x-data-grid/components/containers/GridOverlay.js


const GridOverlay_excluded = ["className"];









const GridOverlay_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['overlay']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridOverlayRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'Overlay',
  overridesResolver: (_, styles) => styles.overlay
})({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--unstable_DataGrid-overlayBackground)'
});
const GridOverlay = forwardRef(function GridOverlay(props, ref) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridOverlay_excluded);
  const rootProps = useGridRootProps();
  const classes = GridOverlay_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlayRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other, {
    ref: ref
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/internals/utils/getPinnedCellOffset.js

const getPinnedCellOffset = (pinnedPosition, computedWidth, columnIndex, columnPositions, columnsTotalWidth, scrollbarWidth) => {
  let pinnedOffset;
  switch (pinnedPosition) {
    case PinnedColumnPosition.LEFT:
      pinnedOffset = columnPositions[columnIndex];
      break;
    case PinnedColumnPosition.RIGHT:
      pinnedOffset = columnsTotalWidth - columnPositions[columnIndex] - computedWidth + scrollbarWidth;
      break;
    default:
      pinnedOffset = undefined;
      break;
  }
  return pinnedOffset;
};
;// ../node_modules/@mui/x-data-grid/utils/cellBorderUtils.js

const shouldCellShowRightBorder = (pinnedPosition, indexInSection, sectionLength, showCellVerticalBorderRootProp, gridHasFiller) => {
  const isSectionLastCell = indexInSection === sectionLength - 1;
  if (pinnedPosition === PinnedColumnPosition.LEFT && isSectionLastCell) {
    return true;
  }
  if (showCellVerticalBorderRootProp) {
    if (pinnedPosition === PinnedColumnPosition.LEFT) {
      return true;
    }
    if (pinnedPosition === PinnedColumnPosition.RIGHT) {
      return !isSectionLastCell;
    }
    // pinnedPosition === undefined, middle section
    return !isSectionLastCell || gridHasFiller;
  }
  return false;
};
const shouldCellShowLeftBorder = (pinnedPosition, indexInSection) => {
  return pinnedPosition === PinnedColumnPosition.RIGHT && indexInSection === 0;
};
;// ../node_modules/@mui/x-data-grid/components/GridScrollbarFillerCell.js




const classes = {
  root: gridClasses.scrollbarFiller,
  header: gridClasses['scrollbarFiller--header'],
  borderTop: gridClasses['scrollbarFiller--borderTop'],
  borderBottom: gridClasses['scrollbarFiller--borderBottom'],
  pinnedRight: gridClasses['scrollbarFiller--pinnedRight']
};
function GridScrollbarFillerCell({
  header,
  borderTop = true,
  borderBottom,
  pinnedRight
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    role: "presentation",
    className: (0,clsx/* default */.A)(classes.root, header && classes.header, borderTop && classes.borderTop, borderBottom && classes.borderBottom, pinnedRight && classes.pinnedRight)
  });
}

;// ../node_modules/@mui/x-data-grid/utils/rtlFlipSide.js

const rtlFlipSide = (position, isRtl) => {
  if (!position) {
    return undefined;
  }
  if (!isRtl) {
    if (position === PinnedColumnPosition.LEFT) {
      return 'left';
    }
    if (position === PinnedColumnPosition.RIGHT) {
      return 'right';
    }
  } else {
    if (position === PinnedColumnPosition.LEFT) {
      return 'right';
    }
    if (position === PinnedColumnPosition.RIGHT) {
      return 'left';
    }
  }
  return undefined;
};
;// ../node_modules/@mui/x-data-grid/internals/utils/attachPinnedStyle.js

function attachPinnedStyle(style, isRtl, pinnedPosition, pinnedOffset) {
  const side = rtlFlipSide(pinnedPosition, isRtl);
  if (!side || pinnedOffset === undefined) {
    return style;
  }
  style[side] = pinnedOffset;
  return style;
}
;// ../node_modules/@mui/x-data-grid/components/GridSkeletonLoadingOverlay.js





















const SkeletonOverlay = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'SkeletonLoadingOverlay',
  overridesResolver: (props, styles) => styles.skeletonLoadingOverlay
})({
  minWidth: '100%',
  width: 'max-content',
  // prevents overflow: clip; cutting off the x axis
  height: '100%',
  overflow: 'clip' // y axis is hidden while the x axis is allowed to overflow
});
const GridSkeletonLoadingOverlay_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['skeletonLoadingOverlay']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const getColIndex = el => parseInt(el.getAttribute('data-colindex'), 10);
const GridSkeletonLoadingOverlay = forwardRef(function GridSkeletonLoadingOverlay(props, forwardedRef) {
  const rootProps = useGridRootProps();
  const {
    slots
  } = rootProps;
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const classes = GridSkeletonLoadingOverlay_useUtilityClasses({
    classes: rootProps.classes
  });
  const ref = index_js_.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);
  const apiRef = useGridApiContext();
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const viewportHeight = dimensions?.viewportInnerSize.height ?? 0;
  const skeletonRowsCount = Math.ceil(viewportHeight / dimensions.rowHeight);
  const totalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const positions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const inViewportCount = index_js_.useMemo(() => positions.filter(value => value <= totalWidth).length, [totalWidth, positions]);
  const allVisibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const columns = index_js_.useMemo(() => allVisibleColumns.slice(0, inViewportCount), [allVisibleColumns, inViewportCount]);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const getPinnedPosition = index_js_.useCallback(field => {
    if (pinnedColumns.left.findIndex(col => col.field === field) !== -1) {
      return PinnedColumnPosition.LEFT;
    }
    if (pinnedColumns.right.findIndex(col => col.field === field) !== -1) {
      return PinnedColumnPosition.RIGHT;
    }
    return undefined;
  }, [pinnedColumns.left, pinnedColumns.right]);
  const children = index_js_.useMemo(() => {
    const array = [];
    for (let i = 0; i < skeletonRowsCount; i += 1) {
      const rowCells = [];
      for (let colIndex = 0; colIndex < columns.length; colIndex += 1) {
        const column = columns[colIndex];
        const pinnedPosition = getPinnedPosition(column.field);
        const isPinnedLeft = pinnedPosition === PinnedColumnPosition.LEFT;
        const isPinnedRight = pinnedPosition === PinnedColumnPosition.RIGHT;
        const pinnedSide = rtlFlipSide(pinnedPosition, isRtl);
        const sectionLength = pinnedSide ? pinnedColumns[pinnedSide].length // pinned section
        : columns.length - pinnedColumns.left.length - pinnedColumns.right.length; // middle section
        const sectionIndex = pinnedSide ? pinnedColumns[pinnedSide].findIndex(col => col.field === column.field) // pinned section
        : colIndex - pinnedColumns.left.length; // middle section
        const scrollbarWidth = dimensions.hasScrollY ? dimensions.scrollbarSize : 0;
        const pinnedStyle = attachPinnedStyle({}, isRtl, pinnedPosition, getPinnedCellOffset(pinnedPosition, column.computedWidth, colIndex, positions, dimensions.columnsTotalWidth, scrollbarWidth));
        const gridHasFiller = dimensions.columnsTotalWidth < dimensions.viewportOuterSize.width;
        const showRightBorder = shouldCellShowRightBorder(pinnedPosition, sectionIndex, sectionLength, rootProps.showCellVerticalBorder, gridHasFiller);
        const showLeftBorder = shouldCellShowLeftBorder(pinnedPosition, sectionIndex);
        const isLastColumn = colIndex === columns.length - 1;
        const isFirstPinnedRight = isPinnedRight && sectionIndex === 0;
        const hasFillerBefore = isFirstPinnedRight && gridHasFiller;
        const hasFillerAfter = isLastColumn && !isFirstPinnedRight && gridHasFiller;
        const expandedWidth = dimensions.viewportOuterSize.width - dimensions.columnsTotalWidth;
        const emptyCellWidth = Math.max(0, expandedWidth);
        const emptyCell = /*#__PURE__*/(0,jsx_runtime.jsx)(slots.skeletonCell, {
          width: emptyCellWidth,
          empty: true
        }, `skeleton-filler-column-${i}`);
        const hasScrollbarFiller = isLastColumn && scrollbarWidth !== 0;
        if (hasFillerBefore) {
          rowCells.push(emptyCell);
        }
        rowCells.push(/*#__PURE__*/(0,jsx_runtime.jsx)(slots.skeletonCell, {
          field: column.field,
          type: column.type,
          align: column.align,
          width: "var(--width)",
          height: dimensions.rowHeight,
          "data-colindex": colIndex,
          className: (0,clsx/* default */.A)(isPinnedLeft && gridClasses['cell--pinnedLeft'], isPinnedRight && gridClasses['cell--pinnedRight'], showRightBorder && gridClasses['cell--withRightBorder'], showLeftBorder && gridClasses['cell--withLeftBorder']),
          style: (0,esm_extends/* default */.A)({
            '--width': `${column.computedWidth}px`
          }, pinnedStyle)
        }, `skeleton-column-${i}-${column.field}`));
        if (hasFillerAfter) {
          rowCells.push(emptyCell);
        }
        if (hasScrollbarFiller) {
          rowCells.push(/*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollbarFillerCell, {
            pinnedRight: pinnedColumns.right.length > 0
          }, `skeleton-scrollbar-filler-${i}`));
        }
      }
      array.push(/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: (0,clsx/* default */.A)(gridClasses.row, gridClasses.rowSkeleton, i === 0 && gridClasses['row--firstVisible']),
        children: rowCells
      }, `skeleton-row-${i}`));
    }
    return array;
  }, [slots, columns, pinnedColumns, skeletonRowsCount, rootProps.showCellVerticalBorder, dimensions, positions, getPinnedPosition, isRtl]);

  // Sync the column resize of the overlay columns with the grid
  const handleColumnResize = params => {
    const {
      colDef,
      width
    } = params;
    const cells = ref.current?.querySelectorAll(`[data-field="${escapeOperandAttributeSelector(colDef.field)}"]`);
    if (!cells) {
      throw new Error('MUI X: Expected skeleton cells to be defined with `data-field` attribute.');
    }
    const resizedColIndex = columns.findIndex(col => col.field === colDef.field);
    const pinnedPosition = getPinnedPosition(colDef.field);
    const isPinnedLeft = pinnedPosition === PinnedColumnPosition.LEFT;
    const isPinnedRight = pinnedPosition === PinnedColumnPosition.RIGHT;
    const currentWidth = getComputedStyle(cells[0]).getPropertyValue('--width');
    const delta = parseInt(currentWidth, 10) - width;
    if (cells) {
      cells.forEach(element => {
        element.style.setProperty('--width', `${width}px`);
      });
    }
    if (isPinnedLeft) {
      const pinnedCells = ref.current?.querySelectorAll(`.${gridClasses['cell--pinnedLeft']}`);
      pinnedCells?.forEach(element => {
        const colIndex = getColIndex(element);
        if (colIndex > resizedColIndex) {
          element.style.left = `${parseInt(getComputedStyle(element).left, 10) - delta}px`;
        }
      });
    }
    if (isPinnedRight) {
      const pinnedCells = ref.current?.querySelectorAll(`.${gridClasses['cell--pinnedRight']}`);
      pinnedCells?.forEach(element => {
        const colIndex = getColIndex(element);
        if (colIndex < resizedColIndex) {
          element.style.right = `${parseInt(getComputedStyle(element).right, 10) + delta}px`;
        }
      });
    }
  };
  useGridApiEventHandler(apiRef, 'columnResize', handleColumnResize);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SkeletonOverlay, (0,esm_extends/* default */.A)({
    className: classes.root
  }, props, {
    ref: handleRef,
    children: children
  }));
});

;// ../node_modules/@mui/x-data-grid/components/GridLoadingOverlay.js


const GridLoadingOverlay_excluded = ["variant", "noRowsVariant", "style"];










const LOADING_VARIANTS = {
  'circular-progress': {
    component: CircularProgress/* default */.A,
    style: {}
  },
  'linear-progress': {
    component: LinearProgress/* default */.A,
    style: {
      display: 'block'
    }
  },
  skeleton: {
    component: GridSkeletonLoadingOverlay,
    style: {
      display: 'block'
    }
  }
};
const GridLoadingOverlay = forwardRef(function GridLoadingOverlay(props, ref) {
  const {
      variant = 'circular-progress',
      noRowsVariant = 'circular-progress',
      style
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridLoadingOverlay_excluded);
  const apiRef = useGridApiContext();
  const rowsCount = useGridSelector(apiRef, gridRowCountSelector);
  const activeVariant = LOADING_VARIANTS[rowsCount === 0 ? noRowsVariant : variant];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlay, (0,esm_extends/* default */.A)({
    style: (0,esm_extends/* default */.A)({}, activeVariant.style, style)
  }, other, {
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(activeVariant.component, {})
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/GridNoRowsOverlay.js







const GridNoRowsOverlay = forwardRef(function GridNoRowsOverlay(props, ref) {
  const apiRef = useGridApiContext();
  const noRowsLabel = apiRef.current.getLocaleText('noRowsLabel');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlay, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    children: noRowsLabel
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/TablePagination/TablePagination.js + 1 modules
var TablePagination = __webpack_require__(6777);
// EXTERNAL MODULE: ../node_modules/@mui/material/TablePagination/tablePaginationClasses.js
var tablePaginationClasses = __webpack_require__(2383);
;// ../node_modules/@mui/x-data-grid/components/GridPagination.js











const GridPaginationRoot = (0,styled/* default */.Ay)(TablePagination/* default */.A)(({
  theme
}) => ({
  maxHeight: 'calc(100% + 1px)',
  // border width
  flexGrow: 1,
  [`& .${tablePaginationClasses/* default */.A.selectLabel}`]: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  [`& .${tablePaginationClasses/* default */.A.input}`]: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline-flex'
    }
  }
}));
const wrapLabelDisplayedRows = (labelDisplayedRows, estimated) => {
  return ({
    from,
    to,
    count,
    page
  }) => labelDisplayedRows({
    from,
    to,
    count,
    page,
    estimated
  });
};
const defaultLabelDisplayedRows = ({
  from,
  to,
  count,
  estimated
}) => {
  if (!estimated) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }
  return `${from}–${to} of ${count !== -1 ? count : `more than ${estimated > to ? estimated : to}`}`;
};

// A mutable version of a readonly array.

const GridPagination = forwardRef(function GridPagination(props, ref) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const rowCount = useGridSelector(apiRef, gridPaginationRowCountSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const {
    paginationMode,
    loading,
    estimatedRowCount
  } = rootProps;
  const computedProps = index_js_.useMemo(() => {
    if (rowCount === -1 && paginationMode === 'server' && loading) {
      return {
        backIconButtonProps: {
          disabled: true
        },
        nextIconButtonProps: {
          disabled: true
        }
      };
    }
    return {};
  }, [loading, paginationMode, rowCount]);
  const lastPage = index_js_.useMemo(() => Math.max(0, pageCount - 1), [pageCount]);
  const computedPage = index_js_.useMemo(() => {
    if (rowCount === -1) {
      return paginationModel.page;
    }
    return paginationModel.page <= lastPage ? paginationModel.page : lastPage;
  }, [lastPage, paginationModel.page, rowCount]);
  const handlePageSizeChange = index_js_.useCallback(event => {
    const pageSize = Number(event.target.value);
    apiRef.current.setPageSize(pageSize);
  }, [apiRef]);
  const handlePageChange = index_js_.useCallback((_, page) => {
    apiRef.current.setPage(page);
  }, [apiRef]);
  const isPageSizeIncludedInPageSizeOptions = pageSize => {
    for (let i = 0; i < rootProps.pageSizeOptions.length; i += 1) {
      const option = rootProps.pageSizeOptions[i];
      if (typeof option === 'number') {
        if (option === pageSize) {
          return true;
        }
      } else if (option.value === pageSize) {
        return true;
      }
    }
    return false;
  };
  if (false) // removed by dead control flow
{}
  const pageSizeOptions = isPageSizeIncludedInPageSizeOptions(paginationModel.pageSize) ? rootProps.pageSizeOptions : [];
  const locales = apiRef.current.getLocaleText('MuiTablePagination');
  const wrappedLabelDisplayedRows = wrapLabelDisplayedRows(locales.labelDisplayedRows || defaultLabelDisplayedRows, estimatedRowCount);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridPaginationRoot, (0,esm_extends/* default */.A)({
    component: "div",
    count: rowCount,
    page: computedPage
    // TODO: Remove the cast once the type is fixed in Material UI and that the min Material UI version
    // for x-data-grid is past the fix.
    // Note that Material UI will not mutate the array, so this is safe.
    ,
    rowsPerPageOptions: pageSizeOptions,
    rowsPerPage: paginationModel.pageSize,
    onPageChange: handlePageChange,
    onRowsPerPageChange: handlePageSizeChange
  }, computedProps, locales, {
    labelDisplayedRows: wrappedLabelDisplayedRows
  }, props, {
    ref: ref
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/panel/GridPanelContent.js


const GridPanelContent_excluded = ["className"];








const GridPanelContent_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['panelContent']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridPanelContentRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'PanelContent',
  overridesResolver: (props, styles) => styles.panelContent
})({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  flex: '1 1',
  maxHeight: 400
});
function GridPanelContent(props) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridPanelContent_excluded);
  const rootProps = useGridRootProps();
  const classes = GridPanelContent_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelContentRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/panel/GridPanelFooter.js


const GridPanelFooter_excluded = ["className"];








const GridPanelFooter_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['panelFooter']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridPanelFooterRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'PanelFooter',
  overridesResolver: (props, styles) => styles.panelFooter
})(({
  theme
}) => ({
  padding: theme.spacing(0.5),
  display: 'flex',
  justifyContent: 'space-between'
}));
function GridPanelFooter(props) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridPanelFooter_excluded);
  const rootProps = useGridRootProps();
  const classes = GridPanelFooter_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelFooterRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other));
}
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
var FocusTrap = __webpack_require__(7800);
;// ../node_modules/@mui/x-data-grid/components/panel/GridPanelWrapper.js


const GridPanelWrapper_excluded = ["className", "slotProps"];










const GridPanelWrapper_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['panelWrapper']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridPanelWrapperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'PanelWrapper',
  overridesResolver: (props, styles) => styles.panelWrapper
})({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  '&:focus': {
    outline: 0
  }
});
const isEnabled = () => true;
const GridPanelWrapper = forwardRef(function GridPanelWrapper(props, ref) {
  const {
      className,
      slotProps = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridPanelWrapper_excluded);
  const rootProps = useGridRootProps();
  const classes = GridPanelWrapper_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FocusTrap/* default */.A, (0,esm_extends/* default */.A)({
    open: true,
    disableEnforceFocus: true,
    isEnabled: isEnabled
  }, slotProps.TrapFocus, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelWrapperRoot, (0,esm_extends/* default */.A)({
      tabIndex: -1,
      className: (0,clsx/* default */.A)(classes.root, className),
      ownerState: rootProps
    }, other, {
      ref: ref
    }))
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterForm.js


const GridFilterForm_excluded = ["item", "hasMultipleFilters", "deleteFilter", "applyFilterChanges", "showMultiFilterOperators", "disableMultiFilterOperator", "applyMultiFilterOperatorChanges", "focusElementRef", "logicOperators", "columnsSort", "filterColumns", "deleteIconProps", "logicOperatorInputProps", "operatorInputProps", "columnInputProps", "valueInputProps", "readOnly", "children"],
  GridFilterForm_excluded2 = ["InputComponentProps"];
















const GridFilterForm_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['filterForm'],
    deleteIcon: ['filterFormDeleteIcon'],
    logicOperatorInput: ['filterFormLogicOperatorInput'],
    columnInput: ['filterFormColumnInput'],
    operatorInput: ['filterFormOperatorInput'],
    valueInput: ['filterFormValueInput']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridFilterFormRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterForm',
  overridesResolver: (props, styles) => styles.filterForm
})(({
  theme
}) => ({
  display: 'flex',
  padding: theme.spacing(1)
}));
const FilterFormDeleteIcon = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormDeleteIcon',
  overridesResolver: (_, styles) => styles.filterFormDeleteIcon
})(({
  theme
}) => ({
  flexShrink: 0,
  justifyContent: 'flex-end',
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.2)
}));
const FilterFormLogicOperatorInput = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormLogicOperatorInput',
  overridesResolver: (_, styles) => styles.filterFormLogicOperatorInput
})({
  minWidth: 55,
  marginRight: 5,
  justifyContent: 'end'
});
const FilterFormColumnInput = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormColumnInput',
  overridesResolver: (_, styles) => styles.filterFormColumnInput
})({
  width: 150
});
const FilterFormOperatorInput = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormOperatorInput',
  overridesResolver: (_, styles) => styles.filterFormOperatorInput
})({
  width: 150
});
const FilterFormValueInput = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'FilterFormValueInput',
  overridesResolver: (_, styles) => styles.filterFormValueInput
})({
  width: 190
});
const getLogicOperatorLocaleKey = logicOperator => {
  switch (logicOperator) {
    case GridLogicOperator.And:
      return 'filterPanelOperatorAnd';
    case GridLogicOperator.Or:
      return 'filterPanelOperatorOr';
    default:
      throw new Error('MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.');
  }
};
const getColumnLabel = col => col.headerName || col.field;
const GridFilterForm_collator = new Intl.Collator();
const GridFilterForm = forwardRef(function GridFilterForm(props, ref) {
  const {
      item,
      hasMultipleFilters,
      deleteFilter,
      applyFilterChanges,
      showMultiFilterOperators,
      disableMultiFilterOperator,
      applyMultiFilterOperatorChanges,
      focusElementRef,
      logicOperators = [GridLogicOperator.And, GridLogicOperator.Or],
      columnsSort,
      filterColumns,
      deleteIconProps = {},
      logicOperatorInputProps = {},
      operatorInputProps = {},
      columnInputProps = {},
      valueInputProps = {},
      readOnly
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterForm_excluded);
  const apiRef = useGridApiContext();
  const columnLookup = useGridSelector(apiRef, gridColumnLookupSelector);
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const columnSelectId = useId();
  const columnSelectLabelId = useId();
  const operatorSelectId = useId();
  const operatorSelectLabelId = useId();
  const rootProps = useGridRootProps();
  const classes = GridFilterForm_useUtilityClasses(rootProps);
  const valueRef = index_js_.useRef(null);
  const filterSelectorRef = index_js_.useRef(null);
  const multiFilterOperator = filterModel.logicOperator ?? GridLogicOperator.And;
  const hasLogicOperatorColumn = hasMultipleFilters && logicOperators.length > 0;
  const baseFormControlProps = rootProps.slotProps?.baseFormControl || {};
  const baseSelectProps = rootProps.slotProps?.baseSelect || {};
  const isBaseSelectNative = baseSelectProps.native ?? false;
  const baseInputLabelProps = rootProps.slotProps?.baseInputLabel || {};
  const baseSelectOptionProps = rootProps.slotProps?.baseSelectOption || {};
  const {
      InputComponentProps
    } = valueInputProps,
    valueInputPropsOther = (0,objectWithoutPropertiesLoose/* default */.A)(valueInputProps, GridFilterForm_excluded2);
  const {
    filteredColumns,
    selectedField
  } = index_js_.useMemo(() => {
    let itemField = item.field;

    // Yields a valid value if the current filter belongs to a column that is not filterable
    const selectedNonFilterableColumn = columnLookup[item.field].filterable === false ? columnLookup[item.field] : null;
    if (selectedNonFilterableColumn) {
      return {
        filteredColumns: [selectedNonFilterableColumn],
        selectedField: itemField
      };
    }
    if (filterColumns === undefined || typeof filterColumns !== 'function') {
      return {
        filteredColumns: filterableColumns,
        selectedField: itemField
      };
    }
    const filteredFields = filterColumns({
      field: item.field,
      columns: filterableColumns,
      currentFilters: filterModel?.items || []
    });
    return {
      filteredColumns: filterableColumns.filter(column => {
        const isFieldIncluded = filteredFields.includes(column.field);
        if (column.field === item.field && !isFieldIncluded) {
          itemField = undefined;
        }
        return isFieldIncluded;
      }),
      selectedField: itemField
    };
  }, [filterColumns, filterModel?.items, filterableColumns, item.field, columnLookup]);
  const sortedFilteredColumns = index_js_.useMemo(() => {
    switch (columnsSort) {
      case 'asc':
        return filteredColumns.sort((a, b) => GridFilterForm_collator.compare(getColumnLabel(a), getColumnLabel(b)));
      case 'desc':
        return filteredColumns.sort((a, b) => -GridFilterForm_collator.compare(getColumnLabel(a), getColumnLabel(b)));
      default:
        return filteredColumns;
    }
  }, [filteredColumns, columnsSort]);
  const currentColumn = item.field ? apiRef.current.getColumn(item.field) : null;
  const currentOperator = index_js_.useMemo(() => {
    if (!item.operator || !currentColumn) {
      return null;
    }
    return currentColumn.filterOperators?.find(operator => operator.value === item.operator);
  }, [item, currentColumn]);
  const changeColumn = index_js_.useCallback(event => {
    const field = event.target.value;
    const column = apiRef.current.getColumn(field);
    if (column.field === currentColumn.field) {
      // column did not change
      return;
    }

    // try to keep the same operator when column change
    const newOperator = column.filterOperators.find(operator => operator.value === item.operator) || column.filterOperators[0];

    // Erase filter value if the input component or filtered column type is modified
    const eraseFilterValue = !newOperator.InputComponent || newOperator.InputComponent !== currentOperator?.InputComponent || column.type !== currentColumn.type;
    let filterValue = eraseFilterValue ? undefined : item.value;

    // Check filter value against the new valueOptions
    if (column.type === 'singleSelect' && filterValue !== undefined) {
      const colDef = column;
      const valueOptions = getValueOptions(colDef);
      if (Array.isArray(filterValue)) {
        filterValue = filterValue.filter(val => {
          return (
            // Only keep values that are in the new value options
            getValueFromValueOptions(val, valueOptions, colDef?.getOptionValue) !== undefined
          );
        });
      } else if (getValueFromValueOptions(item.value, valueOptions, colDef?.getOptionValue) === undefined) {
        // Reset the filter value if it is not in the new value options
        filterValue = undefined;
      }
    }
    applyFilterChanges((0,esm_extends/* default */.A)({}, item, {
      field,
      operator: newOperator.value,
      value: filterValue
    }));
  }, [apiRef, applyFilterChanges, item, currentColumn, currentOperator]);
  const changeOperator = index_js_.useCallback(event => {
    const operator = event.target.value;
    const newOperator = currentColumn?.filterOperators.find(op => op.value === operator);
    const eraseItemValue = !newOperator?.InputComponent || newOperator?.InputComponent !== currentOperator?.InputComponent;
    applyFilterChanges((0,esm_extends/* default */.A)({}, item, {
      operator,
      value: eraseItemValue ? undefined : item.value
    }));
  }, [applyFilterChanges, item, currentColumn, currentOperator]);
  const changeLogicOperator = index_js_.useCallback(event => {
    const logicOperator = event.target.value === GridLogicOperator.And.toString() ? GridLogicOperator.And : GridLogicOperator.Or;
    applyMultiFilterOperatorChanges(logicOperator);
  }, [applyMultiFilterOperatorChanges]);
  const handleDeleteFilter = () => {
    deleteFilter(item);
  };
  index_js_.useImperativeHandle(focusElementRef, () => ({
    focus: () => {
      if (currentOperator?.InputComponent) {
        valueRef?.current?.focus();
      } else {
        filterSelectorRef.current.focus();
      }
    }
  }), [currentOperator]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridFilterFormRoot, (0,esm_extends/* default */.A)({
    className: classes.root,
    "data-id": item.id,
    ownerState: rootProps
  }, other, {
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterFormDeleteIcon, (0,esm_extends/* default */.A)({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, deleteIconProps, {
      className: (0,clsx/* default */.A)(classes.deleteIcon, baseFormControlProps.className, deleteIconProps.className),
      ownerState: rootProps,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
        "aria-label": apiRef.current.getLocaleText('filterPanelDeleteIconLabel'),
        title: apiRef.current.getLocaleText('filterPanelDeleteIconLabel'),
        onClick: handleDeleteFilter,
        size: "small",
        disabled: readOnly
      }, rootProps.slotProps?.baseIconButton, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.filterPanelDeleteIcon, {
          fontSize: "small"
        })
      }))
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(FilterFormLogicOperatorInput, (0,esm_extends/* default */.A)({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, logicOperatorInputProps, {
      sx: [hasLogicOperatorColumn ? {
        display: 'flex'
      } : {
        display: 'none'
      }, showMultiFilterOperators ? {
        visibility: 'visible'
      } : {
        visibility: 'hidden'
      }, baseFormControlProps.sx, logicOperatorInputProps.sx],
      className: (0,clsx/* default */.A)(classes.logicOperatorInput, baseFormControlProps.className, logicOperatorInputProps.className),
      ownerState: rootProps,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
        inputProps: {
          'aria-label': apiRef.current.getLocaleText('filterPanelLogicOperator')
        },
        value: multiFilterOperator ?? '',
        onChange: changeLogicOperator,
        disabled: !!disableMultiFilterOperator || logicOperators.length === 1,
        native: isBaseSelectNative
      }, rootProps.slotProps?.baseSelect, {
        children: logicOperators.map(logicOperator => /*#__PURE__*/(0,index_js_.createElement)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: logicOperator.toString(),
          value: logicOperator.toString()
        }), apiRef.current.getLocaleText(getLogicOperatorLocaleKey(logicOperator))))
      }))
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterFormColumnInput, (0,esm_extends/* default */.A)({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, columnInputProps, {
      className: (0,clsx/* default */.A)(classes.columnInput, baseFormControlProps.className, columnInputProps.className),
      ownerState: rootProps,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseInputLabel, (0,esm_extends/* default */.A)({}, baseInputLabelProps, {
        htmlFor: columnSelectId,
        id: columnSelectLabelId,
        children: apiRef.current.getLocaleText('filterPanelColumns')
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
        labelId: columnSelectLabelId,
        id: columnSelectId,
        label: apiRef.current.getLocaleText('filterPanelColumns'),
        value: selectedField ?? '',
        onChange: changeColumn,
        native: isBaseSelectNative,
        disabled: readOnly
      }, rootProps.slotProps?.baseSelect, {
        children: sortedFilteredColumns.map(col => /*#__PURE__*/(0,index_js_.createElement)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: col.field,
          value: col.field
        }), getColumnLabel(col)))
      }))]
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(FilterFormOperatorInput, (0,esm_extends/* default */.A)({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, operatorInputProps, {
      className: (0,clsx/* default */.A)(classes.operatorInput, baseFormControlProps.className, operatorInputProps.className),
      ownerState: rootProps,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseInputLabel, (0,esm_extends/* default */.A)({}, baseInputLabelProps, {
        htmlFor: operatorSelectId,
        id: operatorSelectLabelId,
        children: apiRef.current.getLocaleText('filterPanelOperator')
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseSelect, (0,esm_extends/* default */.A)({
        labelId: operatorSelectLabelId,
        label: apiRef.current.getLocaleText('filterPanelOperator'),
        id: operatorSelectId,
        value: item.operator,
        onChange: changeOperator,
        native: isBaseSelectNative,
        inputRef: filterSelectorRef,
        disabled: readOnly
      }, rootProps.slotProps?.baseSelect, {
        children: currentColumn?.filterOperators?.map(operator => /*#__PURE__*/(0,index_js_.createElement)(rootProps.slots.baseSelectOption, (0,esm_extends/* default */.A)({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: operator.value,
          value: operator.value
        }), operator.label || apiRef.current.getLocaleText(`filterOperator${capitalize(operator.value)}`)))
      }))]
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(FilterFormValueInput, (0,esm_extends/* default */.A)({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, valueInputPropsOther, {
      className: (0,clsx/* default */.A)(classes.valueInput, baseFormControlProps.className, valueInputPropsOther.className),
      ownerState: rootProps,
      children: currentOperator?.InputComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(currentOperator.InputComponent, (0,esm_extends/* default */.A)({
        apiRef: apiRef,
        item: item,
        applyValue: applyFilterChanges,
        focusElementRef: valueRef,
        disabled: readOnly
      }, currentOperator.InputComponentProps, InputComponentProps), item.field) : null
    }))]
  }));
});
 false ? 0 : void 0;

/**
 * Demos:
 * - [Filtering - overview](https://mui.com/x/react-data-grid/filtering/)
 *
 * API:
 * - [GridFilterForm API](https://mui.com/x/api/data-grid/grid-filter-form/)
 */

;// ../node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterPanel.js


const GridFilterPanel_excluded = ["logicOperators", "columnsSort", "filterFormProps", "getColumnForNewFilter", "children", "disableAddFilterButton", "disableRemoveAllButton"];














const getGridFilter = col => ({
  field: col.field,
  operator: col.filterOperators[0].value,
  id: Math.round(Math.random() * 1e5)
});
const GridFilterPanel = forwardRef(function GridFilterPanel(props, ref) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const filterableColumnsLookup = useGridSelector(apiRef, gridFilterableColumnLookupSelector);
  const lastFilterRef = index_js_.useRef(null);
  const placeholderFilter = index_js_.useRef(null);
  const {
      logicOperators = [GridLogicOperator.And, GridLogicOperator.Or],
      columnsSort,
      filterFormProps,
      getColumnForNewFilter,
      disableAddFilterButton = false,
      disableRemoveAllButton = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridFilterPanel_excluded);
  const applyFilter = apiRef.current.upsertFilterItem;
  const applyFilterLogicOperator = index_js_.useCallback(operator => {
    apiRef.current.setFilterLogicOperator(operator);
  }, [apiRef]);
  const getDefaultFilter = index_js_.useCallback(() => {
    let nextColumnWithOperator;
    if (getColumnForNewFilter && typeof getColumnForNewFilter === 'function') {
      // To allow override the column for default (first) filter
      const nextFieldName = getColumnForNewFilter({
        currentFilters: filterModel?.items || [],
        columns: filterableColumns
      });
      if (nextFieldName === null) {
        return null;
      }
      nextColumnWithOperator = filterableColumns.find(({
        field
      }) => field === nextFieldName);
    } else {
      nextColumnWithOperator = filterableColumns.find(colDef => colDef.filterOperators?.length);
    }
    if (!nextColumnWithOperator) {
      return null;
    }
    return getGridFilter(nextColumnWithOperator);
  }, [filterModel?.items, filterableColumns, getColumnForNewFilter]);
  const getNewFilter = index_js_.useCallback(() => {
    if (getColumnForNewFilter === undefined || typeof getColumnForNewFilter !== 'function') {
      return getDefaultFilter();
    }
    const currentFilters = filterModel.items.length ? filterModel.items : [getDefaultFilter()].filter(Boolean);

    // If no items are there in filterModel, we have to pass defaultFilter
    const nextColumnFieldName = getColumnForNewFilter({
      currentFilters: currentFilters,
      columns: filterableColumns
    });
    if (nextColumnFieldName === null) {
      return null;
    }
    const nextColumnWithOperator = filterableColumns.find(({
      field
    }) => field === nextColumnFieldName);
    if (!nextColumnWithOperator) {
      return null;
    }
    return getGridFilter(nextColumnWithOperator);
  }, [filterModel.items, filterableColumns, getColumnForNewFilter, getDefaultFilter]);
  const items = index_js_.useMemo(() => {
    if (filterModel.items.length) {
      return filterModel.items;
    }
    if (!placeholderFilter.current) {
      placeholderFilter.current = getDefaultFilter();
    }
    return placeholderFilter.current ? [placeholderFilter.current] : [];
  }, [filterModel.items, getDefaultFilter]);
  const hasMultipleFilters = items.length > 1;
  const {
    readOnlyFilters,
    validFilters
  } = index_js_.useMemo(() => items.reduce((acc, item) => {
    if (filterableColumnsLookup[item.field]) {
      acc.validFilters.push(item);
    } else {
      acc.readOnlyFilters.push(item);
    }
    return acc;
  }, {
    readOnlyFilters: [],
    validFilters: []
  }), [items, filterableColumnsLookup]);
  const addNewFilter = index_js_.useCallback(() => {
    const newFilter = getNewFilter();
    if (!newFilter) {
      return;
    }
    apiRef.current.upsertFilterItems([...items, newFilter]);
  }, [apiRef, getNewFilter, items]);
  const deleteFilter = index_js_.useCallback(item => {
    const shouldCloseFilterPanel = validFilters.length === 1;
    apiRef.current.deleteFilterItem(item);
    if (shouldCloseFilterPanel) {
      apiRef.current.hideFilterPanel();
    }
  }, [apiRef, validFilters.length]);
  const handleRemoveAll = index_js_.useCallback(() => {
    if (validFilters.length === 1 && validFilters[0].value === undefined) {
      apiRef.current.deleteFilterItem(validFilters[0]);
      return apiRef.current.hideFilterPanel();
    }
    return apiRef.current.setFilterModel((0,esm_extends/* default */.A)({}, filterModel, {
      items: readOnlyFilters
    }), 'removeAllFilterItems');
  }, [apiRef, readOnlyFilters, filterModel, validFilters]);
  index_js_.useEffect(() => {
    if (logicOperators.length > 0 && filterModel.logicOperator && !logicOperators.includes(filterModel.logicOperator)) {
      applyFilterLogicOperator(logicOperators[0]);
    }
  }, [logicOperators, applyFilterLogicOperator, filterModel.logicOperator]);
  index_js_.useEffect(() => {
    if (validFilters.length > 0) {
      lastFilterRef.current.focus();
    }
  }, [validFilters.length]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridPanelWrapper, (0,esm_extends/* default */.A)({}, other, {
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(GridPanelContent, {
      children: [readOnlyFilters.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(GridFilterForm, (0,esm_extends/* default */.A)({
        item: item,
        applyFilterChanges: applyFilter,
        deleteFilter: deleteFilter,
        hasMultipleFilters: hasMultipleFilters,
        showMultiFilterOperators: index > 0,
        disableMultiFilterOperator: index !== 1,
        applyMultiFilterOperatorChanges: applyFilterLogicOperator,
        focusElementRef: null,
        readOnly: true,
        logicOperators: logicOperators,
        columnsSort: columnsSort
      }, filterFormProps), item.id == null ? index : item.id)), validFilters.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(GridFilterForm, (0,esm_extends/* default */.A)({
        item: item,
        applyFilterChanges: applyFilter,
        deleteFilter: deleteFilter,
        hasMultipleFilters: hasMultipleFilters,
        showMultiFilterOperators: readOnlyFilters.length + index > 0,
        disableMultiFilterOperator: readOnlyFilters.length + index !== 1,
        applyMultiFilterOperatorChanges: applyFilterLogicOperator,
        focusElementRef: index === validFilters.length - 1 ? lastFilterRef : null,
        logicOperators: logicOperators,
        columnsSort: columnsSort
      }, filterFormProps), item.id == null ? index + readOnlyFilters.length : item.id))]
    }), !rootProps.disableMultipleColumnsFiltering && !(disableAddFilterButton && disableRemoveAllButton) ? /*#__PURE__*/(0,jsx_runtime.jsxs)(GridPanelFooter, {
      children: [!disableAddFilterButton ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
        onClick: addNewFilter,
        startIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.filterPanelAddIcon, {})
      }, rootProps.slotProps?.baseButton, {
        children: apiRef.current.getLocaleText('filterPanelAddFilter')
      })) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {}), !disableRemoveAllButton && validFilters.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
        onClick: handleRemoveAll,
        startIcon: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.filterPanelRemoveAllIcon, {})
      }, rootProps.slotProps?.baseButton, {
        children: apiRef.current.getLocaleText('filterPanelRemoveAll')
      })) : null]
    }) : null]
  }));
});
 false ? 0 : void 0;

/**
 * Demos:
 * - [Filtering - overview](https://mui.com/x/react-data-grid/filtering/)
 *
 * API:
 * - [GridFilterPanel API](https://mui.com/x/api/data-grid/grid-filter-panel/)
 */

;// ../node_modules/@mui/x-data-grid/components/panel/GridColumnsPanel.js






function GridColumnsPanel(props) {
  const rootProps = useGridRootProps();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelWrapper, (0,esm_extends/* default */.A)({}, props, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnsManagement, (0,esm_extends/* default */.A)({}, rootProps.slotProps?.columnsManagement))
  }));
}
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(4971);
// EXTERNAL MODULE: ../node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(1359);
// EXTERNAL MODULE: ../node_modules/@mui/material/InputBase/inputBaseClasses.js
var inputBaseClasses = __webpack_require__(5931);
;// ../node_modules/@mui/x-data-grid/components/columnsManagement/utils.js
const checkColumnVisibilityModelsSame = (a, b) => {
  // Filter `false` values only, as `true` and not having a key are the same
  const aFalseValues = new Set(Object.keys(a).filter(key => a[key] === false));
  const bFalseValues = new Set(Object.keys(b).filter(key => b[key] === false));
  if (aFalseValues.size !== bFalseValues.size) {
    return false;
  }
  let result = true;
  aFalseValues.forEach(key => {
    if (!bFalseValues.has(key)) {
      result = false;
    }
  });
  return result;
};
const defaultSearchPredicate = (column, searchValue) => (column.headerName || column.field).toLowerCase().indexOf(searchValue) > -1;
;// ../node_modules/@mui/x-data-grid/components/columnsManagement/GridColumnsManagement.js

/* eslint-disable @typescript-eslint/no-use-before-define */















const GridColumnsManagement_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['columnsManagement'],
    header: ['columnsManagementHeader'],
    searchInput: ['columnsManagementSearchInput'],
    footer: ['columnsManagementFooter'],
    row: ['columnsManagementRow']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridColumnsManagement_collator = new Intl.Collator();
function GridColumnsManagement(props) {
  const apiRef = useGridApiContext();
  const searchInputRef = index_js_.useRef(null);
  const columns = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const initialColumnVisibilityModel = useLazyRef(() => gridColumnVisibilityModelSelector(apiRef)).current;
  const columnVisibilityModel = useGridSelector(apiRef, gridColumnVisibilityModelSelector);
  const rootProps = useGridRootProps();
  const [searchValue, setSearchValue] = index_js_.useState('');
  const classes = GridColumnsManagement_useUtilityClasses(rootProps);
  const {
    sort,
    searchPredicate = defaultSearchPredicate,
    autoFocusSearchField = true,
    disableShowHideToggle = false,
    disableResetButton = false,
    toggleAllMode = 'all',
    getTogglableColumns,
    searchInputProps
  } = props;
  const isResetDisabled = index_js_.useMemo(() => checkColumnVisibilityModelsSame(columnVisibilityModel, initialColumnVisibilityModel), [columnVisibilityModel, initialColumnVisibilityModel]);
  const sortedColumns = index_js_.useMemo(() => {
    switch (sort) {
      case 'asc':
        return [...columns].sort((a, b) => GridColumnsManagement_collator.compare(a.headerName || a.field, b.headerName || b.field));
      case 'desc':
        return [...columns].sort((a, b) => -GridColumnsManagement_collator.compare(a.headerName || a.field, b.headerName || b.field));
      default:
        return columns;
    }
  }, [columns, sort]);
  const toggleColumn = event => {
    const {
      name: field
    } = event.target;
    apiRef.current.setColumnVisibility(field, columnVisibilityModel[field] === false);
  };
  const currentColumns = index_js_.useMemo(() => {
    const togglableColumns = getTogglableColumns ? getTogglableColumns(sortedColumns) : null;
    const togglableSortedColumns = togglableColumns ? sortedColumns.filter(({
      field
    }) => togglableColumns.includes(field)) : sortedColumns;
    if (!searchValue) {
      return togglableSortedColumns;
    }
    return togglableSortedColumns.filter(column => searchPredicate(column, searchValue.toLowerCase()));
  }, [sortedColumns, searchValue, searchPredicate, getTogglableColumns]);
  const toggleAllColumns = index_js_.useCallback(isVisible => {
    const currentModel = gridColumnVisibilityModelSelector(apiRef);
    const newModel = (0,esm_extends/* default */.A)({}, currentModel);
    const togglableColumns = getTogglableColumns ? getTogglableColumns(columns) : null;
    (toggleAllMode === 'filteredOnly' ? currentColumns : columns).forEach(col => {
      if (col.hideable && (togglableColumns == null || togglableColumns.includes(col.field))) {
        if (isVisible) {
          // delete the key from the model instead of setting it to `true`
          delete newModel[col.field];
        } else {
          newModel[col.field] = false;
        }
      }
    });
    return apiRef.current.setColumnVisibilityModel(newModel);
  }, [apiRef, columns, getTogglableColumns, toggleAllMode, currentColumns]);
  const handleSearchValueChange = index_js_.useCallback(event => {
    setSearchValue(event.target.value);
  }, []);
  const hideableColumns = index_js_.useMemo(() => currentColumns.filter(col => col.hideable), [currentColumns]);
  const allHideableColumnsVisible = index_js_.useMemo(() => hideableColumns.every(column => columnVisibilityModel[column.field] == null || columnVisibilityModel[column.field] !== false), [columnVisibilityModel, hideableColumns]);
  const allHideableColumnsHidden = index_js_.useMemo(() => hideableColumns.every(column => columnVisibilityModel[column.field] === false), [columnVisibilityModel, hideableColumns]);
  const firstSwitchRef = index_js_.useRef(null);
  index_js_.useEffect(() => {
    if (autoFocusSearchField) {
      searchInputRef.current.focus();
    } else if (firstSwitchRef.current && typeof firstSwitchRef.current.focus === 'function') {
      firstSwitchRef.current.focus();
    }
  }, [autoFocusSearchField]);
  let firstHideableColumnFound = false;
  const isFirstHideableColumn = column => {
    if (firstHideableColumnFound === false && column.hideable !== false) {
      firstHideableColumnFound = true;
      return true;
    }
    return false;
  };
  const handleSearchReset = index_js_.useCallback(() => {
    setSearchValue('');
    searchInputRef.current.focus();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnsManagementHeader, {
      className: classes.header,
      ownerState: rootProps,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SearchInput, (0,esm_extends/* default */.A)({
        as: rootProps.slots.baseTextField,
        ownerState: rootProps,
        placeholder: apiRef.current.getLocaleText('columnsManagementSearchTitle'),
        inputRef: searchInputRef,
        className: classes.searchInput,
        value: searchValue,
        onChange: handleSearchValueChange,
        variant: "outlined",
        size: "small",
        type: "search",
        InputProps: {
          startAdornment: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseInputAdornment, {
            position: "start",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.quickFilterIcon, {})
          }),
          endAdornment: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
            "aria-label": apiRef.current.getLocaleText('columnsManagementDeleteIconLabel'),
            size: "small",
            sx: [searchValue ? {
              visibility: 'visible'
            } : {
              visibility: 'hidden'
            }],
            tabIndex: -1,
            onClick: handleSearchReset
          }, rootProps.slotProps?.baseIconButton, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.quickFilterClearIcon, {
              fontSize: "small"
            })
          }))
        },
        inputProps: {
          'aria-label': apiRef.current.getLocaleText('columnsManagementSearchTitle')
        },
        autoComplete: "off",
        fullWidth: true
      }, rootProps.slotProps?.baseTextField, searchInputProps))
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(GridColumnsManagementBody, {
      className: classes.root,
      ownerState: rootProps,
      children: [currentColumns.map(column => /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
        className: classes.row,
        control: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseCheckbox, (0,esm_extends/* default */.A)({
          disabled: column.hideable === false,
          checked: columnVisibilityModel[column.field] !== false,
          onClick: toggleColumn,
          name: column.field,
          sx: {
            p: 0.5
          },
          inputRef: isFirstHideableColumn(column) ? firstSwitchRef : undefined
        }, rootProps.slotProps?.baseCheckbox)),
        label: column.headerName || column.field
      }, column.field)), currentColumns.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnsManagementEmptyText, {
        ownerState: rootProps,
        children: apiRef.current.getLocaleText('columnsManagementNoColumns')
      })]
    }), (!disableShowHideToggle || !disableResetButton) && currentColumns.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(GridColumnsManagementFooter, {
      ownerState: rootProps,
      className: classes.footer,
      children: [!disableShowHideToggle ? /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.A, {
        control: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseCheckbox, (0,esm_extends/* default */.A)({
          disabled: hideableColumns.length === 0,
          checked: allHideableColumnsVisible,
          indeterminate: !allHideableColumnsVisible && !allHideableColumnsHidden,
          onClick: () => toggleAllColumns(!allHideableColumnsVisible),
          name: apiRef.current.getLocaleText('columnsManagementShowHideAllText'),
          sx: {
            p: 0.5
          }
        }, rootProps.slotProps?.baseCheckbox)),
        label: apiRef.current.getLocaleText('columnsManagementShowHideAllText')
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {}), !disableResetButton ? /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseButton, (0,esm_extends/* default */.A)({
        onClick: () => apiRef.current.setColumnVisibilityModel(initialColumnVisibilityModel),
        disabled: isResetDisabled
      }, rootProps.slotProps?.baseButton, {
        children: apiRef.current.getLocaleText('columnsManagementReset')
      })) : null]
    }) : null]
  });
}
 false ? 0 : void 0;
const GridColumnsManagementBody = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnsManagement',
  overridesResolver: (props, styles) => styles.columnsManagement
})(({
  theme
}) => ({
  padding: theme.spacing(0, 3, 1.5),
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  flex: '1 1',
  maxHeight: 400,
  alignItems: 'flex-start'
}));
const GridColumnsManagementHeader = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnsManagementHeader',
  overridesResolver: (props, styles) => styles.columnsManagementHeader
})(({
  theme
}) => ({
  padding: theme.spacing(1.5, 3)
}));
const SearchInput = (0,styled/* default */.Ay)(TextField/* default */.A, {
  name: 'MuiDataGrid',
  slot: 'ColumnsManagementSearchInput',
  overridesResolver: (props, styles) => styles.columnsManagementSearchInput
})(({
  theme
}) => ({
  [`& .${inputBaseClasses/* default */.A.root}`]: {
    padding: theme.spacing(0, 1.5, 0, 1.5)
  },
  [`& .${inputBaseClasses/* default */.A.input}::-webkit-search-decoration,
  & .${inputBaseClasses/* default */.A.input}::-webkit-search-cancel-button,
  & .${inputBaseClasses/* default */.A.input}::-webkit-search-results-button,
  & .${inputBaseClasses/* default */.A.input}::-webkit-search-results-decoration`]: {
    /* clears the 'X' icon from Chrome */
    display: 'none'
  }
}));
const GridColumnsManagementFooter = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnsManagementFooter',
  overridesResolver: (props, styles) => styles.columnsManagementFooter
})(({
  theme
}) => ({
  padding: theme.spacing(0.5, 1, 0.5, 3),
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.divider}`
}));
const GridColumnsManagementEmptyText = (0,styled/* default */.Ay)('div')(({
  theme
}) => ({
  padding: theme.spacing(0.5, 0),
  color: theme.palette.grey[500]
}));

;// ../node_modules/@mui/x-data-grid/components/panel/GridPanel.js


const GridPanel_excluded = ["children", "className", "classes"];












const gridPanelClasses = generateUtilityClasses('MuiDataGrid', ['panel', 'paper']);
const GridPanelRoot = (0,styled/* default */.Ay)(Popper/* default */.A, {
  name: 'MuiDataGrid',
  slot: 'Panel',
  overridesResolver: (props, styles) => styles.panel
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const GridPaperRoot = (0,styled/* default */.Ay)(Paper/* default */.A, {
  name: 'MuiDataGrid',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minWidth: 300,
  maxHeight: 450,
  display: 'flex',
  maxWidth: `calc(100vw - ${theme.spacing(0.5)})`,
  overflow: 'auto'
}));
const GridPanel = forwardRef((props, ref) => {
  const {
      children,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridPanel_excluded);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes = gridPanelClasses;
  const [isPlaced, setIsPlaced] = index_js_.useState(false);
  const handleClickAway = index_js_.useCallback(() => {
    apiRef.current.hidePreferences();
  }, [apiRef]);
  const handleKeyDown = index_js_.useCallback(event => {
    if (event.key === 'Escape') {
      apiRef.current.hidePreferences();
    }
  }, [apiRef]);
  const modifiers = index_js_.useMemo(() => [{
    name: 'flip',
    enabled: true,
    options: {
      rootBoundary: 'document'
    }
  }, {
    name: 'isPlaced',
    enabled: true,
    phase: 'main',
    fn: () => {
      setIsPlaced(true);
    },
    effect: () => () => {
      setIsPlaced(false);
    }
  }], []);
  const [anchorEl, setAnchorEl] = index_js_.useState(null);
  index_js_.useEffect(() => {
    const panelAnchor = apiRef.current.rootElementRef?.current?.querySelector('[data-id="gridPanelAnchor"]');
    if (panelAnchor) {
      setAnchorEl(panelAnchor);
    }
  }, [apiRef]);
  if (!anchorEl) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridPanelRoot, (0,esm_extends/* default */.A)({
    placement: "bottom-start",
    className: (0,clsx/* default */.A)(classes.panel, className),
    ownerState: rootProps,
    anchorEl: anchorEl,
    modifiers: modifiers
  }, other, {
    ref: ref,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ClickAwayListener/* ClickAwayListener */.x, {
      mouseEvent: "onPointerUp",
      touchEvent: false,
      onClickAway: handleClickAway,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridPaperRoot, {
        className: classes.paper,
        ownerState: rootProps,
        elevation: 8,
        onKeyDown: handleKeyDown,
        children: isPlaced && children
      })
    })
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-internals/esm/isObjectEmpty/isObjectEmpty.js
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}
;// ../node_modules/@mui/x-data-grid/utils/composeGridClasses.js


function composeGridClasses(classes, slots) {
  return composeClasses(slots, getDataGridUtilityClass, classes);
}
;// ../node_modules/@mui/x-data-grid/components/GridRow.js
'use client';



const GridRow_excluded = ["selected", "rowId", "row", "index", "style", "rowHeight", "className", "visibleColumns", "pinnedColumns", "offsetLeft", "columnsTotalWidth", "firstColumnIndex", "lastColumnIndex", "focusedColumnIndex", "isFirstVisible", "isLastVisible", "isNotVisible", "showBottomBorder", "scrollbarWidth", "gridHasFiller", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver"];




























const isRowReorderingEnabledSelector = createSelectorV8(gridEditRowsStateSelector, (editRows, rowReordering) => {
  if (!rowReordering) {
    return false;
  }
  const isEditingRows = !isObjectEmpty(editRows);
  return !isEditingRows;
});
const GridRow = forwardRef(function GridRow(props, refProp) {
  const {
      selected,
      rowId,
      row,
      index,
      style: styleProp,
      rowHeight,
      className,
      visibleColumns,
      pinnedColumns,
      offsetLeft,
      columnsTotalWidth,
      firstColumnIndex,
      lastColumnIndex,
      focusedColumnIndex,
      isFirstVisible,
      isLastVisible,
      isNotVisible,
      showBottomBorder,
      scrollbarWidth,
      gridHasFiller,
      onClick,
      onDoubleClick,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      onMouseOver
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridRow_excluded);
  const apiRef = useGridPrivateApiContext();
  const configuration = useGridConfiguration();
  const ref = index_js_.useRef(null);
  const rootProps = useGridRootProps();
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const treeDepth = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector);
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const rowReordering = rootProps.rowReordering;
  const isRowReorderingEnabled = useGridSelectorV8(apiRef, isRowReorderingEnabledSelector, rowReordering);
  const handleRef = useForkRef(ref, refProp);
  const rowNode = apiRef.current.getRowNode(rowId);
  const editing = useGridSelectorV8(apiRef, gridRowIsEditingSelector, {
    rowId,
    editMode: rootProps.editMode
  });
  const editable = rootProps.editMode === GridEditModes.Row;
  const hasFocusCell = focusedColumnIndex !== undefined;
  const hasVirtualFocusCellLeft = hasFocusCell && focusedColumnIndex >= pinnedColumns.left.length && focusedColumnIndex < firstColumnIndex;
  const hasVirtualFocusCellRight = hasFocusCell && focusedColumnIndex < visibleColumns.length - pinnedColumns.right.length && focusedColumnIndex >= lastColumnIndex;
  const classes = composeGridClasses(rootProps.classes, {
    root: ['row', selected && 'selected', editable && 'row--editable', editing && 'row--editing', isFirstVisible && 'row--firstVisible', isLastVisible && 'row--lastVisible', showBottomBorder && 'row--borderBottom', rowHeight === 'auto' && 'row--dynamicHeight']
  });
  const getRowAriaAttributes = configuration.hooks.useGridRowAriaAttributes();
  index_js_.useLayoutEffect(() => {
    if (currentPage.range) {
      const rowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(rowId);
      // Pinned rows are not part of the visible rows
      if (rowIndex !== undefined) {
        apiRef.current.unstable_setLastMeasuredRowIndex(rowIndex);
      }
    }
    if (ref.current && rowHeight === 'auto') {
      return apiRef.current.observeRowHeight(ref.current, rowId);
    }
    return undefined;
  }, [apiRef, currentPage.range, rowHeight, rowId]);
  const publish = index_js_.useCallback((eventName, propHandler) => event => {
    // Ignore portal
    if (isEventTargetInPortal(event)) {
      return;
    }

    // The row might have been deleted
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getRowParams(rowId), event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, rowId]);
  const publishClick = index_js_.useCallback(event => {
    const cell = findParentElementFromClassName(event.target, gridClasses.cell);
    const field = cell?.getAttribute('data-field');

    // Check if the field is available because the cell that fills the empty
    // space of the row has no field.
    if (field) {
      // User clicked in the checkbox added by checkboxSelection
      if (field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
        return;
      }

      // User opened a detail panel
      if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
        return;
      }

      // User reorders a row
      if (field === '__reorder__') {
        return;
      }

      // User is editing a cell
      if (apiRef.current.getCellMode(rowId, field) === GridCellModes.Edit) {
        return;
      }

      // User clicked a button from the "actions" column type
      const column = apiRef.current.getColumn(field);
      if (column?.type === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    publish('rowClick', onClick)(event);
  }, [apiRef, onClick, publish, rowId]);
  const {
    slots,
    slotProps,
    disableColumnReorder
  } = rootProps;
  const heightEntry = useGridSelector(apiRef, () => (0,esm_extends/* default */.A)({}, apiRef.current.getRowHeightEntry(rowId)), objectShallowCompare);
  const style = index_js_.useMemo(() => {
    if (isNotVisible) {
      return {
        opacity: 0,
        width: 0,
        height: 0
      };
    }
    const rowStyle = (0,esm_extends/* default */.A)({}, styleProp, {
      maxHeight: rowHeight === 'auto' ? 'none' : rowHeight,
      // max-height doesn't support "auto"
      minHeight: rowHeight,
      '--height': typeof rowHeight === 'number' ? `${rowHeight}px` : rowHeight
    });
    if (heightEntry.spacingTop) {
      const property = rootProps.rowSpacingType === 'border' ? 'borderTopWidth' : 'marginTop';
      rowStyle[property] = heightEntry.spacingTop;
    }
    if (heightEntry.spacingBottom) {
      const property = rootProps.rowSpacingType === 'border' ? 'borderBottomWidth' : 'marginBottom';
      let propertyValue = rowStyle[property];
      // avoid overriding existing value
      if (typeof propertyValue !== 'number') {
        propertyValue = parseInt(propertyValue || '0', 10);
      }
      propertyValue += heightEntry.spacingBottom;
      rowStyle[property] = propertyValue;
    }
    return rowStyle;
  }, [isNotVisible, rowHeight, styleProp, heightEntry, rootProps.rowSpacingType]);
  const rowClassNames = apiRef.current.unstable_applyPipeProcessors('rowClassName', [], rowId);
  const ariaAttributes = getRowAriaAttributes(rowNode, index);
  if (typeof rootProps.getRowClassName === 'function') {
    const indexRelativeToCurrentPage = index - (currentPage.range?.firstRowIndex || 0);
    const rowParams = (0,esm_extends/* default */.A)({}, apiRef.current.getRowParams(rowId), {
      isFirstVisible: indexRelativeToCurrentPage === 0,
      isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
      indexRelativeToCurrentPage
    });
    rowClassNames.push(rootProps.getRowClassName(rowParams));
  }
  const getCell = (column, indexInSection, indexRelativeToAllColumns, sectionLength, pinnedPosition = PinnedColumnPosition.NONE) => {
    const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, indexRelativeToAllColumns);
    if (cellColSpanInfo?.spannedByColSpan) {
      return null;
    }
    const width = cellColSpanInfo?.cellProps.width ?? column.computedWidth;
    const colSpan = cellColSpanInfo?.cellProps.colSpan ?? 1;
    const pinnedOffset = getPinnedCellOffset(pinnedPosition, column.computedWidth, indexRelativeToAllColumns, columnPositions, columnsTotalWidth, scrollbarWidth);
    if (rowNode.type === 'skeletonRow') {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(slots.skeletonCell, {
        type: column.type,
        width: width,
        height: rowHeight,
        field: column.field,
        align: column.align
      }, column.field);
    }

    // when the cell is a reorder cell we are not allowing to reorder the col
    // fixes https://github.com/mui/mui-x/issues/11126
    const isReorderCell = column.field === '__reorder__';
    const canReorderColumn = !(disableColumnReorder || column.disableReorder);
    const canReorderRow = isRowReorderingEnabled && !sortModel.length && treeDepth <= 1;
    const disableDragEvents = !(canReorderColumn || isReorderCell && canReorderRow);
    const cellIsNotVisible = pinnedPosition === PinnedColumnPosition.VIRTUAL;
    const showLeftBorder = shouldCellShowLeftBorder(pinnedPosition, indexInSection);
    const showRightBorder = shouldCellShowRightBorder(pinnedPosition, indexInSection, sectionLength, rootProps.showCellVerticalBorder, gridHasFiller);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(slots.cell, (0,esm_extends/* default */.A)({
      column: column,
      width: width,
      rowId: rowId,
      align: column.align || 'left',
      colIndex: indexRelativeToAllColumns,
      colSpan: colSpan,
      disableDragEvents: disableDragEvents,
      isNotVisible: cellIsNotVisible,
      pinnedOffset: pinnedOffset,
      pinnedPosition: pinnedPosition,
      showLeftBorder: showLeftBorder,
      showRightBorder: showRightBorder,
      row: row,
      rowNode: rowNode
    }, slotProps?.cell), column.field);
  };
  const leftCells = pinnedColumns.left.map((column, i) => {
    const indexRelativeToAllColumns = i;
    return getCell(column, i, indexRelativeToAllColumns, pinnedColumns.left.length, PinnedColumnPosition.LEFT);
  });
  const rightCells = pinnedColumns.right.map((column, i) => {
    const indexRelativeToAllColumns = visibleColumns.length - pinnedColumns.right.length + i;
    return getCell(column, i, indexRelativeToAllColumns, pinnedColumns.right.length, PinnedColumnPosition.RIGHT);
  });
  const middleColumnsLength = visibleColumns.length - pinnedColumns.left.length - pinnedColumns.right.length;
  const cells = [];
  if (hasVirtualFocusCellLeft) {
    cells.push(getCell(visibleColumns[focusedColumnIndex], focusedColumnIndex - pinnedColumns.left.length, focusedColumnIndex, middleColumnsLength, PinnedColumnPosition.VIRTUAL));
  }
  for (let i = firstColumnIndex; i < lastColumnIndex; i += 1) {
    const column = visibleColumns[i];
    const indexInSection = i - pinnedColumns.left.length;
    if (!column) {
      continue;
    }
    cells.push(getCell(column, indexInSection, i, middleColumnsLength));
  }
  if (hasVirtualFocusCellRight) {
    cells.push(getCell(visibleColumns[focusedColumnIndex], focusedColumnIndex - pinnedColumns.left.length, focusedColumnIndex, middleColumnsLength, PinnedColumnPosition.VIRTUAL));
  }
  const eventHandlers = row ? {
    onClick: publishClick,
    onDoubleClick: publish('rowDoubleClick', onDoubleClick),
    onMouseEnter: publish('rowMouseEnter', onMouseEnter),
    onMouseLeave: publish('rowMouseLeave', onMouseLeave),
    onMouseOut: publish('rowMouseOut', onMouseOut),
    onMouseOver: publish('rowMouseOver', onMouseOver)
  } : null;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", (0,esm_extends/* default */.A)({
    "data-id": rowId,
    "data-rowindex": index,
    role: "row",
    className: (0,clsx/* default */.A)(...rowClassNames, classes.root, className),
    style: style
  }, ariaAttributes, eventHandlers, other, {
    ref: handleRef,
    children: [leftCells, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      role: "presentation",
      className: gridClasses.cellOffsetLeft,
      style: {
        width: offsetLeft
      }
    }), cells, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      role: "presentation",
      className: (0,clsx/* default */.A)(gridClasses.cell, gridClasses.cellEmpty)
    }), rightCells, scrollbarWidth !== 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollbarFillerCell, {
      pinnedRight: pinnedColumns.right.length > 0,
      borderTop: !isFirstVisible
    })]
  }));
});
 false ? 0 : void 0;
const MemoizedGridRow = fastMemo(GridRow);

;// ../node_modules/@mui/x-data-grid/utils/doesSupportPreventScroll.js
// Based on https://stackoverflow.com/a/59518678
let cachedSupportsPreventScroll;
function doesSupportPreventScroll() {
  if (cachedSupportsPreventScroll === undefined) {
    document.createElement('div').focus({
      get preventScroll() {
        cachedSupportsPreventScroll = true;
        return false;
      }
    });
  }
  return cachedSupportsPreventScroll;
}
;// ../node_modules/@mui/x-data-grid/components/cell/GridCell.js


const GridCell_excluded = ["column", "row", "rowId", "rowNode", "align", "children", "colIndex", "width", "className", "style", "colSpan", "disableDragEvents", "isNotVisible", "pinnedOffset", "pinnedPosition", "showRightBorder", "showLeftBorder", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseOver", "onKeyDown", "onKeyUp", "onDragEnter", "onDragOver"],
  GridCell_excluded2 = ["changeReason", "unstable_updateValueOnRender"];





















const gridPinnedColumnPositionLookup = {
  [PinnedColumnPosition.LEFT]: GridPinnedColumnPosition.LEFT,
  [PinnedColumnPosition.RIGHT]: GridPinnedColumnPosition.RIGHT,
  [PinnedColumnPosition.NONE]: undefined,
  [PinnedColumnPosition.VIRTUAL]: undefined
};
const GridCell_useUtilityClasses = ownerState => {
  const {
    align,
    showLeftBorder,
    showRightBorder,
    pinnedPosition,
    isEditable,
    isSelected,
    isSelectionMode,
    classes
  } = ownerState;
  const slots = {
    root: ['cell', `cell--text${capitalize(align)}`, isSelected && 'selected', isEditable && 'cell--editable', showLeftBorder && 'cell--withLeftBorder', showRightBorder && 'cell--withRightBorder', pinnedPosition === PinnedColumnPosition.LEFT && 'cell--pinnedLeft', pinnedPosition === PinnedColumnPosition.RIGHT && 'cell--pinnedRight', isSelectionMode && !isEditable && 'cell--selectionMode']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
let warnedOnce = false;

// TODO(v7): Removing the wrapper will break the docs performance visualization demo.

const GridCell = forwardRef(function GridCell(props, ref) {
  const {
      column,
      row,
      rowId,
      rowNode,
      align,
      colIndex,
      width,
      className,
      style: styleProp,
      colSpan,
      disableDragEvents,
      isNotVisible,
      pinnedOffset,
      pinnedPosition,
      showRightBorder,
      showLeftBorder,
      onClick,
      onDoubleClick,
      onMouseDown,
      onMouseUp,
      onMouseOver,
      onKeyDown,
      onKeyUp,
      onDragEnter,
      onDragOver
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridCell_excluded);
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const field = column.field;
  const editCellState = useGridSelectorV8(apiRef, gridEditCellStateSelector, {
    rowId,
    field
  });
  const config = useGridConfiguration();
  const cellAggregationResult = config.hooks.useCellAggregationResult(rowId, field);
  const cellMode = editCellState ? GridCellModes.Edit : GridCellModes.View;
  const cellParams = apiRef.current.getCellParamsForRow(rowId, field, row, {
    colDef: column,
    cellMode,
    rowNode: rowNode,
    tabIndex: useGridSelector(apiRef, () => {
      const cellTabIndex = gridTabIndexCellSelector(apiRef);
      return cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === rowId ? 0 : -1;
    }),
    hasFocus: useGridSelector(apiRef, () => {
      const focus = gridFocusCellSelector(apiRef);
      return focus?.id === rowId && focus.field === field;
    })
  });
  cellParams.api = apiRef.current;
  if (cellAggregationResult) {
    cellParams.value = cellAggregationResult.value;
    cellParams.formattedValue = column.valueFormatter ? column.valueFormatter(cellParams.value, row, column, apiRef) : cellParams.value;
  }
  const isSelected = useGridSelector(apiRef, () => apiRef.current.unstable_applyPipeProcessors('isCellSelected', false, {
    id: rowId,
    field
  }));
  const hiddenCells = useGridSelector(apiRef, gridRowSpanningHiddenCellsSelector);
  const spannedCells = useGridSelector(apiRef, gridRowSpanningSpannedCellsSelector);
  const {
    hasFocus,
    isEditable = false,
    value
  } = cellParams;
  const canManageOwnFocus = column.type === 'actions' && column.getActions?.(apiRef.current.getRowParams(rowId)).some(action => !action.props.disabled);
  const tabIndex = (cellMode === 'view' || !isEditable) && !canManageOwnFocus ? cellParams.tabIndex : -1;
  const {
    classes: rootClasses,
    getCellClassName
  } = rootProps;

  // There is a hidden grid state access in `applyPipeProcessor('cellClassName', ...)`
  const pipesClassName = useGridSelector(apiRef, () => apiRef.current.unstable_applyPipeProcessors('cellClassName', [], {
    id: rowId,
    field
  }).filter(Boolean).join(' '));
  const classNames = [pipesClassName];
  if (column.cellClassName) {
    classNames.push(typeof column.cellClassName === 'function' ? column.cellClassName(cellParams) : column.cellClassName);
  }
  if (column.display === 'flex') {
    classNames.push(gridClasses['cell--flex']);
  }
  if (getCellClassName) {
    classNames.push(getCellClassName(cellParams));
  }
  const valueToRender = cellParams.formattedValue ?? value;
  const cellRef = index_js_.useRef(null);
  const handleRef = useForkRef(ref, cellRef);
  const focusElementRef = index_js_.useRef(null);
  const isSelectionMode = rootProps.cellSelection ?? false;
  const ownerState = {
    align,
    showLeftBorder,
    showRightBorder,
    isEditable,
    classes: rootProps.classes,
    pinnedPosition,
    isSelected,
    isSelectionMode
  };
  const classes = GridCell_useUtilityClasses(ownerState);
  const publishMouseUp = index_js_.useCallback(eventName => event => {
    const params = apiRef.current.getCellParams(rowId, field || '');
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseUp) {
      onMouseUp(event);
    }
  }, [apiRef, field, onMouseUp, rowId]);
  const publishMouseDown = index_js_.useCallback(eventName => event => {
    const params = apiRef.current.getCellParams(rowId, field || '');
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  }, [apiRef, field, onMouseDown, rowId]);
  const publish = index_js_.useCallback((eventName, propHandler) => event => {
    // The row might have been deleted during the click
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    const params = apiRef.current.getCellParams(rowId, field || '');
    apiRef.current.publishEvent(eventName, params, event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, field, rowId]);
  const isCellRowSpanned = hiddenCells[rowId]?.[field] ?? false;
  const rowSpan = spannedCells[rowId]?.[field] ?? 1;
  const style = index_js_.useMemo(() => {
    if (isNotVisible) {
      return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
    }
    const cellStyle = attachPinnedStyle((0,esm_extends/* default */.A)({
      '--width': `${width}px`
    }, styleProp), isRtl, pinnedPosition, pinnedOffset);
    const isLeftPinned = pinnedPosition === PinnedColumnPosition.LEFT;
    const isRightPinned = pinnedPosition === PinnedColumnPosition.RIGHT;
    if (rowSpan > 1) {
      cellStyle.height = `calc(var(--height) * ${rowSpan})`;
      cellStyle.zIndex = 10;
      if (isLeftPinned || isRightPinned) {
        cellStyle.zIndex = 40;
      }
    }
    return cellStyle;
  }, [width, isNotVisible, styleProp, pinnedOffset, pinnedPosition, isRtl, rowSpan]);
  index_js_.useEffect(() => {
    if (!hasFocus || cellMode === GridCellModes.Edit) {
      return;
    }
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    if (cellRef.current && !cellRef.current.contains(doc.activeElement)) {
      const focusableElement = cellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusElementRef.current || focusableElement || cellRef.current;
      if (doesSupportPreventScroll()) {
        elementToFocus.focus({
          preventScroll: true
        });
      } else {
        const scrollPosition = apiRef.current.getScrollPosition();
        elementToFocus.focus();
        apiRef.current.scroll(scrollPosition);
      }
    }
  }, [hasFocus, cellMode, apiRef]);
  if (isCellRowSpanned) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "data-colindex": colIndex,
      role: "presentation",
      style: (0,esm_extends/* default */.A)({
        width: 'var(--width)'
      }, style)
    });
  }
  let handleFocus = other.onFocus;
  if (false) // removed by dead control flow
{}
  let children;
  let title;
  if (editCellState === null && column.renderCell) {
    children = column.renderCell(cellParams);
  }
  if (editCellState !== null && column.renderEditCell) {
    const updatedRow = apiRef.current.getRowWithUpdatedValues(rowId, column.field);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const editCellStateRest = (0,objectWithoutPropertiesLoose/* default */.A)(editCellState, GridCell_excluded2);
    const formattedValue = column.valueFormatter ? column.valueFormatter(editCellState.value, updatedRow, column, apiRef) : cellParams.formattedValue;
    const params = (0,esm_extends/* default */.A)({}, cellParams, {
      row: updatedRow,
      formattedValue
    }, editCellStateRest);
    children = column.renderEditCell(params);
    classNames.push(gridClasses['cell--editing']);
    classNames.push(rootClasses?.['cell--editing']);
  }
  if (children === undefined) {
    const valueString = valueToRender?.toString();
    children = valueString;
    title = valueString;
  }
  if (/*#__PURE__*/index_js_.isValidElement(children) && canManageOwnFocus) {
    children = /*#__PURE__*/index_js_.cloneElement(children, {
      focusElementRef
    });
  }
  const draggableEventHandlers = disableDragEvents ? null : {
    onDragEnter: publish('cellDragEnter', onDragEnter),
    onDragOver: publish('cellDragOver', onDragOver)
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, classNames, className),
    role: "gridcell",
    "data-field": field,
    "data-colindex": colIndex,
    "aria-colindex": colIndex + 1,
    "aria-colspan": colSpan,
    "aria-rowspan": rowSpan,
    style: style,
    title: title,
    tabIndex: tabIndex,
    onClick: publish('cellClick', onClick),
    onDoubleClick: publish('cellDoubleClick', onDoubleClick),
    onMouseOver: publish('cellMouseOver', onMouseOver),
    onMouseDown: publishMouseDown('cellMouseDown'),
    onMouseUp: publishMouseUp('cellMouseUp'),
    onKeyDown: publish('cellKeyDown', onKeyDown),
    onKeyUp: publish('cellKeyUp', onKeyUp)
  }, draggableEventHandlers, other, {
    onFocus: handleFocus,
    ref: handleRef,
    children: children
  }));
});
 false ? 0 : void 0;
const MemoizedGridCell = fastMemo(GridCell);

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/ColumnHeaderMenuIcon.js







const ColumnHeaderMenuIcon_useUtilityClasses = ownerState => {
  const {
    classes,
    open
  } = ownerState;
  const slots = {
    root: ['menuIcon', open && 'menuOpen'],
    button: ['menuIconButton']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const ColumnHeaderMenuIcon = /*#__PURE__*/index_js_.memo(props => {
  const {
    colDef,
    open,
    columnMenuId,
    columnMenuButtonId,
    iconButtonRef
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes
  });
  const classes = ColumnHeaderMenuIcon_useUtilityClasses(ownerState);
  const handleMenuIconClick = index_js_.useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
    apiRef.current.toggleColumnMenu(colDef.field);
  }, [apiRef, colDef.field]);
  const columnName = colDef.headerName ?? colDef.field;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: classes.root,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTooltip, (0,esm_extends/* default */.A)({
      title: apiRef.current.getLocaleText('columnMenuLabel'),
      enterDelay: 1000
    }, rootProps.slotProps?.baseTooltip, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseIconButton, (0,esm_extends/* default */.A)({
        ref: iconButtonRef,
        tabIndex: -1,
        className: classes.button,
        "aria-label": apiRef.current.getLocaleText('columnMenuAriaLabel')(columnName),
        size: "small",
        onClick: handleMenuIconClick,
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": open ? columnMenuId : undefined,
        id: columnMenuButtonId
      }, rootProps.slotProps?.baseIconButton, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuIcon, {
          fontSize: "inherit"
        })
      }))
    }))
  });
});
;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnHeaderMenu.js







function GridColumnHeaderMenu({
  columnMenuId,
  columnMenuButtonId,
  ContentComponent,
  contentComponentProps,
  field,
  open,
  target,
  onExited
}) {
  const apiRef = useGridApiContext();
  const colDef = apiRef.current.getColumn(field);
  const hideMenu = useEventCallback_useEventCallback(event => {
    if (event) {
      // Prevent triggering the sorting
      event.stopPropagation();
      if (target?.contains(event.target)) {
        return;
      }
    }
    apiRef.current.hideColumnMenu();
  });
  if (!target || !colDef) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridMenu, {
    placement: `bottom-${colDef.align === 'right' ? 'start' : 'end'}`,
    open: open,
    target: target,
    onClose: hideMenu,
    onExited: onExited,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContentComponent, (0,esm_extends/* default */.A)({
      colDef: colDef,
      hideMenu: hideMenu,
      open: open,
      id: columnMenuId,
      labelledby: columnMenuButtonId
    }, contentComponentProps))
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderTitle.js


const GridColumnHeaderTitle_excluded = ["className", "aria-label"];










const GridColumnHeaderTitle_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['columnHeaderTitle']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridColumnHeaderTitleRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnHeaderTitle',
  overridesResolver: (props, styles) => styles.columnHeaderTitle
})({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  fontWeight: 'var(--unstable_DataGrid-headWeight)',
  lineHeight: 'normal'
});
const ColumnHeaderInnerTitle = forwardRef(function ColumnHeaderInnerTitle(props, ref) {
  // Tooltip adds aria-label to the props, which is not needed since the children prop is a string
  // See https://github.com/mui/mui-x/pull/14482
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnHeaderTitle_excluded);
  const rootProps = useGridRootProps();
  const classes = GridColumnHeaderTitle_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderTitleRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other, {
    ref: ref
  }));
});
// No React.memo here as if we display the sort icon, we need to recalculate the isOver
function GridColumnHeaderTitle(props) {
  const {
    label,
    description
  } = props;
  const rootProps = useGridRootProps();
  const titleRef = index_js_.useRef(null);
  const [tooltip, setTooltip] = index_js_.useState('');
  const handleMouseOver = index_js_.useCallback(() => {
    if (!description && titleRef?.current) {
      const isOver = isOverflown(titleRef.current);
      if (isOver) {
        setTooltip(label);
      } else {
        setTooltip('');
      }
    }
  }, [description, label]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.baseTooltip, (0,esm_extends/* default */.A)({
    title: description || tooltip
  }, rootProps.slotProps?.baseTooltip, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ColumnHeaderInnerTitle, {
      onMouseOver: handleMouseOver,
      ref: titleRef,
      children: label
    })
  }));
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSeparator.js


const GridColumnHeaderSeparator_excluded = ["resizable", "resizing", "height", "side"];






var GridColumnHeaderSeparatorSides = /*#__PURE__*/function (GridColumnHeaderSeparatorSides) {
  GridColumnHeaderSeparatorSides["Left"] = "left";
  GridColumnHeaderSeparatorSides["Right"] = "right";
  return GridColumnHeaderSeparatorSides;
}(GridColumnHeaderSeparatorSides || {});
const GridColumnHeaderSeparator_useUtilityClasses = ownerState => {
  const {
    resizable,
    resizing,
    classes,
    side
  } = ownerState;
  const slots = {
    root: ['columnSeparator', resizable && 'columnSeparator--resizable', resizing && 'columnSeparator--resizing', side && `columnSeparator--side${capitalize(side)}`],
    icon: ['iconSeparator']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderSeparatorRaw(props) {
  const {
      height,
      side = GridColumnHeaderSeparatorSides.Right
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnHeaderSeparator_excluded);
  const rootProps = useGridRootProps();
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    side,
    classes: rootProps.classes
  });
  const classes = GridColumnHeaderSeparator_useUtilityClasses(ownerState);
  const stopClick = index_js_.useCallback(event => {
    event.preventDefault();
    event.stopPropagation();
  }, []);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    (0,jsx_runtime.jsx)("div", (0,esm_extends/* default */.A)({
      className: classes.root,
      style: {
        minHeight: height
      }
    }, other, {
      onClick: stopClick,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnResizeIcon, {
        className: classes.icon
      })
    }))
  );
}
const GridColumnHeaderSeparator = /*#__PURE__*/index_js_.memo(GridColumnHeaderSeparatorRaw);
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridGenericColumnHeaderItem.js


const GridGenericColumnHeaderItem_excluded = ["classes", "columnMenuOpen", "colIndex", "height", "isResizing", "sortDirection", "hasFocus", "tabIndex", "separatorSide", "isDraggable", "headerComponent", "description", "elementId", "width", "columnMenuIconButton", "columnMenu", "columnTitleIconButtons", "headerClassName", "label", "resizable", "draggableContainerProps", "columnHeaderSeparatorProps", "style"];









const GridGenericColumnHeaderItem = forwardRef(function GridGenericColumnHeaderItem(props, ref) {
  const {
      classes,
      colIndex,
      height,
      isResizing,
      sortDirection,
      hasFocus,
      tabIndex,
      separatorSide,
      isDraggable,
      headerComponent,
      description,
      width,
      columnMenuIconButton = null,
      columnMenu = null,
      columnTitleIconButtons = null,
      headerClassName,
      label,
      resizable,
      draggableContainerProps,
      columnHeaderSeparatorProps,
      style
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridGenericColumnHeaderItem_excluded);
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const headerCellRef = index_js_.useRef(null);
  const handleRef = useForkRef(headerCellRef, ref);
  let ariaSort = 'none';
  if (sortDirection != null) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }
  index_js_.useLayoutEffect(() => {
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus?.focus();
      if (apiRef.current.columnHeadersContainerRef?.current) {
        apiRef.current.columnHeadersContainerRef.current.scrollLeft = 0;
      }
    }
  }, [apiRef, hasFocus]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, headerClassName),
    style: (0,esm_extends/* default */.A)({}, style, {
      height,
      width
    }),
    role: "columnheader",
    tabIndex: tabIndex,
    "aria-colindex": colIndex + 1,
    "aria-sort": ariaSort
  }, other, {
    ref: handleRef,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", (0,esm_extends/* default */.A)({
      className: classes.draggableContainer,
      draggable: isDraggable,
      role: "presentation"
    }, draggableContainerProps, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classes.titleContainer,
        role: "presentation",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: classes.titleContainerContent,
          children: headerComponent !== undefined ? headerComponent : /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderTitle, {
            label: label,
            description: description,
            columnWidth: width
          })
        }), columnTitleIconButtons]
      }), columnMenuIconButton]
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderSeparator, (0,esm_extends/* default */.A)({
      resizable: !rootProps.disableColumnResize && !!resizable,
      resizing: isResizing,
      height: height,
      side: separatorSide
    }, columnHeaderSeparatorProps)), columnMenu]
  }));
});

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderItem.js

















const GridColumnHeaderItem_useUtilityClasses = ownerState => {
  const {
    colDef,
    classes,
    isDragging,
    sortDirection,
    showRightBorder,
    showLeftBorder,
    filterItemsCounter,
    pinnedPosition,
    isLastUnpinned,
    isSiblingFocused
  } = ownerState;
  const isColumnSorted = sortDirection != null;
  const isColumnFiltered = filterItemsCounter != null && filterItemsCounter > 0;
  // todo refactor to a prop on col isNumeric or ?? ie: coltype===price wont work
  const isColumnNumeric = colDef.type === 'number';
  const slots = {
    root: ['columnHeader', colDef.headerAlign === 'left' && 'columnHeader--alignLeft', colDef.headerAlign === 'center' && 'columnHeader--alignCenter', colDef.headerAlign === 'right' && 'columnHeader--alignRight', colDef.sortable && 'columnHeader--sortable', isDragging && 'columnHeader--moving', isColumnSorted && 'columnHeader--sorted', isColumnFiltered && 'columnHeader--filtered', isColumnNumeric && 'columnHeader--numeric', 'withBorderColor', showRightBorder && 'columnHeader--withRightBorder', showLeftBorder && 'columnHeader--withLeftBorder', pinnedPosition === PinnedColumnPosition.LEFT && 'columnHeader--pinnedLeft', pinnedPosition === PinnedColumnPosition.RIGHT && 'columnHeader--pinnedRight',
    // TODO: Remove classes below and restore `:has` selectors when they are supported in jsdom
    // See https://github.com/mui/mui-x/pull/14559
    isLastUnpinned && 'columnHeader--lastUnpinned', isSiblingFocused && 'columnHeader--siblingFocused'],
    draggableContainer: ['columnHeaderDraggableContainer'],
    titleContainer: ['columnHeaderTitleContainer'],
    titleContainerContent: ['columnHeaderTitleContainerContent']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnHeaderItem(props) {
  const {
    colDef,
    columnMenuOpen,
    colIndex,
    headerHeight,
    isResizing,
    isLast,
    sortDirection,
    sortIndex,
    filterItemsCounter,
    hasFocus,
    tabIndex,
    disableReorder,
    separatorSide,
    showLeftBorder,
    showRightBorder,
    pinnedPosition,
    pinnedOffset
  } = props;
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const headerCellRef = index_js_.useRef(null);
  const columnMenuId = useId();
  const columnMenuButtonId = useId();
  const iconButtonRef = index_js_.useRef(null);
  const [showColumnMenuIcon, setShowColumnMenuIcon] = index_js_.useState(columnMenuOpen);
  const isDraggable = index_js_.useMemo(() => !rootProps.disableColumnReorder && !disableReorder && !colDef.disableReorder, [rootProps.disableColumnReorder, disableReorder, colDef.disableReorder]);
  let headerComponent;
  if (colDef.renderHeader) {
    headerComponent = colDef.renderHeader(apiRef.current.getColumnHeaderParams(colDef.field));
  }
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes,
    showRightBorder,
    showLeftBorder
  });
  const classes = GridColumnHeaderItem_useUtilityClasses(ownerState);
  const publish = index_js_.useCallback(eventName => event => {
    // Ignore portal
    // See https://github.com/mui/mui-x/issues/1721
    if (isEventTargetInPortal(event)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getColumnHeaderParams(colDef.field), event);
  }, [apiRef, colDef.field]);
  const mouseEventsHandlers = index_js_.useMemo(() => ({
    onClick: publish('columnHeaderClick'),
    onContextMenu: publish('columnHeaderContextMenu'),
    onDoubleClick: publish('columnHeaderDoubleClick'),
    onMouseOver: publish('columnHeaderOver'),
    // TODO remove as it's not used
    onMouseOut: publish('columnHeaderOut'),
    // TODO remove as it's not used
    onMouseEnter: publish('columnHeaderEnter'),
    // TODO remove as it's not used
    onMouseLeave: publish('columnHeaderLeave'),
    // TODO remove as it's not used
    onKeyDown: publish('columnHeaderKeyDown'),
    onFocus: publish('columnHeaderFocus'),
    onBlur: publish('columnHeaderBlur')
  }), [publish]);
  const draggableEventHandlers = index_js_.useMemo(() => isDraggable ? {
    onDragStart: publish('columnHeaderDragStart'),
    onDragEnter: publish('columnHeaderDragEnter'),
    onDragOver: publish('columnHeaderDragOver'),
    onDragEnd: publish('columnHeaderDragEnd')
  } : {}, [isDraggable, publish]);
  const columnHeaderSeparatorProps = index_js_.useMemo(() => ({
    onMouseDown: publish('columnSeparatorMouseDown'),
    onDoubleClick: publish('columnSeparatorDoubleClick')
  }), [publish]);
  index_js_.useEffect(() => {
    if (!showColumnMenuIcon) {
      setShowColumnMenuIcon(columnMenuOpen);
    }
  }, [showColumnMenuIcon, columnMenuOpen]);
  const handleExited = index_js_.useCallback(() => {
    setShowColumnMenuIcon(false);
  }, []);
  const columnMenuIconButton = !rootProps.disableColumnMenu && !colDef.disableColumnMenu && /*#__PURE__*/(0,jsx_runtime.jsx)(ColumnHeaderMenuIcon, {
    colDef: colDef,
    columnMenuId: columnMenuId,
    columnMenuButtonId: columnMenuButtonId,
    open: showColumnMenuIcon,
    iconButtonRef: iconButtonRef
  });
  const columnMenu = /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderMenu, {
    columnMenuId: columnMenuId,
    columnMenuButtonId: columnMenuButtonId,
    field: colDef.field,
    open: columnMenuOpen,
    target: iconButtonRef.current,
    ContentComponent: rootProps.slots.columnMenu,
    contentComponentProps: rootProps.slotProps?.columnMenu,
    onExited: handleExited
  });
  const sortingOrder = colDef.sortingOrder ?? rootProps.sortingOrder;
  const showSortIcon = (colDef.sortable || sortDirection != null) && !colDef.hideSortIcons && !rootProps.disableColumnSorting;
  const columnTitleIconButtons = /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [!rootProps.disableColumnFilter && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnHeaderFilterIconButton, (0,esm_extends/* default */.A)({
      field: colDef.field,
      counter: filterItemsCounter
    }, rootProps.slotProps?.columnHeaderFilterIconButton)), showSortIcon && /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnHeaderSortIcon, (0,esm_extends/* default */.A)({
      field: colDef.field,
      direction: sortDirection,
      index: sortIndex,
      sortingOrder: sortingOrder,
      disabled: !colDef.sortable
    }, rootProps.slotProps?.columnHeaderSortIcon))]
  });
  index_js_.useLayoutEffect(() => {
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus?.focus();
      if (apiRef.current.columnHeadersContainerRef?.current) {
        apiRef.current.columnHeadersContainerRef.current.scrollLeft = 0;
      }
    }
  }, [apiRef, hasFocus]);
  const headerClassName = typeof colDef.headerClassName === 'function' ? colDef.headerClassName({
    field: colDef.field,
    colDef
  }) : colDef.headerClassName;
  const label = colDef.headerName ?? colDef.field;
  const style = index_js_.useMemo(() => attachPinnedStyle((0,esm_extends/* default */.A)({}, props.style), isRtl, pinnedPosition, pinnedOffset), [pinnedPosition, pinnedOffset, props.style, isRtl]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridGenericColumnHeaderItem, (0,esm_extends/* default */.A)({
    ref: headerCellRef,
    classes: classes,
    columnMenuOpen: columnMenuOpen,
    colIndex: colIndex,
    height: headerHeight,
    isResizing: isResizing,
    sortDirection: sortDirection,
    hasFocus: hasFocus,
    tabIndex: tabIndex,
    separatorSide: separatorSide,
    isDraggable: isDraggable,
    headerComponent: headerComponent,
    description: colDef.description,
    elementId: colDef.field,
    width: colDef.computedWidth,
    columnMenuIconButton: columnMenuIconButton,
    columnTitleIconButtons: columnTitleIconButtons,
    headerClassName: (0,clsx/* default */.A)(headerClassName, isLast && gridClasses['columnHeader--last']),
    label: label,
    resizable: !rootProps.disableColumnResize && !!colDef.resizable,
    "data-field": colDef.field,
    columnMenu: columnMenu,
    draggableContainerProps: draggableEventHandlers,
    columnHeaderSeparatorProps: columnHeaderSeparatorProps,
    style: style
  }, mouseEventsHandlers));
}
 false ? 0 : void 0;
const GridColumnHeaderItem_Memoized = fastMemo(GridColumnHeaderItem);

;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnGroupHeader.js














const GridColumnGroupHeader_useUtilityClasses = ownerState => {
  const {
    classes,
    headerAlign,
    isDragging,
    isLastColumn,
    showLeftBorder,
    showRightBorder,
    groupId,
    pinnedPosition
  } = ownerState;
  const slots = {
    root: ['columnHeader', headerAlign === 'left' && 'columnHeader--alignLeft', headerAlign === 'center' && 'columnHeader--alignCenter', headerAlign === 'right' && 'columnHeader--alignRight', isDragging && 'columnHeader--moving', showRightBorder && 'columnHeader--withRightBorder', showLeftBorder && 'columnHeader--withLeftBorder', 'withBorderColor', groupId === null ? 'columnHeader--emptyGroup' : 'columnHeader--filledGroup', pinnedPosition === PinnedColumnPosition.LEFT && 'columnHeader--pinnedLeft', pinnedPosition === PinnedColumnPosition.RIGHT && 'columnHeader--pinnedRight', isLastColumn && 'columnHeader--last'],
    draggableContainer: ['columnHeaderDraggableContainer'],
    titleContainer: ['columnHeaderTitleContainer', 'withBorderColor'],
    titleContainerContent: ['columnHeaderTitleContainerContent']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
function GridColumnGroupHeader(props) {
  const {
    groupId,
    width,
    depth,
    maxDepth,
    fields,
    height,
    colIndex,
    hasFocus,
    tabIndex,
    isLastColumn,
    pinnedPosition,
    pinnedOffset
  } = props;
  const rootProps = useGridRootProps();
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const headerCellRef = index_js_.useRef(null);
  const apiRef = useGridApiContext();
  const columnGroupsLookup = useGridSelector(apiRef, gridColumnGroupsLookupSelector);
  const group = groupId ? columnGroupsLookup[groupId] : {};
  const {
    headerName = groupId ?? '',
    description = '',
    headerAlign = undefined
  } = group;
  let headerComponent;
  const render = groupId && columnGroupsLookup[groupId]?.renderHeaderGroup;
  const renderParams = index_js_.useMemo(() => ({
    groupId,
    headerName,
    description,
    depth,
    maxDepth,
    fields,
    colIndex,
    isLastColumn
  }), [groupId, headerName, description, depth, maxDepth, fields, colIndex, isLastColumn]);
  if (groupId && render) {
    headerComponent = render(renderParams);
  }
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    classes: rootProps.classes,
    headerAlign,
    depth,
    isDragging: false
  });
  const label = headerName ?? groupId;
  const id = useId();
  const elementId = groupId === null ? `empty-group-cell-${id}` : groupId;
  const classes = GridColumnGroupHeader_useUtilityClasses(ownerState);
  index_js_.useLayoutEffect(() => {
    if (hasFocus) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus?.focus();
    }
  }, [apiRef, hasFocus]);
  const publish = index_js_.useCallback(eventName => event => {
    // Ignore portal
    // See https://github.com/mui/mui-x/issues/1721
    if (isEventTargetInPortal(event)) {
      return;
    }
    apiRef.current.publishEvent(eventName, renderParams, event);
  },
  // For now this is stupid, because renderParams change all the time.
  // Need to move it's computation in the api, such that for a given depth+columnField, I can get the group parameters
  [apiRef, renderParams]);
  const mouseEventsHandlers = index_js_.useMemo(() => ({
    onKeyDown: publish('columnGroupHeaderKeyDown'),
    onFocus: publish('columnGroupHeaderFocus'),
    onBlur: publish('columnGroupHeaderBlur')
  }), [publish]);
  const headerClassName = typeof group.headerClassName === 'function' ? group.headerClassName(renderParams) : group.headerClassName;
  const style = index_js_.useMemo(() => attachPinnedStyle((0,esm_extends/* default */.A)({}, props.style), isRtl, pinnedPosition, pinnedOffset), [pinnedPosition, pinnedOffset, props.style, isRtl]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridGenericColumnHeaderItem, (0,esm_extends/* default */.A)({
    ref: headerCellRef,
    classes: classes,
    columnMenuOpen: false,
    colIndex: colIndex,
    height: height,
    isResizing: false,
    sortDirection: null,
    hasFocus: false,
    tabIndex: tabIndex,
    isDraggable: false,
    headerComponent: headerComponent,
    headerClassName: headerClassName,
    description: description,
    elementId: elementId,
    width: width,
    columnMenuIconButton: null,
    columnTitleIconButtons: null,
    resizable: false,
    label: label,
    "aria-colspan": fields.length
    // The fields are wrapped between |-...-| to avoid confusion between fields "id" and "id2" when using selector data-fields~=
    ,
    "data-fields": `|-${fields.join('-|-')}-|`,
    style: style
  }, mouseEventsHandlers));
}

;// ../node_modules/@mui/x-data-grid/hooks/features/columnHeaders/useGridColumnHeaders.js






















const GridColumnHeaderRow = (0,styled/* default */.Ay)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnHeaderRow',
  overridesResolver: (_, styles) => styles.columnHeaderRow
})({
  display: 'flex'
});
const useGridColumnHeaders = props => {
  const {
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  } = props;
  const [dragCol, setDragCol] = index_js_.useState('');
  const [resizeCol, setResizeCol] = index_js_.useState('');
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const columnGroupsModel = useGridSelector(apiRef, gridColumnGroupsUnwrappedModelSelector);
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const renderContext = useGridSelector(apiRef, gridRenderContextColumnsSelector);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const columnsLookup = useGridSelector(apiRef, gridColumnLookupSelector);
  const offsetLeft = computeOffsetLeft(columnPositions, renderContext, pinnedColumns.left.length);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const gridHasFiller = useGridSelector(apiRef, gridHasFillerSelector);
  const headerHeight = useGridSelector(apiRef, gridHeaderHeightSelector);
  const groupHeaderHeight = useGridSelector(apiRef, gridGroupHeaderHeightSelector);
  const scrollbarWidth = useGridSelector(apiRef, gridVerticalScrollbarWidthSelector);
  const handleColumnResizeStart = index_js_.useCallback(params => setResizeCol(params.field), []);
  const handleColumnResizeStop = index_js_.useCallback(() => setResizeCol(''), []);
  const handleColumnReorderStart = index_js_.useCallback(params => setDragCol(params.field), []);
  const handleColumnReorderStop = index_js_.useCallback(() => setDragCol(''), []);
  const leftRenderContext = index_js_.useMemo(() => {
    return pinnedColumns.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: pinnedColumns.left.length
    } : null;
  }, [pinnedColumns.left.length]);
  const rightRenderContext = index_js_.useMemo(() => {
    return pinnedColumns.right.length ? {
      firstColumnIndex: visibleColumns.length - pinnedColumns.right.length,
      lastColumnIndex: visibleColumns.length
    } : null;
  }, [pinnedColumns.right.length, visibleColumns.length]);
  useGridApiEventHandler(apiRef, 'columnResizeStart', handleColumnResizeStart);
  useGridApiEventHandler(apiRef, 'columnResizeStop', handleColumnResizeStop);
  useGridApiEventHandler(apiRef, 'columnHeaderDragStart', handleColumnReorderStart);
  useGridApiEventHandler(apiRef, 'columnHeaderDragEnd', handleColumnReorderStop);

  // Helper for computation common between getColumnHeaders and getColumnGroupHeaders
  const getColumnsToRender = params => {
    const {
      renderContext: currentContext = renderContext
    } = params || {};
    const firstColumnToRender = currentContext.firstColumnIndex;
    const lastColumnToRender = currentContext.lastColumnIndex;
    const renderedColumns = visibleColumns.slice(firstColumnToRender, lastColumnToRender);
    return {
      renderedColumns,
      firstColumnToRender,
      lastColumnToRender
    };
  };
  const getFillers = (params, children, leftOverflow, borderBottom = false) => {
    const isPinnedRight = params?.position === PinnedColumnPosition.RIGHT;
    const isNotPinned = params?.position === undefined;
    const hasScrollbarFiller = pinnedColumns.right.length > 0 && isPinnedRight || pinnedColumns.right.length === 0 && isNotPinned;
    const leftOffsetWidth = offsetLeft - leftOverflow;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
      children: [isNotPinned && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        role: "presentation",
        style: {
          width: leftOffsetWidth
        }
      }), children, isNotPinned && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        role: "presentation",
        className: (0,clsx/* default */.A)(gridClasses.filler, borderBottom && gridClasses['filler--borderBottom'])
      }), hasScrollbarFiller && /*#__PURE__*/(0,jsx_runtime.jsx)(GridScrollbarFillerCell, {
        header: true,
        pinnedRight: isPinnedRight,
        borderBottom: borderBottom,
        borderTop: false
      })]
    });
  };
  const getColumnHeaders = (params, other = {}) => {
    const {
      renderedColumns,
      firstColumnToRender
    } = getColumnsToRender(params);
    const columns = [];
    for (let i = 0; i < renderedColumns.length; i += 1) {
      const colDef = renderedColumns[i];
      const columnIndex = firstColumnToRender + i;
      const isFirstColumn = columnIndex === 0;
      const tabIndex = columnHeaderTabIndexState !== null && columnHeaderTabIndexState.field === colDef.field || isFirstColumn && !hasOtherElementInTabSequence ? 0 : -1;
      const hasFocus = columnHeaderFocus !== null && columnHeaderFocus.field === colDef.field;
      const open = columnMenuState.open && columnMenuState.field === colDef.field;
      const pinnedPosition = params?.position;
      const pinnedOffset = getPinnedCellOffset(pinnedPosition, colDef.computedWidth, columnIndex, columnPositions, columnsTotalWidth, scrollbarWidth);
      const siblingWithBorderingSeparator = pinnedPosition === PinnedColumnPosition.RIGHT ? renderedColumns[i - 1] : renderedColumns[i + 1];
      const isSiblingFocused = siblingWithBorderingSeparator ? columnHeaderFocus !== null && columnHeaderFocus.field === siblingWithBorderingSeparator.field : false;
      const isLastUnpinned = columnIndex + 1 === columnPositions.length - pinnedColumns.right.length;
      const indexInSection = i;
      const sectionLength = renderedColumns.length;
      const showLeftBorder = shouldCellShowLeftBorder(pinnedPosition, indexInSection);
      const showRightBorder = shouldCellShowRightBorder(pinnedPosition, indexInSection, sectionLength, rootProps.showColumnVerticalBorder, gridHasFiller);
      columns.push(/*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeaderItem_Memoized, (0,esm_extends/* default */.A)({}, sortColumnLookup[colDef.field], {
        columnMenuOpen: open,
        filterItemsCounter: filterColumnLookup[colDef.field] && filterColumnLookup[colDef.field].length,
        headerHeight: headerHeight,
        isDragging: colDef.field === dragCol,
        colDef: colDef,
        colIndex: columnIndex,
        isResizing: resizeCol === colDef.field,
        isLast: columnIndex === columnPositions.length - 1,
        hasFocus: hasFocus,
        tabIndex: tabIndex,
        pinnedPosition: pinnedPosition,
        pinnedOffset: pinnedOffset,
        isLastUnpinned: isLastUnpinned,
        isSiblingFocused: isSiblingFocused,
        showLeftBorder: showLeftBorder,
        showRightBorder: showRightBorder
      }, other), colDef.field));
    }
    return getFillers(params, columns, 0);
  };
  const getColumnHeadersRow = () => {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridColumnHeaderRow, {
      role: "row",
      "aria-rowindex": headerGroupingMaxDepth + 1,
      ownerState: rootProps,
      className: gridClasses['row--borderBottom'],
      children: [leftRenderContext && getColumnHeaders({
        position: PinnedColumnPosition.LEFT,
        renderContext: leftRenderContext
      }, {
        disableReorder: true
      }), getColumnHeaders({
        renderContext
      }), rightRenderContext && getColumnHeaders({
        position: PinnedColumnPosition.RIGHT,
        renderContext: rightRenderContext
      }, {
        disableReorder: true,
        separatorSide: GridColumnHeaderSeparatorSides.Left
      })]
    });
  };
  const getColumnGroupHeaders = ({
    depth,
    params
  }) => {
    const columnsToRender = getColumnsToRender(params);
    if (columnsToRender.renderedColumns.length === 0) {
      return null;
    }
    const {
      firstColumnToRender,
      lastColumnToRender
    } = columnsToRender;
    const rowStructure = columnGroupsHeaderStructure[depth];
    const firstColumnFieldToRender = visibleColumns[firstColumnToRender].field;
    const firstGroupToRender = columnGroupsModel[firstColumnFieldToRender]?.[depth] ?? null;
    const firstGroupIndex = rowStructure.findIndex(({
      groupId,
      columnFields
    }) => groupId === firstGroupToRender && columnFields.includes(firstColumnFieldToRender));
    const lastColumnFieldToRender = visibleColumns[lastColumnToRender - 1].field;
    const lastGroupToRender = columnGroupsModel[lastColumnFieldToRender]?.[depth] ?? null;
    const lastGroupIndex = rowStructure.findIndex(({
      groupId,
      columnFields
    }) => groupId === lastGroupToRender && columnFields.includes(lastColumnFieldToRender));
    const visibleColumnGroupHeader = rowStructure.slice(firstGroupIndex, lastGroupIndex + 1).map(groupStructure => {
      return (0,esm_extends/* default */.A)({}, groupStructure, {
        columnFields: groupStructure.columnFields.filter(field => columnVisibility[field] !== false)
      });
    }).filter(groupStructure => groupStructure.columnFields.length > 0);
    const firstVisibleColumnIndex = visibleColumnGroupHeader[0].columnFields.indexOf(firstColumnFieldToRender);
    const hiddenGroupColumns = visibleColumnGroupHeader[0].columnFields.slice(0, firstVisibleColumnIndex);
    const leftOverflow = hiddenGroupColumns.reduce((acc, field) => {
      const column = columnsLookup[field];
      return acc + (column.computedWidth ?? 0);
    }, 0);
    let columnIndex = firstColumnToRender;
    const children = visibleColumnGroupHeader.map(({
      groupId,
      columnFields
    }, index) => {
      const hasFocus = columnGroupHeaderFocus !== null && columnGroupHeaderFocus.depth === depth && columnFields.includes(columnGroupHeaderFocus.field);
      const tabIndex = columnGroupHeaderTabIndexState !== null && columnGroupHeaderTabIndexState.depth === depth && columnFields.includes(columnGroupHeaderTabIndexState.field) ? 0 : -1;
      const headerInfo = {
        groupId,
        width: columnFields.reduce((acc, field) => acc + columnsLookup[field].computedWidth, 0),
        fields: columnFields,
        colIndex: columnIndex,
        hasFocus,
        tabIndex
      };
      const pinnedPosition = params.position;
      const pinnedOffset = getPinnedCellOffset(pinnedPosition, headerInfo.width, columnIndex, columnPositions, columnsTotalWidth, scrollbarWidth);
      columnIndex += columnFields.length;
      let indexInSection = index;
      if (pinnedPosition === PinnedColumnPosition.LEFT) {
        // Group headers can expand to multiple columns, we need to adjust the index
        indexInSection = columnIndex - 1;
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnGroupHeader, {
        groupId: groupId,
        width: headerInfo.width,
        fields: headerInfo.fields,
        colIndex: headerInfo.colIndex,
        depth: depth,
        isLastColumn: index === visibleColumnGroupHeader.length - 1,
        maxDepth: headerGroupingMaxDepth,
        height: groupHeaderHeight,
        hasFocus: hasFocus,
        tabIndex: tabIndex,
        pinnedPosition: pinnedPosition,
        pinnedOffset: pinnedOffset,
        showLeftBorder: shouldCellShowLeftBorder(pinnedPosition, indexInSection),
        showRightBorder: shouldCellShowRightBorder(pinnedPosition, indexInSection, visibleColumnGroupHeader.length, rootProps.showColumnVerticalBorder, gridHasFiller)
      }, index);
    });
    return getFillers(params, children, leftOverflow);
  };
  const getColumnGroupHeadersRows = () => {
    if (headerGroupingMaxDepth === 0) {
      return null;
    }
    const headerRows = [];
    for (let depth = 0; depth < headerGroupingMaxDepth; depth += 1) {
      headerRows.push(/*#__PURE__*/(0,jsx_runtime.jsxs)(GridColumnHeaderRow, {
        role: "row",
        "aria-rowindex": depth + 1,
        ownerState: rootProps,
        children: [leftRenderContext && getColumnGroupHeaders({
          depth,
          params: {
            position: PinnedColumnPosition.LEFT,
            renderContext: leftRenderContext,
            maxLastColumn: leftRenderContext.lastColumnIndex
          }
        }), getColumnGroupHeaders({
          depth,
          params: {
            renderContext
          }
        }), rightRenderContext && getColumnGroupHeaders({
          depth,
          params: {
            position: PinnedColumnPosition.RIGHT,
            renderContext: rightRenderContext,
            maxLastColumn: rightRenderContext.lastColumnIndex
          }
        })]
      }, depth));
    }
    return headerRows;
  };
  return {
    renderContext,
    leftRenderContext,
    rightRenderContext,
    pinnedColumns,
    visibleColumns,
    columnPositions,
    getFillers,
    getColumnHeadersRow,
    getColumnsToRender,
    getColumnGroupHeadersRows,
    getPinnedCellOffset: getPinnedCellOffset,
    isDragging: !!dragCol,
    getInnerProps: () => ({
      role: 'rowgroup'
    })
  };
};
;// ../node_modules/@mui/x-data-grid/components/columnHeaders/GridBaseColumnHeaders.js


const GridBaseColumnHeaders_excluded = ["className"];








const GridBaseColumnHeaders_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['columnHeaders']
  };
  return composeClasses(slots, getDataGridUtilityClass, classes);
};
const GridColumnHeadersRoot = (0,esm_styled/* default */.A)('div', {
  name: 'MuiDataGrid',
  slot: 'ColumnHeaders',
  overridesResolver: (props, styles) => styles.columnHeaders
})({
  display: 'flex',
  flexDirection: 'column',
  borderTopLeftRadius: 'var(--unstable_DataGrid-radius)',
  borderTopRightRadius: 'var(--unstable_DataGrid-radius)'
});
const GridBaseColumnHeaders = forwardRef(function GridColumnHeaders(props, ref) {
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridBaseColumnHeaders_excluded);
  const rootProps = useGridRootProps();
  const classes = GridBaseColumnHeaders_useUtilityClasses(rootProps);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnHeadersRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: rootProps
  }, other, {
    role: "presentation",
    ref: ref
  }));
});
;// ../node_modules/@mui/x-data-grid/components/GridColumnHeaders.js


const GridColumnHeaders_excluded = ["className", "visibleColumns", "sortColumnLookup", "filterColumnLookup", "columnHeaderTabIndexState", "columnGroupHeaderTabIndexState", "columnHeaderFocus", "columnGroupHeaderFocus", "headerGroupingMaxDepth", "columnMenuState", "columnVisibility", "columnGroupsHeaderStructure", "hasOtherElementInTabSequence"];







const GridColumnHeaders = forwardRef(function GridColumnHeaders(props, ref) {
  const {
      visibleColumns,
      sortColumnLookup,
      filterColumnLookup,
      columnHeaderTabIndexState,
      columnGroupHeaderTabIndexState,
      columnHeaderFocus,
      columnGroupHeaderFocus,
      headerGroupingMaxDepth,
      columnMenuState,
      columnVisibility,
      columnGroupsHeaderStructure,
      hasOtherElementInTabSequence
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnHeaders_excluded);
  const {
    getInnerProps,
    getColumnHeadersRow,
    getColumnGroupHeadersRows
  } = useGridColumnHeaders({
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(GridBaseColumnHeaders, (0,esm_extends/* default */.A)({}, other, getInnerProps(), {
    ref: ref,
    children: [getColumnGroupHeadersRows(), getColumnHeadersRow()]
  }));
});
 false ? 0 : void 0;
const MemoizedGridColumnHeaders = fastMemo(GridColumnHeaders);

;// ../node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenuSlots.js


const useGridColumnMenuSlots_excluded = ["displayOrder"];



const useGridColumnMenuSlots = props => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const {
    defaultSlots,
    defaultSlotProps,
    slots = {},
    slotProps = {},
    hideMenu,
    colDef,
    addDividers = true
  } = props;
  const processedComponents = index_js_.useMemo(() => (0,esm_extends/* default */.A)({}, defaultSlots, slots), [defaultSlots, slots]);
  const processedSlotProps = index_js_.useMemo(() => {
    if (!slotProps || Object.keys(slotProps).length === 0) {
      return defaultSlotProps;
    }
    const mergedProps = (0,esm_extends/* default */.A)({}, slotProps);
    Object.entries(defaultSlotProps).forEach(([key, currentSlotProps]) => {
      mergedProps[key] = (0,esm_extends/* default */.A)({}, currentSlotProps, slotProps[key] || {});
    });
    return mergedProps;
  }, [defaultSlotProps, slotProps]);
  const defaultItems = apiRef.current.unstable_applyPipeProcessors('columnMenu', [], props.colDef);
  const userItems = index_js_.useMemo(() => {
    const defaultComponentKeys = Object.keys(defaultSlots);
    return Object.keys(slots).filter(key => !defaultComponentKeys.includes(key));
  }, [slots, defaultSlots]);
  return index_js_.useMemo(() => {
    const uniqueItems = Array.from(new Set([...defaultItems, ...userItems]));
    const cleansedItems = uniqueItems.filter(key => processedComponents[key] != null);
    const sorted = cleansedItems.sort((a, b) => {
      const leftItemProps = processedSlotProps[a];
      const rightItemProps = processedSlotProps[b];
      const leftDisplayOrder = Number.isFinite(leftItemProps?.displayOrder) ? leftItemProps.displayOrder : 100;
      const rightDisplayOrder = Number.isFinite(rightItemProps?.displayOrder) ? rightItemProps.displayOrder : 100;
      return leftDisplayOrder - rightDisplayOrder;
    });
    return sorted.reduce((acc, key, index) => {
      let itemProps = {
        colDef,
        onClick: hideMenu
      };
      const processedComponentProps = processedSlotProps[key];
      if (processedComponentProps) {
        const customProps = (0,objectWithoutPropertiesLoose/* default */.A)(processedComponentProps, useGridColumnMenuSlots_excluded);
        itemProps = (0,esm_extends/* default */.A)({}, itemProps, customProps);
      }
      return addDividers && index !== sorted.length - 1 ? [...acc, [processedComponents[key], itemProps], [rootProps.slots.baseDivider, {}]] : [...acc, [processedComponents[key], itemProps]];
    }, []);
  }, [addDividers, colDef, defaultItems, hideMenu, processedComponents, processedSlotProps, userItems, rootProps.slots.baseDivider]);
};

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenuContainer.js


const GridColumnMenuContainer_excluded = ["hideMenu", "colDef", "id", "labelledby", "className", "children", "open"];









const StyledMenuList = (0,styled/* default */.Ay)(MenuList/* default */.A)(() => ({
  minWidth: 248
}));
const GridColumnMenuContainer = forwardRef(function GridColumnMenuContainer(props, ref) {
  const {
      hideMenu,
      id,
      labelledby,
      className,
      children,
      open
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnMenuContainer_excluded);
  const handleListKeyDown = index_js_.useCallback(event => {
    if (event.key === 'Tab') {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      hideMenu(event);
    }
  }, [hideMenu]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledMenuList, (0,esm_extends/* default */.A)({
    id: id,
    className: (0,clsx/* default */.A)(gridClasses.menuList, className),
    "aria-labelledby": labelledby,
    onKeyDown: handleListKeyDown,
    autoFocus: open
  }, other, {
    ref: ref,
    children: children
  }));
});
 false ? 0 : void 0;

// EXTERNAL MODULE: ../node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(3213);
// EXTERNAL MODULE: ../node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(4045);
;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuHideItem.js









function GridColumnMenuHideItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
  const columnsWithMenu = visibleColumns.filter(col => col.disableColumnMenu !== true);
  // do not allow to hide the last column with menu
  const disabled = columnsWithMenu.length === 1;
  const toggleColumn = index_js_.useCallback(event => {
    /**
     * Disabled `MenuItem` would trigger `click` event
     * after imperative `.click()` call on HTML element.
     * Also, click is triggered in testing environment as well.
     */
    if (disabled) {
      return;
    }
    apiRef.current.setColumnVisibility(colDef.field, false);
    onClick(event);
  }, [apiRef, colDef.field, onClick, disabled]);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  if (colDef.hideable === false) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
    onClick: toggleColumn,
    disabled: disabled,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuHideIcon, {
        fontSize: "small"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
      children: apiRef.current.getLocaleText('columnMenuHideColumn')
    })]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuManageItem.js









function GridColumnMenuManageItem(props) {
  const {
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showColumns = index_js_.useCallback(event => {
    onClick(event); // hide column menu
    apiRef.current.showPreferences(GridPreferencePanelsValue.columns);
  }, [apiRef, onClick]);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
    onClick: showColumns,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuManageColumnsIcon, {
        fontSize: "small"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
      children: apiRef.current.getLocaleText('columnMenuManageColumns')
    })]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuColumnsItem.js






function GridColumnMenuColumnsItem(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnMenuHideItem, (0,esm_extends/* default */.A)({}, props)), /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnMenuManageItem, (0,esm_extends/* default */.A)({}, props))]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuFilterItem.js








function GridColumnMenuFilterItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showFilter = index_js_.useCallback(event => {
    onClick(event);
    apiRef.current.showFilterPanel(colDef.field);
  }, [apiRef, colDef.field, onClick]);
  if (rootProps.disableColumnFilter || !colDef.filterable) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
    onClick: showFilter,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuFilterIcon, {
        fontSize: "small"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
      children: apiRef.current.getLocaleText('columnMenuFilter')
    })]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuSortItem.js










function GridColumnMenuSortItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const rootProps = useGridRootProps();
  const sortDirection = index_js_.useMemo(() => {
    if (!colDef) {
      return null;
    }
    const sortItem = sortModel.find(item => item.field === colDef.field);
    return sortItem?.sort;
  }, [colDef, sortModel]);
  const sortingOrder = colDef.sortingOrder ?? rootProps.sortingOrder;
  const onSortMenuItemClick = index_js_.useCallback(event => {
    onClick(event);
    const direction = event.currentTarget.getAttribute('data-value') || null;
    apiRef.current.sortColumn(colDef.field, direction === sortDirection ? null : direction);
  }, [apiRef, colDef, onClick, sortDirection]);
  if (rootProps.disableColumnSorting || !colDef || !colDef.sortable || !sortingOrder.some(item => !!item)) {
    return null;
  }
  const getLabel = key => {
    const label = apiRef.current.getLocaleText(key);
    return typeof label === 'function' ? label(colDef) : label;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_js_.Fragment, {
    children: [sortingOrder.includes('asc') && sortDirection !== 'asc' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
      onClick: onSortMenuItemClick,
      "data-value": "asc",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuSortAscendingIcon, {
          fontSize: "small"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
        children: getLabel('columnMenuSortAsc')
      })]
    }) : null, sortingOrder.includes('desc') && sortDirection !== 'desc' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
      onClick: onSortMenuItemClick,
      "data-value": "desc",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(rootProps.slots.columnMenuSortDescendingIcon, {
          fontSize: "small"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
        children: getLabel('columnMenuSortDesc')
      })]
    }) : null, sortingOrder.includes(null) && sortDirection != null ? /*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A, {
      onClick: onSortMenuItemClick,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemIcon/* default */.A, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A, {
        children: apiRef.current.getLocaleText('columnMenuUnsort')
      })]
    }) : null]
  });
}
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenu.js


const GridColumnMenu_excluded = ["defaultSlots", "defaultSlotProps", "slots", "slotProps"];









const GRID_COLUMN_MENU_SLOTS = {
  columnMenuSortItem: GridColumnMenuSortItem,
  columnMenuFilterItem: GridColumnMenuFilterItem,
  columnMenuColumnsItem: GridColumnMenuColumnsItem
};
const GRID_COLUMN_MENU_SLOT_PROPS = {
  columnMenuSortItem: {
    displayOrder: 10
  },
  columnMenuFilterItem: {
    displayOrder: 20
  },
  columnMenuColumnsItem: {
    displayOrder: 30
  }
};
const GridGenericColumnMenu = forwardRef(function GridGenericColumnMenu(props, ref) {
  const {
      defaultSlots,
      defaultSlotProps,
      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnMenu_excluded);
  const orderedSlots = useGridColumnMenuSlots((0,esm_extends/* default */.A)({}, other, {
    defaultSlots,
    defaultSlotProps,
    slots,
    slotProps
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridColumnMenuContainer, (0,esm_extends/* default */.A)({}, other, {
    ref: ref,
    children: orderedSlots.map(([Component, otherProps], index) => /*#__PURE__*/(0,jsx_runtime.jsx)(Component, (0,esm_extends/* default */.A)({}, otherProps), index))
  }));
});
 false ? 0 : void 0;
const GridColumnMenu = forwardRef(function GridColumnMenu(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridGenericColumnMenu, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    defaultSlots: GRID_COLUMN_MENU_SLOTS,
    defaultSlotProps: GRID_COLUMN_MENU_SLOT_PROPS
  }));
});
 false ? 0 : void 0;

;// ../node_modules/@mui/x-data-grid/components/GridDetailPanels.js
function GridDetailPanels(_) {
  return null;
}
;// ../node_modules/@mui/x-data-grid/components/GridPinnedRows.js
function GridPinnedRows(_) {
  return null;
}
;// ../node_modules/@mui/x-data-grid/components/GridNoResultsOverlay.js






const GridNoResultsOverlay = forwardRef(function GridNoResultsOverlay(props, ref) {
  const apiRef = useGridApiContext();
  const noResultsOverlayLabel = apiRef.current.getLocaleText('noResultsOverlayLabel');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridOverlay, (0,esm_extends/* default */.A)({}, props, {
    ref: ref,
    children: noResultsOverlayLabel
  }));
});
// EXTERNAL MODULE: ../node_modules/@mui/material/Badge/Badge.js + 1 modules
var Badge = __webpack_require__(2126);
// EXTERNAL MODULE: ../node_modules/@mui/material/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(2330);
// EXTERNAL MODULE: ../node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(6227);
// EXTERNAL MODULE: ../node_modules/@mui/material/FormControl/FormControl.js
var FormControl = __webpack_require__(6747);
// EXTERNAL MODULE: ../node_modules/@mui/material/Select/Select.js + 1 modules
var Select = __webpack_require__(6069);
// EXTERNAL MODULE: ../node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(4057);
// EXTERNAL MODULE: ../node_modules/@mui/material/IconButton/IconButton.js
var IconButton = __webpack_require__(7963);
// EXTERNAL MODULE: ../node_modules/@mui/material/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(3613);
// EXTERNAL MODULE: ../node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(5211);
// EXTERNAL MODULE: ../node_modules/@mui/material/InputLabel/InputLabel.js
var InputLabel = __webpack_require__(6309);
// EXTERNAL MODULE: ../node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(6878);
;// ../node_modules/@mui/x-data-grid/material/icons/GridColumnUnsortedIcon.js


const GridColumnUnsortedIcon_excluded = ["sortingOrder"];



const GridColumnUnsortedIcon = /*#__PURE__*/index_js_.memo(function GridColumnHeaderSortIcon(props) {
  const {
      sortingOrder
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, GridColumnUnsortedIcon_excluded);
  const rootProps = useGridRootProps();
  const [nextSortDirection] = sortingOrder;
  const Icon = nextSortDirection === 'asc' ? rootProps.slots.columnSortedAscendingIcon : rootProps.slots.columnSortedDescendingIcon;
  return Icon ? /*#__PURE__*/(0,jsx_runtime.jsx)(Icon, (0,esm_extends/* default */.A)({}, other)) : null;
});
// EXTERNAL MODULE: ../node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(6893);
;// ../node_modules/@mui/x-data-grid/material/icons/index.js



const GridArrowUpwardIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
}), 'ArrowUpward');
const GridArrowDownwardIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward');
const GridKeyboardArrowRight = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'KeyboardArrowRight');
const GridExpandMoreIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), 'ExpandMore');
const GridFilterListIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), 'FilterList');
const GridFilterAltIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
}), 'FilterAlt');
const GridSearchIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');
const GridMenuIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');
const GridCheckCircleIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');
const GridColumnIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
}), 'ColumnIcon');
const GridSeparatorIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("rect", {
  width: "1",
  height: "24",
  x: "11.5",
  rx: "0.5"
}), 'Separator');
const GridViewHeadlineIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
}), 'ViewHeadline');
const GridTableRowsIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
}), 'TableRows');
const GridViewStreamIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
}), 'ViewStream');
const GridTripleDotsVerticalIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'TripleDotsVertical');
const GridCloseIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');
const GridAddIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), 'Add');
const GridRemoveIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), 'Remove');
const GridLoadIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
}), 'Load');
const GridDragIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'Drag');
const GridSaveAltIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), 'SaveAlt');
const GridCheckIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');
const GridMoreVertIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreVert');
const GridVisibilityOffIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), 'VisibilityOff');
const GridViewColumnIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("g", {
  children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
  })
}), 'ViewColumn');
const GridClearIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
const GridDeleteIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
const GridDeleteForeverIcon = (0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
;// ../node_modules/@mui/x-data-grid/material/components/MUISelectOption.js


const MUISelectOption_excluded = ["native"];



function MUISelectOption(_ref) {
  let {
      native
    } = _ref,
    props = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, MUISelectOption_excluded);
  if (native) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("option", (0,esm_extends/* default */.A)({}, props));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A, (0,esm_extends/* default */.A)({}, props));
}
;// ../node_modules/@mui/x-data-grid/material/index.js

















const iconSlots = {
  booleanCellTrueIcon: GridCheckIcon,
  booleanCellFalseIcon: GridCloseIcon,
  columnMenuIcon: GridTripleDotsVerticalIcon,
  openFilterButtonIcon: GridFilterListIcon,
  filterPanelDeleteIcon: GridCloseIcon,
  columnFilteredIcon: GridFilterAltIcon,
  columnSelectorIcon: GridColumnIcon,
  columnUnsortedIcon: GridColumnUnsortedIcon,
  columnSortedAscendingIcon: GridArrowUpwardIcon,
  columnSortedDescendingIcon: GridArrowDownwardIcon,
  columnResizeIcon: GridSeparatorIcon,
  densityCompactIcon: GridViewHeadlineIcon,
  densityStandardIcon: GridTableRowsIcon,
  densityComfortableIcon: GridViewStreamIcon,
  exportIcon: GridSaveAltIcon,
  moreActionsIcon: GridMoreVertIcon,
  treeDataCollapseIcon: GridExpandMoreIcon,
  treeDataExpandIcon: GridKeyboardArrowRight,
  groupingCriteriaCollapseIcon: GridExpandMoreIcon,
  groupingCriteriaExpandIcon: GridKeyboardArrowRight,
  detailPanelExpandIcon: GridAddIcon,
  detailPanelCollapseIcon: GridRemoveIcon,
  rowReorderIcon: GridDragIcon,
  quickFilterIcon: GridSearchIcon,
  quickFilterClearIcon: GridCloseIcon,
  columnMenuHideIcon: GridVisibilityOffIcon,
  columnMenuSortAscendingIcon: GridArrowUpwardIcon,
  columnMenuSortDescendingIcon: GridArrowDownwardIcon,
  columnMenuFilterIcon: GridFilterAltIcon,
  columnMenuManageColumnsIcon: GridViewColumnIcon,
  columnMenuClearIcon: GridClearIcon,
  loadIcon: GridLoadIcon,
  filterPanelAddIcon: GridAddIcon,
  filterPanelRemoveAllIcon: GridDeleteForeverIcon,
  columnReorderIcon: GridDragIcon
};
const materialSlots = (0,esm_extends/* default */.A)({}, iconSlots, {
  baseBadge: Badge/* default */.A,
  baseCheckbox: Checkbox/* default */.A,
  baseDivider: Divider/* default */.A,
  baseTextField: TextField/* default */.A,
  baseFormControl: FormControl/* default */.A,
  baseSelect: Select/* default */.A,
  baseButton: Button/* default */.A,
  baseIconButton: IconButton/* default */.A,
  baseInputAdornment: InputAdornment/* default */.A,
  baseTooltip: Tooltip/* default */.A,
  basePopper: Popper/* default */.A,
  baseInputLabel: InputLabel/* default */.A,
  baseSelectOption: MUISelectOption,
  baseChip: Chip/* default */.A
});
/* harmony default export */ const material = (materialSlots);
;// ../node_modules/@mui/x-data-grid/constants/defaultGridSlotsComponents.js










// TODO: camelCase these key. It's a private helper now.
// Remove then need to call `uncapitalizeObjectKeys`.
const DATA_GRID_DEFAULT_SLOTS_COMPONENTS = (0,esm_extends/* default */.A)({}, material, {
  cell: MemoizedGridCell,
  skeletonCell: GridSkeletonCell_Memoized,
  columnHeaderFilterIconButton: GridColumnHeaderFilterIconButtonWrapped,
  columnHeaderSortIcon: GridColumnHeaderSortIcon,
  columnMenu: GridColumnMenu,
  columnHeaders: MemoizedGridColumnHeaders,
  detailPanels: GridDetailPanels,
  footer: GridFooter,
  footerRowCount: GridRowCount,
  toolbar: null,
  pinnedRows: GridPinnedRows,
  loadingOverlay: GridLoadingOverlay,
  noResultsOverlay: GridNoResultsOverlay,
  noRowsOverlay: GridNoRowsOverlay,
  pagination: GridPagination,
  filterPanel: GridFilterPanel,
  columnsPanel: GridColumnsPanel,
  columnsManagement: GridColumnsManagement,
  panel: GridPanel,
  row: MemoizedGridRow
});
;// ../node_modules/@mui/x-data-grid/internals/utils/useProps.js


/** Gathers props for the root element into a single `.forwardedProps` field */
function groupForwardedProps(props) {
  if (props.slotProps?.root) {
    return props;
  }
  const keys = Object.keys(props);
  if (!keys.some(key => key.startsWith('aria-') || key.startsWith('data-'))) {
    return props;
  }
  const newProps = {};
  const forwardedProps = props.forwardedProps ?? {};
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key.startsWith('aria-') || key.startsWith('data-')) {
      forwardedProps[key] = props[key];
    } else {
      newProps[key] = props[key];
    }
  }
  newProps.forwardedProps = forwardedProps;
  return newProps;
}
function useProps(allProps) {
  return index_js_.useMemo(() => groupForwardedProps(allProps), [allProps]);
}
;// ../node_modules/@mui/x-data-grid/internals/utils/computeSlots.js

function computeSlots({
  defaultSlots,
  slots
}) {
  const overrides = slots;
  if (!overrides || Object.keys(overrides).length === 0) {
    return defaultSlots;
  }
  const result = (0,esm_extends/* default */.A)({}, defaultSlots);
  Object.keys(overrides).forEach(key => {
    const k = key;
    if (overrides[k] !== undefined) {
      result[k] = overrides[k];
    }
  });
  return result;
}
;// ../node_modules/@mui/x-data-grid/DataGrid/useDataGridProps.js








const DATA_GRID_FORCED_PROPS = {
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  throttleRowsMs: undefined,
  hideFooterRowCount: false,
  pagination: true,
  checkboxSelectionVisibleOnly: false,
  disableColumnReorder: true,
  keepColumnPositionIfDraggedOutside: false,
  signature: 'DataGrid',
  unstable_listView: false
};
const defaultSlots = DATA_GRID_DEFAULT_SLOTS_COMPONENTS;
const useDataGridProps = inProps => {
  const theme = (0,useTheme/* default */.A)();
  const themedProps = useProps(index_js_.useMemo(() => (0,getThemeProps/* default */.A)({
    props: inProps,
    theme,
    name: 'MuiDataGrid'
  }), [theme, inProps]));
  const localeText = index_js_.useMemo(() => (0,esm_extends/* default */.A)({}, GRID_DEFAULT_LOCALE_TEXT, themedProps.localeText), [themedProps.localeText]);
  const slots = index_js_.useMemo(() => computeSlots({
    defaultSlots,
    slots: themedProps.slots
  }), [themedProps.slots]);
  const injectDefaultProps = index_js_.useMemo(() => {
    return Object.keys(DATA_GRID_PROPS_DEFAULT_VALUES).reduce((acc, key) => {
      // @ts-ignore
      acc[key] = themedProps[key] ?? DATA_GRID_PROPS_DEFAULT_VALUES[key];
      return acc;
    }, {});
  }, [themedProps]);
  return index_js_.useMemo(() => (0,esm_extends/* default */.A)({}, themedProps, injectDefaultProps, {
    localeText,
    slots
  }, DATA_GRID_FORCED_PROPS), [themedProps, localeText, slots, injectDefaultProps]);
};
;// ../node_modules/@mui/x-data-grid/DataGrid/DataGrid.js
'use client';













const configuration = {
  hooks: {
    useGridAriaAttributes: useGridAriaAttributes,
    useGridRowAriaAttributes: useGridRowAriaAttributes,
    useCellAggregationResult: () => null
  }
};
const DataGridRaw = forwardRef(function DataGrid(inProps, ref) {
  const props = useDataGridProps(inProps);
  const privateApiRef = useDataGridComponent(props.apiRef, props);
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GridContextProvider, {
    privateApiRef: privateApiRef,
    configuration: configuration,
    props: props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MemoizedGridRoot, (0,esm_extends/* default */.A)({
      className: props.className,
      style: props.style,
      sx: props.sx
    }, props.forwardedProps, props.slotProps?.root, {
      ref: ref
    }))
  });
});
/**
 * Demos:
 * - [DataGrid](https://mui.com/x/react-data-grid/demo/)
 *
 * API:
 * - [DataGrid API](https://mui.com/x/api/data-grid/data-grid/)
 */
const DataGrid = /*#__PURE__*/index_js_.memo(DataGridRaw);
DataGridRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The ref object that allows Data Grid manipulation. Can be instantiated with `useGridApiRef()`.
   */
  apiRef: prop_types_default().shape({
    current: (prop_types_default()).object.isRequired
  }),
  /**
   * The label of the Data Grid.
   */
  'aria-label': (prop_types_default()).string,
  /**
   * The id of the element containing a label for the Data Grid.
   */
  'aria-labelledby': (prop_types_default()).string,
  /**
   * If `true`, the Data Grid height is dynamic and follows the number of rows in the Data Grid.
   * @default false
   * @deprecated Use flex parent container instead: https://mui.com/x/react-data-grid/layout/#flex-parent-container
   * @example
   * <div style={{ display: 'flex', flexDirection: 'column' }}>
   *   <DataGrid />
   * </div>
   */
  autoHeight: (prop_types_default()).bool,
  /**
   * If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
   * @default false
   */
  autoPageSize: (prop_types_default()).bool,
  /**
   * If `true`, columns are autosized after the datagrid is mounted.
   * @default false
   */
  autosizeOnMount: (prop_types_default()).bool,
  /**
   * The options for autosize when user-initiated.
   */
  autosizeOptions: prop_types_default().shape({
    columns: prop_types_default().arrayOf((prop_types_default()).string),
    disableColumnVirtualization: (prop_types_default()).bool,
    expand: (prop_types_default()).bool,
    includeHeaders: (prop_types_default()).bool,
    includeOutliers: (prop_types_default()).bool,
    outliersFactor: (prop_types_default()).number
  }),
  /**
   * Controls the modes of the cells.
   */
  cellModesModel: (prop_types_default()).object,
  /**
   * If `true`, the Data Grid will display an extra column with checkboxes for selecting rows.
   * @default false
   */
  checkboxSelection: (prop_types_default()).bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types_default()).object,
  /**
   * The character used to separate cell values when copying to the clipboard.
   * @default '\t'
   */
  clipboardCopyCellDelimiter: (prop_types_default()).string,
  /**
   * Column region in pixels to render before/after the viewport
   * @default 150
   */
  columnBufferPx: (prop_types_default()).number,
  /**
   * Sets the height in pixels of the column group headers in the Data Grid.
   * Inherits the `columnHeaderHeight` value if not set.
   */
  columnGroupHeaderHeight: (prop_types_default()).number,
  columnGroupingModel: prop_types_default().arrayOf((prop_types_default()).object),
  /**
   * Sets the height in pixel of the column headers in the Data Grid.
   * @default 56
   */
  columnHeaderHeight: (prop_types_default()).number,
  /**
   * Set of columns of type [[GridColDef]][].
   */
  columns: prop_types_default().arrayOf((prop_types_default()).object).isRequired,
  /**
   * Set the column visibility model of the Data Grid.
   * If defined, the Data Grid will ignore the `hide` property in [[GridColDef]].
   */
  columnVisibilityModel: (prop_types_default()).object,
  /**
   * Set the density of the Data Grid.
   * @default "standard"
   */
  density: prop_types_default().oneOf(['comfortable', 'compact', 'standard']),
  /**
   * If `true`, column autosizing on header separator double-click is disabled.
   * @default false
   */
  disableAutosize: (prop_types_default()).bool,
  /**
   * If `true`, column filters are disabled.
   * @default false
   */
  disableColumnFilter: (prop_types_default()).bool,
  /**
   * If `true`, the column menu is disabled.
   * @default false
   */
  disableColumnMenu: (prop_types_default()).bool,
  /**
   * If `true`, resizing columns is disabled.
   * @default false
   */
  disableColumnResize: (prop_types_default()).bool,
  /**
   * If `true`, hiding/showing columns is disabled.
   * @default false
   */
  disableColumnSelector: (prop_types_default()).bool,
  /**
   * If `true`, the column sorting feature will be disabled.
   * @default false
   */
  disableColumnSorting: (prop_types_default()).bool,
  /**
   * If `true`, the density selector is disabled.
   * @default false
   */
  disableDensitySelector: (prop_types_default()).bool,
  /**
   * If `true`, `eval()` is not used for performance optimization.
   * @default false
   */
  disableEval: (prop_types_default()).bool,
  /**
   * If `true`, multiple selection using the Ctrl/CMD or Shift key is disabled.
   * The MIT DataGrid will ignore this prop, unless `checkboxSelection` is enabled.
   * @default false (`!props.checkboxSelection` for MIT Data Grid)
   */
  disableMultipleRowSelection: (prop_types_default()).bool,
  /**
   * If `true`, the selection on click on a row or cell is disabled.
   * @default false
   */
  disableRowSelectionOnClick: (prop_types_default()).bool,
  /**
   * If `true`, the virtualization is disabled.
   * @default false
   */
  disableVirtualization: (prop_types_default()).bool,
  /**
   * Controls whether to use the cell or row editing.
   * @default "cell"
   */
  editMode: prop_types_default().oneOf(['cell', 'row']),
  /**
   * Use if the actual rowCount is not known upfront, but an estimation is available.
   * If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   * Applicable only with `paginationMode="server"` and when `rowCount="-1"`
   */
  estimatedRowCount: (prop_types_default()).number,
  /**
   * Unstable features, breaking changes might be introduced.
   * For each feature, if the flag is not explicitly set to `true`, the feature will be fully disabled and any property / method call will not have any effect.
   */
  experimentalFeatures: prop_types_default().shape({
    warnIfFocusStateIsNotSynced: (prop_types_default()).bool
  }),
  /**
   * The milliseconds delay to wait after a keystroke before triggering filtering.
   * @default 150
   */
  filterDebounceMs: (prop_types_default()).number,
  /**
   * Filtering can be processed on the server or client-side.
   * Set it to 'server' if you would like to handle filtering on the server-side.
   * @default "client"
   */
  filterMode: prop_types_default().oneOf(['client', 'server']),
  /**
   * Set the filter model of the Data Grid.
   */
  filterModel: prop_types_default().shape({
    items: prop_types_default().arrayOf(prop_types_default().shape({
      field: (prop_types_default()).string.isRequired,
      id: prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]),
      operator: (prop_types_default()).string.isRequired,
      value: (prop_types_default()).any
    })).isRequired,
    logicOperator: prop_types_default().oneOf(['and', 'or']),
    quickFilterExcludeHiddenColumns: (prop_types_default()).bool,
    quickFilterLogicOperator: prop_types_default().oneOf(['and', 'or']),
    quickFilterValues: (prop_types_default()).array
  }),
  /**
   * Forwarded props for the Data Grid root element.
   * @ignore - do not document.
   */
  forwardedProps: (prop_types_default()).object,
  /**
   * Function that applies CSS classes dynamically on cells.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @returns {string} The CSS class to apply to the cell.
   */
  getCellClassName: (prop_types_default()).func,
  /**
   * Function that returns the element to render in row detail.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @returns {React.JSX.Element} The row detail element.
   */
  getDetailPanelContent: (prop_types_default()).func,
  /**
   * Function that returns the estimated height for a row.
   * Only works if dynamic row height is used.
   * Once the row height is measured this value is discarded.
   * @param {GridRowHeightParams} params With all properties from [[GridRowHeightParams]].
   * @returns {number | null} The estimated row height value. If `null` or `undefined` then the default row height, based on the density, is applied.
   */
  getEstimatedRowHeight: (prop_types_default()).func,
  /**
   * Function that applies CSS classes dynamically on rows.
   * @param {GridRowClassNameParams} params With all properties from [[GridRowClassNameParams]].
   * @returns {string} The CSS class to apply to the row.
   */
  getRowClassName: (prop_types_default()).func,
  /**
   * Function that sets the row height per row.
   * @param {GridRowHeightParams} params With all properties from [[GridRowHeightParams]].
   * @returns {GridRowHeightReturnValue} The row height value. If `null` or `undefined` then the default row height is applied. If "auto" then the row height is calculated based on the content.
   */
  getRowHeight: (prop_types_default()).func,
  /**
   * Return the id of a given [[GridRowModel]].
   * Ensure the reference of this prop is stable to avoid performance implications.
   * It could be done by either defining the prop outside of the component or by memoizing it.
   */
  getRowId: (prop_types_default()).func,
  /**
   * Function that allows to specify the spacing between rows.
   * @param {GridRowSpacingParams} params With all properties from [[GridRowSpacingParams]].
   * @returns {GridRowSpacing} The row spacing values.
   */
  getRowSpacing: (prop_types_default()).func,
  /**
   * If `true`, the footer component is hidden.
   * @default false
   */
  hideFooter: (prop_types_default()).bool,
  /**
   * If `true`, the pagination component in the footer is hidden.
   * @default false
   */
  hideFooterPagination: (prop_types_default()).bool,
  /**
   * If `true`, the selected row count in the footer is hidden.
   * @default false
   */
  hideFooterSelectedRowCount: (prop_types_default()).bool,
  /**
   * If `true`, the diacritics (accents) are ignored when filtering or quick filtering.
   * E.g. when filter value is `cafe`, the rows with `café` will be visible.
   * @default false
   */
  ignoreDiacritics: (prop_types_default()).bool,
  /**
   * If `true`, the Data Grid will not use `valueFormatter` when exporting to CSV or copying to clipboard.
   * If an object is provided, you can choose to ignore the `valueFormatter` for CSV export or clipboard export.
   * @default false
   */
  ignoreValueFormatterDuringExport: prop_types_default().oneOfType([prop_types_default().shape({
    clipboardExport: (prop_types_default()).bool,
    csvExport: (prop_types_default()).bool
  }), (prop_types_default()).bool]),
  /**
   * If `select`, a group header checkbox in indeterminate state (like "Select All" checkbox)
   * will select all the rows under it.
   * If `deselect`, it will deselect all the rows under it.
   * Works only if `checkboxSelection` is enabled.
   * @default "deselect"
   * @deprecated `select` will be the default behavior from v8 onwards
   */
  indeterminateCheckboxAction: prop_types_default().oneOf(['deselect', 'select']),
  /**
   * The initial state of the DataGrid.
   * The data in it will be set in the state on initialization but will not be controlled.
   * If one of the data in `initialState` is also being controlled, then the control state wins.
   */
  initialState: (prop_types_default()).object,
  /**
   * Callback fired when a cell is rendered, returns true if the cell is editable.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @returns {boolean} A boolean indicating if the cell is editable.
   */
  isCellEditable: (prop_types_default()).func,
  /**
   * Determines if a row can be selected.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @returns {boolean} A boolean indicating if the row is selectable.
   */
  isRowSelectable: (prop_types_default()).func,
  /**
   * If `true`, the selection model will retain selected rows that do not exist.
   * Useful when using server side pagination and row selections need to be retained
   * when changing pages.
   * @default false
   */
  keepNonExistentRowsSelected: (prop_types_default()).bool,
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: (prop_types_default()).bool,
  /**
   * Set the locale text of the Data Grid.
   * You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/x-data-grid/src/constants/localeTextConstants.ts) in the GitHub repository.
   */
  localeText: (prop_types_default()).object,
  /**
   * Pass a custom logger in the components that implements the [[Logger]] interface.
   * @default console
   */
  logger: prop_types_default().shape({
    debug: (prop_types_default()).func.isRequired,
    error: (prop_types_default()).func.isRequired,
    info: (prop_types_default()).func.isRequired,
    warn: (prop_types_default()).func.isRequired
  }),
  /**
   * Allows to pass the logging level or false to turn off logging.
   * @default "error" ("warn" in dev mode)
   */
  logLevel: prop_types_default().oneOf(['debug', 'error', 'info', 'warn', false]),
  /**
   * Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).
   */
  nonce: (prop_types_default()).string,
  /**
   * Callback fired when any cell is clicked.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellClick: (prop_types_default()).func,
  /**
   * Callback fired when a double click event comes from a cell element.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellDoubleClick: (prop_types_default()).func,
  /**
   * Callback fired when the cell turns to edit mode.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
   */
  onCellEditStart: (prop_types_default()).func,
  /**
   * Callback fired when the cell turns to view mode.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
   */
  onCellEditStop: (prop_types_default()).func,
  /**
   * Callback fired when a keydown event comes from a cell element.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.KeyboardEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellKeyDown: (prop_types_default()).func,
  /**
   * Callback fired when the `cellModesModel` prop changes.
   * @param {GridCellModesModel} cellModesModel Object containing which cells are in "edit" mode.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellModesModelChange: (prop_types_default()).func,
  /**
   * Callback called when the data is copied to the clipboard.
   * @param {string} data The data copied to the clipboard.
   */
  onClipboardCopy: (prop_types_default()).func,
  /**
   * Callback fired when a click event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderClick: (prop_types_default()).func,
  /**
   * Callback fired when a contextmenu event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   */
  onColumnHeaderContextMenu: (prop_types_default()).func,
  /**
   * Callback fired when a double click event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderDoubleClick: (prop_types_default()).func,
  /**
   * Callback fired when a mouse enter event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderEnter: (prop_types_default()).func,
  /**
   * Callback fired when a mouse leave event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderLeave: (prop_types_default()).func,
  /**
   * Callback fired when a mouseout event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderOut: (prop_types_default()).func,
  /**
   * Callback fired when a mouseover event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderOver: (prop_types_default()).func,
  /**
   * Callback fired when a column is reordered.
   * @param {GridColumnOrderChangeParams} params With all properties from [[GridColumnOrderChangeParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnOrderChange: (prop_types_default()).func,
  /**
   * Callback fired while a column is being resized.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnResize: (prop_types_default()).func,
  /**
   * Callback fired when the column visibility model changes.
   * @param {GridColumnVisibilityModel} model The new model.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnVisibilityModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the width of a column is changed.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnWidthChange: (prop_types_default()).func,
  /**
   * Callback fired when the density changes.
   * @param {GridDensity} density New density value.
   */
  onDensityChange: (prop_types_default()).func,
  /**
   * Callback fired when the Filter model changes before the filters are applied.
   * @param {GridFilterModel} model With all properties from [[GridFilterModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onFilterModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the menu is closed.
   * @param {GridMenuParams} params With all properties from [[GridMenuParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onMenuClose: (prop_types_default()).func,
  /**
   * Callback fired when the menu is opened.
   * @param {GridMenuParams} params With all properties from [[GridMenuParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onMenuOpen: (prop_types_default()).func,
  /**
   * Callback fired when the pagination meta has changed.
   * @param {GridPaginationMeta} paginationMeta Updated pagination meta.
   */
  onPaginationMetaChange: (prop_types_default()).func,
  /**
   * Callback fired when the pagination model has changed.
   * @param {GridPaginationModel} model Updated pagination model.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPaginationModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the preferences panel is closed.
   * @param {GridPreferencePanelParams} params With all properties from [[GridPreferencePanelParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPreferencePanelClose: (prop_types_default()).func,
  /**
   * Callback fired when the preferences panel is opened.
   * @param {GridPreferencePanelParams} params With all properties from [[GridPreferencePanelParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPreferencePanelOpen: (prop_types_default()).func,
  /**
   * Callback called when `processRowUpdate` throws an error or rejects.
   * @param {any} error The error thrown.
   */
  onProcessRowUpdateError: (prop_types_default()).func,
  /**
   * Callback fired when the Data Grid is resized.
   * @param {ElementSize} containerSize With all properties from [[ElementSize]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onResize: (prop_types_default()).func,
  /**
   * Callback fired when a row is clicked.
   * Not called if the target clicked is an interactive element added by the built-in columns.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowClick: (prop_types_default()).func,
  /**
   * Callback fired when the row count has changed.
   * @param {number} count Updated row count.
   */
  onRowCountChange: (prop_types_default()).func,
  /**
   * Callback fired when a double click event comes from a row container element.
   * @param {GridRowParams} params With all properties from [[RowParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowDoubleClick: (prop_types_default()).func,
  /**
   * Callback fired when the row turns to edit mode.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
   */
  onRowEditStart: (prop_types_default()).func,
  /**
   * Callback fired when the row turns to view mode.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
   */
  onRowEditStop: (prop_types_default()).func,
  /**
   * Callback fired when the `rowModesModel` prop changes.
   * @param {GridRowModesModel} rowModesModel Object containing which rows are in "edit" mode.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowModesModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the selection state of one or multiple rows changes.
   * @param {GridRowSelectionModel} rowSelectionModel With all the row ids [[GridSelectionModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowSelectionModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the sort model changes before a column is sorted.
   * @param {GridSortModel} model With all properties from [[GridSortModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onSortModelChange: (prop_types_default()).func,
  /**
   * Callback fired when the state of the Data Grid is updated.
   * @param {GridState} state The new state.
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   * @ignore - do not document.
   */
  onStateChange: (prop_types_default()).func,
  /**
   * Select the pageSize dynamically using the component UI.
   * @default [25, 50, 100]
   */
  pageSizeOptions: prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    label: (prop_types_default()).string.isRequired,
    value: (prop_types_default()).number.isRequired
  })]).isRequired),
  pagination: prop_types_default().oneOf([true]),
  /**
   * The extra information about the pagination state of the Data Grid.
   * Only applicable with `paginationMode="server"`.
   */
  paginationMeta: prop_types_default().shape({
    hasNextPage: (prop_types_default()).bool
  }),
  /**
   * Pagination can be processed on the server or client-side.
   * Set it to 'client' if you would like to handle the pagination on the client-side.
   * Set it to 'server' if you would like to handle the pagination on the server-side.
   * @default "client"
   */
  paginationMode: prop_types_default().oneOf(['client', 'server']),
  /**
   * The pagination model of type [[GridPaginationModel]] which refers to current `page` and `pageSize`.
   */
  paginationModel: prop_types_default().shape({
    page: (prop_types_default()).number.isRequired,
    pageSize: (prop_types_default()).number.isRequired
  }),
  /**
   * Callback called before updating a row with new values in the row and cell editing.
   * @template R
   * @param {R} newRow Row object with the new values.
   * @param {R} oldRow Row object with the old values.
   * @param {{ rowId: GridRowId }} params Additional parameters.
   * @returns {Promise<R> | R} The final values to update the row.
   */
  processRowUpdate: (prop_types_default()).func,
  /**
   * If `true`, the page is set to 0 after each sorting or filtering.
   * This prop will be removed in the next major version and resetting the page will become the default behavior.
   * @default false
   */
  resetPageOnSortFilter: (prop_types_default()).bool,
  /**
   * The milliseconds throttle delay for resizing the grid.
   * @default 60
   */
  resizeThrottleMs: (prop_types_default()).number,
  /**
   * Row region in pixels to render before/after the viewport
   * @default 150
   */
  rowBufferPx: (prop_types_default()).number,
  /**
   * Set the total number of rows, if it is different from the length of the value `rows` prop.
   * If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   * Only works with `paginationMode="server"`, ignored when `paginationMode="client"`.
   */
  rowCount: (prop_types_default()).number,
  /**
   * Sets the height in pixel of a row in the Data Grid.
   * @default 52
   */
  rowHeight: (prop_types_default()).number,
  /**
   * Controls the modes of the rows.
   */
  rowModesModel: (prop_types_default()).object,
  /**
   * The milliseconds delay to wait after measuring the row height before recalculating row positions.
   * Setting it to a lower value could be useful when using dynamic row height,
   * but might reduce performance when displaying a large number of rows.
   * @default 166
   * @deprecated
   */
  rowPositionsDebounceMs: (prop_types_default()).number,
  /**
   * Set of rows of type [[GridRowsProp]].
   * @default []
   */
  rows: prop_types_default().arrayOf((prop_types_default()).object),
  /**
   * If `false`, the row selection mode is disabled.
   * @default true
   */
  rowSelection: (prop_types_default()).bool,
  /**
   * Sets the row selection model of the Data Grid.
   */
  rowSelectionModel: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).number, (prop_types_default()).string]).isRequired), (prop_types_default()).number, (prop_types_default()).string]),
  /**
   * Sets the type of space between rows added by `getRowSpacing`.
   * @default "margin"
   */
  rowSpacingType: prop_types_default().oneOf(['border', 'margin']),
  /**
   * Override the height/width of the Data Grid inner scrollbar.
   */
  scrollbarSize: (prop_types_default()).number,
  /**
   * If `true`, vertical borders will be displayed between cells.
   * @default false
   */
  showCellVerticalBorder: (prop_types_default()).bool,
  /**
   * If `true`, vertical borders will be displayed between column header items.
   * @default false
   */
  showColumnVerticalBorder: (prop_types_default()).bool,
  /**
   * Overridable components props dynamically passed to the component at rendering.
   */
  slotProps: (prop_types_default()).object,
  /**
   * Overridable components.
   */
  slots: (prop_types_default()).object,
  /**
   * Sorting can be processed on the server or client-side.
   * Set it to 'client' if you would like to handle sorting on the client-side.
   * Set it to 'server' if you would like to handle sorting on the server-side.
   * @default "client"
   */
  sortingMode: prop_types_default().oneOf(['client', 'server']),
  /**
   * The order of the sorting sequence.
   * @default ['asc', 'desc', null]
   */
  sortingOrder: prop_types_default().arrayOf(prop_types_default().oneOf(['asc', 'desc'])),
  /**
   * Set the sort model of the Data Grid.
   */
  sortModel: prop_types_default().arrayOf(prop_types_default().shape({
    field: (prop_types_default()).string.isRequired,
    sort: prop_types_default().oneOf(['asc', 'desc'])
  })),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),
  /**
   * If `true`, the Data Grid will auto span the cells over the rows having the same value.
   * @default false
   */
  unstable_rowSpanning: (prop_types_default()).bool,
  /**
   * If `true`, the Data Grid enables column virtualization when `getRowHeight` is set to `() => 'auto'`.
   * By default, column virtualization is disabled when dynamic row height is enabled to measure the row height correctly.
   * For datasets with a large number of columns, this can cause performance issues.
   * The downside of enabling this prop is that the row height will be estimated based the cells that are currently rendered, which can cause row height change when scrolling horizontally.
   * @default false
   */
  virtualizeColumnsWithAutoRowHeight: (prop_types_default()).bool
};

/***/ })

}]);
//# sourceMappingURL=308.js.map