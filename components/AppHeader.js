import { View, Text, StyleSheet } from "react-native";
import HeaderButton from "./HeaderButton";
import Message from "./Message";

const AppHeader = ({ userName, handleMessageDisplay, styles }) => {
  return (
    <View style={[localStyles.container, styles.header]}>
      <View>
        <Text style={localStyles.userName}>{userName}</Text>
      </View>
      <View style={localStyles.buttons}>
        <HeaderButton
          buttonIcon="add"
          handleMessageDisplay={handleMessageDisplay}
          message="Запрос в друзья отправлен"
        />
        <HeaderButton
          buttonIcon="envelope"
          handleMessageDisplay={handleMessageDisplay}
          message="alexandrakochkar@gmail.com"
        />
        <HeaderButton
          buttonIcon="github"
          handleMessageDisplay={handleMessageDisplay}
          message="https://github.com/peachmufasa"
        />
        <HeaderButton
          buttonIcon="telegram"
          handleMessageDisplay={handleMessageDisplay}
          message="@peachmufasa"
        />
        <HeaderButton
          buttonIcon="linkedin-in"
          handleMessageDisplay={handleMessageDisplay}
          message="Какая-то ссылка"
        />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    marginBottom: 50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  userName: {
    width: "100%",
    marginBottom: 15,
    textAlign: "center",
    fontSize: 35,
    color: "#fff",
    fontWeight: "700",
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
});

export default AppHeader;
