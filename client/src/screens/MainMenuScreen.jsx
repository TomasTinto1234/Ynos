import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// components

export const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
     <Text>probando</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    backgroundColor: "white",
    gap: 15
  },
  logo: {
    width: wp("50.00%"),
    height: hp("30.00%"),
  },
});
