function MainService($http,$timeout){


    this.getLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        return 0;
    }



    //Gets list of routes
    this.getRoutes = function(){
        return routes = [
            {
                id: 1,
                name: 'Route One'
            },
            {
                id: 2,
                name: 'Route Two'
            }
        ];
    };

    //Given a route ID fetched the Route
    this.getRoute = function($id){
        return {
            id: 1,
            name: 'Route One',
            stops: [
                {
                    id: 1,
                    route_id: 1,
                    name: 'Stop One',
                    lat: '12345',
                    lon: '54321',
                    order: 10
                },
                {
                    id: 2,
                    route_id: 1,
                    name: 'Stop Two',
                    lat: '12345',
                    lon: '54321',
                    order: 20
                },
                {
                    id: 3,
                    route_id: 1,
                    name: 'Stop Three',
                    lat: '12345',
                    lon: '54321',
                    order: 30
                },
                {
                    id: 4,
                    route_id: 1,
                    name: 'Stop Four',
                    lat: '12345',
                    lon: '54321',
                    order: 40
                },
                {
                    id: 5,
                    route_id: 1,
                    name: 'Stop Five',
                    lat: '12345',
                    lon: '54321',
                    order: 50
                },
                {
                    id: 6,
                    route_id: 1,
                    name: 'Stop Six',
                    lat: '12345',
                    lon: '54321',
                    order: 60
                }
            ]
        };
    };

}