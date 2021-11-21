import { CSSProperties, FC, ReactNode, useContext } from 'react';
import Link from 'next/link';
import Icon from './Icon';
import { styled } from '../stitches.config';
import { CursorContext } from '../lib/CursorContext';

const StyledLink = styled('a', {
  background: '-webkit-linear-gradient(var(--from), var(--to))',
  backgroundClip: 'text',
  '-webkit-text-fill-color': 'transparent',
  color: 'var(--from)',
  fontWeight: 'bold',
  userSelect: 'none',
  transition: '.3s ease',
  cursor: 'none',
  '&:hover': {
    filter: 'drop-shadow(0 1px 12px var(--from))',
  },
  '& svg': {
    verticalAlign: 'middle',
    margin: '0 4px',
  },
});

type Color = {
  from: string;
  to: string;
};

interface Props {
  icon?: ReactNode;
  color: Color;
  href: string;
  children: ReactNode;
}

const Hoverable: FC<Props> = ({ icon, color: { from, to }, href, children }: Props) => {
  const { setCursor } = useContext(CursorContext);

  return (
    <Link href={href} passHref>
      <StyledLink
        target="_blank"
        style={{ '--from': from, '--to': to } as CSSProperties}
        onMouseOver={() => setCursor('link')}
        onMouseLeave={() => setCursor('normal')}
      >
        {icon ? <Icon css={{ color: from }}>{icon}</Icon> : null}
        {children}
      </StyledLink>
    </Link>
  );
};

export default Hoverable;
