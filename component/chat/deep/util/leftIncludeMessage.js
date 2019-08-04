import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class LeftIncludeMessage extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{flex:4,flexDirection:"column",alignItems:"center",backgroundColor:"#075e54"}} >
                <View style={{flex:1.5,flexDirection:"row"}}>
                    <View style={{flex:5,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <ScrollView  >
                        <View style={{maxWidth:3*width/4,marginLeft:15,marginTop:5}} 
                            onPress={this._pressing_message_for_datetime} >
                                <View >
                                <View style={{backgroundColor:"#dcf8c6",alignSelf:"flex-start",borderColor:"grey",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRadius:30}}>
                                    <Text style={{paddingLeft:30,paddingBottom:5,paddingTop:0,paddingRight:30,textAlign:"center",fontFamily:"sans-serif-light",fontSize:15,color:"black"}}>
                                    {this.state._g_message_included[0].message}
                                    </Text>
                                    </View>
                                </View>
                                
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                        <TouchableOpacity onPress={()=>{
                            this.setState({_left_include_message_touched:false,_message_long_pressed_g:false})
                        }} >
                            <Image source={require('./image/baseline_clear_white_48dp.png')} style={{width:30,height:30,borderRadius:15}} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:2,flexDirection:"row"}} >
                    <View style={{flex:1,flexDirection:"column",backgroundColor:"#075e54",justifyContent:"center",alignItems:"center"}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <TouchableOpacity onPress={this._show_my_reactions}>
                                <Image
                                style={{width:40,height:40,borderRadius:20 }}
                                source={this.state.smileyIconImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:4,flexDirection:"column",backgroundColor:"#075e54",justifyContent:"center",alignItems:"center"}} >
                        <TextInput 
                        editable = {true} 
                        multiline={true} 
                        numberOfLines={2} 
                        style={{width:width/2,borderBottomColor:"#128c7e",borderBottomWidth:2,fontSize:15,color:"white",borderTopColor:"#128c7e",borderTopWidth:2}} 
                        placeholder="type message" 
                        placeholderTextColor="white" 
                        returnKeyLabel="search" 
                        underlineColorAndroid="transparent" 
                        value={this.state.currentGlobalMessage} 
                        onChangeText={(text) => this.changeGlobalMessage({text})} 
                        onFocus={()=>{
                        this.setState({persistentMarginTop:-20})
                        }} 
                        onBlur={()=>{
                        this.setState({persistentMarginTop:-50})
                        }}
                        />
                    </View>
                    <View style={{flex:1,flexDirection:"column",backgroundColor:"#075e54",justifyContent:"center",alignItems:"center"}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <TouchableOpacity onPress={this.sendMqttMessage}>
                                <Image source={this.state.sendIconImage} style={{width:40,height:40,borderRadius:20}} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"column",backgroundColor:"#075e54",justifyContent:"center",alignItems:"center"}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <Image source={this.state.speakIconImage} style={{width:40,height:40,borderRadius:20}} />
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:"column",backgroundColor:"#075e54",justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this._show_my_icon}>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                <Image source={this.state.smileyIconImage} style={{width:40,height:40,borderRadius:20}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default withTheme(LeftIncludeMessage);