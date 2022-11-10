import * as types from "../types/postTypes"

const setLoading = (data) => ({
    type: types.SET_LOADING,
    payload: data
})

const addPost = (data) => ({
    type: types.ADD_POST,
    payload: data
})

export const newPost = (data, image, setProgress)=>(dispatch)=>{
    console.log(data);
}