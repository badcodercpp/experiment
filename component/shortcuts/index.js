import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    Button, 
    Dimensions, 
    BackHandler } from 'react-native';

import { withTheme, Appbar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import { scale, 
    verticalScale, 
    moderateScale } from 'react-native-size-matters';
  
import RF from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('window');

class ShortcutScreen extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { actions } = this.props;
        //alert("hi")
        //actions.SHORTCUT_TOGGLE_DISPATCH(true)
        // BackHandler.addEventListener("hardwareBackPress",()=>{

        // })
    }
    _go_to_profile = () =>{
        Actions.BAD_PRF()
    }
    _go_to_chat_selector = () => {
        Actions.BAD_CHS()
    }
    render(){
        const { colors } = this.props.theme;
        //this.props.shortcutVisible!== undefined && this.props.shortcutVisible
        if (true) {
            return (
                <View style={{position:"absolute",width:scale(50),height:verticalScale(200),backgroundColor:colors.primary,right:scale(1),top:verticalScale(70),borderRadius:15,zIndex:5}}>
                    <View style={{flex:1}} >
                        <View style={{flex:1,flexDirection:"column"}} >
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"#ece5dd"}} >
                                <Appbar.Action icon="mail" onPress={() => console.log('Pressed label')} />
                            </View>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"#ece5dd"}} >
                                <Appbar.Action icon="mail" onPress={() => console.log('Pressed label')} />
                            </View>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"#ece5dd"}} >
                                <Appbar.Action icon="mail" onPress={() => console.log('Pressed label')} />
                            </View>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center",borderBottomWidth:2,borderBottomColor:"#ece5dd"}} >
                                <Appbar.Action icon="mail" onPress={this._go_to_chat_selector} />
                            </View>
                            <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                <Appbar.Action icon="person" onPress={this._go_to_profile} />
                            </View>
                        </View>
                    </View>
                </View>
            )
        } else {
            return false
        }
    }
}

export default withTheme(ShortcutScreen);