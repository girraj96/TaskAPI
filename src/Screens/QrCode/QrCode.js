import React, { Component } from 'react'
import { Button, Text, View,Linking} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import colors from '../../styles/colors';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import styles from './styles';

export default class QrCode extends Component {
    state = {
        isScanner: false
    }

    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
        this.setState({
            isScanner:false
        })
    };

    onOpenScanner=()=>{
        if (this.state.isScanner) {
            this.setState({
                isScanner:false
            })
        }
        else{
            this.setState({
                isScanner:true
            })
        }
    }

    render() {
        const { isScanner } = this.state;
        return (
            <View style={styles.mainView}>
                <QRCode
                    value="https://www.google.com"
                />
                <TouchableOpacity onPress={this.onOpenScanner}
                    style={styles.openScannerBtn}>
                    <Text>
                        Scan QR
                    </Text>
                </TouchableOpacity>

              {isScanner&& <QRCodeScanner
                    onRead={this.onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                   
                />}
            </View>
        )
    }
}
