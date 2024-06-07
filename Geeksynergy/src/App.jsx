import './App.css'
import { MenuBar } from './components/MenuBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { CompanyInformation } from './components/Company'
import { UserSign } from './components/UserSign'
import { PrivateRoutes } from './PrivateRoutes/PrivateRoutes'
import { UserLogin } from './components/UserLogin'


const App = () => {
  return (
    <div>
      <MenuBar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<CompanyInformation/>}/>
        <Route path='/movie' element={<PrivateRoutes/>}/>
        <Route path='/signIn' element={<UserSign/>}/>
        <Route path='/userLogin' element={<UserLogin/>}/>
      </Routes>
     
    </div>
  )
}

export default App
