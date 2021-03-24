import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const porcentToNextLevel = Math.round(currentExperience * 100)/experienceToNextLevel;
  console.log("experienceToNextLevel>>", experienceToNextLevel)
  console.log("currentExperience>>", currentExperience)
  return (
    <header className={styles.experiendBar}>
      <span>0 px</span>
        <div>
          <div style={{width: `${porcentToNextLevel}%`}}>
            <span className={styles.currentExperience} style={{left: `${porcentToNextLevel}%`}}>
              {currentExperience} xp
            </span>
          </div>
        </div>
      <span>{experienceToNextLevel}px</span>
    </header>
  );
}