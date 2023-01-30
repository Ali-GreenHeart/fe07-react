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
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default WebsiteRouting;
