import { createContext, FC, useEffect, useState } from "react";
import { styled } from "../stitches.config";

const StyledINS = styled('ins', {
  width: '16px',
  height: '16px',
  border: '1px solid $black',
  borderRadius: '50%',
  position: 'absolute',
  zIndex: 999,
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  transition: 'width ease-in .1s, height ease-in .1s',
  variants: {
    cursor: {
      normal: {},
      hover: {
        zIndex: 0,
        width: '32px',
        height: '32px',
      }
    }
  },
  defaultVariants: {
    cursor: 'normal',
  }
})

interface Context {
  cursor: CursorType
  setCursor: (cursor: CursorType) => void
}

type CursorType = 'normal' | 'hover'

export const CursorContext = createContext<Context>({
  cursor: 'normal',
  setCursor: () => null,
})

const CursorProvider: FC = ({ children }) => {
  const [cursor, setCursor] = useState<CursorType>('normal')
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = event => {
      const { pageX: x, pageY: y } = event;

      if (mouse.x !== x || mouse.y !== y) {
        setMouse({ x, y });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, [])

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      <StyledINS cursor={cursor} css={{
        top: `${mouse.y}px`,
        left: `${mouse.x}px`,
      }} />
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider
