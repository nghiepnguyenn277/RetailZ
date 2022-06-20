import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native';
import * as SQLite from "expo-sqlite";
import { DatabaseConnection } from '../database/data_Cont';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const db = DatabaseConnection.getConnection();

const ViewAllRoom = ({navigation}) => {
const [flatListItems, setFlatListItems] = useState([]);

 useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM hotel_db',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
        }
      );
    });
  }, []);

  const listItemView = (item) => {
    return (
      <View
        key={item.id}
        style={{ backgroundColor: '#808080', marginTop: 20, padding: 30, borderRadius: 10 }}>
          <Text style={styles.textheader}>ID:                   {item.id}</Text>  
          <Text style={styles.textheader}>Property:      {item.property}</Text>
          <Text style={styles.textheader}>Bedrooms:   {item.bedrooms}</Text>   
          <Text style={styles.textheader}>Price:             {item.price}$</Text>  
          <Text style={styles.textheader}>Furniture:     {item.furniture}</Text>  
          <Text style={styles.textheader}>Date-Time:   {item.date}  </Text>
          <Text style={styles.textheader}>Notes:           {item.notes}</Text> 
          <Text style={styles.textheader}>Name:           {item.name}</Text>       
      </View>
      
    );
  };

  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 30 }}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={flatListItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
          <View style={styles.fill}>
            <View style ={styles.fill2}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Home')}>                 
                 <Ionicons name="home" size={40} color="black" /> 
            </TouchableOpacity>
            </View>
            <View style ={styles.fill3}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Edit')}>
                 <MaterialIcons name="mode-edit" size={50} color="black" />
            </TouchableOpacity>
            </View>
            <View style ={styles.fill4}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('AddRoom')}>
            <Ionicons name="add-circle-sharp" size={40} color="black" />
            </TouchableOpacity>
            </View>
            <View style ={styles.fill5}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('Delete')}>
                
                 <MaterialIcons name="delete" size={50} color="black" />
            </TouchableOpacity>
            </View>
          </View>
        </View>  
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
  textheader: {
    color: '#111',
    fontSize: 12,
    fontWeight: '700',

  },
  textbottom: {
    color: '#111',
    fontSize: 18,
  },
  icon:{
   
    position: 'absolute',
  
  },
  fill:{
    width:"100%",
    backgroundColor:"#fb5b5a",
    height:75,
   
  },
  fill2:{
    width:"23%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    marginTop: 15,
    position: 'absolute',

  },
  fill3:{
    width:"23%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    marginTop: 15,
    position: 'absolute',
    left: 195,
  },
  fill4:{
    width:"23%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    marginTop: 15,
    position: 'absolute',
    left: 100,
  },
  fill5:{
    width:"23%",
    backgroundColor:"white",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    marginTop: 15,
    position: 'absolute',
    left: 290,
  },
});

export default ViewAllRoom;