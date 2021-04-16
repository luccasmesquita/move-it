import { ExpirienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExpirienceBar />
      <section>
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  )
}