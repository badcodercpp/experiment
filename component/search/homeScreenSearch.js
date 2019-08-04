import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Button, Dimensions, TextInput} from 'react-native';
import { Appbar, Searchbar, withTheme } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

class HomeSearch extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{flex:1,flexDirection:"column",backgroundColor:colors.primary}} >
                <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                    <TextInput
                            placeholder="search people ... "
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={this.state.firstQuery}
                            style={{backgroundColor: colors.primary,color:colors.accent,flex:1,width:(width/2)-25,height:15,fontSize:20,borderBottomColor:"#800000",borderBottomWidth:1,height:15,marginBottom:10,paddingBottom:0,fontFamily:"sans-serif-light"}}
                    />
                </View>
                <View style={{flex:10,flexDirection:"column"}} >
                </View>
            </View>
        )
    }
}

export default withTheme(HomeSearch);