import { CompletedChallengens } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExpirienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Move.it</title>
      </Head>
      <ExpirienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallengens />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}
