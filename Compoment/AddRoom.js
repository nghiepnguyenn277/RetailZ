import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useEffect} from 'react';
import { DatabaseConnection } from '../database/data_Cont';





const AddRoom = ({navigation}) => {
  const [property_type, setProperty_type] = useState('');
  const [bedrooms , setBedrooms ] = useState('');
  const [price,setPrice ] =  useState('');
  const [furniture,setFurniture] = useState('');
  const [notes,setNotes] = useState('');
  const [name,setName ] = useState('');
  const [date,setDate]  =useState('');

  useEffect(() => {
    try {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS hotel_db(id INTEGER PRIMARY KEY AUTOINCREMENT, property VACHAR(50), bedrooms VACHAR(50), price VACHAR(50), date VACHAR(50),furniture VACHAR(50),notes VACHAR(50), name VACHAR(50))',
        );
      });
      console.log('Sucsecfully');
    } catch (error) {
      console.log('error');
    }
  }, []);

const db = DatabaseConnection.getConnection();
  
    const AddRoom =() =>{
      console.log(property_type, bedrooms,date,price,furniture,notes,name)
      if (!property_type)
      {
        alert('Add fill Property type') ;
        return;
      }
      if(!bedrooms)
      {
        alert('Add fill Bedrooms') ;
        return;
      }
      if(!price)
      {
        alert('Add fill Price') ;
        return;
      }
      if(!furniture)
      {
        alert('Add fill Furniture type') ;
        return;
      }
      if(!notes)
      {
        alert('Add fill Notes') ;
        return;
      }
      if(!name)
      {
        alert('Add fill name of the reporter') ;
        return;
      }
      if(!date)
      {
        alert('Add fill Date') ;
        return;
      }
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO hotel_db (property,bedrooms,price,date,furniture,notes,name ) VALUES (?,?,?,?,?,?,?)',
          [property_type,bedrooms,price,date,furniture,notes,name],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Sucsecfully',
                'Click OK to Home !!!',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('Home'),
                  },
                ],
                { cancelable: false }
              );
            } else alert('Error !!!');
          }
        );
      })
    };
  
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput       
          style={styles.inputText}
          placeholder="Property"
          placeholderTextColor="#003f5c"
          onChangeText={(property_type) => setProperty_type(property_type)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder="Bedrooms"
          placeholderTextColor="#003f5c"
          onChangeText={(bedrooms) => setBedrooms(bedrooms)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder=" Monthly rent price"
          placeholderTextColor="#003f5c"
          onChangeText={(price) => setPrice(price)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder="Furniture type"
          placeholderTextColor="#003f5c"
          onChangeText={(furniture) => setFurniture(furniture)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder="Date time"
          placeholderTextColor="#003f5c"
          onChangeText={(date) => setDate(date)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder="Notes "
          placeholderTextColor="#003f5c"
          onChangeText={(notes) => setNotes(notes)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput     
          style={styles.inputText}
          placeholder="Name of the reporter "
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={() => AddRoom()}>
        <Text style={styles.loginText}>Add Room </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#808080',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F8F8FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  
  },
  inputText: {
    height: 60,
    color: 'black',
    paddingLeft: 25,
    position: 'absolute',
    
  },
  InputIcon: {
    position: 'absolute',
    left: 10,
  },
  InputRadionIcon: {
    position: 'absolute',
    left: 10,
  },
  InputRadioTex: {
    color: 'black',
    position: 'absolute',
    left: 40,
  },
  InputRadionIcon2: {
    position: 'absolute',
    left: 150,
  },
  InputRadioTex2: {
    color: 'black',
    position: 'absolute',
    left: 185,
  },
  loginBtn: {
    width: '70%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputDate:{
    width: '40%',
    backgroundColor: '#F8F8FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    right: 75,
  },
  inputTime:{
    width: '35%',
    backgroundColor: '#F8F8FF',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    bottom: 80,
    left: 215,
    position:"absolute",
    bottom: 270,
  },
  loginText:{
    fontSize:20,
  }
});
export default AddRoom;