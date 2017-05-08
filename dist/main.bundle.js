webpackJsonp([0,3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_auth_user_model__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = (function () {
    function SignInComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3_app_auth_user_model__["a" /* User */](this.signinForm.value.email, this.signinForm.value.password);
        this.authService.signIn(user)
            .subscribe(function (data) {
            _this.authService.setCredentails(data);
            _this.router.navigateByUrl('/');
        });
        this.signinForm.reset();
    };
    SignInComponent.prototype.ngOnInit = function () {
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required)
        });
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sign-in',
        template: __webpack_require__(462),
        styles: [__webpack_require__(451)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignInComponent);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/sign-in.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_auth_user_model__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = (function () {
    function SignUpComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_3_app_auth_user_model__["a" /* User */](this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName);
        this.authService.signUp(user)
            .subscribe(function (data) {
            _this.authService.setCredentails(data);
            /* Forces the auth guard to be fired again, redirecting user based on their login status*/
            _this.router.navigateByUrl('/signing-in')
                .then(function () { return _this.router.navigateByUrl('/'); });
        });
        this.signupForm.reset();
    };
    SignUpComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required)
        });
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sign-up',
        template: __webpack_require__(463),
        styles: [__webpack_require__(452)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignUpComponent);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/sign-up.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(email, password, firstName, questions) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.questions = questions;
    }
    return User;
}());

//# sourceMappingURL=/home/ziel/code/splearn/src/user.model.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__(465),
        styles: [__webpack_require__(454)]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=/home/ziel/code/splearn/src/landing.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-not-found',
        template: "\n    <h1>\n      Page not found\n    </h1>\n    <button \n      type=\"button\" \n      class=\"pure-button pure-button-primary\" \n      [routerLink]=\"['/']\">\n      Main page</button>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=/home/ziel/code/splearn/src/not-found.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_helpers__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaPairsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QaPairsComponent = (function () {
    function QaPairsComponent(qaService) {
        this.qaService = qaService;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.qapairs = [];
        this.qapairsToBeAssessed = [];
        this.shouldShowNewQAModal = false;
    }
    QaPairsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qaService.getQAPairs()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (qapairsArr) {
            _this.qapairs = qapairsArr;
            _this.qapairsToBeAssessed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_app_helpers__["a" /* filterToBeAssessed */])(qapairsArr);
        });
        this.qaService.qapairsChanged
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (updatedQAPairs) {
            _this.qapairs = updatedQAPairs;
            _this.qapairsToBeAssessed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_app_helpers__["a" /* filterToBeAssessed */])(updatedQAPairs);
        });
    };
    QaPairsComponent.prototype.toggleNewQAModal = function (event) {
        //TODO: figure out how to use useCapture in order to stop the clicking on the child element (.newQAModal) from calling this function.
        // event.stopPropagation()
        this.shouldShowNewQAModal = !this.shouldShowNewQAModal;
    };
    QaPairsComponent.prototype.onDelete = function (id) {
        this.qaService.deleteQAPair(id);
    };
    QaPairsComponent.prototype.onEdit = function (currentQapair) {
        this.currentQapair = currentQapair;
        this.toggleNewQAModal();
    };
    QaPairsComponent.prototype.onNewQAPair = function () {
        this.currentQapair = null;
        this.toggleNewQAModal();
    };
    QaPairsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return QaPairsComponent;
}());
QaPairsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-qa-pairs',
        template: __webpack_require__(468),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */]) === "function" && _a || Object])
], QaPairsComponent);

var _a;
//# sourceMappingURL=/home/ziel/code/splearn/src/qa-pairs.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_helpers__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizComponent = (function () {
    function QuizComponent(qaService, fb) {
        this.qaService = qaService;
        this.fb = fb;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.questionIndex = 0;
        this.answeredQuestions = 0;
        this.correctAnswerCount = 0;
        this.numOfQuestionsInQuiz = 10;
        this.quizQuestions = [];
        this.showFeedbackScreen = false;
        this.QAForm = this.fb.group({
            answer: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* Validators */].required]
        });
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qaService.getQAPairs()
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (qapairs) {
            _this.quizQuestions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_app_helpers__["a" /* filterToBeAssessed */])(qapairs).slice(0, _this.numOfQuestionsInQuiz);
            if (_this.quizQuestions.length < _this.numOfQuestionsInQuiz) {
                _this.numOfQuestionsInQuiz = _this.quizQuestions.length;
            }
            _this.questionIndex = 0;
            _this.correctAnswerCount = 0;
            _this.answeredQuestions = 0;
            _this.showFeedbackScreen = false;
            _this.currentQAPair = _this.quizQuestions.shift();
        });
    };
    QuizComponent.prototype.onSubmitAnswer = function () {
        var _this = this;
        this.qaService.isCorrectAnswer(this.currentQAPair._id, this.QAForm.value.answer)
            .subscribe(function (data) {
            _this.showFeedbackScreen = true;
            _this.answeredQuestions++;
            if (data.isCorrect === true) {
                _this.resultMessage = "You're correct!";
                _this.correctAnswerCount++;
            }
            else {
                _this.resultMessage = "Not quite!";
            }
            _this.percentageCorrect = ((_this.correctAnswerCount / _this.answeredQuestions) * 100).toFixed();
        });
        this.QAForm.reset();
    };
    QuizComponent.prototype.hideFeedbackScreen = function () {
        this.showFeedbackScreen = false;
        this.questionIndex++;
        if (!this.isFinished) {
            this.currentQAPair = this.quizQuestions.shift();
        }
    };
    QuizComponent.prototype.resetQuiz = function () {
        this.ngOnInit();
    };
    Object.defineProperty(QuizComponent.prototype, "isFinished", {
        get: function () {
            return !(this.answeredQuestions < this.numOfQuestionsInQuiz);
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return QuizComponent;
}());
QuizComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-quiz',
        template: __webpack_require__(469),
        styles: [__webpack_require__(458)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object])
], QuizComponent);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/quiz.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 276;


/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(287);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ziel/code/splearn/src/main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInOutAnimation; });

var fadeInOutAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* trigger */])('fadeInOut', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* animate */])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=/home/ziel/code/splearn/src/app-routing.animation.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_qa_pairs_qa_pairs_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_quiz_quiz_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_auth_sign_up_sign_up_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_auth_sign_in_sign_in_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_landing_landing_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_not_found_not_found_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7_app_landing_landing_component__["a" /* LandingComponent */],
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["a" /* CanViewAuthPages */]]
    },
    {
        path: 'qapairs',
        component: __WEBPACK_IMPORTED_MODULE_2_app_qa_pairs_qa_pairs_component__["a" /* QaPairsComponent */],
        children: [],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["b" /* CanActivateViaAuthGuard */]]
    },
    {
        path: 'revise',
        component: __WEBPACK_IMPORTED_MODULE_3_app_quiz_quiz_component__["a" /* QuizComponent */],
        children: [],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["b" /* CanActivateViaAuthGuard */]]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_4_app_auth_sign_up_sign_up_component__["a" /* SignUpComponent */],
        children: [],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["a" /* CanViewAuthPages */]]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_5_app_auth_sign_in_sign_in_component__["a" /* SignInComponent */],
        children: [],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["a" /* CanViewAuthPages */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8_app_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["b" /* CanActivateViaAuthGuard */], __WEBPACK_IMPORTED_MODULE_6_app_auth_canActivateViaAuth_guard__["a" /* CanViewAuthPages */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/home/ziel/code/splearn/src/app-routing.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_app_routing_animation__ = __webpack_require__(284);
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
    function AppComponent(myElement) {
        this.myElement = myElement;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var appRootRef = this.myElement; // Necesarry because after setTimeout, 'this' becomes window
        setTimeout(function () {
            appRootRef.nativeElement.previousElementSibling.remove();
        }, 300);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(461),
        styles: [__webpack_require__(450)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_1_app_app_routing_animation__["a" /* fadeInOutAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/home/ziel/code/splearn/src/app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__qa_pairs_qa_pairs_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_qa_pairs_qa_pairs_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quiz_quiz_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__qa_pair_editor_qa_pair_editor_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_auth_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_sign_up_sign_up_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_sign_in_sign_in_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_qa_pairs_from_now_pipe__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_qa_pair_editor_auto_resize_directive__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__errors_errors_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_errors_errors_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__landing_landing_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__qa_pairs_qa_pairs_component__["a" /* QaPairsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__quiz_quiz_component__["a" /* QuizComponent */],
            __WEBPACK_IMPORTED_MODULE_11__qa_pair_editor_qa_pair_editor_component__["a" /* QaPairEditorComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_14__auth_sign_in_sign_in_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_15_app_qa_pairs_from_now_pipe__["a" /* FromNowPipe */],
            __WEBPACK_IMPORTED_MODULE_16_app_qa_pair_editor_auto_resize_directive__["a" /* AutoResizeDirective */],
            __WEBPACK_IMPORTED_MODULE_17__errors_errors_component__["a" /* ErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__["a" /* NotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */],
            { provide: 'Body', useValue: document.body },
            __WEBPACK_IMPORTED_MODULE_12_app_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18_app_errors_errors_service__["a" /* ErrorsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/ziel/code/splearn/src/app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CanActivateViaAuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanViewAuthPages; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            // start a new navigation to redirect to login page
            this.router.navigate(['/signin']);
            // abort current navigation
            return false;
        }
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateViaAuthGuard);

var CanViewAuthPages = (function () {
    function CanViewAuthPages(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanViewAuthPages.prototype.canActivate = function () {
        if (!this.authService.isLoggedIn) {
            return true;
        }
        else {
            // start a new navigation to redirect to main page when logged in
            this.router.navigate(['/qapairs']);
            // abort current navigation
            return false;
        }
    };
    return CanViewAuthPages;
}());
CanViewAuthPages = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], CanViewAuthPages);

var _a, _b, _c, _d;
//# sourceMappingURL=/home/ziel/code/splearn/src/canActivateViaAuth.guard.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ErrorsComponent = (function () {
    function ErrorsComponent(errorsService, elRef, document) {
        this.errorsService = errorsService;
        this.elRef = elRef;
        this.document = document;
        this.display = 'none';
        this.top_px = '';
    }
    ErrorsComponent.prototype.onWindowScroll = function () {
        if (this.document.body.scrollTop > 0) {
            this.top_px = '0px';
        }
        else {
            this.top_px = 'inherit';
        }
    };
    ErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorsService.errorOccurred
            .subscribe(function (error) {
            _this.error = error;
            _this.display = 'inherit';
            setTimeout(function () {
                _this.display = 'none';
            }, 3000);
        });
    };
    ErrorsComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    ErrorsComponent.prototype.onDocClick = function (event) {
        if (!this.elRef.nativeElement.contains(event.target) && this.display === 'inherit')
            this.display = 'none';
    };
    return ErrorsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorsComponent.prototype, "onWindowScroll", null);
ErrorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-errors',
        template: __webpack_require__(464),
        styles: [__webpack_require__(453)],
        host: {
            '(document:click)': 'onDocClick($event)',
        },
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__["a" /* ErrorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__["a" /* ErrorsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _b || Object, Object])
], ErrorsComponent);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/errors.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerError; });
var ServerError = (function () {
    function ServerError(title, errorMessage) {
        this.title = title;
        if (typeof errorMessage === 'string') {
            this.errorMessage = errorMessage;
        }
        else if (typeof errorMessage === 'object') {
            this.errorMessage = errorMessage.errorMessage;
        }
        else {
            this.errorMessage = 'There was an error.';
        }
    }
    return ServerError;
}());

//# sourceMappingURL=/home/ziel/code/splearn/src/serverError.model.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_qa_pairs_qa_pairs_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_auth_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = (function () {
    function NavbarComponent(qaService, authService, router, elRef, renderer) {
        this.qaService = qaService;
        this.authService = authService;
        this.router = router;
        this.elRef = elRef;
        this.renderer = renderer;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.hoverBackgroundColor = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isLoggedIn) {
            this.qaService.getQAPairstoBeAssessed()
                .takeUntil(this.ngUnsubscribe)
                .subscribe(function (qapairsToBeAssessed) {
                _this.numToBeAssessed = qapairsToBeAssessed.length;
            });
        }
        this.qaService.qapairsChanged
            .takeUntil(this.ngUnsubscribe)
            .subscribe(function (updatedQAPairs) {
            _this.numToBeAssessed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers__["a" /* filterToBeAssessed */])(updatedQAPairs).length;
        });
        this.router.events
            .takeUntil(this.ngUnsubscribe)
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.updateStyle(event.url);
        });
    };
    NavbarComponent.prototype.updateStyle = function (url) {
        if (url === '/') {
            this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
            this.renderer.setStyle(this.elRef.nativeElement, 'color', 'inherit');
            this.svgFill = '#000';
            this.hoverBackgroundColor = false;
        }
        else {
            this.renderer.removeStyle(this.elRef.nativeElement, 'backgroundColor');
            this.renderer.removeStyle(this.elRef.nativeElement, 'color');
            this.svgFill = '#fff';
            this.hoverBackgroundColor = true;
        }
    };
    NavbarComponent.prototype.onLogOut = function () {
        this.authService.logOut();
        this.router.navigate(['/signin']);
    };
    Object.defineProperty(NavbarComponent.prototype, "isLoggedIn", {
        get: function () {
            return this.authService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(466),
        styles: [__webpack_require__(455)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_app_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Renderer2 */]) === "function" && _e || Object])
], NavbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=/home/ziel/code/splearn/src/navbar.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoResizeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoResizeDirective = (function () {
    function AutoResizeDirective(el) {
        this.el = el;
        el.nativeElement.style.height = 'auto';
        el.nativeElement.style.height = el.nativeElement.scrollHeight + 'px';
    }
    AutoResizeDirective.prototype.onInput = function () {
        this.assignScrollHeightAsElHeight();
    };
    AutoResizeDirective.prototype.ngAfterViewInit = function () {
        this.assignScrollHeightAsElHeight();
    };
    AutoResizeDirective.prototype.assignScrollHeightAsElHeight = function () {
        this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
    };
    return AutoResizeDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutoResizeDirective.prototype, "onInput", null);
AutoResizeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Directive */])({
        selector: '[autoResize]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object])
], AutoResizeDirective);

