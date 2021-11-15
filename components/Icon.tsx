import { ComponentProps, FC, ReactNode, useContext } from "react";
import Link from 'next/link'
import { styled } from "../stitches.config";
import { CursorContext } from "../lib/CursorContext";

const StyledIcon = styled('span', {
  width: '16px',
  height: '16px',
  color: '$gray',
  fill: 'CurrentColor',
  transition: '.3s ease',
  cursor: 'none !important',
  '& svg': {
    width: '20px',
    height: '20px',
  },
  variants: {
    link: {
      true: {
        '&:hover': {
          color: '$black'
        }
      }
    },
    big: {
      true: {
        width: '20px',
        height: '20px',
        '& svg': {
          width: '20px',
          height: '20px'
        }
      }
    }
  },
  defaultVariants: {
    link: false,
    big: false,
  }
})

type Props = {
  href?: string;
  children: ReactNode
} & ComponentProps<typeof StyledIcon>

const Icon: FC<Props> = ({ href, children, ...props }: Props) => {
  const { setCursor } = useContext(CursorContext)

  if (href) {
    return (
      <Link href={href} passHref>
        <StyledIcon as="a" target="_blank" link {...props} onMouseOver={() => setCursor('hover')} onMouseLeave={() => setCursor('normal')}>{children}</StyledIcon>
      </Link>
    )
  }

  if (props.onClick) {
    return (
      <StyledIcon link {...props} onMouseOver={() => setCursor('hover')} onMouseLeave={() => setCursor('normal')}>{children}</StyledIcon>
    )
  }

  return (
    <StyledIcon {...props}>
      {children}
    </StyledIcon>
  )
}

export default Icon
