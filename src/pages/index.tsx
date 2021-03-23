import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Contdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { ChallangeBox } from "../components/ChallangeBox";

import styles from '../styles/pages/Home.module.css';

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
          <ChallangeBox/>
        </div>
      </section>
    </div>
  )
}
