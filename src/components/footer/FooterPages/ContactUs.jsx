import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactUs() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg mb-10 text-gray-600">
                    We're here to help! Reach out to us via email, phone, or follow us on social media for the latest updates and support.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4 text-lg">
                        <FaEnvelope className="text-black" />
                        <span>yousufkhango@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                        <FaPhoneAlt className="text-black-600" />
                        <span>+92 (332) 0312807</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                        <FaMapMarkerAlt className="text-black" />
                        <span>C-241/17-A-B, Neem Ki Chadi, Sukkur, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-4 text-lg">
                        <FaClock className="text-black" />
                        <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-100 rounded-2xl p-8 shadow-md text-center">
                    <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
                    <p className="text-gray-600 mb-6">
                        Stay updated with our latest news, products, and promotions by following us on social media.
                    </p>
                    <div className="flex justify-center gap-6 text-2xl text-black">
                        <a href="https://www.facebook.com/share/14sWVP3WtK/" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="http://www.instagram.com/yousufkhango" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/+923197377307" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.linkedin.com/in/yousufkhango" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
