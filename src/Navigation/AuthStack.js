import React from 'react'
import { createStackNavigator} from "@react-navigation/stack";
import navigationStrings from '../constants/navigationStrings';
import {LoginWithOTP,OtpVerification} from "../Screens";

const Stack=createStackNavigator();
 function AuthStack() {
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.LOGIN_WITH_OTP} component={LoginWithOTP}  options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification} options={{headerShown:false}}/>
        </React.Fragment>
    )
}

export default AuthStack;