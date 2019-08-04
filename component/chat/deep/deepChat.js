import React,{ Component } from 'react';
import { View,
  Text,
  Image, 
  Dimensions, 
  StyleSheet,
  TouchableOpacity, 
  TextInput, 
  FlatList,
  KeyboardAvoidingView,
  AsyncStorage } from 'react-native';

import TimepassScreenHead from "./chatSelectorHead"
import { scale, 
  verticalScale, 
  moderateScale } from 'react-native-size-matters';

import RF from "react-native-responsive-fontsize";
import { withTheme, Appbar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
//LeftIncludeMessage


var {height, width} = Dimensions.get('window');

class DeepChatHead extends Component {
    render(){
        const { colors } = this.props.theme;
        return (
                <View style={{position:"absolute",width:width,height:height,backgroundColor:"#ece5dd",marginLeft:0}} ref={(elem)=>{
  
                  }}>
                
                  <View style={{flex:1}}>
                  <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled keyboardVerticalOffset={25}>
                  {
                    (!this.state._message_long_pressed_g)?(
                        <NotMessageLongPressed />
                    ):false
                  }
                  {
                    (this.state._message_long_pressed_g)?(
                        <MessageLongPressed />
                    ):false
                  }
                  
                  <View style={{flex:7,flexDirection:"row",marginTop:this.state.persistentMarginTop}} >
                    <InvertibleScrollView inverted >
                      
                        
                        {
                          this.state.mappableMessage.map( (a,b)=>{
                            //alert((a.to.toString()==globalMainMobInRender.toString() && a.from.toString()==this.state.mainChatOpponentNumber.toString() || a.from.toString()==globalMainMobInRender.toString() && a.to.toString()==this.state.mainChatOpponentNumber.toString()))

                            if (a.to.toString()==globalMainMobInRender.toString() && a.from.toString()==this.state.mainChatOpponentNumber.toString() || a.from.toString()==globalMainMobInRender.toString() && a.to.toString()==this.state.mainChatOpponentNumber.toString()) {
                              if (!a.isReactions) {
                              if(a.from.toString()==globalMainMobInRender.toString()){
                                return (
                                <View key={b} style={{alignSelf:"flex-start"}} >
                                  <TouchableOpacity onPress={()=>{
                                    //alert(JSON.stringify(a))
                                      //if(a.showMore){
                                        //a.showMore=!a.showMore;
                                        let ar=[];
                                        for(let x of this.state.mappableMessage){
                                          if (x.messageId==a.messageId) {
                                            x.showMore=!x.showMore
                                          }
                                          ar.push(x);

                                        }
                                        this.setState({mappableMessage:ar})
                                        //this.setState
                                      //}
                                    }} onLongPress={()=>{
                                      let arb=[];
                                      arb.push(a);
                                      this.setState({_message_long_pressed_g:true,_g_message_included:arb})
                                    }} >
                                  <View style={{maxWidth:3*width/4,marginLeft:15,marginTop:5}} 
                                  onPress={this._pressing_message_for_datetime} >
                                    <View >
                                      <View style={{backgroundColor:"#dcf8c6",alignSelf:"flex-start",borderColor:"grey",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRadius:30}}>
                                          <Text style={{paddingLeft:30,paddingBottom:5,paddingTop:0,paddingRight:30,textAlign:"center",fontFamily:"sans-serif-light",fontSize:15,color:"black"}}>
                                          {a.message}
                                          </Text>
                                        </View>
                                      </View>
                                      
                                  </View>
                                  </TouchableOpacity>
                                  {
                                    (a.showMore)?(
                                      <View style={{flex:1,flexDirection:"row",maxWidth:3*width/4}} >
                                  
                                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                        <Image source={require('./image/right_tick_tr.png')} style={{width:15,height:15,borderRadius:7.5}} />
                                      </View>
                                      <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
                                        <Text style={{textAlign:"center",fontFamily:"sans-serif-light",fontSize:12,color:"black"}} numberOfLines={1} >{timeConverterOf(parseInt(a.wh))}
                                        </Text>
                                      </View>
                                  </View>
                                    ):false
                                  }
                                  {
                                    (this.state.anyChatPressed)?(
                                      <View style={{justifyContent:"center",alignItems:"center"}}> 
                                        <Text style={styles.item}>
                                         
                                        </Text>
                                      </View>
                                    ):false
                                  }
                                </View>
                              )
                              }else{
                                return (
                                <View key={b} style={{alignSelf:"flex-end"}} >
                                <TouchableOpacity onPress={()=>{
                                    //alert(JSON.stringify(a))
                                      //if(a.showMore){
                                        //a.showMore=!a.showMore;
                                        let ar=[];
                                        for(let x of this.state.mappableMessage){
                                          if (x.messageId==a.messageId) {
                                            x.showMore=!x.showMore
                                          }
                                          ar.push(x);

                                        }
                                        this.setState({mappableMessage:ar})
                                        //this.setState
                                      //}
                                    }} onLongPress={()=>{
                                      let arb=[];
                                      arb.push(a);
                                      this.setState({_message_long_pressed_g:true,_g_message_included:arb})
                                    }} >
                                  <View style={{maxWidth:3*width/4,marginTop:5,right:0}} 
                                  onPress={this._pressing_message_for_datetime} >
                                    <View >
                                      <View style={{backgroundColor:"#dcf8c6",alignSelf:"flex-end",borderColor:"grey",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRadius:30}}>
                                          <Text style={{paddingLeft:30,paddingBottom:5,paddingTop:0,paddingRight:30,textAlign:"center",fontFamily:"sans-serif-light",fontSize:15,color:"black"}}>
                                          {a.message}
                                          </Text>
                                        </View>
                                      </View>
                                      
                                  </View>
                                  </TouchableOpacity>
                                  {
                                    (a.showMore)?(
                                      <View style={{flex:1,flexDirection:"row",maxWidth:3*width/4}} >
                                  
                                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                        <Image source={require('./image/right_tick_tr.png')} style={{width:15,height:15,borderRadius:7.5}} />
                                      </View>
                                      <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
                                        <Text numberOfLines={1} style={{textAlign:"center",fontFamily:"sans-serif-light",fontSize:12,color:"black"}}>{timeConverterOf(parseInt(a.wh))}
                                        </Text>
                                      </View>
                                  </View>
                                    ):false
                                  }
                                {
                                    (this.state.anyChatPressed)?(
                                      <View style={{justifyContent:"center",alignItems:"center"}}>
                                        <Text style={styles.item}>
                                          
                                        </Text>
                                      </View>
                                    ):false
                                  }
                                </View>
                              )
                              }
                            }else{
                              if(a.from.toString()==globalMainMobInRender.toString()){
                                return (
                                <View key={b}   >
                                <TouchableOpacity onPress={()=>{
                                    //alert(JSON.stringify(a))
                                      //if(a.showMore){
                                        //a.showMore=!a.showMore;
                                        let ar=[];
                                        for(let x of this.state.mappableMessage){
                                          if (x.messageId==a.messageId) {
                                            x.showMore=!x.showMore
                                          }
                                          ar.push(x);

                                        }
                                        this.setState({mappableMessage:ar})
                                        //this.setState
                                      //}
                                    }} onLongPress={()=>{
                                      let arb=[];
                                      arb.push(a);
                                      this.setState({_message_long_pressed_g:true,_g_message_included:arb})
                                    }} >
                                  <View style={{maxWidth:3*width/4,marginLeft:15,marginTop:5}} 
                                  onPress={this._pressing_message_for_datetime} >
                                    <View >
                                      <View style={{flex:1,backgroundColor:"#dcf8c6",alignSelf:"flex-start",borderColor:"grey",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRadius:30}}>
                                      <Image 
                                      source={{uri: a.message}} 
                                      style={{width:140,height:140,alignSelf:"stretch",flex:1,position:"relative",paddingTop:40,borderRadius:30}}
                                      />
                                        </View>
                                      </View>
                                      
                                  </View>
                                  </TouchableOpacity>
                                  {
                                    (a.showMore)?(
                                      <View style={{flex:1,flexDirection:"row",maxWidth:3*width/4}} >
                                  
                                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                        <Image source={require('./image/right_tick_tr.png')} style={{width:15,height:15,borderRadius:7.5}} />
                                      </View>
                                      <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
                                        <Text numberOfLines={1} style={{textAlign:"center",fontFamily:"sans-serif-light",fontSize:12,color:"black"}}>{timeConverterOf(parseInt(a.wh))}
                                        </Text>
                                      </View>
                                  </View>
                                    ):false
                                  }
                                {
                                    (this.state.anyChatPressed)?(
                                      <View style={{justifyContent:"center",alignItems:"center"}}>
                                        <Text style={styles.item}>
                                          
                                        </Text>
                                      </View>
                                    ):false
                                  }
                                </View>
                              )
                              }else{
                                return (
                                <View key={b}  >
                                <TouchableOpacity onPress={()=>{
                                    //alert(JSON.stringify(a))
                                      //if(a.showMore){
                                        //a.showMore=!a.showMore;
                                        let ar=[];
                                        for(let x of this.state.mappableMessage){
                                          if (x.messageId==a.messageId) {
                                            x.showMore=!x.showMore
                                          }
                                          ar.push(x);

                                        }
                                        this.setState({mappableMessage:ar})
                                        //this.setState
                                      //}
                                    }} onLongPress={()=>{
                                      let arb=[];
                                      arb.push(a);
                                      this.setState({_message_long_pressed_g:true,_g_message_included:arb})
                                    }} >
                                  <View style={{maxWidth:3*width/4,marginLeft:15,marginTop:5}} 
                                  onPress={this._pressing_message_for_datetime} >
                                    <View >
                                      <View style={{alignSelf:"flex-end",backgroundColor:"#dcf8c6",borderColor:"grey",borderLeftWidth:1,borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderRadius:30}}>
                                      <Image 
                                      source={{uri: a.message}} 
                                      style={{width:140,height:140,flex:1,position:"relative",paddingTop:40,borderRadius:30}}
                                      />
                                        </View>
                                      </View>
                                      
                                  </View>
                                  </TouchableOpacity>
                                  {
                                    (a.showMore)?(
                                      <View style={{backgroundColor:"red",flex:1,flexDirection:"row",maxWidth:3*width/4}} >
                                  
                                      <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                        <Image source={require('./image/right_tick_tr.png')} style={{width:15,height:15,borderRadius:7.5}} />
                                      </View>
                                      <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}>
                                        <Text numberOfLines={1} style={{textAlign:"center",fontFamily:"sans-serif-light",fontSize:12,color:"black"}}>{timeConverterOf(parseInt(a.wh))}
                                        </Text>
                                      </View>
                                  </View>
                                    ):false
                                  }
                                {
                                    (this.state.anyChatPressed)?(
                                      <View style={{justifyContent:"center",alignItems:"center"}}>
                                        <Text style={styles.item}>
                                          
                                        </Text>
                                      </View>
                                    ):false
                                  }
                                </View>
                              )
                              }
                            }
                            }
                          } )
                        }
                      
                    </InvertibleScrollView>
                  </View>
                  {
                    (this.state._left_include_message_touched)?(
                      <LeftIncludeMessage />
                    ):false
                  }


                  {
                    (!this.state._left_include_message_touched)?(
                      <NotLeftIncludeMessage />
                    ):false
                  }
                  
                  
                  </KeyboardAvoidingView>
                  {
                    (this.state.picEmoji)?(
                      <PicEmoji />
                    ):false
                  }
  
                  {
                    (this.state.picReactions)?(
                      <PicReactions />
                    ):false
                  }
  
                  </View>
                  
                </View>
        )
    }
}

export default withTheme(DeepChatHead)