import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    // userData

    async createUser({ user_id, shipping_address, postal_code, phone, city, country }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId7,
                ID.unique(),
                {
                    user_id,
                    shipping_address,
                    postal_code,
                    phone,
                    city,
                    country
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createUser :: error", error);
        }
    }

    async updateUser(slug, { user_id, shipping_address, postal_code, phone, city, country }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId7,
                slug,
                {
                    user_id,
                    shipping_address,
                    postal_code,
                    phone,
                    city,
                    country
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updateUser :: error", error);
        }
    }

    async getUsers(queries) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId7,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getUsers :: error", error);
            return false
        }
    }


    // item
    async createItem({ productName, price, discount, description, category, stock, images_1, images_2, images_3, images_4, images_5 }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                ID.unique(),
                {
                    productName,
                    price,
                    discount,
                    description,
                    category,
                    stock,
                    images_1,
                    images_2,
                    images_3,
                    images_4
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createItem :: error", error);
        }
    }

    async updateItem(slug, { productName, price, discount, description, category }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                slug,
                {
                    productName,
                    price,
                    discount,
                    description,
                    category
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deleteItem(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                slug

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getItem(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getProducts(queries) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId3,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId2,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId2,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId2,
            fileId
        )
    }

    // Store Profile
    async createStore({ store_logo, store_desc }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId6,
                ID.unique(),
                {
                    store_logo,
                    store_desc,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createStore :: error", error);
        }
    }

    async updateStore(slug, { store_logo, store_desc }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId6,
                slug,
                {
                    store_logo,
                    store_desc
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updateStore :: error", error);
        }
    }


    async getStore() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId6,
            )
        } catch (error) {
            console.log("Appwrite serive :: getStore :: error", error);
            return false
        }
    }

    getLogo(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId1,
            fileId
        )
    }
    // category section
    async createCategory({ categoryName, categorySlug }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId5,
                ID.unique(),
                {
                    categoryName,
                    categorySlug
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updateCategory(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId5,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async getCategories(queries) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId5,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getCategories :: error", error);
            return false
        }
    }

    async deleteCategory(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId5,
                slug

            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async uploadSellerFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId1,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadSellerFile :: error", error);
            return false
        }
    }

    getCtgPreView(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId1,
            fileId
        )
    }

    // Order
    async createOrder({ items, user_id, userName, shipingAddress, totalPrice, shipingCost }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId8,
                ID.unique(),
                {
                    items,
                    user_id,
                    userName,
                    shipingAddress,
                    totalPrice,
                    shipingCost
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createOrder :: error", error);
        }
    }

    async getOrders(queries) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId8,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getOrders :: error", error);
            return false
        }
    }

    
    async getOrder(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId8,
                slug

            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
}


const service = new Service()
export default service