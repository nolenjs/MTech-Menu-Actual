webpackJsonp([1],{

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/order-submit/order-submit.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gotToMenu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    HomePage.prototype.gotToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nolenjs/MTech-Menu-Actual/src/pages/home/home.html"*/'\n<ion-header>\n  <ion-navbar color="mtech-red">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mountainland Grill</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-content>\n\n      <ion-card>\n        <img alt=\'Mountainland Grill Logo\' src="../../assets/imgs/grillLogo.png">\n      </ion-card>\n        <div class="menuButtonBox">\n          <button ion-button color="mtech-red" (click)="gotToLogin()">LOGIN AND SIGN UP</button>\n          <button ion-button color="mtech-red" (click)="gotToMenu()">MENU</button>\n        </div>\n    <div>\n      <ion-card>\n        <img src="../../assets/imgs/24COOKING-CLASSICPANCAKES-videoSixteenByNineJumbo1600.jpg" alt="image">\n\n      </ion-card>\n      <ion-card>\n        <img src="../../assets/imgs/the%20Chimi-Jimmy.jpg" alt="image">\n      </ion-card>\n    </div>\n\n\n      <!--<button ion-button color="mtech-red" menuToggle>CLICK ME</button>-->\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/nolenjs/MTech-Menu-Actual/src/pages/home/home.html"*/,
            styles: ["\n    ion-content{\n\n      background-color: white;\n    }\n    .menuButtonBox{\n      display: flex;\n      flex-direction: row;\n      justify-content: space-evenly;\n      align-items: center;\n      cursor: pointer;\n      \n    }\n    \n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MenuApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MenuApiProvider = (function () {
    function MenuApiProvider(http) {
        this.http = http;
        this.url = "https://mtechmenu.firebaseio.com/";
        console.log('Hello MenuApiProvider Provider');
    }
    MenuApiProvider.prototype.getBreakfastMenuData = function () {
        return this.http.get(this.url + "/breakfast.json")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) {
            return response;
        }));
    };
    MenuApiProvider.prototype.getLunchMenuData = function () {
        return this.http.get(this.url + "/lunchAndDinner.json")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (response) {
            return response;
        }));
    };
    MenuApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MenuApiProvider);
    return MenuApiProvider;
}());

//# sourceMappingURL=menu-api.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(314);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_menu_api_menu_api__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularFire2_auth__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_order_submit_order_submit__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var config = {
    apiKey: "AIzaSyCCsdWt5E2-79LatdNWu77rKi2Bpe2cWOw",
    authDomain: "mtechmenu.firebaseapp.com",
    databaseURL: "https://mtechmenu.firebaseio.com",
    projectId: "mtechmenu",
    storageBucket: "mtechmenu.appspot.com",
    messagingSenderId: "382312556211"
};


