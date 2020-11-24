import React from 'react'
import styles from '../styles/Home.module.css'

export default function newposting() {
    return (
        <div>
             <div className={styles.topHeader}>
                <div className="container-fluid">
                    <div className={styles.headerButtons}>
                        <a className={styles.headerBtn} href="#"></a>
                        <a className={styles.headerBtn} href="#"></a>
                        <a className={styles.headerBtn} href="#"></a>
                    </div>
                </div>
            </div>
            <div className={styles.mainHeader}>
                <div className="container-fluid">
                    <a className={styles.brandLogo} href="#">Mimbbo</a>
                    <a className={styles.user} href="#"><i className="far fa-user"></i></a>
                </div>
            </div>
            <section className={styles.postingSection}>
                <div className="container-fluid">
                    <a className={styles.newPosting} href="#"><i className="fas fa-plus"></i> New Posting</a>
                    <div className={styles.dashboardParent}>
                        <div className="row">
                            <div className={`col-md-2 ${styles.borderCol}`}>
                                <div className={`${styles.dashboardLinks} mt-5`}>
                                    <a className={styles.sideLinks} href="#">Edit Profile</a>
                                    <a className={styles.sideLinks} href="#">Password</a>
                                    <a className={styles.sideLinks} href="#">Payment Methods</a>
                                    <a className={styles.sideLinks} href="#">Pages</a>
                                    <a className={styles.sideLinks} href="#">Notifications</a>
                                    <a className={styles.sideLinks} href="#">Recent Activity</a>
                                </div>
                            </div>
                            <div className={`col-md-8 ${styles.borderCol}`}>
                                <div className={`${styles.smallBoxes} mt-3`}>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                </div>
                                <div className={`${styles.smallBoxes} mt-2`}>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                </div>
                                <div className={`${styles.smallBoxes} mt-2`}>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                </div>
                                <div className={`${styles.smallBoxes} mt-2`}>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
                                    <div className={styles.box}></div>
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
    )
}
