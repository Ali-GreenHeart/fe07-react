const PostsReducer = (state, action) => {
    switch (action.type) {
        case 'AddPosts':
            return action.payload;
        default:
            return state;
    }
}

export default PostsReducer;
