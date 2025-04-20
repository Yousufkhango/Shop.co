import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authSellerStatus = useSelector(state => state.auth.seller)

    useEffect(() => {
    
        if(authentication && authSellerStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authSellerStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authSellerStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

