import {connect} from 'react-redux'

import ChatSelector from '../component/chat/chatSelector';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    chatData:state["demoReducer"].chatData,
    visiblePeople: state["demoReducer"].visiblePeople
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatSelector)