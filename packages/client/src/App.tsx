import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="p-4">
      <p className="font-bold text-3xl">{message}</p>
      <button className="p-3 rounded-2xl bg-gray-500">Click me</button>
    </div>
  );
}

export default App;
