import type { AppProps } from 'next/app';

import '../styles/globals.css';
import {
  Client,
  Provider,
  cacheExchange,
  fetchExchange,
  debugExchange,
} from 'urql';
import { UiProvider } from '../lib/providers/UiProvider';

const client = new Client({
  url: 'http://127.0.0.1:8080/query',
  exchanges: [cacheExchange, fetchExchange, debugExchange],
});

function MyApp({ Component, pageProps }: AppProps) {
  // useCsrfToken();
  return (
    <Provider value={client}>
      <UiProvider>
        <div className="bg-slate-100">
          <Component {...pageProps} />
        </div>
      </UiProvider>
    </Provider>
  );
}

export default MyApp;
