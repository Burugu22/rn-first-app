import { Button, StyleSheet, View, FlatList, Alert} from 'react-native';
import React, {useState} from 'react';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]); 
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = goalTitle => {

      if (goalTitle.length === 0){
        return Alert.alert("Add something");
      }
        setCourseGoals(currentGoals => [...courseGoals,
          {id: Math.random().toString(), value: goalTitle}]);
          setIsAddMode(false);
    };

    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) =>
          goal.id !== goalId);
      });
    };

    const cancelGoalAdditionHandler = () => {
      setIsAddMode(false);
    };

  return (
    <View style= {styles.screen}>
      <Button title='Add New Goal' onPress ={() => setIsAddMode(true)}/>
      <GoalInput visible ={isAddMode} onAddGoal = {addGoalHandler} 
      onCancel={cancelGoalAdditionHandler}/>
      <FlatList
      data={courseGoals}
      renderItem={itemData => 
        <GoalItem id = {itemData.item.id} 
        onDelete = {removeGoalHandler} 
        title={itemData.item.value}/>       
      }/>      
    </View>    
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 40,
        marginTop: 20
    },
});
