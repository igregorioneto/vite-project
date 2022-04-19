import { useState } from "react";
import { Tweet } from "./components/Tweet";

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

      <button onClick={createTweet}>Adicionar Tweet</button>
    </div>
  );
}

export default App
