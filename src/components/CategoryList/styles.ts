import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const List = styled.ScrollView.attrs({
    horizontal: true
})`
  padding: 8px 0 24px;
`;

export const CategoryContainer = styled.View`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
    width: 98px;
    height: 130px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${props => props.theme.colors.black};  
  font-family: roboto_700;
  font-size: 13.5px;
`;

export const RedCircle = styled.View`
  background: ${props => props.theme.colors.red};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${props => props.theme.colors.gray};
  font-family: roboto_500;
`;



    
    
    
    
    
    