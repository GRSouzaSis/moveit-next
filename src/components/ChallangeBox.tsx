import styles from '../components/ChallangeBox.module.css';

export function ChallangeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challangeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challangeActive}>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icon/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante a faça alguma coisa</p>
          </main>
          <footer>
            <button 
            type="button"
            className={styles.challengeFailedButton}
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