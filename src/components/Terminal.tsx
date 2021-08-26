import React, { FC, useEffect, useRef } from 'react'
import { WebglAddon } from 'xterm-addon-webgl'
import 'xterm/css/xterm.css'
import useFit from '../hooks/useFit'
import useResize from '../hooks/useResize'
import useTerminal from '../hooks/useTerminal'

const Terminal: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { fit, fitAddon } = useFit()
  const terminal = useTerminal()

  useResize(fit)

  useEffect(() => {
    if (!ref.current)
      return

    terminal.loadAddon(fitAddon)
    terminal.open(ref.current)
    terminal.loadAddon(new WebglAddon())
    terminal.focus()

    fit()

    return () => terminal.dispose()
  }, [ref])

  return (
    <main className='wrapper' ref={ref} />
  )
}

export default Terminal
