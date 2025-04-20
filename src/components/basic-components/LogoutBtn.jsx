import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }
  return (
    <button
    className='navBtn text-red-500'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn