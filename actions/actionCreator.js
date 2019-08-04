import { DEMO_ACTION,
    DRAW_MAP,
    UPDATE_MARKER_IMAGE,
    UPDATE_USER_LOCATION,
    UPDATE_GUID,
    UPDATE_TOPIC,
    MQTT_MSG_DEMO,
    MENU_LIST_STATIC,
    NAVBAR_TOGGLE,
    MENU_TOGGLER,
    VISIBLE_PEOPLE, 
    SHORTCUT_TOGGLE, 
    MQTT_CONNECTED, 
    DUMMY_ACTION, 
    MQTT_TOPIC_SUBSCRIBE, 
    MQTT_MESSAGE_SEND, 
    REACTIONS } from './actionTypes';

import {fetchStatusHandler} from '../util/statusHandler/fetchStatusHandler'
import {RequestGPSPermission} from '../util/permission/androidPermission'
import {AddressVsLL} from '../util/api/getGeocoderTopic'
import {POST, GET} from '../util/api/postWrapper';


export const DEMO_ACTION_DISPATCH = payload => {
    return {
        type:DEMO_ACTION,
        payload
    }
}


// map draw action
export const DRAW_MAP_DISPATCH = (payload,latitude,longitude) => {
    return {
        type:DRAW_MAP,
        payload,
        latitude,
        longitude
    }
}

// get topic from api

export const GET_MAP_DATA_PROMISE = (callback)=>{
    return async dispatch => {
        let d=await RequestGPSPermission()
        if (d) {
          navigator.geolocation.getCurrentPosition(g_s=>{
            //alert(g_s.coords.latitude+"____"+g_s.coords.longitude)
            const latitude= g_s.coords.latitude;
            const longitude=g_s.coords.longitude;
            const radius=250;
            fetch(`http://reverse.geocoder.api.here.com/6.2/reversegeocode.json?app_id=FzgVP2F6058kiX5iG4J4&app_code=CbYsTWueDNTe9Vlq-O11NQ&mode=retrieveAll&prox=${latitude},${longitude},${radius}&jsonattributes=1&gen=9&maxresults=50`)
            .then(fetchStatusHandler)
            .then(res=>res.json())
            .then(data=>{
              const x={latitude,longitude}
              data.response.view[0].result.unshift(x)
              dispatch(DRAW_MAP_DISPATCH(data.response.view[0].result,latitude,longitude))
              callback(data.response.view[0].result,latitude,longitude)
            })
            .catch((responseObject) => {
              if (responseObject.errorCode !== 0) {
                alert('onGeocodeapi__:' + JSON.stringify(responseObject));
              }
            });
          },g_e=>{
            alert(JSON.stringify(g_e))
          },{timeout:1000,enableHighAccuracy:true})
        } else {
          alert("oops we need to access your gps")
        }
    };
}


export const UPDATE_USER_LOCATION_DISPATCH = payload => {
  return {
    type : UPDATE_USER_LOCATION,
    payload
  }
}

export const UPDATE_USER_LOCATION_PROMISE = (data_t,zip) => {
  return dispatch => {
    const url = "http://www.thelinkedface.com/zipvsid_anddata"
    const data_u = {
      Data : data_t,
      Zip: zip
    }
    POST(url,data_u,{
      "Content-Type": "application/json",
    })
    .then(fetchStatusHandler)
    .then(res=>res.json())
    .then(data=>{ 
      dispatch(UPDATE_USER_LOCATION_DISPATCH(data))
    })
    .catch((responseObject) => {
      if (responseObject.errorCode !== 0) {
        alert('err_api_post:' + JSON.stringify(responseObject));
      }
    });
  }
}

export const UPDATE_GUID_DISPATCH = guid => {
  return {
    type:UPDATE_GUID,
    guid
  }
}


export const UPDATE_TOPIC_DISPATCH = topic => {
  return {
    type:UPDATE_TOPIC,
    topic
  }
}

export const MQTT_MSG_DEMO_DISPATCH = message => {
  return {
    type: MQTT_MSG_DEMO,
    message
  }
}

export const MENU_LIST_STATIC_DISPATCH = menuData => {
  return {
    type: MENU_LIST_STATIC,
    menuData
  }
}

export const MENU_TOGGLER_DISPATCH = menuState => {
  return {
    type: MENU_TOGGLER,
    menuState
  }
}

export const NAVBAR_TOGGLE_DISPATCH = navBarVisible => {
  return {
    type: NAVBAR_TOGGLE,
    navBarVisible
  }
}

export const VISIBLE_PEOPLE_DISPATCH = visiblePeople => {
  return {
    type: VISIBLE_PEOPLE,
    visiblePeople
  }
}

