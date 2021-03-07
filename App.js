import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
import Header from "./Header"
import * as Speech from 'expo-speech'

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
        thingy:""
    }
}
  render(){
    return(
      <View style={{alignItems:"center"}}>
        <SafeAreaProvider>
           <Header/>
           <TextInput style={{borderWidth:1}} onChangeText={(data)=>{this.setState({
             thingy:data
           })}}/>
           <TouchableOpacity style={{backgroundColor:"red",borderRadius:15,width:100,height:50,borderWidth:3,alignSelf:"center",paddingLeft:30,paddingTop:10}}
           onPress={()=>{this.state.thingy===""?alert("You didn't type anything"):Speech.speak(this.state.thingy)}}>
             <Text>Enter</Text>
           </TouchableOpacity>
        </SafeAreaProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
