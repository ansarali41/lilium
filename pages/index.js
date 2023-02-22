import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Banner from '../Components/Home/Banner';
import SellBanner from '../Components/Home/HomeSellBanner';
import HomeLastPart from '../Components/Home/HomeLastPart';
import HomeFooter from '../Components/Home/HomeFooter';
import HomeCollection from '../Components/Home/HomeCollection';
import HomeWork from '../Components/Home/HomeWork';
import HomeCarousel from '../Components/Home/HomeCarousel';
//import Carousel from '../Components/Home/Carousel';
export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <Banner />
      <SellBanner />
      <HomeWork />
      <HomeLastPart />
      {/* <Carousel /> */}
      <HomeCarousel />
      <HomeCollection />
      <HomeFooter />
    </div>
  );
}
