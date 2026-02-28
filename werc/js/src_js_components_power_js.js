"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_power_js"],{

/***/ "./src/js/components/animation/power-animation.js":
/*!********************************************************!*\
  !*** ./src/js/components/animation/power-animation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var ScssComponents_power_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ScssComponents/power.scss */ "./src/scss/components/power.scss");





var powerAnimation = function powerAnimation() {
  gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default()));
  var SELECTORS = {
    section: '.js-power-section',
    image: '.js-power-image'
  };
  var $section = document.querySelector(SELECTORS.section);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($section)) return;
  var $images = $section.querySelectorAll(SELECTORS.image);
  var tl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
    paused: true,
    defaults: {
      ease: 'none'
    },
    repeat: -1,
    scrollTrigger: {
      trigger: $section,
      start: 'top bottom',
      end: "bottom+=".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.extracted, " top"),
      toggleActions: 'play pause play pause'
    }
  });
  var baseDuration = 14;
  tl.fromTo($images[0], {
    yPercent: 0
  }, {
    yPercent: -100,
    duration: baseDuration
  });
  $images.forEach(function (el, index) {
    if (index !== 0) {
      tl.fromTo(el, {
        yPercent: 0
      }, {
        yPercent: -100,
        duration: baseDuration
      }, "-=".concat(baseDuration)).to(el, {
        yPercent: -200,
        duration: baseDuration
      });
    }
  });
  tl.fromTo($images[0], {
    yPercent: 100
  }, {
    yPercent: 0,
    duration: baseDuration
  }, "-=".concat(baseDuration));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (powerAnimation);

/***/ }),

/***/ "./src/js/components/animation/social-orbits.js":
/*!******************************************************!*\
  !*** ./src/js/components/animation/social-orbits.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");



var socialOrbits = function socialOrbits() {
  var SELECTORS = {
    block: '.js-social-orbit-block',
    el: '.js-social-orbit',
    icon: '.js-social-orbit-icon',
    desktopSvg: '.js-desktop-orbit-svg',
    mobileSvg: '.js-mobile-orbit-svg'
  };
  gsap__WEBPACK_IMPORTED_MODULE_1__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default()));
  var $block = document.querySelector(SELECTORS.block);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($block)) return;
  var elements = $block.querySelectorAll(SELECTORS.el);
  var icon = $block.querySelectorAll(SELECTORS.icon);
  var desktopSvg = $block.querySelector(SELECTORS.desktopSvg);
  var mobileSvg = $block.querySelector(SELECTORS.mobileSvg);
  var mm = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].matchMedia();
  var createOrbitAnim = function createOrbitAnim(svg) {
    var tl = [];
    var svgViewBox = svg.getAttribute('viewBox').split(/\s+/).map(Number);
    var svgOrigin = "".concat(svgViewBox[2] / 2, " ").concat(svgViewBox[3] / 2);
    elements.forEach(function (el, index) {
      tl[index] = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
        repeat: -1,
        defaults: {
          ease: 'none'
        },
        scrollTrigger: {
          trigger: svg,
          start: 'top bottom',
          end: 'top+=400% top',
          toggleActions: 'play pause play pause'
        }
      });
      var duration = Math.random() * 8 + 20;
      tl[index].to(el, {
        rotation: 360,
        svgOrigin: svgOrigin,
        duration: duration
      }).to(icon[index], {
        rotation: -360,
        transformOrigin: '50% 50%',
        duration: duration
      }, '<');
    });
  };
  mm.add('(min-width: 1024px)', function () {
    createOrbitAnim(desktopSvg);
  });
  mm.add('(max-width: 1023px)', function () {
    createOrbitAnim(mobileSvg);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socialOrbits);

/***/ }),

/***/ "./src/js/components/power.js":
/*!************************************!*\
  !*** ./src/js/components/power.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   power: () => (/* binding */ power)
/* harmony export */ });
/* harmony import */ var ScssComponents_power_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/power.scss */ "./src/scss/components/power.scss");
/* harmony import */ var _animation_power_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/power-animation */ "./src/js/components/animation/power-animation.js");
/* harmony import */ var _animation_social_orbits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation/social-orbits */ "./src/js/components/animation/social-orbits.js");



var power = function power() {
  (0,_animation_social_orbits__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_animation_power_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/***/ }),

/***/ "./src/scss/components/power.scss":
/*!****************************************!*\
  !*** ./src/scss/components/power.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_components_power_js.js.map