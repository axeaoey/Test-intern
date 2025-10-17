"use client";
export default function AlertButton() {
  return (
    <button
      onClick={() => alert("Button clicked!")}
      className="bg-green-500 text-white px-4 py-2 rounded"
    >
      Click for Alert
    </button>
  );
}