import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
//import SideMenu from 'react-native-side-menu'
import Drawer from 'react-native-drawer'

export default class SideMenuCopy extends Component {
    componentDidMount(){
        const { actions } = this.props;
        actions.MENU_LIST_STATIC_DISPATCH(["Create topic","hello"])
    }
    _detect_slide = offset => {
        //const { actions } = this.props;
        if (offset) {
            //actions.NAVBAR_TOGGLE_DISPATCH(true)
        }else {
            //actions.NAVBAR_TOGGLE_DISPATCH(false)
        }
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        if (this.props.menuState) {
            return true;
        } else {
            return false;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if (snapshot!==null) {
            if (snapshot) {
                this._drawer.open()
            }else{
                this._drawer.close()
            }
        }
    }
    componentWillUnmout(){
        // alert("hi")
        // const { actions } = this.props;
        // actions.MENU_TOGGLER_DISPATCH(false);
    }
    _close_callback = ()=>{
        const { actions } = this.props;
        actions.MENU_TOGGLER_DISPATCH(false)
    }
    render(){
        return(
            <Drawer
                type="overlay"
                content={this.props.menu }
                tapToClose={true}
                openDrawerOffset={0.2} // 20% gap on the right side of drawer
                panCloseMask={0.2}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                ref={(ref) => this._drawer = ref}
                tweenHandler={(ratio) => ({
                  main: { opacity:(2-ratio)/2 }
                })} 
                onCloseStart={this._close_callback} >
                    <this.props.component />
            </Drawer>
        )
        // return (
        //     <SideMenu menu={this.props.menu} isOpen = {this.props.menuState===undefined?false:this.props.menuState} >
        //         <this.props.component />
        //     </SideMenu>
        // )
    }
}

const drawerStyles = {
    drawer: { shadowColor: 'transparent', shadowOpacity: 1, shadowRadius: 3},
    main: {paddingLeft: 3},
}