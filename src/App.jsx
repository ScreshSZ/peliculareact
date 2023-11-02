
import {  Link, Route, Routes } from 'react-router-dom'
import './App.css'
import CardContext from './components/CardContext'
import DetallesMovies from './components/DetallesMovies'

function App() {
  

  return (
    <>
    <Link className='links' to={'/'}><h1 className='titulo'>🎬 Las Mejores Peliculas 🎬</h1></Link>
    <Routes>
      <Route path='/' element={<CardContext/>}></Route>
      <Route path='/movies/:id' element={<DetallesMovies />}></Route>
    </Routes>
      
      
    </>
  )
}

export default App
