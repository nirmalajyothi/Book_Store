import React from 'react'
import { Routes,Route} from "react-router-dom"
import Home from './pages/Home'

import EditBook from './pages/EditBook'
import DeleteBooks from './pages/DeleteBooks'
import ShowBook from './pages/ShowBook'
import CreateBooks from './pages/createBooks'
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books/create' element={<CreateBooks/>}/>
    <Route path='/books/details/:id' element={<ShowBook/>}/>
    <Route path='/books/edit/:id' element={<EditBook/>}/>
    <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
 
   </Routes>
  )
}


export default App
