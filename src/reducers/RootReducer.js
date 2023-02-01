const initialState = {
    posts: []
}
// state = store

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AddPosts':
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}
export default RootReducer;
