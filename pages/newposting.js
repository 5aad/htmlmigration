import React from "react";
import styles from "./styles/Home.module.css";
import SmallBox from "./components/SmallBox";
export default function newposting() {
  return (
    <div>
      <div className={styles.topHeader}>
        <div className="container-fluid">
          <div className={styles.headerButtons}>
            <a className={styles.headerBtn__close} href="#"></a>
            <a className={styles.headerBtn__minimize} href="#"></a>
            <a className={styles.headerBtn__maximize} href="#"></a>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className="container-fluid">
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
      <section className={styles.postingSection}>
        <div className="container-fluid">
          <a className={styles.newPosting} href="#">
            <i className="fas fa-plus"></i> New Posting
          </a>
          <div className={styles.dashboardParent}>
            <div className="row">
              <div className={`col-md-2 ${styles.borderCol}`}>
                <div className={`${styles.dashboardLinks} mt-5`}>
                  <a className={styles.sideLinks} href="#">
                    Edit Profile
                  </a>
                  <a className={styles.sideLinks} href="#">
                    Password
                  </a>
                  <a className={styles.sideLinks} href="#">
                    Payment Methods
                  </a>
                  <a className={styles.sideLinks} href="#">
                    Pages
                  </a>
                  <a className={styles.sideLinks} href="#">
                    Notifications
                  </a>
                  <a className={styles.sideLinks} href="#">
                    Recent Activity
                  </a>
                </div>
              </div>
              <div className={`col-md-8 ${styles.borderCol}`}>
                <div className={`${styles.smallBoxes} mt-3`}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={`${styles.smallBoxes} mt-2`}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={`${styles.smallBoxes} mt-2`}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
                <div className={`${styles.smallBoxes} mt-2`}>
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                  <SmallBox />
                </div>
              </div>
              <div className="col-md-2">
                <div className={styles.todayList}>
                  <div className={styles.today}>Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
