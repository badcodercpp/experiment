export const MQTT_CONNECT_SUCCESS_CALLBACK = (actions) =>{
    //alert("hihi"+JSON.stringify(actions))
}

export const MQTT_CONNECTION_LOST_CALLBACK = (responseObject, actions) => {
    if (responseObject.errorCode !== 0) {
        alert("onConnectionLost:"+JSON.stringify(responseObject));
    }
}

export const MQTT_MESSAGE_ARRIVED_CALLBACK = (message, actions) => {
    alert("onMessageArrived:"+message.payloadString);
}