import React, { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className="z-0"> 
    <div className="">
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </div>
    </>);
}

export default Home;