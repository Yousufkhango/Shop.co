// TODO: Submit All Data to DraftSlice 

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import appwriteService from "../../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropzone, FileMosaic } from "@files-ui/react";
// import { clearDraft, createDraft } from "../../draft/draftSlice"; //use for making preview functionality
import "./addForm.css"

export default function AddItemForm({ editData }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const userData = useSelector((state) => state.auth.userData);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            productName: editData?.productName || "",
            description: editData?.description || "",
            category: editData?.category || "",
            price: editData?.price || "",
            discount: editData?.discount || "",
        },
    });

    const [category, setCategory] = useState([])
    useEffect(() => {
        appwriteService.getCategories([]).then((c) => {
            if (c) {
                setCategory(c.documents)
                console.log(c)
            }
        })
    }, [])
    console.log(category)


    const onSubmit = async (d) => {
        const data = { ...d, images: files }
        if (editData) {
            // It Works
            const file01 = data.images[1] ? await appwriteService.uploadFile(data.images[1]) : null;
            const file02 = data.images[2] ? await appwriteService.uploadFile(data.images[2]) : null;
            const file03 = data.images[3] ? await appwriteService.uploadFile(data.images[3]) : null;
            const file04 = data.images[4] ? await appwriteService.uploadFile(data.images[4]) : null;
            const file05 = data.images[0] ? await appwriteService.uploadFile(data.images[0]) : null;

            if (file05, file01, file02, file03, file04) {
                appwriteService.deleteFile(editData.images_1)
                appwriteService.deleteFile(editData.images_2);
                appwriteService.deleteFile(editData.images_3);
                appwriteService.deleteFile(editData.images_4);
                appwriteService.deleteFile(editData.images_5);
            }

            const dbItem = await appwriteService.updateItem(editData.$id, {
                ...data,
                // images: file ? file.$id : undefined
            });

            if (dbItem) {
                navigate(`/post/${dbItem.$id}`);
            }
        } else {
            // It Works
            const file = await appwriteService.uploadFile(data.images[0].file);
            const file02 = await appwriteService.uploadFile(data.images[1].file);
            const file03 = await appwriteService.uploadFile(data.images[2].file);
            const file04 = await appwriteService.uploadFile(data.images[3].file);

            if (file, file02, file03, file04) {


                const fileId = file.$id;
                data.images_1 = fileId;

                const fileId02 = file02.$id;
                data.images_2 = fileId02;

                const fileId03 = file03.$id;
                data.images_3 = fileId03;

                const fileId04 = file04.$id;
                data.images_4 = fileId04;

                const dbItem = await appwriteService.createItem({ ...data });

                if (dbItem) {
                    navigate(`/item/${dbItem.$id}`);
                }
            }
        }
    };


    const [files, setFiles] = React.useState([]);
    const updateFiles = (incommingFiles) => {
        //do something with the files
        console.log("incomming files", incommingFiles);
        setFiles(incommingFiles);
        //even your own upload implementation
    };
    const removeFile = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="add-item-form">

            <Dropzone
                onChange={updateFiles}
                value={files}
                maxFiles={4}
                accept="image/*"
                style={{ position: "static" }}
            >
                {files.map((file) => (
                    <FileMosaic key={file.id} {...file} onDelete={removeFile} info preview />
                ))}
            </Dropzone>

            <label htmlFor="productName">Product Name:</label>
            <input
                type="text"
                id="productName"
                maxLength="49"
                {...register('productName', { required: true })}
            />
            {errors.productName && <p className="error">Product Name is required</p>}

            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                {...register('description', { required: true })}
            ></textarea>
            {errors.description && <p className="error">Description is required</p>}

            <label htmlFor="category">Category:</label>
            <select id="category" {...register('category', { required: true })} className="bg-base-100">
                <option> select category</option>
                {category.map((category) => (
                    <option key={category.$id} value={category.categorySlug}>
                        {category.categoryName}
                    </option>
                ))}
            </select>
            {errors.category && <p className="error">Category is required</p>}



            <label htmlFor="price">Price:</label>
            <input
                type="number"
                id="price"
                placeholder="Enter Retail Price"
                {...register('price', { required: true })}
            />
            {errors.price && <p className="error">Price is required</p>}

            <label htmlFor="discount">Discount:</label>
            <p className="text-red-500 text-left text-sm">Enter Discount (optional)* </p>
            <input type="number" id="discount" {...register('discount')} placeholder="Enter Discount if aplicable" />

            <label htmlFor="stock">In-Stock:</label>
            <select id="stock" {...register('stock', { required: true })} className="bg-base-100">
                <option value="true" selected>In-Stock</option>
                <option value="false">Out of Stock</option>
            </select>
            {errors.price && <p className="error">Price is required</p>}

            <button type='submit'>Submit</button>
        </form>
    )
}
