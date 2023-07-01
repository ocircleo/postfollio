import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/navbar/Navbar'
function App() {


  return (
    <div className='flex flex-col justify-between'>
      <div>

        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      {/* Todo footer */}
    </div>
  )
}

export default App
