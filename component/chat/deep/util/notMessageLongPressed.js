import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class NotMessageLongPressed extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <ScrollView >
                <View style={{flex:1,flexDirection:"row",backgroundColor:"#075e54"}} >
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} >
                        <Image source={{uri:`data:image/png;base64,${__global_main_dp}`}} style={{width:70,height:70,borderRadius:35,}} />
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Image source={this.state.deep_timepass_logo} style={{width:70,height:70}} />
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}} >
                        <Image source={{uri:`data:image/png;base64,${this.state.mainChatOpponentImage}`}} style={{width:70,height:70,borderRadius:35}} />
                    </View>
                </View>
                <View style={{flex:1,flexDirection:"row",backgroundColor:"#075e54"}} >
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} >
                        <Text style={{fontFamily:"sans-serif-light",fontSize:20,color:"white",fontWeight:"bold"}} numberOfLines={1} >{this.state.g_app_name.split(',')[0]}
                        </Text>
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this._start_audio_call} >
                        <Image source={require('./image/baseline_call_white_48dp.png')} style={{width:40,height:40,borderRadius:20}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={this._start_video_call} >
                        <Image source={require('./image/baseline_duo_white_48dp.png')} style={{width:40,height:40,borderRadius:20}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}} >
                        <Text style={{fontFamily:"sans-serif-light",fontSize:20,color:"white",fontWeight:"bold"}} numberOfLines={1} >{this.state.mainChatOpponent.split(' ')[0]}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default withTheme(NotMessageLongPressed);