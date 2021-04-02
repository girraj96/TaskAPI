import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRoutes from './TopRoutes';
import navigationStrings from '../constants/navigationStrings';
import {Home, Charts, Profile} from "../Screens";
import BottomRoutes from './BottomRoutes';

const Stack=createStackNavigator();
export default function MainStack() {
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.TOP_ROUTES} component={BottomRoutes} options={{headerShown:false}}/>
        </React.Fragment>
    )
}
