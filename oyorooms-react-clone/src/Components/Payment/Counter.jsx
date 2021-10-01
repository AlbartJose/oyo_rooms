import { useState, useEffect } from "react";

function Counter({ initTime, finalTime, setIsTimer }) {
  const [count, setCount] = useState(initTime);
  useEffect(() => {
    var countTime = setInterval(() => {
      setCount((prev) => {
        if (prev <= finalTime) {
          clearInterval(countTime);
          setIsTimer(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(countTime);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>00:{count < 10 ? <>0{count}</> : <>{count}</>}</div>
    </>
  );
}

export default Counter;
