import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import UIContext from '../context/UIContext/UIContext'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Theme: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(UIContext)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
