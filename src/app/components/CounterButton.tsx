"use client";
import { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me
      </button>
      <p className="mt-2">You clicked {count} times</p>
    </div>
  );
}