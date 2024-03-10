import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import Avatar from "./components/Avatar";
import AppHeader from "./components/AppHeader";
import Message from "./components/Message";

export default function App() {
  const [msg, setMsg] = useState("");

  const handleMessageDisplay = (message) => {
    setMsg(message);
  };

  return (
    <View style={styles.container}>
      <Avatar
        styles={avatarStyles}
        photoUrl="https://sun9-38.userapi.com/impg/dFjjiBJS9P0-7d4XOOFzGuQOsFBxbXlhlgHoog/BCNhTQdnTDY.jpg?size=1620x2160&quality=95&sign=6b734c3f3874d18a731dd2321c04d5e6&type=album
        "
      />
      <AppHeader
        userName="Александра Кочкарь"
        handleMessageDisplay={handleMessageDisplay}
        styles={headerStyles}
      />
      <Message message={msg} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38373A",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

const avatarStyles = StyleSheet.create({
  avatar: {
    width: Dimensions.get("window").width,
    height: 450,
  },
});

const headerStyles = StyleSheet.create({
  header: {
    height: 100,
  },
});
