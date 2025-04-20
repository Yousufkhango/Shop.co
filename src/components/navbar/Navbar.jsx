import React, { useRef, useEffect, useState } from 'react'
import service from '../../appwrite/config';
import { LogoutBtn } from '../index'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addFilters } from '../../store/productSlice';
import { Logo } from '../index'
import './navbar.css'

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    console.log('cart', cart)
    const searchInputRef = useRef(null);
    const auth = useSelector((state) => state.auth)
    const breakPoint = window.screen.width
    const pathname = useLocation().pathname

    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'k') {
            // Focus the search input field when Ctrl + K is pressed
            event.preventDefault();
            if (searchInputRef.current) {
                searchInputRef.current.focus();
            }
        }
        // Check if Esc key is pressed
        if (event.key === 'Escape') {
            // Blur (unfocus) the search input field
            if (searchInputRef.current) {
                searchInputRef.current.blur();
            }
        }

    };

    // Set up the keydown event listener on mount, clean up on unmount
    useEffect(() => {
        // Attach the event listener
        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const serachFilter = () => {
        const search = searchInputRef.current.value.toLowerCase()
        dispatch(addFilters({ search }))
    }
    return (
        <>
            {
                pathname == '/dashboard' || pathname == '/dashboard/add-item' || pathname == '/dashboard/add-category'?
                    null :
                    <div className="navbar">
                        <div className="first-nav-sec">
                            <Logo />
                        </div>
                        
                        <div className="third-nav-sec" >
                            <label className="input rounded-2xl">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                                <input type="search" className="grow" placeholder="Search" ref={searchInputRef} onChange={serachFilter} />
                                {breakPoint >= '1024' ? <kbd className="kbd kbd-sm">ctrl</kbd> : null}
                                {breakPoint >= '1024' ? <kbd className="kbd kbd-sm">K</kbd> : null}
                            </label>
                        </div>

                        <div className="forth-nav-sec">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                        <span className="badge badge-sm indicator-item rounded-full">{cart.items.length}</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold">{cart.items.length} Items</span>
                                        <span className="text-info">Subtotal: {cart.totalPrice}</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block" onClick={()=>navigate('/cart')}>View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Account"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {auth.userData?.labels[0] !== "seller" ? null : <li><a href='/dashboard'>Dashboard</a></li>}
                                    <li>
                                        <a className="justify-between" href='/profile'>
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li>{auth.status ? <LogoutBtn /> : <a href='/login' className='text-green-500'>Login</a>}</li>
                                </ul>
                            </div>
                        </div>

                    </div>
            }
        </>
    )
}

export default Navbar
