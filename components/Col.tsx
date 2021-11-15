import { styled } from "../stitches.config"

const Col = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    justify: {
      center: {
        justifyContent: 'center'
      },
      between: {
        justifyContent: 'space-between'
      }
    }
  },
  defaultVariants: {
    justify: 'center'
  }
})

export default Col
