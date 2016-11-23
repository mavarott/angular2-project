System.register(['@angular/core', './book-manager.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, book_manager_service_1;
    var BookManagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_manager_service_1_1) {
                book_manager_service_1 = book_manager_service_1_1;
            }],
        execute: function() {
            BookManagerComponent = (function () {
                function BookManagerComponent(bms) {
                    this.bms = bms;
                    this.books = [];
                    this.getBooks();
                }
                BookManagerComponent.prototype.getBooks = function () {
                    var _this = this;
                    this.bms.getBooks()
                        .then(function (books) { return _this.books = books; })
                        .catch(this.handleError);
                };
                BookManagerComponent.prototype.handleError = function (error) {
                    console.error('Cannot assign books', error);
                    return Promise.reject(error.message || error);
                };
                BookManagerComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../../templates/book-manager.component.html',
                        providers: [book_manager_service_1.BookManagerService],
                        styles: [
                            ".vl-centered {\n            vertical-align: middle;\n        }\n        .vl-new {\n            background-color: #28b62c;\n        }\n        .vl-unavailable {\n            background-color: #ff4136;\n        }"
                        ]
                    }),
                    __param(0, core_1.Inject(book_manager_service_1.BookManagerService))
                ], BookManagerComponent);
                return BookManagerComponent;
            }());
            exports_1("BookManagerComponent", BookManagerComponent);
        }
    }
});
