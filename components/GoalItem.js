import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
    return (

        <Pressable
            onPress={props.deleteGoalHandler.bind(this, props.id)}
            // android_ripple={{color:"#dddddd"}}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View >
        </Pressable>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor:"#b180f0",
    },
    goalText: {
        color: "white",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
        // borderColor:"red",
        // borderWidth:1,
    }
});
