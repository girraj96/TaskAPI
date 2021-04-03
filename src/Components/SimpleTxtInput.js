import React from 'react'
import {TextInput, StyleSheet } from 'react-native'


export default function SimpleTxtInput(props) {
    const {_onSearch,placeholder}=props;
    return (
        <TextInput onChangeText={_onSearch} style={styles.txtInput} placeholder={placeholder} />

    )
}
const styles=StyleSheet.create({
    txtInput:{
        height:50,
        paddingHorizontal:15
    }
})
