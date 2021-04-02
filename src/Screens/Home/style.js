import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({


    screenNameTxt:{
        ...commonStyles.fontBold22,
        marginHorizontal:10
    },
    homeHeader:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:colors.lightGrey,
         borderBottomWidth:1,
    },
    searchIcon:{
        height:35,
        width:35,
        tintColor:colors.themeColor,
        position:"absolute",
        right:10
    },
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
        width:"60%",
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
        height:30,
        width:30,
        resizeMode:"contain", 
        tintColor:colors.themeColor,
    },
    rightMove:{
        height:20,
        width:15,
        resizeMode:"contain",
        position:"absolute",
        right:10
        
    }
})