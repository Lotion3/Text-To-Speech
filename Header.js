import {Text,View} from 'react-native'
import React from 'react'
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context'

export default class Header extends React.Component{
    render(){
        return(
            <View style={{alignItems:"center"}}>
                <SafeAreaProvider>
                    <Text style={{
                        backgroundColor:"red",width:500,height:50,alignText:"center",fontSize:35,paddingLeft:130
                    }}>Text To Speech</Text>
                </SafeAreaProvider>
            </View>
        )
    }
}