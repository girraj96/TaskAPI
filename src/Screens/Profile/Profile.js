import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import imagePath from '../../constants/imagePath'
import commonStyles from '../../styles/commonStyles'
import actions from "../../redux/actions"

//components
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'

export default class Profile extends Component {
    _onLogout=()=>{
        actions.onLogout();
    }
    render() {
        return (
         <WrapperContainer>
             <Header>
                 <View style={{height:"100%",width:"100%", flexDirection:"row",alignItems:"center"}}>
                    <Text style={{...commonStyles.fontBold22, marginHorizontal:10}}>Profile</Text>
                    <TouchableOpacity style={{ position:"absolute", right:10}} onPress={this._onLogout}>
                    <Image style={{height:30, width:30, resizeMode:"contain"}} source={imagePath.logout}/>
                    </TouchableOpacity>
                 </View>
             </Header>
         </WrapperContainer>
        )
    }
}
