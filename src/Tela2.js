import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";


const Tela2 = () => {

  const route = useRoute();

  const data = route.params.data;

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
      <Text>FILME: {data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <Text>DESCRIÇÃO: {data.descricao}</Text>
    </View>
  );
}

export default Tela2;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 150,
    height: 300,
  }
})
