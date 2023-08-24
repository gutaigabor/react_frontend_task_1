import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  outerBoxBg: '#f9f9fe',
  emissionBg: '#1f2837',
  defaultBg: '#555555'
}

const styles = {
  global: () => ({
    body: {
      color: 'default',
      bg: '#f1f1f1',
    },
  }),
}

const theme = extendTheme({ config, colors, styles });

export default theme;