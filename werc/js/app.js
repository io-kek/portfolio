(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["app"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_global_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main-global.scss */ "./src/scss/main-global.scss");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var dev_vendors_dev_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dev-vendors/dev-widget */ "./src/js/dev-vendors/dev-widget.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
// scss


// js




var styles = ['color: #fff', 'background: #cf8e1f'].join(';');
var message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);
// -------------------  dev widget
if (utils_constants__WEBPACK_IMPORTED_MODULE_2__.ENV_STATUS.projectDevStatus) {
  (0,dev_vendors_dev_widget__WEBPACK_IMPORTED_MODULE_3__["default"])();
}
// -------------------  dev widget###
// -------------------  import sprite-icons svg
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__("./src/images/icons/sprite-icons sync recursive \\.svg$"));
// -------------------  import sprite-icons svg###

// -------------------  init App
(0,utils__WEBPACK_IMPORTED_MODULE_1__.documentReady)(function () {
  var appInit = new _js_app__WEBPACK_IMPORTED_MODULE_4__["default"]();
});
// -------------------  init App##

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! layout/layout */ "./src/js/layout/layout.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.$htmlTag = document.querySelector('html');
    this.pageName = this.$htmlTag.dataset.templateName && this.$htmlTag.dataset.templateName.length > 0 ? this.$htmlTag.dataset.templateName : null;
    this.init = this.init.bind(this);
    this.init();
  }
  _createClass(App, [{
    key: "importPage",
    value: function importPage() {
      if (this.pageName && this.pageName !== null) {
        __webpack_require__("./src/js/pages lazy recursive ^\\.\\/.*$")("./".concat(this.pageName)).then(function (_ref) {
          var pageFunc = _ref.default;
          var newPage = pageFunc();
        }).catch(function (error) {
          console.error('Failed to load page, check data-template-name at root if correct');
          console.dir(error, error.stack);
        });
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;
      var initLayout = (0,layout_layout__WEBPACK_IMPORTED_MODULE_0__["default"])();
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__.pageLoad)(function () {
        document.body.classList.add('body--loaded');
      });
      setTimeout(function () {
        _this.importPage();
      }, 0);
    }
  }]);
  return App;
}();


/***/ }),

/***/ "./src/js/dev-vendors/dev-widget.js":
/*!******************************************!*\
  !*** ./src/js/dev-vendors/dev-widget.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-plusplus */
var pageWidget = function pageWidget(pages) {
  var widgetWrap = document.createElement('div');
  widgetWrap.className = 'widget_wrap';
  var widgetList = '';
  for (var i = 0; i < pages.length; i++) {
    widgetList += "<li class=\"widget_item\"><a class=\"widget_link\" href=\"".concat(pages[i], ".html\">").concat(pages[i], "</a></li>");
  }
  widgetWrap.innerHTML = "<ul class=\"widget_list\">".concat(widgetList, "</ul>");
  document.body.appendChild(widgetWrap);
  var widgetStyles = '<style>body {position:relative} .widget_wrap{position:absolute;top:100px;left:0;z-index:9999;padding:10px 20px;background:#222;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:"Navigation menu";color:white;position:absolute;top:0;left:100%;width:auto;height:auto;padding:10px;text-transform:uppercase;background:#222;cursor:pointer}.widget_wrap:hover,.widget_wrap:active,.widget_wrap:focus{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline}  </style>';
  widgetWrap.innerHTML += widgetStyles;
};
var pageWidgetArray = [];
var pagesArray = ["article.pug","blog.pug","index.pug","our-story.pug","ui.pug"];
var pageWidgetInit = function pageWidgetInit() {
  if (typeof pagesArray !== 'undefined' && pagesArray.length > 0) {
    // console.log('dev functions loaded');

    pagesArray.forEach(function (page) {
      var pageName = page.split('.').slice(0, -1).join('.');
      pageWidgetArray.push(pageName);
    });

    // console.log(pageWidgetArray);
    pageWidget(pageWidgetArray);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageWidgetInit);

/***/ }),

/***/ "./src/js/layout/layout.js":
/*!*********************************!*\
  !*** ./src/js/layout/layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var ScssComponents_popup_sign_up_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/popup-sign-up.scss */ "./src/scss/components/popup-sign-up.scss");
/* harmony import */ var ScssComponents_popup_form_sign_up_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/popup-form-sign-up.scss */ "./src/scss/components/popup-form-sign-up.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// ------------------- imports

// ------------------- imports###

// ------------------  import components



// ------------------  import components###