var _a;
//# sourceMappingURL=/home/ziel/code/splearn/src/auto-resize.directive.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_qa_pairs_qa_pairs_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaPairEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var QaPairEditorComponent = (function () {
    function QaPairEditorComponent(fb, qaService, document) {
        this.fb = fb;
        this.qaService = qaService;
        this.document = document;
        this.isNew = true;
        this.curScrollTop = this.document.body.scrollTop;
        this.toggleQAModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.qaForm = this.fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            correctAnswers: this.fb.array([this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required)]),
            explanation: '',
            wrongAnswers: this.fb.array([])
        });
    }
    QaPairEditorComponent.prototype.ngOnInit = function () {
        this.isNew = !this.currentQapair;
        this.initForm();
    };
    QaPairEditorComponent.prototype.initForm = function () {
        if (!this.isNew) {
            this.setAnswers(this.currentQapair.correctAnswers, 'correctAnswers');
            this.setAnswers(this.currentQapair.wrongAnswers, 'wrongAnswers');
            this.qaForm.setControl('question', this.fb.control(this.currentQapair.question));
            this.qaForm.setControl('explanation', this.fb.control(this.currentQapair.explanation));
        }
    };
    QaPairEditorComponent.prototype.doNewQA = function () {
        this.qaService.newQAPair(this.qaForm.value);
        this.toggleQAModal.emit('toggleQAModal');
        this.qaForm.reset();
    };
    QaPairEditorComponent.prototype.updateQA = function () {
        this.qaService.updateQAPair(this.currentQapair._id, this.qaForm.value);
        this.toggleQAModal.emit('toggleQAModal');
        this.qaForm.reset();
    };
    QaPairEditorComponent.prototype.setAnswers = function (answers, rightORwrongAns) {
        var _this = this;
        var answerFormControls = answers.map(function (answer) { return _this.fb.control(answer, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required); });
        var answerFormArray = this.fb.array(answerFormControls);
        this.qaForm.setControl(rightORwrongAns, answerFormArray);
    };
    QaPairEditorComponent.prototype.addAnswer = function (rightORwrongAns) {
        this[rightORwrongAns].push(this.fb.control('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required));
    };
    QaPairEditorComponent.prototype.removeAnswer = function (index, rightORwrongAns) {
        this[rightORwrongAns].removeAt(index);
    };
    Object.defineProperty(QaPairEditorComponent.prototype, "correctAnswers", {
        get: function () {
            return this.qaForm.get('correctAnswers');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QaPairEditorComponent.prototype, "wrongAnswers", {
        get: function () {
            return this.qaForm.get('wrongAnswers');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QaPairEditorComponent.prototype, "body", {
        get: function () {
            return this.document.body;
        },
        enumerable: true,
        configurable: true
    });
    QaPairEditorComponent.prototype.toggleNewQAModal = function () {
        this.toggleQAModal.emit();
    };
    return QaPairEditorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], QaPairEditorComponent.prototype, "toggleQAModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], QaPairEditorComponent.prototype, "currentQapair", void 0);
QaPairEditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-qa-pair-editor',
        template: __webpack_require__(467),
        styles: [__webpack_require__(456)]
    }),
    __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["d" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_qa_pairs_qa_pairs_service__["a" /* QaPairsService */]) === "function" && _c || Object, Object])
], QaPairEditorComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/ziel/code/splearn/src/qa-pair-editor.component.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FromNowPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FromNowPipe = (function () {
    function FromNowPipe() {
    }
    FromNowPipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return FromNowPipe;
}());
FromNowPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({ name: 'fromNow' })
], FromNowPipe);

