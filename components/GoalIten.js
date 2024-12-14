import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalsList}>
      <Pressable
        android_ripple={{ color: "#ffffff" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => (pressed ? styles.pressItem : null)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalsList: {
    fontSize: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "#311b6b",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
