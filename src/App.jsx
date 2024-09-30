// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// src/App.jsx
import { useState, useEffect } from 'react';
import Feedback from './components/ Feedback/ Feedback.jsx';
import Options from './components/Options/Options.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Notification from './components/ Notification/Notification.jsx';
import './App.css';

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = type => {
    setFeedbacks(prevFeedbacks => ({
      ...prevFeedbacks,
      [type]: prevFeedbacks[type] + 1,
    }));
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedbacks.good / totalFeedback) * 100)
    : 0;

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem('feedbacks'));
    if (savedFeedbacks) {
      setFeedbacks(savedFeedbacks);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? (
        <>
          <Feedback feedbacks={feedbacks} />
          <Statistics
            totalFeedback={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
            resetFeedback={resetFeedback}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
