<?php

$api = new API();

if(isset($_GET['switches'])){
    echo json_encode($api->getSwitches());
}


class API{
    public function getSwitches(){
        return array(
            [
                'id'        => '1',
                'label'     => 'Exampleee',
                'status'    => '1',
            ],
            [
                'id'        => '2',
                'label'     => 'Lamp',
                'status'    => '-1',
            ],
            [
                'id'        => '3',
                'label'     => 'Roffffffof',
                'status'    => '-1',
            ],
            [
                'id'        => '4',
                'label'     => 'Roof2',
                'status'    => '-1',
            ],
        );
    }

}
?>