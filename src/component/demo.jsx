import React, { useState } from "react";
export default function Index(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          props.aas(88);
        }}
      >
        change-count
      </button>
    </div>
  );
}
