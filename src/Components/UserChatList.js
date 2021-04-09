import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../styles/colors';

export default function UserChatList(props) {
    const {data, onUserPress}=props;
    return (
        <TouchableOpacity onPress={()=>onUserPress(data)} style={styles.mainTouchView}>
            <Text style={{fontSize:19}}>{data.name}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainTouchView:{
        height:60,
        width:"100%",
        borderWidth:0.5,
        borderColor:colors.lightGrey,
        backgroundColor:colors.lightBlue,
        marginVertical:2,
        elevation:2,
        paddingHorizontal:10,
        paddingVertical:10
    }
})
