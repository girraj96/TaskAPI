import React from 'react'
import { View, StyleSheet} from 'react-native'
import colors from '../styles/colors'

export default function Header(props) {
    const {children, bgColor}=props;
    return (
        <View style={{   
            height:55,
            backgroundColor:bgColor,
            justifyContent:"center"
        }}>
            {children}
        </View>
    )
}