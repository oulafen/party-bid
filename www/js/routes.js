myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_create_page.html",
        controller:ActivityCreateController
        }).when("/activity/list", {
            templateUrl: "pages/activity_list_page.html",
            controller:ActivityListController
        }).when("/sign_ups", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});

/** Here is example
myModule.config(function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "pages/activity_list_page.html",
        controller: ActivityListController
    }).when("/activity/create", {
            templateUrl: "pages/activity_create_page.html",
            controller: ActivityCreateController
        }).when("/sign_ups/list/:activity_name", {
            templateUrl: "pages/apply_page.html",
            controller: SignUpListController
        }).otherwise({
            redirectTo: "/"
        });
});
**/