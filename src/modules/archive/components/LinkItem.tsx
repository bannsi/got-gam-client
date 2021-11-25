import { LinkPreview } from '@dhaiwat10/react-link-preview';
import React from 'react';
import styled from 'styled-components';

const LinkItem = () => {
  return (
    <Container>
      <LinkPreview
        borderRadius="8px"
        imageHeight="165px"
        margin="8px 0"
        width="382px"
        borderColor="#E1E1E1"
        url="https://junistory.blogspot.com/2017/06/css-ellipsis.html"
      />
    </Container>
  );
};

export default LinkItem;

const Container = styled.div`
  position: relative;
  display: flex;

  .Container {
    display: flex;
    flex: 1;
  }
  .LowerContainer {
    padding: 8px 16px;
  }
  .Title {
    font-size: 14px;
    color: #000000;
    margin-bottom: 8px;
    font-weight: 400;
  }
  .SiteDetails {
    font-size: 10px;
    color: #999999 !important;
  }
`;
