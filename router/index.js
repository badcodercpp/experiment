import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import MenuScreen from '../container/menuContainer';
import { Router, Scene, Modal, Lightbox } from 'react-native-router-flux';
import MapViewMarker from '../container/mapViewMarkerContainer';
import InputOverMap from '../container/inputOverMapContainer';
import NavBar from '../container/navbarContainer';
import SideMenuCopy from '../container/sideMenuContainer';
import PeopleOverMapScreen from '../container/peopleContainer';
import ShortcutScreen from '../container/shortcutContainer';
import HomeSearchAfterFocus from '../container/afterFocusHomeSearchContainer';
import ProfileScreen from '../container/profileContainer';
import {connect} from 'react-redux'
import * as Actions from '../actions/actionCreator';
import {bindActionCreators} from 'redux';
import ChatSelector from "../container/chatSelectorContainer"
import { TENOR } from "../config_style/reaction/tenor";

const tenor = TENOR();


const MenuOverMap_U = ({props})=>{
    return (
        <View style={{flex:1}} >
            <MapViewMarker />
            <NavBar />
            <PeopleOverMapScreen />
            <ShortcutScreen />
        </View>
    )
}


const MenuWithMapPage = ({props}) => {
    const menu = <MenuScreen />
      return (
        <SideMenuCopy menu={menu} component={MenuOverMap_U} >
        </SideMenuCopy>
    )
}

class AllRoutes extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { actions } = this.props;
        const urlList = tenor.urls;
        actions.GET_ALL_REACTIONS(urlList)
    }
    render(){
        return (
            <Router>
                <Modal>
                    <Scene key="BAD_MAP" initial={true} component={MenuWithMapPage} hideNavBar={true}  />
                    <Scene key="BAD_INP" component={InputOverMap} />
                    <Scene key="BAD_MNU" component={MenuScreen} />
                    <Scene key="BAD_SBF" component={HomeSearchAfterFocus} hideNavBar={true} />
                    <Scene key="BAD_PRF" component={ProfileScreen} hideNavBar={true} />
                    <Scene key="BAD_CHS" component={ChatSelector} hideNavBar={true} />
                </Modal>
            </Router>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      navBarVisible:state["demoReducer"].navBarVisible,
}}
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(AllRoutes)