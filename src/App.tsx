// Components

import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import HomeContainer from "./containers/home-container";
import Lounge from "@components/lounge";
import { Route, Routes } from "react-router-dom";
import LayoutContainer from "./containers/layout-container";

import TestimonialLayout from "./containers/testimonial-container";
import ContactContainer from "./containers/contact-container";

export default function App() {
  return (
    <LayoutContainer>
      <Routes>
        <Route path="/" Component={HomeContainer} />
        <Route path="/services" Component={Subscribe} />
        <Route path="/contact" Component={ContactContainer} />
        <Route path="/reviews" Component={TestimonialLayout} />
        <Route path="/schedule" Component={Lounge} />
        {/* <Route path="/mypage" Component={MyPage} /> */}
      </Routes>
      <Footer />
    </LayoutContainer>
  );
}
