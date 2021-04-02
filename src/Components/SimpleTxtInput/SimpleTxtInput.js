import React from 'react'
import { View, Text,TextInput } from 'react-native'
import styles from './styles';

export default function SimpleTxtInput(props) {
    const {_onSearch,placeholder}=props;
    return (
        <TextInput onChangeText={_onSearch} style={styles.txtInput} placeholder={placeholder} />

    )
}
