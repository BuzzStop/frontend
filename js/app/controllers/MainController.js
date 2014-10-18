function MainController (MainService,geolocation,$scope) {

    //Define our model
    this.user = 'Conor';

    //Default Params
    this.routes = [];
    this.routeId = 0;
    this.destintionId = 0;
    this.route = {};
    this.me = {
        lat:'',
        lon:''
    };



    //Gets list of routes
    this.getRoutes = function(){
        this.routes = MainService.getRoutes();
    };

    //Given a route ID fetched the Route
    this.getRoute = function($id){
        this.routeId = $id;
        this.route = MainService.getRoute($id);
    };



    this.locateMe = function(){

        console.log("test");
        this.position = null;
        this.message = "Determining gelocation...";

        geolocation.getLocation().then(function(data){
            console.log("got");

            $scope.me = {lat:data.coords.latitude, long:data.coords.longitude};
            MainController.me = $scope.me;
            MainController.$apply;
            this.parent.me = MainController.me;
            this.parent.$apply;
            $scope.$apply;

        });

    }

    this.showPosition = function(position){
        console.log("boo");
        console.log(position);
    }

    this.init = function () {
        console.log("init");
        this.getRoutes();
        this.locateMe();

    };



    this.init();


}
