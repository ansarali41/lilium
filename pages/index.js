import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Banner from '../Components/Home/Banner';
import SellBanner from '../Components/Home/sellBanner';
export default function Home() {
  return (
    <div className={styles.body}>
      <Header />
      <Banner />
      <SellBanner />
    </div>
  );
}
