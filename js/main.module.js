System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', '@angular/common', './router', './app/app.component', './navbar/navbar.component', './jumbotron/jumbotron.component', './contact-us/contact-us.component', './book-manager/book-manager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, platform_browser_1, forms_1, common_1, router_1, app_component_1, navbar_component_1, jumbotron_component_1, contact_us_component_1, book_manager_component_1;
    var MainModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
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
            MainModule = (function () {
                function MainModule() {
                }
                MainModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.routes],
                        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, jumbotron_component_1.JumbotronComponent, contact_us_component_1.ContactUsComponent, book_manager_component_1.BookManagerComponent],
                        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
                        bootstrap: [app_component_1.AppComponent]
                    })
                ], MainModule);
                return MainModule;
            }());
            exports_1("MainModule", MainModule);
        }
    }
});
