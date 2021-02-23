import styles from '../styles/components/Profile.module.css';


export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/GRSouzaSis.png" alt="Givaldo" />
      <div>
        <strong>Givaldo</strong>
        <p>
          <img src="icons/level.svg" alt="Icon Level" />
          Level 1000
        </p>
      </div>
    </div>
  )
}