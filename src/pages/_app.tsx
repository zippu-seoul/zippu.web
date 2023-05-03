import React, { FC } from 'react';
import { globalStyles } from '@styles/Globalstyles';
import { ThemeProvider } from '@emotion/react';
import theme from '@styles/theme';

import { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  console.log('app<<<');
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
