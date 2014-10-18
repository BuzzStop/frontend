(function(){

    angular
        .module('app',['ngRoute','firebase'])
        .controller('MainController', MainController)
        .controller('LightController', LightController)
        .service('MainService',MainService)
        .config(config)
    ;

})();
