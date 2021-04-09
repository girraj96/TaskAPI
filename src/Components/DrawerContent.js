import React from "react";
import {View, StyleSheet,Image} from "react-native";
import {Avatar, Title, Caption, 
    Paragraph, Drawer, Text, TouchableRipple,
    Switch, } from "react-native-paper"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer"
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import actions from "../redux/actions";

export default function DrawerContent(props){
    const {navigation}=props;
    return(
        <View style={{flex:1}}>
                 <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://i.picsum.photos/id/1005/367/267.jpg?hmac=bl_eyI1wwd6n-Q120mDottBNmCDNBurz7Z-b5IOeJU0'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                
                    </View>

                    <Drawer.Section style={styles.drawerSection}  >
                        <DrawerItem 
                            icon={({color, size}) => (
                               <Image source={imagePath.home} style={styles.drawericons}/>
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate(navigationStrings.HOME)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.user_icon} style={styles.drawericons}/>
                            )}
                            label="Stats"
                            onPress={() => {navigation.navigate(navigationStrings.STATISTICS)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.bookmark_icon} style={styles.drawericons}
                              />
                            )}
                            onPress={()=>{navigation.navigate(navigationStrings.QR_CODE)}}
                            label="Bookmarks"
                           
                        />
                        <DrawerItem 
                          icon={({color, size}) => (
                            <Image source={imagePath.settings_icon} style={styles.drawericons}/>
                        )}
                            label="Settings"
                           
                        />
                        <DrawerItem 
                       icon={({color, size}) => (
                        <Image source={imagePath.support_icon} style={styles.drawericons}/>
                    )}
                      label="Support"
                            
                        />
                    </Drawer.Section>
                      <Drawer.Item
                        label="Logout"

                        onPress={()=>actions.onLogout()}
                       />
                        
                     
                     
                    
                  
                </View>
                </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    drawericons:{
      height:25,
      width:25
    }
  });