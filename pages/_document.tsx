import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={'ko'}>
        <Head>
          <meta charSet={'UTF-8'} />
          <meta charSet={'EUC-KR'} />
          <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
          <meta property={'og:type'} content={'website'} />
          <meta property={'og:title'} content={'15-beside-4team'} />

          <meta name={'format-detection'} content={'telephone=no'} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                            (function (w, d, s, l, i) {
                                w[l] = w[l] || [];
                                w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                                var f = d.getElementsByTagName(s)[0],
                                  j = d.createElement(s),
                                  dl = l != "dataLayer" ? "&l=" + l : "";
                                j.async = true;
                                j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                                f.parentNode.insertBefore(j, f);
                              })(window, document, "script", "dataLayer", "GTM-MXDS74F");`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag() {
                                    dataLayer.push(arguments);
                                }
                                gtag("js", new Date());
                    
                                gtag("config", "UA-153239188-4")`,
            }}
          />
          <script src="https://www.googletagmanager.com/gtag/js?id=UA-153239188-4" />
          <script>window.__accessToken=""</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
