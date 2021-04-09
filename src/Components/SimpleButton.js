import React from 'react'
import {TouchableOpacity, StyleSheet } from 'react-native'


export default function SimpleButton(props) {
    const {bgColor, children,borderColor, _onSimpleButton}=props;
    return (
        <TouchableOpacity style={{
            height:50,
            backgroundColor:bgColor,
            borderRadius:5,
            borderWidth:2,
            borderColor:borderColor,
            justifyContent:"center",
            elevation:5
        }}
        onPress={_onSimpleButton}>
            {children}
        </TouchableOpacity>
    )
}
