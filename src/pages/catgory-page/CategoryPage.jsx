import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import appwriteService from '../../appwrite/config'
import { PostCard } from '../../components'
import { Query } from 'appwrite'
import { useSelector } from 'react-redux'
import './category.css';

function CategoryPage() {
  const { slug } = useParams()
  const [products, setProducts] = useState([])
  const search = useSelector((state) => state.product.filters?.search);

  useEffect(() => {
    appwriteService.getProducts([Query.equal('category', slug)]).then((res) => {
      setProducts(res.documents)
    })
  }, [])

  return (
    <div className="category">
      <div className="category-container">
        {products?.filter((p) => p.productName.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)).map((product) => {
          return (
            <PostCard
              key={product.$id}
              {...product}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CategoryPage
