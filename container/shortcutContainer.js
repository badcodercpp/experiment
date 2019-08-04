import {connect} from 'react-redux'

import ShortcutScreen from '../component/shortcuts/index';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
        shortcutVisible:state["demoReducer"].shortcutVisible
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ShortcutScreen)