import { FC, ReactNode, useContext } from 'react';
import Row from './Row';
import Icon from './Icon';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '../stitches.config';
import { useTheme } from 'next-themes';
import { CursorContext } from '../lib/CursorContext';

const StyledLink = styled('a', {
  margin: '0 16px 0 0',
  fontSize: '14px',
  color: '$gray',
  verticalAlign: 'middle',
  userSelect: 'none',
  transition: '.3s ease',
  '&:hover': {
    color: '$black',
    filter: 'drop-shadow(0 1px 12px var(--colors-red))',
  },
  variants: {
    isActive: {
      true: {
        color: '$black',
        filter: 'drop-shadow(0 1px 12px var(--colors-red))',
      },
    },
  },
});

interface Props {
  href: string;
  children: ReactNode;
}

const Link: FC<Props> = ({ href, children }: Props) => {
  const { asPath } = useRouter();
  const { setCursor } = useContext(CursorContext);

  const isActive = asPath === href;

  return (
    <NextLink href={href}>
      <StyledLink
        as="a"
        isActive={isActive}
        onMouseOver={() => setCursor('hover')}
        onMouseLeave={() => setCursor('normal')}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
};

const Header: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Row justify="between" align="center" css={{ width: '100%' }}>
      <Row justify="center">
        <Link href="/">me</Link>
        <Link href="/work">work</Link>
        <Link href="/projects">projects</Link>
      </Row>
      <Icon big css={{ cursor: 'pointer' }} onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
        {resolvedTheme === 'light' ? <SunIcon /> : <MoonIcon />}
      </Icon>
    </Row>
  );
};

export default Header;
