import { Component, Inject } from '@angular/core';
import { Book } from './book.class';
import { BookManagerService } from './book-manager.service';

@Component({
    templateUrl: '../../templates/book-manager.component.html',
    providers: [ BookManagerService ],
    styles: [
        `.vl-centered {
            vertical-align: middle;
        }
        .vl-new {
            background-color: #28b62c;
        }
        .vl-unavailable {
            background-color: #ff4136;
        }`
    ]
})
export class BookManagerComponent {

    books: Book[] = [];

    constructor(@Inject(BookManagerService) private bms : BookManagerService) { 
        this.getBooks();
    }

    getBooks(): void {
        this.bms.getBooks()
            .then(books => this.books = books)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Cannot assign books', error);
        return Promise.reject(error.message || error);
    }

}