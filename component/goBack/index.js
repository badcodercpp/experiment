import React, { Component } from 'react'
import { StyleSheet,
    Text, 
    View, 
    Image, 
    Button, 
    Dimensions, 
    TextInput } from 'react-native';
import { Appbar, 
    Searchbar, 
    withTheme } from 'react-native-paper';
import { Router, 
    Scene, 
    Modal, 
    Lightbox, 
    Actions } from 'react-native-router-flux';

class GoBackScreen extends Component {
    render(){
        const { nextRoute } = this.props;
        return (
            <Appbar style={styles.top} >
                <View style={{flex:1,flexDirection:"row",zIndex:1}} >
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}} >
                        <Appbar.Action icon="arrow-back" onPress={() => {
                            //nextRoute.make();
                            //alert(JSON.stringify(nextRoute))
                            nextRoute.make(nextRoute.Actions, nextRoute.name)
                        }} />
                    </View>
                    <View style={{flex:4,flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}} >
                        
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                    </View>
                    <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
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
      top: 35,
      zIndex:1
    },
  });

export default withTheme(GoBackScreen);