import React, { Component, memo} from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Background from "../components/Background";
import CalendarPicker from 'react-native-calendar-picker';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone :'',
      comensales:'',
      fecha:'',
      hora:'',
      selectedStartDate: null,
      
    };
    this.onDateChange = this.onDateChange.bind(this);
  } 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString().split('00:00:00 GMT+0000') : '';
    const { navigate } = this.props.navigation;
    
    dataToSend = {data: " Name: " + this.state.username
    + " Diners: "  + this.state.Diners
    + " Date: " +  startDate 
    +  " Hour: " + this.state.hour}
    return (
      
      
      <View style={{padding:20}}> 
      <ScrollView>
      
      <Text style={{fontStyle:'italic'}}>  </Text>
      
      <TextInput
      value={this.state.username}
      onChangeText={username => this.setState({ username })}
      placeholder={' Name: '}
      style={styles.input}
      placeholderTextColor='black'
      
      />
      <TextInput
      value={this.state.phone}
      onChangeText={phone => this.setState({ phone })}
      placeholder={' Phone Number: '}
      placeholderTextColor='black'
      style={styles.input}
      
      />
      
      <TextInput
      value={this.state.diners}
      onChangeText={diners => this.setState({ diners })}
      placeholder={' N# Diners:                                        '}
      style={styles.input}
      placeholderTextColor='black'
      
      />
      
      <TextInput
      value={this.state.hour}
      onChangeText={hora => this.setState({ hour })}
      placeholder={' hour: '}
      style={styles.input}
      placeholderTextColor='black'
      
      />  
      
      
      </ScrollView>
      
      
      <View>
      <CalendarPicker
      onDateChange={this.onDateChange}
      weekdays={['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']}
      months={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
      
      />
      
      <View style={styles.button}>
      <Button
      style={styles.input}
      title="Reservation"
      color="#F6820D"
      onPress={() =>
        navigate('ThirdPage', dataToSend)            
      }
      />
      </View>
      </View>
      </View>
      
      
      
      );
    }
  }
  const styles = StyleSheet.create({
    input: {
      flex:1,
      padding: 5,
      marginBottom: 10,
      backgroundColor: '#D3D3D3',
      borderRadius:20,
      
    },
    
    button:{
      borderRadius:40,
      backgroundColor:"#F6820D",
      
    },
    
  });
  
  export default memo (FirstPage)
