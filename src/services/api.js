import axios from 'axios'; 

//const URL = "https://jsonplaceholder.typicode.com/users"

const URL = "http://10.0.2.2:3000/users/"


export const getUsers = async () => await axios.get(URL)
export const addUser = async (body) => await axios.post(URL, body)
export const getUserById = async (id) => await axios.get(URL  + id )
export const deleteUserById = async (id) => await axios.delete(URL + id)
export const modifyUserById = async (id, body) => await axios.put(URL + id, body)


//Interceptors
// Add a request interceptor
axios.interceptors.request.use( (config) => {
    // Do something before request is sent

    console.log("@REQUEST config ==================== ")
    console.log(config)
    console.log("@REQUEST config ==================== ")


    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // const token = store.getState().session.token;
    // config.headers.Authorization =  token;


    console.log("@RESPONSE config ==================== ")
    console.log(response)
    console.log("@RESPONSE config ==================== ")
    return response;
  },(error)  => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });