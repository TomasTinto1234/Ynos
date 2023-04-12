import { View, StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// components
import TitlePage from "../components/TitlePage";
import WelcomeUser from "../components/WelcomeUser";
import Search from "../components/Search";
import SpecialYnos from "../components/SpecialYnos";
import Categories from "../components/Categories";
import NearMe from "../components/NearMe";
import Navbar from "../components/NavBar";

 const MainMenuScreen = () => {
  return (
    <View style={styles.container}>
    <TitlePage text={'Home'} white={false} route={'/'}/>
    <ScrollView contentContainerStyle={styles.scroll}>
    <WelcomeUser/>
    <Search/>
    <Categories/>
    <NearMe/>
    <SpecialYnos/>
      </ScrollView>
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100.00%"),
    height: hp("100.00%"),
    alignItems: "center",
    backgroundColor: "white",
    gap: 15,

  },
  scroll: {
    gap: 15,
    alignItems: 'center'
  },
});

export default MainMenuScreen
