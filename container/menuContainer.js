import {connect} from 'react-redux'

import MenuList from '../component/menu/menuScreen';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    menuData:state["demoReducer"].menuData,
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuList)