import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My List Items</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height : 100,
        paddingTop : 50,
        backgroundColor: 'grey',
    },
    title:{
        textAlign : 'center',
        color : 'black',
        fontSize : 30,
        fontWeight : 'bold',
    }
});