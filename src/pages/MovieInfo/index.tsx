import React, { useCallback, useEffect, useState } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
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
} from './styles';

export interface MovieInfo {
  director: string;
  created: string;
  title: string;
  opening_crawl: string;
  episode_id: number;
  release_date: Date;
}

const MovieInfo: React.FC = () => {
  const route = useRoute();
  const { filmId } = route.params;
  const { goBack } = useNavigation();

  const [movieInfo, setMovieInfo] = useState<MovieInfo[]>([]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    async function loadFilms(): Promise<void> {
      const response = await api.get(`/films${route}`);
      console.log(response);

      const movieInfoList = response.data.results;

      setMovieInfo(movieInfoList);
    }

    loadFilms();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999999" />
        </BackButton>
        <HeaderTitle>Informações do filme</HeaderTitle>
      </Header>

      <FilmsList
        data={movieInfo}
        keyExtractor={(film) => film.created}
        renderItem={({ item }) => (
          <FilmsContainer onPress={() => {}}>
            <FilmTitle>{item.title}</FilmTitle>
            <FilmSynopsis>{item.opening_crawl}</FilmSynopsis>
            <FilmEp>{item.episode_id}</FilmEp>
            <FilmDate>{item.release_date}</FilmDate>
            <FilmDirector>{item.director}</FilmDirector>
          </FilmsContainer>
        )}
      />
    </Container>
  );
};

export default MovieInfo;
