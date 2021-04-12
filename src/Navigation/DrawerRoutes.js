import React from 'react'
import { View, Text } from 'react-native'
import {createDrawerNavigator} from "@react-navigation/drawer";
import navigationStrings from '../constants/navigationStrings';
import {QrCode } from '../Screens';
import BottomRoutes from './BottomRoutes';
import DrawerContent from '../Components/DrawerContent';

const Drawer=createDrawerNavigator();
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName={navigationStrings.Home}  drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name={navigationStrings.BOTTOM_ROUTES} component={BottomRoutes} ></Drawer.Screen>
            <Drawer.Screen name={navigationStrings.QR_CODE} component={QrCode} options={{headerShown:false}}/>
            <Drawer.Screen name={navigationStrings.QR_CODE} component={QrCode} options={{headerShown:false}}/>

        </Drawer.Navigator>
    )
}
