import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { darkTheme, styled } from '../stitches.config';

const StyledBackground = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: '$extraLight',
});

const StyledContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
});

const StyledCircle = styled('div', {
  position: 'absolute',
  width: '30vw',
  height: '30vw',
  borderRadius: '50%',
  opacity: 0.08,
  filter: 'blur(100px)',
  variants: {
    color: {
      green: {
        top: '15%',
        left: '45%',
        backgroundColor: 'greenyellow',
      },
      purple: {
        top: '40%',
        left: '20%',
        backgroundColor: 'purple',
        [`.${darkTheme} &`]: {
          opacity: '0.2',
        },
      },
      red: {
        top: '45%',
        left: '50%',
        backgroundColor: '$red',
      },
    },
  },
});

const StyledLayout = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRow: 'repeat(3, 1fr)',
  gridAutoRows: '1fr',
  'grid-gap': '0',
  '& > div': {
    border: '1px dashed $light',
    boxSizing: 'content-box',
    width: '100%',
    height: '100%',
  },
  '& > div > *:first-child': {
    padding: '4px',
    position: 'relative',
    zIndex: '99',
  },
});

export const DEFAULT_TITLE = 'Tom Lienard';

interface Props {
  title?: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, children }: Props) => {
  return (
    <StyledBackground>
      <Head>
        <title>{title || DEFAULT_TITLE}</title>
      </Head>
      <StyledContainer>
        <StyledCircle color="green" />
        <StyledCircle color="purple" />
        <StyledCircle color="red" />
      </StyledContainer>
      <StyledLayout>
        <div />
        <div>
          <Header />
        </div>
        <div />
        <div />
        <div>{children}</div>
        <div />
        <div />
        <div />
        <div />
      </StyledLayout>
    </StyledBackground>
  );
};

export default Layout;
