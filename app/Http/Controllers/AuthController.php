<?php

namespace App\Http\Controllers;
use App\Mail\OtpMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    function register(Request $request){
        $userFound = User::where('email',$request->get('email'))->first();
        if($userFound){
            return response(["message"=>'User with this email exist'],400);
        }
        if($request->get('password') = $request->get('confirm_password')){
            $User = new User();
            $User->name = $request->get('username');
            $User->email = $request->get('email');
            $User->password = bcrypt( $request->get('password'));    

            $otp = mt_rand(100000,999999);
            $User->otp = $otp;

            $User->save();
            
            Mail::to($User->email)->send(new OtpMail('http://localhost:9000/verify_otp?user_id=' .$User->id.'&code='.$otp)); 
            return ["messsage"=>"success"];
        }
        return response()->json(['error' => 'confrim password doesnt match'], 400);
    }

    public function login(Request $request){
        $email = $request->get('email');
        $password = bcrypt($request->get('password'));
         // Attempt to authenticate the user
         if (!Auth::attempt([$email, $password])) {
            // If authentication fails or the email is not verified, return a Forbidden response
            throw ValidationException::withMessages(['email' => 'Invalid credentials or email not verified']);
         }
        $token = Auth::user()->createToken('AppName')->accessToken;
        return response()->json(['token' => $token], 200);
    }
    public function verifyOTP(Request $request)
    {
        $code = $request->query('code');
        $userId = $request->query('user_id');

        $user = User::find($userId);
        if($user && $code == $user->otp){

            $user->email_verified_at = Carbon::now();
            $user->save();

            return ["message"=> "OTP is valid and your accoutn is registered"];
        }else{
            return response(["message"=>"OTP is invalid",400]);
        }
    }
}
