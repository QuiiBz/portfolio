import { useMemo } from 'react';
import { Terminal } from 'xterm';

const PROMPT = 'tom $ ';

const useTerminal = (): Terminal => {
  return useMemo(() => {
    const terminal = new Terminal({
      fontSize: 18,
    });

    let cmd = '';

    const prompt = () => terminal.write(`\r\n${PROMPT}`);

    const enter = (clear: boolean) => {
      if (clear) terminal.clear();

      cmd = '';
      prompt();
    };

    prompt();

    terminal.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;
      const { keyCode } = domEvent;

      if (keyCode === 13) {
        enter(cmd === 'clear');
      } else if (keyCode === 8) {
        terminal.write('\b \b');
      } else if (printable) {
        cmd += key;
        terminal.write(key);
      } else if (domEvent.ctrlKey && keyCode === 76) {
        enter(true);
      }
    });

    return terminal;
  }, []);
};

export default useTerminal;
