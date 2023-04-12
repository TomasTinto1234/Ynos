import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { colors, fonts } from "../utils/theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { BsArrowLeft } from "react-icons/bs";
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
// } from "react-native-fontaweasome";

const TitlePage = ({ text, route, white }) => {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate(route);
  };

  return (
    <View style={white ? styles.whiteContainer : styles.container}>
      <View style={styles.box}>
        <TouchableOpacity>
          {white ? (
            <View style={styles.backContainer}>
              {/* <FontAwesome icon={SolidIcons.FaArrow} /> */}
            </View>
          ) : (
            <View style={styles.backContainer}>
              {/* <FontAwesome icon={SolidIcons.FaArrow} /> */}
            </View>
          )}
        </TouchableOpacity>
        <Text
          onPress={handlePress}
          style={white ? styles.whiteText : styles.text}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

export default TitlePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumseagreen,
    height: hp(8),
    justifyContent: "flex-end",
    paddingHorizontal: 1,
    paddingVertical: 8,
    width: wp("100%"),
  },
  whiteContainer: {
    backgroundColor: "#fff",
    height: hp(8),
    justifyContent: "flex-end",
    paddingHorizontal: 1,
    paddingVertical: 8,
    width: wp("100%"),
    borderBottomWidth: 1,
    borderBottomColor: "#4B556355",
  },
  box: {
    flexDirection: "row",
    gap: 15,
  },
  text: {
    color: colors.secundary3,
    fontFamily: fonts.montserrat.medium,
    fontSize: 18,
    alignSelf: "center",
  },
  whiteText: {
    color: "#000",
    fontFamily: fonts.montserrat.medium,
    fontSize: 18,
    alignSelf: "center",
  },
  backContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
  },
  back: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  whiteBack: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});
