import React, { Component } from 'react';
import {
  View,
  Image, 
  Dimensions, 
  StyleSheet,
  TouchableOpacity, 
  AsyncStorage,
  StatusBar, 
  Animated
} from 'react-native';
//import Animated from 'react-native-reanimated';

import { Surface, Text, withTheme } from 'react-native-paper';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

const {height, width} = Dimensions.get('window');

const AboutRoute = (props) => {
    const { colors } = props.theme;
    const i=props.I;
    return (
        <View style={[styles.scene, { backgroundColor: colors.profileConfig.tab.body[i] }]} >
        </View>
    )
};
const ActivityRoute = (props) => {
    const { colors } = props.theme;
    const i=props.I;
    return (
        <View style={[styles.scene, { backgroundColor: colors.profileConfig.tab.body[i] }]} >
        </View>
    )
};

const getTouchableBackground = (theme,i) => {
    return theme.profileConfig.tab.touchable[i]
}

class ProfileDesignTabs extends React.Component {
    constructor(props){
        super(props);
        
    }
    state = {
        index: 0,
        routes: [
          { key: 'about', title: 'About' },
          { key: 'activity', title: 'Activity' },
        ],
    };
    _change_my_about = () => {
        //this.mutateMyState({showChangeMyAboutPopup:true,timepassChatNeeded:false})
    }
    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        const { colors } = this.props.theme;
        return (
        <View style={styles.tabBar}>
            {
                props.navigationState.routes.map((route, i) => {
                    return (
                        <TouchableOpacity key={i}
                        style={{flex: 1,alignItems: 'center',padding: 10,backgroundColor:getTouchableBackground(colors,i)}}
                        onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ color:colors.profileConfig.tab.head[i] }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })   
            }
        </View>
        );
    };
    render(){
        return (
            <TabView
                navigationState={this.state}
                renderScene={({ route }) => {
                    switch (route.key) {
                      case 'about':
                        return <AboutRoute {...this.props} I={this.state.index} />;
                      case 'activity':
                        return <ActivityRoute {...this.props} I={this.state.index} />;
                      default:
                        return null;
                    }
                  }}
                renderTabBar={this._renderTabBar}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: width, height:30 }} 
                Layout = {{
                    height: height,
                    width: width
                }}
                useNativeDriver
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#075e54'
    },
    item_1:{
        fontFamily:"sans-serif-light",
        color:"white",
        fontSize:15,
        fontWeight:"bold"
    },
    scene: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    }
});

export default withTheme(ProfileDesignTabs);