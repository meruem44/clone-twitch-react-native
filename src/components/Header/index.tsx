import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from 'styled-components';
import { GlobalContext } from '../../contexts/themeContext';

import { 
  Container,
   Avatar, 
   OnlineStatus,
   RigthSide,
   Button,
   Switch
  } from './styles';

import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const Header: React.FC = () => {
  const { colors, title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <Container>
          <StatusBar style={title === 'light' ? 'dark': 'light'} />

      <Avatar>
        <OnlineStatus />
      </Avatar>

      <Switch
        trackColor={{ false: colors.black, true: colors.gray }}
        onValueChange={toggleTheme}
        value={title === 'light'}
        thumbColor={!title === 'light' ? colors.red : colors.tag}

         />

      <RigthSide>
        <Button>
          <MaterialIcons 
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather 
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RigthSide>
    </Container>
  );
}

export default Header;