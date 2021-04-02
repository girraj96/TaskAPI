import React from 'react'
import { View, Text, TextInput } from 'react-native'
import style from './style'

export default function BottomBorderTextInput(props) {
    const {placeholder, maxLength, keyboardType,selectionColor,_onChangeText}=props
    return (
        <TextInput placeholder={placeholder} style={style.textInput}  onChangeText={_onChangeText}
         maxLength={maxLength} keyboardType={keyboardType} selectionColor={selectionColor}/>
    )
}
