import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class MessageLongPressed extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <ScrollView >
                <View style={{flex:1,flexDirection:"row",backgroundColor:"#075e54"}} >
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} >
                        <TouchableOpacity onPress={()=>{
                        this.setState({_left_include_message_touched:true})
                        }} >
                            <Image source={require('./image/baseline_undo_white_48dp.png')} style={{width:30,height:30,borderRadius:15,}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <TouchableOpacity onPress={()=>{
                        
                        }} >
                            <Image source={require('./image/twotone_delete_white_48dp.png')} style={{width:30,height:30,borderRadius:15}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}} >
                        <TouchableOpacity onPress={()=>{
                            this.setState({_right_seng_included_message_user:true})
                        }} >
                            <Image source={require('./image/baseline_redo_white_48dp.png')} style={{width:30,height:30,borderRadius:15}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default withTheme(MessageLongPressed);