import { Injectable, Inject } from '@angular/core';
import { Book } from './book.class';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

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

@Injectable()
export class BookManagerService {

    constructor(@Inject(Http) private http: Http) { }

    getBooks(): Promise<Book[]> {
        return this.http.get('books')
               .toPromise()
               .then(response => response.json() as Book[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Cannot get books', error);
        return Promise.reject(error.message || error);
    }

}