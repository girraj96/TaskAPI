import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import navigationStrings from '../constants/navigationStrings';
import {Login, Register, OtpVerification} from "../Screens";
import VerifyOTP from '../Screens/VerifyOTP/VerifyOTP';

const Stack=createStackNavigator();
 function AuthStack() {
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification}  options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.REGISTER} component={Register}  options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.VERIFY_OTP} component={VerifyOTP} options={{headerShown:false}}/>
        </React.Fragment>
    )
}

export default AuthStack;