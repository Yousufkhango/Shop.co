import React, { useEffect, useState } from 'react'
import { Logo } from '../../components'
import appwriteService from '../../appwrite/config'

function Footer() {
    const [store, setStore] = useState(null)
    useEffect(() => {
        appwriteService.getStore().then((res) => setStore(res.documents[0]))
    }, [])
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-[24px]">
            <aside className='max-w-[300px]'>
                <Logo/>
                <p>{store?.store_desc}</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer
