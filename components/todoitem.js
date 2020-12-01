import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity style = {styles.touchdelete} onPress={ () => pressHandler(item.key)}>
            <Text style = {styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding : 16,
        marginTop : 16,
        borderColor: '#bbb',
        borderWidth : 0.7,
        borderStyle : 'dotted',
        borderRadius: 15,
        backgroundColor: 'grey'
        
    },
    touchdelete:{
        backgroundColor : 'black',
        textDecorationColor: 'white',
    }
})