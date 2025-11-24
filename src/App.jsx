import './App.css'
import PopNewCard from './components/popNewCard/popNewCard'
import PopExit from './components/popExit/popExit'
import Header from './components/header/header'
import Main from './components/main/main'
import PopBrowse from './components/popBrowse/popBrowse'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './GlobalStyles'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[]);
  return (
    <>
    <GlobalStyle />
     <div className="wrapper">
		
		<PopExit/>

		<PopNewCard />

		<PopBrowse />

		<Header />
		<Main loading={loading} />
		
    </div>
    </>
  )
}

export default App
