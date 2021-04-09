import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import strings from '../constants/lang';
import commonStyles from '../styles/commonStyles';


export default function ListEmptyComp(props) {
    const {isLoading}=props;

    if (isLoading) {
        return (
            <></>
        )
    }
    else {
        return (
            <View style={styles.mainView}>
                <Text style={{ ...commonStyles.fontBold18 }}>
                    {strings.NOTHING_TO_SHOW}
                </Text>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    mainView:{
        height:500, 
        justifyContent:"center", 
        alignItems:"center"
    }
})

