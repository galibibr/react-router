import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<>Home</>} />
        <Route path='about' element={<>About</>} />
        <Route path='blog' element={<>Blog</>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
