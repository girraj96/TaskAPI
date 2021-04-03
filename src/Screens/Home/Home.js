import React, { Component } from 'react'
import {Text, View,FlatList, RefreshControl} from 'react-native'
import colors from '../../styles/colors'
import styles from './styles'
import actions from "../../redux/actions"
import { showMessage } from 'react-native-flash-message'
import strings from '../../constants/lang'

//components
import UserPosts from '../../Components/UserPosts'
import WrapperContainer from '../../Components/WrapperContainer'
import Loader from '../../Components/Loader'
import Header from '../../Components/Header'



export default class Home extends Component {
    state={
        skipCount:0,
        isLoading:false,
        userPosts:[],
        isRefreshing:false
    }  
    componentDidMount() {
        this.setState({
            isLoading:true
        })
        this.getUserData();
    }    

    getUserData = () => {
        const {skipCount,userPosts}=this.state;

        actions.getUserSearch({
            searchType: "LEADERBOARD",
            limit: 6,
            skip:skipCount
        })
            .then(response => {
                this.setState({
                    isLoading:false,
                    isRefreshing:false,
                    userPosts:[...userPosts,...response.data]
                })
            }).catch((error) => {
                showMessage({
                    type: "danger",
                    icon: "danger",
                    message: error.message
                })
            });
            
    }

    handleRefresh=()=>{
        this.setState({
            isRefreshing:true
        })
        this.getUserData();
    }

    _onEndReached =async() => {
        const{skipCount}=this.state;
        
        await this.setState({
            skipCount:skipCount+6,
            isLoading:true
        })
        this.getUserData();
    }

    render() {
        const {isLoading, userPosts,isRefreshing}=this.state;
        return (
           <WrapperContainer  statusBarColor={colors.themeColor}>
               <Header bgColor={colors.white}>
               <View style={styles.homeHeader}>
                <Text style={styles.screenNameTxt}>{strings.YOUR_FEED}</Text>
               </View>
               </Header>
               <FlatList
                    data={userPosts}
               
                    ListFooterComponent={()=><View style={{height:30}}><Loader isLoading={isLoading}/></View>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <UserPosts data={item}/>}
                    onEndReached={this._onEndReached}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.9}  
                    refreshControl={<RefreshControl 
                                        refreshing={isRefreshing}
                                        onRefresh={this.handleRefresh}/>}    
                />
           </WrapperContainer>
        )
    }
}
