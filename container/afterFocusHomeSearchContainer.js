import {connect} from 'react-redux'

import HomeSearchAfterFocus from '../component/search/afterSearchFocusOnHomeScreen';
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) =>{
    return {
    visiblePeople:state["demoReducer"].visiblePeople
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeSearchAfterFocus)