import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './dashboard.css'
import { AddItemForm, Orders, AddCategoryForm } from './index'
import { Logo } from '../../components'
function Dashboard({ enable }) {
    const navigate = useNavigate()

    
    return (
        <>
            <div className="dashboard">
                <div className="dash-left">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-0 flex flex-col lg:flex-col-reverse lg:justify-between">
                                {/* Sidebar content here */}
                                <div className="top bg-base-300">
                                     <Logo/> 
                                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style. </p>
                                </div>
                                <div className="bottom m-5">
                                    <li onClick={() => navigate('/dashboard/add-item')} className='cursor-pointer hover:bg-base-200'><a>Add New Product</a></li>
                                    <li onClick={() => navigate('/dashboard/add-category')}><a>Add Category</a></li>
                                    <li onClick={() => navigate('/dashboard')}><a>Orders</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="dash-right overflow-y-auto">
                    <div className="dash-nav">
                        <div className="navbar bg-base-100 shadow-sm">
                            <div className="navbar-start">
                                {/* Side bar button */}
                                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                                </label>
                            </div>

                            <div className="navbar-center">
                                <div className="flex-1">
                                    <Logo/>
                                </div>
                            </div>


                        </div>
                    </div>
                    {
                        enable == "orders" ? <Orders /> : null
                    }
                    {
                        enable === "add-item" ? <AddItemForm /> : null
                    }
                    {
                        enable === "add-category" ? <AddCategoryForm /> : null
                    }
                </div>
            </div>
        </>
    )
}

export default Dashboard
