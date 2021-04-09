import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View,FlatList } from 'react-native'


import imagePath from '../../constants/imagePath'
import actions from "../../redux/actions"

//components
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'
import styles from './styles'
import SimpleTxtInput from "../../Components/SimpleTxtInput"
import strings from '../../constants/lang'
import ListEmptyComp from "../../Components/ListEmptyComp";
import Loader from "../../Components/Loader"
import UserPosts from "../../Components/UserPosts"

export default class Profile extends Component {
    state={
        isLoading: false,
        userPosts: [],
        searchTxts: "",
        
    }
    _onSearch = (value) => {
        const {searchTxts}=this.state
        this.setState({
            isLoading: true,
            searchTxts: value,
        })
        if (this.isSearchUsers) {
            clearTimeout(this.isSearchUsers);
        }

        this.isSearchUsers = setTimeout(() => {
            actions.searchUsers(searchTxts)
                .then((res) =>
                    this.setState({
                        userPosts: res.data,
                        isLoading: false,
                    }))
                .catch((error) =>
                    this.setState({
                        userPosts: [],
                        isLoading: false
                    }));
                }, 500)
    }

    _findNearBy=()=>{
            ///to be added
    }
    
    render() {
        const {isLoading,userPosts}= this.state;
        return (
         <WrapperContainer>
             <Header>
               
                 <View style={styles.searchBar}>
                        <SimpleTxtInput placeholder={strings.SEARCH_HERE} _onSearch={this._onSearch} />
                        {isLoading?<View style={styles.loaderView}><Loader isLoading={isLoading} size={"small"}/></View>: <Image source={imagePath.searchIcon} style={styles.searchIcon}/>}
                    </View>
             </Header>
             <TouchableOpacity style={styles.nearByButtonView} onPress={this._findNearBy}>
                        <Image source={imagePath.location_nearby} style={styles.locationImg}/>
                        <Text>{strings.FIND_NEARBY_FRIENDS}</Text>
                        <Image source={imagePath.right_move} style={styles.rightMove}/>
                    </TouchableOpacity>
                <View style={{ flex: 1}}>
                    <FlatList
                        data={userPosts}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <UserPosts data={item} />}
                        onEndReached={this._onEndReached}
                        ListEmptyComponent={<ListEmptyComp isLoading={isLoading}/>}
                    />
                </View>
         </WrapperContainer>
        )
    }
}
