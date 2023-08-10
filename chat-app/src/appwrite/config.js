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

    subscribeMsgs(callback) {
        try {
            return this.client.subscribe(
                `databases.${conf.appwriteDatabaseId}.collections.${conf.appwriteCollectoinId}.documents`,
                callback
            );
        } catch (error) {
            console.log("Appwrite service :: subscribeMsgs() :: " + error);
            return false;
        }
    }

    async getMsgs() {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectoinId);
        } catch (error) {
            console.log("Appwrite service :: getMsgs() :: " + error);
            return false;
        }
    }

    async getMsg({ senderId, msgId }) {
        try {
            if (msgId) {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectoinId,
                    msgId
                );
            }

            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectoinId, [
                senderId ? Query.equal("senderId", senderId) : undefined,
            ]);
        } catch (error) {
            console.log("Appwrite service :: getMsg() :: " + error);
            return false;
        }
    }

    async sendMsg({ msg, senderId, attachmentId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectoinId,
                ID.unique(),
                { msg, senderId, attachmentId }
            );
        } catch (error) {
            console.log("Appwrite service :: sendMsg() :: " + error);
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
            console.log("Appwrite service :: EditMsg() :: " + error);
            return null;
        }
    }

    async deleteMsg(id) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectoinId, id);
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteMsg() :: " + error);
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
