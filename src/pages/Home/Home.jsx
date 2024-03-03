import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";
import Footer from "../Shared/Footer/Footer";


const Home = () => {
    // news data loaded from home router
    const news = useLoaderData();
    // console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News container */}
                <div className="md:col-span-2">
                  {
                    news.map((aNews )=> <NewsCart
                        key={aNews._id}
                        news={aNews}
                        ></NewsCart>)
                  }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;