var dynamicLoad = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var lazyLoad;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js"), __webpack_require__.e("src_js_components_lazy-load_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../components/lazy-load */ "./src/js/components/lazy-load.js"));
        case 2:
          lazyLoad = _context.sent;
          lazyLoad.lazyLoad();
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee, this);
  }));
  return function dynamicLoad() {
    return _ref.apply(this, arguments);
  };
}();
var layout = function layout() {
  (0,utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
    (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
  });
  (0,utils__WEBPACK_IMPORTED_MODULE_0__.calcViewportHeight)();
  window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var header, initPopup, disableEventOnScroll;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.e(/*! import() */ "src_js_components_header_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/header */ "./src/js/components/header.js"));
        case 2:
          header = _context2.sent;
          header.header();
          setTimeout(function () {
            // dynamicLoad();
          }, 900);
          _context2.next = 7;
          return __webpack_require__.e(/*! import() */ "src_js_components_popup-sign-up_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/popup-sign-up */ "./src/js/components/popup-sign-up.js"));
        case 7:
          initPopup = _context2.sent;
          initPopup.initPopup('.js-waitlist-btn', '.js-popup-sign-up');
          _context2.next = 11;
          return __webpack_require__.e(/*! import() */ "src_js_components_disableEventOnScroll_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/disableEventOnScroll */ "./src/js/components/disableEventOnScroll.js"));
        case 11:
          disableEventOnScroll = _context2.sent;
          disableEventOnScroll.disableEventOnScroll();
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, this);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);

/***/ }),

/***/ "./src/js/utils/constants.js":
/*!***********************************!*\
  !*** ./src/js/utils/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BREAKPOINTS: () => (/* binding */ BREAKPOINTS),
/* harmony export */   BUILD_PATHS: () => (/* binding */ BUILD_PATHS),
/* harmony export */   DEFAULT_GSAP_EASE: () => (/* binding */ DEFAULT_GSAP_EASE),
/* harmony export */   ENV_STATUS: () => (/* binding */ ENV_STATUS),
/* harmony export */   OFFSETS: () => (/* binding */ OFFSETS),
/* harmony export */   RADIAN: () => (/* binding */ RADIAN)
/* harmony export */ });
var ENV_STATUS = {
  projectDevStatus: "development" === 'development',
  projectWpBuildStatus: "development" === 'wp'
};
var phpVars = {
  themeUrl: ''
};
var BUILD_PATHS = {
  // eslint-disable-next-line no-undef
  spritePath:  false ? 0 : 'images/sprite/sprite.svg'
};
var RADIAN = Math.PI / 180;
var DEFAULT_GSAP_EASE = 'expo';
// similar css ease — cubic-bezier(.19, 1, .22, 1)

var BREAKPOINTS = {
  mediaPoint1: 1024,
  mediaPoint2: 768,
  mediaPoint3: 480,
  mediaPoint4: 320
};
var OFFSETS = {
  power: 0,
  extracted: 2000,
  list: 4000
};

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcMobileRemValue: () => (/* binding */ calcMobileRemValue),
/* harmony export */   calcRemValue: () => (/* binding */ calcRemValue),
/* harmony export */   calcViewportHeight: () => (/* binding */ calcViewportHeight),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   debounceImmediate: () => (/* binding */ debounceImmediate),
/* harmony export */   detectUsersOS: () => (/* binding */ detectUsersOS),
/* harmony export */   documentReady: () => (/* binding */ documentReady),
/* harmony export */   exist: () => (/* binding */ exist),
/* harmony export */   getRandom: () => (/* binding */ getRandom),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   getWindowSize: () => (/* binding */ getWindowSize),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice),
/* harmony export */   onWindowChangeOrientation: () => (/* binding */ onWindowChangeOrientation),
/* harmony export */   onWindowResize: () => (/* binding */ onWindowResize),
/* harmony export */   onWindowScroll: () => (/* binding */ onWindowScroll),
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var ismobilejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ismobilejs */ "./node_modules/ismobilejs/esm/index.js");

