export default function FAQPage() {
    const faqs = [
        {
            question: "How do I track my order?",
            answer:
                "Once your order is shipped, you'll receive a confirmation email with a tracking link. You can also track it through the TCS Tracking Service.",
        },
        {
            question: "What is your return policy?",
            answer:
                "We accept returns within 7 days of delivery. Products must be in original condition and packaging. Contact-US on WhatsApp for step-by-step instructions.",
        },
        {
            question: "Can I cancel or modify my order?",
            answer:
                "Orders can only be canceled or changed within 1 hour of placement. Please contact support immediately if you need assistance.",
        },
        {
            question: "Do you offer international shipping?",
            answer:
                "Yes! We ship worldwide. Delivery times and fees vary by destination. International orders may be subject to customs duties.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We currently support only Cash on Delivery (COD). Please make sure someone is available to receive and pay for the order at the delivery address.",
        },
    ];

    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Help & FAQs</h1>
                <p className="text-lg text-gray-600">
                    Find quick answers to common questions. Still need help? Reach out to our support team.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
