export default function PhoneNumberPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Phone Numbers</h1>
                <p className="text-lg text-gray-600 mb-10">
                    Need help or have a question? Reach out to us directly via phone.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md inline-block space-y-6 text-left text-gray-700">
                    <div>
                        <h2 className="text-xl font-semibold">📱 Customer Support</h2>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+923197377307" className="text-blue-600 hover:underline">+92 319 7377307</a><br />
                            Available: Monday – Saturday, 9:00 AM – 6:00 PM
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">📦 Order Tracking / Delivery Queries</h2>
                        <p>
                            <strong>Phone:</strong> <a href="tel:+923320312807" className="text-blue-600 hover:underline">+92 332 0312807</a><br />
                            WhatsApp Available: Yes
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold">📩 Alternate Support</h2>
                        <p>
                            <strong>Email:</strong> <a href="mailto:yousufkhango@gmail.com" className="text-blue-600 hover:underline">yousufkhango@gmail.com</a>
                        </p>
                    </div>
                </div>

                <p className="mt-10 text-sm text-gray-500">
                    For quick help, we recommend contacting us on WhatsApp during working hours.
                </p>
            </div>
        </div>
    );
}
