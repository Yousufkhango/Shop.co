import React, { useEffect, useState } from 'react'
import appwriteService from '../../../appwrite/config'
import './orders.css'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    appwriteService.getOrders().then(res => setOrders(res.documents))
  }, [])
  // console.log(orders)

  return (
    <div className="order-cont">
      <div className="box-sec">
        <div className="box-1">
          QTY {orders?.length}
        </div>
        <div className="box-2">
          Pending {orders?.length}
        </div>
        <div className="box-3">
          Delivered {orders?.length}
        </div>
      </div>

      <table className="orders-sec text-center">
        <thead>

          <tr className='orders-header'>
            <td>Order ID</td>
            <td>Items</td>
            <td>Total Price</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((item) => (
              <tr className="orders-header" key={item.$id}>
                <td>{item.$id}</td>
                <td>{item.items.length}</td>
                <td>{item.totalPrice}</td>
                <td>{item.status}</td>
                <td><button onClick={() => navigate(`/dashboard/order/${item.$id}`)} className='text-blue-500 underline'>view more</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {/* <div className="orders-sec">
        <div className='orders-header'>
          <div>Order ID</div>
          <div>Customer Name</div>
          <div>Location</div>
          <div>Total Price</div>
          <div>Status</div>
        </div>
        {
          orders?.map((item) => (
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border order-cont" key={item.$id}>
              <div className="collapse-title font-semibold z-0">
                <div>{item.$id}</div>
                <div>{item.userName}</div>
                <div>{item.shipingAddress}</div>
                <div>{item.totalPrice}</div>
                <div>{item.status}</div>
                <div><button>more</button></div>
              </div>
              <div className="collapse-content text-sm cc">
                <div className='order-header'>
                  <div>Product Name</div>
                  <div>Qty</div>
                </div>
                {
                  item.items?.map((p) => (
                    <div className="p" key={JSON.parse(p).$id}>
                      <span>{JSON.parse(p).item.productName}</span>
                      <span>{JSON.parse(p).item.qty}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div> */}
    </div>
  )
}

export default Orders