var exist = function exist(elementOrArray) {
  if (!elementOrArray && elementOrArray !== 0) return false;
  if (elementOrArray.length === 0) {
    return false;
  }
  return true;
};
function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        fired = false;
      }, delay);
    }
  };
}
var isTouchDevice = function isTouchDevice() {
  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
};
var calcViewportHeight = function calcViewportHeight() {
  var isMobileData = (0,ismobilejs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var isApple = isMobileData.apple.phone;
  var isAndroid = isMobileData.android.phone;
  var isSeven = isMobileData.seven_inch;
  if (isApple || isAndroid || isSeven || isTouchDevice()) {
    var vh = window.innerHeight * 0.01;
    // console.log(vh);
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
};
var calcRemValue = function calcRemValue(_ref) {
  var windowWidth = _ref.windowWidth,
    windowHeight = _ref.windowHeight;
  var remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;
  document.documentElement.style.setProperty('--rem', "".concat(remValue, "px"));
};
var calcMobileRemValue = function calcMobileRemValue(_ref2) {
  var windowHeight = _ref2.windowHeight;
  var mobileRemValue = windowHeight / 800 * 10;
  document.documentElement.style.setProperty('--mobile-rem', "".concat(mobileRemValue, "px"));
};
var getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
var getRandom = function getRandom(min, max) {
  return Math.random() * (max - min) + min;
};
function isFunction(func) {
  return func instanceof Function;
}
function getWindowSize() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  return {
    windowWidth: windowWidth,
    windowHeight: windowHeight
  };
}
var onWindowResize = function onWindowResize(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleResize = function handleResize() {
    cb();
  };
  window.addEventListener('resize', debounce(15, handleResize));
  handleResize();
};
var detectUsersOS = function detectUsersOS() {
  if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';
  if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';
  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';
  if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';
  if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';
  return null;
};
var onWindowChangeOrientation = function onWindowChangeOrientation(cb) {
  if (!cb && !isFunction(cb) || !isTouchDevice()) return;
  var _getWindowSize = getWindowSize(),
    windowWidth = _getWindowSize.windowWidth;
  var handleResize = function handleResize() {
    var _getWindowSize2 = getWindowSize(),
      newWindowWidth = _getWindowSize2.windowWidth;
    if (windowWidth !== newWindowWidth) cb();
    windowWidth = newWindowWidth;
  };
  window.addEventListener('resize', debounce(100, handleResize));
};
var onWindowScroll = function onWindowScroll(cb) {
  if (!cb && !isFunction(cb)) return;
  var handleScroll = function handleScroll(e) {
    cb(window.scrollY);
  };
  window.addEventListener('scroll', debounce(15, handleScroll));
  handleScroll();
};
var documentReady = function documentReady(cb) {
  if (!cb && !isFunction(cb)) return;
  document.addEventListener('DOMContentLoaded', cb);
};
var pageLoad = function pageLoad(cb) {
  if (!cb && !isFunction(cb)) return;
  window.addEventListener('load', cb);
};

/***/ }),

/***/ "./node_modules/ismobilejs/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/ismobilejs/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isMobile */ "./node_modules/ismobilejs/esm/isMobile.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ismobilejs/esm/isMobile.js":
/*!*************************************************!*\
  !*** ./node_modules/ismobilejs/esm/isMobile.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMobile)
/* harmony export */ });
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function (navigator) {
    return (typeof navigator !== 'undefined' &&
        navigator.platform === 'MacIntel' &&
        typeof navigator.maxTouchPoints === 'number' &&
        navigator.maxTouchPoints > 1 &&
        typeof MSStream === 'undefined');
};
function createMatch(userAgent) {
    return function (regex) { return regex.test(userAgent); };
}
function isMobile(param) {
    var nav = {
        userAgent: '',
        platform: '',
        maxTouchPoints: 0
    };
    if (!param && typeof navigator !== 'undefined') {
        nav = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
    }
    else if (typeof param === 'string') {
        nav.userAgent = param;
    }
    else if (param && param.userAgent) {
        nav = {
            userAgent: param.userAgent,
            platform: param.platform,
            maxTouchPoints: param.maxTouchPoints || 0
        };
    }
    var userAgent = nav.userAgent;
    var tmp = userAgent.split('[FBAN');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    tmp = userAgent.split('Twitter');
    if (typeof tmp[1] !== 'undefined') {
        userAgent = tmp[0];
    }
    var match = createMatch(userAgent);
    var result = {
        apple: {
            phone: match(appleIphone) && !match(windowsPhone),
            ipod: match(appleIpod),
            tablet: !match(appleIphone) &&
                (match(appleTablet) || isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone),
            universal: match(appleUniversal),
            device: (match(appleIphone) ||
                match(appleIpod) ||
                match(appleTablet) ||
                match(appleUniversal) ||
                isAppleTabletOnIos13(nav)) &&
                !match(windowsPhone)
        },
        amazon: {
            phone: match(amazonPhone),
            tablet: !match(amazonPhone) && match(amazonTablet),
            device: match(amazonPhone) || match(amazonTablet)
        },
        android: {
            phone: (!match(windowsPhone) && match(amazonPhone)) ||
                (!match(windowsPhone) && match(androidPhone)),
            tablet: !match(windowsPhone) &&
                !match(amazonPhone) &&
                !match(androidPhone) &&
                (match(amazonTablet) || match(androidTablet)),
            device: (!match(windowsPhone) &&
                (match(amazonPhone) ||
                    match(amazonTablet) ||
                    match(androidPhone) ||
                    match(androidTablet))) ||
                match(/\bokhttp\b/i)
        },
        windows: {
            phone: match(windowsPhone),
            tablet: match(windowsTablet),
            device: match(windowsPhone) || match(windowsTablet)
        },
        other: {
            blackberry: match(otherBlackBerry),
            blackberry10: match(otherBlackBerry10),
            opera: match(otherOpera),
            firefox: match(otherFirefox),
            chrome: match(otherChrome),
            device: match(otherBlackBerry) ||
                match(otherBlackBerry10) ||
                match(otherOpera) ||
                match(otherFirefox) ||
                match(otherChrome)
        },
        any: false,
        phone: false,
        tablet: false
    };
    result.any =
        result.apple.device ||
            result.android.device ||
            result.windows.device ||
            result.other.device;
    result.phone =
        result.apple.phone || result.android.phone || result.windows.phone;
    result.tablet =
        result.apple.tablet || result.android.tablet || result.windows.tablet;
    return result;
}
//# sourceMappingURL=isMobile.js.map

