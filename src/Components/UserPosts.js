import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, } from 'react-native'
import fontFamily from '../styles/fontFamily';
import colors from "../styles/colors"
import imagePath from '../constants/imagePath';
import commonStyles from '../styles/commonStyles';

export default function UserPosts(props) {
    const {data}=props

    return (
        <View style={styles.flatMainView}>
            <Image source={{uri:data.profileImg[0].original}} style={styles.imgView} resizeMode="cover"/>
            <View style={styles.nameDescView}>
            <Text style={styles.personName}>{data.firstName}</Text>
            <Text style={styles.descriptionTxt}>description...</Text>
            </View>
           <View style={styles.addRemoveBtnView}>
           <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addTxt}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton}>
                <Text style={styles.removeTxt}>Remove</Text>
            </TouchableOpacity>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    flatMainView:{
        paddingHorizontal:5,
        marginVertical:5,
        backgroundColor:colors.white,
        elevation:5,
        height:100,
        marginHorizontal:5,
        flexDirection:"row",
        alignItems:"center"
    },
    imgView:{
        height:70,
        width:70,
        borderRadius:35,
    },
    nameDescView:{
        alignItems:"flex-start",
           marginHorizontal:10
       },
       personName:{
        ...commonStyles.fontBold22,
    },
 
    descriptionTxt:{
        fontFamily:fontFamily.regular,
        fontSize:15,
        marginVertical:5
    },
    addRemoveBtnView:{
        position:"absolute",
        right:10
    },

    addButton:{
        height:25,
        width:60,
        borderRadius:2,
        backgroundColor:colors.themeColor,
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center",
    
    },
    removeButton:{
        height:25,
        width:60,
        borderRadius:2,
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center",
        borderWidth:0.5,
        borderColor:colors.black
    },
    addTxt:{
        color:colors.white,
        ...commonStyles.fontBold14
    },
    removeTxt:{
        color:colors.black,
        ...commonStyles.fontBold14
    }
 
  
})

