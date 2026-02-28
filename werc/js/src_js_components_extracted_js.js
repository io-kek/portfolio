"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_extracted_js"],{

/***/ "./src/js/components/animation/extracted-animation.js":
/*!************************************************************!*\
  !*** ./src/js/components/animation/extracted-animation.js ***!
  \************************************************************/
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




var extractedAnimation = function extractedAnimation() {
  var SELECTORS = {
    section: '.js-extracted-section',
    title: '.js-extracted-title',
    item: '.js-extracted-item',
    preview: '.js-extracted-preview',
    previewVerifyBtn: '.js-extracted-preview-verify-btn',
    verifyBtn: '.js-extracted-verify-btn',
    previewVerified: '.js-extracted-preview-title-verified',
    verified: '.js-extracted-title-verified',
    cursor: '.js-extracted-cursor',
    previewAvatars: '.js-extracted-preview-avatars',
    avatars: '.js-extracted-avatars'
  };
  var $section = document.querySelector(SELECTORS.section);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($section)) return;
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3___default()));
  var $titles = $section.querySelectorAll(SELECTORS.title);
  var $preview = $section.querySelector(SELECTORS.preview);
  var $cursor = $section.querySelector(SELECTORS.cursor);
  var $previewVerifyBtn = $section.querySelector(SELECTORS.previewVerifyBtn);
  var $verifyBtn = $section.querySelectorAll(SELECTORS.verifyBtn);
  var $previewAvatars = $section.querySelectorAll(SELECTORS.previewAvatars);
  var $avatars = $section.querySelectorAll(SELECTORS.avatars);
  var $previewVerified = $section.querySelectorAll(SELECTORS.previewVerified);
  var $verified = $section.querySelectorAll(SELECTORS.verified);
  var mm = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].matchMedia();
  var startOffset = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.power;
  var endOffset = _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.power + _utils_constants__WEBPACK_IMPORTED_MODULE_1__.OFFSETS.extracted;
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
  mm.add('(min-width: 1024px)', function () {
    $titles.forEach(function (item, index) {
      tl.to(item, {
        yPercent: -100,
        duration: 2
      });
      if (index === 1) {
        tl.to($preview, {
          opacity: 1,
          scale: 1,
          x: 0,
          y: 0,
          duration: 2
        }, '-=2').fromTo($cursor, {
          opacity: 0
        }, {
          opacity: 1
        }).fromTo($cursor, {
          x: 250,
          y: 40
        }, {
          x: 0,
          y: 0,
          duration: 2,
          ease: 'power2.out'
        }).to($previewVerifyBtn, {
          scale: 1.2,
          duration: 1
        }).to($previewVerifyBtn, {
          scale: 0,
          duration: 1.4
        }).to($cursor, {
          opacity: 0,
          duration: 1
        });
      }
      if (index === 2) {
        tl.to($previewAvatars, {
          opacity: 1,
          stagger: 0.6
        }, '-=3').fromTo($previewVerified, {
          opacity: 0,
          y: 15
        }, {
          opacity: 1,
          y: 0
        }, '<').to({}, {
          duration: 1
        });
      }
      if (index !== $titles.length - 1 && index !== 0) {
        tl.to(item, {
          // opacity: 0,
          yPercent: -200,
          duration: 2
        });
      }
    });
  });
  mm.add('(max-width: 1023px)', function () {
    $titles.forEach(function (item, index) {
      // tl.to(item, {
      // 	opacity: 1,
      // 	duration: 2,
      // });
      tl.to(item, {
        yPercent: -100,
        duration: 2
      });
      if (index === 1) {
        tl.to($verifyBtn, {
          scale: 0,
          opacity: 0,
          duration: 1.4
        }).to($avatars, {
          opacity: 1,
          stagger: 0.2
        }, '<').fromTo($verified, {
          opacity: 0,
          y: 15
        }, {
          opacity: 1,
          y: 0
        }, '<');
      }
      if (index !== $titles.length - 1 && index !== 0) {
        tl.to(item, {
          // opacity: 0,
          yPercent: -200,
          duration: 2
        });
      }
    });
  });

  // eslint-disable-next-line consistent-return
  return tl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractedAnimation);

/***/ }),

/***/ "./src/js/components/extracted.js":
/*!****************************************!*\
  !*** ./src/js/components/extracted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extracted: () => (/* binding */ extracted)
/* harmony export */ });
/* harmony import */ var ScssComponents_extracted_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/extracted.scss */ "./src/scss/components/extracted.scss");
/* harmony import */ var _animation_extracted_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/extracted-animation */ "./src/js/components/animation/extracted-animation.js");


var extracted = function extracted() {
  (0,_animation_extracted_animation__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/***/ }),

/***/ "./src/scss/components/extracted.scss":
/*!********************************************!*\
  !*** ./src/scss/components/extracted.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_components_extracted_js.js.map