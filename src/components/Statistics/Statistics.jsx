// src/components/Statistics/Statistics.jsx
import styles from './Statistics.module.css';

const Statistics = ({ totalFeedback, positivePercentage, resetFeedback }) => {
  return (
    <div className={styles.statistics}>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
      <button className={styles.resetButton} onClick={resetFeedback}>
        Reset
      </button>
    </div>
  );
};

export default Statistics;
