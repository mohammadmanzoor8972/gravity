webpackJsonp(["track.module"],{

/***/ "./src/app/layout/dashboard/track/track-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_component__ = __webpack_require__("./src/app/layout/dashboard/track/track.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__track_component__["a" /* trackComponent */]
    }
];
var trackRoutingModule = (function () {
    function trackRoutingModule() {
    }
    return trackRoutingModule;
}());
trackRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], trackRoutingModule);

//# sourceMappingURL=track-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/track/track.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reports-page pt-page-moveFromBottom\">\n  <div class=\"reports-wrapper\">\n    <div class=\"hide\" id='left'>\n        <app-sidebar [hidden]='!show'></app-sidebar>\n    </div>\n    <div class='hide-div-content' id='right'>\n        <div class='reports-btn-fr-wrapper'>\n            <div class='reports-btn-sidebar-collapse'>\n                <a id='btn'  class='fa fa-bars fa-2x'(click)='btnClicked()' aria-hidden=\"true\"></a>\n            </div>\n            <div class=\"fr\">\n                <h2>Applications Track <small>Advertisment logs</small></h2>\n            </div>\n        </div>\n        <div class=\"jumbotron jumbotron-fluid scrollbar\">\n            <div class=\"container\">\n                   \n                <h1>Applications Track \n                   </h1>\n                  \n                <br /><br />\n                <div class=\"card\" >\n                    {{item|json}}\n\n                    <table class=\"table\">\n                        <thead>\n                          <tr>\n                            <th scope=\"col\">#</th>\n                            <th scope=\"col\">hostname</th>\n                            <th scope=\"col\">url</th>\n                            <th scope=\"col\">path</th>\n                          </tr>\n                        </thead>\n                        <tbody >\n                          <tr *ngFor=\"let item of trackData;let i = index\">\n                            <th scope=\"row\">{{i+1}}</th>\n                            <td>{{item.host}}</td>\n                            <td>{{item.href}}</td>\n                            <td>{{item.pathname}}</td>\n                          </tr>\n                         \n                        </tbody>\n                      </table>\n                </div>\n            \n                  \n                    \n                    \n                    <br/><br/>\n                   \n            </div>\n        </div>       \n       \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/track/track.component.scss":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n  height: 100%;\n  overflow-y: scroll; }\n\n.card {\n  color: black;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.isPublish {\n  background-color: #49f382; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/track/track.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trackComponent; });
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


var trackComponent = (function () {
    function trackComponent(API) {
        this.API = API;
        this.show = false;
        this.privateMode = false;
    }
    trackComponent.prototype.ngAfterViewInit = function () {
    };
    trackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
        this.API.trackApp().subscribe(function (data) {
            _this.trackData = data;
        });
    };
    trackComponent.prototype.publish = function (data) {
        /* var x = confirm("Would you like to publish ad !")
         var self = this;
         if(x){
             this.API.publishApp(data, true)
             this.trackData = this.API.getApp();
         } */
        this.API.publishApp(data, true);
        this.trackData = this.API.getApp();
    };
    trackComponent.prototype.unpublish = function (data) {
        this.API.unpublishApp(data);
        this.trackData = this.API.getApp();
    };
    trackComponent.prototype.pilot = function () {
        var that = this;
        this.privateMode = true;
        var count = 0;
        var trackCount = that.trackData.length - 1;
        this.interval = setInterval(function () {
            that.API.publishApp(that.trackData[count], true);
            that.trackData = that.API.getApp();
            if (trackCount == count) {
                //clearInterval(i);
                count = 0;
            }
            else {
                count++;
            }
        }, 3000);
    };
    trackComponent.prototype.pilotStop = function () {
        this.privateMode = false;
        clearInterval(this.interval);
    };
    trackComponent.prototype.btnClicked = function () {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    };
    return trackComponent;
}());
trackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-track',
        template: __webpack_require__("./src/app/layout/dashboard/track/track.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/track/track.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */]) === "function" && _a || Object])
], trackComponent);

var _a;
//# sourceMappingURL=track.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/track/track.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackModule", function() { return trackModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__track_routing_module__ = __webpack_require__("./src/app/layout/dashboard/track/track-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__track_component__ = __webpack_require__("./src/app/layout/dashboard/track/track.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var trackModule = (function () {
    function trackModule() {
    }
    return trackModule;
}());
trackModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__track_routing_module__["a" /* trackRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__["a" /* SidebarModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__track_component__["a" /* trackComponent */]]
    })
], trackModule);

//# sourceMappingURL=track.module.js.map

/***/ })

});
//# sourceMappingURL=track.module.chunk.js.map