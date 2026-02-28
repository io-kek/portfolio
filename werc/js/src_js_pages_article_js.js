"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_article_js"],{

/***/ "./src/js/components/article-content.js":
/*!**********************************************!*\
  !*** ./src/js/components/article-content.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_article_content_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/article-content.scss */ "./src/scss/components/article-content.scss");

var articleContent = function articleContent() {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleContent);

/***/ }),

/***/ "./src/js/components/copy-link.js":
/*!****************************************!*\
  !*** ./src/js/components/copy-link.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_copy_link_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/copy-link.scss */ "./src/scss/components/copy-link.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");


var copyLink = function copyLink() {
  var copyLinkUrlToClipboard = function copyLinkUrlToClipboard(event) {
    event.preventDefault(); // Prevent link redirection

    var $link = event.target;
    var $urlToCopy = $link.getAttribute('href');
    window.navigator.clipboard.writeText(event.target.getAttribute('href')).then(function () {
      // Add the class to provide visual feedback
      $link.classList.add('copy_link--copied');

      // Remove the class after 3 seconds
      setTimeout(function () {
        $link.classList.remove('copy_link--copied');
      }, 3000);
    });
  };

  // Attach the click event listener to the link
  var $copyLink = document.querySelector('.js-copy-link');
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.exist)($copyLink)) return;
  $copyLink.addEventListener('click', copyLinkUrlToClipboard);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyLink);

/***/ }),

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

/***/ "./src/js/pages/article.js":
/*!*********************************!*\
  !*** ./src/js/pages/article.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_article_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/article-content */ "./src/js/components/article-content.js");
/* harmony import */ var _components_copy_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/copy-link */ "./src/js/components/copy-link.js");
/* harmony import */ var _components_team_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/team-slider */ "./src/js/components/team-slider.js");



var article = function article() {
  (0,_components_article_content__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_components_copy_link__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_components_team_slider__WEBPACK_IMPORTED_MODULE_2__.teamSlider)();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (article);

/***/ }),

/***/ "./src/scss/components/article-content.scss":
/*!**************************************************!*\
  !*** ./src/scss/components/article-content.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/copy-link.scss":
/*!********************************************!*\
  !*** ./src/scss/components/copy-link.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
//# sourceMappingURL=src_js_pages_article_js.js.map