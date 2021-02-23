import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import { Contdown } from "../components/Countdown";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it-next</title>
      </Head>


      <ExperienceBar />

      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Contdown/>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}
