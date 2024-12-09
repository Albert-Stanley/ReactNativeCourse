import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalsList}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsList: {
    padding: 8,
    fontSize: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#34495e",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
