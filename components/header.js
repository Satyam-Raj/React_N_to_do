import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    header:{
        height: 50,
        paddingTop: 20,
        backgroundColor: '#f4511e',
        alignItems: 'center',
    },
    title:{
        fontWeight: 'bold',
        color: '#fff',
    }
});