// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState, useEffect } from 'react';
import Description from './components/Description/Description.jsx';
import Feedback from './components/ Feedback/ Feedback.jsx';
import Options from './components/Options/Options.jsx';
import Notification from './components/ Notification/Notification.jsx';
import './App.css';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = JSON.parse(window.localStorage.getItem('feedbacks'));
    return savedFeedbacks || { good: 0, neutral: 0, bad: 0 };
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
    window.localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  return (
    <div className="app">
      <h1>Sip Happens Café</h1>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            feedbacks={feedbacks}
            totalFeedback={totalFeedback}
            positiveFeedbackPercentage={positiveFeedbackPercentage}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
