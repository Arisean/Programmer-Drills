<?php

namespace App\Http\Controllers;



use Laravel\Lumen\Routing\Controller as BaseController;
use PHPSandbox;



class SandboxController extends BaseController

{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
        

    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
     public function run()
     {
        $request = file_get_contents("php://input");
        $magic = rtrim($request, "\0");
        $jsonDecode = json_decode($magic, TRUE);
        $code = $jsonDecode['code'];
        
        $sandbox = new \PHPSandbox\PHPSandbox();
        $sandbox->setOption('allow_functions', true);
        $sandbox->setOption('allow_variables', true);
        $sandbox->setOption('allow_keywords', true);
        $sandbox->setOption('allow_functions', true);
        $sandbox->setOption('allow_objects', true);
        $sandbox->setOption('allow_closures', true);
        $sandbox->setOption('allow_classes', true);
        $sandbox->setOption('allow_globals', true);
        $sandbox->setOption('allow_escapes', true);
        $sandbox->setOption('validate_functions', false);

        $result = $sandbox->execute($code);
        
        echo $result;
     }
}
