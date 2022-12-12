import React, { useContext } from 'react'
import UIContext from '../../context/UIContext/UIContext'
import { Button } from '../../utils/GlobalStyles'

interface Props {}

const Main: React.FC<Props> = () => {
  const uiContext = useContext(UIContext)

  return <Button onClick={uiContext.toggleMode}>change theme</Button>
}

export default Main
