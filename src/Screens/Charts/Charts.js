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
import commonStyles from '../../styles/commonStyles'
import ListEmptyComp from '../../Components/ListEmptyComp/ListEmptyComp'
// import {getCurrentLocation} from "../../utils/helperFunctions"


export default class Charts extends Component {
    state = {
        isLoading: false,
        userPosts: [],
        searchTxts: "",
    }


    _onSearch = (value) => {
        const {searchTxts}=this.state
        this.setState({
            searchTxts: value,
            isLoading: true
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

        // getCurrentLocation().then((res)=>alert(res)).catch((error)=>console.log(error))

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
                <View style={{ flex: 1}}>
                    <FlatList
                        data={userPosts}
                        numColumns={2}
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
