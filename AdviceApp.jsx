import {useEffect, useState, useRef} from 'react'
import './AdviceApp.css'

const AdviceApp = () => {
  const [Advice, setAdvice] = useState("We'll give the first advice for you!");
  const [Count, setCount] = useState(0);
  const isFetched = useRef(false);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((count) => count+1);
  }
  useEffect(function() {
    if(!isFetched.current) {
      getAdvice();
      isFetched.current = true;
    }
  }, []);
  return (
    <>
      <div className="container">
        <h3>{Advice}</h3>
        <button onClick={getAdvice}>Get Advice</button>
        <Counter count={Count} />
      </div>
    </>
  )
} 
function Counter(props) {
  return (
    <p>You have read <b>{props.count}</b> pieces of advice</p>
  );
}
export default AdviceApp;
