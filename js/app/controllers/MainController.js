function MainController (MainService,geolocation,$scope,$interval,$interpolate) {

    //The routes and the route saved in our app for connection losses
    this.routes = [];
    this.route = {};
    this.routeId = 0;

    //Destintion and closest stop
    this.destinationId = 1;
    this.closest = 0;
    this.arrived = 0;
    this.speakFlag = 0;

    //System params
    this.intro = false;
    this.vanity = false;
    this.routeSet = false;
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
        speak(route.name);
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


    //Set the destination
    this.setDestination = function($id){
        this.destinationId = $id;
    };


    this.updateDests = function (mainCont){
        console.log("updating destinations");

        console.log(typeof mainCont);
        if(typeof mainCont !== 'undefined'){

            var min = 10000;
            angular.forEach(mainCont.route.stops, function(value, key) {

                var distance = mainCont.getDistance(value);
                console.log("distance" + distance);

                if(distance < min){
                    min = value.id;
                }

            }, this);
            mainCont.closest = min;

            if(mainCont.closest == mainCont.destinationId){
                mainCont.arrived = 1;
                if(mainCont.speakFlag == 0){
                    speak("You have arrived at your stop!");
                    mainCont.speakFlag = 1;
                }

            }else{
                mainCont.arrived = 0;
            }

        }


    }

    this.locateMe = function(){

        console.log("Locating");
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


    //Gets distance of me from a stop
    this.getDistance = function(stop){

        var lat1 = stop.lat;
        var lon1 = stop.lon;

        var lat2 = $scope.me.lat;
        var lon2 = $scope.me.long;

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

    this.createLocateMe = function(mainCont){
        return function(){
            mainCont.locateMe(mainCont);
            mainCont.updateDests(mainCont);
        }
    }

    this.doUpdates = function(mainCont){
        console.log("UPDATINGGGGGGGGG");
        mainCont.locateMe();
        mainCont.updateDests();
        //$interval(this.createLocateMe(this),3000);
        //$interval(this.locateMe,3000);
    }

    this.init = function () {
        console.log("init");
        this.getRoutes();
        this.doUpdates(this);
        $interval(this.createLocateMe(this),3000);

    };

    //Magic
    if (typeof(Number.prototype.toRad) === "undefined") {
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
        }
    }

    //Init function
    this.init();


}
