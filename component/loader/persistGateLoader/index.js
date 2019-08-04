import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';

class PersistGateLoader extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { colors } = this.props.theme;
        return(
            <View style={{ color: colors.primary, flex:1, justifyContent:"center", alignItems:"center" }} >
                <Bubbles size={10} color="#FFF" />
            </View>
        )
    }
}

export default withTheme(PersistGateLoader);