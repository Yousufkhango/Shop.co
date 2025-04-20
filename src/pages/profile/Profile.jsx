import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAddress as address } from '../../store/authSlice'
import { useForm } from 'react-hook-form'
import appwriteService from '../../appwrite/config'
import './profile.css'
import { Query } from 'appwrite'
import { nanoid } from '@reduxjs/toolkit'

function Profile() {

    const tcsCities = [
        { city: "Karachi", province: "Sindh", charges: 250 },
        { city: "Lahore", province: "Punjab", charges: 250 },
        { city: "Islamabad", province: "Islamabad Capital Territory", charges: 250 },
        { city: "Rawalpindi", province: "Punjab", charges: 250 },
        { city: "Faisalabad", province: "Punjab", charges: 250 },
        { city: "Multan", province: "Punjab", charges: 250 },
        { city: "Peshawar", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Quetta", province: "Balochistan", charges: 250 },
        { city: "Hyderabad", province: "Sindh", charges: 250 },
        { city: "Sialkot", province: "Punjab", charges: 250 },
        { city: "Gujranwala", province: "Punjab", charges: 250 },
        { city: "Sargodha", province: "Punjab", charges: 250 },
        { city: "Bahawalpur", province: "Punjab", charges: 250 },
        { city: "Sukkur", province: "Sindh", charges: 350 },
        { city: "Larkana", province: "Sindh", charges: 250 },
        { city: "Abbottabad", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Mardan", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Mingora", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Dera Ghazi Khan", province: "Punjab", charges: 250 },
        { city: "Rahim Yar Khan", province: "Punjab", charges: 250 },
        { city: "Sahiwal", province: "Punjab", charges: 250 },
        { city: "Okara", province: "Punjab", charges: 250 },
        { city: "Sheikhupura", province: "Punjab", charges: 250 },
        { city: "Jhelum", province: "Punjab", charges: 250 },
        { city: "Mirpur", province: "Azad Jammu and Kashmir", charges: 250 },
        { city: "Muzaffarabad", province: "Azad Jammu and Kashmir", charges: 250 },
        { city: "Gilgit", province: "Gilgit-Baltistan", charges: 250 },
        { city: "Skardu", province: "Gilgit-Baltistan", charges: 250 },
        { city: "Khuzdar", province: "Balochistan", charges: 250 },
        { city: "Gwadar", province: "Balochistan", charges: 250 },
        { city: "Chiniot", province: "Punjab", charges: 250 },
        { city: "Toba Tek Singh", province: "Punjab", charges: 250 },
        { city: "Bannu", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Chakwal", province: "Punjab", charges: 250 },
        { city: "Sargodha", province: "Punjab", charges: 250 },
        { city: "Mirpur Khas", province: "Sindh", charges: 250 },
        { city: "Jamnagar", province: "Sindh", charges: 250 },
        { city: "Badin", province: "Sindh", charges: 250 },
        { city: "Chitral", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Tank", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Nawabshah", province: "Sindh", charges: 250 },
        { city: "Dera Ismail Khan", province: "Khyber Pakhtunkhwa", charges: 250 },
        { city: "Chilas", province: "Gilgit-Baltistan", charges: 250 },
        { city: "Usta Muhammad", province: "Balochistan", charges: 250 },
        { city: "Layyah", province: "Punjab", charges: 250 }
    ];

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.userData);
    const userAddress = useSelector((state) => state.auth.userAddress);
    const [editable, setEditable] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            user_id: user?.$id || "",
            shipping_address: userAddress?.shipping_address || "",
            postal_code: userAddress?.postal_code || "",
            phone: userAddress?.phone || "",
        },
    });

    const update = (data) => {
        if (userAddress) {
            appwriteService.updateUser(userAddress.$id, {
                ...data
            }).then((res) => {
                dispatch(address(res))
                setEditable(false)
            })
        }
        else {
            appwriteService.createUser(data).then((res) => {
                dispatch(address(res))
                setEditable(false)
            })
        }
    }

    return (

        <div className="profile-page">

            <div className="profile">
                <h1>Manage My Account</h1>
                <div className='profile-container'>
                    <div className="contect-info">
                        <div className="head">
                            <h2>Personal Profile</h2>
                        </div>

                        <div className="data">
                            <form action="">
                                <div className="username">
                                    <span>Hello </span>
                                    <span>{user.name}</span>
                                </div>
                                <div className="email">
                                    <span>Email: </span>
                                    <span>{user.email}</span>
                                </div>
                                <div className="uid">
                                    <span>Account ID: </span>
                                    <span>{user.$id}</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    {
                        !userAddress || editable ? <div className='address-book'>
                            <form action={handleSubmit(update)}>
                                <div className='head'>
                                    <h2>Address Book</h2><span>|</span><button onClick={() => setEditable(false)}>CANCEL</button><button type="submit">UPDATE</button>
                                </div>
                                <div className='data'>
                                    <div className='shipping-address'>
                                        <div className="address">
                                            <label htmlFor="shipping_address">Shipping Address:</label>
                                            <input
                                                type="text"
                                                id="shipping_address"
                                                maxLength="49"
                                                {...register('shipping_address', { required: true })}
                                            />
                                            {errors.address && <p className="error">Shipping Address is required</p>}
                                        </div>
                                        <div className="city">
                                            <label htmlFor="city">City:</label>
                                            <select id="city" {...register('city', { required: true })} className="bg-base-100">
                                                <option> select City</option>
                                                {tcsCities.map((item) => (
                                                    <option key={nanoid} value={item.city}>
                                                        {item.city}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.city && <p className="error">City is required</p>}
                                        </div>
                                        <div className="country">
                                            <label htmlFor="country">City:</label>
                                            <select id="country" {...register('country', { required: true })} className="bg-base-100">
                                                <option> select Country</option>
                                                <option value="Pakistan">Pakistan</option>
                                            </select>
                                            {errors.country && <p className="error">Country is required</p>}
                                        </div>

                                        <div className="postal_code">
                                            <label htmlFor="postal_code">Postal Code: </label>
                                            <input
                                                type="text"
                                                id="postal_code"
                                                maxLength="49"
                                                {...register('postal_code', { required: true })}
                                            />
                                            {errors.address && <p className="error">Postal Code is required</p>}
                                        </div>
                                        <div className="phone">
                                            <label htmlFor="phone">Phone Number: </label>
                                            <input
                                                type="phone"
                                                id="phone"
                                                maxLength="49"
                                                {...register('phone', { required: true })}
                                            />
                                            {errors.phone && <p className="error">Phone Number is required</p>}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div> : <div className='address-book'>
                            <div className='head'>
                                <h2>Address Book</h2><span>|</span><button onClick={() => setEditable(true)}>EDIT</button>
                            </div>
                            <div className='data'>
                                <div className='shipping-address'>
                                    <div className="address">
                                        <span>Shiping Address: </span>
                                        <span>{userAddress.shipping_address}, {userAddress.city}, {userAddress.country}</span>
                                    </div>
                                    <div className="postal-code">
                                        <span>Postal Address: </span>
                                        <span>{userAddress.postal_code}</span>
                                    </div>
                                    <div className="phone">
                                        <span>Phone Number: </span>
                                        <span>{userAddress.phone}</span>
                                    </div>
                                </div>

                                <div className='billing-address'>
                                    <div className="address">
                                        <span>Billing Address: </span>
                                        <span>{userAddress.shipping_address}</span>
                                    </div>
                                    <div className="postal-code">
                                        <span>Postal Code: </span>
                                        <span>{userAddress.postal_code}</span>
                                    </div>
                                    <div className="phone">
                                        <span>Phone Number: </span>
                                        <span>{userAddress.phone}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >

            <div className="order-container">
                <h1>Recent Orders</h1>
                <div className="orders">
                    <div className='table-heading'>
                        <div>Order#</div>
                        <div>Plced On</div>
                        <div>Items</div>
                        <div>Total</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile
