
    function LightController (lightId) {

        //Define our model
        this.label = "Example Light";
        this.id= lightId;
        this.status = false;

        this.click = function(){
            console.log("Clicked light " + this.id);
            this.status = !this.status;
        }

        this.on = function(){
            this.status = true;
        }

        this.off = function(){
            this.status = false;
        }


    }
