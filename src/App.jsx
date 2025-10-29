

import './App.css'
import PopNewCard from './components/popNewCard/popNewCard'
import PopExit from './components/popExit/popExit'
import Header from './components/header/header'
import Main from './components/main/main'
import PopBrowse from './components/popBrowse/popBrowse'

function App() {
  
  return (
    <>
     <div className="wrapper">
		
		<PopExit/>

		<PopNewCard />

		<PopBrowse />

		<Header />
		<Main />
		
    </div>
    </>
  )
}

export default App
