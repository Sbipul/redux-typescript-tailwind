import Header from "../../components/Header/Header";
import { FC } from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import AllPosts from "../../components/AllPosts/AllPosts";
const Home: FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <AllPosts />
      <Footer />
    </div>
  );
};

export default Home;
