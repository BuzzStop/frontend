(function(){

    angular
        .module('app',['ngRoute','geolocation','ngTouch'])
        .controller('MainController', MainController)
        .controller('LightController', LightController)
        .service('MainService',MainService)
        .config(config)
    ;

})();
