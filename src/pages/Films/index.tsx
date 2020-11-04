/* eslint-disable no-plusplus */
import React, { useEffect, useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTitle,
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

interface InputProps {
  name: string;
}

const Films: React.FC<InputProps> = ( {name}) => {

  const [nameTitle, setNameTitle] = useState("...");


  useEffect(() => {
    console.log(name);
    
    setNameTitle(name)    
  }, [name])

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
        <HeaderTitle>Bem vindo {nameTitle}</HeaderTitle>      
      </Header>
      <FilmsList
        keyExtractor={(filmListItem) => filmListItem.id}
        data={filmList}
        renderItem={({ item }) => (
          <FilmsContainer onPress={() => navigateMovieInfo(item.id)}>
            <FilmTitle>
              <Icon name="film" size={24} color="#999999" />
              <Text> {item.title} </Text>
            </FilmTitle>
            <FilmSynopsis>{item.opening_crawl}</FilmSynopsis>
            <FilmEp>Episodio: {item.episode_id}</FilmEp>
            <FilmDate>
              <Icon name="calendar" size={20} color="#999999" />
              <Text> {item.release_date} </Text>
            </FilmDate>
            <FilmDirector>Diretor: {item.director}</FilmDirector>
          </FilmsContainer>
        )}
      />
    </Container>
  );
};

export default Films;
