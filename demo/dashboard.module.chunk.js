webpackJsonp(["dashboard.module"],{

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
    },
    {
        path: 'applist',
        loadChildren: './applist/applist.module#applistModule'
    },
    {
        path: 'tracks',
        loadChildren: './track/track.module#trackModule'
    },
    {
        path: 'addapp',
        loadChildren: './addapp/addapp.module#addappModule'
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-page pt-page-moveFromBottom\">\n  <div class=\"wrapper\">\n    <!-- <div class=\"row\"> -->\n    <div class='hide' [hidden]='!show' id='left'>\n        <app-sidebar ></app-sidebar>\n    </div>\n    <div class='hide-div-content' id='right'>\n        <div class='btn-fr-wrapper'>\n            <div class='btn-sidebar-collapse'>\n                <a id='btn'  class='fa fa-bars fa-2x'(click)='btnClicked()' aria-hidden=\"true\"></a>\n            </div>\n            <div class=\"fr\">\n                <h2>Overview <small>Why is Versatile Theme so awesome?</small></h2>\n            </div>\n        </div>\n        <div class=\"jumbotron\">\n            <div class=\"container\">\n                <h1>Dashboard</h1>\n                    Enter your application details, which will published on your other web applications !<br /><br />\n                    <div class=\"row\">\n                    <div class=\"col-xl-3 col-sm-6 mb-3\">\n                        <div class=\"card text-white bg-primary o-hidden h-100\">\n                          <div class=\"card-body\">\n                            <div class=\"card-body-icon\">\n                              <i class=\"fa fa-fw fa-comments\"></i>\n                            </div>\n                            <div class=\"mr-5\">1 Ads</div>\n                          </div>\n                          <a class=\"card-footer text-white clearfix small z-1\" [routerLink]=\"['/dashboard/addapp']\">\n                            <span class=\"float-left\">Add Advertise</span>\n                            <span class=\"float-right\">\n                              <i class=\"fa fa-angle-right\"></i>\n                            </span>\n                          </a>\n                        </div>\n                      </div>\n                      <div class=\"col-xl-3 col-sm-6 mb-3\">\n                        <div class=\"card text-white bg-secondary o-hidden h-100\">\n                          <div class=\"card-body\">\n                            <div class=\"card-body-icon\">\n                              <i class=\"fa fa-fw fa-list\"></i>\n                            </div>\n                            <div class=\"mr-5\">2 Apps</div>\n                          </div>\n                          <a class=\"card-footer text-white clearfix small z-1\"  [routerLink]=\"['/dashboard/applist']\">\n                            <span class=\"float-left\">View Advertise</span>\n                            <span class=\"float-right\">\n                              <i class=\"fa fa-angle-right\"></i>\n                            </span>\n                          </a>\n                        </div>\n                      </div>\n                      <div class=\"col-xl-3 col-sm-6 mb-3\">\n                        <div class=\"card text-white bg-danger o-hidden h-100\">\n                          <div class=\"card-body\">\n                            <div class=\"card-body-icon\">\n                              <i class=\"fa fa-fw fa-list\"></i>\n                            </div>\n                            <div class=\"mr-5\">{{trackApp.length}} Active User</div>\n                          </div>\n                          <a class=\"card-footer text-white clearfix small z-1\"  [routerLink]=\"['/dashboard/tracks']\">\n                            <span class=\"float-left\">Tracking</span>\n                            <!-- {{trackApp|json}} -->\n                            <span class=\"float-right\">\n                              <i class=\"fa fa-angle-right\"></i>\n                            </span>\n                          </a>\n                        </div>\n                      </div>\n                      </div>\n\n                        <!-- Area Chart Example-->\n      <div class=\"card mb-3\" *ngFor=\"let item of activeApp\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-area-chart\"></i>\n           {{item.title}}\n           <span style=\"color:green\" class=\"blink_me\">&nbsp;&nbsp; (Active Advertise)</span>\n           <i class=\"fa fa-remove pull-right\" (click)=\"unPublish(item)\"></i>\n        </div>\n        <div class=\"card-body\" style=\"text-align:center\" >\n            <img src=\"http://localhost:4300/gallery/{{item.image}}.jpg\" (click)=\"unPublish(item)\"/>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div>\n\n                \n            </div>\n        </div>\n    </div>\n    <!-- </div> -->\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = "form input {\n  opacity: .5; }\n\n.tiles {\n  width: 150px;\n  height: 150px;\n  display: inline-block;\n  background-color: coral;\n  text-align: center; }\n\n.tiles span {\n  margin-top: 40%;\n  display: inline-block;\n  vertical-align: sub; }\n\n.card {\n  color: black;\n  margin-bottom: 10px;\n  padding: 10px; }\n\n.content-wrapper {\n  min-height: calc(100vh - 56px);\n  padding-top: 1rem; }\n\n.scroll-to-top {\n  position: fixed;\n  right: 15px;\n  bottom: 3px;\n  display: none;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  color: white;\n  background: rgba(52, 58, 64, 0.5);\n  line-height: 45px; }\n\n.scroll-to-top:focus, .scroll-to-top:hover {\n  color: white; }\n\n.scroll-to-top:hover {\n  background: #343a40; }\n\n.scroll-to-top i {\n  font-weight: 800; }\n\n.smaller {\n  font-size: 0.7rem; }\n\n.o-hidden {\n  overflow: hidden !important; }\n\n.z-0 {\n  z-index: 0; }\n\n.z-1 {\n  z-index: 1; }\n\n#mainNav .navbar-collapse {\n  overflow: auto;\n  max-height: 75vh; }\n\n#mainNav .navbar-collapse .navbar-nav .nav-item .nav-link {\n  cursor: pointer; }\n\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n  float: right;\n  content: '\\f107';\n  font-family: 'FontAwesome'; }\n\n#mainNav .navbar-collapse .navbar-sidenav .nav-link-collapse.collapsed:after {\n  content: '\\f105'; }\n\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level,\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level {\n  padding-left: 0; }\n\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a,\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a {\n  display: block;\n  padding: 0.5em 0; }\n\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a:focus, #mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a:hover,\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a:focus,\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a:hover {\n  text-decoration: none; }\n\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-second-level > li > a {\n  padding-left: 1em; }\n\n#mainNav .navbar-collapse .navbar-sidenav .sidenav-third-level > li > a {\n  padding-left: 2em; }\n\n#mainNav .navbar-collapse .sidenav-toggler {\n  display: none; }\n\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\n  position: relative;\n  min-width: 45px; }\n\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n  float: right;\n  width: auto;\n  content: '\\f105';\n  border: none;\n  font-family: 'FontAwesome'; }\n\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link .indicator {\n  position: absolute;\n  top: 5px;\n  left: 21px;\n  font-size: 10px; }\n\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown.show > .nav-link:after {\n  content: '\\f107'; }\n\n#mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\n  overflow: hidden;\n  max-width: none;\n  text-overflow: ellipsis; }\n\n@media (min-width: 992px) {\n  #mainNav .navbar-brand {\n    width: 250px; }\n  #mainNav .navbar-collapse {\n    overflow: visible;\n    max-height: none; }\n  #mainNav .navbar-collapse .navbar-sidenav {\n    position: absolute;\n    top: 0;\n    left: 0;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-top: 56px; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item {\n    width: 250px;\n    padding: 0; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n    padding: 1em; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n    padding-left: 0;\n    list-style: none; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li,\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li {\n    width: 250px; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n    padding: 1em; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a {\n    padding-left: 2.75em; }\n  #mainNav .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n    padding-left: 3.75em; }\n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link {\n    min-width: 0; }\n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n    width: 24px;\n    text-align: center; }\n  #mainNav .navbar-collapse .navbar-nav > .nav-item.dropdown .dropdown-menu > .dropdown-item > .dropdown-message {\n    max-width: 300px; } }\n\n#mainNav.fixed-top .sidenav-toggler {\n  display: none; }\n\n@media (min-width: 992px) {\n  #mainNav.fixed-top .navbar-sidenav {\n    height: calc(100vh - 112px); }\n  #mainNav.fixed-top .sidenav-toggler {\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    margin-top: calc(100vh - 56px); }\n  #mainNav.fixed-top .sidenav-toggler > .nav-item {\n    width: 250px;\n    padding: 0; }\n  #mainNav.fixed-top .sidenav-toggler > .nav-item > .nav-link {\n    padding: 1em; } }\n\n#mainNav.fixed-top.navbar-dark .sidenav-toggler {\n  background-color: #212529; }\n\n#mainNav.fixed-top.navbar-dark .sidenav-toggler a i {\n  color: #adb5bd; }\n\n#mainNav.fixed-top.navbar-light .sidenav-toggler {\n  background-color: #dee2e6; }\n\n#mainNav.fixed-top.navbar-light .sidenav-toggler a i {\n  color: rgba(0, 0, 0, 0.5); }\n\nbody.sidenav-toggled #mainNav.fixed-top .sidenav-toggler {\n  overflow-x: hidden;\n  width: 55px; }\n\nbody.sidenav-toggled #mainNav.fixed-top .sidenav-toggler .nav-item,\nbody.sidenav-toggled #mainNav.fixed-top .sidenav-toggler .nav-link {\n  width: 55px !important; }\n\nbody.sidenav-toggled #mainNav.fixed-top #sidenavToggler i {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: 'FlipH'; }\n\n#mainNav.static-top .sidenav-toggler {\n  display: none; }\n\n@media (min-width: 992px) {\n  #mainNav.static-top .sidenav-toggler {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; } }\n\nbody.sidenav-toggled #mainNav.static-top #sidenavToggler i {\n  -webkit-transform: scaleX(-1);\n  transform: scaleX(-1);\n  -webkit-filter: FlipH;\n          filter: FlipH;\n  -ms-filter: 'FlipH'; }\n\n.content-wrapper {\n  overflow-x: hidden;\n  background: white; }\n\n@media (min-width: 992px) {\n  .content-wrapper {\n    margin-left: 250px; } }\n\n#sidenavToggler i {\n  font-weight: 800; }\n\n.navbar-sidenav-tooltip.show {\n  display: none; }\n\n@media (min-width: 992px) {\n  body.sidenav-toggled .content-wrapper {\n    margin-left: 55px; } }\n\nbody.sidenav-toggled .navbar-sidenav {\n  width: 55px; }\n\nbody.sidenav-toggled .navbar-sidenav .nav-link-text {\n  display: none; }\n\nbody.sidenav-toggled .navbar-sidenav .nav-item,\nbody.sidenav-toggled .navbar-sidenav .nav-link {\n  width: 55px !important; }\n\nbody.sidenav-toggled .navbar-sidenav .nav-item:after,\nbody.sidenav-toggled .navbar-sidenav .nav-link:after {\n  display: none; }\n\nbody.sidenav-toggled .navbar-sidenav .nav-item {\n  white-space: nowrap; }\n\nbody.sidenav-toggled .navbar-sidenav-tooltip.show {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n  color: #868e96; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n  color: #868e96; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\n  color: #adb5bd; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n  color: #868e96; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:hover,\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:focus,\n#mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:hover {\n  color: #adb5bd; }\n\n#mainNav.navbar-dark .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n  color: #adb5bd; }\n\n@media (min-width: 992px) {\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav {\n    background: #343a40; }\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a {\n    color: white !important;\n    background-color: #495057; }\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-dark .navbar-collapse .navbar-sidenav li.active a:hover {\n    color: white; }\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n  #mainNav.navbar-dark .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n    background: #343a40; } }\n\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav .nav-link-collapse:after {\n  color: rgba(0, 0, 0, 0.5); }\n\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item > .nav-link:hover {\n  color: rgba(0, 0, 0, 0.7); }\n\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a,\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a {\n  color: rgba(0, 0, 0, 0.5); }\n\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level > li > a:hover,\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:focus,\n#mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level > li > a:hover {\n  color: rgba(0, 0, 0, 0.7); }\n\n#mainNav.navbar-light .navbar-collapse .navbar-nav > .nav-item.dropdown > .nav-link:after {\n  color: rgba(0, 0, 0, 0.5); }\n\n@media (min-width: 992px) {\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav {\n    background: #f8f9fa; }\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a {\n    color: #000 !important;\n    background-color: #e9ecef; }\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:focus, #mainNav.navbar-light .navbar-collapse .navbar-sidenav li.active a:hover {\n    color: #000; }\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-second-level,\n  #mainNav.navbar-light .navbar-collapse .navbar-sidenav > .nav-item .sidenav-third-level {\n    background: #f8f9fa; } }\n\n.card-body-icon {\n  position: absolute;\n  z-index: 0;\n  top: -25px;\n  right: -25px;\n  font-size: 5rem;\n  -webkit-transform: rotate(15deg);\n  transform: rotate(15deg); }\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 1;\n            column-count: 1; } }\n\n@media (min-width: 768px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n@media (min-width: 1200px) {\n  .card-columns {\n    -webkit-column-count: 2;\n            column-count: 2; } }\n\n.card-login {\n  max-width: 25rem; }\n\n.card-register {\n  max-width: 40rem; }\n\nfooter.sticky-footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 56px;\n  background-color: #e9ecef;\n  line-height: 55px; }\n\n@media (min-width: 992px) {\n  footer.sticky-footer {\n    width: calc(100% - 250px); } }\n\n@media (min-width: 992px) {\n  body.sidenav-toggled footer.sticky-footer {\n    width: calc(100% - 55px); } }\n\n.jumbotron {\n  height: 100%;\n  overflow-y: scroll; }\n\n.blink_me {\n  -webkit-animation: blinker 1s linear infinite;\n          animation: blinker 1s linear infinite; }\n\n@-webkit-keyframes blinker {\n  50% {\n    opacity: 0; } }\n\n@keyframes blinker {\n  50% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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


var DashboardComponent = (function () {
    function DashboardComponent(API) {
        this.API = API;
        this.show = false;
        this.flag = false;
        this.activeApp = {};
        this.trackApp = [];
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        if (!this.show) {
            document.getElementById('sidebar-home').style.background =
                '#1abc9c';
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.right = document.getElementById('right');
        this.left = document.getElementById('left');
        this.btn = document.getElementById('btn');
        this.activeApp = this.API.getActiveApp();
        this.API.trackApp().subscribe(function (data) {
            _this.trackApp = data;
        });
        ;
    };
    DashboardComponent.prototype.unPublish = function () {
        //  this.API.unpublishApp(this.activeApp);
        // this.activeApp = {};
    };
    DashboardComponent.prototype.btnClicked = function () {
        this.show = !this.show;
        this.btn.className =
            this.btn.className === 'fa fa-times fa-2x'
                ? 'fa fa-bars fa-2x'
                : 'fa fa-times fa-2x';
        this.left.classList.toggle('hide');
        this.right.classList.toggle('hide-div-content');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("./src/app/layout/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("./src/app/layout/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gravity_service__["a" /* GravityService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__ = __webpack_require__("./src/app/shared/components/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */], __WEBPACK_IMPORTED_MODULE_4__shared_components_sidebar_sidebar_module__["a" /* SidebarModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map