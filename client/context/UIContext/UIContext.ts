import { createContext } from 'react'
import { IUIContext } from '../../utils/types'

export const defaultContext: IUIContext = {
  theme: { mode: 'light' },
  setTheme: () => {},
  changeMode: () => {},
  toggleMode: () => {}
}

const UIContext = createContext<IUIContext>(defaultContext)

export default UIContext
