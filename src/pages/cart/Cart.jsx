import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "./cartSlice";
import AppwriteService from '../../appwrite/config';
import { RiDeleteBinFill } from "react-icons/ri";

const Cart = () => {
  const [order, setOrder] = useState([])

  const userAddress = useSelector((state) => state.auth.userAddress)
  const user = useSelector((state) => state.auth.userData)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const discount = useSelector((state) => state.cart.totalDiscount);

  const tcsCities = [
    { city: "Karachi", province: "Sindh", charges: 250 },
    { city: "Lahore", province: "Punjab", charges: 250 },
    { city: "Islamabad", province: "Islamabad Capital Territory", charges: 250 },
    { city: "Rawalpindi", province: "Punjab", charges: 250 },
    { city: "Faisalabad", province: "Punjab", charges: 250 },
    { city: "Multan", province: "Punjab", charges: 250 },
    { city: "Peshawar", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Quetta", province: "Balochistan", charges: 250 },
    { city: "Hyderabad", province: "Sindh", charges: 250 },
    { city: "Sialkot", province: "Punjab", charges: 250 },
    { city: "Gujranwala", province: "Punjab", charges: 250 },
    { city: "Sargodha", province: "Punjab", charges: 250 },
    { city: "Bahawalpur", province: "Punjab", charges: 250 },
    { city: "Sukkur", province: "Sindh", charges: 350 },
    { city: "Larkana", province: "Sindh", charges: 250 },
    { city: "Abbottabad", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Mardan", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Mingora", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Dera Ghazi Khan", province: "Punjab", charges: 250 },
    { city: "Rahim Yar Khan", province: "Punjab", charges: 250 },
    { city: "Sahiwal", province: "Punjab", charges: 250 },
    { city: "Okara", province: "Punjab", charges: 250 },
    { city: "Sheikhupura", province: "Punjab", charges: 250 },
    { city: "Jhelum", province: "Punjab", charges: 250 },
    { city: "Mirpur", province: "Azad Jammu and Kashmir", charges: 250 },
    { city: "Muzaffarabad", province: "Azad Jammu and Kashmir", charges: 250 },
    { city: "Gilgit", province: "Gilgit-Baltistan", charges: 250 },
    { city: "Skardu", province: "Gilgit-Baltistan", charges: 250 },
    { city: "Khuzdar", province: "Balochistan", charges: 250 },
    { city: "Gwadar", province: "Balochistan", charges: 250 },
    { city: "Chiniot", province: "Punjab", charges: 250 },
    { city: "Toba Tek Singh", province: "Punjab", charges: 250 },
    { city: "Bannu", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Chakwal", province: "Punjab", charges: 250 },
    { city: "Sargodha", province: "Punjab", charges: 250 },
    { city: "Mirpur Khas", province: "Sindh", charges: 250 },
    { city: "Jamnagar", province: "Sindh", charges: 250 },
    { city: "Badin", province: "Sindh", charges: 250 },
    { city: "Chitral", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Tank", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Nawabshah", province: "Sindh", charges: 250 },
    { city: "Dera Ismail Khan", province: "Khyber Pakhtunkhwa", charges: 250 },
    { city: "Chilas", province: "Gilgit-Baltistan", charges: 250 },
    { city: "Usta Muhammad", province: "Balochistan", charges: 250 },
    { city: "Layyah", province: "Punjab", charges: 250 }
  ];
  const [delivery, setDelivery] = useState(0)
  useEffect(() => {
    document.title = "CART | SHOP.CO";

    setOrder(cart.items.map(obj => JSON.stringify(obj)))
    if (userAddress == undefined) {
      setDelivery(0)
    }
    else {
      setDelivery(tcsCities.find(city => city.city == userAddress?.city)?.charges * cart.totalQuantity)
    }

  }, [cart])


  const _checkOut = () => {
    AppwriteService.createOrder({ items: order, user_id: user.$id, userEmail: user.email, userPhone: userAddress.phone, userName: user?.name, totalPrice: `${cart.totalPrice - discount + delivery}`, shipingAddress: userAddress.shipping_address + ',' + userAddress.city, shipingCost: `${delivery}` }).then((res) => document.getElementById('my_modal_3').showModal())
    dispatch(clearCart())
  }
  console.log('total', cart.totalPrice - discount + delivery)
  return (
    <div className="cart-page">
      <div className="slug">
        <button onClick={() => navigate('/')} className="cursor-pointer">Home</button> &gt; <button onClick={() => navigate('/cart')} className="cursor-pointer">Cart</button>
      </div>
      <div className="cart-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart-item-container">
          {cart.items.length === 0 ? <div className="empty-cart">Your cart is empty</div> :
            cart.items.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="card-image">
                  <img src={AppwriteService.getFilePreview(item.item.images_1)} alt="Product" />
                </div>
                <div className="card-details text-2xl">
                  <h2>{item.item.productName}</h2>
                  {/* <p>Product Description</p> */}
                  <p>Price: {item.item.price}</p>
                  <p>Qty: {item.item.qty}</p>
                </div>
                <div className="card-actions">
                  <button className="remove-button" onClick={() => dispatch(removeItem(item.item))}>< RiDeleteBinFill /></button>
                </div>
              </div>))
          }
        </div>
        <div className="cart-price-section">
          <div className="orderSummary">
            <h1>Order Summary</h1>
            <div className="ammounts">
              <div className="subtotal"><span>Subtotal</span><span className="flex"><span className=" text-[0.5rem]">Rs</span><span>{cart.totalPrice}</span></span></div>
              <div className="discount"><span>Discount: </span><span className="flex text-red-500"><span className=" text-[0.5rem]">Rs</span><span>{discount > 0 ? '-' : ''}{discount}</span></span></div>
              {/* <button className="btn" onClick={() => dispatch(clearCart())}>clear cart</button> */}
              {
                userAddress ?
                  <div className="delivery"><span>Delivery Charges: </span><span>{delivery}</span></div>
                  :
                  <div>
                    {
                      user ?
                        <span className="text-red-500">Please <a href="/profile" className="italic underline ">Add Address</a> to see delivery charges</span>
                        :
                        <span className="text-red-500">Please Login to Complete Checkout</span>
                    }
                  </div>
              }
              <div className="total"><span className="t-h">Total</span><span>{cart.totalPrice - discount + delivery}</span></div>
            </div>
          </div>
          <div>
          </div>
          <div className="checkout">
            <button onClick={_checkOut} disabled={!user && !userAddress}>Go to Checkout &rarr;</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => navigate('/')}>✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello! {user?.name}</h3>
                <p className="py-4">Your Order is Successfully Placed 😊</p>
              </div>
            </dialog>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Cart;
