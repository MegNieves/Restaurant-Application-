import React, { Component, } from 'react';
import {  Text, StyleSheet, } from 'react-native';
import Background from "../components/Background";
import Button from "../components/Button";


import firebase from '@firebase/app'
import { ScrollView } from 'react-native-gesture-handler';

export default class ForthPage extends Component{
  
  constructor() {
    super()
    this.state = {      
      Bookings:[],
    }
  }
  
  componentDidMount() {
    const readUsersData = ()=> {
      const nameRef =  firebase.database().ref('user0001')
      nameRef.on('value', (snapshot)=> {
        const state = snapshot.val()
        this.setState({Bookings:state}) })
      }
      readUsersData();
    }
    
    render(){
      const Bookings =   JSON.stringify(this.state.bookings);
      const {navigate} = this.props.navigation;
      
      return (
        <Background>
        
        <ScrollView>
        <Text style= {styles.TextStyle}>  My Bookings: {Bookings}</Text>  
        <Button 
        color= 'orange'
        title= 'Go to main menu'
        style = {styles.TextStyle}
        onPress={() =>
          {navigate('mainPage')
          alert('Thank you for your visit')
        }
        
      }
      > Menu </Button>
      
      </ScrollView>
      
      </Background>
      )
    }
    
  }
  
  const styles = StyleSheet.create({
    
    TextStyle: {
      flex:1,
      alignItems:'center',
      alignContent:'center',
      fontSize: 23,
      textAlign: 'center',
      color: 'black',
      justifyContent: "center",
      
    },
  });
  
  
