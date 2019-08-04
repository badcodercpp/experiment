import React,{ Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import MenuList from './list'
import { withTheme } from 'react-native-paper';

class MenuScreen extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { colors } = this.props.theme;
        return (
            <View style={{flex:1,backgroundColor:colors.primary}} >
                <MenuList menuData={this.props.menuData} />
            </View>
        )
    }
}

export default withTheme(MenuScreen);