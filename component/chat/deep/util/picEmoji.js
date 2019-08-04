import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class PicEmoji extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{height:250,width:width,backgroundColor:"white",marginBottom:10}}>
                <EmojiInput
                    onEmojiSelected={(emoji) => {
                    this._add_emoji_to_input(emoji)
                    }} 
                    enableSearch={false} 
                    categoryLabelTextStyle={{fontSize: 17}} 
                    emojiFontSize={30} 
                    numColumns={8} 
                    numFrequentlyUsedEmoji={24} 
                    categoryLabelHeight={40} 
                    categoryHighlightColor="darkgrey"
                />
            </View>
        )
    }
}

export default withTheme(PicEmoji);