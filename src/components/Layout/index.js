import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {

    /*if (sessionStorage.intro) {
      document.querySelector("body").addClass("second");
      };*/

  return (
    <div className="App">
      <Sidebar />
      <div className="page">

        <Outlet />
      </div>
    </div>
  )
}

export default Layout