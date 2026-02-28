"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_list_js"],{

/***/ "./src/js/components/animation/list-animation.js":
/*!*******************************************************!*\
  !*** ./src/js/components/animation/list-animation.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/js/utils/constants.js");




var listAnimation = function listAnimation() {
  var SELECTORS = {
    section: '.js-list-section',
    title: '.js-list-title',
    listWrap: '.js-list-wrap',
    list: '.js-list-block',
    listItem: '.js-list-item',
    card: '.js-list-card',
    shadow: '.js-list-shadow'
  };
  var $section = document.querySelector(SELECTORS.section);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($section)) return;
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));
  var $wrap = $section.querySelector(SELECTORS.listWrap);
  var $list = $section.querySelectorAll(SELECTORS.list);
  var $card = $section.querySelector(SELECTORS.card);
  var $title = $section.querySelectorAll(SELECTORS.title);
  var $shadow = $section.querySelectorAll(SELECTORS.shadow);
  var $globalWrapper = document.querySelector('.js-global-wrapper');
  $globalWrapper.style.paddingBottom = "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.power + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.extracted + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.list, "px");
  var collectListData = function collectListData() {
    var data = [];
    $list.forEach(function (list) {
      var items = list.querySelectorAll(SELECTORS.listItem);
      var obj = {
        list: list,
        items: items
      };
      data.push(obj);
    });
    return data;
  };
  var data = collectListData();
  var startOffset = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.power + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.extracted;
  var endOffset = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.power + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.extracted + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.list;
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
    paused: true,
    defaults: {
      ease: 'none'
    },
    scrollTrigger: {
      trigger: $section,
      start: function start() {
        return window.innerWidth < 1024 ? "top+=".concat(startOffset, " top") : "center+=".concat(startOffset, " center");
      },
      end: function end() {
        return window.innerWidth < 1024 ? "top+=".concat(endOffset, " top") : "center+=".concat(endOffset, " center");
      },
      pin: '.wrapper',
      scrub: true
    }
  });
  var wrapHeight = $wrap.clientHeight;
  data.forEach(function (item, index) {
    var items = item.items,
      list = item.list;
    var itemsCount = items.length;
    var y = wrapHeight - list.clientHeight;
    var stepDuration = 0.2;
    var offset = index === 0 ? '0' : '-=0.2';
    var middleItems = Array.from(items).slice(4, items.length - 4);
    var ratio = middleItems.length / items.length;
    var finalItem = items[items.length - 5];
    var label = "list_start_".concat(index);
    tl.to(list, {
      opacity: 1,
      x: 0,
      duration: 1
    }, offset).to($title[index], {
      opacity: 1
    }).addLabel(label).to(list, {
      y: y,
      duration: stepDuration * itemsCount
    }, label).to(middleItems, {
      webkitTextFillColor: '#dce161',
      webkitTextStrokeColor: 'transparent',
      stagger: stepDuration / ratio,
      duration: stepDuration / 2
    }, label).to(middleItems, {
      webkitTextFillColor: 'transparent',
      webkitTextStrokeColor: '#fff',
      stagger: function stagger(index) {
        return index === middleItems.length - 1 ? 0 : index * stepDuration / ratio;
      },
      duration: stepDuration / 2
    }, "".concat(label, "+=").concat(stepDuration / ratio)).to(finalItem, {
      webkitTextFillColor: '#dce161',
      webkitTextStrokeColor: 'transparent',
      scale: 1.15,
      duration: 1
    }).to(list, {
      opacity: 0,
      x: 50,
      duration: 2
    },
    // `-=${stepDuration}`,
    '+=1').to($title[index], {
      opacity: 0
    }, '<');
  });
  tl.to($card, {
    opacity: 1
  }).to($title[$list.length], {
    opacity: 1
  }, '<').to($shadow, {
    opacity: 0
  }, '<').to({}, {
    duration: 1
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listAnimation);

/***/ }),

/***/ "./src/js/components/list.js":
/*!***********************************!*\
  !*** ./src/js/components/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
/* harmony import */ var ScssComponents_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/list.scss */ "./src/scss/components/list.scss");
/* harmony import */ var _animation_list_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/list-animation */ "./src/js/components/animation/list-animation.js");


var list = function list() {
  (0,_animation_list_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/***/ }),

/***/ "./src/scss/components/list.scss":
/*!***************************************!*\
  !*** ./src/scss/components/list.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_components_list_js.js.map