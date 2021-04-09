import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View, } from 'react-native'
import { AreaChart, Grid, BarChart, LineChart, PieChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import strings from '../../constants/lang'
import styles from './styles'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//components
import Header from '../../Components/Header'
import WrapperContainer from '../../Components/WrapperContainer'

export default class Statistics extends Component {
    state = {
            data: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]     
    }
    
    randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    pieData = this.state.data
           .filter((value) => value > 0)
           .map((value, index) => ({
               value,
               svg: {
                   fill: this.randomColor(),
                   onPress: () => console.log('press', index),
               },
               key: `pie-${index}`,
           }))

    render() {
        const { isLoading, userPosts } = this.state;
        const {navigation}=this.props;
        return (
            <WrapperContainer bgColor={colors.white} statusBarColor={colors.themeColor}>
               <Header bgColor={colors.white}>
               <View style={styles.chartHeader}>
                   <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                   <Image source={imagePath.drawer} style={styles.drawerIcon}/>
                   </TouchableOpacity>
                <Text style={styles.screenNameTxt}>{strings.STATS}</Text>
               </View>
               </Header>

                <KeyboardAwareScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
             <AreaChart
                style={{ height: 200 }}
                data={this.state.data}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            >
                <Grid />
            </AreaChart>
            <BarChart style={{ height: 200 }} data={this.state.data}  svg={{ fill: 'rgba(134, 65, 244, 0.8)' }} contentInset={{ top: 30, bottom: 30 }}>
                <Grid />
            </BarChart>

            <LineChart
                style={{ height: 200 }}
                data={this.state.data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
            <PieChart style={{ height: 200 }} data={this.pieData}/>
            
             </KeyboardAwareScrollView>
            </WrapperContainer>
        )
    }
}
