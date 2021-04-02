import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View, FlatList, TextInput } from 'react-native'
import Header from '../../Components/Header/Header'
import Loader from '../../Components/Loader/Loader'
import WrapperContainer from '../../Components/WrapperContainer/WrapperContainer'
import actions from "../../redux/actions"
import UserPosts from '../../Components/UserPosts'
import { showMessage } from 'react-native-flash-message'
import colors from '../../styles/colors'
import styles from '../Home/style'
import SimpleTxtInput from '../../Components/SimpleTxtInput/SimpleTxtInput'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import ListEmptyComp from '../../Components/ListEmptyComp/ListEmptyComp'
import {showError} from "../../utils/helperFunctions"


export default class Charts extends Component {
    state = {
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

    }

    render() {
        const { isLoading, userPosts } = this.state;
        return (
            <WrapperContainer bgColor={colors.white} statusBarColor={colors.themeColor}>
                <Header>
                    <View style={styles.searchBar}>
                        <SimpleTxtInput placeholder={strings.SEARCH_HERE} _onSearch={this._onSearch} />
                        <Image source={imagePath.searchIcon} style={styles.searchIcon} />
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
                        ListFooterComponent={() => <View style={{ height: 30 }}><Loader isLoading={isLoading} /></View>}
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
