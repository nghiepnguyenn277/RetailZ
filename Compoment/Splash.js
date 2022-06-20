import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground,Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { auto } from '@popperjs/core';
import { style } from 'dom-helpers';


export default class Splash extends Component {
    render() {
        return (
            <View
            style ={{
                BackgroundColor:'#00FFFFr',
                flex: 1,      
            }}
            >           
            <LottieView 
            source={require('../assets/Animation/splash.json')}               
            autoPlay           
            loop={false}
            onAnimationFinish ={()=>{
            this.props.navigation.replace('Home')
            }} /> 
            </View>
                     
        )
    }
}
