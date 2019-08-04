
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions, 
  ScrollView, 
  Image, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  BackHandler, 
  FlatList, 
  KeyboardAvoidingView, 
  StatusBar, 
  TouchableHighlight, 
  Animated, 
  Easing, 
  Keyboard, 
  ImageBackground
} from 'react-native';
var WebRTC = require('react-native-webrtc');
var {
  RTCPeerConnection,
  RTCIceCandidate,
  RTCSessionDescription,
  RTCView,
  MediaStream,
  MediaStreamTrack,
  getUserMedia,
} = WebRTC;

//import Video from 'react-native-af-video-player'
//import io from 'socket.io-client/';
//const socket = io.connect('https://pratibha-rtc.herokuapp.com/', {transports: ['websocket'], pingTimeout: 30000 });
//let socket=global.MainPortSocket;
//const socket = io.connect('https://pratibha-rtc.herokuapp.com/', {transports: ['websocket'], pingTimeout: 30000 });


import InCallManager from 'react-native-incall-manager';
import Draggable from 'react-native-draggable';
import EventEmitter from "react-native-eventemitter";
const {height, width} = Dimensions.get('window');
String.prototype.capitalize = function() {
  return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
export default class RV extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        videoURL: null,
        canOpenPlayer:false,
        info: 'Initializing',
        status: 'init',
        roomID: '19993',
        isFront: true,
        selfViewSrc: null,
        remoteList: {},
        textRoomConnected: false,
        textRoomData: [],
        textRoomValue: '',
        calling:true,
        isAnswerable:this.props.isAnswerable,
        isAnswerComplete:false,
        greenImage:require('./img/call.png'),
        nameOfUser:"ajay",
        roomNo:this.props.roomNo
      }
      this.componentWillMount=this.componentWillMount.bind(this);
      this.componentDidMount=this.componentDidMount.bind(this);
    }
    clearIntervalD=(interval)=>{
        clearInterval(interval);
    }
    componentWillMount(){
      let that=this;
      //socket=this.props.socket;
      if (InCallManager.recordPermission !== 'granted') {
        InCallManager.requestRecordPermission()
        .then((requestedRecordPermissionResult) => {
            console.log("InCallManager.requestRecordPermission() requestedRecordPermissionResult: ", requestedRecordPermissionResult);
        })
        .catch((err) => {
            console.log("InCallManager.requestRecordPermission() catch: ", err);
        });
      }
      if (InCallManager.cameraPermission !== 'granted') {
        InCallManager.requestCameraPermission()
        .then((requestedCameraPermissionResult) => {
            console.log("InCallManager.requestRecordPermission() requestedRecordPermissionResult: ", requestedRecordPermissionResult);
        })
        .catch((err) => {
            console.log("InCallManager.requestRecordPermission() catch: ", err);
        });
      }
    }
    mutateMyState=(data)=>{
      this.props.mutateMyState(data)
    }
    componentWillUnmount(){
      
     EventEmitter.removeListener("answerCall",()=>{

     })
    }
    componentDidMount() {
      
    }
    dragAnswerRejact=()=>{
      if(this.state.isAnswerComplete){
        this.clearIntervalD(this._timerVideo);
        this.mutateMyState({isAnswerable:false,roomNo:0,debugFlagTrue:false})
        InCallManager.stopRingtone();
        //alert("cancel call")
      }else{
        //alert("reject call")
        this.mutateMyState({isAnswerable:false,roomNo:0,debugFlagTrue:false})
        InCallManager.stopRingtone();
      }
    }
    getStringElapsed=(elapsed)=>{
      let str="";
      let hr;
      let min;
      let sec;
      if(elapsed>3600){
        let temph=elapsed%3600;
        let hhr=Math.floor(elapsed/3600);
        hr=hhr;
        let tempm=temph%60
        let mmin=Math.floor(temph/60);
        min=mmin;
        sec=tempm;
        return `${hr} h :${min} m : ${sec} s`;
      }else if(elapsed>60 && elapsed<=3600){
        let tmin=elapsed%60
        let m=Math.floor(elapsed/60);
        min=m;
        sec=tmin;
        return `${min} m : ${sec} s`;
      }else{
        sec=elapsed;
        return `${sec} s`;
      }
    }
    dragAnswer=()=>{
      
    }
    render(){
      return (
        <View>
                {
                  (this.state.calling)?(
                    <RTCView zOrder={1} objectFit={'cover'} streamURL={this.state.selfViewSrc} style={{backgroundColor:'transparent',flex:1,width:width,height:height}} />
                  ):(
                    <RTCView zOrder={1} objectFit={'cover'} streamURL={remoteStream} style={{backgroundColor:'transparent',flex:1,width:width,height:height}} />
                  )
                }
                <View style={{position:"absolute",width:100,height:100,backgroundColor:"transparent",top:0,right:0,marginTop:0,borderRadius:50,justifyContent:"center",alignItems:"center"}}>
                
                  {
                    (this.state.calling)?(
                      <RTCView zOrder={2}  objectFit={'cover'} streamURL={remoteStream} style={styles.remoteView}/>
                    ):(
                      <RTCView zOrder={2}  objectFit={'cover'} streamURL={this.state.selfViewSrc} style={styles.remoteView}/>
                    )
                  }
                
                </View >
                {
                  (!this.state.isAnswerComplete)?(
                    <View style={{position:"absolute",width:width,height:300,backgroundColor:"transparent",top:0,justifyContent:"center",alignItems:"center"}}>
                      <View style={{flex:1,flexDirection:"column"}}>
                        <View style={{flex:1,flexDirection:"row"}}>
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                          <Image source={require('./img/muted.png')} style={{width:80,height:80,borderRadius:40}} />
                        </View>
                        <View style={{flex:1,flexDirection:"column",justifyContent:"flex-start",alignItems:"center",paddingTop:5}}>
                          <Text style={{color:"white",fontSize:25,fontFamily:"sans-serif-light"}} >
                            {this.state.nameOfUser.capitalize()}
                          </Text>
                          <Text style={{color:"white",fontSize:25,fontFamily:"sans-serif-light"}} >
                            Ringing
                          </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                        </View>
                      </View>
                    </View>
                  ):false
                }
                <View style={{position:"absolute",width:width,height:300,backgroundColor:"transparent",bottom:0,justifyContent:"center",alignItems:"center"}}>
                
                  <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1,flexDirection:"row"}}>
                    <View style={{flex:1,flexDirection:"column"}}>
                      
                      {
                        (!this.state.isAnswerComplete)?(
                          
                          <Draggable renderShape='image' imageSource={require('./img/call.png')} renderSize={50} offsetY={-70} offsetX={-100} pressDragRelease={this.dragAnswer}  />
                        ):(
                          <Draggable renderShape='image' imageSource={require('./img/muted.png')} renderSize={50} offsetY={-70} offsetX={-100} pressDragRelease={this.dragAnswer}  />
                        )
                      }
                      
                      
                      
                     
                    </View>
                    <View style={{flex:1,flexDirection:"column"}}>
                    
                      
                    {/*<Draggable renderSize={30} renderColor='red' offsetX={width/2-90} offsetY={-100} renderText='R' pressDragRelease={()=>alert("Cancel call")} ref={(elem)=>{this.elem=elem}} /> */}
                    <Draggable renderShape='image' imageSource={require('./img/reject.png')} renderSize={50} offsetY={-70} offsetX={100} pressDragRelease={this.dragAnswerRejact}  />
                    {
                      (this.state.isAnswerComplete)?(
                        <Draggable renderSize={40} offsetX={-width/2+120} renderText={this.getStringElapsed(this.state.elapsed)} renderColor='transparent' offsetY={-100} renderShape={"square"}   />
                      ):false
                    }
                    </View>
                    </View>
                    <View style={{flex:1,flexDirection:"row"}}>
                    
                    </View>
                    <View style={{flex:1,flexDirection:"row"}}>
                    
                    </View>
                  </View>
                </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    remoteView: {
        width: 100,
        height: 100,
        borderRadius:50
    },
});