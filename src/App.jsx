import './App.css'
import PopNewCard from './components/popNewCard/popNewCard'
import PopExit from './components/popExit/popExit'
import Header from './components/header/header'
import Main from './components/main/main'
import PopBrowse from './components/popBrowse/popBrowse'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './GlobalStyles'
import { Router, Routes, Route } from 'react-router-dom'

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
    
    <Routes>
    
     <div className="wrapper">
		<Route path="/" element={<Main loading={loading}/>}/>
		<Route path='/'element={<PopExit/>}/> 
    <Route path='/'element={<PopNewCard/>}/> 
    <Route path='/'element={<PopBrowse/>}/> 
    <Route path='/'element={<Header/>}/> 
		</div>
    </Routes>
    
   
    </>
  )
}

export default App
