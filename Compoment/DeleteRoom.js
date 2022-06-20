import React, { useState } from 'react';
import { View, Alert, TextInput,StyleSheet,TouchableOpacity,Text } from 'react-native';
import { DatabaseConnection } from '../database/data_Cont';

const db = DatabaseConnection.getConnection();

const SearchRoom = ({ navigation }) => {
const [inputId, setInputId] = useState('');
const [userData, setUserData] = useState({});


const search = () => {
    console.log(inputId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM hotel_db where id = ?',
        [inputId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('Enter ID again!!');
          }
        }
      );
    });
  };

 const handleDelete = () => {
    Alert.alert(
    "Alert",
    "Are you sure to delete data ?",
    [
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
        },
        {
            text: "OK",
            onPress: () => {           
                deletedb();
            },
        },
    ],
    { cancelable: false }
    );
};

  const deletedb = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM  hotel_db where id=?',
        [inputId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Successful',
              'Delete Successful!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Enter ID again!');
          }
        }
      );
    });
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          autoFocus     
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
          
      <View
        style={{ backgroundColor: '#EEE', marginTop: 20, padding: 35,   }}>
          <Text style={styles.textheader}>ID:                 {userData.id}</Text>  
          <Text style={styles.textheader}>Property:      {userData.property}</Text>
          <Text style={styles.textheader}>Bedrooms:   {userData.bedrooms}</Text>   
          <Text style={styles.textheader}>Price:            {userData.price}</Text>  
          <Text style={styles.textheader}>Furniture:     {userData.furniture}</Text> 
          <Text style={styles.textheader}>Date-Time:   {userData.date} </Text> 
          <Text style={styles.textheader}>Notes:           {userData.notes}</Text> 
          <Text style={styles.textheader}>Name:           {userData.name}</Text>          
      </View>
      <TouchableOpacity style={styles.loginDel} onPress={() => handleDelete()}>
            <Text style={styles.loginText}>Delete </Text>
      </TouchableOpacity>
      </View>
      
  );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#808080',
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
      loginDel: {
        width: '70%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 5,   
      },
      inputView: {
        width: '80%',
        backgroundColor: '#F8F8FF',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
        bottom: 30,
      },
      inputText: {
        height: 60,
        color: 'black',
        paddingLeft: 25,
        position: 'absolute',   
      },
      textheader: {
        color: '#111',
        fontSize: 12,
        fontWeight: '700', 
        right :25,
      },
    loginText:{
      fontSize: 20,
    },
})

export default SearchRoom;