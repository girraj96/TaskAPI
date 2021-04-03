import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import styles from './styles'
import actions from "../../redux/actions"
import { showMessage } from "react-native-flash-message"
import strings from '../../constants/lang'


//components
import SimpleButton from '../../Components/SimpleButton'
import Loader from '../../Components/Loader'
import Header from '../../Components/Header'
import OtpFields from '../../Components/OtpFields'
import WrapperContainer from '../../Components/WrapperContainer'

export default class VerifyOTP extends Component {
  state = {
    value: '',
    isLoading:false
  };

  _onBackPress = () => this.props.navigation.goBack();

  _onVerifyOTP = () => {
    const { value } = this.state;
    const { userId } = this.props.route.params
    
    this.setState({
      isLoading: true,
    })
    actions.otpVerify({
      userId,
      otp: value,
      deviceToken: "123",
      registerFrom: Platform.OS.toUpperCase()
    })
      .then(res => {
        this.setState({
          isLoading: false,
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: error.message,
        });
      });
  }
  render() {
    const { value,isLoading} = this.state;
    const { userMobileNumber } = this.props.route.params
    return (
      <WrapperContainer>
        <Header bgColor={colors.white}>
          <TouchableOpacity onPress={this._onBackPress}>
            <Image source={imagePath.back_arrow} style={styles.backButton} />
          </TouchableOpacity>
        </Header>
        <View style={styles.mainView}>
          <Image source={imagePath.verify_otp_img} style={styles.verifyOtpImg} />
          <Text style={styles.otpVerification}>{strings.OTP_VERIFICATION}</Text>
          <Text style={styles.sentToOtp}>{strings.ENTER_THE_OTP}<Text style={styles.mobileNumber}>+91- {userMobileNumber} </Text></Text>
          <OtpFields cellCount={5}
            value={value}
            onChangeText={(text) => this.setState({ value: text })} />
            <Text style={styles.notReceiveOTP}>{strings.NOT_RECEIVE_OTP} <Text style={styles.resendOTP}>{strings.RESEND_OTP}</Text></Text>
          <View style={styles.verifyOtpView}>
            <SimpleButton bgColor={colors.themeColor} borderColor={colors.themeColor} _onSimpleButton={this._onVerifyOTP}>
              {isLoading? 
              <Loader color={colors.white} isLoading={isLoading}/>
              :<Text style={styles.verifyProceed}>{strings.VERIFY_PROCEED}</Text>}
            </SimpleButton>
          </View>

        </View>
      </WrapperContainer>
    )
  }
}
