import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-2 items-center flex-col">
      <p className="text-2xl">{count}</p>
      <button
        className="border rounded w-fit"
        onClick={() => setCount((count) => count + 1)}
      >
        CLick me
      </button>
    </div>
  );
};

export default Home;
