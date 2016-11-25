import { Injectable, Inject } from '@angular/core';
import { Book } from './book.class';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

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

let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

@Injectable()
export class BookManagerService {

    constructor(@Inject(Http) private http: Http) { }

    // getBooks(): Promise<Book[]> {
    //     return this.http.get('books')
    //            .toPromise()
    //            .then(response => response.json() as Book[])
    //            .catch(this.handleError);
    // }

    getBooks(): Observable<Book[]> {
        return this.http.get('books', options)
               .map((response: Response) => response.json() as Book[]);
    }


    saveBook(book: Book): Observable<Book> {
        return this.http.post('book', book, options)
        .map((response: Response) => response.json() as Book);
    }

    deleteBook(id: string, rev: string): Observable<Book> {
        return this.http.delete('book?id=' + id + '&rev=' + rev, options)
        .map((response: Response) => response.json() as Book);
    }

}