/***/ }),

/***/ "./src/scss/components/popup-form-sign-up.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/popup-form-sign-up.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/popup-sign-up.scss":
/*!************************************************!*\
  !*** ./src/scss/components/popup-sign-up.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/main-global.scss":
/*!***********************************!*\
  !*** ./src/scss/main-global.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/icons/sprite-icons/arrow.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite-icons/arrow.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "arrow-usage",
      viewBox: "0 0 57 34.64",
      url: "/images/sprite/" + "sprite.svg#arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/back-arrow.svg":
/*!******************************************************!*\
  !*** ./src/images/icons/sprite-icons/back-arrow.svg ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "back-arrow-usage",
      viewBox: "0 0 24 24",
      url: "/images/sprite/" + "sprite.svg#back-arrow-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/email.svg":
/*!*************************************************!*\
  !*** ./src/images/icons/sprite-icons/email.svg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "email-usage",
      viewBox: "0 0 10.59 8.47",
      url: "/images/sprite/" + "sprite.svg#email-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/eye-off.svg":
/*!***************************************************!*\
  !*** ./src/images/icons/sprite-icons/eye-off.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "eye-off-usage",
      viewBox: "0 0 21 21",
      url: "/images/sprite/" + "sprite.svg#eye-off-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/facebook.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/facebook.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "facebook-usage",
      viewBox: "0 0 24 25",
      url: "/images/sprite/" + "sprite.svg#facebook-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/filter.svg":
/*!**************************************************!*\
  !*** ./src/images/icons/sprite-icons/filter.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "filter-usage",
      viewBox: "0 0 11 11",
      url: "/images/sprite/" + "sprite.svg#filter-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/imdb.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite-icons/imdb.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "imdb-usage",
      viewBox: "0 0 700 289.84",
      url: "/images/sprite/" + "sprite.svg#imdb-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/instagram.svg":
/*!*****************************************************!*\
  !*** ./src/images/icons/sprite-icons/instagram.svg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "instagram-usage",
      viewBox: "0 0 733.33 733.33",
      url: "/images/sprite/" + "sprite.svg#instagram-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/linkedin.svg":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/linkedin.svg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "linkedin-usage",
      viewBox: "0 0 24 24",
      url: "/images/sprite/" + "sprite.svg#linkedin-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/pencil.svg":
/*!**************************************************!*\
  !*** ./src/images/icons/sprite-icons/pencil.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "pencil-usage",
      viewBox: "0 0 21 21",
      url: "/images/sprite/" + "sprite.svg#pencil-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/pin.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite-icons/pin.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "pin-usage",
      viewBox: "0 0 8.64 10.99",
      url: "/images/sprite/" + "sprite.svg#pin-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/refresh.svg":
/*!***************************************************!*\
  !*** ./src/images/icons/sprite-icons/refresh.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "refresh-usage",
      viewBox: "0 0 11 11",
      url: "/images/sprite/" + "sprite.svg#refresh-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/search.svg":
/*!**************************************************!*\
  !*** ./src/images/icons/sprite-icons/search.svg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "search-usage",
      viewBox: "0 0 11 12",
      url: "/images/sprite/" + "sprite.svg#search-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/sort.svg":
/*!************************************************!*\
  !*** ./src/images/icons/sprite-icons/sort.svg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "sort-usage",
      viewBox: "0 0 12 11",
      url: "/images/sprite/" + "sprite.svg#sort-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/tel.svg":
/*!***********************************************!*\
  !*** ./src/images/icons/sprite-icons/tel.svg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "tel-usage",
      viewBox: "0 0 10.65 10.17",
      url: "/images/sprite/" + "sprite.svg#tel-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons/twitter.svg":
/*!***************************************************!*\
  !*** ./src/images/icons/sprite-icons/twitter.svg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "twitter-usage",
      viewBox: "0 0 24 24",
      url: "/images/sprite/" + "sprite.svg#twitter-usage",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/images/icons/sprite-icons sync recursive \\.svg$":
/*!****************************************************!*\
  !*** ./src/images/icons/sprite-icons/ sync \.svg$ ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow.svg": "./src/images/icons/sprite-icons/arrow.svg",
	"./back-arrow.svg": "./src/images/icons/sprite-icons/back-arrow.svg",
	"./email.svg": "./src/images/icons/sprite-icons/email.svg",
	"./eye-off.svg": "./src/images/icons/sprite-icons/eye-off.svg",
	"./facebook.svg": "./src/images/icons/sprite-icons/facebook.svg",
	"./filter.svg": "./src/images/icons/sprite-icons/filter.svg",
	"./imdb.svg": "./src/images/icons/sprite-icons/imdb.svg",
	"./instagram.svg": "./src/images/icons/sprite-icons/instagram.svg",
	"./linkedin.svg": "./src/images/icons/sprite-icons/linkedin.svg",
	"./pencil.svg": "./src/images/icons/sprite-icons/pencil.svg",
	"./pin.svg": "./src/images/icons/sprite-icons/pin.svg",
	"./refresh.svg": "./src/images/icons/sprite-icons/refresh.svg",
	"./search.svg": "./src/images/icons/sprite-icons/search.svg",
	"./sort.svg": "./src/images/icons/sprite-icons/sort.svg",
	"./tel.svg": "./src/images/icons/sprite-icons/tel.svg",
	"./twitter.svg": "./src/images/icons/sprite-icons/twitter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/icons/sprite-icons sync recursive \\.svg$";

/***/ }),

