import React,{ Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    Image, 
    TextInput, 
    Button, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions} from 'react-native';

import { withTheme } from 'react-native-paper';
import { scale, 
  verticalScale, 
  moderateScale } from 'react-native-size-matters';

import RF from "react-native-responsive-fontsize";

const {height, width} = Dimensions.get('window');

class PeopleOverMapScreen extends Component {
    constructor(props){
        super(props);
        this.state={visiblePeople:[]}
    }
    static getDerivedStateFromProps(nextProps, prevState){
        if (nextProps.visiblePeople!==undefined) {
            let a=[];
            let ll=nextProps.visiblePeople;
            for(let m in ll){
              a.push(ll[m])
            }
            return {
                visiblePeople: a
            }
        }
        return {
            visiblePeople:prevState.visiblePeople
        }
    }
    componentDidMount(){
        let { actions } = this.props;
        actions.VISIBLE_PEOPLE_PROMISE('9836648105')
    }
    render(){
        const { colors } = this.props.theme;
        const width_img = scale(45),
          height_img = verticalScale(45),
          radius_img = ( width_img + height_img ) / 2;
        return (
            <View style={{position:"absolute",width:width,height:verticalScale(100),backgroundColor:"transparent",bottom:verticalScale(30)}}>
            <ScrollView horizontal={true}>
              {
                this.state.visiblePeople.map( (a,b)=>{
                  return (
                    <View key={b} style={{width:scale(90),height:verticalScale(100),borderRightColor:"grey",borderRightWidth:2,borderBottomColor:"grey",borderBottomWidth:2,borderTopColor:"grey",borderTopWidth:2,borderLeftColor:"grey",borderLeftWidth:2,marginRight:scale(10),marginLeft:scale(10),backgroundColor:"#ece5dd",borderRadius:15}}>
                      <TouchableOpacity onPress={()=>{
                        //this._clicking_change_location(a);
                        }} >
                        <View style={{width:scale(90),height:verticalScale(50),justifyContent:"center",alignItems:"center"}} >
                          <Image style={{width:width_img,height:height_img,borderRadius:radius_img}} source={{uri: `data:image/png;base64,${a.image}`}} />
                        </View>
                        <View style={{width:scale(90),height:verticalScale(50),justifyContent:"center",alignItems:"center"}} >
                          <Text style={{fontSize:RF(3),fontFamily:"sans-serif-light",color:"black"}} >
                            {a.title}
                          </Text>
                          <Text style={{fontSize:RF(2),fontFamily:"sans-serif-light",color:"black"}} >
                            {a.gender}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                } )
              }
            </ScrollView>
          </View>
        )
    }
}

export default withTheme(PeopleOverMapScreen);