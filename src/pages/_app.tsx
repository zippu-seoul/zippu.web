import React, { FC } from 'react';
import GlobalStyle from '@styles/Globalstyles';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
