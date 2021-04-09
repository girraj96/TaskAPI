import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import navigationStrings from '../../constants/navigationStrings'
import actions from "../../redux/actions"
import { showMessage } from "react-native-flash-message"
import strings from '../../constants/lang'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginManager} from 'react-native-fbsdk';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { showError, showSuccess } from '../../utils/helperFunctions'

//components
import SimpleButton from '../../Components/SimpleButton'
import WrapperContainer from '../../Components/WrapperContainer'
import BottomBorderTextInput from '../../Components/BottomBorderTextInput'
import Header from '../../Components/Header'
import Loader from '../../Components/Loader'


GoogleSignin.configure();
export default class OtpVerification extends Component {
  state = {
    isLoading: false,
    userMobileNumber: "",
  }

  _onChangeText = (value) => {
    this.setState({
      userMobileNumber: value
    })
  }
  _onSimpleButton = () => {
    const { userMobileNumber } = this.state;
    const { navigation } = this.props;
    this.setState({
      isLoading: true,
    });

    actions.onSendOTP({
      contactDetails: {
        phoneNo: userMobileNumber,
        countryCode: '+91',
        countryCodeISO: "IN"
      }
    })
      .then(res => {
        this.setState({
          isLoading: false,
        });
       showSuccess("OTP sent successfully")
        navigation.navigate(navigationStrings.VERIFY_OTP, { userId: res.data.userId, userMobileNumber: userMobileNumber })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
        showError(error.message)
      });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  _onFBlogin = () => {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
              result.grantedPermissions.toString()
          );
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <WrapperContainer statusBarColor={colors.themeColor}>
        <Header bgColor={colors.white}>
          <TouchableOpacity style={styles.selectLang}>
            <Image source={imagePath.globe} style={styles.globeImg} />
            <Text style={styles.selectLangTxt}>{strings.SELECT_LANGUAGE}</Text>
          </TouchableOpacity>
        </Header>
        <KeyboardAwareScrollView contentContainerStyle={styles.mainView}>
          <Text style={styles.accountLoginTxt}>{strings.ACCOUNT_LOGIN}</Text>
          <Text style={styles.validNumberTxt}>{strings.PLEASE_ENTER_VALID_NUMBER}</Text>
          <Text style={styles.mobileNumberTxt}>{strings.MOBILE_NUMBER}</Text>
          <View>
            <View style={styles.mobileNumberTxtInputView}>
              <Image source={imagePath.mobile} style={styles.mobileImg} />
              <Text style={styles.countryCodeTxt}>{strings.COUNTRY_CODE}</Text>
              <View style={styles.bottomBorderTextInput}>
                <BottomBorderTextInput maxLength={10} keyboardType={"number-pad"} selectionColor={colors.themeColor} _onChangeText={this._onChangeText} />
              </View>
            </View>
            <Text style={styles.enterNumberTxt}>{strings.ENTER_YOUR_NUMBER}</Text>
          </View>

          <View style={styles.continueBtnMainView}>
            <SimpleButton bgColor={colors.themeColor} borderColor={colors.themeColor} _onSimpleButton={this._onSimpleButton}>
              {isLoading ? <Loader color={colors.white} isLoading={isLoading} /> : <View style={styles.continueBtnView}>
                <Text style={styles.continueTxt}>{strings.CONTINUE}</Text>
                <Image source={imagePath.right_arrow} style={styles.rightArrowImg} />
              </View>}
            </SimpleButton>
          </View>
          <View style={styles.socialLoginBtnView}>
            <View style={styles.googleSigninBtn}>
            <SimpleButton _onSimpleButton={this._onFBlogin} bgColor={colors.white} borderColor={colors.white} >
            <View style={styles.simpleBtnChild}>
                  <Image source={imagePath.facebook} style={styles.socialIcons} />
                  <Text style={styles.socialTxts}>{strings.FACEBOOK}</Text>
                </View>
             </SimpleButton>
            </View>
            <View style={styles.facebookSigninBtn}>
              <SimpleButton _onSimpleButton={this._signIn}  bgColor={colors.white} borderColor={colors.white}>
                <View style={styles.simpleBtnChild}>
                  <Image source={imagePath.google} style={styles.socialIcons} />
                  <Text>{strings.GOOGLE}</Text>
                </View>
              </SimpleButton>
         
            </View>
          </View>
        </KeyboardAwareScrollView>
      </WrapperContainer>
    )
  }
}
