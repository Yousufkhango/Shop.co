import React, { useState, useEffect } from "react";
import appwriteService from "../../../appwrite/config";
import { PostCard } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../../../store/productSlice";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const productsToShow = useSelector((state) => state.product);
  const search = productsToShow.filters?.search;
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const dispatch = useDispatch();
  useEffect(() => {
    appwriteService.getProducts().then((res) => {
      // setProducts(res.documents)
      dispatch(addProducts(res.documents));
    });
    setProducts(productsToShow.products?.filter((p) => p.productName.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)));
  }, [search]);

  return (
    <>
      {products?.length <= 0 || products === undefined ? (
        <div className="w-full h-full flex items-center justify-center mt-6">
          <p className="text-xl font-semibold">Loading..!!</p>
        </div>
      ) : (
        <div className="body-container">

          {
            products.length >= 4 ? <section id="new_arival" className="border-2">
              <h1>NEW ARRIVALS</h1>
              <div className="container-sec">

                {products?.slice(0, 4).map((product) => {
                  return (
                    <PostCard
                      key={product.$id}
                      {...product}
                    />
                  );
                })}
              </div>
              <div className="action-btn">
                <button className="see-all" onClick={() => navigate('/shop')}>See All</button>
              </div>
            </section> : null
          }
          <div className="divider" />
          <section id="first" className="border-2">
            <h1>LATEST IN MEN</h1>
            <div className="container-sec">
              {products?.filter((p) => p.category == 'men').map((product) => {
                return (
                  <PostCard
                    key={product.$id}
                    {...product}
                  />
                );
              })}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Body;
