import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import appwriteService from '../../appwrite/config'
import { Query } from 'appwrite';
import { PostCard } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice'
import './itempage.css'

function ItemPage() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const [item, setItem] = useState(null);
    const isInCart = cart.items?.find((e) => e.id === item?.$id) !== undefined;
    const { slug } = useParams();
    const [otherItems, setOtherItems] = useState([])


    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    let isAuthor = false
    if (userData) {
        if (userData.labels[0] === 'seller') {
            isAuthor = true
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (slug) {
            appwriteService.getItem(slug).then((item) => {
                if (item) {
                    setItem(item);
                    appwriteService.getProducts([Query.equal('category', item?.category), Query.notEqual('$id', item.$id)]).then((otherItem) => {
                        if (otherItem) setOtherItems(otherItem.documents)
                    })
                }

                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);


    const [categoryName, setCategoryName] = useState("")
    appwriteService.getCategories([Query.equal('categorySlug', item?.category)]).then((res) => setCategoryName(res.documents[0].categoryName))
    useEffect(() => {
    }, [])


    const deletePost = () => {
        if (confirm('Are You Sure You Want To Delete This Item') == true) {

            appwriteService.deleteItem(slug).then((status) => {
                if (status) {
                    appwriteService.deleteFile(item.images_1);
                    appwriteService.deleteFile(item.images_2);
                    appwriteService.deleteFile(item.images_3);
                    appwriteService.deleteFile(item.images_4);
                    navigate("/");
                }
            });
        }
    };

    const [imga, setImga] = useState("true")
    function changePic1(e) {
        setImga(e.target.src)
    }

    // cart System

    const AddToCart = () => {
        if (item.stock == 'false') {
            alert("Item Out of Stock")
        }
        else {
            const qtyItem = {...item, qty: count}
            dispatch(addItem(qtyItem))
        }
    }

    // qty setup
    const [count, setCount] = useState(1);
    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => Math.max(1, prev - 1));

    return item ? (
        <div className="item-page">
            {isAuthor && (
                <div className="editDelBtn">
                    <Link to={`/edit-post/${item.$id}`} className="edit">
                        <button>
                            Edit <i class="fa fa-edit" />
                        </button>
                    </Link>
                    <button onClick={deletePost} className="delete">
                        Delete <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            )}
            <div className='item-container'>
                <div className="imgDiv">
                    <div className="main-img">
                        {
                            imga != "true" ? <img src={imga}></img> : <img src={appwriteService.getFilePreview(item.images_1)}></img>
                        }
                    </div>
                    <div className="imgButtons">
                        <div onClick={changePic1}><img src={appwriteService.getFilePreview(item.images_1)} alt="" /></div>
                        <div onClick={changePic1}><img src={appwriteService.getFilePreview(item.images_2)} alt="" /></div>
                        <div onClick={changePic1}><img src={appwriteService.getFilePreview(item.images_3)} alt="" /></div>
                        <div onClick={changePic1}><img src={appwriteService.getFilePreview(item.images_4)} alt="" /></div>
                    </div>
                </div>
                <div className="text-area">
                    <div className="title">
                        <h1>{item.productName}</h1>
                    </div>
                    <div className="price-section">
                        <span className="price-span">
                            <span>RS</span>
                            <span className="price">{item.price - item.discount}</span>
                        </span>
                        <span className="price-span">
                            <span>RS</span>
                            <span className="price">{item.price}</span>
                        </span>
                        <div>
                            {`-${Math.round(item.discount / item.price * 100)}% OFF`}
                        </div>
                    </div>
                    <div className="availablity">
                        <span className="label">Availablity</span>
                        <span className="stock">{item.stock == 'true' ? <span className='text-green-500'>In-Stock</span> : <span className='text-red-500'>Out-of-stock</span>}</span>
                    </div>
                    <div className="category-sec">
                        <span> <button onClick={() => navigate('/')}>Home</button> &gt; <button onClick={() => navigate('/shop')}>Shop</button> &gt; <button onClick={() => navigate(`/category/${item.category}`)}>{categoryName}</button></span>
                    </div>
                    <div className="desc-section">
                        <h1>Description:</h1>
                        <p>{item.description}</p>
                    </div>
                    {
                        isInCart ? <p className='item-added'>Item Added !</p> : <div className="order-btns">

                            <div className="qty">
                                <button onClick={handleDecrement}>−</button>
                                <span className='count'>{count}</span>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                            <button onClick={AddToCart} disabled={item.stock == 'false'? true:false} className={item.stock == 'false'? 'opacity-30': null}>Add To Cart</button>
                        </div>
                    }
                </div>
            </div>
            {
                otherItems.length != 0 ? <div className='otherItemsParent'>
                    <div>
                        <h2>You may also like</h2>
                    </div>
                    <div className="other-items">
                        {otherItems.map((e) => (
                            <div key={e.$id}>
                                <PostCard {...e} />
                            </div>
                        ))}
                    </div>
                </div> : null
            }
            {/* <div className="last-row">
                <div className="order-btns">
                    <button className="share-btn">
                        <a href={`https://wa.me/?text=https://rhino-scales.netlify.app/item/${item.$id}`} target="_blank">
                            <span>Share </span>
                            <img src="/share.png" />
                        </a>
                    </button>
                    <button><a href={`https://wa.me/+923197377307?text=https://rhino-scales.netlify.app/item/${item.$id}%0AQuantity%20${qty}%0APrice%20Per%20Unit:%20${(qty > 2) ? item.price - item.discount : item.price}%0ATotal%20Price:%20${(item.price - item.discount) * qty}%0APlace%20Order%20Now`} target="_blank">Buy Now</a></button>
                </div>
            </div> */}
        </div>
    ) : null;
}

export default ItemPage
