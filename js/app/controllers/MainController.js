function MainController (MainService,$firebase) {

    //Define our model
    this.user = 'Conor';

    //Default Params
    this.routes = [];
    this.routeId = 0;
    this.route = {};



    //Gets list of routes
    this.getRoutes = function(){
        this.routes = MainService.getRoutes();
    };

    //Given a route ID fetched the Route
    this.getRoute = function($id){
        this.routeId = $id;
        this.route = MainService.getRoute($id);
    };


    this.init = function () {
        console.log("init");
        this.getRoutes();
        MainService.getLocation();
    };

    this.init();


}
