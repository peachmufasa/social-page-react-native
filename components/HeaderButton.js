import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const HeaderButton = ({ buttonIcon, message, handleMessageDisplay }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => handleMessageDisplay(message)}
    >
      <FontAwesome6 name={buttonIcon} size={30} color="#5992FF" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#5992FF",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
});

export default HeaderButton;
