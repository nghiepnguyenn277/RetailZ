import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Home from './Compoment/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddRoom from './Compoment/AddRoom'
import SplashScreen from './Compoment/Splash';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import 'react-native-gesture-handler';
import ViewAllRoom from './Compoment/ViewAllRoom';
import Delete from './Compoment/DeleteRoom';
import Edit from './Compoment/Edit';




         

const Stack = createStackNavigator();
const App =()=>{
  return(
      <NavigationContainer>      
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen"component={SplashScreen}options={{ headerShown: false }}/>
          <Stack.Screen name='Home'component={Home} options={{ headerShown: false }}/>    
          <Stack.Screen name='AddRoom'component={AddRoom} options={{ headerShown: true}}/> 
          <Stack.Screen name='ViewAllRoom' component={ViewAllRoom} options={{headerShown: false}}/>
          <Stack.Screen name='Delete' component={Delete} options={{headerShown: true}}/>
          <Stack.Screen name ='Edit' component={Edit}options={{headerShown: true}}/>    
   
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;