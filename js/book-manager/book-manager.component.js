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
                    this.rating = 3.5;
                    this.isNew = false;
                    this.isAvailable = false;
                    this.getBooks();
                }
                BookManagerComponent.prototype.getBooks = function () {
                    var _this = this;
                    var booksObservable = this.bms.getBooks();
                    booksObservable.subscribe(function (books) { return _this.books = books; }, function (error) { return console.log('error in book service manager during books fetching'); }, function () { return console.log('books fetched successfully'); });
                };
                BookManagerComponent.prototype.addBook = function (newBook) {
                    var _this = this;
                    var bookObservable = this.bms.saveBook(newBook);
                    bookObservable.subscribe(function (book) { return _this.books.push(book); }, function (error) { return console.log('error in book service manager during book insertion'); }, function () { return console.log('book inserted successfully'); });
                    document.getElementById('addBookButton').click();
                    this.resetFields();
                };
                BookManagerComponent.prototype.removeBook = function (id, rev) {
                    var _this = this;
                    var bookObservable = this.bms.deleteBook(id, rev);
                    bookObservable.subscribe(function (book) { return _this.books.splice(_this.books.indexOf(book), 1); }, function (error) { return console.log('error in book service manager during book deletion'); }, function () { return console.log('book removed successfully'); });
                };
                BookManagerComponent.prototype.setBookFields = function (book) {
                    this.id = book.id;
                    this.title = book.title;
                    this.author = book.author;
                    this.rating = book.rating;
                    this.isNew = book.isNew;
                    this.isAvailable = book.isAvailable;
                    document.getElementById('addBookButton').click();
                };
                BookManagerComponent.prototype.resetFields = function () {
                    delete this.id;
                    delete this.title;
                    delete this.author;
                    this.rating = 3.5;
                    this.isNew = false;
                    this.isAvailable = false;
                };
                BookManagerComponent.prototype.cancel = function () {
                    document.getElementById('addBookButton').click();
                    this.resetFields();
                };
                BookManagerComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../../templates/book-manager.component.html',
                        providers: [book_manager_service_1.BookManagerService],
                        styles: [
                            "\n        .form-group .row {\n            margin-right: 0;\n            margin-left: 0;\n            margin-bottom: 15px;\n        }\n        #headerRow {\n            margin-bottom: 30px;\n        }\n        .button-wide {\n            width: 100%;\n        }\n        .vl-centered {\n            vertical-align: middle;\n        }\n        .vl-new {\n            background-color: #28b62c;\n        }\n        .vl-unavailable {\n            background-color: #ff4136;\n        }\n        .ng-valid[required], .ng-valid.required  {\n        border-left: 5px solid #42A948; /* green */\n        }\n        .ng-invalid:not(form)  {\n        border-left: 5px solid #a94442; /* red */\n        }\n        "
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
