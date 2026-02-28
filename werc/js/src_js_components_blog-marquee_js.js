"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_blog-marquee_js"],{

/***/ "./src/js/components/blog-marquee.js":
/*!*******************************************!*\
  !*** ./src/js/components/blog-marquee.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blogMarquee: () => (/* binding */ blogMarquee)
/* harmony export */ });
/* harmony import */ var ScssComponents_blog_marquee_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/blog-marquee.scss */ "./src/scss/components/blog-marquee.scss");
/* harmony import */ var _marquee_blog_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marquee-blog-animation */ "./src/js/components/marquee-blog-animation.js");


var blogMarquee = function blogMarquee() {
  (0,_marquee_blog_animation__WEBPACK_IMPORTED_MODULE_1__["default"])({
    trackSelector: '.js-marquee-track',
    slideSelector: '.js-marquee-content'
  });
};

/***/ }),

/***/ "./src/js/components/marquee-blog-animation.js":
/*!*****************************************************!*\
  !*** ./src/js/components/marquee-blog-animation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");



var marqueeBlogAnimation = function marqueeBlogAnimation() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    trackSelector = _ref.trackSelector,
    slideSelector = _ref.slideSelector;
  var $tracks = document.querySelectorAll(trackSelector);
  if (!$tracks.length) return null;
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()));
  gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default().refresh();
  var defaultSpeed = 2;
  var speed = defaultSpeed;
  var tickers = [];
  var addTicker = function addTicker(fn) {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].ticker.add(fn, false);
  };
  var removeTicker = function removeTicker(fn) {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].ticker.remove(fn);
  };
  var init = function init() {
    $tracks.forEach(function ($track, index) {
      var _$track$dataset;
      var $slides = $track.querySelectorAll(slideSelector);
      var defaultOffset = ($track === null || $track === void 0 || (_$track$dataset = $track.dataset) === null || _$track$dataset === void 0 ? void 0 : _$track$dataset.offset) || 0;
      var changeSpeedOnScroll = !!$track.dataset.changeSpeed;
      if ($slides.length < 2) return;
      var trackWidth = $slides[0].clientWidth;
      var offset = defaultOffset;
      gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set($track, {
        x: offset
      });
      tickers[index] = function () {
        if (offset <= -trackWidth) {
          offset = 0;
        } else if (offset > 0) {
          offset = -trackWidth;
        }
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].set($track, {
          x: offset
        });
        offset -= speed;
      };
      gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default().create({
        trigger: $track,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: function onEnter() {
          return addTicker(tickers[index]);
        },
        onEnterBack: function onEnterBack() {
          return addTicker(tickers[index]);
        },
        onLeave: function onLeave() {
          return removeTicker(tickers[index]);
        },
        onLeaveBack: function onLeaveBack() {
          return removeTicker(tickers[index]);
        }
      });
    });
  };
  var prevWindowWidth = null;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onWindowResize)(function () {
    var _getWindowSize = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)(),
      windowWidth = _getWindowSize.windowWidth;
    if (windowWidth !== prevWindowWidth) {
      tickers.forEach(function (ticker) {
        removeTicker(ticker);
      });
      init();
    }
    prevWindowWidth = windowWidth;
  });
  return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (marqueeBlogAnimation);

/***/ }),

/***/ "./src/scss/components/blog-marquee.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/blog-marquee.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_components_blog-marquee_js.js.map