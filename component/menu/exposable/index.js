import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import MenuScreen from '../../../container/menuContainer'
import MapViewMarker from '../../../container/mapViewMarkerContainer';

class ExposableMenuScreen extends Component {
    render(){
      const menu = <MenuScreen />
      return (
        <SideMenu menu={menu} >
          <MapViewMarker />
        </SideMenu>
      )
    }
}