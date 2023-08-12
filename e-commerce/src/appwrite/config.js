import conf from "../conf/conf";
import { Client, ID, Databases, Storage } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getProduct(slug) {
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectoinId, slug);
        } catch (error) {
            console.log("Appwrite service :: getProduct() :: " + error);
            return false;
        }
    }

    async getProducts(queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                queries
            );
        } catch (error) {
            console.log("Appwrite service :: getProducts() :: " + error);
            return false;
        }
    }

    async createProduct({ title, slug, description, image, price, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                slug,
                { title, description, image, price, userId }
            );
        } catch (error) {
            console.log("Appwrite service :: createProduct() :: " + error);
            return false;
        }
    }

    async updateProduct(slug, { title, description, image, price }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                slug,
                { title, description, image, price }
            );
        } catch (error) {
            console.log("Appwrite service :: updateProduct() :: " + error);
            return null;
        }
    }

    async deleteProduct(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectoinId, slug);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteProduct() :: " + error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: " + error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile() :: " + error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
    }
}

const service = new Service();

export default service;
