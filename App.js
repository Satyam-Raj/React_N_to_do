import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Learn React Native', key: '1' },
    { text: 'Learn React', key: '2' },
    { text: 'Learn Redux', key: '3' },
  ]);


  const pressHandler = (key) => {
    
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key !=key);
    });
    
  }


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
                <TodoItem item = {item} pressHandler={pressHandler} />
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
    paddingTop: 40,
    alignItems: 'center',
    
  }
});

