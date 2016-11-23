import { Component, Inject } from '@angular/core';
import { Book } from './book.class';
import { BookManagerService } from './book-manager.service';

@Component({
    templateUrl: '../../templates/book-manager.component.html',
    providers: [ BookManagerService ]
})
export class BookManagerComponent {
    books: Book[] = [];

    constructor(@Inject(BookManagerService) bms : BookManagerService) {
        this.books = bms.getBooks();
    }

}