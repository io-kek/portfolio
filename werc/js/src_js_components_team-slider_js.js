"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_team-slider_js"],{

/***/ "./src/js/components/team-slider.js":
/*!******************************************!*\
  !*** ./src/js/components/team-slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   teamSlider: () => (/* binding */ teamSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var ScssComponents_team_slider_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/team-slider.scss */ "./src/scss/components/team-slider.scss");
/* harmony import */ var ScssComponents_team_card_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ScssComponents/team-card.scss */ "./src/scss/components/team-card.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");





var teamSlider = function teamSlider() {
  var SELECTORS = {
    wrapper: '.js-team-slider-wrapper',
    slider: '.js-team-slider'
  };
  var $sliders = document.querySelectorAll(SELECTORS.wrapper);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.exist)($sliders)) return;
  $sliders.forEach(function ($wrapper) {
    var $slider = $wrapper.querySelector(SELECTORS.slider);
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_4__.exist)($slider)) return;
    var slider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]($slider, {
      watchOverflow: true,
      autoHeight: true,
      speed: 800,
      slidesPerView: 'auto'
    });
  });
};

/***/ }),

/***/ "./src/scss/components/team-card.scss":
/*!********************************************!*\
  !*** ./src/scss/components/team-card.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/team-slider.scss":
/*!**********************************************!*\
  !*** ./src/scss/components/team-slider.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_components_team-slider_js.js.map