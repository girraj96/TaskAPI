import { StyleSheet } from "react-native";
import commonStyles from "../../styles/commonStyles";

export default StyleSheet.create({
    headerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    backIcon:{
        height: 20, 
        width: 20, 
        marginHorizontal: 10
    },
    userProfileIcon:{
        height: 34, 
        width: 34, 
        borderRadius: 17, 
        marginHorizontal: 5
    },
    userNameTxt:{
        textAlign: "center", 
        ...commonStyles.fontBold18
    }
})
