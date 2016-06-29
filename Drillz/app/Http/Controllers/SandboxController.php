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
        
        return view('index');
     }
}
