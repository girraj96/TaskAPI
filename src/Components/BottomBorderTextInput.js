import React from 'react'
import {TextInput, StyleSheet} from 'react-native'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'

export default function BottomBorderTextInput(props) {
    const {placeholder, maxLength, keyboardType,selectionColor,_onChangeText}=props
    return (
        <TextInput placeholder={placeholder} style={styles.textInput}  onChangeText={_onChangeText}
         maxLength={maxLength} keyboardType={keyboardType} selectionColor={selectionColor}/>
    )
}

const styles= StyleSheet.create({
    textInput:{
        ...commonStyles.fontBold22,
        borderBottomColor:colors.themeColor,
        borderBottomWidth:1,
    }
})