import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './store'

export function StoreProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
