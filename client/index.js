import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from './components/App'
import reducers from './reducers'
import Waiting from './components/Waiting'

OfflinePluginRuntime.install()

const persistConfig = {
  key: 'authType',
  storage: storage,
  blacklist: ['error', 'waiting']
}

const pReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Waiting />}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
