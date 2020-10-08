import React, { useEffect, useState } from 'react';

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
  episode_id: number;
  release_date: Date;
}

const Films: React.FC = () => {
  const [films, setFilms] = useState<Films[]>([]);

  useEffect(() => {
    async function loadFilms(): Promise<void> {
      const response = await api.get('/films');

      const filmsList = response.data.results;
      console.log(filmsList);

      setFilms(filmsList);
      console.log(setFilms);
    }

    loadFilms();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo Padawan, {'\n'}
          <UserName>Isaac</UserName>
        </HeaderTitle>
      </Header>
      <FilmsList
        data={films}
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

export default Films;
