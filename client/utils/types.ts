import { DefaultTheme } from 'styled-components'

export type ThemeMode = 'light' | 'dark'

export interface IUIContext {
  theme: DefaultTheme
  setTheme: (theme: DefaultTheme) => void
  changeMode: (mode: ThemeMode) => void
  toggleMode: () => void
}
