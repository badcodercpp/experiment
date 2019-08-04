import {connect} from 'react-redux'

import InputOverMap from '../component/overMap/over_input';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    message:state["demoReducer"].message,
    topic:state["demoReducer"].topic
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(InputOverMap)