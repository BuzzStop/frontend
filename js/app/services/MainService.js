function MainService($http,$timeout){

    this.fb = new Firebase('https://glowing-fire-3588.firebaseio.com/');


    this.updateSwitches = function () {
        var to_return = [];

        this.fb.on("value", function(data) {
            var data = data.val();
            var data_switches = data.switches;

            for (var key in data_switches) {
                var obj = data_switches[key];
                to_return.push(obj);
            }

        });

        return to_return;
    };

}