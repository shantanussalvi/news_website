import * as types from "../types/postTypes";

const initialState = {
  isLoading: true,
  posts: null
};

const postReducer= (state = initialState, {type, payload}) => {
  switch (type) {
    case types.SET_LOADING:
      state = {
        ...state, isLoading: payload
      };
      return state;
    case types.ADD_POST:
      state = {...state, posts:[...state.posts, payload]};
      return state;
    default:
      return state;
  }
}

export default postReducer;