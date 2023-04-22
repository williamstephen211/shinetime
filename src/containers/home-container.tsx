import BackgroundComponent from "@components/landing-components/backgrounds";
import ExplainFive from "@components/landing-components/explain-five";
import ExplainFour from "@components/landing-components/explain-four";
import ExplainOne from "@components/landing-components/explain-one";
import ExplainSeven from "@components/landing-components/explain-seven";
import ExplainSix from "@components/landing-components/explain-six";
import ExplainThree from "@components/landing-components/explain-three";
import ExplainTwo from "@components/landing-components/explain-two";
import LandReview from "@components/landing-components/land-review";
import NewLife from "@components/landing-components/new-life";
import QuestionComponent from "@components/landing-components/questions";
import RandomOffer from "@components/landing-components/random-offer";
import TopicEight from "@components/landing-components/topic-eight";
import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function HomeContainer() {
  useEffect(() => {
    console.log("home");
    scroll.scrollToTop({ duration: 300, smooth: "easeOutQuint" });
  }, []);
  return (
    <>
      <BackgroundComponent />
      <ExplainOne />
      <ExplainTwo />
      {/* <ExplainThree />
      <ExplainFour />
      <ExplainFive />
      <ExplainSix />
      <LandReview />
      <ExplainSeven /> */}
      {/* <TopicEight />
      <RandomOffer /> */}
      <QuestionComponent />
      <ExplainThree />
      {/* <NewLife /> */}
    </>
  );
}
