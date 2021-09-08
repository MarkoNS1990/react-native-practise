import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
  const [goal,setGoal] = useState('')
  const [goals,setGoals] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)
  const changeGoal = (text) =>{
    setGoal(text)  
  }
  const addGoalHandler = ()=>{
    setGoals(currGoals=>[...currGoals,{key:(Math.random()*1000).toString(),value:goal}])
    setGoal('')
    setIsAddMode(prev=>!prev)
    console.log('Added new goal')
  }

  const removeGoalHandler =(id)=>{
    setGoals(currentGoals=>{
      const filtered = currentGoals.filter(singleGoal=>{
       return singleGoal.key!==id})
      return filtered
    })
  }

  const cancelGoalHandler = ()=>{
    setIsAddMode(false)
  }

  return (
    
    <View style={styles.screen}>
      <Button title='Add new Goal' onPress={()=>setIsAddMode(prev=>!prev)} />
      <GoalInput setIsAddMode={setIsAddMode} visible={isAddMode} changeGoal={changeGoal} addGoalHandler={addGoalHandler} goal={goal} cancelGoalHandler={cancelGoalHandler} />
      <GoalItems goals={goals} removeGoalHandler={removeGoalHandler}  />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  
  
})

