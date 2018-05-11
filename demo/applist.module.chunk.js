webpackJsonp(["applist.module"],{

/***/ "./src/app/layout/dashboard/applist/applist-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applistRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applist_component__ = __webpack_require__("./src/app/layout/dashboard/applist/applist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__applist_component__["a" /* applistComponent */]
    }
];
var applistRoutingModule = (function () {
    function applistRoutingModule() {
    }
    return applistRoutingModule;
}());
applistRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], applistRoutingModule);

//# sourceMappingURL=applist-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/applist/applist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reports-page pt-page-moveFromBottom\">\n  <div class=\"reports-wrapper\">\n    <div class=\"hide\" id='left'>\n        <app-sidebar [hidden]='!show'></app-sidebar>\n    </div>\n    <div class='hide-div-content' id='right'>\n        <div class='reports-btn-fr-wrapper'>\n            <div class='reports-btn-sidebar-collapse'>\n                <a id='btn'  class='fa fa-bars fa-2x'(click)='btnClicked()' aria-hidden=\"true\"></a>\n            </div>\n            <div class=\"fr\">\n                <h2>Applications list <small>Choose application to promote.</small></h2>\n            </div>\n        </div>\n        <div class=\"jumbotron jumbotron-fluid scrollbar\">\n            <div class=\"container\">\n                   \n                <h1>Applications List \n                   </h1>\n                   <button class=\"btn btn-primary pull-right\" [hidden]=\"privateMode==true\" (click)=\"pilot()\">Pilot Mode</button>\n                   <button class=\"btn btn-primary pull-right\"  [hidden]=\"privateMode==false\" (click)=\"pilotStop()\">Stop Pilot Mode</button>\n                <br /><br />\n                <div class=\"card\" *ngFor=\"let item of applistData\"  [class.isPublish]=\"item.isPublish==true\">\n                        <h5 class=\"card-header\">{{item.title}} </h5>\n                        <div class=\"card-body\">\n                          <img src=\"http://localhost:4300/gallery/{{item.image}}.jpg\"/>\n                          <button class=\"btn btn-primary pull-right\" \n                          (click)=\"publish(item)\" \n                          [hidden]=\"privateMode==true\"\n                          *ngIf=\"item.isPublish==false\">Publish !</button>\n                         \n                          <button class=\"btn btn-danger pull-right\" \n                          (click)=\"unpublish(item)\" \n                          [hidden]=\"privateMode==true\"\n                          *ngIf=\"item.isPublish==true\">Remove</button>\n                        </div>\n                </div>\n            \n                  \n                    \n                    \n                    <br/><br/>\n                   \n            </div>\n        </div>\n       \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/applist/applist.component.scss":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  height: 100%;\n  overflow-y: scroll; }\n\n.card {\n  color: black;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.isPublish {\n  background-color: #49f382; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/applist/applist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gravity_service__ = __webpack_require__("./src/app/gravity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var applistComponent = (function () {
    function applistComponent(API) {
        this.API = API;
        this.show = false;
        this.privateMode = false;
        this.applistData = API.getApp();
    }
    applistComponent.prototype.ngAfterViewInit = function () {
    };
    applistComponent.prototype.ngOnInit = function () {
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
    };
    applistComponent.prototype.publish = function (data) {
        /* var x = confirm("Would you like to publish ad !")
         var self = this;
         if(x){
             this.API.publishApp(data, true)
             this.applistData = this.API.getApp();
         } */
        this.API.publishApp(data, true);
        this.applistData = this.API.getApp();
    };
    applistComponent.prototype.unpublish = function (data) {
        this.API.unpublishApp(data);
        this.applistData = this.API.getApp();
    };
    applistComponent.prototype.pilot = function () {
        var that = this;
        this.privateMode = true;
        var count = 0;
        var applistCount = that.applistData.length - 1;
        this.interval = setInterval(function () {
            that.API.publishApp(that.applistData[count], true);
            that.applistData = that.API.getApp();
            if (applistCount == count) {
                //clearInterval(i);
                count = 0;
            }
            else {
                count++;
            }
        }, 3000);
    };
    applistComponent.prototype.pilotStop = function () {
        this.privateMode = false;
        clearInterval(this.interval);
    };
    applistComponent.prototype.btnClicked = function () {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    };
    return applistComponent;
}());
applistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-applist',
        template: __webpack_require__("./src/app/layout/dashboard/applist/applist.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/applist/applist.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */]) === "function" && _a || Object])
], applistComponent);

var _a;
//# sourceMappingURL=applist.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/applist/applist.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applistModule", function() { return applistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__applist_routing_module__ = __webpack_require__("./src/app/layout/dashboard/applist/applist-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applist_component__ = __webpack_require__("./src/app/layout/dashboard/applist/applist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_pipe__ = __webpack_require__("./src/app/search.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var applistModule = (function () {
    function applistModule() {
    }
    return applistModule;
}());
applistModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__applist_routing_module__["a" /* applistRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__["a" /* SidebarModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__applist_component__["a" /* applistComponent */], __WEBPACK_IMPORTED_MODULE_5__search_pipe__["a" /* SearchPipe */]]
    })
], applistModule);

//# sourceMappingURL=applist.module.js.map

/***/ }),

/***/ "./src/app/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'search'
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ })

});
//# sourceMappingURL=applist.module.chunk.js.map