import {StyleSheet} from "react-native";
import imagePath from "../../constants/imagePath";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
    searchBar:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        elevation:1,
        borderWidth:0.4,
        borderColor:colors.lightGrey,
    },
    nearByButtonView:{
        width:"50%",
        flexDirection:"row",
        borderWidth:0.4,
        borderColor:colors.textGrey,
        marginVertical:5,
        paddingVertical:5,
        alignItems:"center",
        borderTopRightRadius:5,
        borderBottomRightRadius:5
    },
    locationImg:{
        height:25,
        width:25,
        resizeMode:"contain", 
        tintColor:colors.themeColor,
    },
    rightMove:{
        height:20,
        width:15,
        resizeMode:"contain",
        position:"absolute",
        right:10
        
    },
    loaderView:{
        position:"absolute",
        right:20,
     
    },
    searchIcon:{
        height:35,
        width:35,
        tintColor:colors.themeColor,
        position:"absolute",
        right:10
    },
})