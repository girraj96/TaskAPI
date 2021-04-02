import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import navigationStrings from '../constants/navigationStrings';
import TopRoutes from './TopRoutes';
import colors from '../styles/colors';
import { Charts, Profile } from '../Screens';
import imagePath from '../constants/imagePath';

const BottomTab = createBottomTabNavigator();

function BottomRoutes() {
    return (
        <BottomTab.Navigator tabBarOptions={{
            activeTintColor: colors.tabFocused,

        }}
        >
            <BottomTab.Screen name={navigationStrings.TOP_ROUTES} component={TopRoutes} options={{
                tabBarLabel: "Money",
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.money}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.tabFocused : colors.tabUnFocused,
                        }}
                    />
                )
            }} />
            <BottomTab.Screen name={navigationStrings.CHARTS} component={Charts} options={{
                tabBarLabel: "Stats",

                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.stats}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.tabFocused : colors.tabUnFocused

                        }}
                    />
                )
            }} />
            <BottomTab.Screen name={navigationStrings.PROFILE} component={Profile} options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.user}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.tabFocused : colors.tabUnFocused
                        }}
                    />
                )
            }} />
        

        </BottomTab.Navigator>

    )
}
export default BottomRoutes;
