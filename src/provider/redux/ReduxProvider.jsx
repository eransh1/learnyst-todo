'use client'

import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import ErrorBoundary from '@/utils/ErrorBoundary'

const ReduxProvider = ({children}) => {
  return (
    <ErrorBoundary>
    <Provider store={store}>
        {children}
    </Provider>
    </ErrorBoundary>
  )
}

export default ReduxProvider