import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import GoalItem from './GoalItem'

const GoalItems = ({goals,removeGoalHandler}) => {
    return (
        <FlatList keyExtractor={(item)=>item.key} data={goals} renderItem={itemData=><GoalItem value={itemData.item.value} removeGoalHandler={removeGoalHandler} mykey={itemData.item.key} />} >
          
  </FlatList> 
    );
}

const styles = StyleSheet.create({
    
})

export default GoalItems;
