export const demoReducer = (state=[],action) => {
    switch (action.type) {
        case "DEMO_ACTION":
            return {
                ...state,
                payload:action.payload
            }
        case "DRAW_MAP":
            //alert("callink=g")
            return {
                ...state,
                payload:action.payload,
                latitude:action.latitude,
                longitude:action.longitude,
                markerImage:action.markerImage,
            }
        case "UPDATE_MARKER_IMAGE":
            return {
                ...state,
                markerImage:action.markerImage,
            }
        case "UPDATE_USER_LOCATION" :
            return {
                ...state,
                updated:true
            }
        case "UPDATE_GUID" :
            return {
                ...state,
                guid:action.guid
            }
        case "UPDATE_TOPIC" :
            return {
                ...state,
                topic:action.topic
            }
        case "MQTT_MSG_DEMO" :
            return {
                ...state,
                message:action.message
            }
        case "MENU_LIST_STATIC" :
            return {
                ...state,
                menuData:action.menuData
            }
        case "MENU_TOGGLER" : 
            return {
                ...state,
                menuState:action.menuState
            }
        case "NAVBAR_TOGGLE" :
            return {
                ...state,
                navBarVisible:action.navBarVisible
            }
        case "VISIBLE_PEOPLE" :
            return {
                ...state,
                visiblePeople:action.visiblePeople
            }
        case "SHORTCUT_TOGGLE" :
            return {
                ...state,
                shortcutVisible:action.shortcutVisible
            }
        case "MQTT_CONNECTED" :
            return {
                ...state,
                isMqttConnected:action.isMqttConnected
            }
        case "MQTT_MESSAGE_SEND" :
            return {
                ...state,
                sendMqttMessage:action.sendMqttMessage
            }
        case "MQTT_TOPIC_SUBSCRIBE" :
            return {
                ...state,
                mqttSubscribedTopic:action.mqttSubscribedTopic
            }
        case "REACTIONS" :
            const o={};
            o[action.reactionName]=action.reactions;
            return {
                ...state,
                ...o
            }
        default:
          return state
    }
}
