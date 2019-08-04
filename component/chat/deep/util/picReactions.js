import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import EmojiInput from 'react-native-emoji-input';

class PicReactions extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{height:250,width:width,backgroundColor:"white",marginBottom:10}}>
                <ScrollView contentContainerStyle ={{alignSelf:"stretch"}} >
                    <View style={{alignSelf:"stretch",flexDirection:"row",flex:5,flexWrap:"wrap"}}>
                        {
                            this.state.reactions.map( (a,b)=>{
                            return (
                                <View key={b} style={{alignSelf:"stretch",flexDirection:"column",paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5}} >
                                <TouchableOpacity onPress={()=>{
                                    this._reactions_touched_individually(a)
                                    }}>
                                    <Image 
                                    source={{uri: a}} 
                                    style={{width:80,height:80,flex:1,position:"relative"}}
                                    />
                                </TouchableOpacity>
                                </View>
                            )
                            } )
                        }
                    </View>
                </ScrollView>
                <View style={{height:40,width:width,backgroundColor:"white",marginBottom:10}}>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                hello
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                hello
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                hello
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                hello
                            </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text>
                                hello
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default withTheme(PicReactions);