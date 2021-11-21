import { ComponentProps, FC, ReactNode } from 'react';
import { styled } from '../stitches.config';

const StyledTypography = styled('p', {
  margin: 0,
  fontSize: '14px',
  color: '$gray',
  verticalAlign: 'middle',
  variants: {
    href: {
      true: {
        cursor: 'pointer',
      },
    },
    important: {
      true: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '$black',
      },
    },
  },
});

type Props = {
  children: ReactNode;
} & ComponentProps<typeof StyledTypography>;

const Typography: FC<Props> = ({ children, ...props }: Props) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
