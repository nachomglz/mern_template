import Head from '../Components/Head'
import Main from '../Components/Main/Main'
import Theme from '../Components/Theme'
import UIContextProvider from '../context/UIContext/UIContextProvider'

export default function Home() {
  const PROJECT_NAME = process.env.NEXT_PUBLIC_PROJECT_NAME

  return (
    <div>
      <Head title={PROJECT_NAME} />
      <UIContextProvider>
        <Theme>
          <Main />
        </Theme>
      </UIContextProvider>
    </div>
  )
}
