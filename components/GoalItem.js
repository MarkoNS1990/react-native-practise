import React from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';

const GoalItem = ({value,removeGoalHandler,mykey}) => {
    
    return (
        <TouchableOpacity onPress={()=>removeGoalHandler(mykey)} >
            <View key={Math.random().toString()} style={styles.listItem}>
                <Text>{value}</Text>
            </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem:{
        padding:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1,
        marginTop:10
      }
})

export default GoalItem;
