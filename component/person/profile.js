import React, { Component } from 'react'
import { StyleSheet,
     View,
     Image, 
     TextInput, 
     Button, 
     ImageBackground,
     TouchableOpacity } from 'react-native';
import { Surface, Text, withTheme } from 'react-native-paper';
import ProfileDesignTabs from './tabs'

class ProfileScreen extends Component {
    constructor(props){
        super(props);
    }
    _chang_cover = e => {
        alert("clicking cover")
    }
    _chang_dp = e => {
        alert("clicking dp")
    }
    render(){
        const { colors } = this.props.theme;
        return(
            <View style={{flex:1,flexDirection:"column",backgroundColor:colors.primary}} >
                <View style={{flex:4,flexDirection:"column"}} >
                    <View style={{flex:6,flexDirection:"row"}} >
                        <View style={{flex:1,borderColor:"black",borderWidth:2}} >
                            <TouchableOpacity onPress={this._chang_cover} >    
                                <ImageBackground imageStyle={{resizeMode:"stretch"}} source={require('../image/kit_chat_logo.jpg')} style={{width: '100%', height: '100%'}}>
                                    <View style={{backgroundColor:"transparent",flex:1,justifyContent:"flex-end",alignItems:"center"}} >
                                    <TouchableOpacity onPress={this._chang_dp} activeOpacity={1} >
                                        <Image
                                            style={{width: 80, height: 80, borderRadius:40}}
                                            source={require('../image/rsz_gossip.png')}
                                        />
                                    </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <Text style={{fontFamily:"sans-serif-light",fontSize:17}} >
                                Bad coder
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}} >
                        <View style={{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}} >
                            <View style={{flex:1,flexDirection:"row"}} >
                                <View style={{flex:0.5,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                    <Text style={{fontFamily:"sans-serif-light",fontSize:17}} >
                                        155 known
                                    </Text>
                                </View>
                                <View style={{flex:0.5,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                    <Text style={{fontFamily:"sans-serif-light",fontSize:17}} >
                                        55 knowing
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:5,flexDirection:"row"}} >
                    <View style={{flex:1,flexDirection:"column"}} >
                        <ProfileDesignTabs />
                    </View>
                </View>
            </View>
        )
    }
}


export default withTheme(ProfileScreen);