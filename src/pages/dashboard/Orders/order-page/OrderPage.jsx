import React, {useState, useEffect, use} from 'react'
import appwriteService from "../../../../appwrite/config";
import { useParams } from "react-router-dom";
import { Query } from "appwrite";

function OrderPage() {
    const { slug } = useParams();
    const [order, setOrder] = useState(null);
    useEffect(() => {
        if (slug) {
            appwriteService.getOrder(slug).then((order) => {
                if (order) {
                    setOrder(order);
                }
            });
        }
    }, [slug]);

    console.log("orderPage", order)
    return (
        <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>

            <div className="mb-2">
                <span className="font-semibold">Order ID:</span> {order?.$id}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Customer:</span> {order?.userName}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Date:</span> {new Date(order?.$createdAt).toLocaleDateString()}
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Items:</h3>
                <ul className="list-disc list-inside">
                    {order?.items.map((p, index) => (
                        <li key={index}>
                            {JSON.parse(p).item.productName} — {JSON.parse(p).item.qty} × ${JSON.parse(p).item.price}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4 text-right font-bold text-lg">
                Total: ${order?.totalPrice}
            </div>
        </div>
    )
}

export default OrderPage
