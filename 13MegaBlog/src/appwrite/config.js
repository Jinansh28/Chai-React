import conf from "../config/conf";
import { Client, ID, TablesDB, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    tablesDB;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.tablesDB= new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.tablesDB.createRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title, content, featuredImage, status}){
        try {
            return await this.tablesDB.updateRow(
                appwriteDatabaseId,
                appwriteTableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            await this.tablesDB.deleteRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug
            )
            return true
        } catch (error) {
            throw error
        }
        return false
    }

    async getPost(slug){
        try {
            return await this.tablesDB.getRow(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                slug,
            )
        } catch (error) {
            throw error
        }
        return false
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.tablesDB.listRows(
                conf.appwriteDatabaseId,
                conf.appwriteTableId,
                queries,
            )
        } catch (error) {
            throw error
        }
        return false
    }


    // File upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            throw error
        }
        return false
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            throw error
        }
        return false
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
    
}

const service = new Service()
export default service