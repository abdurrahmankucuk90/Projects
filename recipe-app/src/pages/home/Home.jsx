import HomeStyle, { HomeImg, HeaderText } from "./Home.style.jsx";
import homeSvg from "../../assets/home.svg";
import Flex from "../../components/globalStyles/Flex.jsx";
import Header from '../../components/header/Header'

const Home = () => {
  return (
    
    <Flex wrap='wrap' column='column' >      
      <Header/>
      <HomeImg src={homeSvg}></HomeImg>
    </Flex>
  );
};

export default Home;
