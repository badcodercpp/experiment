import React,{ Component } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage} from 'react-native';
import {UUID} from '../util/guid'
import { _retrieveData, _storeData } from '../util/storage/asyncStorage'
import { Client, Message } from 'react-native-paho-mqtt';
import { Router, Scene, Actions, Modal } from 'react-native-router-flux';
import { MQTT_CONNECT_SUCCESS_CALLBACK, 
  MQTT_CONNECTION_LOST_CALLBACK,
  MQTT_MESSAGE_ARRIVED_CALLBACK } from '../util/mqtt'



replaceAll = (str, search, replacement) => {
  return str.split(search).join(replacement);
};


let G_ID;
const cl_mq_id=UUID();

(async ()=>{
  let retData=await _retrieveData("guid")
  if (retData===undefined || retData===null) {
    G_ID=cl_mq_id
    let x= await _storeData("guid",G_ID)
  }else{
    G_ID=retData;
  }
})()

// if (Array.prototype.map === undefined) {
//   Array.prototype.map = function(fn) {
//     var rv = [];
    
//     for(var i=0, l=this.length; i<l; i++)
//       rv.push(fn(this[i]));

//     return rv;
//   };
// }
const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: (key) => myStorage[key],
  removeItem: (key) => {
    delete myStorage[key];
  },
 };
 


//const client = new Client({ uri: 'ws://iot.eclipse.org:80/ws', clientId: cl_mq_id, storage: myStorage });
//global.client=client;



