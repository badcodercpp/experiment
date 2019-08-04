import React, { Component } from 'react'
import { StyleSheet,
     View,
     Image, 
     TextInput, 
     Button,
     } from 'react-native';
import { Surface, Text } from 'react-native-paper';

export default class MenuList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
                <View style={{flex:1,flexDirection:"column"}} >
                <View style={{flex:2,flexDirection:"row"}} >
                </View>
                <View style={{flex:5,flexDirection:"row"}} >
                    <View style={{flex:1,flexDirection:"column"}} >
                        {
                            (this.props.menuData!==undefined)?(
                                this.props.menuData.map( (a,b)=>{
                                    return(
                                        <Surface key = {b} style={styles.surface} >
                                            <View >
                                                <Text>
                                                    {
                                                        a
                                                    }
                                                </Text>
                                            </View>
                                        </Surface>
                                    )
                                } )
                            ):false
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    surface: {
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
      marginBottom:10,
      width:100,
      height:25,
      marginLeft:50
    },
  });