import { useMemo } from "react";
import { FitAddon } from "xterm-addon-fit";
import useResize from "./useResize";

const useFit = (): { fit: () => void, fitAddon: FitAddon } => {
  const fitAddon = useMemo(() => new FitAddon(), []);
  const fit = () => fitAddon.fit()

  return {
    fit,
    fitAddon,
  }
}

export default useFit