export default class MapViewMarker extends Component {
    constructor(props){
        super(props);
        this.state = {
            message_list:this.props.message_list,
            markerImage:require('./image/Map-Marker-Marker-Outside-Pink-icon.png'),
            payload:this.props.payload?this.props.payload:[]
        }
        this._marker=[];
        let { actions } = this.props ;
        actions.UPDATE_GUID_DISPATCH(G_ID)
    }
    static getDerivedStateFromProps(nextProps, prevState){
      //alert(JSON.stringify(nextProps.topic))
      
      if (nextProps.topic!==undefined) {
        // const options = {
        //   mqttVersion: 4,
        //   cleanSession: true,
        //   keepAliveInterval: 15,
        //   timeout: 15000
        // };
        // client.connect(options)
        // .then(()=>{
        //   nextProps.topic.map( (a,b)=>{
        //       client.subscribe(a).then(()=>{
                
        //       }).catch(err=>{
        //         //alert(JSON.stringify(err))
        //       })
        //   })

          
        // })
        // .catch(e=>{
        //   //alert("efefe"+JSON.stringify(e))
        // })
        
        //alert(JSON.stringify(nextProps.topic))
        // nextProps.topic.map( (a,b)=>{
        //   client.subscribe(a).then(()=>{

        //   }).catch(err=>{
        //     alert(JSON.stringify(err))
        //   })
        // } )
      }
      if (nextProps.payload!==undefined) {
        let a=[];
        // for(let m in nextProps.payload){
        //   if (nextProps.payload[m].location!==undefined && nextProps.payload[m].latitude!==undefined && nextProps.payload[m].longitude !==undefined) {
        //     //a.push(nextProps.payload[m])
        //   }
        // }
        let ll=nextProps.payload;
        for(let m in ll){
          a.push(ll[m])
        }
        return {
          payload: a
        }
      }

      

      return {
        payload:prevState.payload
      }
    }
    getSnapshotBeforeUpdate(snapshot){
      //alert("jhjhfhjhjhjh"+JSON.stringify(snapshot.markerImage))
      return {
        markerImage:snapshot.markerImage
      }
    }
    componentDidUpdate(nextProps,nextState){
      // if (this.props.payload !== undefined) {
      //   if (this.props.payload.map === undefined) {
      //     this.props.payload.map = Array.prototype.map
      //   }
      // }
    }
    thunkHelper = (payload,latitude,longitude) => {
      let { actions } = this.props ;
      const z=payload[1].location.address.postalCode
      //alert(JSON.stringify(payload[1].location.address))
      const p=payload.slice(1,payload.length)
      const topic = [];
      // .replaceAll(',','___CMA___').replaceAll(' ','___PSP___').replaceAll('/','___SLS___').replaceAll('\\','___SLSF___')
      for(const m of p){
        let bg=`${m.location.address.label}___${m.location.address.country}___${m.location.address.state}___${m.location.address.county}___${m.location.address.city}___${m.location.address.district}___${m.location.address.postalCode}`
        let bg2 = `${m.location.address.country}___${m.location.address.state}___${m.location.address.county}___${m.location.address.city}___${m.location.address.district}___${m.location.address.postalCode}`
        let bg3 = `${m.location.address.state}___${m.location.address.county}___${m.location.address.city}___${m.location.address.district}___${m.location.address.postalCode}`
        let bg4 = `${m.location.address.county}___${m.location.address.city}___${m.location.address.district}___${m.location.address.postalCode}`
        let bg5 = `${m.location.address.city}___${m.location.address.district}___${m.location.address.postalCode}`
        let bg6 = `${m.location.address.district}___${m.location.address.postalCode}`
        let bg7 = `${m.location.address.postalCode}`
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg2,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg3,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg4,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg5,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg6,',','___'),' ','___'),'/','___'),'\\','___'))
        topic.push(replaceAll(replaceAll(replaceAll(replaceAll(bg7,',','___'),' ','___'),'/','___'),'\\','___'))
      }
      let d = {
        Id:this.props.guid,
        Name:"Demo Name",
        Gender:"Male",
        Interest:"Female",
        Topic:topic
      }
      //alert("pp"+JSON.stringify(Array.from(this.props.payload)))
      //actions.UPDATE_TOPIC_DISPATCH(topic)
      actions.UPDATE_USER_LOCATION_PROMISE(d,z)
      //actions.UPDATE_USER_LOCATION_PROMISE(payload,"hardcode")
    }
    componentDidMount(){
      
        let { actions } = this.props ;
        //alert(JSON.stringify(actions))
        actions.MQTT_CONNECTION_LOST_DISPATCH(MQTT_CONNECTION_LOST_CALLBACK,actions)
        actions.MQTT_MESSAGE_ARRIVED_DISPATCH(MQTT_MESSAGE_ARRIVED_CALLBACK,actions)
        actions.MQTT_CONNECT_DISPATCH(MQTT_CONNECT_SUCCESS_CALLBACK,actions)
        //actions.UPDATE_MARKER_IMAGE_DISPATCH(require('./image/Map-Marker-Marker-Outside-Pink-icon.png'))
        //alert("hehhe"+this.props.markerImage)
        //actions.GET_MAP_DATA_PROMISE(this.thunkHelper)
        //alert(client)
        // client.on('connectionLost', (responseObject) => {
        //   if (responseObject.errorCode !== 0) {
        //     alert("error in rcv"+JSON.stringify(responseObject));
        //   }
        //  });
        //client.on('messageReceived', (message) => {
          //alert("mqtt success"+JSON.stringify(message.payloadString));
          //alert(message.payloadString)
          // let p=this.props.message?this.props.message:[];
          // let o= JSON.parse(message.payloadString)
          // let ok= false;
          // for(let m in p){
          //   if (p[m].id===o.id) {
          //     ok=true;
          //     break
          //   }
          // }
          // if (!ok) {
          //   p.push(o)
          //   actions.MQTT_MSG_DEMO_DISPATCH(p)
          // }
          
        // });
        
        //client.onConnectionLost = this.onConnectionLost;
        //client.onMessageArrived = this.onMessageArrived;
        //client.connect({ onSuccess:this.onConnect, useSSL: true });
        
        //setTimeout(()=>{
          //const ud=UUID();
          //this.props.topic.map( (a,b)=>{
            // const wrp = {
            //   id:ud,
            //   value:"welcome guy"
            // }
            // const message = new Message(JSON.stringify(wrp));
            // message.destinationName = a;
            // client.send(message);
          //} )
          //Actions.BAD_MNU()
        //},8000)
    }
    // _map_touched(){
    //   alert("touched")
    // }
    render(){
        return (
            <MapView
            style={styles.map}
            region={{
              latitude: parseFloat(this.props.latitude!==undefined?this.props.latitude:0.00),
              longitude: parseFloat(this.props.longitude!==undefined?this.props.longitude:0.00),
              latitudeDelta: 0.002,
              longitudeDelta: 0.0005,
            }} 
            onPress={this._map_touched}
            onRegionChangeComplete={() => {
              
            }
              
            }
            onMapReady={()=>{
            }}
            showsTraffic={true}
          >
            {/**
            * <Marker 
            image={this.state.markerImage} 
            coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}} 
            title={this.state.title} flat={true} />
            */}
            {
              (this.state.payload===undefined)?(false):this.state.payload.map( (a,b)=>{
                if (a.latitude!==undefined) {
                  //alert("hi"+JSON.stringify(this.props.markerImage))
                  return (
                  <MapView.Marker 
                  coordinate={{latitude:a.latitude,longitude:a.longitude}}
                  
                  onCalloutPress={this.markerClick} 
                  key={b}
                  ref={(_marker) => {this._marker[`${b}`] = _marker}} 
                  onPress={(e)=>{
                    //alert(this._marker[`${b}`])
                    this._marker[`${b}`].showCallout();
                  }} 
                  >
                  <Image source={this.state.markerImage} style={{width:60,height:60}} />
                  <MapView.Callout tooltip style={{width:200,height:100,backgroundColor:"#ece5dd",borderRadius:10}} >
                      {
                        (this.state.title!="")?(
                          <View style={{width:200,height:100,justifyContent:"center",alignItems:"center",borderRadius:10}} >
                              <View style={{flex:1,flexDirection:"row"}} >
                                <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                  <Image source={{uri:`data:image/png;base64,${this.state.touchedImage }`}} style={{width:60,height:60,borderRadius:30}} />
                                </View>
                                <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                <Text>hello</Text>
                                </View>
                              </View>
                          </View>
                        ):(
                          <View style={{width:200,height:100,justifyContent:"center",alignItems:"center"}} >
                              <Text>Touch people listed below to make request</Text>
                          </View>
                        )
                      }
                  </MapView.Callout>
                </MapView.Marker>
                )
                } else {
                  //alert(JSON.stringify(a))
                  return (
                  <MapView.Marker 
                  coordinate={{latitude:a.location.displayPosition.latitude,longitude:a.location.displayPosition.longitude}}
                  
                  onCalloutPress={this.markerClick} 
                  key={b}
                  
                  ref={(_marker) => {this._marker[`${b}`] = _marker}} 
                  onPress={(e)=>{
                    //alert(this._marker[`${b}`])
                    this._marker[`${b}`].showCallout();
                  }} 
                  >
                  <MapView.Callout tooltip style={{width:200,height:100,backgroundColor:"#ece5dd",borderRadius:10}} >
                      {
                        (this.state.title!="")?(
                          <View style={{width:200,height:100,justifyContent:"center",alignItems:"center",borderRadius:10}} >
                              <View style={{flex:1,flexDirection:"row"}} >
                                <View style={{flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                  <Image source={{uri:`data:image/png;base64,${this.state.touchedImage }`}} style={{width:60,height:60,borderRadius:30}} />
                                </View>
                                <View style={{flex:2,flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                                <Text>hello</Text>
                                </View>
                              </View>
                          </View>
                        ):(
                          <View style={{width:200,height:100,justifyContent:"center",alignItems:"center"}} >
                              <Text>Touch people listed below to make request</Text>
                          </View>
                        )
                      }
                  </MapView.Callout>
                </MapView.Marker>
                )
                }
              } ) 
            }
            {
              (this.state.drawDirection)?(
                <MapView.Polyline
                    coordinates={[
                        {latitude: this.state.melat, longitude: this.state.melong}, // optional
                        ...this.state.coordsDir,
                        {latitude: this.state.latitude, longitude: this.state.longitude}, // optional
                    ]}
                    strokeWidth={4}
                    strokeColor="#1a66ff"
                />
              ):false
            }
            <MapView.Circle 
              center = { {latitude:this.props.latitude==undefined?0.00:this.props.latitude,longitude:this.props.longitude==undefined?0.00:this.props.longitude} }
              radius = { 250 }
              strokeWidth = { 1 }
              strokeColor = { '#1a66ff' }
              fillColor = { 'rgba(230,238,255,0.5)' }
            />
            
        </MapView>
        
        )
    }
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });