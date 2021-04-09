import React, { Component } from 'react'
import { FlatList, Text, View, Dimensions, Image,RefreshControl } from 'react-native'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import WrapperContainer from '../../Components/WrapperContainer'
import colors from '../../styles/colors'
import Loader from '../../Components/Loader'
import { showMessage } from 'react-native-flash-message'
import UserChats from '../../Components/UserChats'
import Header from '../../Components/Header'
import strings from '../../constants/lang'
import commonStyles from '../../styles/commonStyles'

export default class Chat extends Component {
    state = {

        skipCount:0,
        isLoading:false,
        userChats:[],
        isRefreshing:false
    }
    onUserPress = (data) => {
        const { navigation } = this.props;
        navigation.navigate(navigationStrings.CHATTING_USERS)
        actions.chatUser(data)
    }

    componentDidMount(){
        this.setState({
            isLoading:true
        })
        this.getUserData();
    }


    
    getUserData = () => {
        const {userChats}=this.state;

        actions.getChatsUserData({
        })
            .then(response => {
                
                this.setState({
                    isLoading:false,
                    isRefreshing:false,
                    userChats:[...userChats,...response.data]
                })
            }).catch((error) => {
                this.setState({
                    isLoading:false
                })
                showMessage({
                    type: "danger",
                    icon: "danger",
                    message: error.message
                })
            });
            
    }

    onUserChat=(data)=>{

        const {navigation}=this.props;
        navigation.navigate(navigationStrings.CHATTING_USERS, {data});

    }


    render() {
        const {userChats, isLoading}=this.state;
        console.log("in Chats=> ", userChats)
        return (
           <WrapperContainer>
               <Header bgColor={colors.lightGrey}>
                   <View style={{paddingHorizontal:15}}>
                       <Text style={{...commonStyles.fontBold18}}>{strings.CHAT}</Text>
                   </View>
               </Header>
                    <FlatList
                    data={userChats}
                    ListFooterComponent={()=><View style={{height:30}}><Loader isLoading={isLoading}/></View>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =><UserChats data={item} onUserChat={this.onUserChat}/>}
                    showsVerticalScrollIndicator={false}
                />
           </WrapperContainer>
        )
    }
}
