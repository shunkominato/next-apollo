import type { AppProps } from 'next/app';

import '../styles/globals.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import { UiProvider } from '../lib/providers/UiProvider';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  // useCsrfToken();
  return (
    <ApolloProvider client={client}>
      <UiProvider>
        <div className="bg-slate-100">
          <Component {...pageProps} />
        </div>
      </UiProvider>
    </ApolloProvider>
  );
}

export default MyApp;
