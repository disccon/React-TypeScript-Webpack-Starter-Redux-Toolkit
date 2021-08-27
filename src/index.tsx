import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { HelmetProvider } from 'react-helmet-async'
import { configureStore, history } from './state/_store/configureStore'
import Root from './components/Root/Root'

import 'antd/dist/antd.less'

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HelmetProvider>
        <Root />
      </HelmetProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
