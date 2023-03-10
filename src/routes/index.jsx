import Yummie from "components/Yummie";
import Login from "components/Login";
import { Route, Routes } from "react-router";
import Home from "pages/Home";
import About from "pages/About";
import Services from "pages/Services";
import NotFound from "pages/NotFound";
import StarWarsPeople from "pages/StarWarsPeople";
import StarWars from "pages/StarWars";
import StarWarsWithReducer from "pages/StarWarsWithReducer";
import CatBreeds from "pages/CatBreeds";
import CatFacts from "pages/CatFacts";
import Posts from "pages/Posts";
import PostsRedux from "pages/PostsRedux";
import Mui from "pages/Mui";

const WebsiteRouting = () => {
    return (
        <Routes>
            <Route path="/yummie" element={<Yummie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/starwars/:peopleId" element={<StarWarsPeople />} />
            <Route path="/starwars-with-reducer" element={<StarWarsWithReducer />} />
            <Route path="/cat-breeds" element={<CatBreeds />} />
            <Route path="/cat-facts" element={<CatFacts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts-redux" element={<PostsRedux />} />
            <Route path="/mui" element={<Mui />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default WebsiteRouting;
