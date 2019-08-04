import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { Client, Message } from 'react-native-paho-mqtt';
import {UUID} from '../../util/guid'

export default class InputOverMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
            message:[]
        }
    }
    onPressSend = e=>{
        //alert(this.state.text)

        const ud=UUID();
        global.client.connect().then(()=>{
            this.props.topic.map( (a,b)=>{
                const wrp = {
                    id:ud,
                    value:this.state.text
                  }
                  const message = new Message(JSON.stringify(wrp));
                message.destinationName = a;
                global.client.send(message)
            } )
        });
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.message!==undefined) {
          let a=[];
          let ll=nextProps.message;
          for(let m in ll){
            a.push(ll[m])
          }
          return {
            message: a
          }
        }
        return {
          message:prevState.message
        }
      }
    render(){
        return (
            <View style={{backgroundColor:"white",top:0}} >
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="please type message"
            />
            <Button
              onPress={this.onPressSend}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            {
                this.state.message.map( (a,b)=>{
                    return (
                        <View key={b} >
                            <Text>
                                {a.value}
                            </Text>
                        </View>
                    )
                } )
            }
            <Text>
                
            </Text>
            </View>
        )
    }
}