import React, { useEffect, useState } from 'react'
import { ThemeMode } from '../utils/types'

const useColorScheme = () => {
  // TODO: Get the default theme used by the user
  let defaultMode: ThemeMode = 'light'
  if (typeof window !== 'undefined') {
    defaultMode = window.matchMedia('prefers-color-scheme: dark').matches
      ? 'dark'
      : 'light'
  }

  const [mode, setMode] = useState<ThemeMode>(defaultMode)

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event =>
        setMode(event.matches ? 'dark' : 'light')
      )
  }, [])

  return mode
}

export default useColorScheme
