import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Banner from '../Components/Home/Banner';
import SellBanner from '../Components/Home/HomeSellBanner';
import HomeLastPart from '../Components/Home/HomeLastPart';
import HomeFooter from '../Components/Home/HomeFooter';
import HomeCollection from '../Components/Home/HomeCollection';
import HomeWork from '../Components/Home/HomeWork';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NavContainer from '../Components/navContainer/NavContainer';
//import Carousel from '../Components/NavContainer/Carousel';
export default function Home() {
  return (
    <div className={styles.body}>
      <NavContainer />
      <Header />
      <Banner />
      <SellBanner />
      <HomeWork />
      {/*<HomeLastPart />*/}
      {/* <Carousel /> */}
      <HomeCarousel />
      <HomeCollection />
      <HomeFooter />
    </div>
  );
}