/***/ "./src/js/pages lazy recursive ^\\.\\/.*$":
/*!******************************************************!*\
  !*** ./src/js/pages/ lazy ^\.\/.*$ namespace object ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./": [
		"./src/js/pages/index.js",
		"vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_js_pages_index_js"
	],
	"./article": [
		"./src/js/pages/article.js",
		"vendors-node_modules_swiper_swiper_css-node_modules_swiper_swiper_mjs",
		"node_modules_swiper_swiper_css-src_scss_components_team-card_scss-src_scss_components_team-sl-d2a587",
		"src_js_pages_article_js"
	],
	"./article.js": [
		"./src/js/pages/article.js",
		"vendors-node_modules_swiper_swiper_css-node_modules_swiper_swiper_mjs",
		"node_modules_swiper_swiper_css-src_scss_components_team-card_scss-src_scss_components_team-sl-d2a587",
		"src_js_pages_article_js"
	],
	"./blog": [
		"./src/js/pages/blog.js",
		"src_js_pages_blog_js"
	],
	"./blog.js": [
		"./src/js/pages/blog.js",
		"src_js_pages_blog_js"
	],
	"./index": [
		"./src/js/pages/index.js",
		"vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_js_pages_index_js"
	],
	"./index.js": [
		"./src/js/pages/index.js",
		"vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_js_pages_index_js"
	],
	"./our-story": [
		"./src/js/pages/our-story.js",
		"vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_js_pages_our-story_js"
	],
	"./our-story.js": [
		"./src/js/pages/our-story.js",
		"vendors-node_modules_gsap_dist_ScrollTrigger_js-node_modules_gsap_index_js",
		"src_js_pages_our-story_js"
	],
	"./ui": [
		"./src/js/pages/ui.js",
		"src_js_pages_ui_js"
	],
	"./ui.js": [
		"./src/js/pages/ui.js",
		"src_js_pages_ui_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=app.js.map