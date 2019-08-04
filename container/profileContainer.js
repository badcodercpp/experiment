import {connect} from 'react-redux'

import ProfileScreen from '../component/person/profile';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
        profileData:state["demoReducer"].profileData
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileScreen)