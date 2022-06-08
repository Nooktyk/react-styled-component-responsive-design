import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(100% 0%, 65% 0%, 45% 100%, 100% 100%);
  background-color: #e91e1e;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 45% 0%, 25% 100%, 0% 100%);
  background-color: #f761b6;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 25% 0%, 80% 100%, 0% 100%);
  background-color: #9c4de1;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 80% 0%, 25% 100%, 0% 100%);
  background-color: #0c3f7e;
`;

const ContactShape = styled.div`
  ${Shape}
  clip-path: polygon(0% 0%, 25% 0%, 80% 100%, 0% 100%);
  background-color: #95cdf2;
`;

const App = () => {

  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <ContactShape />
        <Footer />
      </Container>
    </>
  );
};

export default App;
