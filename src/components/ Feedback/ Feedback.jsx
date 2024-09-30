// src/components/Feedback/Feedback.jsx
import styles from './ Feedback.module.css';

const Feedback = ({ feedbacks }) => {
  return (
    <ul className={styles.feedbackList}>
      <li className={styles.feedbackItem}>Good: {feedbacks.good}</li>
      <li className={styles.feedbackItem}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.feedbackItem}>Bad: {feedbacks.bad}</li>
    </ul>
  );
};

export default Feedback;
