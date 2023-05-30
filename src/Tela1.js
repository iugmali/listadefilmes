import React from 'react';
import { View, Dimensions, StyleSheet } from "react-native";
import FlatComponent from './components/FlatComponent';
import Carousel from 'react-native-reanimated-carousel';

const filmes = [
  {
    key: '0',
    filme: 'SCOOBY! O filme',
    ano: 2020,
    estilo: 'Comédia',
    direcao: 'Tony Cervone',
    image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
    descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
  {
    key: '1',
    filme: "The Shawshank Redemption",
    ano: 1994,
    estilo: "Drama",
    direcao: "Frank Darabont",
    image: "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_.jpg",
    descricao: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    key: '2',
    filme: "The Godfather",
    ano: 1972,
    estilo: "Crime, Drama",
    direcao: "Francis Ford Coppola",
    image: "https://m.media-amazon.com/images/M/MV5BZTFiODA5NWEtM2FhNC00MWEzLTlkYjgtMWMwNzBhYzlkY2U3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    descricao: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    key: '3',
    filme: "The Dark Knight",
    ano: 2008,
    estilo: "Action, Crime, Drama",
    direcao: "Christopher Nolan",
    image: "https://m.media-amazon.com/images/M/MV5BOTAxNzI0NDE1NF5BMl5BanBnXkFtZTcwNjczMTk2Mw@@._V1_.jpg",
    descricao: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  }
  ]

const Tela1 = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={filmes}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => <FlatComponent data={item} />}
        />
    </View>
  );
}

export default Tela1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center"
  }
})
