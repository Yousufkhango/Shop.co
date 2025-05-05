import { useState } from 'react'
import './App.css'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Hero, CategoryBar, Footer } from './components'
import { Topbar } from './pages/home/index'
import { useSelector } from 'react-redux'

function App() {
  const pathname = useLocation().pathname
  const path = window.location.pathname.split('/')[1]
  const user = useSelector((state) => state.auth.userData)

  console.log('user', user)
  return (
    <>
      <header>
      {
        !user && <Topbar />
      }
        <Navbar />
        {
          pathname == "/" ? <Hero /> : null
        }
        {
          pathname == "/" || pathname == '/shop' || path == "category"? <CategoryBar /> : null
        }
      </header>
      <main>
        <Outlet />
      </main>
      {
        pathname === '/dashboard' || pathname === '/dashboard/add-category' || pathname === '/dashboard/add-item'? null : <Footer />
      }
    </>
  )
}

export default App
