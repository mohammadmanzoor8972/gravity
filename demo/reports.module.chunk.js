webpackJsonp(["reports.module"],{

/***/ "./src/app/layout/dashboard/reports/reports-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("./src/app/layout/dashboard/reports/reports.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */]
    }
];
var ReportsRoutingModule = (function () {
    function ReportsRoutingModule() {
    }
    return ReportsRoutingModule;
}());
ReportsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], ReportsRoutingModule);

//# sourceMappingURL=reports-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reports-page pt-page-moveFromBottom\">\n  <div class=\"reports-wrapper\">\n    <div class=\"hide\" id='left'>\n        <app-sidebar [hidden]='!show'></app-sidebar>\n    </div>\n    <div class='hide-div-content' id='right'>\n        <div class='reports-btn-fr-wrapper'>\n            <div class='reports-btn-sidebar-collapse'>\n                <a id='btn'  class='fa fa-bars fa-2x'(click)='btnClicked()' aria-hidden=\"true\"></a>\n            </div>\n            <div class=\"fr\">\n                <h2>Reports <small>Work with Chart.js and D3</small></h2>\n            </div>\n        </div>\n        <div class=\"jumbotron\">\n            <div class=\"container\">\n                <h1>Add Charts here</h1>\n                    <p>You can use C3.js or Chart.js</p><br/><br/>\n                    <p>\n                        <a class=\"btn btn-primary btn-lg btn-white\" [routerLink]=\"['/dashboard']\">Back to Overview</a>\n                    </p>\n            </div>\n        </div>\n        <span class=\"glyphicon glyphicon-dashboard bg-fade\"></span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/reports/reports.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
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

var ReportsComponent = (function () {
    function ReportsComponent() {
        this.show = false;
    }
    ReportsComponent.prototype.ngAfterViewInit = function () {
        if (!this.show) {
            document.getElementById('sidebar-reports').style.background =
                '#1abc9c';
        }
    };
    ReportsComponent.prototype.ngOnInit = function () {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
    };
    ReportsComponent.prototype.btnClicked = function () {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reports',
        template: __webpack_require__("./src/app/layout/dashboard/reports/reports.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/reports/reports.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_routing_module__ = __webpack_require__("./src/app/layout/dashboard/reports/reports-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reports_component__ = __webpack_require__("./src/app/layout/dashboard/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__reports_routing_module__["a" /* ReportsRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__["a" /* SidebarModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__reports_component__["a" /* ReportsComponent */]]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ })

});
//# sourceMappingURL=reports.module.chunk.js.map