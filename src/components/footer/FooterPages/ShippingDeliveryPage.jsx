export default function ShippingDeliveryPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Shipping & Delivery</h1>
                <p className="text-lg text-gray-600 mb-10 text-center">
                    Learn more about our shipping process, estimated delivery times, and policies.
                </p>

                <div className="space-y-8 text-gray-700 text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">📍 Delivery Coverage</h2>
                        <p>
                            We currently offer delivery services only within Pakistan. Unfortunately, we do not support international shipping at this time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">⏱ Estimated Delivery Time</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Overnight Express:</strong> Next-day delivery to major cities across Pakistan.</li>
                            <li><strong>Second Day Delivery:</strong> Delivery within 48 hours for less urgent shipments.</li>
                            <li><strong>Economy Service:</strong> Delivery within 3–5 business days for cost-effective shipping.</li>
                            <li><strong>Same Day Delivery:</strong> Available within select cities for urgent shipments.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">
                            Delivery times may vary based on the destination and service selected.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">💵 Payment Method</h2>
                        <p>
                            We currently accept only <strong>Cash on Delivery (COD)</strong>. Please ensure someone is available at the delivery address to receive and pay for the order.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">📦 Order Processing</h2>
                        <p>
                            Orders are processed within 24 hours on business days (Monday–Friday, excluding holidays). You’ll receive a confirmation message once your order is shipped.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">📫 Delivery Partner</h2>
                        <p>
                            We partner with <strong>TCS</strong>, a leading courier service in Pakistan, to ensure your orders are delivered safely and on time. Tracking information will be shared via email or SMS once your order is dispatched.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">❗ Delivery Issues</h2>
                        <p>
                            If your order is delayed or if you face any delivery issues, please contact our support team at <strong>yousufkhango@gmail.com</strong> or call us at <strong>+92 (319) 7377307</strong>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
