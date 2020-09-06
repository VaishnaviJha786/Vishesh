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
import { StackActions } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import {firebaseAuth} from '../environment/config'
const { width: WIDTH } = Dimensions.get("window");
 class child extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Options'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  
  Register = () => {
    this.props.navigation.dispatch(StackActions.replace('SignUp'));
  };
  Features=()=>{
    this.props.navigation.dispatch(StackActions.replace('Options')); 
  }
  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg1.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text1}>-User Login-</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          
          <TextInput
            style={styles.input}
            placeholder={"Enter Username"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input2}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btn} onPress={this.handleLogin}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3} >
          <Text style={styles.text2}onPress={this.Register}>New user?Register here</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.btn2} onPress={this.Register}>
            <Text style={styles.text3}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
 class organisation extends Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Options'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  Register = () => {
    this.props.navigation.dispatch(StackActions.replace('SignUp'));
  };
  Features=()=>{
    this.props.navigation.dispatch(StackActions.replace('Options')); 
  }
 
  render() {
    return (
      <ScrollView>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg1.jpeg")}
      >
        <View style={styles.container}>
          <Text style={styles.text1}>-Organisation Login-</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          
          <TextInput
            style={styles.input}
            placeholder={"Enter Username"}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.input2}
            placeholder={"Enter Password"}
            secureTextEntry={true}
            placeholderTextColor="black"
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={styles.btn} onPress={this.Features}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3} >
          <Text style={styles.text2} onPress={this.handleLogin}>New Organisation?Register here</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.btn2} onPress={this.handleLogin} >
            <Text style={styles.text3}>Register</Text>
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
    fontSize: 20,
    //paddingLeft: 100,
    textAlign: "center",
    marginHorizontal: 25,
    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderWidth: 1,
  },
  input2: {
    width: WIDTH - 100,
    height: 45,
    borderRadius: 25,
    fontSize: 20,
    //paddingLeft: 100,
    textAlign: "center",
    marginHorizontal: 25,
    color: "black",
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderWidth: 1,
    bottom: 230,
  },
  container: {
    marginTop: 250,
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
    top: 200,
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
const RootStack = createBottomTabNavigator();



const login=()=>{
  return(
    <RootStack.Navigator tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      
      activeBackgroundColor: '#ffb6c1',
      inactiveBackgroundColor: 'white',
      labelStyle:{fontSize:20,},
      style:{justifyContent:'center'}
    }} >
      <RootStack.Screen name="User-Login" component={child}/>
      <RootStack.Screen name="Org-Login" component={organisation}/>
    </RootStack.Navigator>
  );
}
export default login;


