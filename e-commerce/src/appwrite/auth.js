import conf from "../conf/conf";
import { Client, Account } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // create a new record of user inside appwrite
    async createAccount({ email, password, name, username: id, prefs }) {
        try {
            const userAccount = await this.account.create(id, email, password, name);
            if (userAccount) {
                // create login feature
                const session = await this.login({ email, password });

                if (prefs && Object.keys(prefs).length > 0) {
                    await this.account.updatePrefs(prefs);
                }

                return session;
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() :: " + error);
        }

        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout() :: " + error);
        }
    }
}

const authService = new AuthService();

export default authService;
