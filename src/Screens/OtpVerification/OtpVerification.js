import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import BottomBorderTextInput from '../../Components/BottomBorderTextInput/BottomBorderTextInput'
import Header from '../../Components/Header/Header'
import styles from './style'
import WrapperContainer from '../../Components/WrapperContainer/WrapperContainer'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import SimpleButton from '../../Components/SimpleButton/SimpleButton'
import Loader from '../../Components/Loader/Loader'
import navigationStrings from '../../constants/navigationStrings'
import actions from "../../redux/actions"
import {showMessage} from "react-native-flash-message"
import strings from '../../constants/lang'
 
export default class OtpVerification extends Component {

    state={
        isLoading:false,
        userMobileNumber:"",
        
    }

    _onChangeText=(value)=>{
        this.setState({
            userMobileNumber:value
        })
    }
    _onSimpleButton=()=>{
        const {userMobileNumber} = this.state;
        const {navigation}=this.props;
        this.setState({
            isLoading: true,
          });
        
          actions.onSendOTP({
            contactDetails:{
              phoneNo:userMobileNumber,
              countryCode:'+91',
              countryCodeISO:"IN"
            }
          })
          .then(res => {
            this.setState({
              isLoading: false,
            });
            showMessage({
              type: 'success',
              icon: 'success',
              message: 'OTP sent successfully',
            });
          navigation.navigate(navigationStrings.VERIFY_OTP,{userId:res.data.userId, userMobileNumber:userMobileNumber})
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
        const {isLoading, userMobileNumber}=this.state;
        return (
            <WrapperContainer statusBarColor={colors.themeColor}>
                <Header bgColor={colors.white}>
                    <TouchableOpacity style={styles.selectLang}>
                        <Image source={imagePath.globe} style={styles.globeImg}/>
                        <Text style={styles.selectLangTxt}>{strings.SELECT_LANGUAGE}</Text>
                    </TouchableOpacity>
                </Header>
                <View style={styles.mainView}>
                <Text style={styles.accountLoginTxt}>{strings.ACCOUNT_LOGIN}</Text>
                <Text style={styles.validNumberTxt}>{strings.PLEASE_ENTER_VALID_NUMBER}</Text>
                <Text style={styles.mobileNumberTxt}>{strings.MOBILE_NUMBER}</Text>
                <View>
                <View style={styles.mobileNumberTxtInputView}>
                    <Image source={imagePath.mobile} style={styles.mobileImg} />
                    <Text style={styles.countryCodeTxt}>+91</Text>
                    <View style={styles.bottomBorderTextInput}>
                    <BottomBorderTextInput maxLength={10} keyboardType={"number-pad"} selectionColor={colors.themeColor} _onChangeText={this._onChangeText}/>
                    </View>
                </View>
                <Text style={styles.enterNumberTxt}>{strings.ENTER_YOUR_NUMBER}</Text>
                </View>
             
                <View style={styles.continueBtnMainView}>
                <SimpleButton bgColor={colors.themeColor} borderColor={colors.themeColor} _onSimpleButton={this._onSimpleButton}>
                    <View style={styles.continueBtnView}>
                        <Text style={styles.continueTxt}>{strings.CONTINUE}</Text>
                        <Image source={imagePath.right_arrow} style={styles.rightArrowImg}/>
                    </View>
                </SimpleButton>
                </View>
                
                </View>
                <Loader isLoading={isLoading}/>
            </WrapperContainer>
        )
    }
}
