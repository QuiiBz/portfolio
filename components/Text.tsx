import { ComponentProps, FC, ReactNode } from "react";
import { styled } from "../stitches.config";

const StyledText = styled('p', {
  margin: 0,
  fontSize: '14px',
  color: '$gray',
  verticalAlign: 'middle',
  variants: {
    href: {
      true: {
        cursor: 'pointer',
      }
    }
  }
})

type Props = {
  children: ReactNode
} & ComponentProps<typeof StyledText>

const Text: FC<Props> = ({ children, ...props }: Props) => {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}

export default Text
