import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    try {
    const response = await fetch("https://54c8dfcb-ed25-4c7d-9f75-fcfca328811c-00-272h8st32jy5s.riker.replit.dev/random");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote(data.quote);
      setAuthor(data.author);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Quote of the Day</h1>
      <p className="quote">"{quote}"</p>
      <p className="author">"{author}"</p>
    </div>
  );
}

export default App;
