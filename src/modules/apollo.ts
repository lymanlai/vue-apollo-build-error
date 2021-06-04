// https://v4.apollo.vuejs.org/guide-composable/setup.html#_1-install-vue-apollo-composable
import { UserModule } from '~/types'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'

import { DefaultApolloClient } from '@vue/apollo-composable'

export const install: UserModule = ({ app, isClient }) => {
  if (!isClient) return

  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'
  })

  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache
  })

  app.provide(DefaultApolloClient, apolloClient)
}
