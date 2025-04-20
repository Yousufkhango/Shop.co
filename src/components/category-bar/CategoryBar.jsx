import React, { useEffect, useState } from 'react'
import appwriteService from '../../appwrite/config'
import './categoryBar.css'

function CategoryBar() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        appwriteService.getCategories().then((res) => setCategories(res.documents))
    }, [])
    return (
        <div className='categoryBar'>
            {categories?.map((ctg) => {
                return (
                    <div key={ctg.$id}>
                        <a href={`/category/${ctg.categorySlug}`}>
                            {ctg.categoryName}
                        </a>
                    </div>
                );
            })}
        </div>
    )
}

export default CategoryBar
