import React, { useCallback, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import appwriteService from '../../../appwrite/config'
import { RiDeleteBinFill } from "react-icons/ri";
import './addCategory.css'
import { useSelector } from 'react-redux';

function AddCategoryForm() {
  const [category, setCategory] = useState(null)
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const productCategory = useSelector(state => state.product.products.map(item => item.category))
  // console.log('products',productCategory.filter(item => item == "acs-3030").length)
  // console.log('products',productCategory.filter(item => item == "acs-303").length)

  const onSubmit = async (data) => {
    // It Works
    await appwriteService.createCategory({ ...data, categorySlug: data.slug }).then(res => window.location.reload())
  }

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    appwriteService.getCategories().then((res) => setCategory(res.documents))
  }, [])

  // console.log('asdf', category)
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "categoryName") {
        setValue("slug", slugTransform(value.categoryName), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  // delete Category
  const deleteCategory = (e) =>{
    appwriteService.deleteCategory(e).then(res => window.location.reload())
  }

  return (
    <div>
      <form action={handleSubmit(onSubmit)} className='add-item-form add-category-form'>
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          maxLength="25"
          {...register('categoryName', { required: true })}
        />
        {errors.productName && <p className="error">Product Name is required</p>}
        <input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <button type='submit'>Add Category</button>
      </form>

      <div className="category-name-container">
        {category?.map((category) => (
          <div key={category.$id} >
            <h2>{category.categoryName}</h2>

            {productCategory.filter(item => item == category.categorySlug).length > 0 ? <p className='mr-1'> { productCategory.filter(item => item == category.categorySlug).length }</p>:<button onClick={() => deleteCategory(category.$id)}><RiDeleteBinFill />
            </button>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AddCategoryForm
