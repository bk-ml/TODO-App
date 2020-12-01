import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }){

    const [text, setText] = useState('');

    const changehandler = (val) => {
        setText(val);
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='new item...'
                onChangeText={changehandler}
                
            />
            <Button onPress={() => submitHandler(text) } title='add item' color='green' />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width : 300 ,
        marginBottom: 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    },
})