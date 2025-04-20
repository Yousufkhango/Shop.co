import React from "react";
import { useSelector } from "react-redux";
const SubTotalSidebar = () => {

  const cartLength = useSelector((state) => state.cart.items.length)


  return (
    <div className="min-w-[15rem] border-l border-l-white/10 p-6 sticky top-[3.5rem]">
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{cartLength} Items</span>
        <span className="text-info">Subtotal: {cartLength} Rs</span>
        <div className="card-actions">
          <button
            onClick={() =>
              alert("Please try to implement this functionality..!!")
            }
            className="btn btn-primary btn-block"
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubTotalSidebar;
