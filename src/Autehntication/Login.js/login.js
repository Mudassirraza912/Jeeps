/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Image, TextInput, AppRegistry, Alert, TouchableOpacity, ScrollView, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {login} from '../../redux/actions/userAction'
import { Container, Header, Content, Card, CardItem, Body, Text, Button, Spinner } from "native-base";
import {connect} from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: true,
            email:'',
            password:'',
            username:'',
            loader: false
        }
    }





    login = () => {
        const {email, password, username} = this.state
        // this.setState({loader: true})
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        console.log('FORMDATA', formData)
        if(username && password) {
          this.props.login(formData)
        }else {
          Alert.alert("Alert", "Please Fill All Fields")
        }
        

    }





  render() {
      const {login} = this.state
  return (
    <View style={{height: "100%", width: "100%", backgroundColor: '#484648', alignItems: 'center'}}>

        <ScrollView style={{width:'100%'}}>

        <View style={{ width: "100%", alignItems:'center' }}>
      <LinearGradient colors={['#678a00', '#51bd4c']} style={{width:'100%'}}>
        <View style={{ height: 300, justifyContent:'center', width: "100%", alignItems:'center' }}>
          <Image
            style={{ width: 334, height: 190, }}
            source={require('../../../assets/jeeps.png')}
          />
        </View>
      </LinearGradient>
    </View>


<View style={{ width: "95%", backgroundColor: '#413f40', alignItems: 'center', height:'50%', borderBottomLeftRadius: 10 , borderBottomRightRadius:10, alignSelf:'center'}}>

        <View style={ { width: "90%", backgroundColor: '#3a3839', alignItems: 'center', padding:10, borderRadius: 10, height:300, marginTop: -20}}>

          <View style={{ flexDirection: "row", marginTop: "7%", justifyContent: "space-around", width:'100%' }}>
                    <Button onPress={() => { this.props.navigation.navigate('Signup') }}  rounded transparent style={{ borderColor: "#41B619", borderWidth: 3, width: "50%", justifyContent: "center"  }}>
                        <Text style={{ color: "#fff", fontSize: 12, textAlign:'center' }}>Create Account</Text>
                    </Button>
                    <Button onPress={() => {  this.props.navigation.navigate('Login') }} rounded success style={{ width: "40%", justifyContent: "center" }}>
                        <Text style={{ color: "#fff" }}>Login</Text>
                    </Button>

            </View> 



            <View style={{justifyContent: 'center',justifyContent: "space-between",marginBottom: "10%", width:'100%', marginTop: 15 }}>
                  <View style={{paddingVertical:5}}>
                    <TextInput
                    value={this.state.username}
                    placeholderTextColor="#fff"
                      placeholder="Username"
                      underlineColorAndroid='transparent'
                      onChangeText={(text) => { this.setState({ username: text }) }}
                      style={{ textAlign: 'center', // Setting up TextInput height as 50 pixel.
                      height: 50,  borderWidth: 2,   borderColor: '#41B619',  borderRadius: 20, backgroundColor: "transparent", color:'#fff'}} />
                  </View>



                  <View style={{paddingVertical:5}}>
                    <TextInput
                    value={this.state.password}
                    placeholderTextColor="#fff"
                      placeholder="Password"
                      secureTextEntry={true}
                      onChangeText={(text) => { this.setState({ password: text }) }}
                      underlineColorAndroid='transparent'
                      style={{ textAlign: 'center',  height: 50, borderWidth: 2, borderColor: '#41B619',borderRadius: 20, backgroundColor: "transparent", color:'#fff'}} />

                  </View>

            </View>

        </View>


      <View style={{width:'100%', paddingVertical:'5%', marginTop:'-10%' }}>
                <View style={{flex:1 , alignItems:'center'}}>
                {!this.props.fetching ?    <Button onPress= {() => this.login()} success rounded style={{width:'40%', justifyContent:'center'}}>
                        <Text style={{color:'#fff'}}>
                            Login
                        </Text>
                    </Button>   :   
                    
                    <Spinner />
                    }

                <TouchableOpacity style={{ paddingVertical:'5%'}}> 
                    <Text style={{color:'#fff'}}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
                </View>
        </View>   

</View>






        </ScrollView>

    </View>
  );
}
};


const mapStateToProps = state => {
	return {
        userDetails: state.user.userDetails,
        fetching: state.user.fetching,
	};
  };
  
  const mapDispatchToProps = {
    login
  };


export default connect(mapStateToProps, mapDispatchToProps)(Login);