__WEBPACK_IMPORTED_MODULE_13_firebase_app__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_order_submit_order_submit__["a" /* OrderSubmitPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularFire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/order-submit/order-submit.module#OrderSubmitPageModule', name: 'OrderSubmitPage', segment: 'order-submit', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_order_submit_order_submit__["a" /* OrderSubmitPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_menu_api_menu_api__["a" /* MenuApiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Menu', component: __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component === __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]) {
            this.nav.setRoot(page.component);
        }
        else {
            this.nav.push(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nolenjs/MTech-Menu-Actual/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nolenjs/MTech-Menu-Actual/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_menu_api_menu_api__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_submit_order_submit__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, menuProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuProvider = menuProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.breakfastOpenTime = 8;
        this.breakfastCloseTime = 10;
        this.lunchOpenTime = 11;
        this.lunchCloseTime = 20;
        this.wednesday = 3;
        this.friday = 5;
        this.itsWednesday = false;
        this.itsFriday = false;
        this.hour = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.day = new Date().getDay();
        this.orderPrice = [];
        this.orderItems = [];
        this.date = new Date();
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
        this.date = new Date('February 21, 2018 8:01:00'); //23 = friday 21 = wednesday
        this.day = this.date.getDay();
        this.updateTime();
        this.menuChecker();
    };
    MenuPage.prototype.menuChecker = function () {
        this.hour = this.date.getHours();
        this.minutes = this.date.getMinutes();
        console.log('hour: ' + this.hour);
        console.log('minutes: ' + this.minutes);
        if (this.hour >= this.breakfastOpenTime && this.hour < this.breakfastCloseTime
            || (this.hour == this.breakfastCloseTime && this.minutes <= 30)) {
            this.getBreakfast();
            this.breakfastTime = true;
            this.lunchTime = false;
        }
        else if (this.hour >= this.lunchOpenTime && this.hour < this.lunchCloseTime
            || (this.hour == this.breakfastCloseTime && this.minutes >= 30)) {
            this.getLunchAndDinner();
            this.breakfastTime = false;
            this.lunchTime = true;
        }
        if (this.day === this.wednesday) {
            this.itsWednesday = true;
        }
        if (this.day === this.friday) {
            this.itsFriday = true;
        }
    };
    MenuPage.prototype.updateTime = function () {
        var _this = this;
        setInterval(function () {
            _this.date = new Date();
            console.log('changed' + _this.date);
            _this.menuChecker();
        }, 60000000); //60000
    };
    MenuPage.prototype.getBreakfast = function () {
        var _this = this;
        this.menuProvider.getBreakfastMenuData().subscribe(function (breakfastMenu) {
            _this.breakfastInfo = breakfastMenu;
            console.log(_this.breakfastInfo);
        });
    };
    MenuPage.prototype.getLunchAndDinner = function () {
        var _this = this;
        this.menuProvider.getLunchMenuData().subscribe(function (lunchMenu) {
            _this.lunchInfo = lunchMenu;
            console.log(_this.lunchInfo);
        });
    };
    MenuPage.prototype.order = function (itemName, item) {
        this.orderItems.push(item);
        var toast = this.toastCtrl.create({
            message: "Your order of " + itemName + " has been added",
            duration: 1000,
            position: 'top'
        });
        console.log(this.orderItems);
        toast.present();
    };
    MenuPage.prototype.ordersubmitted = function () {
        if (this.navParams.data[0] === true) {
            console.log(this.navParams[1]);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_submit_order_submit__["a" /* OrderSubmitPage */], [{ items: this.orderItems }, this.navParams[1]]);
        }
        else {
            var alert = this.alertCtrl.create({
                title: 'Before You Submit...',
                subTitle: 'You first need to login or register!!',
                buttons: ['OK']
            });
            alert.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */], [true, { items: this.orderItems }, this.orderPrice]);
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/nolenjs/MTech-Menu-Actual/src/pages/menu/menu.html"*/'<ion-header>\n\n  <ion-navbar color="mtech-red">\n    <ion-title>MENU</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!--Breakfast-->\n  <div *ngIf="breakfastTime">\n\n    <h2>Breakfast</h2>\n    \n    <ion-card *ngIf="itsWednesday">\n\n        <div class="menuTitleBox">\n          <ion-card-title>Waffle</ion-card-title>\n        </div>\n        <div class="itemImage">\n        </div>\n        <ion-card-content>\n            <p style="font-size: 18px; color: black">Waffles that you can top</p>\n        </ion-card-content>\n      <div class="sidesOrder">\n        <ion-label>Price For Full: $3.15</ion-label>\n        <button ion-button color="light" (click)="order(\'Full Waffles\', 3.15);">ADD</button>\n      </div>\n      <div class="sidesOrder">\n        <ion-label>Price For Half: 1.60</ion-label>\n        <button ion-button color="light" (click)="order(\'Half Waffle\', 1.60);">ADD</button>\n      </div>\n\n    </ion-card>\n\n      <ion-card *ngIf="itsFriday">\n\n          <div class="menuTitleBox">\n              <ion-card-title>Biscuits And Gravy</ion-card-title>\n          </div>\n          <p>Price: ????</p>\n\n          <ion-card-content>\n              <p style="font-size: 18px; color: black">Warm biscuits and gravy</p>\n          </ion-card-content>\n\n          <button ion-button color="light" (click)="order(\'Biscuits And Gravy\', \'Biscuits And Gravy ??????\');">ADD TO ORDER</button>\n\n      </ion-card>\n\n    <ion-card>\n\n      <div class="menuTitleBox">\n        <ion-card-title>Breakfast Sandwich</ion-card-title>\n      </div>\n      <p>Price For Bagel: $2.75</p>\n      <p>Price For Croissant: $2.75</p>\n      <p>Price For Muffin: $2.50</p>\n\n        <img class="itemImage" src="https://goo.gl/rtJa8S">\n      <ion-card-content>\n\n        <p style="font-size: 18px; color: black">A breakfast sandwich with your choice of bread, egg, cheese, and meat</p>\n\n        <br>\n\n        <h2>Bread</h2>\n\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>Croissant</ion-label>\n            <ion-radio color="mtech-red" value="croissant"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Bagel</ion-label>\n            <ion-radio color="mtech-red" value="bagel"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>English Muffin</ion-label>\n            <ion-radio color="mtech-red" value="english muffin"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <br>\n\n        <h2>Number Of Eggs</h2>\n\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>1</ion-label>\n            <ion-radio color="mtech-red" value="1 egg"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>2</ion-label>\n            <ion-radio color="mtech-red" value="2 egg"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <br>\n\n        <h2>Style Of Egg</h2>\n\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>Scrambled</ion-label>\n            <ion-radio color="mtech-red" value="scrambled"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Over Easy</ion-label>\n            <ion-radio color="mtech-red" value="over easy"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Over Medium</ion-label>\n            <ion-radio color="mtech-red" value="over medium"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Over Hard</ion-label>\n            <ion-radio color="mtech-red" value="over hard"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <br>\n\n        <h2>Meat</h2>\n\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>Bacon(2)</ion-label>\n            <ion-radio color="mtech-red" value="bacon"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Sausage Patty</ion-label>\n            <ion-radio color="mtech-red" value="sausage patty"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Ham</ion-label>\n            <ion-radio color="mtech-red" value="ham"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>No Meat</ion-label>\n            <ion-radio color="mtech-red" value="no meat"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <br>\n\n        <h2>Cheese</h2>\n\n        <!--"cheddar", "provolone", "swiss", "pepper jack"-->\n\n        <ion-list radio-group>\n          <ion-item>\n            <ion-label>Cheddar</ion-label>\n            <ion-radio color="mtech-red" value="cheddar"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Provolone</ion-label>\n            <ion-radio color="mtech-red" value="provolone"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Swiss</ion-label>\n            <ion-radio color="mtech-red" value="swiss"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Pepper Jack</ion-label>\n            <ion-radio color="mtech-red" value="pepper jack"></ion-radio>\n          </ion-item>\n        </ion-list>\n\n      </ion-card-content>\n\n      <button ion-button color="light" (click)="order(\'Breakfast Sandwich\', \'Breakfast Sandwich    $2.75\');">ADD TO ORDER</button>\n\n\n\n    </ion-card>\n    <ion-card>\n\n      <div class="menuTitleBox">\n        <ion-card-title>Omelet</ion-card-title>\n      </div>\n      <p>Price: $2.95</p>\n        \n        <img class="itemImage" src="https://goo.gl/wpex36">\n\n      <ion-card-content>\n\n        <p style="font-size: 18px; color: black">A 3 egg omelet with your choice of toppings</p>\n\n        <br>\n\n        <h2>Toppings (choose 5)</h2>\n\n        <ion-list>\n\n          <ion-item>\n            <ion-label>Peppers</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Mushrooms</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Onions</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Tomatoes</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Bacon</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Ham</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Sausage</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Cheddar Cheese</ion-label>\n            <ion-checkbox color="mtech-red"></ion-checkbox>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n\n\n      <button ion-button color="light" (click)="order(\'Omelet\', \'Omelet    $2.95\');">ADD TO ORDER</button>\n\n\n\n    </ion-card>\n\n    <ion-card *ngFor="let food of breakfastInfo">\n\n      <div class="menuTitleBox">\n        <ion-card-title>{{food.itemName}}</ion-card-title>\n      </div>\n      <p>Price: {{food.price | currency}}</p>\n\n        <img class="itemImage" src="{{food.imgUrl}}">\n\n      <ion-card-content>\n\n        <p style="font-size: 18px; color: black">{{food.description}}</p>\n\n        <br>\n\n        <ion-list>\n          <div radio-group>\n            <ion-item *ngFor="let foodOptions of food.options">\n              <ion-label>{{foodOptions}}</ion-label>\n              <ion-radio color="mtech-red" value="{{foodOptions}}"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-list>\n\n      </ion-card-content>\n\n\n      <button ion-button color="light" (click)="order(food.itemName, food.itemName + \' \' + \'$\'+ food.price);">ADD TO ORDER</button>\n\n    </ion-card>\n\n    <button ion-button col="mtech-red" icon-end="md-restaurant" class="submit-button" (click)="ordersubmitted();"><p class="alignright">Submit Order</p></button>\n  </div>\n\n  <!--Lunch & Dinner-->\n  <div *ngIf="lunchTime">\n\n    <h2>Lunch And Dinner</h2>\n\n    <ion-card *ngFor="let food of lunchInfo">\n\n      <div class="menuTitleBox">\n        <ion-card-title>{{food.itemName}}</ion-card-title>\n      </div>\n      <p>Price: {{food.price | currency}}</p>\n      <img class="itemImage" src={{food.imgUrl}}>\n\n      <ion-card-content>\n\n        <p style="font-size: 18px; color: black">{{food.description}}</p>\n\n        <br>\n\n        <h2>make it a meal for a $1.00, mozzarella sticks an extra dollar</h2>\n        <ion-toggle color="mtech-red"></ion-toggle>\n\n        <ion-list>\n          <div radio-group [disabled]="disable">\n            <ion-item *ngFor="let foodOptions of food.options">\n              <ion-label>{{foodOptions}}</ion-label>\n              <ion-radio color="mtech-red" value="{{foodOptions}}"></ion-radio>\n            </ion-item>\n          </div>\n        </ion-list>\n\n\n        <button ion-button color="light" (click)="order(food.itemName, food.itemName + \' \' + \'$\' + food.price);">ADD TO ORDER</button>\n\n\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n\n      <div class="menuTitleBox">\n        <ion-card-title>Sides</ion-card-title>\n      </div>\n\n      <ion-card-content>\n\n        <ion-list>\n\n          <div class="sidesOrder">\n            <ion-label>French Fries $1.50</ion-label>\n\n            <button ion-button color="light" (click)="order(\'French Fries\', \'French Fries   $1.50\');">ADD</button>\n\n          </div>\n\n\n          <div class="sidesOrder">\n            <ion-label>Tatter Tots $1.50</ion-label>\n\n            <button ion-button color="light" (click)="order(\'Tater Tots\', \'Tater Tots   $1.50\');">ADD</button>\n\n          </div>\n\n          <div class="sidesOrder">\n            <ion-label>Sweat Potato Fries $1.75</ion-label>\n\n            <button ion-button color="light" (click)="order(\'Sweat Potato Fries\',\'Sweat Potato Fries    $1.75\');">ADD</button>\n\n          </div>\n\n          <div class="sidesOrder">\n            <ion-label>Onion Rings $1.50</ion-label>\n\n            <button ion-button color="light" (click)="order(\'Onion Rings\', \'Onion Rings    $1.50\');">ADD</button>\n\n          </div>\n\n          <div class="sidesOrder">\n            <ion-label>Mozzarella Sticks $1.50</ion-label>\n\n            <button ion-button color="light" (click)="order(\'Mozzarella Sticks\', \'Mozzerella Sticks    $1.50\');">ADD</button>\n\n          </div>\n\n        </ion-list>\n\n      </ion-card-content>\n    </ion-card>\n\n    <button ion-button color="mtech-red" icon-end="md-restaurant" class="submit-button" (click)="ordersubmitted();"><p class="alignright">Submit Order</p></button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/nolenjs/MTech-Menu-Actual/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_menu_api_menu_api__["a" /* MenuApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_menu_api_menu_api__["a" /* MenuApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], MenuPage);
    return MenuPage;
    var _a, _b, _c, _d, _e;
}());

