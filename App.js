import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Learn React', key: '2' },
    { text: 'Learn Redux', key: '3' },
  ]);




  return (
    <View style={styles.container}>
      <View>
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <View style={styles.list}>
            <FlatList 
              data = {todos}
              renderItem = {({item}) => (
                <Text>{item.text}</Text>
              )}
            
            />
          </View>
        </View>

      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    paddingTop: 50,
    alignItems: 'center',
    
  }
});

