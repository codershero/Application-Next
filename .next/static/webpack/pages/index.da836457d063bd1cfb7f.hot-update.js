webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/sections/dale-of-week/DowOne.js":
/*!********************************************************!*\
  !*** ./src/components/sections/dale-of-week/DowOne.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../other/SectionTitle */ "./src/components/other/SectionTitle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\user\\Downloads\\Projects\\ogami-main\\ogami\\src\\components\\sections\\dale-of-week\\DowOne.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var DownOneItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_c = function _c(_ref) {
  var reverse = _ref.reverse,
      data = _ref.data;
  return __jsx("div", {
    className: "dow-one-content__item ".concat(classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "-reverse": reverse
    })),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dow-one-content__item-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "" + data.iconSrc,
    alt: "Dale of the week icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "dow-one-content__item-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, data.title), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, data.description)));
});
_c2 = DownOneItem;

function DowOne(_ref2) {
  var _this2 = this;

  var data = _ref2.data,
      countdownLast = _ref2.countdownLast;
  return __jsx("div", {
    className: "dow-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_other_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Fresh food of the week",
    className: "-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "dow-one-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    align: "center",
    gutter: 15,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, data.slice(0, 2).map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: index,
      span: 24,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx(DownOneItem, {
      reverse: true,
      data: item,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }));
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 0,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "dow-one-image",
    src: "" + "assets/images/sections/dale-of-week/one/img.png",
    alt: "Dale of the week image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    gutter: [0, 30],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, data.slice(2, 4).map(function (item, index) {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      key: index,
      span: 24,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx(DownOneItem, {
      data: item,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }));
  }))))), __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: Date.now() + countdownLast,
    renderer: function renderer(_ref3) {
      var days = _ref3.days,
          hours = _ref3.hours,
          minutes = _ref3.minutes,
          seconds = _ref3.seconds;
      return __jsx("div", {
        className: "dow-one-countdown",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(days)), " ", __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 44
        }
      }, "days")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(hours)), " ", __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 45
        }
      }, "hr")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(minutes), " "), __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 19
        }
      }, "min")), __jsx("div", {
        className: "dow-one-countdown-item",
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, __jsx("h6", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, Object(react_countdown__WEBPACK_IMPORTED_MODULE_2__["zeroPad"])(seconds)), " ", __jsx("span", {
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 47
        }
      }, "sec")));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
}

_c3 = DowOne;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DowOne));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "DownOneItem$React.memo");
$RefreshReg$(_c2, "DownOneItem");
$RefreshReg$(_c3, "DowOne");
$RefreshReg$(_c4, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/LayoutOne */ "./src/components/layout/LayoutOne.js");
/* harmony import */ var _components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/hero-slider/HeroSliderOne */ "./src/components/sections/hero-slider/HeroSliderOne.js");
/* harmony import */ var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json");
var _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/hero-slider.json */ "./src/data/sections/hero-slider.json", 1);
/* harmony import */ var _components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/other/Benefits */ "./src/components/other/Benefits.js");
/* harmony import */ var _components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/categories/CategoriesOne */ "./src/components/sections/categories/CategoriesOne.js");
/* harmony import */ var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json");
var _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/categories.json */ "./src/data/sections/categories.json", 1);
/* harmony import */ var _components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/sections/product-thumb/ProductTab */ "./src/components/sections/product-thumb/ProductTab.js");
/* harmony import */ var _data_categories_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../data/categories.json */ "./src/data/categories.json");
var _data_categories_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/categories.json */ "./src/data/categories.json", 1);
/* harmony import */ var _components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/sections/introduction/IntroductionOne */ "./src/components/sections/introduction/IntroductionOne.js");
/* harmony import */ var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json");
var _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/introduction.json */ "./src/data/sections/introduction.json", 1);
/* harmony import */ var _components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/sections/dale-of-week/DowOne */ "./src/components/sections/dale-of-week/DowOne.js");
/* harmony import */ var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json");
var _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/sections/dale-of-week.json */ "./src/data/sections/dale-of-week.json", 1);
/* harmony import */ var _components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sections/partners/PartnerOne */ "./src/components/sections/partners/PartnerOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/other/Container */ "./src/components/other/Container.js");


