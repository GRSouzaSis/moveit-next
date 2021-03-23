import { useContext } from 'react';
import styles from '../components/ChallangeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallangeBox() {

  const { activeChallenge, resetChallenge } = useContext(ChallengesContext)  

  return (
    <div className={styles.challangeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challangeActive}>
          <header>{activeChallenge.amout}</header>
          <main>
            <img src={`icon/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button 
            type="button"
            className={styles.challengeFailedButton}
            onClick={resetChallenge}
            >
              Falhei
            </button>
            <button 
            type="button"
            className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challangeNotActive}>
          <strong>Finaliza um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.sgv" alt="Level up" />
        Avance de level completando desafios.
      </p>
        </div>
      )
      }

    </div>)
}