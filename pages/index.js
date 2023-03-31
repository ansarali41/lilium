import styles from '../styles/Home.module.css';
import Banner from '../Components/Home/Banner';
import SellBanner from '../Components/Home/HomeSellBanner';
import HomeFooter from '../Components/Home/HomeFooter';
import HomeCollection from '../Components/Home/HomeCollection';
import HomeWork from '../Components/Home/HomeWork';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NavContainer from '../Components/navContainer/NavContainer';
import HomeTeam from '../Components/Home/HomeTeam';

export default function Home() {
  return (
    <div className={`${styles.body} ${styles.bodyContainer}`}>
      <div className={styles.mainContent}>
        <NavContainer />
        <Banner />
        <SellBanner />
        <HomeWork />
        <HomeCarousel />
        <HomeTeam />
        <HomeCollection />
      </div>
      <div className="mt-auto">
        <HomeFooter />
      </div>
    </div>
  );
}
