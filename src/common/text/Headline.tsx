import styled from 'styled-components';

interface HeadlineProps {
  type: '2' | '3' | '4' | '5' | '6';
}

const HeadlineMapper = {
  '2': { weight: 400, size: '58px' },
  '3': { weight: 400, size: '47px' },
  '4': { weight: 400, size: '33px' },
  '5': { weight: 700, size: '23px' },
  '6': { weight: 500, size: '19px' }
};

export const Headline = styled.div<HeadlineProps>`
  font-size: ${(props) => HeadlineMapper[props.type].size};
  font-weight: ${(props) => HeadlineMapper[props.type].weight};
`;
