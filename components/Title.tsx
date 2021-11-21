import { FC } from 'react';
import { keyframes, styled } from '../stitches.config';

const show = keyframes({
  '0%': {
    opacity: 0,
  },
  '5%': {
    opacity: 0.5,
  },
  '10%': {
    opacity: 0,
  },
  '20%': {
    opacity: 0.5,
  },
  '25%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const StyledTitle = styled('h1', {
  fontWeight: 'bold',
  fontSize: '48px',
  color: '$black',
  animation: `${show} 1s`,
});

const Title: FC = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
