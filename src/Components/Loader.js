import React from 'react'
import { View, ActivityIndicator,StyleSheet } from 'react-native'
import colors from '../styles/colors'

export default function Loader(props) {
   const {isLoading, size,color}=props;
    return (
        <>
        {isLoading&&<View style={styles.container}>
            <ActivityIndicator size={!!size?size:"large"} color={!!color?color:colors.themeColor}/>
        </View>}
        </>
    )
    
}
const styles = StyleSheet.create({
    container: {
        top:0,
        bottom:0,
        left:0,
        right:0, 
        position:"absolute",
        justifyContent:"center",
        alignItems:"center",
      },
})

