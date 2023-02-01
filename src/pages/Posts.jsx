import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import PostsReducer from "reducers/PostsReducer";
import PageContainer from "../components/PageContainer"

const url = `https://jsonplaceholder.typicode.com/posts`
const Posts = () => {
    const [posts, dispatch] = useReducer(PostsReducer, [])
    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({ type: 'AddPosts', payload: data })
        })
    }, [])
    return <PageContainer>
        {
            posts.map(({ id, title }) => <p key={id}>{title}</p>)
        }
    </PageContainer>
}
export default Posts;
