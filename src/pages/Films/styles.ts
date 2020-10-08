import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Films } from './index';

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
`;
export const UserName = styled.Text`
  color: #ffe81f;
  font-family: 'RobotoSlab-Medium';
`;
export const FilmsList = styled(FlatList as new () => FlatList<Films>)``;

export const FilmsContainer = styled(RectButton)`
  flex: 1;
  background: #222222;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
`;
export const FilmTitle = styled.Text`
  color: #ffe81f;
  font-size: 17px;
  margin: 5px 0;
`;
export const FilmSynopsis = styled.Text`
  color: #fff;
  align-self: center;
`;
export const FilmDate = styled.Text`
  color: #fff;

  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;
export const FilmEp = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
  margin: 5px 0;
`;
export const FilmDirector = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  color: #ffe81f;
`;
