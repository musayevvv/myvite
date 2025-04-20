import React from 'react';
import styles from './Home.module.css';
import { FiGift } from 'react-icons/fi';

const services = [
  { src: "services-01.jpg", title: "UI/UX design" },
  { src: "services-02.jpg", title: "Social Media" },
  { src: "services-03.jpg", title: "Marketing" },
  { src: "services-04.jpg", title: "Graphic" },
  { src: "services-05.jpg", title: "Digital Marketing" },
  { src: "services-06.jpg", title: "Market Research" },
  { src: "services-07.jpg", title: "Business" },
  { src: "services-08.jpg", title: "Branding" }
];

const works = [
  { src: "recent-work-01.jpg", title: "Social Media", desc: "Ullamco laboris nisi ut aliquip ex" },
  { src: "services-02.jpg", title: "Web Marketing", desc: "Psum officia anim id est laborum." },
  { src: "recent-work-03.jpg", title: "R & D", desc: "Sum dolor sit consectetur" },
  { src: "recent-work-04.jpg", title: "Social Media", desc: "Ullamco laboris nisi ut aliquip ex" },
  { src: "recent-work-05.jpg", title: "Web Marketing", desc: "Psum officia anim id est laborum." },
  { src: "recent-work-06.jpg", title: "R & D", desc: "Sum dolor sit consectetur" }
];

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1>
            Develop <span>Strategies</span> for your business
          </h1>
          <hr className={styles.underline} />
          <p>
            Purple Buzz is a corporate HTML template. 100% free by
            <a href="#"> TemplateMo</a>. Photos from
            <a href="#"> Unsplash</a> and <a href="#">Icons 8</a>.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <h2 className={styles.servicesTitle}>Services</h2>
        <div className={styles.serviceRow}>
          <FiGift className={styles.serviceIcon} />
          <div className={styles.serviceInfo}>
            <h3>Make Success for Future</h3>
            <div className={styles.lineAccent}></div>
            <p>
              You are free to use this template for your commercial or business websites. Redistribution is not allowed.
            </p>
          </div>
        </div>

        <div className={styles.tabs}>
          <button className={`${styles.tabButton} ${styles.tabActive}`}>All</button>
          <button className={styles.tabButton}>Graphics</button>
          <button className={styles.tabButton}>UI/UX</button>
          <button className={styles.tabButton}>Branding</button>
        </div>
      </section>

      {/* Service Grid */}
      <section className={styles.gridSection}>
        <div className={styles.gridContainer}>
          {services.map((item, index) => (
            <div className={styles.gridCard} key={index}>
              <img
                src={`https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/${item.src}`}
                alt={item.title}
              />
              <div className={styles.cardOverlay}>
                <h4>{item.title}</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className={styles.featuredBox}>
        <div className={styles.featuredContent}>
          <FiGift size={48} />
          <div className={styles.featuredText}>
            <h3>Great Transformations Successful</h3>
            <p>Quis ipsum suspendisse ultrices gravida.</p>
          </div>
          <div className={styles.featuredButton}>
            <button>View Our Work</button>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className={styles.worksSection}>
        <div className={styles.worksGrid}>
          {works.map((item, index) => (
            <div className={styles.worksItem} key={index}>
              <img
                src={`https://templatemo.com/templates/templatemo_561_purple_buzz/assets/img/${item.src}`}
                alt={item.title}
              />
              <div className={styles.worksText}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
