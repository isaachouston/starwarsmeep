/* eslint-disable no-plusplus */
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

export interface DataFilm {
  id: string;
  director: string;
  created: string;
  title: string;
  opening_crawl: string;
  episode_id: string;
  release_date: Date;
}

const Films: React.FC = () => {
  const [filmList, setFilmList] = useState<DataFilm[]>([]);
  const { navigate } = useNavigation();

  async function GetFilms(): Promise<void> {
    const results = await api.get('/films').then((response) => {
      return response.data.results;
    });

    const arrayData = [];

    for (let i = 0; i < results.length; i++) {
      const id = i + 1;
      const data = {
        id: id.toString(),
        director: results[i].director,
        created: results[i].created,
        title: results[i].title,
        opening_crawl: results[i].opening_crawl,
        episode_id: results[i].episode_id,
        release_date: results[i].release_date,
      };
      arrayData.push(data);
    }

    setFilmList(arrayData);
  }

  useEffect(() => {
    GetFilms();
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
        keyExtractor={(filmListItem) => filmListItem.id}
        data={filmList}
        renderItem={({ item }) => (
          <FilmsContainer onPress={() => navigateMovieInfo(item.id)}>
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
