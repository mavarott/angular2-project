System.register(['@angular/platform-browser-dynamic', './main.module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, main_module_1;
    var platform;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (main_module_1_1) {
                main_module_1 = main_module_1_1;
            }],
        execute: function() {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(main_module_1.MainModule);
        }
    }
});
