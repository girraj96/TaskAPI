import React from 'react'
import { View, Text,StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

export default function UserChats(props) {
    const {data, onUserChat}=props;
    
    return (
        <View style={styles.chatMainView}>
            <Image style={styles.userProfileImg} source={{uri:data.userInfo.profileImg[0].original}} />
            <View style={styles.userNameView}>
                <TouchableOpacity onPress={()=>onUserChat(data)}>
               <Text style={styles.userNameTxt}>{data.userInfo.fullName}</Text>
               <Text style={styles.userLastMsgTxt}>{data.lastMessage[0].text}</Text >
               </TouchableOpacity>

            </View>
            <Image source={imagePath.green_dot}  style={{height:15, width:15}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    chatMainView:{
        height:90,
        marginVertical:5,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10
    },
    userProfileImg:{
        height:70,
        width:70,
        borderRadius:35
    },
    userNameView:{
        flexDirection:"column",
        height:"100%",
        width:"100%",
        justifyContent:"center",
        paddingHorizontal:20,
        borderBottomColor:colors.normalGrey,
        borderBottomWidth:0.5
    },
    userNameTxt:{
        ...commonStyles.fontBold18,
    },
    userLastMsgTxt:{
        ...commonStyles.fontBold14
    }
})
