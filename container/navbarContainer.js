import {connect} from 'react-redux'

import NavBar from '../component/navbar/index';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    menuState:state["demoReducer"].menuState,
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)