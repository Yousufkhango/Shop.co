export default function PaymentMethodsPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Payment Methods</h1>
                <p className="text-lg text-gray-600 mb-10 text-center">
                    Learn about how you can pay for your orders on our website. We currently offer a simple and secure option for your convenience.
                </p>

                <div className="space-y-10 text-gray-700 text-base leading-relaxed">
                    <section className="bg-gray-50 p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold mb-2">💵 Cash on Delivery (COD)</h2>
                        <p>
                            We currently support <strong>Cash on Delivery</strong> for all orders across Pakistan. This means you can shop confidently without needing a credit/debit card or online payment service.
                        </p>
                        <ul className="list-disc list-inside mt-3 space-y-1">
                            <li>No upfront payment required</li>
                            <li>Pay in cash at the time of delivery</li>
                            <li>Ideal for quick and secure transactions</li>
                            <li>Applies to all cities and regions covered by our courier partners (e.g. TCS)</li>
                        </ul>
                    </section>

                    <section className="bg-white border border-yellow-200 p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-2 text-yellow-600">⚠️ Please Note</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kindly ensure someone is available to receive and pay for the parcel.</li>
                            <li>Orders without successful delivery due to payment refusal may impact future orders.</li>
                            <li>We do not accept card payments, bank transfers, or digital wallets at this time.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">📩 Need Help?</h2>
                        <p>
                            If you have any questions regarding payment, feel free to contact our support team at <strong>yousufkhango@gmail.com</strong> or call us at <strong>+92 (319) 7377307</strong>. We’re here to assist you.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
