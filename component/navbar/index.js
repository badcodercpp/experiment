import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Dimensions, TextInput} from 'react-native';
import { Appbar, Searchbar, withTheme } from 'react-native-paper';
import { Router, Scene, Modal, Lightbox, Actions } from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');
import { scale, 
    verticalScale, 
    moderateScale } from 'react-native-size-matters';
  
import RF from "react-native-responsive-fontsize";

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstQuery:""
        }
    }
    // componentWillUnmout(){
    //     const { actions } = this.props;
    //     actions.MENU_TOGGLER_DISPATCH(!this.props.menuState);
    // }
    _focus_sb_to_ns = e => {
        Actions.BAD_SBF()
        //const { actions } = this.props;
        //actions.SHORTCUT_TOGGLE_DISPATCH(false) 
    }
    render(){
        const { colors } = this.props.theme;
        return (
                <Appbar style={styles.top} >
                    <View style={{flex:1,flexDirection:"row",zIndex:1}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} >
                            <Appbar.Action icon="menu" onPress={() => {
                                const { actions } = this.props;
                                actions.MENU_TOGGLER_DISPATCH(!this.props.menuState);
                            }} />
                        </View>
                        <View style={{flex:4,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}} >
                            <TextInput
                                placeholder="search people ... "
                                onChangeText={query => { this.setState({ firstQuery: query }); }}
                                value={this.state.firstQuery}
                                onFocus={this._focus_sb_to_ns} 
                                style={{backgroundColor: colors.primary,color:colors.accent,flex:1,width:scale((width/2)-25),height:verticalScale(15),fontSize:RF(3),borderBottomColor:"#800000",borderBottomWidth:1,marginBottom:verticalScale(10),paddingBottom:0,fontFamily:"sans-serif-light"}}
                            />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <Appbar.Action icon="mail" onPress={() => console.log('Pressed label')} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <Appbar.Action icon="notifications" onPress={() => console.log('Pressed delete')} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                            <Appbar.Action icon="person" onPress={() => console.log('Pressed delete')} />
                        </View>
                    </View>
                </Appbar>
        )
    }
}

const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      zIndex:1
    },
  });

export default withTheme(NavBar);
