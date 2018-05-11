webpackJsonp(["addapp.module"],{

/***/ "./src/app/layout/dashboard/addapp/addapp-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addappRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addapp_component__ = __webpack_require__("./src/app/layout/dashboard/addapp/addapp.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__addapp_component__["a" /* addappComponent */]
    }
];
var addappRoutingModule = (function () {
    function addappRoutingModule() {
    }
    return addappRoutingModule;
}());
addappRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], addappRoutingModule);

//# sourceMappingURL=addapp-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/addapp/addapp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-page pt-page-moveFromBottom\">\n    <div class=\"wrapper\">\n      <!-- <div class=\"row\"> -->\n      <div class='hide' [hidden]='!show' id='left'>\n          <app-sidebar ></app-sidebar>\n      </div>\n      <div class='hide-div-content' id='right'>\n          <div class='btn-fr-wrapper'>\n              <div class='btn-sidebar-collapse'>\n                  <a id='btn'  class='fa fa-bars fa-2x'(click)='btnClicked()' aria-hidden=\"true\"></a>\n              </div>\n              <div class=\"fr\">\n                  <h2>Overview <small>Why is Versatile Theme so awesome?</small></h2>\n              </div>\n          </div>\n          <div class=\"jumbotron\">\n              <div class=\"container\">\n                  <h1>Add Applications</h1>\n                      Enter your application details, which will published on your other web applications !<br /><br />\n                 \n                  <form \n                  #f=\"ngForm\" \n                  (ngSubmit)=\"submits(f)\" >\n                         \n                      <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Title</label>\n                        <input ngModel type=\"text\" required class=\"form-control input-lg\" #title=\"ngModel\" name=\"title\" placeholder=\"Enter Application Title\">                      \n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Description</label>\n                          <input ngModel type=\"text\" class=\"form-control input-lg\" #description=\"ngModel\" name=\"description\" placeholder=\"Enter Description\">                      \n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Link</label>\n                          <input ngModel type=\"text\" class=\"form-control input-lg\"  name=\"link\" #link=\"ngModel\" placeholder=\"Enter Link\">                      \n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Image Banner</label>\n                          <input ngModel accept=\".jpg,.png,.gif\" type=\"file\" class=\"form-control input-lg\" name=\"image\" #fileInput #image=\"ngModel\" placeholder=\"Enter Link\">                      \n                      </div>                    \n                      <p>\n                          <button type=\"submit\" class=\"btn btn-primary\" >Submit</button>\n                      </p>\n                      \n                    </form>\n              </div>\n          </div>\n      </div>\n      <!-- </div> -->\n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/layout/dashboard/addapp/addapp.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/addapp/addapp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addappComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gravity_service__ = __webpack_require__("./src/app/gravity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var addappComponent = (function () {
    function addappComponent(API, router) {
        this.API = API;
        this.router = router;
        this.show = false;
    }
    addappComponent.prototype.ngAfterViewInit = function () {
        // if (!this.show) {
        //     document.getElementById('sidebar-addapp').style.background =
        //         '#1abc9c';
        // }
    };
    addappComponent.prototype.ngOnInit = function () {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
        this.API.getApp();
    };
    addappComponent.prototype.btnClicked = function () {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    };
    addappComponent.prototype.submits = function (data) {
        var fileBrowser = this.fileInput.nativeElement;
        var param = data.value;
        if (param.title) {
            this.API.addApp(param);
            this.router.navigate(['/dashboard/applist']);
        }
    };
    return addappComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('fileInput'),
    __metadata("design:type", Object)
], addappComponent.prototype, "fileInput", void 0);
addappComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addapp',
        template: __webpack_require__("./src/app/layout/dashboard/addapp/addapp.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/addapp/addapp.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], addappComponent);

var _a, _b;
//# sourceMappingURL=addapp.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/addapp/addapp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addappModule", function() { return addappModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addapp_routing_module__ = __webpack_require__("./src/app/layout/dashboard/addapp/addapp-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addapp_component__ = __webpack_require__("./src/app/layout/dashboard/addapp/addapp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var addappModule = (function () {
    function addappModule() {
    }
    return addappModule;
}());
addappModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__addapp_routing_module__["a" /* addappRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__["a" /* SidebarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__addapp_component__["a" /* addappComponent */]]
    })
], addappModule);

//# sourceMappingURL=addapp.module.js.map

/***/ })

});
//# sourceMappingURL=addapp.module.chunk.js.map