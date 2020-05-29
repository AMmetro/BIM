import * as axios from "axios";



    const instance=axios.create ({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api`,
            headers: {"API-KEY":"dfa3df07-6fe1-42ec-85cb-0092d073f5e2"}
            });


export const userAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;
            })},

     follow (userId) {
        return instance.post(`/1.0/follow/${userId}`)  },

      unfollow (userId) {
        return instance.delete(`/1.0/follow/${userId}`) },

     getProfile (userId) {
       console.warn("obsolete method. Please use profileAPI object ")  // где это сообщение ? (backword compatibility)
        return profileAPI.getProfile(userId) },

    authMe () {
        return instance.get(`/1.0/auth/me`)     },

    login (email, password, rememberMe=false, captcha=null) {
              return instance.post(`/1.0/auth/login`, {email, password, rememberMe, captcha} )},

    Logout () {
        return instance.delete(`/1.0/auth/login`)},
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`/1.0/profile/` + userId)  },

    getStatus (userId){
        return instance.get(`/1.0/profile/status/`+userId )  },


    savePhoto (photoFile){
        const formData = new FormData ();
        formData.append("image", photoFile);
        return instance.put(`/1.0/profile/photo/`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
                     }            } ) },

    saveProfile (profile){
        console.log(profile)
            return instance.put(`/1.0/profile`, profile )
    },

    updateStatus (status){
        return instance.put(`/1.0/profile/status`, {status: status})  },
};


export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`/1.0/security/get-captcha-url`) },
 }

