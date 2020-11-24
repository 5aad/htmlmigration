import React from 'react'
import styles from '../styles/Home.module.css'

export default function dashboard() {
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
            <section className={styles.dashboardSection}>
                <div className="container-fluid">
                    <div className={`${styles.userSide} mt-1 text-center`}>
                        <a className={styles.userImg} href="#"><i className="far fa-user"></i></a>
                        <div className={styles.userName}>@username</div>
                    </div>
                    <div className={styles.dashboardParent}>
                        <div className="row">
                            <div className="col-md-3">
                                <div className={`${styles.dashboardLinks} mt-5`}>
                                    <a className={styles.sideLinks} href="#">Edit Profile</a>
                                    <a className={styles.sideLinks} href="#">Password</a>
                                    <a className={styles.sideLinks} href="#">Payment Methods</a>
                                    <a className={styles.sideLinks} href="#">Pages</a>
                                    <a className={styles.sideLinks} href="#">Notifications</a>
                                    <a className={styles.sideLinks} href="#">Recent Activity</a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className={`${styles.dashboardTwo} `}>
                                    <h1 className={`${styles.mainHeading} mt-0`}>Dashboard</h1>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <div className={`${styles.dashboardBox } `}>
                                                <div className={`${styles.mainText} text-center`}>Favorites</div>
                                                <div className={`${styles.mainText} mt-2`}>This week</div>
                                                <div className={`${styles.smallBoxes} mt-2`}>
                                                    <div className={`${styles.box}`}></div>
                                                    <div className={`${styles.box} `}></div>
                                                    <div className={`${styles.box} `}></div>
                                                </div>
                                                <div className={`${styles.mainText} mt-4`}>Goals</div>
                                                <div className={`${styles.smallBoxes} mt-2`}>
                                                    <div className={`${styles.box} `}></div>
                                                    <div className={`${styles.box} `}></div>
                                                    <div className={`${styles.box} `}></div>
                                                </div>
                                                <div className={`${styles.mainText} mt-4`}>Next Style</div>
                                                <div className={`${styles.smallBoxes} mt-2`}>
                                                    <div className={`${styles.box}`}></div>
                                                    <div className={`${styles.box}`}></div>
                                                    <div className={`${styles.box} `}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-4 mt-md-0">
                                            <div className={`${styles.dashboardBox} pr-3 `}>
                                                <div className={`${styles.mainText} text-center`}>My appointments</div>
                                                <div className={styles.myAppoiment}>
                                                    <div className={`${styles.myAppoimentBox}`}>
                                                        <div>
                                                            <div className={`${styles.mainText} mb-4`}>Wed, Dec 12, 2020</div>
                                                            <div className={styles.mainText}>Bantu knots</div>
                                                        </div>
                                                        <div>
                                                            <div className={`${styles.box} mr-0 mb-2`}>
                                                                <div className={styles.mainText}>style</div>
                                                            </div>
                                                            <span className={`${styles.mainText} pr-5`}>2.5hrs</span>
                                                            <span className="circle"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
