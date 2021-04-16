import styles from '../styles/components/CompletedChallengens.module.css'

export function CompletedChallengens() {
    return(
        <div className={styles.CompletedChallengensContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}