var _jsxFileName = "C:\\Users\\user\\Downloads\\Projects\\ogami-main\\ogami\\src\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    daleProducts: ""
  }),
      currentProductTabsCategory = _useState[0],
      setCurrentProductTabsCategory = _useState[1];

  var fetchDaleProductsRequest = _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__["fetchDaleProductsRequest"];
  var shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.shopReducer;
  });
  var daleProducts = shopState.daleProducts;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8
    }));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(fetchDaleProductsRequest({
      limit: 8,
      category: currentProductTabsCategory.daleProducts
    }));
  }, [currentProductTabsCategory.daleProducts]);
  return __jsx(_components_layout_LayoutOne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Homepage 1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(_components_sections_hero_slider_HeroSliderOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _data_sections_hero_slider_json__WEBPACK_IMPORTED_MODULE_6__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(_components_other_Benefits__WEBPACK_IMPORTED_MODULE_7__["default"], {
    threeCol: true,
    style: {
      marginTop: -75 / 16 + "em",
      position: "relative",
      zIndex: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx(_components_sections_categories_CategoriesOne__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _data_sections_categories_json__WEBPACK_IMPORTED_MODULE_9__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_components_sections_product_thumb_ProductTab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    data: daleProducts,
    productCol: {
      xs: 12,
      sm: 8,
      lg: 6
    },
    onTabChange: function onTabChange(val) {
      return setCurrentProductTabsCategory(_objectSpread(_objectSpread({}, currentProductTabsCategory), {}, {
        daleProducts: val
      }));
    },
    headerCategories: _data_categories_json__WEBPACK_IMPORTED_MODULE_11__.slice(0, 5).map(function (item) {
      return item.name;
    }),
    headerTitle: "Fresh food of the week",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })), __jsx(_components_sections_introduction_IntroductionOne__WEBPACK_IMPORTED_MODULE_12__["default"], {
    data: _data_sections_introduction_json__WEBPACK_IMPORTED_MODULE_13__.one,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx(_components_sections_dale_of_week_DowOne__WEBPACK_IMPORTED_MODULE_14__["default"], {
    data: _data_sections_dale_of_week_json__WEBPACK_IMPORTED_MODULE_15__.one,
    countdownLast: 100000000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(_components_sections_partners_PartnerOne__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })));
}

_s(Home, "goGsQFCoaZcznEkkFKg9s6g9Vek=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvZGFsZS1vZi13ZWVrL0Rvd09uZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRvd25PbmVJdGVtIiwiUmVhY3QiLCJtZW1vIiwicmV2ZXJzZSIsImRhdGEiLCJjbGFzc05hbWVzIiwicHJvY2VzcyIsImljb25TcmMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiRG93T25lIiwiY291bnRkb3duTGFzdCIsInNsaWNlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRGF0ZSIsIm5vdyIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiemVyb1BhZCIsIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJkYWxlUHJvZHVjdHMiLCJjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSIsInNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5IiwiZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0Iiwic2hvcEFjdGlvbnMiLCJzaG9wU3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2hvcFJlZHVjZXIiLCJ1c2VFZmZlY3QiLCJsaW1pdCIsImNhdGVnb3J5IiwiaGVyb3NsaWRlT25lRGF0YSIsIm9uZSIsIm1hcmdpblRvcCIsInBvc2l0aW9uIiwiekluZGV4IiwiY2F0ZWdvcmllc09uZURhdGEiLCJ4cyIsInNtIiwibGciLCJ2YWwiLCJjYXRlZ29yaWVzIiwibmFtZSIsImludHJvZHVjdGlvbk9uZURhdGEiLCJkb3dPbmVEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sTUFBVyxrQkFBdUI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFB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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBN0JGLENBREY7QUFtQ0Q7O0dBdER1QmpCLEk7VUFDTEUsdUQsRUFLQ1EsdUQ7OztLQU5JVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRhODM2NDU3ZDA2M2JkMWNmYjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uLy4uL290aGVyL1NlY3Rpb25UaXRsZVwiO1xuXG5jb25zdCBEb3duT25lSXRlbSA9IFJlYWN0Lm1lbW8oKHsgcmV2ZXJzZSwgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZG93LW9uZS1jb250ZW50X19pdGVtICR7Y2xhc3NOYW1lcyh7IFwiLXJldmVyc2VcIjogcmV2ZXJzZSB9KX1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb250ZW50X19pdGVtLWltYWdlXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBkYXRhLmljb25TcmN9XG4gICAgICAgICAgYWx0PVwiRGFsZSBvZiB0aGUgd2VlayBpY29uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvbnRlbnRfX2l0ZW0tY29udGVudFwiPlxuICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cbiAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuZnVuY3Rpb24gRG93T25lKHsgZGF0YSwgY291bnRkb3duTGFzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiRnJlc2ggZm9vZCBvZiB0aGUgd2Vla1wiIGNsYXNzTmFtZT1cIi1jZW50ZXJcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdy1vbmUtY29udGVudFwiPlxuICAgICAgICAgIDxSb3cgYWxpZ249XCJjZW50ZXJcIiBndXR0ZXI9ezE1fT5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17OH0+XG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbMCwgMzBdfT5cbiAgICAgICAgICAgICAgICB7ZGF0YS5zbGljZSgwLCAyKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q29sIGtleT17aW5kZXh9IHNwYW49ezI0fT5cbiAgICAgICAgICAgICAgICAgICAgPERvd25PbmVJdGVtIHJldmVyc2UgZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBtZD17MH0gbGc9ezh9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG93LW9uZS1pbWFnZVwiXG4gICAgICAgICAgICAgICAgc3JjPXtcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xuICAgICAgICAgICAgICAgICAgXCJhc3NldHMvaW1hZ2VzL3NlY3Rpb25zL2RhbGUtb2Ytd2Vlay9vbmUvaW1nLnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsdD1cIkRhbGUgb2YgdGhlIHdlZWsgaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezh9PlxuICAgICAgICAgICAgICA8Um93IGd1dHRlcj17WzAsIDMwXX0+XG4gICAgICAgICAgICAgICAge2RhdGEuc2xpY2UoMiwgNCkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4fSBzcGFuPXsyNH0+XG4gICAgICAgICAgICAgICAgICAgIDxEb3duT25lSXRlbSBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpICsgY291bnRkb3duTGFzdH1cbiAgICAgICAgICByZW5kZXJlcj17KHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvdW50ZG93blwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKGRheXMpfTwvaDY+IDxzcGFuPmRheXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3ctb25lLWNvdW50ZG93bi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDY+e3plcm9QYWQoaG91cnMpfTwvaDY+IDxzcGFuPmhyPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKG1pbnV0ZXMpfSA8L2g2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4+bWluPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93LW9uZS1jb3VudGRvd24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGg2Pnt6ZXJvUGFkKHNlY29uZHMpfTwvaDY+IDxzcGFuPnNlYzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhEb3dPbmUpO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmltcG9ydCAqIGFzIHNob3BBY3Rpb25zIGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BBY3Rpb25zXCI7XG5pbXBvcnQgTGF5b3V0T25lIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXRPbmVcIjtcbmltcG9ydCBIZXJvU2xpZGVyT25lIGZyb20gXCIuLi9jb21wb25lbnRzL3NlY3Rpb25zL2hlcm8tc2xpZGVyL0hlcm9TbGlkZXJPbmVcIjtcbmltcG9ydCBoZXJvc2xpZGVPbmVEYXRhIGZyb20gXCIuLi9kYXRhL3NlY3Rpb25zL2hlcm8tc2xpZGVyLmpzb25cIjtcbmltcG9ydCBCZW5lZml0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9CZW5lZml0c1wiO1xuaW1wb3J0IENhdGVnb3JpZXNPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvY2F0ZWdvcmllcy9DYXRlZ29yaWVzT25lXCI7XG5pbXBvcnQgY2F0ZWdvcmllc09uZURhdGEgZnJvbSBcIi4uL2RhdGEvc2VjdGlvbnMvY2F0ZWdvcmllcy5qc29uXCI7XG5pbXBvcnQgUHJvZHVjdFRhYiBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9wcm9kdWN0LXRodW1iL1Byb2R1Y3RUYWJcIjtcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gXCIuLi9kYXRhL2NhdGVnb3JpZXMuanNvblwiO1xuaW1wb3J0IEludHJvZHVjdGlvbk9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24vSW50cm9kdWN0aW9uT25lXCI7XG5pbXBvcnQgaW50cm9kdWN0aW9uT25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24uanNvblwiO1xuaW1wb3J0IERvd09uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWN0aW9ucy9kYWxlLW9mLXdlZWsvRG93T25lXCI7XG5pbXBvcnQgZG93T25lRGF0YSBmcm9tIFwiLi4vZGF0YS9zZWN0aW9ucy9kYWxlLW9mLXdlZWsuanNvblwiO1xuaW1wb3J0IFBhcnRuZXJPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2VjdGlvbnMvcGFydG5lcnMvUGFydG5lck9uZVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9vdGhlci9Db250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbY3VycmVudFByb2R1Y3RUYWJzQ2F0ZWdvcnksIHNldEN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5XSA9IHVzZVN0YXRlKHtcbiAgICBkYWxlUHJvZHVjdHM6IFwiXCIsXG4gIH0pO1xuICBjb25zdCB7IGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCB9ID0gc2hvcEFjdGlvbnM7XG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xuICBjb25zdCB7IGRhbGVQcm9kdWN0cyB9ID0gc2hvcFN0YXRlO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoRGFsZVByb2R1Y3RzUmVxdWVzdCh7IGxpbWl0OiA4IH0pKTtcbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgZmV0Y2hEYWxlUHJvZHVjdHNSZXF1ZXN0KHtcbiAgICAgICAgbGltaXQ6IDgsXG4gICAgICAgIGNhdGVnb3J5OiBjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5kYWxlUHJvZHVjdHMsXG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtjdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeS5kYWxlUHJvZHVjdHNdKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwiSG9tZXBhZ2UgMVwiPlxuICAgICAgPEhlcm9TbGlkZXJPbmUgZGF0YT17aGVyb3NsaWRlT25lRGF0YS5vbmV9IC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmVuZWZpdHNcbiAgICAgICAgICB0aHJlZUNvbFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Ub3A6IC03NSAvIDE2ICsgXCJlbVwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q2F0ZWdvcmllc09uZSBkYXRhPXtjYXRlZ29yaWVzT25lRGF0YS5vbmV9IC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UHJvZHVjdFRhYlxuICAgICAgICAgIGRhdGE9e2RhbGVQcm9kdWN0c31cbiAgICAgICAgICBwcm9kdWN0Q29sPXt7IHhzOiAxMiwgc206IDgsIGxnOiA2IH19XG4gICAgICAgICAgb25UYWJDaGFuZ2U9eyh2YWwpID0+XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvZHVjdFRhYnNDYXRlZ29yeSh7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRQcm9kdWN0VGFic0NhdGVnb3J5LFxuICAgICAgICAgICAgICBkYWxlUHJvZHVjdHM6IHZhbCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlckNhdGVnb3JpZXM9e2NhdGVnb3JpZXMuc2xpY2UoMCwgNSkubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpfVxuICAgICAgICAgIGhlYWRlclRpdGxlPVwiRnJlc2ggZm9vZCBvZiB0aGUgd2Vla1wiXG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxJbnRyb2R1Y3Rpb25PbmUgZGF0YT17aW50cm9kdWN0aW9uT25lRGF0YS5vbmV9IC8+XG4gICAgICA8RG93T25lIGRhdGE9e2Rvd09uZURhdGEub25lfSBjb3VudGRvd25MYXN0PXsxMDAwMDAwMDB9IC8+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8UGFydG5lck9uZSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9MYXlvdXRPbmU+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9