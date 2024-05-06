
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployeCompo from './components/ListEmployeCompo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element = {<ListEmployeCompo />}></Route>
    <Route path='/employees' element = {<ListEmployeCompo/>}></Route>
    <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
    <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
    </Routes>
    <Footer/>  
    </BrowserRouter>
    </>
  )
}

export default App
