import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors, fonts } from '../utils/theme';

const CategoryItem = ({ item, index }) => {

  return (
    <TouchableOpacity key={item.id} style={styles.container}>
      <Image style={styles.img} source={{ uri: item.img }} />
      <Text style={
        index % 2 === 0
          ? styles.greenText
          : styles.orangeText
      }>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',

  },
  greenText: {
    color: colors.secundary5,
    fontFamily: fonts.montserrat.medium,
  },
  orangeText: {
    color: colors.mediumseagreen,
    fontFamily: fonts.montserrat.medium,

  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  }
});

export default CategoryItem;
