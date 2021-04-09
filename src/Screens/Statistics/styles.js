import {StyleSheet} from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
    
    screenNameTxt:{
        ...commonStyles.fontBold18,
        marginHorizontal:10
    },
    chartHeader:{
        height:"100%",
        flexDirection:"row",
        alignItems:"center",
        borderBottomColor:colors.lightGrey,
         borderBottomWidth:1,
         paddingHorizontal:5
    },
    drawerIcon:{
        height:35,
        width:35,
        tintColor:colors.themeColor
    },
    charts:{
        height:200
    }
})
