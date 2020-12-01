import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View , FlatList, Alert, Button} from 'react-native';
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: "1"},
    { text: "create an app", key: "2"}
  ])
 
const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  })
}

const submitHandler = (text) => {
  if(text.length > 3){
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }else{
    Alert.alert('OOPS', 'too short to add, have more than 3 characters', [
      {text: 'understood', onPress: () => console.log('alert closed')}
    ])
  }
}

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>  
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              // <Text>{item.text}</Text>
              <TodoItem item={item} pressHandler= {pressHandler}/>
            )}
          />


        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content : {
    padding: 40
  }
});
