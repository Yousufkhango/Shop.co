import React, { useEffect, useState } from 'react'
import appwriteService from '../../../appwrite/config'
import './orders.css'

function Orders() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    appwriteService.getOrders().then(res => setOrders(res.documents))
  }, [])
  console.log(orders)

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

      <div className="orders-sec">
        <div>
          <div>Order ID</div>
          <div>Customer Name</div>
          <div>Location</div>
          <div>Total Price</div>
          <div>Status</div>
        </div>
        {
          orders?.map((item) => (
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border" key={item.$id}>
              <div className="collapse-title font-semibold">
                <div>..{item.$id.slice(-6)}</div>
                <div>{item.userName}</div>
                <div>{item.shipingAddress}</div>
                <div>{item.totalPrice}</div>
                <div>{item.status}</div>
              </div>
              <div className="collapse-content text-sm">
                {
                  item.items?.map((p) => (
                    <div className="p" key={JSON.parse(p).$id}>
                      {JSON.parse(p).item.productName}
                      {JSON.parse(p).item.qty}
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
