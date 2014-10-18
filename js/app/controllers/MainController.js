function MainController (MainService,geolocation,$scope,$timeout) {

    //Define our model
    this.user = 'Conor';

    //Default Params
    this.routes = [];
    this.routeId = 0;
    this.destintionId = 1;
    this.route = {};
    this.intro = true;
    this.vanity = true;
    this.routePreview = 1;
//1.5 spacing
    this.me = {
        lat:'',
        lon:''
    };



    this.nextRoute = function(){
        if(this.routePreview == this.routes.length){
            this.routePreview = 1;
        }else{
            this.routePreview ++;
        }

        var route = this.getRoute(this.routePreview);
        speak("trolololololololololololol");
    }

    this.lastRoute = function(){
        if(this.routePreview == 1){
            this.routePreview = this.routes.length;
        }else{
            this.routePreview --;
        }
    }

    //Gets list of routes
    this.getRoutes = function(){
        this.routes = MainService.getRoutes();
    };

    //Given a route ID fetched the Route
    this.getRoute = function($id){
        return MainService.getRoute($id);
    };

    //Given a route ID fetched the Route
    this.setRoute = function($id){
        this.routeId = $id;
        this.route = MainService.getRoute($id);
    };



    this.locateMe = function(){

        console.log("test");
        this.position = null;
        this.message = "Determining gelocation...";

        geolocation.getLocation().then(function(data){

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
