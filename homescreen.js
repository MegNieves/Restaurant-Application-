import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => (
  <Background>
  <Logo />
  <Header> Mexican Restaurant </Header>
  
  <Button 
  mode="contained" 
  onPress={() => navigation.navigate("LoginScreen")}
  
  >
  Log In
  </Button>
  <Button
  mode="outlined"
  onPress={() => navigation.navigate("RegisterScreen")}
  >
  Check In
  </Button>
  </Background>
  );
  
  export default memo(HomeScreen);
