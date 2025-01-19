import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

//components
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  const modalHandler = () => {
    setModalIsVisible((oldValue) => !oldValue)
  }

  const addGoalHandler = (enteredGoalText) => {

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return (
        currentCourseGoals.filter((goal) => goal.id !== id)
      )
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <View style={styles.newGoalButton}>
        <Button title="Add New Goal" color="#b180f0" onPress={modalHandler} />
      </View>
      <GoalInput addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} modalHandler={modalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} id={itemData.item.id} deleteGoalHandler={deleteGoalHandler} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    backgroundColor:"#1e085a"
  },
  goalsContainer: {
    // borderWidth: 1,
    // borderColor: "#cccccc",
    flex: 1,
    paddingTop:8
  },
  newGoalButton: {
    paddingBottom: 18,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1
  }
});
