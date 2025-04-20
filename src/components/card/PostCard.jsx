import React, { useEffect, useState } from 'react'
import appwriteService from "../../appwrite/config";
import { Link } from 'react-router-dom'
import './main-card.css'
import { Query } from 'appwrite';


function PostCard({ $id, productName, images_1, category, price, discount }) {
  const [categoryName, setCategoryName] = useState("")
  useEffect(() => {
    appwriteService.getCategories([Query.equal('categorySlug', category)]).then((res)=> setCategoryName(res.documents[0].categoryName))
  }, [])
  
  return (
    <Link to={`/item/${$id}`}>
      <div className="main-card">
        <figure>
          <img
            src={appwriteService.getFilePreview(images_1)}
            alt={productName} />
        </figure>
        <div className="card-text">
          <h2 className="card-title">{productName}</h2>
          <p>{categoryName}</p>
          <div className="price-sec">
            {
              discount > 0?
              <div>{price-discount}</div>:<div>{price}</div>
            }
            {
              discount > 0? 
              <div>{price}</div>:null
            }
            {
              discount > 0?
              <div>-{Math.round(discount/price*100)}%</div>:null
            }
          </div>
        </div>
      </div>
    </Link>
  )
}


export default PostCard