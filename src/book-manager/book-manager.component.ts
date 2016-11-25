import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Book } from './book.class';
import { BookManagerService } from './book-manager.service';

@Component({
    templateUrl: '../../templates/book-manager.component.html',
    providers: [ BookManagerService ],
    styles: [
        `
        .form-group .row {
            margin-right: 0;
            margin-left: 0;
            margin-bottom: 15px;
        }
        #headerRow {
            margin-bottom: 30px;
        }
        .button-wide {
            width: 100%;
        }
        .vl-centered {
            vertical-align: middle;
        }
        .vl-new {
            background-color: #28b62c;
        }
        .vl-unavailable {
            background-color: #ff4136;
        }
        .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
        }
        `
    ]
})
export class BookManagerComponent {

    books: Book[];
    id: number;
    title: string;
    author: string;
    rating: number = 3.5;
    isNew: boolean = false;
    isAvailable: boolean = false;

    constructor(@Inject(BookManagerService) private bms : BookManagerService) { 
        this.getBooks();
    }

    getBooks(): void {
        var booksObservable: Observable<Book[]> = this.bms.getBooks();
        booksObservable.subscribe(
            books => this.books = books,
            error => console.log('error in book service manager during books fetching'),
            () => console.log('books fetched successfully')
        );
    }

    addBook(newBook: Book): void {
        var bookObservable: Observable<Book> = this.bms.saveBook(newBook);
        bookObservable.subscribe(
            book => this.books.push(book),
            error => console.log('error in book service manager during book insertion'),
            () => console.log('book inserted successfully')
        );
        document.getElementById('addBookButton').click();
        this.resetFields();
    }

    removeBook(id: string, rev: string): void {
        var bookObservable: Observable<Book> = this.bms.deleteBook(id, rev);
        bookObservable.subscribe(
            book => this.books.splice(this.books.indexOf(book), 1),
            error => console.log('error in book service manager during book deletion'),
            () => console.log('book removed successfully')
        );
    }

    setBookFields(book: Book): void {
        this.id = book.id;
        this.title = book.title;
        this.author = book.author;
        this.rating = book.rating;
        this.isNew= book.isNew;
        this.isAvailable = book.isAvailable;
        document.getElementById('addBookButton').click();
    }

    resetFields(): void {
        delete this.id;
        delete this.title;
        delete this.author;
        this.rating = 3.5;
        this.isNew = false;
        this.isAvailable = false;
    }

    cancel(): void {
        document.getElementById('addBookButton').click();
        this.resetFields();
    }

}