// WEBPACK FOOTER //
// ./src/pages/menu/menu.ts
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__order_submit_order_submit__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, navParams, toastCtrl) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.user = {};
        this.registering = false;
        this.email = true;
    }
    LoginPage.prototype.login = function (bool) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1, provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.email = bool;
                        if (!this.email) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)];
                    case 2:
                        result = _a.sent();
                        this.displayResults(result);
                        this.user.password = '';
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.showError(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
                        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithPopup(provider).then(function (result) {
                            console.log(result);
                            if (result.credential) {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                var token = result.credential.accessToken;
                                // ...
                            }
                            // The signed-in user info.
                            var googleUser = result.user;
                            console.log(googleUser);
                            console.log(googleUser.displayName);
                            if (_this.navParams.data[0] === true) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__order_submit_order_submit__["a" /* OrderSubmitPage */], [
                                    _this.navParams.data[1],
                                    _this.navParams.data[2],
                                    googleUser.displayName
                                ]);
                            }
                            else {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], [true, googleUser.displayName]);
                            }
                        })
                            .catch(function (error) {
                            // Handle Errors here.
                            console.log(error.code);
                            console.log(error.message);
                            console.log(error.email);
                            console.log(error.credentials);
                        });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, emailUser, e_2, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.confirm === this.user.password)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)];
                    case 2:
                        result = _a.sent();
                        this.displayResults(result);
                        emailUser = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
                        console.log(emailUser);
                        emailUser.updateProfile({
                            displayName: this.firstName + ' ' + this.lastName,
                            photoURL: ""
                        });
                        this.user.account = emailUser;
                        console.log(this.user.account);
                        console.log(this.user.account.displayName);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.showError(e_2);
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("Passwords matched");
                        return [3 /*break*/, 6];
                    case 5:
                        toast = this.toastCtrl.create({
                            message: "Please verify that your passwords match.",
                            duration: 1800,
                            position: 'top'
                        });
                        toast.present();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.changeShow = function (bool) {
        //If login
        this.registering = bool;
    };
    LoginPage.prototype.displayResults = function (result) {
        if (result) {
            console.log("Registered or Signed in!!!");
            console.log(this.user.name);
            if (this.navParams.data[0] === true) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__order_submit_order_submit__["a" /* OrderSubmitPage */], [this.navParams.data[1], this.navParams.data[2], this.user.account]);
            }
            else {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */], [true, this.user.account]);
            }
        }
    };
    LoginPage.prototype.showError = function (error) {
        console.error(error);
        var toast = this.toastCtrl.create({
            message: error.message,
            duration: 1800,
            position: 'top'
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nolenjs/MTech-Menu-Actual/src/pages/login/login.html"*/'\n<ion-header>\n\n  <ion-navbar color="mtech-red">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <ion-card>\n    <img alt=\'Mountainland Grill Logo\' src="../../assets/imgs/grillLogo.png">\n    <ion-list>\n      <ion-item *ngIf="registering === true">\n        <ion-label floating>First Name</ion-label>\n        <ion-input [(ngModel)]=\'firstName\'></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registering === true">\n        <ion-label floating>Last Name</ion-label>\n        <ion-input [(ngModel)]=\'lastName\'></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type=\'email\' [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="registering === true">\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input type=\'password\' [(ngModel)]=\'confirm\'></ion-input>\n      </ion-item>\n      <button ion-button *ngIf="registering===false" (click)="login(false)">Login through Google</button>\n    </ion-list>\n    <button *ngIf="registering === false" ion-button (click)="login(true)">Login</button>\n    <button *ngIf="registering === false" ion-button color="light" (click)="changeShow(true)">Register</button>\n    <button *ngIf="registering === true" ion-button (click)="register()">Register</button>\n    <button *ngIf="registering === true" ion-button color="light" (click)="changeShow(false)">Login</button>\n  </ion-card>\n\n'/*ion-inline-end:"/Users/nolenjs/MTech-Menu-Actual/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSubmitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrderSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderSubmitPage = (function () {
    function OrderSubmitPage(navCtrl, navParams, toastCtrl, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.orderInformation = this.navParams.data[0];
        this.name = this.navParams.data[2];
    }
    OrderSubmitPage.prototype.confirm = function () {
        // this.confirmOrder.push();
        var toast = this.toastCtrl.create({
            message: "Your order has been sent",
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    OrderSubmitPage.prototype.delete = function (index) {
        (this.orderInformation.items).splice(index, 1);
    };
    ;
    OrderSubmitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderSubmitPage');
        console.log(this.orderInformation);
        console.log('Name: ' + this.name);
    };
    OrderSubmitPage.prototype.submitOrder = function () {
        console.log('pushing order');
        var itemsRef = this.db.list('orderInfo');
        itemsRef.push({ order: this.orderInformation, name: this.name });
        var toast = this.toastCtrl.create({
            message: "Order Sent",
            duration: 1000,
            position: 'top'
        });
        toast.present();
    };
    OrderSubmitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-submit',template:/*ion-inline-start:"/Users/nolenjs/MTech-Menu-Actual/src/pages/order-submit/order-submit.html"*/'<ion-header>\n\n    <ion-navbar color="mtech-red">\n        <ion-title>Confirm Order</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <div>\n                Order:\n            </div>\n\n\n\n        </ion-card-header>\n\n        <ion-list>\n\n            <ion-item class="menu-item" *ngFor="let item of orderInformation.items; let i = index;">\n                <ion-icon  md="md-remove-circle" id={{item.id}} (click)="delete(i)">\n\n                </ion-icon>\n                {{item}}\n\n            </ion-item>\n        </ion-list>\n\n    </ion-card>\n    <button ion-button color="mtech-red" (click)="submitOrder()"><p class="alignRight">Send</p></button>\n</ion-content>\n'/*ion-inline-end:"/Users/nolenjs/MTech-Menu-Actual/src/pages/order-submit/order-submit.html"*/,
            styles: ["\n        ion-content {\n            background-color: white;\n        }\n\n        ion-card {\n            margin: auto;\n            max-width: 400px;\n\n        }\n\n        ion-card-content {\n            display: flex;\n            flex-direction: row;\n            justify-content: center;\n            align-items: center;\n        }\n\n        .hover-delete {\n            visibility: hidden;\n        }\n\n        .menu-item:hover .hover-delete {\n            visibility: visible;\n        }\n\n\n\n    "]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], OrderSubmitPage);
    return OrderSubmitPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=order-submit.js.map

/***/ })

},[294]);
//# sourceMappingURL=main.js.map