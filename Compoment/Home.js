import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground,Image } from 'react-native';



export default class Home extends React.Component {


  render(){   
    return (
      <View style={styles.container}>     
          <View>
                <Image source={require('../assets/img/logo.jpg')}></Image>
          </View>   

        <TouchableOpacity style={styles.loginBtn} onPress={ ()=>this.props.navigation.push('ViewAllRoom')}>
          <Text style={styles.loginText}>View All Room</Text>
        </TouchableOpacity> 
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  View:{
    width:"80%",
    backgroundColor:"#87CEFA",
    borderRadius:100,
    alignItems:'center',  
    height:150,
    width:400, 
    bottom:200,
  },
  Topback:{
    backgroundColor :"white",
    borderRadius: 70,
    width:400,
    height :200,
    bottom: 150,
  },
  layer:{
    bottom:50,
    alignItems: 'center',
    height:130,
    width :350,   
    
  },
  logoText:{
    color:"black",
    fontSize:60,
    top:70,  
  },
  inputView:{
    width:"80%",
    backgroundColor:"#F8F8FF",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    bottom: 30,
  },
  inputText:{
    height:60,
    color:"black",
    paddingLeft:25,
    position:"absolute",
    left:10,
  },
  InputIcon:{
    position:"absolute",
    left:10,
  },
  eyeIcon:{
    position:"absolute",
    left:280,
  },
  forgot:{
    color:"black",
    fontSize:15
  },
  loginBtn:{
    width:"70%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    marginTop: 5,
  },
  loginText:{
    color:"white",
    textAlign:"center",
    fontSize:20,
    position:"absolute",
  },
  SignUpText:{
    color:"black",
    textAlign:"center",
    fontSize:20,
    
  },
});
