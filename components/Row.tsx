import { styled } from '../stitches.config';

const Row = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    justify: {
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },
  },
  defaultVariants: {
    justify: 'center',
    align: 'center',
  },
});

export default Row;
