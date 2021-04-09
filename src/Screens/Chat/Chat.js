import React, { Component } from 'react'
import { FlatList, Text, View} from 'react-native'
import navigationStrings from '../../constants/navigationStrings'
import actions from '../../redux/actions'
import colors from '../../styles/colors'
import strings from '../../constants/lang'
import styles from './styles'
import { showError } from '../../utils/helperFunctions'

//Components
import WrapperContainer from '../../Components/WrapperContainer'
import Loader from '../../Components/Loader'
import UserChats from '../../Components/UserChats'
import Header from '../../Components/Header'

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
               showError(error.message)
            });
            
    }

    onUserChat=(data)=>{

        const {navigation}=this.props;
        navigation.navigate(navigationStrings.CHATTING_USERS, {data});

    }


    render() {
        const {userChats, isLoading}=this.state;
        console.log("in Chat screen===> ", userChats)
        return (
           <WrapperContainer>
               <Header bgColor={colors.lightGrey}>
                   <View style={{paddingHorizontal:15}}>
                       <Text style={styles.chatScreenNameTxt}>{strings.CHAT}</Text>
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
