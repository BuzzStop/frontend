function MainController (MainService,$firebase) {

    //Define our model
    this.user = 'Conor';
    this.lighting = [];

    this.ref = new Firebase("https://glowing-fire-3588.firebaseio.com/switches");
    this.sync = $firebase(this.ref);
    this.lighting = this.sync.$asArray();


    this.update = function(id){
        this.lighting.$save(id);
    };


}
