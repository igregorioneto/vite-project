import { useState } from "react";
import { Tweet } from "./components/Tweet";
import './App.css';
function App() {
  const [ tweets, setTweets ] = useState<string[]>([
    'Hello World',
    'Hello World',
    'Hello World'
  ])

  function createTweet () {
    setTweets([...tweets, "Hello World"])
  }

  return (
    <div>
      {tweets.map(tweet => {
        return <Tweet text={tweet} />
      })}

      <button 
        onClick={createTweet}
        style={{
          backgroundColor: '#8257e6',
          border: 0,
          padding: '6px 12px',
          color: '#fff',
          marginTop: '15px'
        }}
        >
          Adicionar Tweet
      </button>
    </div>
  );
}

export default App
