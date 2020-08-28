import React, { useMemo } from 'react';
import { View, FlatList } from 'react-native';

import { Wrapper, Container, Main } from './styles';

import Header from '../../components/Header/index';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
};

const Fallowing: React.FC = () => {

  const { data, indices } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>
      },
      {
        key: 'FALLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true
      },
      {
        key: 'C1',
        render: () => <CategoryList />
      },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true
      },
      {
        key: 'C2',
        render: () => <StreamList />
      },
      {
        key: 'CONTINUE_WATHING',
        render: () => <Title>Continue Channels</Title>,
        isTitle: true
      },
      {
        key: 'C3',
        render: () =>  <StreamList />
      },
      {
        key: 'OFFLINE_CHANNELS',
        render: () =>  <Title>Offilne Channels</Title>,
        isTitle: true
      },
      {
        key: 'C4',
        render: () => <ChannelList />
      }
    ]

    const indices: Number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices
    }
  }, []);

  return (
      <Wrapper>
          <Container>
              <Header />
            <Main>
              <FlatList<Item> 
                data={data}
                renderItem={({ item }) => item.render()}
                keyExtractor={item => item.key}
                stickyHeaderIndices={indices}
                // Refresh

                onRefresh={() => {}}
                refreshing={false}
              />
            </Main>
          </Container>
      </Wrapper>
  );
}

export default Fallowing;