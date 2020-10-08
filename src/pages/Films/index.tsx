import React, { useEffect, useState, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  FilmsList,
  FilmsContainer,
  FilmTitle,
  FilmDirector,
  FilmSynopsis,
  FilmEp,
  FilmDate,
} from './styles';

import api from '../../services/api';

export interface Films {
  director: string;
  created: string;
  title: string;
  opening_crawl: string;
  episode_id: string;
  release_date: Date;
}

const Films: React.FC = () => {
  const [films, setFilms] = useState<Films[]>([]);
  const { navigate } = useNavigation();

  useEffect(() => {
    async function loadFilms(): Promise<void> {
      const response = await api.get('/films');

      const filmsList = response.data.results;

      setFilms(filmsList);
    }

    loadFilms();
  }, []);

  const navigateMovieInfo = useCallback(
    (filmId: string) => {
      navigate('MovieInfo', { filmId });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo Padawan, {'\n'}
          <UserName>Meep</UserName>
        </HeaderTitle>
      </Header>
      <FilmsList
        data={films}
        keyExtractor={(film) => Number(film.episode_id)}
        renderItem={({ item }) => (
          <FilmsContainer onPress={() => navigateMovieInfo(item.created)}>
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

export default Films;
