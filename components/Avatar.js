import { View, StyleSheet, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Avatar = ({ styles, photoUrl }) => {
  return (
    <View style={[styles.avatar, localStyles.avatar]}>
      <Image
        source={{
          uri: photoUrl,
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <LinearGradient
        colors={["transparent", "#38373A"]}
        style={localStyles.gradient}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  avatar: {
    position: "relative",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default Avatar;
