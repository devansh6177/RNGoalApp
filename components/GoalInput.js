import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoalText);
        setEnteredGoalText('');
        props.modalHandler();
    }

    return (
        <Modal visible={props.modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image  style={styles.image} source={require("../assets/images/goal.png")}/>
                <TextInput
                    placeholder="Your course goal!"
                    placeholderTextColor="#120438"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" /></View>
                    <View style={styles.button}><Button title="Cancel" onPress={props.modalHandler} color="#f31282" /></View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding:20,
        backgroundColor:"#311b6b"
        // borderWidth: 1,
        // borderColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        color:"#120438",
        padding: 16,
        width:"100%",
        marginBottom:15,
        borderRadius:6
        
    },
    buttonContainer: {
        flexDirection: "row"
    },
    button:{
        marginHorizontal:8,
        width:"47%"
    },
    image:{
        width:100,
        height:100,
        margin:20
    }
});
