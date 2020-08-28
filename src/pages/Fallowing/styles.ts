import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants'

import colors from '../../styles/colors';

const statusBarHeigth =
Platform.OS === 'android' ? Constants.statusBarHeight: 0;

export const Wrapper = styled.SafeAreaView`
    background: ${props => props.theme.colors.primary};
    flex: 1;
    padding-top: ${statusBarHeigth + 'px'};
`;

export const Container = styled.View`
    padding-left: 14px;
`;

export const Main = styled.View`
    
`;