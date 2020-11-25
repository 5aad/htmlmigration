import Head from "next/head";
import styles from "./styles/Home.module.css";
import Popup from "./components/Popup";
import SmallBox from "./components/SmallBox";
import BigBox from "./components/BigBox";
export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topHeader}>
        <div className="home__container-fluid">
          <div className="home__headerButtons">
            <a className={styles.headerBtn__close} href="#"></a>
            <a className={styles.headerBtn__minimize} href="#"></a>
            <a className={styles.headerBtn__maximize} href="#"></a>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className="home__container-fluid">
          <a className={styles.brandLogo} href="#">
            Mimbbo
          </a>
          <a className={styles.user} href="#">
            <img
              src="https://pickaface.net/gallery/avatar/20130418_031200_708_dp.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <section className={styles.heroSection}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className={`${styles.searchArea} mt-4`}>
                <input
                  className={styles.searchInput}
                  type="text"
                  name=""
                  id=""
                  placeholder="What's next?"
                />
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
          <div className="container ml-5 pl-5">
          <h1 className={`${styles.mainHeading} mt-5 pl-0`}>Most Viewed</h1>
          </div>
          <div className="row">
            <div className={styles.boxesParent}>
              <div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <BigBox />
              </div>
              <div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <BigBox />
              </div>
            </div>
          </div>
          <div className="container ml-5 pl-5">
          <h1 className={`${styles.mainHeading} mt-2 pl-0`}>Most Faved</h1>
          </div>
          <div className="row mt-4">
            <div className={styles.boxesParent}>
              <div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <BigBox />
              </div>
              <div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={styles.smallBoxes}>
                  <SmallBox />
                  <SmallBox />
                </div>
              </div>
              <div className=" my-3 my-md-0">
                <BigBox />
              </div>
            </div>
          </div>
          <Popup />
        </div>
      </section>
    </div>
  );
}
