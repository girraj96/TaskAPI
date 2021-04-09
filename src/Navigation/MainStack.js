import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRoutes from './TopRoutes';
import navigationStrings from '../constants/navigationStrings';
import { ChattingUser } from '../Screens';
import DrawerRoutes from './DrawerRoutes';

const Stack=createStackNavigator();
export default function MainStack() {
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.DRAWER_ROUTES} component={DrawerRoutes} options={{headerShown:false}}/>
            <Stack.Screen name={navigationStrings.CHATTING_USERS} component={ChattingUser} options={{headerShown:false}}/> 
        </React.Fragment>
    )
}
