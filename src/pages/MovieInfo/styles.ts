import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MovieInfo } from './index';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: #ffe81f;
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const BackButton = styled(RectButton)``;

export const FilmsList = styled(FlatList as new () => FlatList<MovieInfo>)``;

export const FilmsContainer = styled.ScrollView`
  flex: 1;
  background: #222222;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  height: auto;
`;
export const FilmTitle = styled.Text`
  color: #ffe81f;
  font-size: 17px;
  margin: 5px 0;
  text-transform: uppercase;
  font-family: 'RobotoSlab-Regular';
`;
export const FilmSynopsis = styled.Text`
  color: #fff;
  align-self: center;
  margin-bottom: 10px;
`;
export const FilmDate = styled.Text`
  color: #fff;

  align-items: center;
  padding-top: 10px;
  margin-bottom: 10px;
`;
export const FilmEp = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;
export const FilmDirector = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;
export const FilmProducer = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;

export const PlanetsFilm = styled.View`
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const CaractersFilm = styled.View`
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const VehiclesFilm = styled.View`
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const EspeciesFilm = styled.View`
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const StarshipsFilm = styled.View`
  background-color: #333333;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Planets = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;
export const Characters = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;

export const Vehicles = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;
export const Starships = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;

export const Species = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin-bottom: 10px;
`;
