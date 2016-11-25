System.register(['@angular/core', '@angular/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var headers, options, BookManagerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            // var BOOKS: Book[] = [
            //     {
            //         id: 1,
            //         title: 'La Divina Commedia',
            //         author: 'Dante Alighieri',
            //         rating: 4.6
            //     },
            //     {
            //         id: 2,
            //         title: 'Il Signore degli Anelli',
            //         author: 'J.R.R. Tolkien',
            //         rating: 4.7
            //     }
            // ];
            headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            options = new http_1.RequestOptions({ headers: headers });
            BookManagerService = (function () {
                function BookManagerService(http) {
                    this.http = http;
                }
                // getBooks(): Promise<Book[]> {
                //     return this.http.get('books')
                //            .toPromise()
                //            .then(response => response.json() as Book[])
                //            .catch(this.handleError);
                // }
                BookManagerService.prototype.getBooks = function () {
                    return this.http.get('books', options)
                        .map(function (response) { return response.json(); });
                };
                BookManagerService.prototype.saveBook = function (book) {
                    return this.http.post('book', book, options)
                        .map(function (response) { return response.json(); });
                };
                BookManagerService.prototype.deleteBook = function (id, rev) {
                    return this.http.delete('book?id=' + id + '&rev=' + rev, options)
                        .map(function (response) { return response.json(); });
                };
                BookManagerService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http))
                ], BookManagerService);
                return BookManagerService;
            }());
            exports_1("BookManagerService", BookManagerService);
        }
    }
});
