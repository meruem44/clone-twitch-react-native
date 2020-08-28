import React from 'react';

import streamThumbNail from '../../images/stream_thumbnail.jpg';

import {
     List,
     StreamContainer,
     StreamThumbnail,
     StreamColumn,
     StramRow,
     StreamAvatar,
     StreamUsername,
     TagRow,
     TagView,
     TagText,
     StreamHeader,
     StreamDescription,
     StreamCategory
    } from './styles';

const StreamList: React.FC = () => {
    const StreamItem = () => (
        <StreamContainer>
            <StreamThumbnail source={streamThumbNail} />

            <StreamColumn>
                <StramRow>
                    <StreamHeader>
                        <StreamAvatar />
                        <StreamUsername numberOfLines={1} >leandro_moraes</StreamUsername>
                    </StreamHeader>

                    <StreamDescription numberOfLines={1} >
                        O Leandro é muito legal, é verdade :)
                    </StreamDescription>

                    <StreamCategory numberOfLines={1}>
                        Science & Technology
                    </StreamCategory>
                </StramRow>
                <TagRow>
                    <TagView>
                        <TagText>Postuguese</TagText>
                    </TagView>

                    <TagView>
                        <TagText>Mobile Developmente</TagText>
                    </TagView>
                </TagRow>
            </StreamColumn>
        </StreamContainer>
    )

  return (
      <List>
          <StreamItem />
          <StreamItem />
          <StreamItem />
          <StreamItem />
      </List>

  );
}

export default StreamList;