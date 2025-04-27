import styles from '../styles/Landing.module.css';
import Image from 'next/image';

export default function Landing() {
  return (
    <div>
      <div className={styles.container}>
        <section className={styles.splitSection}>
          <div className={`${styles.column} ${styles.investorsColumn}`}>
            <h2>Investors</h2>
            <p>Invest in a better future - one farm at a time.</p>
            {/* Add more investor content */}
            <button className={`${styles.button} ${styles.investButton}`}>
              Start Investing
            </button>
          </div>

          <div className={styles.centerSvg}>
            <Image
              src="/combo.svg"
              alt="Connection Symbol"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>

          <div className={styles.arrowLeft}></div>
          <div className={styles.arrowRight}></div>

          <div className={`${styles.column} ${styles.farmersColumn}`}>
            <h2>Farmers</h2>
            <p>Unlock the true potential of your land.</p>
            {/* Add more farmer content */}
            <button className={`${styles.button} ${styles.getFundedButton}`}>
              Get Funded
            </button>
          </div>
        </section>
      </div>

      <section className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo2.svg"
            alt="Plantify Logo"
            width={150}
            height={150}
            layout="responsive"
          />
        </div>
        <div className={styles.description}>
          <h3>Every Element Has a Purpose</h3>
          <p>Our name and logo were carefully crafted to reflect our mission of growth, connection, and sustainability.</p>
        </div>
      </section>
    </div>
  );
}
