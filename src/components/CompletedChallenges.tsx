import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/CompletedChallengens.module.css'

export function CompletedChallengens() {

    const { challengesCompleted } = useContext(ChallengesContext);
    
    return(
        <div className={styles.CompletedChallengensContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}