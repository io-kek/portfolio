"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_popup-sign-up_js"],{

/***/ "./src/js/components/popup-sign-up.js":
/*!********************************************!*\
  !*** ./src/js/components/popup-sign-up.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPopup: () => (/* binding */ initPopup)
/* harmony export */ });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/js/utils/index.js");

var initPopup = function initPopup(btnSelector, popupSelector) {
  var closeSelector = '.js-popup-close';
  var popupActiveState = 'popup--open_state';
  var bodyPopupOpenState = 'body--popup_open';
  var $btns = document.querySelectorAll(btnSelector);
  var $popup = document.querySelector(popupSelector);
  var $form = $popup.querySelector('form');
  var $closeBtns = document.querySelectorAll(closeSelector);
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)([$btns, $popup])) return null;
  var closePopup = function closePopup() {
    $popup.classList.remove(popupActiveState);
    document.body.classList.remove(bodyPopupOpenState);
    $form.reset();
  };
  $btns.forEach(function ($btn) {
    $btn.addEventListener('click', function (e) {
      e.preventDefault();
      $popup.classList.add(popupActiveState);
      document.body.classList.add(bodyPopupOpenState);
    });
  });
  $popup.addEventListener('click', function (e) {
    if (e.target === $popup) {
      closePopup();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
  if (!(0,_utils_index__WEBPACK_IMPORTED_MODULE_0__.exist)($closeBtns)) return null;
  $closeBtns.forEach(function ($item) {
    $item.addEventListener('click', function () {
      return closePopup();
    });
  });
  return null;
};

/***/ })

}]);
//# sourceMappingURL=src_js_components_popup-sign-up_js.js.map