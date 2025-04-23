export default function StoreHoursPage() {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Store Hours</h1>
                <p className="text-lg text-gray-600 mb-10">
                    Visit us during our operating hours. We’re happy to assist you!
                </p>

                <div className="bg-gray-50 p-6 rounded-xl shadow-md inline-block">
                    <table className="w-full text-left text-gray-700">
                        <tbody>
                            <tr className="border-b">
                                <td className="py-3 px-4 font-medium">Monday – Saturday</td>
                                <td className="py-3 px-4">9:00 AM – 6:00 PM</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-4 font-medium">Sunday</td>
                                <td className="py-3 px-4 text-gray-500">Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mt-10 text-sm text-gray-500">
                    Note: Hours may vary during public holidays. Please contact us for confirmation.
                </p>
            </div>
        </div>
    );
}
