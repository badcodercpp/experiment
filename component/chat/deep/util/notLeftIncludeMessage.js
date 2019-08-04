import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class NotLeftIncludeMessage extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{flex:2,flexDirection:"row",alignItems:"center"}} >
                <View style={{flex:1,flexDirection:"row"}} >
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

export default withTheme(NotLeftIncludeMessage);