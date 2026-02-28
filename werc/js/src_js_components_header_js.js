"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_header_js"],{

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");

var header = function header() {
  var SELECTORS = {
    header: '.header',
    menuTrigger: '.js-header-menu-trigger',
    menu: '.js-header-menu'
  };
  var CLASSNAMES = {
    bodyOpenMenuState: 'body--open_menu_state',
    headerScrollState: 'header--scroll_state',
    headerScrollPos: 'header--pos_state'
  };
  var $body = document.body;
  var $header = document.querySelector(SELECTORS.header);
  var $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);
  var prevScrollPos = window.scrollY;
  var isMenuOpen = false;
  var handleTriggerClick = function handleTriggerClick() {
    if (!isMenuOpen) {
      $body.classList.add(CLASSNAMES.bodyOpenMenuState);
      isMenuOpen = true;
    } else {
      $body.classList.remove(CLASSNAMES.bodyOpenMenuState);
      isMenuOpen = false;
    }
  };
  var headerScroll = function headerScroll(windowScrollTop) {
    if (windowScrollTop > 10 && !$header.classList.contains(CLASSNAMES.headerScrollState)) {
      $header.classList.add(CLASSNAMES.headerScrollState);
    } else if (windowScrollTop <= 10 && $header.classList.contains(CLASSNAMES.headerScrollState)) {
      $header.classList.remove(CLASSNAMES.headerScrollState);
    }
    if (prevScrollPos > windowScrollTop || windowScrollTop < 10) {
      $header.classList.remove(CLASSNAMES.headerScrollPos);
    } else if (prevScrollPos < windowScrollTop) {
      $header.classList.add(CLASSNAMES.headerScrollPos);
    }
    prevScrollPos = window.scrollY;
  };
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($header)) return;
  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.onWindowScroll)(headerScroll);
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.exist)($menuTriggers)) return;
  $menuTriggers.forEach(function ($trigger) {
    $trigger.addEventListener('click', function () {
      handleTriggerClick();
    });
  });
  document.addEventListener('click', function (e) {
    var isClosest = e.target.closest(SELECTORS.menu) || e.target.closest(SELECTORS.menuTrigger);
    if (isMenuOpen && !isClosest) {
      $body.classList.remove(CLASSNAMES.bodyOpenMenuState);
      isMenuOpen = false;
    }
  });
};

/***/ })

}]);
//# sourceMappingURL=src_js_components_header_js.js.map