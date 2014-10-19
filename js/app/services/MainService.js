
function MainService($http,$timeout,$q){

    

    //Gets list of routes
    this.getRoutes = function(){

      /* var promise = $http.get('https://buzzstop.herokuapp.com/routes').then(function (response) {
            // The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response.data;
        });
        // Return the promise to the controller
        return promise;*/




        return routes = [
           {
               id: 1,
               name: "Virtual Bus",
               url: "https://buzzstop.herokuapp.com/routes/1"
           },
           {
               id: 2,
               name: "Stairway to Heaven",
               url: "https://buzzstop.herokuapp.com/routes/2"
           },
           {
               id: 3,
               name: "Highway to Hell",
               url: "https://buzzstop.herokuapp.com/routes/3"
           }
       ];
    };

    //Given a route ID fetched the Route
    this.getRoute = function($id){

        return {
            id: 1,
            name: "Virtual Bus",
            created_at: "2014-10-18T14:37:15.267Z",
            updated_at: "2014-10-18T14:37:15.267Z",
            stops: [
                {
                    id: 1,
                    route_id: 1,
                    name: "Queensway Moor Street Link Bus Stop",
                    lat: 52.477815,
                    lon: -1.896033,
                    order: 10,
                    created_at: "2014-10-18T14:37:15.304Z",
                    updated_at: "2014-10-18T14:37:15.304Z"
                },
                {
                    id: 2,
                    route_id: 1,
                    name: "New Street - Corporation St Intersection (Primark)",
                    lat: 52.479072,
                    lon: -1.897813,
                    order: 20,
                    created_at: "2014-10-18T14:37:15.312Z",
                    updated_at: "2014-10-18T14:37:15.312Z"
                },
                {
                    id: 3,
                    route_id: 1,
                    name: "Muji",
                    lat: 52.479134,
                    lon: -1.898489,
                    order: 30,
                    created_at: "2014-10-18T14:37:15.318Z",
                    updated_at: "2014-10-18T14:37:15.318Z"
                },
                {
                    id: 4,
                    route_id: 1,
                    name: "The Studio",
                    lat: 52.479672,
                    lon: -1.898164,
                    order: 40,
                    created_at: "2014-10-18T14:37:15.324Z",
                    updated_at: "2014-10-18T14:37:15.324Z"
                }
            ]
        };

       /* var promise = $http.get('https://buzzstop.herokuapp.com/routes/' + $id).then(function (response) {
            // The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response;
        });*/


    };

}
