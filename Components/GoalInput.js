import React, { useState} from "react";
import {View, TextInput, Button, StyleSheet, Modal, Alert} from "react-native"
import { shadowColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import App from "../App";

const GoalInput = props => {
    const  [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return(
     <Modal 
     visible = {props.visible} 
     animationType = "slide"
     onRequestClose={ () => {
         Alert.alert("Modal has been closed");}}> 
        <View style= {styles.root}>
            <View style = { styles.modalView}>
            <TextInput 
            placeholder='Course Goal'
            style= {styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}/>
            <View style = { styles.modalButtons}>
                <View style = { styles.Btn}>
                    <Button title = "CANCEL" color= "red" onPress={props.onCancel}/> 
                    </View>
                <View style = { styles.Btn}>
                    <Button title='Add' onPress={addGoalHandler}/>
                    </View>            
            </View>            
            </View>
         </View>
       </Modal>   
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderColor: 'black',
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10, 
        width: '100%' },
    root: { 
        flex: 1,
        justifyContent: "center", 
    
        marginTop: 22
    },  
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width:0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        },
    modalButtons: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Btn: {
        width: '40%'
    }   
    });
export default GoalInput;