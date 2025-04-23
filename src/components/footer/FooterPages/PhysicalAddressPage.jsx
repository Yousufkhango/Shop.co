export default function PhysicalAddressPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Our Physical Address</h1>
                <p className="text-lg text-gray-600 mb-10 text-center">
                    You’re welcome to visit us or send correspondence to the address below.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">📍 Business Location</h2>
                        <p className="text-gray-700">
                            <strong>Your Store Name</strong><br />
                            C-241/17-A-B<br />
                            NEEM KI CHADI,<br />
                            Sukkur, Pakistan<br />
                            <br />
                            <strong>Working Hours:</strong><br />
                            Monday – Saturday, 9:00 AM – 6:00 PM
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">📞 Contact Information</h2>
                        <p>
                            Phone: <strong>+92 332 0312807</strong><br />
                            Email: <strong>yousufkhango@gmail.com</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">🗺️ Location Map</h2>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-200">
                            <iframe
                                title="Store Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8234129827275!2d68.83301261501038!3d27.715661582785074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3936c704b3db1a5b%3A0x14344f20218e2e07!2sNeem%20Ki%20Chhadi%2C%20Sukkur%2C%20Sindh!5e0!3m2!1sen!2s!4v1713869275744!5m2!1sen!2s"
                                className="w-full h-full border-0"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
