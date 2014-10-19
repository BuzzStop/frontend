function MainController (MainService,geolocation,$scope,$timeout,$interpolate) {

    //Define our model
    this.user = 'Conor';
    this.routeSet = false;

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
        this.route = MainService.getRoute($id);
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
            console.log($scope.me);

        });




    }


    this.getDistance = function(stop){


        var lat1 = stop.lat;
        var lon1 = stop.lon;

        var lat2 = $scope.me.lat;
        var lon2 = $scope.me.long;

        console.log("testinglolololol");
        console.log(lat1);
        console.log(lon1);
        console.log(lat2);
        console.log(lon2);



        var R = 6371; // km
        var φ1 = lat1.toRad();
        var φ2 = lat2.toRad();
        var Δφ = (lat2-lat1).toRad();
        var Δλ = (lon2-lon1).toRad();

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;

        return d.toFixed(3);
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


    if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        }
    }


    this.init();


}
