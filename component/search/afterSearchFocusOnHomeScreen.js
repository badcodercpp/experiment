import React, { Component } from 'react'
import { StyleSheet, 
    Text, 
    View, 
    Image, 
    Button, 
    Dimensions, 
    TextInput, 
    BackHandler } from 'react-native';
import { Appbar, Searchbar, withTheme } from 'react-native-paper';
import { Router, Scene, Modal, Lightbox, Actions } from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');

class HomeSearchAfterFocus extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstQuery:""
        }
    }
    componentDidMount(){
        const { actions } = this.props;
            //actions.SHORTCUT_TOGGLE_DISPATCH(false)
        BackHandler.addEventListener("hardwareBackPress",()=>{
            //actions.SHORTCUT_TOGGLE_DISPATCH(true) 
            Actions.pop()
            return true;
        })
    }
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{width,height,backgroundColor:colors.primary,position:"absolute",zIndex:25}} >
                <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                    <TextInput
                            placeholder="search people ... "
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={this.state.firstQuery} 
                            autoFocus={true} 
                            style={{backgroundColor: colors.primary,color:colors.accent,flex:1,width:(width/2)-25,height:15,fontSize:20,borderBottomColor:"#800000",borderBottomWidth:1,height:15,marginBottom:10,paddingBottom:0,fontFamily:"sans-serif-light"}}
                    />
                </View>
                <View style={{flex:10,flexDirection:"column"}} >
                    <Text>
                    </Text>
                </View>
            </View>
        )
    }
}

export default withTheme(HomeSearchAfterFocus);