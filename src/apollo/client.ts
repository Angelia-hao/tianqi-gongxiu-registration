import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const projectExId =
  import.meta.env.VITE_ZION_PROJECT_EX_ID ?? 'z7Bx4AP46EY';

export function graphqlHttpUri(): string {
  return `https://zion-app.functorz.com/zero/${projectExId}/api/graphql-v2`;
}

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: graphqlHttpUri() }),
  cache: new InMemoryCache(),
});
