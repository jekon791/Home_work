/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/factorial.js":
/*!**************************!*\
  !*** ./src/factorial.js ***!
  \**************************/
/*! exports provided: userNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userNum\", function() { return userNum; });\nfunction factorial(n) {\n  if (n != 1) {\n    return n * factorial(n - 1);\n  } else {\n    return 1;\n  }\n}\n\nfunction userNum() {\n  let number = prompt(\"\", 1);\n  let result = factorial(number);\n  return console.log(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmFjdG9yaWFsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2ZhY3RvcmlhbC5qcz9kZGYxIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZhY3RvcmlhbChuKXtcclxuICAgIGlmKG4hPTEpe3JldHVybiBuKmZhY3RvcmlhbChuLTEpfWVsc2V7cmV0dXJuIDF9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyTnVtKCl7XHJcbiAgICBsZXQgbnVtYmVyPXByb21wdChcIlwiLDEpO1xyXG4gICAgbGV0IHJlc3VsdD1mYWN0b3JpYWwobnVtYmVyKVxyXG4gICAgXHJcbiAgICByZXR1cm4gY29uc29sZS5sb2cocmVzdWx0KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/factorial.js\n");

/***/ }),

/***/ "./src/isEmpty.js":
/*!************************!*\
  !*** ./src/isEmpty.js ***!
  \************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\nfunction start() {\n  let obj = new Object();\n  return isEmpty(obj);\n}\n\nfunction isEmpty(obj) {\n  if (typeof obj === \"object\" && obj !== null) {\n    if (Object.keys(obj).length === 0 && obj.constructor === Object) {\n      return console.log(\"true\");\n    }\n  } else {\n    return console.log(\"false\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaXNFbXB0eS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pc0VtcHR5LmpzP2E2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgIGxldCBvYmogPSBuZXcgT2JqZWN0XHJcbiAgICByZXR1cm4gaXNFbXB0eShvYmopO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gIGlmICh0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiICYmIG9iaiAhPT0gbnVsbCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/isEmpty.js\n");

/***/ }),

/***/ "./src/leapYear.js":
/*!*************************!*\
  !*** ./src/leapYear.js ***!
  \*************************/
/*! exports provided: leapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leapYear\", function() { return leapYear; });\nfunction leapYear() {\n  const date = new Date();\n  let inputStart = prompt(\"start year\", -45);\n  let inputEnd = prompt(\"end year\", date.getFullYear());\n  let leapYear = [];\n  inputStart = parseInt(inputStart, 10);\n  inputEnd = parseInt(inputEnd, 10);\n\n  if (isNaN(inputStart) || isNaN(inputEnd) || inputStart > inputEnd) {\n    return leapYear();\n  } else {\n    while (inputEnd >= inputStart) {\n      if (inputStart % 100 !== 0 && inputStart % 4 === 0 || inputStart % 400 === 0) {\n        leapYear.push(inputStart);\n      }\n\n      inputStart++;\n    }\n\n    console.log(leapYear);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGVhcFllYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGVhcFllYXIuanM/Yjc5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbGVhcFllYXIoKSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IGlucHV0U3RhcnQgPSBwcm9tcHQoXCJzdGFydCB5ZWFyXCIsIC00NSk7XHJcbiAgbGV0IGlucHV0RW5kID0gcHJvbXB0KFwiZW5kIHllYXJcIiwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICBsZXQgbGVhcFllYXIgPSBbXTtcclxuICBpbnB1dFN0YXJ0ID0gcGFyc2VJbnQoaW5wdXRTdGFydCwgMTApO1xyXG4gIGlucHV0RW5kID0gcGFyc2VJbnQoaW5wdXRFbmQsIDEwKTtcclxuICBpZiAoaXNOYU4oaW5wdXRTdGFydCkgfHwgaXNOYU4oaW5wdXRFbmQpIHx8IGlucHV0U3RhcnQgPiBpbnB1dEVuZCkge1xyXG4gICAgcmV0dXJuIGxlYXBZZWFyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChpbnB1dEVuZCA+PSBpbnB1dFN0YXJ0KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAoaW5wdXRTdGFydCAlIDEwMCAhPT0gMCAmJiBpbnB1dFN0YXJ0ICUgNCA9PT0gMCkgfHxcclxuICAgICAgICBpbnB1dFN0YXJ0ICUgNDAwID09PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGxlYXBZZWFyLnB1c2goaW5wdXRTdGFydCk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRTdGFydCsrO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobGVhcFllYXIpO1xyXG4gIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/leapYear.js\n");

/***/ }),

