webpackJsonp([0,3],{

/***/ 457:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 457;


/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(604);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/main.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.scrollDown = function () {
    };
    AppComponent.prototype.scrollUp = function () {
    };
    AppComponent.prototype.onWindowScroll = function () {
        //we'll do some stuff here when the window is scrolled
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])("window:scroll", []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(763),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/app.component.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dynamic_grid_dynamic_grid_component__ = __webpack_require__(605);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dynamic_grid_dynamic_grid_component__["a" /* DynamicGridComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/app.module.js.map

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicGridComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicGridComponent = (function () {
    // tiles = [
    //   {text: '', cols: 1, rows: 29, color: 'none'},
    //   // {text: 'gutter', cols: 1, rows: 29, color: 'none'},
    //   {text: 'project one', cols: 6, rows: 6, color: 'lightpink'},
    //   {text: 'description', cols: 4, rows: 6, color: 'lightblue'},
    //   {text: '', cols: 1, rows: 29, color: 'none'},
    //   // {text: 'gutter', cols: 1, rows: 29, color: 'none'},
    //   {text: '', cols: 10, rows: 1, color: 'none'},
    //   // {text: 'divider', cols: 10, rows: 1, color: '#555'},
    //   {text: 'description', cols: 4, rows: 6, color: 'lightblue'},
    //   {text: 'project two', cols: 6, rows: 6, color: 'lightpink'},
    //   {text: '', cols: 10, rows: 1, color: 'none'},
    //   // {text: 'divider', cols: 10, rows: 1, color: '#555'},
    //   {text: '', cols: 2, rows: 6, color: 'none'},
    //   // {text: 'divider', cols: 2, rows: 6, color: '#555'},
    //   {text: 'project three', cols: 4, rows: 5, color: 'lightblue'},
    //   {text: '', cols: 4, rows: 3, color: 'none'},
    //   // {text: 'divider', cols: 4, rows: 3, color: '#555'},
    //   {text: 'description', cols: 4, rows: 3, color: 'lightpink'},
    //   {text: '', cols: 10, rows: 1, color: 'none'},
    //   // {text: 'divider', cols: 10, rows: 1, color: '#555'},
    //   {text: '', cols: 4, rows: 4, color: 'none'},
    //   // {text: 'divider', cols: 4, rows: 4, color: '#777'},
    //   {text: 'project four', cols: 4, rows: 5, color: 'lightblue'},
    //   {text: '', cols: 2, rows: 7, color: 'none'},
    //   // {text: 'divider', cols: 2, rows: 7, color: '#aaa'},
    //   {text: 'description', cols: 4, rows: 3, color: 'lightpink'},
    //   {text: '', cols: 10, rows: 1, color: 'none'},
    //   // {text: 'divider', cols: 10, rows: 1, color: '#555'},
    // ];
    function DynamicGridComponent() {
    }
    DynamicGridComponent.prototype.ngOnInit = function () {
    };
    DynamicGridComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
            selector: 'app-dynamic-grid',
            template: __webpack_require__(764),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [])
    ], DynamicGridComponent);
    return DynamicGridComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/dynamic-grid.component.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/environment.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/ubuntu/workspace/angularMaterialBoilerPlate/src/polyfills.js.map

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(169)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(169)();
// imports


// module
exports.push([module.i, "#list {\n    margin-top: -7%;\n}\n\n#proj-one {\n    background: url(" + __webpack_require__(817) + ") no-repeat center center;\n}\n\n#proj-two {\n    background: url(" + __webpack_require__(816) + ") no-repeat center center;\n}\n\n#proj-three {\n    background: url(" + __webpack_require__(815) + ") no-repeat center center;\n}\n\n#proj-four {\n    background: url(" + __webpack_require__(813) + ") no-repeat center center;\n}\n\n#proj-one,\n#proj-two,\n#proj-three,\n#proj-four {\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    background-size: cover;\n}\n\n#proj-one:hover,\n#proj-two:hover,\n#proj-three:hover,\n#proj-four:hover {\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    -webkit-transition: scale 3s ease;\n    transition: scale 3s ease;\n}\n\n.proj-overlay-1 {\n    background: rgba(34,34,34,0.0);\n    color: #222;\n    font-size: 2rem;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n    transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n}\n\n.proj-overlay {\n    background: rgba(34,34,34,0.0);\n    font-size: 2rem;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n    transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n}\n\n.proj-overlay-1:hover,\n.proj-overlay:hover {\n    /*background: rgba(34,34,34,0.9);*/\n    font-size: 2.1rem;\n    -webkit-transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n    transition: background 0.5s ease, font-size 0.5s ease, color 0.5s ease;\n}\n/*\n.proj-overlay-1:hover {\n    color: #fff;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "<md-toolbar id=\"top\" class=\"flex-center\">\n    <!--<button md-icon-button [mdMenuTriggerFor]=\"menu\">\n            <md-icon>menu</md-icon>\n        </button>\n        <md-menu #menu=\"mdMenu\">\n            <button md-menu-item>\n                <md-icon>perm_identity</md-icon>\n                <span>About</span>\n            </button>\n            <button md-menu-item disabled>\n                <md-icon>voicemail</md-icon>\n                <span>Projects</span>\n            </button>\n            <button md-menu-item>\n                <md-icon>notifications_off</md-icon>\n                <span>Contact</span>\n            </button>\n        </md-menu>-->\n        <ul class=\"nav flex-center flex-100\">\n            <li class=\"nav-link\"><a class=\"nav-item\" href=\"#about\">A B O U T</a><span></span></li>\n            <li class=\"nav-link\"><a class=\"nav-item\" href=\"#projects\">P R O J E C T S</a><span></span></li>\n            <li class=\"nav-link\"><a class=\"nav-item\" href=\"#contact\">C O N T A C T</a><span></span></li>\n        </ul>\n</md-toolbar>\n\n<div id=\"logo\">\n    <a href=\"#hero\">\n        <h1>\n            Da\n            <br>\n            ni\n            <br>\n            Lo\n        </h1>\n    </a>\n</div>\n\n<div id=\"top-right\">\n    <p>\n        <span>Danilo Carandang</span>\n        <span>Web Developer</span>\n    </p>\n</div>\n\n<section id=\"hero\" class=\"hero flex-center full-section\">\n    <div class=\"hero-desc\">\n        <h1>Developer based in San Diego, California.</h1>\n    </div>\n\n    <div id=\"scroll-down\" (click)=\"scrollDown()\">\n        <md-icon>details</md-icon>\n    </div>\n</section>\n\n<div id=\"fab\">\n    <a href=\"#hero\">   \n        <button md-mini-fab>\n            <md-icon>arrow_drop_up</md-icon>\n        </button>\n    </a>    \n</div>\n\n<section class=\"about flex-center full-section\" id=\"about\">\n    <p>This is the section that I tell you about myself and how much I love to code.  Now you know how great I am!</p>\n</section>\n\n<section class=\"projects full-section p-t-50\" id=\"projects\">\n    <app-dynamic-grid></app-dynamic-grid>\n</section>\n\n<section class=\"contact flex-center full-section\" id=\"contact\">\n    <div class=\"form-container flex-center flex-100\">\n        <form action=\"submit\" class=\"flex-100\">\n            <md-grid-list cols=\"12\" rowHeight=\"64px\">\n                <md-grid-tile colspan=\"1\" rowspan=\"6\">\n                    <!--gutter-->\n                </md-grid-tile>\n                <md-grid-tile colspan=\"2\" rowspan=\"6\">\n                    <!--divider-->\n                </md-grid-tile>\n                <md-grid-tile colspan=\"6\" rowspan=\"1\">\n                   <h1 class=\"form-desc flex-100\">C O N T A C T</h1>\n                </md-grid-tile>\n                <md-grid-tile colspan=\"2\" rowspan=\"6\">\n                    <!--divider-->\n                </md-grid-tile>\n                <md-grid-tile colspan=\"1\" rowspan=\"6\">\n                    <!--gutter-->\n                </md-grid-tile>\n                <md-grid-tile colspan=\"3\" rowspan=\"1\">\n                   <input type=\"text\" placeholder=\"First Name*\" class=\"flex-100 p-20\" required>\n                </md-grid-tile>\n                <md-grid-tile colspan=\"3\" rowspan=\"1\">\n                    <input type=\"text\" placeholder=\"Last Name\" class=\"flex-100 p-20\">\n                </md-grid-tile>\n                <md-grid-tile colspan=\"3\" rowspan=\"1\">\n                    <input type=\"text\" placeholder=\"Email*\" class=\"flex-100 p-20\" height=\"100%\" required>\n                </md-grid-tile>\n                <md-grid-tile colspan=\"3\" rowspan=\"1\" class=\"flex-center\">\n                    <span class=\"flex-auto flex-center\">*Requested Field</span>\n                </md-grid-tile>\n                <md-grid-tile colspan=\"6\" rowspan=\"2\">\n                    <textarea name=\"message\" id=\"form-text\" placeholder=\"Message*\" class=\"flex-100 p-20 d-flex m-t-30\" required></textarea>\n                </md-grid-tile>\n                <md-grid-tile colspan=\"6\" rowspan=\"1\">\n                    <button md-raised-button id=\"submit\" type=\"submit\" class=\"flex-100\">S E N D</button>\n                </md-grid-tile>\n            </md-grid-list>\n        </form>\n    </div>\n</section>\n<footer>\n    <md-toolbar class=\"flex-center font-12\"><p>Copyright © Danilo Carandang 2017</p></md-toolbar>\n</footer>"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<md-grid-list id=\"list\" cols=\"12\" rowHeight=\"64px\">\n  <!--<md-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </md-grid-tile>-->\n\n  <md-grid-tile colspan=\"1\" rowspan=\"29\" class=\"gutter\"></md-grid-tile>\n\n  <md-grid-tile colspan=\"6\" rowspan=\"6\" id=\"proj-one\">\n    <div class=\"proj-overlay-1\">project one</div>\n  </md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"6\" id=\"proj-one-desc\">description</md-grid-tile>\n  \n  <md-grid-tile colspan=\"1\" rowspan=\"29\" class=\"gutter\"></md-grid-tile>\n  <md-grid-tile colspan=\"10\" rowspan=\"1\" class=\"divider\"></md-grid-tile>\n\n  <md-grid-tile colspan=\"4\" rowspan=\"6\" id=\"proj-two-desc\">description</md-grid-tile>\n  <md-grid-tile colspan=\"6\" rowspan=\"6\" id=\"proj-two\">\n    <div class=\"proj-overlay\">project two</div>\n  </md-grid-tile>\n\n  <md-grid-tile colspan=\"10\" rowspan=\"1\" class=\"divider\"></md-grid-tile>\n  <md-grid-tile colspan=\"2\" rowspan=\"6\" class=\"divider\"></md-grid-tile>\n\n  <md-grid-tile colspan=\"4\" rowspan=\"5\" id=\"proj-three\">\n    <div class=\"proj-overlay\">project three</div>\n  </md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"3\" class=\"divider\"></md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"3\" id=\"proj-three-desc\">description</md-grid-tile>\n\n  <md-grid-tile colspan=\"10\" rowspan=\"1\" class=\"divider\"></md-grid-tile>\n  <md-grid-tile colspan=\"4\" rowspan=\"4\" class=\"divider\"></md-grid-tile>\n\n  <md-grid-tile colspan=\"4\" rowspan=\"5\" id=\"proj-four\">\n    <div class=\"proj-overlay\">project four</div>\n  </md-grid-tile>\n  \n  <md-grid-tile colspan=\"2\" rowspan=\"7\" class=\"divider\"></md-grid-tile>\n  \n  <md-grid-tile colspan=\"4\" rowspan=\"3\" id=\"proj-four-desc\">description</md-grid-tile>\n  \n  <md-grid-tile colspan=\"10\" rowspan=\"1\" class=\"divider\"></md-grid-tile>\n</md-grid-list>"

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "crew-88121.jpg";

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "john-towner-128480.jpg";

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "patrick-tomasso-88317.jpg";

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "siebe-190131.jpg";

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(458);


/***/ })

},[819]);
//# sourceMappingURL=main.bundle.js.map