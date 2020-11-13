/* eslint-disable no-plusplus */
import React, { useEffect, useState, useCallback } from 'react';
import {bannerFilms} from '../bannerFilmes';
import Icon from 'react-native-vector-icons/Feather';
import { Image, Text } from 'react-native';

import banner_1 from '../../assets/1filme.jpg'
import banner_2 from '../../assets/2filme.jpg'

import {
  NavigationAction,
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTitle,
  FilmsList,
  FilmsContainer,
  FilmTitle,
  FilmDirector,  
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
  const [nameTitle, setNameTitle] = useState('...');

  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      const parametro = params as { inputName?: string };
      setNameTitle(parametro.inputName ?? '');
    }
  }, []);
 

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
            <Image source={bannerFilms[parseInt(item.episode_id)-1]} style={{ width: "100%", height: 600, borderRadius: 5 }} />
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
