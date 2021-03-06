import React, {Component} from 'react'
import { Text, View, StyleSheet, Animated } from 'react-native'
import Emoji from 'react-native-emoji'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from "../components/Background";

export default class mainPage extends Component  {
  state = {
        fadeValue: new Animated.Value(2)
      };
    
      _start = () => {
        Animated.timing(this.state.fadeValue, {
          toValue: 1,
          duration: 1000
        }).start()
    }

    static navigationOptions = {
        title: 'RMexican Restaurant ',
      };
      render() {
        const { navigate } = this.props.navigation;
          return (
    <Background>     
          <Animated.View  >
          <TouchableOpacity onPress ={() => alert("Mexican Restaurant. Tlf. 0241-8257718") }>  
          <Emoji   
          name = "pizza"
          style={{fontSize: 40, textAlign:'center'}}        
          /> 
          <Text style={{fontSize:30,fontStyle:'italic',textAlign:'center'}}>Contact us</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => navigate ('ForthPage')}>  
          <Emoji 
          name = "sushi"
          style={{fontSize: 40, textAlign:'center'}} 
          /> 
          <Text style={{fontSize:30,fontStyle:'italic',textAlign:'center'}}>My reservations</Text> 
          </TouchableOpacity> 
         
          <TouchableOpacity onPress ={() => navigate ('FirstPage')} > 
                 
          <Emoji 
          
          name = "Restaurant"
          style={{fontSize: 60, textAlign:'center'}} 
          
          /> 
          <Text style={{fontSize:40,fontStyle:'italic',textAlign:'center'}}> Reserve </Text> 
          </TouchableOpacity> 
          </Animated.View>
          </Background> 
    
  );
}
}
