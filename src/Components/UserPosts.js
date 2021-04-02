import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, } from 'react-native'
import fontFamily from '../styles/fontFamily';
import colors from "../styles/colors"
import imagePath from '../constants/imagePath';

export default function UserPosts(props) {
    const {data}=props

    return (
        <View style={styles.flatMainView}>
            <TouchableOpacity>
            <Image source={{uri:data.profileImg[0].original}} style={styles.imgView} resizeMode="cover"/>
            </TouchableOpacity>
            <Text style={styles.restaurantsNameTxt}>{data.firstName}</Text>
            <View style={styles.ratingsView}>
                <Image source={imagePath.ratings} style={styles.ratingImg}/>
                <Text style={styles.ratingsPointTxt}>4.2</Text>
            </View>
            <Text style={styles.foodTypeTxt}>description...</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addTxt}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    flatMainView:{
        width:"50%",
        paddingHorizontal:5,
        marginVertical:10
    },
    imgView:{
        height:160,
        width:"100%",
    },
    priceTxt:{
        fontFamily:fontFamily.medium,
        fontSize:16,
        marginVertical:5
    },
 
    addTxt:{
        color:colors.white,
        fontSize:16
    },
    addButton:{
        height:35,
        width:"100%",
        borderRadius:2,
        backgroundColor:colors.themeColor,
        marginVertical:5,
        alignItems:"center",
        justifyContent:"center",
    },
    restaurantsNameTxt:{
        fontFamily:fontFamily.bold,
        fontSize:18,
        marginVertical:5
    },
    foodTypeTxt:{
        fontFamily:fontFamily.regular,
        fontSize:15,
        marginVertical:5
    },
    ratingsView:{
        flexDirection:"row",
     alignItems:"center"
    },
    ratingsPointTxt:{
        fontFamily:fontFamily.bold, 
        fontSize:15, 
        marginHorizontal:5
    },
    ratingImg:{
        height:15,
        marginLeft:-5
    }
})

