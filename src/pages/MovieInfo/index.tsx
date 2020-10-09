import React, { useCallback, useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  FilmsList,
  FilmsContainer,
  FilmTitle,
  FilmSynopsis,
  FilmEp,
  FilmDate,
  FilmDirector,
  FilmProducer,
  Planets,
  Characters,
  Vehicles,
  Species,
  Starships,
  PlanetsFilm,
  CaractersFilm,
  VehiclesFilm,
  EspeciesFilm,
  StarshipsFilm,
} from './styles';

export interface MovieInfo {
  director: string;
  created: string;
  title: string;
  opening_crawl: string;
  episode_id: number;
  release_date: Date;
  producer: string;
  characters: [];
  vehicles: [];
  planets: [];
  species: [];
  starships: [];
}

const MovieInfo: React.FC = () => {
  const [movieInfo, setMovieInfo] = useState<MovieInfo>({});
  const route = useRoute();
  const { filmId } = route.params;

  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    async function loadFilm(): Promise<void> {
      const response = await api.get(`/films/${filmId}`);

      const movie = response.data;

      setMovieInfo(movie);
    }

    loadFilm();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999999" />
        </BackButton>
        <HeaderTitle>Informações do filme</HeaderTitle>
      </Header>
      <FilmsContainer>
        <FilmTitle>
          <Icon name="film" size={24} color="#999999" />
          <Text> {movieInfo.title} </Text>
        </FilmTitle>
        <FilmSynopsis>{movieInfo.opening_crawl}</FilmSynopsis>
        <FilmEp>Episódio: {movieInfo.episode_id}</FilmEp>
        <FilmDate>
          <Icon name="calendar" size={20} color="#999999" />
          <Text> {movieInfo.release_date} </Text>
        </FilmDate>
        <FilmDirector>Diretor: {movieInfo.director}</FilmDirector>
        <FilmProducer>Produtor: {movieInfo.producer}</FilmProducer>

        <PlanetsFilm>
          <HeaderTitle>Personagens: {'\n'}</HeaderTitle>
          <FilmsList
            keyExtractor={(filmListItem) => filmListItem.id}
            data={movieInfo.characters}
            renderItem={({ item }) => <Characters>{item}</Characters>}
          />
        </PlanetsFilm>

        <CaractersFilm>
          <HeaderTitle>Planetas: {'\n'}</HeaderTitle>
          <FilmsList
            keyExtractor={(filmListItem) => filmListItem.id}
            data={movieInfo.planets}
            renderItem={({ item }) => <Planets>{item}</Planets>}
          />
        </CaractersFilm>

        <EspeciesFilm>
          <HeaderTitle>Especíes: {'\n'}</HeaderTitle>
          <FilmsList
            keyExtractor={(filmListItem) => filmListItem.id}
            data={movieInfo.species}
            renderItem={({ item }) => <Species>{item}</Species>}
          />
        </EspeciesFilm>

        <StarshipsFilm>
          <HeaderTitle>Naves Estelares: {'\n'}</HeaderTitle>
          <FilmsList
            keyExtractor={(filmListItem) => filmListItem.id}
            data={movieInfo.starships}
            renderItem={({ item }) => <Starships>{item}</Starships>}
          />
        </StarshipsFilm>

        <VehiclesFilm>
          <HeaderTitle>Naves Estelares: {'\n'}</HeaderTitle>
          <FilmsList
            keyExtractor={(filmListItem) => filmListItem.id}
            data={movieInfo.vehicles}
            renderItem={({ item }) => <Vehicles>{item}</Vehicles>}
          />
        </VehiclesFilm>
      </FilmsContainer>
    </Container>
  );
};

export default MovieInfo;
