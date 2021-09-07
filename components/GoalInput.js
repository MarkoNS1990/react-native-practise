import React from 'react';
import {View, StyleSheet, TextInput, Button,Modal} from 'react-native';

const GoalInput = ({addGoalHandler,changeGoal,goal,visible,cancelGoalHandler}) => {

    return (
        <Modal visible={visible} animationType='slide'> 
        <View style={styles.inputContainer}>
            <TextInput placeholder='Enter Course Goal' style={styles.inputField} onChangeText={changeGoal} value={goal}/>
            <View style={{flexDirection:'row'}}>
            <Button title='Cancel' color='red' onPress={cancelGoalHandler} />
            <View style={{marginLeft:10}}>
            <Button title='ADD' onPress={addGoalHandler} />
            </View>                
            
            </View>
            

      </View>
      </Modal>  
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      inputField:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
      },
})

export default GoalInput;
