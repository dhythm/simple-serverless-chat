/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
module.exports["hello-from-lambda"] =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/handlers/hello-from-lambda.ts":
/*!*******************************************!*\
  !*** ./src/handlers/hello-from-lambda.ts ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [maybe used in hello-from-lambda (runtime-defined)] [usage prevents renaming] */
/*! export lambdaHandler [provided] [maybe used in hello-from-lambda (runtime-defined)] [usage prevents renaming] */
/*! other exports [not provided] [maybe used in hello-from-lambda (runtime-defined)] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.lambdaHandler = void 0;\nconst lambdaHandler = (event, context, callback) => {\n    const result = { status: 200, message: 'Hello from Lambda!' };\n    console.info(`${result.message}`);\n    return result.message;\n};\nexports.lambdaHandler = lambdaHandler;\n\n\n//# sourceURL=webpack://%5Bname%5D/./src/handlers/hello-from-lambda.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/handlers/hello-from-lambda.ts");
/******/ })()
;