function config ($routeProvider) {
    $routeProvider
        .when('/', {  //When you visit the index
            templateUrl:'partials/index.html',  //use this template
            controller:'MainController'
        })
        .otherwise({
            redirectTo:'/'
        });
}
