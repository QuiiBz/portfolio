import { createContext, FC, useEffect, useState } from 'react';
import { styled } from '../stitches.config';

const StyledINS = styled('ins', {
  width: '16px',
  height: '16px',
  border: '1px solid $gray',
  borderRadius: '50%',
  position: 'absolute',
  zIndex: 999,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  transition: 'width ease-in .1s, height ease-in .1s',
  '&:before': {
    content: '',
    display: 'block',
    position: 'relative',
    width: '3px',
    height: '3px',
    background: '$black',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity ease-in .1s',
  },
  variants: {
    cursor: {
      normal: {},
      hover: {
        zIndex: 0,
        borderColor: '$black',
        width: '32px',
        height: '32px',
        '&:before': {
          opacity: 0,
        },
      },
      link: {
        width: 0,
        height: 0,
        cursor: 'alias',
        '&:before': {
          content: '🡵',
          display: 'inline-block',
          width: 'auto',
          height: 'auto',
          background: 'transparent',
          transform: 'translate(-10%, -70%)',
        },
      },
    },
  },
  defaultVariants: {
    cursor: 'normal',
  },
});

interface Context {
  cursor: CursorType;
  setCursor: (cursor: CursorType) => void;
}

type CursorType = 'normal' | 'hover' | 'link';

export const CursorContext = createContext<Context>({
  cursor: 'normal',
  setCursor: () => null,
});

const CursorProvider: FC = ({ children }) => {
  const [cursor, setCursor] = useState<CursorType>('normal');
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMouseMove = (event: MouseEvent) => {
    const { pageX: x, pageY: y } = event;

    if (mouse.x !== x || mouse.y !== y) {
      setMouse({ x, y });
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      <StyledINS
        cursor={cursor}
        style={{
          top: `${mouse.y}px`,
          left: `${mouse.x}px`,
        }}
      />
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
