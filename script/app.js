/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modules: function() { return /* binding */ modules; }
/* harmony export */ });
/* harmony import */ var _widgets_Header_Header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _shared_components_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
// ----------------------------NO-Modules (START)




// ----------------------------NO-Modules (END)

var modules = {
  // -------------------NO-Modules
  initHeaderMenu: _widgets_Header_Header_js__WEBPACK_IMPORTED_MODULE_0__.initHeaderMenu,
  initAccordion: _shared_components_Accordion_Accordion_js__WEBPACK_IMPORTED_MODULE_1__.initAccordion
  // -------------------NO-Modules
};

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeaderMenu: function() { return /* binding */ initHeaderMenu; }
/* harmony export */ });
/* harmony import */ var _utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var initHeaderMenu = function initHeaderMenu() {
  // ---------------------------------------------------------------
  var headerElement = {
    menu: document.querySelector('.menu'),
    openButton: document.querySelector('.menu__open'),
    closeButton: document.querySelector('.menu__close')
  };
  var menu = headerElement.menu,
    openButton = headerElement.openButton,
    closeButton = headerElement.closeButton;
  // ---------------------------------------------------------------

  if (openButton) {
    // ---------------------------------------------------
    var toogleEvent = function toogleEvent(action) {
      menu.classList[action]('_active');
      openButton.classList[action]('_active');

      // Вариант toggle не расматривается.
      action === 'add' ? (0,_utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__.bodyLock)() : (0,_utils_BodyLock__WEBPACK_IMPORTED_MODULE_0__.bodyUnLock)();
    }; // ---------------------------------------------------
    openButton.addEventListener('click', function (event) {
      event.preventDefault();
      toogleEvent('add'); // Активировать

      // Удалить классы при нажатии на closeButton
      if (closeButton) {
        closeButton.addEventListener('click', function (event) {
          toogleEvent('remove');
        });
      }

      // Удаление классов при нажатие на 'Escape' и мимо Меню
      if (menu.classList.contains('_active')) {
        menu.addEventListener('click', function (event) {
          // Проверяем, что клик произошел на .menu__cover
          if (event.target === menu.querySelector('.menu__cover')) {
            toogleEvent('remove');
          }
        });
        document.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
            toogleEvent('remove');
          }
        });
      }
    });
  }
};

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bodyLock: function() { return /* binding */ bodyLock; },
/* harmony export */   bodyUnLock: function() { return /* binding */ bodyUnLock; }
/* harmony export */ });
// Собрать все фиксированные элементы 
var fixedElement = document.querySelectorAll('.fixed-element');

//$ - Lock scrollbar
function bodyLock() {
  var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth + 'px';

  // ---------------------------------------------
  if (fixedElement.length > 0) {
    // Все fixedElement получает paddingRight: 
    for (var index = 0; index < fixedElement.length; index++) {
      var el = fixedElement[index];
      el.style.paddingRight = scrollBarWidth;
    }
  }
  // ---------------------------------------------
  document.body.style.paddingRight = scrollBarWidth;
  document.body.classList.add('_lock-body-hidden');
}

//$ - UnLock scrollbar
function bodyUnLock() {
  setTimeout(function () {
    if (fixedElement.length > 0) {
      // Все fixedElement очистят paddingRight: 
      for (var index = 0; index < fixedElement.length; index++) {
        var el = fixedElement[index];
        el.style.paddingRight = '0px';
      }
    }

    // ------------------------------
    document.body.style.paddingRight = '0px';
    document.body.classList.remove('_lock-body-hidden');
    // ------------------------------

    // Уменьшее задержи для более быстрого появление scrollbar
  }, 300);
}

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAccordion: function() { return /* binding */ initAccordion; }
/* harmony export */ });
var initAccordion = function initAccordion() {
  var spollersArray = document.querySelectorAll('[data-spollers]');
  if (spollersArray.length > 0) {
    // Инициализация
    var initSpollers = function initSpollers(spollersArray) {
      var matchMedia = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      spollersArray.forEach(function (spollersBlock) {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add('_init');
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener("click", setSpollerAction);
        } else {
          spollersBlock.classList.remove('_init');
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener("click", setSpollerAction);
        }
      });
    }; // Работа с контентом
    var initSpollerBody = function initSpollerBody(spollersBlock) {
      var hideSpollerBody = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
        spollerTitles.forEach(function (spollerTitle) {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute('tabindex');
            if (!spollerTitle.classList.contains('_active')) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute('tabindex', '-1');
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    };
    var setSpollerAction = function setSpollerAction(e) {
      var el = e.target;
      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
        var spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
        var spollersBlock = spollerTitle.closest('[data-spollers]');
        var oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
        if (!spollersBlock.querySelectorAll('._slide').length) {
          if (oneSpoller && !spollerTitle.classList.contains('_active')) {
            hideSpollersBody(spollersBlock);
          }
          spollerTitle.classList.toggle('_active');
          _slideToggle(spollerTitle.nextElementSibling, 500);
        }
        e.preventDefault();
      }
    };
    var hideSpollersBody = function hideSpollersBody(spollersBlock) {
      var spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove('_active');
        _slideUp(spollerActiveTitle.nextElementSibling, 500);
      }
    };
    // Получение обычных слойлеров
    var spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
      return !item.dataset.spollers.split(",")[0];
    });

    // Инициализация обычных слойлеров
    if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
    }

    // Получение слойлеров с медиа запросами
    var spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
    });

    // Инициализация слойлеров с медиа запросами
    if (spollersMedia.length > 0) {
      var breakpointsArray = [];
      spollersMedia.forEach(function (item) {
        var params = item.dataset.spollers;
        var breakpoint = {};
        var paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
      });

      // Получаем уникальные брейкпоинты
      var mediaQueries = breakpointsArray.map(function (item) {
        return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQueries = mediaQueries.filter(function (item, index, self) {
        return self.indexOf(item) === index;
      });

      // Работаем с каждым брейкпоинтом
      mediaQueries.forEach(function (breakpoint) {
        var paramsArray = breakpoint.split(",");
        var mediaBreakpoint = paramsArray[1];
        var mediaType = paramsArray[2];
        var matchMedia = window.matchMedia(paramsArray[0]);

        // Объекты с нужными условиями
        var spollersArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        // Событие
        matchMedia.addListener(function () {
          initSpollers(spollersArray, matchMedia);
        });
        initSpollers(spollersArray, matchMedia);
      });
    }
  }
  //========================================================================================================================================================
  //SlideToggle
  var _slideUp = function _slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(function () {
        target.hidden = true;
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };
  var _slideDown = function _slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (target.hidden) {
        target.hidden = false;
      }
      var height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(function () {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_slide');
      }, duration);
    }
  };
  var _slideToggle = function _slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    if (target.hidden) {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  };
};

//====================================================================================================================================================

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_app_scripts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


//-------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  // ------------------------------------
  _components_app_scripts_main__WEBPACK_IMPORTED_MODULE_0__.modules.initHeaderMenu();
  _components_app_scripts_main__WEBPACK_IMPORTED_MODULE_0__.modules.initAccordion();
});
}();
/******/ })()
;
//# sourceMappingURL=app.js.map