import React,{ Component } from 'react';
import { View,
  Text,
  Image, 
  Dimensions, 
  StyleSheet,
  TouchableOpacity, 
  TextInput, 
  FlatList,
  AsyncStorage } from 'react-native';
  var {height, width} = Dimensions.get('window');
import TimepassScreenHead from "./chatSelectorHead"
import { scale, 
  verticalScale, 
  moderateScale } from 'react-native-size-matters';

import RF from "react-native-responsive-fontsize";
import { withTheme, Appbar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

class ChatSelector extends Component {
  state = {
    visiblePeople: this.props.visiblePeople.filter(e => e.image!="")
  }
  move_to_deep_chat = item => {
    
  }
  changeTextControl = text => {
    if (text=="") {
      this.setState({visiblePeople:this.props.visiblePeople.filter(e => e.image!="")})
    } else {
      let tempCont=Array.from(this.state.visiblePeople.filter(e => e.image))
      let f=tempCont.filter(elem=>{return elem.title.toUpperCase().includes(text.toUpperCase())})
      this.setState({visiblePeople:f})
    }
  }
    render(){
      const { colors } = this.props.theme;
        return (
                  <View style={{position:"absolute",width:scale(width),height:verticalScale(height),backgroundColor:"#ece5dd",marginLeft:0,justifyContent:"center",alignItems:"center"}}>
                  {
                    //
                      <TimepassScreenHead account_logo={this.state.account_logo} MutateParentState={this.mutateApplicationState}  />
                    //):false
                  }
                  <View style={{width:scale(width),height:verticalScale(40),backgroundColor:colors.primary}} >
                    <View style={{flex:1,flexDirection:"row"}} >
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <Appbar.Action icon="arrow-back" onPress={() => {
                          Actions.BAD_MAP()
                      }} />
                        </View>
                      <View style={{flex:5,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        <TextInput 
                        editable = {true}
                        multiline={false} 
                        style={{width:scale(width/1.5),height:verticalScale(40),borderBottomColor:colors.primary,borderBottomWidth:2,fontSize:RF(2.5),color:"white"}} 
                        placeholder="search contacts" 
                        placeholderTextColor="white" 
                        returnKeyLabel="search" 
                        underlineColorAndroid="transparent"
                        onChangeText={(text)=>{
                          //alert(JSON.stringify(this.state.myContacts))
                          if (text=="") {
                            this.setState({myContacts:this.props.visiblePeople})
                          } else {
                            let tempCont=Array.from(this.state.visiblePeople)
                            let f=tempCont.filter(elem=>{return elem.title.toUpperCase().includes(text.toUpperCase())})
                            this.setState({visiblePeople:f})
                          }
                        }}
                        />
                      </View>
                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                        {/*<Image source={this.state.setting_logo} style={{width:30,height:30,borderRadius:15}} />*/}
                      </View>
                      
                    </View>
                  </View>
                  
                    <View style={{flex:9,flexDirection:"row",paddingLeft:10,paddingRight:10}} >
                    
                        <FlatList keyExtractor={(item, index) => item.id}
                            data={this.state.visiblePeople}
                            renderItem={({item}) => 
                                {
                                  //let i=0;
                                  //alert(JSON.stringify(item))
                                  //var base64Icon = `data:image/png;base64,${item.image}`
                                  if(item.mobile!=""){
                                    //alert(JSON.stringify(item))
                                    return (
                                    <View style={{flex:1}}>
                                    
                                    <View  style={{flex:1,flexDirection:"row",backgroundColor:"#ece5dd",height:60,borderBottomColor:colors.primary,borderBottomWidth:2}}>
                                    
                                        <View style={{flex:1.2,flexDirection:"column",justifyContent:"center",alignItems:"flex-end"}}>
                                          <Image source={{uri:`data:image/png;base64,${item.image}`}} style={{width:50,height:50,borderRadius:25}} />
                                        </View>
                                        <View style={{flex:6,flexDirection:"column",justifyContent:"center",alignItems:"flex-start",paddingLeft:5}}>
                                          <TouchableOpacity onPress={this.move_to_deep_chat.bind(this,item)}>
                                            <Text >{
                                                item.title
                                              }</Text>
                                          </TouchableOpacity>
                                        </View>
                                    </View>
                                    </View>
                                  )
                                  }
                                }
                            }
                          />
                    </View>
                  </View>
        )
    }
}

export default withTheme(ChatSelector)