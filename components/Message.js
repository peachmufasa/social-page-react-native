import { View, Text, StyleSheet } from "react-native";

const Message = ({ message }) => {
  return (
    <View>
      <Text style={localStyles.message}>{message}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  message: {
    color: "#FFF",
    fontSize: 20,
  },
});
export default Message;
