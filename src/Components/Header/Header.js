import React from 'react'
import { View,StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import {scale, verticalScale} from "../../styles/responsiveSize";

export default function Header(props) {
    const {children, bgColor}=props;
    return (
        <View style={{   
            height:55,
            backgroundColor:bgColor,
            alignItems:"center",
        }}>
            {children}
        </View>
    )
}