import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getMsg(userId, toUserId) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectoinId, [
                Query.equal("userId", userId),
                Query.equal("toUserId", toUserId),
            ]);
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: " + error);
            return false;
        }
    }

    async sendMsg({ msg, userId, toUserId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                msg,
                { msg, userId, toUserId }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost() :: " + error);
            return false;
        }
    }

    async EditMsg(id, msg) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                id,
                { msg }
            );
        } catch (error) {
            console.log("Appwrite service :: updateProject() :: " + error);
            return null;
        }
    }

    async deleteMsg(id) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectoinId, id);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost() :: " + error);
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
