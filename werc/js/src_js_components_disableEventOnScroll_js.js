"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_disableEventOnScroll_js"],{

/***/ "./src/js/components/disableEventOnScroll.js":
/*!***************************************************!*\
  !*** ./src/js/components/disableEventOnScroll.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableEventOnScroll: () => (/* binding */ disableEventOnScroll)
/* harmony export */ });
var disableEventOnScroll = function disableEventOnScroll() {
  var $body = document.querySelector('body');
  var timeout = null;
  var addClassOnScroll = function addClassOnScroll() {
    $body.classList.add('body--scrolled_mod');
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      $body.classList.remove('body--scrolled_mod');
    }, 200);
  };
  window.addEventListener('scroll', addClassOnScroll);
};

/***/ })

}]);
//# sourceMappingURL=src_js_components_disableEventOnScroll_js.js.map