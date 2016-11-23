import { Injectable } from '@angular/core';
import { Book } from './book.class';

var BOOKS: Book[] = [
    {
        id: 1,
        title: 'La Divina Commedia',
        author: 'Dante Alighieri',
        rating: 4.6
    },
    {
        id: 2,
        title: 'Il Signore degli Anelli',
        author: 'J.R.R. Tolkien',
        rating: 4.7
    }
];

@Injectable()
export class BookManagerService {
    getBooks(): Book[] {
        return BOOKS;
    }
}