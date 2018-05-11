webpackJsonp(["common"],{

/***/ "./src/app/shared/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\">\n    <ul class=\"list-group\">\n        <div class='logo'>\n                <img src=\"assets/images/flat-avatar.png\" class=\"user-avatar\" />\n        </div>\n\n        <a id='sidebar-home' class=\"list-group-item home\" [routerLink]=\"['/dashboard']\">\n            HOME\n        </a>\n        <a  id='sidebar-reports' class=\"list-group-item\" [routerLink]=\"['/dashboard/addapp']\">\n            ADD APP\n        </a>\n        <a  id='sidebar-reports' class=\"list-group-item\" [routerLink]=\"['/dashboard/applist']\">\n            APP List\n        </a>\n        <a  class=\"list-group-item\" [routerLink]=\"['/login']\">\n            LOGOUT\n        </a>\n    </ul>\n</nav>\n<!--\n\"['/dashboard/reports']\"\n-->"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = "* {\n  background-color: #18af91; }\n\n.logo {\n  width: 100%;\n  height: 100%;\n  padding: 30px 30px 20px 30px;\n  position: relative; }\n\n.logo img {\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n\n.user-avatar {\n  border-radius: 50%;\n  max-width: 140px;\n  border: 3px solid white; }\n\n.sidebar {\n  border-radius: 0;\n  position: absolute;\n  z-index: 1000;\n  top: 0px;\n  left: 0px;\n  width: 265px;\n  height: 100%;\n  border-radius: 0;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out; }\n\n.sidebar .list-group {\n    position: relative;\n    width: 100%; }\n\n.sidebar .list-group a.list-group-item {\n      border: 0;\n      border-radius: 0;\n      color: #fff;\n      text-decoration: none; }\n\n.sidebar .list-group a.list-group-item .fa {\n        margin-right: 10px; }\n\n.sidebar .list-group a:hover {\n      background: #1abc9c; }\n\n.sidebar .list-group a.router-link-active {\n      background: #1abc9c; }\n"

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/shared/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/sidebar/sidebar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/shared/components/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map