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
                <Logo />
                <p>{store?.store_desc}</p>
            </aside>
            <nav>
                <h6 className="footer-title">Customer Service</h6>
                <a className="link link-hover" href='/contact-us'>Contact Us</a>
                <a className="link link-hover" href='/help'>FAQ / Help Center</a>
                <a className="link link-hover" href='shiping-delivery'>Shipping & Delivery</a>
                <a className="link link-hover" href='return'>Returns & Exchanges</a>
            </nav>
            <nav>
                <h6 className="footer-title">Policies</h6>
                <a className="link link-hover" href='/privacy-policy'>Privacy policy</a>
                <a className="link link-hover" href='/terms-condition'>Terms & Conditions</a>
                <a className="link link-hover" href='/cookie-policy'>Cookie policy</a>
                <a className="link link-hover" href='/payment-methods'>Payment Method</a>
            </nav>
            <nav>
                <h6 className="footer-title"> Store Information</h6>
                <a className="link link-hover" href='/physical-address'>Physical address</a>
                <a className="link link-hover" href='/store-hours'>Store hours</a>
                <a className="link link-hover" href='/phone-number'>Phone number</a>
            </nav>
        </footer>
    )
}

export default Footer
