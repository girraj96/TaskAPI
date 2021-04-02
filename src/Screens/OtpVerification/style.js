import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";

export default StyleSheet.create({

    selectLang: {
        backgroundColor: colors.lightGrey,
        paddingVertical: 10,
        width: 150,
        flexDirection: "row",
        position: "absolute",
        right: 10,
        borderRadius: 5
    },
    globeImg: {
        height: 20,
        width: 20,
        marginHorizontal: 5
    },
    selectLangTxt: {
        ...commonStyles.regularFont14
    },
    mainView: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 20
    },
    accountLoginTxt: {
        ...commonStyles.fontBold22,
        marginVertical: 5
    },
    validNumberTxt: {
        ...commonStyles.regularFont14
    },
    mobileNumberTxt: {
        ...commonStyles.fontBold14,
        marginTop: 40,
        color: colors.themeColor
    },
    mobileNumberTxtInputView: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        width: "100%",
    },
    mobileImg: {
        height: 35,
        width: 35,
    },
    countryCodeTxt: {
        ...commonStyles.fontBold22
    },
    bottomBorderTextInput: {
        width: "80%",
        marginHorizontal: 5
    },
    enterNumberTxt: {
        ...commonStyles.regularFont14,
        marginVertical: 5,
        alignSelf: "center",
        marginVertical:-10,
        marginLeft:35
    },
    continueBtnMainView: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        width: "100%"
    },
    continueBtnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    continueTxt: {
        ...commonStyles.fontBold18,
        color: colors.white,
        alignSelf:"center"
    },
    rightArrowImg: {
        height: 30,
        width: 30,
        tintColor: colors.white
    }

})
