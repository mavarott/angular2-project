System.register(['@angular/router', './jumbotron/jumbotron.component', './contact-us/contact-us.component', './book-manager/book-manager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, jumbotron_component_1, contact_us_component_1, book_manager_component_1;
    var router, routes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (jumbotron_component_1_1) {
                jumbotron_component_1 = jumbotron_component_1_1;
            },
            function (contact_us_component_1_1) {
                contact_us_component_1 = contact_us_component_1_1;
            },
            function (book_manager_component_1_1) {
                book_manager_component_1 = book_manager_component_1_1;
            }],
        execute: function() {
            exports_1("router", router = [
                { path: '', redirectTo: 'home', pathMatch: 'full' },
                { path: 'home', component: jumbotron_component_1.JumbotronComponent },
                { path: 'contactus', component: contact_us_component_1.ContactUsComponent },
                { path: 'services', component: book_manager_component_1.BookManagerComponent }
            ]);
            exports_1("routes", routes = router_1.RouterModule.forRoot(router));
        }
    }
});