export const VISIBLE_PEOPLE_PROMISE = value => {
  return dispatch => {
    const url = `http://www.thelinkedface.com/getAllSuggestion/${value}`
    GET(url,{
      "Content-Type": "application/json",
    })
    .then(fetchStatusHandler)
    .then(res=>res.json())
    .then(data=>{ 
      let ar=[];
      let ii=1;
      const nData = data.pop()
      for(let x of data){
        if (x.Dp) {
          let ab={coord:{latitude:(x.Latitude)+ii,longitude:(x.Longitude)+ii},title:x.Name.join(" "),id:x.Mobile,image:x.Dp,gender:x.Gender}
          ar.push(ab)
          ii=ii+1;
        }
      }
      dispatch(VISIBLE_PEOPLE_DISPATCH(ar))
    })
    .catch((responseObject) => {
      if (responseObject.errorCode !== 0) {
        alert('err_api_get_people:' + JSON.stringify(responseObject));
      }
    });
  }
}


export const SHORTCUT_TOGGLE_DISPATCH = shortcutVisible => {
  return {
    type: SHORTCUT_TOGGLE,
    shortcutVisible
  }
}

export const MQTT_CONNECTED_DISPATCH = isMqttConnected => {
  return {
    type: MQTT_CONNECTED,
    isMqttConnected
  }
}


export const MQTT_CONNECT_DISPATCH = (callback, actions) =>{
  return {
    type: DUMMY_ACTION,
    promise: (client, dispatch) => {
      //alert(JSON.stringify(actions))
      const p = new Promise((resolve, reject) => {
        let connectedStatus = false;
        try {
          client.connect({ onSuccess:callback.bind(null, actions), useSSL: true });
          connectedStatus=true
        } catch (error) {
          connectedStatus=false
        }
        dispatch(MQTT_CONNECTED_DISPATCH(connectedStatus))
        resolve(connectedStatus)
      });
      return p
    }
  };
}

export const MQTT_CONNECTION_LOST_DISPATCH = (callback, actions) =>{
  return {
    type: DUMMY_ACTION,
    promise: (client, dispatch) => {
      const p = new Promise((resolve, reject) => {
        let success = false;
        try {
          client.onConnectionLost = callback.bind(null, actions);
          success=true
        } catch (error) {
          success=false
        }
        resolve(connectedStatus)
      });
      return p
    }
  };
}


export const MQTT_MESSAGE_ARRIVED_DISPATCH = (callback, actions) =>{
  return {
    type: DUMMY_ACTION,
    promise: (client, dispatch) => {
      const p = new Promise((resolve, reject) => {
        let success = false;
        try {
          client.onMessageArrived = callback.bind(null, actions);
          success=true
        } catch (error) {
          success=false
        }
        resolve(connectedStatus)
      });
      return p
    }
  };
}

export const MQTT_TOPIC_SUBSCRIBE_D = mqttSubscribedTopic => {
  return {
    type: MQTT_TOPIC_SUBSCRIBE,
    mqttSubscribedTopic
  }
}

export const MQTT_TOPIC_SUBSCRIBE_DISPATCH = mqttSubscribedTopic => {
  return {
    type: DUMMY_ACTION,
    promise: (client, dispatch) => {
      const p = new Promise((resolve, reject) => {
        let success = false;
        try {
          for(let x in mqttSubscribedTopic){
            client.subscribe(mqttSubscribedTopic[x]);
          }
          success=true
          dispatch(MQTT_TOPIC_SUBSCRIBE_D(mqttSubscribedTopic))
        } catch (error) {
          success=false
        }
        resolve(connectedStatus)
      });
      return p
    }
  };
}

export const MQTT_MESSAGE_SEND_D = sendMqttMessage => {
  return {
    type: MQTT_MESSAGE_SEND,
    sendMqttMessage
  }
}

export const MQTT_MESSAGE_SEND_DISPATCH = sendMqttMessage => {
  return {
    type: DUMMY_ACTION,
    promise: (client, dispatch) => {
      const p = new Promise((resolve, reject) => {
        let success = false;
        try {
          client.send(sendMqttMessage);
          success=true
          dispatch(MQTT_MESSAGE_SEND_D(sendMqttMessage))
        } catch (error) {
          success=false
        }
        resolve(connectedStatus)
      });
      return p
    }
  };
}

export const REACTIONS_DISPATCH = (reactionName, payload) => {
  return {
    type: REACTIONS,
    reactions: payload,
    reactionName: reactionName
  }
}

export const GET_ALL_REACTIONS = urlList => {
  return dispatch => {
    urlList.forEach(url => {
      GET(url.url)
      .then(fetchStatusHandler)
      .then(res => res.json())
      .then(response => {
        dispatch(REACTIONS_DISPATCH(url.name, response))
      })
      .catch(err => {
        alert(err)
      })
    });
  }
}