/***/ "./src/randNums.js":
/*!*************************!*\
  !*** ./src/randNums.js ***!
  \*************************/
/*! exports provided: randNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randNumbers\", function() { return randNumbers; });\nfunction randNumbers() {\n  let number = counter();\n  let numbers = [...Array(101).keys()].map(() => number());\n  let numbersArray = shuffleArray(numbers);\n  let sliceArr = numbersArray.slice(0, 50);\n  sliceArr.sort((a, b) => a - b);\n  console.log(\"Массив из 50 чисел =\" + \" \" + sliceArr);\n  return oddAndEven(sliceArr);\n} // Проще было бы сделать через indexOf, но в случаи с рандомом захотелось исключить зацикливание.\n// Хотя не факт, что такое награмождение функций работает быстрее...\n\nfunction shuffleArray(array) {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    [array[i], array[j]] = [array[j], array[i]];\n  }\n\n  return array;\n}\n\nfunction counter() {\n  let step = -1;\n  return function () {\n    return step == 100 ? step = 0 : ++step;\n  };\n}\n\nfunction oddAndEven(arr) {\n  let oddNums = arr.filter(num => num % 2 == 0).reduce((add, a) => add + a, 0);\n  let evenNums = arr.filter(num => num % 2 != 0).reduce((add, a) => add + a, 0);\n  console.log(\"Сумма парных чисел =\" + oddNums);\n  console.log(\"Сумма не парных чисел =\" + evenNums);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmFuZE51bXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmFuZE51bXMuanM/MDc0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZE51bWJlcnMoKSB7XHJcbiAgbGV0IG51bWJlciA9IGNvdW50ZXIoKTtcclxuICBsZXQgbnVtYmVycyA9IFsuLi5BcnJheSgxMDEpLmtleXMoKV0ubWFwKCgpID0+IG51bWJlcigpKTtcclxuICBsZXQgbnVtYmVyc0FycmF5ID0gc2h1ZmZsZUFycmF5KG51bWJlcnMpO1xyXG4gIGxldCBzbGljZUFyciA9IG51bWJlcnNBcnJheS5zbGljZSgwLCA1MCk7XHJcbiAgc2xpY2VBcnIuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gIGNvbnNvbGUubG9nKFwi0JzQsNGB0YHQuNCyINC40LcgNTAg0YfQuNGB0LXQuyA9XCIgKyBcIiBcIiArIHNsaWNlQXJyKTtcclxuICByZXR1cm4gb2RkQW5kRXZlbihzbGljZUFycik7XHJcbn1cclxuXHJcbi8vINCf0YDQvtGJ0LUg0LHRi9C70L4g0LHRiyDRgdC00LXQu9Cw0YLRjCDRh9C10YDQtdC3IGluZGV4T2YsINC90L4g0LIg0YHQu9GD0YfQsNC4INGBINGA0LDQvdC00L7QvNC+0Lwg0LfQsNGF0L7RgtC10LvQvtGB0Ywg0LjRgdC60LvRjtGH0LjRgtGMINC30LDRhtC40LrQu9C40LLQsNC90LjQtS5cclxuLy8g0KXQvtGC0Y8g0L3QtSDRhNCw0LrRgiwg0YfRgtC+INGC0LDQutC+0LUg0L3QsNCz0YDQsNC80L7QttC00LXQvdC40LUg0YTRg9C90LrRhtC40Lkg0YDQsNCx0L7RgtCw0LXRgiDQsdGL0YHRgtGA0LXQtS4uLlxyXG5mdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXkpIHtcclxuICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgW2FycmF5W2ldLCBhcnJheVtqXV0gPSBbYXJyYXlbal0sIGFycmF5W2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3VudGVyKCkge1xyXG4gIGxldCBzdGVwID0gLTE7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHN0ZXAgPT0gMTAwID8gKHN0ZXAgPSAwKSA6ICsrc3RlcDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBvZGRBbmRFdmVuKGFycikge1xyXG4gIGxldCBvZGROdW1zID0gYXJyLmZpbHRlcihudW0gPT4gbnVtICUgMiA9PSAwKS5yZWR1Y2UoKGFkZCwgYSkgPT4gYWRkICsgYSwgMCk7XHJcbiAgbGV0IGV2ZW5OdW1zID0gYXJyLmZpbHRlcihudW0gPT4gbnVtICUgMiAhPSAwKS5yZWR1Y2UoKGFkZCwgYSkgPT4gYWRkICsgYSwgMCk7XHJcbiAgY29uc29sZS5sb2coXCLQodGD0LzQvNCwINC/0LDRgNC90YvRhSDRh9C40YHQtdC7ID1cIiArIG9kZE51bXMpO1xyXG4gIGNvbnNvbGUubG9nKFwi0KHRg9C80LzQsCDQvdC1INC/0LDRgNC90YvRhSDRh9C40YHQtdC7ID1cIiArIGV2ZW5OdW1zKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/randNums.js\n");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factorial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factorial */ \"./src/factorial.js\");\n/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmpty */ \"./src/isEmpty.js\");\n/* harmony import */ var _randNums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./randNums */ \"./src/randNums.js\");\n/* harmony import */ var _leapYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leapYear */ \"./src/leapYear.js\");\n/* harmony import */ var _sortArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortArray */ \"./src/sortArray.js\");\n\n\n\n\n\ndocument.getElementById(\"factorial\").addEventListener(\"click\", _factorial__WEBPACK_IMPORTED_MODULE_0__[\"userNum\"]);\ndocument.getElementById(\"isEmpty\").addEventListener(\"click\", _isEmpty__WEBPACK_IMPORTED_MODULE_1__[\"start\"]);\ndocument.getElementById(\"randNums\").addEventListener(\"click\", _randNums__WEBPACK_IMPORTED_MODULE_2__[\"randNumbers\"]);\ndocument.getElementById(\"leapYear\").addEventListener(\"click\", _leapYear__WEBPACK_IMPORTED_MODULE_3__[\"leapYear\"]);\ndocument.getElementById(\"sortArray\").addEventListener(\"click\", console.log(_sortArray__WEBPACK_IMPORTED_MODULE_4__[\"sortArray\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC5qcz82OGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlck51bX0gZnJvbSBcIi4vZmFjdG9yaWFsXCI7XHJcbmltcG9ydCB7c3RhcnR9IGZyb20gXCIuL2lzRW1wdHlcIjtcclxuaW1wb3J0IHtyYW5kTnVtYmVyc30gZnJvbSBcIi4vcmFuZE51bXNcIjtcclxuaW1wb3J0IHtsZWFwWWVhcn0gZnJvbSBcIi4vbGVhcFllYXJcIjtcclxuaW1wb3J0IHtzb3J0QXJyYXl9IGZyb20gXCIuL3NvcnRBcnJheVwiO1xyXG4gXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhY3RvcmlhbFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix1c2VyTnVtKVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlzRW1wdHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsc3RhcnQpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFuZE51bXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscmFuZE51bWJlcnMpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhcFllYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbGVhcFllYXIpXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydEFycmF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGNvbnNvbGUubG9nKHNvcnRBcnJheSkpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/script.js\n");

/***/ }),

/***/ "./src/sortArray.js":
/*!**************************!*\
  !*** ./src/sortArray.js ***!
  \**************************/
/*! exports provided: sortArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortArray\", function() { return sortArray; });\nlet users = [{\n  id: 1,\n  name: 'Mihail'\n}, {\n  id: 2,\n  name: 'Marina'\n}, {\n  id: 3,\n  name: 'Andrew'\n}, {\n  id: 4,\n  name: 'Ilya'\n}];\nlet sortArray = users.reduce((result, keys) => {\n  result[keys.id] = keys.name;\n  return result;\n}, {});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc29ydEFycmF5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NvcnRBcnJheS5qcz8xMTYyIl0sInNvdXJjZXNDb250ZW50IjpbIiBsZXQgdXNlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiAnTWloYWlsJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdNYXJpbmEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgbmFtZTogJ0FuZHJldydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICBuYW1lOiAnSWx5YSdcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuICBleHBvcnQgbGV0IHNvcnRBcnJheSA9IHVzZXJzLnJlZHVjZSgocmVzdWx0LGtleXMpPT57cmVzdWx0W2tleXMuaWRdID0ga2V5cy5uYW1lOyByZXR1cm4gcmVzdWx0fSx7fSlcclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBTUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sortArray.js\n");

/***/ })

/******/ });