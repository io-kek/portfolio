"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_components_lazy-load_js"],{

/***/ "./src/js/components/lazy-load.js":
/*!****************************************!*\
  !*** ./src/js/components/lazy-load.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lazyLoad: () => (/* binding */ lazyLoad)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ "./node_modules/gsap/dist/ScrollTrigger.js");
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);


var lazyLoad = function lazyLoad() {
  console.log('laaaaaaaaaaaazy');
  // NOTE: just put data-src to your img/video tag or data-srcset to <source> tag of picture
  var $nodes = document.querySelectorAll('[data-src]');
  console.log($nodes);
  if (!$nodes.length) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default()));

  // $nodes.forEach(($node) => {
  // 	const $parent = $node.parentElement;
  // 	const wrapperMode = $parent.tagName;
  // 	const srcSet = $node.dataset.srcset;
  // 	const source = $node.dataset.src;
  // 	const $poster = $parent.querySelector('.js-video-poster');

  // 	if (!srcSet && !source) return;

  // 	const needRefresh = $node.dataset.refresh === undefined || $parent.dataset.refresh === undefined;

  // 	const trigger = ScrollTrigger.create({
  // 		trigger: wrapperMode === 'VIDEO' ? $parent : $node,
  // 		start: 'top-=200% bottom',
  // 		end: 'bottom+=200% top',
  // 		onEnter: () => {
  // 			// eslint-disable-next-line no-param-reassign
  // 			$node.oncanplay = () => {
  // 				$poster.classList.add('hero__video_poster--loaded_mod');
  // 				trigger?.kill();
  // 				if (needRefresh) {
  // 					ScrollTrigger.refresh();
  // 				}
  // 			};

  // 			if (wrapperMode === 'PICTURE') {
  // 				const $sources = $parent.querySelectorAll('source');
  // 				$sources.forEach(($src) => {
  // 					// eslint-disable-next-line no-param-reassign
  // 					$src.srcset = $src.dataset.srcset;
  // 				});
  // 			}

  // 			// eslint-disable-next-line no-param-reassign
  // 			$node.src = source;

  // 			if (wrapperMode === 'VIDEO') {
  // 				console.warn('lazy loading doesnt work for video <source> tag, use data-src for <video> only');
  // 			}
  // 		},
  // 	});
  // });
};

/***/ })

}]);
//# sourceMappingURL=src_js_components_lazy-load_js.js.map