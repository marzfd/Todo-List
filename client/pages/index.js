import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>TODO List App</title>
        <meta name="description" content="Web development project" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <div>
          <img src="/logo.svg" alt="Logo" />
          <h1>Manage Your Tasks</h1>
          <p>What should I do today?</p>
          <style jsx>
            {`
              p {
                font-family: 'Open Sans Condensed', sans-serif;
                font-size: calc(1em + 0.5vw);
                }
              @media (max-width: 768px) {
                p {
                  font-size: calc(0.8em + 0.5vw);
                }
              }
              @media (max-width: 480px) {
                div {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                }
              }
            `}
          </style>
          <button className={styles.btn} >Let's Start</button>
        </div>
        <div className={styles.doodleImg}>
          <Image src="/firstPage.png" alt="Doodles Stuff To DO" width={500} height={500} />
        </div>
      </main>

      <footer>
        <Image src="/logo.svg" alt="Logo" width={50} height={25} />
        &copy; 2022 Created by Marzieh !
      </footer>
    </div>
  )
}
