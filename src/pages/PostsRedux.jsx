import axios from "axios";
import PageContainer from "components/PageContainer";
import { useEffect } from "react";
import { connect } from "react-redux";

const url = `https://jsonplaceholder.typicode.com/posts`

const PostsRedux = ({ posts, dispatch }) => {
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


export default connect((state) => state)(PostsRedux);
