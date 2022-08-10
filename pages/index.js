import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Notification from '../components/Notification';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sports from '../components/Sports';
import Triangle from '../components/Triangle';
import Card from '../components/Card';
import Referenca from '../components/Referenca';
import About from '../components/About';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Button from '../components/Button';
export default function Home() {
  const cards = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur23 43',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 3434',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 3433',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 343',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 12',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 78',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 6523',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur 3534265',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae exercitationem doloremque dolores reprehenderit? Mollitia eaque obcaecati',
    },
  ];

  useEffect(() => {
    // set up text to print, each item in array is new line
    var aText = new Array('Lorem Ipsum has', "been the industry's.");
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

    function typewriter() {
      sContents = ' ';
      iRow = Math.max(0, iIndex - iScrollAt);
      var destination = document.getElementById('typedtext');

      while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
      }
      destination.innerHTML = `
        ${sContents}  ${aText[iIndex].substring(
        0,
        iTextPos
      )}   <span class='lightSabre'> |</span>`;
      if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          setTimeout(typewriter, 500);
        }
      } else {
        setTimeout(typewriter, iSpeed);
      }
    }
    typewriter();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Nada Macura | Dobrodosli!</title>
        <meta name='description' content='Nada Macura Landing Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Navbar />
        <section className={styles.hero}>
          <Notification />
          <div className={styles.heroTextContainer}>
            <Hero />
          </div>
        </section>
        <section className={styles.kategorije_1}>
          <Sports />
          <Triangle />
          <div className={styles.kategorije_2}>
            <div className={styles.cards}>
              <Card cards={cards} />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '4rem',
              }}
            >
              <Button style={styles.btnTransparent} text='All services' />
            </div>
          </div>
        </section>
        <section className={styles.moto}>
          <span className={styles.motoImage}>
            <Image width={800} height={1000} src='/pehar.png' />
          </span>
          <span className={styles.motoImage}>
            <img src='/4000kwp.png' />'
          </span>
          <div className={styles.motoText}>
            <p>
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Libero officia fuga obcaecati.&quot; - Jack Welch
            </p>
          </div>
        </section>
        <section className={styles.reference}>
          <Referenca />
          <About />
        </section>
        <div className={styles.slider}>
          <div className={styles.whiteBg}>
            <span className={styles.motoImage}>
              <img src='/4000kwp.png' />'
            </span>
          </div>
          <div className={styles.blog}>
            <h3>Latest from the blog</h3>
            <div className={styles.row1}>
              <span className={styles.blogImageContainer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem in neque ducimus repellendus dolores ipsam beatae
                </p>
                <img src='/trk.png' alt='' />
              </span>
              <span className={styles.blogImageContainer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolo
                </p>
                <img src='/tezak.png' alt='' />
              </span>
            </div>
            <div className={styles.row2}>
              <span className={styles.blogImageContainer}>
                <p>Lorem ipsum dolor sit amet con</p>
                <img src='/bici.png' alt='' />
              </span>
              <span className={styles.blogImageContainer}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem in neque
                </p>
                <img src='/crna.png' alt='' />
              </span>
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </>
    </div>
  );
}