//# sourceMappingURL=/home/ziel/code/splearn/src/from-now.pipe.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var QAPair = (function () {
    function QAPair(obj) {
        this.question = obj.question;
        this.correctAnswers = obj.correctAnswers;
        this.wrongAnswers = obj.wrongAnswers;
        this._id = obj._id;
        this.explanation = obj.explanation;
        this.createdAt = obj.createdAt;
        this.correctAttempts = obj.correctAttempts;
        this.wrongAttempts = obj.wrongAttempts;
        this.netCorrectAttempts = obj.netCorrectAttempts;
        this.lastAssessed = obj.lastAssessed;
        this.toBeAssessedNext = obj.toBeAssessedNext;
    }
    Object.defineProperty(QAPair.prototype, "toBeAssessedInTime", {
        get: function () {
            return this.toBeAssessedNext ? __WEBPACK_IMPORTED_MODULE_0_moment__(this.toBeAssessedNext).fromNow() : 'Soon';
        },
        enumerable: true,
        configurable: true
    });
    return QAPair;
}());
/* harmony default export */ __webpack_exports__["a"] = QAPair;
//# sourceMappingURL=/home/ziel/code/splearn/src/qa-pair.model.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ziel/code/splearn/src/environment.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/home/ziel/code/splearn/src/polyfills.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, errorsService) {
        this.http = http;
        this.errorsService = errorsService;
        this.authUrl = 'user';
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json', jwt: localStorage.getItem('jwt') || '' })
        });
    }
    AuthService.prototype.setCredentails = function (data) {
        localStorage.setItem('jwt', data.jwt);
        localStorage.setItem('userId', data.userId);
        this.firstName = data.firstName;
    };
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        console.log('signUp function called from auth.service.ts');
        var response = this.http.post(this.authUrl, user, this.requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            throw __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
        return response;
    };
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        return this.http.post(this.authUrl + "/signin", user, this.requestOptions)
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error);
        });
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return Boolean(localStorage.getItem('jwt'));
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__["a" /* ErrorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_errors_errors_service__["a" /* ErrorsService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/auth.service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_errors_errors_service__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaPairsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QaPairsService = (function () {
    function QaPairsService(http, errorsService) {
        this.http = http;
        this.errorsService = errorsService;
        this.qapairs = [];
        this.qapairsToBeAssessed = [];
        this.qapairsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json', jwt: localStorage.getItem('jwt') || '' })
        });
        this.qapairsUrl = 'api/qapairs';
    }
    QaPairsService.prototype.getQAPairs = function () {
        var _this = this;
        return this.http.get(this.qapairsUrl, this.requestOptions)
            .map(function (response) {
            _this.qapairs = response.json().map(function (qapair) { return new __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__["a" /* default */](qapair); });
            _this.qapairsChanged.emit(_this.qapairs); // So that the nav bar gets wind of the qapairs, after initializing without being logged in.
            return _this.qapairs;
        })
            .catch(function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    QaPairsService.prototype.getQAPairstoBeAssessed = function () {
        var _this = this;
        return this.getQAPairs()
            .map(function (response) {
            var qapairsToBeAssessed = _this.qapairs.filter(function (qapair) {
                return new Date(qapair.toBeAssessedNext).getTime() < new Date().getTime();
            });
            _this.qapairsToBeAssessed.splice(0, _this.qapairsToBeAssessed.length);
            _this.qapairsToBeAssessed.push.apply(_this.qapairsToBeAssessed, qapairsToBeAssessed);
            _this.qapairsChanged.emit(_this.qapairs);
            return _this.qapairsToBeAssessed;
        })
            .catch(function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    QaPairsService.prototype.newQAPair = function (formValue) {
        var _this = this;
        return this.http.post(this.qapairsUrl, {
            question: formValue.question,
            correctAnswers: formValue.correctAnswers,
            wrongAnswers: formValue.wrongAnswers,
            explanation: formValue.explanation,
            createdAt: new Date()
        }, this.requestOptions)
            .map(function (response) {
            return response.json();
        })
            .subscribe(function (qapair) {
            _this.qapairs.push(new __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__["a" /* default */](qapair));
            _this.qapairsChanged.emit(_this.qapairs);
        }, function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    QaPairsService.prototype.updateQAPair = function (qapairID, formValue) {
        var _this = this;
        return this.http.put(this.qapairsUrl + "/" + qapairID, formValue, this.requestOptions)
            .map(function (response) {
            return response.json();
        })
            .subscribe(function (data) {
            _this.qapairs.splice(_this.qapairs.findIndex(function (element) { return element._id === qapairID; }), 1, data);
            _this.qapairs.map(function (qapair) { return new __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__["a" /* default */](qapair); });
            _this.qapairsChanged.emit(_this.qapairs);
        }, function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    QaPairsService.prototype.deleteQAPair = function (id) {
        var _this = this;
        return this.http.delete(this.qapairsUrl + "/" + id)
            .map(function (response) {
            return response.json();
        })
            .subscribe(function () {
            _this.qapairs.splice(_this.qapairs.findIndex(function (element) { return element._id === id; }), 1);
            _this.qapairs.map(function (qapair) { return new __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__["a" /* default */](qapair); });
            _this.qapairsChanged.emit(_this.qapairs);
        }, function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    QaPairsService.prototype.isCorrectAnswer = function (id, answer) {
        var _this = this;
        return this.http.post(this.qapairsUrl + "/is_correct", { id: id, answer: answer }, this.requestOptions)
            .map(function (response) {
            _this.qapairs = response.json().qaPairs.map(function (qapair) { return new __WEBPACK_IMPORTED_MODULE_6__qa_pair_model__["a" /* default */](qapair); });
            _this.qapairsChanged.emit(_this.qapairs);
            return response.json();
        })
            .catch(function (error) {
            error = error.json();
            _this.errorsService.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    return QaPairsService;
}());
QaPairsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_app_errors_errors_service__["a" /* ErrorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_errors_errors_service__["a" /* ErrorsService */]) === "function" && _b || Object])
], QaPairsService);

var _a, _b;
//# sourceMappingURL=/home/ziel/code/splearn/src/qa-pairs.service.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.altAuthText {\n  margin-top: 30px;\n  padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "form {\n  margin-top: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.altAuthText {\n  margin-top: 30px;\n  padding: 10px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\ndiv {\n  box-sizing: border-box;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #e70000;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 32px;\n  padding: 6px;\n  width: 100%;\n  color: white; }\n\n.infoIcon {\n  margin-left: 5px; }\n\n.exitButton {\n  background-color: transparent;\n  border: none;\n  height: 100%;\n  outline: none;\n  position: absolute;\n  right: 5px;\n  height: 80%; }\n\n.exitIcon {\n  margin-top: -2px; }\n\nspan.message {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n:host /deep/ input {\n  width: 100%; }\n\n:host /deep/ .pure-form {\n  max-width: 560px;\n  margin-left: auto;\n  margin-right: auto; }\n  :host /deep/ .pure-form fieldset {\n    box-sizing: border-box;\n    width: 100%;\n    padding: 20px; }\n\nh1 {\n  text-align: center;\n  margin: 0.67em;\n  max-width: 600px; }\n\n.centerText {\n  text-align: center; }\n\nbutton {\n  margin-bottom: 2em; }\n\n.iphoneContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-width: 100%;\n  width: 332px;\n  height: 500px;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-image: url(/assets/images/IPhone_7_Jet_Black.svg);\n  background-size: 100% auto; }\n  .iphoneContainer img {\n    max-width: 100%;\n    width: 84.4%;\n    margin: 30% auto 0; }\n\nsection {\n  width: calc(100% + 10px);\n  overflow-x: hidden;\n  padding: 15px;\n  box-sizing: border-box; }\n  section:nth-of-type(odd) {\n    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }\n  @media (min-width: 560px) {\n    section {\n      width: calc(100vw - 15px); } }\n  section.featuresContainer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 64px 15px; }\n    section.featuresContainer div {\n      margin: 0;\n      padding: 40px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      max-width: 350px;\n      text-align: center; }\n      section.featuresContainer div:first-child {\n        margin-top: 0; }\n    section.featuresContainer img {\n      width: 25%;\n      max-height: 35%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #333;\n  display: block;\n  color: #f2f2f2; }\n\nul.topnav {\n  list-style-type: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden;\n  max-width: 1015px; }\n  ul.topnav li {\n    display: none;\n    cursor: pointer; }\n    ul.topnav li.currentPage, ul.topnav li .menuToggle {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n    ul.topnav li.menuToggle {\n      position: absolute;\n      right: 0;\n      top: 0; }\n    ul.topnav li.currentPage {\n      margin-right: auto; }\n      ul.topnav li.currentPage a {\n        font-size: 22px; }\n    ul.topnav li a {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      color: inherit;\n      text-align: center;\n      padding: 14px 16px;\n      text-decoration: none;\n      transition: 0.3s;\n      font-size: 17px; }\n      ul.topnav li a.hoverBackGround:hover, ul.topnav li a.hoverBackGround.is-active {\n        background-color: #555; }\n    ul.topnav li.menuToggle {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      ul.topnav li.menuToggle a {\n        font-size: 22px; }\n  ul.topnav.responsive {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    ul.topnav.responsive li {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      ul.topnav.responsive li a {\n        text-align: left; }\n        ul.topnav.responsive li a:not(.currentPage):not(.menuToggle) {\n          -webkit-box-flex: 1;\n              -ms-flex-positive: 1;\n                  flex-grow: 1; }\n\n@media screen and (min-width: 680px) {\n  ul.topnav li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    ul.topnav li.menuToggle {\n      display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".newQAModalBackDrop {\n  width: 100vw;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  margin: 0px;\n  position: fixed;\n  z-index: 100;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.newQAModal {\n  position: absolute;\n  z-index: 101;\n  top: 0;\n  right: 0;\n  left: 0;\n  box-sizing: border-box;\n  top: 0px;\n  width: 100vw;\n  max-width: 560px;\n  padding: 20px;\n  margin: 20px auto;\n  background-color: white;\n  border-radius: 5px; }\n\n.exit {\n  background: none;\n  border: none; }\n  .exit.exitModal {\n    display: block;\n    margin-left: auto;\n    padding: 10px; }\n  .exit.deleteAnswer {\n    width: 10%;\n    padding: 0; }\n\n.answerInputContainer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\ntextarea {\n  resize: none;\n  width: 90%;\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ":host > * {\n  margin-bottom: 15px; }\n\n.banner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  padding: 15px 15px 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.qapairs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.questionsToBeReviewedDiv {\n  padding: 20px; }\n\n.qapair {\n  border: 1px #ccc solid;\n  border-radius: 5px;\n  padding: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-preferred-size: 293px;\n      flex-basis: 293px;\n  margin: 20px 10px; }\n  .qapair > *:not(button) {\n    display: block;\n    width: 100%; }\n  .qapair legend {\n    white-space: pre-wrap;\n    word-break: break-word; }\n  .qapair button {\n    margin-top: auto;\n    margin-right: 10px; }\n  .qapair .answer, .qapair .wrong, .qapair .correct {\n    display: inline-block;\n    border: 1px solid;\n    border-radius: 5px;\n    padding: 5px;\n    margin-right: 5px; }\n  .qapair .wrong {\n    border-color: #ccc; }\n  .qapair .correct {\n    border-color: #1bad01; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, ".flexCenter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.centerText {\n  text-align: center; }\n\n.inputButtonWrap {\n  max-width: 550px; }\n  .inputButtonWrap * {\n    width: 100%; }\n  .inputButtonWrap button {\n    margin-top: 12px; }\n\nlegend {\n  width: auto;\n  white-space: pre-wrap; }\n\n.answer, .wrong, .correct {\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 5px;\n  padding: 5px;\n  margin-right: 5px; }\n\n.wrong {\n  border-color: #ccc; }\n\n.correct {\n  border-color: #1bad01; }\n\n.correctAnswersContainer, legend {\n  margin-bottom: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 144,
	"./af.js": 144,
	"./ar": 151,
	"./ar-dz": 145,
	"./ar-dz.js": 145,
	"./ar-kw": 146,
	"./ar-kw.js": 146,
	"./ar-ly": 147,
	"./ar-ly.js": 147,
	"./ar-ma": 148,
	"./ar-ma.js": 148,
	"./ar-sa": 149,
	"./ar-sa.js": 149,
	"./ar-tn": 150,
	"./ar-tn.js": 150,
	"./ar.js": 151,
	"./az": 152,
	"./az.js": 152,
	"./be": 153,
	"./be.js": 153,
	"./bg": 154,
	"./bg.js": 154,
	"./bn": 155,
	"./bn.js": 155,
	"./bo": 156,
	"./bo.js": 156,
	"./br": 157,
	"./br.js": 157,
	"./bs": 158,
	"./bs.js": 158,
	"./ca": 159,
	"./ca.js": 159,
	"./cs": 160,
	"./cs.js": 160,
	"./cv": 161,
	"./cv.js": 161,
	"./cy": 162,
	"./cy.js": 162,
	"./da": 163,
	"./da.js": 163,
	"./de": 166,
	"./de-at": 164,
	"./de-at.js": 164,
	"./de-ch": 165,
	"./de-ch.js": 165,
	"./de.js": 166,
	"./dv": 167,
	"./dv.js": 167,
	"./el": 168,
	"./el.js": 168,
	"./en-au": 169,
	"./en-au.js": 169,
	"./en-ca": 170,
	"./en-ca.js": 170,
	"./en-gb": 171,
	"./en-gb.js": 171,
	"./en-ie": 172,
	"./en-ie.js": 172,
	"./en-nz": 173,
	"./en-nz.js": 173,
	"./eo": 174,
	"./eo.js": 174,
	"./es": 176,
	"./es-do": 175,
	"./es-do.js": 175,
	"./es.js": 176,
	"./et": 177,
	"./et.js": 177,
	"./eu": 178,
	"./eu.js": 178,
	"./fa": 179,
	"./fa.js": 179,
	"./fi": 180,
	"./fi.js": 180,
	"./fo": 181,
	"./fo.js": 181,
	"./fr": 184,
	"./fr-ca": 182,
	"./fr-ca.js": 182,
	"./fr-ch": 183,
	"./fr-ch.js": 183,
	"./fr.js": 184,
	"./fy": 185,
	"./fy.js": 185,
	"./gd": 186,
	"./gd.js": 186,
	"./gl": 187,
	"./gl.js": 187,
	"./gom-latn": 188,
	"./gom-latn.js": 188,
	"./he": 189,
	"./he.js": 189,
	"./hi": 190,
	"./hi.js": 190,
	"./hr": 191,
	"./hr.js": 191,
	"./hu": 192,
	"./hu.js": 192,
	"./hy-am": 193,
	"./hy-am.js": 193,
	"./id": 194,
	"./id.js": 194,
	"./is": 195,
	"./is.js": 195,
	"./it": 196,
	"./it.js": 196,
	"./ja": 197,
	"./ja.js": 197,
	"./jv": 198,
	"./jv.js": 198,
	"./ka": 199,
	"./ka.js": 199,
	"./kk": 200,
	"./kk.js": 200,
	"./km": 201,
	"./km.js": 201,
	"./kn": 202,
	"./kn.js": 202,
	"./ko": 203,
	"./ko.js": 203,
	"./ky": 204,
	"./ky.js": 204,
	"./lb": 205,
	"./lb.js": 205,
	"./lo": 206,
	"./lo.js": 206,
	"./lt": 207,
	"./lt.js": 207,
	"./lv": 208,
	"./lv.js": 208,
	"./me": 209,
	"./me.js": 209,
	"./mi": 210,
	"./mi.js": 210,
	"./mk": 211,
	"./mk.js": 211,
	"./ml": 212,
	"./ml.js": 212,
	"./mr": 213,
	"./mr.js": 213,
	"./ms": 215,
	"./ms-my": 214,
	"./ms-my.js": 214,
	"./ms.js": 215,
	"./my": 216,
	"./my.js": 216,
	"./nb": 217,
	"./nb.js": 217,
	"./ne": 218,
	"./ne.js": 218,
	"./nl": 220,
	"./nl-be": 219,
	"./nl-be.js": 219,
	"./nl.js": 220,
	"./nn": 221,
	"./nn.js": 221,
	"./pa-in": 222,
	"./pa-in.js": 222,
	"./pl": 223,
	"./pl.js": 223,
	"./pt": 225,
	"./pt-br": 224,
	"./pt-br.js": 224,
	"./pt.js": 225,
	"./ro": 226,
	"./ro.js": 226,
	"./ru": 227,
	"./ru.js": 227,
	"./sd": 228,
	"./sd.js": 228,
	"./se": 229,
	"./se.js": 229,
	"./si": 230,
	"./si.js": 230,
	"./sk": 231,
	"./sk.js": 231,
	"./sl": 232,
	"./sl.js": 232,
	"./sq": 233,
	"./sq.js": 233,
	"./sr": 235,
	"./sr-cyrl": 234,
	"./sr-cyrl.js": 234,
	"./sr.js": 235,
	"./ss": 236,
	"./ss.js": 236,
	"./sv": 237,
	"./sv.js": 237,
	"./sw": 238,
	"./sw.js": 238,
	"./ta": 239,
	"./ta.js": 239,
	"./te": 240,
	"./te.js": 240,
	"./tet": 241,
	"./tet.js": 241,
	"./th": 242,
	"./th.js": 242,
	"./tl-ph": 243,
	"./tl-ph.js": 243,
	"./tlh": 244,
	"./tlh.js": 244,
	"./tr": 245,
	"./tr.js": 245,
	"./tzl": 246,
	"./tzl.js": 246,
	"./tzm": 248,
	"./tzm-latn": 247,
	"./tzm-latn.js": 247,
	"./tzm.js": 248,
	"./uk": 249,
	"./uk.js": 249,
	"./ur": 250,
	"./ur.js": 250,
	"./uz": 252,
	"./uz-latn": 251,
	"./uz-latn.js": 251,
	"./uz.js": 252,
	"./vi": 253,
	"./vi.js": 253,
	"./x-pseudo": 254,
	"./x-pseudo.js": 254,
	"./yo": 255,
	"./yo.js": 255,
	"./zh-cn": 256,
	"./zh-cn.js": 256,
	"./zh-hk": 257,
	"./zh-hk.js": 257,
	"./zh-tw": 258,
	"./zh-tw.js": 258
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 459;


/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div [@fadeInOut] class=\"app-container\">\n  <app-navbar></app-navbar>\n  <app-errors></app-errors>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<form class=\"pure-form pure-form-stacked\" [formGroup]=\"signinForm\" (ngSubmit)=\"onSubmit()\">\n  <fieldset>\n\n    <legend>Email</legend>\n    <input \n      id=\"email\" \n      formControlName=\"email\" \n      rows=\"1\" \n      placeholder=\"email\"\n      title=\"This field is required\">\n\n    <legend>Password</legend>\n    <input \n      id=\"password\" \n      type=\"password\" \n      formControlName=\"password\" \n      rows=\"1\" \n      placeholder=\"Password\" \n      title=\"This field is required\">\n\n  </fieldset>\n  <button \n    type=\"submit\" \n    class=\"pure-button pure-button-primary\" \n    [disabled]=\"!signinForm.valid\"\n    (click)=\"onSubmit()\">\n    Log in\n  </button>\n\n  <div class=\"altAuthText\">Not registered yet?</div>\n  <button \n    type=\"button\" \n    class=\"pure-button pure-button-primary\" \n    [routerLink]=\"['/signup']\">\n    Sign Up</button>\n</form>"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<form class=\"pure-form pure-form-stacked\" [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n  <fieldset>\n\n    <legend>First Name</legend>\n    <input \n      id=\"firstName\" \n      formControlName=\"firstName\" \n      rows=\"1\" \n      placeholder=\"First Name\" \n      title=\"This field is required\">\n\n    <legend>Email</legend>\n    <input \n      id=\"email\" \n      formControlName=\"email\" \n      rows=\"1\" \n      placeholder=\"email\"\n      title=\"This field is required\">\n\n    <legend>Password</legend>\n    <input \n      id=\"password\" \n      type=\"password\" \n      formControlName=\"password\" \n      rows=\"1\" \n      placeholder=\"Password\" \n      title=\"This field is required\">\n  </fieldset>\n  <button \n    type=\"submit\" \n    class=\"pure-button pure-button-primary\" \n    [disabled]=\"!signupForm.valid\"\n    (click)=\"onSubmit()\">\n    Submit\n  </button>\n\n  <div class=\"altAuthText\">Already registered?</div>\n  <button \n    type=\"button\" \n    class=\"pure-button pure-button-primary\" \n    [routerLink]=\"['/signin']\">\n    Sign In</button>\n</form>"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'display': display, 'top': top_px}\"><span class=\"message\">{{ error?.errorMessage }}</span>\n\n  <button class=\"exitButton\" (click)=\"onErrorHandled()\"><svg height=\"100%\" class=\"exitIcon\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z\" fill=\"#fff\"/></svg></button>\n</div>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<h1>The Most Effective Way to Learn, Anywhere. Free.</h1>\n<button \n    type=\"button\" \n    class=\"pure-button pure-button-primary\" \n    [routerLink]=\"['/signup']\">\n    Sign Up Now</button>\n<div class=\"iphoneContainer\">\n  <img src=\"/assets/images/quiz-screen-shot-without-frame.png\" alt=\"Splearn quiz app\">\n</div>\n<section class=\"featuresContainer\">\n  <div>\n    <img src=\"/assets/images/ic_redo_black.svg\" alt=\"Repetition learning icon\">\n    <h3>Repetition Learning</h3>\n    <p>The most efficient, effective way to learn</p>\n  </div>\n  <div>\n    <img src=\"/assets/images/ic_spellcheck_black.svg\" alt=\"Allows for spelling mistakes icon\">\n    <h3>Allows for spelling mistakes</h3>\n    <p>Learn what you need to know; not how to spell it</p>\n  </div>\n  <div>\n    <img src=\"/assets/images/ic_call_missed_outgoing_black.svg\" alt=\"Add wrong answers icon\">\n    <h3>Add wrong answers</h3>\n    <p>Prevent false positives such as 'Effect' or 'Affect'</p>\n  </div>\n  <div>\n    <img src=\"/assets/images/ic_question_answer_black.svg\" alt=\"Make your own questions icon\">\n    <h3>Make your own questions</h3>\n    <p>Personalization helps retain information</p>\n  </div>\n  <div>\n    <img src=\"/assets/images/ic_assignment_black.svg\" alt=\"Testing not recall icon\">\n    <h3>Testing not recall</h3>\n    <p>Practice recalling information, not recognizing it</p>\n  </div>\n</section>\n<section class=\"signUpContainer\">\n  <h2 class=\"centerText\">Sign up now</h2>\n  <app-sign-up></app-sign-up>\n</section>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<ul class=\"topnav\" id=\"myTopnav\" #myTopnav>\n  <li class=\"currentPage\" onclick=\"myTopnav.classList\n  .remove('responsive')\"><a [ngClass]=\"{hoverBackGround: hoverBackgroundColor}\" [routerLink]=\"[ '/' ]\">Splearn</a></li>\n  <li *ngIf=\"isLoggedIn\" onclick=\"myTopnav.classList\n  .remove('responsive')\"><a [ngClass]=\"{hoverBackGround: hoverBackgroundColor}\" [routerLink]=\"[ '/qapairs' ]\">Questions</a></li>\n  <li *ngIf=\"isLoggedIn\" onclick=\"myTopnav.classList\n  .remove('responsive')\"><a [ngClass]=\"{hoverBackGround: hoverBackgroundColor}\" [routerLink]=\"[ '/revise' ]\">Revise ({{ numToBeAssessed }})</a></li>\n  <li *ngIf=\"!isLoggedIn\" onclick=\"myTopnav.classList\n  .remove('responsive')\"><a [ngClass]=\"{hoverBackGround: hoverBackgroundColor}\" [routerLink]=\"[ '/signin' ]\" [routerLinkActive]=\"['is-active']\">Sign in</a></li>\n  <li *ngIf=\"!isLoggedIn\" onclick=\"myTopnav.classList\n  .remove('responsive')\"><a [ngClass]=\"{hoverBackGround: hoverBackgroundColor}\" [routerLink]=\"[ '/signup' ]\" [routerLinkActive]=\"['is-active']\">Sign up</a></li>\n  <li *ngIf=\"isLoggedIn\" onclick=\"myTopnav.classList\n  .remove('responsive')\" (click)=\"onLogOut()\"><a>Log out</a></li>\n  <li class=\"menuToggle\" onclick=\"myTopnav.classList\n  .toggle('responsive')\">\n    <a href=\"javascript:void(0);\">\n      <svg [ngStyle]=\"{'fill': svgFill}\" fill=\"#fff\" height=\"27\" viewBox=\"0 0 24 24\" width=\"27\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        <path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/>\n      </svg>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<div class=\"newQAModalBackDrop\"></div>\n<div class=\"newQAModal\" [ngStyle]=\"{'top': curScrollTop + 'px'}\">\n  <button class=\"exit exitModal\" (click)=\"toggleNewQAModal()\">X</button>\n  <form class=\"pure-form pure-form-stacked\" [formGroup]=\"qaForm\" (ngSubmit)=\"isNew ? doNewQA() : updateQA()\">\n    <fieldset>\n      <legend>{{ isNew ? 'Add': 'Edit' }} a Question</legend>\n\n      <textarea id=\"question\" formControlName=\"question\" rows=\"1\" placeholder=\"Question\" autoResize title=\"This field is required\"></textarea>\n\n      <div class=\"pure-group\" formArrayName=\"correctAnswers\">\n        <div *ngFor=\"let correctAnswer of correctAnswers.controls; let i=index\" class=\"answerInputContainer nestForInput\">\n          <textarea rows=\"1\" [formControlName]=\"i\" placeholder=\"Correct Answer\" autoResize title=\"This field is required\"></textarea>\n          <button type=\"button\" (click)=\"removeAnswer(i, 'correctAnswers')\" class=\"exit deleteAnswer\">X</button>\n        </div>\n        <button class=\"pure-button\" (click)=\"addAnswer('correctAnswers')\" type=\"button\">+ Add another Correct Answer</button>\n      </div>\n\n      <div class=\"pure-group\" formArrayName=\"wrongAnswers\">\n        <div *ngFor=\"let wrongAnswer of wrongAnswers.controls; let i=index\" class=\"answerInputContainer nestForInput\">\n          <textarea rows=\"1\" [formControlName]=\"i\" placeholder=\"Wrong Answer\" autoResize title=\"This field is required\"></textarea>\n          <button type=\"button\" (click)=\"removeAnswer(i, 'wrongAnswers')\" class=\"exit deleteAnswer\">X</button>\n        </div>\n        <button class=\"pure-button\" (click)=\"addAnswer('wrongAnswers')\" type=\"button\">+ Add another Wrong Answer</button>\n      </div>\n\n      <textarea id=\"explanation\" formControlName=\"explanation\" rows=\"1\" placeholder=\"Explanation\" autoResize></textarea>\n\n      <button type=\"submit\" class=\"pure-button pure-button-primary\" [disabled]=\"!qaForm.valid\">Save</button>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\">\n  <button class=\"pure-button pure-button-primary\" (click)=\"onNewQAPair()\">Add Question</button>\n  \n  <div class=\"questionsToBeReviewedDiv\">\n    Questions to be reviewed: {{qapairsToBeAssessed.length}}\n  </div>\n</div>\n\n<div class=\"qapairs\">\n  <div *ngFor=\"let qapair of qapairs\" class=\"qapair\">\n    <h3>Question:</h3>\n    <legend>{{qapair.question}}</legend>\n    <div>\n      <h4>Correct answers:</h4>\n      <div class=\"answer correct\" *ngFor=\"let correctAnswer of qapair.correctAnswers\">{{correctAnswer}}</div>\n    </div>\n    \n    <div *ngIf=\"qapair.wrongAnswers.length\">\n      <h4>Wrong answers:</h4>\n      <div class=\"answer wrong\" *ngFor=\"let wrongAnswer of qapair.wrongAnswers\">{{ wrongAnswer }}</div>\n    </div>\n    <div *ngIf=\"qapair.explanation\">\n      <h4>Explanation:</h4>\n      <legend>{{ qapair.explanation }}</legend>\n    </div>\n    <h4>Due assessment {{qapair.toBeAssessedNext | fromNow}}</h4>\n    <button type=\"submit\" class=\"pure-button button-warning\" (click)=\"onEdit(qapair)\">Edit</button>\n    <button type=\"submit\" class=\"pure-button button-danger\" (click)=\"onDelete(qapair._id)\">Delete</button>\n  </div>\n</div>\n\n<app-qa-pair-editor *ngIf=\"shouldShowNewQAModal\" (toggleQAModal)=\"toggleNewQAModal()\" [currentQapair]=\"currentQapair\"></app-qa-pair-editor>\n\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isFinished\">\n  <h2 class=\"centerText\">Question {{ questionIndex + 1 }} of {{ numOfQuestionsInQuiz }}</h2>\n  <div class=\"centerText\" *ngIf=\"answeredQuestions > 0\">Percentage correct so far: {{ percentageCorrect }}%</div>\n  \n  <form \n    class=\"pure-form\" \n    [formGroup]=\"QAForm\" \n    (ngSubmit)=\"onSubmitAnswer($event)\"\n    *ngIf=\"!showFeedbackScreen\">\n    <fieldset>\n      <div class=\"flexCenter\">\n        <legend>{{ currentQAPair?.question }}</legend>\n          \n        <div class=\"inputButtonWrap\">\n          <input type=\"text\" name=\"answer\" formControlName=\"answer\" autocomplete=\"off\">\n          <button type=\"submit\" class=\"pure-button pure-button-primary\">Submit</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n\n  <div class=\"flexCenter\" *ngIf=\"showFeedbackScreen\">\n    <h2>{{resultMessage}}</h2>\n    <div class=\"correctAnswersContainer\">\n      <h4>Correct answers:</h4>\n      <div class=\"answer correct\" *ngFor=\"let correctAnswer of currentQAPair.correctAnswers\">{{correctAnswer}}</div>\n    </div>\n    <legend>{{ currentQAPair?.explanation }}</legend>\n    <button type=\"button\" class=\"pure-button pure-button-primary\" (click)=\"hideFeedbackScreen()\">Continue</button>\n  </div>\n</div>\n\n<div *ngIf=\"isFinished\">\n  <div *ngIf=\"answeredQuestions\">\n    <h1>You scored {{correctAnswerCount}} out of {{numOfQuestionsInQuiz}} ({{ percentageCorrect }}%)</h1>\n  </div>\n  <div *ngIf=\"!answeredQuestions\">\n    <h1>There is currently no questions to be reviewed</h1>\n  </div>\n  <button [routerLink]=\"[ '/' ]\" type=\"button\" class=\"pure-button pure-button-primary\">Go Home</button>\n  <button *ngIf=\"qapairsToBeAssessed\" (click)=\"resetQuiz()\" type=\"button\" class=\"pure-button pure-button-primary\">Quiz me again</button>\n</div>"

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(277);


/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_errors_serverError_model__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorsService = (function () {
    function ErrorsService() {
        this.errorOccurred = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    ErrorsService.prototype.handleError = function (error) {
        var errorData = new __WEBPACK_IMPORTED_MODULE_1_app_errors_serverError_model__["a" /* ServerError */](error.title, error.error);
        this.errorOccurred.emit(errorData);
    };
    return ErrorsService;
}());
ErrorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ErrorsService);

//# sourceMappingURL=/home/ziel/code/splearn/src/errors.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filterToBeAssessed;
function filterToBeAssessed(qapairs) {
    return qapairs.filter(function (qapair) { return new Date(qapair.toBeAssessedNext).getTime() < new Date().getTime(); });
}
//# sourceMappingURL=/home/ziel/code/splearn/src/helpers.js.map

/***/ })

},[504]);
//# sourceMappingURL=main.bundle.js.map