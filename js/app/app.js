(function(){

    angular
        .module('app',['ngRoute','geolocation'])
        .controller('MainController', MainController)
        .controller('LightController', LightController)
        .service('MainService',MainService)
        .config(config)
    ;

})();
