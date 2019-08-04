import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Bubbles } from 'react-native-loader';
import { withTheme } from 'react-native-paper';
import ContentLoader from 'rn-content-loader';

class BadContentLoader extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { colors } = this.props.theme;
        if (this.props.type==="FB") {
            return (
                <ContentLoader primaryColor={colors.primary} secondaryColor={colors.secondry} height={this.props.height}>
                    <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                    <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                    <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
                    <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
                    <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
                </ContentLoader>
            )
        } else if (this.props.type==="INSTAGRAM") {
            return (
                <ContentLoader height={this.props.height}>
                    <Circle cx="30" cy="30" r="30" />
                    <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
                    <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
                    <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
                </ContentLoader>
            )
        } else {
            return (
                <ContentLoader primaryColor={colors.primary} secondaryColor={colors.secondry} height={80}>
                    <Rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
                    <Rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
                    <Rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
                    <Rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
                    <Rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
                    <Rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
                    <Rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
                    <Rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
                    <Rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
                </ContentLoader>
            )
        }
    }
}

export default withTheme(BadContentLoader);