import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import navigationStrings from '../constants/navigationStrings';
import TopRoutes from './TopRoutes';
import colors from '../styles/colors';
import { Statistics, Profile } from '../Screens';
import imagePath from '../constants/imagePath';
import Chat from '../Screens/Chat/Chat';

const BottomTab = createBottomTabNavigator();

function BottomRoutes() {
    return (
        <BottomTab.Navigator tabBarOptions={{
            activeTintColor: colors.themeColor,
        }}
        >
            <BottomTab.Screen name={navigationStrings.TOP_ROUTES} component={TopRoutes} options={{
                tabBarLabel: navigationStrings.MONEY,
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.money}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.themeColor : colors.tabUnFocused,
                        }}
                    />
                )
            }} />
            <BottomTab.Screen name={navigationStrings.STATISTICS} component={Statistics} options={{
                tabBarLabel: navigationStrings.STATS,

                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.stats}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.themeColor : colors.tabUnFocused

                        }}
                    />
                )
            }} />
            <BottomTab.Screen name={navigationStrings.PROFILE} component={Profile} options={{
                tabBarLabel: navigationStrings.PROFILE_SCREEN,
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.user}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.themeColor : colors.tabUnFocused
                        }}
                    />
                )
            }} />
         <BottomTab.Screen name={navigationStrings.CHAT} component={Chat} options={{
                tabBarLabel: navigationStrings.CHAT_SCREEN,
                tabBarIcon: ({ focused, color, size }) => (
                    <Image source={imagePath.chat_icon}
                        style={{
                            width: size,
                            height: size,
                            tintColor: focused ? colors.themeColor : colors.tabUnFocused
                        }}
                    />
                )
            }} />
        
        </BottomTab.Navigator>

    )
}
export default BottomRoutes;
