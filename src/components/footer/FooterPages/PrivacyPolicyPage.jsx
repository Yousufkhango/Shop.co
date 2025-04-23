export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
                <p className="text-lg text-gray-600 mb-10 text-center">
                    We value your privacy. This policy explains how we collect, use, and protect your personal information.
                </p>

                <div className="space-y-8 text-gray-700 text-base leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold mb-2">📋 Information We Collect</h2>
                        <p>We may collect the following types of information when you use our site:</p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Personal details (name, phone number, address)</li>
                            <li>Order history and preferences</li>
                            <li>Device and browser information</li>
                            <li>Cookies and usage data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">🔐 How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li>To process and deliver your orders</li>
                            <li>To personalize your shopping experience</li>
                            <li>To improve our website and services</li>
                            <li>To send order updates and promotional offers</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">🤝 Sharing of Information</h2>
                        <p>
                            We do not sell your personal data. We only share your information with:
                        </p>
                        <ul className="list-disc list-inside space-y-1 mt-2">
                            <li>Trusted logistics partners (e.g. TCS) for delivery</li>
                            <li>Payment gateways (for order processing, if applicable)</li>
                            <li>Service providers who help maintain our site</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">🍪 Cookies</h2>
                        <p>
                            We use cookies to track website activity and improve your shopping experience. You can manage cookie settings in your browser at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">🧒 Children’s Privacy</h2>
                        <p>
                            Our website is not intended for users under the age of 13. We do not knowingly collect personal data from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">✉️ Contact Us</h2>
                        <p>
                            For any privacy-related questions or concerns, you can reach us at <strong>yousufkhango@gmail.com</strong> or call <strong>+92 (319) 7377307</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">📅 Policy Updates</h2>
                        <p>
                            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
