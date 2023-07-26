import { callPostApi, callDeleteApi, callPutApi, callGetApi } from "./api";

// --------------------------------- FAQ -------------------------------- //

// get faq all Data API Function //
export async function faqAllData(data) {
    try {
        const response = await callPostApi({ url: "faqs/get/list", body: data }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// add[Sign-up] User Data API Function //
export async function SignUpUser(data) {
    try {
        const response = await callPostApi({ url: "users/sign-up", body: data }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// add[Sign-In] User Data API Function //
export async function SignInUser(data) {
    try {
        const response = await callPostApi({ url: "users/sign-in", body: data }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// edit faq Data API Function 
export async function EditFaqData(data) {
    try {
        const response = await callPutApi({ url: "faqs/update_faqs", body: data }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// delete faq Data API Function...
export async function DeleteFaqDataApi(id) {
    try {
        const response = await callDeleteApi({ url: `faqs/delete_faqs/${id}` }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}

// get faq Data by id API Function...
export async function getFaqDataById(id) {
    try {
        const response = await callGetApi({ url: `faqs/${id}` }).then((res) => {
            return res;
        });
        return response;
    } catch (error) {
        throw error;
    }
}