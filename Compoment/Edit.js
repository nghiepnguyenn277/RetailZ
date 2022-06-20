import React, { useState } from 'react';
import {
  View,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { DatabaseConnection } from '../database/data_Cont';

const db = DatabaseConnection.getConnection();

const Edit = ({ navigation }) => {
  
  const [inputId, setInputId] = useState('');
  const [property_type, setProperty_type] = useState('');
  const [bedrooms , setBedrooms ] = useState('');
  const [price,setPrice ] =  useState('');
  const [furniture,setFurniture] = useState('');
  const [notes,setNotes] = useState('');
  const [name,setName ] = useState('');
  const [date,setDate]  = useState('');

  

  const updateAllStates = (property_type, bedrooms, price,furniture,date,notes,name) => 
  {
    setProperty_type(property_type);
    setBedrooms(bedrooms);
    setPrice(price);
    setFurniture(furniture);
    setDate(date);
    setNotes(notes);
    setName(name);
  };

  const search = () => {
    console.log(inputId);
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM hotel_db where id = ?',
        [inputId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            const res = results.rows.item(0);
            updateAllStates(
              res.property,
              res.bedrooms,
              res.price,
              res.furniture,
              res.date,
              res.notes,
              res.name,
            );
            
          } else {
            alert('Not data!');
            updateAllStates('', '', '','','','','');
          }
        }
      );
    });
  };
  const update = () => {
    console.log(property_type, bedrooms,price,furniture,date,notes,name)
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

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE hotel_db set property=?, bedrooms=?, price=?, furniture=?, date=?, notes=?, name=? where id=?',
        [property_type,bedrooms,price,furniture,date,notes,name,inputId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Successful',
              'Updated successfully !!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro');
        }
      );
    });
  };

  return (
    <View style={styles.container}>
        <View style={styles.inputView}>
        <TextInput    
          style={styles.inputText}
          placeholder="Enter ID  "
          placeholderTextColor="#003f5c"
          onChangeText={
            (inputId) => setInputId(inputId)
          }
        />
          <TouchableOpacity style={styles.loginBtn} onPress={() => search()}>
            <Text style={styles.loginText}>Search </Text>
          </TouchableOpacity>
       
      </View>
      <View style={styles.inputView} >
        <TextInput    
          value ={property_type}   
          style={styles.inputText}
          placeholder="Property"
          placeholderTextColor="#003f5c"
          onChangeText={(property_type) => setProperty_type(property_type)}
        />
        </View>  
      <View style={styles.inputView} >
        <TextInput    
          value ={bedrooms}   
          style={styles.inputText}
          placeholder="Bedrooms"
          placeholderTextColor="#003f5c"
          onChangeText={(bedrooms) => setBedrooms(bedrooms)}
        />
        </View>  
        <View style={styles.inputView}>
        <TextInput  
          value={price}   
          style={styles.inputText}
          placeholder=" Monthly rent price" 
          placeholderTextColor="#003f5c"
          onChangeText={(price) => setPrice(price)}
        />
      </View> 
      <View style={styles.inputView}>
        <TextInput 
          value={furniture}    
          style={styles.inputText}
          placeholder="Furniture type"
          placeholderTextColor="#003f5c"
          onChangeText={(furniture) => setFurniture(furniture)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput 
          value={date}    
          style={styles.inputText}
          placeholder="Date"
          placeholderTextColor="#003f5c"
          onChangeText={(date) => setDate(date)}
        />
      </View>
        <View style={styles.inputView} >
        <TextInput    
          value ={notes}   
          style={styles.inputText}
          placeholder="Notes"
          placeholderTextColor="#003f5c"
          onChangeText={(notes) => setNotes(notes)}
        />
        </View>   
        <View style={styles.inputView}>
        <TextInput
          value={name}     
          style={styles.inputText}
          placeholder="Name of the reporter "
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <TouchableOpacity style={styles.UpBtn} onPress={() => update()}>
        <Text style={styles.loginText}>Update</Text>
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
    width: '40%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    left: 185,  
  },
  UpBtn:{
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
    bottom: 235,
  },
  loginText:{
    fontSize:20,
  }
});
export default Edit;