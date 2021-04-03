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

})