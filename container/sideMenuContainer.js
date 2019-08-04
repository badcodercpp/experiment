import {connect} from 'react-redux'

import SideMenuCopy from '../component/menu/sideMenu';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    menuState:state["demoReducer"].menuState,
    menuData:state["demoReducer"].menuData
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(SideMenuCopy)