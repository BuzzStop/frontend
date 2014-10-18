function MainController (MainService,$firebase) {

    //Define our model
    this.user = 'Conor';
    this.routes = [
        {
            id: 1,
            name: 'Route One'
        },
        {
            id: 2,
            name: 'Route Two'
        }

    ];
    this.routeId = 0;
    this.route = {
        id: 1,
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


    this.update = function(id){
        this.lighting.$save(id);
    };


}
