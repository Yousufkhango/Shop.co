import React, { useState, useEffect, use } from 'react'
import appwriteService from "../../../../appwrite/config";
import { useParams } from "react-router-dom";
import { Query } from "appwrite";
import { useForm } from "react-hook-form";

const OrderPage = () => {
    const { slug } = useParams();
    const { handleSubmit, register, formState: { errors } } = useForm();


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
    console.log(order)

    const onSubmit = async (e) => {
        console.log('data', e)
        // e.preventDefault();
        // console.log(e)
        // const status = e.target.status.value;
        // appwriteService.updateOrder(slug, { status }).then((res) => {
        //     if (res) {
        //         setUpdate(false);
        //         alert("Order Updated Successfully");
        //     }
        // }).catch((err) => {
        //     console.log(err)
        //     alert("Something went wrong");
        // })
    }
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Order Details</h1>

            {/* Order Basic Info */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <p><strong>Order ID:</strong> {order?.$id}</p>
                <p><strong>Status:</strong> {order?.status}</p>
                <p><strong>Date:</strong> {order?.$createdAt}</p>
            </div>

            {/* Customer Info */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">

                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <form action={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <p><strong>Order ID:</strong> {order?.$id}</p>
                        <div>
                            <label htmlFor="status"><strong>Status:</strong></label>
                            <select id="status" {...register('category', { required: true })} onChange={() => setUpdate(false)} className="bg-base-100">
                                <option value="pending">Pending</option>
                                <option value="shipped">Shipped</option>
                                <option value="delivered">Delivered</option>
                            </select>
                            {errors.status && <p className="error">Status is required</p>}

                        </div>
                        <p><strong>Date:</strong> {order?.$createdAt}</p>
                        <button type="submit" className='btn'>Update</button>
                    </form>
                </div>


                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Customer Info</h2>
                    <p><strong>Name:</strong> {order?.userName}</p>
                    <p><strong>Email:</strong> {order?.userEmail}</p>
                    <p><strong>Phone:</strong> {order?.userPhone}</p>
                    <p><strong>Shipping Address:</strong> {order?.shipingAddress}</p>
                </div>

            </div>

            {/* Payment & Shipping Method */}


            {/* Items Ordered */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">Items Ordered</h2>
                {order?.items.map((item, index) => (
                    // item = JSON.parse(item),
                    <div key={index} className="flex items-center justify-between border-b py-4">
                        <div className="flex items-center gap-4">
                            <img src={appwriteService.getFilePreview(JSON.parse(item).item.images_1)} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <p className="font-semibold">{JSON.parse(item).item.productName}</p>
                                <p>Quantity: {JSON.parse(item).item.qty}</p>
                            </div>
                        </div>
                        <p className="font-semibold">RS: {JSON.parse(item).item.price}</p>
                    </div>
                ))}
            </div>

            {/* Order Totals */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                <div className="flex justify-between mb-2">
                    <p>Subtotal</p>
                    <p><sup>Rs </sup>{order?.totalPrice - order?.shipingCost}</p>
                </div>
                <div className="flex justify-between mb-2">
                    <p>Shipping Fee</p>
                    <p><sup>RS</sup> {order?.shipingCost.toLocaleString()}</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <p>Total</p>
                    <p>Rs: {order?.totalPrice.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
