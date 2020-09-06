import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StackActions} from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import {firebaseAuth} from '../environment/config';
const { width: WIDTH } = Dimensions.get("window");

class Child extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
     
      firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Login'))
          .catch(error => this.setState({ errorMessage: error.message }));
          console.log('handleSignUp')
  }
  goToLogin=()=>{
    this.props.navigation.dispatch(StackActions.replace('Login')); 
  }
  
  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg1.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text1}>-User Sign Up-</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          
          <TextInput
            style={styles.input}
            placeholder={"Name"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Age"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Type of Disability"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Contact  Number"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Enter email-id"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btn } onPress={this.handleSignUp}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
 class Organisation extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleSignUp = () => {
     
      firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('Login'))
          .catch(error => this.setState({ errorMessage: error.message }));
          console.log('handleSignUp')
  }
  
  goToLogin=()=>{
    this.props.navigation.dispatch(StackActions.replace('Login')); 
  }
  
  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg1.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text1}>-Organisation Sign Up-</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          
          <TextInput
            style={styles.input}
            placeholder={"Name"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Type(NGO/School/Medical)"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Contact Number"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Enter email-id"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder={"Confirm Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btn} onPress={this.handleSignUp}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: WIDTH - 100,
    height: 45,
    borderRadius: 25,
    fontSize: 15,
    paddingLeft: 45,
    // marginHorizontal: 25,
    top: 10,
    paddingLeft: 50,
    textAlign: "left",

    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderBottomWidth: 1,
  },
  input2: {
    width: WIDTH - 100,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    paddingLeft: 50,
    textAlign: "center",
    marginHorizontal: 25,
    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderBottomWidth: 1,
    bottom: 230,
  },
  container: {
    marginTop: 20,
  },
  btn: {
    width: 100,
    height: 50,
    bottom: 400,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 20,
    marginHorizontal: 25,
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
    color: "black",
    fontWeight: "bold",
  },
  container2: {
    alignItems: "center",
    alignContent: "flex-end",
    top: 430,
  },
  container3: {
    bottom: 100,
  },
  text1: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: 50,
  },
  text2: {
    color: "black",
    fontSize: 20,
  },
  text3: {
    fontSize: 20,
    color: "#0000ff",
    fontWeight: "bold",
  },
});
const SignTab = createBottomTabNavigator();



const signup=()=>{
  return(
    <SignTab.Navigator tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      
      activeBackgroundColor: '#ffb6c1',
      inactiveBackgroundColor: 'white',
      labelStyle:{fontSize:20}
    }} >
      <SignTab.Screen name="User-Signup" component={Child}/>
      <SignTab.Screen name="Org-Signup" component={Organisation}/>
    </SignTab.Navigator>
  );
}
export default signup;
