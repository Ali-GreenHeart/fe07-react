import Yummie from "components/Yummie";
import Login from "components/Login";
import { Route, Routes } from "react-router";
import Home from "pages/Home";
import About from "pages/About";
import Services from "pages/Services";
import NotFound from "pages/NotFound";
import StarWars from "pages/StarWars";

const WebsiteRouting = () => {
    return (
        <Routes>
            <Route path="/yummie" element={<Yummie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/starwars/:peopleId" element={<StarWars />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default WebsiteRouting;
