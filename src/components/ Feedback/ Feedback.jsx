import styles from './ Feedback.module.css';

const Feedback = ({ feedbacks, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>Good: {feedbacks.good}</li>
        <li className={styles.feedbackItem}>Neutral: {feedbacks.neutral}</li>
        <li className={styles.feedbackItem}>Bad: {feedbacks.bad}</li>
      </ul>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
