import React, { useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { ThemeMode } from '../../utils/types'
import UIContext, { defaultContext } from './UIContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const UIContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>({
    mode: defaultContext.theme.mode
  })

  function changeMode(mode: ThemeMode) {
    setTheme(prevTheme => ({ ...prevTheme, mode: mode }))
  }

  function toggleMode() {
    if (theme.mode === 'dark') {
      setTheme(prevTheme => ({ ...prevTheme, mode: 'light' }))
    } else {
      setTheme(prevTheme => ({ ...prevTheme, mode: 'dark' }))
    }
  }

  return (
    <UIContext.Provider
      value={{
        ...defaultContext,
        theme: theme,
        setTheme: setTheme,
        changeMode,
        toggleMode
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export default UIContextProvider
