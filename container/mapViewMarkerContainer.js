import {connect} from 'react-redux'

import MapViewMarker from '../component/mapViewMarker';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    //alert(JSON.stringify(state["demoReducer"].markerImage))
    return {
    payload:state["demoReducer"].payload,
    latitude:state["demoReducer"].latitude,
    longitude:state["demoReducer"].longitude,
    guid:state["demoReducer"].guid,
    topic:state["demoReducer"].topic,
    isMqttConnected:state["demoReducer"].isMqttConnected
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(MapViewMarker)