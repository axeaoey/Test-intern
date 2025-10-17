"use client";
import { useState, useEffect } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setSavedName(stored);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันหน้าเว็บ reload
    localStorage.setItem("username", name); // บันทึกลงใน localStorage
    setSavedName(name); // อัปเดต state ให้แสดงชื่อบนจอทันที
    setName("");  // ล้างช่อง input
  };

  return (
    <div className="p-4 border rounded">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {savedName && <p className="mt-2">Hello, {savedName}!</p>}
    </div>
  );
}