import React, {Component} from 'react';
import {Platform, 
    StyleSheet, 
    Text, 
    View, 
    Image } from 'react-native';
import { withTheme } from 'react-native-paper';

class TimerInput extends Component {
    constructor(props){
        super(props);
    }
    state = {
        text:""
    }
    currentTimer = {
        timer:0
    }

    inputObservable = () => {
        
    }

    startCurrentTimer = () => {
        return setInterval(() => {
            this.currentTimer.timer++
        }, 1000);
    }
    clearCurrentTimer = (currentTimer) => {
        return clearInterval(currentTimer);
    }
    onInputFocus = e => {

    }

    onInputBlur = e => {

    }

    render(){
        const { colors } = this.props.theme;
        return(
            <TextInput
                style={{height: this.props.height, borderColor: colors.primary, borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder="please type message"
            />
        )
    }
}

export default withTheme(TimerInput);