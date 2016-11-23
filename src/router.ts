import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookManagerComponent } from './book-manager/book-manager.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: JumbotronComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'services', component: BookManagerComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);