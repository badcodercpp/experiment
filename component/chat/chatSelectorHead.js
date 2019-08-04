import React, { Component } from 'react';
import {
  View,
  Text,
  Image, 
  Dimensions, 
  StyleSheet,
  TouchableOpacity, 
  AsyncStorage
} from 'react-native';

import { scale, 
    verticalScale, 
    moderateScale } from 'react-native-size-matters';
  
import RF from "react-native-responsive-fontsize";
import { withTheme } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

class TimepassScreenHead extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            account_logo:this.props.account_logo
        };
        this._change_my_about=this._change_my_about.bind(this);
        this.mutateMyState=this.mutateMyState.bind(this);
    }
    _change_my_about(){
        //this.mutateMyState({showChangeMyAboutPopup:true,timepassChatNeeded:false})
        // will take to the edit about page
    }
    mutateMyState(data){
        this.props.MutateParentState(data)
    }
    componentWillMount(){
    }
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{width:scale(width),height:verticalScale(110),backgroundColor:colors.primary,marginRight:0,alignSelf:"flex-end"}}>
                <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <Image source={{uri:`data:image/png;base64,${this.state.img}`}} style={{width:scale(60),height:verticalScale(60),borderRadius:(scale(60)+verticalScale(60))/2}} />
                    </View>
                    <View style={{flex:3,flexDirection:"column"}}>
                        <TouchableOpacity onPress={this._change_my_about}>
                            <View style={{justifyContent:"center",alignItems:"center",paddingTop:10,paddingRight:scale(20)}}>
                                <View style={{flexDirection:'row',fle:1,flexGrow:1}} >
                                    <Text style={styles.item_1}>Don't let your special character,the secret that you know and,no one else does the truth don't let that get swallowed up by the great chewing complacency.
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#075e54'
    },
    item_1:{
        fontFamily:"sans-serif-light",
        color:"white",
        fontSize:RF(2.5),
      }
});

export default withTheme(TimepassScreenHead)