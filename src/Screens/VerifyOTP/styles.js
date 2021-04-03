import {StyleSheet} from "react-native"
import colors from "../../styles/colors"
import commonStyles from "../../styles/commonStyles"

export default StyleSheet.create({
    backButton:{
        height:30,
        width:30,
        resizeMode:"contain",
        tintColor:colors.themeColor,
        marginHorizontal:10,
    },
    mainView:{
        flex: 1, 
        backgroundColor:colors.white,
        paddingHorizontal: 10
    },
    verifyOtpImg:{
        height:160,
        width:130,
        alignSelf:"center",
        marginVertical:20
    },
    otpVerification:{
        ...commonStyles.fontBold22,
        alignSelf:"center",
        marginTop:10
    },
    sentToOtp:{
        ...commonStyles.fontBold14,
        alignSelf:"center",
        marginVertical:15,
        color:colors.textGrey
    },
    mobileNumber:{
        ...commonStyles.fontBold18,
        color:colors.black,
    },
    verifyOtpView: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        width: "100%"
    },
    verifyProceed:{
        ...commonStyles.fontBold18,
        color:colors.white,
        alignSelf:"center"
    },
    notReceiveOTP:{
        ...commonStyles.fontBold14,
        alignSelf:"center",
        marginVertical:40,
        color:colors.textGrey,

    },
    resendOTP:{
        ...commonStyles.fontBold18,
        color:colors.themeColor
    }
})