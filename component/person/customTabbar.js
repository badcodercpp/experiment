import React,{ Component } from 'react';
import Animated from 'react-native-reanimated';

export default class CustomTabs extends Component {
    render() {
        const inputRange = this.props.navigationState.routes.map((x, i) => i);
    
        return (
          <View style={styles.tabBar}>
            {props.navigationState.routes.map((route, i) => {
              const color = Animated.color(
                Animated.round(
                  Animated.interpolate(props.position, {
                    inputRange,
                    outputRange: inputRange.map(inputIndex =>
                      inputIndex === i ? 255 : 0
                    ),
                  })
                ),
                0,
                0
              );
    
              return (
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}>
                  <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
    };
}
