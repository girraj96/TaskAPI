import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    mainView:{
        flex: 1, 
        alignItems: "center",
         paddingVertical: 20,
    },
    openScannerBtn :{
        marginVertical:10, 
        height: 50,
        width: 120, 
        backgroundColor: colors.lightBlue, 
        alignItems: "center", 
        justifyContent: "center" 
    }
})
